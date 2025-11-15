import { motion, useScroll, useTransform } from 'motion/react';

export default function ScrollGlow() {
  const { scrollYProgress } = useScroll();
  
  const glowY = useTransform(scrollYProgress, [0, 1], ['0%', '800%']);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.2, 0.35, 0.35, 0.2]
  );

  return (
    <>
      {/* Left side glow - Purple - Ultra Leve */}
      <motion.div
        className="fixed left-0 w-[25%] h-[15vh] pointer-events-none z-[9991] hidden md:block"
        style={{
          top: glowY,
          opacity,
          background: 'radial-gradient(ellipse at left, rgba(152,16,250,0.15) 0%, transparent 60%)',
          filter: 'blur(40px)'
        }}
      />

      {/* Right side glow - Orange - Ultra Leve */}
      <motion.div
        className="fixed right-0 w-[25%] h-[15vh] pointer-events-none z-[9991] hidden md:block"
        style={{
          top: glowY,
          opacity,
          background: 'radial-gradient(ellipse at right, rgba(215,75,24,0.15) 0%, transparent 60%)',
          filter: 'blur(40px)'
        }}
      />
    </>
  );
}