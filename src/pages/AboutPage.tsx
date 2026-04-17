import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Logo } from '../components/ui/Logo';
import { CheckCircle2, MessageSquare, Calendar, Zap, ArrowRight, UserCheck } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SCHEDULE_PATH } from '../constants';

export const AboutPage = () => {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen font-sans">
      <SEO 
        title="Quiénes Somos | Inyecta Group"
        description="Conoce la historia de Inyecta Group. Especialistas en automatización de Instagram para clínicas estéticas en España. Ayudamos a doctoras a llenar su agenda sin perder tiempo en mensajes."
      />

      {/* Hero Section - The Hook */}
      <section className="relative pt-20 pb-16 px-6 overflow-hidden">
        <div className="potion-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="potion-badge mb-8 mx-auto invisible sm:visible">ESPECIALISTAS EN EL SECTOR ESTÉTICO</div>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-[0.9] text-black">
              No somos una agencia de marketing más. <br />
              <span className="text-blue-600">Automatizamos tu éxito.</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-500 mb-12 leading-tight tracking-tight max-w-2xl mx-auto">
              Inyecta Group nació con una misión clara: que ninguna clínica estética en España vuelva a perder a un paciente por no responder a tiempo un mensaje de Instagram.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section - Pablo's Journey */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="potion-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-8 text-black leading-none">
                Por qué creé Inyecta Group
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                <p>
                  Soy <strong>Pablo Llopis</strong>, y fundé Inyecta Group en Valencia tras observar un problema recurrente en el sector médico-estético. 
                </p>
                <p>
                  Hablaba con doctoras y dueñas de clínicas que invertían miles de euros en publicidad, pero sus equipos estaban desbordados respondiendo "¿precio?", "¿dónde estáis?" o "¿tenéis hueco?" por mensaje directo.
                </p>
                <p>
                  El resultado siempre era el mismo: pacientes que se enfriaban, agenda con huecos libres y una sensación constante de estar perdiendo dinero a pesar de trabajar 12 horas al día.
                </p>
                <p>
                  <strong>Ahí decidí cambiar las reglas.</strong> En lugar de ofrecer "likes" o diseños bonitos, decidí especializarme en lo que realmente importa: instalar sistemas que responden, cualifican y agendan citas en automático mientras la doctora está en consulta.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl bg-slate-200"
            >
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop" 
                alt="Pablo Llopis - Fundador de Inyecta Group" 
                className="w-full h-full object-cover transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl">
                <p className="text-black font-extrabold text-xl tracking-tight leading-none mb-1">Pablo Llopis</p>
                <p className="text-blue-600 font-bold text-sm uppercase tracking-widest">CEO y Fundador de Inyecta Group</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Specialization */}
      <section className="py-24 md:py-32 px-6">
        <div className="potion-container">
          <div className="grid md:grid-cols-2 gap-20">
            <div className="space-y-8">
              <div className="flex items-center gap-3 text-blue-600">
                <Zap className="w-8 h-8 fill-current" />
                <h3 className="text-2xl font-black uppercase tracking-widest">Nuestra Misión</h3>
              </div>
              <p className="text-3xl md:text-4xl font-extrabold text-black tracking-tighter leading-tight">
                Devolverte el tiempo y el control de tu clínica mediante tecnología que trabaja para ti, no al revés.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-3 text-blue-600">
                <UserCheck className="w-8 h-8" />
                <h3 className="text-2xl font-black uppercase tracking-widest">Por qué solo clínicas</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                No hacemos marketing para restaurantes, inmobiliarias ni gimnasios. <strong>Solo trabajamos con clínicas estéticas.</strong> 
                Esta obsesión por un solo nicho nos permite conocer exactamente qué objeciones tiene tu paciente, qué tratamientos son los más rentables y cómo configurar un chatbot que suene humano, profesional y convincente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work - 3 Steps */}
      <section className="py-24 md:py-32 px-6 bg-black text-white rounded-[3.5rem] mx-6">
        <div className="potion-container">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 leading-none">Cómo trabajamos</h2>
            <p className="text-slate-400 text-xl font-medium tracking-tight">Simple, directo y sin complicaciones técnicas para ti.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Estrategia de Respuesta",
                desc: "Analizamos tus tratamientos estrella y diseñamos el flujo de conversación que mejor convierte."
              },
              {
                step: "02",
                icon: <Zap className="w-8 h-8" />,
                title: "Instalación Técnica",
                desc: "Configuramos tu Instagram para que responda 24/7 de forma inteligente y humana."
              },
              {
                step: "03",
                icon: <Calendar className="w-8 h-8" />,
                title: "Agenda Automatizada",
                desc: "Recibes las notificaciones de citas confirmadas directamente. Nosotros nos encargamos de los leads."
              }
            ].map((item, i) => (
              <div key={i} className="space-y-6 group">
                <div className="text-5xl font-black text-white/20 group-hover:text-blue-500 transition-colors">{item.step}</div>
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400 border border-white/10 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-extrabold tracking-tight">{item.title}</h4>
                <p className="text-slate-400 leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof/Stats */}
      <section className="py-24 md:py-32 px-6">
        <div className="potion-container">
          <div className="bg-blue-600 rounded-[2.5rem] p-12 md:p-20 text-white shadow-2xl shadow-blue-600/20">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-5xl md:text-7xl font-black tracking-tighter mb-2">+45</div>
                <div className="text-blue-100 font-bold uppercase tracking-widest text-sm">Clínicas en España</div>
              </div>
              <div>
                <div className="text-5xl md:text-7xl font-black tracking-tighter mb-2">12.000+</div>
                <div className="text-blue-100 font-bold uppercase tracking-widest text-sm">Mensajes Automatizados</div>
              </div>
              <div>
                <div className="text-5xl md:text-7xl font-black tracking-tighter mb-2">98%</div>
                <div className="text-blue-100 font-bold uppercase tracking-widest text-sm">Tasa de Respuesta</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 px-6">
        <div className="potion-container text-center">
          <h2 className="text-4xl md:text-7xl font-extrabold text-black mb-10 tracking-tighter leading-none">
            ¿Hablamos de tu agenda?
          </h2>
          <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto tracking-tight font-medium">
            Si estás cansada de ver cómo los pacientes se van a la competencia por no responder a tiempo, es hora de que el sistema trabaje por ti.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to={SCHEDULE_PATH} 
              className="potion-button-primary px-12 py-8 text-xl group"
            >
              Reservar Llamada de Diagnóstico
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <p className="mt-8 text-slate-400 font-bold flex items-center justify-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            Sin compromiso. Solo soluciones reales.
          </p>
        </div>
      </section>
    </div>
  );
};
