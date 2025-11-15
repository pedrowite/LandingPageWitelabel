import { motion } from 'motion/react';
import { Layout, Zap } from 'lucide-react';
import template1 from 'figma:asset/10aa8b7063295fa5238dcd3377a384412b56ab58.png';
import template2 from 'figma:asset/6d2be79a580a3ebad9c8d13850b4be23d8a56fd1.png';
import template3 from 'figma:asset/5884f2b266e5d19f8290ed24101de9e5df402a48.png';

export default function TemplateGrid() {
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

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
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

        {/* Templates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Card Container */}
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] backdrop-blur-xl"
                style={{
                  boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
                }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${template.color}30, transparent)`
                  }}
                />

                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-3xl">
                  <motion.img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-full object-cover object-top"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Overlay gradient */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(to top, ${template.color}40, transparent)`
                    }}
                  />

                  {/* Preview badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-[rgba(0,0,0,0.8)] backdrop-blur-xl border border-[rgba(255,255,255,0.2)] opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <span className="text-white text-xs font-bold flex items-center gap-1">
                      <Zap className="w-3 h-3" style={{ color: template.color }} />
                      Preview
                    </span>
                  </motion.div>
                </div>

                {/* Info Section */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-bold text-xl">{template.name}</h3>
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ 
                        background: template.color,
                        boxShadow: `0 0 10px ${template.color}`
                      }}
                    />
                  </div>
                  <p className="text-[#A0A0A5] text-sm mb-4">{template.description}</p>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 rounded-xl bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)] text-white font-semibold text-sm transition-all"
                  >
                    Visualizar Dashboard
                  </motion.button>
                </div>

                {/* Corner accents */}
                <div 
                  className="absolute top-0 left-0 w-20 h-20 opacity-30"
                  style={{
                    background: `radial-gradient(circle at top left, ${template.color}40, transparent)`
                  }}
                />
                <div 
                  className="absolute bottom-0 right-0 w-20 h-20 opacity-30"
                  style={{
                    background: `radial-gradient(circle at bottom right, ${template.color}40, transparent)`
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(255,133,52,0.12)] border border-[rgba(255,133,52,0.3)]">
            <div className="w-2 h-2 rounded-full bg-[#ff8534]" />
            <span className="text-[#ff8534] text-sm font-semibold">100% Customizável com sua marca</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
