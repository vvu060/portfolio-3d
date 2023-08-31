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
  nextjs,
  proximity,
  terralogic,
  accenture,
  metaversus,
  liva,
  nike,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Problem Solver',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
];

const experiences = [
  {
    title: 'Software Developer',
    company_name: 'Proximity Tech',
    icon: proximity,
    iconBg: '#383E56',
    date: 'January 2022 - Present',
    points: [
      'Engineered 25+ scalable components for a leading OTT platform, utilizing Storybook, TypeScript, and rigorous testing.',
      'Integrated LR device onboarding with a widget-based architecture in Next JS for an enhanced user flow.',
      'Merged 100+ pull requests and resolved 50+ Jira issues, showcasing collaborative problem-solving on GitHub.',
      'Contributed to implementing template Redux for the "CREW" internal application, elevating state management efficiency.',
    ],
  },
  {
    title: 'Team Lead',
    company_name: 'Terralogic',
    icon: terralogic,
    iconBg: '#E6DEDD',
    date: 'Dec 2020 - Jan 2022',
    points: [
      "Orchestrated the seamless integration of 60 REST APIs into a Tata Steel Project's E-commerce web application, enhancing its functionality and user experience.",
      'Built Redux from scratch with 15+ actions & reducers, enhancing state management efficiency',
      "Led a 4-member team in the manager's absence, resolving 3 major and 5 minor client issues",
      'Aided team members in tackling technical challenges, including product listing, POST methods, and cart functionality.',
    ],
  },
  {
    title: 'Software Developer',
    company_name: 'Accenture',
    icon: accenture,
    iconBg: '#383E56',
    date: 'Aug 2022 - Jan 2019',
    points: [
      'Provided Level 2 production support to 50 users from Société General for BO trading application with a case closure rate of 95% for Service Level Agreement (SLA) cases in a fast-paced environment.',
      'Worked with SQL and Linux in resolving over 300 user issues & update the status on Jira. ',
      'Implemented simple automation using Linux which reduced customer complaints by 20%.',
      'Implemented dashboards in JIRA with key indicators (KPIs) to track work progress which improved closure rate by 20% & saved around 5hrs/day collectively.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Metaversus',
    description:
      'Step into a boundless meta world of endless possibilities and immersive exploration. Experience a virtual realm where creativity, social interaction, and limitless adventure converge.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'framer-motion',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: metaversus,
    source_code_link: 'https://github.com/vvu060/metaversus',
    live_link: 'https://metaversus-black-eight.vercel.app/',
  },
  {
    name: 'Nike',
    description:
      'Discover the world of Nike on our captivating landing page, showcasing the latest in sportswear innovation and iconic classics, all designed to elevate your athletic journey.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'vite',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient',
      },
    ],
    image: nike,
    source_code_link: 'https://github.com/vvu060/nike-landing-page',
    live_link: 'https://nike-landing-page-hoz729sy5-vvu060.vercel.app/',
  },
  {
    name: 'Liva',
    description:
      'This is an E-Commerce web application where farmers, agriculture land owners and farming enthusiasts can buy agriculture products such as seeds, pesticides and machinery online.',
    tags: [
      {
        name: 'reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'commercejs',
        color: 'green-text-gradient',
      },
      {
        name: 'firebase',
        color: 'pink-text-gradient',
      },
    ],
    image: liva,
    source_code_link: 'https://github.com/pesto-students/N3-Liva-Beta1',
    live_link: 'https://liva-3ec01.web.app/',
  },
];

export { services, technologies, experiences, testimonials, projects };
