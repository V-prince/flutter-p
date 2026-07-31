import React, { useEffect, useState } from 'react';
import { fetchExperience } from '../Services/FirebaseService';

const Experience = () => {

  const [experiences, setExperiences] = useState([]);

  const exp = async () => {
    const data = await fetchExperience();
    setExperiences(data)
  }

  useEffect(() => {
    exp();
  }, [])

  return (
    <section className="py-section-gap-mobile md:py-section-gap-desktop max-w-4xl mx-auto transition-all duration-1000 opacity-100 translate-y-0" id="experience">
      <h2 className="font-headline-lg text-headline-lg text-white mb-16">Professional Journey</h2>

      <div className="relative border-l-2 border-white/5 ml-4 pl-12 space-y-20">
        {/* Job 1 */}

        {experiences.map((exp) => (
          <div key={exp.id} className="relative">
            <div className="absolute -left-[54px] top-2 w-4 h-4 rounded-full bg-primary ring-8 ring-background"></div>
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase block mb-2">
              {exp.year}
            </span>
            <h3 className="font-headline-md text-headline-md text-white">
              {exp.role} @ {exp.companyName}
            </h3>
            <p className="text-on-surface-variant mb-6">
              {exp.subDescription}
            </p>
            <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant">
              <li className="flex w-full justify-start gap-3">

                <span className="mt-2 h-3 w-3 flex-shrink-0 rounded-full bg-secondary"></span>

                <span>{exp.bulletOne}</span>
              </li>
              <li className="flex gap-4">
                <span className="mt-2 h-3 w-3 flex-shrink-0 rounded-full bg-secondary"></span>
                <span>{exp.bulletTwo}</span>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
