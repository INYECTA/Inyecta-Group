import React from 'react';
import { FeatureSteps } from '../components/ui/feature-section';

export const HowItWorksPage = () => {
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
    <div className="pt-24 pb-16">
      <section id="como-funciona" className="py-16 px-6 bg-slate-50/50 rounded-[4rem] mx-6">
        <FeatureSteps 
          features={steps}
          title="Cómo funciona nuestro sistema"
          autoPlayInterval={5000}
          imageHeight="h-[600px]"
        />
      </section>
      
      <section className="py-20 px-6">
        <div className="potion-container text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Un proceso diseñado para no interrumpir tu día a día</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-12">
            Sabemos que tu tiempo es valioso. Por eso, nos encargamos de toda la configuración técnica. Tú solo tienes que darnos acceso a las herramientas necesarias y nosotros haremos la magia.
          </p>
          <div className="grid sm:grid-cols-2 gap-8 text-left">
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">Sin código</h4>
              <p className="text-slate-500">No necesitas instalar nada complejo ni saber programar.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">Soporte continuo</h4>
              <p className="text-slate-500">Estamos contigo para ajustar el sistema según crezca tu clínica.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
