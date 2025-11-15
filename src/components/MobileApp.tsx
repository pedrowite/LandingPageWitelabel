import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, CreditCard, ArrowUpRight, 
  User, Home, Activity, Check, Sun, Moon, Upload, Search,
  Smartphone, Globe, Zap, Shield, Wallet, Send, MessageCircle
} from 'lucide-react';
import { ThemeMode } from '../App';
import svgPaths from "../imports/svg-kyq22t1hh7";

interface MobileAppProps {
  theme: ThemeMode;
}

type AppTheme = 'light' | 'dark';

export default function MobileApp({ theme }: MobileAppProps) {
  const [appTheme, setAppTheme] = useState<AppTheme>('light');
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Theme colors
  const isDark = appTheme === 'dark';
  const bgPrimary = isDark ? '#0a0a0d' : '#f7f7f7';
  const bgCard = isDark ? '#1a1a1d' : '#ffffff';
  const textPrimary = isDark ? '#ffffff' : '#1e1e2d';
  const textSecondary = isDark ? 'rgba(255,255,255,0.5)' : '#7e848d';
  const border = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)';

  return (
    <section className="relative py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-white mb-6 leading-tight text-[55px] font-bold">
            Seu app mobile com{' '}
            <span className="bg-gradient-to-r from-[#FFFFFF] via-[#FED5A7] to-[#FFBF77] bg-clip-text text-transparent">
              sua marca
            </span>
          </h2>
          <p className="text-[#C0C0C5] text-lg max-w-2xl mx-auto mb-6">
            Design minimalista e moderno, completamente customizável
          </p>

          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)]">
            <motion.div 
              className="w-2 h-2 rounded-full bg-[#ff8534]"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-white/90 text-sm font-medium">Alterne entre tema claro e escuro</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Theme Toggle */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
                <motion.button
                  onClick={() => setAppTheme('light')}
                  className={`px-6 py-3 rounded-xl border-2 transition-all flex items-center gap-2 ${
                    appTheme === 'light'
                      ? 'bg-white text-gray-900 border-white shadow-lg'
                      : 'bg-transparent border-[rgba(255,255,255,0.2)] text-[#C0C0C5] hover:border-[rgba(255,255,255,0.4)]'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Sun className="w-4 h-4" />
                  <span className="font-semibold text-sm">Claro</span>
                </motion.button>

                <motion.button
                  onClick={() => setAppTheme('dark')}
                  className={`px-6 py-3 rounded-xl border-2 transition-all flex items-center gap-2 ${
                    appTheme === 'dark'
                      ? 'bg-gradient-to-r from-[#6d03f5] to-[#40028f] text-white border-transparent shadow-lg'
                      : 'bg-transparent border-[rgba(255,255,255,0.2)] text-[#C0C0C5] hover:border-[rgba(255,255,255,0.4)]'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Moon className="w-4 h-4" />
                  <span className="font-semibold text-sm">Escuro</span>
                </motion.button>
              </div>

              {/* Phone Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative w-[375px] h-[812px] rounded-[3rem] bg-gradient-to-br from-[#1a1a1d] to-[#0f0f11] p-3 shadow-2xl border-4 border-[#2a2a2d]"
                style={{
                  boxShadow: '0 30px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.1) inset'
                }}
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-[#0f0f11] rounded-b-3xl z-30" />

                {/* Screen */}
                <div className="relative h-full rounded-[2.5rem] overflow-hidden" style={{ background: bgPrimary }}>
                  {/* Status Bar */}
                  <div className="absolute top-0 left-0 right-0 px-6 pt-4 pb-2 flex items-center justify-between z-20">
                    <span className="text-sm font-semibold" style={{ color: textPrimary }}>9:41</span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-3 rounded-sm relative" style={{ borderWidth: 1, borderColor: textPrimary }}>
                        <div className="absolute inset-0.5 rounded-[1px]" style={{ background: textPrimary }} />
                      </div>
                    </div>
                  </div>

                  {/* Notification */}
                  <AnimatePresence>
                    {showNotification && (
                      <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -100 }}
                        className="absolute top-14 left-4 right-4 z-30"
                      >
                        <div className="p-4 rounded-2xl shadow-2xl backdrop-blur-xl" style={{ background: bgCard }}>
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6d03f5] to-[#40028f] flex items-center justify-center">
                              <Check className="w-5 h-5 text-white" strokeWidth={3} />
                            </div>
                            <div className="flex-1">
                              <p className="font-bold text-sm mb-0.5" style={{ color: textPrimary }}>Pagamento Recebido</p>
                              <p className="text-xs" style={{ color: textSecondary }}>R$ 20.000,00 via PIX</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Content */}
                  <div className="pt-14 pb-24 h-full overflow-y-auto scrollbar-hide px-5">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={appTheme}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Header with Logo */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            {/* Customizable Logo */}
                            <div className="relative group">
                              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#6d03f5] to-[#40028f] flex items-center justify-center">
                                <span className="text-white font-bold text-xl">M</span>
                              </div>
                              <div className="absolute inset-0 rounded-2xl bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Upload className="w-4 h-4 text-white" />
                              </div>
                            </div>
                            <div>
                              <p className="text-xs" style={{ color: textSecondary }}>Olá,</p>
                              <p className="font-bold text-base" style={{ color: textPrimary }}>Minha Marca!</p>
                            </div>
                          </div>
                          <button className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: bgCard }}>
                            <Search className="w-5 h-5" style={{ color: textSecondary }} />
                          </button>
                        </div>

                        {/* Balance Card */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="relative overflow-hidden p-6 rounded-[20px] bg-gradient-to-br from-[#6d03f5] to-[#40028f] mb-5"
                        >
                          <p className="text-white/70 text-sm font-medium mb-2">Disponível</p>
                          <h2 className="text-white font-bold text-3xl mb-0">R$ 2.000.000,00</h2>
                          
                          {/* Mini Chart */}
                          <div className="absolute right-5 top-1/2 -translate-y-1/2 w-20 h-10 opacity-30">
                            <svg className="w-full h-full" viewBox="0 0 80 40" fill="none">
                              <path d="M0 30 L10 25 L20 28 L30 15 L40 20 L50 10 L60 15 L70 8 L80 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                            </svg>
                          </div>
                        </motion.div>

                        {/* Quick Actions */}
                        <div className="grid grid-cols-4 gap-3 mb-5">
                          {[
                            { icon: CreditCard, label: 'Área Pix', color: '#6d03f5' },
                            { icon: Wallet, label: 'Carteira', color: '#6d03f5' },
                            { icon: Send, label: 'Transações', color: '#6d03f5' },
                            { icon: MessageCircle, label: 'Suporte', color: '#6d03f5' }
                          ].map((action, i) => (
                            <motion.button
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.1 + i * 0.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex flex-col items-center gap-2 p-3 rounded-[20px]"
                              style={{ background: bgCard }}
                            >
                              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: `${action.color}10` }}>
                                <action.icon className="w-6 h-6" style={{ color: action.color, opacity: 0.8 }} strokeWidth={1.5} />
                              </div>
                              <span className="text-[10px] font-medium" style={{ color: textPrimary }}>{action.label}</span>
                            </motion.button>
                          ))}
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-2 gap-3 mb-5">
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="p-4 rounded-[20px]"
                            style={{ background: bgCard }}
                          >
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#6d03f5] to-[#40028f] flex items-center justify-center">
                                <CreditCard className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                              </div>
                              <span className="text-xs font-medium" style={{ color: textSecondary }}>Pix (Hoje)</span>
                            </div>
                            <p className="font-bold text-base" style={{ color: textPrimary }}>R$ 2.199.234,12</p>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.35 }}
                            className="p-4 rounded-[20px]"
                            style={{ background: bgCard }}
                          >
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#6d03f5] to-[#40028f] flex items-center justify-center">
                                <Wallet className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                              </div>
                              <span className="text-xs font-medium" style={{ color: textSecondary }}>Cartão (Hoje)</span>
                            </div>
                            <p className="font-bold text-base" style={{ color: textPrimary }}>R$ 2.199.234,12</p>
                          </motion.div>
                        </div>

                        {/* Transactions */}
                        <div className="p-5 rounded-[20px]" style={{ background: bgCard }}>
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-lg" style={{ color: textPrimary }}>Últimas transações</h3>
                            <button className="text-[#6d03f5] text-sm font-semibold">Ver todas</button>
                          </div>
                          
                          <div className="space-y-3">
                            {[...Array(3)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + i * 0.05 }}
                                className="flex items-center gap-3"
                              >
                                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#0BF30020' }}>
                                  <ArrowUpRight className="w-5 h-5 text-[#3ACA33]" strokeWidth={2.5} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-semibold truncate" style={{ color: textPrimary }}>Pagamento recebido</p>
                                  <p className="text-xs" style={{ color: textSecondary }}>Hoje, 16:36</p>
                                </div>
                                <p className="font-bold text-sm" style={{ color: textPrimary }}>R$ 20.000,00</p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="absolute bottom-0 left-0 right-0 px-0 pb-6 pt-3" style={{ background: isDark ? 'rgba(10,10,13,0.95)' : 'rgba(244,244,244,0.95)' }}>
                    <div className="flex items-center justify-around px-4">
                      {[
                        { id: 'home', icon: Home, label: 'Página inicial', active: true },
                        { id: 'wallet', icon: Wallet, label: 'Carteira', active: false },
                        { id: 'transactions', icon: Activity, label: 'Transações', active: false },
                        { id: 'account', icon: User, label: 'Conta', active: false }
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          className="flex flex-col items-center gap-1 py-2 min-w-[70px]"
                        >
                          <tab.icon
                            className="w-6 h-6"
                            style={{ color: tab.active ? '#6d03f5' : textSecondary }}
                            strokeWidth={2}
                          />
                          <span 
                            className="text-[11px] font-medium text-center leading-tight"
                            style={{ color: tab.active ? '#6d03f5' : textSecondary }}
                          >
                            {tab.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Glow */}
              <motion.div
                className="absolute inset-0 rounded-[3rem] -z-10"
                animate={{
                  boxShadow: [
                    '0 0 60px rgba(109,3,245,0.3)',
                    '0 0 80px rgba(64,2,143,0.4)',
                    '0 0 60px rgba(109,3,245,0.3)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </div>

          {/* Right - Features */}
          <div className="space-y-4">
            {[
              { 
                icon: Smartphone, 
                title: 'Design Minimalista', 
                topics: ['Interface limpa', 'UX otimizada', 'Micro-animações'],
                color: '#6d03f5' 
              },
              { 
                icon: Globe, 
                title: 'Marca Personalizada', 
                topics: ['Logo customizada', 'Cores da marca', 'Tema claro/escuro'],
                color: '#9810FA' 
              },
              { 
                icon: Zap, 
                title: 'Performance Nativa', 
                topics: ['Carregamento <1s', 'Offline-first', 'Push real-time'],
                color: '#ff6900' 
              },
              { 
                icon: Shield, 
                title: 'Deploy Completo', 
                topics: ['App Store pronta', 'Google Play', 'Em 48 horas'],
                color: '#b45dff' 
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="group relative overflow-hidden p-6 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.04)] hover:border-[rgba(255,255,255,0.15)] transition-all"
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `radial-gradient(circle at 0% 0%, ${feature.color}15, transparent 60%)` }}
                />

                <div className="relative flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${feature.color}20` }}
                  >
                    <feature.icon className="w-6 h-6" style={{ color: feature.color }} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-3">{feature.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {feature.topics.map((topic, j) => (
                        <motion.span
                          key={j}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.1 + j * 0.05 }}
                          className="px-3 py-1.5 rounded-lg text-xs font-semibold border"
                          style={{ 
                            background: `${feature.color}10`,
                            borderColor: `${feature.color}30`,
                            color: feature.color
                          }}
                        >
                          {topic}
                        </motion.span>
                      ))}
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
