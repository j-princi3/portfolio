'use client';

import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { SocialLink } from '@/lib/types';

interface SocialLinkComponentProps extends SocialLink {
  delay?: number;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Reusable social link component with hover animations
 * Supports multiple icon types and customizable sizing
 */
export const SocialLinkComponent: React.FC<SocialLinkComponentProps> = ({
  icon,
  href,
  label,
  delay = 0,
  size = 'md',
}) => {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const iconSize = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  // Dynamically get the icon component
  const IconComponent = (LucideIcons as any)[icon];

  if (!IconComponent) {
    console.warn(`Icon ${icon} not found in lucide-react`);
    return null;
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${sizeMap[size]} rounded-full border-2 border-primary flex items-center justify-center 
        text-primary hover:bg-primary hover:text-background transition-all duration-300 
        hover:shadow-lg hover:scale-110`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
      title={label}
    >
      <IconComponent size={iconSize[size]} />
    </motion.a>
  );
};

interface SocialLinksGroupProps {
  links: SocialLink[];
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Reusable container for multiple social links
 */
export const SocialLinksGroup: React.FC<SocialLinksGroupProps> = ({
  links,
  className = 'flex gap-4 justify-center',
  size = 'md',
}) => {
  return (
    <div className={className}>
      {links.map((link, index) => (
        <SocialLinkComponent
          key={link.href}
          {...link}
          delay={index * 0.1}
          size={size}
        />
      ))}
    </div>
  );
};
