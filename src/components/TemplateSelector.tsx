import { motion } from 'motion/react';
import { Palette, Check } from 'lucide-react';
import { ThemeMode } from '../App';

interface TemplateSelectorProps {
  theme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
}

const templates: { id: ThemeMode; name: string; description: string; preview: string }[] = [
  {
    id: 'dark-clean',
    name: 'Dark Clean',
    description: 'Design minimalista com fundo escuro premium',
    preview: 'linear-gradient(135deg, #0B0B0E 0%, #111114 100%)'
  },
  {
    id: 'gradient-neon',
    name: 'Gradient Neon',
    description: 'Gradientes vibrantes com efeitos neon',
    preview: 'linear-gradient(135deg, #0B0B0E 0%, #1a0a2e 50%, #0B0B0E 100%)'
  },
  {
    id: 'minimalist',
    name: 'Minimalista',
    description: 'Ultra clean com foco no conteúdo',
    preview: 'linear-gradient(135deg, #111114 0%, #1a1a1f 100%)'
  },
  {
    id: 'light-tech',
    name: 'Light Tech',
    description: 'Tema escuro com toques tecnológicos',
    preview: 'linear-gradient(135deg, #1a1a1f 0%, #0B0B0E 100%)'
  }
];

export default function TemplateSelector({ theme, onThemeChange }: TemplateSelectorProps) {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(215,75,24,0.1)] border border-[rgba(215,75,24,0.3)] mb-6">
            <Palette className="w-4 h-4 text-[#D74B18]" />
            <span className="text-[#D74B18]">Personalização Total</span>
          </div>

          <h2 className="text-white mb-4 font-bold">Escolha Seu Estilo Visual</h2>
          <p className="text-[#A0A0A5] max-w-2xl mx-auto">
            Selecione o template que melhor representa sua marca. Totalmente customizável.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template, index) => (
            <motion.button
              key={template.id}
              onClick={() => onThemeChange(template.id)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group relative text-left transition-all duration-300 ${
                theme === template.id ? 'scale-105' : ''
              }`}
            >
              <div className={`relative bg-[rgba(255,255,255,0.02)] backdrop-blur-sm rounded-2xl p-6 border-2 transition-all duration-300 ${
                theme === template.id 
                  ? 'border-[#D74B18] shadow-[0_0_30px_rgba(215,75,24,0.3)]' 
                  : 'border-[rgba(255,255,255,0.1)] hover:border-[rgba(215,75,24,0.5)]'
              }`}>
                {/* Preview box */}
                <div className="relative h-32 rounded-xl mb-4 overflow-hidden">
                  <div 
                    className="absolute inset-0"
                    style={{ background: template.preview }}
                  />
                  
                  {/* Mini interface preview */}
                  <div className="relative h-full p-3 flex flex-col justify-between">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-[rgba(255,255,255,0.3)]" />
                      <div className="w-2 h-2 rounded-full bg-[rgba(255,255,255,0.3)]" />
                      <div className="w-2 h-2 rounded-full bg-[rgba(255,255,255,0.3)]" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-1.5 bg-gradient-to-r from-[#D74B18] to-[#6D03F5] rounded-full w-3/4" />
                      <div className="h-1 bg-[rgba(255,255,255,0.2)] rounded-full w-1/2" />
                      <div className="h-1 bg-[rgba(255,255,255,0.1)] rounded-full w-2/3" />
                    </div>
                  </div>

                  {/* Selected indicator */}
                  {theme === template.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-2 right-2 w-8 h-8 rounded-full bg-gradient-to-r from-[#D74B18] to-[#6D03F5] flex items-center justify-center"
                    >
                      <Check className="w-5 h-5 text-white" />
                    </motion.div>
                  )}

                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D74B18] to-[#6D03F5] opacity-0 group-hover:opacity-10 transition-opacity" />
                </div>

                {/* Template info */}
                <h4 className="text-white mb-2">{template.name}</h4>
                <p className="text-[#A0A0A5] text-sm">{template.description}</p>

                {/* Active indicator badge */}
                {theme === template.id && (
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#00c950] animate-pulse" />
                    <span className="text-[#00c950] text-xs">Ativo</span>
                  </div>
                )}
              </div>

              {/* Glow effect on selected */}
              {theme === template.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#D74B18] to-[#6D03F5] rounded-2xl blur-xl opacity-30 -z-10" />
              )}
            </motion.button>
          ))}
        </div>

        {/* Info box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-[rgba(255,255,255,0.02)] backdrop-blur-sm rounded-2xl border border-[rgba(255,255,255,0.1)]">
            <Palette className="w-5 h-5 text-[#D74B18]" />
            <span className="text-[#A0A0A5]">
              Cada template é totalmente customizável com suas cores e logo
            </span>
          </div>
        </motion.div>

        {/* Live preview note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-[#A0A0A5] text-sm flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#D74B18] to-[#6D03F5] animate-pulse" />
            As mudanças são aplicadas em tempo real
          </p>
        </motion.div>
      </div>
    </section>
  );
}