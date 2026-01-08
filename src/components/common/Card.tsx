'use client';

import React from 'react';
import { motion, MotionProps } from 'framer-motion';

interface CardProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'breathing-water' | 'breathing-fire' | 'breathing-thunder';
  delay?: number;
}

/**
 * Reusable card component with breathing style variants
 * Used for Projects, Experience, Skills cards
 */
export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  delay = 0,
  ...motionProps
}) => {
  const variantStyles = {
    default: 'bg-card border-2 border-border',
    'breathing-water': 'breathing-card breathing-card-water',
    'breathing-fire': 'breathing-card breathing-card-fire',
    'breathing-thunder': 'breathing-card breathing-card-thunder',
  };

  return (
    <motion.div
      className={`${variantStyles[variant]} rounded-lg p-6 transition-all duration-300 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -4 }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '' }) => {
  return <div className={`mb-4 ${className}`}>{children}</div>;
};

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const CardTitle: React.FC<CardTitleProps> = ({ 
  children, 
  className = '',
  size = 'md',
}) => {
  const sizeMap = {
    sm: 'text-sm lg:text-base',
    md: 'text-base lg:text-lg',
    lg: 'text-lg lg:text-xl',
  };

  return (
    <h3 className={`${sizeMap[size]} font-bold font-pixel text-primary ${className}`}>
      {children}
    </h3>
  );
};

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => {
  return <div className={`text-foreground/90 ${className}`}>{children}</div>;
};

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, className = '' }) => {
  return <div className={`mt-4 pt-4 border-t border-border/30 ${className}`}>{children}</div>;
};
