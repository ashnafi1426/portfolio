import { motion } from 'framer-motion';
import { careerTimeline } from '../../data/portfolioData';
import { downloadCV } from '../../utils/downloadCV';

const Resume = () => {
  const handleDownload = async () => {
    await downloadCV('Ashenafi_Sileshi_Resume.pdf');
  };

  const certifications = [
    { title: "Full-Stack Web Development", issuer: "Specialized Training", year: "2023", icon: "bi-award" },
    { title: "Modern Laravel & PHP Architecture", issuer: "Course Certification", year: "2023", icon: "bi-layers" },
    { title: "React & Component Engineering", issuer: "Modern Web Training", year: "2022", icon: "bi-code-square" },
    { title: "Relational Database Design with PostgreSQL", issuer: "Backend Systems", year: "2022", icon: "bi-database" },
  ];

  return (
    <section id="journey" className="py-20 lg:py-28 border-b border-slate-200 dark:border-white/[0.08] relative">
      <div className="container-site">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="section-label">05 · Journey & Education</span>
            <h2 className="section-title max-w-2xl">
              Experience, study & track record.
            </h2>
            <p className="section-intro">
              Academic foundation at KIOT combined with active freelance and production project engineering.
            </p>
          </div>

          <button
            onClick={handleDownload}
            className="btn btn-primary self-start md:self-auto shrink-0"
          >
            <i className="bi bi-file-earmark-pdf"></i>
            <span>Download Verified CV</span>
          </button>
        </motion.div>

        {/* 2-Column Layout: Work/Education Timeline on Left, Certifications on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Timeline */}
          <div className="lg:col-span-7 space-y-6">
            {careerTimeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-900/60 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-white/[0.08] shadow-sm relative pl-7 sm:pl-8 before:absolute before:left-3 sm:before:left-4 before:top-8 before:bottom-8 before:w-0.5 before:bg-cyan-500/30"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                    {item.period}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <i className="bi bi-geo-alt"></i>
                    <span>{item.location}</span>
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-1">
                  {item.role}
                </h3>
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                  {item.company}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>

                <ul className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-white/[0.05]">
                  {item.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <span className="text-cyan-500 font-bold">&bull;</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Certifications & Continuous Focus */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-900/60 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-white/[0.08] shadow-sm">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-5">
                Technical Certifications & Training
              </h3>

              <div className="space-y-3">
                {certifications.map((cert, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.05] flex items-start gap-3.5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                      <i className={`bi ${cert.icon}`}></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 truncate">
                          {cert.title}
                        </h4>
                        <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 ml-2">
                          {cert.year}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Summary Pill */}
            <div className="p-5 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong className="text-slate-900 dark:text-white block mb-1 font-mono uppercase text-[11px]">
                Academic Commitment:
              </strong>
              Currently advancing in third-year Software Engineering at KIOT, connecting theoretical computing concepts directly with real-world, high-traffic web architectures.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Resume;
