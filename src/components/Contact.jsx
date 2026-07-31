import React, { useState } from 'react';
import { Code, Link, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submit logic
  };

  return (
    <section className="py-section-gap-mobile md:py-section-gap-desktop transition-all duration-1000 opacity-100 translate-y-0" id="contact">
      <div className="glass-card rounded-[40px] p-12 md:p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] -mr-48 -mt-48"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
          <div className="space-y-8">
            <h2 className="font-display text-[56px] text-white leading-tight">
              Let's build something <span className="text-gradient">extraordinary</span>.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              I'm currently open to senior-level roles and high-impact freelance projects. Whether it's a new product or scaling an existing one, let's talk.
            </p>

            <div className="space-y-4">
              <a
                className="flex items-center gap-4 p-4 glass-card rounded-xl text-white hover:text-primary hover:border-primary/50 transition-all group"
                href="#"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined"><Mail /></span>
                </div>
                <div className="flex flex-col">
                  <span className="text-label-caps font-label-caps text-on-surface-variant uppercase">Email Me</span>
                  <span className="font-bold">hello@flutterexpert.dev</span>
                </div>
              </a>

              <a
                className="flex items-center gap-4 p-4 glass-card rounded-xl text-white hover:text-secondary hover:border-secondary/50 transition-all group"
                href="#"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined"><Link /></span>
                </div>
                <div className="flex flex-col">
                  <span className="text-label-caps font-label-caps text-on-surface-variant uppercase">Connect on LinkedIn</span>
                  <span className="font-bold">linkedin.com/in/flutterexpert</span>
                </div>
              </a>

              <a
                className="flex items-center gap-4 p-4 glass-card rounded-xl text-white hover:text-primary hover:border-primary/50 transition-all group"
                href="#"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined"><Code /></span>
                </div>
                <div className="flex flex-col">
                  <span className="text-label-caps font-label-caps text-on-surface-variant uppercase">View GitHub Profile</span>
                  <span className="font-bold">github.com/flutterexpert</span>
                </div>
              </a>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-label-caps font-label-caps text-on-surface-variant uppercase tracking-wider">
                  Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border-b border-white/10 p-4 focus:border-primary focus:ring-0 transition-all text-white outline-none"
                  placeholder="John Doe"
                  type="text"
                />
              </div>

              <div className="space-y-2">
                <label className="text-label-caps font-label-caps text-on-surface-variant uppercase tracking-wider">
                  Email
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border-b border-white/10 p-4 focus:border-primary focus:ring-0 transition-all text-white outline-none"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-label-caps font-label-caps text-on-surface-variant uppercase tracking-wider">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white/5 border-b border-white/10 p-4 focus:border-primary focus:ring-0 transition-all text-white resize-none outline-none"
                placeholder="Tell me about your project..."
                rows="4"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn-gradient w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2"
            >
              Send Message <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
