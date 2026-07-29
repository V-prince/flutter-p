import React from 'react';

const Experience = () => {
  return (
    <section className="py-section-gap-mobile md:py-section-gap-desktop max-w-4xl mx-auto transition-all duration-1000 opacity-100 translate-y-0" id="experience">
      <h2 className="font-headline-lg text-headline-lg text-white mb-16">Professional Journey</h2>

      <div className="relative border-l-2 border-white/5 ml-4 pl-12 space-y-20">
        {/* Job 1 */}
        <div className="relative">
          <div className="absolute -left-[54px] top-2 w-4 h-4 rounded-full bg-primary ring-8 ring-background"></div>
          <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase block mb-2">
            2022 — Present
          </span>
          <h3 className="font-headline-md text-headline-md text-white">
            Lead Flutter Engineer @ FinNova Solutions
          </h3>
          <p className="text-on-surface-variant mb-6">
            Architecting the next generation of digital banking for 2M+ active users.
          </p>
          <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant">
            <li className="flex gap-4">
              <span className="material-symbols-outlined text-secondary text-sm">trending_down</span>
              <span>Reduced app cold-start time by 42% through optimized dependency injection and custom asset caching.</span>
            </li>
            <li className="flex gap-4">
              <span className="material-symbols-outlined text-secondary text-sm">group</span>
              <span>Mentored a team of 5 junior developers, improving sprint velocity by 30%.</span>
            </li>
          </ul>
        </div>

        {/* Job 2 */}
        <div className="relative">
          <div className="absolute -left-[54px] top-2 w-4 h-4 rounded-full bg-white/20 ring-8 ring-background"></div>
          <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase block mb-2">
            2020 — 2022
          </span>
          <h3 className="font-headline-md text-headline-md text-white">
            Senior Mobile Developer @ HealthFlow
          </h3>
          <p className="text-on-surface-variant mb-6">
            Developed a HIPAA-compliant telemedicine platform with real-time vitals monitoring.
          </p>
          <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant">
            <li className="flex gap-4">
              <span className="material-symbols-outlined text-secondary text-sm">bluetooth</span>
              <span>Implemented complex BLE integrations with 15+ different medical devices.</span>
            </li>
            <li className="flex gap-4">
              <span className="material-symbols-outlined text-secondary text-sm">star</span>
              <span>Maintained a 4.8/5.0 App Store rating across 50+ release cycles.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
