import { useState, useEffect } from 'react';
import axios from 'axios';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
      // Silently use fallback data without showing error
      // Fallback data
      setProjects([
        {
          id: 1,
          title: "Amazon Clone Project",
          description: "A full e-commerce frontend project built with React and modern web technologies.",
          image: "/images/amazone-project.webp",
          category: "Fullstack Project",
          technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
          liveUrl: "https://amazone-frontend-wod3.vercel.app/",
          githubUrl: "https://github.com/ashnafi1426/amazon-clone",
          featured: true
        },
        {
          id: 2,
          title: "Netflix Clone Project",
          description: "A responsive Netflix clone frontend built with HTML, CSS, and JavaScript.",
          image: "/images/netflix-project.webp",
          category: "Fullstack Project",
          technologies: ["HTML5", "CSS3", "JavaScript", "API Integration"],
          liveUrl: "https://ashnafi1426.github.io/Netflixclonee/",
          githubUrl: "https://github.com/ashnafi1426/netflix-clone",
          featured: true
        },
        {
          id: 3,
          title: "Evangadi Forum Project",
          description: "A full-stack forum application with user authentication and real-time discussions.",
          image: "/images/evandadi.jpg",
          category: "Fullstack Project",
          technologies: ["React", "Node.js", "MongoDB", "JWT", "Express"],
          liveUrl: "https://evangadi-forum-nu-tawny.vercel.app/",
          githubUrl: "https://github.com/ashnafi1426/evangadi-forum",
          featured: true
        },
        {
          id: 4,
          title: "Garage Management App",
          description: "A full garage app used for managing employees, customers and orders.",
          image: "/images/graeteee.png",
          category: "Fullstack Project",
          technologies: ["React", "Node.js", "MySQL", "Express", "JWT"],
          liveUrl: "https://garagefrontend-lime.vercel.app/",
          githubUrl: "https://github.com/ashnafi1426/garage-app",
          featured: false
        },
        {
          id: 5,
          title: "Blog Website",
          description: "A modern blog platform with clean design and smooth user experience.",
          image: "/images/blog-website.webp",
          category: "Fullstack Project",
          technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
          liveUrl: "https://blogwebsite55.netlify.app/",
          githubUrl: "https://github.com/ashnafi1426/blog-website",
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
      <section id="portfolio" className="section-padding bg-white">
        <div className="container-custom">
          <div className="section-title">
            <h2>Portfolio</h2>
          </div>
          <div className="flex flex-col items-center justify-center py-16">
            <div className="loading mb-4"></div>
            <p className="text-gray-600 text-lg">Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="section-padding bg-gray-950">
      <div className="container-custom">
        {/* Terminal-style Header */}
        <div className="mb-8 flex justify-center animate-fade-in-down">
          <div className="inline-flex items-center gap-3 bg-gray-900 border-2 border-pink-500/50 rounded-full px-6 py-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span className="text-blue-400 font-mono font-semibold">PORTFOLIO</span>
            <span className="text-gray-500 font-mono">.jsx</span>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="text-green-400 font-mono text-lg">
            <span className="text-gray-500">//</span>Turning Ideas Into Digital Reality
          </p>
        </div>

        {/* Featured Projects Title */}
        <div className="text-center mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gray-500 font-mono">{'{ '}</span>
            <span className="text-red-500 inline-block hover:scale-125 transition-transform duration-300">F</span>
            <span className="text-blue-500 inline-block hover:scale-125 transition-transform duration-300">e</span>
            <span className="text-green-500 inline-block hover:scale-125 transition-transform duration-300">a</span>
            <span className="text-yellow-500 inline-block hover:scale-125 transition-transform duration-300">t</span>
            <span className="text-purple-500 inline-block hover:scale-125 transition-transform duration-300">u</span>
            <span className="text-pink-500 inline-block hover:scale-125 transition-transform duration-300">r</span>
            <span className="text-orange-500 inline-block hover:scale-125 transition-transform duration-300">e</span>
            <span className="text-cyan-500 inline-block hover:scale-125 transition-transform duration-300">d</span>
            <span className="text-red-400 inline-block hover:scale-125 transition-transform duration-300">P</span>
            <span className="text-blue-400 inline-block hover:scale-125 transition-transform duration-300">r</span>
            <span className="text-green-400 inline-block hover:scale-125 transition-transform duration-300">o</span>
            <span className="text-yellow-400 inline-block hover:scale-125 transition-transform duration-300">j</span>
            <span className="text-purple-400 inline-block hover:scale-125 transition-transform duration-300">e</span>
            <span className="text-pink-400 inline-block hover:scale-125 transition-transform duration-300">c</span>
            <span className="text-orange-400 inline-block hover:scale-125 transition-transform duration-300">t</span>
            <span className="text-cyan-400 inline-block hover:scale-125 transition-transform duration-300">s</span>
            <span className="text-gray-500 font-mono">{' }'}</span>
          </h2>
        </div>

        {/* Import Statement */}
        <div className="mb-12 flex justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="bg-gray-900 border border-gray-800 rounded-lg px-6 py-3 font-mono text-sm hover:border-purple-500 transition-colors duration-300">
            <span className="text-purple-400">import</span>
            <span className="text-white"> {'{ '}</span>
            <span className="text-yellow-400">innovation</span>
            <span className="text-white">, </span>
            <span className="text-yellow-400">creativity</span>
            <span className="text-white">, </span>
            <span className="text-yellow-400">excellence</span>
            <span className="text-white"> {'} '}</span>
            <span className="text-purple-400">from</span>
            <span className="text-green-400"> "my_development_process"</span>
            <span className="text-white">;</span>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          {categories.map(category => (
            <button
              key={category}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                filter === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 border-2 border-gray-700 hover:border-blue-500 hover:text-blue-400 shadow-sm'
              }`}
              onClick={() => setFilter(category)}
            >
              {category === 'all' ? 'All Projects' : category}
            </button>
          ))}
        </div>

        {/* Mission Statement Banner */}
        <div className="mb-16 max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="relative group">
            {/* Gradient Border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-500 animate-pulse"></div>
            
            {/* Content */}
            <div className="relative bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <div className="font-mono text-center">
                <p className="text-gray-400 mb-2">
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-400">myMission</span>{' '}
                  <span className="text-white">=</span>{' '}
                  <span className="text-green-400">"Creating digital experiences that blend"</span>
                </p>
                <p className="text-gray-400 mb-2 ml-8">
                  <span className="text-white">+</span>{' '}
                  <span className="text-pink-400">"cutting-edge technology"</span>{' '}
                  <span className="text-white">+</span>{' '}
                  <span className="text-green-400">" with "</span>
                </p>
                <p className="text-gray-400 ml-8">
                  <span className="text-white">+</span>{' '}
                  <span className="text-pink-400">"breathtaking design"</span>{' '}
                  <span className="text-white">+</span>{' '}
                  <span className="text-green-400">" to solve real-world problems."</span>
                  <span className="text-white">;</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && !loading && (
          <div className="text-center py-16">
            <i className="bi bi-folder-x text-6xl text-gray-600 mb-4"></i>
            <p className="text-gray-400 text-lg">No projects found for the selected category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [hasError, setHasError] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  useEffect(() => {
    // Set initial image source
    if (project.image && (project.image.startsWith('http') || project.image.startsWith('/images/'))) {
      setImageSrc(project.image);
    } else {
      // Use ui-avatars as default
      const fallbackUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(project.title)}&size=400&background=1e293b&color=fff&bold=true&length=2`;
      setImageSrc(fallbackUrl);
    }
  }, [project.image, project.title]);

  const handleImageError = () => {
    if (!hasError) {
      setHasError(true);
      // Use ui-avatars as fallback
      const fallbackUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(project.title)}&size=400&background=1e293b&color=fff&bold=true&length=2`;
      setImageSrc(fallbackUrl);
    }
  };

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotX = (mouseY / (rect.height / 2)) * -10;
    const rotY = (mouseX / (rect.width / 2)) * 10;
    
    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      className="perspective-container animate-fade-in-up"
      style={{ 
        animationDelay: `${index * 0.15}s`,
        perspective: '1000px'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-pink-500/40 border border-gray-800 h-full flex flex-col min-h-[650px] hover:border-pink-500/50"
        style={{ 
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${rotateX !== 0 || rotateY !== 0 ? 1.05 : 1})`,
          transition: rotateX !== 0 || rotateY !== 0 ? 'box-shadow 0.3s, border-color 0.3s' : 'all 0.5s ease-out',
          transformStyle: 'preserve-3d'
        }}
      >
      {/* Shine Effect - removed as it was causing issues */}

      {/* Card Content */}
      <div className="relative flex flex-col h-full">
        {/* Project Image with GitHub Icon */}
        <div className="relative h-64 overflow-hidden bg-gray-900 flex-shrink-0">
          {imageSrc && (
            <img 
              src={imageSrc}
              alt={project.title}
              onLoad={() => setImageLoaded(true)}
              onError={handleImageError}
              className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}
          
          {/* Loading State */}
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          )}
          
          {/* GitHub Icon */}
          <div className="absolute bottom-4 right-4 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
            <i className="bi bi-github text-gray-900 text-2xl"></i>
          </div>
        </div>
        
        {/* Project Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-white mb-2">
            {project.title}
          </h3>
          
          <p className="text-blue-400 text-sm leading-relaxed mb-4 flex-grow">
            {project.description}
          </p>
          
          {/* Technology Tags */}
          {project.technologies && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, i) => (
                <span 
                  key={i} 
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transform transition-transform duration-300 group-hover:scale-110 ${
                    i === 0 ? 'bg-blue-500 text-white' :
                    i === 1 ? 'bg-green-500 text-white' :
                    i === 2 ? 'bg-yellow-500 text-gray-900' :
                    'bg-purple-500 text-white'
                  }`}
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          
          {/* Action Buttons */}
          <div className="flex gap-3">
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-white px-4 py-3 rounded-xl font-semibold hover:from-pink-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
            >
              <i className="bi bi-box-arrow-up-right"></i>
              viewDemo
            </a>
            <a 
              href={project.githubUrl || project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 bg-gray-900 border-2 border-blue-500 text-blue-400 px-4 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <i className="bi bi-code-slash"></i>
              sourceCode
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Portfolio;
