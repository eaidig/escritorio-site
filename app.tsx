import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { 
  Menu, X, HandCoins, Briefcase, FileCheck, Accessibility, 
  Target, Heart, Users, Palette, ShoppingBag, 
  Phone, Mail, Instagram, MapPin, ExternalLink 
} from 'lucide-react';

// --- TIPOS ---
interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

interface ProjectItem {
  id: string;
  title: string;
  year: string;
  category: string;
  imageUrl: string;
  link?: string;
}

interface ProductItem {
  id: string;
  title: string;
  type: 'Livro' | 'Música' | 'Curso' | 'Documentário';
  imageUrl: string;
}

interface TestimonialItem {
  id: string;
  text: string;
  author: string;
  role: string;
}

// --- CONSTANTES ---
const LOGO_URL = "http://escritorio.art.br/escritorio-logo-rgb-png-roxo.png";

const NAV_LINKS = [
  { name: 'Início', href: '#inicio' },
  { name: 'Quem Somos', href: '#quem-somos' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Projetos', href: '#projetos' },
  { name: 'Artistas', href: '#artistas' },
  { name: 'Contato', href: '#contato' },
];

const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Captação de Recursos',
    description: 'Estratégias personalizadas para financiar sua ideia através de leis de incentivo e editais.',
    icon: HandCoins,
  },
  {
    id: '2',
    title: 'Gestão e Produção',
    description: 'Coordenação completa do seu projeto, garantindo execução impecável dentro do prazo.',
    icon: Briefcase,
  },
  {
    id: '3',
    title: 'Prestação de Contas',
    description: 'Transparência total e organização burocrática para garantir a conformidade legal.',
    icon: FileCheck,
  },
  {
    id: '4',
    title: 'Consultoria de Acessibilidade',
    description: 'Tornamos a cultura acessível para todos, adaptando projetos para inclusão total.',
    icon: Accessibility,
  },
];

const PROJECTS: ProjectItem[] = [
  {
    id: '1',
    title: 'Curta Esteiense Gaúcho aDeus nossos SONhoS',
    year: '2024',
    category: 'Cinema',
    imageUrl: 'https://adeusnossossonhos.com.br/aDeus_nossos_SONhoS_Logo_Transparente.png',
    link: 'https://adeusnossossonhos.com.br'
  },
  {
    id: '2',
    title: 'Sarau Ao Natural',
    year: '2023',
    category: 'Evento',
    imageUrl: 'https://sarauaonatural.art.br/Logo-Sarau-Ao-Natural-transparente2.png',
    link: 'https://sarauaonatural.art.br'
  },
  {
    id: '3',
    title: 'Encorajamento Musical',
    year: '2023',
    category: 'Educação',
    imageUrl: 'https://pigorproducoes.com.br/wp-content/uploads/2025/09/Encorajamento-Musical-Logo.png',
    link: 'https://www.youtube.com/watch?v=Ahdd5FC-4UQ&list=PLwqNOGYg_I8PJ_cmcA0HU7Ip8fkgeTUAa'
  },
];

const PRODUCTS: ProductItem[] = [
  {
    id: '1',
    title: 'A baleia na lagoa do violão',
    type: 'Livro',
    imageUrl: 'http://escritorio.art.br/abalaeidhaimaus.png',
  },
  {
    id: '2',
    title: 'O Poder Terapêutico de Cultivar Suculentas',
    type: 'Curso',
    imageUrl: 'https://escritorio.art.br/opoderterapeuticodocultivodesuculentas.jpg',
  },
  {
    id: '3',
    title: 'Hip Hop Nas Escolas de Uruguaiana',
    type: 'Documentário',
    imageUrl: 'https://picsum.photos/300/300?random=6',
  },
];

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    text: "O escritório foi o alicerce fundamental para tirar meus sonhos do papel. Sua gestão impecável e visão estratégica foram responsáveis por tornar meus projetos complexos em realidade tangível e impactante.",
    author: "Rodrigo Fontoura de Oliveira",
    role: "Artista e Idealizador"
  },
  {
    id: '2',
    text: "A consultoria em acessibilidade mudou nossa visão. Hoje nossos eventos acolhem a todos, graças ao olhar técnico e sensível da equipe.",
    author: "Juliana Costa",
    role: "Produtora Cultural"
  },
  {
    id: '3',
    text: "Profissionalismo ímpar na prestação de contas. A tranquilidade de saber que toda a burocracia está sendo cuidada com excelência não tem preço.",
    author: "Carlos Mendes",
    role: "Diretor de Teatro"
  }
];

const CONTACT_INFO = {
  phone: '+55 51 99637-8097',
  whatsappUrl: 'https://wa.me/5551996378097?text=Ol%C3%A1!%20Vim%20pelo%20site%20do%20Escrit%C3%B3rio%20de%20Arte%20%26%20Cultura%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.',
  email: 'contato@escritorio.art.br',
  address: 'TORRES, RS - Brasil',
  instagram: 'https://www.instagram.com/escritorio_de_arte_e_cultura/',
};

// --- COMPONENTES ---

// Componente Reveal (Animação ao rolar)
const Reveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number; width?: "fit-content" | "100%" }> = ({ 
  children, 
  className = "", 
  delay = 0,
  width = "100%"
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      style={{ width }}
      className={`${className} transition-all duration-1000 ease-out transform ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-12"
      }`}
    >
      {children}
    </div>
  );
};

// Componente Button
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', href, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-base font-bold transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-white text-brand-purple hover:bg-gray-100 focus:ring-white shadow-lg",
    secondary: "bg-brand-purple text-white hover:bg-brand-light focus:ring-brand-purple shadow-md",
    outline: "border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

// Componente Header
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#inicio" className="flex items-center">
              {isScrolled ? (
                <img 
                  src={LOGO_URL} 
                  alt="Escritório de Arte & Cultura" 
                  className="h-12 w-auto transition-opacity duration-300"
                />
              ) : (
                <span className="font-heading font-bold text-xl md:text-2xl text-white transition-colors duration-300">
                  Escritório de Arte & Cultura
                </span>
              )}
            </a>
          </div>

          <nav className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold hover:text-opacity-80 transition-colors duration-300 ${
                  isScrolled ? 'text-gray-800 hover:text-brand-purple' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${isScrolled ? 'text-brand-purple' : 'text-white'}`}
              aria-label="Menu Principal"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 transform transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block w-full text-center px-3 py-3 text-base font-medium text-gray-700 hover:text-brand-purple hover:bg-gray-50 rounded-md transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

// Componente Hero
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
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L1440 120L1440 0C1440 0 1082.5 97.5 720 97.5C357.5 97.5 0 0 0 0L0 120Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

// Componente About
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

// Componente Services
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

// Componente Projects
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

// Componente Artists
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

// Componente Footer
const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-gray-900 text-white pt-16 pb-10 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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

// --- APP PRINCIPAL ---
function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Artists />
      </main>
      <Footer />
    </div>
  );
}

// --- ENTRY POINT ---
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}