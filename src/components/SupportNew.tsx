import { motion } from 'motion/react';
import { MessageCircle, Clock, Headphones, Sparkles, Zap, Shield } from 'lucide-react';
import { ThemeMode } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';
import imgWiteLabelLogo from "figma:asset/bb3f1e4d91d8cb4b6e7deebe33fca6227219583d.png";

interface SupportProps {
  theme: ThemeMode;
}

export default function SupportNew({ theme }: SupportProps) {
  const features = [
    {
      icon: MessageCircle,
      title: "Grupo WhatsApp Exclusivo",
      description: "Acesso direto à equipe técnica e estratégica em tempo real",
      color: "#00c950",
      gradient: "from-[#00c950] to-[#00bc7d]"
    },
    {
      icon: Clock,
      title: "Disponibilidade Total",
      description: "Suporte 24 horas por dia, 7 dias por semana sem interrupções",
      color: "#ff8534",
      gradient: "from-[#ff8534] to-[#ff6900]"
    },
    {
      icon: Headphones,
      title: "Especialistas Dedicados",
      description: "Time técnico especializado em gateways e integrações",
      color: "#9810FA",
      gradient: "from-[#9810FA] to-[#C944FF]"
    }
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[rgba(0,201,80,0.12)] border border-[rgba(0,201,80,0.3)] mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="w-2 h-2 rounded-full bg-[#00c950]"
              animate={{
                scale: [1, 1.3, 1],
                boxShadow: ['0 0 0px #00c950', '0 0 12px #00c950', '0 0 0px #00c950']
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            />
            <span className="text-[#00c950] font-bold text-sm">Suporte 24/7 Online</span>
          </motion.div>

          <h2 className="text-white mb-6 font-bold leading-tight">
            <span className="bg-gradient-to-r from-[#FFFFFF] via-[#FED5A7] to-[#FFBF77] bg-clip-text text-transparent sm:text-[55px] text-[48px]">
              Suporte WiteLabel
            </span>
          </h2>
          
          <p className="text-[#A0A0A5] text-lg sm:text-xl max-w-3xl mx-auto mb-3">
            Nosso time acompanha toda a implementação — do setup à operação.
          </p>
          <p className="text-white font-semibold text-lg sm:text-xl max-w-3xl mx-auto">
            Grupo exclusivo com a equipe via WhatsApp para suporte direto.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Features Cards Futuristas */}
          <div className="space-y-5">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 8, scale: 1.02 }}
                className="group relative"
              >
                {/* Card Container */}
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.01)] border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.2)] transition-all duration-300 overflow-hidden">
                  
                  {/* Background glow effect */}
                  <motion.div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 0% 50%, ${feature.color}15, transparent 70%)`
                    }}
                  />

                  {/* Animated border glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(135deg, ${feature.color}30, transparent)`,
                      filter: 'blur(20px)'
                    }}
                  />

                  <div className="relative z-10 flex items-start gap-5">
                    {/* Icon Container - Futurista */}
                    <motion.div 
                      className="relative shrink-0"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center relative overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}10)`,
                          border: `1px solid ${feature.color}40`,
                          boxShadow: `0 8px 32px ${feature.color}30`
                        }}
                      >
                        {/* Animated background */}
                        <motion.div
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(135deg, transparent, ${feature.color}20, transparent)`
                          }}
                          animate={{
                            rotate: [0, 360]
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                        
                        <feature.icon 
                          className="w-8 h-8 relative z-10" 
                          style={{ color: feature.color }}
                          strokeWidth={2.5}
                        />

                        {/* Corner accents */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 rounded-tl-xl" style={{ borderColor: feature.color }} />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 rounded-br-xl" style={{ borderColor: feature.color }} />
                      </div>

                      {/* Pulse ring */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl"
                        style={{
                          border: `2px solid ${feature.color}`,
                          opacity: 0.3
                        }}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.3, 0, 0.3]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                      />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-white font-bold mb-2 text-xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all" style={{ backgroundImage: `linear-gradient(135deg, ${feature.color}, white)` }}>
                        {feature.title}
                      </h3>
                      <p className="text-[#8696a0] leading-relaxed">
                        {feature.description}
                      </p>

                      {/* Tech lines decoration */}
                      <div className="flex items-center gap-1 mt-3 opacity-50 group-hover:opacity-100 transition-opacity">
                        <div className="h-px flex-1" style={{ background: `linear-gradient(to right, ${feature.color}, transparent)` }} />
                        <div className="w-1 h-1 rounded-full" style={{ background: feature.color }} />
                        <div className="w-1 h-1 rounded-full" style={{ background: feature.color, opacity: 0.5 }} />
                      </div>
                    </div>

                    {/* Arrow indicator */}
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{
                        x: [0, 5, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity
                      }}
                    >
                      <Sparkles className="w-5 h-5" style={{ color: feature.color }} />
                    </motion.div>
                  </div>
                </div>

                {/* Outer glow - only on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-2xl -z-10"
                  style={{ background: `radial-gradient(circle, ${feature.color}20, transparent 70%)` }}
                />
              </motion.div>
            ))}

            {/* Stats Row - Futurista */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-[rgba(255,255,255,0.1)]"
            >
              {[
                { value: '< 2min', label: 'Tempo Resposta', icon: Zap, color: '#00c950' },
                { value: '24/7', label: 'Disponibilidade', icon: Clock, color: '#ff8534' },
                { value: '100%', label: 'Segurança', icon: Shield, color: '#9810FA' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="relative p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] text-center group hover:border-[rgba(255,255,255,0.2)] transition-all"
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <motion.div
                    className="w-10 h-10 mx-auto mb-2 rounded-lg flex items-center justify-center"
                    style={{
                      background: `${stat.color}15`,
                      border: `1px solid ${stat.color}30`
                    }}
                  >
                    <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
                  </motion.div>
                  <div className="text-white font-bold text-xl mb-1" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-[#8696a0] text-xs font-medium">
                    {stat.label}
                  </div>

                  {/* Glow on hover */}
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl"
                    style={{ background: `${stat.color}20` }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right - Futuristic Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative max-w-sm mx-auto">
              {/* Floating orbs background */}
              <motion.div
                className="absolute -top-20 -left-20 w-40 h-40 rounded-full blur-3xl opacity-30"
                style={{ background: 'radial-gradient(circle, #00c950, transparent)' }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity
                }}
              />
              <motion.div
                className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-30"
                style={{ background: 'radial-gradient(circle, #9810FA, transparent)' }}
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.5, 0.3, 0.5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 2
                }}
              />

              {/* Phone Container - Ultra Modern */}
              <motion.div 
                className="relative bg-gradient-to-br from-[#1a1a1f] to-[#0d0d10] rounded-[3rem] p-3 border-2"
                style={{ 
                  borderColor: 'rgba(0,201,80,0.3)',
                  boxShadow: '0 30px 80px rgba(0,201,80,0.4), 0 0 0 1px rgba(255,255,255,0.1)'
                }}
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#0d0d10] rounded-b-3xl z-30 border-x-2 border-b-2 border-[rgba(0,201,80,0.2)]" />

                {/* Screen */}
                <div className="relative bg-[#0b141a] rounded-[2.7rem] overflow-hidden">
                  
                  {/* Status Bar - Futurista */}
                  <div className="flex items-center justify-between px-8 pt-4 pb-2 relative z-10">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold text-sm">9:41</span>
                      <motion.div 
                        className="w-1.5 h-1.5 rounded-full bg-[#00c950]"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="18" height="14" viewBox="0 0 18 14" fill="white" opacity="0.9">
                        <rect width="4" height="14" rx="1.5"/>
                        <rect x="7" width="4" height="10" rx="1.5"/>
                        <rect x="14" width="4" height="7" rx="1.5"/>
                      </svg>
                      <div className="w-6 h-3 border-2 border-white rounded-sm relative">
                        <div className="absolute inset-0.5 bg-white rounded-sm" />
                        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-2 bg-white rounded-r" />
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Header - Modern */}
                  <div className="bg-gradient-to-r from-[#1f2c34] to-[#202c33] px-5 py-4 border-b border-[rgba(255,255,255,0.05)]">
                    <div className="flex items-center gap-4">
                      {/* Avatar com efeito */}
                      <motion.div 
                        className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#00c950] to-[#00bc7d] flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <img src={imgWiteLabelLogo} alt="WiteLabel" className="w-7 h-7 object-contain" />
                        
                        {/* Online indicator */}
                        <motion.div 
                          className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-[#00c950] rounded-full border-2 border-[#0b141a]"
                          animate={{
                            scale: [1, 1.2, 1],
                            boxShadow: ['0 0 0px #00c950', '0 0 8px #00c950', '0 0 0px #00c950']
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity
                          }}
                        />
                      </motion.div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-bold text-base flex items-center gap-2">
                          Suporte WiteLabel
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          >
                            <Sparkles className="w-4 h-4 text-[#00c950]" />
                          </motion.div>
                        </h4>
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-[#00c950]" />
                          <p className="text-[#00c950] text-xs font-semibold">online agora</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chat Area */}
                  <div 
                    className="p-5 min-h-[450px] flex flex-col justify-end gap-4 relative"
                    style={{
                      background: '#0b141a'
                    }}
                  >
                    {/* Grid pattern overlay */}
                    <div 
                      className="absolute inset-0 opacity-5"
                      style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                      }}
                    />

                    {/* Date Badge - Futurista */}
                    <div className="flex justify-center mb-3 relative z-10">
                      <motion.div 
                        className="bg-gradient-to-r from-[#202c33] to-[#1a252d] px-4 py-1.5 rounded-full border border-[rgba(255,255,255,0.1)]"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="text-[#8696a0] text-xs font-bold tracking-wide">HOJE</span>
                      </motion.div>
                    </div>

                    {/* Messages */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex relative z-10"
                    >
                      <div className="max-w-[85%] bg-gradient-to-br from-[#202c33] to-[#1a252d] rounded-2xl rounded-tl-md px-4 py-3 border border-[rgba(255,255,255,0.05)]">
                        <p className="text-white text-sm leading-relaxed mb-1.5">Olá! Bem-vindo ao suporte WiteLabel 👋</p>
                        <div className="flex items-center justify-between">
                          <span className="text-[#8696a0] text-xs">14:30</span>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex relative z-10"
                    >
                      <div className="max-w-[85%] bg-gradient-to-br from-[#202c33] to-[#1a252d] rounded-2xl rounded-tl-md px-4 py-3 border border-[rgba(255,255,255,0.05)]">
                        <p className="text-white text-sm leading-relaxed mb-1.5">Como posso ajudar você hoje?</p>
                        <span className="text-[#8696a0] text-xs">14:30</span>
                      </div>
                    </motion.div>

                    {/* User Message */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                      className="flex justify-end relative z-10"
                    >
                      <div className="max-w-[85%] bg-gradient-to-br from-[#00c950] to-[#00a843] rounded-2xl rounded-tr-md px-4 py-3 border border-[rgba(255,255,255,0.1)]">
                        <p className="text-white text-sm leading-relaxed mb-1.5">Preciso integrar o gateway 🚀</p>
                        <div className="flex items-center justify-end gap-2">
                          <span className="text-white/80 text-xs">14:31</span>
                          <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                            <path d="M5 7L1.5 3.5L3 2L5 4L9 0.5L10.5 2L5 7Z" fill="white" opacity="0.8"/>
                            <path d="M11 7L7.5 3.5L9 2L11 4L15 0.5L16.5 2L11 7Z" fill="white"/>
                          </svg>
                        </div>
                      </div>
                    </motion.div>

                    {/* Response */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 }}
                      className="flex relative z-10"
                    >
                      <div className="max-w-[85%] bg-gradient-to-br from-[#202c33] to-[#1a252d] rounded-2xl rounded-tl-md px-4 py-3 border border-[rgba(255,255,255,0.05)]">
                        <p className="text-white text-sm leading-relaxed mb-1.5">Perfeito! Vou te passar a documentação completa 📋</p>
                        <span className="text-[#8696a0] text-xs">14:32</span>
                      </div>
                    </motion.div>

                    {/* Typing Indicator - Enhanced */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.1 }}
                      className="flex relative z-10"
                    >
                      <div className="bg-gradient-to-br from-[#202c33] to-[#1a252d] rounded-2xl rounded-tl-md px-5 py-3 border border-[rgba(255,255,255,0.05)]">
                        <div className="flex gap-1.5">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              className="w-2.5 h-2.5 rounded-full bg-[#00c950]"
                              animate={{ 
                                y: [-3, 0, -3],
                                opacity: [0.5, 1, 0.5]
                              }}
                              transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                delay: i * 0.2
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Input Bar - Futurista */}
                  <div className="bg-gradient-to-r from-[#1f2c34] to-[#202c33] p-3 border-t border-[rgba(255,255,255,0.05)]">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 flex items-center gap-3 bg-[#2a3942] rounded-full px-5 py-3 border border-[rgba(255,255,255,0.05)]">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>
                        </svg>
                        <span className="flex-1 text-[#8696a0] text-sm">Mensagem</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8696a0" strokeWidth="2">
                          <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
                        </svg>
                      </div>
                      <motion.div 
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00c950] to-[#00bc7d] flex items-center justify-center relative overflow-hidden"
                        whileHover={{ scale: 1.1, rotate: 15 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-0 group-hover:opacity-20"
                          animate={{
                            rotate: [0, 360]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M12 19V5M5 12l7-7 7 7"/>
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Corner tech accents */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#00c950] rounded-tl-2xl opacity-50" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#9810FA] rounded-br-2xl opacity-50" />
              </motion.div>

              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: i % 2 === 0 ? '#00c950' : '#9810FA',
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    filter: 'blur(1px)'
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
