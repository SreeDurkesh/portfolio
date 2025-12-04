import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Send,
  CheckCircle,
  Phone,
  Linkedin,
  Github
} from 'lucide-react';
import { SectionId } from '../types';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const accessKey = process.env.WEB3_FORM_KEY;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append('access_key', accessKey || '');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      }
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section
      id={SectionId.CONTACT}
      className="relative py-24 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background glass blobs */}
      <div className="absolute top-0 -right-32 w-[400px] h-[400px] bg-primary-500/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] bg-secondary-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Heading */}
        <div className="text-center flex flex-col items-center gap-4">
          <span className="px-4 py-1 text-xs font-mono font-medium tracking-wider text-secondary-400 bg-secondary-900/20 rounded-full border border-secondary-500/30">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Let's Build Something <span className="text-primary-400">Amazing</span>
          </h2>
          <p className="text-slate-300 max-w-2xl text-lg">
            Whether you have a question, a project proposal, or just want to discuss the latest in tech architecture, I'm always open to connecting.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            {[
              {
                icon: <Mail className="w-6 h-6" />,
                title: 'Email',
                subtitle: 'Open for opportunities and collaborations.',
                link: 'mailto:durkeshsree@gmail.com',
                display: 'durkeshsree@gmail.com'
              },
              {
                icon: <Phone className="w-6 h-6" />,
                title: 'Phone',
                subtitle: 'Mon-Fri from 9am to 6pm IST.',
                link: 'tel:+918903615740',
                display: '+91 8903615740'
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: 'Location',
                subtitle: 'Chennai, Tamil Nadu, India',
                extra: 'Available for remote & hybrid roles'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 glass-panel rounded-2xl hover:border-primary-500/30 transition-colors cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-500/10 rounded-lg text-primary-400 group-hover:bg-primary-500 group-hover:text-slate-950 transition-colors flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-slate-400 mb-1">{item.subtitle}</p>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-primary-400 hover:text-primary-300 font-medium inline-flex items-center gap-1"
                      >
                        {item.display}
                      </a>
                    ) : (
                      <p className="text-slate-500 text-sm">{item.extra}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="pt-4 flex flex-col gap-2">
              <h3 className="text-white font-bold mb-2">Connect on Social</h3>
              <div className="flex gap-4">
                <a
                  href="https://in.linkedin.com/in/sree-durkesh"
                  className="p-4 glass-panel rounded-xl hover:bg-[#0077b5] hover:text-white text-slate-400 transition-all duration-300 flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                {/* <a
                  href="https://github.com/yourusername"
                  className="p-4 glass-panel rounded-xl hover:bg-slate-700 hover:text-white text-slate-400 transition-all duration-300 flex items-center justify-center"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a> */}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative glass-panel p-8 md:p-10 rounded-3xl border border-slate-800 shadow-lg">
            {submitted && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/95 z-20 rounded-3xl animate-fade-in p-6 text-center">
                <div className="w-16 h-16 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400">Thanks for reaching out, Sree will get back to you shortly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" aria-live="polite">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={5}
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-primary-500/20"
              >
                {isSubmitting ? <span className="animate-pulse">Sending...</span> : <>Send Message <Send className="w-4 h-4" /></>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
