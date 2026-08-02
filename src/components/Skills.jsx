import React, { useEffect, useState } from 'react';
import { fetchExpertise } from '../Services/FirebaseService';

const Skills = () => {

  const [expertise, SetExpertise] = useState([]);

  const getExpertise = async () => {
    const data = await fetchExpertise();
    SetExpertise(data)
  }

  useEffect(() => {
    getExpertise()
  }, [])

  return (
    <section className="py-section-gap-mobile md:py-section-gap-desktop transition-all duration-1000 opacity-100 translate-y-0" id="skills">
      <div className="text-center mb-20">
        <h2 className="font-headline-lg text-headline-lg text-white mb-4">Core Expertise</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {expertise.map((expertise) => (
          <div key={expertise.id} className="glass-card p-10 rounded-2xl hover:border-primary/50 transition-colors ">
            <h3 className="font-headline-md text-headline-md text-white">{expertise.title}</h3>
            <span className="material-symbols-outlined text-secondary text-4xl ">{expertise.icon}</span>
            <div className="flex flex-wrap gap-2 mt-5">
              {expertise?.skills?.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-white/5 rounded-lg font-label-caps text-label-caps text-on-surface-variant">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
