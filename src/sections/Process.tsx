import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const steps = [
    {
        id: "01",
        title: "DIAGNÓSTICO ESTRATÉGICO",
        tag: "SYSTEM_SCAN",
        description: "Analizamos tu modelo de negocio, identificamos fugas de conversión y definimos el stack tecnológico óptimo para tu mercado objetivo.",
        meta: "EST_TIME: 3-5 DAYS"
    },
    {
        id: "02",
        title: "ARQUITECTURA DIGITAL",
        tag: "LOGIC_DESIGN",
        description: "Diseñamos la experiencia de usuario (UX) centrada en la conversión, definiendo flujos de pago, catálogos híbridos o integraciones de software.",
        meta: "STATUS: BLUEPRINTING"
    },
    {
        id: "03",
        title: "DESARROLLO DE ALTO NIVEL",
        tag: "CORE_BUILD",
        description: "Programamos con React / Next.js bajo estándares de código premium. Animaciones fluidas, carga ultrarrápida y optimización SEO nativa.",
        meta: "COMPILING... 100%"
    },
    {
        id: "04",
        title: "DESPLIEGUE Y ESCALADO",
        tag: "SYSTEM_GO_LIVE",
        description: "Lanzamiento en servidores de alta disponibilidad y configuración de herramientas de análisis para medir el retorno de inversión (ROI).",
        meta: "READY_FOR_DEPLOY"
    }
];

const Process: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="process" className="relative bg-bg-deep py-24 md:py-40 px-[10%] overflow-hidden border-t border-grid" ref={containerRef}>
            {/* Header */}
            <div className="mb-20 md:mb-32 text-left">
                <span className="text-accent font-mono text-xs tracking-widest uppercase mb-4 block">
                    [ 04 // PROTOCOL_FLOW ]
                </span>
                <h2 className="text-4xl md:text-7xl font-archivo leading-none tracking-tighter">
                    CÓMO <br /><span className="text-white/40 italic">CONSTRUIMOS</span>
                </h2>
            </div>

            <div className="relative">
                <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-grid opacity-30 -translate-x-1/2" />
                <motion.div
                    className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-accent -translate-x-1/2 origin-top"
                    style={{ scaleY, translateZ: 0, willChange: 'transform' }}
                />

                <div className="flex flex-col gap-24 md:gap-40">
                    {steps.map((step, idx) => (
                        <div key={step.id} className={`relative flex flex-col md:flex-row items-center gap-12 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                            <div className="absolute left-[20px] md:left-1/2 top-10 w-4 h-4 bg-bg-deep border-2 border-accent -translate-x-1/2 z-10" />

                            {/* Info Block */}
                            <motion.div
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`w-full md:w-[45%] pl-16 md:pl-0 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                            >
                                <span className="text-accent font-mono text-[10px] tracking-[0.3em] block mb-4">
                                    STEP://{step.tag}
                                </span>
                                <h3 className="text-3xl md:text-4xl font-archivo uppercase mb-6 leading-none">
                                    <span className="text-white/20 mr-4 font-mono">{step.id}</span>
                                    {step.title}
                                </h3>
                                <p className="font-space text-sm md:text-base opacity-60 leading-relaxed max-w-md mx-auto md:mx-0 inline-block">
                                    {step.description}
                                </p>
                                <div className={`mt-8 flex gap-4 items-center ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                    <span className="text-[10px] font-mono opacity-30 border border-white/10 px-3 py-1 uppercase font-bold">
                                        {step.meta}
                                    </span>
                                </div>
                            </motion.div>

                            {/* Decorative Technical Detail (Right/Left side) */}
                            <div className="hidden md:block w-[45%] pointer-events-none">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 0.05, scale: 1 }}
                                    transition={{ duration: 1.5 }}
                                    className="font-archivo text-[12vw] leading-none select-none opacity-5 flex items-center justify-center h-full"
                                >
                                    {step.id}
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-32 border-t border-grid pt-12 flex justify-between items-center opacity-20 font-mono text-[8px] tracking-[0.4em] uppercase">
                <span>SYSTEM_FLOW_REACHED: END</span>
                <span>V.04_STABLE</span>
            </div>
        </section>
    );
};

export default Process;
