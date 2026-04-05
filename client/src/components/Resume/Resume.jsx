import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { downloadCV } from '../../utils/downloadCV';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const experience = [
    {
      id: 1,
      title: "Full-Stack Developer",
      company: "Freelance",
      period: "2024 - 2026 (Present)",
      location: "Remote",
      description: "Building modern, scalable web applications using React, Node.js, Laravel, and PostgreSQL. Delivering end-to-end solutions for clients across various industries with expertise in both frontend and backend technologies.",
      achievements: [
        "Developed 10+ full-stack web applications with responsive designs and optimal performance",
        "Built cryptocurrency platform using Laravel and React with real-time WebSocket integration",
        "Implemented RESTful APIs and database designs using Node.js, Express, Laravel, and PostgreSQL",
        "Improved application performance by 40% through code optimization and caching strategies",
        "Collaborated with clients to gather requirements and deliver tailored solutions",
        "Integrated third-party APIs and services including payment gateways and authentication systems"
      ],
      technologies: ["React", "Laravel", "Node.js", "Express", "PostgreSQL", "WebSocket", "Tailwind CSS", "Vite"]
    },
    {
      id: 2,
      title: "Laravel Developer",
      company: "Freelance Projects",
      period: "2024 - 2026",
      location: "Remote",
      description: "Specialized in building robust backend systems and full-stack applications using Laravel framework, implementing secure authentication, real-time features, and scalable architectures.",
      achievements: [
        "Developed cryptocurrency tracking platform with Laravel backend and React frontend",
        "Implemented real-time data synchronization using WebSocket and Laravel Broadcasting",
        "Built secure RESTful APIs with Laravel Sanctum for authentication and authorization",
        "Designed and optimized MySQL database schemas for high-performance applications",
        "Integrated third-party cryptocurrency APIs for live market data",
        "Implemented caching strategies using Redis to improve response times"
      ],
      technologies: ["Laravel", "PHP", "MySQL", "WebSocket", "Redis", "React", "Tailwind CSS"]
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Various Projects",
      period: "2024 - 2025",
      location: "Remote",
      description: "Created responsive and interactive user interfaces using React, Vite, and Tailwind CSS.",
      achievements: [
        "Built responsive user interfaces for 15+ projects using React and Tailwind CSS",
        "Implemented modern design patterns and component-based architecture",
        "Collaborated with backend teams to integrate RESTful APIs",
        "Ensured cross-browser compatibility and mobile responsiveness",
        "Utilized state management solutions including Redux and Context API"
      ],
      technologies: ["React", "JavaScript", "Tailwind CSS", "Vite", "Redux"]
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Undergraduate in Software Engineering",
      institution: "Ethiopian University",
      period: "2024 - 2026 (Present)",
      location: "Ethiopia",
      description: "Currently pursuing comprehensive study of software development principles, algorithms, data structures, and web technologies. Gaining hands-on experience through academic projects and collaborative team work.",
      highlights: [
        "Building strong foundation in computer science fundamentals and software engineering principles",
        "Completing multiple full-stack web development projects",
        "Active participation in coding competitions and hackathons",
        "Collaborating on team projects using Agile methodologies"
      ],
      gpa: "3.6/4.0"
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "Full-Stack Web Development Specialization",
      issuer: "Online Learning Platform",
      date: "2023",
      icon: "bi-award-fill",
      color: "from-blue-500 to-blue-600",
      description: "Comprehensive training in modern web development"
    },
    {
      id: 2,
      name: "Laravel - The Complete Guide",
      issuer: "Online Course",
      date: "2023",
      icon: "bi-code-square",
      color: "from-red-500 to-red-600",
      description: "Advanced Laravel patterns and best practices"
    },
    {
      id: 3,
      name: "React - The Complete Guide",
      issuer: "Udemy",
      date: "2022",
      icon: "bi-code-square",
      color: "from-purple-500 to-purple-600",
      description: "Advanced React patterns and best practices"
    },
    {
      id: 4,
      name: "Node.js, Express, PostgreSQL & More",
      issuer: "Online Course",
      date: "2022",
      icon: "bi-server",
      color: "from-green-500 to-green-600",
      description: "Backend development with Node.js ecosystem"
    },
    {
      id: 5,
      name: "Modern JavaScript Development",
      issuer: "Online Course",
      date: "2022",
      icon: "bi-braces",
      color: "from-yellow-500 to-orange-500",
      description: "ES6+ features and modern JavaScript"
    }
  ];

  const skills = {
    frontend: [
      { name: "React.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "TypeScript", level: 75 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Vite", level: 85 }
    ],
    backend: [
      { name: "Laravel", level: 85 },
      { name: "PHP", level: 85 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 85 },
      { name: "RESTful APIs", level: 90 },
      { name: "WebSocket", level: 80 },
      { name: "JWT Authentication", level: 85 },
      { name: "MongoDB", level: 75 }
    ],
    tools: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Composer", level: 85 },
      { name: "Redis", level: 75 },
      { name: "Vercel", level: 85 },
      { name: "npm/yarn", level: 90 },
      { name: "Postman", level: 85 },
      { name: "Chrome DevTools", level: 90 }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const handleDownloadCV = async () => {
    await downloadCV('Ashenafi_Sileshi_Resume.pdf');
  };

  return (
    <section id="resume" className="relative py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden transition-colors duration-300">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold mb-4">
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Resume
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Professional experience, education, and certifications
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 sm:mb-10 md:mb-12 overflow-x-auto px-4">
          <div className="inline-flex bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-1 sm:p-1.5 shadow-lg border border-gray-100 dark:border-gray-700 min-w-max">
            {[
              { id: 'experience', label: 'Experience', icon: 'bi-briefcase-fill' },
              { id: 'education', label: 'Education', icon: 'bi-mortarboard-fill' },
              { id: 'skills', label: 'Skills', icon: 'bi-lightning-charge-fill' },
              { id: 'certifications', label: 'Certifications', icon: 'bi-award-fill' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 relative whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg sm:rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1 sm:gap-2">
                  <i className={`bi ${tab.icon} text-xs sm:text-sm`}></i>
                  <span className="hidden xs:inline">{tab.label}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto min-h-[500px]">
          <AnimatePresence mode="wait">

            {/* Experience Tab */}
            {activeTab === 'experience' && (
              <motion.div
                key="experience"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                {experience.map((item, index) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className="relative"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                        <div className="flex-1">
                          <div className="flex items-start gap-3 mb-2">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300">
                              <i className="bi bi-briefcase-fill text-xl"></i>
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                              <p className="text-purple-600 dark:text-purple-400 font-semibold text-lg">{item.company}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start md:items-end gap-2">
                          <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold rounded-full border border-purple-200 dark:border-purple-700">
                            <i className="bi bi-calendar-event mr-2"></i>
                            {item.period}
                          </span>
                          <span className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <i className="bi bi-geo-alt-fill mr-1"></i>
                            {item.location}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-base">{item.description}</p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">Key Achievements</h4>
                        <ul className="space-y-3">
                          {item.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mr-3 mt-0.5 shrink-0">
                                <i className="bi bi-check2 text-sm font-bold"></i>
                              </span>
                              <span className="text-sm leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:text-purple-700 dark:hover:text-purple-300 hover:border-purple-200 dark:hover:border-purple-700 transition-colors duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Timeline connector */}
                    {index < experience.length - 1 && (
                      <div className="flex justify-center my-6">
                        <div className="w-0.5 h-8 bg-gradient-to-b from-purple-300 to-blue-300 dark:from-purple-700 dark:to-blue-700"></div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Education Tab */}
            {activeTab === 'education' && (
              <motion.div
                key="education"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                {education.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group"
                  >
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-2">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <i className="bi bi-mortarboard-fill text-xl"></i>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{item.degree}</h3>
                            <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg">{item.institution}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-2">
                        <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full border border-blue-200 dark:border-blue-700">
                          <i className="bi bi-calendar-event mr-2"></i>
                          {item.period}
                        </span>
                        <span className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <i className="bi bi-geo-alt-fill mr-1"></i>
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-base">{item.description}</p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">Highlights</h4>
                      <ul className="space-y-3">
                        {item.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-3 mt-0.5 shrink-0">
                              <i className="bi bi-check2 text-sm font-bold"></i>
                            </span>
                            <span className="text-sm leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* GPA */}
                    {item.gpa && (
                      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30 text-orange-700 dark:text-orange-300 rounded-xl border border-orange-200 dark:border-orange-700">
                        <i className="bi bi-star-fill mr-2"></i>
                        <span className="font-semibold">GPA: {item.gpa}</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Skills Tab */}
            {activeTab === 'skills' && (
              <motion.div
                key="skills"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                {Object.entries(skills).map(([category, skillList]) => (
                  <motion.div
                    key={category}
                    variants={itemVariants}
                    className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100 dark:border-gray-700"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 capitalize flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white">
                        <i className={`bi ${category === 'frontend' ? 'bi-palette-fill' : category === 'backend' ? 'bi-server' : 'bi-tools'}`}></i>
                      </span>
                      {category} Development
                    </h3>
                    <div className="space-y-4">
                      {skillList.map((skill, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                            <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm">{skill.level}%</span>
                          </div>
                          <div className="w-full h-2.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: idx * 0.1 }}
                              className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Certifications Tab */}
            {activeTab === 'certifications' && (
              <motion.div
                key="certifications"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20 }}
                className="grid sm:grid-cols-2 gap-6"
              >
                {certifications.map((cert) => (
                  <motion.div
                    key={cert.id}
                    variants={itemVariants}
                    className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <i className={`bi ${cert.icon} text-2xl`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{cert.name}</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold text-sm mb-2">{cert.issuer}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{cert.description}</p>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <i className="bi bi-calendar-check mr-2"></i>
                      {cert.date}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12 sm:mt-14 md:mt-16"
        >
          <button
            onClick={handleDownloadCV}
            className="inline-flex items-center px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-purple-500/50 hover:-translate-y-1 transition-all duration-300 group"
          >
            <i className="bi bi-download mr-2 sm:mr-3 text-xl sm:text-2xl group-hover:animate-bounce"></i>
            Download Full Resume
          </button>
        </motion.div>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }

        .animate-blob {
          animation: blob 20s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Resume;
