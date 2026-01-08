'use client';

import { motion } from 'framer-motion';

interface PixelCharacterProps {
  isWalking?: boolean;
  facingRight?: boolean;
}

const PixelCharacter = ({ isWalking = false, facingRight = true }: PixelCharacterProps) => {
  return (
    <motion.div 
      className={`relative ${isWalking ? 'animate-walk' : ''}`}
      style={{ transform: facingRight ? 'scaleX(1)' : 'scaleX(-1)' }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', duration: 0.5 }}
    >
      {/* Pixel art character - A samurai with Tanjiro-inspired outfit */}
      <svg 
        width="64" 
        height="80" 
        viewBox="0 0 64 80" 
        className="drop-shadow-lg"
        style={{ imageRendering: 'pixelated' }}
      >
        {/* Hair */}
        <rect x="20" y="4" width="24" height="4" fill="#1a1a2e" />
        <rect x="16" y="8" width="32" height="4" fill="#1a1a2e" />
        <rect x="16" y="12" width="32" height="4" fill="#1a1a2e" />
        
        {/* Face */}
        <rect x="20" y="16" width="24" height="4" fill="#ffd5b4" />
        <rect x="20" y="20" width="24" height="4" fill="#ffd5b4" />
        {/* Eyes */}
        <rect x="24" y="20" width="4" height="4" fill="#1a1a2e" />
        <rect x="36" y="20" width="4" height="4" fill="#1a1a2e" />
        <rect x="20" y="24" width="24" height="4" fill="#ffd5b4" />
        
        {/* Haori (Checkered pattern like Tanjiro) */}
        <rect x="12" y="28" width="8" height="8" fill="#00ff88" />
        <rect x="20" y="28" width="8" height="8" fill="#1a1a2e" />
        <rect x="28" y="28" width="8" height="8" fill="#00ff88" />
        <rect x="36" y="28" width="8" height="8" fill="#1a1a2e" />
        <rect x="44" y="28" width="8" height="8" fill="#00ff88" />
        
        <rect x="12" y="36" width="8" height="8" fill="#1a1a2e" />
        <rect x="20" y="36" width="8" height="8" fill="#00ff88" />
        <rect x="28" y="36" width="8" height="8" fill="#1a1a2e" />
        <rect x="36" y="36" width="8" height="8" fill="#00ff88" />
        <rect x="44" y="36" width="8" height="8" fill="#1a1a2e" />
        
        <rect x="12" y="44" width="8" height="4" fill="#00ff88" />
        <rect x="20" y="44" width="8" height="4" fill="#1a1a2e" />
        <rect x="28" y="44" width="8" height="4" fill="#00ff88" />
        <rect x="36" y="44" width="8" height="4" fill="#1a1a2e" />
        <rect x="44" y="44" width="8" height="4" fill="#00ff88" />
        
        {/* Belt / Obi */}
        <rect x="16" y="48" width="32" height="4" fill="#8b0000" />
        
        {/* Hakama (pants) */}
        <rect x="16" y="52" width="14" height="12" fill="#1a1a2e" />
        <rect x="34" y="52" width="14" height="12" fill="#1a1a2e" />
        
        {/* Feet */}
        <rect x="16" y="64" width="12" height="4" fill="#4a3728" />
        <rect x="36" y="64" width="12" height="4" fill="#4a3728" />
        
        {/* Katana on back - with glowing effect */}
        <motion.g
          animate={{ 
            filter: ['drop-shadow(0 0 2px #00ff88)', 'drop-shadow(0 0 8px #00ff88)', 'drop-shadow(0 0 2px #00ff88)']
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {/* Katana handle */}
          <rect x="52" y="16" width="4" height="12" fill="#8b4513" />
          <rect x="51" y="14" width="6" height="4" fill="#ffd700" />
          {/* Katana blade */}
          <rect x="52" y="28" width="4" height="32" fill="#c0c0c0" />
          <rect x="54" y="28" width="1" height="32" fill="#ffffff" />
          {/* Binary code on blade */}
          <text x="52" y="40" fill="#00ff88" fontSize="3" fontFamily="monospace">01</text>
          <text x="52" y="48" fill="#00ff88" fontSize="3" fontFamily="monospace">10</text>
        </motion.g>
        
        {/* Arms */}
        <rect x="4" y="32" width="8" height="4" fill="#ffd5b4" />
        <rect x="52" y="32" width="8" height="4" fill="#ffd5b4" />
      </svg>
      
      {/* Glow effect under character */}
      <div 
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-2 rounded-full opacity-50"
        style={{ 
          background: 'radial-gradient(ellipse, hsl(155 100% 50% / 0.6), transparent)',
          filter: 'blur(4px)'
        }}
      />
    </motion.div>
  );
};

export default PixelCharacter;
