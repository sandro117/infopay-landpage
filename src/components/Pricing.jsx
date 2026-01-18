import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const Pricing = () => {
    return (
        <section className="py-24 px-6 relative" id="pricing">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white rounded-3xl p-6 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
                >
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-emerald-600" />

                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Plano Completo</h3>
                            <p className="text-slate-500 mb-6">Tudo o que você precisa para dominar suas finanças.</p>
                            <div className="flex items-baseline justify-center md:justify-start gap-1">
                                <span className="text-5xl font-extrabold text-slate-900">R$ 19,90</span>
                                <span className="text-slate-500">/mês</span>
                            </div>
                        </div>

                        <div className="h-px w-full md:w-px md:h-24 bg-gray-100" />

                        <div className="flex-1 w-full">
                            <ul className="space-y-4">
                                {[
                                    "Registro de gastos e receitas ilimitado",
                                    "Lembretes ilimitados via WhatsApp",
                                    "Bônus: Gestão Compartilhada (Adicione familiares grátis)",
                                    "Bônus: Integração Google Agenda"
                                ].map((benefit, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                                            <Check className="w-3 h-3 text-emerald-600" strokeWidth={1.5} />
                                        </div>
                                        {benefit.includes("Bônus") ? (
                                            <span className="font-semibold text-emerald-700">{benefit}</span>
                                        ) : (
                                            benefit
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-10 text-center">
                        <motion.a
                            href="https://www.asaas.com/c/v6a74yf20g1qivcs"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center justify-center w-full md:w-auto px-10 py-5 text-lg font-semibold text-white transition-all bg-slate-900 rounded-full hover:bg-slate-800 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-105"
                        >
                            Assinar Agora
                            <ArrowRight className="w-5 h-5 ml-2" strokeWidth={1.5} />
                        </motion.a>
                        <p className="mt-4 text-sm text-slate-400">Cancelamento grátis a qualquer momento.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;
