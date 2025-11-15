import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, BarChart3, TrendingUp, DollarSign } from 'lucide-react';
import { ThemeMode } from '../App';
import imgImageDashboardPrincipal from "figma:asset/d5097d0e3d26b5592fd5b6dbefc2e3290ef08b9f.png";
import imgSuccessPage1 from "figma:asset/6ac40b5146cb7f9c90dd4c8433562d86ae0c39ad.png";
import imgSuccessPage2 from "figma:asset/f02f1048cb064db8d13437c6ca43112b9b46447d.png";

interface DashboardShowcaseProps {
  theme: ThemeMode;
}

const dashboards = [
  {
    id: 1,
    title: "Painel de Controle",
    description: "Gerencie toda sua operação em um único lugar",
    image: imgImageDashboardPrincipal,
    icon: BarChart3,
    color: 'from-[#ff8534] to-[#9810FA]'
  },
  {
    id: 2,
    title: "Fluxo de Transações",
    description: "Monitore pagamentos em tempo real",
    image: imgSuccessPage1,
    icon: DollarSign,
    color: 'from-[#9810FA] to-[#ff8534]'
  },
  {
    id: 3,
    title: "Análises Avançadas",
    description: "Insights estratégicos para crescimento",
    image: imgSuccessPage2,
    icon: TrendingUp,
    color: 'from-[#ff6900] to-[#b45dff]'
  }
];

export default function DashboardShowcase({ theme }: DashboardShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dashboards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const nextSlide = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % dashboards.length);
  };

  const prevSlide = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev - 1 + dashboards.length) % dashboards.length);
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0E] via-[#111114] to-[#0B0B0E]" />
      
      {/* Ambient glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(152,16,250,0.4) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

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
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[rgba(152,16,250,0.2)] to-[rgba(255,133,52,0.2)] border border-[rgba(255,255,255,0.2)] mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <BarChart3 className="text-[#9810FA]" size={24} />
            <span className="text-white font-bold text-lg">Dashboards Profissionais</span>
          </motion.div>

          <h2 className="text-white mb-6 leading-tight font-bold text-[55px]">
            Interface poderosa e{' '}
            <span className="bg-gradient-to-r from-[#ff8534] via-[#ff6900] to-[#b45dff] bg-clip-text text-transparent">
              intuitiva
            </span>
          </h2>
          <p className="text-[#A0A0A5] text-xl max-w-3xl mx-auto">
            Dashboards completos e customizáveis para gerenciar todo seu gateway de pagamento
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Image Display */}
          <div className="relative h-[600px] rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {/* Image */}
                <div className="relative h-full w-full bg-gradient-to-br from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.01)] border border-[rgba(255,255,255,0.1)] rounded-3xl overflow-hidden"
                     style={{ boxShadow: '0 30px 100px rgba(152,16,250,0.3)' }}>
                  <img
                    src={dashboards[currentIndex].image}
                    alt={dashboards[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,11,14,0.9)] via-transparent to-transparent" />
                  
                  {/* Info overlay */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 p-10"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${dashboards[currentIndex].color} flex items-center justify-center border-2 border-white shadow-xl`}>
                        {(() => {
                          const Icon = dashboards[currentIndex].icon;
                          return <Icon className="text-white" size={28} />;
                        })()}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-3xl font-bold mb-2">
                          {dashboards[currentIndex].title}
                        </h3>
                        <p className="text-white/80 text-lg">
                          {dashboards[currentIndex].description}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Border glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: `linear-gradient(45deg, transparent, rgba(152,16,250,0.3), transparent)`,
                      backgroundSize: '400% 400%'
                    }}
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <motion.button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="text-white" size={28} />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="text-white" size={28} />
            </motion.button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            {dashboards.map((dashboard, index) => (
              <motion.button
                key={dashboard.id}
                onClick={() => {
                  setAutoplay(false);
                  setCurrentIndex(index);
                }}
                className={`relative overflow-hidden rounded-2xl border-2 transition-all ${
                  index === currentIndex
                    ? 'border-[#9810FA] shadow-[0_0_30px_rgba(152,16,250,0.5)] scale-105'
                    : 'border-transparent hover:border-white/30'
                }`}
                whileHover={{ scale: index === currentIndex ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative w-40 h-24 bg-[rgba(255,255,255,0.05)]">
                  <img
                    src={dashboard.image}
                    alt={dashboard.title}
                    className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity"
                  />
                  
                  {/* Active indicator */}
                  {index === currentIndex && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-gradient-to-br from-[rgba(152,16,250,0.3)] to-[rgba(255,133,52,0.3)]"
                    />
                  )}
                </div>

                {/* Label */}
                <div className={`absolute bottom-2 left-2 right-2 text-center text-xs font-bold ${
                  index === currentIndex ? 'text-white' : 'text-white/60'
                }`}>
                  {dashboard.title}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Progress indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {dashboards.map((_, index) => (
              <motion.div
                key={index}
                className={`h-1 rounded-full transition-all ${
                  index === currentIndex ? 'w-12 bg-gradient-to-r from-[#ff8534] to-[#9810FA]' : 'w-8 bg-white/20'
                }`}
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}