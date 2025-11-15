import { motion } from 'motion/react';
import { Users, TrendingUp, Award } from 'lucide-react';

export default function AffiliatesDashboard() {
  const affiliates = [
    { 
      name: 'João Silva', 
      sales: 234, 
      commission: 12400, 
      trend: '+23%', 
      avatar: 'JS', 
      rank: 1, 
      color: '#ff8534',
      performance: [60, 65, 70, 75, 80, 85, 90, 88, 92, 95, 93, 98]
    },
    { 
      name: 'Maria Lima', 
      sales: 189, 
      commission: 9800, 
      trend: '+18%', 
      avatar: 'ML', 
      rank: 2, 
      color: '#9810FA',
      performance: [55, 60, 58, 65, 70, 72, 75, 78, 80, 82, 85, 87]
    },
    { 
      name: 'Pedro Oliveira', 
      sales: 156, 
      commission: 8200, 
      trend: '+31%', 
      avatar: 'PO', 
      rank: 3, 
      color: '#00c950',
      performance: [45, 50, 55, 60, 65, 70, 75, 80, 78, 82, 85, 88]
    }
  ];

  const totalCommission = affiliates.reduce((sum, a) => sum + a.commission, 0);

  return (
    <div className="relative w-full h-full">
      {/* Main Dashboard Container */}
      <div className="relative h-full bg-gradient-to-br from-[rgba(17,17,20,0.9)] to-[rgba(11,11,14,0.9)] rounded-2xl border border-[rgba(255,255,255,0.12)] backdrop-blur-xl overflow-hidden">
        
        {/* Header */}
        <div className="relative z-10 px-5 py-4 border-b border-[rgba(255,255,255,0.08)] bg-[rgba(11,11,14,0.5)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#ff8534]" />
              <div className="w-2 h-2 rounded-full bg-[#9810FA]" />
              <div className="w-2 h-2 rounded-full bg-[#00c950]" />
            </div>
            
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#9810FA]" />
              <span className="text-white text-sm font-bold">Top Afiliados</span>
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
            
            {/* Total Commission Header */}
            <div className="flex items-end justify-between">
              <div>
                <div className="text-[#8696a0] text-xs mb-1">Comissões Totais - Este Mês</div>
                <div className="text-white text-3xl font-bold">
                  R$ {(totalCommission / 1000).toFixed(1)}k
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#ff8534]" />
                <div className="text-[#8696a0] text-xs">Top 3 Performers</div>
              </div>
            </div>
            
            {/* Affiliates Cards Grid */}
            <div className="flex-1 grid grid-rows-3 gap-3 overflow-hidden">
              {affiliates.map((affiliate, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                  whileHover={{ x: 6, scale: 1.02 }}
                  className="relative group"
                >
                  {/* Rank badge */}
                  <div 
                    className="absolute -top-1 -left-1 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg z-10 border-2 border-[#111114]"
                    style={{ 
                      background: `linear-gradient(135deg, ${affiliate.color}, ${affiliate.color}cc)` 
                    }}
                  >
                    {affiliate.rank}
                  </div>
                  
                  {/* Glow effect */}
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"
                    style={{ 
                      background: `radial-gradient(circle at 0% 50%, ${affiliate.color}25, transparent 70%)` 
                    }}
                  />
                  
                  <div className="relative h-full bg-gradient-to-br from-[rgba(255,255,255,0.04)] to-[rgba(255,255,255,0.01)] rounded-xl p-4 border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.15)] transition-all flex items-center gap-4">
                    
                    {/* Avatar with pulse */}
                    <div className="relative shrink-0">
                      <div 
                        className="w-14 h-14 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg z-10 relative"
                        style={{ 
                          background: `linear-gradient(135deg, ${affiliate.color}, ${affiliate.color}dd)` 
                        }}
                      >
                        {affiliate.avatar}
                      </div>
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ 
                          background: `linear-gradient(135deg, ${affiliate.color}, ${affiliate.color}cc)` 
                        }}
                        animate={{ 
                          scale: [1, 1.3, 1], 
                          opacity: [0.5, 0, 0.5] 
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: i * 0.2 
                        }}
                      />
                    </div>
                    
                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-bold text-sm mb-1 truncate">
                        {affiliate.name}
                      </div>
                      <div className="flex items-center gap-3 mb-1">
                        <div className="text-[#8696a0] text-xs">{affiliate.sales} vendas</div>
                        <div className="w-1 h-1 rounded-full bg-[#8696a0]" />
                        <motion.div
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                          className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-[rgba(0,201,80,0.12)]"
                        >
                          <TrendingUp className="w-2.5 h-2.5 text-[#00c950]" />
                          <span className="text-[#00c950] text-[10px] font-bold">{affiliate.trend}</span>
                        </motion.div>
                      </div>
                      <div className="text-lg font-bold" style={{ color: affiliate.color }}>
                        R$ {(affiliate.commission / 1000).toFixed(1)}k
                      </div>
                    </div>
                    
                    {/* Performance Sparkline */}
                    <div className="flex items-end gap-0.5 h-10 w-16 shrink-0">
                      {affiliate.performance.map((h, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 0.5 + idx * 0.03, duration: 0.3 }}
                          className="flex-1 rounded-t"
                          style={{ 
                            backgroundColor: affiliate.color,
                            opacity: 0.5 + (idx / affiliate.performance.length) * 0.5 
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Total Afiliados', value: '1.2k', color: '#9810FA' },
                { label: 'Conversão Média', value: '8.4%', color: '#ff8534' },
                { label: 'Taxa Aprovação', value: '94%', color: '#00c950' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="bg-[rgba(255,255,255,0.02)] rounded-lg p-2.5 border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.1)] transition-all group relative overflow-hidden"
                >
                  {/* Glow */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity blur-lg"
                    style={{ background: `radial-gradient(circle at center, ${stat.color}20, transparent)` }}
                  />
                  
                  <div className="relative">
                    <div className="text-[#8696a0] text-[9px] mb-1">{stat.label}</div>
                    <div className="text-sm font-bold" style={{ color: stat.color }}>{stat.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Background glow - Paleta do site */}
        <div className="absolute top-1/4 -left-16 w-40 h-40 bg-[#9810FA] rounded-full blur-3xl opacity-[0.1] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-16 w-40 h-40 bg-[#ff8534] rounded-full blur-3xl opacity-[0.1] pointer-events-none" />
      </div>
    </div>
  );
}
