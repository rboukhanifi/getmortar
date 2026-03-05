import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    return (
        <>
            <nav className="fixed z-50 left-1/2 -translate-x-1/2 top-4 w-[90%] max-w-[700px] rounded-full bg-[#050505]/80 backdrop-blur-xl border border-white/10 shadow-2xl py-3 px-4 md:px-6">
                <div className="flex items-center justify-between w-full">
                    <Link to="/" className="flex items-center gap-2">
                        <img src="/mortar-logo.png" alt="Mortar" className="rounded-lg object-contain w-8 h-8" />
                        <span className="font-bold tracking-tight text-white text-lg md:text-xl">Mortar</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 font-medium text-gray-300 text-sm">
                        <Link to="/aegisp1" className="hover:text-white transition-colors">Product</Link>
                        <Link to="/company" className="hover:text-white transition-colors">Company</Link>
                        <Link to="/research" className="hover:text-white transition-colors">Research</Link>
                        <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
                    <div className="absolute top-20 left-4 right-4 rounded-2xl p-6 shadow-2xl bg-[#050505] border border-white/10">
                        <div className="flex flex-col gap-4">
                            <Link
                                to="/aegisp1"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-lg font-medium py-3 px-4 rounded-lg text-white hover:bg-white/10 transition-colors"
                            >
                                Product
                            </Link>
                            <Link
                                to="/company"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-lg font-medium py-3 px-4 rounded-lg text-white hover:bg-white/10 transition-colors"
                            >
                                Company
                            </Link>
                            <Link
                                to="/research"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-lg font-medium py-3 px-4 rounded-lg text-white hover:bg-white/10 transition-colors"
                            >
                                Research
                            </Link>
                            <Link
                                to="/contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-lg font-medium py-3 px-4 rounded-lg text-white hover:bg-white/10 transition-colors"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
