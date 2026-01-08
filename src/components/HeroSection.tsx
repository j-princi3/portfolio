'use client';

import { motion } from 'framer-motion';
import PixelCharacter from './PixelCharacter';
import FloatingPlatform from './FloatingPlatform';
import { SocialLinksGroup } from './common/SocialLink';
import { SOCIAL_LINKS } from '@/lib/constants';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Level indicator */}
      <motion.div 
        className="absolute top-8 left-8 z-10"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="bg-card/80 backdrop-blur border-2 border-primary px-4 py-2 rounded">
          <span className="text-[10px] md:text-xs text-primary font-pixel">LEVEL 1</span>
          <p className="text-[8px] md:text-[10px] text-muted-foreground font-pixel mt-1">THE ORIGIN</p>
        </div>
      </motion.div>

      {/* Floating Torii gate decoration */}
      <motion.div
        className="absolute top-20 right-10 md:right-20 opacity-30"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 0.3, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <svg width="120" height="100" viewBox="0 0 120 100" className="text-destructive">
          <rect x="10" y="20" width="8" height="80" fill="currentColor" />
          <rect x="102" y="20" width="8" height="80" fill="currentColor" />
          <rect x="0" y="10" width="120" height="12" fill="currentColor" rx="2" />
          <rect x="5" y="30" width="110" height="8" fill="currentColor" />
        </svg>
      </motion.div>

      {/* Main content */}
      <FloatingPlatform delay={0.2} variant="rock" className="z-10">
        <div className="flex flex-col items-center text-center px-8 py-12">
          {/* Character */}
          <motion.div
            className="mb-8"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
          >
            <PixelCharacter />
          </motion.div>

          {/* Title with glowing effect */}
          <motion.h1
            className="text-2xl md:text-4xl lg:text-5xl font-pixel text-foreground mb-4 leading-relaxed"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <span className="block glow-green">PRINCI JAIN</span>
            <span className="block text-lg md:text-2xl lg:text-3xl mt-4 text-primary">
              Software Engineer
            </span>
            <span className="block text-sm md:text-lg lg:text-xl mt-2 text-accent">
              & Cloud Slayer
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-[10px] md:text-xs text-muted-foreground font-pixel max-w-md mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Mastering the{' '}
            <span className="text-breathing-water">Breath of Cloud</span>
            {' '}and{' '}
            <span className="text-hinokami-gold">Logic</span>
          </motion.p>

          {/* Social links - using reusable component */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <SocialLinksGroup links={SOCIAL_LINKS} size="md" />
          </motion.div>
        </div>
      </FloatingPlatform>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[8px] text-muted-foreground font-pixel">SCROLL TO CONTINUE</span>
        <motion.div
          className="w-4 h-6 border-2 border-primary/50 rounded-full flex justify-center"
          animate={{ borderColor: ['hsl(155 100% 50% / 0.5)', 'hsl(155 100% 50%)', 'hsl(155 100% 50% / 0.5)'] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-primary rounded-full mt-1"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
