'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Mail, Linkedin, Instagram, ChevronRight, Sun, Moon, Phone} from 'lucide-react';
// import headshot from 'src/app/assets/headshot.jpg';

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
];



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
      <header className={`fixed top-0 left-0 right-0 z-50 ${theme === 'dark' ? 'bg-gray-900 bg-opacity-90' : 'bg-white bg-opacity-90'} backdrop-blur-sm`}>
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex space-x-6">
            <a href="#about" className={`hover:text-blue-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>About</a>
            <a href="#experience" className={`hover:text-blue-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Experience</a>
            <a href="#projects" className={`hover:text-blue-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Projects</a>
            <a href="#contact" className={`hover:text-blue-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Contact</a>
          </div>
          <a href="/resume.pdf" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
            Resume
          </a>
          <div className="flex space-x-4">
            <a href="mailto:your.email@example.com" aria-label="Email" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              <Mail size={24} />
            </a>
            <a href="https://linkedin.com/in/yourprofile" aria-label="LinkedIn" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/yourusername" aria-label="GitHub" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              <Github size={24} />
            </a>
            <a href="https://discord.com/users/yourid" aria-label="Discord" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 12h8"/><path d="M8 16h4"/><path d="M11 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9z"/><path d="M8 8h8"/></svg>
            </a>
            <a href="https://instagram.com/yourusername" aria-label="Instagram" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              <Instagram size={24} />
            </a>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="home" className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 pr-8">
              <h1 className="text-6xl font-bold mb-4">
                Hey there! I'm
                <br />
                <span className="text-blue-400 text-7xl">Sambhav Agarwal</span>
              </h1>
              <p className="text-2xl mb-8">I like creating apps, websites, and AI models</p>
              <motion.a
                href="#experience"
                className="inline-flex items-center bg-blue-500 text-white px-8 py-4 rounded-full hover:bg-blue-600 transition-colors text-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See my experience <ChevronRight className="ml-2" size={24} />
              </motion.a>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-09-04%20at%208.43.58%E2%80%AFPM-8qvqzZBDBoOGWxKG3um34yo0F6Reli.png" alt="3D Cube" className="w-96 h-96 object-contain" />
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="w-24 h-1 bg-blue-400 mb-8"></div>
            <h2 className="text-4xl font-bold text-blue-400 mb-8">About Me</h2>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="md:w-2/3">
                <p className="mb-4 text-lg">
                  Hey! I'm Sambhav Agarwal, and I'm currently pursuing a Bachelor's Degree of
                  Science in Computer Science at the University of California, Davis. Last
                  summer, I was a Software Engineering Intern at GalaxySDK, a startup based in
                  San Francisco.
                </p>
                <p className="mb-4 text-lg">
                  My favorite part of programming is creating apps and websites, like this one! I
                  love the whole process of taking an idea from ideation to design to production.
                  I also find competitive programming pretty fun. Finally, I love using AI models
                  to solve interesting and complex problems.
                </p>
                <p className="text-lg">
                  Outside of programming, I love a good day outdoors. I often go out with
                  friends and family. I also really like playing table tennis, and played for a few
                  years. I'm down for a game at anytime of the day!
                </p>
              </div>
              <motion.img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-09-04%20at%208.40.55%E2%80%AFPM-YIfQajt8BEfHzKxqtIyn96qDPapCVt.png"
                alt="Sambhav Agarwal"
                className="rounded-full w-64 h-64 object-cover border-4 border-blue-400"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6">Technologies I work with</h3>
              <div className="flex flex-wrap gap-6  ">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'} rounded-full p-3 flex items-center`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={tech.icon} alt={tech.name} className="w-8 h-8 mr-2 filter invert sepia saturate-100 hue-rotate-5" />
                    <span className="text-sm">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className={`py-20 px-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-400 mb-12">Experience</h2>
            <div className="relative">
              <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-1 ${theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
              <div className="space-y-16">
                {[
                  { company: 'Apple', role: 'SWE Intern', date: 'June 2024 - September 2024', description: 'Incoming Software Engineering Intern for CAD-CSG team in the Silicon Engineering Group for Summer 2024. Super excited!', logo: '/apple-logo.svg' },
                  { company: 'GalaxySDK', role: 'SWE Intern', date: 'June 2023 - August 2023', description: 'I developed an inviting onboarding page, boosting user experience and increasing monthly signed-in users by 20%. Next, I built a robust Flask, OpenAI, and Firebase backend for a GPT-powered chat game from scratch. After, I worked on 8 tickets to optimize UI/UX, leading to an enhanced interface and resolution of customer concerns.', logo: '/galaxysdk-logo.svg' },
                  { company: 'Salubrity', role: 'SWE Intern', date: 'June 2022 - August 2022', description: 'I built a Flask backend using Python and Selenium to pull out scrape 70k+ datapoints, helping identify businesses that would benefit from Salubrity\'s services, and leading to an expansion from 1 to 10 cities. I also set up an internal tool using a NGINX server backend with a HTML/CSS/JS frontend to find potential business prospects for future growth.', logo: '/salubrity-logo.svg' },
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
                      <img src={job.logo} alt={`${job.company} logo`} className="w-16 h-16 mr-4 object-contain" />
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
        </section>

        <section id="projects" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-400 mb-12">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Handscript', description: 'A web app that helps users learn American Sign Language with real time translation, instruction, and feedback.', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-09-04%20at%208.41.15%E2%80%AFPM-WbFHtmRSYnOCzYhWOA551bMayA8uOi.png', technologies: ['Tensorflow', 'React.js', 'AWS', 'Flask'] },
                { title: 'Chatter', description: 'A real-time chat application with features like user authentication, message encryption, and group chats.', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-09-04%20at%208.41.15%E2%80%AFPM-WbFHtmRSYnOCzYhWOA551bMayA8uOi.png', technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'] },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden shadow-lg`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-blue-400 mb-2">{project.title}</h3>
                    <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} text-sm rounded-full px-3 py-1`}>{tech}</span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <motion.a
                        href="#"
                        className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Github size={24} />
                      </motion.a>
                      <motion.a
                        href="#"
                        className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                        whileHover={{ scale: 1.1 }}
                      >
                        <ExternalLink size={24} />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
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
                  <a href="mailto:sambhav@example.com" className="hover:text-blue-400 transition-colors">sambhav@example.com</a>
                </div>
                <div className="flex items-center">
                  <Phone size={24} className="mr-2 text-blue-400" />
                  <a href="tel:+1234567890" className="hover:text-blue-400 transition-colors">+1 (234) 567-890</a>
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