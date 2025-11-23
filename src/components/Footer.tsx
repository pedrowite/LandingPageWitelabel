import { motion } from 'motion/react';
import { Linkedin, Instagram, Mail, Globe, ChevronDown } from 'lucide-react';
import { ThemeMode } from '../App';
import imgWiteLabelLogo from "figma:asset/bb3f1e4d91d8cb4b6e7deebe33fca6227219583d.png";
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface FooterProps {
  theme: ThemeMode;
}

export default function Footer({ theme }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { language, setLanguage, t } = useLanguage();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const languages = [
    { code: 'pt-BR', label: 'Português (BR)', flag: 'https://flagcdn.com/w40/br.png' },
    { code: 'en', label: 'English', flag: 'https://flagcdn.com/w40/us.png' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <footer className="relative border-t border-[rgba(255,255,255,0.1)] bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.3)] py-24 py-[45px] px-[0px]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Column - Logo da WiteLabel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-lg opacity-40"
                     style={{ background: 'linear-gradient(to right, #FFFFFF, #FED5A7)' }} />
                <img 
                  src={imgWiteLabelLogo} 
                  alt="WiteLabel" 
                  className="w-12 h-12 relative rounded-full"
                />
              </div>
              <span className="font-bold text-xl"
                    style={{
                      background: 'linear-gradient(to right, #FFFFFF, #FED5A7)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                WiteLabel
              </span>
            </div>
            <p className="text-[#A0A0A5] mb-6">
              {t.footer.description}
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: 'https://www.linkedin.com/company/witegroup/' },
                { icon: Instagram, href: 'https://www.instagram.com/witelabels/' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center hover:border-[rgba(255,133,52,0.5)] hover:bg-[rgba(255,133,52,0.1)] transition-all"
                >
                  <social.icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="bg-gradient-to-r from-[#FFFFFF] via-[#FED5A7] to-[#FFFFFF] bg-clip-text text-transparent font-bold mb-4">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-3">
              {[
                { label: t.footer.nav.howItWorks, id: 'como-funciona' },
                { label: t.footer.nav.revenue, id: 'receita' },
                { label: t.footer.nav.app, id: 'app' },
                { label: t.footer.nav.integrations, id: 'integracoes' },
                { label: t.footer.nav.support, id: 'suporte' },
                { label: t.footer.nav.security, id: 'seguranca' }
              ].map((item, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(item.id)}
                    className="text-[#A0A0A5] hover:bg-gradient-to-r hover:from-[#FFFFFF] hover:via-[#FED5A7] hover:to-[#FFFFFF] hover:bg-clip-text hover:text-transparent transition-all inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-[#FFFFFF] via-[#FED5A7] to-[#FFFFFF] group-hover:w-4 transition-all duration-300" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="bg-gradient-to-r from-[#FFFFFF] via-[#FED5A7] to-[#FFFFFF] bg-clip-text text-transparent font-bold mb-4">
              {t.footer.contact}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#ff8534] shrink-0 mt-0.5" />
                <a href="mailto:contato@witelabel.com" className="text-[#A0A0A5] hover:bg-gradient-to-r hover:from-[#FFFFFF] hover:via-[#FED5A7] hover:to-[#FFFFFF] hover:bg-clip-text hover:text-transparent transition-all">
                  contato@witelabel.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider - Gradiente branco */}
        <div className="h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent mb-8" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-[#A0A0A5] text-sm">
            © {currentYear} {t.footer.copyright}
          </p>
          
          <div className="flex items-center gap-6 text-sm">
            {/* Language Selector */}
            <div className="relative">
              <motion.button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,133,52,0.5)] hover:bg-[rgba(255,133,52,0.1)] transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="w-4 h-4 text-white" />
                <img src={currentLanguage?.flag} alt="" className="w-5 h-3 object-cover rounded-sm" />
                <span className="text-white text-sm">{currentLanguage?.code === 'pt-BR' ? 'PT' : 'EN'}</span>
                <ChevronDown className={`w-4 h-4 text-white transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </motion.button>

              {/* Dropdown */}
              {isLanguageOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-full mb-2 right-0 min-w-[200px] rounded-xl bg-[rgba(17,17,20,0.95)] border border-[rgba(255,255,255,0.1)] backdrop-blur-xl overflow-hidden shadow-2xl"
                  style={{
                    boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(255,133,52,0.1)'
                  }}
                >
                  {languages.map((lang) => (
                    <motion.button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as 'pt-BR' | 'en');
                        setIsLanguageOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all ${
                        language === lang.code
                          ? 'bg-[rgba(255,133,52,0.2)] text-white border-l-2 border-[#ff8534]'
                          : 'text-[#A0A0A5] hover:bg-[rgba(255,255,255,0.05)] hover:text-white'
                      }`}
                      whileHover={{ x: 4 }}
                    >
                      <img src={lang.flag} alt={lang.label} className="w-6 h-4 object-cover rounded-sm" />
                      <span className="text-sm font-bold">{lang.label}</span>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6">
              {[t.footer.legal.terms, t.footer.legal.privacy, t.footer.legal.cookies].map((item, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-[#A0A0A5] hover:bg-gradient-to-r hover:from-[#FFFFFF] hover:via-[#FED5A7] hover:to-[#FFFFFF] hover:bg-clip-text hover:text-transparent transition-all"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient at bottom - Gradiente branco */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFFFFF] to-transparent opacity-20" />
    </footer>
  );
}