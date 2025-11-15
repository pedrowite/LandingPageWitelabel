import { motion } from 'motion/react';
import { MessageCircle, Clock, Headphones, CheckCircle, Phone, Video, MoreVertical, Search, Smile, Paperclip, Mic } from 'lucide-react';
import { ThemeMode } from '../App';

interface SupportProps {
  theme: ThemeMode;
}

const supportFeatures = [
  {
    icon: MessageCircle,
    title: "Grupo WhatsApp Exclusivo",
    description: "Acesso direto à equipe técnica e estratégica em tempo real",
    color: "#00c950"
  },
  {
    icon: Clock,
    title: "Disponibilidade 24/7",
    description: "Suporte disponível 24 horas por dia, 7 dias por semana",
    color: "#ff8534"
  },
  {
    icon: Headphones,
    title: "Especialistas Dedicados",
    description: "Time técnico especializado em gateways e integrações",
    color: "#9810FA"
  }
];

export default function Support({ theme }: SupportProps) {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[rgba(109,3,245,0.2)] to-[rgba(215,75,24,0.2)] border border-[rgba(255,255,255,0.2)] mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Headphones className="text-[#ff8534]" size={24} />
            <span className="text-white font-bold text-lg">Suporte 24/7 Online</span>
          </motion.div>

          <h2 className="text-white mb-6 leading-tight font-bold sm:text-[55px] px-4 text-[48px]">
            <span className="bg-gradient-to-r from-[#FFFFFF] via-[#FED5A7] to-[#FFBF77] bg-clip-text text-transparent">
              Suporte WiteLabel
            </span>
          </h2>
          
          <p className="text-[#A0A0A5] text-xl max-w-3xl mx-auto mb-4">
            Nosso time acompanha toda a implementação — do setup à operação.
          </p>
          <p className="text-white font-bold text-xl max-w-3xl mx-auto">
            Grupo exclusivo com a equipe via WhatsApp para suporte direto.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Right - Features (Security Style) */}
          <div className="space-y-6">
            {supportFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ x: -10 }}
                className="group relative overflow-hidden p-6 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.15)] transition-all"
              >
                {/* Hover gradient */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `radial-gradient(circle at 100% 50%, ${feature.color}15, transparent 60%)` }}
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

            {/* CTA Button */}
            <motion.a
              href="/formulario"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 0 50px rgba(152,16,250,0.5)'
              }}
              whileTap={{ scale: 0.98 }}
              className="group mt-8 block relative overflow-hidden px-8 py-5 rounded-xl border border-[rgba(152,16,250,0.6)] transition-all"
              style={{
                background: 'rgba(152,16,250,0.25)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 0 40px rgba(152,16,250,0.3)'
              }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#9810FA]/50 to-[#7a0dd4]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                    <MessageCircle className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">Falar com Suporte</h3>
                    <p className="text-white/80 text-sm">Resposta em minutos, não em dias</p>
                  </div>
                </div>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </motion.div>
              </div>
            </motion.a>
          </div>

          {/* Left - WhatsApp 2D Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-start"
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

            <div className="relative max-w-[340px]">
              {/* Phone Container */}
              <motion.div 
                className="relative bg-black rounded-[3.5rem] p-3 shadow-2xl w-[340px] h-[620px]"
                style={{
                  boxShadow: '0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.1), 0 0 0 12px rgba(0,0,0,0.4)'
                }}
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Dynamic Island */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-30 flex items-center justify-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm" />
                </div>

                {/* Screen */}
                <div className="relative bg-[#0a1014] rounded-[3rem] overflow-hidden">
                  
                  {/* Status Bar */}
                  <div className="relative flex items-center justify-between px-8 pt-4 pb-2 bg-[#0a1014] z-20">
                    <span className="text-white text-xs font-semibold">9:41</span>
                    <div className="flex items-center gap-2">
                      {/* Signal */}
                      <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
                        <rect width="3" height="12" rx="1" fill="white" opacity="0.9"/>
                        <rect x="5" width="3" height="9" rx="1" fill="white" opacity="0.9"/>
                        <rect x="10" width="3" height="6" rx="1" fill="white" opacity="0.9"/>
                        <rect x="15" width="2" height="3" rx="1" fill="white" opacity="0.9"/>
                      </svg>
                      {/* WiFi */}
                      <svg width="16" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" opacity="0.9">
                        <path d="M5 13a10 10 0 0 1 14 0M8.5 16.5a5 5 0 0 1 7 0M12 20h.01" strokeLinecap="round"/>
                      </svg>
                      {/* Battery */}
                      <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
                        <rect x="0.5" y="0.5" width="20" height="11" rx="2.5" stroke="white" strokeWidth="1" opacity="0.5"/>
                        <rect x="2.5" y="2.5" width="14" height="7" rx="1.5" fill="white" opacity="0.9"/>
                        <rect x="22" y="4" width="2.5" height="4" rx="1" fill="white" opacity="0.5"/>
                      </svg>
                    </div>
                  </div>

                  {/* WhatsApp Header */}
                  <div className="relative bg-[#202c33] px-4 py-3">
                    <div className="flex items-center gap-3">
                      {/* Back Arrow */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8696a0" strokeWidth="2" strokeLinecap="round">
                          <path d="M15 18l-6-6 6-6"/>
                        </svg>
                      </motion.button>

                      {/* Group Avatar */}
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00c950] to-[#00a884] flex items-center justify-center border-2 border-[#00a884]">
                          <MessageCircle className="w-5 h-5 text-white" strokeWidth={2.5} />
                        </div>
                        <motion.div 
                          className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#00c950] border-2 border-[#202c33]"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.8, 1, 0.8]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity
                          }}
                        />
                      </div>

                      {/* Group Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-semibold text-[15px] leading-tight truncate">
                          Suporte WiteLabel
                        </h4>
                        <p className="text-[#8696a0] text-xs truncate">
                          Você, Carlos, Ana +3
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-4">
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Video className="w-5 h-5 text-[#8696a0]" strokeWidth={2} />
                        </motion.button>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Phone className="w-5 h-5 text-[#8696a0]" strokeWidth={2} />
                        </motion.button>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <MoreVertical className="w-5 h-5 text-[#8696a0]" strokeWidth={2} />
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* Chat Area */}
                  <div 
                    className="relative px-3 pt-2 pb-4 min-h-[420px] flex flex-col justify-start gap-2"
                    style={{
                      background: '#0b141a',
                      backgroundImage: `
                        radial-gradient(circle at 20% 30%, rgba(0,168,132,0.02) 0%, transparent 50%),
                        radial-gradient(circle at 80% 70%, rgba(0,201,80,0.02) 0%, transparent 50%),
                        url("data:image/svg+xml,%3Csvg width='30' height='30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 15m-1 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0' fill='%23ffffff' opacity='.008'/%3E%3C/svg%3E")
                      `
                    }}
                  >
                    {/* Date Divider */}
                    <div className="flex justify-center mb-1">
                      <div className="bg-[#202c33]/95 backdrop-blur-sm px-3 py-1 rounded-lg shadow-lg">
                        <span className="text-[#8696a0] text-[11px] font-semibold tracking-wide">HOJE</span>
                      </div>
                    </div>

                    {/* Message 1 - Carlos */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                      className="flex flex-col items-start mb-1"
                    >
                      <div className="max-w-[85%]">
                        <div className="bg-[#202c33] rounded-xl rounded-tl-md px-3 py-2 shadow-md">
                          <p className="text-[#00c950] text-[13px] font-semibold mb-0.5">Carlos - Suporte Técnico</p>
                          <p className="text-white text-[13.5px] leading-relaxed mb-1">
                            Olá! Bem-vindo ao grupo de suporte WiteLabel 👋
                          </p>
                          <div className="flex items-center justify-end gap-1">
                            <span className="text-[#8696a0] text-[10px]">14:32</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Message 2 - Ana */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7, duration: 0.4 }}
                      className="flex flex-col items-start mb-1"
                    >
                      <div className="max-w-[85%]">
                        <div className="bg-[#202c33] rounded-xl rounded-tl-md px-3 py-2 shadow-md">
                          <p className="text-[#ff8534] text-[13px] font-semibold mb-0.5">Ana - Estratégia</p>
                          <p className="text-white text-[13.5px] leading-relaxed mb-1">
                            Qualquer dúvida sobre integração ou configuração, estamos aqui 24/7! 🚀
                          </p>
                          <div className="flex items-center justify-end gap-1">
                            <span className="text-[#8696a0] text-[10px]">14:33</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Message 3 - User */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9, duration: 0.4 }}
                      className="flex flex-col items-end mb-1"
                    >
                      <div className="max-w-[85%]">
                        <div className="bg-[#005c4b] rounded-xl rounded-tr-md px-3 py-2 shadow-md">
                          <p className="text-white text-[13.5px] leading-relaxed mb-1">
                            Perfeito! Como faço o setup inicial do gateway?
                          </p>
                          <div className="flex items-center justify-end gap-1">
                            <span className="text-[#8696a0] text-[10px]">14:34</span>
                            <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                              <path d="M5.4 7.4L1 3l.7-.7 3.7 3.7L14.3.1l.7.7-9.6 6.6z" fill="#53bdeb"/>
                              <path d="M10.4 7.4L6 3l.7-.7 3.7 3.7L19.3.1l.7.7-9.6 6.6z" fill="#53bdeb"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Message 4 - Carlos Response */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1, duration: 0.4 }}
                      className="flex flex-col items-start mb-1"
                    >
                      <div className="max-w-[85%]">
                        <div className="bg-[#202c33] rounded-xl rounded-tl-md px-3 py-2 shadow-md">
                          <p className="text-[#00c950] text-[13px] font-semibold mb-0.5">Carlos - Suporte Técnico</p>
                          <p className="text-white text-[13.5px] leading-relaxed mb-1">
                            Vou te enviar o guia completo agora! 📋
                          </p>
                          <div className="flex items-center justify-end gap-1">
                            <span className="text-[#8696a0] text-[10px]">14:34</span>
                            <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                              <path d="M5.4 7.4L1 3l.7-.7 3.7 3.7L14.3.1l.7.7-9.6 6.6z" fill="#53bdeb"/>
                              <path d="M10.4 7.4L6 3l.7-.7 3.7 3.7L19.3.1l.7.7-9.6 6.6z" fill="#53bdeb"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Typing Indicator */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.3, duration: 0.3 }}
                      className="flex flex-col items-start"
                    >
                      <div className="bg-[#202c33] rounded-xl rounded-tl-md px-4 py-3 shadow-md">
                        <div className="flex items-center gap-1">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              className="w-2 h-2 rounded-full bg-[#8696a0]"
                              animate={{
                                y: [0, -4, 0],
                                opacity: [0.4, 1, 0.4]
                              }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: i * 0.15
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Input Bar */}
                  <div className="relative bg-[#202c33] px-2 py-2.5">
                    <div className="flex items-center gap-2">
                      {/* Plus Button */}
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-9 h-9 rounded-full bg-[#00a884] flex items-center justify-center flex-shrink-0"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                          <line x1="12" y1="5" x2="12" y2="19"/>
                          <line x1="5" y1="12" x2="19" y2="12"/>
                        </svg>
                      </motion.button>

                      {/* Input Field */}
                      <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2.5 flex items-center gap-2">
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                          <Smile className="w-5 h-5 text-[#8696a0]" strokeWidth={2} />
                        </motion.button>
                        <input 
                          type="text" 
                          placeholder="Mensagem"
                          className="flex-1 bg-transparent text-white text-sm placeholder-[#8696a0] outline-none"
                          disabled
                        />
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                          <Paperclip className="w-5 h-5 text-[#8696a0]" strokeWidth={2} />
                        </motion.button>
                      </div>

                      {/* Voice Button */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-9 h-9 rounded-full bg-[#00a884] flex items-center justify-center flex-shrink-0"
                      >
                        <Mic className="w-5 h-5 text-white" strokeWidth={2} />
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Phone Reflection */}
                <div 
                  className="absolute inset-0 rounded-[3.5rem] pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%, rgba(0,0,0,0.3) 100%)'
                  }}
                />
              </motion.div>

              {/* Floating Badge - 24/7 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -top-4 -right-4 z-10"
              >
                <motion.div
                  animate={{
                    y: [0, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00c950] to-[#00bc7d] rounded-2xl blur-xl opacity-60" />
                  
                  {/* Badge */}
                  <div className="relative bg-gradient-to-br from-[#00c950] to-[#00bc7d] rounded-2xl px-4 py-3 shadow-2xl border border-white/20">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-white" strokeWidth={2.5} />
                      <div>
                        <p className="text-white font-bold text-sm leading-none">24/7</p>
                        <p className="text-white/90 text-xs leading-none mt-0.5">Online</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}