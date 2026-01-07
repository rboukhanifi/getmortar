import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DotBolt from '../components/DotBolt';
import { motion } from 'framer-motion';
import {
    Eye, Target, Zap, TrendingUp,
    CheckCircle, ArrowRight, AlertTriangle, Clock,
    Users, DollarSign, Repeat, Brain
} from 'lucide-react';

const WhyUs: React.FC = () => {
    const [activeSection, setActiveSection] = useState('problem');

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

    const painPoints = [
        { icon: <Repeat className="w-5 h-5" />, text: "Rework" },
        { icon: <Clock className="w-5 h-5" />, text: "Waiting" },
        { icon: <AlertTriangle className="w-5 h-5" />, text: "Poor sequencing" },
        { icon: <Users className="w-5 h-5" />, text: "Knowledge gaps between crews and shifts" }
    ];

    const traditionalProblems = [
        "Track plans instead of real work",
        "Rely on manual reporting, photos, and after-the-fact updates",
        "Surface problems only after rework is already baked in",
        "Lose critical execution knowledge when experienced workers rotate off site"
    ];

    const roiPoints = [
        { text: "Rework reduction", detail: "often 5–15% of labor hours on industrial sites" },
        { text: "Faster crew ramp-up and knowledge transfer", detail: "" },
        { text: "Fewer coordination-driven delays", detail: "" },
        { text: "Lower supervisory and administrative overhead", detail: "" }
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white/30">
            <Navbar initialTextColor="text-white" />

            {/* Hero */}
            <section className="relative pt-40 pb-20 px-6 overflow-hidden">
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
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 tracking-tighter leading-[1.1]">
                            Labor Efficiency Is the Only Lever That Actually Moves Margins
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            Most industrial technology optimizes planning, reporting, or documentation.
                            <span className="text-white font-medium"> Mortar Vault optimizes execution</span> — where time, money, and risk are actually burned.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content with Sidebar */}
            <div className="max-w-7xl mx-auto px-6 pb-32">
                <div className="flex gap-16">
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
                                <button className="w-full px-4 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm">
                                    Request Demo
                                </button>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 space-y-32">
                        {/* The Problem Section */}
                        <section id="problem">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold mb-8">The Real Problem</h2>
                                <div className="space-y-6">
                                    <p className="text-xl text-gray-300 leading-relaxed">
                                        On real job sites, margins are not lost in spreadsheets.
                                    </p>
                                    <p className="text-xl text-gray-400 leading-relaxed">
                                        They're lost in:
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {painPoints.map((point, index) => (
                                            <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                                                <div className="p-2 rounded-lg bg-red-500/20 text-red-400">
                                                    {point.icon}
                                                </div>
                                                <span className="font-medium text-white">{point.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-8 p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                                        <p className="text-xl text-white font-medium leading-relaxed">
                                            Small inefficiencies at the worker level quietly compound into millions in overruns at the project level.
                                        </p>
                                        <p className="mt-4 text-gray-400">
                                            We exist because no existing system captures or fixes this problem while the work is happening.
                                        </p>
                                    </div>
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
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Traditional Approaches Fall Short</h2>
                                <p className="text-xl text-gray-400 mb-8">
                                    Productivity losses on industrial sites are well known — but poorly measured and even more poorly controlled.
                                </p>
                                <div className="mb-8">
                                    <p className="text-lg text-gray-300 mb-4">Most tools:</p>
                                    <div className="space-y-3">
                                        {traditionalProblems.map((problem, index) => (
                                            <div key={index} className="flex items-start gap-3 text-gray-400">
                                                <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                                <span>{problem}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-8 rounded-2xl bg-yellow-500/10 border border-yellow-500/20">
                                    <p className="text-lg text-white font-medium mb-4">The result:</p>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Reactive management</li>
                                        <li>• Avoidable waste</li>
                                        <li>• Margins that erode quietly until it's too late</li>
                                    </ul>
                                    <p className="mt-6 text-yellow-400 font-medium">
                                        Visibility arrives late. Action arrives later.
                                    </p>
                                </div>
                            </motion.div>
                        </section>

                        {/* Why Mortar Vault Is Different */}
                        <section id="difference">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Mortar Vault Is Different</h2>
                                <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 mb-8">
                                    <p className="text-xl text-white font-medium mb-4">
                                        Mortar Vault is built around one principle:
                                    </p>
                                    <blockquote className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                        "If you want to improve labor efficiency, you must see work the way workers do."
                                    </blockquote>
                                </div>
                                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                                    We capture execution directly from the worker's point of view and convert it into operational intelligence that improves productivity without slowing crews down or changing how work is done.
                                </p>
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                                    <Eye className="w-6 h-6 text-blue-400" />
                                    <p className="text-lg text-white font-medium">
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
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-xl bg-green-500/20">
                                        <Target className="w-8 h-8 text-green-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-green-400 font-mono">WE CAPTURE REALITY, NOT REPORTS</p>
                                        <h2 className="text-3xl md:text-4xl font-bold">AEGIS</h2>
                                    </div>
                                </div>
                                <p className="text-lg text-gray-400 mb-6">Ground-Truth Visibility</p>
                                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                                    AEGIS is a wearable, jobsite-ready system used during normal operations.
                                </p>
                                <div className="mb-8">
                                    <p className="text-lg text-white font-medium mb-4">It captures:</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            "How tasks are actually executed",
                                            "Real sequencing and handoffs between trades",
                                            "Tool and material usage in context",
                                            "Site conditions at the exact moment work happens"
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                                                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                                <span className="text-gray-300">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-gray-400 mb-4">
                                    Unlike walk-throughs, photos, or daily reports, AEGIS produces a continuous, time-stamped record of real execution.
                                </p>
                                <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20">
                                    <p className="text-green-400 font-medium">
                                        Why this matters: You can't reduce waste or rework if you don't know where they're actually coming from.
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
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-xl bg-purple-500/20">
                                        <Brain className="w-8 h-8 text-purple-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-purple-400 font-mono">WE TURN GOOD WORK INTO REPEATABLE EFFICIENCY</p>
                                        <h2 className="text-3xl md:text-4xl font-bold">Zhora</h2>
                                    </div>
                                </div>
                                <p className="text-lg text-gray-400 mb-6">Operational Intelligence From the Field</p>
                                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                                    Zhora analyzes first-person site data and reveals:
                                </p>
                                <div className="space-y-4 mb-8">
                                    {[
                                        "Where crews lose time",
                                        "Which steps create downstream rework or delays",
                                        "Which execution methods consistently outperform others"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                                            <Zap className="w-5 h-5 text-purple-400 flex-shrink-0" />
                                            <span className="text-gray-300">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-lg text-white font-medium mb-4">This allows teams to:</p>
                                <div className="space-y-3 mb-8">
                                    {[
                                        "Correct inefficiencies while they're still cheap to fix",
                                        "Ramp new or rotating workers significantly faster",
                                        "Standardize best practices across crews, shifts, and projects"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-3 text-gray-300">
                                            <ArrowRight className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-6 rounded-xl bg-purple-500/10 border border-purple-500/20">
                                    <p className="text-purple-400 font-medium">
                                        Why this matters: Productivity improves when good execution becomes the default — not when it's rediscovered on every job.
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
                                <h2 className="text-3xl md:text-4xl font-bold mb-8">We Improve Productivity Without Squeezing Workers</h2>
                                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                                    Mortar Vault does not increase output by pushing labor harder.
                                </p>
                                <p className="text-lg text-white font-medium mb-4">We improve efficiency by:</p>
                                <div className="space-y-4 mb-8">
                                    {[
                                        "Eliminating unnecessary motion and waiting",
                                        "Preventing work from being done twice",
                                        "Reducing stop-and-go caused by missing context"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                            <span className="text-gray-300">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-white/10">
                                    <p className="text-lg text-gray-400 mb-2">These are durable gains — not short-term pressure tactics.</p>
                                    <p className="text-xl text-white font-medium">
                                        The result: higher throughput and less burnout.
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
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why the ROI Is Real</h2>
                                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                                    Labor dominates industrial project cost. Even small improvements matter — a lot.
                                </p>
                                <div className="flex items-center gap-4 mb-6">
                                    <DollarSign className="w-8 h-8 text-green-400" />
                                    <p className="text-lg text-white font-medium">Mortar Vault drives ROI through:</p>
                                </div>
                                <div className="space-y-4 mb-8">
                                    {roiPoints.map((point, index) => (
                                        <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                                            <TrendingUp className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <span className="text-white font-medium">{point.text}</span>
                                                {point.detail && <span className="text-gray-400"> ({point.detail})</span>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-8 rounded-2xl bg-green-500/10 border border-green-500/20">
                                    <p className="text-xl text-white font-medium">
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
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Proof We're Solving a Real Problem</h2>
                                <p className="text-xl text-gray-400 mb-8">This isn't theoretical.</p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-center">
                                        <div className="text-4xl font-bold text-white mb-2">$800K</div>
                                        <p className="text-gray-400">in contracts signed in under one month</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-center">
                                        <div className="text-4xl font-bold text-white mb-2">Live</div>
                                        <p className="text-gray-400">deployments on industrial job sites</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-center">
                                        <div className="text-4xl font-bold text-white mb-2">Validated</div>
                                        <p className="text-gray-400">by customer adoption</p>
                                    </div>
                                </div>
                                <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/20">
                                    <p className="text-blue-400 font-medium">
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
                                <h2 className="text-3xl md:text-4xl font-bold mb-8">Built for Live Industrial Job Sites</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                                    {[
                                        "No fixed infrastructure required",
                                        "Works in messy, changing environments",
                                        "Deployable today",
                                        "Improves continuously as more work is captured"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                            <span className="text-gray-300">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xl text-gray-400 mb-12">
                                    Mortar Vault is designed for how industrial work actually runs — not how it's documented after the fact.
                                </p>

                                <h3 className="text-2xl font-bold mb-6">Why Companies Choose Mortar Vault</h3>
                                <div className="space-y-4 mb-12">
                                    {[
                                        "Labor efficiency is their biggest unrealized opportunity",
                                        "Existing tools stop at planning and reporting",
                                        "Visibility beats assumptions — every time"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-3 text-gray-300">
                                            <ArrowRight className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Final CTA */}
                                <div className="p-8 rounded-3xl bg-gradient-to-r from-white/10 to-white/5 border border-white/10">
                                    <p className="text-xl text-gray-300 mb-4">
                                        We don't help you manage work better on paper.
                                    </p>
                                    <p className="text-2xl text-white font-bold mb-8">
                                        We help your crews get more done, with less waste, every day.
                                    </p>
                                    <p className="text-lg text-gray-400 mb-8">
                                        If labor performance matters to your margins, Mortar Vault is built for you.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors inline-flex items-center justify-center gap-2">
                                            Request Demo <ArrowRight className="w-5 h-5" />
                                        </button>
                                        <button className="px-8 py-4 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-colors border border-white/10">
                                            Talk to Sales
                                        </button>
                                    </div>
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
