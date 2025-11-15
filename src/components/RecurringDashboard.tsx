import { motion } from 'motion/react';
import { TrendingUp } from 'lucide-react';

export default function RecurringDashboard() {
  const monthlyData = [
    { month: 'Jan', value: 65000, y: 130 },
    { month: 'Fev', value: 68000, y: 122 },
    { month: 'Mar', value: 72000, y: 112 },
    { month: 'Abr', value: 76000, y: 102 },
    { month: 'Mai', value: 82000, y: 88 },
    { month: 'Jun', value: 88000, y: 74 },
    { month: 'Jul', value: 92000, y: 64 },
    { month: 'Ago', value: 98000, y: 50 },
    { month: 'Set', value: 105000, y: 38 },
    { month: 'Out', value: 112000, y: 26 },
    { month: 'Nov', value: 118000, y: 16 },
    { month: 'Dez', value: 124890, y: 8 }
  ];

  return (
    <div className="absolute inset-0 p-6">
      {/* Main Dashboard Container */}
      <div className="relative h-full bg-gradient-to-br from-[rgba(17,17,20,0.9)] to-[rgba(11,11,14,0.9)] rounded-2xl border border-[rgba(255,255,255,0.12)] backdrop-blur-xl overflow-hidden">
        
        {/* Header sem abas */}
        <div className="relative z-10 px-5 py-4 border-b border-[rgba(255,255,255,0.08)] bg-[rgba(11,11,14,0.5)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#9810FA]" />
              <div className="w-2 h-2 rounded-full bg-[#ff8534]" />
              <div className="w-2 h-2 rounded-full bg-[#00c950]" />
            </div>
            
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#9810FA]" />
              <span className="text-white text-sm font-bold">Receita Recorrente</span>
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
            <div className="flex items-center justify-between">
              <h3 className="text-white text-lg font-bold">Receita Mensal Recorrente</h3>
              <div className="text-white text-2xl font-bold">R$ 124.890,22</div>
            </div>
            
            {/* Single MRR Chart - Full width */}
            <div className="flex-1 bg-[rgba(255,255,255,0.02)] rounded-xl border border-[rgba(255,255,255,0.06)] overflow-hidden flex flex-col">
              <div className="p-4 border-b border-[rgba(255,255,255,0.05)]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-bold text-sm">Evolução MRR</div>
                    <div className="text-[#8696a0] text-[10px]">Últimos 12 meses</div>
                  </div>
                  <div className="text-[#25D366] text-xs font-bold">↗ +92.3%</div>
                </div>
              </div>
              
              <div className="p-4 flex-1">
                {/* 2D Line Chart Minimalista */}
                <div className="relative h-full min-h-[180px] flex flex-col">
                  {/* Grid lines */}
                  <div className="flex-1 relative">
                    <div className="absolute inset-0 flex flex-col justify-between">
                      {[125, 100, 75, 50, 25].map((val, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-[#8696a0] text-[9px] w-10">R$ {val}k</span>
                          <div className="flex-1 h-px bg-[rgba(255,255,255,0.03)]" />
                        </div>
                      ))}
                    </div>
                    
                    {/* Chart area */}
                    <svg className="absolute inset-0 w-full h-full" style={{ marginLeft: '48px' }} preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="mrrGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#9810FA" />
                          <stop offset="50%" stopColor="#b45dff" />
                          <stop offset="100%" stopColor="#ff8534" />
                        </linearGradient>
                        <linearGradient id="mrrFill" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#9810FA" stopOpacity="0.25" />
                          <stop offset="50%" stopColor="#9810FA" stopOpacity="0.1" />
                          <stop offset="100%" stopColor="#9810FA" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      
                      {/* Fill area */}
                      <motion.path
                        d="M 0,75% L 9%,70% L 18%,64% L 27%,58% L 36%,49% L 45%,40% L 54%,33% L 63%,25% L 72%,18% L 81%,12% L 90%,7% L 100%,3% L 100%,100% L 0,100% Z"
                        fill="url(#mrrFill)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                      />
                      
                      {/* Line path */}
                      <motion.path
                        d="M 0,75% L 9%,70% L 18%,64% L 27%,58% L 36%,49% L 45%,40% L 54%,33% L 63%,25% L 72%,18% L 81%,12% L 90%,7% L 100%,3%"
                        fill="none"
                        stroke="url(#mrrGradient)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
                      />
                      
                      {/* Data points with glow */}
                      {[
                        { x: '0%', y: '75%' }, { x: '9%', y: '70%' }, { x: '18%', y: '64%' }, { x: '27%', y: '58%' },
                        { x: '36%', y: '49%' }, { x: '45%', y: '40%' }, { x: '54%', y: '33%' }, { x: '63%', y: '25%' },
                        { x: '72%', y: '18%' }, { x: '81%', y: '12%' }, { x: '90%', y: '7%' }, { x: '100%', y: '3%' }
                      ].map((point, i) => (
                        <g key={i}>
                          {/* Outer glow ring */}
                          <motion.circle
                            cx={point.x}
                            cy={point.y}
                            r="5"
                            fill="#9810FA"
                            opacity="0.3"
                            vectorEffect="non-scaling-stroke"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ 
                              scale: [1, 1.4, 1],
                              opacity: [0.3, 0, 0.3]
                            }}
                            transition={{ 
                              delay: 0.8 + i * 0.1,
                              duration: 2,
                              repeat: Infinity
                            }}
                          />
                          
                          {/* Main point */}
                          <motion.circle
                            cx={point.x}
                            cy={point.y}
                            r="2.5"
                            fill="#9810FA"
                            vectorEffect="non-scaling-stroke"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.8 + i * 0.1, type: "spring", stiffness: 200 }}
                          />
                          
                          {/* White center */}
                          <motion.circle
                            cx={point.x}
                            cy={point.y}
                            r="1"
                            fill="white"
                            vectorEffect="non-scaling-stroke"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.8 + i * 0.1 + 0.05 }}
                          />
                        </g>
                      ))}
                    </svg>
                  </div>
                  
                  {/* X-axis labels */}
                  <div className="flex items-center justify-between mt-2 ml-12">
                    {['Jan', 'Mar', 'Mai', 'Jul', 'Set', 'Nov', 'Dez'].map((month, i) => (
                      <span key={i} className="text-[#8696a0] text-[9px]">{month}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Clientes Ativos', value: '847', change: '+12%', color: '#9810FA' },
                { label: 'Ticket Médio', value: 'R$ 147,24', change: '+8%', color: '#ff8534' },
                { label: 'Taxa Retenção', value: '94.2%', change: '+2.1%', color: '#00c950' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="bg-[rgba(255,255,255,0.02)] rounded-lg p-3 border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.1)] transition-all group"
                >
                  <div className="text-[#8696a0] text-[10px] mb-1">{stat.label}</div>
                  <div className="flex items-baseline justify-between">
                    <div className="text-white text-lg font-bold">{stat.value}</div>
                    <div className="text-[#00c950] text-[10px] font-bold">{stat.change}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Background glow */}
        <div className="absolute top-1/4 -left-16 w-48 h-48 bg-[#9810FA] rounded-full blur-3xl opacity-[0.08] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-16 w-48 h-48 bg-[#ff8534] rounded-full blur-3xl opacity-[0.08] pointer-events-none" />
      </div>
    </div>
  );
}