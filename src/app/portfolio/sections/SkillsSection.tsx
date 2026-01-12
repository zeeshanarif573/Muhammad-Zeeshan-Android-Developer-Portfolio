// src/app/portfolio/sections/SkillsSection.tsx

import React from 'react';
import { Star } from 'lucide-react';
import { Card3D } from '@/app/portfolio/ui/Card3D';
import { SectionHeader } from '@/app/portfolio/ui/SectionHeader';
import { type SkillsData } from '@/app/data';




// Define the props for this component
type SkillsSectionProps = {
  skills: SkillsData;
};

export const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Technical Skills" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.values(skills).map((category) => (
            <Card3D key={category.title} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 group">
              <category.icon className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.items.map((skill) => (
                  <div key={skill} className="flex items-center">
                    <Star className="text-yellow-400 mr-2 flex-shrink-0" size={16} />
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
};