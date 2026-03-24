import React from 'react';
import { motion } from 'framer-motion';
import { Logo } from '../components/ui/Logo';
import { CheckCircle2, Users, Target, Zap, TrendingUp } from 'lucide-react';

export const AboutPage = () => {
  const points = [
    { icon: <Zap className="w-6 h-6" />, text: "IA Aplicada" },
    { icon: <TrendingUp className="w-6 h-6" />, text: "Ventas Automatizadas" },
    { icon: <Target className="w-6 h-6" />, text: "Branding de Lujo" },
    { icon: <Users className="w-6 h-6" />, text: "Negocios Escalables" },
    { icon: <CheckCircle2 className="w-6 h-6" />, text: "Resultados Reales" }
  ];

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      {/* Hero Section - Luxury Editorial Style */}
      <section id="sobre-nosotros" className="relative py-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 hidden lg:block" />
        <div className="potion-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="potion-badge mb-8">Sobre Inyecta Group</div>
              <Logo className="mb-12 scale-125 origin-left" />
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-[0.9] text-black">
                No somos una agencia. <br />
                Somos tu <span className="text-blue-600">Socio Tecnológico</span>.
              </h1>
              <p className="text-lg md:text-xl text-slate-500 mb-12 leading-tight tracking-tight">
                Inyecta Group nació con una visión clara: fusionar la elegancia del branding de lujo con la potencia bruta de la Inteligencia Artificial.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {points.map((p, i) => (
                  <div key={i} className="flex items-center gap-3 p-5 bg-slate-50 rounded-2xl border border-slate-100 font-bold text-black tracking-tight">
                    <span className="text-blue-600">{p.icon}</span>
                    {p.text}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-600/10 bg-slate-100"
            >
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop" 
                alt="Inyecta Group Professional" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Clean & Trustworthy */}
      <section className="py-24 md:py-32 px-6 bg-black text-white rounded-[3rem] mx-6 my-12 shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-grid pointer-events-none"></div>
        <div className="potion-container relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="aspect-square bg-white/5 rounded-3xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
                alt="Filosofía Inyecta Group" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-10">
              <div className="potion-badge border-white/20 bg-white/5 text-white">NUESTRA FILOSOFÍA</div>
              <h2 className="text-4xl md:text-6xl font-extrabold leading-[0.9] tracking-tighter">
                Tecnología al servicio de la <span className="text-blue-400">experiencia humana</span>.
              </h2>
              <div className="space-y-6 text-lg text-slate-400 leading-tight tracking-tight">
                <p>
                  En el sector estético, donde el detalle y la confianza lo son todo, nuestras automatizaciones permiten que los profesionales se enfoquen en lo que mejor saben hacer: cuidar de sus pacientes.
                </p>
              </div>
              
              <div className="pt-8 flex flex-col sm:flex-row gap-12">
                <div className="flex flex-col">
                  <span className="text-6xl font-extrabold text-white tracking-tighter">+100</span>
                  <span className="text-xs text-slate-500 uppercase tracking-[0.2em] font-extrabold">Clínicas Optimizadas</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-6xl font-extrabold text-white tracking-tighter">24/7</span>
                  <span className="text-xs text-slate-500 uppercase tracking-[0.2em] font-extrabold">Atención Automatizada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="potion-container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold text-black mb-6 tracking-tighter leading-[0.9]">Nuestros Valores</h2>
            <p className="text-lg text-slate-500 tracking-tight">Lo que nos impulsa a crear las mejores soluciones para el sector estético.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Exclusividad", desc: "Diseñamos para marcas que no aceptan lo genérico." },
              { title: "Precisión", desc: "Cada automatización es una pieza de ingeniería exacta." },
              { title: "Resultados", desc: "No vendemos software, vendemos crecimiento medible." }
            ].map((v, i) => (
              <div key={i} className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all group">
                <div className="w-12 h-12 bg-black rounded-2xl mb-6 flex items-center justify-center text-white font-extrabold text-xl">
                  0{i+1}
                </div>
                <h3 className="text-3xl font-extrabold text-black mb-4 tracking-tighter">{v.title}</h3>
                <p className="text-slate-500 leading-tight tracking-tight">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
