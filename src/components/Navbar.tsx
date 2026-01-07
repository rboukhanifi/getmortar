import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
    initialTextColor?: 'text-black' | 'text-white';
}

const Navbar: React.FC<NavbarProps> = ({ initialTextColor = 'text-black' }) => {
    const [scrolled, setScrolled] = React.useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    React.useEffect(() => {
        setMobileMenuOpen(false);
    }, []);

    // Determine text color based on scroll state and initial preference
    const textColor = scrolled ? 'text-white' : initialTextColor;
    const linkColor = scrolled ? 'text-gray-300 hover:text-white' : (initialTextColor === 'text-black' ? 'text-gray-600 hover:text-black' : 'text-gray-300 hover:text-white');

    return (
        <>
            <nav className={`fixed z-50 transition-all duration-500 ease-in-out left-1/2 -translate-x-1/2 ${scrolled
                ? 'top-4 w-[90%] max-w-[700px] rounded-full bg-[#050505]/80 backdrop-blur-xl border border-white/10 shadow-2xl py-3 px-4 md:px-6'
                : 'top-0 w-full border-transparent bg-transparent py-4 md:py-8 px-4 md:px-6'
                }`}>
                <div className="flex items-center justify-between w-full">
                    <Link to="/" className="flex items-center gap-2">
                        <img src="/mortar-logo.png" alt="Mortar" className={`rounded-lg object-contain transition-all duration-500 ${scrolled ? 'w-8 h-8' : 'w-10 h-10 md:w-16 md:h-16'}`} />
                        <span className={`font-bold tracking-tight transition-all duration-500 ${textColor} ${scrolled ? 'text-lg md:text-xl' : 'text-2xl md:text-4xl'}`}>Mortar</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className={`hidden md:flex items-center gap-6 font-medium transition-all duration-500 ${linkColor} ${scrolled ? 'text-sm' : 'text-lg'}`}>
                        <Link to="/why-us" className="hover:text-opacity-80 transition-colors">Why Us</Link>
                        <Link to="/solutions" className="hover:text-opacity-80 transition-colors">Solutions</Link>
                        <Link to="/company" className="hover:text-opacity-80 transition-colors">Company</Link>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Get Started Button - Hidden on mobile when not scrolled */}
                        <Link to="/get-started" className={`rounded-full font-medium transition-all duration-500 hidden sm:block ${scrolled
                            ? 'px-4 py-2 text-sm bg-white text-black hover:bg-gray-200'
                            : (initialTextColor === 'text-black' ? 'px-6 md:px-10 py-3 md:py-4 text-base md:text-lg bg-black text-white hover:bg-gray-900' : 'px-6 md:px-10 py-3 md:py-4 text-base md:text-lg bg-white text-black hover:bg-gray-200')
                            }`}>
                            Get Started
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-white hover:bg-white/10' : `${textColor} hover:bg-black/5`}`}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
                    <div className={`absolute top-20 left-4 right-4 rounded-2xl p-6 shadow-2xl ${
                        initialTextColor === 'text-black' && !scrolled ? 'bg-white' : 'bg-[#050505] border border-white/10'
                    }`}>
                        <div className="flex flex-col gap-4">
                            <Link
                                to="/why-us"
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
                                    initialTextColor === 'text-black' && !scrolled
                                        ? 'text-gray-800 hover:bg-gray-100'
                                        : 'text-white hover:bg-white/10'
                                }`}
                            >
                                Why Us
                            </Link>
                            <Link
                                to="/solutions"
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
                                    initialTextColor === 'text-black' && !scrolled
                                        ? 'text-gray-800 hover:bg-gray-100'
                                        : 'text-white hover:bg-white/10'
                                }`}
                            >
                                Solutions
                            </Link>
                            <Link
                                to="/company"
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
                                    initialTextColor === 'text-black' && !scrolled
                                        ? 'text-gray-800 hover:bg-gray-100'
                                        : 'text-white hover:bg-white/10'
                                }`}
                            >
                                Company
                            </Link>
                            <hr className={`my-2 ${initialTextColor === 'text-black' && !scrolled ? 'border-gray-200' : 'border-white/10'}`} />
                            <Link
                                to="/get-started"
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-lg font-semibold py-3 px-4 rounded-lg text-center transition-colors ${
                                    initialTextColor === 'text-black' && !scrolled
                                        ? 'bg-black text-white hover:bg-gray-800'
                                        : 'bg-white text-black hover:bg-gray-200'
                                }`}
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
