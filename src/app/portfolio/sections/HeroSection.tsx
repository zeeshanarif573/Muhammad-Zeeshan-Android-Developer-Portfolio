// src/app/portfolio/sections/HeroSection.tsx

import React from 'react';
// import Image from 'next/image'; // Import the Next.js Image component
import { Github, Linkedin, Mail, ChevronDown, Phone } from 'lucide-react';
import { Card3D } from '../ui/Card3D';
import { FloatingElement } from '../ui/FloatingElement';

import { BsWhatsapp } from "react-icons/bs";

type HeroSectionProps = {
    scrollToSection: (sectionId: string) => void;
};

export const HeroSection = ({ scrollToSection }: HeroSectionProps) => (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-24 md:pt-16">
        {/* Background floating elements */}
        <div className="absolute inset-0 overflow-hidden">
            <FloatingElement delay={0}><div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-screen filter blur-xl opacity-30"></div></FloatingElement>
            <FloatingElement delay={1}><div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-screen filter blur-xl opacity-30"></div></FloatingElement>
            <FloatingElement delay={2}><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500 rounded-full mix-blend-screen filter blur-xl opacity-20"></div></FloatingElement>



        </div>

        {/* Main content */}
        <div className="relative text-center z-10">

            {/* --- THIS IS THE NEW AVATAR SECTION --- */}
            <div className="flex justify-center mb-8">
                {/* <div className="relative group 
    w-40 h-40          
    sm:w-48 sm:h-48   
    lg:w-72 lg:h-72    
"> */}
                    {/* The Spinning, Glowing Gradient Border */}
                    {/* <div className="absolute -inset-1 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#3b82f6_0deg,#d946ef_180deg,#22d3ee_1turn)] 
                    animate-spin-slow blur-md 
                    transition-all duration-500
                    group-hover:blur-xl group-hover:scale-105">
                    </div> */}

                    {/* The main container for your image, which "masks" the spinning div */}
                    {/* <div className="relative w-full h-full bg-slate-900 rounded-full overflow-hidden">
                        <Image
                            src="/m.png"
                            alt="Muhammad Zeeshan's avatar"
                            fill
                            priority={true}
                            className="object-cover"
                        />
                    </div> */}

                {/* </div> */}
            </div>
            <Card3D>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">Muhammad Zeeshan</h1>
            </Card3D>

            <Card3D>
                <p className="text-xl sm:text-2xl text-cyan-400 mb-6">
                    Sr. Android Developer / Software Engineer
                </p>
            </Card3D>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                <Card3D><button onClick={() => scrollToSection('projects')} className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/25">View My Work</button></Card3D>
                <Card3D><button onClick={() => scrollToSection('contact')} className="w-full sm:w-auto px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">Get In Touch</button></Card3D>
            </div>

            <div className="flex justify-center space-x-6">
                <Card3D><a href="https://github.com/zeeshanarif573" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors"><Github size={24} /></a></Card3D>
                <Card3D><a href="https://www.linkedin.com/in/muhammad-zeeshan-4a4b5ab2/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors"><Linkedin size={24} /></a></Card3D>
                <Card3D><a href="mailto:zeeshanarif573@gmail.com" className="text-gray-300 hover:text-white transition-colors"><Mail size={24} /></a></Card3D>
                <Card3D><a
                    href="https://wa.me/923353242657"
                    target="_blank"
                    rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">  <BsWhatsapp size={24} /></a></Card3D>
                <Card3D> <a
                    href="tel:+923353242657" className="text-gray-300 hover:text-white transition-colors">   <Phone size={24} /></a></Card3D>

            </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce">
            <button onClick={() => scrollToSection('about')} aria-label="Scroll to about section">
                <ChevronDown size={30} className="text-cyan-400" />
            </button>
        </div>
    </section>
);