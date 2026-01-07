import { useState, useEffect } from 'react';
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
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  // Duplicate skills for seamless loop
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="w-full px-8 sm:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Scrolling Skills Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling Track */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll hover:pause-animation">
              {duplicatedSkills.map((skill, index) => (
                <div
                  key={`${skill.id}-${index}`}
                  className="flex-shrink-0 mx-4"
                >
                  {/* Skill Circle */}
                  <div className="group relative">
                    <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer border-4 border-gray-100">
                      {/* Logo */}
                      <img 
                        src={skill.logo || skill.icon} 
                        alt={skill.name}
                        className="w-16 h-16 object-contain transform transition-transform duration-300 group-hover:scale-125"
                        style={{
                          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                        }}
                      />
                      
                      {/* Colored Ring on Hover */}
                      <div 
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          boxShadow: `0 0 0 4px ${skill.color}40, 0 0 25px ${skill.color}60`
                        }}
                      />
                    </div>
                    
                    {/* Skill Name Tooltip */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      <span className="bg-gray-900 text-white text-sm px-3 py-1 rounded-full">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-24 text-center">
          <p className="text-gray-600 mb-6">
            Always learning and exploring new technologies
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <span className="px-4 py-2 bg-white rounded-full shadow-sm text-sm text-gray-700 hover:shadow-md transition-shadow">
              🚀 Fast Learner
            </span>
            <span className="px-4 py-2 bg-white rounded-full shadow-sm text-sm text-gray-700 hover:shadow-md transition-shadow">
              🎯 Problem Solver
            </span>
            <span className="px-4 py-2 bg-white rounded-full shadow-sm text-sm text-gray-700 hover:shadow-md transition-shadow">
              💡 Creative Thinker
            </span>
            <span className="px-4 py-2 bg-white rounded-full shadow-sm text-sm text-gray-700 hover:shadow-md transition-shadow">
              🤝 Team Player
            </span>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Skills;
