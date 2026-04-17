import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Send, MessageCircle, X, User, Bot, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GoogleGenAI } from "@google/genai";
import { SCHEDULE_PATH } from '../../constants';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}

const CLINIC_AVATAR = "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=500&auto=format&fit=crop";

const TypingIndicator = () => (
  <div className="flex gap-1.5 px-2 py-2">
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
      className="w-1.5 h-1.5 bg-blue-400 rounded-full"
    />
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      className="w-1.5 h-1.5 bg-blue-400 rounded-full"
    />
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      className="w-1.5 h-1.5 bg-blue-400 rounded-full"
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
    { id: 'd1', text: '¡Hola! Soy Elena de Inyecta Group. 👋 Estoy aquí para ayudarte a que tu clínica deje de perder pacientes por falta de respuesta.', sender: 'ai' },
    { id: 'd2', text: '¿Sabías que el 70% de los leads se pierden si no contestas en los primeros 5 minutos?', sender: 'ai' },
    { id: 'u1', text: 'Es verdad, a veces no damos abasto con tanto WhatsApp.', sender: 'user' },
    { id: 'd3', text: 'Te entiendo perfectamente. Por eso nuestra IA agenda citas por ti 24/7, para que tú solo te preocupes de lo que mejor haces: tus tratamientos.', sender: 'ai' },
    { id: 'd4', text: '¿Te gustaría que analizáramos tu caso en una llamada gratuita? 🚀', sender: 'ai' }
  ];

  useEffect(() => {
    if (progressive && isInView && messages.length === 0) {
      let currentIdx = 0;
      const showNextMessage = () => {
        if (currentIdx < demoMessages.length) {
          const nextMsg = demoMessages[currentIdx];
          
          if (nextMsg.sender === 'ai') {
            setIsTyping(true);
            const typingTime = Math.max(1500, nextMsg.text.length * 15); 
            setTimeout(() => {
              setMessages(prev => [...prev, nextMsg]);
              setIsTyping(false);
              currentIdx++;
              setTimeout(showNextMessage, 2000);
            }, typingTime);
          } else {
            setTimeout(() => {
              setMessages(prev => [...prev, nextMsg]);
              currentIdx++;
              setTimeout(showNextMessage, 1200);
            }, 1000);
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
      const welcomeText = '¡Hola! 👋 Soy Elena. Estoy aquí para ayudarte a escalar tu clínica. ¿Sabías que la mayoría de clínicas pierden el 40% de sus ventas por no responder a tiempo? Nuestra IA soluciona eso agendando citas por ti 24/7. ¿Cómo puedo ayudarte hoy?';
      
      const typeInitialMessage = async () => {
        setIsTyping(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        if (!isMounted) return;
        setIsTyping(false);
        
        const initialMsg: Message = { id: '1', text: '', sender: 'ai' };
        setMessages([initialMsg]);
        
        let currentText = '';
        const words = welcomeText.split(' ');
        for (let i = 0; i < words.length; i++) {
          if (!isMounted) break;
          currentText += words[i] + ' ';
          const textToSet = currentText;
          setMessages(prev => prev.map(msg => msg.id === '1' ? { ...msg, text: textToSet } : msg));
          await new Promise(resolve => setTimeout(resolve, 40 + Math.random() * 40));
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
    
    setTimeout(() => setIsTyping(true), 600);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          {
            role: "user",
            parts: [{ text: input }]
          }
        ],
        config: {
          systemInstruction: `Eres Elena, una consultora experta de Inyecta Group. Tu objetivo es ayudar a dueños de clínicas estéticas a entender cómo la IA y la automatización pueden escalar su negocio. 
          
          REGLAS DE PERSONALIDAD:
          1. Habla de forma humana, cercana pero muy profesional. No parezcas un robot.
          2. Usa un lenguaje que entiendan (leads, agenda, facturación, ROI, rentabilidad de cabina).
          3. Sé empática con su falta de tiempo: "Sé que estar operando y atendiendo el WhatsApp a la vez es imposible".
          4. Tu meta final es que agenden una LLAMADA GRATUITA. Es el siguiente paso lógico.
          5. Sé directa: si no responden en 5 minutos, pierden al paciente. La IA es la solución.
          6. No des respuestas excesivamente largas. Sé concisa y valiosa.
          7. Si preguntan precios, di que depende de la escala de la clínica y que en la llamada gratuita les daremos un presupuesto a medida.`
        }
      });

      const aiText = response.text || "Lo siento, he tenido un pequeño problema de conexión. ¿Podrías repetirme eso?";

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: '',
        sender: 'ai'
      };

      setIsTyping(false);
      setMessages(prev => [...prev, aiMessage]);

      let currentText = '';
      const words = aiText.split(' ');
      for (let i = 0; i < words.length; i++) {
        currentText += words[i] + ' ';
        const updatedText = currentText;
        setMessages(prev => prev.map(msg => msg.id === aiMessage.id ? { ...msg, text: updatedText } : msg));
        await new Promise(resolve => setTimeout(resolve, 30 + Math.random() * 30));
      }

    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { id: Date.now().toString(), text: "Vaya, parece que Elena está atendiendo a muchos clientes ahora mismo. ¿Podrías intentarlo de nuevo en un momento?", sender: 'ai' }]);
      setIsTyping(false);
    }
  };

  const chatContent = (
    <div ref={containerRef} className={`flex flex-col h-full ${embedded || progressive ? '' : 'bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden'}`}>
      {/* Header for non-progressive/embedded */}
      {!embedded && !progressive && (
        <div className="bg-white p-6 flex items-center justify-between border-b border-slate-50">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-600/10">
                <img src={CLINIC_AVATAR} alt="Elena" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full" />
            </div>
            <div>
              <h3 className="text-slate-900 font-black text-base tracking-tight">Elena</h3>
              <span className="text-slate-400 text-xs font-bold uppercase tracking-widest" translate="no">Inyecta Group</span>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-slate-50 rounded-full transition-colors">
            <X className="w-6 h-6 text-slate-400" />
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
              <div className="w-8 h-8 rounded-full overflow-hidden mr-3 shrink-0 border border-slate-100 shadow-sm mt-1">
                <img src={CLINIC_AVATAR} alt="Elena" className="w-full h-full object-cover" />
              </div>
            )}
            <div
              className={`max-w-[85%] p-4 rounded-2xl text-[15px] font-medium leading-relaxed shadow-sm ${
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
        <div className="p-6 bg-white border-t border-slate-50 flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Escribe un mensaje..."
            className="flex-1 bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all placeholder:text-slate-400"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="bg-blue-600 text-white p-4 rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
          >
            <Send className="w-6 h-6" />
          </button>
        </div>
      )}
      
      {progressive && messages.length === demoMessages.length && !isTyping && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 bg-white border-t border-slate-50"
        >
          <Link 
            to={SCHEDULE_PATH} 
            className="flex items-center justify-center gap-3 bg-blue-600 text-white py-5 rounded-2xl font-black text-base hover:bg-blue-700 transition-all shadow-2xl shadow-blue-600/30"
          >
            <Sparkles className="w-5 h-5" />
            Agendar llamada gratuita
          </Link>
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
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[9999] bg-blue-600 text-white p-5 md:p-6 rounded-[2rem] shadow-2xl shadow-blue-600/40 flex items-center justify-center"
      >
        {isOpen ? <X className="w-8 h-8" /> : (
          <div className="relative">
            <MessageCircle className="w-8 h-8" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-blue-600 rounded-full" />
          </div>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            className="fixed bottom-28 right-8 z-[9999] w-[420px] max-w-[90vw] h-[650px] flex flex-col"
          >
            {chatContent}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

