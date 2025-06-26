
import { useState } from 'react';
import ProjectModal from './ProjectModal';

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  driveLink: string;
  category: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      id: '1',
      title: 'Functional Cooperation Disorder',
      description: 'Survey-based behavioral research analyzing cooperation patterns with comprehensive data visualization.',
      fullDescription: 'A comprehensive behavioral research study examining functional cooperation disorders through systematic survey methodology. This project involved designing research instruments, collecting data from diverse participant groups, and creating sophisticated data visualizations to identify patterns and correlations in cooperative behavior. The analysis includes statistical modeling and trend identification that contributed to understanding social dynamics in group settings.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      driveLink: '#',
      category: 'Behavioral Research'
    },
    {
      id: '2',
      title: 'Bacterial Classification',
      description: 'Microbiology project utilizing advanced charts and data analysis to categorize bacterial species.',
      fullDescription: 'An in-depth microbiology research project focused on systematic bacterial classification using modern data analysis techniques. This study involved extensive laboratory work, microscopic analysis, and the development of classification algorithms. The project features interactive charts and visual representations that make complex microbiological data accessible to both scientific and educational audiences.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      driveLink: '#',
      category: 'Microbiology'
    },
    {
      id: '3',
      title: 'Reforestation Techniques',
      description: 'Forestry data visualization project analyzing regeneration methods and environmental impact.',
      fullDescription: 'A comprehensive analysis of various reforestation techniques and their effectiveness in different environmental contexts. This project combines field research with advanced data visualization to present findings on tree survival rates, growth patterns, and environmental impact assessments. The study includes comparative analysis of traditional vs. modern reforestation approaches with predictive modeling for future forest management strategies.',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop',
      driveLink: '#',
      category: 'Environmental Science'
    },
    {
      id: '4',
      title: 'Pedology Principles',
      description: 'Soil science project featuring detailed comparison tables and analytical graphs.',
      fullDescription: 'An extensive soil science research project exploring fundamental pedology principles through systematic analysis and comparison. This study examines soil composition, formation processes, and classification systems using advanced analytical techniques. The project features comprehensive comparison tables, statistical analyses, and visual representations that demonstrate the complex relationships between soil properties and agricultural productivity.',
      image: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?w=600&h=400&fit=crop',
      driveLink: '#',
      category: 'Soil Science'
    }
  ];

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my research projects that demonstrate the intersection of 
            scientific inquiry and data visualization excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-card border border-gray-800 rounded-xl overflow-hidden hover:border-blue-gradient-end/50 transition-all duration-300 hover-glow group cursor-pointer transform hover:scale-105"
              onClick={() => openProjectModal(project)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-blue-gradient/20 text-blue-gradient-end text-xs font-medium rounded-full border border-blue-gradient-end/30">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-gradient-end transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mt-4 text-blue-gradient-end font-medium group-hover:underline">
                  Click to view details →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects;
