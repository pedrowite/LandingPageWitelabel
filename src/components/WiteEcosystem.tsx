import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, RotateCcw, Code2, ArrowRight, Zap, TrendingUp, Shield, Check, CreditCard, RefreshCw, Cpu, Sparkles } from 'lucide-react';
import { ThemeMode } from '../App';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import witeTecLogo from 'figma:asset/1970b026f93cdcc158933fadd66255ca5224952d.png';
import witeRecuperationLogo from 'figma:asset/8de5c722d923d02ee50ac7ce4627e11b6d171631.png';
import witeCheckoutLogo from 'figma:asset/b47166b74e3ded013066d88bbfab73448e46ba18.png';

interface WiteEcosystemProps {
  theme: ThemeMode;
}

const products = [
  {
    id: 'checkout',
    name: 'Wite Checkout',
    icon: ShoppingCart,
    tagline: 'Templates de alta conversão',
    description: 'Checkout otimizado com diversos templates focados em maximizar suas vendas',
    color: '#7C3AED', // Roxo da logo
    primaryColor: '#7C3AED',
    secondaryColor: '#A78BFA',
    logo: witeCheckoutLogo,
    features: [
      'Múltiplos templates otimizados',
      'Design focado em conversão',
      'Customização completa',
      'A/B testing integrado'
    ],
    stats: [
      { label: 'Conversão', value: '+40%' },
      { label: 'Templates', value: '12+' }
    ],
    visualElements: [
      { icon: ShoppingCart, label: 'Checkout', color: '#7C3AED' },
      { icon: TrendingUp, label: 'Conversão', color: '#A78BFA' },
      { icon: Check, label: 'Templates', color: '#C4B5FD' }
    ]
  },
  {
    id: 'recuperation',
    name: 'Wite Recuperation',
    icon: RotateCcw,
    tagline: 'SaaS de IA para recuperação',
    description: 'Plataforma de inteligência artificial especializada em recuperar vendas perdidas',
    color: '#14B8A6', // Turquesa da logo
    primaryColor: '#14B8A6',
    secondaryColor: '#2DD4BF',
    logo: witeRecuperationLogo,
    features: [
      'Inteligência artificial avançada',
      'Retentativa automática inteligente',
      'Análise preditiva de recusa',
      'Machine learning contínuo'
    ],
    stats: [
      { label: 'Vendas Recuperadas', value: '+32%' },
      { label: 'Precisão IA', value: '94%' }
    ],
    visualElements: [
      { icon: Sparkles, label: 'IA', color: '#14B8A6' },
      { icon: RefreshCw, label: 'Retry', color: '#2DD4BF' },
      { icon: TrendingUp, label: 'Recupera', color: '#5EEAD4' }
    ]
  },
  {
    id: 'witetec',
    name: 'WiteTec',
    icon: Code2,
    tagline: 'Subadquirente B2B',
    description: 'Infraestrutura completa de subadquirência com PIX, Cartão e Boleto via API',
    color: '#1F2937', // Cinza/Preto da logo
    primaryColor: '#374151',
    secondaryColor: '#6B7280',
    logo: witeTecLogo,
    features: [
      'PIX, Cartão e Boleto via API',
      'Infraestrutura subadquirente',
      'Foco B2B enterprise',
      'Webhooks em tempo real'
    ],
    stats: [
      { label: 'Uptime', value: '99.99%' },
      { label: 'Métodos', value: 'PIX+2' }
    ],
    visualElements: [
      { icon: CreditCard, label: 'Cartão', color: '#374151' },
      { icon: Check, label: 'PIX', color: '#6B7280' },
      { icon: Code2, label: 'API', color: '#9CA3AF' }
    ]
  }
];

export default function WiteEcosystem({ theme }: WiteEcosystemProps) {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <section className="relative py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[rgba(255,133,52,0.2)] to-[rgba(152,16,250,0.2)] border border-[rgba(255,255,255,0.2)] mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="text-[#ff8534]" size={24} />
            <span className="text-white font-bold text-lg">Ecossistema Completo</span>
          </motion.div>

          <h2 className="text-white mb-6 leading-tight font-bold text-[55px]">
            Integrado com{' '}
            <span className="bg-gradient-to-r from-[#FFFFFF] via-[#FED5A7] to-[#FFBF77] bg-clip-text text-transparent">
              Ecossistema Wite
            </span>
          </h2>
          <p className="text-[#A0A0A5] text-xl max-w-3xl mx-auto">
            Ferramentas poderosas que trabalham juntas para <span className="text-white font-bold">maximizar suas conversões</span>
          </p>
        </motion.div>

        {/* Interactive Selector */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Product Selector */}
          <div>
            <div className="space-y-4">
              {products.map((product, i) => (
                <motion.button
                  key={product.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setSelectedProduct(product)}
                  className={`w-full text-left p-6 rounded-2xl border-2 transition-all group relative ${
                    selectedProduct.id === product.id
                      ? 'bg-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.2)]'
                      : 'bg-[rgba(17,17,20,0.4)] border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.15)]'
                  }`}
                >
                  {/* Glow for active */}
                  {selectedProduct.id === product.id && (
                    <motion.div
                      layoutId="activeGlow"
                      className="absolute inset-0 rounded-2xl opacity-30 blur-xl -z-10"
                      style={{ background: product.color }}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}

                  <div className="flex items-start gap-4">
                    {/* Logo circle - usando logo real */}
                    <motion.div
                      className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 border-2 p-2 ${
                        selectedProduct.id === product.id ? 'scale-110' : ''
                      }`}
                      style={{ 
                        background: '#ffffff',
                        borderColor: selectedProduct.id === product.id ? product.color : 'rgba(255,255,255,0.1)'
                      }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <ImageWithFallback 
                        src={product.logo} 
                        alt={`${product.name} Logo`}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-white font-bold text-xl">{product.name}</h3>
                        {selectedProduct.id === product.id && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 rounded-full"
                            style={{ background: product.color }}
                          />
                        )}
                      </div>
                      <p className="text-[#A0A0A5] text-sm mb-3">{product.tagline}</p>
                      
                      {/* Stats badges */}
                      <div className="flex flex-wrap gap-2">
                        {product.stats.map((stat, j) => (
                          <motion.div
                            key={j}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 + j * 0.1 }}
                            className="px-3 py-1 rounded-lg text-xs font-semibold border"
                            style={{ 
                              background: `${product.color}15`,
                              borderColor: `${product.color}30`,
                              color: product.color
                            }}
                          >
                            {stat.label}: {stat.value}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <motion.div
                      animate={{ x: selectedProduct.id === product.id ? 5 : 0 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <ArrowRight 
                        className={`w-5 h-5 ${selectedProduct.id === product.id ? 'opacity-100' : 'opacity-40'}`}
                        style={{ color: selectedProduct.id === product.id ? product.color : '#A0A0A5' }}
                      />
                    </motion.div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right - Interactive Visualization */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProduct.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="relative h-[500px] flex items-center justify-center"
            >
              {/* Background glow */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-20 blur-3xl"
                style={{ background: selectedProduct.color }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Central product card */}
              <motion.div
                className="relative z-10 w-80 p-8 rounded-3xl border-2 backdrop-blur-sm"
                style={{ 
                  background: 'rgba(17,17,20,0.6)',
                  borderColor: `${selectedProduct.color}40`
                }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Logo at top */}
                <div className="flex justify-center mb-6">
                  <div 
                    className="w-24 h-24 rounded-full flex items-center justify-center p-4 border-4"
                    style={{ 
                      background: '#ffffff',
                      borderColor: selectedProduct.color,
                      boxShadow: `0 0 30px ${selectedProduct.color}40`
                    }}
                  >
                    <ImageWithFallback 
                      src={selectedProduct.logo} 
                      alt={`${selectedProduct.name} Logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-white font-bold text-2xl mb-2 text-center">{selectedProduct.name}</h3>
                <p className="text-[#A0A0A5] text-center mb-6">{selectedProduct.description}</p>

                {/* Features list */}
                <div className="space-y-3">
                  {selectedProduct.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      className="group flex items-center gap-4 p-4 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.06)] transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {/* Icon with pulse */}
                      <div className="relative flex-shrink-0">
                        <motion.div
                          className="absolute inset-0 rounded-lg"
                          style={{ background: selectedProduct.color }}
                          animate={{ 
                            scale: [1, 1.4, 1],
                            opacity: [0.3, 0, 0.3]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3
                          }}
                        />
                        <div 
                          className="relative w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ background: `${selectedProduct.color}30` }}
                        >
                          <Check className="w-5 h-5" style={{ color: selectedProduct.color }} strokeWidth={2.5} />
                        </div>
                      </div>
                      <span className="text-white font-medium text-sm flex-1">{feature}</span>
                      <ArrowRight 
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" 
                        style={{ color: selectedProduct.color }}
                        strokeWidth={2}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Floating elements */}
              {selectedProduct.visualElements.map((element, i) => {
                const angle = (360 / selectedProduct.visualElements.length) * i;
                const radius = 200;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: '50%',
                      top: '50%',
                    }}
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    animate={{ 
                      x: x, 
                      y: y,
                      opacity: 1
                    }}
                    transition={{ 
                      delay: 0.2 + i * 0.1,
                      type: 'spring',
                      stiffness: 100
                    }}
                  >
                    <motion.div
                      className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center border-2 backdrop-blur-sm"
                      style={{ 
                        background: `${element.color}20`,
                        borderColor: `${element.color}40`
                      }}
                      animate={{ 
                        y: [0, -8, 0],
                        rotate: [0, 5, 0]
                      }}
                      transition={{ 
                        duration: 2.5,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <element.icon className="w-6 h-6 mb-1" style={{ color: element.color }} strokeWidth={2} />
                      <span className="text-[10px] font-semibold" style={{ color: element.color }}>
                        {element.label}
                      </span>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <div className="text-center mb-8">
            <h3 className="text-white font-bold text-2xl mb-2">Funcionam Integrados</h3>
            <p className="text-[#A0A0A5]">Todo o ecossistema trabalhando junto em perfeita harmonia</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl border-2 bg-[rgba(17,17,20,0.6)] backdrop-blur-sm cursor-pointer"
                style={{ borderColor: `${product.color}30` }}
              >
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center p-1.5 border-2"
                  style={{ 
                    background: '#ffffff',
                    borderColor: product.color
                  }}
                >
                  <ImageWithFallback 
                    src={product.logo} 
                    alt={`${product.name} Logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-white font-semibold">{product.name}</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                >
                  <ArrowRight className="w-4 h-4" style={{ color: product.color }} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}