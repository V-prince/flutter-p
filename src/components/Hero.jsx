import React from 'react';
import ShaderBackground from './ShaderBackground';
import { ChevronDown, Code, Link, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <ShaderBackground />

      <div className="relative z-10 text-center px-margin-mobile max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-secondary/20 bg-secondary/5 mb-8 animate-pulse">
          <div className="w-2 h-2 rounded-full bg-secondary"></div>
          <span className="text-label-caps font-label-caps text-secondary uppercase">
            Open for new opportunities
          </span>
        </div>

        <h1 className="font-display text-display md:text-[80px] text-white leading-tight mb-8">
          Senior <span className="text-gradient">Flutter</span> Developer
        </h1>

        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
          Building scalable, production-grade mobile experiences for 4+ years. Expert in clean architecture and high-fidelity UI execution.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            className="btn-gradient px-10 py-4 rounded-xl font-bold text-white w-full md:w-auto text-center cursor-pointer active:scale-95 transition-transform"
            href="#projects"
          >
            View Work
          </a>
          <a
            className="px-10 py-4 rounded-xl border border-white/20 text-white font-bold hover:bg-white/5 w-full md:w-auto text-center transition-all"
            href="#"
          >
            Download Resume
          </a>
        </div>

        <div className="flex justify-center gap-6 mt-8">
          <a
            href="#"
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-secondary hover:text-secondary hover:shadow-[0_0_15px_rgba(68,221,193,0.3)] transition-all duration-300"
          >
            <span className="material-symbols-outlined"><Code/></span>
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-secondary hover:text-secondary hover:shadow-[0_0_15px_rgba(68,221,193,0.3)] transition-all duration-300"
          >
            <span className="material-symbols-outlined"><Link/></span>
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-secondary hover:text-secondary hover:shadow-[0_0_15px_rgba(68,221,193,0.3)] transition-all duration-300"
          >
            <span className="material-symbols-outlined"><Mail/></span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <span className="material-symbols-outlined"><ChevronDown /></span>
      </div>
    </header>
  );
};

export default Hero;
