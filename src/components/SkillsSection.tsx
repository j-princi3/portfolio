'use client';

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { SKILLS_DATA } from '@/lib/constants';
import { Skill } from '@/lib/types';

interface BreathingStyleProps extends Skill {}

const BreathingStyleCard = ({ name, subtitle, icon, skills, color, glowClass, level }: BreathingStyleProps) => {
  return (
    <motion.div
      className="breathing-card group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <motion.div
          className={`p-3 rounded-lg`}
          style={{ backgroundColor: `hsl(var(--${color}) / 0.2)` }}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          {(() => {
            const IconComponent = (LucideIcons as any)[icon];
            return <IconComponent className="w-6 h-6 text-muted-foreground" />;
          })()}
        </motion.div>
        <div>
          <h3 className={`text-sm md:text-base font-pixel ${glowClass}`}>
            {name}
          </h3>
          <p className="text-[10px] md:text-xs font-pixel text-muted-foreground mt-1">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Skills list */}
      <div className="grid grid-cols-2 gap-2">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            className="flex items-center gap-2 p-2 bg-muted/50 rounded group-hover:bg-muted transition-colors"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <ChevronRight className="w-3 h-3 text-primary" />
            <span className="text-[10px] md:text-xs font-pixel text-foreground">
              {skill}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Power level bar */}
      <div className="mt-4">
        <div className="flex justify-between text-[8px] font-pixel text-muted-foreground mb-1">
          <span>MASTERY LEVEL</span>
          <span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {level}%
            </motion.span>
          </span>
        </div>
        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, hsl(var(--${color})), hsl(var(--${color}) / 0.5))` }}
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section className="relative min-h-screen px-4 py-20 overflow-hidden">
      {/* Level indicator */}
      <motion.div 
        className="sticky top-8 left-8 z-20 inline-block"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="bg-card/90 backdrop-blur border-2 border-hinokami-gold px-4 py-2 rounded">
          <span className="text-[10px] md:text-xs text-hinokami-gold font-pixel">INVENTORY</span>
          <p className="text-[8px] md:text-[10px] text-muted-foreground font-pixel mt-1">BREATHING STYLES</p>
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
            COMBAT <span className="text-primary glow-green">TECHNIQUES</span>
          </h2>
          <p className="text-[10px] md:text-xs text-muted-foreground font-pixel max-w-md mx-auto">
            Master of multiple breathing styles. Each technique honed through countless battles.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS_DATA.map((style, index) => (
            <BreathingStyleCard
              key={style.name}
              {...style}
            />
          ))}
        </div>

        {/* Stats summary */}
        <motion.div
          className="mt-16 p-6 bg-card/50 border-2 border-primary/30 rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { label: 'LEETCODE', value: '500+', color: 'text-primary' },
              { label: 'PROJECTS', value: '10+', color: 'text-breathing-water' },
              { label: 'HACKATHONS', value: '5+', color: 'text-hinokami-fire' },
              { label: 'BREATHING STYLES', value: '4', color: 'text-breathing-thunder' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1, type: 'spring' }}
                viewport={{ once: true }}
              >
                <div className={`text-2xl md:text-3xl font-pixel ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-[8px] font-pixel text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
