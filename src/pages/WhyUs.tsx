import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DotBolt from '../components/DotBolt';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const sections = [
    { id: 'problem', label: 'The Problem' },
    { id: 'traditional', label: 'Why Others Fail' },
    { id: 'difference', label: 'Why We\'re Different' },
    { id: 'aegis', label: 'AEGIS' },
    { id: 'zhora', label: 'Zhora' },
    { id: 'approach', label: 'Our Approach' },
    { id: 'roi', label: 'The ROI' },
    { id: 'proof', label: 'Proof' },
    { id: 'why-choose', label: 'Why Choose Us' },
];

const WhyUs: React.FC = () => {
    const [activeSection, setActiveSection] = useState('problem');

    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = sections.map(s => document.getElementById(s.id));
            const scrollPosition = window.scrollY + 200;

            for (let i = sectionElements.length - 1; i >= 0; i--) {
                const section = sectionElements[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white/30">
            <Navbar initialTextColor="text-white" />

            {/* Hero */}
            <section className="relative pt-28 md:pt-40 pb-12 md:pb-20 px-4 md:px-6 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 translate-x-[30%]">
                        <DotBolt />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]"></div>
                </div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-mono mb-8">
                            MORTAR VAULT
                        </span>
                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 md:mb-8 tracking-tighter leading-[1.1]">
                            Labor Efficiency Is the Only Lever That Actually Moves Margins
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                            Most industrial technology optimizes planning, reporting, or documentation.
                            <span className="text-white font-medium"> Mortar optimizes execution</span>, that's where time, money, and risk are actually burned.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mobile Section Navigation */}
            <div className="lg:hidden sticky top-16 z-30 bg-[#050505]/95 backdrop-blur-lg border-b border-white/10">
                <div className="overflow-x-auto scrollbar-hide">
                    <nav className="flex gap-1 px-4 py-3 min-w-max">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={`px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                                    activeSection === section.id
                                        ? 'bg-white text-black'
                                        : 'text-gray-400 hover:text-white hover:bg-white/10'
                                }`}
                            >
                                {section.label}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Main Content with Sidebar */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 pb-16 md:pb-32">
                <div className="flex gap-8 lg:gap-16">
                    {/* Left Sidebar - Sticky Outline */}
                    <aside className="hidden lg:block w-64 flex-shrink-0">
                        <div className="sticky top-32">
                            <nav className="space-y-1">
                                {sections.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() => scrollToSection(section.id)}
                                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-3 ${
                                            activeSection === section.id
                                                ? 'bg-white/10 text-white'
                                                : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                                        }`}
                                    >
                                        <div className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                            activeSection === section.id ? 'bg-white' : 'bg-gray-600'
                                        }`} />
                                        <span className="text-sm font-medium">{section.label}</span>
                                    </button>
                                ))}
                            </nav>

                            <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10">
                                <p className="text-sm text-gray-400 mb-4">Ready to see the difference?</p>
                                <Link to="/get-started" className="block w-full px-4 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm text-center">
                                    Request Demo
                                </Link>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 space-y-16 md:space-y-24">
                        {/* The Problem Section */}
                        <section id="problem">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">The Real Problem</h2>
                                <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed">
                                    <p className="text-gray-300">
                                        On real job sites, margins are not lost in spreadsheets. They're lost in rework, waiting, poor sequencing, and knowledge gaps between crews and shifts.
                                    </p>
                                    <p className="text-gray-300">
                                        Small inefficiencies at the worker level quietly compound into millions in overruns at the project level.
                                    </p>
                                    <p className="text-white font-medium">
                                        We exist because no existing system captures or fixes this problem while the work is happening.
                                    </p>
                                </div>
                            </motion.div>
                        </section>

                        {/* Why Traditional Approaches Fall Short */}
                        <section id="traditional">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">Why Traditional Approaches Fall Short</h2>
                                <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed">
                                    <p className="text-gray-300">
                                        Productivity losses on industrial sites are well known — but poorly measured and even more poorly controlled.
                                    </p>
                                    <p className="text-gray-300">
                                        Most tools track plans instead of real work. They rely on manual reporting, photos, and after-the-fact updates. They surface problems only after rework is already baked in. They lose critical execution knowledge when experienced workers rotate off site.
                                    </p>
                                    <p className="text-gray-300">
                                        The result is reactive management, avoidable waste, and margins that erode quietly until it's too late.
                                    </p>
                                    <p className="text-white font-medium">
                                        Visibility arrives late. Action arrives later.
                                    </p>
                                </div>
                            </motion.div>
                        </section>

                        {/* Why Mortar Is Different */}
                        <section id="difference">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">Why Mortar Is Different</h2>
                                <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed">
                                    <p className="text-gray-300">
                                        Mortar is built around one principle: if you want to improve labor efficiency, you must see work the way workers do.
                                    </p>
                                    <p className="text-gray-300">
                                        We capture execution directly from the worker's point of view and convert it into operational intelligence that improves productivity without slowing crews down or changing how work is done.
                                    </p>
                                    <p className="text-white font-medium">
                                        This is not another reporting layer. It's a visibility layer for reality.
                                    </p>
                                </div>
                            </motion.div>
                        </section>

                        {/* AEGIS Section */}
                        <section id="aegis">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <p className="text-sm text-gray-500 font-mono mb-2 tracking-wider">WE CAPTURE REALITY, NOT REPORTS</p>
                                <h2 className="text-3xl md:text-4xl font-bold mb-2">AEGIS</h2>
                                <p className="text-xl text-gray-500 mb-8">Ground-Truth Visibility</p>
                                <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed">
                                    <p className="text-gray-300">
                                        AEGIS is a wearable, jobsite-ready system used during normal operations. It captures how tasks are actually executed, real sequencing and handoffs between trades, tool and material usage in context, and site conditions at the exact moment work happens.
                                    </p>
                                    <p className="text-gray-300">
                                        Unlike walk-throughs, photos, or daily reports, AEGIS produces a continuous, time-stamped record of real execution.
                                    </p>
                                    <p className="text-white font-medium">
                                        This matters because you can't reduce waste or rework if you don't know where they're actually coming from.
                                    </p>
                                </div>
                            </motion.div>
                        </section>

                        {/* Zhora Section */}
                        <section id="zhora">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <p className="text-sm text-gray-500 font-mono mb-2 tracking-wider">WE TURN GOOD WORK INTO REPEATABLE EFFICIENCY</p>
                                <h2 className="text-3xl md:text-4xl font-bold mb-2">Zhora</h2>
                                <p className="text-xl text-gray-500 mb-8">Operational Intelligence From the Field</p>
                                <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed">
                                    <p className="text-gray-300">
                                        Zhora analyzes first-person site data and reveals where crews lose time, which steps create downstream rework or delays, and which execution methods consistently outperform others.
                                    </p>
                                    <p className="text-gray-300">
                                        This allows teams to correct inefficiencies while they're still cheap to fix, ramp new or rotating workers significantly faster, and standardize best practices across crews, shifts, and projects.
                                    </p>
                                    <p className="text-white font-medium">
                                        This matters because productivity improves when good execution becomes the default — not when it's rediscovered on every job.
                                    </p>
                                </div>
                            </motion.div>
                        </section>

                        {/* Our Approach Section */}
                        <section id="approach">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">We Improve Productivity Without Squeezing Workers</h2>
                                <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed">
                                    <p className="text-gray-300">
                                        Mortar does not increase output by pushing labor harder. We improve efficiency by eliminating unnecessary motion and waiting, preventing work from being done twice, and reducing stop-and-go caused by missing context.
                                    </p>
                                    <p className="text-gray-300">
                                        These are durable gains, not short-term pressure tactics.
                                    </p>
                                    <p className="text-white font-medium">
                                        The result is higher throughput and less burnout.
                                    </p>
                                </div>
                            </motion.div>
                        </section>

                        {/* ROI Section */}
                        <section id="roi">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">Why the ROI Is Real</h2>
                                <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed">
                                    <p className="text-gray-300">
                                        Labor dominates industrial project cost. Even small improvements matter — a lot.
                                    </p>
                                    <p className="text-gray-300">
                                        Mortar drives ROI through rework reduction (often 5–15% of labor hours on industrial sites), faster crew ramp-up and knowledge transfer, fewer coordination-driven delays, and lower supervisory and administrative overhead.
                                    </p>
                                    <p className="text-white font-medium">
                                        On labor-intensive projects, a single-digit percentage improvement in effective labor productivity can cover deployment costs many times over.
                                    </p>
                                </div>
                            </motion.div>
                        </section>

                        {/* Proof Section */}
                        <section id="proof">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">Proof We're Solving a Real Problem</h2>
                                <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed">
                                    <p className="text-gray-300">
                                        This isn't theoretical. We signed $800,000 in contracts in under one month. We have live deployments on industrial job sites. Our approach has been validated by customer adoption.
                                    </p>
                                    <p className="text-white font-medium">
                                        The market response validated what the industry already knows: execution visibility is the missing layer.
                                    </p>
                                </div>
                            </motion.div>
                        </section>

                        {/* Why Choose Section */}
                        <section id="why-choose">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">Built for Live Industrial Job Sites</h2>
                                <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed">
                                    <p className="text-gray-300">
                                        No fixed infrastructure required. Works in messy, changing environments. Deployable today. Improves continuously as more work is captured.
                                    </p>
                                    <p className="text-gray-300">
                                        Mortar is designed for how industrial work actually runs — not how it's documented after the fact.
                                    </p>
                                </div>

                                <h3 className="text-2xl font-bold mt-16 mb-6">Why Companies Choose Mortar</h3>
                                <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed">
                                    <p className="text-gray-300">
                                        Because labor efficiency is their biggest unrealized opportunity. Because existing tools stop at planning and reporting. Because visibility beats assumptions — every time.
                                    </p>
                                </div>

                                {/* Final CTA */}
                                <div className="mt-16 pt-16 border-t border-white/10">
                                    <p className="text-xl text-gray-400 mb-4">
                                        We don't help you manage work better on paper.
                                    </p>
                                    <p className="text-2xl md:text-3xl text-white font-bold mb-8 leading-tight">
                                        We help your crews get more done, with less waste, every day.
                                    </p>
                                    <p className="text-lg text-gray-400 mb-8">
                                        If labor performance matters to your margins, Mortar is built for you.
                                    </p>
                                    <Link to="/get-started" className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors inline-flex items-center justify-center">
                                        Get Started
                                    </Link>
                                </div>
                            </motion.div>
                        </section>
                    </main>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default WhyUs;
