import React from 'react';
import { Footer7 } from "../ui/footer-7";
import { CALENDAR_LINK, SUPPORT_EMAIL } from '../../constants';
import { Instagram } from 'lucide-react';
import { Logo } from '../ui/Logo';

export const FooterSection = () => {
  const sections = [
    {
      title: "Servicios",
      links: [
        { name: "IA para Captación", href: "/servicios/ia-captacion" },
        { name: "Branding de Alto Nivel", href: "/servicios/branding-lujo" },
        { name: "Automatización de Ventas", href: "/servicios/automatizacion-ventas" },
        { name: "Escalamiento de Negocios", href: "/servicios/escalamiento-negocios" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { name: "Sobre nosotros", href: "/sobre-nosotros" },
        { name: "Beneficios", href: "/#beneficios" },
        { name: "Precios", href: "/#precios" },
        { name: "Testimonios", href: "/#testimonios" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { name: "Agendar Auditoría", href: CALENDAR_LINK },
        { name: "Contacto", href: "/contacto" },
        { name: "Privacidad", href: "/privacidad" },
        { name: "Términos", href: "/terminos" },
      ],
    },
  ];

  const socialLinks = [
    { 
      icon: <Instagram className="size-5" />, 
      href: "https://instagram.com/inyectagroup", // Placeholder as requested
      label: "Instagram" 
    },
  ];

  return (
    <Footer7
      logo={{
        url: "/",
        component: <Logo />,
      }}
      description="Automatización premium para clínicas estéticas de alto nivel. Transformamos centros médicos en máquinas de resultados."
      sections={sections}
      socialLinks={socialLinks}
      copyright={`© ${new Date().getFullYear()} Inyecta Group. Todos los derechos reservados.`}
      legalLinks={[
        { name: "Términos y Condiciones", href: "/terminos" },
        { name: "Política de Privacidad", href: "/privacidad" },
      ]}
    />
  );
};
