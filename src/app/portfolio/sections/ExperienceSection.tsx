// src/app/portfolio/sections/ExperienceSection.tsx

import React from 'react';
import { Card3D } from '@/app/portfolio/ui/Card3D';
import { SectionHeader } from '@/app/portfolio/ui/SectionHeader';

// Define the type for a single experience item
type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
};

// Define the props for this component
type ExperienceSectionProps = {
  experiences: Experience[];
};

export const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="EXPERIENCE" />

        {/* --- CHANGE 1: A new, simpler layout for the timeline --- */}
        {/* We use a single 'relative' container for precise positioning */}
        <div className="relative">

          {/* The vertical timeline line */}
          <div className="absolute top-5 left-3 h-full w-0.5 bg-cyan-400/20"></div>

          {/* --- CHANGE 2: The Briefcase icon at the very top --- */}
          {/* It's now positioned absolutely at the start of the line, not sticky */}
          <div className="absolute top-0 left-3 -translate-x-1/2">
           
          </div>

          {/* The list of experiences */}
          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              // --- CHANGE 3: The 'group' wrapper ---
              // Each experience item is now a 'group' and has its own relative positioning context.
              // This is the key to making the dot hover effect work.
              <div key={index} className="group relative pl-10">
                
                {/* Timeline Dot with a new hover effect */}
                <div 
                  className="absolute left-3 top-1 -translate-x-1/2 h-4 w-4 rounded-full border-2 border-cyan-400 bg-slate-900 
                             transition-all duration-300
                             group-hover:scale-125 group-hover:bg-cyan-400 group-hover:shadow-[0_0_15px_theme(colors.cyan.400)]"
                ></div>

                {/* The card content, which will trigger the 'group-hover' on the dot */}
                <Card3D>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-cyan-400 font-semibold">{exp.company} · {exp.location}</p>
                      </div>
                      <div className="mt-2 shrink-0 md:mt-0 md:text-right">
                        <span className="px-3 py-1 bg-cyan-400/10 text-cyan-300 rounded-full text-sm font-medium whitespace-nowrap">{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 my-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((h) => (
                        <span key={h} className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs font-medium">{h}</span>
                      ))}
                    </div>
                  </div>
                </Card3D>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};