import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, XCircle, Shield, AlertTriangle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function MultiAcquirerVisual() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev >= 5 ? 0 : prev + 1));
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  const acquirers = [
    { 
      name: 'Konduto', 
      label: 'ANTIFRAUDE', 
      status: step >= 1 ? 'approved' : 'pending',
      logo: 'K'
    },
    { 
      name: 'Getnet', 
      label: 'ADQUIRENTE', 
      status: step >= 3 ? 'rejected' : step >= 2 ? 'processing' : 'pending',
      logo: 'G'
    },
    { 
      name: 'PagSeguro', 
      label: 'ADQUIRENTE', 
      status: step >= 5 ? 'approved' : step >= 4 ? 'processing' : 'pending',
      logo: 'P'
    }
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center p-8">
      <div className="w-full max-w-5xl h-full flex items-center">
        <div className="w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(152,16,250,0.15)] border border-[rgba(152,16,250,0.3)] mb-3">
              <Shield className="w-4 h-4 text-[#9810FA]" />
              <span className="text-[#9810FA] text-sm font-semibold">Roteamento Inteligente</span>
            </div>
            <h3 className="text-white font-bold text-2xl">Múltiplos adquirentes trabalhando juntos</h3>
          </motion.div>

          {/* Main Flow Container */}
          <div className="grid grid-cols-12 gap-6 items-center">
            
            {/* Left - Payment Info */}
            <div className="col-span-3">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-[rgba(109,3,245,0.15)] to-[rgba(152,16,250,0.1)] rounded-2xl p-6 border border-[rgba(152,16,250,0.3)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#9810FA] to-[#6D03F5] flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <rect x="2" y="5" width="20" height="14" rx="2"/>
                      <line x1="2" y1="10" x2="22" y2="10"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[#8696a0] text-xs">Transação</div>
                    <div className="text-white font-bold">ID #4521</div>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#8696a0]">Bandeira:</span>
                    <span className="text-white font-semibold">Visa</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8696a0]">Parcelas:</span>
                    <span className="text-white font-semibold">6x</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-[rgba(255,255,255,0.1)]">
                    <span className="text-[#8696a0]">Valor:</span>
                    <span className="text-white font-bold text-lg">R$ 1.250</span>
                  </div>
                </div>

                {/* Processing indicator */}
                <motion.div
                  className="mt-4 flex items-center gap-2 text-xs"
                  animate={{ opacity: step < 5 ? [0.5, 1, 0.5] : 1 }}
                  transition={{ duration: 1.5, repeat: step < 5 ? Infinity : 0 }}
                >
                  <div className={`w-2 h-2 rounded-full ${step >= 5 ? 'bg-[#00c950]' : 'bg-[#ff8534]'}`} />
                  <span className={step >= 5 ? 'text-[#00c950]' : 'text-[#ff8534]'}>
                    {step >= 5 ? 'Aprovado' : 'Processando...'}
                  </span>
                </motion.div>
              </motion.div>
            </div>

            {/* Center - Flow */}
            <div className="col-span-6 relative">
              {/* Vertical Flow Container */}
              <div className="relative space-y-6">
                
                {/* Connection Lines */}
                <svg className="absolute left-1/2 top-0 bottom-0 w-1 -ml-0.5 overflow-visible" style={{ zIndex: 0 }}>
                  {/* Line to Konduto */}
                  <motion.line
                    x1="0" y1="0" x2="0" y2="120"
                    stroke="#9810FA"
                    strokeWidth="2"
                    strokeDasharray="8 4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: step >= 1 ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  />
                  {/* Line to Getnet */}
                  <motion.line
                    x1="0" y1="150" x2="0" y2="270"
                    stroke={step >= 3 ? "#fb2c36" : "#ff8534"}
                    strokeWidth="2"
                    strokeDasharray="8 4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: step >= 2 ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  />
                  {/* Line to PagSeguro */}
                  <motion.line
                    x1="0" y1="300" x2="0" y2="420"
                    stroke={step >= 5 ? "#00c950" : "#ff8534"}
                    strokeWidth="2"
                    strokeDasharray="8 4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: step >= 4 ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </svg>

                {acquirers.map((acquirer, index) => {
                  const isActive = 
                    (index === 0 && step >= 1) ||
                    (index === 1 && step >= 2) ||
                    (index === 2 && step >= 4);

                  const isProcessing = 
                    (index === 1 && step === 2) ||
                    (index === 2 && step === 4);

                  return (
                    <motion.div
                      key={acquirer.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: isActive ? 1 : 0.3,
                        scale: isActive ? 1 : 0.9
                      }}
                      transition={{ duration: 0.4 }}
                      className="relative z-10"
                    >
                      <div className={`relative bg-gradient-to-br rounded-2xl p-5 border-2 transition-all duration-500 ${
                        acquirer.status === 'approved' 
                          ? 'from-[rgba(0,201,80,0.15)] to-[rgba(0,188,125,0.1)] border-[#00c950] shadow-[0_0_30px_rgba(0,201,80,0.3)]'
                          : acquirer.status === 'rejected'
                          ? 'from-[rgba(251,44,54,0.15)] to-[rgba(255,68,68,0.1)] border-[#fb2c36] shadow-[0_0_30px_rgba(251,44,54,0.3)]'
                          : acquirer.status === 'processing'
                          ? 'from-[rgba(255,133,52,0.15)] to-[rgba(255,105,0,0.1)] border-[#ff8534] shadow-[0_0_30px_rgba(255,133,52,0.3)]'
                          : 'from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.1)]'
                      }`}>
                        <div className="flex items-center justify-between">
                          {/* Left - Logo and Name */}
                          <div className="flex items-center gap-4">
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-xl font-bold transition-all duration-500 ${
                              acquirer.status === 'approved'
                                ? 'bg-gradient-to-br from-[#00c950] to-[#00bc7d] text-white'
                                : acquirer.status === 'rejected'
                                ? 'bg-gradient-to-br from-[#fb2c36] to-[#ff4444] text-white'
                                : acquirer.status === 'processing'
                                ? 'bg-gradient-to-br from-[#ff8534] to-[#ff6900] text-white'
                                : 'bg-[rgba(255,255,255,0.08)] text-[#8696a0]'
                            }`}>
                              {acquirer.logo}
                            </div>
                            <div>
                              <div className="text-[#8696a0] text-xs font-semibold mb-1">{acquirer.label}</div>
                              <div className="text-white font-bold text-lg">{acquirer.name}</div>
                            </div>
                          </div>

                          {/* Right - Status Badge */}
                          <AnimatePresence mode="wait">
                            {acquirer.status === 'approved' && (
                              <motion.div
                                key="approved"
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                exit={{ scale: 0, rotate: 180 }}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#00c950] border-2 border-white"
                              >
                                <CheckCircle className="w-5 h-5 text-white" strokeWidth={2.5} />
                                <span className="text-white font-bold text-sm">APROVADO</span>
                              </motion.div>
                            )}
                            
                            {acquirer.status === 'rejected' && (
                              <motion.div
                                key="rejected"
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                exit={{ scale: 0, rotate: 180 }}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#fb2c36] border-2 border-white"
                              >
                                <XCircle className="w-5 h-5 text-white" strokeWidth={2.5} />
                                <span className="text-white font-bold text-sm">RECUSADO</span>
                              </motion.div>
                            )}

                            {acquirer.status === 'processing' && (
                              <motion.div
                                key="processing"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff8534]"
                              >
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                                />
                                <span className="text-white font-bold text-sm">PROCESSANDO</span>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Processing pulse */}
                        {isProcessing && (
                          <motion.div
                            className="absolute inset-0 rounded-2xl bg-[#ff8534]"
                            animate={{ opacity: [0, 0.1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                        )}

                        {/* Success particles */}
                        {acquirer.status === 'approved' && (
                          <>
                            {[...Array(6)].map((_, i) => {
                              const angle = (i / 6) * Math.PI * 2;
                              return (
                                <motion.div
                                  key={i}
                                  className="absolute w-2 h-2 rounded-full bg-[#00c950]"
                                  style={{
                                    left: '50%',
                                    top: '50%'
                                  }}
                                  animate={{
                                    x: Math.cos(angle) * 60,
                                    y: Math.sin(angle) * 60,
                                    opacity: [0, 1, 0],
                                    scale: [0, 1, 0]
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.1
                                  }}
                                />
                              );
                            })}
                          </>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right - Security Features */}
            <div className="col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                {/* Antifraude Badge */}
                <div className={`bg-gradient-to-br rounded-xl p-4 border transition-all duration-500 ${
                  step >= 1
                    ? 'from-[rgba(0,201,80,0.15)] to-[rgba(0,188,125,0.1)] border-[#00c950]'
                    : 'from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.1)]'
                }`}>
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className={`w-5 h-5 ${step >= 1 ? 'text-[#00c950]' : 'text-[#8696a0]'}`} />
                    <span className="text-white font-bold text-sm">Antifraude</span>
                  </div>
                  <p className="text-[#8696a0] text-xs">Análise em tempo real</p>
                </div>

                {/* Chargeback Alert */}
                <div className={`bg-gradient-to-br rounded-xl p-4 border transition-all duration-500 ${
                  step >= 5
                    ? 'from-[rgba(0,201,80,0.15)] to-[rgba(0,188,125,0.1)] border-[#00c950]'
                    : 'from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.1)]'
                }`}>
                  <div className="flex items-center gap-3 mb-2">
                    <AlertTriangle className={`w-5 h-5 ${step >= 5 ? 'text-[#00c950]' : 'text-[#8696a0]'}`} />
                    <span className="text-white font-bold text-sm">Alertas</span>
                  </div>
                  <p className="text-[#8696a0] text-xs">Monitoramento ativo</p>
                </div>

                {/* Stats */}
                {step >= 5 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-br from-[rgba(0,201,80,0.15)] to-[rgba(0,188,125,0.1)] rounded-xl p-4 border border-[#00c950]"
                  >
                    <div className="text-center">
                      <div className="text-[#00c950] text-2xl font-bold mb-1">99.8%</div>
                      <div className="text-white text-xs font-semibold">Taxa de Aprovação</div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: step >= 5 ? 1 : 0, y: step >= 5 ? 0 : 20 }}
            className="grid grid-cols-3 gap-4 mt-8"
          >
            {[
              { label: 'Tempo de Resposta', value: '1.8s', color: '#9810FA' },
              { label: 'Aprovação Garantida', value: '99.8%', color: '#00c950' },
              { label: 'Vendas Recuperadas', value: '+32%', color: '#ff8534' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="text-center p-4 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)]"
              >
                <p className="text-2xl font-bold mb-1" style={{ color: stat.color }}>{stat.value}</p>
                <p className="text-[#8696a0] text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
