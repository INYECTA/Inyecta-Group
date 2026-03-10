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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-screen flex flex-col items-center justify-center">
      <div className="potion-container px-6 text-center flex flex-col items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col items-center mb-12 md:mb-16"
        >
          <div className="potion-badge">
            <Zap className="w-4 h-4 mr-2" />
            IA & Automatización de Negocios
          </div>
          <h1 className="text-4xl md:text-7xl leading-[1.1] mb-8 font-bold tracking-tighter max-w-4xl">
            Cómo <span className="potion-highlight">Escalar</span> tu Clínica con <span className="potion-highlight">IA</span> sin agencias tradicionales
          </h1>
          <p className="text-lg md:text-2xl text-potion-muted leading-relaxed mb-10 max-w-2xl">
            Elimina el trabajo manual y genera leads calificados en piloto automático usando <span className="potion-highlight font-bold">Sistemas de IA Propios</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center gap-8 w-full max-w-md mx-auto"
        >
          <a href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer" className="potion-button-primary w-full py-6 text-xl md:text-2xl shadow-2xl shadow-blue-600/30">
            Reservar mi Auditoría Gratis
          </a>
          <p className="text-xs md:text-sm text-potion-muted font-bold uppercase tracking-widest flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-green-500" />
            Solo 3 plazas disponibles este mes
          </p>
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
  const problems = [
    {
      icon: <CalendarOff className="w-8 h-8" />,
      title: "Agendas con huecos vacíos",
      desc: "Cada hora sin paciente es dinero que nunca vuelve. La incertidumbre de no saber si mañana estará lleno es el mayor freno de tu crecimiento."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Esclavo de las tareas manuales",
      desc: "Pasas más tiempo respondiendo WhatsApps y confirmando citas que tratando a tus pacientes. Tu tiempo vale demasiado para perderlo en gestión básica."
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Leads que se enfrían y mueren",
      desc: "Si no respondes en menos de 5 minutos, el potencial cliente se va a la competencia. Sin IA, es imposible estar disponible 24/7."
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: "Dependencia de referidos",
      desc: "El 'boca a boca' es excelente, pero no es escalable ni predecible. Si no tienes un sistema de captación constante, tu negocio está en riesgo."
    }
  ];

  return (
    <section className="py-20 md:py-32 px-6 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-grid pointer-events-none"></div>
      <div className="potion-container relative z-10">
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-8">
              El coste de la inacción
            </div>
            <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
              Tu negocio está perdiendo <span className="text-red-500">dinero y tiempo</span> cada día que pasa sin un sistema inteligente.
            </h2>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
              La mayoría de las clínicas pierden hasta un <span className="text-red-500 font-bold">30% de sus ingresos potenciales</span> por falta de seguimiento inmediato y procesos manuales ineficientes. El mercado ha cambiado, y la suerte ya no es una estrategia.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-red-500 mb-6">{p.icon}</div>
              <h3 className="text-xl font-bold mb-4">{p.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-r from-blue-600 to-indigo-600 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">¿Te sientes identificado?</h3>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            No es tu culpa. Nadie te enseñó a ser ingeniero de IA, te enseñaron a ser el mejor en tu especialidad. Nosotros nos encargamos de la tecnología para que tú te encargues de lo que amas.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="#servicios" className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all active:scale-95 w-full md:w-auto">
              Ver la Solución Perfecta
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="servicios" className="py-32 px-6">
      <div className="potion-container">
        <div className="text-center mb-24">
          <div className="potion-badge">Lo que hacemos</div>
          <h2 className="potion-h2">Soluciones diseñadas para escalar</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-lg text-slate-500 leading-relaxed mb-8">{s.desc}</p>
              <Link to={`/servicios/${s.id}`} className="inline-flex items-center gap-2 font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                Ver detalles <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const features = [
    {
      step: 'Paso 1',
      title: 'Captación Automática',
      content: 'Atraemos pacientes de alto valor mediante segmentación ultra-precisa con IA, asegurando que cada lead tenga el perfil ideal para tu clínica.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop'
    },
    {
      step: 'Paso 2',
      title: 'Atención 24/7',
      content: 'Nuestros asistentes inteligentes responden al instante, califican a los interesados y agendan citas directamente en tu calendario, sin errores humanos.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop'
    },
    {
      step: 'Paso 3',
      title: 'Escalamiento Predecible',
      content: 'Eliminamos el 90% de las tareas manuales, permitiéndote centrarte en tus pacientes mientras tu facturación crece de forma medible y constante.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  return (
    <section id="beneficios" className="py-32 px-6 bg-slate-50/50">
      <FeatureSteps 
        features={features}
        title="Por qué elegir Inyecta Group"
        autoPlayInterval={5000}
        imageHeight="h-[500px]"
      />
    </section>
  );
};

const PricingSection = () => {
  const plans = [
    {
      name: "Básico",
      price: "300",
      yearlyPrice: "240",
      period: "por mes",
      features: [
        "Respuesta automática a interesados",
        "Automatización por palabras clave (ej: 'INFO')",
        "Gestión de preguntas frecuentes",
        "Seguimiento a pacientes que no reservan",
        "Reducción de mensajes repetitivos",
        "Evita saturación de WhatsApp/Instagram",
      ],
      description: "Menos tiempo respondiendo y más pacientes reservando.",
      buttonText: "Empezar Ahora",
      href: CALENDAR_LINK,
      isPopular: false,
    },
    {
      name: "Intermedio",
      price: "700",
      yearlyPrice: "560",
      period: "por mes",
      features: [
        "Asistente automático humanoide",
        "Guía completa hasta reserva de cita",
        "Integración directa con calendario",
        "Recordatorios automáticos (1, 3, 7 días)",
        "Sugerencia de tratamientos relacionados",
        "Upselling inteligente de servicios",
      ],
      description: "Más reservas y más tratamientos por paciente.",
      buttonText: "Plan Recomendado",
      href: CALENDAR_LINK,
      isPopular: true,
    },
    {
      name: "Premium",
      price: "1500",
      yearlyPrice: "1200",
      period: "por mes",
      features: [
        "Todo lo incluido en el Plan Intermedio",
        "Seguimiento post-cita personalizado",
        "Recordatorios según tratamiento (4-6 meses)",
        "Encuestas de satisfacción automáticas",
        "Chatbot avanzado con lenguaje natural",
        "Guía completa en PDF del sistema",
      ],
      description: "Fidelización total y asistente virtual 24/7.",
      buttonText: "Contactar Ventas",
      href: CALENDAR_LINK,
      isPopular: false,
    },
  ];

  return (
    <section id="precios" className="bg-slate-50/50 py-24">
      <div className="potion-container px-6 mb-12 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
          Cupos Limitados
        </div>
        <p className="text-slate-500 font-medium">Solo aceptamos 2 nuevos clientes por mes para garantizar la máxima calidad en la implementación.</p>
      </div>
      <Pricing 
        plans={plans}
        title="Planes diseñados para tu éxito"
        description="Elige el sistema que mejor se adapte al volumen y necesidades de tu clínica."
      />
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      q: "¿Cuánto tiempo tarda en implementarse el sistema?",
      a: "Nuestra implementación estándar toma entre 10 y 15 días hábiles. Desde el día 1 empezamos a configurar tus flujos para que veas resultados lo antes posible."
    },
    {
      q: "¿Necesito conocimientos técnicos para usar la IA?",
      a: "Absolutamente ninguno. Nosotros nos encargamos de toda la parte técnica y te entregamos un sistema 'llave en mano'. Tú solo verás cómo se llena tu agenda."
    },
    {
      q: "¿Se integra con mi software de gestión actual?",
      a: "Sí, nos integramos con la mayoría de CRMs y calendarios del mercado (Google Calendar, Calendly, etc.). Si usas un sistema propietario, podemos desarrollar una integración a medida."
    },
    {
      q: "¿Qué pasa si ya tengo una agencia de marketing?",
      a: "Perfecto. Nosotros no somos una agencia de marketing tradicional, somos socios tecnológicos. Podemos trabajar en conjunto con tu agencia para potenciar los leads que ellos ya generan."
    }
  ];

  return (
    <section className="py-32 px-6 bg-slate-50">
      <div className="potion-container">
        <div className="text-center mb-20">
          <div className="potion-badge">FAQ</div>
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

const MissionSection = () => {
  return (
    <section className="py-32 px-6 overflow-hidden relative">
      <div className="potion-container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="potion-badge">Nuestra Misión</div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
              Democratizando la <span className="potion-highlight">Alta Tecnología</span> para negocios locales.
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed mb-8">
              En Inyecta Group, creemos que la Inteligencia Artificial no debería ser un privilegio exclusivo de las grandes corporaciones de Silicon Valley. 
            </p>
            <p className="text-xl text-slate-500 leading-relaxed">
              Nuestra misión es poner el poder de la automatización avanzada en manos de dueños de clínicas y negocios locales, permitiéndoles competir al más alto nivel y recuperar su activo más valioso: <strong>su tiempo</strong>.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex items-center justify-center p-12 text-white text-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
              <div className="relative z-10">
                <Sparkles className="w-16 h-16 text-blue-400 mb-6 mx-auto" />
                <p className="text-2xl font-medium italic">"La tecnología es solo una herramienta. El éxito es lo que tú haces con el tiempo que ella te devuelve."</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-32 bg-white overflow-hidden">
      <div className="potion-container px-6 mb-20 text-center">
        <div className="potion-badge">Visualiza el futuro</div>
        <h2 className="potion-h2">Tu clínica, <span className="potion-highlight">reimaginada</span></h2>
        <p className="potion-p mx-auto">Desliza para ver cómo transformamos la identidad y los procesos de nuestros clientes.</p>
      </div>
      <VerticalImageStack />
    </section>
  );
};

const About = () => {
  const points = [
    "IA Aplicada",
    "Ventas Automatizadas",
    "Branding de Lujo",
    "Negocios Escalables",
    "Resultados Reales"
  ];

  return (
    <section id="sobre-nosotros" className="py-32 px-6 bg-slate-900 text-white">
      <div className="potion-container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="potion-badge border-white/20 text-white/60">Sobre Inyecta Group</div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-12 leading-[1.1]">
              No somos una agencia. Somos tu <span className="text-blue-400">Socio Tecnológico</span>.
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Inyecta Group nació con una visión clara: fusionar la elegancia del branding de lujo con la potencia bruta de la Inteligencia Artificial para crear negocios que no solo se vean bien, sino que funcionen como máquinas de precisión.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {points.map((p, i) => (
                <div key={i} className="px-8 py-4 bg-white/5 rounded-2xl border border-white/10 font-bold text-white/80">
                  {p}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import { Logo } from '../components/ui/Logo';

const FinalCTA = () => {
  return (
    <section className="py-32 px-6">
      <div className="potion-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-blue-600 rounded-[4rem] p-16 md:p-32 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-600/30"
        >
          <div className="relative z-10 flex flex-col items-center">
            <Logo variant="light" className="mb-8 scale-125" />
            <h2 className="potion-h2 text-white">
              Transforma tu clínica estética en una marca deseada.
            </h2>
            <a href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-blue-600 px-12 py-6 rounded-full font-bold text-2xl hover:bg-blue-50 transition-all shadow-xl active:scale-95">
              Agenda tu Auditoría Gratuita
            </a>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </motion.div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <>
      <Hero />
      <ProblemSection />
      <MissionSection />
      <PortfolioSection />
      <Services />
      <Benefits />
      <PricingSection />
      <Testimonials />
      <FAQSection />
      <About />
      <FinalCTA />
      <StickyCTA />
    </>
  );
};
