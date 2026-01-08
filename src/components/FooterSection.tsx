'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import PixelCharacter from './PixelCharacter';
import { SocialLinksGroup } from './common/SocialLink';
import { SOCIAL_LINKS, CONTACT_INFO } from '@/lib/constants';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative px-4 py-16 overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-4xl mx-auto">
        {/* Thank you message */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-6"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <PixelCharacter />
          </motion.div>

          <h3 className="text-2xl md:text-3xl font-pixel text-foreground mb-4">
            <span className="text-primary glow-green">QUEST COMPLETE!</span>
          </h3>
          <p className="text-sm md:text-base font-pixel text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Thanks for scrolling through my adventure! Ready to team up for your next quest?
          </p>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="flex flex-col items-center gap-8 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-sm md:text-base font-pixel text-muted-foreground mb-3">
              Ready to start a new adventure?
            </p>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-base md:text-lg font-pixel text-primary hover:text-primary/80 transition-colors underline"
            >
              {CONTACT_INFO.email}
            </a>
          </motion.div>

          {/* Social links - using reusable component */}
          <SocialLinksGroup links={SOCIAL_LINKS} size="md" />
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center border-t border-border/30 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-pixel text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="w-3 h-3 text-destructive inline" /> by Princi Jain
          </p>
          <p className="text-sm font-pixel text-muted-foreground/50 mt-2">
            © {currentYear} | All breathing styles reserved
          </p>
        </motion.div>
      </div>

      {/* Background decorations */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cosmic-deep/50 to-transparent pointer-events-none" />
    </footer>
  );
};

export default FooterSection;
