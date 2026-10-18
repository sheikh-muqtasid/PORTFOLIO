import { Line, Row, Text } from "@once-ui-system/core";

const person = {
  firstName: "Sheikh",
  lastName: "Muqtasid",
  name: "Sheikh Muqtasid",
  role: "Custom Website & Full-Stack Developer",
  avatar: "/images/avatar.jpg",
  email: "sheikhmuqtasid@gmail.com",
  location: "Asia/Karachi",
  locationName: "Islamabad, Pakistan",
  languages: ["English", "Urdu"],
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: <>Weekly insights on full stack development and software engineering</>,
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/sheikh-muqtasid",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sheikhmuqtasid",
    essential: true,
  },
  {
    name: "Resume",
    icon: "document",
    link: "/resume.pdf",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "Sheikh Muqtasid — Custom Websites for Businesses",
  description: "Custom-coded, high-performance websites and web applications built with Next.js, React, and Node.js for restaurants, local businesses, and growing startups. Fast, secure, and built to win customers.",
  headline: "I build custom websites that win customers for your business.",
  subline: "Custom-coded with Next.js, React & Node.js for restaurants, local businesses, and startups. No bloated templates — fast, secure, built to convert.",
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Serenity Speak</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured Project
        </Text>
      </Row>
    ),
    href: "/work/mental-wellbeing-app",
  },
};

const services = [
  {
    id: "business-websites",
    title: "Business Websites",
    outcome: "Your 24/7 salesperson that builds trust and wins customers.",
    deliverables: [
      "Custom design tailored to your brand identity",
      "Mobile-perfect responsive layouts on every device",
      "High-converting contact, quote & booking forms",
    ],
    tag: "High Conversion",
  },
  {
    id: "restaurant-websites",
    title: "Restaurant Websites",
    outcome: "Turn hungry online visitors into booked tables and orders.",
    deliverables: [
      "Interactive digital menus & seasonal specials",
      "Seamless table reservation & booking workflows",
      "Google Maps integration, operating hours & appetizing gallery",
    ],
    tag: "Hospitality",
  },
  {
    id: "web-apps",
    title: "Web Apps & Dashboards",
    outcome: "Streamline operations with fast, tailor-made digital tools.",
    deliverables: [
      "Secure client portals & custom booking systems",
      "Intuitive admin panels with real-time analytics",
      "Scalable SaaS MVPs engineered for rapid growth",
    ],
    tag: "Custom SaaS",
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    outcome: "Reach your audience anywhere with cross-platform excellence.",
    deliverables: [
      "Cross-platform iOS and Android apps from a single codebase",
      "Ultra-smooth Flutter performance with native look & feel",
      "Reliable offline storage, push notifications & Firebase sync",
    ],
    tag: "iOS & Android",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery call",
    description: "Free 20-minute call to understand your business goals, target audience, and project scope.",
  },
  {
    step: "02",
    title: "Design mockup",
    description: "You see the design before a single line of final code is written, ensuring perfect alignment.",
  },
  {
    step: "03",
    title: "Build & revisions",
    description: "Clean, performant custom code built to modern standards, with revision rounds included.",
  },
  {
    step: "04",
    title: "Launch & support",
    description: "Deployed to production, speed-optimized, and supported with warranty after go-live.",
  },
];

const testimonials = [
  {
    quote: "[Client testimonial — replace with real quote]",
    clientName: "David Miller",
    company: "The Oak & Ember Bistro",
    role: "Restaurant Owner",
    rating: 5,
  },
  {
    quote: "[Client testimonial — replace with real quote]",
    clientName: "Sarah Jenkins",
    company: "Apex Launch Lab",
    role: "Startup Founder",
    rating: 5,
  },
  {
    quote: "[Client testimonial — replace with real quote]",
    clientName: "Dr. Marcus Vance",
    company: "Vance Dental Care",
    role: "Clinic Director",
    rating: 5,
  },
];

const faqs = [
  {
    question: "How much does a website cost?",
    answer: "Every project is quoted individually based on your specific requirements and scope. Whether you need a focused marketing site or a custom portal, pricing is transparent and always open to discussion.",
  },
  {
    question: "How long does it take?",
    answer: "A typical custom business website takes 2 to 4 weeks depending on scope, page count, and feedback turnaround.",
  },
  {
    question: "Do you provide support after launch?",
    answer: "Yes — post-launch support, bug fixing, and maintenance are available to keep your site fast and secure.",
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Yes — redesigns and rebuilds are welcome. I modernize outdated sites into clean, high-speed custom code that converts visitors.",
  },
];

const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "Flutter", category: "Mobile" },
  { name: "Dart", category: "Language" },
  { name: "Redux", category: "State" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Firebase", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Git", category: "Tooling" },
  { name: "GitHub", category: "Collaboration" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
];

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Islamabad, Pakistan`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/sheikhmuqtasid/30min",
    label: "Schedule a Meeting",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I build high-converting custom websites and web applications for businesses that want to grow. With custom Next.js, Node.js, and Flutter code, I deliver blazing speed, bespoke design, and zero builder bloat.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Petalnex",
        timeframe: "Nov 2025 - Present",
        role: "MERN Stack Developer",
        achievements: [
          <>
            Built and deployed production medical portals (e.g., Dr. O.O. Oduntan Medical Platform) with online booking and patient management.
          </>,
          <>
            Developed REST APIs for document management systems with role-based access control.
          </>,
          <>
            Implemented secure authentication using JWT and Bcrypt, and designed MongoDB schemas with API validation.
          </>,
        ],
        images: [],
      },
      {
        company: "Freelance Developer",
        timeframe: "2022 - Present",
        role: "MERN Stack & Flutter Developer",
        achievements: [
          <>
            Developed and deployed full-stack web applications using the MERN stack serving clients across diverse industries.
          </>,
          <>
            Created cross-platform mobile applications with Flutter, delivering seamless user experiences and native performance.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "CUST Software Engineering",
        description: <>Studied Computer Science and Software Engineering.</>,
      },
      {
        name: "Online Learning Platforms",
        description: <>Completed advanced courses in modern full-stack engineering, cloud architecture, and DevOps practices.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "React.js & Next.js",
        description: <>Building dynamic user interfaces and server-side rendered applications with React and Next.js.</>,
        tags: [{ name: "React", icon: "react" }, { name: "Next.js", icon: "nextjs" }, { name: "Redux", icon: "redux" }],
        images: [],
      },
      {
        title: "Node.js & Express",
        description: <>Developing scalable backend services and REST APIs.</>,
        tags: [{ name: "Node.js", icon: "nodejs" }, { name: "Express", icon: "express" }],
        images: [],
      },
      {
        title: "MongoDB",
        description: <>Designing and managing NoSQL databases.</>,
        tags: [{ name: "MongoDB", icon: "mongodb" }],
        images: [],
      },
      {
        title: "Flutter",
        description: <>Creating cross-platform mobile apps with Flutter and Dart.</>,
        tags: [{ name: "Flutter", icon: "flutter" }, { name: "Dart", icon: "dart" }],
        images: [],
      },
      {
        title: "Other Tools",
        description: <>Using Git, GitHub, Firebase, and JWT for modern development workflows.</>,
        tags: [{ name: "Git", icon: "git" }, { name: "Firebase", icon: "firebase" }],
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

export {
  person,
  social,
  newsletter,
  home,
  services,
  processSteps,
  testimonials,
  faqs,
  techStack,
  about,
  blog,
  work,
  gallery,
};
