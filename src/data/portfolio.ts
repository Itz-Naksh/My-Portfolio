/**
 * ─────────────────────────────────────────────────────────────
 *  YOUR PORTFOLIO CONTENT
 *  Edit everything about you in this one file. Components read
 *  from here, so you never need to touch them to update content.
 * ─────────────────────────────────────────────────────────────
 */

/* ---------- Types ---------- */

export type SocialPlatform = "github" | "linkedin" | "email";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export type SkillCategoryIcon = "frontend" | "backend" | "tools";

export interface SkillGroup {
  title: string;
  icon: SkillCategoryIcon;
  description: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string; // path inside /public
  tech: string[];
  demoUrl?: string; // omit to hide the "Live Demo" button
  githubUrl?: string; // omit to hide the "GitHub" button
  featured?: boolean; // shows as a large card at the top of Projects
  caseStudySlug?: string; // links to /projects/<slug> (must exist in caseStudies)
}

export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  tech: string[];
  demoUrl?: string;
  githubUrl?: string;
  heroImage: string;
  overview: string[];
  problem: string;
  features: { title: string; description: string }[];
  decisions: { title: string; description: string }[];
  stack: { area: string; choice: string }[];
  gallery: { src: string; alt: string; caption: string }[];
}

export interface TimelineEntry {
  type: "work" | "education";
  title: string;
  organization: string;
  dates: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer?: string; // omit if unknown
  year?: string; // omit if you don't want to show a year
  url?: string; // optional link to the credential (shows a "Verify" button)
  image?: string; // optional certificate picture in /public, e.g. "/images/certificates/claude-101.png"
}

/* ---------- Personal details ---------- */

export const personal = {
  name: "Fathima Naksha Banu",
  initials: "FN",
  role: "Software Engineering Intern",
  // Rotating phrases for the typing animation under your name in the hero
  typingRoles: ["Full-Stack Developer", "PHP & Laravel Developer", "Next.js & React Developer", "Tech + Business Problem Solver"],
  location: "Ampara, Sri Lanka",
  tagline: "Building reliable, database-driven web applications.",
  bio: [
    "I'm a Software Engineering Intern at Alpha Health Group with a background that combines technology, business, and accounting. Before this, I completed a remote full-stack web development internship with Codomax Digital Solutions, working with an India-based team on real-world projects.",
    "Alongside my HND in Information Technology at SLIATE, I'm a BBA undergraduate at the University of Peradeniya and a Member of AAT Sri Lanka (MAAT). This gives me a strong understanding of financial reporting, taxation, and business processes, which helps me build software that solves real business problems.",
    "I enjoy building practical applications, from PHP/Laravel and MySQL systems to modern Next.js apps, and learning how real development teams work. I'm a Student Member of the Computer Society of Sri Lanka (CSSL), and I'm always happy to connect with developers, mentors, and professionals in tech and finance.",
  ],
  seeking: "Software Engineering Intern @ Alpha Health Group",
  currently: "Building web features with Laravel & AJAX at Alpha Health Group",
  email: "fathinaksh14@gmail.com",
  resumeUrl: "/resume.pdf",
  profileImage: "/images/avatar.jpg",
  siteUrl: "https://fathima-naksha.vercel.app", // update after deploying (used for SEO / Open Graph)
};

// Paste your profile links here. Leave a link as "" to hide that icon.
const githubUrl = "https://github.com/Itz-Naksh";
const linkedinUrl = "https://www.linkedin.com/in/fathimanakshabanu";

export const socials: SocialLink[] = [
  { platform: "github" as const, label: "GitHub", href: githubUrl },
  { platform: "linkedin" as const, label: "LinkedIn", href: linkedinUrl },
  { platform: "email" as const, label: "Email", href: `mailto:${personal.email}` },
].filter((social) => social.href !== "");

/* ---------- About stats ---------- */

export const stats: Stat[] = [
  { value: "6+", label: "Projects built" },
  { value: "10+", label: "Technologies" },
  { value: "2+", label: "Years learning IT" },
];

/* ---------- Skills ---------- */

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: "frontend",
    description: "Web fundamentals & modern UI",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend & Database",
    icon: "backend",
    description: "Server logic, schemas & queries",
    skills: ["PHP", "Laravel", "AJAX", "MySQL / SQL", "PostgreSQL", "Prisma", "Schema Design", "C#", "Python"],
  },
  {
    title: "Tools & Other",
    icon: "tools",
    description: "Workflow, support & productivity",
    skills: ["Git", "GitHub", "Vercel", "Claude Code", "Cybersecurity Basics", "Networking & IT Troubleshooting", "MS Office"],
  },
];

/* ---------- Projects ---------- */
// Add demoUrl / githubUrl to a project to show its buttons.

export const projects: Project[] = [
  {
    title: "PayLanka",
    description:
      "Payroll management for Sri Lankan SMEs: EPF/ETF, overtime and no-pay calculations, an approval workflow with pre-approval checks, PDF payslips, CSV reports, audit log, and role-based access.",
    image: "/images/paylanka/dashboard.png",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Auth.js", "Tailwind"],
    demoUrl: "https://paylanka.vercel.app",
    githubUrl: "https://github.com/Itz-Naksh/PayLanka",
    featured: true,
    caseStudySlug: "paylanka",
  },
  {
    title: "CyberAware",
    description:
      "A cybersecurity awareness site with an interactive phishing quiz, an in-browser password-strength checker, and a searchable blog of plain-language security articles.",
    image: "/images/cyberaware.png",
    tech: ["React", "Vite", "React Router", "CSS"],
    demoUrl: "https://cyberaware-mu.vercel.app/",
    githubUrl: "https://github.com/Itz-Naksh/cyberaware",
  },
  {
    title: "Laundry Flow Pro",
    description:
      "A full-stack laundry management system with customer management, order tracking, billing, and reviews, built on custom order-processing logic and database schema. Individual project.",
    image: "/images/laundry-flow-pro.png",
    tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/Itz-Naksh/Laundry-Flow-Pro-",
  },
];

/* ---------- Case studies (detail pages at /projects/<slug>) ---------- */

export const caseStudies: CaseStudy[] = [
  {
    slug: "paylanka",
    title: "PayLanka",
    tagline: "Smart payroll management for Sri Lankan businesses",
    role: "Full-stack developer: design, development, testing and deployment",
    tech: ["Next.js 16", "TypeScript", "PostgreSQL", "Prisma", "Auth.js", "Zod", "Tailwind CSS", "React-PDF", "Recharts", "Vitest"],
    demoUrl: "https://paylanka.vercel.app",
    githubUrl: "https://github.com/Itz-Naksh/PayLanka",
    heroImage: "/images/paylanka/dashboard.png",
    overview: [
      "PayLanka runs a small or medium company's monthly payroll the Sri Lankan way: EPF and ETF, overtime and no-pay leave, a Draft → Review → Approved workflow, PDF payslips, statutory and bank reports, and a full audit trail.",
      "The live demo has one-click sign-in as Admin, HR or Employee, with fictional data that resets every night.",
    ],
    problem:
      "Many Sri Lankan SMEs still run payroll in spreadsheets, where EPF/ETF rules, overtime and no-pay calculations are easy to get wrong and hard to audit. PayLanka makes the calculations consistent, adds approval controls an accountant expects, and produces the reports a business has to file.",
    features: [
      { title: "Configurable statutory rates", description: "EPF 8% / 12%, ETF 3%, overtime and no-pay divisors are stored in the database, not hard-coded." },
      { title: "Monthly payroll with live preview", description: "Enter overtime, no-pay days, allowances and deductions and see each employee's pay update instantly." },
      { title: "Approval workflow", description: "Draft → In review → Approved & locked, with segregation of duties: whoever submits a run can't approve it." },
      { title: "Pre-approval checks", description: "Flags pay changes of 20%+ vs last month, negative pay, very large deductions, joiners, leavers and unusual overtime." },
      { title: "PDF payslips & CSV reports", description: "Payslips with net pay in words, plus payroll summary, EPF/ETF, department cost and bank transfer reports." },
      { title: "Roles & self-service", description: "Admin, HR/Accountant and Employee roles; employees see only their own approved payslips and tax-year totals." },
    ],
    decisions: [
      { title: "Money is never a floating-point number", description: "Amounts are stored as integer cents and rates as basis points, rounded once per component, so every payslip adds up exactly." },
      { title: "One tested calculation module", description: "All pay logic lives in a single pure function used by both the browser preview and the saved figures, covered by 200+ Vitest unit tests." },
      { title: "Approvals locked in the database", description: "PostgreSQL triggers stop approved runs from being edited or deleted, even by direct SQL. Corrections go into a later month." },
      { title: "Security by default", description: "bcrypt passwords, brute-force sign-in protection, server-side role checks on every action, masked bank numbers and CSV formula-injection protection." },
    ],
    stack: [
      { area: "Framework", choice: "Next.js 16 (App Router, Server Components, Server Actions), TypeScript strict" },
      { area: "Database", choice: "PostgreSQL with Prisma" },
      { area: "Auth", choice: "Auth.js v5 (credentials, JWT sessions), bcrypt" },
      { area: "Validation", choice: "Zod, shared between browser and server" },
      { area: "UI", choice: "Tailwind CSS 4, lucide icons, Recharts" },
      { area: "PDFs", choice: "React-PDF" },
      { area: "Tests", choice: "Vitest (200+ unit tests)" },
      { area: "Hosting", choice: "Vercel + Neon" },
    ],
    gallery: [
      { src: "/images/paylanka/payroll-run.png", alt: "PayLanka payroll run screen with pay breakdown", caption: "Payroll run with a per-employee pay breakdown" },
      { src: "/images/paylanka/reports-epf-etf.png", alt: "PayLanka EPF and ETF contributions report", caption: "EPF / ETF contributions report" },
      { src: "/images/paylanka/audit-log.png", alt: "PayLanka audit log", caption: "Audit log of every change and approval" },
      { src: "/images/paylanka/my-payslips.png", alt: "PayLanka employee self-service payslips", caption: "Employee self-service payslips" },
    ],
  },
];

/* ---------- Experience & Education (newest first) ---------- */

export const timeline: TimelineEntry[] = [
  {
    type: "work",
    title: "Software Engineering Intern",
    organization: "Alpha Health Group",
    dates: "Sep 2026 – Present",
    description:
      "Developing and maintaining web application features with Laravel (PHP) and AJAX-powered dynamic pages, following the SDLC and collaborating with the development team on real-world projects.",
  },
  {
    type: "work",
    title: "Full Stack Web Developer Intern",
    organization: "Codomax Digital Solutions · Remote (India)",
    dates: "Aug 2026",
    description:
      "Built front-end and back-end features for full-stack web applications with an India-based team, using version control and team-based project workflows.",
  },
  {
    type: "work",
    title: "Accounts Trainee",
    organization: "Bright Minds Academy",
    dates: "2025 – 2026",
    description: "Assisted with accounts-related tasks, applying foundational knowledge gained through AAT studies.",
  },
  {
    type: "education",
    title: "Higher National Diploma in Information Technology (HNDIT)",
    organization: "Sri Lanka Institute of Advanced Technological Education (SLIATE)",
    dates: "2024 – Present",
    description: "Focus areas include PHP/MySQL web application development and database design.",
  },
  {
    type: "education",
    title: "Bachelor of Business Administration (BBA)",
    organization: "University of Peradeniya",
    dates: "2025 – Present",
    description: "Focus areas include business process management and financial/accounting principles.",
  },
  {
    type: "education",
    title: "AAT Sri Lanka (MAAT)",
    organization: "Association of Accounting Technicians of Sri Lanka",
    dates: "2024 – 2025",
    description: "Passed the AAT Finalist level and became a Member of AAT Sri Lanka (MAAT).",
  },
  {
    type: "education",
    title: "G.C.E. Advanced Level (Commerce)",
    organization: "Mahmud Ladies College, Kalmunai",
    dates: "2020 – 2023",
    description: "Completed the Advanced Level in the Commerce stream.",
  },
];

/* ---------- Certifications ---------- */

export const certifications: Certification[] = [
  { name: "Get Started with Generative AI and Agents in Azure", issuer: "Microsoft", year: "Sep 2026" },
  { name: "Enterprise Security in Practice", issuer: "IBM", year: "Oct 2026", image: "/images/certificates/ibm-security.png" },
  { name: "Introduction to Modern AI", issuer: "Cisco", year: "Sep 2026", image: "/images/certificates/cisco-modern-ai.png" },
  { name: "Claude 101", issuer: "Anthropic", year: "Oct 2026", image: "/images/certificates/claude-101.png", url: "https://academy.claude.com/verify/6beef1dccee4e52644d46b6f6dee242e" },
  { name: "Web Development", issuer: "Sololearn", year: "Oct 2026", image: "/images/certificates/sololearn-web-dev.png", url: "https://www.sololearn.com/certificates/CC-MSHFXHJQ" },
];

/* ---------- Professional memberships ---------- */

export const memberships: Certification[] = [
  { name: "Member (MAAT)", issuer: "AAT Sri Lanka" },
  { name: "Student Member", issuer: "Computer Society of Sri Lanka (CSSL)", year: "Since Aug 2026" },
];

/* ---------- Navigation ---------- */

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];
