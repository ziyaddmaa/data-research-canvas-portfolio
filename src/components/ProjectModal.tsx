
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink, X } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  driveLink: string;
  category: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-gray-800">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-gradient">
              {project.title}
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Project Image */}
          <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Category Badge */}
          <div className="inline-block">
            <span className="px-3 py-1 bg-blue-gradient text-white text-sm font-medium rounded-full">
              {project.category}
            </span>
          </div>
          
          {/* Full Description */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Project Overview</h3>
            <p className="text-gray-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>
          
          {/* Action Button */}
          <div className="flex justify-center pt-4">
            <Button 
              onClick={() => window.open(project.driveLink, '_blank')}
              className="bg-blue-gradient hover:opacity-90 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover-glow"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Full Project
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
