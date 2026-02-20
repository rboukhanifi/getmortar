import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section className="absolute inset-0 flex items-center px-6 md:px-12 lg:px-24 z-10">
            <div className="max-w-2xl">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-bold tracking-tight text-black leading-[1]"
                >
                    Mortar
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mt-3 text-sm md:text-base text-gray-400 italic"
                >
                    (n.) /ˈmɔːr.tər/ : the bond that unites things, people and ideas into something stronger.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-6 text-sm md:text-base text-gray-600 leading-relaxed"
                >
                    Mortar makes sure that every human experience is valuable.
                </motion.p>

                <motion.ol
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-6 space-y-2 text-sm md:text-base text-gray-500 leading-relaxed"
                >
                    <li className="flex gap-2">
                        <span className="text-black font-medium shrink-0">1.</span>
                        Manufacturing of Hardware for Enterprise Data Collection
                    </li>
                    <li className="flex gap-2">
                        <span className="text-black font-medium shrink-0">2.</span>
                        Operational advancement of the industrial world by using Enterprise Data to boost operations.
                    </li>
                    <li className="flex gap-2">
                        <span className="text-black font-medium shrink-0">3.</span>
                        Labelling of Data for dedicated models and training of foundational models.
                    </li>
                </motion.ol>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-8"
                >
                    <Link
                        to="/get-started"
                        className="inline-block px-8 py-3 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
                    >
                        Get Started
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
