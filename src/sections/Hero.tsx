import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } }
    };

    const lineVariantsV = {
        hidden: { scaleY: 0 },
        visible: { scaleY: 1, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] as any } }
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grain-effect bg-bg-deep">
            <div className="absolute inset-0 flex justify-between pointer-events-none px-[10%]">
                <motion.div variants={lineVariantsV} initial="hidden" animate="visible" className="w-px h-full bg-grid opacity-20" />
                <motion.div variants={lineVariantsV} initial="hidden" animate="visible" className="w-px h-full bg-grid opacity-20" />
                <motion.div variants={lineVariantsV} initial="hidden" animate="visible" className="w-px h-full bg-grid opacity-20" />
                <motion.div variants={lineVariantsV} initial="hidden" animate="visible" className="w-px h-full bg-grid opacity-20" />
            </div>

            {/* Header Info */}
            <div className="absolute top-8 left-[10%] right-[10%] flex justify-between items-start z-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    className="text-[10px] font-mono tracking-widest leading-tight"
                >
                    VEKSO.LABS<br />
                    v.0.4.2
                </motion.div>

                <div className="flex flex-col items-end gap-1 group cursor-pointer">
                    <div className="w-8 h-px bg-white group-hover:bg-accent transition-colors" />
                    <div className="w-5 h-px bg-white group-hover:bg-accent transition-colors" />
                </div>
            </div>

            {/* Main Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 flex flex-col items-center"
            >
                <motion.div
                    variants={itemVariants}
                    className="mb-2 text-[10px] font-mono tracking-[0.5em] opacity-30 select-none"
                >
                    202418558018
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-[15vw] md:text-[12vw] font-archivo leading-none tracking-tighter flex items-center"
                >
                    VEKS
                    <span className="inline-flex items-center justify-center relative">
                        O
                        <motion.span
                            initial={{ opacity: 0, scale: 0.5, rotate: -720 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{
                                delay: 1.2,
                                duration: 1.5,
                                type: "spring",
                                stiffness: 60,
                                damping: 15
                            }}
                            className="absolute text-[0.4em] top-[48%] left-[52%] -translate-x-1/2 -translate-y-1/2 text-accent"
                        >
                            &gt;
                        </motion.span>
                    </span>
                </motion.h1>

                <motion.div
                    variants={itemVariants}
                    className="mt-2 text-[10px] items-end font-mono tracking-widest opacity-30 select-none ml-auto"
                >
                    AGENCY / STUDIO
                </motion.div>
            </motion.div>

            <div className="absolute bottom-12 left-[10%] right-[10%] flex justify-between items-center z-20 overflow-hidden">
                {[
                    { name: 'Servicios', id: 'services' },
                    { name: 'Proyectos', id: 'portfolio' },
                    { name: 'Proceso', id: 'process' },
                    { name: 'Contacto', id: 'contact' }
                ].map((item, idx) => (
                    <motion.a
                        key={item.id}
                        href={`#${item.id}`}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8 + (idx * 0.1) }}
                        className="flex items-start group cursor-pointer no-underline"
                    >
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] group-hover:text-accent transition-colors text-white">
                            {item.name}
                        </span>
                        <span className="text-[8px] font-mono ml-1 opacity-40">
                            {idx === 1 ? '21' : idx === 2 ? '05' : ''}
                        </span>
                    </motion.a>
                ))}
            </div>

            <div className="absolute bottom-0 left-0 w-full h-px bg-grid opacity-10" />
        </section>
    );
};

export default Hero;
