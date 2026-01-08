'use client';

import React from 'react';
import { motion, MotionProps } from 'framer-motion';

interface SectionWrapperProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

/**
 * Reusable section wrapper with consistent animation and styling
 * Used across Hero, Experience, Projects, Skills, and Footer sections
 */
export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className = '',
  id,
  ...motionProps
}) => {
  return (
    <motion.section
      id={id}
      className={`relative w-full py-20 lg:py-32 px-4 lg:px-8 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-100px' }}
      {...motionProps}
    >
      {children}
    </motion.section>
  );
};

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Reusable section title with consistent styling
 */
export const SectionTitle: React.FC<SectionTitleProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <h2 className={`text-3xl lg:text-4xl font-bold font-pixel mb-12 text-primary glow-green ${className}`}>
      {children}
    </h2>
  );
};

interface SectionContentProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Reusable section content container
 */
export const SectionContent: React.FC<SectionContentProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`max-w-7xl mx-auto ${className}`}>
      {children}
    </div>
  );
};
