import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Company: React.FC = () => {
    const teamMembers = [
        "Themis Filippidis",
        "Muhammad Qodirov",
        "Frederick Khasanto",
        "Himanshu Rawat",
        "Ziqi Chen",
        "Ruby Zhu"
    ];

    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-black/20">
            <Navbar />

            <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight mb-8"
                    >
                        Company
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mb-20"
                    >
                        Mortar is building industrial autonomy with a long-term mission to bridge robotics and AI. We're a team of engineers and researchers developing state-of-the-art industrial site models and self-learning algorithms.
                    </motion.p>

                    {/* Team Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-sm font-medium text-gray-400 tracking-wide mb-8">Team</h2>

                        <div className="mb-10">
                            <span className="text-2xl md:text-3xl font-medium text-black">
                                Rayan Boukhanifi
                            </span>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
                            {teamMembers.map((name, index) => (
                                <span
                                    key={index}
                                    className="text-base md:text-lg text-gray-600"
                                >
                                    {name}
                                </span>
                            ))}
                        </div>
                    </motion.section>
                </div>
            </main>

            <Footer variant="light" />
        </div>
    );
};

export default Company;
