import { motion } from 'framer-motion';
import { engineeringProcess } from '../../data/portfolioData';

const Process = () => {
  return (
    <section id="process" className="py-20 lg:py-28 border-b border-slate-200 dark:border-white/[0.08] relative">
      <div className="container-site">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="section-label">04 · Engineering Process</span>
          <h2 className="section-title max-w-2xl">
            How I approach software problems.
          </h2>
          <p className="section-intro">
            A structured development discipline that turns ambitious product concepts into predictable, stable releases.
          </p>
        </motion.div>

        {/* 4-Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engineeringProcess.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900/60 rounded-2xl p-6 border border-slate-200 dark:border-white/[0.08] flex flex-col justify-between hover:border-cyan-500/40 transition-colors"
            >
              <div>
                <div className="font-mono text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-4 opacity-80">
                  {step.step}
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                  {step.description}
                </p>
              </div>

              <ul className="space-y-2 pt-4 border-t border-slate-100 dark:border-white/[0.06]">
                {step.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <i className="bi bi-check2 text-cyan-500 font-bold shrink-0 mt-0.5"></i>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
