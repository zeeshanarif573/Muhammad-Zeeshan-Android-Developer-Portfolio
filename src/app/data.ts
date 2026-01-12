// src/app/portfolio/data.ts

import { Code, Briefcase, FolderOpen, Award, LucideIcon } from 'lucide-react';

// --- Types (Good practice to define types for your data) ---

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  items: string[];
};


export type SkillsData = {
  frontend: SkillCategory;
  backend: SkillCategory;
  frameworks: SkillCategory;
  tools: SkillCategory;
};

export type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
};

export type Project = {
  name: string;
  url: string;
  tech: string;
};

export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  description: string;
};


// --- Data Exports ---

export const navLinks: string[] = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];

export const skills: SkillsData = {
  frontend: {
    title: 'Android Development',
    icon: Code,
    items: ['Kotlin', 'Java', 'Android SDK', 'Jetpack Compose', 'XML Layouts', 'Multi-Module Apps', 'Play Store Deployment']
  },
  backend: {
    title: 'Architecture & Patterns',
    icon: Briefcase,
    items: ['MVC', 'MVVM', 'Clean Architecture', 'Repository Pattern', 'Use Cases / Domain Layer', 'Modularization', 'Dependency Injection']
  },
  frameworks: {
    title: 'Networking & Data',
    icon: FolderOpen,
    items: ['Retrofit', 'OkHttp', 'REST APIs', 'JSON', 'Room Database', 'SharedPreferences', 'Firebase']
  },
  tools: {
    title: 'Tools & DevOps',
    icon: Award,
    items: [ 'Android Studio', 'GitHub', 'Firebase','ProGuard / DexGuard','Jira' ,'Figma', 'Hardware Integration']
  }
};

export const experiences: Experience[] = [
  {
    title: 'Sr. Android Developer',
    company: 'Dolphin Advanced Technology Services',
    location: 'Karachi, Pakistan',
    period: 'Aug/2025 - Present',
    description: '',
    highlights: [
      'Designing, developing, and maintaining Android-based POS applications with a focus on performance, security, and scalability.',
      'Implementing payment processing workflows including card, cash, split payments, discounts, and refunds',
      'Integrating with payment gateways, card readers, and hardware peripherals (PAX, printers, scanners)'
    ]
  },
  {
    title: 'Sr. Android Developer',
    company: 'APP IN SNAP Pvt. Ltd',
    location: 'Karachi, Pakistan',
    period: 'June/2023 - Aug/2025',
    description: '',
    highlights: [
      'Developed key features for the JS Mobile Banking app using Kotlin and XML, focusing on secure transactions, intuitive UI/UX, and performance optimization',
      'Maintained 90% user engagement on Bank Islami mobile app by providing comprehensive user support, resolving technical issues quickly to minimize disruptions',
      'Increased functionality by developing 2 modules for the AIK Wallet application using Jetpack Compose'
    ]
  },
  {
    title: 'Android Developer',
    company: 'Bahria Town',
    location: 'Karachi, Pakistan',
    period: 'May/2022 - June/2023',
    description: '',
    highlights: [
      'Coordinated with diverse teams to implement effective solutions that supported core business requirements',
      'Worked closely with cross-functional teams to identify business needs and implement scalable solutions',
      'Acted as the communication channel between IT department and stakeholders, facilitating smooth project execution'
    ]
  },
  {
    title: 'Android Developer',
    company: 'Hundred Alpha Pvt. Ltd',
    location: 'Karachi',
    period: 'Oct/2019 - March/2022',
    description: '',
    highlights: [
      'Built a B2B platform in the JagahOnline android application using Java and XML, enabling streamlined collaboration between real estate businesses, developers, and agents',
      'Developed and integrated an e-commerce module in the application to enable users to discover and connect with traders'
    ]
  },
  {
    title: 'Android Developer',
    company: 'Avialdo Solutions Pvt. Ltd',
    location: 'Karachi',
    period: 'Sep/2018 - Oct/2019',
    description: '',
    highlights: [
      'Developed Tony\'s 8 Minutes and Linked Union Scanner android applications from scratch using Java and XML',
      'Converted UI/UX wireframes into responsive, production-ready mobile applications',
      'Enhanced user experience and app performance'
    ]
  },
  {
    title: 'Junior Android Developer',
    company: 'Amid Tech Solutions Pvt. Ltd',
    location: 'Karachi',
    period: 'Aug/2017 - Sep/2018',
    description: '',
    highlights: [
      'Contributing to a stable and user-friendly Android interface',
      'Collaborated with senior developers to design, develop, and maintain Android applications under guidance',
      'Learned how to integrate APIs into the app to fetch or send data from backend services'
    ]
  }
];

export const projects: Project[] = [
  { name: 'JS Mobile Banking', url: 'https://play.google.com/store/apps/details?id=com.JSBL.bank', tech: 'Android, Kotlin, XML' },
  { name: 'Bank Islami Mobile Banking', url: 'https://play.google.com/store/apps/details?id=com.bi.digitalbanking', tech: 'Android, Kotlin, XML' },
  { name: 'Zindigi', url: 'https://play.google.com/store/apps/details?id=com.wallet.zindigi/', tech: 'Android, Kotlin, XML' },
  { name: 'AIK Digital', url: 'https://play.google.com/store/apps/details?id=com.wallet.bankislami', tech: 'Android, Kotlin, XML' },
  { name: 'Jagahonline', url: 'https://apps.apple.com/pk/app/jagah-online/id1513865840', tech: 'Android, Kotlin, XML' },
  { name: 'TONY’S 8 MINUTES', url: 'https://apps.apple.com/nz/app/tonys-8-minutes/id1196134441', tech: 'Android, Kotlin, XML' },
  { name: 'LinkedUnion Scanner', url: 'https://play.google.com/store/apps/details?id=com.lu.scanner', tech: 'Android, Kotlin, XML' },
  { name: 'PFFI', url: 'https://play.google.com/store/apps/details?id=com.lu_app.pffi', tech: 'Android, Kotlin, XML, ' }
];

export const education: EducationItem[] = [
  {
    institution: 'University of Karachi',
    degree: 'Bachelor of Software Engineering',
    period: '2014 - 2018',
description: 'Developed a solid foundation in computer science principles, including algorithms, data structures, and software engineering, enhancing problem-solving abilities and technical expertise.'
  },
  {
    institution: 'Govt Dehli College',
    degree: 'Pre-Engineering',
    period: '2011 - 2013',
description: 'Built core knowledge in mathematics, physics, and analytical reasoning, laying the groundwork for future studies in engineering and technical disciplines.'
  },
  {
    institution: 'St. Johns School',
    degree: 'Matriculation',
    period: '2000 - 2011',
description: 'Acquired foundational knowledge in biology, chemistry, and general science, fostering analytical thinking and a basic understanding of life sciences.'
  }
];
