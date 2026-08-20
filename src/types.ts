export type ThemeMode = 'dark' | 'light';

export type NavigationSection = 'home' | 'about' | 'projects' | 'skills' | 'contact';

export type ProjectCategory = 
  | 'Tecnologia'
  | 'Design e Criação Digital'
  | 'Conteúdo para Redes Sociais'
  | 'Organização'
  | 'Jardinagem e Paisagismo'
  | 'Projetos Acadêmicos & Profissionais';

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  year: string;
  description: string;
  
  // Editorial Case Study Structure
  context: string;
  challenge: string;
  process: string[];
  solution: string;
  result: string;
  
  deliverables: string[];
  tags: string[];
  primaryLink?: string;
  secondaryLink?: string;
  githubLink?: string;
  status: 'Publicado' | 'Em Destaque' | 'Autoral';
  accentColor: string;
  imageUrl: string;
  aspectClass: string; // e.g. 'aspect-[4/5]', 'aspect-[16/10]', 'aspect-square'
  colSpanClass: string; // e.g. 'lg:col-span-7', 'lg:col-span-5'
  featuredQuote?: string;
}

export interface TechnicalSkillItem {
  name: string;
  shortDesc: string;
  details: string;
  tools: string[];
  proficiency: 'Avançado' | 'Especializado' | 'Prático';
  iconName: string;
}

export interface InterpersonalSkillItem {
  name: string;
  definition: string;
  inPractice: string;
  iconName: string;
  highlightTag: string;
}

export interface SocialLink {
  id: string;
  name: string;
  handle: string;
  url: string;
  icon: string;
  description: string;
  primary?: boolean;
}
