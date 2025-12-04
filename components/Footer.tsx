import React from 'react';
import { Phone, Mail, Instagram, MapPin, ExternalLink } from 'lucide-react';
import { CONTACT_INFO, TESTIMONIALS, LOGO_URL } from '../constants';
import Reveal from './Reveal';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-gray-900 text-white pt-16 pb-10 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Branding Logo */}
        <Reveal>
          <div className="mb-12 border-b border-gray-800 pb-8 flex flex-col md:flex-row items-center md:items-start justify-between">
            <div className="bg-white p-4 rounded-xl inline-block mb-4 md:mb-0 hover:scale-105 transition-transform duration-300">
              <img src={LOGO_URL} alt="Escritório de Arte & Cultura" className="h-16 w-auto" />
            </div>
            <p className="text-gray-400 text-sm max-w-md text-center md:text-right">
              Gestão cultural profissional, acessível e transparente para artistas e produtores.
            </p>
          </div>
        </Reveal>

        {/* Top Section: Social Proof & Partners */}
        <Reveal delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 border-b border-gray-800 pb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-brand-purple">O que dizem sobre nós</h3>
              <div className="space-y-6">
                {TESTIMONIALS.map((testimonial) => (
                  <div key={testimonial.id} className="bg-gray-800 p-4 rounded-lg border-l-4 border-brand-purple hover:bg-gray-750 transition-colors duration-300">
                    <p className="italic text-gray-300 mb-3">"{testimonial.text}"</p>
                    <div className="font-bold text-white text-sm">
                      {testimonial.author} <span className="text-gray-500 font-normal">- {testimonial.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-brand-purple">Parceiros & Mídia</h3>
              <div className="flex flex-wrap gap-4 items-center mb-8">
                <a 
                  href="https://digli.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white/10 hover:bg-brand-purple transition-all duration-300 rounded-md font-bold text-gray-300 hover:text-white flex items-center gap-2 hover:shadow-lg transform hover:-translate-y-1"
                >
                  DigLi Estúdio
                </a>
                <a 
                  href="https://pigorproducoes.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white/10 hover:bg-brand-purple transition-all duration-300 rounded-md font-bold text-gray-300 hover:text-white flex items-center gap-2 hover:shadow-lg transform hover:-translate-y-1"
                >
                  Pigor Produções
                </a>
                <a 
                  href="https://sarauaonatural.art.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white/10 hover:bg-brand-purple transition-all duration-300 rounded-md font-bold text-gray-300 hover:text-white flex items-center gap-2 hover:shadow-lg transform hover:-translate-y-1"
                >
                  Sarau Ao Natural
                </a>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-400 mb-3 uppercase text-sm border-b border-gray-700 pb-2 w-fit">Na Mídia</h4>
                <ul className="space-y-3 text-gray-400 text-sm">
                  <li>
                    <a 
                      href="https://g1.globo.com/sp/sao-carlos-regiao/especial-publicitario/dhai-mau/noticia/2024/10/15/dhai-maus-superando-o-parkinson-e-conquistando-o-cenario-internacional-da-arte.ghtml"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-2 hover:text-brand-purple transition-colors duration-300 group"
                    >
                      <ExternalLink size={16} className="mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" /> 
                      <span className="leading-snug">
                        Dhai Maús: Superação e Arte Internacional <br/>
                        <span className="text-xs text-gray-500 group-hover:text-purple-400 transition-colors">Matéria G1 - Out/2024</span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Middle Section: Contact Info */}
        <Reveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <a 
                href={CONTACT_INFO.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center md:items-start"
                aria-label="Iniciar conversa no WhatsApp"
              >
                <div className="w-12 h-12 bg-brand-purple rounded-full flex items-center justify-center mb-4 group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-green-900/50">
                  <Phone className="text-white" />
                </div>
                <h4 className="text-lg font-bold mb-1 group-hover:text-[#25D366] transition-colors duration-300">WhatsApp / Telefone</h4>
                <p className="text-gray-400 group-hover:text-white transition-colors duration-300 mb-2">{CONTACT_INFO.phone}</p>
                <span className="text-xs font-bold text-[#25D366] uppercase tracking-wider border-b border-[#25D366] pb-0.5 group-hover:text-[#4ade80] group-hover:border-[#4ade80]">
                  Iniciar Conversa
                </span>
              </a>
            </div>
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left group">
              <div className="w-12 h-12 bg-brand-purple rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="text-white" />
              </div>
              <h4 className="text-lg font-bold mb-2">Email</h4>
              <p className="text-gray-400">{CONTACT_INFO.email}</p>
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left group">
              <div className="w-12 h-12 bg-brand-purple rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="text-white" />
              </div>
              <h4 className="text-lg font-bold mb-2">Localização</h4>
              <p className="text-gray-400">{CONTACT_INFO.address}</p>
            </div>
          </div>
        </Reveal>

        {/* Bottom Section: Copyright */}
        <Reveal delay={300}>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left space-y-1">
               <p className="text-gray-500 text-sm">
                 &copy; 2025 Escritório de Arte & Cultura. Todos os direitos reservados.
               </p>
               <p className="text-gray-600 text-xs">
                 Site feito com muito amor por <a href="https://pigorproducoes.com.br" target="_blank" rel="noopener noreferrer" className="text-brand-purple hover:text-white transition-colors duration-300">Pigor Produções</a>
               </p>
            </div>
            <div className="flex space-x-6">
              <a 
                href={CONTACT_INFO.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-purple transition-colors duration-300 transform hover:scale-110"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;