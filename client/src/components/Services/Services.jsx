import { useState } from 'react';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      id: 1,
      icon: "💻",
      title: "Web Development",
      description: "Building responsive and modern web applications using the latest technologies like React, Node.js, and MongoDB.",
      features: [
        "Responsive Design",
        "Modern UI/UX",
        "Fast Performance",
        "SEO Optimized"
      ]
    },
    {
      id: 2,
      icon: "🎨",
      title: "Frontend Development",
      description: "Creating beautiful and intuitive user interfaces with React, Tailwind CSS, and modern JavaScript frameworks.",
      features: [
        "React & Next.js",
        "Tailwind CSS",
        "Interactive UI",
        "Cross-browser Compatible"
      ]
    },
    {
      id: 3,
      icon: "⚙️",
      title: "Backend Development",
      description: "Developing robust server-side applications with Node.js, Express, and database management systems.",
      features: [
        "RESTful APIs",
        "Database Design",
        "Authentication",
        "Server Management"
      ]
    },
    {
      id: 4,
      icon: "🚀",
      title: "Full-Stack Solutions",
      description: "End-to-end development services from concept to deployment, handling both frontend and backend.",
      features: [
        "Complete Solutions",
        "Cloud Deployment",
        "Maintenance",
        "Technical Support"
      ]
    },
    {
      id: 5,
      icon: "📱",
      title: "Responsive Design",
      description: "Ensuring your website looks perfect on all devices - desktop, tablet, and mobile.",
      features: [
        "Mobile-First",
        "Adaptive Layouts",
        "Touch Optimized",
        "Performance Tuned"
      ]
    },
    {
      id: 6,
      icon: "🔧",
      title: "Website Maintenance",
      description: "Ongoing support and maintenance to keep your website running smoothly and up-to-date.",
      features: [
        "Bug Fixes",
        "Updates",
        "Security Patches",
        "Performance Monitoring"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="w-full px-8 sm:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Services I Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive web development services to bring your ideas to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Background with Gradient Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
              
              {/* Card Content */}
              <div className="relative bg-white border border-gray-200 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-transparent group-hover:shadow-2xl">
                {/* Icon */}
                <div className="text-6xl mb-6 transform transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                      style={{
                        animation: hoveredIndex === index ? `slideIn 0.3s ease-out ${idx * 0.1}s both` : 'none'
                      }}
                    >
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Ready to start your project?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Get In Touch
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Add animation keyframes */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
