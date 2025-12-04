import React from 'react';
import { SERVICES } from '../constants';
import Reveal from './Reveal';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 bg-brand-bg scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Soluções completas para viabilizar e gerenciar sua produção cultural com excelência.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={index * 100} className="h-full">
              <div 
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-brand-purple group h-full flex flex-col hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-purple transition-colors duration-300 flex-shrink-0">
                  <service.icon size={32} className="text-brand-purple group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;