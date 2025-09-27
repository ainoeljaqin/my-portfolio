import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects, categories } from '../data/mockData';

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-dark-grey/10 rounded-lg overflow-hidden border border-dark-grey/30 hover:border-teal-accent/50 transition-all duration-300 hover:transform hover:scale-105">
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-teal-accent transition-colors">
          {project.title}
        </h3>
        
        <p className="text-grey text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs font-mono uppercase tracking-wider bg-teal-accent/10 text-teal-accent border border-teal-accent/30 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <a 
            href={project.codeUrl}
            className="flex items-center gap-2 px-4 py-2 bg-dark-grey/30 text-white rounded-full text-sm font-mono uppercase tracking-wider hover:bg-teal-accent hover:text-black transition-all duration-300"
          >
            <Github size={16} />
            Code
          </a>
          
          {project.demoUrl && (
            <a 
              href={project.demoUrl}
              className="flex items-center gap-2 px-4 py-2 border border-teal-accent text-teal-accent rounded-full text-sm font-mono uppercase tracking-wider hover:bg-teal-accent hover:text-black transition-all duration-300"
            >
              <ExternalLink size={16} />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-4xl md:text-6xl mb-6 bg-gradient-to-r from-white via-teal-accent to-white bg-clip-text text-transparent">
            Projects
          </h1>
          <p className="text-grey text-lg max-w-2xl mx-auto">
            A showcase of my technical skills, research, and creativity through various development projects.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-mono text-sm uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-teal-accent text-black'
                  : 'bg-dark-grey/20 text-grey hover:bg-teal-accent/20 hover:text-teal-accent border border-dark-grey/30 hover:border-teal-accent/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-grey text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;