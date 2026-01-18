import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CornerFrames from '../components/CornerFrames';

const IndustrialAutonomy = () => {
    return (
        <div className="relative min-h-screen bg-white text-black overflow-x-hidden">
            <Navbar />
            <CornerFrames color="light" />

            <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                            Mortar
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            Bringing industrial sites to autonomy by using continuous data collection.
                        </p>
                        <p className="text-sm text-gray-400 mt-4">
                            Litepaper 1.0, Mortar Vault, Inc.
                        </p>
                    </motion.div>

                    {/* Summary Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="mb-16"
                    >
                        <h2 className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-4">
                            Summary
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                            We introduce Mortar, an industrial intelligence platform designed to enable AI to operate reliably in real-world worksites by continuously building a living site model from continuous data streams. Mortar captures high-frequency on-site reality, video and sensor streams and converts it into structured, actionable understanding, geometry, semantics, risk, and compliance constraints. Current LLMs default to assuming environments are static or perfectly mapped upfront, our platform makes it so it learns directly from continuous site conditions, allowing autonomy systems to stay current as the site changes. Mortar is built as a data-driven autonomy stack composed of (1) <span className="font-semibold">AEGIS</span> (plug-and-play data capture hardware) and (2) <span className="font-semibold">Zhora</span> (AI software). Together, they create a scalable pipeline for collecting, organizing, and learning from messy site data, forming the missing infrastructure required for safe, reliable, and scalable industrial autonomy.
                        </p>
                    </motion.section>

                    {/* Introduction Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-16"
                    >
                        <h2 className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-4">
                            Introduction
                        </h2>
                        <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
                            <p>
                                An industrial environment is any real-world worksite where physical operations happen continuously, humans, machines, and materials interact to produce, move, assemble, inspect, or maintain gears. Examples include construction sites, warehouses, factories, ports, mines, refineries, and logistics yards. These environments are inherently non-stationary systems: the "state of the world" changes as a direct consequence of work being performed.
                            </p>
                            <p>
                                They change because (1) the layout is a process variable, (2) objects are not fixed, and (3) people and vehicles are always moving. Unlike a lab or a mapped indoor space, an industrial site is not "a place", it's an active transformation happening in real time. This creates a fundamental mismatch with traditional autonomy pipelines, which rely on static maps, controlled sensing, and one-time calibration. As a result, autonomy doesn't work, performance degrades as the environment drifts, and scaling across sites requires manual re-integration.
                            </p>
                            <p>
                                Robotics hardware is improving quickly, but without a persistent intelligence layer that can continuously track the state of the world, hardware alone does not translate into scalable autonomy. To make autonomy real we need:
                            </p>
                            <ul className="list-none space-y-2 pl-4 border-l-2 border-gray-200">
                                <li className="text-gray-700">
                                    <span className="font-medium">(1) Data</span> — provided by continuous sensor streams
                                </li>
                                <li className="text-gray-700">
                                    <span className="font-medium">(2) A living site model</span> — updated over time (geometry, semantics, risk, constraints)
                                </li>
                                <li className="text-gray-700">
                                    <span className="font-medium">(3) A control layer</span> — that uses that model to act safely and reliably under uncertainty
                                </li>
                            </ul>
                        </div>
                    </motion.section>
                </div>
            </main>

            <Footer variant="light" />
        </div>
    );
};

export default IndustrialAutonomy;
