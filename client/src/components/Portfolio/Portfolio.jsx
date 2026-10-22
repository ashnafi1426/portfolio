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
    <section id="projects" className="py-20 lg:py-28 border-b border-slate-800/80 bg-[#0a0e27] relative">
      <div className="container-site">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="section-label">
            <b className="text-white">02</b> &middot; Selected work
          </span>
          <h2 className="section-title max-w-2xl">
            Production systems, shipped and maintained.
          </h2>
          <p className="section-intro">
            Platforms and applications I&apos;ve designed and engineered end-to-end. Built for real users, production operations, and data integrity.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                filter === cat.id
                  ? 'btn-primary shadow-md'
                  : 'bg-white/[0.04] text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 12-Column Editorial Showcase matching reference */}
        <div className="flex flex-col gap-16 lg:gap-24">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.55 }}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-12 items-center ${
                    isEven ? '' : 'lg:[&>*:first-child]:order-last'
                  }`}
                >
                  {/* Screenshot Mockup Frame (7 cols) */}
                  <div className="lg:col-span-7">
                    <div 
                      className="shot-frame aspect-[16/10] group cursor-pointer border border-slate-800 bg-[#0d1433] rounded-2xl overflow-hidden relative shadow-2xl"
                      onClick={() => setSelectedProject(project)}
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Subtle hover overlay */}
                      <div className="absolute inset-0 bg-[#0a0e27]/40 group-hover:bg-[#0a0e27]/60 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                        <span className="px-4 py-2 rounded-xl bg-slate-900/95 text-white text-xs font-semibold backdrop-blur-md border border-white/10 shadow-lg flex items-center gap-2">
                          <span>Inspect architecture</span>
                          <i className="bi bi-arrows-fullscreen text-[11px] text-accent"></i>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Narrative Specs (5 cols) */}
                  <div className="lg:col-span-5 flex flex-col items-start">
                    {/* Status Chip & Genre */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono font-medium text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        {project.status}
                      </span>
                      <span className="font-mono text-xs text-slate-500">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl sm:text-[1.75rem] font-semibold tracking-tight text-white mb-2">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 text-[0.9375rem] leading-[1.75] mb-4">
                      {project.overview}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links matching reference */}
                    <div className="flex flex-wrap items-center gap-5">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-accent transition-colors"
                        >
                          <span>Live site</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                            <path d="M7 7h10v10"></path>
                            <path d="M7 17 17 7"></path>
                          </svg>
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors"
                        >
                          <i className="bi bi-github"></i>
                          <span>Source code</span>
                        </a>
                      )}

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs text-slate-500 hover:text-accent transition-colors ml-auto font-mono underline underline-offset-4"
                      >
                        Details &rarr;
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0e1538] border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <i className="bi bi-x-lg text-lg"></i>
              </button>

              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-accent font-semibold uppercase">
                <span>{selectedProject.category}</span>
                <span>&bull;</span>
                <span className="text-emerald-400">{selectedProject.status}</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-1">
                {selectedProject.title}
              </h3>
              <p className="text-sm font-medium text-slate-400 mb-6">
                {selectedProject.subtitle}
              </p>

              <div className="rounded-xl overflow-hidden mb-6 border border-slate-800">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-56 sm:h-64 object-cover object-top"
                />
              </div>

              <div className="space-y-4 text-sm text-slate-300 mb-6">
                <div>
                  <h4 className="font-semibold text-xs uppercase font-mono tracking-wider mb-1 text-accent">
                    Operational Challenge
                  </h4>
                  <p className="text-slate-400 leading-relaxed">{selectedProject.problem}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-xs uppercase font-mono tracking-wider mb-1 text-accent">
                    Engineering Solution
                  </h4>
                  <p className="text-slate-400 leading-relaxed">{selectedProject.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-xs uppercase font-mono tracking-wider mb-1 text-accent">
                    Impact & Deliverable
                  </h4>
                  <p className="text-slate-400 leading-relaxed">{selectedProject.metrics}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
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
                      <span>Live Site</span>
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
                      <span>Source Code</span>
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
