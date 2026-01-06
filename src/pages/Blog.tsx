import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';

const Blog: React.FC = () => {
    const posts = [
        {
            category: "Engineering",
            title: "The Future of Concrete: Self-Healing Materials",
            excerpt: "How bio-concrete is changing the lifespan of modern infrastructure and reducing maintenance costs by 40%.",
            date: "Oct 24, 2025",
            readTime: "5 min read",
            image: "bg-gradient-to-br from-gray-800 to-gray-900"
        },
        {
            category: "Intelligence",
            title: "Why Predictive Scheduling Wins Bids",
            excerpt: "Data shows that general contractors using AI scheduling win 3x more bids than traditional firms.",
            date: "Oct 18, 2025",
            readTime: "8 min read",
            image: "bg-gradient-to-br from-blue-900 to-gray-900"
        },
        {
            category: "Case Study",
            title: "Skyline Tower: A Mortar Success Story",
            excerpt: "How one project saved $2.4M in delay penalties using Mortar's risk mitigation engine.",
            date: "Oct 12, 2025",
            readTime: "12 min read",
            image: "bg-gradient-to-br from-purple-900 to-gray-900"
        },
        {
            category: "Product",
            title: "Introducing Mortar V2.0",
            excerpt: "A deep dive into our new operational intelligence layer and what it means for your daily workflow.",
            date: "Oct 05, 2025",
            readTime: "6 min read",
            image: "bg-gradient-to-br from-green-900 to-gray-900"
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
                            Transmission<br />Log.
                        </h1>
                        <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent mb-8"></div>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                            <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
                                Insights, updates, and engineering deep dives from the team building the future of construction intelligence.
                            </p>
                            <div className="flex gap-4">
                                <span className="px-4 py-2 rounded-full border border-white/10 text-sm hover:bg-white/5 cursor-pointer transition-colors">All</span>
                                <span className="px-4 py-2 rounded-full border border-white/10 text-sm hover:bg-white/5 cursor-pointer transition-colors">Engineering</span>
                                <span className="px-4 py-2 rounded-full border border-white/10 text-sm hover:bg-white/5 cursor-pointer transition-colors">Product</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                    {posts.map((post, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            <div className={`aspect-[16/9] rounded-2xl mb-8 overflow-hidden border border-white/10 relative ${post.image}`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                {/* Abstract Pattern Overlay */}
                                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>

                                <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-xs font-mono uppercase tracking-wider">
                                    {post.category}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-sm text-gray-500 font-mono">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {post.readTime}
                                    </div>
                                </div>

                                <h2 className="text-3xl font-bold group-hover:text-gray-300 transition-colors flex items-start justify-between gap-4">
                                    {post.title}
                                    <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all -translate-y-2 group-hover:translate-y-0" />
                                </h2>

                                <p className="text-gray-400 leading-relaxed">
                                    {post.excerpt}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-32 px-6 border-t border-white/5">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-6">Stay in the loop</h3>
                    <p className="text-gray-400 mb-10">Join 10,000+ builders receiving our weekly intelligence report.</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-white/30 transition-colors text-white"
                        />
                        <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Blog;
