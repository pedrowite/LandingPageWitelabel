import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';
import pixIcon from 'figma:asset/302613e65cda1ab7fe673e297f1fbed1179081e4.png';
import mastercardIcon from 'figma:asset/5b8e1bb987eab8e9210609e9683883549601f997.png';
import visaIcon from 'figma:asset/c128e682665a3f3ea1676850579fb2bbb0b9e887.png';
import boletoIcon from 'figma:asset/c0b70bb5fb70478148e5c73ae2e793a16cf4a2af.png';

export default function TransactionsVisual() {
  return (
    <div className="absolute inset-0 p-6">
      {/* Main Dashboard Container */}
      <div className="relative h-full bg-gradient-to-br from-[rgba(17,17,20,0.9)] to-[rgba(11,11,14,0.9)] rounded-2xl border border-[rgba(255,255,255,0.12)] backdrop-blur-xl overflow-hidden">
        
        {/* Header - Sem Abas */}
        <div className="relative z-10 px-5 py-4 border-b border-[rgba(255,255,255,0.08)] bg-[rgba(11,11,14,0.5)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#9810FA]" />
              <div className="w-2 h-2 rounded-full bg-[#ff8534]" />
              <div className="w-2 h-2 rounded-full bg-[#00c950]" />
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-white text-sm font-bold">Transações ao Vivo</span>
            </div>
            
            <div className="flex items-center gap-1.5 text-[#00c950] text-[10px] font-bold">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00c950] animate-pulse" />
              LIVE
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative h-[calc(100%-64px)] p-6">
          <LiveTransactions />
        </div>

        {/* Background glow */}
        <div className="absolute top-1/4 -left-16 w-48 h-48 bg-[#ff8534] rounded-full blur-3xl opacity-[0.08] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-16 w-48 h-48 bg-[#9810FA] rounded-full blur-3xl opacity-[0.08] pointer-events-none" />
      </div>
    </div>
  );
}

// Live Transactions
function LiveTransactions() {
  const transactions = [
    { method: 'PIX', icon: pixIcon, value: 'R$ 1.459,43', fee: 'R$ 72,97', time: 'Agora', client: 'Loja Virtual XYZ' },
    { method: 'Visa', icon: visaIcon, value: 'R$ 2.890,45', fee: 'R$ 144,52', time: '2 min', client: 'E-commerce ABC' },
    { method: 'PIX', icon: pixIcon, value: 'R$ 3.245,76', fee: 'R$ 162,29', time: '5 min', client: 'Marketplace 123' },
    { method: 'Mastercard', icon: mastercardIcon, value: 'R$ 589,50', fee: 'R$ 29,48', time: '8 min', client: 'Delivery Fast' },
    { method: 'PIX', icon: pixIcon, value: 'R$ 945,94', fee: 'R$ 47,30', time: '12 min', client: 'Serviços Tech' }
  ];

  return (
    <div className="h-full flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-white text-lg font-bold">Faturamento em Tempo Real</h3>
        <div className="text-white text-2xl font-bold">R$ 9.131,08</div>
      </div>
      
      {/* Transactions List */}
      <div className="space-y-2 flex-1 overflow-auto">
        {transactions.map((transaction, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06 }}
            className="flex items-center gap-3 p-3 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.12)] transition-all"
          >
            {/* Icon */}
            <div className="w-10 h-10 rounded-lg bg-[rgba(255,255,255,0.05)] flex items-center justify-center flex-shrink-0">
              <img src={transaction.icon} alt={transaction.method} className="w-5 h-5 object-contain" />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-white font-bold text-sm">{transaction.client}</span>
                <span className="text-[#8696a0] text-[10px]">via {transaction.method}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white text-xs">{transaction.value}</span>
                <motion.span
                  className="text-[#ff8534] text-xs font-bold"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                >
                  +{transaction.fee}
                </motion.span>
              </div>
            </div>

            {/* Status */}
            <div className="flex flex-col items-end gap-1 flex-shrink-0">
              <span className="text-[#8696a0] text-[10px]">{transaction.time}</span>
              <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-[rgba(0,201,80,0.15)]">
                <CheckCircle size={10} className="text-[#00c950]" />
                <span className="text-[#00c950] text-[10px] font-bold">OK</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Volume', value: 'R$ 765.312,22', color: '#9810FA' },
          { label: 'Comissões', value: 'R$ 91.837,46', color: '#ff8534' },
          { label: 'Aprovação', value: '99.8%', color: '#00c950' }
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.08 }}
            className="bg-[rgba(255,255,255,0.02)] rounded-lg p-3 border border-[rgba(255,255,255,0.06)]"
          >
            <div className="text-[#8696a0] text-[10px] mb-1">{stat.label}</div>
            <div className="text-lg font-bold" style={{ color: stat.color }}>{stat.value}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}