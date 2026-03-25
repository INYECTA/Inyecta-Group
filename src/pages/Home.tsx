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
          className="absolute top-[-20%] right-[-10%] w-[100%] md:w-[60%] h-[60%] bg-blue-100/30 rounded-full blur-[120px] hidden md:block" 
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] left-[-10%] w-[100%] md:w-[60%] h-[60%] bg-slate-100/30 rounded-full blur-[120px] hidden md:block" 
        />
        {/* Static background for mobile to save performance */}
        <div className="absolute top-[-10%] right-[-10%] w-[80%] h-[40%] bg-blue-100/20 rounded-full blur-[80px] md:hidden" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[80%] h-[40%] bg-slate-100/20 rounded-full blur-[80px] md:hidden" />
      </div>

      <div className="potion-container relative z-10 text-center flex flex-col items-center px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="potion-badge mb-6"
        >
          <Sparkles className="w-3 h-3 mr-2 inline" />
          Sistemas de IA para Clínicas de Medicina Estética
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-black mb-8 md:mb-10 leading-[0.95] md:leading-[0.85] max-w-6xl tracking-tighter"
        >
          Llenamos la agenda de tu clínica <span className="potion-text-gradient">mientras tú estás en cabina</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-slate-500 max-w-3xl mx-auto mb-12 md:mb-16 leading-tight tracking-tight px-4 font-medium"
        >
          Instalamos sistemas de IA que captan, filtran y agendan pacientes reales las 24 horas del día. Deja de perder ventas por no contestar un WhatsApp y recupera el control de tu tiempo y tu negocio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 md:mb-24 w-full max-w-md md:max-w-2xl"
        >
          <a href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer" className="potion-button-primary w-full sm:w-auto px-12 md:px-16 py-6 md:py-8 text-xl md:text-2xl shadow-2xl shadow-blue-600/30">
            Agendar Auditoría Gratuita
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
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[5%] left-2 sm:left-[2%] xl:left-[8%] p-2 sm:p-6 potion-glass rounded-2xl sm:rounded-3xl rotate-[-12deg] z-[-1] opacity-100 sm:opacity-40 xl:opacity-100 transition-all scale-[0.65] sm:scale-90 xl:scale-100 pointer-events-none"
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/20">
            <svg className="w-4 h-4 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
          <div className="text-left">
            <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Cita Confirmada</div>
            <div className="text-xs sm:text-sm font-extrabold text-black leading-none">WhatsApp Enviado</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[5%] right-2 sm:right-[2%] xl:right-[8%] p-2 sm:p-6 potion-glass rounded-2xl sm:rounded-3xl rotate-[8deg] z-[-1] opacity-100 sm:opacity-40 xl:opacity-100 transition-all scale-[0.65] sm:scale-90 xl:scale-100 pointer-events-none"
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="text-left">
            <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Facturación</div>
            <div className="text-xs sm:text-sm font-extrabold text-black leading-none">+35% este mes</div>
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
      name: "Gestión y Orden",
      price: "300",
      features: [
        "Recupera 20 horas al mes",
        "Agenda 100% organizada",
        "Cero errores humanos",
        "Soporte técnico prioritario",
      ],
      description: "Consigue el orden que tu clínica necesita. Automatizamos la gestión de citas para que dejes de perder tiempo en tareas administrativas y vuelvas a ser el dueño.",
      result: "Ideal para profesionalizar la operativa y recuperar tu tiempo.",
      buttonText: "Agendar Auditoría Gratuita",
      href: CALENDAR_LINK,
      isPopular: false,
      icon: <Clock className="w-10 h-10" />
    },
    {
      name: "Atención y Cierre 24/7",
      price: "700",
      features: [
        "Cero fugas en Instagram/WhatsApp",
        "Atención inmediata 24/7",
        "Cierre de citas automático",
        "Recuperación de leads",
      ],
      description: "Consigue que cada mensaje se convierta en una cita. Nuestra IA vende por ti mientras tú operas, asegurando que ningún paciente se escape a la competencia.",
      result: "Maximiza tu conversión y capta cada lead sin mover un dedo.",
      buttonText: "Agendar Auditoría Gratuita",
      href: CALENDAR_LINK,
      isPopular: true,
      icon: <TrendingUp className="w-10 h-10" />
    },
    {
      name: "Escala Total",
      price: "1500",
      features: [
        "Crecimiento automático",
        "Fidelización de alto nivel",
        "Delegación total de agenda",
        "Maximización de facturación",
      ],
      description: "Consigue la libertad total. Un sistema de alto rendimiento que atrae, vende y fideliza pacientes de forma autónoma para que tú solo te enfoques en escalar.",
      result: "La solución definitiva para escalar tu facturación al siguiente nivel.",
      buttonText: "Agendar Auditoría Gratuita",
      href: CALENDAR_LINK,
      isPopular: false,
      icon: <ShieldCheck className="w-10 h-10" />
    },
  ];

  return (
    <section id="precios" className="bg-transparent py-24 md:py-40">
      <div className="potion-container mb-12 text-center">
        <div className="potion-badge">SECCIÓN C: Nuestros Servicios</div>
      </div>
      <Pricing 
        plans={plans}
        showToggle={false}
        title="Sistemas diseñados para escalar tu clínica"
        description="Elige el nivel de automatización que tu negocio necesita hoy para dejar de perder pacientes."
      />
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      q: "¿Cómo sé que esto funciona en mi clínica?",
      a: "Solo trabajamos con medicina estética. Conocemos tus tratamientos, tus márgenes y tus pacientes. Si no llenamos tu agenda, nuestro sistema no tiene sentido."
    },
    {
      q: "¿Tengo que estar pendiente de la IA?",
      a: "Al contrario. El objetivo es que te olvides del móvil. La IA está entrenada para actuar como tu mejor secretaria, cerrando citas mientras tú operas."
    },
    {
      q: "¿Es difícil de implementar?",
      a: "Nosotros nos encargamos de todo. En menos de 15 días tienes el sistema funcionando y captando pacientes. Tú no tienes que configurar nada."
    },
    {
      q: "¿Cuándo empezaré a ver resultados?",
      a: "La mayoría de las clínicas ven cómo su agenda empieza a llenarse sola desde la primera semana de activación del sistema."
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
    { title: "Esclavo del móvil", desc: "Vives pegado a WhatsApp respondiendo las mismas dudas a deshoras. Si no contestas en 5 minutos, el paciente se va a la competencia." },
    { title: "Fugas de dinero", desc: "Pierdes citas cada día porque tu recepción está saturada o porque nadie atiende Instagram el fin de semana." },
    { title: "Caos administrativo", desc: "Tu agenda es un rompecabezas manual. Errores en citas, huecos vacíos y falta de previsión en tu facturación." }
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
            SECCIÓN A: El Problema
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tighter text-black mb-8 leading-[1] md:leading-[0.85]"
          >
            ¿Tu clínica es un negocio o <span className="text-red-600">una cárcel</span> de WhatsApp?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 font-bold tracking-tight"
          >
            Cada mensaje sin responder es un tratamiento que no cobras. El caos administrativo te está quitando la vida y el dinero.
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
              className="p-10 rounded-[3rem] border border-slate-100 bg-white md:bg-white/40 md:backdrop-blur-xl hover:bg-white hover:shadow-2xl hover:shadow-red-500/5 transition-all duration-700 group"
            >
              <div className="w-16 h-16 bg-red-50 text-red-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <X className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-black mb-4 tracking-tighter leading-none">{p.title}</h3>
              <p className="text-base text-slate-500 font-bold tracking-tight leading-tight">{p.desc}</p>
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
      title: "1. Auditoría de fugas", 
      desc: "Analizamos dónde estás perdiendo pacientes y dinero hoy mismo. Detectamos los puntos ciegos de tu atención al cliente.",
      icon: <Target className="w-10 h-10" />
    },
    { 
      title: "2. Integración IA 24/7", 
      desc: "Instalamos tu sistema de IA personalizado que atiende, filtra y agenda citas en WhatsApp e Instagram sin descanso.",
      icon: <Zap className="w-10 h-10" />
    },
    { 
      title: "3. Escala de facturación", 
      desc: "Con la agenda llena y la atención automatizada, tu única preocupación será operar y ver cómo crecen tus ingresos.",
      icon: <TrendingUp className="w-10 h-10" />
    },
  ];

  return (
    <section id="beneficios" className="py-20 md:py-32 px-4 md:px-6 overflow-hidden relative bg-transparent">
      <div className="potion-container">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="potion-badge">SECCIÓN B: La Solución</div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tighter mb-6 md:mb-8 leading-[1.1] md:leading-[0.9]">
            El Método Inyecta: <br className="hidden md:block" /> <span className="text-blue-600">Tu clínica en piloto automático</span>
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
              className="potion-card p-12 md:p-16 flex flex-col items-center text-center bg-white md:bg-white/80 md:backdrop-blur-md border-slate-100 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group"
            >
              <div className="w-28 h-28 bg-blue-600 text-white rounded-[3rem] flex items-center justify-center mb-12 shadow-2xl shadow-blue-600/40 rotate-3 group-hover:rotate-0 transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl md:text-4xl font-extrabold text-black mb-6 tracking-tighter leading-none">{item.title}</h3>
              <p className="text-lg text-slate-500 font-bold tracking-tight leading-tight">{item.desc}</p>
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
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-extrabold tracking-tighter text-black mb-8 md:mb-10 leading-[0.95] md:leading-[0.85]">
              Deja de ser el administrativo de tu clínica y <span className="potion-text-gradient">vuelve a ser el dueño</span>
            </h2>
            
            <p className="text-lg md:text-2xl text-slate-500 mb-12 md:mb-16 max-w-3xl mx-auto leading-tight tracking-tight px-4 font-medium">
              Reserva tu Auditoría Gratuita de Automatización y te mostraremos exactamente cómo llenar tu agenda sin tocar el teléfono.
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
                Agendar Auditoría Gratuita
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

const ResultsSection = () => {
  const results = [
    { title: "Atención en <10 segundos", desc: "Tus pacientes nunca más esperarán. Respuestas instantáneas que cierran citas al momento." },
    { title: "Agenda organizada", desc: "Sincronización perfecta. Olvídate de los huecos vacíos y los solapamientos de citas." },
    { title: "Crecimiento automático", desc: "Un sistema que trabaja 24/7 captando y fidelizando pacientes mientras tú te enfocas en operar." }
  ];

  return (
    <section className="py-24 md:py-40 px-4 md:px-6 bg-black text-white relative overflow-hidden">
      <div className="potion-container relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="potion-badge bg-blue-600 text-white border-blue-500 mb-6">SECCIÓN D: Resultados y Confianza</div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 leading-[1] md:leading-[0.85]">
            Lo que puedes esperar
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {results.map((r, i) => (
            <div key={i} className="p-10 rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-extrabold mb-4 tracking-tighter">{r.title}</h3>
              <p className="text-slate-400 font-bold tracking-tight leading-tight">{r.desc}</p>
            </div>
          ))}
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
        <PricingSection />
        <ResultsSection />
        <Testimonials />
        <FAQSection />
        <FinalCTA />
      </div>
      
      <StickyCTA />
      <ClinicChatWidget />
    </div>
  );
};
