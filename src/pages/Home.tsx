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
import Testimonials from "../components/ui/testimonial-v2";
import { Pricing } from "../components/blocks/pricing";
import { CALENDAR_LINK } from '../constants';
import { ClinicChatWidget } from '../components/ui/ClinicChatWidget';
import { SEO } from '../components/SEO';

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
  const [dismissed, setDismissed] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!dismissed) {
        setVisible(window.scrollY > 600);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[100] md:hidden"
        >
          <div className="bg-white/95 backdrop-blur-xl border-t border-slate-100 px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-[0_-10px_40px_rgba(0,0,0,0.08)] flex items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-0.5">Agenda Llena 24/7</p>
              <p className="text-sm font-extrabold text-black tracking-tight truncate">Deja de perder pacientes ahora</p>
            </div>
            <div className="flex items-center gap-3">
              <a 
                href={CALENDAR_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-600 text-white px-4 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-blue-600/20 active:scale-95 whitespace-nowrap"
              >
                Ver Auditoría
              </a>
              <button 
                onClick={() => setDismissed(true)}
                className="p-1.5 text-slate-400 hover:text-black transition-colors"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center pt-28 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-transparent">
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
          className="potion-badge mb-8"
        >
          <Sparkles className="w-3 h-3 mr-2 inline" />
          Resultados Reales en 15 Días
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-black mb-6 md:mb-10 leading-[1.1] md:leading-[1] max-w-5xl tracking-tighter"
        >
          Inyectamos pacientes en tu agenda <span className="potion-text-gradient">automatizando las ventas</span> de tu clínica
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-slate-500 max-w-3xl mx-auto mb-8 md:mb-16 leading-snug md:leading-tight tracking-tight px-4 font-medium"
        >
          Automatizamos tu agenda, cualificamos a tus leads y escalamos tu facturación sin que muevas un dedo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 md:mb-24 w-full max-w-md md:max-w-2xl"
        >
          <a href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer" className="potion-button-primary w-full sm:w-auto px-12 md:px-16 py-6 md:py-8 text-xl md:text-2xl shadow-2xl shadow-blue-600/30">
            Reservar mi Auditoría
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
        className="absolute top-[12%] md:top-[16%] left-[2%] md:left-[12%] p-3 sm:p-5 potion-glass rounded-2xl sm:rounded-3xl rotate-[-12deg] z-0 opacity-60 md:opacity-70 transition-all scale-[0.6] sm:scale-90 xl:scale-100 shadow-xl pointer-events-none"
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
        className="absolute bottom-[2%] md:bottom-[5%] right-[2%] md:right-[8%] p-2 sm:p-6 potion-glass rounded-2xl sm:rounded-3xl rotate-[8deg] z-0 opacity-80 sm:opacity-40 xl:opacity-100 transition-all scale-[0.55] sm:scale-90 xl:scale-100 pointer-events-none"
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
    { label: "Clínicas Optimizadas", value: "+100" },
    { label: "Citas Cerradas por IA", value: "+50.000" },
    { label: "ROI Promedio", value: "12x" },
    { label: "Rentabilidad de Cabina", value: "+35%" },
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
      name: "Pack Agenda Imparable",
      price: "300",
      features: [
        "IA básica de agendamiento.",
        "Instalación en 48h.",
        "Se paga con tu primer paciente.",
      ],
      description: "Detén la pérdida de dinero por mensajes no contestados.",
      result: "Retorno de inversión inmediato.",
      buttonText: "Reservar mi Auditoría",
      href: CALENDAR_LINK,
      isPopular: false,
      icon: <Clock className="w-10 h-10" />
    },
    {
      name: "Clínica en Piloto Automático",
      price: "700",
      features: [
        "Todo el Plan 1 + Filtro de pacientes por tratamiento.",
        "Recordatorios automáticos para que no te fallen.",
        "Libera 10 horas semanales de gestión.",
      ],
      description: "Nuestra IA califica a los pacientes y asegura tu camilla.",
      result: "Llenamos tus huecos vacíos sin esfuerzo.",
      buttonText: "Reservar mi Auditoría",
      href: CALENDAR_LINK,
      isPopular: true,
      icon: <TrendingUp className="w-10 h-10" />
    },
    {
      name: "Dominio Estético Total",
      price: "1500",
      features: [
        "IA avanzada con tus protocolos médicos.",
        "Escala total de citas.",
        "Soporte prioritario.",
      ],
      description: "IA personalizada para dominar el mercado local.",
      result: "Lidera tu ciudad y escala facturación.",
      buttonText: "Reservar mi Auditoría",
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
    { title: "Pérdida de Pacientes", desc: "Cada minuto que un lead espera en WhatsApp, es un paciente que se va a la competencia." },
    { title: "Saturación de Equipo", desc: "Tu equipo no puede estar en cabina y atendiendo el móvil a la vez." },
    { title: "Falta de Foco", desc: "Inyecta Group automatiza tu **Agenda** para que tú solo te preocupes de pinchar." }
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
            El Cáncer de tu Rentabilidad
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-black mb-8 leading-[1.1] md:leading-[1]"
          >
            ¿Cuántos miles de euros estás dejando sobre la mesa por culpa de una <span className="text-red-600">bandeja de entrada saturada</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 font-bold tracking-tight"
          >
            Un paciente de medicina estética no espera. Si no respondes en segundos, estás quemando dinero en publicidad para regalárselo a la clínica de al lado.
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
      title: "Auditoría de Fugas de Venta", 
      desc: "Identificamos exactamente dónde estás perdiendo dinero en tu proceso de atención actual.",
      icon: <Target className="w-10 h-10" />
    },
    { 
      title: "Sistema de Captación Predecible 24/7", 
      desc: "Un agente digital cualificado que nunca duerme, atiende DMs y agenda citas mientras tú operas.",
      icon: <Zap className="w-10 h-10" />
    },
    { 
      title: "Filtro de Cualificación Premium", 
      desc: "Cribamos a los curiosos para que solo los pacientes con alto potencial de compra lleguen a tu calendario.",
      icon: <TrendingUp className="w-10 h-10" />
    },
  ];

  return (
    <section id="beneficios" className="py-20 md:py-32 px-4 md:px-6 overflow-hidden relative bg-transparent">
      <div className="potion-container">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="potion-badge">El Método Inyecta</div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6 md:mb-8 leading-[1.1] md:leading-[1]">
            Tu clínica en <br className="hidden md:block" /> <span className="text-blue-600">3 Pasos</span>
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
              Deja de quemar dinero y recupera el control de tu rentabilidad
            </h2>
            
            <p className="text-lg md:text-2xl text-slate-500 mb-12 md:mb-16 max-w-3xl mx-auto leading-tight tracking-tight px-4 font-medium">
              No necesitas más leads, necesitas que los que ya tienes lleguen a tu camilla.
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
                Reservar mi Auditoría
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
    { title: "15 Citas en un fin de semana", desc: "Caso Valencia: Activamos el sistema un viernes y el lunes tenían la agenda completa." },
    { title: "+40% Citas Confirmadas", desc: "Caso Madrid: Pasaron de perder leads por saturación a cerrar tratamientos en piloto automático." },
    { title: "ROI 10x en el primer mes", desc: "Caso Barcelona: El sistema se pagó solo en las primeras 48 horas de implementación." }
  ];

  return (
    <section className="py-24 md:py-40 px-4 md:px-6 bg-black text-white relative overflow-hidden">
      <div className="potion-container relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="potion-badge bg-blue-600 text-white border-blue-500 mb-6">Resultados</div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 leading-[1] md:leading-[0.85]">
            Especialistas en clínicas estéticas. Recuperamos el 40% de los leads que hoy estás perdiendo por falta de respuesta.
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

const ComparisonSection = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-white overflow-hidden relative">
      <div className="potion-container">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="potion-badge">Transformación Radical</div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6 md:mb-8 leading-[1.1] md:leading-[1]">
            Antes vs Después
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Antes */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-16 rounded-[3rem] border border-red-100 bg-red-50/30 flex flex-col items-center text-center"
          >
            <h3 className="text-2xl md:text-4xl font-extrabold text-red-600 mb-8 tracking-tighter uppercase">EL CAOS ACTUAL</h3>
            <ul className="space-y-6">
              {['DMs colapsados', 'Respuestas tardías', 'Pacientes perdidos'].map((item, i) => (
                <li key={i} className="flex items-center justify-center gap-3 text-lg md:text-xl text-red-700 font-bold tracking-tight">
                  <X className="w-6 h-6 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Después */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-16 rounded-[3rem] border border-green-100 bg-green-50/30 flex flex-col items-center text-center"
          >
            <h3 className="text-2xl md:text-4xl font-extrabold text-green-600 mb-8 tracking-tighter uppercase">EL EFECTO INYECTA</h3>
            <ul className="space-y-6">
              {['Agenda llena', 'Respuestas instantáneas', 'Facturación garantizada'].map((item, i) => (
                <li key={i} className="flex items-center justify-center gap-3 text-lg md:text-xl text-green-700 font-bold tracking-tight">
                  <Check className="w-6 h-6 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <div className="bg-white">
      <SEO 
        title="Marketing para Clínicas Estéticas | Captación de Pacientes con IA"
        description="Inyectamos pacientes en tu agenda automatizando las ventas de tu clínica estética. Especialistas en marketing médico, IA y captación predecible 24/7."
      />
      <Hero />
      <StatsBar />
      
      <div className="relative">
        <ProblemSection />
        <SolutionSection />
        <ComparisonSection />
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
