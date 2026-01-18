import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-100 last:border-none">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full py-6 text-left group"
            >
                <span className="text-lg font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">
                    {question}
                </span>
                <span className={`transform transition-transform duration-300 text-emerald-500 text-2xl ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                    +
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-slate-500 leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const faqData = [
        {
            question: "Meus dados estão seguros?",
            answer: "Sim, absolutamente. Utilizamos criptografia de ponta a ponta (a mesma tecnologia dos bancos) e seus dados são processados em servidores seguros da AWS e Meta. Ninguém, nem mesmo nossa equipe, tem acesso às suas transações."
        },
        {
            question: "Preciso instalar algum aplicativo?",
            answer: "Não! O Infopay funciona 100% dentro do WhatsApp. Você não precisa baixar nada, nem ocupar espaço no seu celular. É só mandar mensagem e salvar o número."
        },
        {
            question: "Serve para família ou casal?",
            answer: "Com certeza. No modo 'Gestão Compartilhada' (disponível no plano completo), você pode adicionar outras pessoas à mesma conta sem custo adicional para gerenciar o orçamento da casa juntos."
        },
        {
            question: "E se eu não gostar?",
            answer: "Você tem garantia incondicional. Pode cancelar a qualquer momento sem multas e sem burocracia. O cancelamento é feito com um clique."
        }
    ];

    return (
        <section className="py-24 px-6 relative" id="faq">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Perguntas Frequentes
                    </h2>
                </div>

                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
                    {faqData.map((q, index) => (
                        <FAQItem key={index} {...q} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
