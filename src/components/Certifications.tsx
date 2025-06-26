
import { ExternalLink, Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'IBM Data Science Tools',
      issuer: 'IBM',
      description: 'Comprehensive training in data science tools and methodologies',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop',
      link: '#'
    },
    {
      title: 'Accenture Forage Simulation',
      issuer: 'Accenture',
      description: 'Virtual experience program in consulting and analytics',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
      link: '#'
    },
    {
      title: 'Tata Forage Simulation',
      issuer: 'Tata',
      description: 'Data visualization and insight generation simulation',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop',
      link: '#'
    },
    {
      title: 'Data Analytics for Project Management',
      issuer: 'Udemy',
      description: 'Advanced analytics techniques for project optimization',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
      link: '#'
    },
    {
      title: 'Feasibility Study & Project Evaluation',
      issuer: 'Professional Institute',
      description: 'Comprehensive training in project assessment methodologies',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop',
      link: '#'
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Professional certifications that showcase my commitment to continuous 
            learning and expertise in data science and analytics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-card border border-gray-800 rounded-xl overflow-hidden hover:border-blue-gradient-end/50 transition-all duration-300 hover-glow group"
            >
              <div className="h-40 overflow-hidden bg-gray-800">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-start mb-3">
                  <Award className="w-5 h-5 text-blue-gradient-end mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-gradient-end transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-blue-gradient-end text-sm font-medium">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>
                
                <button 
                  onClick={() => window.open(cert.link, '_blank')}
                  className="flex items-center text-blue-gradient-end hover:text-white transition-colors duration-300 text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
