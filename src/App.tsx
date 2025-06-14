import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { SkillCard } from './components/SkillCard';
import { CertificateCard } from './components/CertificateCard';
import { ProjectFilter } from './components/ProjectFilter';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, FileText, Code2, Trophy, Brain, ExternalLink, ChevronRight, X, Globe, Database, Cpu, Code, MapPin, Calendar, Award } from 'lucide-react';
import { skillCategories } from './data/skills';
import { projects } from './data/projects';
import { experiences } from './data/experiences';
import { certificates } from './data/certificates';
import Rao from './assets/Rao.png'

function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [visibleSection, setVisibleSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');

  // Track scroll progress for progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Track visible section for navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'coding-profiles', 'projects', 'experience', 'certificates', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setVisibleSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const floatingIcons = [
    { icon: Code2, label: 'SDE', color: 'text-blue-500', delay: 0 },
    { icon: Brain, label: 'Problem Solver', color: 'text-purple-500', delay: 1 },
    { icon: Globe, label: 'Web Dev', color: 'text-green-500', delay: 2 },
    { icon: Database, label: 'DSA', color: 'text-yellow-500', delay: 3 },
    { icon: Cpu, label: 'Tech', color: 'text-red-500', delay: 4 },
    { icon: Code, label: 'Coding', color: 'text-indigo-500', delay: 5 }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const projectCategories = ['All', ...new Set(projects.map(project => project.category))];

  const codingProfiles = [
    {
      platform: "LeetCode",
      rating: "1600+",
      solved: "300+ Problems",
      url: "https://leetcode.com/yourusername",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      icon: Trophy
    },
    {
      platform: "CodeForces",
      rating: "1200+",
      solved: "200+ Problems",
      url: "https://codeforces.com/profile/yourusername",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      icon: Code2
    },
    {
      platform: "GeeksForGeeks",
      rating: "1500+",
      solved: "250+ Problems",
      url: "https://auth.geeksforgeeks.org/user/yourusername",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      icon: Brain
    },
    {
      platform: "CodeChef",
      rating: "1800+",
      solved: "150+ Problems",
      url: "https://www.codechef.com/users/yourusername",
      color: "text-amber-700",
      bgColor: "bg-amber-700/10",
      icon: Trophy
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
        style={{ scaleX: scrollProgress / 100 }}
      />
      
      <Navbar activeSection={visibleSection} />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-28 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 -left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-20 md:gap-32">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 max-w-xl md:mt-0 mt-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Hi, I'm <strong>Roshan Avatirak</strong>
              </h1>
              <TypeAnimation
                sequence={[
                  'Software Developer',
                  2000,
                  'CSE Student',
                  2000,
                  'Problem Solver',
                  2000,
                  'Full Stack Developer',
                  2000,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mb-6"
              />
              <p className="text-lg mb-8 leading-relaxed">
                A passionate software developer and third-year Computer Science Engineering student,
                focused on creating impactful solutions through code. I specialize in building
                responsive web applications with modern technologies.
              </p>
              <div className="flex gap-4">
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <FileText className="w-5 h-5" />
                  Resume
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors"
                >
                  Contact Me
                </motion.a>
              </div>
              <div className="flex gap-4 mt-8">
                <motion.a
                  href="https://github.com/roshanavatirak"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/roshan-avatirak/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
              </div>
            </motion.div>
            
            {/* Profile Image with Floating Icons Container */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex-shrink-0"
            >
              {/* Profile Image */}
              <motion.div 
                className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500 ring-opacity-50 relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={Rao}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-transparent"></div>
              </motion.div>
              
              {/* Floating Icons positioned around the profile image */}
              
                {/* 1. Top */}
<motion.div
  className="absolute bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg flex items-center gap-2 text-blue-500 z-20"
  style={{
    left: '0%',
    top: '0%',
    transform: 'translate(-50%, -50%) translate(0px, -220px)',
  }}
  initial={{ opacity: 0, scale: 0 }}
  animate={{ opacity: 1, scale: 1, y: [0, -10, 0], rotate: [0, 5, 0] }}
  transition={{ duration: 4, delay: 0.2, repeat: Infinity, repeatType: "reverse" }}
>
  <Code2 className="w-6 h-6" />
  <span className="text-sm font-medium hidden md:block">SDE</span>
</motion.div>

{/* 2. Top-Right */}
<motion.div
  className="absolute bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg flex items-center gap-2 text-purple-500 z-20"
  style={{
    left: '45%',
    top: '-5%',
    transform: 'translate(-50%, -50%) translate(155px, -155px)',
  }}
  initial={{ opacity: 0, scale: 0 }}
  animate={{ opacity: 1, scale: 1, y: [0, -10, 0], rotate: [0, 5, 0] }}
  transition={{ duration: 4, delay: 0.4, repeat: Infinity, repeatType: "reverse" }}
>
  <Brain className="w-6 h-6" />
  <span className="text-sm font-medium hidden md:block">Problem Solver</span>
</motion.div>

{/* 3. Bottom-Right */}
<motion.div
  className="absolute bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg flex items-center gap-2 text-green-500 z-20"
  style={{
    left: '85%',
    top: '0%',
    transform: 'translate(-50%, -50%) translate(155px, 155px)',
  }}
  initial={{ opacity: 0, scale: 0 }}
  animate={{ opacity: 1, scale: 1, y: [0, -10, 0], rotate: [0, 5, 0] }}
  transition={{ duration: 4, delay: 0.6, repeat: Infinity, repeatType: "reverse" }}
>
  <Globe className="w-6 h-6" />
  <span className="text-sm font-medium hidden md:block">Web Dev</span>
</motion.div>

{/* 4. Bottom */}
<motion.div
  className="absolute bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg flex items-center gap-2 text-yellow-500 z-20"
  style={{
    left: '0%',
    top: '100%',
    transform: 'translate(-50%, -50%) translate(0px, 220px)',
  }}
  initial={{ opacity: 0, scale: 0 }}
  animate={{ opacity: 1, scale: 1, y: [0, -10, 0], rotate: [0, 5, 0] }}
  transition={{ duration: 4, delay: 0.8, repeat: Infinity, repeatType: "reverse" }}
>
  <Database className="w-6 h-6" />
  <span className="text-sm font-medium hidden md:block">DSA</span>
</motion.div>

{/* 5. Bottom-Left */}
<motion.div
  className="absolute bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg flex items-center gap-2 text-red-500 z-20"
  style={{
    left: '50%',
    top: '100%',
    transform: 'translate(-50%, -50%) translate(-155px, 155px)',
  }}
  initial={{ opacity: 0, scale: 0 }}
  animate={{ opacity: 1, scale: 1, y: [0, -10, 0], rotate: [0, 5, 0] }}
  transition={{ duration: 4, delay: 1.0, repeat: Infinity, repeatType: "reverse" }}
>
  <Cpu className="w-6 h-6" />
  <span className="text-sm font-medium hidden md:block">Tech</span>
</motion.div>

{/* 6. Top-Left */}
<motion.div
  className="absolute bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg flex items-center gap-2 text-indigo-500 z-20"
  style={{
    left: '85%',
    top: '100%',
    transform: 'translate(-50%, -50%) translate(-155px, -155px)',
  }}
  initial={{ opacity: 0, scale: 0 }}
  animate={{ opacity: 1, scale: 1, y: [0, -10, 0], rotate: [0, 5, 0] }}
  transition={{ duration: 4, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
>
  <Code className="w-6 h-6" />
  <span className="text-sm font-medium hidden md:block">Coding</span>
</motion.div>

              
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-3000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
          >
            <p className="text-lg leading-relaxed mb-6">
              I'm a passionate Computer Science Engineering student with a strong foundation in software development
              and a keen interest in solving complex problems. Currently in my third year, I've developed expertise
              in both frontend and backend technologies, with a particular focus on creating efficient and scalable solutions.
            </p>
            <p className="text-lg leading-relaxed">
              Beyond academics, I'm an active participant in competitive programming and hackathons, constantly
              pushing myself to learn new technologies and improve my problem-solving skills. I believe in writing
              clean, maintainable code and creating user-friendly applications that make a difference.
            </p>
            
            <motion.div 
              className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border-l-4 border-blue-500"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="italic text-blue-700 dark:text-blue-300">
                "I'm driven by the challenge of turning complex problems into elegant solutions that enhance user experiences."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-1000"></div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-3000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
          >
            Skills & Expertise
          </motion.h2>
          
          {/* Problem Solving Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-400/10 dark:to-purple-400/10 p-8 rounded-3xl border border-blue-200 dark:border-blue-800">
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="inline-block mb-4"
              >
                <Brain className="w-16 h-16 text-blue-600 dark:text-blue-400" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Problem Solving Excellence</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Passionate about algorithmic thinking and data structures. Solved 800+ problems across multiple platforms 
                with a focus on optimized solutions and clean code implementation.
              </p>
            </div>
          </motion.div>

          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.name} 
              className="mb-20 last:mb-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <motion.div
                className="text-center mb-12"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h3 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                  {category.name}
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: skillIndex * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 20
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <SkillCard
                      name={skill.name}
                      level={skill.level}
                      Icon={skill.icon}
                      delay={skillIndex * 0.1}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Problem Solving Profiles Section */}
      <section id="coding-profiles" className="py-20 bg-white dark:bg-gray-800 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Problem Solving Profiles
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {codingProfiles.map((profile, index) => {
              const Icon = profile.icon;
              return (
                <motion.a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.03,
                    y: -5,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }
                  }}
                  className={`${profile.bgColor} p-6 rounded-2xl shadow-xl transition-all duration-500 ease-in-out transform hover:shadow-2xl`}
                >
                  <motion.div 
                    className="flex items-center gap-3 mb-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Icon className={`w-6 h-6 ${profile.color}`} />
                    <h3 className={`text-xl font-bold ${profile.color}`}>
                      {profile.platform}
                    </h3>
                  </motion.div>
                  <div className="space-y-2">
                    <motion.p 
                      className="text-lg font-semibold"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      Rating: {profile.rating}
                    </motion.p>
                    <p className="text-gray-600 dark:text-gray-300">{profile.solved}</p>
                    <motion.div 
                      className="flex items-center gap-1 text-sm mt-2 text-blue-600 dark:text-blue-400"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <span>View Profile</span>
                      <ChevronRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -bottom-40 right-20 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Projects Portfolio
          </motion.h2>
          
          <ProjectFilter
            categories={projectCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl cursor-pointer"
                onClick={() => setActiveProject(project)}
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-blue-600/90 text-white px-3 py-1 rounded-full text-sm font-medium transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {project.category}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                      Click to view details
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Github className="w-6 h-6" />
                    </motion.a>
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <ExternalLink className="w-6 h-6" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Project Modal */}
        <AnimatePresence>
          {activeProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img 
                    src={activeProject.image} 
                    alt={activeProject.title}
                    className="w-full h-64 object-cover"
                  />
                  <motion.button 
                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    onClick={() => setActiveProject(null)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                  <div className="absolute top-4 left-4 bg-blue-600/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {activeProject.category}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4">{activeProject.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                    {activeProject.longDescription}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-2 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Brain className="w-5 h-5 text-green-600 dark:text-green-400" />
                        Key Learnings
                      </h4>
                      <ul className="space-y-2">
                        {activeProject.learnings.map((learning, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            {learning}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      My Contributions
                    </h4>
                    <ul className="space-y-2">
                      {activeProject.contributions.map((contribution, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          {contribution}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-4">
                    <motion.a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-800 dark:bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5" />
                      View Code
                    </motion.a>
                    {activeProject.liveUrl && (
                      <motion.a
                        href={activeProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white dark:bg-gray-800 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-3000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            My Journey
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative mb-12 last:mb-0"
                >
                  {/* Timeline Dot */}
                  <motion.div 
                    className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                  
                  <div className="ml-20 bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                        {exp.type === 'internship' ? 'Internship' : 'Full-time'}
                      </span>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 mb-4 font-medium">
                      {exp.company}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            whileHover={{ scale: 1.1 }}
                            className="bg-gray-200 dark:bg-gray-600 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.description.map((desc, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300">{desc}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-1000"></div>
          <div className="absolute -bottom-20 right-20 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4 text-center"
          >
            Certifications & Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Continuous learning and professional development through industry-recognized certifications
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-800 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-1000"></div>
          <div className="absolute -bottom-40 -left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Get In Touch
          </motion.h2>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col gap-6">
              <motion.a
                href="mailto:your.email@example.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <span className="text-gray-600 dark:text-gray-300">your.email@example.com</span>
                </div>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/roshan-avatirak/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-4 p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">LinkedIn</h3>
                  <span className="text-gray-600 dark:text-gray-300">Connect with me</span>
                </div>
              </motion.a>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl text-center"
              >
                <p className="text-blue-800 dark:text-blue-200">
                  Looking forward to connecting with you! I'm open to collaboration, 
                  internship opportunities, and discussing exciting projects.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
              © {new Date().getFullYear()} <strong>RAO DevStudio</strong>. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/roshanavatirak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/roshanavatirakhttps://www.linkedin.com/in/roshan-avatirak/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;