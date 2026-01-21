import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';

const SensorParadox = () => {
    const [inputValue, setInputValue] = useState('');
    const [attempts, setAttempts] = useState(0);
    const [error, setError] = useState('');
    const [shake, setShake] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // This paper has no solution - always fail
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);

        setShake(true);
        setTimeout(() => setShake(false), 500);

        setError('Incorrect password.');
        setInputValue('');
    };

    return (
        <div className="relative min-h-screen bg-white text-black overflow-hidden">
            <Navbar />

            <div className="fixed inset-0 z-40 bg-white flex items-center justify-center p-4 pt-20">
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            x: shake ? [0, -10, 10, -10, 10, 0] : 0
                        }}
                        transition={{
                            duration: 0.3,
                            x: { duration: 0.4 }
                        }}
                        className="w-full max-w-sm"
                    >
                        <div className="text-center mb-8">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', damping: 15, delay: 0.1 }}
                                className="w-16 h-16 mx-auto mb-8 border-2 border-gray-200 rounded-full flex items-center justify-center"
                            >
                                <Lock className="w-7 h-7 text-gray-400" />
                            </motion.div>
                            <h2 className="text-xl font-medium text-gray-900 mb-2">
                                Protected
                            </h2>
                            <p className="text-sm text-gray-500">
                                Enter password to continue
                            </p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <input
                                type="password"
                                value={inputValue}
                                onChange={(e) => {
                                    setInputValue(e.target.value);
                                    setError('');
                                }}
                                placeholder="Password"
                                className={`w-full px-4 py-3 border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none transition-colors ${
                                    error
                                        ? 'border-red-300 focus:border-red-400'
                                        : 'border-gray-200 focus:border-gray-400'
                                }`}
                                autoFocus
                                autoComplete="off"
                            />

                            <AnimatePresence>
                                {error && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="flex items-center gap-2 text-red-500 text-xs mt-3"
                                    >
                                        <AlertCircle className="w-3 h-3 flex-shrink-0" />
                                        <span>{error}</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <button
                                type="submit"
                                className="w-full mt-4 py-3 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 active:scale-[0.98] transition-all"
                            >
                                Unlock
                            </button>
                        </form>

                        {/* Attempt indicator - infinite dots that keep filling */}
                        <div className="mt-8 flex justify-center gap-1.5">
                            {[0, 1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                        i < (attempts % 6) ? 'bg-red-400' : 'bg-gray-200'
                                    }`}
                                />
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default SensorParadox;
