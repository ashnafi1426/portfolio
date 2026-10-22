import { motion } from 'framer-motion';
import { downloadCV } from '../../utils/downloadCV';

const About = () => {
  const handleDownload = async () => {
    await downloadCV('Ashenafi_Sileshi_Resume.pdf');
  };

  const detailsList = [
    { label: "Location", value: "Addis Ababa, Ethiopia" },
    { label: "Availability", value: "Open to work", isLive: true },
    { label: "Experience", value: "3+ years" },
    { label: "Education", value: "Software Engineering, KIOT" },
    { label: "Focus", value: "ERP · SaaS · Full-Stack Systems" },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 border-b border-slate-800/80 bg-canvas relative">
      <div className="container-site">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">
            <b className="text-white">01</b> &middot; About
          </span>
          <h2 className="section-title max-w-2xl">
            Reliable software for real operations.
          </h2>
        </motion.div>

        {/* 2-Column Editorial Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Narrative Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-7 space-y-5 text-slate-400 text-base sm:text-[1.0625rem] leading-[1.75]"
          >
            <p>
              I help businesses build and scale the digital systems they run on: ERP platforms, multi-tenant SaaS applications, and the backend automation that ties their tools together.
            </p>
            <p>
              Clients and teams usually come to me with one of three challenges: their operational data lives across multiple fragmented tools that don&apos;t synchronize, critical workflows that should be automated are still managed manually, or an application built for early testing starts falling over under real user traffic.
            </p>
            <p>
              I build the engineering that resolves this: relational database schemas that make sense in <strong className="text-white font-medium">PostgreSQL and MySQL</strong>, performant backend services in <strong className="text-white font-medium">Node.js, Express, and Laravel</strong>, and responsive user interfaces in <strong className="text-white font-medium">React and Tailwind CSS</strong>.
            </p>
            <p>
              Currently completing my third year of Software Engineering at <strong className="text-white font-medium">Kombolcha Institute of Technology (KIOT)</strong>, I bridge core computer science principles with practical production execution.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={handleDownload}
                className="btn btn-primary"
              >
                <span>Download Resume</span>
              </button>
              <a
                href="#contact"
                className="btn btn-ghost"
              >
                <span>Get in touch</span>
              </a>
            </div>
          </motion.div>

          {/* Right Metadata Card matching reference */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-5 md:col-start-8"
          >
            <dl className="flex flex-col divide-y divide-slate-800/80 border-y border-slate-800/80">
              {detailsList.map((item, idx) => (
                <div key={idx} className="py-4">
                  <dt className="font-mono text-[0.6875rem] tracking-[0.12em] uppercase text-slate-500">
                    {item.label}
                  </dt>
                  <dd className="mt-1.5 flex items-center gap-2 text-white text-[0.9375rem]">
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