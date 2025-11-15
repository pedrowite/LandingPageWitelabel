import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ThemeMode } from '../App';

interface FinalCTAProps {
  theme: ThemeMode;
}

export default function FinalCTA({ theme }: FinalCTAProps) {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background removido - tudo transparente */}
      
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(255,133,52,0.12)] border border-[rgba(255,133,52,0.3)] mb-8"
        >
          <Sparkles className="w-4 h-4 text-[#ff8534]" />
          <span className="text-[#ff8534] font-semibold text-sm">Comece em 48 horas</span>
        </motion.div>

        {/* Título Principal */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="leading-tight mb-6 font-bold text-[48px] sm:text-[55px] px-4"
        >
          <span className="text-white">Pronto para lançar seu</span>
          <br />
          <span className="bg-gradient-to-r from-[#EFD9FF] via-[#FED5A7] to-[#FFBF77] bg-clip-text text-transparent">
            Gateway WiteLabel?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[#A0A0A5] text-base sm:text-lg lg:text-xl mb-12 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Transforme sua marca em uma <span className="text-white font-semibold">operação financeira completa</span> com a WiteLabel. 
          Tecnologia enterprise, suporte dedicado e múltiplos modelos de receita.
        </motion.p>

        {/* Single CTA - Minimalista Roxo Claro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center px-4"
        >
          <motion.button
            onClick={() => window.location.href = '/formulario'}
            whileHover={{ 
              scale: 1.05,
              y: -2
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-xl overflow-hidden border border-[rgba(152,16,250,0.5)]"
            style={{
              background: 'rgba(152,16,250,0.2)'
            }}
          >
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#9810FA]/40 to-[#7a0dd4]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                boxShadow: '0 0 40px rgba(152,16,250,0.5)',
                filter: 'blur(20px)'
              }}
            />
            
            <span className="relative z-10 flex items-center justify-center gap-3 text-white font-medium text-lg">
              Agendar Demonstração
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Animated particles - Laranja */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-[#ff8534]"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.4
          }}
        />
      ))}
    </section>
  );
}