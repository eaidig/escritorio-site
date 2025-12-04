import { 
  HandCoins, 
  Briefcase, 
  FileCheck, 
  Accessibility, 
  Music, 
  BookOpen, 
  Sprout 
} from 'lucide-react';
import { ServiceItem, ProjectItem, ProductItem, TestimonialItem } from './types';

export const LOGO_URL = "http://escritorio.art.br/escritorio-logo-rgb-png-roxo.png";

export const NAV_LINKS = [
  { name: 'Início', href: '#inicio' },
  { name: 'Quem Somos', href: '#quem-somos' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Projetos', href: '#projetos' },
  { name: 'Artistas', href: '#artistas' },
  { name: 'Contato', href: '#contato' },
];

export const SERVICES: ServiceItem[] = [
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

export const PROJECTS: ProjectItem[] = [
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

export const PRODUCTS: ProductItem[] = [
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

export const TESTIMONIALS: TestimonialItem[] = [
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

export const CONTACT_INFO = {
  phone: '+55 51 99637-8097',
  whatsappUrl: 'https://wa.me/5551996378097?text=Ol%C3%A1!%20Vim%20pelo%20site%20do%20Escrit%C3%B3rio%20de%20Arte%20%26%20Cultura%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.',
  email: 'contato@escritorio.art.br',
  address: 'TORRES, RS - Brasil',
  instagram: 'https://www.instagram.com/escritorio_de_arte_e_cultura/',
};