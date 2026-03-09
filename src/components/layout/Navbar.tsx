import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { CALENDAR_LINK } from '../../constants';

import { Logo } from '../ui/Logo';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-8 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-2xl py-4 border-b border-potion-border' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 group cursor-pointer">
          <Logo />
        </Link>
        
        <div className="hidden md:flex items-center gap-12 text-sm font-bold text-potion-muted tracking-tight">
          {isHome ? (
            <>
              <a href="#servicios" className="hover:text-potion-accent transition-colors">Servicios</a>
              <a href="#beneficios" className="hover:text-potion-accent transition-colors">Beneficios</a>
              <a href="#precios" className="hover:text-potion-accent transition-colors">Precios</a>
              <a href="#testimonios" className="hover:text-potion-accent transition-colors">Testimonios</a>
              <a href="#sobre-nosotros" className="hover:text-potion-accent transition-colors">Sobre nosotros</a>
            </>
          ) : (
            <>
              <Link to="/" className="hover:text-potion-accent transition-colors">Inicio</Link>
              <Link to="/#servicios" className="hover:text-potion-accent transition-colors">Servicios</Link>
              <Link to="/#precios" className="hover:text-potion-accent transition-colors">Precios</Link>
            </>
          )}
        </div>

        <div className="flex items-center gap-4">
          <a href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer" className="bg-potion-text text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-potion-accent transition-all shadow-sm hover:shadow-lg">
            Agendar Auditoría
          </a>
        </div>
      </div>
    </motion.nav>
  );
};
