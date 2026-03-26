import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Send, MessageCircle, X, User, Bot, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { CALENDAR_LINK } from '../../constants';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}

const CLINIC_AVATAR = "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=500&auto=format&fit=crop";

const TypingIndicator = () => (
  <div className="flex gap-1.5 px-1 py-1">
    <motion.div
      animate={{ scale: [1, 1.2, 1], opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 1] }}
      className="w-1.5 h-1.5 bg-slate-400 rounded-full"
    />
    <motion.div
      animate={{ scale: [1, 1.2, 1], opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 1], delay: 0.2 }}
      className="w-1.5 h-1.5 bg-slate-400 rounded-full"
    />
    <motion.div
      animate={{ scale: [1, 1.2, 1], opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 1], delay: 0.4 }}
      className="w-1.5 h-1.5 bg-slate-400 rounded-full"
    />
  </div>
);

export const ClinicChatWidget = ({ 
  embedded = false, 
  progressive = false 
}: { 
  embedded?: boolean;
  progressive?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(embedded || progressive);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const hasInitialized = useRef(false);

  const demoMessages: Message[] = [
    { id: 'd1', text: '¡Hola! Soy Elena. Estoy aquí para que dejes de quemar dinero en leads que nunca llegan a tu camilla. 👋', sender: 'ai' },
    { id: 'd2', text: '¿Sabías que si no respondes en menos de 5 minutos, el 70% de tus pacientes se van a la clínica de al lado?', sender: 'ai' },
    { id: 'u1', text: 'Sí, es imposible estar pendiente de todo mientras opero.', sender: 'user' },
    { id: 'd3', text: 'Exacto. Nuestra IA inyecta rentabilidad en tu agenda cerrando citas 24/7 por ti para que nunca tengas huecos vacíos.', sender: 'ai' },
    { id: 'd4', text: '¿Quieres ver cómo recuperaríamos tus citas perdidas con una auditoría gratuita? 🚀', sender: 'ai' }
  ];

  useEffect(() => {
    if (progressive && isInView && messages.length === 0) {
      let currentIdx = 0;
      const showNextMessage = () => {
        if (currentIdx < demoMessages.length) {
          const nextMsg = demoMessages[currentIdx];
          
          if (nextMsg.sender === 'ai') {
            setIsTyping(true);
            // Simulate thinking/typing time
            const typingTime = Math.max(1000, nextMsg.text.length * 20); 
            setTimeout(() => {
              setMessages(prev => [...prev, nextMsg]);
              setIsTyping(false);
              currentIdx++;
              setTimeout(showNextMessage, 1500);
            }, typingTime);
          } else {
            // User message appears faster
            setTimeout(() => {
              setMessages(prev => [...prev, nextMsg]);
              currentIdx++;
              setTimeout(showNextMessage, 1000);
            }, 800);
          }
        }
      };
      showNextMessage();
    }
  }, [progressive, isInView]);

  useEffect(() => {
    let isMounted = true;
    if (!progressive && !hasInitialized.current) {
      hasInitialized.current = true;
      const welcomeText = '¡Hola! 👋 Soy Elena. Estoy aquí para que dejes de perder dinero por no contestar mensajes. ¿Te gustaría saber cómo nuestra IA puede inyectar pacientes de alto valor en tu agenda 24/7 mientras tú estás en cabina?';
      
      const typeInitialMessage = async () => {
        setIsTyping(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        if (!isMounted) return;
        setIsTyping(false);
        
        const initialMsg: Message = { id: '1', text: '', sender: 'ai' };
        setMessages([initialMsg]);
        
        let currentText = '';
        for (let i = 0; i < welcomeText.length; i++) {
          if (!isMounted) break;
          currentText += welcomeText[i];
          const textToSet = currentText;
          setMessages(prev => prev.map(msg => msg.id === '1' ? { ...msg, text: textToSet } : msg));
          await new Promise(resolve => setTimeout(resolve, 20));
        }
      };
      
      typeInitialMessage();
    }
    return () => { isMounted = false; };
  }, [progressive]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || progressive) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Small delay before bot starts "typing"
    setTimeout(() => setIsTyping(true), 400);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const model = ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          {
            role: "user",
            parts: [{ text: `Eres Elena, una asistente virtual experta de Inyecta Group. Responde de manera directa, profesional y cercana a: "${input}". Tu objetivo es demostrar cómo la automatización con IA resuelve los problemas de gestión y ventas en clínicas estéticas. Recomienda siempre agendar una auditoría gratuita.` }]
          }
        ],
        config: {
          systemInstruction: "Eres Elena, la cara visible de Inyecta Group. Tu tono es premium, directo y agresivo en la venta de beneficios. Eres experta en Respuesta Directa y automatización con IA para clínicas estéticas. Tu objetivo es que el cliente sienta el dolor de cada euro perdido por no responder a tiempo. Te enfocas en la rentabilidad de cabina, el ROI y en cómo la IA cierra citas reales 24/7. Siempre diriges a la auditoría gratuita como la única solución para dejar de quemar dinero."
        }
      });

      const response = await model;
      const aiText = response.text || "Lo siento, ¿podrías repetir eso?";

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: '',
        sender: 'ai'
      };

      // Remove typing indicator and add empty message bubble
      setIsTyping(false);
      setMessages(prev => [...prev, aiMessage]);

      let currentText = '';
      const words = aiText.split(' ');
      for (let i = 0; i < words.length; i++) {
        currentText += words[i] + ' ';
        const updatedText = currentText;
        setMessages(prev => prev.map(msg => msg.id === aiMessage.id ? { ...msg, text: updatedText } : msg));
        await new Promise(resolve => setTimeout(resolve, 30));
      }

    } catch (error) {
      setMessages(prev => [...prev, { id: Date.now().toString(), text: "Error de conexión.", sender: 'ai' }]);
      setIsTyping(false);
    }
  };

  const chatContent = (
    <div ref={containerRef} className={`flex flex-col h-full ${embedded || progressive ? '' : 'bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden'}`}>
      {/* Header for non-progressive/embedded */}
      {!embedded && !progressive && (
        <div className="bg-white p-5 flex items-center justify-between border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-600/20">
              <img src={CLINIC_AVATAR} alt="Elena" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-slate-900 font-bold text-sm">Elena</h3>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-slate-400 text-xs font-medium">En línea</span>
              </div>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white scrollbar-hide">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.sender === 'ai' && (
              <div className="w-8 h-8 rounded-full overflow-hidden mr-3 shrink-0 border border-slate-100 shadow-sm">
                <img src={CLINIC_AVATAR} alt="Elena" className="w-full h-full object-cover" />
              </div>
            )}
            <div
              className={`max-w-[85%] p-4 rounded-2xl text-[15px] leading-relaxed shadow-sm ${
                msg.sender === 'user'
                  ? 'bg-blue-600 text-white rounded-tr-none'
                  : 'bg-slate-50 text-slate-700 border border-slate-100 rounded-tl-none'
              }`}
            >
              {msg.text || <TypingIndicator />}
            </div>
          </motion.div>
        ))}
        {isTyping && (
          <div className="flex justify-start items-center">
            <div className="w-8 h-8 rounded-full overflow-hidden mr-3 shrink-0 border border-slate-100">
              <img src={CLINIC_AVATAR} alt="Elena" className="w-full h-full object-cover" />
            </div>
            <div className="bg-slate-50 text-slate-400 border border-slate-100 p-4 rounded-2xl rounded-tl-none">
              <TypingIndicator />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Footer / Input */}
      {!progressive && (
        <div className="p-5 bg-white border-t border-slate-100 flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Escribe un mensaje..."
            className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition-all"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="bg-blue-600 text-white p-3 rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      )}
      
      {progressive && messages.length === demoMessages.length && !isTyping && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 bg-white border-t border-slate-100"
        >
          <a 
            href={CALENDAR_LINK} 
            target="_blank" 
            className="flex items-center justify-center gap-2 bg-blue-600 text-white py-4 rounded-2xl font-bold text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
          >
            <Sparkles className="w-4 h-4" />
            Agendar auditoría gratuita
          </a>
        </motion.div>
      )}
    </div>
  );

  if (embedded || progressive) return chatContent;

  return (
    <>
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: 1 
        }}
        transition={{
          scale: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          },
          opacity: { duration: 0.5 }
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[9999] bg-[#25D366] text-white p-4 md:p-5 rounded-3xl shadow-2xl shadow-green-500/40 flex items-center justify-center"
      >
        {isOpen ? <X className="w-7 h-7" /> : (
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            className="fixed bottom-28 right-8 z-[9999] w-[400px] max-w-[90vw] h-[600px] flex flex-col"
          >
            {chatContent}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

