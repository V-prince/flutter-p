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
            With over four years of specialized experience in Flutter, I focus on the intersection of technical excellence and user-centric design. My approach is rooted in <strong>Clean Architecture</strong> and <strong>SOLID</strong> principles, ensuring that complex applications remain maintainable as they scale.
          </p>
          <p>
            I've successfully shipped over 10 production applications across FinTech, HealthTech, and E-commerce sectors, consistently delivering 60FPS performance and pixel-perfect responsiveness.
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
          <div>
            <p className="text-4xl font-bold text-white">100k</p>
            <p className="font-label-caps text-label-caps text-on-surface-variant">Active Users</p>
          </div>
        </div>
      </div>

      <div className="md:col-span-5 relative group">
        <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="relative glass-card rounded-2xl overflow-hidden aspect-square">
          <img
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            alt="A professional high-key portrait of a software engineer in a dark tech-focused environment."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuEj7UVXzIo0kLwvN03ClVe5Qlb57nRxRKy687F3l0UNay2NV-aE6o1JN8nB2GvdaZOQqPKLNyzlUkmnertSXo9AsITJlJm3Aw7uG1wqF9FdT86yK-nHBFpWrFnZs_9VmPY9S1nL8JiF-8oDrHigqM_JjOwooCcKgNTahpcWuM8FPJXlpQcG45aiy13NK_yeo7_W1ctKnIYbKs_K5dQZzvIIarZIGSJxFL27BingSZZ_q50AoTtiMeWA"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
