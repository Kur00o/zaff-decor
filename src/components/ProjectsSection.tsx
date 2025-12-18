import { ArrowRight, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  image: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 sm:mb-16">
          <div>
            <span className="section-subtitle inline-block mb-4 text-xs sm:text-sm">Portfolio</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground">
              Featured <span className="text-gradient-gold">Projects</span>
            </h2>
          </div>
          <a
            href="#"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-primary font-medium group text-sm sm:text-base"
          >
            View All Projects
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Projects Grid - Masonry Style */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
          {/* Large Featured Project */}
          <div className="sm:row-span-2 group relative overflow-hidden rounded-sm">
            <div className="aspect-[3/4] sm:aspect-auto sm:h-full">
              <img
                src={projects[0]?.image}
                alt={projects[0]?.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            </div>
            
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
              <span className="text-primary text-xs sm:text-sm tracking-wide mb-2 block">
                {projects[0]?.category}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-foreground mb-2 sm:mb-4">
                {projects[0]?.title}
              </h3>
              <button className="hidden sm:inline-flex items-center gap-2 text-foreground font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                View Project <ExternalLink size={16} />
              </button>
            </div>
            
            {/* Border Accent */}
            <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-sm transition-all duration-500" />
          </div>

          {/* Smaller Projects */}
          {projects.slice(1, 3).map((project, index) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-sm"
            >
              <div className="aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <span className="text-primary text-sm tracking-wide mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-display font-medium text-foreground">
                  {project.title}
                </h3>
              </div>
              
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-sm transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom Projects Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mt-4 sm:mt-8">
          {projects.slice(3, 6).map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-sm"
            >
              <div className="aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6">
                <span className="text-primary text-xs sm:text-sm tracking-wide mb-1 sm:mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-sm sm:text-lg font-display font-medium text-foreground">
                  {project.title}
                </h3>
              </div>
              
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-sm transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
