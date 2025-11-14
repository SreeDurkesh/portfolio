import React from "react";
import { profileData } from "../data/profile";
import "../styles/animation.css";
import { Github, Linkedin, Mail } from "lucide-react";

interface Contact {
  name: string;
  email: string;
  phone: string;
  image: string;
  linkedin: string;
  github: string;
}

interface ProfileData {
  title: string;
  subtitle: string;
  description: string[];
  highlights: string[];
  skills: string[];
  contact: Contact;
}

const LeadPortfolio: React.FC = () => {
  const data: ProfileData = profileData;

  return (
    <div className="relative min-h-screen bg-[#0d0e16] text-white font-sans overflow-hidden">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-8 py-4 sticky top-0 bg-[#0d0e16] shadow-lg z-50">
        <div className="text-2xl font-bold">{data.contact.name}'s Portfolio</div>
        <div className="flex items-center gap-4">
          <a href={`mailto:${data.contact.email}`} className="p-2 hover:bg-white/10 rounded-full transition">
            <Mail size={22} />
          </a>
          <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-full transition">
            <Linkedin size={22} />
          </a>
          <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-full transition">
            <Github size={22} />
          </a>
        </div>
      </header>

      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-96 h-96 bg-[#0ea5e9] opacity-10 rounded-full blur-3xl animate-tilt-slow -top-32 -left-24"></div>
        <div className="absolute w-80 h-80 bg-[#f97316] opacity-10 rounded-full blur-3xl animate-tilt-slow-rev top-40 right-16"></div>
        <div className="absolute w-72 h-72 bg-[#8b5cf6] opacity-5 rounded-full blur-2xl animate-float bottom-20 left-1/2 transform -translate-x-1/2"></div>
      </div>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-8 py-24 flex flex-col md:flex-row items-center gap-12">
        {/* Hero Text & CTA */}
        <div className="flex-1 space-y-6 z-10">
          <h1 className="text-5xl font-bold text-[#8b5cf6]">{data.title}</h1>
          <p className="text-xl text-gray-300">{data.subtitle}</p>
         
        </div>
        {/* Floating Avatar */}
        <div className="relative z-10">
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#0ea5e9]/20 rounded-full blur-2xl animate-float"></div>
          <img
            src={data.contact.image}
            alt={data.contact.name}
            className="w-56 h-56 rounded-full object-cover border-4 border-[#8b5cf6] shadow-xl hover:scale-105 transition-transform"
          />
        </div>
      </section>

      {/* About + Highlights (Stepped Layout) */}
      <section className="max-w-7xl mx-auto px-8 py-20 relative space-y-24">
        {data.description.map((desc, idx) => (
          <div key={idx} className={`flex flex-col md:flex-row items-center gap-12 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
            <div className="flex-1 bg-[#1a1b29] rounded-2xl shadow-lg p-8 hover:shadow-2xl transition transform hover:scale-105 space-y-4">
              <h2 className="text-2xl font-semibold text-[#0ea5e9]">{idx === 0 ? "About Me" : `Highlight ${idx}`}</h2>
              <p className="text-gray-300 text-sm">{desc}</p>
            </div>
            {/* Connector circle */}
            <div className="hidden md:block w-6 h-6 bg-[#f97316] rounded-full -mt-12"></div>
          </div>
        ))}
      </section>

      {/* Skills Section */}
      <section className="max-w-7xl mx-auto px-8 py-20 space-y-6">
        <h2 className="text-3xl font-semibold text-[#8b5cf6] text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {data.skills.map((skill, idx) => (
            <span key={idx} className="px-4 py-2 bg-[#0ea5e9] text-black rounded-full text-sm font-medium hover:bg-[#0284c7] transition animate-scaleIn">{skill}</span>
          ))}
        </div>
      </section>

      {/* Contact Hero Section */}
      <section className="relative max-w-7xl mx-auto px-8 py-20 text-center">
        <div className="bg-[#1a1b29] rounded-3xl shadow-2xl p-12 hover:shadow-2xl transition transform hover:scale-105 inline-block">
          <h2 className="text-3xl font-semibold text-[#f97316] mb-4">Get in Touch</h2>
          <p className="mb-1">{data.contact.name}</p>
          <p className="mb-1">{data.contact.phone}</p>
          <p>{data.contact.email}</p>
        </div>
      </section>
    </div>
  );
};

export default LeadPortfolio;
