import React from 'react';
import { Code, Users, Rocket, ShieldCheck } from 'lucide-react';
import AboutImage from '../assets/3.jpg';

const AboutSection = () => {
    const features = [
        { icon: Code, title: "Soluciones Personalizadas", text: "Desarrollo a medida para tus necesidades específicas" },
        { icon: Rocket, title: "Implementación Rápida", text: "Metodologías ágiles para resultados inmediatos" },
        { icon: ShieldCheck, title: "Seguridad Garantizada", text: "Protegemos tus datos y sistemas" },
        { icon: Users, title: "Equipo Especializado", text: "Profesionales con experiencia en el desarrollo de software" }
    ];

    return (
        <section className="relative py-24 md:py-32">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/80"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDEwIDAgTCAwIDAgMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnJw==')]"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-cyan-950 opacity-80"></div>
                </div>
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center mt-8">
                {/* Imagen */}
                <div className="relative order-2 md:order-1 opacity-0 animate-fadeInRight delay-300">
                    <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden border-2 border-cyan-400/30 shadow-xl">
                        <img
                            src={AboutImage}
                            alt="Nuestro equipo de desarrollo"
                            className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                        />
                    </div>
                </div>

                {/* Contenido */}
                <div className="flex flex-col justify-center order-1 md:order-2">
                    <div className="space-y-6">
                        <p className="text-cyan-400 uppercase tracking-wide text-sm font-medium opacity-0 animate-slideInLeft delay-100">
                            Sobre Nosotros
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold leading-tight opacity-0 animate-slideInLeft delay-200">
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-500 bg-clip-text text-transparent">
                                Innovación
                            </span>{' '}
                            <span className="text-gray-100">
                                hecha a tu medida
                            </span>
                        </h2>

                        <p className="text-base text-gray-300 leading-relaxed opacity-0 animate-slideInLeft delay-300">
                            En <strong className="text-cyan-400">Nexora Soft</strong>, transformamos ideas en herramientas digitales poderosas.
                            Somos un equipo apasionado de desarrolladores, diseñadores y estrategas digitales
                            comprometidos con el éxito de tu proyecto.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="group p-4 bg-black/30 rounded-lg border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300 hover:bg-cyan-950/20 opacity-0 animate-fadeInUp"
                                    style={{ animationDelay: `${400 + (index * 50)}ms` }}
                                >
                                    <feature.icon className="w-6 h-6 mb-3 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                                    <h3 className="text-base font-semibold mb-1 text-white">{feature.title}</h3>
                                    <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">{feature.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;