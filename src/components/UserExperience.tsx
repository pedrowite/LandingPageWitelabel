import { motion } from 'motion/react';
import { Zap, Brain, Grid3x3 } from 'lucide-react';
import { ThemeMode } from '../App';

interface UserExperienceProps {
  theme: ThemeMode;
}

const uxFeatures = [
  {
    icon: Zap,
    title: "Performance Impecável",
    description: "Carregamento otimizado e fluidez em cada interação",
    gradient: "from-[#ff6900] to-[#f54900]"
  },
  {
    icon: Brain,
    title: "Design Intuitivo",
    description: "Layout pensado para uso natural e experiência agradável",
    gradient: "from-[#6D03F5] to-[#9810FA]"
  },
  {
    icon: Grid3x3,
    title: "Interface Adaptável",
    description: "Visual inteligente em qualquer dispositivo",
    gradient: "from-[#6D03F5] to-[#9810FA]"
  }
];

export default function UserExperience({ theme }: UserExperienceProps) {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0E] via-[#111114] to-[#0B0B0E]" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(215,75,24,0.3) 0%, rgba(109,3,245,0.3) 50%, transparent 70%)',
          filter: 'blur(120px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[rgba(215,75,24,0.1)] border border-[rgba(215,75,24,0.3)] mb-6">
            <div className="w-2 h-2 rounded-full bg-[#D74B18] animate-pulse" />
            <span className="text-[#D74B18] font-semibold">Foco em Experiência</span>
          </div>
          
          <h2 className="text-white mb-4 leading-tight font-bold text-[55px]">
            A experiência do usuário é o<br />
            <span className="bg-gradient-to-r from-[#ff8534] via-[#ff6900] to-[#b45dff] bg-clip-text text-transparent">
              coração da WiteLabel
            </span>
          </h2>
          <p className="text-[#A0A0A5] text-lg max-w-4xl mx-auto leading-relaxed">
            Cada detalhe da plataforma, dos checkouts ao app mobile, é desenhado para ser <span className="text-white font-semibold">intuitivo, rápido e agradável</span> — unindo design e performance em um só fluxo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {uxFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative bg-[rgba(255,255,255,0.02)] backdrop-blur-sm rounded-2xl p-8 border border-[rgba(255,255,255,0.1)] hover:border-[rgba(215,75,24,0.5)] transition-all duration-300">
                {/* Icon with gradient background */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-white mb-3">{feature.title}</h3>
                <p className="text-[#A0A0A5]">{feature.description}</p>

                {/* Animated corner accent */}
                <motion.div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-300`}
                  initial={false}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual demonstration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative bg-gradient-to-br from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.01)] backdrop-blur-sm rounded-3xl p-12 border border-[rgba(255,255,255,0.1)] overflow-hidden">
            {/* Decorative gradient blobs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[rgba(215,75,24,0.1)] rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[rgba(109,3,245,0.1)] rounded-full blur-3xl" />

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              {/* Left - Metrics */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-white mb-2">Design que Converte</h3>
                  <p className="text-[#A0A0A5]">
                    Cada pixel foi pensado para maximizar a experiência e a conversão
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    { label: "Taxa de Conversão", value: "+47%", color: "from-[#6D03F5] to-[#9810FA]" },
                    { label: "Tempo de Carregamento", value: "0.8s", color: "from-[#ff6900] to-[#f54900]" },
                    { label: "Satisfação do Usuário", value: "98%", color: "from-[#D74B18] to-[#6D03F5]" }
                  ].map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[#A0A0A5]">{metric.label}</span>
                        <span className={`bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                          {metric.value}
                        </span>
                      </div>
                      <div className="h-2 bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${metric.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${90 + index * 3}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right - Visual elements */}
              <div className="relative h-[400px]">
                {/* Floating cards */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 right-0 w-48 h-32 bg-gradient-to-br from-[rgba(255,105,0,0.2)] to-[rgba(251,44,54,0.2)] backdrop-blur-sm rounded-2xl border border-[rgba(255,105,0,0.3)] p-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff6900] to-[#fb2c36] mb-2" />
                  <div className="h-2 bg-[rgba(255,255,255,0.2)] rounded-full w-3/4 mb-2" />
                  <div className="h-2 bg-[rgba(255,255,255,0.1)] rounded-full w-1/2" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-0 left-0 w-56 h-36 bg-gradient-to-br from-[rgba(109,3,245,0.2)] to-[rgba(152,16,250,0.2)] backdrop-blur-sm rounded-2xl border border-[rgba(109,3,245,0.3)] p-4"
                >
                  <div className="flex gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#6D03F5] to-[#9810FA]" />
                    <div className="flex-1">
                      <div className="h-2 bg-[rgba(255,255,255,0.2)] rounded-full w-3/4 mb-1" />
                      <div className="h-2 bg-[rgba(255,255,255,0.1)] rounded-full w-1/2" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-16 bg-[rgba(255,255,255,0.05)] rounded-lg" />
                    <div className="h-16 bg-[rgba(255,255,255,0.05)] rounded-lg" />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-gradient-to-br from-[rgba(109,3,245,0.2)] to-[rgba(152,16,250,0.2)] backdrop-blur-sm rounded-2xl border border-[rgba(109,3,245,0.3)] p-4 flex items-center justify-center"
                >
                  <div className="text-center">
                    <Zap className="w-12 h-12 text-[#6D03F5] mx-auto mb-2" />
                    <div className="h-2 bg-[rgba(255,255,255,0.2)] rounded-full w-20 mx-auto" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}