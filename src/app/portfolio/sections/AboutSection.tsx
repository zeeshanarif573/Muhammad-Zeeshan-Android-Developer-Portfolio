// src/app/portfolio/sections/AboutSection.tsx

import React from 'react';
import { User, MapPin, Phone, Mail } from 'lucide-react';
import { Card3D } from '@/app/portfolio/ui/Card3D';
import { SectionHeader } from '@/app/portfolio/ui/SectionHeader';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="About Me" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Card3D className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30">
            <User className="text-cyan-400 mb-4" size={32} />
            <h3 className="text-2xl font-bold text-white mb-4">Professional Summary</h3>
            <p className="text-gray-300 leading-relaxed">
              Senior Android Developer with 7+ years of experience building and deploying scalable, secure, and high-performance mobile applications across banking/fintech, e-commerce, and POS domains. Specialized in Kotlin and Java, with a strong focus on Clean Architecture (MVVM), performance optimization, and secure coding practices.

              Experienced in delivering end-to-end Android solutions using Jetpack, Hilt, Retrofit, Firebase, and Crashlytics, including transaction-heavy and security-sensitive apps published on the Google Play Store. Adept at collaborating with product, design, and backend teams to translate business requirements into robust, maintainable, and testable solutions, while maintaining high standards of code quality and ownership.
            </p>
          </Card3D>
          
          <div className="space-y-6">
            <Card3D className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30">
              <MapPin className="text-cyan-400 mb-2" size={24} />
              <h4 className="text-lg font-semibold text-white">Location</h4>
              <p className="text-gray-300">Karachi, Pakistan</p>
            </Card3D>
            
            <Card3D className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30">
              <Phone className="text-cyan-400 mb-2" size={24} />
              <h4 className="text-lg font-semibold text-white">Phone</h4>
              <p className="text-gray-300">+923353242657</p>
            </Card3D>

            <Card3D className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30">
                <Mail className="text-cyan-400 mb-2" size={24} />
                <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
                <p className="text-gray-300">zeeshanarif573@gmail.com</p>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection