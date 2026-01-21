export type ExperienceItem = {
  company: string;
  role: string;
  start: string;
  end: string;
  location?: string;
  highlights: string[];
  tech?: string[];
};

// TODO: Replace with your real experience.
export const experience: ExperienceItem[] = [
  {
    company: "Your Company",
    role: "Frontend Developer",
    start: "2024",
    end: "Present",
    location: "Remote",
    highlights: [
      "Built responsive UI using Next.js + Tailwind.",
      "Collaborated with designers/devs to ship features quickly.",
      "Improved performance and accessibility across key pages.",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
];
