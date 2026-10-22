import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { featuredProjects } from '../../data/portfolioData';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'saas', label: 'Enterprise & SaaS' },
    { id: 'community', label: 'Community & Content' },
    { id: 'fintech', label: 'FinTech & Real-Time' },
  ];

  const filteredProjects = featuredProjects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'saas') return project.category.toLowerCase().includes('saas') || project.category.toLowerCase().includes('e-commerce');
    if (filter === 'community') return project.category.toLowerCase().includes('community') || project.category.toLowerCase().includes('cms') || project.category.toLowerCase().includes('media');
    if (filter === 'fintech') return project.category.toLowerCase().includes('fintech');
    return true;
  });

  return (
    <section id="projects" className="py-20 lg:py-28 border-b border-slate-200 dark:border-white/[0.08] relative">
      <div className="container-site">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="section-label">02 · Selected work</span>
          <h2 className="section-title max-w-2xl">
            Production systems, shipped and maintained.
          </h2>
          <p className="section-intro">
            Real full-stack platforms and applications I have engineered end-to-end. Built with scalable databases, secure authentication, and clean interfaces.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                filter === cat.id
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/[0.08]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 12-Column Editorial Projects Showcase */}
        <div className="space-y-16 lg:space-y-24">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.55 }}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isEven ? '' : 'lg:[&>*:first-child]:order-last'
                  }`}
                >
                  {/* Left (or Right): Project Screenshot Mockup Frame */}
                  <div className="lg:col-span-7">
                    <div className="shot-frame aspect-[16/10] group cursor-pointer" onClick={() => setSelectedProject(project)}>
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Subtle Overlay & View Case Study Pill */}
                      <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                        <span className="px-4 py-2 rounded-xl bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white text-xs font-semibold backdrop-blur-md shadow-lg flex items-center gap-1.5">
                          <span>View System Details</span>
                          <i className="bi bi-arrows-fullscreen text-[11px]"></i>
                        </span>
                      </div>

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-[11px] font-mono text-emerald-400 font-semibold border border-white/10">
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right (or Left): Project Narrative & Specs */}
                  <div className="lg:col-span-5 flex flex-col items-start">
                    {/* Meta Category */}
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400 font-medium">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                      {project.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                      {project.subtitle}
                    </p>

                    {/* Overview */}
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {project.overview}
                    </p>

                    {/* Problem/Solution Highlight Box */}
                    <div className="p-3.5 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-white/[0.06] mb-5 w-full">
                      <div className="text-xs text-slate-500 dark:text-slate-400 mb-1 font-mono uppercase tracking-wider">
                        Key Engineering Challenge:
                      </div>
                      <p className="text-xs text-slate-700 dark:text-slate-300 leading-normal">
                        {project.solution}
                      </p>
                    </div>

                    {/* Technologies Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tag text-[11px]">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary text-xs py-2 px-3.5"
                        >
                          <span>Live Site</span>
                          <i className="bi bi-box-arrow-up-right text-xs"></i>
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-ghost text-xs py-2 px-3.5"
                        >
                          <i className="bi bi-github text-sm"></i>
                          <span>Source Code</span>
                        </a>
                      )}

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs text-slate-500 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400 underline underline-offset-4 transition-colors ml-auto font-medium"
                      >
                        Architecture breakdown &rarr;
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Case Study Modal Breakdown */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors"
                aria-label="Close modal"
              >
                <i className="bi bi-x-lg text-lg"></i>
              </button>

              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-cyan-500 font-semibold uppercase">
                <span>{selectedProject.category}</span>
                <span>&bull;</span>
                <span className="text-emerald-500">{selectedProject.status}</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-1">
                {selectedProject.title}
              </h3>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-6">
                {selectedProject.subtitle}
              </p>

              <div className="rounded-xl overflow-hidden mb-6 border border-slate-200 dark:border-white/10">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-56 sm:h-64 object-cover object-top"
                />
              </div>

              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 mb-6">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-xs uppercase font-mono tracking-wider mb-1 text-cyan-600 dark:text-cyan-400">
                    The Problem
                  </h4>
                  <p>{selectedProject.problem}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-xs uppercase font-mono tracking-wider mb-1 text-cyan-600 dark:text-cyan-400">
                    Engineering Solution
                  </h4>
                  <p>{selectedProject.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-xs uppercase font-mono tracking-wider mb-1 text-cyan-600 dark:text-cyan-400">
                    Key Metric / Impact
                  </h4>
                  <p>{selectedProject.metrics}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((t, idx) => (
                    <span key={idx} className="tag text-xs">{t}</span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary text-xs py-2 px-3.5"
                    >
                      <span>Visit Live</span>
                      <i className="bi bi-box-arrow-up-right text-xs"></i>
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost text-xs py-2 px-3.5"
                    >
                      <i className="bi bi-github"></i>
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
