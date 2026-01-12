// src/app/portfolio/ui/ParticleBackground.tsx
"use client"; // 1. Mark this as a client component

import React, { useState, useEffect } from 'react';

// Define a type for a single particle's style
type ParticleStyle = {
  left: string;
  top: string;
  animation: string;
  animationDelay: string;
};

export const ParticleBackground = () => {
  // 2. Use state to hold the particle data. Initialize as empty.
  const [particles, setParticles] = useState<ParticleStyle[]>([]);

  // 3. Use useEffect to generate random values ONLY on the client, after the initial render.
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 50 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite alternate`,
        animationDelay: `${Math.random() * 2}s`,
      }));
      setParticles(newParticles);
    };

    generateParticles();
  }, []); // The empty dependency array [] ensures this runs only once on mount.

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* 4. Render the particles from the state. On initial render, this is empty. */}
      {particles.map((style, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={style}
        />
      ))}
    </div>
  );
};