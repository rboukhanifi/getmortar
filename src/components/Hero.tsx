import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-start pt-24 md:pt-32 px-4 text-center z-10 overflow-hidden">

            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6 md:mb-8 relative z-20"
            >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-black/5 text-xs font-medium text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse"></span>
                    MORTAR INTELLIGENCE V2.0
                    <ArrowRight size={12} />
                </span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-20 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter mb-4 md:mb-6 max-w-5xl mx-auto text-black leading-[0.9]"
            >
                AI that builds<br />the World.
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative z-20 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-medium px-2"
            >
                Build, connect, and scale intelligent workflows — all from one place.
                Improve labor efficiency, predict delays, and automate compliance for megaprojects.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative z-20 flex flex-col sm:flex-row gap-4 mb-16 md:mb-20 w-full sm:w-auto px-4 sm:px-0"
            >
                <Link to="/get-started" className="px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center">
                    Get Started
                </Link>
            </motion.div>
        </section>
    );
};

export default Hero;
