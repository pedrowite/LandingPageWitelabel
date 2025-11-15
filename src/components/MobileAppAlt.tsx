import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, TrendingUp, Settings, ArrowUpRight, ArrowDownLeft,
  CreditCard, Zap, Check, BarChart3, Wallet, DollarSign, 
  ChevronRight, User, Bell, Shield, Globe
} from 'lucide-react';
import { ThemeMode } from '../App';

interface MobileAppAltProps {
  theme: ThemeMode;
}

type Screen = 'home' | 'analytics' | 'transactions';

export default function MobileAppAlt({ theme }: MobileAppAltProps) {
  const [activeScreen, setActiveScreen] = useState<Screen>('home');

  const navItems = [
    { id: 'home' as Screen, icon: Home, label: 'Início', color: '#ff8534' },
    { id: 'analytics' as Screen, icon: BarChart3, label: 'Analytics', color: '#9810FA' },
    { id: 'transactions' as Screen, icon: Wallet, label: 'Transações', color: '#ff6900' }
  ];

  const transactions = [
    { id: 1, name: 'João Silva', amount: 'R$ 299,90', type: 'in', status: 'Aprovado', method: 'PIX', time: '14:23' },
    { id: 2, name: 'Maria Costa', amount: 'R$ 1.250,00', type: 'in', status: 'Aprovado', method: 'Cartão', time: '13:45' },
    { id: 3, name: 'Pedro Santos', amount: 'R$ 89,90', type: 'in', status: 'Aprovado', method: 'PIX', time: '12:18' },
    { id: 4, name: 'Ana Paula', amount: 'R$ 450,00', type: 'in', status: 'Pendente', method: 'Boleto', time: '11:52' },
    { id: 5, name: 'Carlos Lima', amount: 'R$ 780,00', type: 'in', status: 'Aprovado', method: 'Cartão', time: '10:30' },
    { id: 6, name: 'Juliana Mendes', amount: 'R$ 150,00', type: 'in', status: 'Aprovado', method: 'PIX', time: '09:15' }
  ];

  const dailyRevenue = {
    total: 'R$ 3.019,80',
    pix: { amount: 'R$ 539,80', count: 3, percentage: 18 },
    card: { amount: 'R$ 2.030,00', count: 2, percentage: 67 },
    boleto: { amount: 'R$ 450,00', count: 1, percentage: 15 }
  };

  const weeklyData = [
    { day: 'Seg', amount: 2100, label: '08/11' },
    { day: 'Ter', amount: 1450, label: '09/11' },
    { day: 'Qua', amount: 3200, label: '10/11' },
    { day: 'Qui', amount: 1850, label: '11/11' },
    { day: 'Sex', amount: 2800, label: '12/11' },
    { day: 'Sáb', amount: 3650, label: '13/11' },
    { day: 'Dom', amount: 3019, label: 'Hoje' }
  ];

  return (
    <section className="relative py-16 px-6">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-white mb-6 leading-tight text-[55px] font-bold">
            App mobile com{' '}
            <span className="bg-gradient-to-r from-[#FFFFFF] via-[#FED5A7] to-[#FFBF77] bg-clip-text text-transparent">
              sua marca
            </span>
          </h2>
          <p className="text-[#A0A0A5] text-xl max-w-2xl mx-auto">
            Interface minimalista e profissional totalmente personalizável
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Navigation Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3 flex flex-col items-center lg:items-start"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveScreen(item.id)}
                className={`w-full text-left p-6 rounded-2xl border-2 transition-all group relative ${
                  activeScreen === item.id
                    ? 'bg-[rgba(255,255,255,0.08)] border-[rgba(255,255,255,0.2)]'
                    : 'bg-[rgba(17,17,20,0.4)] border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.15)]'
                }`}
                whileHover={{ x: 5 }}
              >
                {/* Active glow */}
                {activeScreen === item.id && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 rounded-2xl opacity-20 blur-xl -z-10"
                    style={{ background: item.color }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}

                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ 
                      background: activeScreen === item.id ? `${item.color}20` : 'rgba(255,255,255,0.05)'
                    }}
                  >
                    <item.icon 
                      className="w-7 h-7" 
                      style={{ color: activeScreen === item.id ? item.color : '#A0A0A5' }}
                      strokeWidth={2}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-bold text-xl mb-1 ${
                      activeScreen === item.id ? 'text-white' : 'text-[#A0A0A5]'
                    }`}>
                      {item.label}
                    </h3>
                    <p className="text-[#707075] text-sm">
                      {item.id === 'home' && 'Visão geral do dashboard'}
                      {item.id === 'analytics' && 'Métricas e relatórios'}
                      {item.id === 'transactions' && 'Histórico de pagamentos'}
                    </p>
                  </div>
                  <motion.div
                    animate={{ x: activeScreen === item.id ? 5 : 0 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <ChevronRight 
                      className="w-6 h-6"
                      style={{ color: activeScreen === item.id ? item.color : '#A0A0A5' }}
                    />
                  </motion.div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Right - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center sticky top-8"
          >
            <div className="relative">
              {/* Phone Frame */}
              <div 
                className="relative w-[340px] h-[700px] rounded-[50px] p-3 shadow-2xl"
                style={{
                  background: 'linear-gradient(145deg, #1a1a1f 0%, #0f0f12 100%)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                {/* Screen */}
                <div className="w-full h-full rounded-[38px] overflow-hidden bg-[#000000] relative">
                  {/* Status Bar */}
                  <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-8 z-20">
                    <span className="text-white text-sm font-medium">9:41</span>
                    <div className="w-24 h-7 bg-black rounded-full" />
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-3 rounded-sm border border-white opacity-60" />
                      <div className="w-0.5 h-2 bg-white opacity-60" />
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="h-full pt-12 pb-24 bg-[#0a0a0d] overflow-hidden">
                    <AnimatePresence mode="wait">
                      {/* HOME SCREEN */}
                      {activeScreen === 'home' && (
                        <motion.div
                          key="home"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="h-full px-6 py-6 overflow-y-auto"
                        >
                          {/* Header */}
                          <div className="flex items-center justify-between mb-8">
                            <div>
                              <p className="text-white/50 text-sm mb-1">Olá, bem-vindo</p>
                              <h1 className="text-white font-bold text-2xl">Dashboard</h1>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#ff8534] to-[#9810FA] flex items-center justify-center">
                              <User className="w-5 h-5 text-white" strokeWidth={2.5} />
                            </div>
                          </div>

                          {/* Balance Card */}
                          <motion.div
                            className="p-6 rounded-3xl mb-6 relative overflow-hidden"
                            style={{
                              background: 'linear-gradient(135deg, #ff8534 0%, #9810FA 100%)'
                            }}
                            whileHover={{ scale: 1.02 }}
                          >
                            <p className="text-white/80 text-sm mb-2">Saldo Total</p>
                            <h2 className="text-white font-bold text-4xl mb-4">R$ 12.847,90</h2>
                            <div className="flex items-center gap-2 text-white/90 text-sm">
                              <ArrowUpRight className="w-4 h-4" />
                              <span>+18,2% este mês</span>
                            </div>
                          </motion.div>

                          {/* Quick Stats */}
                          <div className="grid grid-cols-2 gap-3 mb-6">
                            {[
                              { label: 'Receita Hoje', value: 'R$ 2.450', icon: DollarSign, color: '#ff8534' },
                              { label: 'Transações', value: '142', icon: Zap, color: '#9810FA' }
                            ].map((stat, i) => (
                              <motion.div
                                key={i}
                                className="p-4 rounded-2xl bg-[#141418] border border-[rgba(255,255,255,0.08)]"
                                whileHover={{ scale: 1.05 }}
                              >
                                <div 
                                  className="w-10 h-10 rounded-xl mb-3 flex items-center justify-center"
                                  style={{ background: `${stat.color}20` }}
                                >
                                  <stat.icon className="w-5 h-5" style={{ color: stat.color }} strokeWidth={2} />
                                </div>
                                <p className="text-white/50 text-xs mb-1">{stat.label}</p>
                                <p className="text-white font-bold text-lg">{stat.value}</p>
                              </motion.div>
                            ))}
                          </div>

                          {/* Recent Activity */}
                          <div>
                            <h3 className="text-white font-semibold mb-3">Atividade Recente</h3>
                            <div className="space-y-2">
                              {transactions.slice(0, 3).map((tx) => (
                                <div 
                                  key={tx.id}
                                  className="p-3 rounded-xl bg-[#141418] border border-[rgba(255,255,255,0.06)] flex items-center gap-3"
                                >
                                  <div className="w-10 h-10 rounded-full bg-[#00c95020] flex items-center justify-center">
                                    <ArrowUpRight className="w-5 h-5 text-[#00c950]" strokeWidth={2} />
                                  </div>
                                  <div className="flex-1">
                                    <p className="text-white text-sm font-medium">{tx.name}</p>
                                    <p className="text-white/40 text-xs">{tx.method}</p>
                                  </div>
                                  <p className="text-[#00c950] font-bold text-sm">{tx.amount}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* ANALYTICS SCREEN */}
                      {activeScreen === 'analytics' && (
                        <motion.div
                          key="analytics"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="h-full px-6 py-6 overflow-y-auto"
                        >
                          <h1 className="text-white font-bold text-2xl mb-6">Analytics</h1>

                          {/* Chart with Days */}
                          <div className="p-5 rounded-3xl bg-[#141418] border border-[rgba(255,255,255,0.08)] mb-6">
                            <div className="flex items-center justify-between mb-4">
                              <p className="text-white/50 text-sm">Faturamento Semanal</p>
                              <p className="text-[#ff8534] text-xs font-semibold">R$ 18.069</p>
                            </div>
                            <div className="flex items-end justify-between gap-1.5 h-40 mb-2">
                              {weeklyData.map((day, i) => {
                                const maxAmount = 3650;
                                const height = (day.amount / maxAmount) * 100;
                                const isToday = day.label === 'Hoje';
                                
                                return (
                                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                                    <motion.div
                                      className="w-full rounded-t-lg relative group"
                                      style={{
                                        background: isToday
                                          ? 'linear-gradient(to top, #ff8534, #9810FA)'
                                          : 'rgba(255,255,255,0.1)',
                                        height: `${height}%`
                                      }}
                                      initial={{ height: 0 }}
                                      animate={{ height: `${height}%` }}
                                      transition={{ delay: i * 0.1, duration: 0.5 }}
                                    >
                                      {/* Tooltip on hover */}
                                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#1a1a1f] px-2 py-1 rounded-lg whitespace-nowrap">
                                        <p className="text-white text-[10px] font-semibold">R$ {day.amount.toLocaleString('pt-BR')}</p>
                                      </div>
                                    </motion.div>
                                    <p className={`text-[10px] font-semibold ${isToday ? 'text-[#ff8534]' : 'text-white/40'}`}>
                                      {day.day}
                                    </p>
                                  </div>
                                );
                              })}
                            </div>
                            <div className="flex items-center justify-between pt-3 border-t border-[rgba(255,255,255,0.06)]">
                              <p className="text-white/30 text-[10px]">08/11 - 14/11</p>
                              <div className="flex items-center gap-2">
                                <TrendingUp className="w-3 h-3 text-[#00c950]" strokeWidth={2} />
                                <span className="text-[#00c950] text-[10px] font-semibold">+24% vs semana anterior</span>
                              </div>
                            </div>
                          </div>

                          {/* Metrics */}
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { label: 'Taxa Conversão', value: '3.8%', trend: '+0.4%', color: '#ff8534' },
                              { label: 'Ticket Médio', value: 'R$ 287', trend: '+12%', color: '#9810FA' },
                              { label: 'Aprovação', value: '98.7%', trend: '+2.1%', color: '#00c950' },
                              { label: 'Clientes', value: '1.2k', trend: '+156', color: '#ff6900' }
                            ].map((metric, i) => (
                              <motion.div
                                key={i}
                                className="p-4 rounded-2xl bg-[#141418] border border-[rgba(255,255,255,0.08)]"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <p className="text-white/50 text-xs mb-2">{metric.label}</p>
                                <p className="text-white font-bold text-xl mb-1">{metric.value}</p>
                                <p className="text-xs font-semibold" style={{ color: metric.color }}>
                                  {metric.trend}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {/* TRANSACTIONS SCREEN */}
                      {activeScreen === 'transactions' && (
                        <motion.div
                          key="transactions"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="h-full px-6 py-6 overflow-y-auto"
                        >
                          <h1 className="text-white font-bold text-2xl mb-6">Hoje</h1>

                          {/* Daily Revenue Cards */}
                          <div className="mb-6 space-y-3">
                            {/* Total */}
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="p-5 rounded-2xl border-2"
                              style={{
                                background: 'linear-gradient(135deg, #ff8534 0%, #9810FA 100%)',
                                borderColor: 'rgba(255,255,255,0.2)'
                              }}
                            >
                              <p className="text-white/80 text-xs mb-2">Faturamento do Dia</p>
                              <h2 className="text-white font-bold text-3xl mb-3">{dailyRevenue.total}</h2>
                              <div className="flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-white" strokeWidth={2.5} />
                                <span className="text-white/90 text-sm font-semibold">6 transações</span>
                              </div>
                            </motion.div>

                            {/* Payment Methods Breakdown */}
                            <div className="grid grid-cols-3 gap-2">
                              <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 }}
                                className="p-3 rounded-xl bg-[#141418] border border-[rgba(255,255,255,0.08)]"
                              >
                                <div className="w-8 h-8 rounded-lg bg-[#ff853420] flex items-center justify-center mb-2">
                                  <Zap className="w-4 h-4 text-[#ff8534]" strokeWidth={2.5} />
                                </div>
                                <p className="text-white/50 text-[10px] mb-1">PIX</p>
                                <p className="text-white font-bold text-sm">{dailyRevenue.pix.amount}</p>
                                <p className="text-[#ff8534] text-[10px] font-semibold">{dailyRevenue.pix.count} vendas</p>
                              </motion.div>

                              <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.15 }}
                                className="p-3 rounded-xl bg-[#141418] border border-[rgba(255,255,255,0.08)]"
                              >
                                <div className="w-8 h-8 rounded-lg bg-[#9810FA20] flex items-center justify-center mb-2">
                                  <CreditCard className="w-4 h-4 text-[#9810FA]" strokeWidth={2.5} />
                                </div>
                                <p className="text-white/50 text-[10px] mb-1">Cartão</p>
                                <p className="text-white font-bold text-sm">{dailyRevenue.card.amount}</p>
                                <p className="text-[#9810FA] text-[10px] font-semibold">{dailyRevenue.card.count} vendas</p>
                              </motion.div>

                              <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="p-3 rounded-xl bg-[#141418] border border-[rgba(255,255,255,0.08)]"
                              >
                                <div className="w-8 h-8 rounded-lg bg-[#ff690020] flex items-center justify-center mb-2">
                                  <BarChart3 className="w-4 h-4 text-[#ff6900]" strokeWidth={2.5} />
                                </div>
                                <p className="text-white/50 text-[10px] mb-1">Boleto</p>
                                <p className="text-white font-bold text-sm">{dailyRevenue.boleto.amount}</p>
                                <p className="text-[#ff6900] text-[10px] font-semibold">{dailyRevenue.boleto.count} venda</p>
                              </motion.div>
                            </div>
                          </div>

                          {/* Transactions List - Minimal */}
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <h3 className="text-white/60 text-sm font-semibold">Histórico</h3>
                              <div className="w-2 h-2 rounded-full bg-[#00c950]" />
                            </div>
                            <div className="space-y-2">
                              {transactions.map((tx, i) => (
                                <motion.div
                                  key={tx.id}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.3 + i * 0.05 }}
                                  className="flex items-center justify-between p-3 rounded-xl bg-[#141418] border border-[rgba(255,255,255,0.06)]"
                                >
                                  <div className="flex items-center gap-2">
                                    <div 
                                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                                      style={{ background: '#00c95015' }}
                                    >
                                      <Check className="w-4 h-4 text-[#00c950]" strokeWidth={2.5} />
                                    </div>
                                    <div>
                                      <p className="text-white text-xs font-medium">{tx.name}</p>
                                      <p className="text-white/30 text-[10px]">{tx.time} • {tx.method}</p>
                                    </div>
                                  </div>
                                  <p className="text-white font-bold text-sm">{tx.amount}</p>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Bottom Nav Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-[#141418]/95 backdrop-blur-xl border-t border-[rgba(255,255,255,0.08)]">
                    <div className="flex items-center justify-center gap-12 h-full px-6">
                      {navItems.map((item) => (
                        <motion.button
                          key={item.id}
                          onClick={() => setActiveScreen(item.id)}
                          className="flex flex-col items-center gap-1 relative"
                        >
                          {activeScreen === item.id && (
                            <motion.div
                              layoutId="activeNav"
                              className="absolute -top-2 w-12 h-1 rounded-full"
                              style={{ background: item.color }}
                            />
                          )}
                          <item.icon 
                            className="w-6 h-6" 
                            style={{ color: activeScreen === item.id ? item.color : '#707075' }}
                            strokeWidth={2}
                          />
                          <span 
                            className="text-xs font-medium"
                            style={{ color: activeScreen === item.id ? item.color : '#707075' }}
                          >
                            {item.label}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-4 rounded-[60px] opacity-30 blur-3xl -z-10"
                style={{ background: 'linear-gradient(135deg, #ff8534 0%, #9810FA 100%)' }}
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}