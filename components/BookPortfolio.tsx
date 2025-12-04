import React from 'react';
import * as Icons from 'lucide-react';
import { BOOK_PAGES } from '../constants';
import { SectionId } from '@/types';
import ScrollReveal from './ScrollReveal';

const getIcon = (text: string, explicitIcon?: string) => {
    // First, check explicit icon
    if (explicitIcon) {
        switch (explicitIcon.toLowerCase()) {
            case 'users': return <Icons.Users />;
            case 'scale': return <Icons.Scale />;
            case 'monitorcog': return <Icons.MonitorCog />;
            case 'layout': return <Icons.Layout />;
            case 'zap': return <Icons.Zap />;
            case 'squarecode': return <Icons.SquareCode />;
            case 'award': return <Icons.Award />;
            case 'heart': return <Icons.Heart />;
            case 'search': return <Icons.Search />;
            case 'clipboard': return <Icons.Clipboard />;
            case 'calendar': return <Icons.Calendar />;
            case 'flag': return <Icons.Flag />;
            case 'briefcase': return <Icons.Briefcase />;
            default: return <Icons.BookOpen />;
        }
    }

    // fallback to title matching
    const lower = text.toLowerCase();
    if (lower.match(/\b(led|manage|mentor|supervise|coordinate)\b/)) return <Icons.Users />;
    if (lower.match(/\b(requirement|specification|analysis|client|stakeholder)\b/)) return <Icons.Scale />;
    if (lower.match(/\b(lifecycle|agile|scrum|deployment|ci\/cd|devops)\b/)) return <Icons.MonitorCog />;
    if (lower.match(/\b(architect|design|structure|pattern|framework)\b/)) return <Icons.Layout />;
    if (lower.match(/\b(optimiz|performance|speed|efficient|scalab)\b/)) return <Icons.Zap />;
    if (lower.match(/\b(code|develop|implement|program|build)\b/)) return <Icons.SquareCode />;
    if (lower.match(/\b(award|achievement|recognition)\b/)) return <Icons.Award />;
    if (lower.match(/\b(heart|hobby|interest)\b/)) return <Icons.Heart />;
    return <Icons.BookOpen />;
};


const GlassCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <div
        className={`relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 shadow-lg ${className}`}
    >
        {children}
    </div>
);

const BookPortfolio: React.FC = () => {
    return (
        <section id={SectionId.PORTFOLIO} className="min-h-screen py-16 px-4 pb-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            <div className="max-w-6xl mx-auto flex flex-col gap-12">
                <h1 className="text-4xl md:text-6xl font-extrabold text-center text-primary-400">
                    My Portfolio
                </h1>
                <p className="text-center text-gray-300 max-w-2xl mx-auto text-lg">
                    Explore my journey as a Full-Stack Technical Lead, my achievements, skills, and passions.
                </p>

                {BOOK_PAGES.map((page) => (
                    <ScrollReveal>
                        <GlassCard key={page.id} className="flex flex-col gap-6">
                            {/* Header */}
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 flex items-center justify-center bg-primary-500 rounded-full text-white text-2xl">
                                    {getIcon(page.title, page.icon)}
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white">{page.title}</h2>
                            </div>

                            {/* Sections */}
                            <div className="flex flex-col gap-4">
                                {page.sections.map((sec: any, idx: number) => {
                                    switch (sec.type) {
                                        case 'header':
                                            return (
                                                <h3 key={idx} className="text-lg md:text-xl font-semibold text-primary-400">
                                                    {sec.content}
                                                </h3>
                                            );
                                        case 'text':
                                            return (
                                                <p key={idx} className="text-gray-200 leading-relaxed">
                                                    {sec.content}
                                                </p>
                                            );
                                        case 'stats':
                                            return (
                                                <div key={idx} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                    {sec.items.map((stat: any, j: number) => (
                                                        <div key={j} className="flex flex-col items-center text-center">
                                                            <span className="text-xl md:text-2xl font-bold text-white">{stat.value}</span>
                                                            <span className="text-gray-300 text-sm">{stat.label}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            );
                                        case 'skills':
                                            return (
                                                <div key={idx} className="flex flex-col gap-3">
                                                    {sec.items.map((skill: any, j: number) => (
                                                        <div key={j} className="flex flex-col gap-1">
                                                            <div className="flex justify-between text-gray-200 text-sm font-medium">
                                                                <span>{skill.name}</span>
                                                                <span>{skill.level}%</span>
                                                            </div>
                                                            <div className="w-full h-2.5 bg-white/20 rounded-full overflow-hidden">
                                                                <div
                                                                    className={`h-2.5 rounded-full bg-${skill.color}-500`}
                                                                    style={{ width: `${skill.level}%` }}
                                                                ></div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            );
                                        case 'achievements':
                                            return (
                                                <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {sec.items.map((item: any, j: number) => (
                                                        <div
                                                            key={j}
                                                            className={`p-4 rounded-xl bg-${item.color}-400/20 border border-white/20`}
                                                        >
                                                            <h4 className="text-white font-semibold">{item.title}</h4>
                                                            <p className="text-gray-200 text-sm mt-1">{item.description}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            );
                                        case 'hobbies':
                                            return (
                                                <div key={idx} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                    {sec.items.map((hobby: any, j: number) => (
                                                        <div
                                                            key={j}
                                                            className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/10 border border-white/20"
                                                        >
                                                            <div className="w-10 h-10 flex items-center justify-center bg-primary-500 rounded-full text-white">
                                                                {getIcon(hobby.name, hobby.icon)}
                                                            </div>
                                                            <span className="text-gray-200 text-sm font-semibold">{hobby.name}</span>
                                                            <p className="text-gray-400 text-xs text-center">{hobby.description}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            );
                                        default:
                                            return null;
                                    }
                                })}
                            </div>
                        </GlassCard>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
};

export default BookPortfolio;
