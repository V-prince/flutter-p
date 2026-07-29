import React from 'react';

const Skills = () => {
  return (
    <section className="py-section-gap-mobile md:py-section-gap-desktop transition-all duration-1000 opacity-100 translate-y-0" id="skills">
      <div className="text-center mb-20">
        <h2 className="font-headline-lg text-headline-lg text-white mb-4">Core Expertise</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* State Management */}
        <div className="glass-card p-10 rounded-2xl hover:border-primary/50 transition-colors">
          <span className="material-symbols-outlined text-primary text-4xl mb-6">layers</span>
          <h3 className="font-headline-md text-headline-md text-white mb-4">State &amp; Logic</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-white/5 rounded-lg font-label-caps text-label-caps text-on-surface-variant">BLoC / Provider</span>
            <span className="px-3 py-1 bg-white/5 rounded-lg font-label-caps text-label-caps text-on-surface-variant">Riverpod</span>
            <span className="px-3 py-1 bg-white/5 rounded-lg font-label-caps text-label-caps text-on-surface-variant">GetX</span>
            <span className="px-3 py-1 bg-white/5 rounded-lg font-label-caps text-label-caps text-on-surface-variant">Clean Architecture</span>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="glass-card p-10 rounded-2xl border-secondary/20 hover:border-secondary/50 transition-colors">
          <span className="material-symbols-outlined text-secondary text-4xl mb-6">terminal</span>
          <h3 className="font-headline-md text-headline-md text-white mb-4">Platform &amp; Tools</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-white/5 rounded-lg font-label-caps text-label-caps text-on-surface-variant">Dart / Flutter</span>
            <span className="px-3 py-1 bg-white/5 rounded-lg font-label-caps text-label-caps text-on-surface-variant">Firebase</span>
            <span className="px-3 py-1 bg-white/5 rounded-lg font-label-caps text-label-caps text-on-surface-variant">Node.js / Go</span>
            <span className="px-3 py-1 bg-white/5 rounded-lg font-label-caps text-label-caps text-on-surface-variant">REST / GraphQL</span>
          </div>
        </div>

        {/* DevOps */}
        <div className="glass-card p-10 rounded-2xl hover:border-primary/50 transition-colors">
          <span className="material-symbols-outlined text-primary text-4xl mb-6">settings_suggest</span>
          <h3 className="font-headline-md text-headline-md text-white mb-4">DevOps &amp; CI/CD</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-white/5 rounded-lg font-label-caps text-label-caps text-on-surface-variant">Codemagic</span>
            <span className="px-3 py-1 bg-white/5 rounded-lg font-label-caps text-label-caps text-on-surface-variant">GitHub Actions</span>
            <span className="px-3 py-1 bg-white/5 rounded-lg font-label-caps text-label-caps text-on-surface-variant">Fastlane</span>
            <span className="px-3 py-1 bg-white/5 rounded-lg font-label-caps text-label-caps text-on-surface-variant">Unit Testing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
