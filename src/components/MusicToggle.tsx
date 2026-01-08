'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainNodeRef = useRef<GainNode | null>(null);
  const intervalRef = useRef<number | null>(null);

  // 8-bit style melody notes (simple lofi pattern)
  const melody = [
    { freq: 440, duration: 0.3 },   // A4
    { freq: 523, duration: 0.3 },   // C5
    { freq: 587, duration: 0.3 },   // D5
    { freq: 659, duration: 0.6 },   // E5
    { freq: 587, duration: 0.3 },   // D5
    { freq: 523, duration: 0.3 },   // C5
    { freq: 440, duration: 0.6 },   // A4
    { freq: 392, duration: 0.3 },   // G4
    { freq: 440, duration: 0.6 },   // A4
  ];

  useEffect(() => {
    setIsLoaded(true);
    return () => {
      stopMusic();
    };
  }, []);

  const startMusic = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    const ctx = audioContextRef.current;
    gainNodeRef.current = ctx.createGain();
    gainNodeRef.current.gain.value = 0.1;
    gainNodeRef.current.connect(ctx.destination);

    let noteIndex = 0;
    let startTime = ctx.currentTime;

    const playNote = () => {
      if (!ctx || !gainNodeRef.current) return;

      const note = melody[noteIndex % melody.length];
      
      // Create 8-bit square wave sound
      const oscillator = ctx.createOscillator();
      oscillator.type = 'square';
      oscillator.frequency.value = note.freq;
      
      const noteGain = ctx.createGain();
      noteGain.gain.setValueAtTime(0.1, ctx.currentTime);
      noteGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + note.duration);
      
      oscillator.connect(noteGain);
      noteGain.connect(gainNodeRef.current);
      
      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + note.duration);
      
      oscillatorsRef.current.push(oscillator);
      
      noteIndex++;
    };

    // Play notes in sequence
    playNote();
    intervalRef.current = window.setInterval(() => {
      playNote();
    }, 400);
  };

  const stopMusic = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    oscillatorsRef.current.forEach(osc => {
      try {
        osc.stop();
      } catch (e) {
        // Already stopped
      }
    });
    oscillatorsRef.current = [];
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopMusic();
    } else {
      startMusic();
    }
    setIsPlaying(!isPlaying);
  };

  if (!isLoaded) return null;

  return (
    <motion.button
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-50 p-4 rounded-lg bg-card border-4 border-primary/50 hover:border-primary transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      aria-label={isPlaying ? 'Mute music' : 'Play music'}
    >
      <motion.div
        animate={isPlaying ? { rotate: [0, 10, -10, 0] } : {}}
        transition={{ duration: 0.5, repeat: isPlaying ? Infinity : 0 }}
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6 text-primary" />
        ) : (
          <VolumeX className="w-6 h-6 text-muted-foreground" />
        )}
      </motion.div>
      
      {/* Retro label */}
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[8px] text-primary font-pixel whitespace-nowrap">
        8-BIT
      </span>
    </motion.button>
  );
};

export default MusicToggle;
