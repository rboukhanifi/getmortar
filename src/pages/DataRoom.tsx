import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, FileText, Eye, Download, Loader2, ShieldAlert } from 'lucide-react';
import { verifyPassword, decryptFile, getCachedPassword } from '../utils/crypto';

interface ManifestEntry {
  slug: string;
  name: string;
  category: string;
  size: string;
}

const MAX_ATTEMPTS = 5;
const ATTEMPTS_KEY = 'dataroom_attempts';

function getAttempts(): number {
  return parseInt(sessionStorage.getItem(ATTEMPTS_KEY) || '0', 10);
}

function setAttempts(n: number) {
  sessionStorage.setItem(ATTEMPTS_KEY, String(n));
}

const DataRoom: React.FC = () => {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);
  const [checking, setChecking] = useState(false);
  const [locked, setLocked] = useState(getAttempts() >= MAX_ATTEMPTS);
  const [manifest, setManifest] = useState<ManifestEntry[]>([]);
  const [loadingSlug, setLoadingSlug] = useState<string | null>(null);

  useEffect(() => {
    if (unlocked) {
      fetch('/dataroom/manifest.json')
        .then(r => r.json())
        .then(setManifest)
        .catch(() => setError('Failed to load file list.'));
    }
  }, [unlocked]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (locked || checking) return;

    setError('');
    setChecking(true);

    const valid = await verifyPassword(password);

    if (valid) {
      setUnlocked(true);
      setAttempts(0);
    } else {
      const attempts = getAttempts() + 1;
      setAttempts(attempts);
      const remaining = MAX_ATTEMPTS - attempts;

      if (remaining <= 0) {
        setLocked(true);
        setError('Too many failed attempts. Close this tab to try again.');
      } else {
        setError(`Incorrect password. ${remaining} attempt${remaining === 1 ? '' : 's'} remaining.`);
      }

      setShake(true);
      setTimeout(() => setShake(false), 600);
    }

    setChecking(false);
  };

  const handleView = async (slug: string) => {
    const pw = getCachedPassword();
    if (!pw) return;
    setLoadingSlug(slug);
    try {
      const blob = await decryptFile(slug, pw);
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    } catch {
      setError('Failed to decrypt file.');
    }
    setLoadingSlug(null);
  };

  const handleDownload = async (slug: string, name: string) => {
    const pw = getCachedPassword();
    if (!pw) return;
    setLoadingSlug(slug);
    try {
      const blob = await decryptFile(slug, pw);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${name}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {
      setError('Failed to decrypt file.');
    }
    setLoadingSlug(null);
  };

  // Group by category
  const categories = ['Incorporation', 'Stock & Equity', 'Agreements', 'Tax'];
  const grouped = categories.map(cat => ({
    category: cat,
    files: manifest.filter(f => f.category === cat),
  })).filter(g => g.files.length > 0);

  if (!unlocked) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <motion.div
          animate={shake ? { x: [0, -12, 12, -12, 12, -6, 6, 0] } : {}}
          transition={{ duration: 0.5 }}
          className="w-full max-w-sm"
        >
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-full border border-neutral-700 flex items-center justify-center mb-6">
              {locked ? (
                <ShieldAlert className="w-7 h-7 text-red-500" />
              ) : (
                <Lock className="w-7 h-7 text-neutral-400" />
              )}
            </div>
            <h1 className="text-white text-xl font-light tracking-wide">Data Room</h1>
            <p className="text-neutral-500 text-sm mt-2">Enter password to access documents</p>
          </div>

          {locked ? (
            <div className="text-center">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
                autoFocus
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
              />
              <button
                type="submit"
                disabled={checking || !password}
                className="w-full bg-white text-black font-medium text-sm rounded-lg py-3 hover:bg-neutral-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {checking ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  'Unlock'
                )}
              </button>
              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-4 py-16 sm:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-2xl font-light tracking-wide">Data Room</h1>
          <p className="text-neutral-500 text-sm mt-2">Mortar Vault, Inc. — Confidential</p>
        </div>

        {error && <p className="text-red-400 text-sm mb-6">{error}</p>}

        <div className="space-y-10">
          {grouped.map(({ category, files }) => (
            <div key={category}>
              <h2 className="text-xs font-medium tracking-widest uppercase text-neutral-500 mb-4 border-b border-neutral-800 pb-2">
                {category}
              </h2>
              <div className="space-y-1">
                {files.map(file => {
                  const isLoading = loadingSlug === file.slug;
                  return (
                    <div
                      key={file.slug}
                      className="flex items-center justify-between py-3 px-3 rounded-lg hover:bg-neutral-900/60 transition-colors group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <FileText className="w-4 h-4 text-neutral-600 flex-shrink-0" />
                        <div className="min-w-0">
                          <p className="text-sm text-neutral-200 truncate">{file.name}</p>
                          <p className="text-xs text-neutral-600">{file.size}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0 ml-4">
                        <button
                          onClick={() => handleView(file.slug)}
                          disabled={isLoading}
                          className="p-2 rounded-md hover:bg-neutral-800 text-neutral-500 hover:text-white transition-colors disabled:opacity-40"
                          title="View"
                        >
                          {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Eye className="w-4 h-4" />}
                        </button>
                        <button
                          onClick={() => handleDownload(file.slug, file.name)}
                          disabled={isLoading}
                          className="p-2 rounded-md hover:bg-neutral-800 text-neutral-500 hover:text-white transition-colors disabled:opacity-40"
                          title="Download"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataRoom;
