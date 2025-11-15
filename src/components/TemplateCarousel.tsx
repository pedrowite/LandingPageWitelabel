import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Layout, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import template1 from 'figma:asset/10aa8b7063295fa5238dcd3377a384412b56ab58.png';
import template2 from 'figma:asset/6d2be79a580a3ebad9c8d13850b4be23d8a56fd1.png';
import template3 from 'figma:asset/5884f2b266e5d19f8290ed24101de9e5df402a48.png';

export default function TemplateCarousel() {
  const [currentIndex, setCurrentIndex] = useState(2); // Purple Pro como primeiro
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const templates = [
    {
      id: 1,
      name: 'Dark Vision',
      description: 'Dashboard escuro com cripto',
      image: template1,
      theme: 'dark'
    },
    {
      id: 2,
      name: 'Clean Light',
      description: 'Interface minimalista clara',
      image: template2,
      theme: 'light'
    },
    {
      id: 3,
      name: 'Purple Pro',
      description: 'Design profissional vibrante',
      image: template3,
      theme: 'purple'
    }
  ];

  // Autoplay effect
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
  };

  // Get visible templates (current and neighbors for desktop)
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
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background effects - REMOVIDO */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
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
            <span className="bg-gradient-to-r from-[#FFFFFF] via-[#FED5A7] to-[#FFBF77] bg-clip-text text-transparent">
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
          className="relative mb-12 mt-4"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Templates Display - Desktop - +40% MAIOR (total 110% do anterior) */}
          <div className="hidden md:flex items-center justify-center min-h-[700px] lg:min-h-[850px] relative">
            {getVisibleTemplates().map((template, idx) => (
              <motion.div
                key={`${template.id}-${currentIndex}`}
                initial={{ 
                  opacity: 0,
                  scale: 0.8,
                  x: template.position * 100
                }}
                animate={{ 
                  opacity: template.isCurrent ? 1 : 0.3,
                  scale: template.isCurrent ? 1 : 0.65,
                  x: template.position * 750,
                  zIndex: template.isCurrent ? 10 : 1
                }}
                exit={{ 
                  opacity: 0,
                  scale: 0.8
                }}
                transition={{ 
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="absolute w-[800px] lg:w-[1050px]"
                style={{ 
                  left: '50%',
                  top: '50%',
                  marginLeft: template.isCurrent 
                    ? '-400px'  // Card central: perfeitamente centralizado (800/2)
                    : (template.position < 0 
                      ? '-500px'  // Card esquerdo: mais afastado
                      : '-300px'  // Card direito: mais afastado
                    ),
                  transform: 'translateY(-50%)',
                }}
              >
                <TemplateCard 
                  template={template} 
                  isActive={template.isCurrent}
                  onClick={() => template.isCurrent ? null : goToSlide((currentIndex + template.position + templates.length) % templates.length)}
                />
              </motion.div>
            ))}
          </div>

          {/* Templates Display - Mobile */}
          <div className="md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md mx-auto"
              >
                <TemplateCard 
                  template={templates[currentIndex]} 
                  isActive={true}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => goToSlide((currentIndex - 1 + templates.length) % templates.length)}
            className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[rgba(11,11,14,0.9)] backdrop-blur-xl border border-[rgba(255,255,255,0.2)] flex items-center justify-center hover:bg-gradient-to-r hover:from-[#ff8534] hover:to-[#9810FA] transition-all group"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
          
          <button
            onClick={() => goToSlide((currentIndex + 1) % templates.length)}
            className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[rgba(11,11,14,0.9)] backdrop-blur-xl border border-[rgba(255,255,255,0.2)] flex items-center justify-center hover:bg-gradient-to-r hover:from-[#ff8534] hover:to-[#9810FA] transition-all group"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
        </div>

        {/* Custom navigation dots */}
        <div className="flex items-center justify-center gap-3">
          {templates.map((template, index) => (
            <motion.button
              key={template.id}
              onClick={() => goToSlide(index)}
              className="group relative"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className={`rounded-full transition-all ${
                  index === currentIndex 
                    ? 'w-8 h-2 bg-gradient-to-r from-[#ff8534] to-[#9810FA]'
                    : 'w-2 h-2 bg-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.5)]'
                }`}
                animate={{
                  width: index === currentIndex ? 32 : 8
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

// Template Card Component
function TemplateCard({ template, isActive, onClick }: { 
  template: any; 
  isActive: boolean;
  onClick?: () => void;
}) {
  return (
    <motion.div
      onClick={onClick}
      className={`group relative ${onClick && !isActive ? 'cursor-pointer' : ''}`}
      whileHover={isActive ? { y: -8 } : {}}
    >
      {/* Card container - Transparente */}
      <div className="relative rounded-2xl border border-[rgba(255,255,255,0.08)] overflow-hidden hover:border-[rgba(255,255,255,0.2)] transition-all duration-500">
        {/* Image container with aspect ratio */}
        <div className="relative aspect-[16/10] overflow-hidden">
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,11,14,0.9)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
          
          {/* Template image */}
          <motion.img
            src={template.image}
            alt={template.name}
            className="w-full h-full object-cover"
            whileHover={isActive ? { scale: 1.05 } : {}}
            transition={{ duration: 0.6 }}
          />

          {/* Floating badge */}
          <div className="absolute top-4 right-4 z-20">
            <div className="px-3 py-1.5 rounded-full bg-[rgba(11,11,14,0.9)] backdrop-blur-xl border border-[rgba(255,255,255,0.2)] flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#ff8534]" />
              <span className="text-white text-xs font-bold uppercase tracking-wide">
                {template.theme}
              </span>
            </div>
          </div>

          {/* Info overlay - appears on hover */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h3 className="text-white font-bold text-xl mb-1">{template.name}</h3>
            <p className="text-[#A0A0A5] text-sm">{template.description}</p>
          </div>
        </div>

        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff8534] via-[#9810FA] to-[#D74B18] opacity-20 blur-2xl" />
        </div>
      </div>

      {/* Bottom glow line */}
      <motion.div
        className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-[#ff8534] to-transparent"
        initial={{ width: '0%', opacity: 0 }}
        whileHover={{ width: '100%', opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
}