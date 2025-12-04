import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative bg-brand-purple pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 opacity-10 pattern-grid-lg text-white" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
          Transformando Projetos <br />
          <span className="text-purple-200">em Realidade</span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-purple-100 mb-10 leading-relaxed">
          Do planejamento à execução, transformamos ideias em projetos culturais viáveis, acessíveis e impactantes.
        </p>
        
        <div className="flex justify-center">
          <Button href="#contato" variant="primary" className="text-lg px-10 py-4 shadow-xl transform hover:-translate-y-1">
            Quero realizar meu projeto!
          </Button>
        </div>
      </div>
      
      {/* Decorative curve at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L1440 120L1440 0C1440 0 1082.5 97.5 720 97.5C357.5 97.5 0 0 0 0L0 120Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;