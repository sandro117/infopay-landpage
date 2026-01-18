import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Menu, Phone, Video, Mic, Plus } from 'lucide-react';

const ChatDemo = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    // Initial Welcome Message
    useEffect(() => {
        const initialTimer = setTimeout(() => {
            setMessages([
                {
                    id: 1,
                    text: "Olá! Sou o Infopay. Me diga quanto você gastou ou recebeu hoje.",
                    sender: 'bot',
                    time: getCurrentTime()
                }
            ]);
        }, 800);
        return () => clearTimeout(initialTimer);
    }, []);

    const getCurrentTime = () => {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const handleSendMessage = (text) => {
        const content = text || inputValue;
        if (!content.trim()) return;

        // Add User Message
        const newUserMsg = {
            id: Date.now(),
            text: content,
            sender: 'user',
            time: getCurrentTime()
        };

        setMessages(prev => [...prev, newUserMsg]);
        setInputValue("");
        setIsTyping(true);

        // Bot Response Logic
        setTimeout(() => {
            setIsTyping(false);
            const hasNumber = /\d+/.test(content);
            let botText = "";

            const valueMatch = content.match(/[\d,.]+/);
            const value = valueMatch ? valueMatch[0] : "0,00";

            let category = "Outros";
            const lowerContent = content.toLowerCase();

            if (lowerContent.includes("recebi") || lowerContent.includes("ganhei") || lowerContent.includes("salario")) {
                botText = `✅ Sucesso! Adicionei uma receita de R$ ${value}.`;
            } else {
                if (lowerContent.includes("burger") || lowerContent.includes("lanche") || lowerContent.includes("comida") || lowerContent.includes("almoço") || lowerContent.includes("jantar")) {
                    category = "Alimentação";
                } else if (lowerContent.includes("uber") || lowerContent.includes("taxi") || lowerContent.includes("gasolina") || lowerContent.includes("transporte")) {
                    category = "Transporte";
                } else if (lowerContent.includes("roupa") || lowerContent.includes("vestido") || lowerContent.includes("tenis") || lowerContent.includes("loja") || lowerContent.includes("shopping")) {
                    category = "Compras";
                } else if (lowerContent.includes("luz") || lowerContent.includes("net") || lowerContent.includes("internet") || lowerContent.includes("agua") || lowerContent.includes("boleto")) {
                    category = "Contas";
                }
                botText = `✅ Entendido! Registrei R$ ${value} em ${category}.`;
            }
            // Check for balance inquiry specifically
            if (content.toLowerCase().includes("saldo")) {
                botText = "💰 Seu saldo atual consolidado é R$ 2.450,00.";
            }

            const newBotMsg = {
                id: Date.now() + 1,
                text: botText,
                sender: 'bot',
                time: getCurrentTime()
            };
            setMessages(prev => [...prev, newBotMsg]);
        }, 1500);
    };

    const quickReplies = [
        { label: "🍔 Gastei 30 no Burger", value: "Gastei 30 no Burger" },
        { label: "💰 Recebi 500", value: "Recebi 500" },
        { label: "📊 Meu saldo?", value: "Meu saldo?" }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-slate-50" id="demo">
            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Experimente agora mesmo
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Simule uma conversa real e veja como é fácil organizar suas finanças.
                    </p>
                </motion.div>

                {/* iPhone 15 Frame CSS */}
                <div className="relative mx-auto border-gray-900 bg-gray-900 border-[14px] rounded-[3rem] h-[700px] w-[350px] shadow-2xl">
                    {/* Dynamic Island */}
                    <div className="w-[120px] h-[35px] bg-black top-2 rounded-full left-1/2 -translate-x-1/2 absolute z-20"></div>

                    {/* Side Buttons */}
                    <div className="h-[46px] w-[4px] bg-gray-800 absolute -left-[18px] top-[124px] rounded-l-md"></div>
                    <div className="h-[46px] w-[4px] bg-gray-800 absolute -left-[18px] top-[184px] rounded-l-md"></div>
                    <div className="h-[64px] w-[4px] bg-gray-800 absolute -right-[18px] top-[142px] rounded-r-md"></div>

                    {/* Screen Content */}
                    <div className="rounded-[2.2rem] overflow-hidden w-full h-full bg-[#E5DDD5] relative flex flex-col font-sans">
                        {/* Status Bar Mock */}
                        <div className="h-12 bg-[#075E54] w-full shrink-0"></div>

                        {/* WhatsApp Header */}
                        <div className="bg-[#075E54] text-white px-4 py-3 flex items-center justify-between shadow-md shrink-0 z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#075E54] font-bold text-lg">
                                    I
                                </div>
                                <div className="text-left leading-tight">
                                    <h3 className="font-semibold text-[16px]">Infopay</h3>
                                    <p className="text-[12px] opacity-80">visto por último hoje às 10:00</p>
                                </div>
                            </div>
                            <div className="flex gap-4 opacity-90">
                                <Video size={20} />
                                <Phone size={20} />
                                <Menu size={20} />
                            </div>
                        </div>

                        {/* Chat Pattern Overlay */}
                        <div className="absolute inset-0 opacity-[0.4] pointer-events-none z-0"
                            style={{ backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')", backgroundSize: '400px' }}
                        ></div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2 relative z-10">
                            <AnimatePresence>
                                {messages.map((msg) => (
                                    <motion.div
                                        key={msg.id}
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} `}
                                    >
                                        <div
                                            className={`max - w - [85 %] px - 3 py - 2 rounded - lg text - [14px] leading - snug shadow - sm relative ${msg.sender === 'user'
                                                ? 'bg-[#E7FFDB] text-gray-800 rounded-tr-none'
                                                : 'bg-white text-gray-800 rounded-tl-none'
                                                } `}
                                        >
                                            {msg.text}
                                            <span className="block text-[10px] text-gray-500 text-right mt-1 ml-4">
                                                {msg.time}
                                                {msg.sender === 'user' && <span className="ml-1 text-blue-500">✓✓</span>}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                                {isTyping && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex justify-start"
                                    >
                                        <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm flex gap-1 items-center h-9">
                                            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                                            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                                            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Replies (Chips) */}
                        {!isTyping && (
                            <div className="px-2 py-2 flex gap-2 overflow-x-auto scrollbar-hide shrink-0 z-20">
                                {quickReplies.map((chip, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleSendMessage(chip.value)}
                                        className="bg-white border border-gray-200 text-slate-700 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm active:scale-95 transition-transform flex-shrink-0"
                                    >
                                        {chip.label}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Input Area */}
                        <div className="p-2 bg-[#F0F2F5] flex items-end gap-2 shrink-0 z-20 pb-6">
                            <button className="p-2 text-gray-500"><Plus size={24} /></button>
                            <div className="flex-1 bg-white rounded-2xl flex items-center min-h-[44px] px-4 shadow-sm border border-transparent focus-within:border-emerald-500">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                                    placeholder="Mensagem"
                                    className="w-full bg-transparent outline-none text-slate-800 placeholder-slate-400 text-sm"
                                />
                            </div>
                            <button
                                onClick={() => handleSendMessage()}
                                className="w-11 h-11 bg-[#008069] rounded-full flex items-center justify-center text-white shadow-sm active:scale-90 transition-transform"
                            >
                                {inputValue.trim() ? <Send size={20} className="ml-0.5" /> : <Mic size={20} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChatDemo;
