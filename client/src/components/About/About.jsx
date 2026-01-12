const About = () => {
  const personalInfo = [
    { label: 'Name', value: 'Ashenafi Sileshi', icon: 'bi-person' },
    { label: 'Phone', value: '+251968277909', icon: 'bi-phone' },
    { label: 'Age', value: '21 Years', icon: 'bi-calendar3' },
    { label: 'Email', value: 'ashenafisileshi7@gmail.com', icon: 'bi-envelope' },
    { label: 'Occupation', value: 'Fullstack Developer', icon: 'bi-code-slash' },
    { label: 'Nationality', value: 'Ethiopian', icon: 'bi-globe' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Passionate web developer with a curiosity for how things work and a drive to solve real-world problems through code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-6 opacity-20 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105"></div>
            <img
              src="https://via.placeholder.com/600x800/2563eb/ffffff?text=Ashenafi+Sileshi"
              alt="Ashenafi Sileshi"
              className="relative w-full max-w-md mx-auto lg:max-w-full rounded-3xl shadow-2xl object-cover transform transition-transform duration-500 group-hover:-translate-y-2"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col h-full justify-center">
            <span className="text-blue-600 font-semibold text-lg mb-2 uppercase tracking-wide">Who I Am</span>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Professional <span className="text-blue-600">Fullstack Developer</span> based in Ethiopia
            </h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              When I began studying Software Engineering, I was deeply curious about how websites work.
              What started as a simple curiosity turned into a burning passion for building elegant,
              efficient, and scalable web applications. I love turning complex problems into simple, beautiful interface designs.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all duration-300 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xl shrink-0">
                    <i className={`bi ${info.icon}`}></i>
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-sm text-gray-500 font-medium mb-0.5">{info.label}</p>
                    <p className="text-gray-900 font-semibold truncate" title={info.value}>{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1"
              >
                Download CV
                <i className="bi bi-download ml-2"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;