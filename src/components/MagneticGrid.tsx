import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function MagneticGrid() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
      {/* Vertical lines */}
      {Array.from({ length: 20 }).map((_, i) => {
        const position = (i / 20) * 100;
        const distance = Math.abs(position - mousePosition.x);
        const magnetStrength = Math.max(0, 20 - distance) / 20;

        return (
          <motion.div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-[1px]"
            style={{
              left: `${position}%`,
              background: 'linear-gradient(to bottom, transparent, rgba(215,75,24,0.2), rgba(152,16,250,0.2), transparent)',
            }}
            animate={{
              scaleX: 1 + magnetStrength * 2,
              opacity: 0.3 + magnetStrength * 0.7,
              x: (mousePosition.x - position) * magnetStrength * 0.5
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
          />
        );
      })}

      {/* Horizontal lines */}
      {Array.from({ length: 20 }).map((_, i) => {
        const position = (i / 20) * 100;
        const distance = Math.abs(position - mousePosition.y);
        const magnetStrength = Math.max(0, 20 - distance) / 20;

        return (
          <motion.div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-[1px]"
            style={{
              top: `${position}%`,
              background: 'linear-gradient(to right, transparent, rgba(152,16,250,0.2), rgba(215,75,24,0.2), transparent)',
            }}
            animate={{
              scaleY: 1 + magnetStrength * 2,
              opacity: 0.3 + magnetStrength * 0.7,
              y: (mousePosition.y - position) * magnetStrength * 0.5
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
          />
        );
      })}

      {/* Intersection glow points */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
            background: i % 2 === 0 ? '#D74B18' : '#9810FA',
            boxShadow: `0 0 20px ${i % 2 === 0 ? '#D74B18' : '#9810FA'}`
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.6
          }}
        />
      ))}
    </div>
  );
}
