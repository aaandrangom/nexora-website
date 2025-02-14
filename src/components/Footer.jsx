import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Github, href: "#", label: "GitHub" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Instagram, href: "#", label: "Instagram" },
    ];

    const quickLinks = [
        { text: "Inicio", href: "/" },
        { text: "Servicios", href: "/servicios" },
        { text: "Sobre Nosotros", href: "/sobre-nosotros" },
        { text: "Contacto", href: "/contacto" },
    ];

    const services = [
        { text: "Desarrollo Web", href: "/servicios#web" },
        { text: "Aplicaciones de Escritorio", href: "/servicios#desktop" },
        { text: "Aplicaciones Android", href: "/servicios#android" },
        { text: "Consultoría IT", href: "/servicios#consultoria" },
    ];

    return (
        <footer className="relative bg-black/95 border-t border-cyan-400/10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Sección de la empresa */}
                    <div className="space-y-6 opacity-0 animate-fadeInUp delay-100">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Nexora Soft
                        </h3>
                        <p className="text-gray-400">
                            Transformamos ideas en soluciones digitales innovadoras para impulsar el éxito de tu negocio.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5 hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Rápidos */}
                    <div className="opacity-0 animate-fadeInUp delay-200">
                        <h4 className="text-white font-semibold mb-6">Links Rápidos</h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                                    >
                                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Servicios */}
                    <div className="opacity-0 animate-fadeInUp delay-300">
                        <h4 className="text-white font-semibold mb-6">Servicios</h4>
                        <ul className="space-y-4">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a
                                        href={service.href}
                                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                                    >
                                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        {service.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="opacity-0 animate-fadeInUp delay-400">
                        <h4 className="text-white font-semibold mb-6">Newsletter</h4>
                        <p className="text-gray-400 mb-4">
                            Suscríbete para recibir noticias y actualizaciones.
                        </p>
                        <form className="space-y-4">
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Tu email"
                                    className="flex-1 px-4 py-2 bg-black/30 border border-cyan-400/10 focus:border-cyan-400/30 rounded-l-lg text-white outline-none transition-colors duration-300"
                                />
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-r-lg hover:scale-105 transition-transform duration-300"
                                >
                                    <Mail className="w-5 h-5 text-white" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-cyan-400/10 mt-12 pt-8 text-center text-gray-400 opacity-0 animate-fadeInUp delay-500">
                    <p>© {new Date().getFullYear()} Nexora Soft. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;