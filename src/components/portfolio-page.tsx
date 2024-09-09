'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Mail, Linkedin, Instagram, ChevronRight, Sun, Moon, Phone} from 'lucide-react';
import DownArrow from '../components/DownArrow'
import headshot from '../app/assets/headshot.jpg';
import codelab from "../app/assets/codelab.jpg";
import headstarter from "../app/assets/headstarter.jpeg";
import asucd from "../app/assets/asucd.jpeg";
import gg4l from "../app/assets/gg4l_logo.jpeg";
import cstutoring from "../app/assets/cstutoring.jpeg";
import Samudra from "../app/assets/samudra.png";
import SacHacks from "../app/assets/sachacks.png";
import Equip from "../app/assets/Equip.jpeg";
import Hack_Club from "../app/assets/hack_club.jpeg";
import library from "../app/assets/library.png";
import Voguify from "../app/assets/Voguify.png";


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
    title: 'Logistics Director',
    organization: 'CS Tutoring Club at UC Davis',
    date: 'Dec 2023 - Present',
    description: 'Helped organize a professor panels and managed CS tutoring programs, boosting student learning and engagement in CS around campus.',
    logo: cstutoring.src,
  },
  {
    title: 'Co-Founder',
    organization: ' Samudra Home Decor',
    date: 'September 2022 - Present',
    logo: Samudra.src,
    description: 'Co-founded a venture focused on promoting Indian culture through the imports of intricate Brass idols.',
  },
  {
    title: 'SacHacks',
    organization: 'Logistics Officer ',
    date: 'June 2021 - June 2024',
    logo: SacHacks.src,
    description: 'Directing a 200+ attendee hackathon event in the Sacramento region, overseeing logistics and venue arrangements.',
  },
  {
    title: 'Fellowship Student',
    organization: 'UC Davis Institute for Innovation and Entrepreneurship',
    date: 'Aug 2023 - December 2023',
    logo: Equip.src,
    description: 'Through the UC Davis EQUIP program, I engaged in a profound self-discovery journey that helped me identify and refine my strengths and weaknesses. The program equipped me with valuable tools to excel in leadership roles, internship opportunities, and interviews, allowing me to present myself authentically to prospective employers.',
  },
  {
    title: 'President and Director of Events',
    organization: 'Hackathon Club at Mountain House High School',
    date: 'Aug 2020 - May 2023',
    logo: Hack_Club.src,
    description: 'I hosted many field trips and guest panels at our high school. Additionally, led the initiative to host the first high school hackathon with over 150+ participants and $5000 in prices and resources.',
  },
  {
    title: 'Mentor',
    organization: 'Python Programming classes',
    date: 'June 2020 - Aug 2022',
    logo: library.src,
    description: 'Every summer, I taught a programming language to students in my community. I helped students understand the basics of Python programming and guided them through the process of creating their own projects. In total, I taught over 150+ students, helping them develop a passion for coding and technology.',
  },
]


export function PortfolioPage() {
  const [activeSection, setActiveSection] = useState('home')
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <header className={`fixed top-0 left-0 right-0 z-50  backdrop-blur-sm`}>
        
      <motion.nav
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 5, y: 20 }}
          transition={{ duration: 2 }}
          className="container mx-auto px-6 py-4 flex justify-between items-center"
        >
          <div className="flex space-x-6">
            <a href="#about" className={`hover:text-blue-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>About</a>
            <a href="#experience" className={`hover:text-blue-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Experience</a>
            <a href="#projects" className={`hover:text-blue-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Projects</a>
            <a href="#contact" className={`hover:text-blue-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Contact</a>
          </div>
          {/* <a href="/resume.pdf" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
            Resume
          </a> */}
          <div className="flex space-x-4">
            <a href="svagarwal@ucdavis.edu" aria-label="Email" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
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
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
      <motion.div
        className="md:w-1/2 mb-8 md:mb-0 pr-8"
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: 2, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-bold mb-4">
          Hey there! I'm
          <br />
          <span className="text-blue-400 text-7xl">Sambhav Agarwal</span>
        </h1>
        <p className="text-2xl mb-8">I like creating websites, apps, and turning ideas into code</p>
        <motion.a
          href="#experience"
          className="inline-flex items-center bg-blue-500 text-white px-8 py-4 rounded-full hover:bg-blue-600 transition-colors text-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          See my experience <ChevronRight className="ml-2" size={24} />
        </motion.a>
      </motion.div>

      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={headshot.src}
          alt="3D Cube"
          className="w-96 h-96 object-cover rounded-full border-4  border-blue-400"
          
        />
      </motion.div>
    </div>

    <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
      <DownArrow />
    </div>
  </section>
        
  <section id="about" className="py-20 px-6 flex justify-center items-center">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 2, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 3 }}
      >
        <div className="w-24 h-1 bg-blue-400 mb-8"></div>
        <h2 className="text-4xl font-bold text-blue-400 mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="md:w-4/4">
            <p className="mb-4 text-lg">
            Hello! I'm Sambhav Agarwal, a passionate Computer Science student at the University of California, Davis. My journey in tech is driven by a curiosity to solve complex problems and create innovative solutions that make a difference. With a strong foundation in programming languages like Python, Java, and JavaScript, I'm constantly exploring new technologies and pushing the boundaries of what's possible in software development.
            </p>
            <p className="mb-4 text-lg">
            My academic journey has been complemented by hands-on projects that showcase my ability to bring ideas to life. My academic goal has been to understand the intersection between business and computer science, so that I can develop user-centric solutions and scale applications. I thrive to build projects that demonstrate my technical abilities and address real-world challenges.
            </p>
            <p className="text-lg">
            As I continue to grow in this field, I'm particularly excited about exploring emerging technologies like artificial intelligence and cloud computing. I believe these areas hold immense potential for creating scalable, innovative solutions that can transform industries.
            </p>
  
          </div>

          {/* Image inside the flex container */}
          
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



    <section id="experience" className={`py-20 px-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-400 mb-12">Experience</h2>
        <div className="relative">
          <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-1 ${theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
          <div className="space-y-16">
            {[
              { company: 'Headstarter AI', role: 'Software Engineer Fellow', date: 'July 2024 - Sep 2024', description: 'I have developed  web applications leveraging React for front-end development, Node.js for server-side logic, and Firebase for real-time database management and authentication.  I actively participated in fire chats with AI professionals. These sessions provided valuable insights into the latest developments, challenges, and opportunities in artificial intelligence. ', logo: headstarter.src },
              { company: 'Codelab', role: 'Software Developer', date: 'March 2024 - June 2024', description: 'I collaborated with designers and developers to develop a web application that combines the features of Quizlet and Anki. It was a platform to manage flashcards using TypeScript and React JS on the backend. I assisted implementing database schema using PostgreSQL and optimized performance for retrieval of flashcard data. Additionally, I built controllers, utilities, and API endpoints to handle user interactions and data flow.', logo: codelab.src },
              { company: 'ASUCD Pantry', role: 'Software Developer', date: 'Sep 2023 - Mar 2024', description: 'I collaborated with a team of developers at UC Davis Pantry to create an online ecommerce platform for management of produce. I helped utilize Django, Next.js and PostgreSQL to optimize database queries and ensure smooth data retrieval.  Additionally, I worked on the frontend to enhance visual appeal.', logo: asucd.src },
              { company: 'Global Grid 4 Learning', role: 'Project Intern', date: 'June 2022 - Sep 2022', description: 'During my experience, I engaged in hands-on work with Data Integration techniques on the CSPA Platform, specializing in user authentication and single sign-on platforms to ensure secure and efficient access control. I successfully deployed applications on the CSPA platform, gaining valuable insights into modern IT management hierarchies. This experience provided exposure to the full software application lifecycle, from design and development to deployment, allowing me to contribute to the creation of innovative solutions.', logo: gg4l.src },
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
            <h2 className="text-4xl font-bold text-blue-400 mb-12 text-center">Leadership Journey</h2>
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

        

        <section id="projects" className="py-20 px-6 flex justify-center items-center">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 3 }}
            >
              <h2 className="text-4xl font-bold text-blue-400 mb-12 text-center">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Vault - Facial Recognition Zoom Authenticator (Web Application)',
                    description:
                      'Designed an web application to authenticate users through facial recognition enhancing Zoom meeting security',
                    image:
                      '',
                    technologies: ['Django', 'Neural Networks', 'HTML/CSS', 'Javascript', 'PostgreSQL'],
                  },
                  {
                    title: 'Voguiefy - Fashion Outfit Recommender (Mobile App)',
                    description:
                      'Developed a cross-platform mobile application using React Native and Firebase that provides personalized outfit recommendations based on the user\'s wardrobe',
                    image:
                      Voguify.src,
                    technologies: ['React Native', 'Tailwind CSS', 'Firebase', 'Expo'],
                  },
                ].map((project, index) => (
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
                      className="w-full h-60 object-cover transition: transform 0.3s ease-in-out"
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
                        <motion.a
                          href="#"
                          className={`${
                            theme === 'dark'
                              ? 'text-gray-400 hover:text-white'
                              : 'text-gray-600 hover:text-gray-900'
                          }`}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Github size={24} />
                        </motion.a>
                        <motion.a
                          href="#"
                          className={`${
                            theme === 'dark'
                              ? 'text-gray-400 hover:text-white'
                              : 'text-gray-600 hover:text-gray-900'
                          }`}
                          whileHover={{ scale: 1.1 }}
                        >
                          <ExternalLink size={24} />
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
        </section>
        
        
       
        

        <section id="contact" className={`py-20 px-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-400 mb-8">Contact Me</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <form className="w-full md:w-2/3 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`w-full p-2 rounded-md border ${theme === 'dark' ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-900'}`}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`w-full p-2 rounded-md border ${theme === 'dark' ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-900'}`}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className={`w-full p-2 rounded-md border ${theme === 'dark' ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-900'}`}
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
              <div className="w-full md:w-1/3 space-y-4">
                <div className="flex items-center">
                  <Mail size={24} className="mr-2 text-blue-400" />
                  <a href="mailto:svagarwal@ucdavis.edu" className="hover:text-blue-400 transition-colors">svagarwal@ucdavis.edu</a>
                </div>
                <div className="flex items-center">
                  <Phone size={24} className="mr-2 text-blue-400" />
                  <a href="tel:+1234567890" className="hover:text-blue-400 transition-colors">+1 (408) 516-6572</a>
                </div>
              </div>
            </div>
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