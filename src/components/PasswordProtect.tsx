import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, AlertCircle, ShieldX } from 'lucide-react';

interface PasswordProtectProps {
    children: React.ReactNode;
    password: string;
    storageKey?: string;
}

const PasswordProtect = ({ children, password, storageKey = 'paper-access' }: PasswordProtectProps) => {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [isLockedOut, setIsLockedOut] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [attempts, setAttempts] = useState(0);
    const [error, setError] = useState('');
    const [shake, setShake] = useState(false);

    useEffect(() => {
        const unlocked = localStorage.getItem(`${storageKey}-unlocked`);
        const lockedOut = localStorage.getItem(`${storageKey}-locked-out`);
        const savedAttempts = localStorage.getItem(`${storageKey}-attempts`);

        if (unlocked === 'true') {
            setIsUnlocked(true);
        }
        if (lockedOut === 'true') {
            setIsLockedOut(true);
        }
        if (savedAttempts) {
            setAttempts(parseInt(savedAttempts, 10));
        }
    }, [storageKey]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (inputValue === password) {
            setIsUnlocked(true);
            localStorage.setItem(`${storageKey}-unlocked`, 'true');
            setError('');
        } else {
            const newAttempts = attempts + 1;
            setAttempts(newAttempts);
            localStorage.setItem(`${storageKey}-attempts`, newAttempts.toString());

            setShake(true);
            setTimeout(() => setShake(false), 500);

            if (newAttempts >= 3) {
                setIsLockedOut(true);
                localStorage.setItem(`${storageKey}-locked-out`, 'true');
            } else {
                setError(`Incorrect password. ${3 - newAttempts} attempt${3 - newAttempts === 1 ? '' : 's'} remaining.`);
            }

            setInputValue('');
        }
    };

    if (isUnlocked) {
        return <>{children}</>;
    }

    return (
        <div className="relative min-h-screen">
            {/* Blurred background content */}
            <div className="blur-lg pointer-events-none select-none" aria-hidden="true">
                {children}
            </div>

            {/* Modal overlay */}
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            x: shake ? [0, -10, 10, -10, 10, 0] : 0
                        }}
                        transition={{
                            duration: 0.3,
                            x: { duration: 0.4 }
                        }}
                        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
                    >
                        {/* Header gradient */}
                        <div className="h-2 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900" />

                        <div className="p-8">
                            {isLockedOut ? (
                                /* Locked out state */
                                <div className="text-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: 'spring', damping: 15 }}
                                        className="w-20 h-20 mx-auto mb-6 bg-red-50 rounded-full flex items-center justify-center"
                                    >
                                        <ShieldX className="w-10 h-10 text-red-500" />
                                    </motion.div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                                        Access Denied
                                    </h2>
                                    <p className="text-gray-500 leading-relaxed">
                                        Too many failed attempts. Access to this document has been restricted.
                                    </p>
                                </div>
                            ) : (
                                /* Password form */
                                <>
                                    <div className="text-center mb-8">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: 'spring', damping: 15, delay: 0.1 }}
                                            className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center"
                                        >
                                            <Lock className="w-10 h-10 text-gray-700" />
                                        </motion.div>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                            Protected Content
                                        </h2>
                                        <p className="text-gray-500">
                                            Enter the password to access this document.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit}>
                                        <div className="relative mb-4">
                                            <input
                                                type="password"
                                                value={inputValue}
                                                onChange={(e) => {
                                                    setInputValue(e.target.value);
                                                    setError('');
                                                }}
                                                placeholder="Enter password"
                                                className={`w-full px-5 py-4 bg-gray-50 border-2 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white transition-all ${
                                                    error
                                                        ? 'border-red-300 focus:border-red-400'
                                                        : 'border-gray-200 focus:border-gray-900'
                                                }`}
                                                autoFocus
                                            />
                                        </div>

                                        <AnimatePresence>
                                            {error && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="flex items-center gap-2 text-red-500 text-sm mb-4"
                                                >
                                                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                                    <span>{error}</span>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        <button
                                            type="submit"
                                            className="w-full py-4 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 active:scale-[0.98] transition-all"
                                        >
                                            Unlock Document
                                        </button>
                                    </form>

                                    {/* Attempt indicator */}
                                    <div className="mt-6 flex justify-center gap-2">
                                        {[0, 1, 2].map((i) => (
                                            <div
                                                key={i}
                                                className={`w-2 h-2 rounded-full transition-colors ${
                                                    i < attempts ? 'bg-red-400' : 'bg-gray-200'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default PasswordProtect;
