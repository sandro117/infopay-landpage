import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
    return (
        <section className="py-10 bg-emerald-900 border-y border-emerald-800 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-emerald-800/50">

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center justify-center p-4"
                    >
                        <span className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">+150K</span>
                        <span className="text-emerald-200 font-medium tracking-wide text-sm uppercase">Registros Processados</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex flex-col items-center justify-center p-4"
                    >
                        <span className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">+R$ 160M</span>
                        <span className="text-emerald-200 font-medium tracking-wide text-sm uppercase">Gerenciados</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col items-center justify-center p-4"
                    >
                        <span className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">99.9%</span>
                        <span className="text-emerald-200 font-medium tracking-wide text-sm uppercase">Precisão da IA</span>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Stats;
