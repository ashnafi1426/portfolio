import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/portfolio/projects');
      if (response.data.success) {
        setProjects(response.data.data);
      } else {
        throw new Error('Failed to fetch projects');
      }
    } catch (err) {
      console.error('Error fetching projects:', err);
      // Fallback data
      setProjects([
        {
          id: 1,
          title: "Amazon Clone",
          description: "A comprehensive full-stack e-commerce platform featuring product management, shopping cart, secure payment integration, and admin dashboard.",
          image: "/images/ecomerce.png",
          category: "Fullstack",
          technologies: ["React", "Node.js", "Express", "PostgreSQL"],
          liveUrl: "https://github.com/ashnafi1426/amazone-frontend",
          githubUrl: "https://github.com/ashnafi1426/amazone-frontend",
        },
        {
          id: 2,
          title: "Evangadi Forum",
          description: "An interactive community forum application enabling users to post questions, provide answers, and engage in discussions.",
          image: "/images/evangadi.jpg",
          category: "Fullstack",
          technologies: ["React", "Node.js", "Express", "PostgreSQL"],
          liveUrl: "https://evangadi-forum-nu-tawny.vercel.app/",
          githubUrl: "https://github.com/ashnafi1426/evangadi-forum",
        },
        {
          id: 3,
          title: "Garage Management System",
          description: "A comprehensive garage management solution for employee management, customer tracking, and service order processing.",
          image: "/images/graeteee.png",
          category: "Fullstack",
          technologies: ["React", "Node.js", "Express", "PostgreSQL"],
          liveUrl: "https://garagefrontend-lime.vercel.app/",
          githubUrl: "https://github.com/ashnafi1426/garagefrontend",
        },
        {
          id: 4,
          title: "Blog Website",
          description: "A modern blog platform featuring rich text editing, article categorization, comment system, and admin panel for content management.",
          image: "/images/blog.png",
          category: "Fullstack",
          technologies: ["React", "Node.js", "Express", "PostgreSQL"],
          liveUrl: "https://blogwebsite55.netlify.app/",
          githubUrl: "https://github.com/ashnafi1426/blog-website",
        },
        {
          id: 5,
          title: "Netflix Clone",
          description: "A streaming platform clone with user authentication, dynamic video browsing, and responsive design optimized for all devices.",
          image: "/images/netflix-project.png",
          category: "Fullstack",
          technologies: ["React", "Node.js", "Express", "PostgreSQL"],
          liveUrl: "https://github.com/ashnafi1426/Netflixclonee",
          githubUrl: "https://github.com/ashnafi1426/Netflixclonee",
        },
        {
          id: 6,
          title: "Personal Portfolio",
          description: "My latest portfolio showcasing projects, skills, and experience with advanced animations and responsive design.",
          image: "/images/Ashu.jpg",
          category: "Web Application",
          technologies: ["React", "Tailwind CSS", "Framer Motion"],
          liveUrl: "https://ashenafi-portfolio-eta.vercel.app/",
          githubUrl: "https://github.com/ashnafi1426/Ashenafi_portfolio",
        },
        {
          id: 7,
          title: "Cryptocurrency Website",
          description: "A comprehensive cryptocurrency platform with real-time price tracking, market analysis, and portfolio management.",
          image: "https://t3.ftcdn.net/jpg/04/24/53/50/360_F_424535039_f0HgjloFjZodjP0qDErF6HZrVm7qJ7mo.jpg",
          category: "Fullstack",
          technologies: ["Laravel", "React", "WebSocket", "MySQL"],
          liveUrl: "https://onchaintradepro.com",
          githubUrl: "https://github.com/ashnafi1426/crypto_websites",
        },
        {
          id: 8,
          title: "FatShop E-Commerce",
          description: "A modern e-commerce platform with real-time inventory updates, product catalog, and secure checkout process.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcI3liz4WZWQwpYyENgHz8dvit8xFylliTmg&s",
          category: "Fullstack",
          technologies: ["React", "Node.js", "WebSocket", "PostgreSQL"],
          liveUrl: "https://github.com/ashnafi1426/Ecomerce-full-website-",
          githubUrl: "https://github.com/ashnafi1426/Ecomerce-full-website-",
        },
        {
          id: 9,
          title: "Real-Time Chat Application",
          description: "A feature-rich chat app with instant messaging, user authentication, online status, and message history.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZOMhp5JW1FpJQis_dsvZ4HPXRBNT5tZDOuQ&s",
          category: "Fullstack",
          technologies: ["React", "Node.js", "WebSocket", "Supabase"],
          liveUrl: "https://github.com/ashnafi1426/chat_app_backend",
          githubUrl: "https://github.com/ashnafi1426/chat_application_12",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['all', ...new Set(projects.map(project => project.category))];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  if (loading) {
    return (
      <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-600 dark:text-gray-400 text-lg mt-4">Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in full-stack development
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                filter === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              onClick={() => setFilter(category)}
            >
              {category === 'all' ? 'All Projects' : category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        rotateX: 5,
        rotateY: 5,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col relative group"
    >
      {/* 3D Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
        animate={{
          boxShadow: [
            '0 0 20px rgba(59, 130, 246, 0.5)',
            '0 0 40px rgba(147, 51, 234, 0.5)',
            '0 0 20px rgba(59, 130, 246, 0.5)',
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Project Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-200 dark:bg-gray-700">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
        )}
        <motion.img
          src={project.image}
          alt={project.title}
          onLoad={() => setImageLoaded(true)}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className={`w-full h-full object-cover transition-all duration-700 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transformStyle: "preserve-3d", transform: "translateZ(20px)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Category Badge with 3D effect */}
        <motion.div 
          className="absolute top-4 right-4"
          style={{ transform: "translateZ(40px)" }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full shadow-lg">
            {project.category}
          </span>
        </motion.div>

        {/* Floating particles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ transform: "translateZ(50px)" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
          animate={{
            y: [0, -40, 0],
            x: [0, -20, 0],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          style={{ transform: "translateZ(50px)" }}
        />
      </div>

      {/* Project Info */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow" style={{ transform: "translateZ(30px)" }}>
        {/* Title with 3D effect */}
        <motion.h3 
          className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3"
          whileHover={{ scale: 1.05, x: 5 }}
          transition={{ duration: 0.2 }}
          style={{ transform: "translateZ(40px)" }}
        >
          {project.title}
        </motion.h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-grow">
          {project.description}
        </p>

        {/* Technologies with 3D effect */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies?.slice(0, 4).map((tech, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1, y: -3 }}
              transition={{ duration: 0.2 }}
              style={{ transform: "translateZ(20px)" }}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Action Buttons with 3D effect */}
        <div className="grid grid-cols-2 gap-3" style={{ transform: "translateZ(50px)" }}>
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm shadow-lg hover:shadow-blue-500/50"
          >
            <i className="bi bi-box-arrow-up-right"></i>
            <span>View Project</span>
          </motion.a>

          <motion.a
            href={project.githubUrl || project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm shadow-lg"
          >
            <i className="bi bi-github"></i>
            <span>GitHub</span>
          </motion.a>
        </div>
      </div>

      {/* 3D depth indicator lines */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-500">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
        <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
