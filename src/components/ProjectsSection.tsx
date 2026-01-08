'use client';

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { Trophy } from 'lucide-react';
import { useState } from 'react';
import { PROJECTS_DATA } from '@/lib/constants';
import { Project } from '@/lib/types';

interface ProjectCardProps extends Project {}

const ProjectCard = ({ title, description, breathingStyle, icon, tags, delay, achievement }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const styleColors = {
    water: {
      border: 'border-breathing-water',
      bg: 'from-breathing-water/20 to-transparent',
      glow: 'glow-water',
      text: 'text-breathing-water',
    },
    thunder: {
      border: 'border-breathing-thunder',
      bg: 'from-breathing-thunder/20 to-transparent',
      glow: 'glow-thunder',
      text: 'text-breathing-thunder',
    },
    fire: {
      border: 'border-hinokami-fire',
      bg: 'from-hinokami-fire/20 to-transparent',
      glow: 'glow-fire',
      text: 'text-hinokami-fire',
    },
  };

  const colors = styleColors[breathingStyle];
  const IconComponent = (LucideIcons as any)[icon];

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
      {/* Mario-style pipe top */}
      <div className="relative z-10 mx-auto w-full max-w-sm">
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

        {/* Content */}
        <div className="relative z-10">
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
          </div>

          {/* Description */}
          <p className="text-xs md:text-sm font-pixel text-muted-foreground leading-relaxed mb-4">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-[10px] font-pixel bg-muted text-muted-foreground rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
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
        <div className="bg-card/90 backdrop-blur border-2 border-breathing-water px-4 py-2 rounded">
          <span className="text-[10px] md:text-xs text-breathing-water font-pixel">LEVEL 3</span>
          <p className="text-[8px] md:text-[10px] text-muted-foreground font-pixel mt-1">THE ARTIFACTS</p>
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
          <p className="text-[10px] md:text-xs text-muted-foreground font-pixel">
            Forged through code. Powered by breathing techniques.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>

        {/* Decorative pipes */}
        <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-12">
          <div className="mario-pipe h-32 w-full rounded-r-lg" />
        </div>
        <div className="hidden lg:block absolute right-0 top-2/3 -translate-y-1/2 w-12">
          <div className="mario-pipe h-24 w-full rounded-l-lg" />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
