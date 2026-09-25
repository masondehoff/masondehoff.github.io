export interface Profile {
  name: string
  title: string
  tagline: string
  summary: string
  location: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface ExperienceEntry {
  role: string
  organization: string
  period: string
  bullets: string[]
  tech: string[]
}

export interface EducationEntry {
  institution: string
  credential: string
  period: string
  detail: string
}

export interface Project {
  name: string
  description: string
  tags: string[]
  href?: string
}

export interface LeadershipEntry {
  role: string
  period: string
  description: string
}

export interface ContactInfo {
  email: string
  github: string
  githubHandle: string
  linkedin: string
}

export const profile: Profile = {
  name: 'Mason DeHoff',
  title: 'Software Engineer',
  tagline:
    'Computer Science student at the University of Wyoming building full-stack software',
  summary:
    "I'm a Computer Science student at the University of Wyoming (GPA 3.98, expected graduation Spring 2028) " +
    'with hands-on experience building full-stack software across web, mobile, and enterprise systems. As a ' +
    'Software Engineering Intern at WestEdge and the Wyoming Department of Transportation, I\'ve built internal ' +
    "tools, automated manual workflows, and shipped features used daily by real teams. I'm comfortable moving " +
    'between backend systems like Django and PostgreSQL and modern frontend development with React and ' +
    'TypeScript, with a foundation in algorithms, computer organization, and object-oriented design.',
  location: 'Laramie, WY',
}

export const skillGroups: SkillGroup[] = [
  { category: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'C++', 'Java', 'SQL', 'Go', 'HTML', 'CSS'] },
  {
    category: 'Frameworks & Libraries',
    items: ['React', 'React Native', 'Django', 'Django REST Framework', 'Vite', 'Flutter'],
  },
  { category: 'Tools & Databases', items: ['Git', 'GitHub', 'Linux', 'Bash', 'PostgreSQL', 'Supabase', 'WebSockets'] },
  { category: 'Spoken Languages', items: ['English', 'Spanish (Intermediate)'] },
]

export const experience: ExperienceEntry[] = [
  {
    role: 'Software Engineering Intern',
    organization: 'WestEdge',
    period: 'May 2026 — September 2026',
    bullets: [
      "Developed new features for existing, proprietary software used to manage clients' roadmaps and information.",
      'Connected multiple APIs to automate previously manual processes, significantly improving efficiency for all users.',
      'Contributed to a new mobile app for Wyoming tourism, aimed at attracting visitors with plans to expand to other cities across the U.S.',
    ],
    tech: ['WordPress', 'Vite', 'Chart.js', 'Google APIs', 'Railway', 'Cloudflare', 'Claude'],
  },
  {
    role: 'Software Engineering Intern',
    organization: 'Wyoming Department of Transportation',
    period: 'May 2025 — September 2025',
    bullets: [
      'Built an On-Call Scheduler application to replace a manually maintained spreadsheet, giving Traffic Management Center operators a structured, at-a-glance view of maintenance crew schedules and contact info statewide.',
      'Deployed the application for the 2025 on-call season, receiving highly positive feedback from crews and operators across Wyoming.',
      "Participated in daily standups and cross-team discussions, contributing input and learning from other engineers' experience.",
    ],
    tech: ['Django', 'Django REST Framework', 'Git', 'p5.js', 'WebSockets', 'LDAP', 'DBeaver'],
  },
  {
    role: 'Student Worker / Software Engineer',
    organization: 'University of Wyoming Admissions Office',
    period: 'August 2024 — Present',
    bullets: [
      'Support the admissions team with scripting, Salesforce flow automation, report queries, and test score processing.',
    ],
    tech: ['Python', 'Oracle Database', 'SQL', 'Salesforce API', 'Demand Tools', 'DBeaver'],
  },
]

export const education: EducationEntry[] = [
  {
    institution: 'University of Wyoming',
    credential: 'B.S. Computer Science',
    period: 'In Progress — Expected Spring 2028',
    detail:
      'GPA: 3.98. Relevant coursework: Algorithms, Linux Programming, Computability & Complexity, ' +
      'Calculus I & II, Linear Algebra, Discrete Structures, Software Design, Computer Organization.',
  },
]

export const projects: Project[] = [
  {
    name: 'Daily Bread Mobile App',
    description:
      "A gamified mobile app that reminds users to read their Bible or pray, letting friends encourage " +
      'each other and hold each other accountable.',
    tags: ['React Native', 'TypeScript', 'Supabase', 'PostgreSQL', 'Jest'],
  },
  {
    name: 'Personal Portfolio Website',
    description:
      'A single-page React portfolio site with scroll-synced navigation, a continuous scroll-progress ' +
      'indicator, active-section tracking, and custom motion design — architected to keep resume content ' +
      'separate from UI for easy maintenance.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    href: 'https://github.com/masondehoff/masondehoff.github.io',
  },
  {
    name: 'Poker Hand Simulator',
    description: 'A C++ simulator that runs 1,000 iterations of 5-card poker hands, printing the best hand from each round.',
    tags: ['C++', 'Object-Oriented Programming'],
    href: 'https://github.com/masondehoff/poker-hand-simulator',
  },
]

export const leadership: LeadershipEntry[] = [
  {
    role: 'Varsity Football Captain',
    period: 'Fall 2023',
    description:
      'Voted unanimously by coaches and teammates to serve in this role — led teammates through adversity ' +
      'both on and off the field.',
  },
  {
    role: 'Fellowship of Christian Athletes Huddle Leader',
    period: 'January 2021 — Present',
    description:
      'Mentor younger believers through weekly meetings and yearly camps, meeting with other huddle ' +
      'leaders to share strategies for discipleship.',
  },
]

export const contact: ContactInfo = {
  email: 'masonwyo@gmail.com',
  github: 'https://github.com/masondehoff',
  githubHandle: 'masondehoff',
  linkedin: 'https://www.linkedin.com/in/mason-dehoff-774729328/',
}
