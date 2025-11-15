import { motion } from 'motion/react';
import { Rocket, Settings, CheckCircle, Zap, Clock } from 'lucide-react';
import { ThemeMode } from '../App';
import { useState } from 'react';

interface HowItWorksProps {
  theme: ThemeMode;
}

const steps = [
  {
    number: "01",
    title: "Preencha o formulário",
    description: "Conte-nos sobre seu negócio e objetivos",
    icon: Rocket,
    color: "#ff8534",
    time: "5 min"
  },
  {
    number: "02",
    title: "Personalize sua marca",
    description: "Configure logo, cores e identidade visual",
    icon: Settings,
    color: "#ff6900",
    time: "15 min"
  },
  {
    number: "03",
    title: "Conecte e Ative os Pagamentos",
    description: "Conecte bancos, APIs e meios de pagamento",
    icon: Zap,
    color: "#9810FA",
    time: "20 min"
  },
  {
    number: "04",
    title: "Lance seu gateway",
    description: "Comece a processar pagamentos hoje mesmo",
    icon: CheckCircle,
    color: "#b45dff",
    time: "Imediato"
  }
];

export default function HowItWorks({ theme }: HowItWorksProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative py-12 md:py-24 px-6 max-w-[1600px] mx-auto">
      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-2 md:mb-8"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[rgba(255,133,52,0.2)] to-[rgba(152,16,250,0.2)] border border-[rgba(255,255,255,0.2)] mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="text-[#ff8534]" size={24} />
            <span className="text-white font-bold text-lg">Como Funciona</span>
          </motion.div>

          <h2 className="text-white mb-8 leading-tight font-bold sm:text-[55px] text-[48px]">
            Do zero ao{' '}
            <span className="bg-gradient-to-r from-[#EFD9FF] via-[#FED5A7] to-[#FFBF77] bg-clip-text text-transparent">
              operacional
            </span>
          </h2>

          {/* Modern 48H Badge - Integrated in header */}
          <div className="flex items-center justify-center gap-8 mb-6">
            <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="relative"
            >
              {/* Pulsing glow */}
              <motion.div
                className="absolute -inset-4 rounded-3xl blur-2xl"
                style={{ background: 'radial-gradient(circle, #ff8534, #9810FA)' }}
                animate={{ 
                  opacity: [0.2, 0.4, 0.2],
                  scale: [0.95, 1.05, 0.95]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Main container */}
              <div className="relative px-8 py-5 rounded-2xl border-2 bg-[rgba(11,11,14,0.8)] backdrop-blur-xl"
                style={{ borderColor: 'rgba(255,255,255,0.2)' }}
              >
                <div className="flex items-center gap-4">
                  {/* Animated clock icon */}
                  <div className="relative">
                    {/* Rotating gradient rings - Mobile only */}
                    <div className="lg:hidden absolute inset-0 -m-6">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute inset-0 rounded-full"
                          style={{
                            transform: `scale(${1 + i * 0.3})`,
                            opacity: 0.4 - i * 0.1,
                            background: `conic-gradient(from 0deg, ${i % 2 === 0 ? '#ff8534' : '#9810FA'}00, ${i % 2 === 0 ? '#ff8534' : '#9810FA'}80, ${i % 2 === 0 ? '#ff8534' : '#9810FA'}00)`
                          }}
                          animate={{
                            rotate: 360
                          }}
                          transition={{
                            duration: 4 + i * 2,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      ))}
                    </div>

                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff8534] to-[#9810FA] flex items-center justify-center relative"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Clock className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </motion.div>
                    
                    {/* Corner accent */}
                    <motion.div
                      className="absolute -top-1 -right-1 w-6 h-6 rounded-lg bg-[#3ACA33] flex items-center justify-center"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <CheckCircle className="w-4 h-4 text-white" strokeWidth={3} />
                    </motion.div>
                  </div>

                  {/* Text content */}
                  <div className="text-left">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-bold text-4xl bg-gradient-to-r from-[#FFFFFF] via-[#FED5A7] to-[#FFBF77] bg-clip-text text-transparent">
                        48h
                      </span>
                      <motion.span 
                        className="text-[#A0A0A5] text-sm font-semibold"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        ou menos
                      </motion.span>
                    </div>
                    <p className="text-white font-semibold text-sm">Para o gateway estar 100% operacional</p>
                  </div>
                </div>

                {/* Progress bar */}
                <motion.div
                  className="mt-4 h-1.5 rounded-full bg-[rgba(255,255,255,0.1)] overflow-hidden"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#ff8534] to-[#9810FA]"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                  />
                </motion.div>
              </div>
            </motion.div>

            <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent" />
          </div>

          <p className="text-[#A0A0A5] text-xl max-w-3xl mx-auto px-[0px] py-[20px] mx-[0px] my-[20px]">
            Seu gateway whitelabel pronto em <span className="text-white font-bold">4 passos simples</span>
          </p>
        </motion.div>

        {/* Treasure Map Style Roadmap - Desktop */}
        <div className="hidden lg:block relative pt-16 pb-12">
          <div className="max-w-5xl mx-auto relative h-[500px]">
            {/* SVG Path - Treasure Map Style */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 500" fill="none">
              {/* Dashed path */}
              <motion.path
                d="M 50 250 Q 200 100, 300 250 T 550 250 Q 700 350, 850 250"
                stroke="url(#pathGradient)"
                strokeWidth="3"
                strokeDasharray="10 10"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              
              {/* Animated progress */}
              <motion.path
                d="M 50 250 Q 200 100, 300 250 T 550 250 Q 700 350, 850 250"
                stroke="url(#activeGradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
              />

              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff8534" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#ff6900" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#9810FA" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="activeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff8534" />
                  <stop offset="50%" stopColor="#ff6900" />
                  <stop offset="100%" stopColor="#9810FA" />
                </linearGradient>
              </defs>
            </svg>

            {/* Step Cards positioned along path */}
            {steps.map((step, index) => {
              const positions = [
                { x: '5%', y: '50%' },
                { x: '30%', y: '20%' },
                { x: '55%', y: '50%' },
                { x: '80%', y: '35%' }
              ];

              return (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    left: positions[index].x,
                    top: positions[index].y,
                    transform: 'translate(-50%, -50%)'
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2, type: 'spring' }}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  {/* Connection dot */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4"
                    style={{ 
                      background: step.color,
                      borderColor: 'rgba(255,255,255,0.3)',
                      boxShadow: `0 0 20px ${step.color}60`
                    }}
                    animate={{
                      scale: activeStep === index ? [1, 1.3, 1] : 1,
                    }}
                    transition={{ duration: 0.6, repeat: activeStep === index ? Infinity : 0 }}
                  />

                  {/* Card */}
                  <motion.div
                    className="relative mt-16 p-6 rounded-2xl border-2 backdrop-blur-sm w-60"
                    style={{
                      background: activeStep === index 
                        ? `${step.color}20` 
                        : 'rgba(17,17,20,0.8)',
                      borderColor: activeStep === index 
                        ? `${step.color}60` 
                        : 'rgba(255,255,255,0.1)',
                      boxShadow: activeStep === index 
                        ? `0 0 40px ${step.color}40` 
                        : 'none'
                    }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Number badge */}
                    <div
                      className="absolute -top-4 -left-4 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white shadow-lg"
                      style={{ background: step.color }}
                    >
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                      style={{ background: `${step.color}20` }}
                    >
                      <step.icon className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>

                    {/* Content */}
                    <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-[#A0A0A5] text-sm mb-3 leading-relaxed">{step.description}</p>
                    
                    {/* Time badge */}
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold"
                      style={{
                        background: `${step.color}15`,
                        color: step.color,
                        border: `1px solid ${step.color}30`
                      }}
                    >
                      <Clock className="w-3 h-3" />
                      {step.time}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Version - Vertical */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-12"
            >
              {/* Vertical line */}
              {index < steps.length - 1 && (
                <div 
                  className="absolute left-6 top-16 w-0.5 h-full"
                  style={{ background: `linear-gradient(to bottom, ${step.color}, ${steps[index + 1].color})` }}
                />
              )}

              {/* Number dot */}
              <div
                className="absolute left-0 top-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white shadow-lg"
                style={{ background: step.color }}
              >
                {step.number}
              </div>

              {/* Card */}
              <div className="p-6 rounded-2xl bg-[rgba(17,17,20,0.6)] border border-[rgba(255,255,255,0.1)]">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${step.color}20` }}
                >
                  <step.icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-[#A0A0A5] mb-3">{step.description}</p>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold"
                  style={{
                    background: `${step.color}15`,
                    color: step.color,
                    border: `1px solid ${step.color}30`
                  }}
                >
                  <Clock className="w-3 h-3" />
                  {step.time}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}