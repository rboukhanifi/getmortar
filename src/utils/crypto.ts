const ITERATIONS = 600_000;
const KEY_LEN = 256; // bits
const DIGEST = 'SHA-256';

interface EncryptedPayload {
  salt: string;
  iv: string;
  ciphertext: string;
}

function base64ToBytes(b64: string): Uint8Array<ArrayBuffer> {
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes as Uint8Array<ArrayBuffer>;
}

async function deriveKey(password: string, salt: Uint8Array<ArrayBuffer>): Promise<CryptoKey> {
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    enc.encode(password),
    'PBKDF2',
    false,
    ['deriveKey']
  );

  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt,
      iterations: ITERATIONS,
      hash: DIGEST,
    },
    keyMaterial,
    { name: 'AES-GCM', length: KEY_LEN },
    false,
    ['decrypt']
  );
}

async function decryptPayload(payload: EncryptedPayload, password: string): Promise<ArrayBuffer> {
  const salt = base64ToBytes(payload.salt);
  const iv = base64ToBytes(payload.iv);
  const ciphertext = base64ToBytes(payload.ciphertext);

  const key = await deriveKey(password, salt);

  return crypto.subtle.decrypt(
    { name: 'AES-GCM', iv },
    key,
    ciphertext
  );
}

let _cachedPassword: string | null = null;

export async function verifyPassword(password: string): Promise<boolean> {
  try {
    const res = await fetch('/dataroom/verify.enc');
    if (!res.ok) return false;
    const payload: EncryptedPayload = await res.json();
    const decrypted = await decryptPayload(payload, password);
    const text = new TextDecoder().decode(decrypted);
    if (text === 'MORTAR_DATAROOM_VERIFIED') {
      _cachedPassword = password;
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

export function getCachedPassword(): string | null {
  return _cachedPassword;
}

export async function decryptFile(slug: string, password: string): Promise<Blob> {
  const res = await fetch(`/dataroom/${slug}.enc`);
  if (!res.ok) throw new Error(`Failed to fetch ${slug}.enc`);
  const payload: EncryptedPayload = await res.json();
  const decrypted = await decryptPayload(payload, password);
  return new Blob([decrypted], { type: 'application/pdf' });
}

export function clearSession(): void {
  _cachedPassword = null;
}
