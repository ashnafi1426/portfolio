import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      
      if (response.data.success) {
        setStatus({
          type: 'success',
          message: response.data.message
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(response.data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus({
        type: 'error',
        message: error.response?.data?.message || 'Failed to send message. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: 'bi bi-envelope-at',
      title: 'Email',
      value: 'ashenafisileshi7@gmail.com',
      link: 'mailto:ashenafisileshi7@gmail.com'
    },
    {
      icon: 'bi bi-telephone',
      title: 'Phone',
      value: '+251968277909',
      link: 'tel:+251968277909'
    },
    {
      icon: 'bi bi-geo-alt',
      title: 'Location',
      value: 'Kombolcha, Ethiopia',
      link: 'https://www.google.com/maps/search/Kombolcha+Ethiopia'
    }
  ];

  const socialLinks = [
    { href: 'https://github.com', icon: 'bi bi-github', label: 'GitHub' },
    { href: 'https://linkedin.com', icon: 'bi bi-linkedin', label: 'LinkedIn' },
    { href: 'https://twitter.com', icon: 'bi bi-twitter', label: 'Twitter' },
    { href: 'https://instagram.com', icon: 'bi bi-instagram', label: 'Instagram' },
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="section-title">
          <h2>Get in Touch</h2>
          <p>Reach out for projects, collaborations, or just a hello!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="animate-fade-in-left">
            <div className="card p-8 h-fit">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                  Let's Connect
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a question, want to collaborate, or just want to say hi, 
                  I'd love to hear from you!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-primary-50 transition-colors duration-300 group">
                    <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center group-hover:bg-secondary-900 transition-colors duration-300">
                      <i className={`${info.icon} text-lg`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-1">
                        {info.title}
                      </h4>
                      <a 
                        href={info.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary-500 transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-secondary-900 mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-12 h-12 bg-gray-100 hover:bg-primary-500 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right animation-delay-200">
            <div className="card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      disabled={loading}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      disabled={loading}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="6"
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors duration-300 resize-vertical min-h-[120px] disabled:opacity-60 disabled:cursor-not-allowed"
                  ></textarea>
                </div>

                {status.message && (
                  <div className={`flex items-center gap-3 p-4 rounded-lg ${
                    status.type === 'success' 
                      ? 'bg-green-50 border border-green-200 text-green-700' 
                      : 'bg-red-50 border border-red-200 text-red-700'
                  }`}>
                    <i className={`${
                      status.type === 'success' ? 'bi bi-check-circle' : 'bi bi-exclamation-circle'
                    } text-lg`}></i>
                    <span>{status.message}</span>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={loading}
                  className="btn btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="loading mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <i className="bi bi-send ml-2"></i>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;