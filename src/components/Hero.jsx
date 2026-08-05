import React, { useEffect, useState } from 'react';
import ShaderBackground from './ShaderBackground';
import { ChevronDown, Code, Link, Mail } from 'lucide-react';
import { fetchLinks } from '../Services/FirebaseService';

const Hero = () => {

  const [resume, SetResume] = useState(null)

  const FetchResume = async () => {
    const data = await fetchLinks();
    SetResume(data[0])
  }

  const resumeDownloadLink = resume?.resumeLink
    ? resume.resumeLink.replace("/edit?usp=sharing", "/export?format=pdf")
    : "";
 
  useEffect(() => {
    FetchResume()
  }, [])


  return (
    <header className="relative min-h-screen flex items-center justify-center  overflow-hidden px-5 sm:px-8 lg:px-10 pt-28 md:pt-24">
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

        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto mb-12">
          Senior Flutter Engineer with 4+ years of experience building high-performance, cross-platform apps for global clients. Specializing in clean architecture, scalable state management, and seamless native integrations to deliver production-grade products.
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
            href={resumeDownloadLink}
            download
          >
            Download Resume
          </a>
        </div>

        <div className="flex justify-center gap-6 mt-8 mb-10">
          <a
            href="https://github.com/pratikbhatti99"
            target='_blank'
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-secondary hover:text-secondary hover:shadow-[0_0_15px_rgba(68,221,193,0.3)] transition-all duration-300"
          >
            <span className="material-symbols-outlined"><Code /></span>
          </a>
          <a
            href="https://www.linkedin.com/in/pratik-bhatti-5407a216b/"
            target='_blank'
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-secondary hover:text-secondary hover:shadow-[0_0_15px_rgba(68,221,193,0.3)] transition-all duration-300"
          >
            <span className="material-symbols-outlined"><Link /></span>
          </a>
          <a
            href="mailto:pratikbhatti99@gmail.com"
            target='_blank'
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-secondary hover:text-secondary hover:shadow-[0_0_15px_rgba(68,221,193,0.3)] transition-all duration-300"
          >
            <span className="material-symbols-outlined"><Mail /></span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-1 md:bottom-5 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <span className="material-symbols-outlined"><ChevronDown /></span>
      </div>
    </header>
  );
};

export default Hero;
