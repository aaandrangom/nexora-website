import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import HeroImagen from '../assets/5.jpg';

const HeroSection = () => {
    return (
        <div className="relative text-white min-h-screen flex items-center overflow-hidden bg-black">
            {/* Fondo */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/80"></div>
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDEwIDAgTCAwIDAgMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnJw==')]"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-cyan-950 opacity-80"></div>
                </div>
            </div>

            {/* Contenido */}
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center z-10">
                {/* Texto */}
                <div className="z-10 order-2 md:order-1">
                    <p className="text-cyan-400 mb-4 uppercase tracking-wide font-medium opacity-0 animate-slideInLeft delay-100">
                        Desarrollo de software
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight opacity-0 animate-slideInLeft delay-200">
                        Impulsa tu{' '}
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-500 bg-clip-text text-transparent">
                            negocio digital
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed opacity-0 animate-slideInLeft delay-300">
                        Diseñamos soluciones tecnológicas eficientes y personalizadas
                        para llevar tu empresa al siguiente nivel.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fadeIn delay-400">
                        <a
                            href="https://api.whatsapp.com/send?phone=593978880401&text=Hola%20me%20interesan%20sus%20servicios"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2 hover:scale-105"
                        >
                            Descubre Más
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>

                        <button className="group border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-cyan-400/10 flex items-center justify-center gap-2 hover:scale-105">
                            Agenda una Cita
                            <Calendar className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                        </button>
                    </div>
                </div>

                {/* Imagen */}
                <div className="relative flex items-center justify-center order-1 md:order-2 opacity-0 animate-fadeInRight delay-500">
                    <div className="w-full flex justify-center md:justify-end">
                        <div className="w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-lg transition-all duration-500 hover:scale-105">
                            <img
                                src={HeroImagen}
                                alt="Desarrollo de software innovador"
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;