import React from 'react';
import { Target, Heart, Users } from 'lucide-react';
import Reveal from './Reveal';
import { LOGO_URL } from '../constants';

const About: React.FC = () => {
  return (
    <section id="quem-somos" className="py-20 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-purple mb-4">
              Quem Somos
            </h2>
            <div className="w-24 h-1 bg-brand-purple mx-auto rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative flex justify-center p-8 bg-brand-bg rounded-2xl">
              <div className="absolute -top-4 -left-4 w-full h-full bg-brand-purple rounded-2xl opacity-5"></div>
              <img 
                src={LOGO_URL} 
                alt="Logo Escritório de Arte & Cultura" 
                className="relative z-10 w-full max-w-sm object-contain drop-shadow-lg transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Somos a ponte entre sua arte e o mundo.
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                O Escritório de Arte & Cultura nasceu da necessidade de profissionalizar a gestão de carreiras artísticas e a produção de eventos. Nossa missão é desburocratizar a cultura.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Temos um foco especial em <strong className="text-brand-purple">Acessibilidade Cultural</strong>. Acreditamos que a cultura deve ser para todos, sem barreiras. Trabalhamos ativamente para que cada projeto que tocamos seja inclusivo e impactante socialmente.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="flex flex-col items-center text-center p-4 bg-brand-bg rounded-lg hover:shadow-md transition-shadow duration-300">
                  <Target className="text-brand-purple mb-2" size={32} />
                  <span className="font-semibold text-sm">Foco em Resultados</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-brand-bg rounded-lg hover:shadow-md transition-shadow duration-300">
                  <Heart className="text-brand-purple mb-2" size={32} />
                  <span className="font-semibold text-sm">Paixão pela Arte</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-brand-bg rounded-lg hover:shadow-md transition-shadow duration-300">
                  <Users className="text-brand-purple mb-2" size={32} />
                  <span className="font-semibold text-sm">Cultura para Todos</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;