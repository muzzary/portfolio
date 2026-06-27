import type { Experience, Project, SkillGroup, Socials } from './types'

/** Outbound contact links. The email here is the public-facing personal address. */
export const SOCIALS: Socials = {
  github: 'https://github.com/muzzary',
  linkedin: 'https://www.linkedin.com/in/muzzarybabar',
  email: 'muzzarybabar@gmail.com',
}

/** Resume file served from /public. Replace with a PDF export when available. */
export const RESUME_URL = '/Muzzary_Babar_Resume.docx'

/** Hero section copy. `roles` cycle through the typing animation. */
export const HERO = {
  greeting: "Hi, I'm",
  name: 'Muzzary Babar',
  roles: [
    'a Software Engineer.',
    1800,
    'a Full-Stack Developer.',
    1800,
    'an AI / ML Engineer.',
    1800,
    'a builder who ships.',
    1800,
  ] as (string | number)[],
  bio: "Computer Science graduate from GCU Lahore who designs, builds, and ships real applications across full-stack web development and AI/ML. I care about clean, tested code and measuring whether what I build actually works.",
  location: 'Lahore, Pakistan',
}

/** About section — multi-paragraph bio. */
export const ABOUT_PARAGRAPHS: string[] = [
  "I'm a software engineer who builds end-to-end products, from a local-first RAG desktop app with a benchmark-driven retrieval pipeline to a full MERN web application with an integrated AI assistant, deployed and live.",
  "I work daily with AI coding assistants and across Python, JavaScript, SQL, REST APIs, and both relational and NoSQL databases. I like measuring results: on one project, a data-driven embedder swap raised hybrid retrieval from 0.50 to 0.92 hit@1.",
  "I enjoy working independently, solving hard problems, and learning quickly in a collaborative team, with a 100% on-time delivery record across freelance engagements for international clients.",
]

/** Grouped technical skills, mirrored from the resume's skills section. */
export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Languages',
    items: [
      { name: 'Python', icon: '🐍' },
      { name: 'JavaScript (ES6+)', icon: '🟨' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'SQL', icon: '🗃️' },
      { name: 'C++', icon: '➕' },
      { name: 'Java', icon: '☕' },
    ],
  },
  {
    category: 'AI / ML',
    items: [
      { name: 'RAG', icon: '🔎' },
      { name: 'Vector Search (pgvector)', icon: '📐' },
      { name: 'Embeddings (ONNX)', icon: '🧠' },
      { name: 'LLM APIs', icon: '🤖' },
      { name: 'scikit-learn', icon: '📊' },
      { name: 'Pandas / NumPy', icon: '🐼' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React 18', icon: '⚛️' },
      { name: 'Tailwind CSS', icon: '🎨' },
      { name: 'HTML5', icon: '📄' },
      { name: 'CSS3', icon: '🎭' },
      { name: 'React Router', icon: '🧭' },
      { name: 'Axios', icon: '🔌' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: '🟩' },
      { name: 'Express', icon: '🚂' },
      { name: 'FastAPI', icon: '⚡' },
      { name: 'REST APIs', icon: '🔗' },
      { name: 'JWT Auth', icon: '🔐' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'pgvector', icon: '📍' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'MySQL', icon: '🐬' },
    ],
  },
  {
    category: 'Testing & Tools',
    items: [
      { name: 'Jest / Supertest', icon: '🧪' },
      { name: 'Git / GitHub', icon: '🔧' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Vercel / Railway', icon: '🚀' },
      { name: 'Linux', icon: '🐧' },
    ],
  },
]

/** Featured projects, ordered by impact. */
export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'CiteFinder',
    meta: 'Local-First RAG Citation Assistant · 2026',
    description:
      "A local-first desktop app that answers questions only from a user's own PDFs, cites the exact file and page, and generates APA/Harvard/IEEE citations. A benchmark-driven embedder swap raised hybrid retrieval from 0.50 to 0.92 hit@1 and 0.72 to 0.94 MRR. Shipped as a one-click Windows installer bundling a portable PostgreSQL + pgvector — no Docker required.",
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'ONNX', 'LLMs'],
    liveUrl: null,
    sourceUrl: 'https://github.com/muzzary/citefinder',
  },
  {
    id: '02',
    title: 'JobTracker',
    meta: 'Full-Stack MERN App with AI Assistant · 2026',
    description:
      'A deployed MERN application helping job seekers track applications on a drag-and-drop Kanban board across five stages. Features a 12-endpoint REST API, JWT auth with bcrypt and rate limiting, an AI resume matcher (0–100 score + missing skills), and an AI assistant that tailors resumes, cover letters, and interview prep. Backed by 20 automated Jest/Supertest tests.',
    technologies: ['React 18', 'Node.js', 'Express', 'MongoDB', 'JWT', 'OpenRouter', 'Jest'],
    liveUrl: 'https://job-tracker-muzzary.vercel.app',
    sourceUrl: 'https://github.com/muzzary/job-tracker',
  },
  {
    id: '03',
    title: 'Sales Automation System',
    meta: 'Final Year Project · 2025–2026',
    description:
      'A three-layer LinkedIn outreach automation pipeline that automates lead discovery, message personalisation, and CRM routing, cutting manual outreach effort by an estimated 80%. Uses an LLM for sentiment and skill-match scoring, with fault-tolerant n8n workflows, retry queues, and error-state handling.',
    technologies: ['Python', 'n8n', 'GPT-4', 'Puppeteer', 'Google Sheets'],
    liveUrl: null,
    sourceUrl: null,
  },
  {
    id: '04',
    title: 'Student Grade Prediction',
    meta: 'Machine Learning Model · 2024',
    description:
      'Trained and compared Decision Tree, SVM, and Random Forest models to predict student grades from academic and behavioural features. Improved accuracy through data cleaning, feature engineering, cross-validation, and hyperparameter tuning, delivered with visualisations and a written performance analysis.',
    technologies: ['Python', 'scikit-learn', 'Pandas', 'Jupyter'],
    liveUrl: null,
    sourceUrl: null,
  },
  {
    id: '05',
    title: 'Cinema Database System',
    meta: 'Academic Project',
    description:
      'A normalized relational database covering movies, bookings, users, and payments. Includes optimized SQL queries, stored procedures, a full ER diagram, and normalization documentation.',
    technologies: ['SQL', 'MySQL', 'ER Design', 'Normalization'],
    liveUrl: null,
    sourceUrl: null,
  },
  {
    id: '06',
    title: 'Online Learning Platform',
    meta: 'System Design · Academic Project',
    description:
      'Full pre-implementation documentation, including an SRS, use-case diagrams, DFDs, and system architecture for an e-learning platform designed to serve 500+ users, applying SDLC and agile planning principles.',
    technologies: ['Software Engineering', 'UML', 'DFD', 'SDLC'],
    liveUrl: null,
    sourceUrl: null,
  },
]

/** Professional experience timeline. */
export const EXPERIENCE: Experience[] = [
  {
    role: 'Software Engineer (Full-Stack Developer)',
    company: 'AlpharexX',
    period: 'Jun 2026 – Present · Remote',
    highlights: [
      'Full-stack web development and backend API development on long-term product vision.',
      'Server deployment & infrastructure management, plus AI integration and model training support.',
      'Performance optimization, database design & maintenance, and bug fixing.',
    ],
  },
  {
    role: 'Independent Freelancer — Software, Web, ML & Database',
    company: 'Self-employed',
    period: '2023 – Present',
    highlights: [
      'Delivered web, database, ML, NLP, and software projects for international clients, remotely from requirements to delivery.',
      'Maintained a 100% on-time delivery record with positive feedback across all engagements.',
      'Managed each project independently, making technical decisions and communicating across time zones.',
    ],
  },
]

/** Navigation links shared by the header (desktop + mobile). */
export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const
