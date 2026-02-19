import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        id: "01",
        title: "FLASHPOINT: Visual Authority",
        category: "Creative / Portfolio / UX",
        desktopImage: "/Portafolio/FlashPoint/Captura%20de%20pantalla%202026-02-18%20225016.png",
        mobileImage: "/Portafolio/FlashPoint/flashpoint movil cortado.png",
        description: "Transformamos la presencia digital del fotógrafo Juan Flashpoint. De una dependencia total de Instagram a una plataforma de autoridad visual propia. Incremento del 60% en captación de clientes premium."
    },
    {
        id: "02",
        title: "CAUTIVA: Hybrid Sales Ecosystem",
        category: "Ecommerce / Hybrid / UX",
        desktopImage: "/Portafolio/Cautiva/Captura de pantalla 2026-02-18 234519.png",
        mobileImage: "/Portafolio/Cautiva/cautiva movil cortado.png",
        description: "Rediseñamos la operativa de Cautiva Shopping, integrando un catálogo dinámico con cierre directo en WhatsApp. Pedidos estructurados y reducción de fricción operativa en un 40%."
    },
    {
        id: "03",
        title: "SOFTPOS: Operational Intelligence",
        category: "Software / POS / Logic",
        desktopImage: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop",
        mobileImage: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop",
        description: "Digitalización integral de inventarios y ventas. Un sistema a medida que eliminó el error humano y centralizó la operativa en tiempo real."
    }
];

const Portfolio: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section id="portfolio" className="relative bg-bg-deep border-t border-grid pt-24 md:pt-32">
            <div className="px-[10%] mb-16 md:mb-24">
                <span className="text-accent font-mono text-xs tracking-widest uppercase mb-4 block">
                    [ 03 // SELECTED WORKS ]
                </span>
                <h2 className="text-4xl md:text-6xl font-archivo leading-none tracking-tighter">
                    SOLUCIONES <br />CONVERTIDAS EN <span className="text-white/40 italic">CÓDIGO</span>
                </h2>
            </div>

            <div className="flex flex-col">
                {projects.map((project, idx) => (
                    <div
                        key={project.id}
                        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
                        style={{ zIndex: idx + 1 }}
                    >
                        <div className="relative w-full h-full flex items-center justify-center bg-bg-deep group border-t border-grid/30">
                            <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/80 opacity-60 z-10" />

                            <motion.div
                                initial={{ scale: 1.1, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 0.6 }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute inset-0 w-full h-full"
                                style={{ transform: 'translateZ(0)' }}
                            >
                                <img
                                    src={isMobile ? project.mobileImage : project.desktopImage}
                                    alt={project.title}
                                    className={`w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ${isMobile ? 'object-center' : 'object-top'}`}
                                />
                            </motion.div>

                            {/* Main Info */}
                            <div
                                className="relative z-20 w-[80%] max-w-6xl flex flex-col md:flex-row items-end justify-between gap-12"
                                style={{ transform: 'translateZ(0)' }}
                            >
                                {/* Left Side: Case # */}
                                <div className="absolute top-0 left-0 -translate-y-full mb-8 flex flex-col items-start gap-4">
                                    <span className="text-accent font-mono text-xs tracking-widest">#CASE_{project.id}</span>
                                    <div className="w-12 h-px bg-accent/50" />
                                </div>

                                {/* Center/Left: Title and Category */}
                                <div className="max-w-2xl">
                                    <motion.div
                                        initial={{ y: 40, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                    >
                                        <h3 className="text-4xl md:text-7xl font-archivo uppercase leading-none mb-6">
                                            {project.title}
                                        </h3>
                                        <p className="font-space text-lg md:text-xl opacity-60 max-w-lg leading-relaxed">
                                            {project.description}
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Right Side: Technical Specs & Link */}
                                <motion.div
                                    initial={{ x: 40, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="flex flex-col items-end gap-8 mb-4 h-full min-h-[150px] justify-between"
                                >
                                    <div className="text-right">
                                        <span className="text-[10px] font-mono tracking-widest opacity-40 uppercase block mb-1">Category</span>
                                        <span className="text-sm font-archivo tracking-wider text-white">{project.category}</span>
                                    </div>
                                    <button className="group/btn flex items-center gap-4">
                                        <span className="text-xs font-mono uppercase tracking-[0.3em] group-hover/btn:text-accent transition-colors">View Details</span>
                                        <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover/btn:border-accent group-hover/btn:bg-accent transition-all duration-500">
                                            <span className="text-lg group-hover/btn:translate-x-1 transition-transform">{">"}</span>
                                        </div>
                                    </button>
                                </motion.div>
                            </div>

                            <div className="absolute bottom-12 right-[10%] z-20 font-mono text-[8px] opacity-20 hidden md:block tracking-[0.5em] uppercase" style={{ whiteSpace: 'nowrap' }}>
                                VEKSO_PROJECT_ENGINE_V2
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="h-[20vh] bg-bg-deep border-t border-grid/20" />
        </section>
    );
};

export default Portfolio;
