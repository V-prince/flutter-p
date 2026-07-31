import React from 'react';

const Projects = () => {
  return (
    <section className="py-section-gap-mobile md:py-section-gap-desktop transition-all duration-1000 opacity-100 translate-y-0" id="projects">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="font-headline-lg text-headline-lg text-white mb-4">Featured Work</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Case studies of apps that solve real problems with elegant engineering solutions.
          </p>
        </div>
        <button className="text-secondary font-bold flex items-center gap-2 group">
          View All Projects
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-12">
        
        <div className="glass-card rounded-3xl overflow-hidden group">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-12 space-y-8">
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-label-caps text-label-caps">
                  FINTECH
                </span>
                <span className="px-3 py-1 bg-white/5 text-on-surface-variant rounded-full font-label-caps text-label-caps">
                  CASE STUDY
                </span>
              </div>
              <h3 className="font-display text-[40px] text-white leading-tight">
                PayPulse: Revolutionizing Peer-to-Peer Payments
              </h3>
              <p className="text-on-surface-variant font-body-lg text-body-lg">
                The challenge was to create a seamless, ultra-fast payment experience that handles high concurrency and provides real-time fraud detection alerts.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full  flex items-center justify-center text-secondary">
                    <span className="w-3 h-3 rounded-full bg-secondary"></span>
                  </div>
                  <p className="text-on-surface text-body-md">Sub-200ms transaction settlement time</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full  flex items-center justify-center text-secondary">
                    <span className="w-3 h-3 rounded-full bg-secondary"></span>
                  </div>
                  <p className="text-on-surface text-body-md">Biometric-first authentication flow</p>
                </div>
              </div>
              <button className="btn-gradient px-8 py-3 rounded-xl font-bold text-white mt-4">
                Full Case Study
              </button>
            </div>
            <div className="bg-surface-container-high relative overflow-hidden flex items-center justify-center p-12">
              <img
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700"
                alt="A sleek, high-fidelity UI mockup of a financial mobile app displayed on two floating iPhones."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMa6jrEgZIn7OL1Nf2TiR8CwxjLv9e9oAljNkfixs0TgZQE7AxI7SDIsm-Gu0tWVxHr4qMoXPBbJ3o6qJV4VlSYRgdGAFbyME3bzMj5j3F3-YZS1g-cwKa7AunqvzT1K7prKzcFAZhjsNpv5bbrPgQXZsXylgU4kMQobUbAC3CtzWkztx4Mt850j0gXNpWFAUL44MCy2GFoc6C4KqnNK4WBRVe9aT09lU-ee43v3h4X-cssBveUhR3mQ"
              />
            </div>
          </div>
        </div>

        
        <div className="glass-card rounded-3xl overflow-hidden group">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="order-2 md:order-1 bg-surface-container-high relative overflow-hidden flex items-center justify-center p-12">
              <img
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700"
                alt="A premium mobile application interface for a luxury home automation system."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLCTJI13Vg3uw4oP2sr8ndvK60StcbryT8QP0PddZLd01C1bbyQqT6Yxo75iwdR9bGN41ISi3_k5zM5kyote3XOclD1A6m57_WR_BfVjhaYTtnPBBd-cs-cqHZ1vRIPMu9Lj696jYnZev1GLdYZwuNsrAKfGM3nGqCtmk0Ox1vKwU417kjk_41HIxrqr-Y0Q0ywDodGg6elr72T2K87ff4DOCPhRs8dy_HgbVVTQ3LvVyd-NQjVQAP_Q"
              />
            </div>
            <div className="order-1 md:order-2 p-12 space-y-8">
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full font-label-caps text-label-caps">
                  IOT
                </span>
                <span className="px-3 py-1 bg-white/5 text-on-surface-variant rounded-full font-label-caps text-label-caps">
                  PRODUCTION
                </span>
              </div>
              <h3 className="font-display text-[40px] text-white leading-tight">
                Lumina SmartHome Dashboard
              </h3>
              <p className="text-on-surface-variant font-body-lg text-body-lg">
                Designed and developed a centralized control hub for high-end residential automation, focusing on zero-latency hardware communication via MQTT.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full  flex items-center justify-center text-secondary">
                    <span className="w-3 h-3 rounded-full bg-secondary"></span>
                  </div>
                  <p className="text-on-surface text-body-md">Real-time MQTT state synchronization</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full  flex items-center justify-center text-secondary">
                    <span className="w-3 h-3 rounded-full bg-secondary"></span>
                  </div>
                  <p className="text-on-surface text-body-md">Custom Skia-based animation engine</p>
                </div>
              </div>
              <button className="btn-gradient px-8 py-3 rounded-xl font-bold text-white mt-4">
                Read Tech Spec
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
