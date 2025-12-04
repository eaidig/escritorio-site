// Fix: Import React to allow usage of React.ElementType
import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface ProjectItem {
  id: string;
  title: string;
  year: string;
  category: string;
  imageUrl: string;
  link?: string;
}

export interface ProductItem {
  id: string;
  title: string;
  type: 'Livro' | 'Música' | 'Curso' | 'Documentário';
  imageUrl: string;
}

export interface TestimonialItem {
  id: string;
  text: string;
  author: string;
  role: string;
}