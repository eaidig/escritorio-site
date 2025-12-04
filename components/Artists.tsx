import React from 'react';
import { PRODUCTS } from '../constants';
import { Palette, ShoppingBag } from 'lucide-react';
import Reveal from './Reveal';

const Artists: React.FC = () => {
  return (
    <section id="artistas" className="py-20 bg-brand-purple text-white relative scroll-mt-28">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="mb-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Nossos Artistas & Produtos
            </h2>
            <p className="text-purple-100 max-w-2xl mx-auto">
              Talentos que agenciamos e obras que produzimos com orgulho.
            </p>
          </div>
        </Reveal>

        {/* Featured Artist */}
        <Reveal>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 mb-16 border border-white/20 hover:bg-white/15 transition-colors duration-300">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
                <img 
                  src="https://escritorio.art.br/dhaimaus.png" 
                  alt="Dhai Maús" 
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                   <Palette className="text-purple-300" size={24}/>
                   <span className="text-purple-200 font-bold uppercase tracking-wide text-sm">Artista Destaque</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">Dhai Maús</h3>
                <h4 className="text-xl text-purple-200 font-medium mb-4 italic">Arte brasileira com alma de mundo</h4>
                
                <p className="text-lg text-purple-50 leading-relaxed mb-6">
                  Artista visual, escritora, pesquisadora e criadora do método <strong>Art Experience</strong>. 
                  Sua trajetória internacional atravessa pintura, palavra e performance como linguagens de cura e transformação. 
                  Referência na "estética da diferença", Dhai une arte, educação e afeto para transformar experiências humanas em linguagem sensível.
                </p>
                
                <a 
                  href="https://dhaimaus.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white font-bold hover:text-purple-200 transition-colors duration-300 border-b-2 border-white hover:border-purple-200 pb-1"
                >
                  Visitar Site Oficial
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Products Grid */}
        <Reveal className="mb-8">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <ShoppingBag className="text-purple-300" />
            Produtos Culturais
          </h3>
        </Reveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, index) => (
            <Reveal key={product.id} delay={index * 100} className="h-full">
              <div className="bg-white text-gray-800 rounded-lg overflow-hidden shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300 h-full flex flex-col group">
                <div className="h-48 overflow-hidden flex-shrink-0">
                  <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-bold text-brand-purple uppercase tracking-wider mb-2 block">
                    {product.type}
                  </span>
                  <h4 className="text-lg font-bold mb-4 leading-snug min-h-[3.5rem] flex-grow group-hover:text-brand-purple transition-colors duration-300">
                    {product.title}
                  </h4>
                  <button className="w-full py-2 bg-gray-100 hover:bg-brand-purple hover:text-white text-gray-700 font-semibold rounded transition-all duration-300 text-sm mt-auto shadow-sm hover:shadow-md">
                    Saiba Mais
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artists;