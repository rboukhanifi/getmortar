import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30 overflow-x-hidden relative">
            <Navbar initialTextColor="text-white" />

            {/* Background 3D Elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                {/* Floating Cube 1 */}
                <div className="absolute top-1/4 left-10 w-32 h-32 opacity-20 animate-[float_6s_infinite_ease-in-out]">
                    <div className="w-full h-full border border-white/20 transform rotate-45 rotate-x-12 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm"></div>
                </div>
                {/* Floating Cube 2 */}
                <div className="absolute bottom-1/3 right-10 w-48 h-48 opacity-10 animate-[float_8s_infinite_ease-in-out_1s]">
                    <div className="w-full h-full border border-blue-500/20 transform -rotate-12 rotate-y-12 bg-gradient-to-tl from-blue-500/5 to-transparent backdrop-blur-sm"></div>
                </div>
                {/* Grid Overlay */}
                <div className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
                </div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-20">
                <div className="mb-16 text-center">
                    <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                        Terms of Service
                    </h1>
                    <p className="text-gray-400 text-lg">Last Updated: January 02, 2026</p>
                </div>

                <div className="space-y-12">
                    {/* Introduction */}
                    <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl hover:border-white/20 transition-colors duration-500">
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Welcome to Mortar ("we," "our," or "us"). These Terms of Service explain how we collect, use, share, and protect your information when you use our website and related services.
                        </p>
                    </div>

                    {/* Section 1 */}
                    <div className="relative pl-8 border-l border-white/10">
                        <div className="absolute -left-1.5 top-0 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                        <h2 className="text-2xl font-bold mb-6 text-white">1. Information We Collect</h2>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-3 text-gray-200">1.1 Personal Information</h3>
                            <p className="text-gray-400 leading-relaxed">
                                We may collect personal data such as your name, email address, and other contact details when you voluntarily provide them — for example, when you create an account, subscribe to updates, or contact us.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-200">1.2 Usage Information</h3>
                            <p className="text-gray-400 leading-relaxed">
                                We may automatically collect data about your use of the website, including your IP address, browser type, device information, and pages visited. This helps us understand usage patterns and improve our performance.
                            </p>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="relative pl-8 border-l border-white/10">
                        <div className="absolute -left-1.5 top-0 w-3 h-3 bg-white/50 rounded-full"></div>
                        <h2 className="text-2xl font-bold mb-6 text-white">2. How We Use Your Information</h2>
                        <p className="text-gray-400 mb-4">We use collected information to:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                            <li>Provide, operate, and maintain our website and services</li>
                            <li>Communicate with you about your account or inquiries</li>
                            <li>Send newsletters or promotional content you opt in to</li>
                            <li>Analyze and improve our services and user experience</li>
                        </ul>
                    </div>

                    {/* Section 3 */}
                    <div className="relative pl-8 border-l border-white/10">
                        <div className="absolute -left-1.5 top-0 w-3 h-3 bg-white/50 rounded-full"></div>
                        <h2 className="text-2xl font-bold mb-6 text-white">3. Sharing Your Information</h2>
                        <p className="text-gray-400 leading-relaxed">
                            We do not sell or trade your personal information. We may share limited data with trusted third-party partners who help us operate our website or provide services on our behalf — always under strict confidentiality agreements. We may also disclose information if required by law or to protect our legal rights.
                        </p>
                    </div>

                    {/* Section 4 */}
                    <div className="relative pl-8 border-l border-white/10">
                        <div className="absolute -left-1.5 top-0 w-3 h-3 bg-white/50 rounded-full"></div>
                        <h2 className="text-2xl font-bold mb-6 text-white">4. Cookies and Similar Technologies</h2>
                        <p className="text-gray-400 leading-relaxed">
                            We use cookies and similar tools to personalize your experience and gather analytics. You can control or disable cookies in your browser settings, though some site features may not function properly as a result.
                        </p>
                    </div>

                    {/* Section 5 */}
                    <div className="relative pl-8 border-l border-white/10">
                        <div className="absolute -left-1.5 top-0 w-3 h-3 bg-white/50 rounded-full"></div>
                        <h2 className="text-2xl font-bold mb-6 text-white">5. Your Choices</h2>
                        <p className="text-gray-400 leading-relaxed">
                            You can manage how we communicate with you and request updates or deletion of your personal data at any time by contacting <a href="mailto:founder@getmortar.ai" className="text-white underline hover:text-gray-300 transition-colors">founder@getmortar.ai</a>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TermsOfService;
