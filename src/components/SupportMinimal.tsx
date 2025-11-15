import { motion } from 'motion/react';
import { MessageCircle, Clock, Headphones, ArrowRight, Users, Zap } from 'lucide-react';
import { ThemeMode } from '../App';
import witelabelLogo from 'figma:asset/bb3f1e4d91d8cb4b6e7deebe33fca6227219583d.png';

interface SupportProps {
  theme: ThemeMode;
}

export default function SupportMinimal({ theme }: SupportProps) {
  const features = [
    {
      icon: MessageCircle,
      title: "Grupo WhatsApp Exclusivo",
      description: "Acesso direto à equipe técnica e estratégica em tempo real",
      color: "#00a884"
    },
    {
      icon: Clock,
      title: "Disponibilidade Total",
      description: "Suporte 24 horas por dia, 7 dias por semana sem interrupções",
      color: "#ff8534"
    },
    {
      icon: Headphones,
      title: "Especialistas Dedicados",
      description: "Time técnico especializado em gateways e integrações",
      color: "#9810FA"
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
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <span className="text-[#00c950] font-bold text-sm">Suporte 24/7 Online</span>
          </motion.div>

          <h2 className="text-white mb-6 font-bold leading-tight">
            <span className="bg-gradient-to-r from-[#EFD9FF] via-[#FED5A7] to-[#FFBF77] bg-clip-text text-transparent sm:text-[55px] text-[48px]">
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
          {/* Left - Feature Cards Premium - CENTERED */}
          <div className="space-y-6 order-1 lg:order-1 mx-auto max-w-2xl">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="group relative overflow-hidden p-6 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.15)] transition-all"
              >
                {/* Hover gradient */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `radial-gradient(circle at 50% 50%, ${feature.color}15, transparent 60%)` }}
                />

                <div className="relative flex flex-col items-center text-center gap-4">
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
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right - Phone Interativo - ADJUSTED TO LEFT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-center order-2 lg:order-2"
          >
            {/* Background Glow */}
            <motion.div
              className="absolute inset-0 -z-10"
              animate={{
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl"
                style={{
                  background: 'radial-gradient(circle, rgba(0,168,132,0.3) 0%, rgba(0,201,80,0.15) 40%, transparent 70%)'
                }}
              />
            </motion.div>

            {/* Phone Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-[340px] h-[720px] rounded-[3rem] bg-gradient-to-br from-[#1a1a1d] to-[#0f0f11] p-3 shadow-2xl border-4 border-[#2a2a2d]"
              style={{
                boxShadow: '0 30px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.1) inset'
              }}
            >
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-[#0f0f11] rounded-b-3xl z-30" />

              {/* Screen */}
              <div className="relative h-full rounded-[2.5rem] overflow-hidden bg-[#0b141a]">
                {/* Status Bar */}
                <div className="absolute top-0 left-0 right-0 px-6 pt-4 pb-2 flex items-center justify-between z-20">
                  <span className="text-sm font-semibold text-white">14:34</span>
                  <div className="flex items-center gap-1.5">
                    <svg width="18" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" opacity="0.9">
                      <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
                      <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
                      <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
                      <path d="M12 20h.01"/>
                    </svg>
                    <div className="w-4 h-3 rounded-sm relative border border-white">
                      <div className="absolute inset-0.5 rounded-[1px] bg-white" />
                    </div>
                  </div>
                </div>

                {/* WhatsApp Header */}
                <div className="bg-[#202c33] px-4 py-3 mt-12">
                  <div className="flex items-center gap-3">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8696a0" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M15 18l-6-6 6-6"/>
                      </svg>
                    </motion.button>
                    
                    {/* Group Avatar */}
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#D74B18]/40">
                        <img src={witelabelLogo} alt="WiteLabel" className="w-full h-full object-cover" />
                      </div>
                      <motion.div
                        className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#00c950] border-2 border-[#202c33]"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-semibold text-sm mb-0.5">WiteLabel x Sua empresa</h4>
                      <p className="text-[#8696a0] text-xs">Você, Suporte +5</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <motion.button whileTap={{ scale: 0.95 }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                      </motion.button>
                      <svg width="3" height="18" viewBox="0 0 4 20" fill="#8696a0">
                        <circle cx="2" cy="2" r="2"/><circle cx="2" cy="10" r="2"/><circle cx="2" cy="18" r="2"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div 
                  className="px-4 py-4 flex flex-col justify-end h-[570px]"
                  style={{
                    background: '#0b141a'
                  }}
                >
                  {/* Date Badge */}
                  <div className="flex justify-center mb-4">
                    <motion.div 
                      className="bg-[#202c33] px-3 py-1 rounded-lg shadow-lg"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="text-[#8696a0] text-[10px] font-bold tracking-wider">HOJE</span>
                    </motion.div>
                  </div>

                  <div className="space-y-2.5">
                    {/* Welcome Message */}
                    <motion.div 
                      className="flex flex-col items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="max-w-[85%] bg-[#202c33] rounded-xl rounded-tl-md px-[13px] py-[13px] shadow-md">
                        <p className="text-[#00c950] text-sm font-bold mb-2">Suporte</p>
                        <p className="text-white text-base leading-relaxed mb-2">
                          Bem-vindo ao suporte 24/7!
                        </p>
                        <p className="text-[rgb(255,255,255)] leading-relaxed mb-2 text-[15px]">
                          Estamos online para ajudar com setup e integrações.
                        </p>
                        <span className="text-[#8696a0] text-[10px]">14:30</span>
                      </div>
                    </motion.div>

                    {/* User Question */}
                    <motion.div 
                      className="flex justify-end"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="max-w-[85%] bg-[#005c4b] rounded-xl rounded-tr-md px-[13px] py-[13px] shadow-md">
                        <p className="text-white text-base leading-relaxed mb-1.5">
                          Como integro a API de pagamentos?
                        </p>
                        <div className="flex items-center justify-end gap-1.5">
                          <span className="text-[#d1f4cc] text-[10px]">14:32</span>
                          <svg width="14" height="10" viewBox="0 0 16 11" fill="none">
                            <path d="M5.5 8L2 4.5L3.5 3L5.5 5L9.5 1L11 2.5L5.5 8Z" fill="#53bdeb"/>
                            <path d="M11 8L7.5 4.5L9 3L11 5L15 1L16.5 2.5L11 8Z" fill="#53bdeb"/>
                          </svg>
                        </div>
                      </div>
                    </motion.div>

                    {/* Tech Response */}
                    <motion.div 
                      className="flex flex-col items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="max-w-[85%] bg-[#202c33] rounded-xl rounded-tl-md px-[13px] py-[13px] shadow-md">
                        <p className="text-[#00c950] text-sm font-bold mb-2">Suporte</p>
                        <p className="text-white text-base leading-relaxed mb-1.5">
                          Vou te enviar o guia completo agora!
                        </p>
                        <p className="text-[rgb(255,255,255)] leading-relaxed mb-1 text-[15px]">
                        </p>
                        <span className="text-[#8696a0] text-[10px]">14:33</span>
                      </div>
                    </motion.div>

                    {/* Typing Indicator */}
                    <motion.div 
                      className="flex flex-col items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 }}
                    >
                      <div className="bg-[#202c33] rounded-xl rounded-tl-md px-4 py-3 shadow-md">
                        <div className="flex gap-1.5">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              className="w-2 h-2 rounded-full bg-[#8696a0]"
                              animate={{ 
                                y: [-3, 0, -3]
                              }}
                              transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                delay: i * 0.15,
                                ease: "easeInOut"
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Input Bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#202c33] px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 flex items-center gap-2 bg-[#2a3942] rounded-full px-4 py-2.5">
                      <motion.button whileTap={{ scale: 0.95 }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8696a0" strokeWidth="2" strokeLinecap="round">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>
                        </svg>
                      </motion.button>
                      <span className="flex-1 text-[#8696a0] text-xs">Mensagem</span>
                      <motion.button whileTap={{ scale: 0.95 }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8696a0" strokeWidth="2" strokeLinecap="round">
                          <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
                        </svg>
                      </motion.button>
                    </div>
                    
                    <motion.button
                      className="w-9 h-9 rounded-full bg-[#00a884] flex items-center justify-center flex-shrink-0"
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                        <line x1="12" y1="19" x2="12" y2="23"/>
                        <line x1="8" y1="23" x2="16" y2="23"/>
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}