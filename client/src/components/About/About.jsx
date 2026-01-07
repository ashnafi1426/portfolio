const About = () => {
  const personalInfo = [
    { label: 'Name', value: 'Ashenafi Sileshi' },
    { label: 'Phone', value: '+251968277909' },
    { label: 'Age', value: '21 Years' },
    { label: 'Email', value: 'ashenafisileshi7@gmail.com' },
    { label: 'Occupation', value: 'Fullstack Developer' },
    { label: 'Nationality', value: 'Ethiopian' }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-secondary">
      <div className="container-custom">
        <div className="section-title">
          <h2>About Me</h2>
          <p>Learn more about my journey as a Full-Stack Developer.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://via.placeholder.com/400x500/e87532/ffffff?text=Ashenafi" 
              alt="Ashenafi Sileshi"
              className="w-full rounded-2xl"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6">Fullstack Developer</h3>
            <p className="mb-4 text-gray-600">
              When I began studying Software Engineering, I was deeply curious about how websites work.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <div key={index} className="bg-white p-4 rounded-lg">
                  <span className="font-semibold">{info.label}:</span>
                  <span className="text-gray-600"> {info.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;