import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-start pt-32 px-4 text-center z-10 overflow-hidden">

            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8 relative z-20"
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
                className="relative z-20 text-6xl md:text-8xl font-heading font-bold tracking-tighter mb-6 max-w-5xl mx-auto text-black leading-[0.9]"
            >
                AI that builds<br />the World.
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative z-20 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
            >
                Build, connect, and scale intelligent workflows — all from one place.
                Predict delays and automate compliance for megaprojects.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative z-20 flex flex-col sm:flex-row gap-4 mb-20"
            >
                <button className="px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Get Started
                </button>
            </motion.div>
        </section>
    );
};

export default Hero;
