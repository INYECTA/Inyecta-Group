"use client";
import React from "react";
import { TestimonialsColumn } from "./testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Inyecta Group transformó por completo nuestra gestión de citas. Ahora el 80% de las consultas de Instagram se agendan solas.",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Dra. Lucía Méndez",
    role: "Directora Médica, Clínica Estética",
  },
  {
    text: "La implementación fue sorprendentemente rápida. El equipo de soporte nos guió en todo momento y el bot es increíblemente natural.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop",
    name: "Carlos Ruiz",
    role: "Gerente de Operaciones",
  },
  {
    text: "Ya no perdemos leads los fines de semana. El sistema responde al instante y los pacientes están encantados con la rapidez.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Sofía Valdés",
    role: "Coordinadora de Pacientes",
  },
  {
    text: "Es la mejor inversión que hemos hecho este año. La integración con WhatsApp es perfecta y el retorno de inversión fue inmediato.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&h=150&fit=crop",
    name: "Dr. Javier López",
    role: "Propietario, Centro de Estética Avanzada",
  },
  {
    text: "Sus funciones robustas y el soporte rápido han transformado nuestro flujo de trabajo, haciéndonos significativamente más eficientes.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
    name: "Elena Martínez",
    role: "Clínica Dental Martínez",
  },
  {
    text: "La implementación superó las expectativas. Optimizó procesos, mejorando el rendimiento general del negocio.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
    name: "Dra. Aliza Khan",
    role: "Especialista en Medicina Estética",
  },
  {
    text: "Nuestras funciones comerciales mejoraron con un diseño fácil de usar y comentarios positivos de los clientes.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    name: "Farhan Siddiqui",
    role: "Director de Clínica",
  },
  {
    text: "Entregaron una solución que superó las expectativas, entendiendo nuestras necesidades y mejorando nuestras operaciones.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    name: "Sana Sheikh",
    role: "Gerente de Ventas",
  },
  {
    text: "Al usar este sistema, nuestra presencia en línea y las conversiones mejoraron significativamente, impulsando el rendimiento del negocio.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    name: "Hassan Ali",
    role: "Clínica Dermatológica Ali",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section id="testimonios" className="bg-transparent my-20 relative overflow-hidden">
      <div className="potion-container z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[640px] mx-auto text-center"
        >
          <div className="potion-badge">
            Testimonios
          </div>

          <h2 className="potion-h2 mt-5">
            Lo que dicen nuestras clínicas
          </h2>
          <p className="potion-p mt-5">
            Descubre cómo Inyecta Group está transformando el día a día de clínicas de alto nivel.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={30} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={28} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
