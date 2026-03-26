
import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
          title: "E-Commerce Website",
          description: "A comprehensive full-stack e-commerce platform featuring advanced product management, intelligent shopping cart functionality, secure payment integration, user authentication, and an intuitive admin dashboard for inventory tracking and order management.",
          image: "/images/ecomerce.png",
          category: "Fullstack",
          technologies: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "Vite"],
          liveUrl: "https://amazone-frontend-wod3.vercel.app/",
          githubUrl: "https://github.com/ashnafi1426/amazone-frontend",
          featured: true
        },
        {
          id: 3,
          title: "Evangadi Forum",
          description: "An interactive community forum application enabling users to post questions, provide answers, engage in discussions, and build knowledge collaboratively. Features include user authentication, real-time updates, voting system, and comprehensive search functionality.",
          image: "/images/evangadi.jpg",
          category: "Fullstack",
          technologies: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "Vite"],
          liveUrl: "https://evangadi-forum-nu-tawny.vercel.app/",
          githubUrl: "https://github.com/ashnafi1426/evangadi-forum",
          featured: true
        },
        {
          id: 4,
          title: "Garage Management System",
          description: "A comprehensive garage management solution designed to streamline operations including employee management, customer relationship tracking, service order processing, vehicle maintenance records, and detailed reporting for business analytics and performance monitoring.",
          image: "/images/graeteee.png?v=1",
          category: "Fullstack",
          technologies: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "Vite"],
          liveUrl: "https://garagefrontend-lime.vercel.app/",
          githubUrl: "https://github.com/ashnafi1426/garagefrontend",
          featured: false
        },
        {
          id: 5,
          title: "Blog Website",
          description: "A modern and elegant blog platform featuring rich text editing, article categorization, tag management, comment system, and a clean reading experience. Includes admin panel for content management, SEO optimization, and social media integration for content sharing.",
          image: "/images/blog.png?v=1",
          category: "Fullstack",
          technologies: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "Vite"],
          liveUrl: "https://blogwebsite55.netlify.app/",
          githubUrl: "https://github.com/ashnafi1426/blog-website",
          featured: true
        },
        {
          id: 2,
          title: "Netflix Clone Website",
          description: "A sophisticated streaming platform clone replicating Netflix's core features including user authentication, dynamic video browsing with categories, responsive design optimized for all devices, and an engaging user interface with smooth animations and transitions.",
          image: "/images/netflix-project.png",
          category: "Fullstack",
          technologies: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "Vite"],
          liveUrl: "https://github.com/ashnafi1426/Netflixclonee",
          githubUrl: "https://github.com/ashnafi1426/Netflixclonee",
          featured: true
        },
        {
          id: 6,
          title: "Personal Portfolio Website",
          description: "My latest personal portfolio showcasing professional projects, technical skills, and experience with cutting-edge web technologies. Features advanced animations using Framer Motion, responsive design, dark theme, interactive project cards, and smooth scrolling navigation.",
          image: "/images/Ashu.jpg",
          category: "Web Application",
          technologies: ["React", "Node.js", "Tailwind CSS", "Framer Motion", "Vite"],
          liveUrl: "https://ashenafi-portfolio-eta.vercel.app/",
          githubUrl: "https://github.com/ashnafi1426/Ashenafi_portfolio",
          featured: true
        },
        {
          id: 7,
          title: "Cryptocurrency Website",
          description: "A comprehensive cryptocurrency platform built with Laravel and React, featuring real-time crypto price tracking with WebSocket integration, live market analysis, user portfolio management, and secure transaction handling. Includes responsive design, interactive charts, and real-time data updates.",
          image: "https://t3.ftcdn.net/jpg/04/24/53/50/360_F_424535039_f0HgjloFjZodjP0qDErF6HZrVm7qJ7mo.jpg",
          category: "Fullstack",
          technologies: ["Laravel", "React", "WebSocket", "PHP", "MySQL", "Tailwind CSS"],
          liveUrl: "https://github.com/ashnafi1426/crypto_websites",
          githubUrl: "https://github.com/ashnafi1426/crypto_websites",
          featured: true
        }
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
      <section id="portfolio" className="section-padding bg-gray-50 dark:bg-gray-950">
        <div className="container-custom">
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-600 dark:text-gray-400 text-lg mt-4 font-mono">Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-600/20 border border-purple-200 dark:border-purple-500/30 rounded-full text-purple-600 dark:text-purple-300 text-sm font-semibold tracking-wide mb-4">
            🚀 My Work
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in full-stack development
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white hover:border-purple-300 dark:hover:border-purple-500/50'
              }`}
              onClick={() => setFilter(category)}
            >
              {category === 'all' ? 'All Projects' : category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                project={project}
                index={index}
                hovered={hoveredIndex}
                setHovered={setHoveredIndex}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// Helper for Tech Styling
const getTechStyle = (tech) => {
  const t = tech.toLowerCase();
  if (t.includes('react')) return 'bg-blue-500/20 text-blue-300 border border-blue-500/30';
  if (t.includes('node')) return 'bg-green-500/20 text-green-300 border border-green-500/30';
  if (t.includes('express')) return 'bg-gray-500/20 text-gray-300 border border-gray-500/30';
  if (t.includes('postgres') || t.includes('postgresql')) return 'bg-blue-600/20 text-blue-400 border border-blue-600/30';
  if (t.includes('mongo')) return 'bg-green-500/20 text-green-300 border border-green-500/30';
  if (t.includes('mysql')) return 'bg-orange-500/20 text-orange-300 border border-orange-500/30';
  if (t.includes('tailwind')) return 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30';
  if (t.includes('vite')) return 'bg-purple-500/20 text-purple-300 border border-purple-500/30';
  if (t.includes('framer')) return 'bg-pink-500/20 text-pink-300 border border-pink-500/30';
  if (t.includes('html') || t.includes('css') || t.includes('javascript')) return 'bg-orange-500/20 text-orange-300 border border-orange-500/30';
  return 'bg-gray-700/50 text-gray-300 border border-gray-600/50';
};

const Card = ({ project, index, hovered, setHovered }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  useEffect(() => {
    if (project.image && (project.image.startsWith('http') || project.image.startsWith('/images/'))) {
      setImageSrc(project.image);
    } else {
      const fallbackUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(project.title)}&size=400&background=1e293b&color=fff&bold=true&length=2`;
      setImageSrc(fallbackUrl);
    }
  }, [project.image, project.title]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setHovered(null);
    x.set(0);
    y.set(0);
  };

  const isDimmed = hovered !== null && hovered !== index;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setHovered(index)}
      animate={{
        scale: isDimmed ? 0.95 : 1,
        opacity: isDimmed ? 0.5 : 1,
        filter: isDimmed ? "blur(2px)" : "blur(0px)",
      }}
      style={{
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        transformStyle: "preserve-3d",
      }}
      className="relative h-[600px] w-full rounded-3xl bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 group cursor-pointer shadow-2xl hover:shadow-purple-500/20 transition-shadow duration-500"
    >
      {/* Content Container */}
      <div
        className="relative h-full w-full p-6 flex flex-col"
        style={{ transformStyle: "preserve-3d" }}
      >

        {/* Browser Window - Top Half */}
        <motion.div
          className="relative w-full h-[280px] bg-gray-100 dark:bg-gray-900/80 rounded-2xl overflow-hidden mb-6 border border-gray-200 dark:border-gray-700/50 shadow-inner"
          style={{ transform: "translateZ(30px)" }}
        >
          {/* Browser UI */}
          <div className="absolute top-0 left-0 right-0 h-10 bg-gray-200 dark:bg-gray-900 flex items-center px-4 gap-2 z-20 border-b border-gray-300 dark:border-gray-700">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] group-hover:animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] group-hover:animate-pulse animation-delay-100"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f] group-hover:animate-pulse animation-delay-200"></div>
            <div className="ml-4 flex-1 h-6 bg-gray-100 dark:bg-gray-800 rounded-lg text-[10px] text-gray-500 flex items-center px-3 font-mono truncate">
              {project.liveUrl || 'localhost:3000'}
            </div>
          </div>

          <div className="w-full h-full pt-10 relative">
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" style={{ display: imageLoaded ? 'none' : 'block' }}></div>
            <img
              src={imageSrc}
              alt={project.title}
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
          </div>
        </motion.div>

        {/* Text and Actions - Bottom Half */}
        <motion.div
          className="flex flex-col flex-grow"
          style={{ transform: "translateZ(50px)" }}
        >
          {/* Title */}
          <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 bg-clip-text text-transparent drop-shadow-sm tracking-tight">
            {project.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-auto">
            {project.technologies?.slice(0, 4).map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-wide ${getTechStyle(tech)}`}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg shadow-pink-500/30 text-sm"
            >
              <i className="bi bi-rocket-takeoff-fill"></i>
              <span>viewDemo</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={project.githubUrl || project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-blue-600 dark:text-blue-400 bg-gray-100 dark:bg-gray-900/80 border border-blue-300 dark:border-blue-400/50 hover:bg-gray-200 dark:hover:bg-gray-800 hover:border-blue-400 transition-all text-sm shadow-lg shadow-blue-500/10"
            >
              <i className="bi bi-code-slash"></i>
              <span>sourceCode</span>
            </motion.a>
          </div>
        </motion.div>

      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
        style={{
          boxShadow: '0 0 60px rgba(168, 85, 247, 0.4)'
        }}
      />
    </motion.div>
  );
};

export default Portfolio;
