import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ChevronRight } from 'lucide-react';
import { SUPPORT_EMAIL, CALENDAR_LINK } from '../constants';
import { SEO } from '../components/SEO';

export const ContactPage = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <SEO 
        title="Contacto | Inyecta Group"
        description="¿Listo para escalar tu clínica estética? Contacta con nosotros para una auditoría gratuita de captación de pacientes y automatización con IA."
      />
      <div className="potion-container px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column: Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="potion-badge mb-8">Contacto</div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9] text-black">
                Escalemos tu <span className="text-blue-600">Clínica Estética</span>.
              </h1>
              <p className="text-lg text-slate-500 mb-12 leading-tight tracking-tight max-w-lg">
                ¿Listo para dejar de preocuparte por la captación y empezar a recibir pacientes de forma constante? Hablemos.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Email</p>
                    <a href={`mailto:${SUPPORT_EMAIL}`} className="text-xl font-bold text-black hover:text-blue-600 transition-colors">{SUPPORT_EMAIL}</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Teléfono</p>
                    <p className="text-xl font-bold text-black">+34 600 000 000</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Ubicación</p>
                    <p className="text-xl font-bold text-black">Madrid, España</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100">
                <h3 className="text-2xl font-black text-blue-900 mb-4 tracking-tight">¿Prefieres una auditoría directa?</h3>
                <p className="text-blue-700/80 font-bold mb-8 leading-tight">Analizamos tu clínica gratis y te damos un plan de acción en 30 minutos.</p>
                <a 
                  href={CALENDAR_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95"
                >
                  Agendar Auditoría
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-50 p-10 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/50"
            >
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Nombre Completo</label>
                    <input 
                      type="text" 
                      placeholder="Tu nombre..."
                      className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 font-bold text-black focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Email Profesional</label>
                    <input 
                      type="email" 
                      placeholder="tu@clinica.com"
                      className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 font-bold text-black focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Nombre de la Clínica</label>
                  <input 
                    type="text" 
                    placeholder="Tu clínica dental, estética..."
                    className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 font-bold text-black focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Mensaje</label>
                  <textarea 
                    rows={4}
                    placeholder="Cuéntanos qué necesitas..."
                    className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 font-bold text-black focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-black text-white py-6 rounded-2xl font-black text-xl hover:bg-blue-600 transition-all duration-500 shadow-xl shadow-black/10 flex items-center justify-center gap-3 group active:scale-95"
                >
                  Enviar Mensaje
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

                <p className="text-center text-xs text-slate-400 font-bold">
                  Al enviar este formulario, aceptas nuestra Política de Privacidad.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
