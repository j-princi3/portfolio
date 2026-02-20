'use client';

import { motion } from 'framer-motion';

interface NezukoCharacterProps {
  isWalking?: boolean;
  facingRight?: boolean;
}

const NezukoCharacter = ({ isWalking = false, facingRight = true }: NezukoCharacterProps) => {
  return (
    <motion.div 
      className={`relative ${isWalking ? 'animate-walk' : ''}`}
      style={{ transform: facingRight ? 'scaleX(1)' : 'scaleX(-1)' }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', duration: 0.5 }}
    >
      {/* Pixel art Nezuko-inspired character */}
      <svg 
        width="64" 
        height="80" 
        viewBox="0 0 64 80" 
        className="drop-shadow-lg"
        style={{ imageRendering: 'pixelated' }}
      >
        {/* Hair */}
        <rect x="20" y="4" width="24" height="4" fill="#2b1b17" />
        <rect x="16" y="8" width="32" height="4" fill="#2b1b17" />
        <rect x="16" y="12" width="32" height="4" fill="#2b1b17" />
        
        {/* Face */}
        <rect x="20" y="16" width="24" height="4" fill="#ffd5b4" />
        <rect x="20" y="20" width="24" height="4" fill="#ffd5b4" />
        {/* Eyes */}
        <rect x="24" y="20" width="4" height="4" fill="#1a1a2e" />
        <rect x="36" y="20" width="4" height="4" fill="#1a1a2e" />
        <rect x="20" y="24" width="24" height="4" fill="#ffd5b4" />

        {/* Bamboo muzzle */}
        <rect x="28" y="26" width="8" height="4" fill="#9ad3a2" />
        <rect x="27" y="26" width="1" height="4" fill="#6aa37a" />
        <rect x="36" y="26" width="1" height="4" fill="#6aa37a" />

        {/* Kimono (pink) with pattern */}
        <rect x="12" y="28" width="40" height="8" fill="#ff8fa3" />
        <rect x="12" y="36" width="40" height="8" fill="#ff8fa3" />
        <rect x="12" y="44" width="40" height="4" fill="#ff8fa3" />

        {/* Pattern dots */}
        <rect x="16" y="30" width="2" height="2" fill="#4b2b2b" />
        <rect x="22" y="30" width="2" height="2" fill="#4b2b2b" />
        <rect x="28" y="30" width="2" height="2" fill="#4b2b2b" />
        <rect x="34" y="30" width="2" height="2" fill="#4b2b2b" />
        <rect x="40" y="30" width="2" height="2" fill="#4b2b2b" />

        <rect x="16" y="38" width="2" height="2" fill="#4b2b2b" />
        <rect x="22" y="38" width="2" height="2" fill="#4b2b2b" />
        <rect x="28" y="38" width="2" height="2" fill="#4b2b2b" />
        <rect x="34" y="38" width="2" height="2" fill="#4b2b2b" />
        <rect x="40" y="38" width="2" height="2" fill="#4b2b2b" />

        {/* Obi (green) */}
        <rect x="16" y="48" width="32" height="4" fill="#3b7a57" />

        {/* Hakama (dark) */}
        <rect x="16" y="52" width="14" height="12" fill="#2b1b17" />
        <rect x="34" y="52" width="14" height="12" fill="#2b1b17" />

        {/* Feet */}
        <rect x="16" y="64" width="12" height="4" fill="#4a3728" />
        <rect x="36" y="64" width="12" height="4" fill="#4a3728" />

        {/* Ribbon accessory */}
        <rect x="12" y="22" width="4" height="2" fill="#ffb6c1" />

        {/* Subtle glow for Nezuko (pink) */}
        <motion.g
          animate={{ 
            filter: ['drop-shadow(0 0 2px #ff8fa3)', 'drop-shadow(0 0 8px #ff8fa3)', 'drop-shadow(0 0 2px #ff8fa3)']
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <rect x="12" y="28" width="40" height="20" fill="transparent" />
        </motion.g>

        {/* Arms */}
        <rect x="4" y="32" width="8" height="4" fill="#ffd5b4" />
        <rect x="52" y="32" width="8" height="4" fill="#ffd5b4" />
      </svg>

      {/* Glow effect under character */}
      <div 
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-2 rounded-full opacity-50"
        style={{ 
          background: 'radial-gradient(ellipse, rgba(255,143,163,0.6), transparent)',
          filter: 'blur(4px)'
        }}
      />
    </motion.div>
  );
};

export default NezukoCharacter;
