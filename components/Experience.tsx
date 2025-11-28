import React from 'react';
import { Calendar, Briefcase, ChevronRight, Award, Zap, Layout, Users } from 'lucide-react';
import { EXPERIENCE_DATA, LEADERSHIP_POINTS } from '../constants';
import { SectionId } from '../types';

const Experience: React.FC = () => {
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
              <div key={idx} className="glass-panel p-6 rounded-xl border-t border-slate-800 hover:border-secondary-500/50 transition-colors group">
                <div className="w-10 h-10 bg-secondary-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary-500/20 transition-colors">
                  {idx % 3 === 0 ? <Zap className="w-5 h-5 text-secondary-400" /> : 
                   idx % 3 === 1 ? <Users className="w-5 h-5 text-secondary-400" /> : 
                   <Layout className="w-5 h-5 text-secondary-400" />}
                </div>
                <p className="text-slate-300 leading-relaxed text-sm">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Professional Journey</h2>
          
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-24 bottom-0 w-px bg-slate-800 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {EXPERIENCE_DATA.map((job, index) => (
              <div key={job.id} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-slate-950 border-4 border-primary-500 transform -translate-x-1.5 md:-translate-x-1/2 mt-1.5 z-10"></div>

                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-1/2 px-0 md:px-8">
                  <div className="glass-panel p-8 rounded-2xl hover:bg-slate-900/80 transition-all duration-300 border-l-4 border-primary-500/50 hover:border-primary-500">
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
                        <span key={i} className="text-xs font-medium text-slate-300 bg-slate-800 border border-slate-700 px-2 py-1 rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Spacer for alignment */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;