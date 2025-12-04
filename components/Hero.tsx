import React from 'react';
import { ArrowRight, Github, Mail } from 'lucide-react';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  const scrollToExperience = () => {
    document.getElementById(SectionId.EXPERIENCE)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={SectionId.HERO} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 
        Note: Global background animations are now handled in Layout.tsx 
        to ensure continuous vibrant scrolling effect.
      */}

      <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
        <div className="max-w-4xl">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-mono font-medium tracking-wider text-primary-400 bg-primary-900/20 rounded-full border border-primary-500/30 animate-fade-in backdrop-blur-sm">
            LEAD FULL STACK ARCHITECT
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="block text-2xl md:text-3xl mb-2 font-medium text-slate-300">Hi, I'm <span className="text-white">Sree Durkesh</span>.</span>
            Driving Technical <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary-400">Excellence</span> & Innovation.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Full-stack architect with 4+ years of experience in React, Angular, Node.js, and Hybrid Mobile ecosystems. 
            Building scalable systems and leading high-performance engineering teams for global clients.
          </p>

          <div className="flex flex-col md:flex-row gap-4 items-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <button 
              onClick={scrollToExperience}
              className="px-8 py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2 w-full md:w-auto justify-center shadow-lg shadow-white/10"
            >
              Explore Portfolio
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex gap-4 mt-4 md:mt-0 items-center">
               <a href="https://in.linkedin.com/in/sree-durkesh" className="p-3 rounded-full hover:bg-white/10 transition-all border border-transparent hover:border-white/10 flex items-center justify-center">
                 <img 
                   src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" 
                   alt="LinkedIn" 
                   className="w-6 h-6 transition-all duration-300" 
                 />
               </a>
               <a href="mailto:durkeshsree@gmail.com" className="p-3 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all border border-transparent hover:border-white/10">
                 <Mail className="w-6 h-6" />
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;