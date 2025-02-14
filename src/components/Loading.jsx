import React from 'react';

const LoadingScreen = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="relative">
                {/* Círculo giratorio principal */}
                <div className="w-32 h-32 rounded-full border-4 border-cyan-400 border-t-transparent animate-spinPulse" />

                {/* Efecto de pulso */}
                <div className="absolute inset-0 rounded-full bg-cyan-400/20 animate-pulseLayer" />

                {/* Texto */}
                <div className="absolute inset-0 flex items-center justify-center animate-fadeIn">
                    <div className="text-cyan-400 font-semibold">Cargando...</div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;