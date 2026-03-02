import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CornerFrames from '../components/CornerFrames';

const CompanyIntro: React.FC = () => {
    const navigate = useNavigate();
    const [transitioning, setTransitioning] = useState(false);

    return (
        <div className="relative h-screen bg-white text-black selection:bg-black/20 overflow-hidden">
            <ParticleBackground color="#000000" transitioning={transitioning} onTransitionComplete={() => navigate('/company/mission')} />
            <Navbar />
            <CornerFrames color="light" />

            {/* Invisible click zone over the sphere */}
            {!transitioning && (
                <div
                    onClick={() => setTransitioning(true)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full z-20 cursor-pointer"
                />
            )}

            {/* Hero – inlined from Hero.tsx with "Our Mission" button */}
            <section className="absolute inset-0 flex items-center z-10">
                <div className="absolute inset-y-0 left-0 w-[65%] bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none" />
                <div className="relative max-w-2xl px-6 md:px-12 lg:px-24">
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

                </div>
            </section>

            <Footer variant="light" />
        </div>
    );
};

export default CompanyIntro;
