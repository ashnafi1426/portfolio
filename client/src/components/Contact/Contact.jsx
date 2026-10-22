import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../../data/portfolioData';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with encoded form data for guaranteed delivery without backend dependency
    const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject || 'Project Discussion'}`);
    const bodyEncoded = encodeURIComponent(
      `Hello Ashenafi,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );

    // Open user's default email client
    window.location.href = `mailto:${personalData.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setStatusMessage({
        type: 'success',
        text: 'Your email draft is prepared! Feel free to send it directly.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 500);
  };

  const contactChannels = [
    {
      label: "Direct Email",
      value: personalData.email,
      icon: "bi-envelope-at-fill",
      action: copyEmail,
      actionLabel: copied ? "Copied to clipboard!" : "Click to copy email",
      isCopy: true,
    },
    {
      label: "Telegram",
      value: "@ashe1426",
      icon: "bi-telegram",
      href: personalData.telegram,
      actionLabel: "Direct chat &rarr;",
    },
    {
      label: "LinkedIn",
      value: "Ashenafi Sileshi",
      icon: "bi-linkedin",
      href: personalData.linkedin,
      actionLabel: "View profile &rarr;",
    },
    {
      label: "GitHub",
      value: "ashnafi1426",
      icon: "bi-github",
      href: personalData.github,
      actionLabel: "Explore repositories &rarr;",
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="container-site">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="section-label">06 · Contact & Collaboration</span>
          <h2 className="section-title max-w-2xl">
            Have an idea? Let&apos;s build something useful.
          </h2>
          <p className="section-intro">
            Whether you have a specific project in mind, need full-stack engineering expertise, or want to discuss opportunities, I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* 2-Column Grid: Channels on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Channels Left Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white dark:bg-slate-900/60 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-white/[0.08] shadow-sm">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-5">
                Direct Communication Channels
              </h3>

              <div className="space-y-4">
                {contactChannels.map((channel, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.05] flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-lg bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                        <i className={`bi ${channel.icon} text-base`}></i>
                      </div>
                      <div className="min-w-0">
                        <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                          {channel.label}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 truncate block">
                          {channel.value}
                        </span>
                      </div>
                    </div>

                    {channel.isCopy ? (
                      <button
                        onClick={channel.action}
                        className="text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 hover:underline shrink-0"
                      >
                        {copied ? (
                          <span className="text-emerald-500 font-semibold flex items-center gap-1">
                            <i className="bi bi-check-lg"></i> Copied
                          </span>
                        ) : (
                          "Copy"
                        )}
                      </button>
                    ) : (
                      <a
                        href={channel.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 hover:underline shrink-0"
                      >
                        Open &rarr;
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Availability Badge */}
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
              <span className="status-dot shrink-0" />
              <div className="text-xs text-slate-700 dark:text-slate-300">
                <span className="font-semibold text-slate-900 dark:text-white">Current Availability:</span>{' '}
                Open for full-time roles, contracts, and software consulting.
              </div>
            </div>
          </div>

          {/* Interactive Form Right Column */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900/60 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/[0.08] shadow-sm">
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
              Fill in your details and I will reply within 24 hours.
            </p>

            {statusMessage && (
              <div className="mb-5 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-2">
                <i className="bi bi-check-circle-fill"></i>
                <span>{statusMessage.text}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Johnson"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">
                  Subject / Project Scope
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Full-Stack Web Platform or Consulting"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">
                  Project Details / Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about what you are planning to build, target timeline, or inquiry..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full py-3 text-sm font-semibold"
              >
                {isSubmitting ? (
                  <span>Preparing Draft...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <i className="bi bi-send-fill text-xs"></i>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;