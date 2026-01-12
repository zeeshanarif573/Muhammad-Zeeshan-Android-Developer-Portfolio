// src/app/portfolio/ui/FloatingElement.tsx

import React from 'react';

type FloatingElementProps = {
  children: React.ReactNode;
  delay?: number; // Optional delay in seconds
};

/**
 * A component that wraps its children and applies a
 * continuous floating animation.
 * @param {React.ReactNode} children The content to be animated.
 * @param {number} delay Optional animation start delay in seconds.
 */
export const FloatingElement = ({ children, delay = 0 }: FloatingElementProps) => {
  return (
    <div
      className="animate-float"
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};