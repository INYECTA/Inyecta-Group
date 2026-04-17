import React from 'react';
import { Target, Sparkles, Zap, TrendingUp } from 'lucide-react';
import { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: "seo-clinicas",
    title: "SEO para Clínicas Estéticas",
    desc: "Posicionamos tu clínica en Google para que seas la primera opción cuando alguien busque un tratamiento en tu ciudad.",
    icon: <Target className="w-8 h-8" />,
    details: [
      "Análisis SEO técnico especializado en el sector médico.",
      "Optimización de Google Business Profile para captar pacientes locales.",
      "Estrategia de contenidos basada en tratamientos de alta rentabilidad.",
      "Linkbuilding de autoridad en portales de salud y estética."
    ],
    benefits: [
      "Tráfico orgánico cualificado sin pagar por cada clic.",
      "Aumento de la visibilidad en búsquedas locales (Google Maps).",
      "Posicionamiento como referente médico en tu zona geográfica."
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "publicidad-estetica",
    title: "Publicidad (Meta & Google Ads)",
    desc: "Campañas diseñadas para generar citas diarias y maximizar el retorno de tu inversión publicitaria.",
    icon: <Zap className="w-8 h-8" />,
    details: [
      "Estrategias de captación en Facebook e Instagram Ads.",
      "Campañas de búsqueda en Google Ads para intención de compra directa.",
      "Retargeting avanzado para recuperar pacientes indecisos.",
      "Optimización constante de creatividades y copies persuasivos."
    ],
    benefits: [
      "Generación inmediata de leads y citas en tu agenda.",
      "Control total sobre el presupuesto y el retorno de inversión.",
      "Segmentación precisa por intereses y tratamientos específicos."
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "redes-sociales",
    title: "Gestión de Redes Sociales",
    desc: "Convertimos tu Instagram en un canal de venta que genera autoridad y confianza en tus potenciales pacientes.",
    icon: <Sparkles className="w-8 h-8" />,
    details: [
      "Creación de contenido visual premium y profesional.",
      "Estrategia de Reels orientada a la educación y venta.",
      "Gestión de comunidad y respuesta a potenciales pacientes.",
      "Branding de autoridad para médicos y clínicas."
    ],
    benefits: [
      "Aumento del compromiso (engagement) con tu audiencia.",
      "Construcción de una marca sólida y deseable.",
      "Conversión de seguidores en pacientes reales recurrentes."
    ],
    image: "https://images.unsplash.com/photo-1507206130118-b5907f817163?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "diseno-web-medico",
    title: "Diseño Web para Clínicas",
    desc: "Creamos páginas web optimizadas para convertir visitas en citas médicas reales.",
    icon: <TrendingUp className="w-8 h-8" />,
    details: [
      "Diseño UX/UI enfocado 100% a la conversión de pacientes.",
      "Optimización de velocidad de carga (Core Web Vitals).",
      "Integración con sistemas de reserva y CRM médico.",
      "Diseño responsive impecable para dispositivos móviles."
    ],
    benefits: [
      "Mejora drástica de la tasa de conversión de tu web.",
      "Imagen profesional que transmite confianza y seguridad.",
      "Funcionalidad total para facilitar el agendamiento de citas."
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
  }
];
