import React, { useState } from 'react';
import { Code, Ellipsis, Link, LoaderCircle, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, SetLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      if (!formData.name || !formData.email || !formData.message) return;

      SetLoading(true);
      await emailjs.send(
        "service_v1r6jgi",
        "template_2bzsech",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        's_ju_136k7wXHzHtf'
      )

      toast.success('Message sent successfully!');

      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      SetLoading(false);
    }
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
              Let's build scalable {" "}
              <span className="text-gradient">digital solutions</span>.
            </h2>

            <p className="text-sm sm:text-base md:text-lg leading-7 text-on-surface-variant">
              I bring years of hands-on experience in cross-platform engineering to help businesses launch high-performance products. Got a project in mind? Let's connect.
            </p>

            <div className="space-y-4">

              {/* Email */}
              <a
                href="mailto:pratikbhatti99@gmail.com"
                target='_blank'
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
                href="https://www.linkedin.com/in/pratik-bhatti-5407a216b/"
                target='_blank'
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
                target='_blank'
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
                  required
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
                  required
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
                required
                placeholder="Tell me about your project..."
                className="w-full bg-white/5 border-b border-white/10 p-3 sm:p-4 text-white placeholder:text-zinc-500 resize-none outline-none focus:border-primary transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-gradient w-full rounded-xl py-4 text-white font-semibold flex items-center justify-center gap-2"
            >
              {loading ? <LoaderCircle className="w-6 h-6 animate-spin text-white" /> : 'Send Message'}
            </button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
