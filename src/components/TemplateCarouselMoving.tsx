import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Layout, ChevronLeft, ChevronRight, Zap } from 'lucide-react';
import template1 from 'figma:asset/10aa8b7063295fa5238dcd3377a384412b56ab58.png';
import template2 from 'figma:asset/6d2be79a580a3ebad9c8d13850b4be23d8a56fd1.png';
import template3 from 'figma:asset/5884f2b266e5d19f8290ed24101de9e5df402a48.png';

export default function TemplateCarouselMoving() {
  const [currentIndex, setCurrentIndex] = useState(1); // Clean Light em destaque
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const templates = [
    {
      id: 1,
      name: 'Dark Vision',
      description: 'Dashboard escuro com cripto',
      image: template1,
      color: '#9810FA'
    },
    {
      id: 2,
      name: 'Clean Light',
      description: 'Interface minimalista clara',
      image: template2,
      color: '#14B8A6'
    },
    {
      id: 3,
      name: 'Purple Pro',
      description: 'Design profissional vibrante',
      image: template3,
      color: '#ff8534'
    }
  ];

  // Autoplay effect - movimento contínuo
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % templates.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isAutoPlaying, templates.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % templates.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + templates.length) % templates.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Get visible templates (current and neighbors)
  const getVisibleTemplates = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + templates.length) % templates.length;
      visible.push({
        ...templates[index],
        position: i,
        isCurrent: i === 0
      });
    }
    return visible;
  };

  return (
    <section className="relative py-12 md:py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[rgba(109,3,245,0.2)] to-[rgba(215,75,24,0.2)] border border-[rgba(255,255,255,0.2)] mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Layout className="text-[#ff8534]" size={24} />
            <span className="text-white font-bold text-lg">Templates de Dashboard</span>
          </motion.div>

          <h2 className="text-white mb-6 leading-tight font-bold sm:text-[55px] text-[48px]">
            Escolha seu{' '}
            <span className="bg-gradient-to-r from-[#EFD9FF] via-[#FED5A7] to-[#FFBF77] bg-clip-text text-transparent">
              Template Perfeito
            </span>
          </h2>
          <p className="text-[#A0A0A5] text-lg sm:text-xl max-w-3xl mx-auto px-4">
            Dashboards prontos e personalizáveis para{' '}
            <span className="text-white font-bold">sua marca brilhar</span>
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div 
          className="relative min-h-[500px] lg:min-h-[650px] mb-[10px] mt-[0px] mr-[0px] ml-[0px]"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Templates Display - Desktop with 80% larger size */}
          <div className="hidden md:flex items-center justify-center relative">
            <AnimatePresence mode="sync">
              {getVisibleTemplates().map((template) => {
                const isCurrent = template.isCurrent;
                const isLeft = template.position < 0;
                const isRight = template.position > 0;

                return (
                  <motion.div
                    key={`${template.id}-${currentIndex}`}
                    initial={{ 
                      opacity: 0,
                      scale: 0.7,
                      x: template.position * 900
                    }}
                    animate={{ 
                      opacity: isCurrent ? 1 : 0.4,
                      scale: isCurrent ? 1 : 0.85,
                      x: template.position * 850,
                      y: isCurrent ? 0 : 30,
                      zIndex: isCurrent ? 20 : 5
                    }}
                    exit={{ 
                      opacity: 0,
                      scale: 0.7,
                      transition: { duration: 0.3 }
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 100,
                      damping: 20,
                      mass: 1
                    }}
                    className="absolute cursor-pointer"
                    style={{
                      width: '950px', // Base 530px × 1.8 (80% maior)
                      left: '50%',
                      top: '50%',
                      marginLeft: isCurrent ? '-475px' : (isLeft ? '-575px' : '-375px'),
                      transform: 'translateY(-50%)',
                      perspective: '1000px'
                    }}
                    onClick={() => !isCurrent && goToSlide((currentIndex + template.position + templates.length) % templates.length)}
                  >
                    {/* Card Container */}
                    <motion.div
                      className="relative rounded-3xl overflow-hidden bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] backdrop-blur-xl"
                      style={{
                        boxShadow: isCurrent 
                          ? `0 30px 80px ${template.color}40, 0 0 0 1px ${template.color}30`
                          : '0 20px 50px rgba(0,0,0,0.3)',
                        transition: 'all 0.5s ease'
                      }}
                      animate={{
                        borderColor: isCurrent ? `${template.color}50` : 'rgba(255,255,255,0.1)'
                      }}
                    >
                      {/* Animated glow ring for current */}
                      {isCurrent && (
                        <motion.div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background: `radial-gradient(circle at center, ${template.color}20, transparent 70%)`
                          }}
                          animate={{
                            opacity: [0.3, 0.6, 0.3]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      )}

                      {/* Image Container */}
                      <div className="relative aspect-[16/9] overflow-hidden rounded-t-3xl">
                        <motion.img
                          src={template.image}
                          alt={template.name}
                          className="w-full h-full object-cover object-top"
                          animate={{
                            scale: isCurrent ? 1 : 0.95
                          }}
                          transition={{ duration: 0.5 }}
                        />
                        
                        {/* Overlay gradient - visible on current */}
                        <div 
                          className="absolute inset-0 transition-opacity duration-500"
                          style={{
                            background: `linear-gradient(to top, ${template.color}40, transparent 60%)`,
                            opacity: isCurrent ? 1 : 0
                          }}
                        />

                        {/* Featured badge - only on current */}
                        {isCurrent && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            className="absolute top-6 right-6 px-4 py-2 rounded-full bg-[rgba(0,0,0,0.9)] backdrop-blur-xl border"
                            style={{ borderColor: template.color }}
                          >
                            <span className="text-white font-bold flex items-center gap-2">
                              <Zap className="w-4 h-4" style={{ color: template.color }} fill={template.color} />
                              Em Destaque
                            </span>
                          </motion.div>
                        )}
                      </div>

                      {/* Info Section */}
                      <motion.div 
                        className="p-8"
                        animate={{
                          opacity: isCurrent ? 1 : 0.6
                        }}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-white font-bold text-2xl">{template.name}</h3>
                          <motion.div 
                            className="w-4 h-4 rounded-full"
                            style={{ 
                              background: template.color,
                              boxShadow: `0 0 15px ${template.color}`
                            }}
                            animate={{
                              scale: isCurrent ? [1, 1.3, 1] : 1
                            }}
                            transition={{
                              duration: 2,
                              repeat: isCurrent ? Infinity : 0
                            }}
                          />
                        </div>
                        <p className="text-[#A0A0A5] mb-6">{template.description}</p>
                      </motion.div>

                      {/* Corner accents */}
                      <div 
                        className="absolute top-0 left-0 w-32 h-32 opacity-30 pointer-events-none"
                        style={{
                          background: `radial-gradient(circle at top left, ${template.color}50, transparent)`
                        }}
                      />
                      <div 
                        className="absolute bottom-0 right-0 w-32 h-32 opacity-30 pointer-events-none"
                        style={{
                          background: `radial-gradient(circle at bottom right, ${template.color}50, transparent)`
                        }}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Mobile Version - Single Card */}
          <div className="md:hidden flex items-center justify-center px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full max-w-md"
              >
                {/* Card Container */}
                <div
                  className="relative rounded-3xl overflow-hidden bg-[rgba(255,255,255,0.03)] border backdrop-blur-xl"
                  style={{
                    borderColor: `${templates[currentIndex].color}50`,
                    boxShadow: `0 30px 80px ${templates[currentIndex].color}40`
                  }}
                >
                  {/* Animated glow */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${templates[currentIndex].color}20, transparent 70%)`
                    }}
                    animate={{
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity
                    }}
                  />

                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-3xl">
                    <img
                      src={templates[currentIndex].image}
                      alt={templates[currentIndex].name}
                      className="w-full h-full object-cover object-top"
                    />
                    
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to top, ${templates[currentIndex].color}40, transparent 60%)`
                      }}
                    />

                    {/* Featured badge */}
                    <div
                      className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-[rgba(0,0,0,0.9)] backdrop-blur-xl border"
                      style={{ borderColor: templates[currentIndex].color }}
                    >
                      <span className="text-white text-sm font-bold flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5" style={{ color: templates[currentIndex].color }} fill={templates[currentIndex].color} />
                        Em Destaque
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-bold text-xl">{templates[currentIndex].name}</h3>
                      <motion.div 
                        className="w-3 h-3 rounded-full"
                        style={{ 
                          background: templates[currentIndex].color,
                          boxShadow: `0 0 12px ${templates[currentIndex].color}`
                        }}
                        animate={{
                          scale: [1, 1.3, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity
                        }}
                      />
                    </div>
                    <p className="text-[#A0A0A5] text-sm mb-4">{templates[currentIndex].description}</p>

                    {/* Botão removido para mobile mais limpo */}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows - Desktop */}
          <div className="hidden md:flex items-center justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 px-8 pointer-events-none z-30">
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 rounded-full bg-[rgba(0,0,0,0.8)] backdrop-blur-xl border border-[rgba(255,255,255,0.2)] flex items-center justify-center text-white hover:border-[#ff8534] transition-all pointer-events-auto group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:text-[#ff8534] transition-colors" />
            </motion.button>
            
            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 rounded-full bg-[rgba(0,0,0,0.8)] backdrop-blur-xl border border-[rgba(255,255,255,0.2)] flex items-center justify-center text-white hover:border-[#9810FA] transition-all pointer-events-auto group"
            >
              <ChevronRight className="w-6 h-6 group-hover:text-[#9810FA] transition-colors" />
            </motion.button>
          </div>

          {/* Navigation Arrows - Mobile */}
          <div className="md:hidden flex items-center justify-center gap-4 mt-6">
            <motion.button
              onClick={prevSlide}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-[rgba(0,0,0,0.8)] backdrop-blur-xl border border-[rgba(255,255,255,0.2)] flex items-center justify-center text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              onClick={nextSlide}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-[rgba(0,0,0,0.8)] backdrop-blur-xl border border-[rgba(255,255,255,0.2)] flex items-center justify-center text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-3 mt-[0px] mb-[55px] mr-[0px] ml-[0px]">
          {templates.map((template, index) => (
            <motion.button
              key={template.id}
              onClick={() => goToSlide(index)}
              className="relative group"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <div 
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'w-10' : ''
                }`}
                style={{
                  background: currentIndex === index 
                    ? `linear-gradient(135deg, ${template.color}, ${template.color}dd)`
                    : 'rgba(255,255,255,0.2)',
                  boxShadow: currentIndex === index ? `0 0 20px ${template.color}` : 'none'
                }}
              />
            </motion.button>
          ))}
        </div>

        {/* Bottom Info - Removed customization badge */}
      </div>
    </section>
  );
}