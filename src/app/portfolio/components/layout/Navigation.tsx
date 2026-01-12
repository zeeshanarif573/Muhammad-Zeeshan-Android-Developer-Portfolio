"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

type NavigationProps = {
  navLinks: string[];
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
};

export const Navigation = ({ navLinks, activeSection, scrollToSection }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollAndCloseMenu = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((item) => (
                <button key={item} onClick={() => scrollToSection(item)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeSection === item ? 'text-cyan-400 bg-white/10 shadow-lg shadow-cyan-400/20' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((item) => (
              <button key={item} onClick={() => handleScrollAndCloseMenu(item)} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-md w-full text-left">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};