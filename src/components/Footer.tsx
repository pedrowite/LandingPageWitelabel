import { motion } from 'motion/react';
import { Linkedin, Instagram, Mail } from 'lucide-react';
import { ThemeMode } from '../App';
import imgWiteLabelLogo from "figma:asset/bb3f1e4d91d8cb4b6e7deebe33fca6227219583d.png";

interface FooterProps {
  theme: ThemeMode;
}

export default function Footer({ theme }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              Transformando marcas em operações financeiras completas através de tecnologia whitelabel enterprise.
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
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Como Funciona', id: 'como-funciona' },
                { label: 'Receita', id: 'receita' },
                { label: 'App Mobile', id: 'app' },
                { label: 'Integrações', id: 'integracoes' },
                { label: 'Suporte', id: 'suporte' },
                { label: 'Segurança', id: 'seguranca' }
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
              Contato
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
            © {currentYear} WiteLabel — impulsionando o futuro dos gateways digitais.
          </p>
          
          <div className="flex flex-wrap gap-6 text-sm">
            {['Termos de Uso', 'Política de Privacidade', 'Cookies'].map((item, index) => (
              <a 
                key={index}
                href="#" 
                className="text-[#A0A0A5] hover:bg-gradient-to-r hover:from-[#FFFFFF] hover:via-[#FED5A7] hover:to-[#FFFFFF] hover:bg-clip-text hover:text-transparent transition-all"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient at bottom - Gradiente branco */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFFFFF] to-transparent opacity-20" />
    </footer>
  );
}