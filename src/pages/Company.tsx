import React from 'react';
import Navbar from '../components/Navbar';
import WhiteHoleBackground from '../components/WhiteHoleBackground';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Company: React.FC = () => {
    const jobs = [
        "Chief Engineer, ML/RL",
        "Chief Engineer, Robotics/Hardware",
        "Research Engineer, World Models",
        "Design Engineer"
    ];

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-white/30 overflow-x-hidden">
            <Navbar initialTextColor="text-white" />

            {/* SECTION: HERO (Background Only) */}
            <section className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 z-0">
                    <WhiteHoleBackground />
                </div>
            </section>

            {/* SECTION: CONTENT (Title + Text) */}
            <section className="relative z-10 -mt-[40vh] pb-10 px-6">
                <div className="max-w-3xl mx-auto space-y-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-6xl md:text-8xl font-heading font-bold tracking-tighter text-center md:text-left mb-16"
                    >
                        Build The World.
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p className="text-3xl md:text-4xl font-light leading-tight text-white mb-12">
                            The future of intelligent systems is here.
                        </p>
                        <div className="space-y-8 text-lg md:text-xl text-white font-light leading-relaxed">
                            <p>
                                Mortar is the company pioneering a new era in high-impact, scalable AI and robotics solutions.
                            </p>
                            <p>
                                Our goal is to build the backbone of tomorrow's industries by advancing infrastructure and tools that power the world’s most ambitious ventures.
                            </p>
                            <p>
                                We design and deploy cutting-edge technology that doesn’t just solve problems, it enables a better future at scale.
                            </p>
                            <p>
                                Our work is a high-risk, high-reward endeavor, but we believe the impact is transformative, for industries, for people, and for the planet.
                            </p>
                            <p>
                                You’ll work alongside a team of IMO founders and researchers, all aligned with our mission to disrupt and innovate at the deepest levels of technology.
                            </p>
                            <p>
                                We love urgency, execution, and relentless innovation. Since our founding in December 2025, we've made rapid progress and currently work with multibillion-dollar and IPOed companies.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION: HIRING */}
            <section className="pt-10 pb-32 px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-center md:text-left"
                    >
                        HIRING
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {jobs.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-sm"
                            >
                                <div className="flex justify-between items-start">
                                    <h3 className="text-xl md:text-2xl font-medium tracking-tight pr-8">{job}</h3>
                                    <ArrowUpRight className="text-white/40 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>
                                <div className="mt-8 flex items-center gap-2 text-sm text-white/40 group-hover:text-white/60 transition-colors">
                                    <span>San Francisco, CA</span>
                                    <span className="w-1 h-1 rounded-full bg-white/20"></span>
                                    <span>Full-time</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Company;
