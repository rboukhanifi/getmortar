import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CornerFrames from '../components/CornerFrames';

const AegisP1: React.FC = () => {
    return (
        <div className="relative min-h-screen bg-black text-white font-sans selection:bg-white/20">
            <Navbar />
            <CornerFrames color="dark" />

            <main className="relative z-10 pt-28 pb-24 px-6 md:px-12 lg:px-24">
                {/* Hero Section */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        {/* Left: Text Content */}
                        <div>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-sm uppercase tracking-widest text-gray-400 mb-3"
                            >
                                AR Glass
                            </motion.p>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
                            >
                                AEGIS P1
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="space-y-6 text-base md:text-lg leading-relaxed text-gray-300 max-w-xl"
                            >
                                <p>
                                    Our AEGIS P1 AR Glasses is a passive stereo capture system engineered
                                    around the geometry of human vision, because the tasks robots must learn
                                    are the tasks humans already perform.
                                </p>

                                <p>
                                    Two global-shutter 8 MP sensors capture high-speed RGBD video at 1080p,
                                    60 fps, preserving motion fidelity without rolling-shutter distortion. The
                                    stereo pair is integrated into a compact, enterprise-grade AR glasses form
                                    factor, delivering depth perception that mirrors how humans perceive and
                                    interact with their environment.
                                </p>

                                <p>
                                    Each module provides a 120&deg; diagonal field of view, ensuring wide
                                    environmental coverage while maintaining strong stereo overlap for reliable
                                    depth estimation.
                                </p>

                                <p>
                                    To maintain depth stability during motion, AEGIS P1 integrates a 6-axis
                                    IMU, tightly fused with visual data at ultra-low latency. This reduces
                                    motion artifacts and preserves temporal coherence for downstream robotics
                                    training and evaluation.
                                </p>

                                <p>
                                    We built with the idea of having hands-free, human-perspective data
                                    collection operating across multiple users and environments. Synchronized
                                    stereo and inertial streams are captured and processed directly on the
                                    PCB, enabling efficient acquisition, structured output, and repeatable
                                    datasets at industrial scale for robot learning.
                                </p>
                            </motion.div>

                            {/* Pre-order Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.35 }}
                                className="mt-10"
                            >
                                <a
                                    href="mailto:team@mortar.cv?subject=AEGIS P1 Pre-order"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold text-sm tracking-wide hover:bg-gray-200 transition-colors"
                                >
                                    Pre-order
                                    <span className="text-gray-500">$298.99</span>
                                </a>
                            </motion.div>
                        </div>

                        {/* Right: Product Images */}
                        <div className="flex flex-col gap-8 lg:pt-12">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/aegisp1front.png"
                                    alt="AEGIS P1 AR Glasses — front view"
                                    className="w-full object-contain"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <img
                                    src="/AEGISP1.png"
                                    alt="AEGIS P1 AR Glasses — perspective view"
                                    className="w-full object-contain"
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* Specs Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-24 border-t border-white/10 pt-12"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div>
                                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Resolution</p>
                                <p className="text-lg font-medium">8 MP &middot; 1080p</p>
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Frame Rate</p>
                                <p className="text-lg font-medium">60 fps</p>
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Field of View</p>
                                <p className="text-lg font-medium">120&deg; diagonal</p>
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">IMU</p>
                                <p className="text-lg font-medium">6-axis</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer variant="dark" />
        </div>
    );
};

export default AegisP1;
