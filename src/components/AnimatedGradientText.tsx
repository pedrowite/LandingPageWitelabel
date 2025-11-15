import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
}

export default function AnimatedGradientText({ 
  children, 
  className = '',
  colors = ['#D74B18', '#ff8534', '#9810FA', '#b45dff']
}: AnimatedGradientTextProps) {
  return (
    <motion.span
      className={className}
      style={{
        backgroundImage: `linear-gradient(90deg, ${colors.join(', ')})`,
        backgroundSize: '200% auto',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
      animate={{
        backgroundPosition: ['0% 50%', '200% 50%', '0% 50%']
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      {children}
    </motion.span>
  );
}
