import { ExperienceItem, EducationItem, SkillMetric } from './types';

export const RESUME_SUMMARY = `
Full-Stack Technical Lead specializing in architecting high-traffic web and mobile platforms for international SaaS clients. Lead cross-functional teams through complete product lifecycles from ambiguous requirements to production deployment. Expert in real-time data systems, PostgreSQL optimization, microservices architecture, and GenAI/LLM integration. Proven track record establishing engineering standards and driving architectural decisions that improve performance and development velocity.
`;

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Associate Developer Lead',
    company: 'Vinsinfo, Chennai, TN',
    period: 'Apr 2024 - Present',
    description: 'Led full stack and hybrid mobile development for international clients, owning delivery from requirements to deployment. Delivered high-priority projects under tight deadlines, improved PostgreSQL performance, and established teamwide coding standards. Drove technical strategy, cross-team alignment, and consistent engineering best practices.',
    tech: ['Architecture', 'Team Leadership', 'Full Stack', 'PostgreSQL', 'Microservices', 'React Native']
  },
  {
    id: 'exp-2',
    role: 'Senior Full-Stack Developer',
    company: 'Vinsinfo, Chennai, TN',
    period: 'Apr 2023 - Mar 2024',
    description: 'Architected enterprise applications for high-concurrency users. Led team building a real-time collaboration platform with CRDT-based conflict resolution. Developed production REST APIs integrating OpenAI GPT for meeting summarization and action-item extraction. Oversaw full project execution from architecture to production.',
    tech: ['Angular', 'Node.js', 'React', 'TypeScript', 'PostgreSQL', 'Ionic', 'Electron', 'Python']
  },
  {
    id: 'exp-3',
    role: 'Associate Software Developer',
    company: 'Vinsinfo, Chennai, TN',
    period: 'Apr 2021 - Mar 2023',
    description: 'Developed production Angular apps with authentication, data visualization, and real-time updates. Built Node.js/Express REST APIs with JWT authentication and rate limiting. Delivered Ionic/Angular hybrid mobile apps with offline-first architecture using IndexedDB and SQLite.',
    tech: ['HTML/CSS', 'JavaScript', 'Angular', 'Express']
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
  { subject: "Frontend (React / Angular)", A: 95, fullMark: 100 },
  { subject: "Backend (Node / Python)", A: 92, fullMark: 100 },
  { subject: "Database (PostgreSQL)", A: 88, fullMark: 100 },
  { subject: "Mobile (Ionic / React Native)", A: 90, fullMark: 100 },
  { subject: "Leadership & Delivery", A: 87, fullMark: 100 }
];


export const LEADERSHIP_POINTS = [
  "Define the technical direction for multi-platform systems, ensuring architecture stays scalable and easy to maintain as the product grows.",
  "Coordinate designers, QA, and cloud teams to deliver large-scale applications with predictable velocity and controlled risk.",
  "Turn unclear business requirements into solid system designs, domain models, integration contracts, and clear execution plans.",
  "Oversee the full delivery lifecycle from architecture to deployment, ensuring performance, security, and reliability standards are consistently upheld.",
  "Elevate engineering quality through structured reviews, coding standards, paired design sessions, and continuous mentoring.",
  "Optimize systems end-to-end, from database indexing strategies to frontend rendering pipelines, removing bottlenecks before they surface.",
  "Manage direct communication with international stakeholders, aligning delivery timelines and scope."
];

export const KEY_ACHIEVEMENTS = [
  "Built a system that turns LiDAR data into live parking insights.",
  "Created a collaboration tool for smooth, conflict-free team editing.",
  "Automated meeting summaries and action tracking with AI.",
  "Set team standards for code, sprints, and architecture.",
  "Optimized databases for faster queries and lower load.",
  "Designed scalable modules to speed up feature delivery."
];

export const BOOK_PAGES = [
  {
    id: 'page-1',
    title: 'About Me',
    icon: 'user',
    sections: [
      {
        type: 'header',
        content: 'Full-Stack Technical Lead'
      },
      {
        type: 'text',
        content: 'A Full Stack Technical Lead with more than four years of experience building and scaling high-traffic web and mobile platforms for international SaaS products. Known for turning complex and often shifting business requirements into clean, scalable technical architectures that hold up in real production environments.'
      },
      {
        type: 'stats',
        items: [
          { value: '4+', label: 'Years Experience' },
          { value: '50+', label: 'Projects Delivered' },
          { value: '10+', label: 'Team Members Led' },
          { value: '100%', label: 'Client Satisfaction' }
        ]
      }
    ]
  },
  {
    id: 'page-2',
    title: 'Leadership & Impact',
    icon: 'award',
    sections: [
      {
        type: 'header',
        content: 'Key Achievements'
      },
      {
        type: 'achievements',
        items: [
          {
            title: 'Real-Time Parking Intelligence',
            description: 'Built a system that turns LiDAR data into live parking insights for smart cities.',
            color: 'yellow'
          },
          {
            title: 'AI-Powered Meeting Assistant',
            description: 'Automated meeting summaries and action tracking with AI integration.',
            color: 'blue'
          },
          {
            title: 'Cross-Platform App Development',
            description: 'Built high-performance cross-platform web and mobile applications from scratch.',
            color: 'red'
          },
          {
            title: 'Engineering Standards',
            description: 'Established team coding standards and architectural best practices.',
            color: 'purple'
          }
        ]
      }
    ]
  },
  {
    id: 'page-4',
    title: 'Work Approach',
    icon: 'briefcase',
    sections: [
      {
        type: 'header',
        content: 'Core Practices & Methodologies'
      },
      {
        type: 'hobbies',
        "items": [
          { name: "Requirement Gathering", description: "Collaborating with stakeholders to define clear project goals", icon: "clipboard" },
          { name: "Analyzation", description: "Breaking down complex problems into manageable tasks", icon: "search" },
          { name: "Planning", description: "Creating detailed roadmaps and strategies for project execution", icon: "calendar" },
          { name: "Kickstart Projects", description: "Setting up projects with best practices from the start", icon: "flag" }
        ]
      },
      {
        type: 'text',
        content: "I follow a structured approach combining analysis, planning, and execution to ensure projects deliver maximum impact."
      }
    ]
  }
];

export const RESUME_DRIVE_LINK = "https://drive.google.com/file/d/1r-009bGC1XcqtZiPJ0Q5UEm2zhywXHXv/view?usp=drive_link";


export const SYSTEM_INSTRUCTION = `
You are an AI assistant living in the portfolio website of an Full-Stack Technical Lead.
Your name is "Portfolio AI".

The candidate's resume data is as follows:
Summary: ${RESUME_SUMMARY}
Experience: ${JSON.stringify(EXPERIENCE_DATA)}
Education: ${JSON.stringify(EDUCATION_DATA)}
Key Responsibilities: ${JSON.stringify(LEADERSHIP_POINTS)}

The candidate specializes in:
- Architecting real-time web and mobile platforms for SaaS clients
- Leading cross-functional teams through complete product lifecycles
- Real-time data systems, PostgreSQL optimization, microservices
- GenAI/LLM integration and modern full-stack development

Most production work is under NDA with international clients. The portfolio showcases personal projects demonstrating similar technical approaches.

Your goal is to answer visitor questions about the candidate's experience, skills, and background professionally and concisely.
Keep answers under 3 sentences unless asked for detail.
Highlight their leadership and architectural skills.
If asked about contact info, suggest using the contact section on the site.
`;