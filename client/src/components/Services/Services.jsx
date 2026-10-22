import { motion } from 'framer-motion';

const Services = () => {
  const serviceCards = [
    {
      icon: "bi-layers-fill",
      title: "Full-Stack Web Systems",
      description: "End-to-end web applications built from scratch with clean component architecture, scalable APIs, and secure database schemas.",
      deliverables: ["Modular architecture", "State management", "Payment & auth pipelines", "Cloud deployment"],
    },
    {
      icon: "bi-server",
      title: "Backend & RESTful APIs",
      description: "Reliable, performant backend engines using Node.js, Express, and Laravel. Designed for data integrity and high throughput.",
      deliverables: ["REST endpoint design", "JWT authentication", "Role-based access", "Third-party integrations"],
    },
    {
      icon: "bi-database-check",
      title: "Database Architecture",
      description: "Relational database structuring with PostgreSQL and MySQL. Proper indexing, normalized schemas, and fast queries.",
      deliverables: ["Schema normalization", "Query optimization", "Migration pipelines", "Redis caching"],
    },
    {
      icon: "bi-laptop",
      title: "Modern Frontend Engineering",
      description: "Pixel-perfect, accessible user interfaces built with React, Vite, and Tailwind CSS. Responsive across all device form-factors.",
      deliverables: ["Mobile-first layouts", "Smooth micro-interactions", "Lighthouse optimization", "Cross-browser consistency"],
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 border-b border-slate-800/80 bg-[#0a0e27] relative">
      <div className="container-site">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="section-label">
            <b className="text-white">Services</b> &middot; What I Offer
          </span>
          <h2 className="section-title max-w-2xl">
            Software capabilities tailored for growth.
          </h2>
          <p className="section-intro">
            Professional engineering services for startups, businesses, and engineering teams needing robust web execution.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {serviceCards.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0e1538] rounded-2xl p-7 border border-slate-800 shadow-sm hover:border-slate-700 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] text-accent border border-slate-800 flex items-center justify-center text-xl mb-4">
                <i className={`bi ${service.icon}`}></i>
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-2">
                {service.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="pt-4 border-t border-slate-800">
                <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 block mb-2 font-semibold">
                  Core Deliverables
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-1.5 text-xs text-slate-300">
                      <span className="text-accent font-bold">&bull;</span>
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
