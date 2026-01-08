'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingPlatformProps {
  children: ReactNode;
  delay?: number;
  variant?: 'rock' | 'torii' | 'pagoda';
  className?: string;
}

const FloatingPlatform = ({ 
  children, 
  delay = 0, 
  variant = 'rock',
  className = '' 
}: FloatingPlatformProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: 'spring',
        stiffness: 100
      }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Floating animation wrapper */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ 
          duration: 4 + delay, 
          repeat: Infinity, 
          ease: 'easeInOut' 
        }}
      >
        {/* Platform content */}
        <div className="relative">
          {children}
          
          {/* Platform base based on variant */}
          {variant === 'rock' && (
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-full max-w-xs">
              <svg viewBox="0 0 200 40" className="w-full">
                <path 
                  d="M10 15 Q20 5 50 10 Q80 0 100 5 Q130 0 150 8 Q180 5 190 15 Q195 25 180 32 Q150 40 100 38 Q50 40 20 32 Q5 28 10 15" 
                  fill="url(#rockGradient)"
                  stroke="hsl(270 40% 25%)"
                  strokeWidth="2"
                />
                <defs>
                  <linearGradient id="rockGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="hsl(270 30% 25%)" />
                    <stop offset="100%" stopColor="hsl(270 20% 15%)" />
                  </linearGradient>
                </defs>
              </svg>
              {/* Shadow under platform */}
              <div 
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-4 rounded-full opacity-30"
                style={{ 
                  background: 'radial-gradient(ellipse, hsl(270 60% 30%), transparent)',
                  filter: 'blur(8px)'
                }}
              />
            </div>
          )}
          
          {variant === 'torii' && (
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
              {/* Simplified Torii gate base */}
              <div className="flex gap-20">
                <div className="w-3 h-8 bg-destructive rounded-b" />
                <div className="w-3 h-8 bg-destructive rounded-b" />
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FloatingPlatform;
