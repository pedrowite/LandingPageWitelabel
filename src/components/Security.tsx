import { motion } from 'motion/react';
import { Shield, Lock, Server, CheckCircle, FileCheck, Award } from 'lucide-react';
import { ThemeMode } from '../App';
import pciLogo from 'figma:asset/307fc4218158bee4c37d0d01679cef67b54c7feb.png';
import isoLogo from 'figma:asset/584e7a49b974e72fcbbb8ffe377f9b8fca7b7ff4.png';
import lgpdLogo from 'figma:asset/d400ba37b01bffb569ff9a3fabba8cdf0a9a12fb.png';
import soc2Logo from 'figma:asset/935081a5f832087036711e79c9da0b8b97965ceb.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface SecurityProps {
  theme: ThemeMode;
}

const securityFeatures = [
  {
    icon: Shield,
    title: "PCI DSS Nível 1",
    description: "Certificação máxima de segurança para processamento de pagamentos",
    color: '#ff8534'
  },
  {
    icon: Lock,
    title: "Criptografia AES-256",
    description: "Dados protegidos com tecnologia de criptografia militar",
    color: '#9810FA'
  },
  {
    icon: Server,
    title: "Infraestrutura Enterprise",
    description: "99.99% de uptime com redundância global",
    color: '#ff6900'
  },
  {
    icon: FileCheck,
    title: "Compliance LGPD",
    description: "Totalmente adequado à Lei Geral de Proteção de Dados",
    color: '#b45dff'
  }
];

const certifications = [
  { name: 'PCI DSS', level: 'Nível 1', color: '#ff8534', logo: pciLogo },
  { name: 'ISO 27001', level: 'Certificado', color: '#9810FA', logo: isoLogo },
  { name: 'LGPD', level: 'Compliant', color: '#ff6900', logo: lgpdLogo },
  { name: 'SOC 2', level: 'Type II', color: '#b45dff', logo: soc2Logo }
];

export default function Security({ theme }: SecurityProps) {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[rgba(255,133,52,0.2)] to-[rgba(152,16,250,0.2)] border border-[rgba(255,255,255,0.2)] mb-8">
            <Shield className="w-5 h-5 text-[#ff8534]" strokeWidth={2.5} />
            <span className="text-white font-bold text-lg">Segurança Enterprise</span>
          </div>

          <h2 className="text-white mb-6 leading-tight font-bold sm:text-[55px] px-4 text-[55px]">
            Segurança de{' '}
            <span className="bg-gradient-to-r from-[#EFD9FF] via-[#FED5A7] to-[#FFBF77] bg-clip-text text-transparent">
              nível bancário
            </span>
          </h2>
          <p className="text-[#A0A0A5] max-w-3xl mx-auto text-xl">
            Infraestrutura robusta com as <span className="text-white font-bold">mais altas certificações</span> de segurança do mercado
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-[64px] mt-[0px] mr-[0px] ml-[0px]">
          {/* Left - Security Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative flex items-center justify-center py-16 sm:py-8 lg:py-0">
              {/* Rotating rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72"
              >
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 rounded-full"
                    style={{
                      transform: `scale(${1 + i * 0.3})`,
                      opacity: 0.4 - i * 0.1,
                      background: `conic-gradient(from 0deg, ${i % 2 === 0 ? '#ff8534' : '#9810FA'}00, ${i % 2 === 0 ? '#ff8534' : '#9810FA'}80, ${i % 2 === 0 ? '#ff8534' : '#9810FA'}00)`
                    }}
                  />
                ))}
              </motion.div>

              {/* Center shield */}
              <div className="relative bg-gradient-to-br from-[rgba(255,133,52,0.15)] to-[rgba(152,16,250,0.15)] backdrop-blur-sm rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 border-2 border-[rgba(255,255,255,0.15)]">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#ff8534] to-[#9810FA] rounded-2xl sm:rounded-3xl blur-2xl opacity-20"
                  animate={{ opacity: [0.15, 0.3, 0.15] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <Shield className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-white relative z-10" strokeWidth={1.5} />
              </div>

              {/* Floating security badges */}
              {[
                { icon: Lock, angle: 0, radius: 160, color: '#ff8534' },
                { icon: Server, angle: 120, radius: 160, color: '#9810FA' },
                { icon: CheckCircle, angle: 240, radius: 160, color: '#ff6900' }
              ].map((item, i) => {
                const radiusMobile = 100;
                const radiusDesktop = 160;
                const x = Math.cos((item.angle * Math.PI) / 180) * item.radius;
                const y = Math.sin((item.angle * Math.PI) / 180) * item.radius;
                return (
                  <motion.div
                    key={i}
                    className="absolute hidden lg:block"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    animate={{
                      y: [0, -15, 0]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center border-2"
                      style={{
                        background: `${item.color}20`,
                        borderColor: `${item.color}40`
                      }}
                    >
                      <item.icon className="w-8 h-8" style={{ color: item.color }} strokeWidth={2} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right - Features */}
          <div className="space-y-6">
            {securityFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ x: 10 }}
                className="group relative overflow-hidden p-6 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.15)] transition-all"
              >
                {/* Hover gradient */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `radial-gradient(circle at 0% 50%, ${feature.color}15, transparent 60%)` }}
                />

                <div className="relative flex items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${feature.color}20` }}
                  >
                    <feature.icon className="w-7 h-7" style={{ color: feature.color }} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-xl mb-2">{feature.title}</h3>
                    <p className="text-[#A0A0A5] leading-relaxed">{feature.description}</p>
                  </div>
                  <motion.div
                    className="flex-shrink-0"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                  >
                    <CheckCircle className="w-6 h-6 opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: feature.color }} strokeWidth={2.5} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-white font-bold text-2xl mb-2">Certificações e Compliance</h3>
            <p className="text-[#A0A0A5]">Atendemos aos mais rigorosos padrões de segurança globais</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div 
                  className="relative p-8 rounded-2xl border-2 bg-[rgba(17,17,20,0.6)] backdrop-blur-sm hover:bg-[rgba(255,255,255,0.04)] transition-all overflow-hidden"
                  style={{ borderColor: `${cert.color}30` }}
                >
                  {/* Glow on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `radial-gradient(circle at center, ${cert.color}15, transparent 70%)` }}
                  />

                  {/* Icon */}
                  <div className="relative flex justify-center mb-4">
                    {cert.logo ? (
                      <div className="w-24 h-24 flex items-center justify-center p-3 rounded-2xl bg-white">
                        <ImageWithFallback 
                          src={cert.logo} 
                          alt={`${cert.name} Certification Logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div
                        className="w-20 h-20 rounded-2xl flex items-center justify-center"
                        style={{ background: `${cert.color}20` }}
                      >
                        <Award className="w-10 h-10" style={{ color: cert.color }} strokeWidth={2} />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="relative text-center">
                    <h4 className="text-white font-bold text-xl mb-2">{cert.name}</h4>
                    <div
                      className="inline-block px-3 py-1 rounded-lg text-xs font-semibold"
                      style={{
                        background: `${cert.color}15`,
                        color: cert.color,
                        border: `1px solid ${cert.color}30`
                      }}
                    >
                      {cert.level}
                    </div>
                  </div>

                  {/* Check mark */}
                  <motion.div
                    className="absolute top-4 right-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, type: 'spring' }}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ background: `${cert.color}30` }}
                    >
                      <CheckCircle className="w-5 h-5" style={{ color: cert.color }} strokeWidth={2.5} />
                    </div>
                  </motion.div>
                </div>

                {/* Bottom glow */}
                <motion.div
                  className="absolute -bottom-2 left-8 right-8 h-2 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity"
                  style={{ background: cert.color }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[rgba(255,133,52,0.1)] to-[rgba(152,16,250,0.1)] border-2 border-[rgba(255,255,255,0.15)] backdrop-blur-sm">
            <Shield className="w-6 h-6 text-[#ff8534]" strokeWidth={2.5} />
            <span className="text-white font-bold text-lg">Seus dados protegidos com tecnologia de nível bancário</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <CheckCircle className="w-6 h-6 text-[#9810FA]" strokeWidth={2.5} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}