export const profile = {
  name: "Peter Afolabi",
  fullName: "Peter Abiola Afolabi",
  role: "Full-Stack Software Engineer",
  location: "Lagos, Nigeria",
  email: "afolabipeter49@gmail.com",
  phone: "+234 816 927 1036",
  phoneHref: "tel:+2348169271036",
  linkedin: "https://linkedin.com/in/peteraafolabi",
  github: "https://github.com/McPherson49",
  cv: "/Peter_Afolabi_CV.pdf",
};

export const stats = [
  { value: "4+", label: "Years shipping production software" },
  { value: "5+", label: "Platforms built end to end" },
  { value: "1,000+", label: "Downloads on Google Play" },
  { value: "4.3/5", label: "GreenMarket NG app rating" },
];

export type Project = {
  slug: string;
  title: string;
  name: string;
  year: string;
  category: string;
  role: string;
  stack: string[];
  summary: string;
  points: string[];
  href?: string;
  linkLabel?: string;
  /** Screenshot in /public/projects; falls back to a drawn mock-up when absent. */
  image?: string;
  kind: "web" | "mobile";
  accent: string;
  tint: string;
};

export const projects: Project[] = [
  {
    slug: "greenmarket",
    title: "GreenMarket",
    name: "GreenMarket NG",
    year: "2025",
    category: "Agro-commerce marketplace · Web + Android",
    role: "Full-stack, front end & back end",
    stack: ["React", "Node.js", "REST APIs", "Android", "Escrow payments"],
    summary:
      "A marketplace where Nigerian farmers and vendors sell agro-products and buyers order produce for delivery. Live on Google Play with 1,000+ downloads and a 4.3/5 rating.",
    points: [
      "Built the web front end, back-end APIs, database and the Android app",
      "Escrow payment flow that protects buyers and sellers",
      "Referral system, user accounts and seller listings",
    ],
    href: "https://www.greenmarket.com.ng",
    linkLabel: "greenmarket.com.ng",
    image: "/projects/greenmarket.jpg",
    kind: "mobile",
    accent: "#3f8f4f",
    tint: "#e4efe2",
  },
  {
    slug: "gigitright",
    title: "Gigitright",
    name: "Gigitright",
    year: "2026",
    category: "Freelance talent marketplace",
    role: "Full-stack",
    stack: ["Next.js", "TypeScript", "Node.js", "Payments"],
    summary:
      "A two-sided marketplace connecting clients with verified freelancers, with gig browsing, freelancer profiles and skill-based applications.",
    points: [
      "Job posting, hiring and secure payment workflows",
      "Freelancer profiles and skill-based applications",
    ],
    href: "https://www.gigitright.com",
    linkLabel: "gigitright.com",
    image: "/projects/gigitright.jpg",
    kind: "web",
    accent: "#5b4fd6",
    tint: "#e7e5f8",
  },
  {
    slug: "vestq",
    title: "VestQ",
    name: "VestQ",
    year: "2026",
    category: "Digital investment platform",
    role: "Full-stack",
    stack: ["React", "Next.js", "Financial APIs"],
    summary:
      "Responsive interfaces and back-end integrations that let users invest in financial products and track portfolio growth.",
    points: ["Investment flows and portfolio tracking", "Financial API integrations"],
    kind: "web",
    accent: "#1f6f8b",
    tint: "#dfecf1",
  },
  {
    slug: "struxhr",
    title: "StruxHR",
    name: "StruxHR",
    year: "2026",
    category: "HR management platform",
    role: "Two-person team, shared full-stack ownership",
    stack: ["React", "TypeScript", "REST APIs"],
    summary:
      "An HR platform for workforce operations. I built responsive interfaces, core workforce features and the API integrations behind them.",
    points: ["Core workforce-operations features", "Role-aware interfaces and API integrations"],
    kind: "web",
    accent: "#b4542d",
    tint: "#f3e3da",
  },
  {
    slug: "dorchester",
    title: "Dorchester",
    name: "Dorchester Home Services",
    year: "2024",
    category: "UK home-services platform",
    role: "Sole developer",
    stack: ["React", "PHP", "MySQL"],
    summary:
      "A UK platform matching home-service help workers with clients. I built all of it, from the React front end to the PHP/MySQL back end and data model.",
    points: ["Worker–client matching", "Full data model and back end"],
    href: "https://dorchestercsltd.co.uk",
    linkLabel: "dorchestercsltd.co.uk",
    kind: "web",
    accent: "#2d4a7a",
    tint: "#e0e6f0",
  },
  {
    slug: "childville",
    title: "Child Ville",
    name: "Child Ville",
    year: "2024",
    category: "School management system",
    role: "Sole developer",
    stack: ["PHP", "MySQL"],
    summary:
      "A complete school management system, including schema design, an admin portal with role-based access for staff, and core administrative workflows.",
    points: ["Role-based admin portal for staff", "Schema design and admin workflows"],
    href: "https://childvillecentre.com",
    linkLabel: "childvillecentre.com",
    image: "/projects/childville.jpg",
    kind: "web",
    accent: "#c58a1c",
    tint: "#f5ecd6",
  },
  {
    slug: "intercity",
    title: "Intercity",
    name: "Intercity",
    year: "2024",
    category: "Logistics & travel platform",
    role: "Front end & back end",
    stack: ["Next.js", "Laravel"],
    summary:
      "Core parcel-delivery and interstate trip-booking features across a Next.js front end and a Laravel back end.",
    points: ["Parcel delivery flows", "Interstate trip booking"],
    href: "https://intercity.ng",
    linkLabel: "intercity.ng",
    image: "/projects/intercity.jpg",
    kind: "web",
    accent: "#8a2d4f",
    tint: "#f1dfe6",
  },
];

export const experience = [
  {
    role: "Front-End Developer",
    company: "TechMill Resources",
    place: "Lagos (Hybrid)",
    dates: "Oct 2025 – Present",
    points: [
      "Build component-driven, responsive interfaces for internal and client-facing platforms with React, Next.js, TypeScript and Tailwind CSS.",
      "Integrate RESTful APIs and manage application state to ship reliable, data-driven features.",
      "Scope, ship and iterate on features with product and engineering in Agile sprints.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "T40 Limited",
    place: "Remote",
    dates: "Jan 2025 – May 2025",
    points: [
      "Owned features across the stack: designed and built APIs and back-end services, and the user workflows that consume them.",
      "Delivered end-to-end features combining responsive UIs with dependable server-side logic.",
    ],
  },
  {
    role: "Web & App Developer",
    company: "Reaphsoft Systems Ltd",
    place: "Remote",
    dates: "Mar 2024 – Dec 2024",
    points: [
      "Built full-stack web and app features with React on the front end and PHP/MySQL on the back end.",
      "Shipped responsive, cross-browser products and integrations for clients in the UK and Nigeria.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "CDLP Hub",
    place: "Remote",
    dates: "Dec 2023 – Mar 2024",
    points: ["Built responsive front ends together with back-end APIs and data handling for web platforms."],
  },
  {
    role: "Software Developer",
    company: "Savertech Limited (Fintech)",
    place: "Ibadan",
    dates: "2022 – Jan 2024",
    points: [
      "Started in back-end engineering and moved across the stack, owning fintech features end to end.",
      "Integrated payment, utility and financial APIs into production; built UIs in JavaScript, React and Vue.js.",
      "Maintained and improved live features in an Agile team using Git-based workflows.",
    ],
  },
];

export const skills = [
  { group: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "PHP", "SQL", "HTML5", "CSS3"] },
  {
    group: "Front end",
    items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Accessible UI", "State management"],
  },
  { group: "Back end", items: ["Node.js", "Nest.js", "Laravel", "REST API design", "Auth & RBAC"] },
  { group: "Mobile", items: ["Android development", "Google Play releases"] },
  { group: "Databases", items: ["MySQL", "MongoDB", "Schema design", "Query optimisation"] },
  {
    group: "Payments & APIs",
    items: ["Payment gateways", "Escrow workflows", "Utility & financial APIs"],
  },
  {
    group: "Delivery",
    items: ["Git", "GitHub", "Bitbucket", "CI/CD", "Deployment", "Code review", "Agile/Scrum"],
  },
];

export const marqueeTech = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Nest.js",
  "Laravel",
  "Vue.js",
  "Tailwind CSS",
  "MySQL",
  "MongoDB",
  "Android",
  "REST APIs",
];
