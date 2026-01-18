import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
    variant?: 'light' | 'dark';
}

const Footer: React.FC<FooterProps> = ({ variant = 'dark' }) => {
    const textColor = variant === 'dark' ? 'text-gray-500' : 'text-gray-400';
    const dotColor = variant === 'dark' ? 'text-gray-600' : 'text-gray-300';
    const hoverColor = variant === 'dark' ? 'hover:text-gray-300' : 'hover:text-gray-600';

    return (
        <footer className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
            <div className={`flex items-center gap-4 text-xs ${textColor}`}>
                <p>© 2025 Mortar Vault, Inc.</p>
                <span className={dotColor}>·</span>
                <Link to="/terms" className={`${hoverColor} transition-colors`}>
                    Terms
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
