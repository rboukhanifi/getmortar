import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DotBolt from '../components/DotBolt';
import { motion } from 'framer-motion';
import { Clock, TrendingUp, Shield, Zap, CheckCircle, ArrowRight, Building2, FileCheck, Users, BarChart3 } from 'lucide-react';

const Solutions: React.FC = () => {
    const solutions = [
        {
            icon: <Clock className="w-8 h-8" />,
            title: "Delay Prediction",
            description: "AI-powered forecasting identifies potential delays weeks before they happen, giving you time to act.",
            features: ["Weather impact analysis", "Supply chain monitoring", "Resource availability tracking"],
            color: "from-blue-500/20 to-transparent",
            stat: "3 weeks",
            statLabel: "earlier detection"
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Labor Optimization",
            description: "Maximize workforce efficiency with intelligent scheduling and skill-based team allocation.",
            features: ["Smart crew scheduling", "Skill matching", "Overtime reduction"],
            color: "from-green-500/20 to-transparent",
            stat: "32%",
            statLabel: "efficiency gain"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Compliance Automation",
            description: "Automatically verify documents, track certifications, and ensure regulatory compliance.",
            features: ["Document verification", "Certification tracking", "Audit trail generation"],
            color: "from-purple-500/20 to-transparent",
            stat: "99.9%",
            statLabel: "compliance rate"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Real-time Analytics",
            description: "Live dashboards and insights that transform project data into actionable intelligence.",
            features: ["Live progress tracking", "Cost forecasting", "Risk heat maps"],
            color: "from-yellow-500/20 to-transparent",
            stat: "Real-time",
            statLabel: "visibility"
        }
    ];

    const useCases = [
        {
            icon: <Building2 className="w-6 h-6" />,
            title: "General Contractors",
            description: "Coordinate complex megaprojects with confidence. Mortar helps GCs manage subcontractors, track progress, and deliver on time."
        },
        {
            icon: <FileCheck className="w-6 h-6" />,
            title: "Project Managers",
            description: "Get a single source of truth for your entire project. From scheduling to compliance, everything in one place."
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Operations Teams",
            description: "Streamline daily operations with automated workflows, smart notifications, and predictive insights."
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Executives",
            description: "Portfolio-level visibility with real-time dashboards, risk assessments, and financial forecasting."
        }
    ];

    const metrics = [
        { value: "$2.4M", label: "Average savings per project" },
        { value: "47%", label: "Reduction in delays" },
        { value: "12x", label: "Faster compliance checks" },
        { value: "89%", label: "Client satisfaction" }
    ];

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-white/30 overflow-x-hidden">
            <Navbar initialTextColor="text-white" />

            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex flex-col justify-center items-center pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <DotBolt />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
                </div>

                <div className="max-w-5xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-mono mb-8 backdrop-blur-md">
                            MORTAR SOLUTIONS
                        </span>
                        <h1 className="text-5xl md:text-8xl font-heading font-bold mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                            Built for the Builders.
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                            Solve the hardest problems in construction with intelligence that adapts to your workflow.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors">
                                Request Demo
                            </button>
                            <button className="px-8 py-4 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-colors border border-white/10">
                                View Pricing
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Metrics Bar */}
            <section className="py-12 border-y border-white/10 bg-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {metrics.map((metric, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{metric.value}</div>
                                <div className="text-sm text-gray-400">{metric.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">Intelligent Solutions</h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Four core capabilities that transform how you build.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all relative overflow-hidden"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="p-4 rounded-2xl bg-white/10 text-white">
                                            {solution.icon}
                                        </div>
                                        <div className="text-right">
                                            <div className="text-3xl font-bold text-white">{solution.stat}</div>
                                            <div className="text-xs text-gray-400">{solution.statLabel}</div>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                                    <p className="text-gray-400 mb-6">{solution.description}</p>
                                    <div className="space-y-2">
                                        {solution.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                                                <CheckCircle className="w-4 h-4 text-green-400" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-24 px-6 bg-white/5">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">Built for Every Role</h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            From the field to the boardroom, Mortar adapts to how you work.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {useCases.map((useCase, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all group cursor-pointer"
                            >
                                <div className="p-3 rounded-xl bg-white/10 text-white w-fit mb-4 group-hover:bg-white/20 transition-colors">
                                    {useCase.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2">{useCase.title}</h3>
                                <p className="text-sm text-gray-400">{useCase.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integration Section */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Integrates with your existing tools
                            </h2>
                            <p className="text-xl text-gray-400 mb-8">
                                Mortar connects seamlessly with the software you already use. No disruption, just enhancement.
                            </p>
                            <div className="space-y-4">
                                {["Procore", "Autodesk Construction Cloud", "PlanGrid", "Bluebeam", "Microsoft Project"].map((tool, index) => (
                                    <div key={index} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle className="w-5 h-5 text-green-400" />
                                        <span>{tool}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl font-bold text-white/20 mb-4">50+</div>
                                    <div className="text-gray-400">Integrations Available</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 border-t border-white/10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to build smarter?</h2>
                        <p className="text-xl text-gray-400 mb-10">
                            Join the construction teams already saving millions with Mortar.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors inline-flex items-center gap-2">
                                Get Started <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="px-8 py-4 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-colors border border-white/10">
                                Talk to Sales
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Solutions;
