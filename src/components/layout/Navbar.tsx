import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { CALENDAR_LINK } from '../../constants';
import { Logo } from '../ui/Logo';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Cómo funciona", href: "/como-funciona" },
    { name: "Sobre nosotros", href: "/sobre-nosotros" },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-500 ${scrolled || mobileMenuOpen ? 'bg-white/90 backdrop-blur-2xl py-4 border-b border-potion-border' : 'bg-transparent py-8'}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 group cursor-pointer relative z-50">
            <Logo className="scale-90 origin-left" />
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10 text-sm font-bold text-potion-muted tracking-tight">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} className="hover:text-potion-accent transition-colors">{link.name}</Link>
            ))}
          </div>

          <div className="flex items-center gap-4 relative z-50">
            <a href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer" className="hidden sm:block bg-potion-text text-white px-6 py-3 rounded-xl font-extrabold text-sm hover:bg-potion-accent transition-all shadow-sm hover:shadow-lg whitespace-nowrap tracking-tight">
              Agendar Auditoría
            </a>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-potion-text hover:bg-potion-gray rounded-xl transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-32 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                link.href.startsWith('#') || link.href.includes('#') ? (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-bold text-potion-text hover:text-potion-accent transition-colors"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    key={link.name} 
                    to={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-bold text-potion-text hover:text-potion-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <a 
                href={CALENDAR_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 bg-potion-accent text-white px-8 py-5 rounded-xl font-extrabold text-xl shadow-xl shadow-blue-600/20 tracking-tight"
              >
                Agendar Auditoría Gratis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
