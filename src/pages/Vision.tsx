import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const Vision: React.FC = () => {
    return (
        <div className="relative min-h-screen bg-black text-white font-sans selection:bg-white/30">
            <Navbar />

            {/* Hero Image */}
            <section className="w-full pt-20">
                <div className="max-w-5xl mx-auto px-6 md:px-12 pt-12">
                    <img
                        src="/vision-hero.jpg"
                        alt="Ice climber ascending a frozen wall"
                        className="w-full h-auto object-cover rounded-sm"
                    />
                </div>
            </section>

            {/* Content */}
            <main className="relative z-10 py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-2xl">

                    {/* Section 1 - Mortar's Mission */}
                    <motion.section
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-24"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
                            Mortar's Mission
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            Scarce physical intelligence, commoditized to build the world.
                        </p>
                    </motion.section>

                    {/* Section 2 - Our Products */}
                    <motion.section
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
                            Our Products
                        </h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">1. Mortar Data</h3>
                                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                                    The system for capturing high-value real-world physical experience.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">2. Mortar Aegis</h3>
                                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                                    It is the hardware layer that captures, protects, and deploys physical intelligence in the real world.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">3. Mortar Models</h3>
                                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                                    The intelligence layer that learns from real-world experience and turns it into autonomous, scalable robotic systems.
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 space-y-6 text-sm md:text-base text-gray-400 leading-relaxed">
                            <p>
                                At Mortar, we build autonomous and scalable robotics systems that operate for the user, with the goal of creating intelligent abundance for massive production and development. Our aim is to condense decades of product and operational experience into machines that can act on it.
                            </p>
                        </div>
                    </motion.section>

                    {/* Section 3 - The Only Real Reality */}
                    <motion.section
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
                            The Only Real Reality
                        </h2>
                        <div className="space-y-6 text-sm md:text-base text-gray-400 leading-relaxed">
                            <p>
                                In the midst of chaos, only clarity wins. Hardware cannot be commoditized unless the intelligence behind it is commoditized. No organization can rebuild decades of experience unless that experience is logically captured, ingested, and transferred.
                            </p>
                            <p>
                                You only learn from experience. When someone has performed a task for years, you should expect them to outperform the beginner. The same is true for hardware, for manufacturing, for operations, and for systems. Experience wins.
                            </p>
                            <p>
                                It is only by scaling experience that you can commoditize it.
                            </p>
                            <p>
                                An organization, a process, or a relationship becomes valuable not when it is established, but when time has passed through it. Time compounds value. The longer it has existed and operated, the more valuable it becomes. That accumulation is not linear. It is exponential. The one that started last week is already ten years behind.
                            </p>
                            <p>
                                This is the shift away from linear thinking. Pure human transfer of experience is slow, not scalable, and ultimately a bottleneck for civilization.
                            </p>
                        </div>
                    </motion.section>

                    {/* Section 4 - Experience */}
                    <motion.section
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
                            Experience
                        </h2>
                        <div className="space-y-6 text-sm md:text-base text-gray-400 leading-relaxed">
                            <p>
                                Humanity, since its dawn, has accumulated a vast library of skills: fire, the wheel, blacksmithing, cooking, farming, construction, toolmaking, and countless others.
                            </p>
                            <p>
                                This is the library of human capability. It is the accumulation of hundreds of thousands of years of evolution, thousands of years of learning, centuries of refinement, and now decades of work toward non-human intelligence.
                            </p>
                            <p>
                                The logical path has always been the same: take what already works and transfer it. Do not restart from scratch.
                            </p>
                            <p>
                                Experience is the moat. The one who has the most of it is king.
                            </p>
                        </div>
                    </motion.section>

                    {/* Section 5 - The Inevitable Transfer */}
                    <motion.section
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
                            The Inevitable Transfer
                        </h2>
                        <div className="space-y-6 text-sm md:text-base text-gray-400 leading-relaxed">
                            <p>
                                Shenzhen is the Mecca of hardware. Many have tried to replicate it around the world. Most have failed.
                            </p>
                            <p>
                                The reason is simple, Shenzhen is the product of time, density, sweat, blood, repetition, relationships, and industrial memory. It is accumulated experience.
                            </p>
                            <p>
                                But the sheer human determination does not stop. The world will keep trying, again and again, to reproduce this capability elsewhere. Nothing can stop humanity from trying to replicate and expand productive power.
                            </p>
                            <p>
                                Because it must.
                            </p>
                            <p>
                                Software has become a commodity. Hardware must become one too. The only real path is not to rebuild this vast industrial architecture from scratch every time. The path is to begin the transfer of experience itself.
                            </p>
                            <p className="text-white font-medium text-base md:text-lg">
                                We commoditize centuries of experience.
                            </p>
                        </div>
                    </motion.section>

                    {/* Section 6 - Commoditizing Experience */}
                    <motion.section
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
                            Commoditizing Experience with Physical Intelligence
                        </h2>
                        <div className="space-y-6 text-sm md:text-base text-gray-400 leading-relaxed">
                            <p>
                                Once we have the robots and the compute to power them, the question is simple:
                            </p>
                            <p>
                                What do we expect from them?
                            </p>
                            <p>
                                Will they replace human labor in the physical world, or will they rust in containers?
                            </p>
                            <p>
                                The answer depends on whether they can inherit experience.
                            </p>

                            <h3 className="text-xl md:text-2xl font-semibold text-white pt-4">
                                Three Steps to Commoditize Experience
                            </h3>

                            <ol className="list-decimal list-inside space-y-3 text-gray-300">
                                <li>Capture tasks executed by experienced physical operators</li>
                                <li>Predict physical future states and behaviors</li>
                                <li>Deploy robots with years of predicted physical experience</li>
                            </ol>

                            <p>
                                These three steps form the scalable model for transferring human experience into commoditized robotic experience.
                            </p>
                        </div>
                    </motion.section>

                    {/* Section 7 - Experienced Robots */}
                    <motion.section
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
                            Experienced Robots
                        </h2>
                        <div className="space-y-6 text-sm md:text-base text-gray-400 leading-relaxed">
                            <p>
                                What are the chances for a human to be born and know exactly how to build our world?
                            </p>
                            <p>
                                It's 0%.
                            </p>
                            <p>
                                We expect something similar from robots. In itself robots are just pieces of metal, components assembled in a factory. AI can learn. Same will go with our future robots, they will be intelligent at a certain extent. Enabling thousands of years of experience being transferred to a robot.
                            </p>
                            <p>
                                We will be giving them the power to handle our most important piece to our race's evolution. Manufacturing.
                            </p>
                            <p>
                                Because manufacturing is the first and sole industry that matters for now. The reason being that if robots can build other robots autonomously this is going to declare the takeoff moment for robotics.
                            </p>
                            <p>
                                Pro-industrialisation builders need to be careful with thinking that they can just rebuild a version of Shenzhen just by throwing money at it. They fall for the fascination of having the same architecture with the same culture at the price of lacking this experience.
                            </p>
                            <p>
                                Having experienced robots means having perfectly suited robots trained on thousands of years of experience for that specific task.
                            </p>
                        </div>
                    </motion.section>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Vision;
