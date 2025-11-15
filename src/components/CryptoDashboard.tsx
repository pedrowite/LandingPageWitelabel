import { motion } from 'motion/react';
import { TrendingUp, ArrowUpRight, Wallet } from 'lucide-react';

export default function CryptoDashboard() {
  const cryptos = [
    { 
      name: 'Bitcoin', 
      symbol: 'BTC', 
      amount: '0.0234', 
      value: 5890, 
      change: '+12.5%', 
      color: '#F7931A',
      logo: '₿',
      sparkline: [40, 45, 42, 55, 52, 60, 58, 68, 65, 75, 70, 80]
    },
    { 
      name: 'Ethereum', 
      symbol: 'ETH', 
      amount: '0.542', 
      value: 12340, 
      change: '+8.3%', 
      color: '#627EEA',
      logo: 'Ξ',
      sparkline: [50, 48, 52, 55, 60, 58, 65, 70, 68, 72, 75, 78]
    },
    { 
      name: 'USDT', 
      symbol: 'USDT', 
      amount: '8.450', 
      value: 43290, 
      change: '+0.1%', 
      color: '#26A17B',
      logo: '₮',
      sparkline: [60, 61, 60, 61, 60, 61, 61, 60, 61, 60, 61, 60]
    }
  ];

  const totalCrypto = cryptos.reduce((sum, crypto) => sum + crypto.value, 0);

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
              <Wallet className="w-4 h-4 text-[#ff8534]" />
              <span className="text-white text-sm font-bold">Saldo em Cripto</span>
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
            
            {/* Total Balance Header */}
            <div className="flex items-end justify-between">
              <div>
                <div className="text-[#8696a0] text-xs mb-1">Saldo Total</div>
                <div className="text-white text-3xl font-bold">
                  R$ {totalCrypto.toLocaleString('pt-BR')}
                </div>
              </div>
              <motion.div
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[rgba(0,201,80,0.15)] border border-[rgba(0,201,80,0.25)]"
              >
                <TrendingUp className="w-3.5 h-3.5 text-[#00c950]" />
                <span className="text-[#00c950] text-sm font-bold">+7.2%</span>
              </motion.div>
            </div>
            
            {/* Crypto Cards Grid */}
            <div className="flex-1 grid grid-rows-3 gap-3 overflow-hidden">
              {cryptos.map((crypto, i) => (
                <motion.div
                  key={crypto.symbol}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  whileHover={{ x: 4, scale: 1.02 }}
                  className="relative group"
                >
                  {/* Glow effect */}
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"
                    style={{ 
                      background: `radial-gradient(circle at 0% 50%, ${crypto.color}30, transparent 70%)` 
                    }}
                  />
                  
                  <div className="relative h-full bg-gradient-to-br from-[rgba(255,255,255,0.04)] to-[rgba(255,255,255,0.01)] rounded-xl p-4 border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.15)] transition-all flex items-center gap-4">
                    
                    {/* Logo */}
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg shrink-0"
                      style={{ backgroundColor: crypto.color }}
                    >
                      {crypto.logo}
                    </div>
                    
                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="text-white font-bold text-sm">{crypto.symbol}</div>
                        <div className="text-[#8696a0] text-xs">{crypto.name}</div>
                      </div>
                      <div className="text-[#8696a0] text-xs mb-1">{crypto.amount} {crypto.symbol}</div>
                      <div className="flex items-center gap-2">
                        <div className="text-white text-lg font-bold">
                          R$ {crypto.value.toLocaleString('pt-BR')}
                        </div>
                        <motion.div
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                          className="flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-[rgba(0,201,80,0.12)]"
                        >
                          <ArrowUpRight className="w-2.5 h-2.5 text-[#00c950]" />
                          <span className="text-[#00c950] text-[10px] font-bold">{crypto.change}</span>
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Mini Sparkline */}
                    <div className="flex items-end gap-0.5 h-10 w-16 shrink-0">
                      {crypto.sparkline.map((h, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 0.5 + idx * 0.03, duration: 0.3 }}
                          className="flex-1 rounded-t"
                          style={{ 
                            backgroundColor: crypto.color,
                            opacity: 0.6 + (idx / crypto.sparkline.length) * 0.4 
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
                { label: 'Valorização 24h', value: '+R$ 4.2k', color: '#00c950' },
                { label: 'Transações', value: '127', color: '#9810FA' },
                { label: 'Última atualização', value: 'Agora', color: '#ff8534' }
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
        <div className="absolute top-1/4 -left-16 w-40 h-40 bg-[#ff8534] rounded-full blur-3xl opacity-[0.1] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-16 w-40 h-40 bg-[#9810FA] rounded-full blur-3xl opacity-[0.1] pointer-events-none" />
      </div>
    </div>
  );
}
