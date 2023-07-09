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
      'Crafted 25+ scalable components for a leading OTT platform using Storybook, TypeScript, and unit/functional testing.',
      'Integrated user onboarding flow for LR devices with widget architecture and Next JS.',
      'Merged 100+ pull requests on GitHub and resolved 50+ Jira issues.',
      'Assisted in implementing template Redux for internal application "CREW."',
    ],
  },
  {
    title: 'Team Lead',
    company_name: 'Terralogic',
    icon: terralogic,
    iconBg: '#E6DEDD',
    date: 'Dec 2020 - Jan 2022',
    points: [
      'As a part of API integration team, integrated 60 REST APIs for an E-commerce web application, a Tata Steel Project.',
      'Implemented redux from scratch by creating 15+ actions & reducers.',
      "Led the team of 4 members during the manager's absence by interacting with the client and closing 3 major and 5 minor issues.",
      'Helped the team members in resolving the technical issues related to product listing, POST methods/calls, cart functionality, etc.',
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
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
