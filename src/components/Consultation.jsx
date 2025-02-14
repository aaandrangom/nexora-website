import React, { useState } from 'react';
import { Mail, Phone, Globe, Clock, Send, CheckCircle, Laptop } from 'lucide-react';
import { UsersService } from '../services/users.js';

const ConsultationSection = () => {
    const [formStatus, setFormStatus] = useState('idle');
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            content: "nexorasoft582@gmail.com",
            link: "mailto:nexorasoft582@gmail.com"
        },
        {
            icon: Phone,
            title: "Teléfono",
            content: "+593 97 888 0401",
            link: "https://api.whatsapp.com/send?phone=593978880401&text=Hola%20me%20interesan%20sus%20servicios",
            target: "_blank"
        },
        {
            icon: Globe,
            title: "Trabajo Remoto",
            content: "Servicios en todo Ecuador",
            link: "#"
        },
        {
            icon: Clock,
            title: "Respuesta Rápida",
            content: "En menos de 24 horas",
            link: "#"
        }
    ];

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('sending');
        setMessage('');

        try {
            await UsersService.sendConsultation(
                formData.name,
                formData.email
            );

            setFormStatus('success');
            setMessage('¡Solicitud enviada correctamente! Nos pondremos en contacto contigo pronto.');

            // Limpiar el formulario
            setFormData({
                name: '',
                email: ''
            });

            // Resetear después de 3 segundos
            setTimeout(() => {
                setFormStatus('idle');
                setMessage('');
            }, 3000);

        } catch (error) {
            setFormStatus('error');
            setMessage('Ha ocurrido un error al enviar la solicitud. Por favor, intenta nuevamente.');

            setTimeout(() => {
                setFormStatus('idle');
                setMessage('');
            }, 3000);
        }
    };

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
                            Solicita tu Asesoría Gratuita
                        </span>
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Obtén una consulta personalizada con nuestros expertos. Te ayudaremos a encontrar la mejor solución para tu proyecto.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div>
                        <div className="grid sm:grid-cols-2 gap-6 mb-8">
                            {contactInfo.map((info, index) => (
                                <a
                                    href={info.link}
                                    key={index}
                                    target={info.target ? "_blank" : "_self"}
                                    rel="noopener noreferrer"
                                    className="group bg-black/30 rounded-xl p-6 border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300 hover:bg-cyan-950/20 opacity-0 animate-fadeInUp"
                                    style={{ animationDelay: `${100 * index}ms` }}
                                >
                                    <info.icon className="w-6 h-6 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                                    <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                                    <p className="text-gray-300">{info.content}</p>
                                </a>
                            ))}
                        </div>

                        <div className="bg-gradient-to-r from-cyan-950/50 via-blue-950/50 to-cyan-950/50 p-6 rounded-xl border border-cyan-400/20 opacity-0 animate-fadeInUp delay-400">
                            <h3 className="text-xl font-semibold text-white mb-4">Beneficios de nuestra asesoría</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1" />
                                    <p className="text-gray-300">Evaluación personalizada de tus necesidades</p>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1" />
                                    <p className="text-gray-300">Recomendaciones técnicas específicas</p>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1" />
                                    <p className="text-gray-300">Estimación de costos y tiempos sin compromiso</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="opacity-0 animate-fadeInUp delay-500">
                        <form onSubmit={handleSubmit} className="space-y-6 bg-black/30 p-8 rounded-xl border border-cyan-400/10">
                            {message && (
                                <div className={`p-4 rounded-lg ${formStatus === 'success' ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'}`}>
                                    {message}
                                </div>
                            )}

                            <div>
                                <label className="block text-gray-300 mb-2" htmlFor="name">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg bg-black/30 border border-cyan-400/10 focus:border-cyan-400/30 text-white outline-none transition-colors duration-300"
                                    placeholder="Tu nombre completo"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg bg-black/30 border border-cyan-400/10 focus:border-cyan-400/30 text-white outline-none transition-colors duration-300"
                                    placeholder="tu@email.com"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold hover:scale-105 active:scale-95 transition-transform duration-300 flex items-center justify-center"
                                disabled={formStatus === 'sending'}
                            >
                                {formStatus === 'sending' ? (
                                    <span className="flex items-center">
                                        Enviando...
                                        <div className="ml-2 w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    </span>
                                ) : formStatus === 'success' ? (
                                    <span className="flex items-center">
                                        Solicitud Enviada <CheckCircle className="ml-2 w-5 h-5" />
                                    </span>
                                ) : (
                                    <span className="flex items-center">
                                        Solicitar Asesoría <Send className="ml-2 w-5 h-5" />
                                    </span>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConsultationSection;