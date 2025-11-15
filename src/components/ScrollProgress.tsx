import { motion, useScroll, useSpring } from 'motion/react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] z-[9999] origin-left"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #D74B18 0%, #ff8534 25%, #9810FA 50%, #b45dff 75%, #D74B18 100%)',
          boxShadow: '0 0 20px rgba(215,75,24,0.8)'
        }}
      />

      {/* Percentage indicator */}
      <motion.div
        className="fixed top-6 right-6 z-[9999] px-4 py-2 rounded-full backdrop-blur-xl border border-white/10"
        style={{
          background: 'rgba(11,11,14,0.8)',
          opacity: scrollYProgress
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.div className="flex items-center gap-2">
          <motion.div
            className="w-2 h-2 rounded-full bg-gradient-to-r from-[#D74B18] to-[#9810FA]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          />
          <motion.span
            className="text-white font-bold text-sm"
            style={{
              background: 'linear-gradient(90deg, #ff8534, #9810FA)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {scrollYProgress.get() === 0 ? '0' : Math.round(scrollYProgress.get() * 100)}%
          </motion.span>
        </motion.div>
      </motion.div>
    </>
  );
}
