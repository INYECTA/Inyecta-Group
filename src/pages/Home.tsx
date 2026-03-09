import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Target, 
  Sparkles, 
  TrendingUp, 
  Check, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import Testimonials from "../components/ui/testimonials";
import { Pricing } from "../components/blocks/pricing";
import { CALENDAR_LINK } from '../constants';
import { SERVICES } from '../servicesData';

const Hero = () => {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden min-h-screen flex flex-col items-center justify-center">
      <div className="potion-container px-6 text-center flex flex-col items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col items-center mb-16"
        >
          <div className="potion-badge">
            <Zap className="w-4 h-4 mr-2" />
            IA & Automatización de Negocios
          </div>
          <h1 className="potion-h1 max-w-4xl">
            Cómo <span className="potion-highlight">Escalar</span> tu Clínica o Negocio con <span className="potion-highlight">IA</span> sin depender de agencias tradicionales
          </h1>
          <p className="potion-p max-w-2xl">
            Estamos ayudando a dueños de negocios a <span className="potion-highlight">eliminar el trabajo manual</span> y generar leads calificados en piloto automático usando <span className="potion-highlight">Sistemas de IA Propios</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">¿Listo para transformar tu facturación?</h3>
            <p className="text-slate-500 font-medium">Haz clic en el botón de abajo para reservar tu sesión estratégica gratuita.</p>
          </div>
          <a href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer" className="potion-button-primary px-16 py-6 text-2xl shadow-2xl shadow-blue-600/30">
            Reservar mi Auditoría de IA Gratis
          </a>
          <p className="text-sm text-potion-muted font-bold uppercase tracking-widest flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-green-500" />
            Solo 3 plazas disponibles para nuevos clientes este mes
          </p>
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
  const benefits = [
    "Más clientes y pacientes de alto valor",
    "Negocio automatizado con IA avanzada",
    "Marca de autoridad en el mercado",
    "Sistemas de ventas que no duermen",
    "Resultados escalables y predecibles"
  ];

  return (
    <section id="beneficios" className="py-32 px-6 bg-blue-50/30">
      <div className="potion-container">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="potion-badge">Beneficios</div>
            <h2 className="potion-h2">Por qué elegir Inyecta Group</h2>
            <p className="potion-p">
              No somos una agencia de marketing más. Somos el socio tecnológico que tu clínica necesita para dar el siguiente paso.
            </p>
            <ul className="space-y-6">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-4 text-xl font-bold text-slate-900">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-600/20">
                    <Check className="w-5 h-5" />
                  </div>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-blue-600 to-blue-400 rounded-[4rem] flex items-center justify-center p-12 shadow-2xl shadow-blue-600/20">
              <div className="w-full h-full bg-white/10 backdrop-blur-md rounded-[3rem] border border-white/20 flex flex-col items-center justify-center text-white text-center p-12">
                <TrendingUp className="w-24 h-24 mb-8" />
                <p className="text-5xl font-bold mb-4">+150%</p>
                <p className="text-xl opacity-80">Incremento promedio en agendamientos automáticos</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
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
    <section id="precios" className="bg-slate-50/50">
      <Pricing 
        plans={plans}
        title="Planes diseñados para tu éxito"
        description="Elige el sistema que mejor se adapte al volumen y necesidades de tu clínica."
      />
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
    <section id="sobre-nosotros" className="py-32 px-6">
      <div className="potion-container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="potion-badge">Sobre Inyecta Group</div>
            <h2 className="potion-h2">
              Inyecta Group fusiona <span className="potion-highlight">Inteligencia Artificial</span>, automatización y marketing de alto nivel para transformar negocios y clínicas en <span className="potion-highlight">máquinas de facturación</span>.
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {points.map((p, i) => (
                <div key={i} className="px-8 py-4 bg-slate-50 rounded-2xl border border-slate-100 font-bold text-slate-700">
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
      <Services />
      <Benefits />
      <PricingSection />
      <Testimonials />
      <About />
      <FinalCTA />
    </>
  );
};
