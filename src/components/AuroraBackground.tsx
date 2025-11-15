import { motion } from 'motion/react';

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[9989] overflow-hidden opacity-30">
      {/* Aurora wave 1 - Orange */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 120% 80% at 50% 120%, transparent 40%, rgba(215,75,24,0.3) 60%, transparent 80%)',
          filter: 'blur(60px)'
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Aurora wave 2 - Purple */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 100% 70% at 30% 80%, transparent 40%, rgba(152,16,250,0.3) 60%, transparent 80%)',
          filter: 'blur(80px)'
        }}
        animate={{
          backgroundPosition: ['100% 100%', '0% 0%', '100% 100%'],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Aurora wave 3 - Orange-Purple mix */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 90% 60% at 70% 90%, transparent 40%, rgba(255,133,52,0.25) 60%, rgba(152,16,250,0.15) 80%, transparent 90%)',
          filter: 'blur(70px)'
        }}
        animate={{
          backgroundPosition: ['50% 50%', '0% 100%', '50% 50%'],
          opacity: [0.25, 0.45, 0.25]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      />

      {/* Subtle shimmer overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.03) 50%, transparent 70%)',
          backgroundSize: '200% 200%'
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}
