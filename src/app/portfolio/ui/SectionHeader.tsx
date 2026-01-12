import React from 'react';
import { Card3D } from './Card3D';

export const SectionHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="text-center mb-16">
    <Card3D>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
      <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
      {subtitle && (
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </Card3D>
  </div>
);