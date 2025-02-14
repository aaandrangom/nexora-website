import React from 'react';
import { Globe, Monitor, Smartphone, Code, Database, Cloud, Shield, Wrench, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
    const services = [
        {
            icon: Globe,
            title: "Desarrollo Web",
            description: "Creamos sitios web modernos y aplicaciones web personalizadas utilizando las últimas tecnologías.",
            features: ["Sitios web responsivos", "Aplicaciones web progresivas (PWA)", "Optimización SEO"]
        },
        {
            icon: Monitor,
            title: "Aplicaciones de Escritorio",
            description: "Desarrollamos software de escritorio robusto y eficiente para optimizar tus procesos.",
            features: ["Interfaces intuitivas", "Alto rendimiento", "Integración con sistemas existentes"]
        },
        {
            icon: Smartphone,
            title: "Aplicaciones Android",
            description: "Diseñamos y desarrollamos aplicaciones móviles nativas para Android que destacan.",
            features: ["Diseño nativo Android", "Optimización de rendimiento", "Publicación en Play Store"]
        }
    ];

    const technologies = [
        { icon: Code, label: "Desarrollo Frontend" },
        { icon: Database, label: "Bases de Datos" },
        { icon: Cloud, label: "Cloud Computing" },
        { icon: Shield, label: "Seguridad" },
        { icon: Wrench, label: "Mantenimiento" }
    ];

    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/80"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-cyan-950 opacity-80"></div>
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 opacity-0 animate-fadeInUp">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-500 bg-clip-text text-transparent">
                            Nuestros Servicios
                        </span>
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Ofrecemos soluciones tecnológicas integrales para impulsar tu negocio hacia el futuro digital
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-black/30 rounded-xl p-6 border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300 hover:bg-cyan-950/20 opacity-0 animate-fadeInUp"
                            style={{ animationDelay: `${100 + (index * 100)}ms` }}
                        >
                            <service.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                            <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                            <p className="text-gray-300 mb-4">{service.description}</p>
                            <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="text-gray-400 text-sm flex items-center">
                                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="text-center mb-16">
                    <h3 className="text-xl font-semibold text-white mb-8 opacity-0 animate-fadeInUp delay-400">Tecnologías y Herramientas</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        {technologies.map((tech, index) => (
                            <div
                                key={index}
                                className="flex items-center bg-black/30 px-4 py-2 rounded-full border border-cyan-400/10 opacity-0 animate-fadeInUp"
                                style={{ animationDelay: `${500 + (index * 100)}ms` }}
                            >
                                <tech.icon className="w-4 h-4 text-cyan-400 mr-2" />
                                <span className="text-gray-300 text-sm">{tech.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center max-w-3xl mx-auto bg-gradient-to-r from-cyan-950/50 via-blue-950/50 to-cyan-950/50 p-8 rounded-2xl border border-cyan-400/20 opacity-0 animate-fadeInUp delay-1000">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        ¿Listo para transformar tu idea en realidad?
                    </h3>
                    <p className="text-gray-300 mb-8">
                        Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos
                    </p>
                    <a
                        href="/contacto"
                        className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold hover:scale-105 transition-transform duration-300"
                    >
                        Contactar ahora
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;