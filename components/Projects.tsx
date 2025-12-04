import React from 'react';
import { PROJECTS } from '../constants';
import Button from './Button';
import Reveal from './Reveal';

const Projects: React.FC = () => {
  return (
    <section id="projetos" className="py-20 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-purple mb-2">
                Projetos Aprovados
              </h2>
              <p className="text-gray-600">Histórico de sucessos e realizações.</p>
            </div>
            <Button variant="secondary" className="hidden md:inline-flex" href="#contato">
              Seja nosso próximo case
            </Button>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.id} delay={index * 150}>
              <a 
                href={project.link || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-300 border border-gray-100"
              >
                <div className="aspect-w-16 aspect-h-12 w-full h-64 overflow-hidden bg-gray-50 p-6 flex items-center justify-center">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-block px-3 py-1 bg-brand-purple text-white text-xs font-bold rounded-full w-fit mb-2 shadow-sm">
                    {project.year}
                  </span>
                  <h3 className="text-white text-xl font-bold leading-tight mb-1 group-hover:text-purple-200 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.category}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
        
        <Reveal className="mt-12 text-center md:hidden">
           <Button variant="secondary" href="#contato">
            Seja nosso próximo case
          </Button>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;