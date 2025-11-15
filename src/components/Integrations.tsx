import { motion } from 'motion/react';
import { Network, Database, Webhook, CreditCard, Building2, Zap } from 'lucide-react';
import { ThemeMode } from '../App';
import imgEfi from "figma:asset/c99619d4d756ff9e851fed29cfbc97d56adf4913.png";
import imgPagarme from "figma:asset/2eb532856fbd665ccbd38e36000295c41ecedbb4.png";
import imgPagseguro from "figma:asset/2bbb21e6ab2863101c9f9874b9e7488f39856dcd.png";
import imgOwemPay from "figma:asset/aba541fabad628a95c14818dfa98e42e9def7368.png";
import imgAdyen from "figma:asset/8a70bb0d3ae71db5278a8427d9596263ec896e2d.png";
import imgMicrocash from "figma:asset/f04770e2ada84b5f9fb8adecbc145d9d25ebce76.png";
import imgWiteLabelLogo from "figma:asset/bb3f1e4d91d8cb4b6e7deebe33fca6227219583d.png";
import imgLogoZedy from "figma:asset/a2d35b47af38296eeafad8093032adbdad2f9544.png";
import imgLogoYampi from "figma:asset/b40a67c0e26cf35a8cdb24952e86abaf3660c4d3.png";
import imgLogoLuna from "figma:asset/e114b97964c8a58607332fc5b52c8ca6bd900697.png";
import imgLogoVega from "figma:asset/fbac590d3c0223fecff2e561ec0d5587784cffb3.png";

interface IntegrationsProps {
  theme: ThemeMode;
}

const bankProviders = [
  { name: "Adyen", logo: imgAdyen },
  { name: "Microcash", logo: imgMicrocash },
  { name: "EFI Bank", logo: imgEfi },
  { name: "Pagar.me", logo: imgPagarme },
  { name: "PagSeguro", logo: imgPagseguro },
  { name: "OwemPay", logo: imgOwemPay }
];

const integrationFeatures = [
  {
    icon: Network,
    title: "Conexões Seguras",
    description: "Criptografia ponta a ponta",
    color: "#9810FA"
  },
  {
    icon: Webhook,
    title: "Webhooks em Tempo Real",
    description: "Notificações instantâneas",
    color: "#ff8534"
  },
  {
    icon: Database,
    title: "APIs Customizadas",
    description: "Integração facilitada",
    color: "#6D03F5"
  }
];

export default function Integrations({ theme }: IntegrationsProps) {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[rgba(255,133,52,0.2)] to-[rgba(152,16,250,0.2)] border border-[rgba(255,255,255,0.2)] mb-8">
            <Zap className="w-5 h-5 text-[#ff8534]" strokeWidth={2.5} />
            <span className="text-white font-bold text-lg">Integrações</span>
          </div>

          <h2 className="text-white mb-6 leading-tight text-[55px] font-bold">
            Integrações com{' '}
            <span className="bg-gradient-to-r from-[#EFD9FF] via-[#FED5A7] to-[#FFBF77] bg-clip-text text-transparent">
              Checkouts e Bancos
            </span>
          </h2>
          <p className="text-[#A0A0A5] text-lg max-w-3xl mx-auto">
            Conecte-se aos principais provedores do mercado com <span className="text-white font-semibold">APIs customizadas</span>
          </p>
        </motion.div>

        {/* Solar System Integration Visualization */}
        <div className="relative mb-32 py-16">
          <div className="relative w-full max-w-6xl mx-auto h-[600px]">
            {/* Center Hub - WiteLabel Logo */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="relative">
                {/* Multi-layer outer glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff6900] to-[#6D03F5] rounded-full blur-3xl opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff8534] via-[#9810FA] to-[#6D03F5] rounded-full blur-2xl opacity-30 animate-pulse" />
                
                {/* Center sphere with WiteLabel logo */}
                <div className="relative w-36 h-36 rounded-full bg-[#0B0B0E] border-4 border-white/10 flex items-center justify-center shadow-2xl overflow-hidden">
                  {/* Inner gradient ring */}
                  <div className="absolute inset-2 rounded-full border-2 border-transparent bg-gradient-to-br from-[#ff8534] via-[#9810FA] to-[#6D03F5] opacity-20" />
                  
                  {/* Logo container */}
                  <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.05)] border border-white/20 flex items-center justify-center backdrop-blur-sm">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ff8534]/20 via-transparent to-[#9810FA]/20" />
                    <img 
                      src={imgWiteLabelLogo} 
                      alt="WiteLabel" 
                      className="w-16 h-16 relative z-10 rounded-full object-cover"
                    />
                  </div>

                  {/* Pulse ring animation */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-[#ff8534]/50"
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  />
                </div>

                {/* Rotating ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-dashed border-white/10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ width: '148px', height: '148px', left: '-6px', top: '-6px' }}
                />

                {/* Data flow particles */}
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#ff8534] to-[#9810FA]"
                    style={{
                      left: '50%',
                      top: '50%',
                      marginLeft: '-3px',
                      marginTop: '-3px'
                    }}
                    animate={{
                      x: [0, Math.cos(i * Math.PI / 2) * 60, 0],
                      y: [0, Math.sin(i * Math.PI / 2) * 60, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 1,
                      ease: "linear"
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Inner Orbit - Checkouts (4 plataformas) */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ width: '400px', height: '400px' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {/* Orbit ring */}
              <div className="absolute inset-0 rounded-full border border-[rgba(109,3,245,0.3)]" 
                   style={{
                     boxShadow: '0 0 20px rgba(109,3,245,0.2), inset 0 0 20px rgba(109,3,245,0.1)'
                   }}
              />
              
              {/* Zedy - Topo */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6D03F5] to-[#9810FA] rounded-xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
                  <div className="relative w-20 h-20 rounded-xl bg-white flex items-center justify-center shadow-xl border-2 border-[#9810FA]/50 overflow-hidden">
                    <img src={imgLogoZedy} alt="Zedy" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="text-white text-xs font-bold bg-[rgba(109,3,245,0.3)] px-2 py-1 rounded-full border border-[#9810FA]">Zedy</span>
                  </div>
                </div>
              </motion.div>

              {/* Yampi - Baixo */}
              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6D03F5] to-[#9810FA] rounded-xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
                  <div className="relative w-20 h-20 rounded-xl bg-white flex items-center justify-center shadow-xl border-2 border-[#9810FA]/50 overflow-hidden">
                    <img src={imgLogoYampi} alt="Yampi" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="text-white text-xs font-bold bg-[rgba(109,3,245,0.3)] px-2 py-1 rounded-full border border-[#9810FA]">Yampi</span>
                  </div>
                </div>
              </motion.div>

              {/* Luna - Esquerda */}
              <motion.div
                className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6D03F5] to-[#9810FA] rounded-xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
                  <div className="relative w-20 h-20 rounded-xl bg-white flex items-center justify-center shadow-xl border-2 border-[#9810FA]/50 overflow-hidden">
                    <img src={imgLogoLuna} alt="Luna" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="text-white text-xs font-bold bg-[rgba(109,3,245,0.3)] px-2 py-1 rounded-full border border-[#9810FA]">Luna</span>
                  </div>
                </div>
              </motion.div>

              {/* Vega - Direita */}
              <motion.div
                className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6D03F5] to-[#9810FA] rounded-xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
                  <div className="relative w-20 h-20 rounded-xl bg-white flex items-center justify-center shadow-xl border-2 border-[#9810FA]/50 overflow-hidden">
                    <img src={imgLogoVega} alt="Vega" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="text-white text-xs font-bold bg-[rgba(109,3,245,0.3)] px-2 py-1 rounded-full border border-[#9810FA]">Vega</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Outer Orbit - Banks */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ width: '650px', height: '650px' }}
              animate={{ rotate: -360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            >
              {/* Orbit ring */}
              <div className="absolute inset-0 rounded-full border border-[rgba(255,105,0,0.3)]"
                   style={{
                     boxShadow: '0 0 20px rgba(255,105,0,0.2), inset 0 0 20px rgba(255,105,0,0.1)'
                   }}
              />
              
              {bankProviders.map((bank, index) => {
                const angle = (index / bankProviders.length) * 2 * Math.PI;
                const x = Math.cos(angle) * 50;
                const y = Math.sin(angle) * 50;
                
                return (
                  <motion.div
                    key={bank.name}
                    className="absolute"
                    style={{
                      top: `${50 + y}%`,
                      left: `${50 + x}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#ff6900] to-[#D74B18] rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity" />
                      <div className="relative w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-xl border-2 border-[#ff6900]/30 overflow-hidden">
                        <img src={bank.logo} alt={bank.name} className="w-full h-full object-contain p-2" />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <span className="text-white text-[10px] font-bold bg-[rgba(255,105,0,0.3)] px-2 py-0.5 rounded-full border border-[#ff6900]/50">{bank.name}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Integration Features Grid - Box Format like Hero */}
        <div className="flex justify-center">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
            {integrationFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative"
              >
                {/* Outer glow effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"
                  style={{ 
                    background: `radial-gradient(circle at 50% 50%, ${feature.color}40, transparent 70%)`
                  }}
                />
                
                {/* Card Box */}
                <div className="relative h-full rounded-2xl overflow-hidden border border-white/10 bg-[rgba(17,17,20,0.5)] backdrop-blur-sm">
                  {/* Top gradient line */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-[2px]"
                    style={{ 
                      background: `linear-gradient(90deg, ${feature.color}, transparent)` 
                    }}
                  />

                  {/* Content */}
                  <div className="p-8">
                    {/* Icon with background */}
                    <div className="mb-6">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center relative overflow-hidden"
                        style={{ 
                          background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}10)`,
                          border: `1px solid ${feature.color}30`
                        }}
                      >
                        <feature.icon 
                          className="w-7 h-7 relative z-10" 
                          style={{ color: feature.color }}
                          strokeWidth={2}
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-white font-bold text-lg mb-3">
                      {feature.title}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-[#A0A0A5] text-sm leading-relaxed mb-4">
                      {feature.description}
                    </p>

                    {/* Bottom Status Indicator */}
                    <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                      <motion.div 
                        className="w-2 h-2 rounded-full"
                        style={{ background: feature.color }}
                        animate={{ 
                          boxShadow: [
                            `0 0 0px ${feature.color}`,
                            `0 0 8px ${feature.color}`,
                            `0 0 0px ${feature.color}`
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <span className="text-[#8696a0] text-xs font-medium">Ativo</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}