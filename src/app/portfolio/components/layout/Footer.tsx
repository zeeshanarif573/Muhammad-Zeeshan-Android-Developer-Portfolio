import React from 'react';

export const Footer = () => (
  <footer className="py-8 px-4 text-center text-gray-400 text-sm border-t border-white/10 relative z-10">
    <p>© {new Date().getFullYear()} Muhammad Zeeshan. All rights reserved.</p>
    <p className="mt-2">Built with Next.js, Tailwind CSS, and Framer Motion ideas. Hosted on Vercel.</p>
  </footer>
);