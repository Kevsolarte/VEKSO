import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Servicios', id: 'services', index: '01' },
    { name: 'Proyectos', id: 'portfolio', index: '02' },
    { name: 'Proceso', id: 'process', index: '03' },
    { name: 'Nosotros', id: 'differentiator', index: '04' },
    { name: 'Contacto', id: 'contact', index: '05' },
];

const socialLinks = [
    { label: 'IG', url: 'https://www.instagram.com/v3ks0?igsh=ZXUyd3NqazlhMG9v&utm_source=qr' },
    { label: 'TK', url: 'https://www.tiktok.com/@sonus.dev0?_r=1&_t=ZS-94HcGG8Zt7U' },
    { label: 'WA', url: `https://wa.me/584246777164?text=${encodeURIComponent('Hola VEKSO, me gustaría recibir más información sobre sus servicios.')}` },
];

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('es-VE', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    // Close on ESC
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false); };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);

    // Lock/unlock body scroll
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const handleNavClick = (id: string) => {
        setIsOpen(false);
        setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 400);
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.35, ease: 'easeOut' }
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.25, ease: 'easeIn' }
        }
    } as any;

    const linkVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: { duration: 0.45, delay: 0.08 + i * 0.055, ease: [0.16, 1, 0.3, 1] as any }
        }),
        exit: (i: number) => ({
            y: -20,
            opacity: 0,
            transition: { duration: 0.2, delay: i * 0.02 }
        })
    } as any;

    const metaVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: 0.35, duration: 0.4 } },
        exit: { opacity: 0, transition: { duration: 0.15 } }
    };

    return (
        <>
            {/* Fixed Navbar Bar */}
            <div className="fixed top-0 left-0 right-0 z-50 px-[10%] py-6 flex justify-between items-center pointer-events-none">
                {/* Logo */}
                <motion.a
                    href="#hero"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-[11px] font-mono tracking-widest opacity-70 hover:opacity-100 hover:text-accent transition-all pointer-events-auto no-underline text-white leading-tight"
                    onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                >
                    VEKSO.LABS<br />
                    <span className="opacity-50">v.0.4.2</span>
                </motion.a>

                {/* Hamburger Button */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="pointer-events-auto flex flex-col gap-[6px] group p-2 relative z-60"
                    aria-label="Toggle navigation"
                >
                    <motion.div
                        animate={isOpen ? { rotate: 45, y: 9, backgroundColor: '#2563ff' } : { rotate: 0, y: 0, backgroundColor: '#ffffff' }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="w-8 h-px origin-center"
                    />
                    <motion.div
                        animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.2 }}
                        className="w-5 h-px bg-white"
                    />
                    <motion.div
                        animate={isOpen ? { rotate: -45, y: -9, backgroundColor: '#2563ff', width: '2rem' } : { rotate: 0, y: 0, backgroundColor: '#ffffff', width: '2rem' }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="w-8 h-px origin-center"
                    />
                </motion.button>
            </div>

            {/* Full-Screen Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 z-40 bg-bg-deep flex flex-col overflow-hidden"
                        style={{ willChange: 'opacity', transform: 'translateZ(0)' }}
                    >
                        {/* Grid Background */}
                        <div className="absolute inset-0 grid-background opacity-10 pointer-events-none" />

                        {/* Animated vertical accent line */}
                        <motion.div
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            exit={{ scaleY: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="absolute left-[10%] top-0 bottom-0 w-px bg-accent/20 origin-top"
                        />

                        {/* Status bar top */}
                        <motion.div
                            variants={metaVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="absolute top-24 left-[10%] right-[10%] flex justify-between items-center border-b border-grid/30 pb-4"
                        >
                            <span className="text-[9px] font-mono tracking-[0.4em] opacity-30 uppercase">// NAV_SYSTEM_ONLINE</span>
                            <span className="text-[9px] font-mono tracking-[0.3em] opacity-30 text-accent">{time}</span>
                        </motion.div>

                        {/* Main Nav Links */}
                        <div className="flex-1 flex flex-col justify-center px-[10%] gap-2 mt-16">
                            {navLinks.map((link, i) => (
                                <div key={link.id} className="overflow-hidden border-b border-grid/20">
                                    <motion.button
                                        custom={i}
                                        variants={linkVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        onClick={() => handleNavClick(link.id)}
                                        className="w-full flex items-center justify-between py-5 md:py-6 group text-left"
                                    >
                                        <div className="flex items-baseline gap-6">
                                            <span className="text-[10px] font-mono text-accent opacity-50 tracking-widest">{link.index}</span>
                                            <span className="text-4xl md:text-6xl lg:text-7xl font-archivo uppercase tracking-tighter leading-none text-white group-hover:text-accent transition-colors duration-300">
                                                {link.name}
                                            </span>
                                        </div>
                                        <motion.span
                                            initial={{ x: -10, opacity: 0 }}
                                            whileHover={{ x: 0, opacity: 1 }}
                                            className="text-accent font-mono text-2xl hidden md:block"
                                        >
                                            /
                                        </motion.span>
                                    </motion.button>
                                </div>
                            ))}
                        </div>

                        {/* Footer meta info */}
                        <motion.div
                            variants={metaVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="px-[10%] pb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
                        >
                            <div className="flex flex-col gap-1">
                                <span className="text-[9px] font-mono tracking-[0.4em] opacity-20 uppercase">// LOCATION</span>
                                <span className="text-[11px] font-mono opacity-40">Maracaibo · Remote ↗</span>
                            </div>

                            <div className="flex gap-6">
                                {socialLinks.map((s) => (
                                    <a
                                        key={s.label}
                                        href={s.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[10px] font-mono tracking-[0.3em] opacity-30 hover:opacity-100 hover:text-accent transition-all no-underline text-white"
                                    >
                                        {s.label}
                                    </a>
                                ))}
                            </div>

                            <div className="flex flex-col items-end gap-1">
                                <span className="text-[9px] font-mono tracking-[0.4em] opacity-20 uppercase">// STATUS</span>
                                <span className="text-[11px] font-mono text-accent/60">2 slots disponibles</span>
                            </div>
                        </motion.div>

                        {/* Corner decorative tag */}
                        <div className="absolute bottom-4 right-[10%] text-[8px] font-mono opacity-10 tracking-widest uppercase">
                            VEKSO_NAV_V1
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
