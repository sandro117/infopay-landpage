import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Lock, BarChart3, ShieldCheck, Calendar } from 'lucide-react';

const Card = ({ children, className, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={`p-6 md:p-8 bg-white border border-slate-100 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 ${className}`}
    >
        {children}
    </motion.div>
);

const BentoGrid = () => {
    return (
        <section className="py-24 px-6 lg:px-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Tudo o que você precisa, <br />
                        <span className="text-emerald-500">direto no WhatsApp.</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Esqueça os apps complexos. O Infopay une a simplicidade de uma conversa com o poder de uma IA financeira avançada.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-[300px]">

                    {/* Card 1: Financeiro */}
                    <Card className="flex flex-col justify-between group">
                        <div>
                            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 text-emerald-600">
                                <Mic size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Financeiro e Áudio</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Envie: "gastei 50 no mercado". O Infopay registra e categoriza automaticamente. Aceita texto e áudio.
                            </p>
                        </div>
                        {/* Audio Wave Visual */}
                        <div className="flex items-center gap-1 mt-6 opacity-60 group-hover:opacity-100 transition-opacity">
                            {[...Array(15)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ height: [12, Math.random() * 48 + 12, 12] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                                    className="w-1.5 bg-emerald-400 rounded-full"
                                />
                            ))}
                        </div>
                    </Card>

                    {/* Card 2: Painel Profissional */}
                    <Card className="flex flex-col justify-between" delay={0.1}>
                        <div>
                            <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6 text-purple-500">
                                <BarChart3 size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Painel Profissional</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Gráficos de fluxo de caixa e organização automática sem planilhas. Relatórios em PDF num clique.
                            </p>
                        </div>
                        {/* Mini Chart Visual */}
                        <div className="flex items-end justify-between h-20 gap-3 mt-4 px-2 opacity-80">
                            {[40, 70, 30, 85, 50, 65, 80].map((h, i) => (
                                <div key={i} className="w-full bg-purple-100 rounded-t-sm relative h-full overflow-hidden">
                                    <motion.div
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${h}%` }}
                                        transition={{ duration: 1, delay: i * 0.1 }}
                                        className="absolute bottom-0 w-full bg-purple-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Card 3: Compartilhamento (Modo Família) */}
                    <Card className="flex flex-col justify-between" delay={0.2}>
                        <div>
                            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-500">
                                <ShieldCheck size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Modo Família</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Ideal para controle financeiro em conjunto. Adicione membros e gerencie o orçamento da casa.
                            </p>
                        </div>
                        <div className="mt-4 flex -space-x-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-500">Eu</div>
                            <div className="w-10 h-10 rounded-full bg-emerald-200 border-2 border-white flex items-center justify-center text-xs font-bold text-emerald-700">Ela</div>
                            <div className="w-10 h-10 rounded-full bg-blue-200 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-700">+</div>
                        </div>
                    </Card>

                    {/* Card 4: Google Agenda */}
                    <Card className="flex flex-col justify-between" delay={0.3}>
                        <div>
                            <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 text-orange-500">
                                <Calendar size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Google Agenda</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Sincronização automática dos seus compromissos e lembretes de contas a pagar.
                            </p>
                        </div>
                        <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-100 flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                            <span className="text-sm text-slate-700 font-medium">Reunião Financeira - 14:00</span>
                        </div>
                    </Card>

                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
