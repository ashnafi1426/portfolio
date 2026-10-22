import { motion } from 'framer-motion';
import { skillsByCategory } from '../../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="py-20 lg:py-28 border-b border-slate-800/80 bg-[#0a0e27] relative">
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
            <b className="text-white">03</b> &middot; Stack
          </span>
          <h2 className="section-title max-w-2xl">
            Modern tools for resilient applications.
          </h2>
          <p className="section-intro">
            A focused toolkit centered around modern JavaScript/TypeScript, robust PHP/Laravel backends, and relational data architecture.
          </p>
        </motion.div>

        {/* 4-Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillsByCategory.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-[#0e1538] rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-sm hover:border-slate-700 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] text-[#ff5a36] border border-slate-800 flex items-center justify-center text-lg">
                  <i className={`bi ${category.icon}`}></i>
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                {category.description}
              </p>

              {/* Skills List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-2.5 rounded-xl bg-[#0a0f28]/60 border border-slate-800/80 flex items-center justify-between"
                  >
                    <span className="text-xs sm:text-sm font-medium text-slate-200">
                      {skill.name}
                    </span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#131b44] text-slate-400 border border-slate-800">
                      {skill.badge}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
