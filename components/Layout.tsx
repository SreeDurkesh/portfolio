import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { SectionId } from '../types';
import { RESUME_DRIVE_LINK, RESUME_SUMMARY } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', id: SectionId.HERO },
    { label: 'Experience', id: SectionId.EXPERIENCE },
    { label: 'Skills', id: SectionId.SKILLS },
    { label: 'Overview', id: SectionId.PORTFOLIO },
    { label: 'Contact', id: SectionId.CONTACT },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
     window.open(RESUME_DRIVE_LINK, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col font-sans relative bg-slate-950 selection:bg-primary-500 selection:text-white">
      {/* Global Background Animation */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Vibrant Moving Gradients */}
        <div
          className="absolute -top-[10%] -right-[5%] w-[800px] h-[800px] bg-primary-500/20 rounded-full blur-[120px] mix-blend-screen transition-transform duration-100 ease-out will-change-transform"
          style={{ transform: `translate3d(0, ${scrollY * 0.2}px, 0)` }}
        />
        <div
          className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-secondary-500/20 rounded-full blur-[120px] mix-blend-screen transition-transform duration-100 ease-out will-change-transform"
          style={{ transform: `translate3d(0, ${scrollY * 0.1}px, 0)` }}
        />
        <div
          className="absolute bottom-[-10%] right-[10%] w-[700px] h-[700px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen transition-transform duration-100 ease-out will-change-transform"
          style={{ transform: `translate3d(0, -${scrollY * 0.15}px, 0)` }}
        />

        {/* Subtle grid texture overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none"></div>
      </div>

      {/* Navbar */}
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-slate-950/70 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-6'
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center shadow-lg shadow-primary-500/20">
              <Code2 size={20} className="text-white" />
            </div>
            <span className="text-3xl">Sree Durkesh</span>
            <span className="text-primary-400">Portfolio</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.id)}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors hover:scale-105 transform duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button
              onClick={handleDownloadCV}
              className="px-5 py-2.5 text-sm font-bold bg-white/10 hover:bg-white text-white hover:text-slate-900 border border-white/10 hover:border-white rounded-lg transition-all duration-300 backdrop-blur-sm"
            >
              Download CV
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-slate-300 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-slate-950/95 backdrop-blur-xl pt-24 px-6 md:hidden transition-all duration-300">
          <div className="flex flex-col gap-8 text-center">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.id)}
                className="text-2xl font-bold text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button onClick={() => { handleDownloadCV(); setMobileMenuOpen(false); }}
              className="px-6 py-4 text-lg font-bold bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl mt-4 shadow-lg shadow-primary-500/20 cursor-pointer">
              Download CV
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950/50 border-t border-white/5 py-5 relative z-10 backdrop-blur-md">
        <div className="container mx-auto px-2 text-center text-slate-500 text-sm">
          <p className="">&copy; {new Date().getFullYear()} Sree Durkesh. All rights reserved.</p>
          {/* <p>Built with React, Tailwind, and Gemini AI.</p> */}
        </div>
      </footer>
    </div>
  );
};

export default Layout;