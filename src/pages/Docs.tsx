import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Book, Code, Zap, Shield, ArrowRight } from 'lucide-react';

const Docs: React.FC = () => {
    const sections = [
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Getting Started",
            description: "Quick start guide to integrate Mortar into your workflow.",
            links: ["Installation", "Authentication", "First API Call"]
        },
        {
            icon: <Code className="w-6 h-6" />,
            title: "API Reference",
            description: "Complete API documentation with examples and schemas.",
            links: ["REST API", "Webhooks", "Rate Limits"]
        },
        {
            icon: <Book className="w-6 h-6" />,
            title: "Guides",
            description: "In-depth tutorials for common use cases and integrations.",
            links: ["Project Setup", "Data Import", "Reporting"]
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Security",
            description: "Security best practices and compliance documentation.",
            links: ["Authentication", "Data Privacy", "Compliance"]
        }
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 overflow-x-hidden">
            <Navbar initialTextColor="text-white" />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-9xl font-heading font-bold mb-8 tracking-tighter opacity-90">
                            Documentation.
                        </h1>
                        <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent mb-8"></div>
                        <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
                            Everything you need to integrate and build with Mortar's construction intelligence platform.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Documentation Grid */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-xl bg-white/10 text-white">
                                    {section.icon}
                                </div>
                                <h2 className="text-2xl font-bold">{section.title}</h2>
                            </div>
                            <p className="text-gray-400 mb-6">{section.description}</p>
                            <div className="space-y-2">
                                {section.links.map((link, linkIndex) => (
                                    <div
                                        key={linkIndex}
                                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                                    >
                                        <ArrowRight className="w-4 h-4" />
                                        <span>{link}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-6 border-t border-white/5">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-6">Need help?</h3>
                    <p className="text-gray-400 mb-10">Our team is here to help you get started with Mortar.</p>
                    <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors">
                        Contact Support
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Docs;
