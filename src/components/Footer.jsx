import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 px-6 border-t border-slate-100 relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                <div className="text-center md:text-left">
                    <p>&copy; {new Date().getFullYear()} Infopay. Todos os direitos reservados.</p>
                </div>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-emerald-600 transition-colors">Política de Privacidade</a>
                    <a href="#" className="hover:text-emerald-600 transition-colors">Termos de Uso</a>
                </div>
            </div>

            {/* Floating WhatsApp Button */}
            <motion.a
                href="https://wa.me/5511999999999" // TODO: Add correct WhatsApp link if available, otherwise generic
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-shadow flex items-center justify-center"
                aria-label="Fale conosco no WhatsApp"
            >
                <MessageCircle className="w-8 h-8" strokeWidth={1.5} />
            </motion.a>
        </footer>
    );
};

export default Footer;
