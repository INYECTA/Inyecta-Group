import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { DynamicBackground } from './components/DynamicBackground';
import { Navbar } from './components/layout/Navbar';
import { FooterSection } from './components/layout/FooterSection';
import { Home } from './pages/Home';
import { ServicePage } from './pages/ServicePage';

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
    <Router>
      <ScrollToTop />
      <div className="relative selection:bg-potion-accent/10 selection:text-potion-accent min-h-screen">
        <DynamicBackground />
        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios/:id" element={<ServicePage />} />
          </Routes>
        </main>
        <FooterSection />
      </div>
    </Router>
  );
}
