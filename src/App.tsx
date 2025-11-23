import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import RevenueModels from './components/RevenueModels';
import MobileAppNew from './components/MobileAppNew';
import WiteEcosystemNew from './components/WiteEcosystemNew';
import TemplateCarouselMoving from './components/TemplateCarouselMoving';
import Integrations from './components/Integrations';
import SupportMinimal from './components/SupportMinimal';
import Security from './components/Security';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ScrollGlow from './components/ScrollGlow';
import LightweightBackground from './components/LightweightBackground';
import Formulario from './Formulario';
import Sucesso from './Sucesso';
import { GoogleTagManager } from './components/GoogleTagManager';
import { LanguageProvider } from './contexts/LanguageContext';

export type ThemeMode = 'dark-clean' | 'gradient-neon' | 'minimalist' | 'light-tech';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('dark-clean');
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname);

  useEffect(() => {
    // Listen for route changes
    const handleRouteChange = () => {
      setCurrentRoute(window.location.pathname);
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  // Route to Formulario page
  if (currentRoute === '/formulario') {
    return (
      <LanguageProvider>
        <Formulario />
      </LanguageProvider>
    );
  }

  // Route to Success page
  if (currentRoute === '/sucesso') {
    return (
      <LanguageProvider>
        <Sucesso />
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#000000] overflow-x-hidden relative w-full">
        {/* Google Tag Manager */}
        <GoogleTagManager />
        
        {/* Futuristic 2D Background Elements */}
        <LightweightBackground />

        {/* Premium Effects Layer - Simplified */}
        <ScrollGlow />
        
        {/* Navbar */}
        <Navbar />
        
        {/* All sections with reduced spacing on mobile */}
        <div className="relative space-y-0 md:space-y-0">
          <Hero theme={theme} />
          <div className="-mt-24 md:-mt-16">
            <TemplateCarouselMoving />
          </div>
          <div id="como-funciona" className="-mt-24 md:-mt-12">
            <HowItWorks theme={theme} />
          </div>
          <div id="receita" className="-mt-12 md:mt-0">
            <RevenueModels theme={theme} />
          </div>
          <div id="app" className="-mt-12 md:mt-0">
            <MobileAppNew theme={theme} />
          </div>
          <div className="-mt-12 md:mt-0">
            <WiteEcosystemNew theme={theme} />
          </div>
          <div id="integracoes" className="-mt-12 md:mt-0">
            <Integrations theme={theme} />
          </div>
          <div id="suporte" className="-mt-12 md:mt-0">
            <SupportMinimal theme={theme} />
          </div>
          <div id="seguranca" className="-mt-12 md:mt-0">
            <Security theme={theme} />
          </div>
          <div className="-mt-12 md:mt-0">
            <FAQ theme={theme} />
          </div>
          <div className="-mt-12 md:mt-0">
            <FinalCTA theme={theme} />
          </div>
          <Footer theme={theme} />
        </div>
      </div>
    </LanguageProvider>
  );
}