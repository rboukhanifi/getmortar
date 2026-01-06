import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Book, Code, Zap, Shield, ArrowRight, Search, Copy, Check, Terminal, Database, Globe } from 'lucide-react';

const Docs: React.FC = () => {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const copyToClipboard = (text: string, index: number) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    const sections = [
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Getting Started",
            description: "Quick start guide to integrate Mortar into your workflow.",
            links: ["Installation", "Authentication", "First API Call"],
            color: "from-yellow-500/20 to-transparent"
        },
        {
            icon: <Code className="w-6 h-6" />,
            title: "API Reference",
            description: "Complete API documentation with examples and schemas.",
            links: ["REST API", "Webhooks", "Rate Limits"],
            color: "from-blue-500/20 to-transparent"
        },
        {
            icon: <Book className="w-6 h-6" />,
            title: "Guides",
            description: "In-depth tutorials for common use cases and integrations.",
            links: ["Project Setup", "Data Import", "Reporting"],
            color: "from-green-500/20 to-transparent"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Security",
            description: "Security best practices and compliance documentation.",
            links: ["Authentication", "Data Privacy", "Compliance"],
            color: "from-purple-500/20 to-transparent"
        }
    ];

    const codeExamples = [
        {
            title: "Install the SDK",
            language: "bash",
            code: "npm install @mortar/sdk"
        },
        {
            title: "Initialize Client",
            language: "typescript",
            code: `import { Mortar } from '@mortar/sdk';

const mortar = new Mortar({
  apiKey: process.env.MORTAR_API_KEY
});`
        },
        {
            title: "Create a Project",
            language: "typescript",
            code: `const project = await mortar.projects.create({
  name: "Skyline Tower",
  type: "commercial",
  startDate: "2025-01-15",
  estimatedCompletion: "2027-06-30"
});

console.log(project.id); // "proj_abc123"`
        }
    ];

    const apiEndpoints = [
        {
            method: "GET",
            endpoint: "/v1/projects",
            description: "List all projects in your organization"
        },
        {
            method: "POST",
            endpoint: "/v1/projects",
            description: "Create a new construction project"
        },
        {
            method: "GET",
            endpoint: "/v1/projects/:id/delays",
            description: "Get predicted delays for a project"
        },
        {
            method: "POST",
            endpoint: "/v1/compliance/check",
            description: "Run compliance check on project documents"
        }
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 overflow-x-hidden">
            <Navbar initialTextColor="text-white" />

            {/* Hero Section */}
            <section className="relative pt-40 pb-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6 tracking-tighter opacity-90">
                            Documentation.
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-8">
                            Everything you need to integrate and build with Mortar's construction intelligence platform.
                        </p>

                        {/* Search Bar */}
                        <div className="relative max-w-2xl">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search documentation..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                            />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-500 bg-white/10 px-2 py-1 rounded">⌘K</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Start Section */}
            <section className="py-16 px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <Terminal className="w-6 h-6 text-green-400" />
                            <h2 className="text-2xl font-bold">Quick Start</h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {codeExamples.map((example, index) => (
                                <div key={index} className="bg-[#0a0a0a] rounded-xl border border-white/10 overflow-hidden">
                                    <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
                                        <span className="text-sm font-medium text-gray-300">{example.title}</span>
                                        <button
                                            onClick={() => copyToClipboard(example.code, index)}
                                            className="p-1.5 hover:bg-white/10 rounded transition-colors"
                                        >
                                            {copiedIndex === index ? (
                                                <Check className="w-4 h-4 text-green-400" />
                                            ) : (
                                                <Copy className="w-4 h-4 text-gray-400" />
                                            )}
                                        </button>
                                    </div>
                                    <pre className="p-4 text-sm overflow-x-auto">
                                        <code className="text-gray-300 font-mono">{example.code}</code>
                                    </pre>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Documentation Grid */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all cursor-pointer relative overflow-hidden"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-xl bg-white/10 text-white group-hover:bg-white/20 transition-colors">
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
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* API Reference Preview */}
            <section className="py-16 px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <Globe className="w-6 h-6 text-blue-400" />
                            <h2 className="text-2xl font-bold">API Endpoints</h2>
                        </div>

                        <div className="bg-[#0a0a0a] rounded-xl border border-white/10 overflow-hidden">
                            <div className="px-6 py-4 border-b border-white/10 bg-white/5">
                                <span className="text-sm text-gray-400">Base URL: </span>
                                <code className="text-sm text-white font-mono">https://api.getmortar.com</code>
                            </div>
                            <div className="divide-y divide-white/5">
                                {apiEndpoints.map((endpoint, index) => (
                                    <div key={index} className="px-6 py-4 flex items-center gap-4 hover:bg-white/5 transition-colors cursor-pointer">
                                        <span className={`px-2 py-1 rounded text-xs font-mono font-bold ${
                                            endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                                        }`}>
                                            {endpoint.method}
                                        </span>
                                        <code className="text-sm text-white font-mono flex-1">{endpoint.endpoint}</code>
                                        <span className="text-sm text-gray-500 hidden md:block">{endpoint.description}</span>
                                        <ArrowRight className="w-4 h-4 text-gray-500" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Resources Section */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
                            <Database className="w-8 h-8 text-purple-400 mb-4" />
                            <h3 className="text-lg font-bold mb-2">SDKs & Libraries</h3>
                            <p className="text-gray-400 text-sm">Official SDKs for JavaScript, Python, and Go.</p>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
                            <Code className="w-8 h-8 text-green-400 mb-4" />
                            <h3 className="text-lg font-bold mb-2">Code Examples</h3>
                            <p className="text-gray-400 text-sm">Sample projects and integration examples.</p>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
                            <Book className="w-8 h-8 text-yellow-400 mb-4" />
                            <h3 className="text-lg font-bold mb-2">Changelog</h3>
                            <p className="text-gray-400 text-sm">Latest updates and release notes.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 border-t border-white/5">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-6">Need help?</h3>
                    <p className="text-gray-400 mb-10">Our team is here to help you get started with Mortar.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors">
                            Contact Support
                        </button>
                        <button className="px-8 py-4 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-colors border border-white/10">
                            Join Discord
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Docs;
