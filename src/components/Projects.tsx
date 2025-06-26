
import { useState } from 'react';
import ProjectModal from './ProjectModal';

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  driveLink: string;
  category: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      id: '1',
      title: 'Functional Cooperation Disorder: A Behavioral Analysis among University Students',
      description: 'Survey-based behavioral research analyzing cooperation patterns with comprehensive data visualization for Agricultural Extension Communication course.',
      fullDescription: 'As part of a group presentation for the Agricultural Extension Communication course, my team and I investigated a recurring issue we observed over the past two years in our university environment: a lack of effective collaboration among students, especially when placed in unfamiliar groups during practical sessions. We identified this issue as "Functional Cooperation Disorder." To better understand this phenomenon, we designed a printed survey inspired by the real-life experiences of our team members. The survey aimed to gather behavioral data from students, which we analyzed to classify participants into categories based on their cooperative difficulties. For each category, we proposed targeted development points and solutions. I was responsible for all visual content, including capturing and editing original background shoots used in the PowerPoint presentation. I also contributed to the data analysis and visualization, helping to present our findings clearly and engagingly to our audience.',
      driveLink: 'https://drive.google.com/file/d/1lLbowyWgW3KfeGralYMHSvfvWZlv0_Cp/view?usp=sharing',
      category: 'Behavioral Research'
    },
    {
      id: '2',
      title: 'Microbiology - Bacterial Classification',
      description: 'Analysis of bacteria based on nutritional needs, temperature tolerance, and growth phases with comprehensive data visualization.',
      fullDescription: 'In my Bacterial Classification in Microbiology project, I analyzed different types of bacteria based on their nutritional needs, temperature tolerance, and growth phases. I applied data analysis techniques to compare bacterial groups by their sources of carbon, nitrogen, and energy. Using charts and graphs, I visualized the classification of bacteria—such as chemoautotrophs, photoautotrophs, and heterotrophs—making the distinctions more understandable. I also created visual comparisons of bacterial growth stages and temperature categories. Finally, I presented my findings in a clear and structured format, demonstrating my ability to combine analysis and presentations with effective data visualization.',
      driveLink: 'https://drive.google.com/file/d/10KWn6iVjJfbcmNiW_IrVGz_zeRvpKfSB/view',
      category: 'Microbiology'
    },
    {
      id: '3',
      title: 'Analyzing Reforestation Techniques and Forest Benefits through Data Visualization',
      description: 'Forestry project exploring reproduction methods in forest ecosystems with data analysis and visualization of reforestation techniques.',
      fullDescription: 'In my Forestry Science project, I explored natural, vegetative, and seed-based reproduction methods in forest ecosystems, analyzing their advantages and disadvantages. I used data analysis to evaluate each method\'s effectiveness in terms of economic value, environmental impact, and regeneration time. Through charts and graphs, I visually compared high forest methods like clear-cutting, seed-tree, and shelterwood systems. I also illustrated the benefits of forests—such as carbon absorption and oxygen production—using clear data visualizations. Finally, I delivered a well-organized presentation that showcased both theoretical content and applied analysis, reflecting my ability to communicate complex information effectively.',
      driveLink: 'https://drive.google.com/file/d/1Q74CBUEVjl21AglhbZHdb24FwJZhlYCL/view',
      category: 'Environmental Science'
    },
    {
      id: '4',
      title: 'Soil and Water Science - Pedology Principles',
      description: 'Detailed analysis of soil-forming processes, diagnostic horizons, and global soil orders with comparative data visualization.',
      fullDescription: 'In my Soil and Water Science – Pedology project, I conducted a detailed analysis of various soil-forming processes, diagnostic horizons, and global soil orders. I applied data analysis techniques to compare different soil horizons such as oxic, spodic, and calcic, as well as surface and subsurface diagnostic features. Using charts and graphs, I visually represented soil distribution across regions, along with chemical and physical differences between soil types. I created comparative tables for soil orders (like Alfisols, Aridisols, and Mollisols), integrating both qualitative and quantitative data visualization. I presented my findings in a structured format to demonstrate my capability in analysis and scientific presentation.',
      driveLink: 'https://drive.google.com/file/d/1h1yfG6wOSVcqU9SW7lxcWOSV3U6MsqiL/view',
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

  // Convert Google Drive link to embeddable format
  const getEmbedUrl = (driveLink: string) => {
    const fileId = driveLink.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
    return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : driveLink;
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
              <div className="h-48 overflow-hidden bg-gray-800">
                <iframe 
                  src={getEmbedUrl(project.driveLink)}
                  className="w-full h-full border-0 pointer-events-none"
                  title={`Preview of ${project.title}`}
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
