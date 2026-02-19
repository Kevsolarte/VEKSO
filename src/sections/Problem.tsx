import React from 'react';
import { motion } from 'framer-motion';

const Problem: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
        }
    };

    const problems = [
        {
            id: "01",
            title: "Terreno Alquilado",
            tag: "AUTHORITY_GAP",
            description: "Si tu marca solo vive en redes sociales, no tienes el control. Depender de algoritmos para mostrar tu valor es un riesgo operativo. Sin una propiedad digital propia, tu autoridad profesional tiene un techo."
        },
        {
            id: "02",
            title: "El Eslabón Perdido",
            tag: "CONVERSION_LEAK",
            description: "Responder mensajes no es escalar. Implementamos soluciones híbridas: catálogo web para Maracaibo (cierre en WhatsApp) o automatización total para el mercado global. Menos preguntas de 'precio', más cierres."
        },
        {
            id: "03",
            title: "Soluciones a Medida",
            tag: "CUSTOM_DEVELOPMENT",
            description: "¿Tienes un problema que el software genérico no resuelve? No adaptamos tu negocio a la web; construimos la web que tu negocio necesita. Código diseñado exclusivamente para tu flujo operativo."
        }
    ];

    return (
        <section id="problem" className="relative py-24 md:py-32 px-[10%] border-t border-grid grain-effect bg-bg-deep overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full grid-background opacity-20 pointer-events-none" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative z-10"
                style={{ transform: 'translateZ(0)', willChange: 'opacity, transform' }}
            >
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
                    <motion.div variants={itemVariants}>
                        <span className="text-accent font-mono text-xs tracking-widest uppercase mb-4 block">
                            [ 01 // SYSTEM DIAGNOSTIC ]
                        </span>
                        <h2 className="text-4xl md:text-6xl font-archivo leading-none">
                            IDENTIFICANDO LOS<br />
                            CUELLOS DE BOTELLA
                        </h2>
                    </motion.div>
                    <motion.p variants={itemVariants} className="max-w-xs text-sm font-space opacity-50 leading-relaxed uppercase tracking-widest text-right">
                        Analizamos las deficiencias de tu presencia digital actual para reconstruir una base sólida y escalable.
                    </motion.p>
                </div>

                {/* Problem Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-grid/30 border border-grid/30">
                    {problems.map((prob) => (
                        <motion.div
                            key={prob.id}
                            variants={itemVariants}
                            className="bg-bg-deep p-8 md:p-12 group hover:bg-white/[0.02] transition-colors overflow-hidden relative"
                        >
                            <div className="flex justify-between items-start mb-12">
                                <span className="text-5xl font-archivo text-white/10 group-hover:text-accent transition-colors">
                                    {prob.id}
                                </span>
                                <span className="text-[10px] font-mono tracking-widest opacity-30 mt-2">
                                    TAG://{prob.tag}
                                </span>
                            </div>

                            <h3 className="text-2xl font-archivo mb-6 group-hover:translate-x-2 transition-transform duration-500">
                                {prob.title}
                            </h3>
                            <p className="font-space opacity-60 leading-relaxed text-sm md:text-base">
                                {prob.description}
                            </p>

                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    variants={itemVariants}
                    className="mt-16 border-l-2 border-accent pl-8 py-4 max-w-2xl"
                >
                    <p className="text-lg md:text-xl font-space italic opacity-80">
                        "En <span className="text-white font-archivo not-italic">VEKSO</span>, no solo hacemos webs. Detectamos fugas de dinero en tu operación y las sellamos con tecnología."
                    </p>
                </motion.div>
            </motion.div>

            <div className="absolute bottom-4 right-[10%] opacity-20 hidden md:block">
                <span className="text-[8px] font-mono tracking-[0.4em] uppercase">
                    Error_Detection_Protocol: Enabled // V.04
                </span>
            </div>
        </section>
    );
};

export default Problem;
