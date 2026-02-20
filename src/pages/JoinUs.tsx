import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CornerFrames from '../components/CornerFrames';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

interface Role {
    title: string;
    description?: string;
    location: string;
}

interface Category {
    name: string;
    roles: Role[];
}

const categories: Category[] = [
    {
        name: "Machine Learning & AI",
        roles: [
            {
                title: "Chief Engineer, ML/RL",
                location: "Shenzhen, China",
            },
            {
                title: "Research Engineer, ML/RL",
                description: "Applied ML research with model prototyping",
                location: "Shenzhen, China",
            },
            {
                title: "Machine Learning Engineer",
                description: "Training, deploying production ML models for perception and intelligence",
                location: "Shenzhen, China",
            },
            {
                title: "Machine Learning Operations Lead",
                description: "Deployment pipelines, monitoring, scalability, model infrastructure",
                location: "Shenzhen, China",
            },
        ],
    },
    {
        name: "Software & Systems Engineering",
        roles: [
            {
                title: "Software Engineer",
                description: "Core backend/platform systems lead",
                location: "Shenzhen, China",
            },
            {
                title: "Software Engineer, Real-Time Video Systems",
                description: "Low-latency video capture, streaming, compression, ML video integration",
                location: "Shenzhen, China",
            },
        ],
    },
    {
        name: "Security & Infrastructure",
        roles: [
            {
                title: "OpSec Engineer",
                description: "Operational security, secure deployments, access control, incident response",
                location: "Shenzhen, China",
            },
        ],
    },
    {
        name: "Electrical & Embedded Hardware",
        roles: [
            {
                title: "Chief Engineer, Electrical Engineering",
                description: "Overall electronics architecture, sensor systems, manufacturing alignment",
                location: "Shenzhen, China",
            },
            {
                title: "Electrical Engineer",
                description: "PCB design, power systems, embedded electronics testing, production support",
                location: "Shenzhen, China",
            },
        ],
    },
    {
        name: "Mechanical & Product Engineering",
        roles: [
            {
                title: "Mechanical Design Engineer",
                description: "CAD, enclosure design, manufacturable hardware, thermal/structural design",
                location: "Shenzhen, China",
            },
        ],
    },
    {
        name: "Robotics & Autonomy",
        roles: [
            {
                title: "Robotics Engineer",
                description: "Robotics integration, perception/control systems, real-world deployment",
                location: "Shenzhen, China",
            },
        ],
    },
];

const JoinUs: React.FC = () => {
    return (
        <div className="relative min-h-screen bg-black text-white font-sans selection:bg-white/30">
            <Navbar />
            <CornerFrames color="dark" />

            {/* Hero */}
            <section className="relative pt-32 pb-16 px-6 md:px-12 lg:px-24">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tighter"
                >
                    Join Us
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="mt-4 text-sm md:text-base text-gray-400 max-w-xl leading-relaxed"
                >
                    We're building the future of industrial autonomy. If you want to work on hard problems across ML, robotics, hardware, and software — reach out at{' '}
                    <a href="mailto:team@mortar.cv" className="text-white hover:text-gray-300 transition-colors">team@mortar.cv</a>
                </motion.p>
            </section>

            {/* Roles */}
            <main className="relative z-10 px-6 md:px-12 lg:px-24 pb-32">
                {categories.map((category, catIndex) => (
                    <motion.section
                        key={category.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: catIndex * 0.05 }}
                        className="mb-12"
                    >
                        <h2 className="text-xs font-medium text-gray-500 tracking-wide uppercase mb-4">
                            {category.name}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {category.roles.map((role) => (
                                <a
                                    key={role.title}
                                    href="mailto:team@mortar.cv"
                                    className="group block rounded-lg border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.05] hover:border-white/20 transition-all"
                                >
                                    <h3 className="text-sm md:text-base font-medium text-white group-hover:text-gray-100 transition-colors">
                                        {role.title}
                                    </h3>
                                    {role.description && (
                                        <p className="mt-1 text-xs md:text-sm text-gray-500 leading-relaxed">
                                            {role.description}
                                        </p>
                                    )}
                                    <div className="mt-3 flex items-center gap-1.5 text-xs text-gray-500">
                                        <MapPin size={12} className="shrink-0" />
                                        <span>{role.location}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.section>
                ))}
            </main>

            <Footer />
        </div>
    );
};

export default JoinUs;
