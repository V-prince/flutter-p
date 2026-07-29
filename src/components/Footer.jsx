import { Code, Link, Send } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-20 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-gutter max-w-container-max-width mx-auto gap-8">
        <a className="text-on-surface-variant hover:text-primary transition-all flex items-center gap-2" href="#">
          <span className="material-symbols-outlined text-[20px]"><Code /></span>
          <span className="font-label-caps text-label-caps uppercase tracking-widest">GitHub</span>
        </a>
        <a className="text-on-surface-variant hover:text-primary transition-all flex items-center gap-2" href="#">
          <span className="material-symbols-outlined text-[20px]"><Link /></span>
          <span className="font-label-caps text-label-caps uppercase tracking-widest">LinkedIn</span>
        </a>
        <a className="text-on-surface-variant hover:text-primary transition-all flex items-center gap-2" href="#">
          <span className="material-symbols-outlined text-[20px]"><Send /></span>
          <span className="font-label-caps text-label-caps uppercase tracking-widest">Twitter</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
