import { motion } from 'motion/react';

export default function FuturisticBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated Grid Lines */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,133,52,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(152,16,250,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '100px 100px']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Floating Circles - Orange */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`circle-orange-${i}`}
          className="absolute rounded-full border-2 border-[#ff8534]"
          style={{
            width: 120 + i * 40,
            height: 120 + i * 40,
            left: `${15 + i * 15}%`,
            top: `${10 + i * 12}%`,
            opacity: 0.1
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5
          }}
        />
      ))}

      {/* Floating Circles - Purple */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`circle-purple-${i}`}
          className="absolute rounded-full border-2 border-[#9810FA]"
          style={{
            width: 100 + i * 50,
            height: 100 + i * 50,
            right: `${10 + i * 12}%`,
            bottom: `${15 + i * 10}%`,
            opacity: 0.1
          }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
            opacity: [0.05, 0.12, 0.05]
          }}
          transition={{
            duration: 18 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.7
          }}
        />
      ))}

      {/* Hexagons */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`hex-${i}`}
          className="absolute"
          style={{
            left: `${5 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 120, 0],
            opacity: [0.03, 0.1, 0.03]
          }}
          transition={{
            duration: 12 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.4
          }}
        >
          <svg width="60" height="70" viewBox="0 0 60 70" fill="none">
            <path 
              d="M30 0L57.3205 15V45L30 60L2.67949 45V15L30 0Z" 
              stroke={i % 2 === 0 ? '#ff8534' : '#9810FA'}
              strokeWidth="2"
              fill="none"
              opacity="0.3"
            />
          </svg>
        </motion.div>
      ))}

      {/* Tech Lines - Horizontal */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`line-h-${i}`}
          className="absolute h-[1px] left-0"
          style={{
            top: `${15 + i * 18}%`,
            background: `linear-gradient(to right, transparent, ${i % 2 === 0 ? '#ff8534' : '#9810FA'}, transparent)`,
            opacity: 0.1
          }}
          animate={{
            width: ['0%', '100%', '0%'],
            opacity: [0, 0.15, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 1.5
          }}
        />
      ))}

      {/* Tech Lines - Vertical */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`line-v-${i}`}
          className="absolute w-[1px] top-0"
          style={{
            left: `${20 + i * 15}%`,
            background: `linear-gradient(to bottom, transparent, ${i % 2 === 0 ? '#9810FA' : '#ff8534'}, transparent)`,
            opacity: 0.1
          }}
          animate={{
            height: ['0%', '100%', '0%'],
            opacity: [0, 0.12, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 1.8
          }}
        />
      ))}

      {/* Corner Brackets - Top Left */}
      <motion.div
        className="absolute top-10 left-10 w-24 h-24"
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <svg viewBox="0 0 100 100" fill="none">
          <path d="M0 20 L0 0 L20 0" stroke="#ff8534" strokeWidth="2" />
          <path d="M0 30 L0 10" stroke="#ff8534" strokeWidth="1" opacity="0.5" />
          <path d="M10 0 L30 0" stroke="#ff8534" strokeWidth="1" opacity="0.5" />
        </svg>
      </motion.div>

      {/* Corner Brackets - Top Right */}
      <motion.div
        className="absolute top-10 right-10 w-24 h-24"
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      >
        <svg viewBox="0 0 100 100" fill="none">
          <path d="M100 20 L100 0 L80 0" stroke="#9810FA" strokeWidth="2" />
          <path d="M100 30 L100 10" stroke="#9810FA" strokeWidth="1" opacity="0.5" />
          <path d="M90 0 L70 0" stroke="#9810FA" strokeWidth="1" opacity="0.5" />
        </svg>
      </motion.div>

      {/* Corner Brackets - Bottom Left */}
      <motion.div
        className="absolute bottom-10 left-10 w-24 h-24"
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
      >
        <svg viewBox="0 0 100 100" fill="none">
          <path d="M0 80 L0 100 L20 100" stroke="#9810FA" strokeWidth="2" />
          <path d="M0 70 L0 90" stroke="#9810FA" strokeWidth="1" opacity="0.5" />
          <path d="M10 100 L30 100" stroke="#9810FA" strokeWidth="1" opacity="0.5" />
        </svg>
      </motion.div>

      {/* Corner Brackets - Bottom Right */}
      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24"
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 3 }}
      >
        <svg viewBox="0 0 100 100" fill="none">
          <path d="M100 80 L100 100 L80 100" stroke="#ff8534" strokeWidth="2" />
          <path d="M100 70 L100 90" stroke="#ff8534" strokeWidth="1" opacity="0.5" />
          <path d="M90 100 L70 100" stroke="#ff8534" strokeWidth="1" opacity="0.5" />
        </svg>
      </motion.div>

      {/* Data Nodes */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: i % 2 === 0 ? '#ff8534' : '#9810FA',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: `0 0 10px ${i % 2 === 0 ? '#ff8534' : '#9810FA'}`
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3
          }}
        />
      ))}

      {/* Orbit Rings - Center */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        {[200, 300, 400].map((size, i) => (
          <motion.div
            key={`orbit-${i}`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
            style={{
              width: size,
              height: size,
              borderColor: i % 2 === 0 ? 'rgba(255,133,52,0.08)' : 'rgba(152,16,250,0.08)',
              borderWidth: 1,
              borderStyle: 'dashed'
            }}
            animate={{
              rotate: i % 2 === 0 ? -360 : 360,
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{
              rotate: {
                duration: 30 + i * 10,
                repeat: Infinity,
                ease: 'linear'
              },
              opacity: {
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut'
              }
            }}
          />
        ))}
      </motion.div>

      {/* Scanline Effect */}
      <motion.div
        className="absolute left-0 w-full h-[2px]"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(255,133,52,0.3), transparent)',
          opacity: 0.2
        }}
        animate={{
          top: ['0%', '100%']
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Circuit Paths */}
      {[...Array(4)].map((_, i) => (
        <motion.svg
          key={`circuit-${i}`}
          className="absolute"
          style={{
            left: `${10 + i * 25}%`,
            top: `${15 + i * 20}%`,
            width: 150,
            height: 150,
            opacity: 0.08
          }}
          animate={{
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 1.5
          }}
        >
          <motion.path
            d="M0 50 L50 50 L50 0 M50 50 L100 50 L100 100"
            stroke={i % 2 === 0 ? '#ff8534' : '#9810FA'}
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 1
            }}
          />
          <motion.circle
            cx="50"
            cy="50"
            r="4"
            fill={i % 2 === 0 ? '#ff8534' : '#9810FA'}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          />
        </motion.svg>
      ))}

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(255,133,52,0.4), transparent)'
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(152,16,250,0.4), transparent)'
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </div>
  );
}
