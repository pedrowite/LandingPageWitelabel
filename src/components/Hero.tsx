import image_bb3f1e4d91d8cb4b6e7deebe33fca6227219583d from 'figma:asset/bb3f1e4d91d8cb4b6e7deebe33fca6227219583d.png';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Server, Code2, Sparkles, Shield, TrendingUp, Settings, Smartphone } from 'lucide-react';
import { ThemeMode } from '../App';
import { useState } from 'react';
import imgWiteLabelLogo from "figma:asset/bb3f1e4d91d8cb4b6e7deebe33fca6227219583d.png";
import imgYampiLogo from 'figma:asset/b40a67c0e26cf35a8cdb24952e86abaf3660c4d3.png';
import Container from '../imports/Container';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  theme: ThemeMode;
}

export default function Hero({ theme }: HeroProps) {
  const [selectedLayer, setSelectedLayer] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-8">
      {/* Enhanced gradient background with more illumination */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main central glow - Orange to Purple */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] rounded-full opacity-[0.15]"
          style={{ 
            background: 'radial-gradient(circle, #D74B18 0%, #9810FA 40%, #6D03F5 60%, transparent 75%)',
            filter: 'blur(140px)'
          }}
        />
        
        {/* Secondary glow - Left side orange */}
        <div 
          className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full opacity-[0.12]"
          style={{ 
            background: 'radial-gradient(circle, #FF6900 0%, #D74B18 50%, transparent 70%)',
            filter: 'blur(120px)'
          }}
        />
        
        {/* Secondary glow - Right side purple */}
        <div 
          className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full opacity-[0.12]"
          style={{ 
            background: 'radial-gradient(circle, #9810FA 0%, #6D03F5 50%, transparent 70%)',
            filter: 'blur(120px)'
          }}
        />
        
        {/* Bottom ambient glow */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-[0.1]"
          style={{ 
            background: 'radial-gradient(circle, #D74B18 0%, #9810FA 60%, transparent 80%)',
            filter: 'blur(100px)'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
          >
            <Zap className="w-4 h-4 text-[#D74B18]" />
            <span className="text-white/80 text-sm">{t.hero.badge}</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white mb-6 leading-[1.1] max-w-4xl font-bold text-[48px] sm:text-[40px] md:text-[48px] lg:text-[55px]"
          >
            {t.hero.title}{' '}
            <span className="bg-gradient-to-r from-[#EFD9FF] via-[#FED5A7] to-[#FFBF77] bg-clip-text text-transparent">
              {t.hero.titleGradient}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#C0C0C8] text-lg leading-relaxed mb-4 max-w-2xl"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-[#D74B18] mb-10"
            style={{ fontSize: '20px' }}
          >
            {/* Texto removido conforme solicitado */}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <motion.button 
              onClick={() => window.location.href = '/formulario'}
              className="group relative px-10 py-4 rounded-xl text-white font-medium text-base flex items-center justify-center gap-2 overflow-hidden border border-[rgba(152,16,250,0.6)]"
              style={{
                background: 'rgba(152,16,250,0.25)',
                boxShadow: '0 0 30px rgba(152,16,250,0.25)'
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 40px rgba(152,16,250,0.4)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#9810FA]/50 to-[#7a0dd4]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <span className="relative">{t.hero.cta}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative" />
            </motion.button>
          </motion.div>

          {/* Hero Visual Element - Vertical 2D Journey */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative w-full max-w-3xl mb-4 px-4"
          >
            {/* Vertical Journey Container */}
            <div className="relative">
              
              {/* 1. TOP - Hero Title */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="text-center mb-12"
              >
                {/* Título removido */}
              </motion.div>

              {/* 2. CENTER - Logo with Orbiting Icons */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.4 }}
                className="relative mx-auto w-72 h-72 mb-16 flex items-center justify-center"
              >
                {/* Enhanced Glow effect behind logo - Multiple layers */}
                {/* Layer 1 - Purple glow */}
                <motion.div 
                  className="absolute inset-0 rounded-full blur-3xl"
                  style={{ 
                    background: 'radial-gradient(circle, #9810FA 0%, #6D03F5 40%, transparent 70%)',
                    opacity: 0.35,
                    transform: 'scale(1.2)'
                  }}
                  animate={{ 
                    opacity: [0.35, 0.5, 0.35],
                    scale: [1.2, 1.3, 1.2]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Layer 2 - Orange glow */}
                <motion.div 
                  className="absolute inset-0 rounded-full blur-3xl"
                  style={{ 
                    background: 'radial-gradient(circle, #D74B18 0%, #FF6900 40%, transparent 70%)',
                    opacity: 0.3,
                    transform: 'scale(1.1)'
                  }}
                  animate={{ 
                    opacity: [0.3, 0.45, 0.3],
                    scale: [1.1, 1.25, 1.1]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
                
                {/* Layer 3 - Mixed gradient glow (base) */}
                <div 
                  className="absolute inset-0 rounded-full opacity-25 blur-3xl"
                  style={{ 
                    background: 'radial-gradient(circle, #9810FA 0%, #D74B18 50%, #FF6900 70%, transparent 85%)',
                    transform: 'scale(1.15)'
                  }}
                />

                {/* Logo central WiteLabel */}
                <motion.div
                  className="relative z-10 w-40 h-40 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={image_bb3f1e4d91d8cb4b6e7deebe33fca6227219583d}
                    alt="WiteLabel"
                    className="w-full h-full object-contain"
                    style={{ 
                      mixBlendMode: 'lighten',
                      filter: 'brightness(1.2) contrast(1.3)'
                    }}
                  />
                </motion.div>

                {/* Orbiting Icons - 6 icons around the logo */}
                {[
                  { icon: TrendingUp, color: '#FF6900', angle: 0, delay: 0 },
                  { icon: Sparkles, color: '#9810FA', angle: 60, delay: 0.1 },
                  { icon: Settings, color: '#D74B18', angle: 120, delay: 0.2 },
                  { icon: Smartphone, color: '#FF6900', angle: 180, delay: 0.3 },
                  { icon: Server, color: '#6D03F5', angle: 240, delay: 0.4 },
                  { icon: Shield, color: '#9810FA', angle: 300, delay: 0.5 }
                ].map((item, index) => {
                  const Icon = item.icon;
                  const radius = 130; // Distance from center
                  const angleRad = (item.angle * Math.PI) / 180;
                  const x = Math.cos(angleRad) * radius;
                  const y = Math.sin(angleRad) * radius;

                  return (
                    <motion.div
                      key={index}
                      className="absolute top-1/2 left-1/2"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        x: x - 24,
                        y: y - 24
                      }}
                      transition={{ 
                        delay: 1.2 + item.delay,
                        duration: 0.5,
                        type: "spring"
                      }}
                    >
                      {/* Icon container with glow */}
                      <motion.div
                        className="relative w-12 h-12 rounded-xl flex items-center justify-center border-2"
                        style={{
                          background: `linear-gradient(135deg, ${item.color}15, ${item.color}08)`,
                          borderColor: `${item.color}40`,
                          boxShadow: `0 0 20px ${item.color}30`
                        }}
                        animate={{
                          boxShadow: [
                            `0 0 20px ${item.color}30`,
                            `0 0 30px ${item.color}50`,
                            `0 0 20px ${item.color}30`
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: item.delay
                        }}
                        whileHover={{ 
                          scale: 1.2,
                          boxShadow: `0 0 40px ${item.color}60`
                        }}
                      >
                        <Icon 
                          className="w-6 h-6" 
                          style={{ color: item.color }}
                          strokeWidth={2}
                        />
                        
                        {/* Pulse effect */}
                        <div 
                          className="absolute inset-0 rounded-xl"
                          style={{
                            background: `radial-gradient(circle, ${item.color}40, transparent 70%)`,
                            animation: `pulse 2s ease-in-out infinite`,
                            animationDelay: `${item.delay}s`
                          }}
                        />
                      </motion.div>

                      {/* Connection line to center */}
                      <svg 
                        className="absolute top-1/2 left-1/2 -z-10"
                        style={{
                          width: radius * 2,
                          height: radius * 2,
                          transform: 'translate(-50%, -50%)'
                        }}
                      >
                        <motion.line
                          x1={radius}
                          y1={radius}
                          x2={radius + x}
                          y2={radius + y}
                          stroke={item.color}
                          strokeWidth="1"
                          strokeDasharray="4 4"
                          opacity="0.15"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ 
                            delay: 1.2 + item.delay,
                            duration: 0.8 
                          }}
                        />
                      </svg>
                    </motion.div>
                  );
                })}

                {/* Rotating ring effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-white/5"
                  style={{
                    width: '280px',
                    height: '280px',
                    margin: 'auto'
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>

              {/* Vertical line from logo - premium gradient */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                className="w-px h-16 mx-auto relative mb-8"
                style={{ transformOrigin: 'top' }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#D74B18] via-[#9810FA] to-transparent opacity-60" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-[#D74B18] to-[#9810FA]"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* 3. CHECKPOINTS - MINIMAL & MODERN Premium Design */}
              <div className="relative max-w-4xl mx-auto">
                {/* Conectores individuais ENTRE as caixas - Não passam por dentro */}
                
                {/* Conector ENTRE caixa 1 e 2 */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 2.4, duration: 0.3 }}
                  className="absolute left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-[#D74B18] to-[#9810FA] opacity-20"
                  style={{ 
                    top: '110px',
                    height: '48px',
                    transformOrigin: 'top',
                    zIndex: -5
                  }}
                />

                {/* Conector ENTRE caixa 2 e 3 */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 2.6, duration: 0.3 }}
                  className="absolute left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-[#9810FA] to-[#6D03F5] opacity-20"
                  style={{ 
                    top: '268px',
                    height: '48px',
                    transformOrigin: 'top',
                    zIndex: -5
                  }}
                />

                {/* Conector ENTRE caixa 3 e 4 */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 2.8, duration: 0.3 }}
                  className="absolute left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-[#6D03F5] to-[#D74B18] opacity-20"
                  style={{ 
                    top: '426px',
                    height: '48px',
                    transformOrigin: 'top',
                    zIndex: -5
                  }}
                />

                {/* Conector ENTRE caixa 4 e 5 */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 3.0, duration: 0.3 }}
                  className="absolute left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-[#D74B18] to-[#9810FA] opacity-20"
                  style={{ 
                    top: '584px',
                    height: '48px',
                    transformOrigin: 'top',
                    zIndex: -5
                  }}
                />

                {/* Checkpoints - MINIMALIST MODERN DESIGN */}
                {[
                  {
                    icon: TrendingUp,
                    color: '#FF6900',
                    secondaryColor: '#D74B18',
                    title: 'Mais Aprovação',
                    description: 'Taxas de aprovação superiores com rotas inteligentes',
                    delay: 2.2
                  },
                  {
                    icon: Sparkles,
                    color: '#9810FA',
                    secondaryColor: '#6D03F5',
                    title: 'Gateway no Seu Nome',
                    description: 'Seu domínio, sua identidade, seu ecossistema',
                    delay: 2.4
                  },
                  {
                    icon: Settings,
                    color: '#D74B18',
                    secondaryColor: '#9810FA',
                    title: 'Mais Controle Operacional',
                    description: 'Controle total sobre regras, taxas e integrações',
                    delay: 2.6
                  },
                  {
                    icon: Smartphone,
                    color: '#FF6900',
                    secondaryColor: '#9810FA',
                    title: 'App Próprio nas Stores',
                    description: 'Tenha seu aplicativo no Google Play e App Store',
                    delay: 2.8
                  },
                  {
                    icon: Server,
                    color: '#6D03F5',
                    secondaryColor: '#D74B18',
                    title: 'Escalabilidade Garantida',
                    description: 'Infra robusta para operações de alto volume',
                    delay: 3.0
                  }
                ].map((checkpoint, index) => {
                  const Icon = checkpoint.icon;
                  const isEven = index % 2 === 0;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: isEven ? -30 : 30, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ 
                        delay: checkpoint.delay, 
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100
                      }}
                      className={`relative flex items-center gap-6 mb-12 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                    >
                      {/* MINIMALIST MODERN Card Design */}
                      <div 
                        className={`flex-1 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}
                      >
                        <motion.div
                          className="relative group inline-block overflow-hidden rounded-xl border transition-all duration-300 cursor-pointer w-full md:min-w-[420px]"
                          style={{
                            background: 'rgba(255, 255, 255, 0.02)',
                            borderColor: 'rgba(255, 255, 255, 0.08)',
                            backdropFilter: 'blur(8px)'
                          }}
                          whileHover={{ 
                            scale: 1.015,
                            borderColor: `${checkpoint.color}40`,
                            boxShadow: `0 8px 32px ${checkpoint.color}15`
                          }}
                        >
                          {/* Minimal top accent line */}
                          <div 
                            className="absolute top-0 left-0 right-0 h-px opacity-40 group-hover:opacity-70 transition-opacity"
                            style={{ background: `linear-gradient(to right, transparent, ${checkpoint.color}, transparent)` }}
                          />

                          {/* Content */}
                          <div className={`relative p-5 flex items-center gap-4 ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
                            {/* Icon - MINIMALIST */}
                            <div className="relative flex-shrink-0">
                              <div 
                                className="relative w-12 h-12 rounded-lg flex items-center justify-center border"
                                style={{
                                  background: `${checkpoint.color}08`,
                                  borderColor: `${checkpoint.color}20`
                                }}
                              >
                                <Icon className="w-6 h-6" style={{ color: checkpoint.color }} strokeWidth={1.8} />
                              </div>
                            </div>

                            {/* Text */}
                            <div className="flex-1">
                              <h4 
                                className="font-bold text-lg mb-1.5 tracking-tight text-white"
                              >
                                {checkpoint.title}
                              </h4>
                              <p className="text-[#A0A0A5] text-sm leading-relaxed">
                                {checkpoint.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}