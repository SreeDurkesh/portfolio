import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Briefcase, ChevronRight, Award, Zap, Layout, Users, Cpu, SquareCode, Scale, MonitorCog, Database, FileText, Network, Palette, Shield, TestTube, BrainCircuit, Waypoints } from 'lucide-react';
import { EXPERIENCE_DATA, KEY_ACHIEVEMENTS, LEADERSHIP_POINTS } from '../constants';
import { SectionId } from '../types';
import ScrollReveal from './ScrollReveal';

const Experience: React.FC = () => {
  const getIcon = (text: string) => {
    const lowerText = text.toLowerCase();

    // Leadership & Team Management
    if (lowerText.match(/\b(led|manage|mentor|supervise|coordinate)\b/))
      return <Users />;

    // Requirements & Planning
    if (lowerText.match(/\b(requirement|specification|analysis|client|stakeholder)\b/))
      return <Scale />;

    // Development Lifecycle & Process
    if (lowerText.match(/\b(lifecycle|agile|scrum|deployment|ci\/cd|devops)\b/))
      return <MonitorCog />;

    // Architecture & Design
    if (lowerText.match(/\b(architect|design|structure|pattern|framework)\b/))
      return <Layout />;

    // Performance & Optimization
    if (lowerText.match(/\b(optimiz|performance|speed|efficient|scalab)\b/))
      return <Zap />;

    // Coding & Development
    if (lowerText.match(/\b(code|develop|implement|program|build)\b/))
      return <SquareCode />;

    // Sprints
    if (lowerText.match(/\b(sprint|sprints|requirment)\b/))
      return <Waypoints />;

    // Database
    if (lowerText.match(/\b(database|sql|query|storage|databases)\b/))
      return <Database />;

    // API & Integration
    if (lowerText.match(/\b(api|integration|rest|graphql|endpoint)\b/))
      return <Network />;

    // Testing & Quality
    if (lowerText.match(/\b(test|quality|debug|bug|fix)\b/))
      return <TestTube />;

    // Security
    if (lowerText.match(/\b(security|authentication|authorization|encrypt)\b/))
      return <Shield />;

    // UI/UX & Frontend
    if (lowerText.match(/\b(ui|ux|interface|frontend|responsive)\b/))
      return <Palette />;

    // Documentation
    if (lowerText.match(/\b(document|documentation|guide|manual)\b/))
      return <FileText />;

    // AUTOMATED
    if (lowerText.match(/\b(automated|automation|AI|virtual)\b/))
      return <BrainCircuit />;

    // Default fallback
    return <Cpu />;
  };
  return (
    <section id={SectionId.EXPERIENCE} className="py-24 relative bg-slate-950/50">
      <div className="container mx-auto px-6">
        {/* Leadership Highlights */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Leadership & Strategy</h2>
              <div className="h-1 w-20 bg-secondary-500 rounded"></div>
            </div>
            <p className="text-slate-400 mt-4 md:mt-0 max-w-lg text-sm md:text-right">
              Bridging the gap between complex business requirements and scalable technical execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEADERSHIP_POINTS.slice(0, 6).map((point, idx) => (
              <ScrollReveal>
                <div key={idx} className="glass-panel p-6 rounded-xl border-t border-slate-800 hover:border-secondary-500/50 transition-colors group">
                  <div className="w-10 h-10 bg-secondary-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary-500/20 transition-colors">
                    {getIcon(point)}
                  </div>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    {point}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Key Roles Played — Pillars */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Roles Played</h2>
              <div className="h-1 w-20 bg-secondary-500 rounded"></div>
            </div>
            <p className="text-slate-400 mt-4 md:mt-0 max-w-lg text-sm md:text-right">
              Delivering scalable technical solutions that drive business outcomes.
            </p>
          </div>

          {/* Pillars Grid - paired */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {KEY_ACHIEVEMENTS.reduce((rows, point, idx) => {
              if (idx % 2 === 0) rows.push([point]);
              else rows[rows.length - 1].push(point);
              return rows;
            }, []).map((pair: any, rowIdx: number) => (
              pair.map((point: string, colIdx: number) => (
                <ScrollReveal>
                  <div
                    key={`${rowIdx}-${colIdx}`}
                    className="bg-slate-900/60 backdrop-blur-xl p-6 rounded-3xl border border-slate-800 shadow-lg flex items-start gap-4 items-center"
                  >
                    <div className="w-12 h-12 bg-secondary-500/20 rounded-xl flex items-center justify-center text-white text-xl">
                      {getIcon(point)}
                    </div>
                    <p className="text-sm sm:text-base text-slate-200">{point}</p>
                  </div>
                </ScrollReveal>
              ))
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Professional Journey</h2>

          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-24 bottom-0 w-px bg-slate-800 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {EXPERIENCE_DATA.map((job, index) => {
              const [isVisible, setIsVisible] = useState(false);
              const itemRef = useRef<HTMLDivElement>(null);

              useEffect(() => {
                const observer = new IntersectionObserver(
                  ([entry]) => {
                    if (entry.isIntersecting) {
                      setIsVisible(true);
                    }
                  },
                  { threshold: 0.3 }
                );

                if (itemRef.current) {
                  observer.observe(itemRef.current);
                }

                return () => observer.disconnect();
              }, []);

              return (
                <div
                  key={job.id}
                  ref={itemRef}
                  className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                  {/* Timeline Dot - Animated */}
                  <div className={`absolute left-4 md:left-1/2 transform -translate-x-1.5 md:-translate-x-1/2 mt-1.5 z-10 transition-all duration-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                    }`}>
                    <div className="relative">
                      {/* Pulsing outer ring */}
                      {isVisible && (
                        <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary-500 animate-ping"
                          style={{ animationDuration: '2s' }}></div>
                      )}
                      {/* Inner dot */}
                      <div className="relative w-4 h-4 rounded-full bg-slate-950 border-4 border-primary-500 shadow-lg shadow-primary-500/50"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="ml-12 md:ml-0 md:w-1/2 px-0 md:px-8">
                    <div className={`glass-panel p-8 rounded-2xl transition-all duration-500 border-l-4 ${isVisible
                      ? 'border-primary-500 bg-slate-900/80 shadow-xl shadow-primary-500/10'
                      : 'border-primary-500/50 bg-slate-900/40'
                      } hover:bg-slate-900/90 hover:shadow-2xl hover:shadow-primary-500/20 hover:scale-[1.02]`}>
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                        <span className="text-xs font-mono text-primary-400 bg-primary-900/20 px-2 py-1 rounded">
                          {job.period}
                        </span>
                        <div className="flex items-center gap-1 text-slate-400 text-sm">
                          <Briefcase size={14} />
                          <span>{job.company}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">{job.role}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {job.tech.map((t, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium text-slate-300 bg-slate-800 border border-slate-700 px-2 py-1 rounded-md hover:border-primary-500/50 hover:bg-slate-750 transition-all duration-200 cursor-pointer"
                            style={{
                              transitionDelay: `${i * 50}ms`,
                              opacity: isVisible ? 1 : 0,
                              transform: isVisible ? 'translateY(0)' : 'translateY(10px)'
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;