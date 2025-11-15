import { motion, AnimatePresence } from 'motion/react';
import { Network, Check, X, ArrowRight, Zap, TrendingUp, Code, Sparkles } from 'lucide-react';
import { ThemeMode } from '../App';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Import logos
import witeCheckoutLogo from 'figma:asset/b47166b74e3ded013066d88bbfab73448e46ba18.png';
import witeRecuperationLogo from 'figma:asset/8de5c722d923d02ee50ac7ce4627e11b6d171631.png';
import witeTecLogo from 'figma:asset/1970b026f93cdcc158933fadd66255ca5224952d.png';

interface WiteEcosystemNewProps {
  theme: ThemeMode;
}

const products = [
  {
    id: 'checkout',
    name: 'Wite Checkout',
    tagline: 'Checkout de alta conversão',
    description: 'Mais personalização, mais performance e uma jornada de pagamento criada para maximizar cada venda.',
    color: '#9810FA',
    icon: Zap,
    logo: witeCheckoutLogo,
    features: [
      'Layout totalmente personalizável',
      'Conversão acima da média do mercado',
      'Conversão otimizada com 1-click',
      'Anti-fraude em tempo real',
      'Upsells e order bumps nativos',
      'Checkout mobile responsivo'
    ],
    stats: [
      { label: 'Conversão', value: '99.2%' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Tempo médio', value: '2.4s' }
    ]
  },
  {
    id: 'recuperation',
    name: 'Wite Recuperation',
    tagline: 'Recuperação de vendas',
    description: 'Recuperação que trabalha por você. IA, estratégia e automação unidas para resgatar vendas e aumentar seu faturamento todos os dias.',
    color: '#14B8A6',
    icon: TrendingUp,
    logo: witeRecuperationLogo,
    features: [
      'Recuperação de carrinhos abandonados',
      'Notificações personalizadas',
      'Machine learning para otimização',
      'Aumento médio de 30% no faturamento',
      'Dashboard de análise em tempo real',
      'Integração simples com qualquer operação'
    ],
    stats: [
      { label: 'Recuperação', value: '+35%' },
      { label: 'Taxa sucesso', value: '67%' },
      { label: 'Automação', value: '100%' }
    ]
  },
  {
    id: 'tec',
    name: 'WiteTec',
    tagline: 'Infraestrutura B2B',
    description: 'Tecnologia que gera resultado. Subadquirência inteligente, performance real e estrutura preparada para escalar o seu negócio sem limites.',
    color: '#ff8534',
    icon: Code,
    logo: witeTecLogo,
    features: [
      'Pix, cartão e boleto',
      'API de disputas',
      'Webhooks em tempo real',
      'Documentação técnica detalhada',
      'Suporte técnico especializado',
      'Compliance ativo'
    ],
    stats: [
      { label: 'Uptime', value: '99.9%' },
      { label: 'APIs', value: '50+' },
      { label: 'Latência', value: '<100ms' }
    ]
  }
];

export default function WiteEcosystemNew({ theme }: WiteEcosystemNewProps) {
  const [selectedProduct, setSelectedProduct] = useState(products[2]); // WiteTec is index 2
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  return (
    <section className="relative py-24 px-4 sm:px-6 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{ 
            background: 'radial-gradient(circle, #9810FA 0%, #D74B18 50%, transparent 70%)',
            filter: 'blur(100px)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.06, 0.1, 0.06]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[rgba(255,133,52,0.2)] to-[rgba(152,16,250,0.2)] border border-[rgba(255,255,255,0.2)] mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Network className="text-[#ff8534]" size={24} strokeWidth={2.5} />
            <span className="text-white font-bold text-lg">Ecossistema Integrado</span>
          </motion.div>

          <h2 className="text-white mb-6 leading-tight font-bold sm:text-[55px] px-4 text-[55px] text-center">
            Integrado com{' '}
            <span className="block bg-gradient-to-r from-[#EFD9FF] via-[#FED5A7] to-[#FFBF77] bg-clip-text text-transparent text-center text-[48px]">
              Ecossistema Wite
            </span>
          </h2>
          <p className="text-[#A0A0A5] text-lg sm:text-xl max-w-3xl mx-auto px-4">
            Três produtos poderosos trabalhando juntos para o sucesso do seu gateway
          </p>
        </motion.div>

        {/* Visual Grid Layout - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {products.map((product, index) => {
            const isHovered = hoveredProduct === product.id;
            
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                className="group relative cursor-pointer"
                whileHover={{ y: -8 }}
              >
                {/* Card Container - More minimal */}
                <div 
                  className="relative h-[380px] rounded-3xl border backdrop-blur-xl overflow-hidden transition-all duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${product.color}08, rgba(11,11,14,0.7))`,
                    borderColor: isHovered ? `${product.color}60` : `${product.color}25`,
                    boxShadow: isHovered 
                      ? `0 20px 60px ${product.color}30`
                      : `0 10px 30px rgba(0,0,0,0.2)`
                  }}
                >
                  {/* Top gradient bar - thinner */}
                  <motion.div 
                    className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ background: `linear-gradient(90deg, ${product.color}, transparent)` }}
                    animate={{
                      opacity: isHovered ? [0.4, 0.8, 0.4] : 0.4
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Content */}
                  <div className="relative h-full flex flex-col p-8">
                    {/* Logo Section - Simplified */}
                    <div className="flex-1 flex flex-col items-center justify-center">
                      {/* Logo Container - cleaner design */}
                      <motion.div
                        className="relative"
                        animate={isHovered ? {
                          y: [0, -10, 0]
                        } : {}}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        {/* Minimal glow effect */}
                        <motion.div
                          className="absolute inset-0 rounded-3xl"
                          style={{
                            background: `radial-gradient(circle, ${product.color}40, transparent 70%)`,
                            filter: 'blur(25px)'
                          }}
                          animate={{
                            scale: isHovered ? [1, 1.2, 1] : [1, 1.1, 1],
                            opacity: isHovered ? [0.4, 0.6, 0.4] : [0.2, 0.3, 0.2]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />

                        {/* Logo box - minimal style */}
                        <div 
                          className="relative w-36 h-36 rounded-2xl p-8 flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${product.color}15, ${product.color}05)`,
                            border: `1.5px solid ${product.color}40`,
                            boxShadow: `0 0 30px ${product.color}20`
                          }}
                        >
                          <ImageWithFallback 
                            src={product.logo} 
                            alt={product.name}
                            className="w-full h-full object-contain drop-shadow-xl"
                          />
                        </div>
                      </motion.div>

                      {/* Product Name - minimal */}
                      <motion.div
                        className="mt-6 text-center"
                      >
                        <h3 className="text-white font-bold text-xl mb-1">
                          {product.name}
                        </h3>
                        <p 
                          className="text-xs font-semibold uppercase tracking-wider opacity-70"
                          style={{ color: product.color }}
                        >
                          {product.tagline}
                        </p>
                      </motion.div>
                    </div>

                    {/* Stats Section - minimal */}
                    <div className="pt-4 border-t border-white/5 mt-auto">
                      <div className="grid grid-cols-3 gap-3">
                        {product.stats.map((stat, i) => (
                          <div
                            key={i}
                            className="text-center"
                          >
                            <p 
                              className="font-bold text-base mb-0.5"
                              style={{ color: product.color }}
                            >
                              {stat.value}
                            </p>
                            <p className="text-[#8696a0] text-[9px] uppercase tracking-wider">
                              {stat.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom glow bar - subtle */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${product.color}, transparent)`
                    }}
                    animate={{
                      opacity: isHovered ? [0.2, 0.5, 0.2] : 0.2
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Features Showcase - Horizontal Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div 
            className="relative rounded-3xl border-2 p-8 sm:p-12 backdrop-blur-md overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(17,17,20,0.8), rgba(11,11,14,0.95))',
              borderColor: 'rgba(255,255,255,0.1)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)'
            }}
          >
            {/* Animated top line */}
            <motion.div 
              className="absolute top-0 left-0 right-0 h-1"
              style={{
                background: 'linear-gradient(90deg, #D74B18, #9810FA, #14B8A6, #D74B18)',
                backgroundSize: '200% 100%'
              }}
              animate={{
                backgroundPosition: ['0% 0%', '200% 0%']
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            <div className="text-center mb-10">
              <h3 className="text-white font-bold text-3xl mb-3">
                <span className="bg-gradient-to-r from-[#FFFFFF] via-[#FED5A7] to-[#FFBF77] bg-clip-text text-transparent text-[40px]">
                  Recursos Integrados
                </span>
              </h3>
              <p className="text-[#A0A0A5] text-lg">
                Todos os produtos trabalham em perfeita harmonia
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.flatMap(product => 
                product.features.slice(0, 2).map((feature, i) => ({
                  feature,
                  color: product.color,
                  productName: product.name,
                  index: i
                }))
              ).map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative p-4 rounded-xl border border-white/10 bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.05)] transition-all cursor-pointer"
                >
                  {/* Hover glow */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `radial-gradient(circle at top left, ${item.color}15, transparent 70%)`
                    }}
                  />

                  <div className="relative flex items-start gap-3">
                    <div 
                      className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ 
                        background: `${item.color}15`,
                        border: `1.5px solid ${item.color}30`
                      }}
                    >
                      <Check className="w-4 h-4" style={{ color: item.color }} strokeWidth={3} />
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium leading-relaxed">
                        {item.feature}
                      </p>
                      <p className="text-[#8696a0] text-xs mt-1">
                        {item.productName}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}