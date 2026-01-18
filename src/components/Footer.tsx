import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
            <div className="flex items-center gap-4 text-xs text-gray-500">
                <p>© 2025 Mortar Vault, Inc.</p>
                <span className="text-gray-600">·</span>
                <Link to="/terms" className="hover:text-gray-300 transition-colors">
                    Terms
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
