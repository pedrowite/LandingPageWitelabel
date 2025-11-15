import { motion } from 'motion/react';
import { Sparkles, TrendingUp, ArrowUpRight } from 'lucide-react';

export default function PremiumDashboard() {
  const cryptos = [
    { 
      name: 'Bitcoin', 
      symbol: 'BTC', 
      amount: '0.0234', 
      value: 5890, 
      change: '+12.5%', 
      color: '#F7931A',
      logo: '₿'
    },
    { 
      name: 'Ethereum', 
      symbol: 'ETH', 
      amount: '0.542', 
      value: 12340, 
      change: '+8.3%', 
      color: '#627EEA',
      logo: 'Ξ'
    },
    { 
      name: 'USDT', 
      symbol: 'USDT', 
      amount: '8.450', 
      value: 43290, 
      change: '+0.1%', 
      color: '#26A17B',
      logo: '₮'
    }
  ];

  const affiliates = [
    { name: 'João Silva', sales: 234, commission: 12400, trend: '+23%', avatar: 'JS', rank: 1, color: '#9810FA' },
    { name: 'Maria Lima', sales: 189, commission: 9800, trend: '+18%', avatar: 'ML', rank: 2, color: '#ff8534' },
    { name: 'Pedro Oliveira', sales: 156, commission: 8200, trend: '+31%', avatar: 'PO', rank: 3, color: '#00c950' }
  ];

  const totalCrypto = cryptos.reduce((sum, crypto) => sum + crypto.value, 0);
  const totalCommission = affiliates.reduce((sum, a) => sum + a.commission, 0);

  return (
    <div className="relative w-full h-full">
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
              <Sparkles className="w-4 h-4 text-[#ff8534]" />
              <span className="text-white text-sm font-bold">Funcionalidades Premium</span>
            </div>
            
            <div className="flex items-center gap-1.5 text-[#00c950] text-[10px] font-bold">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00c950] animate-pulse" />
              LIVE
            </div>
          </div>
        </div>

        {/* Content Area - Grid 2 colunas */}
        <div className="relative h-[calc(100%-64px)] p-6">
          <div className="h-full grid grid-cols-2 gap-4">
            
            {/* LEFT: Crypto Dashboard */}
            <div className="flex flex-col gap-4">
              {/* Header com Total */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-[#8696a0] text-xs mb-1">Saldo em Cripto</h3>
                  <div className="text-white text-2xl font-bold">R$ {totalCrypto.toLocaleString()}</div>
                </div>
                <motion.div
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(0,201,80,0.15)] border border-[rgba(0,201,80,0.3)]"
                >
                  <TrendingUp className="w-3 h-3 text-[#00c950]" />
                  <span className="text-[#00c950] text-xs font-bold">+7.2%</span>
                </motion.div>
              </div>
              
              {/* Crypto Cards */}
              <div className="flex-1 space-y-3 overflow-auto">
                {cryptos.map((crypto, i) => (
                  <motion.div
                    key={crypto.symbol}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="relative bg-gradient-to-br from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.01)] rounded-xl p-4 border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.15)] transition-all group overflow-hidden"
                    whileHover={{ y: -4, scale: 1.02 }}
                  >
                    {/* Glow effect */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ 
                        background: `radial-gradient(circle at 50% 0%, ${crypto.color}20, transparent 70%)` 
                      }}
                    />
                    
                    <div className="relative z-10 flex items-center gap-4">
                      {/* Logo */}
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg flex-shrink-0"
                        style={{ backgroundColor: crypto.color }}
                      >
                        {crypto.logo}
                      </div>
                      
                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <div className="text-white font-bold text-sm">{crypto.symbol}</div>
                          <motion.div
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                            className="flex items-center gap-1 px-2 py-0.5 rounded bg-[rgba(0,201,80,0.12)]"
                          >
                            <ArrowUpRight className="w-2.5 h-2.5 text-[#00c950]" />
                            <span className="text-[#00c950] text-[10px] font-bold">{crypto.change}</span>
                          </motion.div>
                        </div>
                        <div className="text-[#8696a0] text-xs mb-2">{crypto.amount} {crypto.symbol}</div>
                        <div className="text-white text-lg font-bold">
                          R$ {crypto.value.toLocaleString()}
                        </div>
                      </div>
                    </div>
                    
                    {/* Mini chart */}
                    <div className="mt-3 flex items-end gap-0.5 h-6">
                      {[40, 45, 42, 55, 52, 60, 58, 68, 65, 75, 70, 80].map((h, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 0.5 + idx * 0.03, duration: 0.3 }}
                          className="flex-1 rounded-t opacity-50"
                          style={{ backgroundColor: crypto.color }}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Action Button */}
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 8px 30px rgba(255,133,52,0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#ff8534] to-[#9810FA] rounded-xl py-3 text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Sacar Criptomoedas
              </motion.button>
            </div>

            {/* RIGHT: Affiliates Dashboard */}
            <div className="flex flex-col gap-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-[#8696a0] text-xs mb-1">Top 3 Afiliados</h3>
                  <div className="text-white text-2xl font-bold">R$ {(totalCommission / 1000).toFixed(1)}k</div>
                </div>
                <div className="text-[#8696a0] text-xs">Este mês</div>
              </div>
              
              {/* Affiliates Cards */}
              <div className="flex-1 space-y-3 overflow-auto">
                {affiliates.map((affiliate, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: i * 0.08, type: "spring" }}
                    className="relative bg-gradient-to-br from-[rgba(255,255,255,0.04)] to-[rgba(255,255,255,0.01)] rounded-xl p-4 border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.15)] transition-all group overflow-hidden"
                    whileHover={{ y: -6, scale: 1.03 }}
                  >
                    {/* Rank badge */}
                    <div 
                      className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
                      style={{ background: `linear-gradient(135deg, ${affiliate.color}, ${affiliate.color}dd)` }}
                    >
                      {affiliate.rank}
                    </div>
                    
                    {/* Glow effect */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ 
                        background: `radial-gradient(circle at 50% 0%, ${affiliate.color}20, transparent 70%)` 
                      }}
                    />
                    
                    <div className="relative z-10 flex items-center gap-3">
                      {/* Avatar */}
                      <div className="relative">
                        <div 
                          className="w-14 h-14 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg"
                          style={{ background: `linear-gradient(135deg, ${affiliate.color}, ${affiliate.color}cc)` }}
                        >
                          {affiliate.avatar}
                        </div>
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          style={{ background: `linear-gradient(135deg, ${affiliate.color}, ${affiliate.color}cc)` }}
                          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        />
                      </div>
                      
                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="text-white font-bold text-sm mb-1 truncate">
                          {affiliate.name}
                        </div>
                        <div className="text-[#8696a0] text-xs mb-2">{affiliate.sales} vendas</div>
                        <div className="flex items-center justify-between">
                          <div className="text-lg font-bold" style={{ color: affiliate.color }}>
                            R$ {(affiliate.commission / 1000).toFixed(1)}k
                          </div>
                          <motion.div
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                            className="flex items-center gap-1 px-2 py-0.5 rounded bg-[rgba(0,201,80,0.12)]"
                          >
                            <TrendingUp className="w-2.5 h-2.5 text-[#00c950]" />
                            <span className="text-[#00c950] text-[10px] font-bold">{affiliate.trend}</span>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'Total Afiliados', value: '1.2k', color: '#9810FA' },
                  { label: 'Conversão', value: '8.4%', color: '#ff8534' },
                  { label: 'Aprovação', value: '94%', color: '#00c950' }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="bg-[rgba(255,255,255,0.02)] rounded-lg p-2 border border-[rgba(255,255,255,0.06)]"
                  >
                    <div className="text-[#8696a0] text-[9px] mb-1">{stat.label}</div>
                    <div className="text-sm font-bold" style={{ color: stat.color }}>{stat.value}</div>
                  </motion.div>
                ))}
              </div>
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
