import StarfieldBackground from '@/components/StarfieldBackground';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Parallax star background */}
      <StarfieldBackground />

      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <FooterSection />
      </main>

      {/* Scanline overlay for retro effect */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]">
        <div 
          className="w-full h-full"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.3) 1px, rgba(0,0,0,0.3) 2px)',
          }}
        />
      </div>
    </div>
  );
}
