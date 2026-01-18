import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CornerFrames from '../components/CornerFrames';
import { motion } from 'framer-motion';

const GetStarted: React.FC = () => {
    return (
        <div className="relative h-screen bg-white text-black font-sans selection:bg-black/20 overflow-hidden">
            <Navbar />
            <CornerFrames color="light" />

            <main className="h-full flex flex-col items-center justify-center px-6 text-center">
                <div className="max-w-xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
                    >
                        Save millions on your projects
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-sm md:text-base text-gray-500 leading-relaxed mb-10"
                    >
                        We deploy an operations AI stack for industrial companies (construction, mining, oil & gas) that improves labor productivity, detects safety issues, and automates compliance. In 8 weeks, we signed $800K in contracts with multi-billion-dollar operators. Apply here to work with us—if you're a fit for a pilot, we'll reach out.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <a
                            href="mailto:team@mortar.cv"
                            className="inline-block px-8 py-4 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            Apply Here
                        </a>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default GetStarted;
