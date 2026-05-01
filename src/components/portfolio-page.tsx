'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Mail, Linkedin, ChevronRight, Sun, Moon, Menu} from 'lucide-react';
import DownArrow from '../components/DownArrow'
import headshot from '../app/assets/headshot.jpg';
import codelab from "../app/assets/codelab.jpg";
import headstarter from "../app/assets/headstarter.jpeg";
import asucd from "../app/assets/asucd.jpeg";
import gg4l from "../app/assets/gg4l_logo.jpeg";
import cstutoring from "../app/assets/cstutoring.jpeg";
import Samudra from "../app/assets/Samudra.png";
import SacHacks from "../app/assets/original.png";
import Equip from "../app/assets/Equip.jpeg";
import Hack_Club from "../app/assets/hack_club.jpeg";
import library from "../app/assets/library.png";
import Voguify from "../app/assets/Voguify.png";
import { link } from 'fs';
import MentalHealth from "../app/assets/MentalHealth.jpg";
import tomorrows_ai from "../app/assets/tomorrows_ai_logo.jpeg";
import american_express from "../app/assets/american_express.png";


const technologies = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/react.svg' },
  { name: 'Node.js', icon: 'https://simpleicons.org/icons/nodedotjs.svg' },
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/sqlite.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/python.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/git.svg' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/firebase.svg' },
  { name: 'Flask', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/flask.svg' },
  { name: 'Java', icon: 'https://simpleicons.org/icons/javascript.svg' },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/html5.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/css3.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/javascript.svg' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/cplusplus.svg' },
  { name: 'Django', icon: 'https://simpleicons.org/icons/django.svg' },
];


const leadershipExperiences = [
  {
    title: 'President',
    organization: 'SacHacks',
    date: 'May 2025 - Present',
    logo: SacHacks.src,
    description: 'Overseeing the strategic direction and execution of SacHacks, leading cross-functional teams, managing university and sponsor relations, and ensuring the success of all organizational initiatives.',
  },
  {
    title: 'Vice President of Logistics & Finance',
    organization: 'SacHacks',
    date: 'Aug 2024 - May 2025',
    logo: SacHacks.src,
    description: 'Coordinated event operations and budget management, handling vendor contracts, venue planning, and financial oversight to ensure a well-resourced and smooth experience for participants and sponsors.',
  },
  {
    title: 'Logistics Director',
    organization: 'CS Tutoring Club at UC Davis',
    date: 'Dec 2023 - Jan 2025',
    description: 'Helped organize professor panels and managed CS tutoring programs, boosting student learning and engagement in CS around campus.',
    logo: cstutoring.src,
  },
  {
    title: 'Co-Founder',
    organization: 'Samudra Home Decor',
    date: 'Nov 2021 - Jun 2024',
    logo: Samudra.src,
    description: 'Co-founded a venture focused on promoting Indian culture through the import of traditional home décor and brass idols. Led supplier onboarding, import logistics, tax coordination, and social media campaigns to grow brand visibility and customer reach.',
  },
  {
    title: 'Equip Fellowship Student',
    organization: 'UC Davis Institute for Innovation and Entrepreneurship',
    date: 'Aug 2023 - Dec 2023',
    logo: Equip.src,
    description: 'Fellowship focused on innovation, design thinking, and career development.',
  },
  {
    title: 'Club President',
    organization: 'Hack Club at Mountain House High School',
    date: 'Jun 2020 - Aug 2023',
    logo: Hack_Club.src,
    description: 'Led initiatives to expand the club\'s impact, including organizing the first hackathon with 150+ student participation and $2k+ in prizes, tech field trips, and outreach events. Provided mentorship, coordinated sponsorships, and served as a school ambassador for Hack Club, fostering a collaborative and tech-driven student community.',
  },
  {
    title: 'Mentor',
    organization: 'Python Programming Classes',
    date: 'Jun 2020 - Aug 2022',
    logo: library.src,
    description: 'Taught Python programming to students in the community each summer, guiding them through building their own projects. Taught over 150+ students, helping them develop a passion for coding and technology.',
  },
]

const projects = [
  {
    title: 'Nutritrack - Nutrition Tracking App (Mobile App)',
    description:
      'Developed a calorie tracking web application that analyzes food photos, provides personalized diet suggestions, and displays a visual history of calorie and nutrient intake. It also features an LLM-powered virtual dietician offering daily updates and personalized guidance.',
    image:
      '',
      github: "https://github.com/Agarwal-Sambhav/NutriTrack",
    technologies: ['Flask', 'Computer Vision', 'Next.js', 'Javascript', 'PostgreSQL'],
    link: '',
  },
  {
    title: 'Vault - Facial Recognition Zoom Authenticator (Web Application)',
    description:
      'Designed an web application to authenticate users through facial recognition enhancing Zoom meeting security. Used Neural Networks and ML Models to match faces and authenticate users.',
    image:
      '',
      github: "https://github.com/Agarwal-Sambhav/secure-meeting-vault",
    technologies: ['Django', 'Neural Networks', 'HTML/CSS', 'Javascript', 'PostgreSQL'],
    link: '',
  },
  {
    title: 'Voguiefy - Fashion Outfit Recommender (Mobile App)',
    description:
      'Developed a cross-platform mobile application using React Native and Firebase that provides personalized outfit recommendations based on the user\'s wardrobe',
    image:
      Voguify.src,
    technologies: ['React Native', 'Tailwind CSS', 'Firebase', 'Expo'],
    github:'https://github.com/GitYaw/Voguify-GDSC',
    link:'https://devpost.com/software/voguify',
  },
  {
    title: 'Fun with Flora (Web Application)',
    description:
      'Developed a Web Application leveraging camera technology to recognize plants, providing insights into their health and rarity with a remarkable 90% success rate. ',
    image:
      '',
      github: "https://github.com/Agarwal-Sambhav/Fun_with_Flora",
    technologies: ['JSON', 'Flask', 'APIs', 'Javascript'],
    link: '',
  },
  {
    title: 'MentalHealth Connect (Web Application)',
    description:
      'Developed a community-focused social platform for students, featuring an AI-driven friend recommendation system, a chat feature, a stress calculator, a friend finder, and a blog for student engagement. It featured an ML-powered friend recommendation system based on K-Nearest Neighbors algorithm trained on 10,000 user profiles.',
    image:
      MentalHealth.src,
      github: "https://github.com/Krigupt/SacHacks",
    technologies: ['JSON', 'Flask', 'APIs', 'Javascript'],
    link: 'https://devpost.com/software/mentalwell-connect',
  },
]

export function PortfolioPage() {
  const [activeSection, setActiveSection] = useState('home')
  const [theme, setTheme] = useState('dark')
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
        <motion.nav
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-6 py-4 flex justify-between items-center relative z-10"
        >
          {/* Hamburger Button for Mobile */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden focus:outline-none z-20"
          >
            <Menu size={24} />
          </button>

          {/* Navigation Links */}
          <div className={`fixed inset-x-0 top-16 md:static ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex md:flex-row md:space-x-6 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} md:bg-transparent p-4 md:p-0 transition-transform duration-300 ease-in-out z-10`}>
            <a href="#about" className={`hover:text-blue-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>About</a>
            <a href="#experience" className={`hover:text-blue-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Experience</a>
            <a href="#projects" className={`hover:text-blue-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Projects</a>
            <a href="#contact" className={`hover:text-blue-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 z-20">
            <a href="mailto:svagarwal@ucdavis.edu" aria-label="Email" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              <Mail size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sambhavagarwal1/" aria-label="LinkedIn" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/Agarwal-Sambhav" aria-label="GitHub" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              <Github size={24} />
            </a>
            
          </div>
        </motion.nav>
      </header>

      <main className="pt-20">
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/3 right-1/3 w-[600px] h-[600px] bg-blue-600 rounded-full opacity-5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-indigo-600 rounded-full opacity-5 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0 pr-8"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">Hey there, I'm</p>
            <h1 className="text-6xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-300 bg-clip-text text-transparent">
                Sambhav Agarwal
              </span>
            </h1>
            <p className={`text-xl mb-3 font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>CS @ UC Davis · Product &amp; Engineering</p>
            <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Building cool tech and solving real-world problems</p>
            <div className="flex gap-4 flex-wrap">
              <motion.a
                href="#experience"
                className="inline-flex items-center bg-blue-500 text-white px-8 py-4 rounded-full hover:bg-blue-600 transition-colors text-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See my experience <ChevronRight className="ml-2" size={20} />
              </motion.a>
              <motion.a
                href="#contact"
                className={`inline-flex items-center px-8 py-4 rounded-full border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-colors text-lg font-medium`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's chat
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 opacity-20 blur-2xl scale-110" />
              <img
                src={headshot.src}
                alt="Sambhav Agarwal"
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-blue-400/60 shadow-2xl shadow-blue-500/20"
              />
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <DownArrow />
        </div>
      </section>
        
  <section id="about" className="py-24 px-6 flex justify-center items-center">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4 text-center">Who I Am</p>
        <h2 className="text-4xl font-bold text-white mb-2 text-center">About Me</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-10 rounded-full"></div>
        <div className="text-center max-w-2xl mx-auto space-y-5">
            <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Computer Science major at UC Davis passionate about building cool tech and solving real-world problems. I thrive in fast-paced environments, enjoy collaborating with driven teams, and am always down for a coffee chat to learn something new or explore new ideas.
            </p>
            <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              My journey spans product management, software engineering, and research — driven by the intersection of business and technology. I love building user-centric solutions, scaling applications, and working with people who are just as excited about their craft as I am.
            </p>
            <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Always building, always learning —{' '}
              <a href="mailto:svagarwal@ucdavis.edu" className="text-blue-400 hover:underline font-medium">let's connect</a>.
            </p>
        </div>

        {/* Technologies section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Technologies I work with</h3>
          <div className="flex flex-wrap gap-6 justify-center">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className={`${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'
                } rounded-full p-3 flex items-center`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-8 h-8 mr-2 filter invert sepia saturate-100 hue-rotate-5"
                />
                <span className="text-sm">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>



    <section id="experience" className={`py-24 px-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
      <div className="max-w-4xl mx-auto">
        <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4 text-center">Where I've Worked</p>
        <h2 className="text-4xl font-bold text-white mb-2 text-center">Experience</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-12 rounded-full"></div>
        <div className="relative">
          <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-1 ${theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
          <div className="space-y-16">
            {[
              { company: 'ASUCD Pantry', role: 'Technical Projects Manager', date: 'Jul 2025 - Present', description: 'Leading a dev team on multiple projects, from scoping and prioritization to delivery, to keep Pantry\'s technical infrastructure growing with the organization.', logo: asucd.src },
              { company: 'American Express', role: 'Product Innovation Intern', date: 'Jun 2025 - Aug 2025', description: 'Conducted a cross-platform analysis of financial aggregator integrations (Yodlee, Plaid) to evaluate UI ownership, data storage models, and risk derivation workflows, identifying differences in integration approaches across teams. Designed and documented a standardized L1 architecture for aggregator integrations, reducing duplication, improving customer consent tracking, and enabling scalable use across multiple business units. Partnered with product, risk, and engineering teams to assess trade-offs, build comparative analysis tables, and present recommendations to senior leadership.', logo: american_express.src },
              { company: 'ASUCD Pantry', role: 'IT Coordinator', date: 'Oct 2024 - Jul 2025', description: 'Launched a volunteer management system for the Pantry, enabling 500+ students and campus entities to sign up, manage shifts, and coordinate operations end-to-end.', logo: asucd.src },
              { company: 'UC Davis Graduate School of Management', role: 'Undergraduate Researcher', date: 'Sep 2024 - Jun 2025', description: 'Worked in Behavioral Research Lab under Dr. Stephen Garcia.', logo: Equip.src },
              { company: 'Tomorrows AI', role: 'Software Engineer Intern', date: 'Sep 2024 - Dec 2024', description: 'Developed scalable database system with Flask & SQL. Built a Next.js front-end integrated with back-end systems. Engineered web scraping for news articles. Helped set up the SEO for pages.', logo: tomorrows_ai.src },
              { company: 'Headstarter AI', role: 'Software Engineering Fellow', date: 'Jul 2024 - Sep 2024', description: 'Developed web applications leveraging React for front-end development, Node.js for server-side logic, and Firebase for real-time database management and authentication. Actively participated in fire chats with AI professionals, gaining valuable insights into the latest developments and opportunities in AI.', logo: headstarter.src },
              { company: 'Codelab', role: 'Software Developer', date: 'Mar 2024 - Jun 2024', description: 'Collaborated with a team to develop a web application combining features of Quizlet and Anki. Built a flashcard management platform using TypeScript and React JS. Designed and implemented database schema using PostgreSQL for optimized data retrieval. Built controllers, utilities, and API endpoints to handle user interactions and data flow.', logo: codelab.src },
              { company: 'ASUCD Pantry', role: 'Software Developer', date: 'Sep 2023 - Mar 2024', description: 'Collaborated with a team of developers at UC Davis Pantry to build a user-friendly e-commerce platform. Used Django, PostgreSQL, and front-end technologies to optimize performance, manage data flow, and enhance the overall user experience.', logo: asucd.src },
              { company: 'Global Grid 4 Learning', role: 'Project Intern', date: 'Jun 2022 - Sep 2022', description: 'Engaged in hands-on work with Data Integration techniques on the CSPA Platform, specializing in user authentication and single sign-on platforms. Deployed applications on the CSPA platform, gaining exposure to the full software application lifecycle from design to deployment.', logo: gg4l.src },
            ].map((job, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 ${theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'} rounded-full`}></div>
                <div className={`ml-8 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} p-6 rounded-lg shadow-lg flex items-start`}>
                  <img src={job.logo} alt={`${job.company} logo`} className="w-16 h-16 mr-4 object-contain rounded-full" />
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-400">{job.company} <span className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-normal`}>{job.role}</span></h3>
                    <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{job.date}</p>
                    <p className="mt-2">{job.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <section id="leadership" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4 text-center">Beyond the Code</p>
            <h2 className="text-4xl font-bold text-white mb-2 text-center">Leadership Journey</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-12 rounded-full"></div>
            <div className="relative">
              {/* Curved path */}
              <svg className="absolute left-1/2 transform -translate-x-1/2 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path
                  d="M50,0 Q75,50 50,100"
                  fill="none"
                  stroke={theme === 'dark' ? '#60A5FA' : '#3B82F6'}
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              
              {/* Leadership boxes */}
              <div className="relative z-10">
                {leadershipExperiences.map((experience, index) => (
                  <motion.div
                    key={index}
                    className={`max-w-lg mx-auto mb-16 ${index % 2 === 0 ? 'ml-0 mr-auto' : 'ml-auto mr-0'}`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 100, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className={`relative ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg overflow-hidden`}>
                      {/* Logo */}
                      <div className="absolute top-0 right-0 w-20 h-20 ">
              
                        <img src={experience.logo} alt={`${experience.organization} logo`} className="w-full h-full object-contain rounded-full" />
                  
                    </div>
                      
                      {/* Content */}
                      <h3 className="text-2xl font-semibold text-blue-400 mb-2">{experience.title}</h3>
                      <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-2`}>{experience.organization}</p>
                      <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-4 text-sm`}>{experience.date}</p>
                      <p className="text-sm">{experience.description}</p>
                      {experience.title === "Co-Founder" && (
                        <a href="https://samudra-usa.com" target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={25} className= "mt-4" />
                        </a>
                      )}
                      
                      {/* Connecting line to the curved path */}
                      <div
                        className={`absolute ${index % 2 === 0 ? 'right-0' : 'left-0'} top-1/2 w-8 h-0.5 ${theme === 'dark' ? 'bg-blue-400' : 'bg-blue-500'}`}
                        style={{ [index % 2 === 0 ? 'right' : 'left']: '-2rem' }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
    </section>

        

    <section id="projects" className="py-24 px-6 flex justify-center items-center">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4 text-center">What I've Built</p>
        <h2 className="text-4xl font-bold text-white mb-2 text-center">Projects</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-12 rounded-full"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              } rounded-lg overflow-hidden shadow-lg`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover transition-transform duration-300 ease-in-out"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-400 mb-2">{project.title}</h3>
                <p
                  className={`mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`${
                        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                      } text-sm rounded-full px-3 py-1`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.div
                    className={`${
                      theme === 'dark'
                        ? 'text-gray-400 hover:text-white'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={24} />
                    </a>
                  </motion.div>
                  <motion.div
                    className={`${
                      theme === 'dark'
                        ? 'text-gray-400 hover:text-white'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {project.link !== '' && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={24} />
                      </a>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
        
        
       
        

        <section id="contact" className="relative py-32 px-6 overflow-hidden bg-gray-900">
          {/* Background orbs */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-700 rounded-full opacity-10 blur-3xl -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-700 rounded-full opacity-10 blur-3xl translate-y-1/2 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-blue-500 rounded-full opacity-5 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          <div className="relative max-w-4xl mx-auto text-center">
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-5">Get In Touch</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Interested in Product<br className="hidden sm:block" /> and Tech?{' '}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Let's chat.
              </span>
            </h2>
            <p className="text-gray-400 text-xl mb-14 max-w-xl mx-auto">
              Always open to new opportunities, collaborations, and good conversations.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
              <motion.a
                href="mailto:svagarwal@ucdavis.edu"
                className="group flex flex-col items-center gap-3 bg-gray-800/60 backdrop-blur border border-gray-700 hover:border-blue-500 rounded-2xl px-12 py-8 transition-all duration-300 cursor-pointer"
                whileHover={{ y: -6 }}
              >
                <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                  <Mail size={26} className="text-blue-400" />
                </div>
                <span className="text-white font-semibold text-lg">Email</span>
                <span className="text-gray-400 text-sm">svagarwal@ucdavis.edu</span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/sambhavagarwal1/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 bg-gray-800/60 backdrop-blur border border-gray-700 hover:border-blue-500 rounded-2xl px-12 py-8 transition-all duration-300 cursor-pointer"
                whileHover={{ y: -6 }}
              >
                <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                  <Linkedin size={26} className="text-blue-400" />
                </div>
                <span className="text-white font-semibold text-lg">LinkedIn</span>
                <span className="text-gray-400 text-sm">sambhavagarwal1</span>
              </motion.a>
            </div>
          </div>

          <div className="relative border-t border-gray-800 pt-8 text-center text-gray-600 text-sm">
            <p>© 2025 Sambhav Agarwal · Built with Next.js & Tailwind CSS</p>
          </div>
        </section>
      </main>

      <motion.button
        className={`fixed bottom-4 right-4 p-2 rounded-full ${theme === 'dark' ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'}`}
        onClick={toggleTheme}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
      </motion.button>
    </div>
  )
}