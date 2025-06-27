
import { ExternalLink, Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Accenture North America Data Analytics and Visualization Job Simulation',
      issuer: 'Accenture via Forage',
      description: 'Comprehensive virtual experience program in data analytics and visualization consulting',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_6Hc8JTuJSsvHRATFP_1725311376617_completion_certificate.pdf'
    },
    {
      title: 'Tata Data Visualisation: Empowering Business with Effective Insights Job Simulation',
      issuer: 'Tata Group via Forage',
      description: 'Virtual experience program focused on data visualization and business insight generation',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Tata/MyXvBcppsW2FkNYCX_Tata%20Group_6Hc8JTuJSsvHRATFP_1725572138341_completion_certificate.pdf'
    },
    {
      title: 'Data Analytics for Project Management',
      issuer: 'Udemy',
      description: 'Advanced analytics techniques and methodologies for effective project management and optimization',
      link: 'https://www.udemy.com/certificate/UC-11d1c359-0c46-4d32-8403-533b081566f0/'
    },
    {
      title: 'IBM Data Science Tools',
      issuer: 'IBM via Cognitive Class',
      description: 'Comprehensive training in data science tools and methodologies using IBM technologies',
      link: 'https://courses.cognitiveclass.ai/certificates/8e07e07a329e41399c981d99e17681fc'
    }
  ];

  // Function to convert certificate links to embeddable PDF format where possible
  const getPdfEmbedUrl = (link: string) => {
    // For direct PDF links, return as is for embedding
    if (link.includes('.pdf')) {
      return link;
    }
    // For other certificate links, we'll display them as clickable links
    return null;
  };

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
          {certifications.map((cert, index) => {
            const pdfEmbedUrl = getPdfEmbedUrl(cert.link);
            
            return (
              <div
                key={index}
                className="bg-card border border-gray-800 rounded-xl overflow-hidden hover:border-blue-gradient-end/50 transition-all duration-300 hover-glow group"
              >
                <div className="h-40 overflow-hidden bg-gray-800">
                  {pdfEmbedUrl ? (
                    <iframe 
                      src={pdfEmbedUrl}
                      className="w-full h-full border-0 pointer-events-none"
                      title={`Preview of ${cert.title}`}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 relative">
                      <img 
                        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                        alt="Certificate preview"
                        className="w-full h-full object-cover opacity-60"
                      />
                      <Award className="w-16 h-16 text-white absolute" />
                    </div>
                  )}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
