'use client';

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { Trophy } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { PROJECTS_DATA } from '@/lib/constants';
import { Project } from '@/lib/types';

interface ProjectCardProps extends Project {}

const ProjectCard = ({ title, description, breathingStyle, icon, tags, delay, achievement, image, links, layout, imageType }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const styleColors = {
    water: {
      border: 'border-breathing-water',
      bg: 'from-breathing-water/20 to-transparent',
      glow: 'glow-water',
      text: 'text-breathing-water',
      hover: 'hover:bg-breathing-water/8 hover:border-breathing-water/60 hover:text-breathing-water/80',
    },
    thunder: {
      border: 'border-breathing-thunder',
      bg: 'from-breathing-thunder/20 to-transparent',
      glow: 'glow-thunder',
      text: 'text-breathing-thunder',
      hover: 'hover:bg-breathing-thunder/8 hover:border-breathing-thunder/60 hover:text-breathing-thunder/80',
    },
    fire: {
      border: 'border-hinokami-fire',
      bg: 'from-hinokami-fire/20 to-transparent',
      glow: 'glow-fire',
      text: 'text-hinokami-fire',
      hover: 'hover:bg-hinokami-fire/8 hover:border-hinokami-fire/60 hover:text-hinokami-fire/80',
    },
    mist: {
      border: 'border-retro-white',
      bg: 'from-retro-white/20 to-transparent',
      glow: 'glow-mist',
      text: 'text-retro-white',
      hover: 'hover:bg-retro-white/8 hover:border-retro-white/60 hover:text-retro-white/80',
    },
    insect: {
      border: 'border-tanjiro-green',
      bg: 'from-tanjiro-green/20 to-transparent',
      glow: 'glow-insect',
      text: 'text-tanjiro-green',
      hover: 'hover:bg-tanjiro-green/8 hover:border-tanjiro-green/60 hover:text-tanjiro-green/80',
    },
    butterfly: {
      border: 'border-retro-pink',
      bg: 'from-retro-pink/20 to-transparent',
      glow: 'glow-butterfly',
      text: 'text-retro-pink',
      hover: 'hover:bg-retro-pink/8 hover:border-retro-pink/60 hover:text-retro-pink/80',
    },
  };

  const colors = styleColors[breathingStyle];
  const IconComponent = (LucideIcons as any)[icon];

  const isMobileImage = imageType === 'mobile';

  // Extract reusable content so we don't duplicate markup
  const content = (
    <>
      {/* Icon and title */}
      <div className="flex items-start gap-4 mb-4">
        <motion.div
          className={`p-3 rounded-lg bg-muted`}
          animate={isHovered ? { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] } : {}}
          transition={{ duration: 0.5 }}
        >
          <IconComponent className="w-6 h-6 text-muted-foreground" />
        </motion.div>
        <div className="flex-1">
          <h3 className={`text-base md:text-lg font-pixel ${colors.text}`}>
            {title}
          </h3>
          {achievement && (
            <div className="flex items-center gap-1 mt-1">
              <Trophy className="w-3 h-3 text-hinokami-gold" />
              <span className="text-[10px] font-pixel text-hinokami-gold">{achievement}</span>
            </div>
          )}
        </div>
      </div>

      {/* Breathing style label */}
      <div className={`inline-block px-2 py-1 text-[10px] font-pixel ${colors.text} bg-muted rounded mb-3`}>
        {breathingStyle === 'water' && 'WATER BREATHING STYLE'}
        {breathingStyle === 'thunder' && 'THUNDER BREATHING STYLE'}
        {breathingStyle === 'fire' && 'HINOKAMI KAGURA'}
        {breathingStyle === 'mist' && 'MIST BREATHING STYLE'}
        {breathingStyle === 'insect' && 'INSECT BREATHING STYLE'}
        {breathingStyle === 'butterfly' && 'BUTTERFLY BREATHING STYLE'}
      </div>

      {/* Description */}
      <p className="text-xs md:text-sm font-pixel text-muted-foreground leading-relaxed mb-4">
        {description}
      </p>

      {/* Tags */}
      {Array.isArray(tags) && tags.filter(Boolean).length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.filter(Boolean).map((tag, idx) => (
            <span
              key={`${tag ?? 'tag'}-${idx}`}
              className="px-3 py-1.5 text-xs md:text-sm font-pixel bg-muted text-muted-foreground rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Links (optional) */}
      {typeof (links) !== 'undefined' && links && links.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {links.map((l) => (
            <Button
              asChild
              size="sm"
              variant="ghost"
              className={`px-3 py-1 rounded-full border border-input/20 bg-muted/40 ${colors.hover} hover:scale-105 transition-transform`}
              key={l.href}
            >
              <a href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
            </Button>
          ))}
        </div>
      )}
    </>
  );

  return (
    <motion.div
      className="relative"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.6, type: 'spring' }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Mario-style pipe top (match card width) */}
      <div className="relative z-10 w-full">
        <div className={`h-6 rounded-t-lg bg-gradient-to-b ${colors.bg} border-t-4 border-x-4 ${colors.border} bg-card`} />
      </div>

      {/* Card body */}
      <motion.div
        className={`relative bg-card border-4 ${colors.border} rounded-b-lg p-6 overflow-hidden transition-all duration-300`}
        whileHover={{ y: -8 }}
      >
        {/* Breathing style effect overlay */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 transition-opacity duration-300`}
          animate={{ opacity: isHovered ? 1 : 0 }}
        />

        {/* Slash effect on hover */}
        {isHovered && breathingStyle === 'water' && (
          <motion.div
            className="absolute inset-0 pointer-events-none overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-0.5 bg-breathing-water"
                style={{
                  left: '-10%',
                  top: `${30 + i * 20}%`,
                  width: '120%',
                }}
                animate={{
                  scaleX: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />
            ))}
          </motion.div>
        )}

        {isHovered && breathingStyle === 'thunder' && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.1, repeat: 3 }}
          >
            <div className="absolute inset-0 bg-breathing-thunder/10" />
          </motion.div>
        )}

        {isHovered && breathingStyle === 'fire' && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.3, y: 0 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-hinokami-fire/30 to-transparent" />
          </motion.div>
        )}

        {isHovered && breathingStyle === 'mist' && (
          <motion.div
            className="absolute inset-0 pointer-events-none overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-retro-white/20 blur-xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${40 + Math.random() * 60}px`,
                  height: `${40 + Math.random() * 60}px`,
                }}
                animate={{
                  x: [0, Math.random() * 50 - 25],
                  y: [0, Math.random() * 50 - 25],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
            ))}
          </motion.div>
        )}

        {isHovered && breathingStyle === 'insect' && (
          <motion.div
            className="absolute inset-0 pointer-events-none overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-tanjiro-green rounded-full"
                style={{
                  left: `${10 + i * 15}%`,
                  top: '50%',
                }}
                animate={{
                  y: [-20, 20, -20],
                  x: [0, Math.sin(i) * 30, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.1,
                  repeat: Infinity,
                }}
              />
            ))}
          </motion.div>
        )}

        {isHovered && breathingStyle === 'butterfly' && (
          <motion.div
            className="absolute inset-0 pointer-events-none overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${10 + i * 15}%`,
                  top: `${20 + (i % 3) * 30}%`,
                }}
              >
                <motion.div
                  className="w-3 h-3 bg-retro-pink/60 rounded-full"
                  animate={{
                    scale: [0, 1.5, 0],
                    rotate: [0, 180, 360],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Render mobile (phone) or web (stacked) layout based on imageType */}
        {isMobileImage ? (
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            {/* Left: phone image */}
            <motion.div
              className="w-full md:w-1/2 flex justify-center"
              animate={isHovered ? { scale: 1.05, y: -6 } : { scale: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            >
              <div className="relative rounded-[2rem] p-2 bg-black shadow-xl">
                {typeof (image) !== 'undefined' && image && (
                  <img
                    src={image}
                    alt={title}
                    className={`h-[340px] md:h-[420px] object-contain rounded-[1.5rem] border-2 ${colors.border}`}
                  />
                )}
              </div>
            </motion.div>

            {/* Right: content */}
            <div className="w-full md:w-1/2">
              {content}
            </div>
          </div>
        ) : (
          <div className="relative z-10">
            {typeof (image) !== 'undefined' && image && (
              <motion.div
                className="mb-4"
                animate={isHovered ? { scale: 1.02, y: -6 } : { scale: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              >
                <div className={`rounded-lg border-2 ${colors.border} bg-card shadow-lg overflow-hidden`}>
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 px-3 py-2 bg-muted/30">
                    <span className="w-2 h-2 rounded-full bg-red-500/80" />
                    <span className="w-2 h-2 rounded-full bg-yellow-400/80" />
                    <span className="w-2 h-2 rounded-full bg-green-400/80" />
                    <div className="ml-4 flex-1 h-3 bg-muted/60 rounded" />
                  </div>

                  {/* Website preview */}
                  <img
                    src={image}
                    alt={title}
                    className={`w-full h-40 md:h-48 object-cover`}
                  />
                </div>
              </motion.div>
            )}
            {content}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section className="relative min-h-screen px-4 py-20 overflow-hidden">
      {/* Level indicator */}
      <motion.div 
        className="sticky top-8 left-8 z-20 inline-block"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="bg-card/90 backdrop-blur border-2 border-breathing-water px-5 py-3 rounded">
          <span className="text-xs md:text-sm text-breathing-water font-pixel">LEVEL 3</span>
          <p className="text-[10px] md:text-xs text-muted-foreground font-pixel mt-1">THE ARTIFACTS</p>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto mt-12">
        {/* Section title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl md:text-3xl font-pixel text-foreground mb-4">
            <span className="glow-water">LEGENDARY</span>{' '}
            <span className="glow-thunder">ARTIFACTS</span>
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground font-pixel">
            Forged through code. Powered by breathing techniques.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>

        {/* Decorative pipes
        <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-12">
          <div className="mario-pipe h-32 w-full rounded-r-lg" />
        </div>
        <div className="hidden lg:block absolute right-0 top-2/3 -translate-y-1/2 w-12">
          <div className="mario-pipe h-24 w-full rounded-l-lg" />
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;
