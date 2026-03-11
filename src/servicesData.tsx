import React from 'react';
import { Target, Sparkles, Zap, TrendingUp } from 'lucide-react';
import { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: "ia-captacion",
    title: "IA para Captación",
    desc: "Sistemas de Inteligencia Artificial que encuentran y califican a tus clientes ideales.",
    icon: <Target className="w-8 h-8" />,
    details: [
      "Identificación de patrones de comportamiento en clientes potenciales.",
      "Segmentación ultra-precisa basada en datos demográficos y psicográficos.",
      "Generación de anuncios dinámicos optimizados por IA.",
      "Calificación automática de leads antes de llegar a tu equipo de ventas."
    ],
    benefits: [
      "Reducción del 40% en el coste por adquisición.",
      "Leads con un 3x más de probabilidad de conversión.",
      "Escalabilidad inmediata sin aumentar el equipo humano."
    ],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "branding-lujo",
    title: "Branding de Alto Nivel",
    desc: "Posicionamos tu negocio como el referente indiscutible en tu sector.",
    icon: <Sparkles className="w-8 h-8" />,
    details: [
      "Diseño de identidad visual premium y coherente.",
      "Estrategia de comunicación basada en la exclusividad y el valor.",
      "Creación de contenido cinematográfico para redes sociales.",
      "Gestión de reputación online y autoridad de marca."
    ],
    benefits: [
      "Aumento del valor percibido de tus servicios.",
      "Atracción de clientes con mayor poder adquisitivo.",
      "Diferenciación total frente a la competencia local."
    ],
    image: "https://images.unsplash.com/photo-1600880210837-3219c7f116ec?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "automatizacion-ventas",
    title: "Automatización de Ventas",
    desc: "Bots inteligentes que cierran citas y ventas mientras tú descansas.",
    icon: <Zap className="w-8 h-8" />,
    details: [
      "Implementación de chatbots con procesamiento de lenguaje natural (NLP).",
      "Integración con calendarios y sistemas de pago.",
      "Flujos de seguimiento automatizados por WhatsApp e Email.",
      "Recuperación de carritos y citas abandonadas en tiempo real."
    ],
    benefits: [
      "Atención al cliente 24/7 sin costes de personal.",
      "Incremento del 50% en la tasa de agendamiento.",
      "Eliminación de errores humanos en la gestión de citas."
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "escalamiento-negocios",
    title: "Escalamiento de Negocios",
    desc: "Metodologías probadas para multiplicar la facturación de forma predecible.",
    icon: <TrendingUp className="w-8 h-8" />,
    details: [
      "Auditoría completa de procesos y cuellos de botella.",
      "Diseño de embudos de venta de alta conversión.",
      "Optimización del Lifetime Value (LTV) del cliente.",
      "Sistemas de reporte y análisis de datos en tiempo real."
    ],
    benefits: [
      "Crecimiento predecible mes a mes.",
      "Optimización de márgenes de beneficio.",
      "Estructura de negocio sólida preparada para el crecimiento masivo."
    ],
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop"
  }
];
