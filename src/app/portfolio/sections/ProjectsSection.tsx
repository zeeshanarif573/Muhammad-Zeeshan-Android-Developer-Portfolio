// src/app/portfolio/sections/ProjectsSection.tsx

import React from 'react';
import { FolderOpen, ExternalLink } from 'lucide-react';
import { Card3D } from '@/app/portfolio/ui/Card3D';
import { SectionHeader } from '@/app/portfolio/ui/SectionHeader';

// Define the type for a single project
type Project = {
  name: string;
  url: string;
  tech: string;
};

// Define the props for this component
type ProjectsSectionProps = {
  projects: Project[];
};

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Featured Projects" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <Card3D key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 group flex flex-col">
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <FolderOpen className="text-cyan-400" size={28} />
                  <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name}`} className="text-gray-400 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{project.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.tech}</p>
              </div>
              <div className="mt-auto">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-semibold text-sm hover:underline flex items-center">
                  View Project <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
};