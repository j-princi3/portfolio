'use client';

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { Sword, Shield } from 'lucide-react';
import FloatingPlatform from './FloatingPlatform';
import { EXPERIENCE_DATA } from '@/lib/constants';
import { ExperienceItem } from '@/lib/types';

interface QuestEntryProps extends ExperienceItem {}

const QuestEntry = ({ title, company, type, achievements, icon, delay }: QuestEntryProps) => {
  const IconComponent = (LucideIcons as any)[icon];
  
  return (
    <motion.div
      className="relative"
      initial={{ x: type === 'main' ? -100 : 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="quest-entry">
        {/* Quest type badge */}
        <div className={`absolute -left-4 top-0 px-2 py-1 text-[8px] font-pixel rounded ${
          type === 'main' 
            ? 'bg-hinokami-fire text-foreground' 
            : 'bg-secondary text-secondary-foreground'
        }`}>
          {type === 'main' ? 'MAIN QUEST' : 'SIDE QUEST'}
        </div>

        <div className="bg-card/80 backdrop-blur border-2 border-border rounded-lg p-6 mt-4 hover:border-primary/50 transition-colors">
          {/* Boss icon */}
          <div className="flex items-start gap-4 mb-4">
            <motion.div 
              className="p-3 bg-destructive/20 rounded-lg"
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <IconComponent className="w-6 h-6 text-destructive" />
            </motion.div>
            <div>
              <h3 className="text-base md:text-lg font-pixel text-foreground">{title}</h3>
              <p className="text-xs md:text-sm text-primary font-pixel mt-1">{company}</p>
            </div>
          </div>

          {/* Achievements as hit points */}
          <div className="space-y-3">
            {achievements.map((achievement, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: delay + 0.1 * (i + 1) }}
                viewport={{ once: true }}
              >
                <span className="text-hinokami-fire text-xs">▸</span>
                <div>
                  <p className="text-xs md:text-sm font-pixel text-muted-foreground leading-relaxed">
                    {achievement}
                  </p>
                  {i === 0 && type === 'main' && (
                    <span className="inline-block mt-1 px-2 py-0.5 bg-hinokami-fire/20 text-hinokami-fire text-[10px] font-pixel rounded">
                      CRITICAL HIT!
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* XP bar */}
          <div className="mt-4">
            <div className="flex justify-between text-[8px] font-pixel text-muted-foreground mb-1">
              <span>XP GAINED</span>
              <span>+{type === 'main' ? '500' : '200'} XP</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-tanjiro-green"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ delay: delay + 0.5, duration: 1 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  return (
    <section className="relative min-h-screen px-4 py-20 overflow-hidden">
      {/* Level indicator */}
      <motion.div 
        className="sticky top-8 left-8 z-20 inline-block"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="bg-card/90 backdrop-blur border-2 border-destructive px-4 py-2 rounded">
          <span className="text-[10px] md:text-xs text-destructive font-pixel">LEVEL 2</span>
          <p className="text-[8px] md:text-[10px] text-muted-foreground font-pixel mt-1">BOSS BATTLES</p>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto mt-12">
        {/* Section title */}
        <FloatingPlatform delay={0.1}>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <Sword className="w-8 h-8 text-hinokami-fire" />
              <h2 className="text-xl md:text-3xl font-pixel text-foreground glow-fire">
                QUEST LOG
              </h2>
              <Sword className="w-8 h-8 text-hinokami-fire transform scale-x-[-1]" />
            </div>
            <p className="text-[10px] md:text-xs text-muted-foreground font-pixel">
              Battles fought. Enemies defeated. Glory earned.
            </p>
          </motion.div>
        </FloatingPlatform>

        {/* Quest entries */}
        <div className="space-y-12">
          {EXPERIENCE_DATA.map((quest) => (
            <QuestEntry 
              key={quest.company} 
              {...quest} 
            />
          ))}
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute right-4 top-1/3 opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <Shield className="w-24 h-24 text-cosmic-purple" />
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
