import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { SKILL_METRICS, EDUCATION_DATA } from '../constants';
import { SectionId } from '../types';
import { Cpu, Globe, Database, Smartphone, GraduationCap } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id={SectionId.SKILLS} className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Chart Side */}
          <div className="order-2 lg:order-1 h-[400px] w-full glass-panel rounded-3xl p-4 md:p-8 flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold text-slate-300 mb-4 self-start flex items-center gap-2">
              <Cpu className="text-primary-400" size={20}/> Technical Proficiency
            </h3>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILL_METRICS}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Proficiency"
                  dataKey="A"
                  stroke="#34d399"
                  strokeWidth={2}
                  fill="#34d399"
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Text & Education Side */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Expertise that <span className="text-primary-400">Scales</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              My technical foundation is built on modern JavaScript ecosystems, robust backend architectures, and efficient database designs. I specialize in unifying fragmented stacks into cohesive, high-performance systems.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-12">
              <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <Globe className="w-6 h-6 text-blue-400 mb-2" />
                <div className="font-bold text-slate-200">Web</div>
                <div className="text-xs text-slate-500">React, Angular, Node.js</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <Smartphone className="w-6 h-6 text-purple-400 mb-2" />
                <div className="font-bold text-slate-200">Mobile</div>
                <div className="text-xs text-slate-500">Ionic, React Native</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <Database className="w-6 h-6 text-green-400 mb-2" />
                <div className="font-bold text-slate-200">Data</div>
                <div className="text-xs text-slate-500">PostgreSQL, Optimization</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <Cpu className="w-6 h-6 text-orange-400 mb-2" />
                <div className="font-bold text-slate-200">AI / LLM</div>
                <div className="text-xs text-slate-500">Gemini, GenAI Integration</div>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-8">
              <h4 className="text-md font-bold text-white mb-4 flex items-center gap-2">
                <GraduationCap className="text-slate-400" /> Education
              </h4>
              <div className="space-y-4">
                {EDUCATION_DATA.map((edu) => (
                  <div key={edu.id}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-200 font-medium">{edu.degree}</span>
                      <span className="text-slate-500 font-mono">{edu.period}</span>
                    </div>
                    <div className="text-slate-400 text-xs">{edu.institution}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;