import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
}

export default function InteractiveParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Generate particles
    const newParticles: Particle[] = [];
    const colors = ['#D74B18', '#9810FA', '#ff8534', '#6D03F5', '#b45dff'];
    
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 2
      });
    }
    
    setParticles(newParticles);

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
    <div className="fixed inset-0 pointer-events-none z-[9990] overflow-hidden">
      {particles.map((particle) => {
        const distance = Math.hypot(
          particle.x - mousePosition.x,
          particle.y - mousePosition.y
        );
        const magnetEffect = Math.max(0, 30 - distance) / 30;

        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              background: particle.color,
              boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
              left: `${particle.x}%`,
              top: `${particle.y}%`
            }}
            animate={{
              x: [0, Math.random() * 20 - 10, 0],
              y: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1 + magnetEffect * 2, 1]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        );
      })}

      {/* Connection lines between nearby particles */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {particles.map((particle, i) => {
          const nearbyParticles = particles.filter((p, j) => {
            if (i >= j) return false;
            const dist = Math.hypot(particle.x - p.x, particle.y - p.y);
            return dist < 15;
          });

          return nearbyParticles.map((nearParticle, j) => (
            <motion.line
              key={`${i}-${j}`}
              x1={`${particle.x}%`}
              y1={`${particle.y}%`}
              x2={`${nearParticle.x}%`}
              y2={`${nearParticle.y}%`}
              stroke={particle.color}
              strokeWidth="0.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: particle.delay
              }}
            />
          ));
        })}
      </svg>
    </div>
  );
}
