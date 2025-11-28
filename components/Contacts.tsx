import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, ExternalLink, CheckCircle, Phone } from 'lucide-react';
import { SectionId } from '../types';

const Contact: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const accessKey = process.env.WEB3_FORM_KEY;


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formState.name || !formState.email || !formState.message) return;

        setIsSubmitting(true);

        const formData = new FormData(e.target);
        formData.append("access_key", accessKey);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            setSubmitted(true);
            setFormState({ name: '', email: '', message: '' });
            setIsSubmitting(false)
        }

        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <section id={SectionId.CONTACT} className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-900">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center mb-16 text-center">
                    <div className="inline-block px-3 py-1 mb-4 text-xs font-mono font-medium tracking-wider text-secondary-400 bg-secondary-900/20 rounded-full border border-secondary-500/30">
                        GET IN TOUCH
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Let's Build Something <span className="text-primary-400">Amazing</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl text-lg">
                        Whether you have a question, a project proposal, or just want to discuss the latest in tech architecture, I'm always open to connecting.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Contact Info */}
                    <div className="flex flex-col justify-center space-y-8">
                        <div className="p-6 glass-panel rounded-2xl hover:border-primary-500/30 transition-colors group">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary-500/10 rounded-lg text-primary-400 group-hover:bg-primary-500 group-hover:text-slate-950 transition-colors">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-200 mb-1">Email</h3>
                                    <p className="text-slate-400 mb-2">Open for opportunities and collaborations.</p>
                                    <a href="mailto:durkeshsree@gmail.com" className="text-primary-400 hover:text-primary-300 font-medium inline-flex items-center gap-1">
                                        durkeshsree@gmail.com <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 glass-panel rounded-2xl hover:border-primary-500/30 transition-colors group">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary-500/10 rounded-lg text-primary-400 group-hover:bg-primary-500 group-hover:text-slate-950 transition-colors">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-200 mb-1">Phone</h3>
                                    <p className="text-slate-400 mb-2">Mon-Fri from 9am to 6pm IST.</p>
                                    <a href="tel:+919876543210" className="text-primary-400 hover:text-primary-300 font-medium inline-flex items-center gap-1">
                                        +91 8903615740
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 glass-panel rounded-2xl hover:border-secondary-500/30 transition-colors group">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-secondary-500/10 rounded-lg text-secondary-400 group-hover:bg-secondary-500 group-hover:text-slate-950 transition-colors">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-200 mb-1">Location</h3>
                                    <p className="text-slate-400">Chennai, Tamil Nadu, India</p>
                                    <p className="text-slate-500 text-sm mt-1">Available for remote & hybrid roles</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h3 className="text-slate-200 font-bold mb-4">Connect on Social</h3>
                            <div className="flex gap-4">
                                <a href="https://in.linkedin.com/in/sree-durkesh" className="p-4 glass-panel rounded-xl hover:bg-[#0077b5] hover:text-white text-slate-400 transition-all duration-300">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                                        alt="LinkedIn"
                                        className="w-6 h-6 transition-all duration-300"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-panel p-8 md:p-10 rounded-3xl border border-slate-800 relative">
                        {submitted ? (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/95 z-20 rounded-3xl animate-fade-in p-6 text-center">
                                <div className="w-16 h-16 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center mb-4">
                                    <CheckCircle className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-slate-400">Thanks for reaching out, Sree will get back to you shortly.</p>
                            </div>
                        ) : null}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-primary-500 transition-colors"
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
                                    className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-primary-500 transition-colors"
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
                                    rows={4}
                                    className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                    required
                                />
                            </div>
                            <div className="h-captcha" data-sitekey="YOUR_HCAPTCHA_SITE_KEY"></div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-primary-500/20"
                            >
                                {isSubmitting ? (
                                    <span className="animate-pulse">Sending...</span>
                                ) : (
                                    <>
                                        Send Message <Send className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;