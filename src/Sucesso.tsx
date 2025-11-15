import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, ArrowRight, ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import imgWiteLabelLogo from "figma:asset/bb3f1e4d91d8cb4b6e7deebe33fca6227219583d.png";
import imgTemplate1 from "figma:asset/5884f2b266e5d19f8290ed24101de9e5df402a48.png";
import imgTemplate2 from "figma:asset/6d2be79a580a3ebad9c8d13850b4be23d8a56fd1.png";
import imgTemplate3 from "figma:asset/10aa8b7063295fa5238dcd3377a384412b56ab58.png";
import { GoogleTagManager } from './components/GoogleTagManager';

const templates = [
  {
    id: 1,
    name: 'Dashboard Premium',
    description: 'Interface moderna com métricas em tempo real e visualização de dados avançada',
    image: imgTemplate1,
    features: ['Gráfico de receita', 'Saldo de criptomoedas', 'Análise de carrinho']
  },
  {
    id: 2,
    name: 'Dashboard Clean',
    description: 'Design minimalista focado em clareza e usabilidade',
    image: imgTemplate2,
    features: ['Tendências de vendas', 'Gráfico de receita', 'Distribuição de vendas']
  },
  {
    id: 3,
    name: 'Dashboard Dark Pro',
    description: 'Tema escuro profissional com visualizações detalhadas',
    image: imgTemplate3,
    features: ['Visão geral', 'Transações em tempo real', 'Interesse do cliente']
  }
];

export default function Sucesso() {
  const [currentTemplate, setCurrentTemplate] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTemplate((prev) => (prev + 1) % templates.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentTemplate((prev) => (prev - 1 + templates.length) % templates.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentTemplate((prev) => (prev + 1) % templates.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentTemplate(index);
  };

  return (
    <div className="min-h-screen bg-[#000000] flex items-center justify-center px-4 py-8 sm:py-12 relative overflow-hidden">
      {/* Google Tag Manager */}
      <GoogleTagManager />
      
      {/* Background effects - Mais claro no mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Purple glow - Top Left */}
        <div 
          className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full opacity-25 md:opacity-30 blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(152,16,250,0.5) 0%, transparent 60%)' }}
        />
        
        {/* Orange glow - Top Right */}
        <div 
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full opacity-25 md:opacity-30 blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(255,133,52,0.5) 0%, transparent 60%)' }}
        />

        {/* Purple glow - Bottom Left */}
        <div 
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full opacity-20 md:opacity-25 blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(152,16,250,0.5) 0%, transparent 60%)' }}
        />
        
        {/* Orange glow - Bottom Right */}
        <div 
          className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full opacity-20 md:opacity-25 blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(255,133,52,0.5) 0%, transparent 60%)' }}
        />

        {/* Vignette Effect */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.9) 100%)'
          }}
        />
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full max-w-6xl"
      >
        {/* Success Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8 sm:mb-12"
        >
          {/* Success Icon */}
          <motion.div
            className="inline-flex items-center justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', bounce: 0.5 }}
          >
            <div className="relative">
              {/* Icon container */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#9810FA] to-[#C944FF] flex items-center justify-center">
                <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" strokeWidth={2.5} />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 px-4"
          >
            Formulário enviado{' '}
            <span className="bg-gradient-to-r from-[#FFFFFF] via-[#FED5A7] to-[#FFBF77] bg-clip-text text-transparent">
              com sucesso!
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-[#A0A0A5] text-base sm:text-lg max-w-2xl mx-auto px-4"
          >
            Nossa equipe entrará em contato em breve. Enquanto isso, conheça alguns templates disponíveis:
          </motion.p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative bg-[rgba(17,17,20,0.85)] rounded-2xl sm:rounded-3xl border border-[rgba(152,16,250,0.3)] overflow-hidden"
          style={{
            boxShadow: '0 20px 80px rgba(0,0,0,0.5), 0 0 60px rgba(152,16,250,0.15)'
          }}
        >
          {/* Carousel container */}
          <div className="relative aspect-video overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTemplate}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <ImageWithFallback
                  src={templates[currentTemplate].image}
                  alt={templates[currentTemplate].name}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.95)] via-transparent to-transparent" />
                
                {/* Template info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-white font-bold text-xl sm:text-2xl lg:text-3xl mb-2">
                      {templates[currentTemplate].name}
                    </h3>
                    <p className="text-[#A0A0A5] text-sm sm:text-base mb-4">
                      {templates[currentTemplate].description}
                    </p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {templates[currentTemplate].features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          className="px-3 py-1 rounded-full bg-[rgba(152,16,250,0.2)] border border-[rgba(152,16,250,0.3)] text-[#C944FF] text-xs sm:text-sm font-bold"
                        >
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons - Hidden on small mobile */}
            <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 left-4 right-4 items-center justify-between pointer-events-none">
              <motion.button
                onClick={handlePrevious}
                className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[rgba(17,17,20,0.8)] border border-[rgba(152,16,250,0.3)] flex items-center justify-center text-white hover:bg-[rgba(152,16,250,0.2)] transition-all"
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>

              <motion.button
                onClick={handleNext}
                className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[rgba(17,17,20,0.8)] border border-[rgba(152,16,250,0.3)] flex items-center justify-center text-white hover:bg-[rgba(152,16,250,0.2)] transition-all"
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex items-center justify-center gap-2 py-4 sm:py-6 border-t border-[rgba(152,16,250,0.2)]">
            {templates.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`
                  h-2 rounded-full transition-all
                  ${currentTemplate === index ? 'w-8' : 'w-2'}
                `}
                style={{
                  background: currentTemplate === index 
                    ? 'linear-gradient(90deg, #9810FA, #ff8534)'
                    : 'rgba(255,255,255,0.2)'
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Back to home button - Minimalista e Moderno */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-6 sm:mt-8"
        >
          <motion.button
            onClick={() => window.location.href = '/'}
            className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl overflow-hidden border border-[rgba(152,16,250,0.6)]"
            style={{
              background: 'rgba(152,16,250,0.25)'
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(152,16,250,0.4)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#9810FA]/40 to-[#7a0dd4]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <Home className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 text-white" />
            <span className="relative z-10 text-white font-bold text-sm sm:text-base lg:text-lg">
              Voltar para a Landing Page
            </span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 text-white group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}