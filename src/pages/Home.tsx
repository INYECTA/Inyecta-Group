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
  X
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
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-transparent">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[80%] md:w-[50%] h-[50%] bg-blue-50 rounded-full blur-[80px] md:blur-[120px] opacity-40" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[80%] md:w-[50%] h-[50%] bg-slate-50 rounded-full blur-[80px] md:blur-[120px] opacity-40" />
      </div>

      <div className="potion-container relative z-10 text-center flex flex-col items-center px-4 md:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-black mb-6 md:mb-8 leading-[1.1] md:leading-[0.9] max-w-5xl tracking-tighter"
        >
          Consigue más pacientes <br className="hidden sm:block" /> <span className="text-blue-600">sin mover un dedo</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-base sm:text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 md:mb-12 leading-tight tracking-tight px-4"
        >
          Automatizamos tu agenda y tus mensajes para que tu clínica crezca sola mientras tú te centras en tus pacientes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 md:mb-20 w-full max-w-md md:max-w-2xl"
        >
          <a href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer" className="potion-button-primary w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 text-lg md:text-xl">
            Quiero mi Auditoría Gratis
          </a>
        </motion.div>

        <TrustBadges />
      </div>
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
    },
  ];

  return (
    <section id="precios" className="bg-slate-50/50 py-16">
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
    <section className="py-20 md:py-32 px-4 md:px-6 bg-transparent">
      <div className="potion-container">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="potion-badge bg-red-50 text-red-600 border-red-100">El Problema</div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tighter text-black mb-6 leading-[1.1] md:leading-[0.9]">
            ¿Tu clínica está <span className="text-red-600">perdiendo</span> dinero?
          </h2>
          <p className="text-lg text-slate-500 font-bold tracking-tight">Si te sientes identificado con esto, necesitas un sistema automático.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <div key={i} className="p-8 rounded-3xl border border-slate-100 bg-white/50 backdrop-blur-sm">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                <X className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-black mb-3 tracking-tighter">{p.title}</h3>
              <p className="text-slate-500 font-bold tracking-tight leading-tight">{p.desc}</p>
            </div>
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
    <section id="solucion" className="py-20 md:py-32 px-4 md:px-6 overflow-hidden relative bg-transparent">
      <div className="potion-container">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="potion-badge">Nuestra Solución</div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 md:mb-8 leading-[1.1] md:leading-[0.9]">
            Hacemos que tu clínica <br className="hidden md:block" /> <span className="text-blue-600">funcione sola</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionList.map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className="potion-card p-10 md:p-14 flex flex-col items-center text-center bg-white/80 backdrop-blur-md border-slate-100 shadow-xl"
            >
              <div className="w-24 h-24 bg-blue-600 text-white rounded-[2.5rem] flex items-center justify-center mb-10 shadow-2xl shadow-blue-200 rotate-3 group-hover:rotate-0 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-black mb-6 tracking-tighter leading-none">{item.title}</h3>
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
    <section className="py-20 md:py-32 px-4 md:px-6 bg-transparent relative overflow-hidden">
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
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-extrabold tracking-tighter text-black mb-6 md:mb-8 leading-[1.1] md:leading-[0.9]">
              Descubre cómo <span className="text-blue-600">automatizar</span> tu clínica
            </h2>
            
            <p className="text-lg md:text-2xl text-slate-500 mb-10 md:mb-12 max-w-2xl mx-auto leading-tight tracking-tight px-4">
              Agenda una auditoría gratuita de 20 minutos y te mostraremos el camino exacto para escalar tu facturación.
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4"
            >
              <a 
                href={CALENDAR_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="potion-button-primary inline-flex w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 text-lg md:text-2xl"
              >
                Reservar auditoría gratuita
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
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Dynamic background color transition
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["#ffffff", "#f8fafc", "#f1f5f9", "#ffffff", "#f8fafc", "#ffffff"]
  );

  return (
    <motion.div ref={containerRef} style={{ backgroundColor }} className="transition-colors duration-700">
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
    </motion.div>
  );
};
