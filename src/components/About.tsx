
import { GraduationCap, BarChart3, FileText, Lightbulb } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Academic Research",
      description: "Second-year Agricultural Sciences student at Alexandria University with focus on research methodology"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data Visualization",
      description: "Expert in Excel, Tableau, and Google tools for creating compelling data stories"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Scientific Writing",
      description: "Specialized in academic presentation design and research documentation"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Creative Problem-Solving",
      description: "Innovative approach to educational content design and data interpretation"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm passionate about transforming complex research data into accessible, 
            engaging educational content that bridges the gap between academic knowledge 
            and practical understanding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-card border border-gray-800 rounded-xl p-6 hover:border-blue-gradient-end/50 transition-all duration-300 hover-glow group"
            >
              <div className="text-blue-gradient-end mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {skill.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-gradient-subtle border border-blue-gradient-start/30 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              My Mission
            </h3>
            <p className="text-lg text-gray-200 leading-relaxed">
              To create impactful educational experiences through innovative data visualization 
              and research-driven content design. I believe that every complex dataset has a 
              story to tell, and my role is to uncover and present these insights in ways that 
              inspire learning and drive meaningful change in agricultural sciences and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
