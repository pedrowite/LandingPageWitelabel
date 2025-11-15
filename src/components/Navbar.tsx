import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import imgWiteLabelLogo from "figma:asset/bb3f1e4d91d8cb4b6e7deebe33fca6227219583d.png";
import { X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleMobileLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Modelos de Receita', href: '#receita' },
    { label: 'App Mobile', href: '#app' },
    { label: 'Integrações', href: '#integracoes' },
    { label: 'Suporte', href: '#suporte' },
    { label: 'Segurança', href: '#seguranca' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-3' 
            : 'py-3 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className={`relative rounded-2xl border transition-all duration-300 ${
              isScrolled
                ? 'bg-[rgba(11,11,14,0.95)] backdrop-blur-xl border-[rgba(255,255,255,0.15)] shadow-2xl'
                : 'bg-[rgba(11,11,14,0.95)] md:bg-[rgba(11,11,14,0.7)] backdrop-blur-xl md:backdrop-blur-md border-[rgba(255,255,255,0.15)] md:border-[rgba(255,255,255,0.08)]'
            }`}
            style={{
              boxShadow: isScrolled 
                ? '0 8px 32px rgba(0,0,0,0.5), 0 0 60px rgba(152,16,250,0.1)' 
                : '0 8px 32px rgba(0,0,0,0.4), 0 0 40px rgba(152,16,250,0.08)'
            }}
          >
            {/* Gradient border glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                 style={{
                   background: 'linear-gradient(135deg, rgba(255,133,52,0.1), rgba(152,16,250,0.1))',
                   filter: 'blur(20px)'
                 }}
            />
            
            <div className="relative px-6 py-3 flex items-center justify-between">
              {/* Logo */}
              <motion.a
                href="#"
                className="flex items-center gap-3 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF] via-[#FED5A7] to-[#FFFFFF] rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity" />
                  <img 
                    src={imgWiteLabelLogo} 
                    alt="WiteLabel" 
                    className="w-10 h-10 relative rounded-full"
                  />
                </div>
                {/* Removed WiteLabel text */}
              </motion.a>

              {/* Nav Items */}
              <div className="hidden lg:flex items-center gap-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="relative px-4 py-2 text-sm font-medium text-white transition-colors rounded-lg group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">{item.label}</span>
                    
                    {/* Hover background */}
                    <div className="absolute inset-0 bg-[rgba(255,255,255,0.05)] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Active indicator */}
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: 'linear-gradient(to right, #FFFFFF, #FED5A7)'
                      }}
                      initial={{ width: 0 }}
                      whileHover={{ width: '70%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                onClick={() => window.location.href = '/formulario'}
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
                className="hidden md:block relative px-5 py-2.5 rounded-lg text-white font-medium text-sm overflow-hidden group border border-[rgba(152,16,250,0.5)]"
                style={{
                  background: 'rgba(152,16,250,0.2)'
                }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#9810FA]/40 to-[#7a0dd4]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <span className="relative flex items-center gap-2">
                  Agendar Demonstração
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className="group-hover:translate-x-0.5 transition-transform"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-white"
              >
                {isMobileMenuOpen ? (
                  <X width={24} height={24} />
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round"/>
                  </svg>
                )}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-[400px] bg-gradient-to-br from-[#0B0B0E] to-[#111114] z-50 overflow-y-auto"
              style={{
                boxShadow: '-10px 0 50px rgba(0,0,0,0.5)'
              }}
            >
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-b from-[#0B0B0E] to-transparent backdrop-blur-xl z-10 px-6 py-6 border-b border-[rgba(255,255,255,0.1)]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src={imgWiteLabelLogo} 
                      alt="WiteLabel" 
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="text-white font-bold text-xl">Menu</span>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-white/60 hover:text-white transition-colors"
                  >
                    <X width={24} height={24} />
                  </motion.button>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="px-6 py-8 space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleMobileLinkClick(item.href);
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block px-6 py-4 text-white font-medium text-lg rounded-xl bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.15)] transition-all group"
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="group-hover:text-[#ff8534] transition-colors">{item.label}</span>
                      <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        className="text-white/40 group-hover:text-[#ff8534] group-hover:translate-x-1 transition-all"
                      >
                        <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* CTA Button */}
              <div className="px-6 pb-8">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.location.href = '/formulario';
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full relative px-8 py-5 rounded-2xl text-white font-medium text-lg overflow-hidden border border-[rgba(152,16,250,0.6)]"
                  style={{
                    background: 'rgba(152,16,250,0.25)',
                    boxShadow: '0 0 30px rgba(152,16,250,0.3)'
                  }}
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#9810FA]/50 to-[#7a0dd4]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <span className="relative flex items-center justify-center gap-2">
                    Agendar Demonstração
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </motion.button>
              </div>

              {/* Footer Info */}
              <div className="px-6 pb-8 pt-4 border-t border-[rgba(255,255,255,0.05)]">
                <p className="text-[#A0A0A5] text-sm text-center">
                  Revolucione seus pagamentos com <span className="text-white font-bold">WiteLabel</span>
                </p>
              </div>

              {/* Decorative gradient */}
              <div 
                className="absolute top-32 right-0 w-64 h-64 opacity-20 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, #ff8534, transparent 70%)',
                  filter: 'blur(60px)'
                }}
              />
              <div 
                className="absolute bottom-32 left-0 w-64 h-64 opacity-20 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, #9810FA, transparent 70%)',
                  filter: 'blur(60px)'
                }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}