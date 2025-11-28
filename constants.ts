import { ExperienceItem, EducationItem, SkillMetric } from './types';

export const RESUME_SUMMARY = `
Associate Developer Lead with 4+ years of high-impact experience driving architecture, development, and delivery of complex full-stack and hybrid mobile products. 
Deep expertise across React, Angular, Node.js, and cross-platform frameworks (Ionic, Electron, React Native), with a strong record building scalable systems for international clients. 
Adept at leading engineering teams, owning product lifecycles end-to-end, and shaping technical strategy, standards, and best practices. 
Strong foundation in system architecture, PostgreSQL optimization, API design, and GenAI/LLM integration.
`;

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Associate Developer Lead',
    company: 'Vinsinfo, Chennai, TN',
    period: 'Apr 2024 - Present',
    description: 'Led full-stack and hybrid mobile development for international clients. Owned product delivery from requirements to deployment. Delivered high-priority projects on tight deadlines, optimized PostgreSQL performance, and established team coding standards. Drive technical strategy, cross-team coordination, and engineering best practices.',
    tech: ['Architecture', 'Team Leadership', 'Full Stack', 'PostgreSQL Strategy']
  },
  {
    id: 'exp-2',
    role: 'Senior Full-Stack Developer',
    company: 'Vinsinfo, Chennai, TN',
    period: 'Apr 2023 - Mar 2024',
    description: 'Built scalable enterprise apps using Angular/Node.js, hybrid solutions with Ionic/Electron, and optimized backend microservices. Designed high-performance PostgreSQL schemas and led full project execution from architecture to production.',
    tech: ['Angular', 'Node.js', 'React', 'TypeScript', 'PostgreSQL', 'Ionic', 'Electron', 'Python']
  },
  {
    id: 'exp-3',
    role: 'Associate Software Developer',
    company: 'Vinsinfo, Chennai, TN',
    period: 'Apr 2021 - Mar 2023',
    description: 'Completed comprehensive training in front-end technologies including HTML, CSS, JavaScript, and Angular. Collaborated with senior developers to integrate front-end and back-end, assisted in code reviews, debugging, and optimization.',
    tech: ['HTML/CSS', 'JavaScript', 'Angular', 'Debugging']
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Computer Application (BCA)',
    institution: 'University of Madras - Chennai',
    period: '2022 - 2024'
  },
  {
    id: 'edu-2',
    degree: 'Diploma in Computer Engineering (D.COM.E)',
    institution: 'Shesashayee Institute of Technology - Trichy',
    period: '2017 - 2020',
    details: 'Coursework: Robotics, IOT internship in Systech'
  }
];

export const SKILL_METRICS: SkillMetric[] = [
  { subject: 'Frontend (React/Angular)', A: 95, fullMark: 100 },
  { subject: 'Backend (Node/Python)', A: 90, fullMark: 100 },
  { subject: 'Database (PostgreSQL)', A: 85, fullMark: 100 },
  { subject: 'Mobile (Ionic/RN)', A: 88, fullMark: 100 },
  { subject: 'Architecture', A: 80, fullMark: 100 },
  { subject: 'Leadership', A: 85, fullMark: 100 },
];

export const LEADERSHIP_POINTS = [
  "Own architectural decisions and technical direction for complex web, mobile, and cross-platform solutions.",
  "Lead multi-disciplinary teams (UI/UX, cloud, QA) to deliver large-scale applications with predictable velocity.",
  "Translate ambiguous, high-level client requirements into scalable system designs and actionable engineering plans.",
  "Oversee full product lifecycle, ensuring engineering quality, performance, security, and long-term maintainability.",
  "Drive code quality through standards, technical reviews, and mentoring engineers across the team.",
  "Optimize platforms end-to-end - from PostgreSQL performance to frontend rendering runtime efficiency.",
  "Manage direct communication with international stakeholders, aligning delivery timelines and scope."
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant living in the portfolio website of an Associate Developer Lead.
Your name is "Portfolio AI".
The candidate's resume data is as follows:
Summary: ${RESUME_SUMMARY}
Experience: ${JSON.stringify(EXPERIENCE_DATA)}
Education: ${JSON.stringify(EDUCATION_DATA)}
Key Responsibilities: ${JSON.stringify(LEADERSHIP_POINTS)}

Your goal is to answer visitor questions about the candidate's experience, skills, and background professionally and concisely.
Keep answers under 3 sentences unless asked for detail.
Highlight their leadership and architectural skills.
If asked about contact info, suggest using the contact section on the site.
`;