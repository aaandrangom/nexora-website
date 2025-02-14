import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [activeLink, setActiveLink] = useState('inicio');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navLinks = ['Inicio', 'Sobre Nosotros', 'Servicios', 'Contacto'];
    const navigate = useNavigate();

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="fixed w-full z-50 bg-gradient-to-b from-[#0A192F] to-[#112D4E] backdrop-blur-md shadow-md">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="text-2xl sm:text-3xl font-extrabold tracking-wide text-white">
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            nexora
                        </span>
                        <span className="text-gray-300">soft</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link}
                                href={`${link.toLowerCase().replace(' ', '-')}`}
                                className={`text-sm font-medium transition-all duration-300
                                    ${activeLink === link
                                        ? 'text-cyan-400'
                                        : 'text-gray-300 hover:text-cyan-400 hover:scale-110'}`}
                                onClick={() => handleLinkClick(link)}
                            >
                                {link}
                            </a>
                        ))}

                        {/* CTA Button */}
                        <button
                            onClick={() => navigate("/asesorias")}
                            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide shadow-lg 
                      hover:scale-105 hover:shadow-cyan-500/50 active:scale-95 transition-all duration-300"
                        >
                            agenda una cita
                        </button>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white active:scale-90 transition-transform"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden bg-[#0A192F] overflow-hidden transition-all duration-300 ease-out 
                               ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="flex flex-col items-center space-y-4 py-6">
                        {navLinks.map((link) => (
                            <a
                                key={link}
                                href={`${link.toLowerCase().replace(' ', '-')}`}
                                className={`text-sm font-medium transition-all duration-300
                                    ${activeLink === link
                                        ? 'text-cyan-400'
                                        : 'text-gray-300 hover:text-cyan-400 hover:scale-110'}`}
                                onClick={() => handleLinkClick(link)}
                            >
                                {link}
                            </a>
                        ))}

                        <button
                            onClick={() => navigate("/asesorias")}
                            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide shadow-lg 
                      hover:scale-105 hover:shadow-cyan-500/50 active:scale-95 transition-all duration-300"
                        >
                            agenda una cita
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;