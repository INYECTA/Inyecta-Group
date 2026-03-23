import React, { useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Zap, 
  Target, 
  TrendingUp, 
  Check, 
  ShieldCheck,
  ChevronRight,
  Clock,
  X,
  Sparkles
} from 'lucide-react';
import Testimonials from "../components/ui/testimonials";
import { Pricing } from "../components/blocks/pricing";
import { CALENDAR_LINK } from '../constants';
import { ClinicChatWidget } from '../components/ui/ClinicChatWidget';

const TrustBadges = () => {
  const badges = [
    { icon: <ShieldCheck className="w-5 h-5" />, text: "Garantía de Resultados" },
    { icon: <Clock className="w-5 h-5" />, text: "Implementación en 15 días" },
    { icon: <Zap className="w-5 h-5" />, text: "Soporte 24/7" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-60">
      {badges.map((b, i) => (
        <div key={i} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
          <span className="text-blue-600">{b.icon}</span>
          {b.text}
        </div>
      ))}
    </div>
  );
};

const StickyCTA = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 800);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-6 left-6 right-6 z-40 md:hidden"
        >
          <a 
            href={CALENDAR_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-3 bg-potion-accent text-white px-6 py-5 rounded-xl font-extrabold text-lg shadow-2xl shadow-blue-600/40 active:scale-95 tracking-tight"
          >
            <Zap className="w-5 h-5" />
            Agendar Auditoría Gratis
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-transparent">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] right-[-10%] w-[100%] md:w-[60%] h-[60%] bg-blue-100/30 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] left-[-10%] w-[100%] md:w-[60%] h-[60%] bg-slate-100/30 rounded-full blur-[120px]" 
        />
      </div>

      <div className="potion-container relative z-10 text-center flex flex-col items-center px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="potion-badge mb-6"
        >
          <Sparkles className="w-3 h-3 mr-2 inline" />
          Automatización Premium para Clínicas
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold text-black mb-8 md:mb-10 leading-[0.95] md:leading-[0.85] max-w-6xl tracking-tighter"
        >
          Consigue más pacientes <br className="hidden sm:block" /> <span className="potion-text-gradient">sin mover un dedo</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-lg sm:text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto mb-12 md:mb-16 leading-tight tracking-tight px-4 font-medium"
        >
          Automatizamos tu agenda y tus mensajes para que tu clínica crezca sola mientras tú te centras en tus pacientes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 md:mb-24 w-full max-w-md md:max-w-2xl"
        >
          <a href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer" className="potion-button-primary w-full sm:w-auto px-12 md:px-16 py-6 md:py-8 text-xl md:text-2xl shadow-2xl shadow-blue-600/30">
            Quiero mi Auditoría Gratis
            <ChevronRight className="ml-2 w-6 h-6" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <TrustBadges />
        </motion.div>
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 hidden lg:block p-6 potion-glass rounded-3xl rotate-[-12deg]"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
            <Check className="w-6 h-6" />
          </div>
          <div className="text-left">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Cita Confirmada</div>
            <div className="text-sm font-extrabold text-black">WhatsApp Enviado</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-10 hidden lg:block p-6 potion-glass rounded-3xl rotate-[8deg]"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div className="text-left">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Facturación</div>
            <div className="text-sm font-extrabold text-black">+35% este mes</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const StatsBar = () => {
  const stats = [
    { label: "Clínicas Automatizadas", value: "+100" },
    { label: "Citas Gestionadas", value: "+50.000" },
    { label: "Satisfacción Pacientes", value: "98%" },
    { label: "Crecimiento Facturación", value: "+35%" },
  ];

  return (
    <div className="bg-black py-10 md:py-12 px-4 md:px-6">
      <div className="potion-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center p-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-1 md:mb-2 tracking-tighter">
                {s.value}
              </div>
              <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest leading-tight">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const PricingSection = () => {
  const plans = [
    {
      name: "Básico – Agenda Organizada",
      price: "300",
      features: [
        "Calendario automático",
        "Recordatorios por WhatsApp",
        "Mensajes para no perder citas",
        "Soporte técnico incluido",
      ],
      description: "Ideal para clínicas que quieren dejar de perder tiempo organizando citas.",
      result: "Agenda llena y sin huecos vacíos.",
      buttonText: "Empezar ahora",
      href: CALENDAR_LINK,
      isPopular: false,
      icon: <Clock className="w-10 h-10" />
    },
    {
      name: "Intermedio – Chatbot Experto",
      price: "700",
      features: [
        "Todo lo del Plan Básico",
        "Respuestas automáticas 24/7",
        "Vende por Instagram y WhatsApp",
        "Seguimiento de pacientes interesados",
      ],
      description: "Para clínicas que quieren vender más sin tener que responder mensajes a mano.",
      result: "Más ventas y más tiempo libre para ti.",
      buttonText: "El más elegido",
      href: CALENDAR_LINK,
      isPopular: true,
      icon: <TrendingUp className="w-10 h-10" />
    },
    {
      name: "Premium – Sistema Total",
      price: "1500",
      features: [
        "Todo lo del Plan Intermedio",
        "Fidelización automática",
        "Encuestas de satisfacción",
        "Estrategia personalizada de escalado",
        "Soporte prioritario VIP",
      ],
      description: "Para clínicas que quieren un sistema completo que atraiga y fidelice pacientes solo.",
      result: "Máxima facturación y pacientes que siempre vuelven.",
      buttonText: "Quiero el sistema completo",
      href: CALENDAR_LINK,
      isPopular: false,
      icon: <ShieldCheck className="w-10 h-10" />
    },
  ];

  return (
    <section id="precios" className="bg-transparent py-24 md:py-40">
      <Pricing 
        plans={plans}
        showToggle={false}
        title="Planes diseñados para tu éxito"
        description="Elige el sistema que mejor se adapte al volumen y necesidades de tu clínica."
      />
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      q: "¿Es difícil de usar?",
      a: "Para nada. Nosotros nos encargamos de todo y tú solo ves cómo se llena tu agenda."
    },
    {
      q: "¿Cuánto tardáis en montarlo?",
      a: "En menos de una semana tu clínica ya estará funcionando en automático."
    },
    {
      q: "¿Se puede conectar con mi calendario?",
      a: "Sí, se conecta con Google Calendar y otros sistemas para que no tengas que cambiar nada."
    }
  ];

  return (
    <section className="py-20 md:py-32 px-6 bg-transparent">
      <div className="potion-container">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tighter text-black mb-6 leading-[1.1] md:leading-[0.9]">Dudas frecuentes</h2>
          <p className="text-lg text-slate-500 font-bold tracking-tight">Todo lo que necesitas saber antes de empezar.</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 md:p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-extrabold mb-3 text-black tracking-tight">{faq.q}</h3>
              <p className="text-slate-500 font-bold tracking-tight leading-tight">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProblemSection = () => {
  const problems = [
    { title: "Muchos mensajes, pocas citas", desc: "Pierdes pacientes porque tardas demasiado en responder por WhatsApp o Instagram." },
    { title: "Citas que no aparecen", desc: "Los pacientes se olvidan de su cita y te dejan el hueco vacío, perdiendo dinero." },
    { title: "Caos en la gestión", desc: "Pasas más tiempo organizando el calendario que tratando a tus pacientes." }
  ];

  return (
    <section className="py-24 md:py-40 px-4 md:px-6 bg-transparent relative">
      <div className="potion-container">
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="potion-badge bg-red-50 text-red-600 border-red-100"
          >
            El Problema
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter text-black mb-8 leading-[1] md:leading-[0.85]"
          >
            ¿Tu clínica está <span className="text-red-600">perdiendo</span> dinero?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-500 font-bold tracking-tight"
          >
            Si te sientes identificado con esto, necesitas un sistema automático.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {problems.map((p, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-10 rounded-[3rem] border border-slate-100 bg-white/40 backdrop-blur-xl hover:bg-white hover:shadow-2xl hover:shadow-red-500/5 transition-all duration-700 group"
            >
              <div className="w-16 h-16 bg-red-50 text-red-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <X className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-extrabold text-black mb-4 tracking-tighter leading-none">{p.title}</h3>
              <p className="text-lg text-slate-500 font-bold tracking-tight leading-tight">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SolutionSection = () => {
  const solutionList = [
    { 
      title: "Agenda Inteligente", 
      desc: "Recordatorios automáticos que eliminan los huecos vacíos en tu calendario.",
      icon: <Clock className="w-10 h-10" />
    },
    { 
      title: "Chatbot 24/7", 
      desc: "Responde dudas y agenda citas al instante, incluso mientras duermes.",
      icon: <Zap className="w-10 h-10" />
    },
    { 
      title: "Fidelización Real", 
      desc: "Seguimiento automático después de cada tratamiento para que el paciente vuelva.",
      icon: <TrendingUp className="w-10 h-10" />
    }
  ];

  return (
    <section id="beneficios" className="py-20 md:py-32 px-4 md:px-6 overflow-hidden relative bg-transparent">
      <div className="potion-container">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="potion-badge">Nuestra Solución</div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 md:mb-8 leading-[1.1] md:leading-[0.9]">
            Hacemos que tu clínica <br className="hidden md:block" /> <span className="text-blue-600">funcione sola</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {solutionList.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="potion-card p-12 md:p-16 flex flex-col items-center text-center bg-white/80 backdrop-blur-md border-slate-100 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group"
            >
              <div className="w-28 h-28 bg-blue-600 text-white rounded-[3rem] flex items-center justify-center mb-12 shadow-2xl shadow-blue-600/40 rotate-3 group-hover:rotate-0 transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-3xl md:text-5xl font-extrabold text-black mb-6 tracking-tighter leading-none">{item.title}</h3>
              <p className="text-xl text-slate-500 font-bold tracking-tight leading-tight">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section id="auditoria" className="py-20 md:py-32 px-4 md:px-6 bg-transparent relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-50 rounded-full blur-[80px] md:blur-[120px] opacity-40"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-slate-50 rounded-full blur-[80px] md:blur-[120px] opacity-40"></div>
      </div>
      
      <div className="potion-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-extrabold tracking-tighter text-black mb-8 md:mb-10 leading-[0.95] md:leading-[0.85]">
              Descubre cómo <span className="potion-text-gradient">automatizar</span> tu clínica
            </h2>
            
            <p className="text-xl md:text-3xl text-slate-500 mb-12 md:mb-16 max-w-3xl mx-auto leading-tight tracking-tight px-4 font-medium">
              Agenda una auditoría gratuita de 20 minutos y te mostraremos el camino exacto para escalar tu facturación.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4"
            >
              <a 
                href={CALENDAR_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="potion-button-primary inline-flex w-full sm:w-auto px-12 md:px-20 py-6 md:py-10 text-xl md:text-3xl shadow-2xl shadow-blue-600/40"
              >
                Reservar auditoría gratuita
                <ChevronRight className="ml-3 w-8 h-8" />
              </a>
            </motion.div>
            
            <p className="mt-8 text-slate-400 font-extrabold text-xs uppercase tracking-[0.2em]">
              Sin compromiso. Solo valor real para tu negocio.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      <StatsBar />
      
      <div className="relative">
        <ProblemSection />
        <SolutionSection />
        <Testimonials />
        <PricingSection />
        <FAQSection />
        <FinalCTA />
      </div>
      
      <StickyCTA />
      <ClinicChatWidget />
    </div>
  );
};
