'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

const generateStars = (count: number, speed: number): Star[] => {
  return Array.from({ length: count }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    speed,
    opacity: Math.random() * 0.5 + 0.5,
  }));
};

const StarfieldBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Create layers of stars for parallax - use useState to avoid hydration issues
  const [starsLayer1] = useState(() => generateStars(50, 0.5));
  const [starsLayer2] = useState(() => generateStars(30, 0.3));
  const [starsLayer3] = useState(() => generateStars(20, 0.1));
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -600]);

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep space gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 20%, hsl(270 60% 15% / 0.4) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, hsl(270 40% 10% / 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, hsl(240 30% 8%) 0%, hsl(240 20% 4%) 100%)
          `
        }}
      />
      
      {/* Nebula clouds */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ y: y3 }}
      >
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, hsl(270 80% 50% / 0.3), transparent)' }}
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, hsl(155 100% 50% / 0.2), transparent)' }}
        />
      </motion.div>
      
      {/* Star layers */}
      <motion.div className="absolute inset-0" style={{ y: y3 }}>
        {starsLayer3.map((star, i) => (
          <div
            key={`l3-${i}`}
            className="absolute rounded-full bg-star-white animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              opacity: star.opacity * 0.5,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </motion.div>
      
      <motion.div className="absolute inset-0" style={{ y: y2 }}>
        {starsLayer2.map((star, i) => (
          <div
            key={`l2-${i}`}
            className="absolute rounded-full bg-star-white animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size * 1.5,
              height: star.size * 1.5,
              opacity: star.opacity * 0.7,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </motion.div>
      
      <motion.div className="absolute inset-0" style={{ y: y1 }}>
        {starsLayer1.map((star, i) => (
          <div
            key={`l1-${i}`}
            className="absolute rounded-full bg-star-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size * 2,
              height: star.size * 2,
              opacity: star.opacity,
              boxShadow: '0 0 4px rgba(255,255,255,0.8)',
            }}
          />
        ))}
      </motion.div>
      
      {/* Shooting stars occasionally */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{ x: '-10%', y: '20%', opacity: 0 }}
          animate={{ 
            x: ['0%', '120%'], 
            y: ['20%', '60%'],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            repeatDelay: 8,
            ease: 'linear'
          }}
          style={{
            boxShadow: '-40px 0 20px 2px rgba(255,255,255,0.5)',
          }}
        />
      </div>
    </div>
  );
};

export default StarfieldBackground;
