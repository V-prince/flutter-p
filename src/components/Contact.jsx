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
    <section
      id="contact"
      className="py-16 md:py-24 transition-all duration-1000"
    >
      <div className="glass-card relative overflow-hidden rounded-3xl md:rounded-[40px] p-6 sm:p-8 md:p-12 lg:p-20">

        {/* Background Blur */}
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-primary/10 blur-[100px] lg:blur-[120px] -mr-20 sm:-mr-36 lg:-mr-48 -mt-20 sm:-mt-36 lg:-mt-48"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left Side */}
          <div className="space-y-8">

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight text-white">
              Let's build something{" "}
              <span className="text-gradient">extraordinary</span>.
            </h2>

            <p className="text-sm sm:text-base md:text-lg leading-7 text-on-surface-variant">
              I'm currently open to senior-level roles and high-impact freelance
              projects. Whether it's a new product or scaling an existing one,
              let's talk.
            </p>

            <div className="space-y-4">

              {/* Email */}
              <a
                href="#"
                className="flex items-start sm:items-center gap-4 p-4 glass-card rounded-xl text-white hover:text-primary hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 transition">
                  <Mail size={22} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-on-surface-variant">
                    Email Me
                  </p>

                  <p className="font-semibold break-all">
                    pratikbhatti99@gmail.com
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="linkedin.com/in/pratik-bhatti-5407a216b"
                className="flex items-start sm:items-center gap-4 p-4 glass-card rounded-xl text-white hover:text-secondary hover:border-secondary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0 group-hover:scale-110 transition">
                  <Link size={22} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-on-surface-variant">
                    Connect on LinkedIn
                  </p>

                  <p className="font-semibold break-all">
                    linkedin.com/in/pratik-bhatti-5407a216b
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/pratikbhatti99"
                className="flex items-start sm:items-center gap-4 p-4 glass-card rounded-xl text-white hover:text-primary hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 transition">
                  <Code size={22} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-on-surface-variant">
                    View GitHub Profile
                  </p>

                  <p className="font-semibold break-all">
                    github.com/pratikbhatti99
                  </p>
                </div>
              </a>

            </div>
          </div>

          {/* Right Side */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-on-surface-variant">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-white/5 border-b border-white/10 p-3 sm:p-4 text-white placeholder:text-zinc-500 outline-none focus:border-primary transition"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-on-surface-variant">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border-b border-white/10 p-3 sm:p-4 text-white placeholder:text-zinc-500 outline-none focus:border-primary transition"
                />
              </div>

            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-on-surface-variant">
                Message
              </label>

              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full bg-white/5 border-b border-white/10 p-3 sm:p-4 text-white placeholder:text-zinc-500 resize-none outline-none focus:border-primary transition"
              />
            </div>

            <button
              type="submit"
              className="btn-gradient w-full rounded-xl py-4 text-white font-semibold flex items-center justify-center gap-2"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
