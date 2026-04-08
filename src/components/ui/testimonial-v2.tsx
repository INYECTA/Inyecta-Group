import React from 'react';
import { motion } from "framer-motion";
import { Check } from 'lucide-react';

// --- Types ---
interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

// --- Data (Adapted for Inyecta Group) ---
const testimonials: Testimonial[] = [
  {
    text: "Inyecta Group transformó por completo nuestra gestión de citas. Ahora el 80% de las consultas de Instagram se agendan solas.",
    image: "https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Dra. Lucía Méndez",
    role: "Directora Médica, Clínica Estética",
  },
  {
    text: "La implementación fue sorprendentemente rápida. El equipo de soporte nos guió en todo momento y el bot es increíblemente natural.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&h=150&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Dr. Javier López",
    role: "Propietario, Centro de Estética Avanzada",
  },
  {
    text: "Sus funciones robustas y el soporte rápido han transformado nuestro flujo de trabajo, haciéndonos significativamente más eficientes.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Elena Martínez",
    role: "Clínica Dental Martínez",
  },
  {
    text: "La implementación superó las expectativas. Optimizó procesos, mejorando el rendimiento general del negocio.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Dra. Aliza Khan",
    role: "Especialista en Medicina Estética",
  },
  {
    text: "Nuestras funciones comerciales mejoraron con un diseño fácil de usar y comentarios positivos de los clientes.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Farhan Siddiqui",
    role: "Director de Clínica",
  },
  {
    text: "Entregaron una solución que superó las expectativas, entendiendo nuestras necesidades y mejorando nuestras operaciones.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Sana Sheikh",
    role: "Gerente de Ventas",
  },
  {
    text: "Al usar este sistema, nuestra presencia en línea y las conversiones mejoraron significativamente, impulsando el rendimiento del negocio.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Hassan Ali",
    role: "Clínica Dermatológica Ali",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// --- Sub-Components ---
const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <motion.li 
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? "true" : "false"}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{ 
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  whileFocus={{ 
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  className="p-10 rounded-3xl border border-neutral-200 shadow-lg shadow-black/5 max-w-xs w-full bg-white transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-blue-600/30" 
                >
                  <blockquote className="m-0 p-0">
                    <p className="text-neutral-600 leading-relaxed font-medium m-0 transition-colors duration-300">
                      "{text}"
                    </p>
                    <footer className="flex items-center gap-3 mt-6">
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={`Avatar of ${name}`}
                        className="h-10 w-10 rounded-full object-cover ring-2 ring-neutral-100 group-hover:ring-blue-600/30 transition-all duration-300 ease-in-out"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex flex-col">
                        <cite className="font-bold not-italic tracking-tight leading-5 text-neutral-900 transition-colors duration-300">
                          {name}
                        </cite>
                        <span className="text-xs font-bold leading-5 tracking-widest text-blue-600 uppercase mt-0.5 transition-colors duration-300">
                          {role}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section 
      id="testimonios"
      aria-labelledby="testimonials-heading"
      className="bg-transparent py-24 relative overflow-hidden"
    >
      <div className="potion-container px-4 z-10 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.16, 1, 0.3, 1],
            opacity: { duration: 0.8 }
          }}
          className="flex flex-col items-center justify-center max-w-[640px] mx-auto mb-16"
        >
          <div className="potion-badge">
            Testimonios
          </div>

          <h2 id="testimonials-heading" className="potion-h2 mt-6 text-center">
            Lo que dicen nuestras clínicas
          </h2>
          <p className="potion-p text-center mt-5 max-w-sm">
            Descubre cómo Inyecta Group está transformando el día a día de clínicas de alto nivel.
          </p>
        </motion.div>

        <div 
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={30} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={28} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
