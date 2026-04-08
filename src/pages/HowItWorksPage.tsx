import React from 'react';
import { FeatureSteps } from '../components/ui/feature-section';
import { SEO } from '../components/SEO';

export const HowItWorksPage = () => {
  const steps = [
    {
      step: '1',
      title: 'Auditoría de tu Clínica',
      content: 'Miramos qué está fallando en tu clínica y por qué se te escapan los pacientes. Sin palabras raras, solo la verdad.',
      image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=1000&auto=format&fit=crop'
    },
    {
      step: '2',
      title: 'Instalamos la IA',
      content: 'Ponemos a trabajar a tu nueva secretaria virtual. Ella se encarga de responder y dar citas mientras tú atiendes a tus pacientes.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop'
    },
    {
      step: '3',
      title: 'Agenda Llena',
      content: 'Tu teléfono deja de sonar con dudas pesadas y empieza a llenarse de citas confirmadas. Así de fácil.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <SEO 
        title="Cómo Funciona | Automatización de Clínicas en 3 Pasos"
        description="Descubre nuestro método de 3 pasos para automatizar tu clínica: Auditoría, Instalación de IA y Agenda Llena. Sin complicaciones técnicas para ti."
      />
      <section id="como-funciona" className="py-16 px-6 bg-slate-50/50 rounded-[4rem] mx-6">
        <FeatureSteps 
          features={steps}
          title="Cómo automatizamos tu clínica"
          autoPlayInterval={5000}
          imageHeight="h-[600px]"
        />
      </section>
      
      <section className="py-20 px-6">
        <div className="potion-container text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tighter">Un sistema que trabaja mientras tú operas</h2>
          <p className="text-lg text-slate-600 leading-tight tracking-tight mb-12">
            Tú te encargas de tus pacientes, nosotros de que la agenda esté siempre llena. Instalamos todo por ti, sin que tengas que tocar una sola línea de código.
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
