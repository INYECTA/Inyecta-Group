import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowLeft, ChevronRight } from 'lucide-react';
import { SERVICES } from '../servicesData';
import { CALENDAR_LINK } from '../constants';

export const ServicePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = SERVICES.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!service) {
      navigate('/');
    }
  }, [service, navigate]);

  if (!service) return null;

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-potion-muted hover:text-potion-text transition-colors mb-12 font-bold">
          <ArrowLeft className="w-5 h-5" /> Volver al inicio
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="potion-badge mb-6">{service.title}</div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              {service.title} para <span className="potion-highlight">Clínicas Premium</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-12">
              {service.desc} Implementamos soluciones de vanguardia diseñadas específicamente para el sector estético y de salud de alto nivel.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer" className="potion-button-primary px-10 py-5 text-xl">
                Agendar Auditoría Gratis
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-600/20 border border-white/60">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
              <p className="text-blue-600 font-bold text-3xl mb-1">+100%</p>
              <p className="text-slate-500 font-medium">Eficiencia operativa promedio tras la implementación.</p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-32">
          <div className="p-12 rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-sm">
            <h2 className="text-3xl font-bold mb-8">¿Qué incluye este servicio?</h2>
            <ul className="space-y-6">
              {service.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-lg text-slate-600 font-medium">{detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-12 rounded-[2.5rem] bg-blue-600 text-white shadow-xl shadow-blue-600/20">
            <h2 className="text-3xl font-bold mb-8">Beneficios Directos</h2>
            <ul className="space-y-6">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-lg font-bold">{benefit}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12">Explora otros servicios</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {SERVICES.filter(s => s.id !== id).slice(0, 3).map((s, i) => (
              <Link 
                key={i} 
                to={`/servicios/${s.id}`}
                className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all text-left group"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {s.icon}
                </div>
                <h3 className="font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm line-clamp-2 mb-4">{s.desc}</p>
                <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                  Saber más <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
