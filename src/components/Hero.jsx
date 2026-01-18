import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative flex flex-col items-center pt-32 pb-20 px-6 overflow-hidden min-h-screen">

            {/* Main Content - Centered */}
            <div className="w-full max-w-4xl mx-auto text-center z-10 mb-12">

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-6 text-4xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]"
                >
                    Sua vida financeira organizada. <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Sem esforço.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-10 text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto"
                >
                    Esqueceu compromissos ou levou um susto com a fatura? O Infopay resolve isso: organização financeira e gestão de rotina diretamente pelo WhatsApp.
                </motion.p>

                <motion.a
                    href="https://api.whatsapp.com/send/?phone=558191350490&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center px-8 py-4 mx-auto text-lg font-semibold text-white transition-all rounded-full bg-slate-900 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transform hover:scale-105 duration-300 w-fit cursor-pointer"
                >
                    <MessageCircle className="w-6 h-6 mr-3" strokeWidth={1.5} />
                    Começar Agora no WhatsApp
                </motion.a>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center justify-center gap-6 text-sm text-slate-500 font-medium"
                >
                    <span className="flex items-center gap-2">
                        🔒 Criptografia de Ponta a Ponta
                    </span>
                    <span className="hidden md:inline text-slate-300">|</span>
                    <span className="flex items-center gap-2">
                        🧠 IA com 99.9% de Precisão
                    </span>
                </motion.div>
            </div>

            {/* Visual / Phone Mockup - Centered Bottom */}
            <div className="w-full flex justify-center relative z-10 mt-8">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative"
                >
                    <div
                        className="relative w-[280px] xs:w-[320px] h-[580px] xs:h-[650px] bg-slate-900 border-[8px] border-slate-800 rounded-[3rem] shadow-2xl overflow-hidden ring-1 ring-black/5"
                    >
                        {/* Notch */}
                        <div className="absolute top-0 w-1/2 h-7 transform -translate-x-1/2 bg-slate-800 left-1/2 rounded-b-xl z-20" />

                        {/* Screen Content */}
                        <div className="w-full h-full bg-white flex flex-col relative">

                            {/* Chat Header - Fixed Top */}
                            <div className="flex items-center gap-3 pb-4 border-b border-gray-100 bg-white/80 backdrop-blur-sm pt-14 px-4 z-10 shrink-0">
                                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">I</div>
                                <div>
                                    <div className="text-slate-900 font-semibold text-sm">Infopay AI</div>
                                    <div className="text-xs text-emerald-500 font-medium">Online</div>
                                </div>
                            </div>

                            {/* Messages - Scrollable Area */}
                            <div className="flex-1 overflow-y-auto px-4 pt-4 pb-20 flex flex-col gap-3 scrollbar-hide">
                                <div className="self-end bg-emerald-500 p-3.5 rounded-2xl rounded-tr-sm text-sm text-white max-w-[85%] shadow-sm">
                                    Oi! Quanto gastei com Uber esse mês?
                                </div>
                                <div className="self-start bg-gray-100 p-3.5 rounded-2xl rounded-tl-sm text-sm text-slate-700 max-w-[85%] border border-gray-200">
                                    Você gastou <span className="text-slate-900 font-bold">R$ 342,50</span> em Transportes este mês.
                                    <br />Isso é 15% a menos que mês passado! 📉
                                </div>
                                <div className="self-end bg-emerald-500 p-3.5 rounded-2xl rounded-tr-sm text-sm text-white max-w-[85%] shadow-sm">
                                    Ótimo! E meu saldo atual?
                                </div>
                                <div className="self-start bg-gray-100 p-3.5 rounded-2xl rounded-tl-sm text-sm text-slate-700 max-w-[85%] border border-gray-200">
                                    Seu saldo consolidado é <span className="text-emerald-600 font-bold">R$ 12.450,00</span>.
                                </div>
                            </div>

                            {/* Input Area Mockup - Fixed Bottom */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white z-20">
                                <div className="h-12 bg-gray-100 rounded-full flex items-center px-4 border border-gray-200">
                                    <div className="text-gray-400 text-sm">Mensagem...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
