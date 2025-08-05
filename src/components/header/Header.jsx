import React, { useState, useEffect } from 'react';
import { navLinks } from '/src/data/resumeData.js';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('overview');

    useEffect(() => {
        const handleScroll = () => {
            let current = '';
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 150) {
                    current = section.getAttribute('id');
                }
            });
            setActiveLink(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-slate-800">Raj Kumar Dutta</h1>
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`nav-link text-slate-600 font-medium ${activeLink === link.href.substring(1) ? 'active' : ''}`}
                        >
                            {link.text}
                        </a>
                    ))}
                </div>
                <div className="md:hidden">
                    <button id="menu-btn" className="text-slate-800 focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </div>
            </nav>
            {isMobileMenuOpen && (
                <div id="mobile-menu" className="md:hidden">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="block py-2 px-4 text-sm text-slate-600 hover:bg-slate-100"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.text}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;