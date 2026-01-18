import React from 'react';
import Navbar from '../components/Navbar';
import WhiteHoleBackground from '../components/WhiteHoleBackground';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Company: React.FC = () => {
    const team = [
        "Rayan Boukhanifi",
        "Themis Filippidis",
        "Muhammad Qodirov",
        "Frederick Khasanto",
        "Himanshu Rawat",
        "Ziqi Chen",
        "Ruby Zhu"
    ];

    return (
        <div className="relative h-screen bg-black text-white font-sans selection:bg-white/30 overflow-hidden">
            <Navbar />

            <div className="absolute inset-0 z-0">
                <WhiteHoleBackground />
            </div>

            <main className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6"
                    >
                        Build The World.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-sm md:text-base text-gray-400 leading-relaxed max-w-xl mb-12"
                    >
                        Mortar is building industrial autonomy with a long-term mission to bridge robotics and AI. We're a team of engineers and researchers developing state-of-the-art industrial site models and self-learning algorithms.
                    </motion.p>

                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-xs font-medium text-gray-500 tracking-wide mb-4">Team</h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-2">
                            {team.map((name, index) => (
                                <span
                                    key={index}
                                    className="text-sm md:text-base text-gray-300"
                                >
                                    {name}
                                </span>
                            ))}
                        </div>
                    </motion.section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Company;
