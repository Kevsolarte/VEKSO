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
    clientDescription?: string;
    price?: string;
    isCustom?: boolean;
};

const servicesList: Service[] = [
    {
        id: "landings",
        title: "Landing Pages",
        tag: "HIGH_CONVERSION",
        clientDescription: "¿Necesitas que tu negocio consiga clientes desde internet?",
        description: "Una landing page es tu vendedor digital — trabaja 24/7 explicando lo que haces y convirtiendo visitas en contactos reales. Ideal para negocios que quieren presencia profesional rápida y resultados medibles.",
        price: "Desde $300",
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
        clientDescription: "¿Tu negocio necesita más que una sola página?",
        description: "Un sitio web completo proyecta autoridad, cuenta tu historia y le da a tus clientes todo lo que necesitan para confiar en ti antes de contactarte. Para negocios que quieren una presencia sólida y escalable.",
        price: "Desde $500",
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
        clientDescription: "¿Sigues vendiendo uno a uno por WhatsApp?",
        description: "Eso no escala. Te construimos una tienda online que vende sola — tus productos, precios y pagos en un solo lugar, disponible las 24 horas. Desde integración híbrida con WhatsApp hasta automatización total en la nube.",
        price: "Desde $1,000",
        isCustom: true
    },
    {
        id: "apps",
        title: "Apps a Medida",
        tag: "BUSINESS_LOGIC",
        clientDescription: "¿Tienes un problema que ningún software genérico resuelve?",
        description: "No adaptamos tu negocio a una herramienta existente — construimos exactamente lo que tu operación necesita. Inventarios, CRMs, sistemas de reservas, facturación automatizada. Código diseñado para tu flujo real.",
        price: "Desde $1,500",
        isCustom: true
    }
];

const getWhatsAppLink = (message: string) => {
    return `https://wa.me/584246777164?text=${encodeURIComponent(message)}`;
};

// Features shown in the single card per service
const serviceScopeFeatures: Record<string, string[]> = {
    landings: ["Diseño responsive y carga rápida", "Animaciones y microinteracciones", "Copy orientado a conversión", "Formulario / integración WhatsApp", "SEO básico incluido"],
    sites: ["Hasta 15 páginas según el plan", "Galerías, portafolio y servicios", "Formularios avanzados", "Integraciones (CRM, APIs)", "SEO técnico trabajado"],
    ecommerce: ["Carrito de compras avanzado", "Pasarelas de pago (Local/Global)", "Gestión de stock automática", "Paneles de administración", "Optimización de conversión"],
    apps: ["Frontend + Backend a medida", "Panel administrativo personalizado", "Gestión de usuarios y roles", "Integración con APIs externas", "Reportes y estadísticas en tiempo real"],
};

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

                {/* Service Tabs */}
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

                {/* Service Content — Single Card */}
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
                        <div className="border border-grid/30 bg-white/[0.01] grid md:grid-cols-2 gap-0">

                            {/* Left — Description */}
                            <div className="p-10 md:p-14 flex flex-col justify-between border-r border-grid/30">
                                <div>
                                    <span className="text-accent font-mono text-[10px] tracking-[0.3em] uppercase block mb-6">
                                        //{selectedService?.tag}
                                    </span>
                                    <h4 className="text-2xl md:text-4xl font-archivo uppercase tracking-tighter text-white mb-6 leading-tight">
                                        {selectedService?.clientDescription}
                                    </h4>
                                    <p className="text-sm md:text-base opacity-60 leading-relaxed font-light mb-10">
                                        {selectedService?.description}
                                    </p>
                                </div>

                                <div className="flex flex-col gap-4">
                                    {/* Price */}
                                    <div className="flex items-center gap-4">
                                        <span className="text-white/20 font-mono text-[10px] tracking-widest uppercase">INVERSIÓN</span>
                                        <span className="text-accent font-archivo text-2xl tracking-tight">{selectedService?.price}</span>
                                    </div>

                                    {/* CTA */}
                                    <a
                                        href={getWhatsAppLink(`Hola VEKSO, me interesa el servicio de ${selectedService?.title}. Me gustaría saber más.`)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-10 py-5 bg-white text-bg-deep font-archivo text-xs uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-500 no-underline text-center"
                                    >
                                        Solicitar Proyecto
                                    </a>
                                </div>
                            </div>

                            {/* Right — Scope */}
                            <div className="p-10 md:p-14 flex flex-col justify-center bg-white/[0.01]">
                                <span className="text-accent font-mono text-[10px] mb-8 tracking-[0.3em] uppercase block">
                                    TECHNICAL_SCOPE
                                </span>
                                <ul className="space-y-5">
                                    {serviceScopeFeatures[activeService]?.map((item) => (
                                        <li key={item} className="flex items-start gap-4">
                                            <span className="text-accent font-mono text-xs opacity-60 mt-1">/</span>
                                            <span className="opacity-70 text-sm tracking-wide">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Subtle note */}
                                <p className="mt-10 text-white/20 font-mono text-[10px] tracking-widest uppercase leading-relaxed">
                                    Cada proyecto incluye revisiones,<br />
                                    entrega estimada y soporte post-lanzamiento.
                                </p>
                            </div>

                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Services;