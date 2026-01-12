// src/app/portfolio/sections/ContactSection.tsx

import { Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Card3D } from '@/app/portfolio/ui/Card3D';
import { SectionHeader } from '@/app/portfolio/ui/SectionHeader';
import { BsWhatsapp } from "react-icons/bs";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Get In Touch"
          subtitle="I'm currently seeking new opportunities and am open to freelance projects. My inbox is always open, feel free to reach out!"
        />
        
        <div className="text-center">
          <a
            href="mailto:zeeshanarif573@gmail.com"
            className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 text-lg"
          >
            Say Hello
          </a>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-8">
          <Card3D>
            {/* Make sure "MuhammadZeeshan_CV.pdf" exists in your /public folder */}
            <a 
              href="/1.-Muhammad-Zeeshan-Sr-Android-Developer-Resume.pdf"
              download
              className="flex items-center px-6 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              <Download size={20} className="mr-2" /> Download CV
            </a>
          </Card3D>
          
          <div className="flex justify-center space-x-6">
            <Card3D>
                <a href="https://github.com/zeeshanarif573" target="_blank" rel="noopener noreferrer" className="p-3 block bg-white/10 rounded-full text-gray-300 hover:text-white hover:bg-cyan-400/20 transition-all"><Github size={24} /></a>
            </Card3D>
            <Card3D>
                <a href="https://www.linkedin.com/in/muhammad-zeeshan-4a4b5ab2/" target="_blank" rel="noopener noreferrer" className="p-3 block bg-white/10 rounded-full text-gray-300 hover:text-white hover:bg-cyan-400/20 transition-all"><Linkedin size={24} /></a>
            </Card3D>
            <Card3D>
                <a href="mailto:zeeshanarif573@gmail.com" className="p-3 block bg-white/10 rounded-full text-gray-300 hover:text-white hover:bg-cyan-400/20 transition-all"><Mail size={24} /></a>
            </Card3D>
            <Card3D>
              <a
                    href="https://wa.me/923353242657"
                    target="_blank"
                    rel="noopener noreferrer" className="p-3 block bg-white/10 rounded-full text-gray-300 hover:text-white hover:bg-cyan-400/20 transition-all"><BsWhatsapp size={24}/></a>
            </Card3D>
            <Card3D>
               <a
          href="tel:+923353242657" className="p-3 block bg-white/10 rounded-full text-gray-300 hover:text-white hover:bg-cyan-400/20 transition-all"> <Phone size={24} /></a>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
};