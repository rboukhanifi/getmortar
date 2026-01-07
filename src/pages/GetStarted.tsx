import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { ThumbsUp, ThumbsDown, ArrowRight, Check, Building2, Users, DollarSign } from 'lucide-react';

type Step = 'industrial' | 'industry' | 'size' | 'volume' | 'contact' | 'eliminated' | 'success';

const GetStarted: React.FC = () => {
    const [currentStep, setCurrentStep] = useState<Step>('industrial');
    const [formData, setFormData] = useState({
        isIndustrial: null as boolean | null,
        industry: '',
        companySize: '',
        dealVolume: '',
        name: '',
        email: '',
        company: '',
        phone: ''
    });

    const getCurrentStepNumber = () => {
        switch (currentStep) {
            case 'industrial': return 1;
            case 'industry': return 2;
            case 'size': return 3;
            case 'volume': return 4;
            default: return 4;
        }
    };

    const handleIndustrialAnswer = (answer: boolean) => {
        setFormData({ ...formData, isIndustrial: answer });
        if (answer) {
            setCurrentStep('industry');
        } else {
            setCurrentStep('eliminated');
        }
    };

    const handleIndustrySubmit = () => {
        if (formData.industry.trim()) {
            setCurrentStep('size');
        }
    };

    const handleSizeSelect = (size: string) => {
        setFormData({ ...formData, companySize: size });
        if (size === '1-50' || size === '50-100') {
            setCurrentStep('eliminated');
        } else {
            setCurrentStep('volume');
        }
    };

    const handleVolumeSelect = (volume: string) => {
        setFormData({ ...formData, dealVolume: volume });
        setCurrentStep('contact');
    };

    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        console.log('Form submitted:', formData);
        setCurrentStep('success');
    };

    const handleEliminatedSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Newsletter signup:', formData.email);
        setCurrentStep('success');
    };

    const companySizes = [
        { value: '1-50', label: '1-50' },
        { value: '50-100', label: '50-100' },
        { value: '100-500', label: '100-500' },
        { value: '500-1000', label: '500-1,000' },
        { value: '1000+', label: '1,000+' }
    ];

    const dealVolumes = [
        { value: '0-5m', label: '$0 - $5M' },
        { value: '5-15m', label: '$5M - $15M' },
        { value: '15-30m', label: '$15M - $30M' },
        { value: '30-50m', label: '$30M - $50M' },
        { value: '50-100m', label: '$50M - $100M' },
        { value: '100m+', label: '$100M+' }
    ];

    return (
        <div className="min-h-screen bg-[#f5f5f5] text-black font-sans selection:bg-black/20">
            <Navbar initialTextColor="text-black" />

            <div className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
                        {/* Left Side - Value Proposition */}
                        <div className="lg:sticky lg:top-32">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 md:mb-6 tracking-tight leading-[1.1]">
                                    Unlock Labor Efficiency for Your Projects
                                </h1>
                                <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
                                    Request a personalized demo to see how Mortar Vault helps industrial companies reduce rework by 15% and improve crew productivity from day one.
                                </p>

                                <div className="space-y-4 mb-12">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                                            <Check className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="text-gray-700">Ground-truth visibility with AEGIS wearables</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                                            <Check className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="text-gray-700">Real-time operational intelligence with Zhora</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                                            <Check className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="text-gray-700">ROI within the first project cycle</span>
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="hidden sm:grid grid-cols-3 gap-4 md:gap-6 p-4 md:p-6 bg-white rounded-2xl border border-gray-200">
                                    <div className="text-center">
                                        <div className="text-2xl md:text-3xl font-bold text-black">15%</div>
                                        <div className="text-xs md:text-sm text-gray-500">Rework Reduction</div>
                                    </div>
                                    <div className="text-center border-x border-gray-200">
                                        <div className="text-2xl md:text-3xl font-bold text-black">$800K</div>
                                        <div className="text-xs md:text-sm text-gray-500">Contracts Signed</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl md:text-3xl font-bold text-black">3x</div>
                                        <div className="text-xs md:text-sm text-gray-500">Faster Ramp-up</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Side - Form */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-white rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-xl border border-gray-100"
                            >
                                <h2 className="text-2xl font-bold text-center mb-2">Request a Demo</h2>
                                <p className="text-center text-gray-500 text-sm mb-6">
                                    Already have an account?{' '}
                                    <a href="https://app.getmortar.ai" className="text-black font-medium hover:underline">
                                        Log in
                                    </a>
                                </p>

                                {/* Progress Bar */}
                                {!['eliminated', 'success', 'contact'].includes(currentStep) && (
                                    <div className="mb-8">
                                        <div className="flex justify-between mb-2">
                                            {[1, 2, 3, 4].map((step) => (
                                                <div
                                                    key={step}
                                                    className={`flex-1 h-1 mx-1 rounded-full transition-colors ${
                                                        step <= getCurrentStepNumber() ? 'bg-orange-500' : 'bg-gray-200'
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <AnimatePresence mode="wait">
                                    {/* Step 1: Industrial Company */}
                                    {currentStep === 'industrial' && (
                                        <motion.div
                                            key="industrial"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-6"
                                        >
                                            <p className="text-center text-gray-600 mb-6">
                                                Do you own or operate an industrial company?
                                                <span className="block text-sm text-gray-400 mt-1">(Construction, Oil & Gas, Manufacturing, etc.)</span>
                                            </p>
                                            <div className="grid grid-cols-2 gap-4">
                                                <button
                                                    onClick={() => handleIndustrialAnswer(true)}
                                                    className="flex flex-col items-center gap-3 p-6 rounded-2xl border-2 border-gray-200 hover:border-orange-500 hover:bg-orange-50 transition-all group"
                                                >
                                                    <ThumbsUp className="w-10 h-10 text-gray-400 group-hover:text-orange-500 transition-colors" />
                                                    <span className="font-semibold">Yes</span>
                                                </button>
                                                <button
                                                    onClick={() => handleIndustrialAnswer(false)}
                                                    className="flex flex-col items-center gap-3 p-6 rounded-2xl border-2 border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all group"
                                                >
                                                    <ThumbsDown className="w-10 h-10 text-gray-400 group-hover:text-gray-600 transition-colors" />
                                                    <span className="font-semibold">No</span>
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Step 2: Industry */}
                                    {currentStep === 'industry' && (
                                        <motion.div
                                            key="industry"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-6"
                                        >
                                            <div className="flex items-center justify-center gap-2 mb-4">
                                                <Building2 className="w-6 h-6 text-orange-500" />
                                                <p className="text-center text-gray-600">
                                                    Which industry is your company in?
                                                </p>
                                            </div>
                                            <input
                                                type="text"
                                                value={formData.industry}
                                                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                                                placeholder="e.g., Construction, Oil & Gas, Manufacturing..."
                                                className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors text-lg"
                                            />
                                            <button
                                                onClick={handleIndustrySubmit}
                                                disabled={!formData.industry.trim()}
                                                className="w-full py-4 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                            >
                                                Next <ArrowRight className="w-5 h-5" />
                                            </button>
                                        </motion.div>
                                    )}

                                    {/* Step 3: Company Size */}
                                    {currentStep === 'size' && (
                                        <motion.div
                                            key="size"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-6"
                                        >
                                            <div className="flex items-center justify-center gap-2 mb-4">
                                                <Users className="w-6 h-6 text-orange-500" />
                                                <p className="text-center text-gray-600">
                                                    What is the size of your company?
                                                </p>
                                            </div>
                                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                                                {companySizes.map((size) => (
                                                    <button
                                                        key={size.value}
                                                        onClick={() => handleSizeSelect(size.value)}
                                                        className="py-3 px-3 sm:py-4 sm:px-4 rounded-xl border-2 border-gray-200 hover:border-orange-500 hover:bg-orange-50 transition-all font-medium text-sm sm:text-base"
                                                    >
                                                        {size.label}
                                                    </button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Step 4: Deal Volume */}
                                    {currentStep === 'volume' && (
                                        <motion.div
                                            key="volume"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-6"
                                        >
                                            <div className="flex items-center justify-center gap-2 mb-4">
                                                <DollarSign className="w-6 h-6 text-orange-500" />
                                                <p className="text-center text-gray-600">
                                                    What is your annual deal volume?
                                                </p>
                                            </div>
                                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                                                {dealVolumes.map((volume) => (
                                                    <button
                                                        key={volume.value}
                                                        onClick={() => handleVolumeSelect(volume.value)}
                                                        className="py-3 px-2 sm:py-4 sm:px-4 rounded-xl border-2 border-gray-200 hover:border-orange-500 hover:bg-orange-50 transition-all font-medium text-sm sm:text-base"
                                                    >
                                                        {volume.label}
                                                    </button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Contact Form (Qualified Lead) */}
                                    {currentStep === 'contact' && (
                                        <motion.div
                                            key="contact"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                        >
                                            <div className="text-center mb-6">
                                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
                                                    <Check className="w-4 h-4" /> You qualify for a demo
                                                </div>
                                                <p className="text-gray-600">Complete your details to schedule a call</p>
                                            </div>
                                            <form onSubmit={handleContactSubmit} className="space-y-4">
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    placeholder="Full Name"
                                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                                                />
                                                <input
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    placeholder="Work Email"
                                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                                                />
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.company}
                                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                    placeholder="Company Name"
                                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                                                />
                                                <input
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    placeholder="Phone Number (Optional)"
                                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                                                />
                                                <button
                                                    type="submit"
                                                    className="w-full py-4 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                                                >
                                                    Schedule Demo <ArrowRight className="w-5 h-5" />
                                                </button>
                                            </form>
                                        </motion.div>
                                    )}

                                    {/* Eliminated Lead - Newsletter */}
                                    {currentStep === 'eliminated' && (
                                        <motion.div
                                            key="eliminated"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="text-center"
                                        >
                                            <div className="mb-6">
                                                <p className="text-gray-600 mb-2">
                                                    Thanks for your interest! Mortar Vault is currently designed for larger industrial operations.
                                                </p>
                                                <p className="text-gray-500 text-sm">
                                                    Stay updated on our progress and future offerings.
                                                </p>
                                            </div>
                                            <form onSubmit={handleEliminatedSubmit} className="space-y-4">
                                                <input
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    placeholder="Enter your email"
                                                    className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-black focus:outline-none transition-colors text-lg"
                                                />
                                                <button
                                                    type="submit"
                                                    className="w-full py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors"
                                                >
                                                    Keep Me Updated
                                                </button>
                                            </form>
                                        </motion.div>
                                    )}

                                    {/* Success */}
                                    {currentStep === 'success' && (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center py-8"
                                        >
                                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <Check className="w-8 h-8 text-green-600" />
                                            </div>
                                            <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                                            <p className="text-gray-600">
                                                {formData.isIndustrial
                                                    ? "We'll be in touch within 24 hours to schedule your demo."
                                                    : "You've been added to our mailing list."}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default GetStarted;
