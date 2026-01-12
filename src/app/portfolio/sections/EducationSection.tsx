// src/app/portfolio/sections/EducationSection.tsx

import React from 'react';
import { BookOpen } from 'lucide-react';
import { Card3D } from '@/app/portfolio/ui/Card3D';
import { SectionHeader } from '@/app/portfolio/ui/SectionHeader';

// Define the type for an education item
type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  description: string;
};

// Define props for the component
type EducationSectionProps = {
  education: EducationItem[];
};

export const EducationSection = ({ education }: EducationSectionProps) => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Education" />

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Card3D key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 flex">
              <BookOpen className="text-cyan-400 mr-5 mt-1 flex-shrink-0" size={32} />
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <p className="text-cyan-400 font-semibold mb-1">{edu.institution}</p>
                <p className="text-sm text-gray-400 mb-3">{edu.period}</p>
                <p className="text-gray-300 text-sm">{edu.description}</p>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
};