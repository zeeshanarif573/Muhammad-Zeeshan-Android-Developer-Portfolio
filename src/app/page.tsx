"use client";

import React, { useState, useEffect } from 'react';
// Corrected imports for a `src` directory structure with `@` alias

import { navLinks, skills, experiences, projects, education } from '@/app/data';

// Corrected path to the 'layout' folder
import { Navigation } from '@/app/portfolio/components/layout/Navigation';
import { Footer } from '@/app/portfolio/components/layout/Footer';

// Corrected path to the 'ui' folder
import { ParticleBackground } from '@/app/portfolio/ui/ParticleBackground';

// Corrected path to the 'sections' folder
import { HeroSection } from '@/app/portfolio/sections/HeroSection';
import { AboutSection}  from '@/app/portfolio/sections/AboutSection';
import { SkillsSection } from '@/app/portfolio/sections/SkillsSection';
import { ExperienceSection } from '@/app/portfolio/sections/ExperienceSection';
import { ProjectsSection } from '@/app/portfolio/sections/ProjectsSection';
import { EducationSection } from '@/app/portfolio/sections/EducationSection';
import { ContactSection } from '@/app/portfolio/sections/ContactSection';
export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const section of navLinks) {
        const element = document.getElementById(section);
        if (element) {
          if (scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
        {/* You need to define your keyframes in a global CSS file */}
        <style jsx global>{`
          /* ... Paste the @keyframes from your original file here or in globals.css ... */
        `}</style>

        <ParticleBackground />

        <Navigation
            navLinks={navLinks}
            activeSection={activeSection}
            scrollToSection={scrollToSection}
        />

        <main className="relative z-10">
            {/* The HeroSection needs the scroll function for its buttons */}
            <HeroSection scrollToSection={scrollToSection} />

            {/* These components are now clean Server Components receiving data as props */}
            <AboutSection />
            <SkillsSection skills={skills} />
            <ExperienceSection experiences={experiences} />
            <ProjectsSection projects={projects} />
            <EducationSection education={education} />
            <ContactSection />
        </main>
        
        <Footer />
    </div>
  );
}