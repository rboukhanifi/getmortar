import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
    variant?: 'dark' | 'light';
}

const Footer: React.FC<FooterProps> = ({ variant = 'dark' }) => {
    const isDark = variant === 'dark';

    return (
        <footer className={`py-12 border-t text-center text-sm relative z-10 ${
            isDark
                ? 'bg-[#050505] border-white/5 text-gray-500'
                : 'bg-white border-gray-200 text-gray-400'
        }`}>
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p>© 2025 Mortar Vault, Inc. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link to="/terms" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>
                        Terms of Service
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
