import React from 'react';

const About = () => {
  return (
    <section
      className="py-section-gap-mobile md:py-section-gap-desktop grid grid-cols-1 md:grid-cols-12 gap-12 items-center transition-all duration-1000 opacity-100 translate-y-0"
      id="about"
    >
      <div className="md:col-span-7 space-y-8">
        <h2 className="font-headline-lg text-headline-lg text-white">
          Engineering <br />
          <span className="text-secondary">Philosophy</span>
        </h2>

        <div className="space-y-6 text-on-surface-variant font-body-lg text-body-lg">
          <p>
            With over 4+ years of hands-on experience as a Flutter Developer, I build production-grade iOS and Android applications that bridge technical performance with seamless user experience. My codebases are structured around Clean Architecture, BLoC/Provider state management, and SOLID principles to ensure long-term stability and effortless scalability.
          </p>
          <p>
            I specialize in delivering end-to-end solutions for startups and global enterprises—from pixel-perfect UI execution to custom native channels and RESTful API integrations. Whether joining a core engineering team or handling full freelance project development, I focus on shipping fast, maintainable, and 60 FPS mobile products.
          </p>
        </div>

        <div className="flex gap-12 pt-4">
          <div>
            <p className="text-4xl font-bold text-white">4+</p>
            <p className="font-label-caps text-label-caps text-on-surface-variant">Years Exp.</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-white">12</p>
            <p className="font-label-caps text-label-caps text-on-surface-variant">Apps Shipped</p>
          </div>
        </div>
      </div>

      <div className="md:col-span-5 relative group">
        <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="relative glass-card rounded-2xl overflow-hidden aspect-square">
          <img
            className="w-full h-full object-cover grayscale transition-all duration-500"
            alt="A professional high-key portrait of a software engineer in a dark tech-focused environment."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuEj7UVXzIo0kLwvN03ClVe5Qlb57nRxRKy687F3l0UNay2NV-aE6o1JN8nB2GvdaZOQqPKLNyzlUkmnertSXo9AsITJlJm3Aw7uG1wqF9FdT86yK-nHBFpWrFnZs_9VmPY9S1nL8JiF-8oDrHigqM_JjOwooCcKgNTahpcWuM8FPJXlpQcG45aiy13NK_yeo7_W1ctKnIYbKs_K5dQZzvIIarZIGSJxFL27BingSZZ_q50AoTtiMeWA"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
