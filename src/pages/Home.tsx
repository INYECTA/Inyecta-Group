import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Target, 
  Sparkles, 
  TrendingUp, 
  Check, 
  ShieldCheck,
  ChevronRight,
  AlertCircle,
  Clock,
  CalendarOff,
  TrendingDown,
  ArrowDown
} from 'lucide-react';
import Testimonials from "../components/ui/testimonials";
import { Pricing } from "../components/blocks/pricing";
import { CALENDAR_LINK } from '../constants';
import { SERVICES } from '../servicesData';
import { VerticalImageStack } from '../components/ui/vertical-image-stack';
import { FeatureSteps } from '../components/ui/feature-section';

const TrustBadges = () => {
  const badges = [
    { icon: <ShieldCheck className="w-5 h-5" />, text: "Garantía de Resultados" },
    { icon: <Clock className="w-5 h-5" />, text: "Implementación en 15 días" },
    { icon: <Zap className="w-5 h-5" />, text: "Soporte 24/7" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-12 opacity-60">
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
            className="flex items-center justify-center gap-3 bg-potion-accent text-white px-6 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-blue-600/40 active:scale-95"
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
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden min-h-[80vh] flex flex-col items-center justify-center">
      <div className="potion-container px-6 text-center flex flex-col items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col items-center mb-12"
        >
          <div className="potion-badge">
            <Zap className="w-4 h-4 mr-2" />
            Automatización de Negocios
          </div>
          <h1 className="text-4xl md:text-7xl leading-[1.1] mb-8 font-bold tracking-tighter max-w-4xl">
            <span className="potion-highlight">Automatiza</span> tu clínica estética y <span className="potion-highlight">deja de perder citas</span>
          </h1>
          <p className="text-lg md:text-2xl text-potion-muted leading-relaxed mb-10 max-w-3xl">
            Creamos sistemas que <span className="font-semibold text-slate-900">organizan tu agenda</span>, responden pacientes y hacen <span className="font-semibold text-slate-900">seguimiento automáticamente</span>, para que tu clínica tenga más reservas y menos caos.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12">
            {[
              "Menos citas perdidas",
              "Más pacientes que reservan",
              "Menos tiempo respondiendo mensajes"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-700 font-semibold">
                <span className="text-blue-600 text-xl">✔</span>
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center gap-4 w-full max-w-2xl mx-auto"
        >
          <a href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer" className="potion-button-primary w-full md:w-auto md:flex-1 py-6 text-xl shadow-2xl shadow-blue-600/30">
            Reservar auditoría gratuita
          </a>
          <Link to="/como-funciona" className="potion-button-secondary w-full md:w-auto md:flex-1 py-6 text-xl">
            Ver cómo funciona
          </Link>
        </motion.div>

        <TrustBadges />
      </div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-300 hidden md:block"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};

const ProblemSection = () => {
  const identifyList = [
    "Pacientes reservan y no se presentan",
    "WhatsApp lleno de preguntas repetitivas",
    "Leads que preguntan pero nunca reservan",
    "Tu equipo pierde horas gestionando agenda",
    "Nadie hace seguimiento después del tratamiento"
  ];

  const agitateList = [
    "Pacientes olvidan sus citas",
    "Leads se enfrían y reservan en otra clínica",
    "Tu equipo se satura respondiendo mensajes",
    "Se pierden oportunidades de reventa de tratamientos"
  ];

  return (
    <section id="problema" className="py-16 md:py-20 px-6 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-grid pointer-events-none"></div>
      
      <div className="potion-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
          
          {/* IDENTIFICAR EL PROBLEMA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest">
              PROBLEMA
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1]">
              Si tienes una clínica estética, <span className="text-red-500">probablemente te pasa esto</span>
            </h2>
            
            <div className="space-y-4">
              {identifyList.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-lg text-slate-300">
                  <span className="text-red-500 mt-1 font-bold">•</span>
                  {item}
                </div>
              ))}
            </div>
            
            <p className="text-xl font-semibold text-white pt-4 border-t border-white/10">
              Esto hace que pierdas <span className="text-red-500">tiempo, pacientes y dinero</span> cada semana.
            </p>
          </motion.div>

          {/* AGITAR EL PROBLEMA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
              EL IMPACTO REAL
            </div>
            <h3 className="text-2xl md:text-4xl font-bold tracking-tight leading-[1.2]">
              El problema <span className="text-blue-400">no es solo la agenda</span>
            </h3>
            
            <p className="text-lg text-slate-400">
              Cuando una clínica no tiene sistemas automáticos pasa esto:
            </p>

            <div className="space-y-4">
              {agitateList.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-lg text-slate-300">
                  <span className="text-blue-400 mt-1 font-bold">•</span>
                  {item}
                </div>
              ))}
            </div>
            
            <p className="text-lg italic text-slate-400 pt-6 border-t border-white/5">
              Mientras tanto, otras clínicas <span className="text-white font-bold">automatizan todo y crecen más rápido</span>.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      step: '1',
      title: 'Auditoría gratuita',
      content: 'Analizamos tu sistema de citas y detectamos dónde estás perdiendo pacientes.',
      image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=1000&auto=format&fit=crop'
    },
    {
      step: '2',
      title: 'Implementación',
      content: 'Configuramos el sistema de automatización adaptado a tu clínica.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop'
    },
    {
      step: '3',
      title: 'Automatización completa',
      content: 'Tu clínica empieza a tener recordatorios, respuestas automáticas y seguimiento de pacientes.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  return (
    <section id="como-funciona" className="py-16 md:py-20 px-6 bg-slate-50/50">
      <FeatureSteps 
        features={steps}
        title="Cómo funciona"
        autoPlayInterval={5000}
        imageHeight="h-[500px]"
      />
    </section>
  );
};

const PricingSection = () => {
  const plans = [
    {
      name: "Plan Básico – Sistema automático de citas",
      price: "300",
      features: [
        "Organización completa del calendario",
        "Definición de horarios y franjas disponibles",
        "Límite de citas por día",
        "Recordatorio automático 1 día antes de la cita",
        "Recordatorio automático 30 minutos antes",
        "Mensaje automático para reagendar citas",
      ],
      description: "Ideal para clínicas que quieren organizar su agenda y evitar citas perdidas.",
      result: "Menos citas vacías y una agenda mucho más organizada.",
      buttonText: "Solicitar información",
      href: CALENDAR_LINK,
      isPopular: false,
    },
    {
      name: "Plan Intermedio – Chatbot inteligente para pacientes",
      price: "700",
      features: [
        "Todo lo incluido en el Plan Básico",
        "Respuestas automáticas a preguntas frecuentes",
        "Automatización de mensajes en Instagram y WhatsApp",
        "Guía automática al paciente hasta reservar su cita",
        "Seguimiento automático si el paciente no reserva",
        "Sugerencias automáticas de tratamientos relacionados",
      ],
      description: "Perfecto para clínicas que quieren automatizar mensajes y convertir más consultas en citas.",
      result: "Más reservas y menos tiempo respondiendo mensajes repetitivos.",
      buttonText: "Solicitar información",
      href: CALENDAR_LINK,
      isPopular: true,
    },
    {
      name: "Plan Premium – Sistema completo de automatización y fidelización",
      price: "1500",
      features: [
        "Todo lo incluido en el Plan Intermedio",
        "Seguimiento automático después de cada cita",
        "Recordatorios inteligentes según el tratamiento realizado",
        "Formularios automáticos para medir la satisfacción del paciente",
        "Sugerencias automáticas de nuevos tratamientos",
        "Chatbot avanzado con respuestas naturales y personalizadas",
        "Guía completa paso a paso para aprovechar todo el sistema",
      ],
      description: "Para clínicas que quieren un sistema completo que capte, gestione y fidelice pacientes automáticamente.",
      result: "Más pacientes recurrentes, más tratamientos por paciente y una clínica que funciona con sistemas automáticos.",
      buttonText: "Solicitar información",
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
      q: "¿Cuánto tarda en implementarse?",
      a: "2-5 días dependiendo del sistema."
    },
    {
      q: "¿Mi equipo necesita formación?",
      a: "No, el sistema es muy sencillo y te guiamos paso a paso."
    },
    {
      q: "¿Funciona con mi calendario?",
      a: "Sí, se integra con Google Calendar."
    }
  ];

  return (
    <section className="py-16 md:py-20 px-6 bg-slate-50">
      <div className="potion-container">
        <div className="text-center mb-20">
          <h2 className="potion-h2">Preguntas Frecuentes</h2>
          <p className="potion-p mx-auto">Resolvemos tus dudas para que des el paso con total confianza.</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm"
            >
              <h3 className="text-xl font-bold mb-4 text-slate-900">{faq.q}</h3>
              <p className="text-slate-500 leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SolutionSection = () => {
  const solutionList = [
    "Recordatorios automáticos de citas",
    "Agenda organizada con reservas online",
    "Respuestas automáticas en Instagram y WhatsApp",
    "Seguimiento de pacientes después del tratamiento"
  ];

  return (
    <section id="solucion" className="py-16 md:py-20 px-6 overflow-hidden relative bg-white">
      <div className="potion-container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
              <span className="text-blue-600">Automatizar tu clínica</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-12 max-w-2xl mx-auto">
              Creamos sistemas de automatización diseñados específicamente para clínicas estéticas.
              Estos sistemas trabajan por tu clínica 24 horas al día:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12 text-left">
              {solutionList.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-lg text-slate-700 font-medium">
                  <span className="text-blue-600 text-xl font-bold">✔</span>
                  {item}
                </div>
              ))}
            </div>

            <p className="text-2xl font-bold text-slate-900 border-t border-slate-100 pt-12">
              Tu equipo puede centrarse en lo importante <br />
              <span className="text-blue-600 text-3xl md:text-4xl">atender pacientes</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="potion-container px-6 mb-20 text-center">
        <div className="potion-badge">Visualiza el futuro</div>
        <h2 className="potion-h2">Multiplica tus <span className="potion-highlight">reservas</span></h2>
        <p className="potion-p mx-auto">Mira cómo transformamos la operatividad y los ingresos de clínicas como la tuya.</p>
      </div>
      <VerticalImageStack />
    </section>
  );
};

import { Logo } from '../components/ui/Logo';

const ResultsSection = () => {
  const results = [
    "Menos citas perdidas",
    "Más pacientes que reservan",
    "Menos tiempo en redes sociales",
    "Más tratamientos por paciente",
    "Más ingresos mensuales"
  ];

  return (
    <section id="resultados" className="py-16 md:py-20 px-6 bg-slate-50">
      <div className="potion-container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="potion-badge">RESULTADOS</div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              Lo que cambia en tu clínica
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.1)" }}
                className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm transition-all flex items-center gap-4 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 shrink-0 shadow-inner group-hover:bg-green-200 transition-colors">
                  <Check className="w-6 h-6" />
                </div>
                <span className="text-lg font-bold text-slate-800 relative z-10">{result}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-20 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-50 rounded-full blur-[120px] opacity-60"></div>
      </div>
      
      <div className="potion-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-8 leading-tight">
              Descubre cómo <span className="text-blue-600">automatizar</span> tu clínica
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
              Agenda una auditoría gratuita de 20 minutos y te mostraremos el camino exacto para escalar tu facturación.
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a 
                href={CALENDAR_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center bg-blue-600 text-white px-12 py-6 rounded-2xl font-bold text-xl md:text-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 text-center"
              >
                Reservar auditoría gratuita
              </a>
            </motion.div>
            
            <p className="mt-8 text-slate-400 font-medium">
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
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <Testimonials />
      <PortfolioSection />
      <HowItWorks />
      <ResultsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
      <StickyCTA />
    </>
  );
};
