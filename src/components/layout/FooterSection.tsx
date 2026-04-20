import React from 'react';
import { Footer7 } from "../ui/footer-7";
import { SCHEDULE_PATH, SUPPORT_EMAIL } from '../../constants';
import { Instagram } from 'lucide-react';
import { Logo } from '../ui/Logo';

export const FooterSection = () => {
  const sections = [
    {
      title: "Menú",
      links: [
        { name: "Inicio", href: "/" },
        { name: "Sobre nosotros", href: "/sobre-nosotros" },
        { name: "Agendar Llamada", href: SCHEDULE_PATH },
        { name: "Casos de éxito", href: "/#testimonios" },
      ],
    },
    {
      title: "Compañía",
      links: [
        { name: "Cómo funciona", href: "/como-funciona" },
        { name: "Contacto", href: "/contacto" },
      ],
    },
    {
      title: "Soporte",
      links: [
        { name: SUPPORT_EMAIL, href: `mailto:${SUPPORT_EMAIL}` },
        { name: "Ayuda 24/7", href: SCHEDULE_PATH },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Política de Privacidad", href: "/privacidad" },
        { name: "Aviso Legal", href: "/terminos" },
      ],
    },
  ];

  const socialLinks = [
    { 
      icon: <Instagram className="size-5" />, 
      href: "https://instagram.com/inyectagroup",
      label: "Instagram" 
    },
  ];

  return (
    <Footer7
      logo={{
        url: "/",
        component: <Logo />,
      }}
      description="Transformamos clínicas estéticas en negocios automáticos con IA."
      sections={sections}
      socialLinks={socialLinks}
      copyright={
        <span>
          © 2024 <span translate="no">Inyecta Group</span>.
        </span>
      }
      legalLinks={[
        { name: "Privacidad", href: "/privacidad" },
        { name: "Cookies", href: "/cookies" },
        { name: "Aviso Legal", href: "/terminos" },
      ]}
    />
  );
};
