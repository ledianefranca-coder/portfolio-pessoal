import { Project, TechnicalSkillItem, InterpersonalSkillItem, SocialLink } from '../types';

export const PERSONAL_INFO = {
  name: 'Lediane França',
  title: 'Portfólio Criativo & Curadoria Profissional',
  role: 'Tecnologia • Criatividade • Organização • Natureza',
  email: 'lediane.franca@gmail.com',
  location: 'Brasília / Brasil • Disponível para Projetos & Remoto',
  availability: 'Disponível para novos projetos, consultorias e oportunidades',
  
  // Tagline central
  heroTagline: 'Transformando ideias, sensibilidade e tecnologia em projetos digitais, rotinas harmoniosas e experiências com propósito.',
  
  // Manifesto de identidade
  manifesto: 'Acredito que o verdadeiro crescimento acontece quando unimos rigor técnico, sensibilidade estética e organização consciente. Como na natureza, cada projeto passa pelas etapas de germinar, cultivar, brotar e florescer.',
  
  bioEditorial: `Sou uma profissional dedicada, organizada e comprometida com a evolução contínua. Minha trajetória se constrói na intersecção entre tecnologia, criação de conteúdo digital, metodologias de organização de rotinas e sensibilidade botânica. Ao longo dos anos, venho desenvolvendo projetos digitais completos — desde aplicações web responsivas publicadas na Vercel até produções audiovisuais, design instrucional e consultorias de organização de ambientes. Acredito que diferentes saberes se integram para formar uma atuação profissional autoral, ética, acolhedora e focada na mais alta qualidade de entrega.`,
  
  growthStages: [
    {
      phase: '01',
      title: 'Germinação',
      subtitle: 'Curiosidade & Fundamentos',
      desc: 'Formação contínua, operador de computação com IA, pesquisa aprofundada e estruturação de bases sólidas.',
      icon: 'Sprout'
    },
    {
      phase: '02',
      title: 'Cultivo',
      subtitle: 'Método & Organização',
      desc: 'Desenvolvimento de métodos de personal organizer, gestão do tempo, disciplina diária e harmonia de espaços.',
      icon: 'Sun'
    },
    {
      phase: '03',
      title: 'Brotar',
      subtitle: 'Criação & Tecnologia',
      desc: 'Desenvolvimento de aplicações web, produção audiovisual, curadoria de conteúdo e presença digital ativa.',
      icon: 'Leaf'
    },
    {
      phase: '04',
      title: 'Florescer',
      subtitle: 'Impacto & Maturidade',
      desc: 'Projetos autorais com propósito, conexões humanas genuínas, compartilhamento de valor e entrega com excelência.',
      icon: 'Flower2'
    }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'palavra-diaria',
    number: '01',
    title: 'Palavra Diária',
    subtitle: 'Aplicação Web de Inspiração & Reflexão Contínua',
    category: 'Tecnologia',
    year: '2025',
    description: 'Plataforma web interativa com curadoria de mensagens de inspiração diária, reflexão consciente e bem-estar, com deploy contínuo na Vercel.',
    
    // Case Study Structure
    context: 'Em um cenário de sobrecarga informacional e ritmos acelerados, surgiu a necessidade de criar um refúgio digital diário onde o usuário pudesse pausar, ler uma mensagem inspiradora e resgatar a clareza mental.',
    challenge: 'Desenvolver uma experiência web leve, instantânea, fluida em dispositivos móveis e com tipografia acolhedora que transmitisse serenidade sem distrações visuais ou lentidão técnica.',
    process: [
      'Mapeamento de necessidades emocionais e temas reflexivos diários',
      'Definição da identidade visual com paleta suave e contrastes suaves',
      'Arquitetura de componentes modulares em React e TypeScript',
      'Otimização de performance, tempo de carregamento e deploy automatizado na Vercel'
    ],
    solution: 'Uma interface limpa e contemplativa com tipografia editorial, carregamento instantâneo, curadoria de pensamentos edificantes e design responsivo com microinterações suaves.',
    result: 'Aplicação ao vivo na Vercel com alta performance, navegação intuitiva e recepção positiva de leitores diários em busca de momentos de serenidade.',
    
    deliverables: [
      'Interface web completa 100% responsiva (Mobile & Desktop)',
      'Curadoria de textos e pensamentos edificantes',
      'Pipeline de deploy contínuo configurado na Vercel',
      'Design System minimalista focado em legibilidade'
    ],
    tags: ['Tecnologia', 'Vercel', 'Web App', 'React', 'Design Minimalista'],
    primaryLink: 'https://palavra-di-ria.vercel.app',
    secondaryLink: 'https://vercel.com/lediane/palavra-di-ria',
    githubLink: 'https://github.com/lediane/palavra-di-ria',
    status: 'Em Destaque',
    accentColor: '#9333ea',
    imageUrl: 'https://images.unsplash.com/photo-1507842229451-79b1be886a27?auto=format&fit=crop&w=1200&q=80',
    aspectClass: 'aspect-[16/10]',
    colSpanClass: 'lg:col-span-8',
    featuredQuote: '“Um refúgio digital diário onde a tecnologia serve ao cultivo da paz interior.”'
  },
  {
    id: 'florescer-diario',
    number: '02',
    title: 'Florescer Diário',
    subtitle: 'Cultivo de Hábitos, Autocuidado & Bem-Estar',
    category: 'Design e Criação Digital',
    year: '2025',
    description: 'Ambiente digital estruturado para o florescimento pessoal, acompanhamento consciente de rotinas saudáveis e desenvolvimento humano.',
    
    context: 'A consolidação de novos hábitos requer constância e afeto. O projeto Florescer Diário foi criado como um guia digital interativo que entrelaça autocuidado, harmonia e disciplina sustentável.',
    challenge: 'Projetar uma interface que não gerasse ansiedade por métricas rígidas, mas que incentivasse o usuário a reconhecer pequenos passos de evolução diária.',
    process: [
      'Pesquisa em psicologia positiva, rotinas de autocuidado e biofilia',
      'Construção de fluxos de hábitos diários, semanais e reflexões de encerramento',
      'Criação de grafismos orgânicos e transições visuais que remetem ao florescer botânico',
      'Implementação com arquitetura moderna e deploy responsivo'
    ],
    solution: 'Uma plataforma envolvente com paleta floral sofisticada, cartões de hábitos com feedback visual relaxante e espaço para anotações reflexivas de gratidão e aprendizado.',
    result: 'Ferramenta prática e inspiradora em produção na Vercel que transforma a rotina de autocuidado em um ritual estético e funcional.',
    
    deliverables: [
      'Estrutura interativa de hábitos conscientes',
      'Direção de arte botânica e elementos gráficos autorais',
      'Sistema de categorização por áreas de bem-estar',
      'Deploy em produção na plataforma Vercel'
    ],
    tags: ['Design Digital', 'Vercel', 'Bem-Estar', 'UI/UX', 'Florescimento'],
    primaryLink: 'https://florescer-di-rio.vercel.app',
    secondaryLink: 'https://vercel.com/lediane/florescer-di-rio',
    githubLink: 'https://github.com/lediane/florescer-di-rio',
    status: 'Em Destaque',
    accentColor: '#ec4899',
    imageUrl: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=80',
    aspectClass: 'aspect-[4/5]',
    colSpanClass: 'lg:col-span-4',
    featuredQuote: '“Cultivar a si mesma diariamente é o primeiro passo para florescer em qualquer ambiente.”'
  },
  {
    id: 'sementes-de-plenitude',
    number: '03',
    title: 'Sementes de Plenitude',
    subtitle: 'Conteúdo Digital, Sabedoria & Presença',
    category: 'Conteúdo para Redes Sociais',
    year: '2025',
    description: 'Projeto editorial e multiplataforma de produção de conteúdo digital focado em reflexões de vida, fé, conexão com a natureza e plenitude.',
    
    context: 'As redes sociais frequentemente promovem consumo raso de conteúdo. O projeto Sementes de Plenitude surgiu para produzir conteúdos audiovisuais e visuais com densidade emocional e estética impecável.',
    challenge: 'Manter um fluxo contínuo de produção de vídeos curtos, carrosséis informativos e mensagens com alto nível de engajamento respeitoso e fidelidade à proposta reflexiva.',
    process: [
      'Curadoria de pautas temáticas: natureza, cultivo, equilíbrio mental e valores humanos',
      'Roteirização, gravação, edição de vídeo com ritmos contemplativos e sonoplastia suave',
      'Diagramação de peças visuais para Instagram, TikTok, YouTube e Kwai',
      'Acompanhamento de interações e criação de comunidade engajada'
    ],
    solution: 'Ecossistema multiplataforma com identidade visual coesa, vídeos de alto impacto visual e publicações que levam inspiração diária a milhares de pessoas.',
    result: 'Presença digital consolidada com comunidade ativa nas redes sociais (Instagram, TikTok, Kwai e canal no YouTube @ledianefranca).',
    
    deliverables: [
      'Produção e edição de mais de dezenas de vídeos reflexivos curtos',
      'Desenvolvimento de templates gráficos e identidade visual para canais',
      'Web app complementar na Vercel com mensagens do projeto',
      'Planejamento de calendário editorial contínuo'
    ],
    tags: ['Conteúdo Digital', 'Edição de Vídeo', 'Redes Sociais', 'YouTube', 'TikTok'],
    primaryLink: 'https://sementes-de-plenitude.vercel.app/',
    secondaryLink: 'https://www.youtube.com/@ledianefranca',
    githubLink: 'https://github.com/lediane/sementes-de-plenitude',
    status: 'Em Destaque',
    accentColor: '#c084fc',
    imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1000&q=80',
    aspectClass: 'aspect-[4/5]',
    colSpanClass: 'lg:col-span-5',
    featuredQuote: '“Cada palavra e cada imagem são sementes plantadas no coração de quem assiste.”'
  },
  {
    id: 'metodo-organizacao',
    number: '04',
    title: 'Método & Harmonia de Ambientes',
    subtitle: 'Personal Organizer, Rotinas & Otimização de Espaços',
    category: 'Organização',
    year: '2024',
    description: 'Sistematização de processos de organização residencial, planejamento de rotinas funcionais e descarte consciente para bem-estar familiar.',
    
    context: 'Espaços desordenados geram sobrecarga cognitiva e atritos no cotidiano. O projeto desenvolveu uma metodologia prática de organização estruturada em etapas lógicas.',
    challenge: 'Criar um método aplicável que não apenas organizasse o espaço momentaneamente, mas que fosse sustentável e fácil de manter pelos próprios moradores.',
    process: [
      'Diagnóstico inicial de pontos críticos de desordem e hábitos de circulação',
      'Etapas de categorização, triagem criteriosa e descarte consciente',
      'Definição de layout funcional, etiquetagem e setorização de itens',
      'Elaboração de manual de manutenção de rotina e cronograma de cuidados'
    ],
    solution: 'Um conjunto de diretrizes de Personal Organizer com protocolos passo a passo, checklists digitais e diretrizes de ergonomia e harmonia espacial.',
    result: 'Transformação concreta de ambientes, redução de desperdício de tempo e aumento comprovado de tranquilidade na rotina doméstica.',
    
    deliverables: [
      'Manual de triagem e categorização de ambientes',
      'Cronogramas semanais e mensais de manutenção de rotina',
      'Diretrizes de layout e aproveitamento inteligente de espaços'
    ],
    tags: ['Personal Organizer', 'Planejamento', 'Gestão do Tempo', 'Organização de Ambientes'],
    primaryLink: '#contato',
    status: 'Publicado',
    accentColor: '#e879f9',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    aspectClass: 'aspect-[16/10]',
    colSpanClass: 'lg:col-span-7',
    featuredQuote: '“Organizar o espaço ao redor é também organizar a mente e abrir espaço para o que realmente importa.”'
  },
  {
    id: 'jardinagem-biofilia',
    number: '05',
    title: 'Cultivo Botânico & Paisagismo Sensorial',
    subtitle: 'Sensibilidade Botânica, Manejo & Conexão com a Natureza',
    category: 'Jardinagem e Paisagismo',
    year: '2024',
    description: 'Projetos práticos de cultivo de plantas, manejo sustentável de substratos, composição paisagística e integração da biofilia no cotidiano.',
    
    context: 'A presença do verde no ambiente de trabalho e residência melhora o foco, a purificação do ar e o bem-estar mental. O projeto une conhecimentos botânicos práticos a propostas de paisagismo sensorial.',
    challenge: 'Adequar espécies a diferentes microclimas e condições de luminosidade, garantindo a longevidade e a vitalidade de cada exemplar com cuidados orgânicos.',
    process: [
      'Avaliação técnica de luminosidade, ventilação e drenagem do espaço',
      'Seleção de espécies ornamentais e folhagens adequadas ao ambiente',
      'Preparo de substratos equilibrados, adubação orgânica e técnicas de poda',
      'Criação de rotinas de rega e manutenção preventiva'
    ],
    solution: 'Composições botânicas harmoniosas que equilibram texturas, alturas e cores foliares, criando recantos de calma e conexão genuína com a natureza.',
    result: 'Plantas saudáveis, ambientes transformados e difusão de conhecimento sobre cuidados vegetais em conteúdos digitais e projetos práticos.',
    
    deliverables: [
      'Composições de vasos e jardins internos/externos',
      'Guia prático de regas, adubação orgânica e controle natural de pragas',
      'Produção de conteúdo educativo em redes sociais sobre botânica'
    ],
    tags: ['Jardinagem', 'Paisagismo', 'Biofilia', 'Botânica', 'Natureza'],
    primaryLink: '#contato',
    status: 'Publicado',
    accentColor: '#10b981',
    imageUrl: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=1000&q=80',
    aspectClass: 'aspect-[4/5]',
    colSpanClass: 'lg:col-span-6',
    featuredQuote: '“Aprender com o tempo das plantas é aprender sobre paciência, cuidado e florescimento.”'
  },
  {
    id: 'academico-instrucional',
    number: '06',
    title: 'Curadoria & Design Instrucional',
    subtitle: 'Elaboração de Trabalhos Acadêmicos & Suporte Educacional',
    category: 'Projetos Acadêmicos & Profissionais',
    year: '2024',
    description: 'Desenvolvimento e formatação de materiais informativos, trabalhos acadêmicos e projetos profissionais com foco em didática, psicanálise e recursos humanos.',
    
    context: 'A comunicação de dados científicos, acadêmicos e organizacionais exige clareza metodológica, rigor formal e apresentação visual atrativa.',
    challenge: 'Estruturar volumes extensos de pesquisa em documentos organizados, de leitura fluida e visualmente estimulantes, respeitando normas e requisitos técnicos.',
    process: [
      'Levantamento bibliográfico criterioso e sistematização de dados',
      'Estruturação lógica de tópicos, introdução, fundamentação e conclusões',
      'Diagramação profissional com foco em legibilidade e hierarquia tipográfica',
      'Revisão gramatical, textual e adequação de tom de voz'
    ],
    solution: 'Materiais educativos e relatórios técnicos impecáveis que combinam profundidade conceitual com design visual moderno e compreensível.',
    result: 'Projetos apresentados com sucesso, materiais didáticos bem avaliados e consolidação de metodologias de suporte educacional.',
    
    deliverables: [
      'Apostilas, relatórios e infográficos educativos',
      'Formatação e padronização de trabalhos acadêmicos',
      'Sistematização de estudos em Gestão de RH e Psicanálise'
    ],
    tags: ['Design Instrucional', 'Acadêmico', 'Recursos Humanos', 'Pesquisa', 'Educação'],
    primaryLink: '#contato',
    status: 'Publicado',
    accentColor: '#f59e0b',
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80',
    aspectClass: 'aspect-[16/10]',
    colSpanClass: 'lg:col-span-6',
    featuredQuote: '“Transformar conhecimento complexo em conteúdo acessível e transformador.”'
  }
];

export const TECHNICAL_SKILLS: TechnicalSkillItem[] = [
  {
    name: 'Tecnologia & Operação Computacional',
    shortDesc: 'Sistemas operacionais, automação de tarefas e inteligência artificial aplicada.',
    details: 'Operação de sistemas computacionais, digitação ágil, navegação avançada, automação de rotinas digitais e aplicação de ferramentas de IA Generativa para ganho de produtividade.',
    tools: ['Windows', 'MacOS', 'IA Generativa', 'Google Workspace', 'Navegação Avançada'],
    proficiency: 'Avançado',
    iconName: 'Cpu'
  },
  {
    name: 'Criação de Conteúdo Digital',
    shortDesc: 'Produção editorial de posts, roteiros, pautas reflexivas e gestão de canais.',
    details: 'Desenvolvimento integral de narrativas para redes sociais com foco em reflexões, bem-estar, natureza e crescimento pessoal. Planejamento de calendário e alinhamento de tom de voz.',
    tools: ['Instagram', 'TikTok', 'YouTube', 'Kwai', 'Copywriting', 'Estratégia'],
    proficiency: 'Especializado',
    iconName: 'Smartphone'
  },
  {
    name: 'Edição de Imagens e Vídeos',
    shortDesc: 'Tratamento visual, cortes rítmicos, sonoplastia e diagramação estética.',
    details: 'Composição de layouts atrativos, enquadramentos, correção de cores, edição dinâmica de vídeos verticais e sonoplastia suave para materiais informativos e educativos.',
    tools: ['Canva Pro', 'CapCut', 'Softwares de Edição', 'Tratamento de Cor', 'Áudio'],
    proficiency: 'Avançado',
    iconName: 'Clapperboard'
  },
  {
    name: 'Organização e Planejamento',
    shortDesc: 'Personal Organizer, gestão de tempo, fluxos de rotina e otimização de ambientes.',
    details: 'Métodos estruturados de categorização de espaços físicos e virtuais, planejamento de cronogramas diários/semanais e descarte consciente para redução de atritos e estresse.',
    tools: ['Personal Organizer', 'Checklists', 'Sistemas de Rotina', 'Gestão de Espaços'],
    proficiency: 'Especializado',
    iconName: 'LayoutGrid'
  },
  {
    name: 'Desenvolvimento de Projetos',
    shortDesc: 'Estruturação de iniciativas do conceito à execução prática e mensuração de impacto.',
    details: 'Capacidade de transformar ideias abstratas em projetos tangíveis, definindo etapas, metas claras, cronogramas viáveis e acompanhamento minucioso de cada fase.',
    tools: ['Gestão de Projetos', 'Planejamento', 'Metodologias Ágeis', 'Design Thinking'],
    proficiency: 'Avançado',
    iconName: 'Compass'
  },
  {
    name: 'Ferramentas Digitais & Produtividade',
    shortDesc: 'Suítes de escritório, armazenamento em nuvem e comunicação colaborativa.',
    details: 'Domínio de editores de texto, planilhas organizacionais, apresentações visuais, organização de arquivos em nuvem e ferramentas colaborativas remotas.',
    tools: ['Google Docs/Sheets', 'Microsoft 365', 'Notion', 'Google Drive', 'Cloud Storage'],
    proficiency: 'Avançado',
    iconName: 'FolderKanban'
  },
  {
    name: 'GitHub e Projetos Web',
    shortDesc: 'Controle de versão, deploy contínuo em nuvem e manutenção de sites na Vercel.',
    details: 'Gerenciamento de repositórios no GitHub, versionamento de código, configuração de pipelines de deploy na Vercel e publicação de aplicações web responsivas.',
    tools: ['GitHub', 'Git', 'Vercel', 'Web Standards', 'Deploy Contínuo', 'HTML/CSS/JS'],
    proficiency: 'Avançado',
    iconName: 'Globe'
  },
  {
    name: 'Jardinagem e Paisagismo',
    shortDesc: 'Sensibilidade botânica, manejo orgânico de plantas e biofilia aplicada.',
    details: 'Identificação de espécies, cultivo de folhagens e flores, adubação equilibrada, podas, diagnóstico de saúde vegetal e planejamento de recantos verdes para harmonia ambiental.',
    tools: ['Botânica Prática', 'Manejo de Solo', 'Adubação Orgânica', 'Biofilia', 'Paisagismo'],
    proficiency: 'Especializado',
    iconName: 'Sprout'
  }
];

export const INTERPERSONAL_SKILLS: InterpersonalSkillItem[] = [
  {
    name: 'Criatividade',
    definition: 'Capacidade de enxergar conexões inovadoras entre diferentes áreas e gerar soluções visuais e práticas originais.',
    inPractice: 'Transforma conceitos teóricos e sensações em projetos visuais marcantes, aplicações acolhedoras e narrativas inspiradoras.',
    iconName: 'Sparkles',
    highlightTag: 'Pensamento Original'
  },
  {
    name: 'Organização',
    definition: 'Habilidade para estruturar fluxos, manter métodos claros e ordenar processos físicos e digitais com rigor e beleza.',
    inPractice: 'Garante que arquivos, cronogramas e entregas estejam sempre impecáveis, facilitando o trabalho individual e coletivo.',
    iconName: 'CheckCircle2',
    highlightTag: 'Método & Ordem'
  },
  {
    name: 'Comunicação',
    definition: 'Expressão assertiva, acolhedora e empática, com domínio da comunicação verbal, escrita e não-violenta.',
    inPractice: 'Transmite ideias com clareza cristalina, alinha expectativas sem ruídos e mantém um tom de respeito em todas as trocas.',
    iconName: 'MessageSquare',
    highlightTag: 'Clareza & Empatia'
  },
  {
    name: 'Proatividade',
    definition: 'Iniciativa contínua para antecipar necessidades, solucionar desafios e propor melhorias antes de ser solicitada.',
    inPractice: 'Identifica gargalos e cria imediatamente propostas práticas de otimização para elevar o padrão dos projetos.',
    iconName: 'Zap',
    highlightTag: 'Ação Antecipada'
  },
  {
    name: 'Adaptabilidade',
    definition: 'Flexibilidade cognitiva e emocional para navegar com serenidade por mudanças de cenário e novos aprendizados.',
    inPractice: 'Aprende rapidamente novas ferramentas e adapta métodos de trabalho às particularidades de cada contexto e equipe.',
    iconName: 'RefreshCw',
    highlightTag: 'Flexibilidade Rápida'
  },
  {
    name: 'Trabalho em Equipe',
    definition: 'Espírito colaborativo, escuta qualificada e disposição para somar competências em prol de objetivos comuns.',
    inPractice: 'Fomenta um clima harmonioso, valoriza as habilidades dos colegas e oferece apoio constante para o sucesso coletivo.',
    iconName: 'Users',
    highlightTag: 'Sinergia & Apoio'
  },
  {
    name: 'Responsabilidade',
    definition: 'Compromisso ético inegociável com prazos, integridade de informações e qualidade máxima das entregas.',
    inPractice: 'Assume a responsabilidade de cada projeto com zelo rigoroso, garantindo confiança absoluta em todas as etapas.',
    iconName: 'ShieldCheck',
    highlightTag: 'Compromisso Ético'
  },
  {
    name: 'Aprendizado Contínuo',
    definition: 'Curiosidade intelectual viva e sede constante de expansão técnica, cultural e de desenvolvimento humano.',
    inPractice: 'Dedica-se ativamente ao estudo de novas tendências, inteligência artificial, psicanálise e recursos humanos.',
    iconName: 'BookOpen',
    highlightTag: 'Evolução Constante'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@lediane.franca',
    url: 'https://www.instagram.com/lediane.franca',
    icon: 'Instagram',
    description: 'Reflexões, natureza, bem-estar, rotinas de cultivo e pílulas de inspiração diária.',
    primary: true
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    handle: '@lediane.franca',
    url: 'https://www.tiktok.com/@lediane.franca',
    icon: 'Music2',
    description: 'Vídeos curtos, inspirações visuais, mensagens reflexivas e momentos de serenidade.',
    primary: true
  },
  {
    id: 'github',
    name: 'GitHub',
    handle: 'github.com/lediane',
    url: 'https://github.com/lediane',
    icon: 'Github',
    description: 'Repositórios de código, projetos web, deploy na Vercel e experimentos tecnológicos.',
    primary: true
  },
  {
    id: 'email',
    name: 'E-mail Profissional',
    handle: 'lediane.franca@gmail.com',
    url: 'mailto:lediane.franca@gmail.com',
    icon: 'Mail',
    description: 'Canal direto para propostas, projetos, convites profissionais e parcerias.',
    primary: true
  },
  {
    id: 'youtube',
    name: 'YouTube',
    handle: '@ledianefranca',
    url: 'https://www.youtube.com/@ledianefranca',
    icon: 'Youtube',
    description: 'Sementinhas do Bem — reflexões longas, mensagens em vídeo e produções completas.',
    primary: false
  },
  {
    id: 'kwai',
    name: 'Kwai',
    handle: '@ledianefranca1000',
    url: 'https://www.kwai.com/@ledianefranca1000',
    icon: 'Clapperboard',
    description: 'Produções audiovisuais e conteúdos de inspiração diária.',
    primary: false
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'linkedin.com/in/lediane-franca',
    url: 'https://www.linkedin.com/in/lediane-franca',
    icon: 'Linkedin',
    description: 'Trajetória profissional, qualificações em RH e networking institucional.',
    primary: false
  }
];
