import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  zavlyer,
  platzi,
  freelance,
  sirvana,
  java,
  python,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Startup Founder",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Argentinian (world champion)",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];


// Aca se cambia todo PAAAAAAAAAAAAA

const experiences = [
  {
    title: "Fullstack Dev & Co-founder",
    company_name: "Zavlyer",
    icon: zavlyer,
    iconBg: "#383E56",
    date: "January 2021 - June 2021",
    points: [
      "It started as a summer idea while I was learning to code at 15 years old. Creating an app for restaurant reservations for our city.",
      "At the age of 15, I was already CTO!!! I developed the frontend using JavaScript and React.js.",
      "I created an admin panel with Node.js, Express.js, and MongoDB where restaurants could upload their menus, and users could make reservations.",
      "It didn't work! In my city, Paraná, Entre Ríos, there are no more than 20 restaurants, so there wasn't much demand.",
    ],
  },
  {
    title: "Self-taught programmer",
    company_name: "Platzi, YouTube, Udemy and forums",
    icon: platzi,
    iconBg: "#E6DEDD",
    date: "December 2021 - August 2022",
    points: [
      "While I was still in high school, I dedicated myself to self-learning frontend and backend programming.",
      "During 2022 I did internships as a frontend programmer at itestudio.com.ar",
      "Participating in code reviews and receiving constructive feedback from other developers.",
      "I also created tons of personal projects during that period.",
    ],
  },
  {
    title: "Sad Freelancer",
    company_name: "santiagoruberto.com",
    icon: freelance,
    iconBg: "#383E56",
    date: "September 2022 - December 2022",
    points: [
      "I created websites for an NGO and a hotel.",
      "Even though I did it while I was in high school and I made money in dollars and it didn't require much effort, I hated it.",
      "I didn't like having to work for irrelevant things.",
      "So I quit because I started my startup :)",
    ],
  },
  {
    title: "Co-founder, CEO, Full stack Developer and The cleaning boy",
    company_name: "Sirvana",
    icon: sirvana,
    iconBg: "#E6DEDD",
    date: "January 2023 - Present",
    points: [
      "We are creating the only possible way to shop with AI (LLM)",
      "Plus, we are creating a website that gathers all the products in the world in one place, which also trains the AI shopping model",
      "So you can find any product, no matter who sells it, at what price, where it is sold, or how rare the product is.",
      "We built an MVP in a month and reached over 8,000 users with this initial test.",
      "Baby we are going to eat the world",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Tesla landing page",
    description:
      "Tesla Lading Page clone with HTML, CSS, JavaScript, Astro y Tailwind.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "astro",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Santiago-Ruberto/landing-tesla",
  },
  {
    name: "Sirvana",
    description:
      "Web application that brings together all the streetwear clothing stores in Argentina in one place. So you can find the best brands without wasting time searching.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://sirvana.com.ar/",
  },
  {
    name: "Eco Urbano",
    description:
      "I made the web page and developed an administrator panel so that they can easily upload the news. The Eco Urbano Foundation is an NGO that since 1994 has been working dedicated to socio-environmental problems through education and communication.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "Elementor",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://ecourbano.org.ar/",
  },
];

export { services, technologies, experiences, testimonials, projects };
