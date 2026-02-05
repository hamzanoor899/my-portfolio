export type ExperienceItem = {
  company: string;
  role: string;
  start: string;
  end: string;
  location?: string;
  highlights: string[];
  tech?: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Clear Wave IT",
    role: "Next.js Developer",
    start: "03/2025",
    end: "Present",
    location: "Lahore, Pakistan",
    highlights: [
      "Developed scalable web apps using React.js and Next.js (App Router).",
      "Built reusable UI components with Tailwind CSS and integrated REST APIs.",
      "Implemented authentication, role-based access, and protected routes using NextAuth.js.",
      "Integrated PostgreSQL via Prisma ORM and built dashboards with CRUD operations.",
      "Ensured performance, accessibility, and SEO best practices.",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "NextAuth.js",
      "Prisma",
      "PostgreSQL",
      "REST APIs",
    ],
  },
  {
    company: "Forrentech",
    role: "React.js Developer",
    start: "12/2022",
    end: "12/2024",
    location: "Lahore, Pakistan",
    highlights: [
      "Converted Figma and Adobe XD designs into responsive UI components using HTML, CSS, and JavaScript.",
      "Delivered pixel-perfect pages with cross-browser and mobile compatibility.",
      "Optimized performance for faster load times and better UX.",
      "Styled layouts using Tailwind CSS and Bootstrap.",
      "Collaborated with designers and backend developers to deliver on time.",
    ],
    tech: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind",
      "Bootstrap",
      "Figma",
      "REST APIs",
      "Git",
    ],
  },
];
