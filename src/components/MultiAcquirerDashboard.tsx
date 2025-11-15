import { motion } from 'motion/react';
import { Activity, TrendingUp, Zap, Shield } from 'lucide-react';

export default function MultiAcquirerDashboard() {
  return (
    <div className="absolute inset-0 p-6">
      {/* Main Dashboard Container */}
      <div className="relative h-full bg-gradient-to-br from-[rgba(17,17,20,0.9)] to-[rgba(11,11,14,0.9)] rounded-2xl border border-[rgba(255,255,255,0.12)] backdrop-blur-xl overflow-hidden">
        
        {/* Header */}
        <div className="relative z-10 px-5 py-4 border-b border-[rgba(255,255,255,0.08)] bg-[rgba(11,11,14,0.5)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#9810FA]" />
              <div className="w-2 h-2 rounded-full bg-[#ff8534]" />
              <div className="w-2 h-2 rounded-full bg-[#00c950]" />
            </div>
            
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#ff8534]" />
              <span className="text-white text-sm font-bold">Análise de Métricas</span>
            </div>
            
            <div className="flex items-center gap-1.5 text-[#00c950] text-[10px] font-bold">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00c950] animate-pulse" />
              LIVE
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative h-[calc(100%-64px)] p-6">
          <div className="h-full flex flex-col gap-4">
            
            {/* Top Stats Grid - 2D Minimalista */}
            <div className="grid grid-cols-4 gap-3">
              {[
                { label: 'Taxa Aprovação', value: '99.8%', icon: TrendingUp, color: '#00c950', change: '+2.1%' },
                { label: 'Multi-Adquirência', value: 'Ativo', icon: Zap, color: '#ff8534', change: '4 bancos' },
                { label: 'Fallback', value: '2.4s', icon: Activity, color: '#9810FA', change: 'Média' },
                { label: 'Uptime', value: '99.99%', icon: Shield, color: '#D74B18', change: '30 dias' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08 }}
                  className="relative bg-[rgba(255,255,255,0.02)] rounded-lg p-3 border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.12)] transition-all overflow-hidden"
                >
                  {/* Top accent line */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ background: `linear-gradient(to right, ${stat.color}, transparent)` }}
                  />
                  
                  <div className="flex items-start justify-between mb-2 pt-1">
                    <div 
                      className="p-1.5 rounded-lg"
                      style={{ backgroundColor: `${stat.color}15` }}
                    >
                      <stat.icon className="w-3 h-3" style={{ color: stat.color }} />
                    </div>
                    <span className="text-[#8696a0] text-[9px]">{stat.change}</span>
                  </div>
                  
                  <div className="text-[#8696a0] text-[9px] uppercase tracking-wide mb-1">{stat.label}</div>
                  <div className="text-white text-lg font-bold">{stat.value}</div>
                </motion.div>
              ))}
            </div>

            {/* Main Content - 2 Columns */}
            <div className="flex-1 grid grid-cols-2 gap-4">
              
              {/* Left Column - Approval Rate Chart */}
              <div className="relative bg-[rgba(255,255,255,0.02)] rounded-xl border border-[rgba(255,255,255,0.06)] overflow-hidden">
                <div className="p-4 border-b border-[rgba(255,255,255,0.05)]">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold text-sm">Taxa de Aprovação</div>
                      <div className="text-[#8696a0] text-[10px]">Últimos 12 meses</div>
                    </div>
                    <div className="text-[#00c950] text-xs font-bold">↗ +7.8%</div>
                  </div>
                </div>
                
                <div className="p-4">
                  {/* 2D Line Chart Minimalista */}
                  <div className="relative h-48">
                    {/* Grid lines */}
                    <div className="absolute inset-0 flex flex-col justify-between">
                      {[100, 75, 50, 25, 0].map((val, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-[#8696a0] text-[9px] w-8">{val}%</span>
                          <div className="flex-1 h-px bg-[rgba(255,255,255,0.03)]" />
                        </div>
                      ))}
                    </div>
                    
                    {/* Chart area */}
                    <svg className="absolute inset-0 w-full h-full" style={{ marginLeft: '40px' }}>
                      <defs>
                        <linearGradient id="approvalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#ff8534" />
                          <stop offset="100%" stopColor="#9810FA" />
                        </linearGradient>
                        <linearGradient id="approvalFill" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#ff8534" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#ff8534" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      
                      {/* Line path */}
                      <motion.path
                        d="M 0,100 L 30,94 L 60,90 L 90,84 L 120,80 L 150,72 L 180,68 L 210,58 L 240,50 L 270,38 L 300,26 L 330,10"
                        fill="none"
                        stroke="url(#approvalGradient)"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                      />
                      
                      {/* Fill area */}
                      <motion.path
                        d="M 0,100 L 30,94 L 60,90 L 90,84 L 120,80 L 150,72 L 180,68 L 210,58 L 240,50 L 270,38 L 300,26 L 330,10 L 330,192 L 0,192 Z"
                        fill="url(#approvalFill)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                      />
                      
                      {/* Data points */}
                      {[
                        { x: 0, y: 100 }, { x: 30, y: 94 }, { x: 60, y: 90 }, { x: 90, y: 84 },
                        { x: 120, y: 80 }, { x: 150, y: 72 }, { x: 180, y: 68 }, { x: 210, y: 58 },
                        { x: 240, y: 50 }, { x: 270, y: 38 }, { x: 300, y: 26 }, { x: 330, y: 10 }
                      ].map((point, i) => (
                        <motion.circle
                          key={i}
                          cx={point.x}
                          cy={point.y}
                          r="3"
                          fill="#ff8534"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                        />
                      ))}
                    </svg>
                  </div>
                  
                  {/* X-axis labels */}
                  <div className="flex items-center justify-between mt-2 ml-10">
                    {['Jan', 'Mar', 'Mai', 'Jul', 'Set', 'Nov', 'Dez'].map((month, i) => (
                      <div key={i} className="text-[#8696a0] text-[8px]">{month}</div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Acquirers Grid */}
              <div className="relative bg-[rgba(255,255,255,0.02)] rounded-xl border border-[rgba(255,255,255,0.06)] overflow-hidden">
                <div className="p-4 border-b border-[rgba(255,255,255,0.05)]">
                  <div className="text-white font-bold text-sm">Adquirentes Ativos</div>
                  <div className="text-[#8696a0] text-[10px]">Distribuição de volume</div>
                </div>
                
                <div className="p-4 space-y-3">
                  {[
                    { name: 'Stone', percentage: 34, color: '#00c950', status: 'Primário' },
                    { name: 'Rede', percentage: 28, color: '#ff8534', status: 'Secundário' },
                    { name: 'Cielo', percentage: 22, color: '#9810FA', status: 'Fallback 1' },
                    { name: 'GetNet', percentage: 16, color: '#D74B18', status: 'Fallback 2' }
                  ].map((acquirer, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="relative"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: acquirer.color }}
                          />
                          <span className="text-white text-xs font-bold">{acquirer.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-[#8696a0] text-[9px]">{acquirer.status}</span>
                          <span className="text-white text-xs font-bold">{acquirer.percentage}%</span>
                        </div>
                      </div>
                      
                      {/* Progress bar - 2D */}
                      <div className="h-2 bg-[rgba(255,255,255,0.04)] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${acquirer.percentage}%` }}
                          transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: acquirer.color }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Summary Stats */}
                <div className="p-4 border-t border-[rgba(255,255,255,0.05)]">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Volume Total', value: 'R$ 2.4M' },
                      { label: 'Transações', value: '18.4k' },
                      { label: 'Tempo Médio', value: '1.2s' }
                    ].map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-[#8696a0] text-[8px] uppercase tracking-wide mb-1">{stat.label}</div>
                        <div className="text-white text-xs font-bold">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row - Real-time Stats */}
            <div className="grid grid-cols-6 gap-2">
              {[
                { label: 'Retry Rate', value: '2.1%', trend: 'down', color: '#00c950' },
                { label: 'Avg Response', value: '324ms', trend: 'down', color: '#ff8534' },
                { label: 'Success Rate', value: '98.7%', trend: 'up', color: '#9810FA' },
                { label: 'Peak TPS', value: '1.2k', trend: 'up', color: '#D74B18' },
                { label: 'Queue Size', value: '0', trend: 'stable', color: '#00c950' },
                { label: 'Errors/min', value: '0.3', trend: 'down', color: '#ff8534' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.05 }}
                  className="bg-[rgba(255,255,255,0.02)] rounded-lg p-2.5 border border-[rgba(255,255,255,0.04)] hover:border-[rgba(255,255,255,0.08)] transition-all"
                >
                  <div className="text-[#8696a0] text-[8px] uppercase tracking-wide mb-1">{stat.label}</div>
                  <div className="flex items-center justify-between">
                    <div className="text-white text-sm font-bold">{stat.value}</div>
                    <div 
                      className="text-[9px] font-bold"
                      style={{ color: stat.trend === 'up' ? '#00c950' : stat.trend === 'down' ? stat.color : '#8696a0' }}
                    >
                      {stat.trend === 'up' ? '↗' : stat.trend === 'down' ? '↘' : '–'}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* Background glow */}
        <div className="absolute top-1/4 -left-16 w-48 h-48 bg-[#ff8534] rounded-full blur-3xl opacity-[0.08] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-16 w-48 h-48 bg-[#9810FA] rounded-full blur-3xl opacity-[0.08] pointer-events-none" />
      </div>
    </div>
  );
}
