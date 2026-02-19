import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "¿POR QUÉ EL PRECIO ES SUPERIOR AL DE UN FREELANCE?",
        answer: "No estás pagando por 'una web', estás invirtiendo en ingeniería. Un freelance suele usar templates que mueren en 6 meses. VEKSO construye activos digitales de alto rendimiento con código a medida que escala con tu negocio y no requiere rediseños constantes."
    },
    {
        question: "¿CUÁNDO ESTARÁ LISTA MI SOLUCIÓN?",
        answer: "Depende de la complejidad técnica. Una Landing Page estratégica toma 10-15 días, mientras que un software a medida (POS/Ecommerce) puede tomar 4-8 semanas. Priorizamos la calidad del código y la optimización sobre las entregas apresuradas."
    },
    {
        question: "¿QUIÉN ES DUEÑO DEL CÓDIGO FINAL?",
        answer: "Tú. A diferencia de agencias que te 'alquilan' el sitio o usan plataformas cerradas, VEKSO te entrega la propiedad total. Sin cuotas ocultas ni secuestro de datos. Tu activo digital es 100% independiente."
    },
    {
        question: "¿HACEN MANTENIMIENTO POST-LANZAMIENTO?",
        answer: "Sí. Ofrecemos protocolos de soporte y optimización continua para asegurar que tu sistema siempre esté al 100% de su capacidad técnica y seguridad."
    }
];

const differentiators = [
    {
        id: "P01",
        title: "CÓDIGO PURO VS TEMPLATES",
        tag: "CORE_PERFORMANCE",
        description: "No usamos constructores pesados. Escribimos código limpio en React que carga en milisegundos y escala sin límites técnicos.",
        specs: [
            { label: "Lighthouse Score", value: "98/100" },
            { label: "Architecture", value: "Clean Code" },
            { label: "Scalability", value: "Extreme" }
        ]
    },
    {
        id: "P02",
        title: "LÓGICA DE NEGOCIO",
        tag: "STRATEGIC_CONVERSION",
        description: "Cada botón y flujo tiene un objetivo financiero. No diseñamos 'páginas bonitas', construimos activos rentables.",
        specs: [
            { label: "Focus", value: "ROI Driven" },
            { label: "UX Flow", value: "High Intent" },
            { label: "Logic", value: "Business First" }
        ]
    },
    {
        id: "P03",
        title: "PROPIEDAD TOTAL",
        tag: "DIGITAL_OWNERSHIP",
        description: "Tu web es tuya, no un alquiler de plataforma. Código 100% propio sin dependencias de constructores externos.",
        specs: [
            { label: "License", value: "100% Yours" },
            { label: "Lock-in", value: "Zero" },
            { label: "Portability", value: "Native" }
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
                        EL ADN TÉCNICO <br />QUE NOS <span className="text-white/40 italic">SEPARA</span>
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
