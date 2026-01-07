import { useState } from 'react';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const experience = [
    {
      id: 1,
      title: "Full-Stack Developer",
      company: "Freelance",
      period: "2023 - Present",
      location: "Remote",
      description: "Building modern web applications using React, Node.js, and MongoDB. Delivering end-to-end solutions for clients.",
      achievements: [
        "Developed 10+ full-stack web applications",
        "Implemented RESTful APIs and database designs",
        "Improved application performance by 40%"
      ]
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Various Projects",
      period: "2022 - 2023",
      location: "Remote",
      description: "Created responsive and interactive user interfaces using React and modern CSS frameworks.",
      achievements: [
        "Built responsive UIs for 15+ projects",
        "Implemented modern design patterns",
        "Collaborated with backend teams"
      ]
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Software Engineering",
      institution: "Kombolcha University",
      period: "2020 - 2024",
      location: "Kombolcha, Ethiopia",
      description: "Focused on software development, algorithms, and web technologies.",
      highlights: [
        "Graduated with honors",
        "Led multiple team projects",
        "Active in coding competitions"
      ]
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "Full-Stack Web Development",
      issuer: "Evangadi Tech",
      date: "2023",
      icon: "🎓"
    },
    {
      id: 2,
      name: "React Developer",
      issuer: "Online Course",
      date: "2023",
      icon: "⚛️"
    },
    {
      id: 3,
      name: "Node.js Backend Development",
      issuer: "Online Course",
      date: "2022",
      icon: "🟢"
    }
  ];

  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="w-full px-8 sm:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Resume
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'experience'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              💼 Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'education'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              🎓 Education
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'certifications'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              🏆 Certifications
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="space-y-8 animate-resume-fade-in">
              {experience.map((item, index) => (
                <div
                  key={item.id}
                  className="relative pl-8 pb-8 border-l-2 border-blue-500 last:pb-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg" />

                  {/* Content Card */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ml-4">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-lg text-blue-600 font-semibold">
                          {item.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-600 font-medium">{item.period}</p>
                        <p className="text-sm text-gray-500">{item.location}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{item.description}</p>

                    <ul className="space-y-2">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <span className="text-green-500 mr-2">✓</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="space-y-8 animate-resume-fade-in">
              {education.map((item, index) => (
                <div
                  key={item.id}
                  className="relative pl-8 pb-8 border-l-2 border-purple-500 last:pb-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-500 rounded-full border-4 border-white shadow-lg" />

                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ml-4">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {item.degree}
                        </h3>
                        <p className="text-lg text-purple-600 font-semibold">
                          {item.institution}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-600 font-medium">{item.period}</p>
                        <p className="text-sm text-gray-500">{item.location}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{item.description}</p>

                    <ul className="space-y-2">
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <span className="text-green-500 mr-2">✓</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <div className="grid md:grid-cols-2 gap-6 animate-resume-fade-in">
              {certifications.map((cert, index) => (
                <div
                  key={cert.id}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl mb-4">{cert.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-1">{cert.issuer}</p>
                  <p className="text-gray-500 text-sm">{cert.date}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Download Resume Button */}
        <div className="text-center mt-12">
          <a
            href="/cv/Ashenafi_CV.pdf"
            download="Ashenafi_Resume.pdf"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>

      <style>{`
        @keyframes resume-fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-resume-fade-in {
          animation: resume-fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Resume;
