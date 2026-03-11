import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CornerFrames from '../components/CornerFrames';

const aegisImages = ['/aegisp1front.png', '/AEGISP1.png'];

// Preload images so they're cached before render
aegisImages.forEach(src => {
    const img = new Image();
    img.src = src;
});

const CyclingImage: React.FC<{ currentImage: number; className?: string; initial?: boolean }> = ({ currentImage, className, initial: isInitial }) => (
    <AnimatePresence mode="wait">
        <motion.img
            key={currentImage}
            src={aegisImages[currentImage]}
            alt="AEGIS P1 AR Glasses"
            initial={isInitial ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className={className}
        />
    </AnimatePresence>
);

const CompanyIntro: React.FC = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isInitial, setIsInitial] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [showSpecs, setShowSpecs] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % aegisImages.length);
            setIsInitial(false);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-screen overflow-y-auto snap-y snap-mandatory">
            <Navbar />

            {/* ── Section 1: Hero ── */}
            <section className="relative h-screen bg-white text-black selection:bg-black/20 overflow-hidden snap-start">
                <ParticleBackground color="#000000" />
                <CornerFrames color="light" />

                <div className="absolute inset-0 flex items-center z-10">
                    <div className="absolute inset-y-0 left-0 w-[85%] sm:w-[65%] bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none" />
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
                            className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-gray-400 italic"
                        >
                            (n.) /ˈmɔːr.tər/ : the bond that unites things, people and ideas into something stronger.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mt-4 sm:mt-6 text-sm md:text-base text-gray-600 leading-relaxed"
                        >
                            Mortar is building the hardware and data layer for physical AI.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="mt-3 sm:mt-4 text-sm md:text-base text-gray-500 leading-relaxed max-w-xl"
                        >
                            We develop wearable capture systems and collect multimodal first-person data to train robotics, embodied AI, and real-world foundation models.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
                        >
                            <a
                                href="https://cal.com/rayanboukhanifi/intro-meeting"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-6 sm:px-8 py-3 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors cursor-pointer text-center"
                            >
                                Request Sample Dataset
                            </a>
                            <button
                                onClick={() => document.getElementById('aegis')?.scrollIntoView({ behavior: 'smooth' })}
                                className="inline-block px-6 sm:px-8 py-3 border border-black text-black text-sm font-medium rounded-lg hover:bg-black hover:text-white transition-colors cursor-pointer text-center"
                            >
                                Deploy Hardware
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/* Supported by */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="absolute bottom-16 left-8 right-8 sm:bottom-10 z-10 flex items-center justify-start"
                >
                    <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-400 sm:text-gray-500">
                        Supported by
                        <span className="flex items-center">
                            <svg viewBox="0 0 570 64" className="h-3 sm:h-3.5 w-auto" fill="currentColor">
                                <path d="M139.492 12.9945H160.265V62.9392H173.525V12.9945H194.298V1.06077H139.492V12.9945Z" />
                                <path d="M116.066 44.3757L88.221 1.06077H73.1934V62.9392H86.011V19.6243L113.856 62.9392H128.884V1.06077H116.066V44.3757Z" />
                                <path d="M247.337 25.7238H218.166V1.06077H204.906V62.9392H218.166V37.6575H247.337V62.9392H260.597V1.06077H247.337V25.7238Z" />
                                <path d="M24.663 1.06077L0 62.9392H13.7901L18.834 49.9447H44.6365L49.6796 62.9392H63.4696L38.8066 1.06077H24.663ZM23.2946 38.453L31.7348 16.7072L40.175 38.453H23.2946Z" />
                                <path d="M370.475 0C352.619 0 339.978 13.2597 339.978 32.0884C339.978 50.7403 352.619 64 370.475 64C388.243 64 400.796 50.7403 400.796 32.0884C400.796 13.2597 388.243 0 370.475 0ZM370.475 51.6243C360.044 51.6243 353.68 44.1989 353.68 32.0884C353.68 19.8011 360.044 12.3757 370.475 12.3757C380.818 12.3757 387.094 19.8011 387.094 32.0884C387.094 44.1989 380.818 51.6243 370.475 51.6243Z" />
                                <path d="M555.845 42.1657C553.547 48.1768 548.95 51.6243 542.674 51.6243C532.243 51.6243 525.878 44.1989 525.878 32.0884C525.878 19.8011 532.243 12.3757 542.674 12.3757C548.95 12.3757 553.547 15.8232 555.845 21.8343H569.901C566.453 8.57459 556.11 0 542.674 0C524.818 0 512.177 13.2597 512.177 32.0884C512.177 50.7403 524.818 64 542.674 64C556.199 64 566.541 55.337 569.989 42.1657H555.845Z" />
                                <path d="M471.337 1.06077L496 62.9392H509.525L484.862 1.06077H471.337Z" />
                                <path d="M443.403 1.06077H413.171V62.9392H426.431V40.4862H443.403C457.459 40.4862 466.033 33.0608 466.033 20.7735C466.033 8.48619 457.459 1.06077 443.403 1.06077ZM442.784 28.5525H426.431V12.9945H442.784C449.326 12.9945 452.773 15.6464 452.773 20.7735C452.773 25.9006 449.326 28.5525 442.784 28.5525Z" />
                                <path d="M329.812 19.8895C329.812 8.22099 321.238 1.06077 307.182 1.06077H276.95V62.9392H290.21V38.7182H304.971L318.232 62.9392H332.906L318.223 36.8734C325.593 34.0402 329.812 28.0743 329.812 19.8895ZM290.21 12.9945H306.564C313.105 12.9945 316.552 15.3812 316.552 19.8895C316.552 24.3978 313.105 26.7845 306.564 26.7845H290.21V12.9945Z" />
                            </svg>
                        </span>
                        <span>&</span>
                        <a
                            href="https://www.nvidia.com/en-us/startups/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity flex items-center"
                        >
                            <img src="/logos/nvidia.png" alt="NVIDIA Inception Program" className="h-4 sm:h-5 w-auto" />
                        </a>
                    </div>
                </motion.div>

                {/* Scroll hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
                    onClick={() => document.getElementById('aegis')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    <motion.span
                        animate={{ y: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        className="text-xs tracking-widest uppercase text-black"
                    >
                        Scroll Down
                    </motion.span>
                </motion.div>
            </section>

            {/* ── Section 2: AEGIS P1 ── */}
            <section id="aegis" className="relative h-screen bg-black text-white font-sans selection:bg-white/20 overflow-hidden snap-start">
                <CornerFrames color="dark" />

                {/* Mobile Layout */}
                <main className="relative z-10 h-full flex flex-col justify-center px-6 pt-16 pb-12 lg:hidden">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-xs uppercase tracking-widest text-gray-400 mb-1"
                    >
                        AR Glass
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl font-normal tracking-tight mb-2"
                    >
                        AEGIS P1
                    </motion.h2>

                    {/* Mobile Image */}
                    <div className="relative h-64 sm:h-72 my-2">
                        <CyclingImage currentImage={currentImage} initial={isInitial} className="absolute inset-0 w-full h-full object-contain" />
                    </div>

                    {/* Pre-order Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-1 mb-3 flex justify-center"
                    >
                        <button
                            onClick={() => setShowModal(true)}
                            className="px-6 py-3 bg-white text-black font-semibold text-sm tracking-wide hover:bg-gray-200 transition-colors cursor-pointer"
                        >
                            Pre-order
                        </button>
                    </motion.div>

                    {/* First paragraph - always visible */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="text-sm leading-snug text-white"
                    >
                        <p>
                            AEGIS P1 is a passive stereo capture system engineered around the geometry
                            of human vision. With Two global-shutter 8 MP sensors capture high-speed
                            RGBD video at 1080p, 60 fps, without rolling-shutter distortion.
                        </p>
                    </motion.div>

                    {/* Specs toggle */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <button
                            onClick={() => setShowSpecs(!showSpecs)}
                            className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors mt-3 mb-2 cursor-pointer"
                        >
                            <motion.span
                                animate={{ rotate: showSpecs ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ChevronDown size={16} />
                            </motion.span>
                            Specs
                        </button>

                        <AnimatePresence>
                            {showSpecs && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="space-y-3 text-sm leading-snug text-white px-2 pb-2">
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
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </main>

                {/* Desktop Layout */}
                <main className="relative z-10 h-full hidden lg:flex items-center px-6 md:px-10 lg:px-16 pt-20 pb-14">
                    <div className="w-full">
                        <div className="grid grid-cols-[45fr_55fr] gap-10 items-center">
                            {/* Left: Cycling Product Image */}
                            <div className="relative flex items-center justify-center">
                                <CyclingImage currentImage={currentImage} initial={isInitial} className="w-full object-contain scale-110" />
                            </div>

                            {/* Right: Text Content */}
                            <div>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="text-xs uppercase tracking-widest text-gray-400 mb-1"
                                >
                                    AR Glass
                                </motion.p>

                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-5"
                                >
                                    AEGIS P1
                                </motion.h2>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="space-y-6 text-lg leading-relaxed text-white"
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
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
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
                        </div>
                    </div>
                </main>

                <Footer variant="dark" />
            </section>

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
                            className="relative bg-white text-black w-full max-w-lg p-6 lg:p-8"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-4 right-4 p-1 text-gray-400 hover:text-black transition-colors cursor-pointer"
                            >
                                <X size={24} />
                            </button>

                            {/* Modal Header */}
                            <h2 className="text-xl lg:text-2xl font-bold mb-1">Mortar AEGIS P1 Pre-order</h2>
                            <p className="text-gray-500 text-sm lg:text-base mb-6">Complete your purchase</p>

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
                                    <span className="text-lg font-semibold">$ 398.99</span>
                                </div>
                            </div>

                            {/* Pre-order CTA */}
                            <a
                                href="https://buy.stripe.com/5kQdRabQVcg1gA6dmL7IY00"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-4 bg-black text-white text-center font-semibold text-lg hover:bg-gray-900 transition-colors"
                            >
                                Pre-order Now - $ 398.99
                            </a>

                            <p className="text-center text-gray-400 text-sm mt-3">Ships in April 2026</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CompanyIntro;
