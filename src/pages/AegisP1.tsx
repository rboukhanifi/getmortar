import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CornerFrames from '../components/CornerFrames';

const images = ['/aegisp1front.png', '/AEGISP1.png'];

const AegisP1: React.FC = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-screen bg-black text-white font-sans selection:bg-white/20 overflow-hidden">
            <Navbar />
            <CornerFrames color="dark" />

            <main className="relative z-10 h-full flex items-center px-6 md:px-10 lg:px-16 pt-20 pb-14">
                <div className="w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-6 lg:gap-10 items-center">
                        {/* Left: Text Content */}
                        <div>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-xs uppercase tracking-widest text-gray-400 mb-1"
                            >
                                AR Glass
                            </motion.p>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-3"
                            >
                                AEGIS P1
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="space-y-4 text-lg leading-snug text-white font-bold"
                            >
                                <p>
                                    AEGIS P1 is a passive stereo capture system engineered around the geometry
                                    of human vision. With Two global-shutter 8 MP sensors capture high-speed
                                    RGBD video at 1080p, 60 fps, without rolling-shutter distortion.
                                </p>

                                <p>
                                    Each module provides a 120&deg; diagonal field of view, ensuring wide
                                    environmental coverage while maintaining strong stereo overlap for reliable
                                    depth estimation.
                                </p>

                                <p>
                                    To maintain depth stability during motion, an 6-axis IMU is integrated,
                                    tightly fused with visual data at ultra-low latency. This reduces motion
                                    artifacts and preserves temporal coherence for downstream robotics training
                                    and evaluation.
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
                                className="mt-5"
                            >
                                <button
                                    onClick={() => setShowModal(true)}
                                    className="px-6 py-3 bg-white text-black font-semibold text-sm tracking-wide hover:bg-gray-200 transition-colors cursor-pointer"
                                >
                                    Pre-order
                                </button>
                            </motion.div>
                        </div>

                        {/* Right: Cycling Product Image */}
                        <div className="relative flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentImage}
                                    src={images[currentImage]}
                                    alt="AEGIS P1 AR Glasses"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-full object-contain scale-110"
                                />
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </main>

            <Footer variant="dark" />

            {/* Pre-order Modal */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center px-4"
                    >
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => setShowModal(false)}
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.25 }}
                            className="relative bg-white text-black w-full max-w-lg p-8"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-4 right-4 p-1 text-gray-400 hover:text-black transition-colors cursor-pointer"
                            >
                                <X size={24} />
                            </button>

                            {/* Modal Header */}
                            <h2 className="text-2xl font-bold mb-1">Mortar AEGIS P1 Pre-order</h2>
                            <p className="text-gray-500 mb-6">Complete your purchase</p>

                            <hr className="border-gray-200 mb-6" />

                            {/* Product Card */}
                            <div className="border-2 border-black rounded-sm p-5 mb-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src="/aegisp1front.png"
                                        alt="AEGIS P1"
                                        className="w-16 h-12 object-contain"
                                    />
                                    <div>
                                        <p className="font-semibold text-lg">Mortar AEGIS P1</p>
                                        <p className="text-gray-500 text-sm">Intelligent Human to Robot Vision Glass Camera</p>
                                    </div>
                                </div>

                                <hr className="border-gray-200 mb-4" />

                                <div className="flex items-center justify-between">
                                    <span className="font-medium">Price:</span>
                                    <span className="text-lg font-semibold">$ 298.99</span>
                                </div>
                            </div>

                            {/* Pre-order CTA */}
                            <a
                                href="https://buy.stripe.com/5kQdRabQVcg1gA6dmL7IY00"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-4 bg-black text-white text-center font-semibold text-lg hover:bg-gray-900 transition-colors"
                            >
                                Pre-order Now - $ 298.99
                            </a>

                            <p className="text-center text-gray-400 text-sm mt-3">Ships in April 2026</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AegisP1;
