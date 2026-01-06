import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import {
    Zap, Shield, Clock, Users, Award,
    CheckCircle, ArrowRight, Building, Globe, Lock,
    Cpu, BarChart3, HeartHandshake
} from 'lucide-react';

const WhyUs: React.FC = () => {
    const [activeSection, setActiveSection] = useState('vision');

    const sections = [
        { id: 'vision', label: 'Our Vision' },
        { id: 'difference', label: 'The Difference' },
        { id: 'technology', label: 'Technology' },
        { id: 'trust', label: 'Trust & Security' },
        { id: 'results', label: 'Results' },
        { id: 'team', label: 'Our Team' },
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

    const differentiators = [
        {
            icon: <Cpu className="w-6 h-6" />,
            title: "Purpose-Built AI",
            description: "Not a generic tool adapted for construction. Built from the ground up for megaprojects."
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Predictive, Not Reactive",
            description: "See problems weeks before they happen. Act early, not after the damage is done."
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Human-Centered",
            description: "AI that enhances your team's capabilities, not replaces their expertise."
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Enterprise Scale",
            description: "Handle portfolios of 100+ projects without breaking a sweat."
        }
    ];

    const techFeatures = [
        {
            title: "Machine Learning Models",
            description: "Trained on 50,000+ construction projects across 30 countries.",
            stat: "50K+",
            statLabel: "projects analyzed"
        },
        {
            title: "Real-time Processing",
            description: "Process millions of data points per second for instant insights.",
            stat: "< 100ms",
            statLabel: "response time"
        },
        {
            title: "Continuous Learning",
            description: "Models improve daily based on your project outcomes.",
            stat: "Daily",
            statLabel: "model updates"
        }
    ];

    const trustPoints = [
        { icon: <Lock className="w-5 h-5" />, text: "SOC 2 Type II Certified" },
        { icon: <Shield className="w-5 h-5" />, text: "End-to-end encryption" },
        { icon: <Building className="w-5 h-5" />, text: "On-premise deployment available" },
        { icon: <Globe className="w-5 h-5" />, text: "GDPR & CCPA compliant" }
    ];

    const results = [
        { value: "$847M", label: "Total client savings", description: "Combined savings across all Mortar clients in 2024" },
        { value: "2,400+", label: "Projects optimized", description: "Active projects using Mortar intelligence" },
        { value: "99.7%", label: "Uptime SLA", description: "Enterprise-grade reliability you can count on" },
        { value: "4.9/5", label: "Customer rating", description: "Based on 500+ verified reviews" }
    ];

    const teamValues = [
        {
            icon: <Award className="w-8 h-8" />,
            title: "Industry Veterans",
            description: "Our team includes former project directors, site engineers, and construction tech pioneers with 200+ combined years in the field."
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "AI Researchers",
            description: "PhDs from MIT, Stanford, and Tsinghua who've published groundbreaking work in predictive analytics and machine learning."
        },
        {
            icon: <HeartHandshake className="w-8 h-8" />,
            title: "Customer Obsessed",
            description: "We embed with your teams, understand your pain points, and build solutions that actually get used."
        }
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white/30">
            <Navbar initialTextColor="text-white" />

            {/* Hero */}
            <section className="relative pt-40 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-mono mb-8">
                            WHY MORTAR
                        </span>
                        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 tracking-tighter">
                            We're building the future of construction.
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            In an industry where 98% of megaprojects go over budget and 77% are delayed,
                            we believe there's a better way. Here's why the world's best builders choose Mortar.
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
                        {/* Vision Section */}
                        <section id="vision">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Vision</h2>
                                <div className="prose prose-lg prose-invert max-w-none">
                                    <p className="text-xl text-gray-300 leading-relaxed mb-6">
                                        Construction is the backbone of civilization. Every hospital, school, bridge, and home
                                        starts as a project someone had to build. Yet this $13 trillion industry operates on
                                        gut instinct, spreadsheets, and hope.
                                    </p>
                                    <p className="text-xl text-gray-300 leading-relaxed mb-6">
                                        We founded Mortar because we believe the people who build our world deserve better tools.
                                        Not another app to check. Not another report to file. Real intelligence that makes
                                        every decision sharper and every project more predictable.
                                    </p>
                                    <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                                        <blockquote className="text-2xl font-medium italic text-white">
                                            "Our mission is simple: make construction predictable."
                                        </blockquote>
                                        <p className="mt-4 text-gray-400">— Founding Team</p>
                                    </div>
                                </div>
                            </motion.div>
                        </section>

                        {/* Difference Section */}
                        <section id="difference">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">The Mortar Difference</h2>
                                <p className="text-xl text-gray-400 mb-12">
                                    What sets us apart from every other solution on the market.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {differentiators.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all group"
                                        >
                                            <div className="p-3 rounded-xl bg-white/10 text-white w-fit mb-4 group-hover:bg-white/20 transition-colors">
                                                {item.icon}
                                            </div>
                                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                            <p className="text-gray-400">{item.description}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </section>

                        {/* Technology Section */}
                        <section id="technology">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology</h2>
                                <p className="text-xl text-gray-400 mb-12">
                                    Under the hood of our intelligence platform.
                                </p>
                                <div className="space-y-6">
                                    {techFeatures.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-start gap-8 p-6 rounded-2xl border border-white/10 bg-white/5"
                                        >
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                                <p className="text-gray-400">{feature.description}</p>
                                            </div>
                                            <div className="text-right flex-shrink-0">
                                                <div className="text-3xl font-bold text-white">{feature.stat}</div>
                                                <div className="text-sm text-gray-500">{feature.statLabel}</div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10">
                                    <div className="flex items-center gap-4 mb-4">
                                        <BarChart3 className="w-8 h-8 text-blue-400" />
                                        <h3 className="text-xl font-bold">Powered by Real Data</h3>
                                    </div>
                                    <p className="text-gray-300 mb-6">
                                        Our models are trained on anonymized data from real construction projects—not simulations.
                                        This means predictions that reflect how projects actually behave in the real world.
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {["Commercial", "Residential", "Infrastructure", "Industrial", "Healthcare", "Education"].map((tag) => (
                                            <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-sm text-gray-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </section>

                        {/* Trust Section */}
                        <section id="trust">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Trust & Security</h2>
                                <p className="text-xl text-gray-400 mb-12">
                                    Your data is your competitive advantage. We protect it like our own.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                                    {trustPoints.map((point, index) => (
                                        <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                                            <div className="p-2 rounded-lg bg-green-500/20 text-green-400">
                                                {point.icon}
                                            </div>
                                            <span className="font-medium">{point.text}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                                    <h3 className="text-xl font-bold mb-4">Enterprise-Grade Infrastructure</h3>
                                    <p className="text-gray-400 mb-6">
                                        Built on AWS with multi-region redundancy, automatic failover, and 24/7 monitoring.
                                        Your projects never sleep, and neither does our infrastructure.
                                    </p>
                                    <div className="flex items-center gap-2 text-green-400">
                                        <CheckCircle className="w-5 h-5" />
                                        <span>99.99% uptime guarantee</span>
                                    </div>
                                </div>
                            </motion.div>
                        </section>

                        {/* Results Section */}
                        <section id="results">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results</h2>
                                <p className="text-xl text-gray-400 mb-12">
                                    Numbers that speak for themselves.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {results.map((result, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10"
                                        >
                                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">{result.value}</div>
                                            <div className="text-lg font-medium text-white mb-2">{result.label}</div>
                                            <p className="text-gray-400 text-sm">{result.description}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </section>

                        {/* Team Section */}
                        <section id="team">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
                                <p className="text-xl text-gray-400 mb-12">
                                    The people behind the platform.
                                </p>
                                <div className="space-y-6">
                                    {teamValues.map((value, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex gap-6 p-6 rounded-2xl border border-white/10 bg-white/5"
                                        >
                                            <div className="p-4 rounded-2xl bg-white/10 text-white h-fit">
                                                {value.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                                <p className="text-gray-400">{value.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* CTA */}
                                <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-white/10 to-white/5 border border-white/10 text-center">
                                    <h3 className="text-2xl font-bold mb-4">Join the builders shaping the future</h3>
                                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                                        Whether you're managing a single project or an entire portfolio,
                                        Mortar gives you the intelligence to build better.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors inline-flex items-center justify-center gap-2">
                                            Get Started <ArrowRight className="w-5 h-5" />
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
