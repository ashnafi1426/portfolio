import { motion } from 'framer-motion';
import { downloadCV } from '../../utils/downloadCV';

const About = () => {
  const handleDownload = async () => {
    await downloadCV('Ashenafi_Sileshi_Resume.pdf');
  };

  const detailsList = [
    { label: "Institution", value: "KIOT (Kombolcha Institute of Technology)" },
    { label: "Field of Study", value: "B.Sc. in Software Engineering (3rd Year)" },
    { label: "Location", value: "Addis Ababa / Kombolcha, Ethiopia" },
    { label: "Core Focus", value: "Full-Stack Web Systems & Scalable APIs" },
    { label: "Primary Stack", value: "React, Node.js, Laravel, PostgreSQL" },
    { label: "Status", value: "Available for new projects & roles", isLive: true },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 border-b border-slate-200 dark:border-white/[0.08] relative">
      <div className="container-site">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">01 · About</span>
          <h2 className="section-title max-w-2xl">
            Reliable engineering for real problems.
          </h2>
        </motion.div>

        {/* 2-Column Editorial Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Narrative Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 text-base sm:text-[1.0625rem] leading-[1.8]"
          >
            <p>
              I am a third-year Software Engineering student at <strong className="text-slate-900 dark:text-white font-semibold">Kombolcha Institute of Technology (KIOT)</strong>. 
              My journey started with a deep curiosity about how large distributed web applications operate beneath the surface, which quickly turned into a dedicated focus on building full-stack platforms that perform reliably.
            </p>
            <p>
              I specialize in combining modern JavaScript frontends using <strong className="text-slate-900 dark:text-white font-semibold">React and Tailwind CSS</strong> with resilient backend architectures powered by <strong className="text-slate-900 dark:text-white font-semibold">Node.js, Express, and Laravel</strong>, backed by relational data modeling in <strong className="text-slate-900 dark:text-white font-semibold">PostgreSQL and MySQL</strong>.
            </p>
            <p>
              Whether engineering an operational management portal, an interactive community platform, or real-time WebSocket feeds, my priority is straightforward: writing maintainable code, preventing edge-case failures, and shipping intuitive software that serves real users.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={handleDownload}
                className="btn btn-primary"
              >
                <i className="bi bi-file-earmark-pdf"></i>
                <span>Download Resume</span>
              </button>
              <a
                href="#contact"
                className="btn btn-ghost"
              >
                <span>Let&apos;s talk</span>
                <i className="bi bi-arrow-right text-xs"></i>
              </a>
            </div>
          </motion.div>

          {/* Right Metadata Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 bg-white dark:bg-slate-900/60 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/[0.08] shadow-lg"
          >
            <h3 className="font-mono text-xs font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400 mb-6">
              Engineering Profile & Availability
            </h3>

            <dl className="divide-y divide-slate-100 dark:divide-white/[0.06]">
              {detailsList.map((item, idx) => (
                <div key={idx} className="py-3.5 first:pt-0 last:pb-0 flex flex-col gap-1">
                  <dt className="font-mono text-[11px] tracking-wider uppercase text-slate-400 dark:text-slate-500">
                    {item.label}
                  </dt>
                  <dd className="text-sm font-medium text-slate-800 dark:text-slate-200 flex items-center gap-2">
                    {item.isLive && <span className="status-dot" />}
                    <span>{item.value}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;