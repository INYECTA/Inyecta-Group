import React from 'react';
import { Footer7 } from "../ui/footer-7";
import { CALENDAR_LINK, SUPPORT_EMAIL } from '../../constants';
import { Instagram } from 'lucide-react';
import { Logo } from '../ui/Logo';

export const FooterSection = () => {
  const sections = [
    {
      title: "Menú",
      links: [
        { name: "Inicio", href: "/" },
        { name: "Auditoría", href: "/#auditoria" },
        { name: "Casos de éxito", href: "/#testimonios" },
      ],
    },
    {
      title: "Compañía",
      links: [
        { name: "Sobre nosotros", href: "/sobre-nosotros" },
        { name: "Cómo funciona", href: "/como-funciona" },
        { name: "Contacto", href: "/contacto" },
      ],
    },
    {
      title: "Soporte",
      links: [
        { name: SUPPORT_EMAIL, href: `mailto:${SUPPORT_EMAIL}` },
        { name: "Ayuda 24/7", href: "/#auditoria" },
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
      copyright={`© 2024 Inyecta Group.`}
      legalLinks={[
        { name: "Privacidad", href: "/privacidad" },
        { name: "Aviso Legal", href: "/terminos" },
      ]}
    />
  );
};
