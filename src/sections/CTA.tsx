import React from 'react';

const socialLinks = [
    { label: 'INSTAGRAM', url: 'https://www.instagram.com/v3ks0?igsh=ZXUyd3NqazlhMG9v&utm_source=qr', icon: 'IG' },
    { label: 'TIKTOK', url: 'https://www.tiktok.com/@sonus.dev0?_r=1&_t=ZS-94HcGG8Zt7U', icon: 'TT' },
    { label: 'LINKEDIN', url: 'https://linkedin.com/in/TU_PERFIL', icon: 'LN' },
    { label: 'WHATSAPP', url: `https://wa.me/584246777164?text=${encodeURIComponent('Hola VEKSO, me gustaría recibir más información sobre sus servicios estratégicos.')}`, icon: 'WA' }
];

const CTA: React.FC = () => {
    return (
        <footer id="contact" className="relative py-24 md:py-40 px-[10%] bg-bg-deep border-t border-grid overflow-hidden">
            <div className="absolute inset-0 grid-background opacity-5 pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-20">
                <div className="flex flex-col gap-8">
                    <span className="text-accent font-mono text-xs tracking-widest uppercase block">
                        [ 06 // READY_FOR_LAUNCH ]
                    </span>
                    <h2 className="text-[12vw] md:text-[8vw] font-archivo leading-none tracking-tighter uppercase">
                        VEKS<span className="text-accent">&gt;</span>O
                    </h2>
                    <div className="flex flex-col gap-2 font-mono text-[10px] opacity-30 tracking-widest uppercase">
                        <span>Digital Brutalism Engine</span>
                        <span>Built for Performance</span>
                    </div>
                </div>

                <div className="w-full md:w-auto grid grid-cols-2 gap-4">
                    {socialLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col p-6 border border-grid/50 hover:border-accent bg-white/[0.01] hover:bg-accent/5 transition-all duration-500"
                        >
                            <span className="text-[9px] font-mono tracking-[0.3em] opacity-40 mb-4 group-hover:text-accent group-hover:opacity-100 transition-all">
                                {link.icon} // CONNECT
                            </span>
                            <span className="text-sm font-archivo tracking-widest uppercase group-hover:translate-x-1 transition-transform">
                                {link.label}
                            </span>
                        </a>
                    ))}
                </div>
            </div>

            <div className="mt-24 md:mt-40 pt-12 border-t border-grid/20 flex flex-col md:flex-row justify-between gap-8 items-center text-[10px] font-mono opacity-20 tracking-widest uppercase">
                <span>© 2024 VEKSO LABS. ALL RIGHTS RESERVED.</span>
                <div className="flex gap-12">
                    <span>PRIVACY_PROTOCOL</span>
                    <span>SYSTEM_V.04.2</span>
                </div>
            </div>
        </footer>
    );
};

export default CTA;
