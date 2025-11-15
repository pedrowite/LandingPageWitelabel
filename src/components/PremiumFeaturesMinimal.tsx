import { motion } from 'motion/react';
import { DollarSign, TrendingUp, Users, Target, Bitcoin, Sparkles, UsersRound } from 'lucide-react';

export default function PremiumFeaturesMinimal() {
  return (
    <div className="absolute inset-0 p-6">
      {/* Main Dashboard Container - PADRONIZADO */}
      <div className="relative h-full bg-gradient-to-br from-[rgba(17,17,20,0.9)] to-[rgba(11,11,14,0.9)] rounded-2xl border border-[rgba(255,255,255,0.12)] backdrop-blur-xl overflow-hidden">
        
        {/* Header - PADRONIZADO */}
        <div className="relative z-10 px-5 py-4 border-b border-[rgba(255,255,255,0.08)] bg-[rgba(11,11,14,0.5)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#9810FA]" />
              <div className="w-2 h-2 rounded-full bg-[#ff8534]" />
              <div className="w-2 h-2 rounded-full bg-[#00c950]" />
            </div>
            
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#ff8534]" />
              <span className="text-white text-sm font-bold">Funcionalidades Premium</span>
            </div>
            
            <div className="flex items-center gap-1.5 text-[#00c950] text-[10px] font-bold">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00c950] animate-pulse" />
              LIVE
            </div>
          </div>
        </div>

        {/* Content Area - PADRONIZADO */}
        <div className="relative h-[calc(100%-64px)] p-6">
          <div className="h-full flex flex-col gap-3">
            
            {/* Top Stats Row - Padronizado 4 colunas */}
            <div className="grid grid-cols-4 gap-2.5">
              {[
                { label: 'Revenue', value: 'R$ 24.5k', change: '+42%', icon: DollarSign, color: '#ff8534' },
                { label: 'Conversão', value: '32.4%', change: '+8.2%', icon: TrendingUp, color: '#9810FA' },
                { label: 'Usuários', value: '1.2k', change: '+15%', icon: Users, color: '#00c950' },
                { label: 'Target', value: '89%', change: '+5%', icon: Target, color: '#D74B18' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="relative bg-[rgba(255,255,255,0.02)] rounded-lg p-2.5 border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.1)] transition-all h-[72px] flex flex-col justify-between"
                >
                  {/* Top line accent */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ backgroundColor: stat.color, opacity: 0.4 }}
                  />
                  
                  <div className="flex items-center justify-between">
                    <stat.icon className="w-3.5 h-3.5" style={{ color: stat.color }} />
                    <span className="text-[#00c950] text-[9px] font-bold">{stat.change}</span>
                  </div>
                  
                  <div>
                    <div className="text-[#8696a0] text-[9px] uppercase tracking-wider mb-0.5">{stat.label}</div>
                    <div className="text-white text-base font-bold">{stat.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Main Content Grid - 2 Colunas Igualmente Espaçadas */}
            <div className="flex-1 grid grid-cols-2 gap-3 min-h-0">
              
              {/* Card 1 - Cripto */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="relative bg-[rgba(255,255,255,0.02)] rounded-lg border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.1)] transition-all overflow-hidden"
              >
                {/* Top line accent */}
                <div className="h-px bg-gradient-to-r from-[#ff8534] via-[#ff8534] to-transparent opacity-60" />
                
                <div className="p-4 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-7 h-7 rounded-lg bg-[rgba(255,133,52,0.1)] border border-[rgba(255,133,52,0.2)] flex items-center justify-center">
                      <Bitcoin className="w-4 h-4 text-[#ff8534]" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm">Saque Cripto</h3>
                      <p className="text-[#8696a0] text-[9px] uppercase tracking-wider">BTC · ETH · USDT</p>
                    </div>
                  </div>
                  
                  {/* Main Value */}
                  <div className="bg-[rgba(255,255,255,0.02)] rounded-lg p-3 mb-3 border border-[rgba(255,255,255,0.04)]">
                    <div className="text-[#8696a0] text-[9px] uppercase tracking-wider mb-1">Convertidos Hoje</div>
                    <div className="text-white text-2xl font-bold">R$ 61.5k</div>
                  </div>
                  
                  {/* Progress */}
                  <div className="space-y-1.5 mb-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[#8696a0] text-[9px] uppercase tracking-wider">Volume</span>
                      <span className="text-[#ff8534] text-[9px] font-bold">87%</span>
                    </div>
                    <div className="h-1 bg-[rgba(255,255,255,0.04)] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '87%' }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="h-full bg-[#ff8534] rounded-full"
                      />
                    </div>
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-2 flex-1">
                    <div className="bg-[rgba(255,255,255,0.02)] rounded-lg p-2 border border-[rgba(255,255,255,0.04)] flex flex-col justify-center">
                      <div className="text-[#8696a0] text-[8px] uppercase tracking-wider mb-0.5">Transações</div>
                      <div className="text-white text-xs font-bold">847</div>
                    </div>
                    <div className="bg-[rgba(255,255,255,0.02)] rounded-lg p-2 border border-[rgba(255,255,255,0.04)] flex flex-col justify-center">
                      <div className="text-[#8696a0] text-[8px] uppercase tracking-wider mb-0.5">Taxa Média</div>
                      <div className="text-white text-xs font-bold">3.8%</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 - Marketplace */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="relative bg-[rgba(255,255,255,0.02)] rounded-lg border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.1)] transition-all overflow-hidden"
              >
                {/* Top line accent */}
                <div className="h-px bg-gradient-to-r from-[#D74B18] via-[#D74B18] to-transparent opacity-60" />
                
                <div className="p-4 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-7 h-7 rounded-lg bg-[rgba(215,75,24,0.1)] border border-[rgba(215,75,24,0.2)] flex items-center justify-center">
                      <UsersRound className="w-4 h-4 text-[#D74B18]" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm">Marketplace</h3>
                      <p className="text-[#8696a0] text-[9px] uppercase tracking-wider">Rede de Parceiros</p>
                    </div>
                  </div>
                  
                  {/* Main Value */}
                  <div className="bg-[rgba(255,255,255,0.02)] rounded-lg p-3 mb-3 border border-[rgba(255,255,255,0.04)]">
                    <div className="text-[#8696a0] text-[9px] uppercase tracking-wider mb-1">Afiliados Ativos</div>
                    <div className="text-white text-2xl font-bold">1.234</div>
                  </div>
                  
                  {/* Progress */}
                  <div className="space-y-1.5 mb-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[#8696a0] text-[9px] uppercase tracking-wider">Crescimento</span>
                      <span className="text-[#00c950] text-[9px] font-bold">+67%</span>
                    </div>
                    <div className="h-1 bg-[rgba(255,255,255,0.04)] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '67%' }}
                        transition={{ delay: 0.7, duration: 1 }}
                        className="h-full bg-[#D74B18] rounded-full"
                      />
                    </div>
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-2 flex-1">
                    <div className="bg-[rgba(255,255,255,0.02)] rounded-lg p-2 border border-[rgba(255,255,255,0.04)] flex flex-col justify-center">
                      <div className="text-[#8696a0] text-[8px] uppercase tracking-wider mb-0.5">Comissão</div>
                      <div className="text-white text-xs font-bold">8.5%</div>
                    </div>
                    <div className="bg-[rgba(255,255,255,0.02)] rounded-lg p-2 border border-[rgba(255,255,255,0.04)] flex flex-col justify-center">
                      <div className="text-[#8696a0] text-[8px] uppercase tracking-wider mb-0.5">Volume</div>
                      <div className="text-white text-xs font-bold">R$ 2M</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Analytics Chart - Revenue Premium */}
            <div className="relative bg-[rgba(255,255,255,0.02)] rounded-lg p-4 border border-[rgba(255,255,255,0.06)]">
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="text-white font-bold text-xs uppercase tracking-wider">Revenue Premium</div>
                  <div className="text-[#8696a0] text-[9px]">7 dias</div>
                  <div className="flex items-center gap-1 px-2 py-0.5 bg-[rgba(0,201,80,0.08)] rounded border border-[rgba(0,201,80,0.2)]">
                    <span className="text-[#00c950] text-[9px] font-bold">+42%</span>
                  </div>
                </div>
                <div className="text-[#ff8534] text-xs font-bold">+R$ 8.4k</div>
              </div>
              
              {/* Chart Area - Line Chart with Gradient */}
              <div className="relative h-14">
                <svg className="w-full h-full" viewBox="0 0 280 56" preserveAspectRatio="none">
                  <defs>
                    {/* Gradient for line */}
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ff8534" stopOpacity="1" />
                      <stop offset="50%" stopColor="#D74B18" stopOpacity="1" />
                      <stop offset="100%" stopColor="#9810FA" stopOpacity="1" />
                    </linearGradient>
                    
                    {/* Gradient for area fill */}
                    <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ff8534" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#ff8534" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Grid lines */}
                  <line x1="0" y1="14" x2="280" y2="14" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  <line x1="0" y1="28" x2="280" y2="28" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  <line x1="0" y1="42" x2="280" y2="42" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  
                  {/* Area fill */}
                  <motion.path
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    d="M 0 25 Q 20 21, 40 23 T 80 17 T 120 14 T 160 11 T 200 15 T 240 12 L 280 10 L 280 56 L 0 56 Z"
                    fill="url(#areaGradient)"
                  />
                  
                  {/* Main line */}
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 1.2, ease: "easeOut" }}
                    d="M 0 25 Q 20 21, 40 23 T 80 17 T 120 14 T 160 11 T 200 15 T 240 12 L 280 10"
                    stroke="url(#lineGradient)"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  
                  {/* Data points */}
                  {[
                    { x: 0, y: 25 },
                    { x: 40, y: 23 },
                    { x: 80, y: 17 },
                    { x: 120, y: 14 },
                    { x: 160, y: 11 },
                    { x: 200, y: 15 },
                    { x: 240, y: 12 },
                    { x: 280, y: 10 }
                  ].map((point, i) => (
                    <motion.g key={i}>
                      {/* Outer glow ring */}
                      <motion.circle
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.4, 0, 0.4]
                        }}
                        transition={{
                          delay: 1.1 + i * 0.1,
                          duration: 2,
                          repeat: Infinity
                        }}
                        cx={point.x}
                        cy={point.y}
                        r="4"
                        fill="#ff8534"
                      />
                      
                      {/* Point dot */}
                      <motion.circle
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.1 + i * 0.1, type: "spring", stiffness: 200 }}
                        cx={point.x}
                        cy={point.y}
                        r="2.5"
                        fill="#ff8534"
                        className="hover:r-4 transition-all cursor-pointer"
                      />
                      
                      {/* White center */}
                      <motion.circle
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.1 + i * 0.1 + 0.05 }}
                        cx={point.x}
                        cy={point.y}
                        r="1"
                        fill="white"
                      />
                    </motion.g>
                  ))}
                </svg>
              </div>
              
              {/* X-axis Labels */}
              <div className="flex items-center justify-between mt-2 px-1">
                {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day, i) => (
                  <div key={i} className="text-[#8696a0] text-[8px] uppercase tracking-wider">{day}</div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Minimal glow - apenas sutil */}
        <div className="absolute top-1/4 -left-16 w-48 h-48 bg-[#ff8534] rounded-full blur-3xl opacity-[0.08] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-16 w-48 h-48 bg-[#9810FA] rounded-full blur-3xl opacity-[0.08] pointer-events-none" />
      </div>
    </div>
  );
}