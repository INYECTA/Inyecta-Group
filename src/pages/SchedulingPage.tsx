import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { CALENDAR_LINK } from '../constants';

export const SchedulingPage = () => {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <SEO 
        title="Agendar Llamada | Inyecta Group"
        description="Reserva tu llamada de diagnóstico gratuita con Inyecta Group. Análisis personalizado para la automatización de tu clínica estética."
      />
      
      <div className="potion-container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <div className="potion-badge mb-6">Agenda de Llamada</div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-black">
            Reserva tu <span className="text-blue-600">Sesión Estratégica</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium tracking-tight">
            Elige el día y la hora que mejor te convenga para hablar sobre cómo podemos automatizar la agenda de tu clínica.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-5xl mx-auto bg-white rounded-[2rem] border border-slate-100 shadow-2xl overflow-hidden min-h-[700px] mb-12"
        >
          <iframe
            src={CALENDAR_LINK}
            width="100%"
            height="700px"
            frameBorder="0"
            title="Calendario de Citas"
            className="w-full h-full"
            referrerPolicy="no-referrer"
          ></iframe>
        </motion.div>

        <div className="text-center">
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">
            ¿Tienes problemas con el calendario? Escríbenos a inyectasoporte@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};
