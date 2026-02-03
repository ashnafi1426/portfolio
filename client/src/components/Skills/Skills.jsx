import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/portfolio/skills');
      if (response.data.success) {
        setSkills(response.data.data);
      }
    } catch (err) {
      console.error('Error fetching skills:', err);
      // Fallback data with logo URLs
      setSkills([
        { id: 1, name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DBFB" },
        { id: 2, name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#3C873A" },
        { id: 3, name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
        { id: 4, name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
        { id: 5, name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" },
        { id: 6, name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#336791" },
        { id: 7, name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#E34F26" },
        { id: 8, name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#1572B6" },
        { id: 9, name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", color: "#06B6D4" },
        { id: 10, name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "#000000" },
        { id: 11, name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
        { id: 12, name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#00618A" }
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="relative py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Horizontal Scrolling Skills - Full Width */}
        <div className="relative mb-16">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Container */}
          <div className="overflow-hidden py-8">
            <div className="flex animate-scroll-horizontal hover:pause-animation gap-12">
              {/* Duplicate skills 3 times for seamless loop */}
              {[...skills, ...skills, ...skills].map((skill, index) => (
                <div
                  key={`${skill.id}-${index}`}
                  className="flex-shrink-0 group relative"
                >
                  {/* Circular Skill Icon */}
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-2xl border-4 border-gray-100 dark:border-gray-700 group-hover:border-blue-100 dark:group-hover:border-blue-500 group-hover:scale-110">
                    <img 
                      src={skill.logo || skill.icon} 
                      alt={skill.name}
                      className="w-14 h-14 sm:w-16 sm:h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                      style={{
                        filter: skill.name === 'Express.js' ? 'brightness(0.2)' : 'none'
                      }}
                    />
                  </div>

                  {/* Skill Name Tooltip */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    <span className="bg-gray-900 dark:bg-gray-700 text-white text-xs px-3 py-1.5 rounded-full font-medium">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            Always learning and exploring new technologies
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <span className="px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-sm text-sm text-gray-700 dark:text-gray-300 hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700">
              🚀 Fast Learner
            </span>
            <span className="px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-sm text-sm text-gray-700 dark:text-gray-300 hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700">
              🎯 Problem Solver
            </span>
            <span className="px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-sm text-sm text-gray-700 dark:text-gray-300 hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700">
              💡 Creative Thinker
            </span>
            <span className="px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-sm text-sm text-gray-700 dark:text-gray-300 hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700">
              🤝 Team Player
            </span>
          </div>
        </motion.div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll-horizontal {
          animation: scroll-horizontal 20s linear infinite;
        }

        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
};

export default Skills;
