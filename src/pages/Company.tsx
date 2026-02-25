import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import WhiteHoleBackground from '../components/WhiteHoleBackground';
import Footer from '../components/Footer';
import CornerFrames from '../components/CornerFrames';
import { motion } from 'framer-motion';

const Company: React.FC = () => {
    const team = [
        "Rayan Boukhanifi",
        "Themis Filippidis",
        "Muhammad Qodirov",
        "Himanshu Rawat"
    ];

    return (
        <div className="relative min-h-screen bg-black text-white font-sans selection:bg-white/30">
            <Navbar />
            <CornerFrames color="dark" />

            {/* Hero Section with Background */}
            <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <WhiteHoleBackground />
                </div>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-center"
                >
                    Build The World.
                </motion.h1>
            </section>

            {/* Content Section */}
            <main className="relative z-10 py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-2xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-2xl md:text-3xl font-medium tracking-tight mb-2"
                    >
                        We are automating industrial labor.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.05 }}
                        className="text-xs text-gray-500 mb-10"
                    >
                        – Jan 16, 2026
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="space-y-6 text-sm md:text-base text-gray-400 leading-relaxed"
                    >
                        <p>
                            We're pursuing this goal by building Mortar, a data-driven industrial autonomy platform that learns from real-world work at scale and turns continuous site data into reliable autonomy robotic capability.
                        </p>

                        <p>
                            Industrial work is shaped by millions of small decisions, where to look, what to trust, how to move, when to stop, and how to stay compliant. If we can capture those decisions through visual data and convert them into a persistent site model, we can make machines that operate safely, adapt to new environments, and deliver real productivity in the field.
                        </p>

                        <p>
                            We envision autonomy systems that are equal parts hardware, software, and AI, rugged enough for industrial environments, scalable across sites, and deployable in form factors teams actually want to use. Fully realizing this vision demands we think in years of iteration, solve hard problems across robotics and production engineering, and be proactive about safety, privacy, reliability, and operational trust.
                        </p>

                        <p>
                            We're starting by building the data and product foundation needed to make autonomy real: capturing what matters, validating performance in the field, and turning learning loops into shipped capability. Our ultimate measure of success is delivering products customers depend on first by augmenting industrial teams with high-leverage perception and performance tools, and ultimately by enabling persistent, high-trust autonomy across industrial environments. Along the way, we'll share what we learn to accelerate progress across the ecosystem.
                        </p>

                        <p>
                            If you're excited to contribute to this mission, we'd love to meet you –<br />
                            <a href="mailto:team@mortar.cv" className="text-white hover:text-gray-300 transition-colors">(send a mail to team@mortar.cv)</a>
                        </p>
                    </motion.div>

                    {/* Team Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mt-20"
                    >
                        <h3 className="text-xs font-medium text-gray-500 tracking-wide mb-4">Team</h3>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-2">
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

                    {/* Join Us CTA */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mt-16"
                    >
                        <h3 className="text-xs font-medium text-gray-500 tracking-wide mb-4">Careers</h3>
                        <p className="text-sm md:text-base text-gray-400 mb-4">
                            We're hiring across ML, software, hardware, and robotics.
                        </p>
                        <Link
                            to="/join"
                            className="inline-block text-sm md:text-base text-white hover:text-gray-300 transition-colors"
                        >
                            View open roles &rarr;
                        </Link>
                    </motion.section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Company;
