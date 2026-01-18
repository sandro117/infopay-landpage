import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import print1 from '../assets/testimonial-1.jpg';
import print2 from '../assets/testimonial-2.jpg';
import print3 from '../assets/testimonial-3.jpg';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Ricardo Silva",
            role: "Empresário",
            content: "O Infopay mudou minha relação com o dinheiro. Antes eu perdia horas em planilhas, agora faço tudo pelo WhatsApp enquanto tomo café.",
            initial: "R",
            color: "bg-blue-100 text-blue-600",
            image: print1
        },
        {
            name: "Fernanda Costa",
            role: "Freelancer",
            content: "Simplesmente genial. Consigo anexar os comprovantes e ele lê tudo automático. Meu contador agradece!",
            initial: "F",
            color: "bg-emerald-100 text-emerald-600",
            image: print2
        },
        {
            name: "Carlos Mendes",
            role: "Pai de Família",
            content: "O modo família é incrível. Minha esposa e eu controlamos o orçamento da casa juntos e em tempo real. Recomendo muito.",
            initial: "C",
            color: "bg-purple-100 text-purple-600",
            image: print3
        }
    ];

    return (
        <section className="py-24 px-6 relative overflow-hidden" id="testimonials">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Quem usa, <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">recomenda.</span>
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Junte-se a milhares de pessoas que já organizaram sua vida financeira com a simplicidade do Infopay.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-emerald-400 text-emerald-400" />
                                ))}
                            </div>

                            <p className="text-slate-600 text-base leading-relaxed mb-6 flex-grow">
                                "{item.content}"
                            </p>

                            {/* Screenshot Mockup */}
                            <div className="mb-6 rounded-2xl overflow-hidden border border-slate-100 shadow-sm relative group">
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                <img src={item.image} alt="Print do App" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" />
                            </div>

                            <div className="flex items-center gap-3 pt-4 border-t border-slate-50 mt-auto">
                                <div className={`w - 10 h - 10 rounded - full flex items - center justify - center font - bold text - sm ${item.color} `}>
                                    {item.initial}
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900 text-sm">{item.name}</div>
                                    <div className="text-xs text-slate-500">{item.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
