import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Tier = {
    name: string;
    description: string;
    features: string[];
};

type Service = {
    id: string;
    title: string;
    tag: string;
    tiers?: Tier[];
    description?: string;
    isCustom?: boolean;
};

const servicesList: Service[] = [
    {
        id: "landings",
        title: "Landing Pages",
        tag: "HIGH_CONVERSION",
        tiers: [
            {
                name: "Esencial",
                description: "Presencia y contacto rápido.",
                features: ["Hero (headline + CTA)", "Servicios / oferta", "Formulario / WhatsApp", "Responsive + Carga rápida", "SEO básico"]
            },
            {
                name: "Profesional",
                description: "Destaca con diseño cuidado.",
                features: ["Todo lo Esencial", "Animaciones suaves", "Problema + Solución", "Testimonios", "Copy optimizado"]
            },
            {
                name: "Premium",
                description: "Inversión en marketing real.",
                features: ["Todo lo Profesional", "Microinteracciones", "Agenda integrada", "Lead Magnet", "Personalización total"]
            }
        ]
    },
    {
        id: "sites",
        title: "Sitios Web",
        tag: "BRAND_AUTHORITY",
        tiers: [
            {
                name: "Esencial",
                description: "Negocios locales pequeños.",
                features: ["Hasta 4 páginas", "Sobre nosotros / Contacto", "Diseño professional responsive", "Integración WhatsApp", "SEO inicial"]
            },
            {
                name: "Profesional",
                description: "Presencia sólida empresarial.",
                features: ["Hasta 7 páginas", "Página de Servicios", "Galerías / Portafolio", "Formularios avanzados", "SEO trabajado"]
            },
            {
                name: "Premium",
                description: "Empresas en crecimiento.",
                features: ["Páginas ilimitadas (Hasta 15)", "Integraciones (CRM, APIs)", "SEO Técnico", "Velocidad optimizada", "Desarrollo exclusivo"]
            }
        ]
    },
    {
        id: "ecommerce",
        title: "Ecommerce",
        tag: "SALES_MACHINE",
        description: "Vendemos en cualquier canal. Desde integración híbrida con WhatsApp para mercados locales (Maracaibo style) hasta automatización total en la nube para mercados globales como Shopify o desarrollos a medida.",
        isCustom: true
    },
    {
        id: "apps",
        title: "Apps a Medida",
        tag: "BUSINESS_LOGIC",
        description: "Desarrollo de software personalizado según las necesidades de tu negocio. Paneles administrativos, gestión de usuarios, CRMs internos, sistemas de ventas y facturación o automatización de procesos.",
        isCustom: true
    }
];

const Services: React.FC = () => {
    const [activeService, setActiveService] = useState<string>("landings");

    const selectedService = servicesList.find(s => s.id === activeService);

    return (
        <section id="services" className="relative py-24 md:py-40 px-[10%] border-t border-grid bg-bg-deep grain-effect overflow-hidden">
            <div className="absolute inset-0 grid-background opacity-10 pointer-events-none" />

            <div className="relative z-10 font-space">
                {/* Header */}
                <div className="mb-20">
                    <span className="text-accent font-mono text-xs tracking-widest uppercase mb-4 block">
                        [ 02 // TECHNICAL SOLUTIONS ]
                    </span>
                    <h2 className="text-4xl md:text-7xl font-archivo leading-none tracking-tighter">
                        PAQUETES Y <br /><span className="text-white/40 italic">SERVICIOS</span>
                    </h2>
                </div>

                {/* Main Service Selector */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-grid/30 border border-grid/30 mb-16">
                    {servicesList.map((service) => (
                        <button
                            key={service.id}
                            onClick={() => setActiveService(service.id)}
                            className={`p-6 md:p-10 text-left transition-all duration-300 relative group overflow-hidden ${activeService === service.id ? 'bg-white/5' : 'bg-bg-deep hover:bg-white/[0.02]'
                                }`}
                        >
                            <span className={`text-[10px] font-mono tracking-widest block mb-6 ${activeService === service.id ? 'text-accent' : 'opacity-30'
                                }`}>
                                //{service.tag}
                            </span>
                            <h3 className={`font-archivo text-xl md:text-2xl uppercase transition-colors ${activeService === service.id ? 'text-white' : 'text-white/30 group-hover:text-white/60'
                                }`}>
                                {service.title}
                            </h3>
                            {activeService === service.id && (
                                <motion.div layoutId="active-bg" className="absolute bottom-0 left-0 w-full h-[3px] bg-accent" />
                            )}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeService}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as any }}
                        className="min-h-[500px]"
                        style={{ willChange: 'opacity, transform' }}
                    >
                        {selectedService?.isCustom ? (
                            <div className="max-w-4xl grid md:grid-cols-2 gap-12">
                                <div>
                                    <h4 className="text-3xl font-archivo mb-8 text-white uppercase tracking-tighter">
                                        Arquitectura <br />Estratégica
                                    </h4>
                                    <p className="text-xl opacity-70 leading-relaxed mb-10 font-light">
                                        {selectedService.description}
                                    </p>
                                    <div className="flex gap-4">
                                        <button className="px-10 py-5 bg-white text-bg-deep font-archivo text-xs uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-500">
                                            Analizar Proyecto
                                        </button>
                                    </div>
                                </div>
                                <div className="border border-grid/50 p-8 md:p-12 flex flex-col justify-center bg-white/[0.01]">
                                    <span className="text-accent font-mono text-[10px] mb-4 tracking-[0.3em]">TECHNICAL_SCOPE</span>
                                    <ul className="space-y-4">
                                        {selectedService.id === 'apps' ? (
                                            ['Frontend + Backend a medida', 'Panel administrativo personalizado', 'Gestión de usuarios y roles', 'Integración con APIs externas', 'Reportes y estadísticas en tiempo real'].map((item) => (
                                                <li key={item} className="flex items-center gap-3 text-sm opacity-60">
                                                    <div className="w-1 h-1 bg-accent" /> {item}
                                                </li>
                                            ))
                                        ) : (
                                            ['Carrito de compras avanzado', 'Pasarelas de pago (Local/Global)', 'Gestión de stock automática', 'Paneles de administración', 'Optimización de conversión'].map((item) => (
                                                <li key={item} className="flex items-center gap-3 text-sm opacity-60">
                                                    <div className="w-1 h-1 bg-accent" /> {item}
                                                </li>
                                            ))
                                        )}
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-grid/20 border border-grid/20">
                                {selectedService?.tiers?.map((tier, idx) => (
                                    <div
                                        key={tier.name}
                                        className="bg-bg-deep p-8 md:p-12 flex flex-col hover:bg-white/[0.03] transition-all duration-500 group relative"
                                    >
                                        <div className="flex justify-between items-start mb-12">
                                            <h4 className="text-2xl font-archivo uppercase group-hover:text-accent transition-colors">{tier.name}</h4>
                                            <span className="text-white/10 font-archivo text-4xl leading-none">0{idx + 1}</span>
                                        </div>

                                        <p className="font-mono text-[10px] opacity-40 mb-10 tracking-[0.2em] uppercase h-8">
                                            {tier.description}
                                        </p>

                                        <ul className="flex-grow space-y-6 mb-16">
                                            {tier.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-start gap-4">
                                                    <span className="text-accent font-mono text-xs opacity-50 mt-1">/</span>
                                                    <span className="opacity-70 text-[13px] tracking-wide">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <button className="w-full py-5 border border-white/10 text-white font-archivo text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-bg-deep transition-all duration-500">
                                            Solicitar Plan
                                        </button>

                                        {/* Bottom accent */}
                                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-accent/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
                                    </div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Services;
