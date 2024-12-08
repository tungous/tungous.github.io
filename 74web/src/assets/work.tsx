// assets/work.ts
export interface WorkItem {
  month: string;
  year: number;
  title: string;
  projectId: string;
}

export const workItems: WorkItem[] = [
  {
    month: "June",
    year: 2024,
    title: "Seventyfour: Media",
    projectId: "seventyfour-media",
  },
  {
    month: "June",
    year: 2024,
    title: "Turning a Blind Eye - Short film (WIP)",
    projectId: "turning-blind-eye",
  },
  {
    month: "June",
    year: 2024,
    title: "Seventyfour: Silver - Jewelry Project",
    projectId: "seventyfour-silver",
  },
  {
    month: "May",
    year: 2024,
    title: "Seventyfour: Begin - Establishment",
    projectId: "seventyfour-begin",
  },
  {
    month: "March",
    year: 2024,
    title: "Trai He Ve Nguon - Rebrand",
    projectId: "trai-he-ve-nguon",
  },
  {
    month: "November",
    year: 2023,
    title: "Sombre Mood - Short film",
    projectId: "sombre-mood",
  },
  {
    month: "June",
    year: 2023,
    title: "Seventyfour: Initial idea - Short trailer",
    projectId: "seventyfour-initial",
  },
];

export const projectsData = {
  "seventyfour-media": {
    projectName: "Seventyfour: Media",
    description:
      "Media production and content creation division of Seventyfour",
    creatives: [
      { role: "Creative Director", name: "Your Name" },
      { role: "Producer", name: "Team Member" },
    ],
    link: "https://player.vimeo.com/video/958547140",
    text: "Sometimes type shit is type shitting so uknow the type shit is type shit it is type shit yeah",
  },
  "turning-blind-eye": {
    projectName: "Turning a Blind Eye",
    description: "Work in progress short film exploring human perception",
    creatives: [
      { role: "Director", name: "Your Name" },
      { role: "Cinematographer", name: "Team Member" },
    ],
    link: "https://player.vimeo.com/video/958547140",
    text: "trypeshit",
  },
  "seventyfour-silver": {
    projectName: "Seventyfour: Silver",
    description: "Contemporary jewelry design project",
    creatives: [
      { role: "Designer", name: "Your Name" },
      { role: "Artisan", name: "Team Member" },
    ],
    link: "https://player.vimeo.com/video/958547140",
    text: "trypeshit",
  },
  "seventyfour-begin": {
    projectName: "Seventyfour: Begin",
    description: "Establishment and brand launch of Seventyfour",
    creatives: [
      { role: "Founder", name: "Your Name" },
      { role: "Brand Designer", name: "Team Member" },
    ],
    link: "https://player.vimeo.com/video/958547140",
    text: "trypeshit",
  },
  "trai-he-ve-nguon": {
    projectName: "Trai He Ve Nguon",
    description: "Brand identity redesign project",
    creatives: [
      { role: "Brand Director", name: "Your Name" },
      { role: "Designer", name: "Team Member" },
    ],
    link: "https://player.vimeo.com/video/958547140",
    text: "trypeshit",
  },
  "sombre-mood": {
    projectName: "Sombre Mood",
    description: "Atmospheric short film exploring emotional landscapes",
    creatives: [
      { role: "Director", name: "Your Name" },
      { role: "Producer", name: "Team Member" },
    ],
    link: "https://player.vimeo.com/video/958547140",
    text: "trypeshit",
  },
  "seventyfour-initial": {
    projectName: "Seventyfour: Initial idea",
    description: "Original concept trailer for Seventyfour",
    creatives: [
      { role: "Creative Director", name: "Your Name" },
      { role: "Editor", name: "Team Member" },
    ],
    link: "https://player.vimeo.com/video/958547140",
    text: "trypeshit",
  },
};
