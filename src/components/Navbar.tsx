import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
    initialTextColor?: 'text-black' | 'text-white';
}

const Navbar: React.FC<NavbarProps> = ({ initialTextColor = 'text-black' }) => {
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Determine text color based on scroll state and initial preference
    const textColor = scrolled ? 'text-white' : initialTextColor;
    const linkColor = scrolled ? 'text-gray-300 hover:text-white' : (initialTextColor === 'text-black' ? 'text-gray-600 hover:text-black' : 'text-gray-300 hover:text-white');

    return (
        <nav className={`fixed z-50 transition-all duration-500 ease-in-out left-1/2 -translate-x-1/2 ${scrolled
            ? 'top-4 w-[90%] md:w-[700px] rounded-full bg-[#050505]/80 backdrop-blur-xl border border-white/10 shadow-2xl py-3 px-6'
            : 'top-0 w-full border-transparent bg-transparent py-8 px-6'
            }`}>
            <div className="flex items-center justify-between w-full">
                <Link to="/" className="flex items-center gap-2">
                    <img src="/mortar-logo.png" alt="Mortar" className={`rounded-lg object-contain transition-all duration-500 ${scrolled ? 'w-8 h-8' : 'w-16 h-16'}`} />
                    <span className={`font-bold tracking-tight transition-all duration-500 ${textColor} ${scrolled ? 'text-xl' : 'text-4xl'}`}>Mortar</span>
                </Link>

                <div className={`hidden md:flex items-center gap-6 font-medium transition-all duration-500 ${linkColor} ${scrolled ? 'text-sm' : 'text-lg'}`}>
                    <Link to="/company" className="hover:text-opacity-80 transition-colors">Company</Link>
                    <Link to="/solutions" className="hover:text-opacity-80 transition-colors">Solutions</Link>
                    <Link to="/docs" className="hover:text-opacity-80 transition-colors">Docs</Link>
                </div>

                <button className={`rounded-full font-medium transition-all duration-500 ${scrolled
                    ? 'px-5 py-2 text-sm bg-white text-black hover:bg-gray-200'
                    : (initialTextColor === 'text-black' ? 'px-10 py-4 text-lg bg-black text-white hover:bg-gray-900' : 'px-10 py-4 text-lg bg-white text-black hover:bg-gray-200')
                    }`}>
                    Get Started
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
