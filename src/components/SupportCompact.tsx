import { motion } from 'motion/react';
import { MessageCircle, Clock, Headphones } from 'lucide-react';
import { ThemeMode } from '../App';
import imgWiteLabelLogo from "figma:asset/bb3f1e4d91d8cb4b6e7deebe33fca6227219583d.png";

interface SupportProps {
  theme: ThemeMode;
}

export default function SupportCompact({ theme }: SupportProps) {
  const features = [
    {
      icon: MessageCircle,
      title: "Grupo WhatsApp Exclusivo",
      description: "Acesso direto à equipe técnica e estratégica em tempo real"
    },
    {
      icon: Clock,
      title: "Disponibilidade Total",
      description: "Suporte 24 horas por dia, 7 dias por semana sem interrupções"
    },
    {
      icon: Headphones,
      title: "Especialistas Dedicados",
      description: "Time técnico especializado em gateways e integrações"
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

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Minimal Feature Cards */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-center gap-4 p-5 rounded-xl border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.2)] transition-all bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.04)]">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-[rgba(255,255,255,0.05)] flex items-center justify-center group-hover:bg-[rgba(255,255,255,0.08)] transition-all">
                      <feature.icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-1">{feature.title}</h3>
                    <p className="text-[#8696a0] text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-3 mt-8 pt-8 border-t border-[rgba(255,255,255,0.1)]"
            >
              {[
                { value: '< 2min', label: 'Tempo Resposta', color: '#00c950' },
                { value: '24/7', label: 'Disponibilidade', color: '#ff8534' },
                { value: '100%', label: 'Segurança', color: '#9810FA' }
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 rounded-xl border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.15)] transition-all">
                  <div className="text-2xl font-bold mb-1" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-[#8696a0] text-xs font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Compact WhatsApp Phone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative max-w-[280px] mx-auto">
              {/* WhatsApp 24/7 Card - Above Phone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -top-16 left-1/2 -translate-x-1/2 z-20 w-[220px]"
              >
                <div className="bg-[#00a884] rounded-2xl p-4 shadow-2xl border border-[rgba(255,255,255,0.2)]">
                  <div className="flex items-center gap-3">
                    {/* WhatsApp Logo */}
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#00a884"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M19.938 4.062A9.937 9.937 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.99-1.308A9.965 9.965 0 0 0 12 22c5.523 0 10-4.477 10-10a9.937 9.937 0 0 0-2.062-5.938zM12 20.2a8.2 8.2 0 0 1-4.19-1.148l-.3-.178-3.12.818.833-3.044-.195-.312A8.163 8.163 0 0 1 3.8 12c0-4.53 3.67-8.2 8.2-8.2a8.2 8.2 0 0 1 5.805 13.986A8.163 8.163 0 0 1 12 20.2z" fill="#00a884"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-base leading-tight mb-0.5">Suporte 24/7</h3>
                      <p className="text-white/80 text-xs leading-tight">Sempre disponível</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Phone Container - SMALLER */}
              <motion.div 
                className="relative bg-[#1a1a1a] rounded-[42px] p-3 border-[5px] border-[#2a2a2a]"
                style={{ 
                  boxShadow: '0 25px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)'
                }}
                animate={{
                  y: [0, -8, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Notch - Smaller */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#1a1a1a] rounded-b-2xl z-30" />

                {/* Screen */}
                <div className="relative bg-[#0b141a] rounded-[36px] overflow-hidden h-[520px]">
                  
                  {/* Status Bar */}
                  <div className="flex items-center justify-between px-6 pt-3 pb-2">
                    <span className="text-white font-semibold text-xs">9:41</span>
                    <div className="flex items-center gap-1.5">
                      <svg width="16" height="12" viewBox="0 0 18 14" fill="white" opacity="0.9">
                        <rect width="3.5" height="14" rx="1.2"/>
                        <rect x="6" width="3.5" height="10" rx="1.2"/>
                        <rect x="12" width="3.5" height="7" rx="1.2"/>
                      </svg>
                      <div className="w-6 h-3 border-2 border-white rounded-sm relative">
                        <div className="absolute inset-0.5 bg-white rounded-[2px]" />
                        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-2 bg-white rounded-r" />
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Header - Compact */}
                  <div className="bg-[#202c33] px-3 py-2.5 border-b border-[rgba(255,255,255,0.05)]">
                    <div className="flex items-center gap-2.5">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M15 18l-6-6 6-6"/>
                      </svg>
                      
                      <div className="relative w-9 h-9 rounded-full bg-[#202c33] flex items-center justify-center border-2 border-[#00a884]">
                        <img src={imgWiteLabelLogo} alt="WiteLabel" className="w-5 h-5 object-contain" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-semibold text-sm">Suporte WiteLabel</h4>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-[#00c950]" />
                          <p className="text-[#8696a0] text-[10px]">online</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8696a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8696a0" strokeWidth="2.5" strokeLinecap="round">
                          <circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Chat Content - Compact */}
                  <div 
                    className="p-3 h-[390px] flex flex-col justify-end gap-2.5"
                    style={{
                      background: '#0b141a',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h50v50H0z' fill='%230b141a'/%3E%3Cpath d='M25 25m-1 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0' fill='%23ffffff' opacity='.01'/%3E%3C/svg%3E")`
                    }}
                  >
                    {/* Date */}
                    <div className="flex justify-center mb-1">
                      <div className="bg-[#202c33] px-2.5 py-1 rounded-lg">
                        <span className="text-[#8696a0] text-[10px] font-medium">HOJE</span>
                      </div>
                    </div>

                    {/* Message 1 */}
                    <motion.div
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex flex-col items-start"
                    >
                      <div className="max-w-[82%] bg-[#202c33] rounded-lg rounded-tl-sm px-2.5 py-1.5">
                        <p className="text-[#9810FA] text-[10px] font-bold mb-0.5">~ João (Tech Lead)</p>
                        <p className="text-white text-xs leading-snug mb-0.5">Olá! Bem-vindo ao suporte 👋</p>
                        <span className="text-[#8696a0] text-[9px]">14:30</span>
                      </div>
                    </motion.div>

                    {/* Message 2 */}
                    <motion.div
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex flex-col items-start"
                    >
                      <div className="max-w-[82%] bg-[#202c33] rounded-lg rounded-tl-sm px-2.5 py-1.5">
                        <p className="text-[#ff8534] text-[10px] font-bold mb-0.5">~ Maria (Suporte)</p>
                        <p className="text-white text-xs leading-snug mb-0.5">Estamos aqui 24/7! 🚀</p>
                        <span className="text-[#8696a0] text-[9px]">14:30</span>
                      </div>
                    </motion.div>

                    {/* User Message */}
                    <motion.div
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                      className="flex justify-end"
                    >
                      <div className="max-w-[82%] bg-[#005c4b] rounded-lg rounded-tr-sm px-2.5 py-1.5">
                        <p className="text-white text-xs leading-snug mb-0.5">Preciso integrar o gateway</p>
                        <div className="flex items-center justify-end gap-1">
                          <span className="text-[#8696a0] text-[9px]">14:31</span>
                          <svg width="14" height="8" viewBox="0 0 16 9" fill="none">
                            <path d="M5.5 6L2 2.5L3.5 1L5.5 3L9.5 0L11 1.5L5.5 6Z" fill="#53bdeb"/>
                            <path d="M11 6L7.5 2.5L9 1L11 3L15 0L16.5 1.5L11 6Z" fill="#53bdeb"/>
                          </svg>
                        </div>
                      </div>
                    </motion.div>

                    {/* Message 3 */}
                    <motion.div
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 }}
                      className="flex flex-col items-start"
                    >
                      <div className="max-w-[82%] bg-[#202c33] rounded-lg rounded-tl-sm px-2.5 py-1.5">
                        <p className="text-[#00c950] text-[10px] font-bold mb-0.5">~ Pedro (Developer)</p>
                        <p className="text-white text-xs leading-snug mb-0.5">Vou passar a documentação! 📋</p>
                        <span className="text-[#8696a0] text-[9px]">14:32</span>
                      </div>
                    </motion.div>

                    {/* Link Preview */}
                    <motion.div
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1 }}
                      className="flex flex-col items-start"
                    >
                      <div className="max-w-[82%] bg-[#202c33] rounded-lg rounded-tl-sm px-2.5 py-1.5">
                        <p className="text-[#9810FA] text-[10px] font-bold mb-1">~ João (Tech Lead)</p>
                        <div className="bg-[#0b141a] rounded-md p-1.5 mb-1 border-l-2 border-[#00a884]">
                          <p className="text-[#00a884] text-[10px] font-bold mb-0.5">📚 Docs API</p>
                          <p className="text-[#8696a0] text-[9px]">docs.witelabel.com.br</p>
                        </div>
                        <p className="text-white text-xs leading-snug mb-0.5">Tudo que precisa!</p>
                        <span className="text-[#8696a0] text-[9px]">14:32</span>
                      </div>
                    </motion.div>

                    {/* Typing */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.3 }}
                      className="flex flex-col items-start"
                    >
                      <div className="bg-[#202c33] rounded-lg rounded-tl-sm px-3 py-2">
                        <p className="text-[#ff8534] text-[10px] font-bold mb-1">~ Maria digitando...</p>
                        <div className="flex gap-1">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              className="w-1.5 h-1.5 rounded-full bg-[#8696a0]"
                              animate={{ 
                                y: [-1.5, 0, -1.5],
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

                  {/* Input Bar - Compact */}
                  <div className="bg-[#202c33] p-1.5">
                    <div className="flex items-center gap-1.5">
                      <div className="flex-1 flex items-center gap-2 bg-[#2a3942] rounded-full px-3 py-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8696a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>
                        </svg>
                        <span className="flex-1 text-[#8696a0] text-xs">Mensagem</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8696a0" strokeWidth="2">
                          <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
                        </svg>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-[#00a884] flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
