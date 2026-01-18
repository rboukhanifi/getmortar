import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="absolute bottom-0 left-0 right-0 py-6 px-6 z-10">
            <div className="flex justify-between items-center text-xs text-gray-500">
                <p>© 2025 Mortar Vault, Inc.</p>
                <Link to="/terms" className="hover:text-gray-300 transition-colors">
                    Terms
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
