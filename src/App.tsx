import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { DynamicBackground } from './components/DynamicBackground';
import { Navbar } from './components/layout/Navbar';
import { FooterSection } from './components/layout/FooterSection';
import { Home } from './pages/Home';
import { ServicePage } from './pages/ServicePage';
import { AboutPage } from './pages/AboutPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="relative selection:bg-potion-accent/10 selection:text-potion-accent min-h-screen">
          <DynamicBackground />
          <Navbar />
          <main className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicios/:id" element={<ServicePage />} />
              <Route path="/sobre-nosotros" element={<AboutPage />} />
              <Route path="/como-funciona" element={<HowItWorksPage />} />
              <Route path="/contacto" element={<ContactPage />} />
              <Route path="/privacidad" element={<PrivacyPage />} />
              <Route path="/terminos" element={<TermsPage />} />
            </Routes>
          </main>
          <FooterSection />
        </div>
      </Router>
    </HelmetProvider>
  );
}
