import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    // Optional: Change background opacity on scroll
    useEffect(() => {
        return scrollY.onChange((latest) => {
            setIsScrolled(latest > 50);
        });
    }, [scrollY]);

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-100 py-3 shadow-[0_4px_20px_rgb(0,0,0,0.03)]' : 'bg-transparent py-5'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="text-2xl font-bold text-slate-900 tracking-tight cursor-pointer">
                Infopay<span className="text-emerald-500">.</span>
            </div>
            <a href="https://www.asaas.com/c/v6a74yf20g1qivcs" className="px-6 py-2.5 text-sm font-semibold text-slate-700 transition-all rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300">
                Acessar
            </a>
        </motion.nav>
    );
};

export default Navbar;
