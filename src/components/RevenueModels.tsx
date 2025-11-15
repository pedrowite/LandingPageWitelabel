import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp, CreditCard, Zap, Percent, Sparkles, Rocket, DollarSign, CheckCircle, ArrowRight, RefreshCw, AlertCircle, Check } from 'lucide-react';
import { ThemeMode } from '../App';
import { useState } from 'react';
import TransactionsVisual from './TransactionsVisual';
import RecurringDashboard from './RecurringDashboard';
import PremiumFeaturesMinimal from './PremiumFeaturesMinimal';
import MultiAcquirerDashboard from './MultiAcquirerDashboard';

interface RevenueModelsProps {
  theme: ThemeMode;
}

const revenueModels = [
  {
    id: 'fees',
    title: "Taxas por Transação",
    bigTitle: "Ganhe em CADA venda",
    icon: Percent,
    description: "Você lucra toda vez que seu cliente processa um pagamento",
    highlight: "0.5% - 2% por transação",
    color: 'from-[#ff8534] via-[#ff6900] to-[#9810FA]',
    visual: 'transactions',
    features: [
      "Receita automática em cada pagamento processado",
      "Escalável conforme seus clientes crescem",
      "Múltiplas formas de pagamento (PIX, cartão, boleto)",
      "Dashboard em tempo real com todas as transações"
    ]
  },
  {
    id: 'subscription',
    title: "Receita Recorrente",
    bigTitle: "Dinheiro TODO mês",
    icon: CreditCard,
    description: "Mensalidades fixas que entram automaticamente na sua conta",
    highlight: "R$ 99 - R$ 999/mês por cliente",
    color: 'from-[#9810FA] via-[#b45dff] to-[#ff8534]',
    visual: 'recurring',
    features: [
      "Previsibilidade total de faturamento mensal",
      "Pagamentos automáticos sem esforço",
      "Planos flexíveis para diferentes perfis",
      "Retenção de clientes com valor recorrente"
    ]
  },
  {
    id: 'upsell',
    title: "Funcionalidades Premium",
    bigTitle: "Venda MUITO mais",
    icon: Zap,
    description: "Saque cripto, checkout customizado e marketplace de afiliados para seus clientes",
    highlight: "R$ 500 - R$ 5.000 em extras",
    color: 'from-[#ff6900] via-[#ff8534] to-[#9810FA]',
    visual: 'rocket',
    features: [
      "Saque direto em criptomoedas (BTC, ETH, USDT)",
      "Checkout totalmente personalizado com sua marca",
      "Marketplace de afiliados integrado",
      "Funcionalidades exclusivas que aumentam ticket médio"
    ]
  },
  {
    id: 'whitelabel',
    title: "Multi-Adquirência",
    bigTitle: "MULTIPLIQUE seus lucros",
    icon: Sparkles,
    description: "Sistema inteligente com múltiplos adquirentes e retentativa automática",
    highlight: "99.8% de aprovação",
    color: 'from-[#9810FA] via-[#ff6900] to-[#ff8534]',
    visual: 'multiacquirer',
    cta: true,
    features: [
      "Múltiplos adquirentes trabalhando simultaneamente",
      "Retentativa automática em caso de falha",
      "Taxa de aprovação até 30% maior",
      "Roteamento inteligente por melhor taxa e aprovação"
    ]
  }
];

export default function RevenueModels({ theme }: RevenueModelsProps) {
  const [selectedModel, setSelectedModel] = useState(revenueModels[0]);

  const renderVisual = () => {
    switch (selectedModel.visual) {
      case 'transactions':
        return <TransactionsVisual />;

      case 'recurring':
        return <RecurringDashboard />;

      case 'rocket':
        return <PremiumFeaturesMinimal />;

      case 'multiacquirer':
        return <MultiAcquirerDashboard />;

      default:
        return null;
    }
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Removed individual background - using unified background from App.tsx */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[rgba(109,3,245,0.2)] to-[rgba(215,75,24,0.2)] border border-[rgba(255,255,255,0.2)] mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <TrendingUp className="text-[#9810FA]" size={24} />
            <span className="text-white font-bold text-lg">Modelos de Receita</span>
          </motion.div>

          <h2 className="text-white mb-6 leading-tight font-bold sm:text-[55px] px-4 text-[48px]">
            Opere como um{' '}
            <span className="bg-gradient-to-r from-[#EFD9FF] via-[#FED5A7] to-[#FFBF77] bg-clip-text text-transparent">
              líder de mercado
            </span>
          </h2>
          <p className="text-[#A0A0A5] text-xl max-w-3xl mx-auto">
            Múltiplos fluxos de receita trabalhando juntos para <span className="text-white font-bold">maximizar seus lucros</span>
          </p>
        </motion.div>

        {/* Tab Selector - Minimalist Design */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {revenueModels.map((model, index) => {
            const isActive = selectedModel.id === model.id;
            
            return (
              <motion.button
                key={model.id}
                onClick={() => setSelectedModel(model)}
                className="relative group"
                whileHover={{ y: -3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                {/* Main container */}
                <div
                  className={`relative px-6 py-3 rounded-full border transition-all duration-300 ${
                    isActive
                      ? 'bg-white border-white shadow-lg'
                      : 'bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.15)] hover:border-[rgba(255,255,255,0.3)]'
                  }`}
                >
                  {/* Content */}
                  <div className="relative flex items-center gap-3">
                    {/* Icon */}
                    <model.icon 
                      className={`w-5 h-5 ${isActive ? 'text-[#0B0B0E]' : 'text-[#A0A0A5]'}`}
                      strokeWidth={2}
                    />

                    {/* Text */}
                    <span className={`font-semibold text-sm whitespace-nowrap ${isActive ? 'text-[#0B0B0E]' : 'text-white'}`}>
                      {model.title}
                    </span>
                  </div>
                </div>

                {/* Bottom accent line when active */}
                {isActive && (
                  <motion.div
                    layoutId="revenueActiveTab"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 rounded-full"
                    style={{
                      width: '50%',
                      background: `linear-gradient(to right, ${
                        model.id === 'fees' ? '#ff8534, #ff6900' :
                        model.id === 'subscription' ? '#9810FA, #b45dff' :
                        model.id === 'upsell' ? '#ff6900, #D74B18' :
                        '#9810FA, #ff8534'
                      })`
                    }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Content Area - Full Width */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedModel.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left - Visual Canvas */}
            <div className="order-2 lg:order-1 hidden lg:block">
              <motion.div
                className="relative h-[400px] sm:h-[500px] lg:h-[700px] rounded-3xl bg-gradient-to-br from-[rgba(255,255,255,0.02)] to-[rgba(255,255,255,0.01)] border border-[rgba(255,255,255,0.1)] overflow-hidden"
                style={{
                  boxShadow: '0 20px 60px rgba(215,75,24,0.2), 0 0 100px rgba(109,3,245,0.1)'
                }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${selectedModel.color}`}
                  style={{ opacity: 0.08 }}
                  animate={{ 
                    opacity: [0.05, 0.12, 0.05],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Visual Elements */}
                {renderVisual()}

                {/* Border glow */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl`}
                  style={{
                    background: `linear-gradient(45deg, transparent, rgba(215,75,24,0.3), transparent, rgba(109,3,245,0.3), transparent)`,
                    backgroundSize: '400% 400%'
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
              </motion.div>
            </div>

            {/* Right - Content - ONLY 4 TOPICS */}
            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {/* Features/Topics List - New Design */}
                <div className="space-y-4 sm:space-y-6">
                  {selectedModel.features?.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 80 }}
                      className="group relative"
                      whileHover={{ x: 12 }}
                    >
                      {/* Card Container */}
                      <div className="relative flex items-center gap-4 sm:gap-6 p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl bg-[rgba(17,17,20,0.6)] border-2 border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)] backdrop-blur-sm transition-all duration-500 overflow-hidden">
                        
                        {/* Gradient background on hover */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${
                          selectedModel.id === 'fees' ? 'from-[rgba(255,133,52,0.1)] to-transparent' :
                          selectedModel.id === 'subscription' ? 'from-[rgba(152,16,250,0.1)] to-transparent' :
                          selectedModel.id === 'upsell' ? 'from-[rgba(255,105,0,0.1)] to-transparent' :
                          'from-[rgba(152,16,250,0.1)] to-transparent'
                        }`} />

                        {/* Left accent line */}
                        <motion.div 
                          className={`absolute left-0 top-0 bottom-0 w-1 ${
                            selectedModel.id === 'fees' ? 'bg-gradient-to-b from-[#ff8534] via-[#ff6900] to-[#ff8534]' :
                            selectedModel.id === 'subscription' ? 'bg-gradient-to-b from-[#9810FA] via-[#b45dff] to-[#9810FA]' :
                            selectedModel.id === 'upsell' ? 'bg-gradient-to-b from-[#ff6900] via-[#D74B18] to-[#ff6900]' :
                            'bg-gradient-to-b from-[#9810FA] via-[#6D03F5] to-[#9810FA]'
                          }`}
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                        />

                        {/* Icon Circle */}
                        <motion.div 
                          className={`relative flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center ${
                            selectedModel.id === 'fees' ? 'bg-gradient-to-br from-[#ff8534] to-[#ff6900]' :
                            selectedModel.id === 'subscription' ? 'bg-gradient-to-br from-[#9810FA] to-[#b45dff]' :
                            selectedModel.id === 'upsell' ? 'bg-gradient-to-br from-[#ff6900] to-[#D74B18]' :
                            'bg-gradient-to-br from-[#9810FA] to-[#6D03F5]'
                          } shadow-lg`}
                          whileHover={{ scale: 1.15, rotate: 360 }}
                          transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                        >
                          {/* Pulse ring */}
                          <motion.div
                            className={`absolute inset-0 rounded-full ${
                              selectedModel.id === 'fees' ? 'bg-[#ff8534]' :
                              selectedModel.id === 'subscription' ? 'bg-[#9810FA]' :
                              selectedModel.id === 'upsell' ? 'bg-[#ff6900]' :
                              'bg-[#9810FA]'
                            }`}
                            animate={{ 
                              scale: [1, 1.4, 1],
                              opacity: [0.5, 0, 0.5]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.3
                            }}
                          />
                          <CheckCircle className="relative w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" strokeWidth={2.5} />
                        </motion.div>
                        
                        {/* Text Content */}
                        <div className="relative flex-1">
                          <p className="text-white text-base sm:text-lg lg:text-xl font-bold leading-tight">
                            {feature}
                          </p>
                        </div>

                        {/* Arrow Indicator */}
                        <motion.div
                          className="relative flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity"
                          animate={{ x: [0, 8, 0] }}
                          transition={{ 
                            duration: 1.5,
                            repeat: Infinity,
                            repeatDelay: 0.5
                          }}
                        >
                          <ArrowRight 
                            className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 ${
                              selectedModel.id === 'fees' ? 'text-[#ff8534]' :
                              selectedModel.id === 'subscription' ? 'text-[#9810FA]' :
                              selectedModel.id === 'upsell' ? 'text-[#ff6900]' :
                              'text-[#9810FA]'
                            }`}
                            strokeWidth={2.5}
                          />
                        </motion.div>

                        {/* Bottom shine line */}
                        <motion.div
                          className={`absolute bottom-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                            selectedModel.id === 'fees' ? 'bg-gradient-to-r from-transparent via-[#ff8534] to-transparent' :
                            selectedModel.id === 'subscription' ? 'bg-gradient-to-r from-transparent via-[#9810FA] to-transparent' :
                            selectedModel.id === 'upsell' ? 'bg-gradient-to-r from-transparent via-[#ff6900] to-transparent' :
                            'bg-gradient-to-r from-transparent via-[#9810FA] to-transparent'
                          }`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}