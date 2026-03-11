import React from 'react';
import { motion } from 'framer-motion';
import { Logo } from '../components/ui/Logo';

export const AboutPage = () => {
  const points = [
    "IA Aplicada",
    "Ventas Automatizadas",
    "Branding de Lujo",
    "Negocios Escalables",
    "Resultados Reales"
  ];

  return (
    <div className="pt-24 pb-16">
      <section id="sobre-nosotros" className="py-16 px-6 bg-slate-900 text-white rounded-[4rem] mx-6 shadow-2xl">
        <div className="potion-container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="potion-badge border-white/20 text-white/60 mb-8">Sobre Inyecta Group</div>
              <Logo variant="light" className="mb-12 scale-150 mx-auto" />
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-12 leading-[1.1]">
                No somos una agencia. Somos tu <span className="text-blue-400">Socio Tecnológico</span>.
              </h2>
              <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
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

      <section className="py-20 px-6">
        <div className="potion-container">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h3 className="text-4xl font-bold text-slate-900">Nuestra Filosofía</h3>
              <p className="text-xl text-slate-600 leading-relaxed">
                Creemos que la tecnología debe estar al servicio de la experiencia humana. En el sector estético, donde el detalle y la confianza lo son todo, nuestras automatizaciones permiten que los profesionales se enfoquen en lo que mejor saben hacer: cuidar de sus pacientes.
              </p>
              <p className="text-xl text-slate-600 leading-relaxed">
                Eliminamos la fricción en el proceso de reserva, optimizamos la comunicación y garantizamos que ningún paciente se sienta desatendido, todo bajo una identidad visual que respira exclusividad.
              </p>
            </div>
            <div className="aspect-square bg-slate-100 rounded-[3rem] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600880210837-0f8fb27472da?q=80&w=1000&auto=format&fit=crop" 
                alt="Filosofía Inyecta Group" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
