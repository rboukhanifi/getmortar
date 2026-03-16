import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'fs';
import { join, basename } from 'path';
import { randomBytes, pbkdf2Sync, createCipheriv } from 'crypto';

const PASSWORD = 'mortar100m';
const ITERATIONS = 600_000;
const KEY_LEN = 32; // AES-256
const IV_LEN = 12; // GCM standard
const SALT_LEN = 16;
const DIGEST = 'sha256';

const DATA_DIR = join(process.cwd(), 'data room');
const OUT_DIR = join(process.cwd(), 'public', 'dataroom');

// Map filenames to slugs, display names, and categories
const FILE_MAP = [
  { match: 'Certificate of Incorporation', slug: 'certificate-of-incorporation', name: 'Certificate of Incorporation', category: 'Incorporation' },
  { match: 'Action of Incorporator', slug: 'action-of-incorporator', name: 'Action of Incorporator', category: 'Incorporation' },
  { match: 'Post-Incorporation Setup - Board Consent', slug: 'board-consent-post-incorporation', name: 'Board Consent (Post-Incorporation)', category: 'Incorporation' },
  { match: 'Bylaws', slug: 'bylaws', name: 'Bylaws', category: 'Incorporation' },
  { match: 'Notice of Stock Issuance', slug: 'notice-of-stock-issuance', name: 'Notice of Stock Issuance', category: 'Stock & Equity' },
  { match: 'Restricted Stock Purchase Agreement', slug: 'restricted-stock-purchase-agreement', name: 'Restricted Stock Purchase Agreement', category: 'Stock & Equity' },
  { match: 'Stock Plan Adoption - Board Consent', slug: 'stock-plan-board-consent', name: 'Stock Plan — Board Consent', category: 'Stock & Equity' },
  { match: 'Stock Plan Adoption - Stockholder Consent', slug: 'stock-plan-stockholder-consent', name: 'Stock Plan — Stockholder Consent', category: 'Stock & Equity' },
  { match: 'Confidential Information', slug: 'confidential-info-invention-assignment', name: 'Confidential Information & Invention Assignment', category: 'Agreements' },
  { match: 'Board Approval - Written Consent for Safe', slug: 'board-consent-safe-financing', name: 'Board Consent for SAFE Financing', category: 'Agreements' },
  { match: 'Simple Agreement for Future Equity', slug: 'safe-agreement-genius-ventures', name: 'SAFE Agreement — Genius Ventures', category: 'Agreements' },
  { match: 'Dataset Purchase', slug: 'dataset-purchase-delivery-agreement', name: 'Dataset Purchase & Delivery Agreement', category: 'Agreements' },
  { match: 'tax franchise', slug: 'ca-franchise-tax-2026', name: 'CA Franchise Tax 2026', category: 'Tax' },
];

function encrypt(data, password) {
  const salt = randomBytes(SALT_LEN);
  const iv = randomBytes(IV_LEN);
  const key = pbkdf2Sync(password, salt, ITERATIONS, KEY_LEN, DIGEST);

  const cipher = createCipheriv('aes-256-gcm', key, iv);
  const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
  const tag = cipher.getAuthTag();

  return {
    salt: salt.toString('base64'),
    iv: iv.toString('base64'),
    ciphertext: Buffer.concat([encrypted, tag]).toString('base64'),
  };
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

// Main
if (!existsSync(DATA_DIR)) {
  console.error(`Error: "${DATA_DIR}" not found.`);
  process.exit(1);
}

if (!existsSync(OUT_DIR)) {
  mkdirSync(OUT_DIR, { recursive: true });
}

const files = readdirSync(DATA_DIR).filter(f => f.toLowerCase().endsWith('.pdf'));
console.log(`Found ${files.length} PDFs in "data room/"\n`);

const manifest = [];

for (const file of files) {
  const mapping = FILE_MAP.find(m => file.includes(m.match));
  if (!mapping) {
    console.warn(`  SKIP: No mapping for "${file}"`);
    continue;
  }

  const filePath = join(DATA_DIR, file);
  const data = readFileSync(filePath);
  const encrypted = encrypt(data, PASSWORD);

  writeFileSync(join(OUT_DIR, `${mapping.slug}.enc`), JSON.stringify(encrypted));
  console.log(`  OK: ${mapping.slug}.enc (${formatSize(data.length)})`);

  manifest.push({
    slug: mapping.slug,
    name: mapping.name,
    category: mapping.category,
    size: formatSize(data.length),
  });
}

// Create sentinel verify.enc for password verification
const sentinel = Buffer.from('MORTAR_DATAROOM_VERIFIED');
const verifyEnc = encrypt(sentinel, PASSWORD);
writeFileSync(join(OUT_DIR, 'verify.enc'), JSON.stringify(verifyEnc));
console.log(`  OK: verify.enc (sentinel)`);

// Write manifest
const categoryOrder = ['Incorporation', 'Stock & Equity', 'Agreements', 'Tax'];
manifest.sort((a, b) => categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category));
writeFileSync(join(OUT_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2));
console.log(`  OK: manifest.json (${manifest.length} files)\n`);

console.log('Encryption complete.');
