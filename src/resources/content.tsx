import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Sheikh",
  lastName: "Muqtasid",
  name: `Sheikh Muqtasid`,
  role: "MERN Stack Developer & Flutter App Developer",
  avatar: "/images/avatar.jpg",
  email: "sheikhmuqtasid@gmail.com",
  location: "Asia/Karachi",
  locationName: "Islamabad/Pakistan",
  languages: ["English", "Urdu"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Weekly insights on full stack development and software engineering</>,
};

const social: Social = [
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

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>MERN Stack & Flutter Developer</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Mental Wellbeing App</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured project
        </Text>
      </Row>
    ),
    href: "/work/mental-wellbeing-app",
  },
  subline: (
    <>
    I craft scalable web applications and cross-platform mobile experiences with precision, modern design, and high performance, transforming ideas into impactful digital solutions that engage users and empower businesses.  </>
  ),
};

const about: About = {
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
    link: "https://calendly.com/sheikh-muqtasid", // Replace with your actual Calendly link
    label: "Schedule Meeting",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I craft scalable web applications and cross-platform mobile experiences with precision, modern design, and high performance, transforming ideas into impactful digital solutions that engage users and empower businesses.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Petalnex",
        timeframe: "Nov 2025 - Present",
        role: "MERN Stack Developer",
        achievements: [
          <>
            Built full-stack web apps using MERN stack (MongoDB, Express, React, Node.js).
          </>,
          <>
            Developed REST APIs for document management systems with role-based access control.
          </>,
          <>
            Implemented secure authentication using JWT and Bcrypt, and designed MongoDB schemas with API validation.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "Freelance Developer",
        timeframe: "2022 - Present",
        role: "MERN Stack & Flutter Developer",
        achievements: [
          <>
            Developed and deployed full-stack web applications using the MERN stack serving clients across various industries.
          </>,
          <>
            Created cross-platform mobile applications with Flutter, delivering seamless user experiences.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "CUST Software Engineering",
        description: <>Studied Computer Science and Software Engineering.</>,
      },
      {
        name: "Online Learning Platforms",
        description: <>Completed courses in modern web development, cloud computing, and DevOps practices.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
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
        tags: [{ name: "Flutter", icon: "flutter" },{ name: "Dart", icon: "dart" }],
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

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
