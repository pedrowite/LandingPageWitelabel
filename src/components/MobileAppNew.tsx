import { motion, AnimatePresence } from 'motion/react';
import { Smartphone, Zap, Shield, TrendingUp, Bell, Clock, BarChart3, CreditCard, Lock, Sparkles, Activity, DollarSign, PieChart, Users, Wallet, Sun, Moon } from 'lucide-react';
import { ThemeMode } from '../App';
import { useState } from 'react';
import imgGooglePlay from 'figma:asset/32df30c8bf818267e72502f4412d0916aab958b6.png';

interface MobileAppNewProps {
  theme: ThemeMode;
}

const floatingCards = [
  {
    icon: Shield,
    title: "Segurança Biométrica",
    description: "Face ID e Touch ID nativos",
    color: '#9810FA',
    position: { top: '15%', left: '8%' }
  },
  {
    icon: Bell,
    title: "Push Notifications",
    description: "Alertas configuráveis por tipo",
    color: '#ff8534',
    position: { top: '15%', right: '8%' }
  },
  {
    icon: BarChart3,
    title: "Relatórios Personalizados",
    description: "Exporte dados em qualquer formato",
    color: '#9810FA',
    position: { bottom: '15%', left: '8%' }
  },
  {
    icon: Lock,
    title: "Criptografia Ponta-a-Ponto",
    description: "Dados protegidos com AES-256",
    color: '#ff8534',
    position: { bottom: '15%', right: '8%' }
  }
];

type ScreenType = 'dashboard' | 'transactions' | 'metrics' | 'wallet';

const screens = [
  { id: 'dashboard', label: 'Dashboard', icon: Activity },
  { id: 'transactions', label: 'Transações', icon: CreditCard },
  { id: 'metrics', label: 'Métricas', icon: BarChart3 },
  { id: 'wallet', label: 'Carteira', icon: Wallet }
];

export default function MobileAppNew({ theme }: MobileAppNewProps) {
  const [activeScreen, setActiveScreen] = useState<ScreenType>('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Color schemes
  const colors = isDarkMode ? {
    background: 'from-[#0B0B0E] to-[#111114]',
    bgSolid: '#0B0B0E',
    bgCard: 'rgba(255,255,255,0.03)',
    border: 'rgba(255,255,255,0.08)',
    text: '#ffffff',
    textSecondary: '#A0A0A5',
    statusBar: '#ffffff',
    navBg: 'rgba(11,11,14,0.95)'
  } : {
    background: 'from-[#F5F5F7] to-[#FFFFFF]',
    bgSolid: '#FFFFFF',
    bgCard: 'rgba(0,0,0,0.05)',
    border: 'rgba(0,0,0,0.12)',
    text: '#1D1D1F',
    textSecondary: '#424245',
    statusBar: '#1D1D1F',
    navBg: 'rgba(255,255,255,0.95)'
  };

  return (
    <section className="relative py-24 px-6 overflow-visible">
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[rgba(255,133,52,0.2)] to-[rgba(152,16,250,0.2)] border border-[rgba(255,255,255,0.2)] mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Smartphone className="text-[#ff8534]" size={24} strokeWidth={2.5} />
            <span className="text-white font-bold text-lg">Mobile App</span>
          </motion.div>

          <h2 className="text-white mb-6 leading-tight sm:text-[55px] font-bold px-4 text-[48px]">
            App mobile com{' '}
            <span className="bg-gradient-to-r from-[#EFD9FF] via-[#FED5A7] to-[#FFBF77] bg-clip-text text-transparent">
              sua marca
            </span>
          </h2>
          <p className="text-[#A0A0A5] text-lg sm:text-xl max-w-3xl mx-auto px-4 mb-6">
            Aplicativo nativo iOS e Android totalmente customizado com sua identidade visual
          </p>

          {/* Store Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-4 flex-wrap px-4"
          >
            {/* App Store Button */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.08)] transition-all group w-[180px]"
            >
              <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="white">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <div className="text-left">
                <p className="text-[#A0A0A5] text-xs leading-none mb-1">Disponível na</p>
                <p className="text-white font-bold leading-none text-[14px]">App Store</p>
              </div>
            </motion.a>

            {/* Google Play Button */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.08)] transition-all group w-[180px]"
            >
              <img src={imgGooglePlay} alt="Google Play" className="w-8 h-8 flex-shrink-0 object-contain" />
              <div className="text-left">
                <p className="text-[#A0A0A5] text-xs leading-none mb-1">Disponível no</p>
                <p className="text-white font-bold leading-none text-[14px]">Google Play</p>
              </div>
            </motion.a>
          </motion.div>

          {/* Theme Toggle - BELOW Store Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mt-10"
          >
            <motion.button
              onClick={() => setIsDarkMode(!isDarkMode)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-28 h-14 rounded-full flex items-center justify-between px-3 transition-all duration-500 shadow-2xl"
              style={{
                background: isDarkMode 
                  ? 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)'
                  : 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)',
                border: isDarkMode ? '2px solid rgba(255,255,255,0.1)' : '2px solid rgba(0,0,0,0.1)'
              }}
            >
              {/* Sliding Circle Background */}
              <motion.div
                className="absolute w-11 h-11 rounded-full shadow-xl flex items-center justify-center"
                style={{
                  background: isDarkMode 
                    ? 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)'
                    : 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
                  left: isDarkMode ? 'calc(100% - 52px)' : '6px',
                  transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                {/* Active Icon inside the circle */}
                {isDarkMode ? (
                  <Moon 
                    className="w-6 h-6 transition-colors duration-300" 
                    style={{ color: '#1a1a1a', strokeWidth: 2.5 }} 
                  />
                ) : (
                  <Sun 
                    className="w-6 h-6 transition-colors duration-300" 
                    style={{ color: '#1a1a1a', strokeWidth: 2.5 }} 
                  />
                )}
              </motion.div>

              {/* Inactive Sun Icon (Left Side - visible only in dark mode) */}
              <div 
                className="relative z-10 flex items-center justify-center w-11 h-11 transition-opacity duration-300"
                style={{ opacity: isDarkMode ? 0.3 : 0 }}
              >
                <Sun 
                  className="w-5 h-5" 
                  style={{ color: '#ffffff', strokeWidth: 2.5 }} 
                />
              </div>

              {/* Inactive Moon Icon (Right Side - visible only in light mode) */}
              <div 
                className="relative z-10 flex items-center justify-center w-11 h-11 transition-opacity duration-300"
                style={{ opacity: !isDarkMode ? 0.3 : 0 }}
              >
                <Moon 
                  className="w-5 h-5" 
                  style={{ color: '#000000', strokeWidth: 2.5 }} 
                />
              </div>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Main Content - Phone in Center with Floating Cards */}
        <div className="relative flex items-center justify-center min-h-[600px] sm:min-h-[800px] px-2">
          {/* Interactive App Badge - Above Phone */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3"
          >
            <motion.div
              className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[rgba(215,75,24,0.2)] to-[rgba(152,16,250,0.2)] border border-[rgba(255,255,255,0.3)] backdrop-blur-xl shadow-xl"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(215,75,24,0.3)',
                  '0 0 30px rgba(152,16,250,0.4)',
                  '0 0 20px rgba(215,75,24,0.3)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="hidden sm:block"
              >
                <Sparkles className="w-4 h-4 text-[#ff8534]" strokeWidth={2.5} />
              </motion.div>
              <span className="text-white font-bold text-xs sm:text-sm">
                <span className="hidden sm:inline">App Interativo - Clique e explore</span>
                <span className="sm:hidden">App Interativo</span>
              </span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#9810FA]" strokeWidth={2.5} />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Central Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative z-20"
          >
            {/* Phone Frame - MAIOR NO MOBILE */}
            <div className="relative w-[310px] h-[640px] sm:w-[340px] sm:h-[700px] lg:w-[380px] lg:h-[780px] rounded-[45px] sm:rounded-[60px] bg-[#0B0B0E] border-[8px] sm:border-[14px] border-[#1a1a1e] shadow-2xl overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 sm:w-40 h-5 sm:h-7 bg-[#0B0B0E] rounded-b-3xl z-30" />

              {/* Screen Content */}
              <div 
                className="relative w-full h-full overflow-hidden transition-colors duration-500"
                style={{
                  background: isDarkMode 
                    ? 'linear-gradient(to bottom right, #0B0B0E, #111114)'
                    : 'linear-gradient(to bottom right, #F5F5F7, #FFFFFF)'
                }}
              >
                {/* Status Bar */}
                <div 
                  className="relative z-10 px-6 sm:px-8 pt-8 sm:pt-10 pb-3 sm:pb-4 flex items-center justify-between text-xs sm:text-sm transition-colors duration-500"
                  style={{ color: colors.statusBar }}
                >
                  <span className="font-semibold">9:41</span>
                  <div className="flex items-center gap-1">
                    <div 
                      className="w-4 h-3 rounded-sm" 
                      style={{ border: `1px solid ${colors.statusBar}` }}
                    />
                    <div 
                      className="w-1.5 h-2 rounded-sm" 
                      style={{ background: colors.statusBar }}
                    />
                  </div>
                </div>

                {/* Futuristic Dashboard */}
                <div className="px-6 pb-24 space-y-6 h-full" style={{ maxHeight: 'calc(100% - 60px)' }}>
                  {/* Header with Dark/Light Toggle */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p 
                        className="text-sm transition-colors duration-500" 
                        style={{ color: colors.textSecondary }}
                      >
                        Bem-vindo de volta
                      </p>
                      <h3 
                        className="text-xl font-bold transition-colors duration-500" 
                        style={{ color: colors.text }}
                      >
                        João Silva
                      </h3>
                    </div>
                  </div>

                  {/* Content based on active screen */}
                  <AnimatePresence mode="wait">
                    {activeScreen === 'dashboard' && (
                      <motion.div
                        key="dashboard"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        {/* Balance Card - Futuristic */}
                        <motion.div
                          className="relative p-6 rounded-3xl overflow-hidden border border-[rgba(215,75,24,0.3)]"
                          style={{
                            background: 'linear-gradient(135deg, rgba(255,133,52,0.2) 0%, rgba(152,16,250,0.2) 100%)'
                          }}
                          animate={{
                            boxShadow: [
                              '0 0 40px rgba(215,75,24,0.4)',
                              '0 0 60px rgba(152,16,250,0.5)',
                              '0 0 40px rgba(215,75,24,0.4)'
                            ]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          {/* Animated grid background */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                              backgroundSize: '20px 20px'
                            }} />
                          </div>

                          {/* Floating particles */}
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            {[...Array(6)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-[#D74B18] to-[#9810FA]"
                                style={{
                                  left: `${Math.random() * 100}%`,
                                  top: `${Math.random() * 100}%`
                                }}
                                animate={{
                                  y: [-20, -60],
                                  opacity: [0, 1, 0]
                                }}
                                transition={{
                                  duration: 2 + Math.random() * 2,
                                  repeat: Infinity,
                                  delay: Math.random() * 2
                                }}
                              />
                            ))}
                          </div>

                          <div className="relative">
                            <p className="text-[#A0A0A5] text-sm mb-2">Saldo Total</p>
                            <div className="flex items-baseline gap-2 mb-4">
                              <span className="text-4xl font-bold transition-colors duration-500" style={{ color: colors.text }}>R$ 247.8K</span>
                              <motion.span 
                                className="text-[#D74B18] text-lg font-semibold px-2 py-1 rounded-lg bg-[rgba(215,75,24,0.2)] border border-[rgba(215,75,24,0.3)]"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                +24%
                              </motion.span>
                            </div>
                            
                            {/* Mini graph */}
                            <div className="flex items-end gap-1 h-12">
                              {[40, 65, 45, 80, 55, 90, 70, 85, 95, 75, 88, 100].map((height, i) => (
                                <motion.div
                                  key={i}
                                  className="flex-1 rounded-t-lg relative"
                                  style={{
                                    background: i === 11 
                                      ? 'linear-gradient(to top, #D74B18, #ff8534)'
                                      : 'linear-gradient(to top, rgba(152,16,250,0.3), rgba(152,16,250,0.6))',
                                    height: `${height}%`
                                  }}
                                  initial={{ height: 0 }}
                                  animate={{ height: `${height}%` }}
                                  transition={{ delay: i * 0.05, duration: 0.5 }}
                                >
                                  {i === 11 && (
                                    <motion.div
                                      className="absolute inset-0 bg-[#D74B18]"
                                      animate={{ opacity: [0.5, 1, 0.5] }}
                                      transition={{ duration: 1.5, repeat: Infinity }}
                                    />
                                  )}
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Corner accent lines */}
                          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[rgba(215,75,24,0.5)] rounded-tl-3xl" />
                          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[rgba(152,16,250,0.5)] rounded-br-3xl" />
                        </motion.div>

                        {/* Quick Stats Grid */}
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { label: 'Transações Hoje', value: '1.2K', icon: TrendingUp, color: '#D74B18' },
                            { label: 'Taxa Aprovação', value: '98.7%', icon: BarChart3, color: '#9810FA' }
                          ].map((stat, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                              className="relative p-4 rounded-2xl overflow-hidden group transition-all duration-500"
                              style={{
                                background: colors.bgCard,
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                borderColor: colors.border
                              }}
                              whileHover={{ scale: 1.02 }}
                            >
                              {/* Hover glow */}
                              <motion.div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                                style={{
                                  background: `radial-gradient(circle at center, ${stat.color}15, transparent)`
                                }}
                              />
                              
                              <div className="relative">
                                <div className="flex items-center gap-2 mb-2">
                                  <div 
                                    className="w-8 h-8 rounded-lg flex items-center justify-center relative"
                                    style={{ background: `${stat.color}20` }}
                                  >
                                    <stat.icon className="w-4 h-4" style={{ color: stat.color }} strokeWidth={2} />
                                    
                                    {/* Pulse effect */}
                                    <motion.div
                                      className="absolute inset-0 rounded-lg"
                                      style={{ border: `1px solid ${stat.color}` }}
                                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                                      transition={{ duration: 2, repeat: Infinity }}
                                    />
                                  </div>
                                </div>
                                <p className="text-lg font-bold transition-colors duration-500" style={{ color: colors.text }}>{stat.value}</p>
                                <p className="text-xs transition-colors duration-500" style={{ color: colors.textSecondary }}>{stat.label}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Recent Transactions */}
                        <div>
                          <h4 className="font-bold mb-3 text-sm flex items-center gap-2 transition-colors duration-500" style={{ color: colors.text }}>
                            <div className="w-1 h-4 rounded-full bg-gradient-to-b from-[#D74B18] to-[#9810FA]" />
                            Transações Recentes
                          </h4>
                          <div className="space-y-2">
                            {[
                              { name: 'Loja Virtual XYZ', amount: '+R$ 2.434,12', time: 'Agora', status: 'approved' },
                              { name: 'E-commerce ABC', amount: '+R$ 1.845,32', time: '5 min', status: 'approved' },
                              { name: 'Mercado Digital', amount: '+R$ 890,21', time: '12 min', status: 'pending' }
                            ].map((transaction, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                                className="flex items-center justify-between p-3 rounded-xl hover:border-[rgba(215,75,24,0.3)] transition-all duration-500 group cursor-pointer"
                                style={{
                                  background: colors.bgCard,
                                  borderWidth: '1px',
                                  borderStyle: 'solid',
                                  borderColor: colors.border
                                }}
                              >
                                <div className="flex items-center gap-3">
                                  <motion.div 
                                    className={`w-2 h-2 rounded-full ${transaction.status === 'approved' ? 'bg-[#D74B18]' : 'bg-[#9810FA]'}`}
                                    animate={{ 
                                      scale: [1, 1.3, 1],
                                      boxShadow: [
                                        `0 0 0px ${transaction.status === 'approved' ? '#D74B18' : '#9810FA'}`,
                                        `0 0 8px ${transaction.status === 'approved' ? '#D74B18' : '#9810FA'}`,
                                        `0 0 0px ${transaction.status === 'approved' ? '#D74B18' : '#9810FA'}`
                                      ]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                  />
                                  <div>
                                    <p className="text-sm font-medium transition-colors duration-500" style={{ color: colors.text }}>{transaction.name}</p>
                                    <p className="text-xs transition-colors duration-500" style={{ color: colors.textSecondary }}>{transaction.time}</p>
                                  </div>
                                </div>
                                <span className="text-[#25D366] font-bold text-sm">{transaction.amount}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeScreen === 'transactions' && (
                      <motion.div
                        key="transactions"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-lg transition-colors duration-500" style={{ color: colors.text }}>Todas Transações</h3>
                          <div className="px-3 py-1.5 rounded-lg bg-[rgba(37,211,102,0.2)] border border-[rgba(37,211,102,0.3)]">
                            <span className="text-[#25D366] text-xs font-bold">HOJE</span>
                          </div>
                        </div>

                        {/* Transaction list */}
                        <div className="space-y-2">
                          {[
                            { merchant: 'Loja Virtual XYZ', method: 'PIX', amount: 'R$ 2.434,12', status: 'approved', time: '14:23' },
                            { merchant: 'E-commerce ABC', method: 'Cartão', amount: 'R$ 1.845,32', status: 'approved', time: '14:18' },
                            { merchant: 'Mercado Digital', method: 'Boleto', amount: 'R$ 890,25', status: 'pending', time: '14:11' },
                            { merchant: 'Tech Store', method: 'PIX', amount: 'R$ 3.200,11', status: 'approved', time: '13:45' },
                            { merchant: 'Fashion Hub', method: 'Cartão', amount: 'R$ 1.565,85', status: 'approved', time: '13:22' },
                            { merchant: 'Food Delivery', method: 'PIX', amount: 'R$ 567,91', status: 'approved', time: '12:58' },
                            { merchant: 'Games Store', method: 'Cartão', amount: 'R$ 9.120,11', status: 'failed', time: '12:34' },
                          ].map((tx, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.05 }}
                              className="p-3 rounded-xl transition-all duration-500"
                              style={{
                                background: colors.bgCard,
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                borderColor: colors.border
                              }}
                            >
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <p className="text-sm font-bold transition-colors duration-500" style={{ color: colors.text }}>{tx.merchant}</p>
                                  <p className="text-xs transition-colors duration-500" style={{ color: colors.textSecondary }}>{tx.method} • {tx.time}</p>
                                </div>
                                <div className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                                  tx.status === 'approved' ? 'bg-[rgba(37,211,102,0.2)] text-[#25D366]' :
                                  tx.status === 'pending' ? 'bg-[rgba(152,16,250,0.2)] text-[#9810FA]' :
                                  'bg-[rgba(255,0,0,0.2)] text-[#ff3333]'
                                }`}>
                                  {tx.status === 'approved' ? 'APROVADO' : tx.status === 'pending' ? 'PENDENTE' : 'FALHOU'}
                                </div>
                              </div>
                              <p className="font-bold text-base transition-colors duration-500" style={{ color: colors.text }}>{tx.amount}</p>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {activeScreen === 'metrics' && (
                      <motion.div
                        key="metrics"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <h3 className="font-bold text-lg transition-colors duration-500" style={{ color: colors.text }}>Métricas & KPIs</h3>

                        {/* Big metrics */}
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { label: 'Volume Total', value: 'R$ 847K', change: '+34%', color: '#25D366' },
                            { label: 'Taxa Sucesso', value: '97.2%', change: '+2.1%', color: '#9810FA' },
                            { label: 'Ticket Médio', value: 'R$ 2.8K', change: '+12%', color: '#1ea952' },
                            { label: 'Clientes Ativos', value: '3.4K', change: '+18%', color: '#14B8A6' }
                          ].map((metric, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.08 }}
                              className="p-4 rounded-2xl transition-colors duration-500"
                              style={{
                                background: colors.bgCard,
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                borderColor: colors.border
                              }}
                            >
                              <p className="text-xs mb-2 transition-colors duration-500" style={{ color: colors.textSecondary }}>{metric.label}</p>
                              <p className="text-xl font-bold mb-1 transition-colors duration-500" style={{ color: colors.text }}>{metric.value}</p>
                              <p className="text-xs font-bold" style={{ color: metric.color }}>{metric.change}</p>
                            </motion.div>
                          ))}
                        </div>

                        {/* Chart representation */}
                        <div className="p-5 rounded-2xl transition-colors duration-500" style={{ background: colors.bgCard, borderWidth: '1px', borderStyle: 'solid', borderColor: colors.border }}>
                          <div className="flex items-center justify-between mb-4">
                            <p className="font-bold text-sm transition-colors duration-500" style={{ color: colors.text }}>Performance Semanal</p>
                            <PieChart className="w-4 h-4 text-[#25D366]" strokeWidth={2} />
                          </div>
                          
                          <div className="flex items-end justify-between gap-2 h-32">
                            {[
                              { label: 'SEG', value: 70, color: '#9810FA' },
                              { label: 'TER', value: 85, color: '#9810FA' },
                              { label: 'QUA', value: 65, color: '#9810FA' },
                              { label: 'QUI', value: 92, color: '#9810FA' },
                              { label: 'SEX', value: 78, color: '#9810FA' },
                              { label: 'SAB', value: 95, color: '#25D366' },
                              { label: 'DOM', value: 88, color: '#1ea952' }
                            ].map((day, i) => (
                              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                                <motion.div
                                  className="w-full rounded-t-lg"
                                  style={{ background: day.color, height: `${day.value}%` }}
                                  initial={{ height: 0 }}
                                  animate={{ height: `${day.value}%` }}
                                  transition={{ delay: i * 0.1, duration: 0.6 }}
                                />
                                <p className="text-[9px] font-bold transition-colors duration-500" style={{ color: colors.textSecondary }}>{day.label}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Payment methods breakdown */}
                        <div className="p-5 rounded-2xl transition-colors duration-500" style={{ background: colors.bgCard, borderWidth: '1px', borderStyle: 'solid', borderColor: colors.border }}>
                          <p className="font-bold text-sm mb-4 transition-colors duration-500" style={{ color: colors.text }}>Métodos de Pagamento</p>
                          <div className="space-y-3">
                            {[
                              { method: 'PIX', percentage: 45, color: '#25D366' },
                              { method: 'Cartão de Crédito', percentage: 38, color: '#9810FA' },
                              { method: 'Boleto', percentage: 17, color: '#14B8A6' }
                            ].map((method, i) => (
                              <div key={i}>
                                <div className="flex items-center justify-between mb-1.5">
                                  <p className="text-xs font-bold transition-colors duration-500" style={{ color: colors.text }}>{method.method}</p>
                                  <p className="text-xs font-bold transition-colors duration-500" style={{ color: colors.textSecondary }}>{method.percentage}%</p>
                                </div>
                                <div className="h-2 rounded-full overflow-hidden" style={{ background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.08)' }}>
                                  <motion.div
                                    className="h-full rounded-full"
                                    style={{ background: method.color }}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${method.percentage}%` }}
                                    transition={{ delay: i * 0.15, duration: 0.8 }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeScreen === 'wallet' && (
                      <motion.div
                        key="wallet"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <h3 className="font-bold text-lg transition-colors duration-500" style={{ color: colors.text }}>Minha Carteira</h3>

                        {/* Wallet balance */}
                        <motion.div
                          className="relative p-6 rounded-3xl overflow-hidden"
                          style={{
                            background: 'linear-gradient(135deg, #25D366 0%, #9810FA 100%)'
                          }}
                        >
                          <div className="relative">
                            <p className="text-white text-sm opacity-90 mb-2">Saldo Disponível</p>
                            <p className="text-white text-4xl font-bold mb-4">R$ 127.5K</p>
                            <div className="flex gap-2">
                              <button className="px-4 py-2 rounded-xl bg-white text-[#0B0B0E] text-xs font-bold">
                                Sacar
                              </button>
                              <button className="px-4 py-2 rounded-xl bg-[rgba(255,255,255,0.2)] text-white text-xs font-bold backdrop-blur-sm">
                                Transferir
                              </button>
                            </div>
                          </div>

                          {/* Circuit pattern */}
                          <div className="absolute top-0 right-0 opacity-20">
                            <svg width="150" height="150" viewBox="0 0 150 150">
                              <circle cx="75" cy="75" r="60" stroke="white" strokeWidth="1" fill="none" />
                              <circle cx="75" cy="75" r="40" stroke="white" strokeWidth="1" fill="none" />
                              <circle cx="75" cy="75" r="20" stroke="white" strokeWidth="1" fill="none" />
                            </svg>
                          </div>
                        </motion.div>

                        {/* Payment methods */}
                        <div>
                          <p className="font-bold text-sm mb-3 transition-colors duration-500" style={{ color: colors.text }}>Métodos Cadastrados</p>
                          <div className="space-y-2">
                            {[
                              { type: 'PIX', detail: 'Chave: +55 11 9****-1234', icon: Zap, color: '#25D366' },
                              { type: 'Cartão Mastercard', detail: '**** **** **** 4532', icon: CreditCard, color: '#9810FA' },
                              { type: 'Conta Bancária', detail: 'Banco 001 - Ag 1234', icon: Wallet, color: '#14B8A6' }
                            ].map((payment, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-3 p-3 rounded-xl transition-colors duration-500"
                                style={{
                                  background: colors.bgCard,
                                  borderWidth: '1px',
                                  borderStyle: 'solid',
                                  borderColor: colors.border
                                }}
                              >
                                <div
                                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                                  style={{ background: `${payment.color}20` }}
                                >
                                  <payment.icon className="w-5 h-5" style={{ color: payment.color }} strokeWidth={2} />
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm font-bold transition-colors duration-500" style={{ color: colors.text }}>{payment.type}</p>
                                  <p className="text-xs transition-colors duration-500" style={{ color: colors.textSecondary }}>{payment.detail}</p>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-[#14B8A6]" />
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Quick actions */}
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            { label: 'Adicionar Método', icon: CreditCard },
                            { label: 'Ver Extrato', icon: Clock }
                          ].map((action, i) => (
                            <button
                              key={i}
                              className="p-4 rounded-xl transition-colors duration-500"
                              style={{
                                background: colors.bgCard,
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                borderColor: colors.border
                              }}
                            >
                              <action.icon className="w-5 h-5 text-[#25D366] mb-2" strokeWidth={2} />
                              <p className="text-xs font-bold transition-colors duration-500" style={{ color: colors.text }}>{action.label}</p>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom Navigation */}
                <div 
                  className="absolute bottom-0 left-0 right-0 backdrop-blur-xl px-4 py-3 transition-colors duration-500"
                  style={{
                    background: colors.navBg,
                    borderTopWidth: '1px',
                    borderTopStyle: 'solid',
                    borderTopColor: colors.border
                  }}
                >
                  <div className="flex items-center justify-around">
                    {screens.map((screen) => {
                      const isActive = activeScreen === screen.id;
                      return (
                        <button
                          key={screen.id}
                          onClick={() => setActiveScreen(screen.id as ScreenType)}
                          className="relative flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all"
                        >
                          {/* Active indicator */}
                          {isActive && (
                            <motion.div
                              layoutId="activeTab"
                              className="absolute inset-0 rounded-xl"
                              style={{
                                background: 'linear-gradient(135deg, rgba(255,133,52,0.15), rgba(152,16,250,0.15))'
                              }}
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                          
                          <screen.icon 
                            className="relative w-5 h-5 transition-colors duration-500" 
                            style={{ color: isActive ? '#D74B18' : colors.textSecondary }}
                            strokeWidth={2.5}
                          />
                          <span 
                            className="relative text-[9px] font-bold transition-colors duration-500"
                            style={{ color: isActive ? colors.text : colors.textSecondary }}
                          >
                            {screen.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Glow effect around phone */}
              <motion.div
                className="absolute -inset-8 rounded-[80px] opacity-30 blur-3xl -z-10"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(255,133,52,0.4), rgba(152,16,250,0.4), transparent)'
                }}
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Floating Feature Cards */}
          {floatingCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0, ...card.position }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.5 + i * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className="absolute hidden lg:block"
              style={card.position}
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{
                  duration: 4 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.1, z: 50 }}
                className="relative group cursor-pointer"
              >
                {/* Card glow */}
                <motion.div
                  className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity"
                  style={{ background: card.color }}
                />

                {/* Card content */}
                <div className="relative w-64 p-5 rounded-2xl bg-[rgba(17,17,20,0.95)] border-2 border-[rgba(255,255,255,0.1)] backdrop-blur-xl shadow-2xl group-hover:border-[rgba(255,255,255,0.3)] transition-all">
                  {/* Icon */}
                  <div 
                    className="w-12 h-12 rounded-xl mb-3 flex items-center justify-center"
                    style={{ background: `${card.color}20` }}
                  >
                    <card.icon className="w-6 h-6" style={{ color: card.color }} strokeWidth={2.5} />
                  </div>

                  {/* Text */}
                  <h4 className="text-white font-bold text-base mb-1">{card.title}</h4>
                  <p className="text-[#A0A0A5] text-sm leading-relaxed">{card.description}</p>

                  {/* Shine effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(to right, transparent, ${card.color}, transparent)` }}
                  />

                  {/* Sparkle on hover */}
                  <motion.div
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-4 h-4" style={{ color: card.color }} strokeWidth={2} />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Large background glow that extends beyond section */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,133,52,0.3) 0%, rgba(152,16,250,0.3) 50%, transparent 70%)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </section>
  );
}