import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "¿CÓMO ASEGURAN EL RETORNO DE MI INVERSIÓN?",
        answer: "No construimos webs aisladas, creamos ecosistemas de conversión. Antes de programar, validamos tu modelo de negocio y diseñamos cada flujo para maximizar la captación de clientes. Tu sitio es una herramienta de ventas que trabaja 24/7."
    },
    {
        question: "¿MI NEGOCIO PODRÁ ESCALAR CON ESTA SOLUCIÓN?",
        answer: "Absolutamente. Desarrollamos con arquitectura de alto nivel que permite que tu plataforma crezca a medida que tu negocio se expande, sin necesidad de empezar de cero ni pagar rediseños costosos en el futuro."
    },
    {
        question: "¿QUÉ TAN RÁPIDO VERÉ RESULTADOS?",
        answer: "Nuestras soluciones están optimizadas para la autoridad inmediata. Desde el lanzamiento, tu marca proyectará un profesionalismo premium que acorta el ciclo de decisión de tus clientes y aumenta la confianza de compra."
    },
    {
        question: "¿TENDRÉ CONTROL TOTAL SOBRE MI PLATAFORMA?",
        answer: "Sí. Te entregamos un activo digital 100% propio. Tendrás autonomía total para gestionar tu contenido y ventas, con el respaldo de un sistema robusto, seguro y diseñado para la independencia operativa."
    }
];

const differentiators = [
    {
        id: "P01",
        title: "DISEÑO PARA LA CONVERSIÓN",
        tag: "CONVERSION_MAXIMIZER",
        description: "No diseñamos para que se vea 'bonito', diseñamos para que se venda. Cada animación y estructura está pensada para guiar al usuario hacia la reserva o compra.",
        specs: [
            { label: "User Retention", value: "+85% Avg" },
            { label: "Sales Focus", value: "High Intent" },
            { label: "Engagement", value: "Vibrant" }
        ]
    },
    {
        id: "P02",
        title: "INTELIGENCIA DE NEGOCIO",
        tag: "STRATEGIC_LOGIC",
        description: "Integramos soluciones que optimizan tu operativa. Desde catálogos híbridos hasta flujos automatizados que liberan tu tiempo y aumentan tu rentabilidad.",
        specs: [
            { label: "Efficiency", value: "Automated" },
            { label: "Process", value: "Optimized" },
            { label: "ROI Potential", value: "Exponential" }
        ]
    },
    {
        id: "P03",
        title: "ACTIVOS DIGITALES PROPIOS",
        tag: "BUSINESS_ASSETS",
        description: "Tu web no es un gasto, es un activo que crece en valor. Te entregamos la propiedad total de una herramienta que trabaja para ti 24/7 sin depender de terceros.",
        specs: [
            { label: "Ownership", value: "100% Secure" },
            { label: "Stability", value: "Enterprise" },
            { label: "Future-Proof", value: "Guaranteed" }
        ]
    }
];

const Differentiator: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <section id="differentiator" className="relative py-24 md:py-40 px-[10%] bg-bg-deep border-t border-grid overflow-hidden">
            <div className="absolute inset-0 grid-background opacity-5 pointer-events-none" />

            <div className="relative z-10">
                {/* Header */}
                <div className="mb-20 md:mb-32">
                    <span className="text-accent font-mono text-xs tracking-widest uppercase mb-4 block">
                        [ 05 // COMPETITIVE_EDGE ]
                    </span>
                    <h2 className="text-4xl md:text-7xl font-archivo leading-none tracking-tighter max-w-4xl">
                        EL ENFOQUE <br />QUE GENERA <span className="text-white/40 italic">RESULTADOS</span>
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-grid/30 border border-grid/30 mb-24 md:mb-40">
                    {differentiators.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-bg-deep p-8 md:p-12 relative group hover:bg-white/[0.02] transition-all duration-500 overflow-hidden"
                            style={{ transform: 'translateZ(0)' }}
                        >
                            <div className="relative z-10 flex flex-col h-full">
                                <span className="text-[10px] font-mono tracking-widest text-accent mb-8 block">
                                    // {item.tag}
                                </span>

                                <h3 className="text-2xl md:text-3xl font-archivo uppercase mb-6 leading-tight group-hover:text-white transition-colors">
                                    {item.title}
                                </h3>

                                <p className="font-space text-sm md:text-base opacity-60 leading-relaxed mb-12 flex-grow">
                                    {item.description}
                                </p>

                                <div className="space-y-4 pt-8 border-t border-grid/50">
                                    <span className="text-[9px] font-mono tracking-widest opacity-30 uppercase block mb-2">Technical_Specs:</span>
                                    {item.specs.map((spec) => (
                                        <div key={spec.label} className="flex justify-between items-center text-[11px] font-mono">
                                            <span className="opacity-40">{spec.label}</span>
                                            <span className="text-white group-hover:text-accent transition-colors">{spec.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="absolute top-0 left-0 w-full h-[1px] bg-accent/20 -translate-y-full group-hover:animate-scan pointer-events-none" />

                            <div className="absolute top-4 right-4 text-[40px] font-archivo opacity-[0.03] select-none uppercase">
                                {item.id}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* FAQ Section: QUERY_RESOLUTION_SYSTEM */}
                <div className="max-w-4xl mx-auto space-y-4 mb-32">
                    <div className="mb-12">
                        <span className="text-accent font-mono text-[10px] tracking-[0.4em] block mb-2">
                             // QUERY_RESOLUTION_SYSTEM
                        </span>
                        <h4 className="text-2xl font-archivo uppercase">Protocolo de Consultas</h4>
                    </div>

                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border-b border-grid/50">
                            <button
                                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                className="w-full flex justify-between items-center py-8 text-left group"
                            >
                                <span className={`text-lg md:text-xl font-archivo uppercase transition-colors ${openFaq === idx ? 'text-accent' : 'text-white/80 group-hover:text-white'}`}>
                                    <span className="text-white/10 mr-4 font-mono text-sm leading-none">Q_{idx + 1}</span>
                                    {faq.question}
                                </span>
                                <span className={`text-2xl font-mono transition-transform duration-500 ${openFaq === idx ? 'rotate-45 text-accent' : 'opacity-20'}`}>
                                    +
                                </span>
                            </button>
                            <AnimatePresence>
                                {openFaq === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as any }}
                                        className="overflow-hidden"
                                        style={{ willChange: 'height, opacity' }}
                                    >
                                        <div className="pb-8 pl-12 md:pl-16">
                                            <p className="font-space text-base md:text-lg opacity-60 leading-relaxed italic border-l-2 border-accent/20 pl-6">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 border border-accent/20 bg-accent/[0.02] p-8 md:p-12"
                >
                    <div className="max-w-2xl">
                        <h4 className="text-xl md:text-2xl font-archivo uppercase mb-2">¿Cansado de soluciones genéricas?</h4>
                        <p className="font-space opacity-60 text-sm md:text-base italic">
                            "En VEKSO no competimos por precio, competimos por rendimiento. Si buscas el activo digital más rápido y profesional, estás en el hangar correcto."
                        </p>
                    </div>
                    <button className="px-12 py-5 bg-white text-bg-deep font-archivo text-xs uppercase tracking-[0.2em] hover:bg-accent hover:text-white transition-all duration-500 whitespace-nowrap">
                        Verificar Status
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Differentiator;
