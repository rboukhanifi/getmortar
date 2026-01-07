import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DotBolt from '../components/DotBolt';
import { motion } from 'framer-motion';

const Solutions: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-white/30 overflow-x-hidden">
            <Navbar initialTextColor="text-white" />

            {/* Hero Section */}
            <section className="relative min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center items-center pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <DotBolt />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
                </div>

                <div className="max-w-5xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-mono mb-6 md:mb-8 backdrop-blur-md">
                            MORTAR SOLUTIONS
                        </span>
                        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 md:mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                            Built for the Builders.
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed font-light px-2">
                            Solve the hardest problems in construction with intelligence that adapts to your workflow.
                        </p>
                        <div className="flex justify-center px-4 sm:px-0">
                            <Link to="/get-started" className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors text-center">
                                Request Demo
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Solutions;
