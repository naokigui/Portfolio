export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  tagline: string;
  stats: { label: string; value: string }[];
  description: string;
  challenge: string;
  strategy: string;
  resultsArray: string[];
  color: 'cyan' | 'purple' | 'blue';
  iconName: string;
  mockupContent: {
    heroTitle: string;
    heroSubtitle: string;
    ctaText: string;
    features: string[];
    accentColor: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  badge: string;
  priceEstimate: string;
}

export const PROJECTS: Project[] = [
  {
    id: "creditas-challenge",
    title: "Eco-sistema de Antecipações - Creditas",
    client: "Creditas (FIAP Challenge 2025)",
    category: "Aplicativo Web",
    tagline: "Projeto Vencedor do FIAP Challenge 2025 para monitoramento e incentivos de pagamentos.",
    stats: [
      { label: "Prêmio", value: "1º LUGAR" },
      { label: "Foco", value: "Fintech" },
      { label: "Eficiência", value: "+Autom." }
    ],
    description: "Winning project of the FIAP Challenge 2025, whose objective was to create an application for Creditas that would help both monitor and encourage early loan payments, eliminating the need for human intervention during the support process.",
    challenge: "Necessidade de suporte manual e falta de incentivo automático para antecipação de parcelas e quitação de dívidas por parte dos usuários.",
    strategy: "Desenvolvimento de um aplicativo interativo que recompensa engajamento financeiro positivo e automatiza o monitoramento de pagamentos adiantados.",
    resultsArray: [
      "Projeto vencedor do FIAP Challenge 2025.",
      "Eliminação de intervenção humana desnecessária nos processos de suporte das operações.",
      "Criação de um ambiente que motiva financeiramente os usuários a realizarem pagamentos antecipados."
    ],
    color: "cyan",
    iconName: "ShieldCheck",
    mockupContent: {
      heroTitle: "Antecipe e Ganhe Vantagens Exclusivas",
      heroSubtitle: "A nova plataforma Creditas que valoriza a sua saúde financeira.",
      ctaText: "Ver Simulador de Antecipação",
      features: ["Dashboard de Saúde Financeira", "Monitoramento em Tempo Real", "Suporte AI e Automação"],
      accentColor: "#22d3ee"
    }
  },
  {
    id: "ecomar-platform",
    title: "Plataforma de Monitoramento - EcoMar",
    client: "Projeto Socioambiental",
    category: "Web App",
    tagline: "Reduzindo poluição marinha através de monitoramento colaborativo e geolocalização.",
    stats: [
      { label: "Colaboração", value: "Público" },
      { label: "Tecnologia", value: "Geo-Tag" },
      { label: "Conscientização", value: "Alto" }
    ],
    description: "EcoMar was created with the goal of reducing coastal and marine pollution through collaborative monitoring and public awareness. The platform allows users to register, submit data about places where they found waste, specify environmental conditions and upload georeferenced photos to provide visual evidence.",
    challenge: "Falta de dados precisos e atualizados em tempo real sobre áreas costeiras poluídas para facilitar as campanhas de despoluição.",
    strategy: "Construção de uma plataforma web interativa em que a comunidade atua como olhos no mar, enviando fotografias via mobile usando APIs de geolocalização nativas.",
    resultsArray: [
      "Sistema prático de mapeamento e envio de imagens via celular.",
      "Criação de um mapa vivo de controle de poluição ambiental.",
      "Aumento prático do engajamento social comunitário para preservação da costa."
    ],
    color: "blue",
    iconName: "LayoutGrid",
    mockupContent: {
      heroTitle: "Proteja os Oceanos Conosco",
      heroSubtitle: "Registre casos de poluição e conecte-se com a comunidade em prol de mares mais limpos.",
      ctaText: "Acessar Mapa EcoMar",
      features: ["Registro Simples com Mobile", "Upload de Fotos com Geolocalização", "Dashboard do Ecossistema Local"],
      accentColor: "#3b82f6"
    }
  },
  {
    id: "techpeach-ai",
    title: "Recomendador IA - TechPeach",
    client: "TechPeach Travel",
    category: "IA Generativa",
    tagline: "Sistemas inovadores e recomendações de itinerários super personalizados baseados em IA.",
    stats: [
      { label: "Tecnologia", value: "Gen AI" },
      { label: "Alcance", value: "Global" },
      { label: "Personalização", value: "100%" }
    ],
    description: "An innovative recommendation system was developed using generative AI and deep analytics to personalize travel itineraries based on travelers' individual preferences. The platform provides a highly personalized experience tailoring outputs strictly to specific interests.",
    challenge: "Roteiros de viagens predefinidos não atendiam as exigências cada vez mais específicas de viajantes modernos procurando imersões únicas.",
    strategy: "Implementação de redes de IA generativa capazes de cruzar interesses específicos dos usuários para tecer roteiros complexos e fluidos automaticamente.",
    resultsArray: [
      "Entrega instantânea de roteiros hiper-personalizados para cada viajante.",
      "Utilização de deep analytics para aprender com os feedbacks dos usuários.",
      "Geração orgânica de pacotes de experiências que maximizam a satisfação na viagem."
    ],
    color: "purple",
    iconName: "Flame",
    mockupContent: {
      heroTitle: "O Seu Próximo Destino, Redefinido por IA",
      heroSubtitle: "Itinerários perfeitamente gerados baseado exclusivamente nos seus hobbies e sonhos.",
      ctaText: "Gerar Novo Roteiro Baseado em Perfil",
      features: ["Geração Dinâmica Generativa", "Análise Profunda de Preferências", "Exportação Imediata de Viagem"],
      accentColor: "#a855f7"
    }
  },
  {
    id: "safe-company",
    title: "App de Classificação - Safe Company",
    client: "Porto Seguro (Projeto)",
    category: "Integração & Inovação",
    tagline: "Inovação para site Porto Seguro com integração Google Lens para seguro de bicicletas.",
    stats: [
      { label: "Automação", value: "Lens UI" },
      { label: "Agilidade", value: "Instante" },
      { label: "Erros", value: "0%" }
    ],
    description: "Safe Company aimed to promote innovation within the Porto Seguro website, specifically in the bicycle insurance service. To achieve this, Google Lens was integrated into the system in order to solve the problem of classifying bicycles according to their respective brands and models.",
    challenge: "A triagem manual para verificar modelos e qualidades específicas de diferentes marcas de bicicletas era lenta e propensa a falhas de comunicação.",
    strategy: "Conectar as APIs avançadas de visão computacional (Google Lens) ao painel de contratação de seguro web, tirando a carga técnica de cima do usuário.",
    resultsArray: [
      "Automatização total de identificação de marca e modelo veicular.",
      "Experiência flúida para o segurado que agora precisa apenas apontar a câmera.",
      "Simplificação drástica do tempo gasto na esteira de aprovação de seguros."
    ],
    color: "cyan",
    iconName: "LayoutGrid",
    mockupContent: {
      heroTitle: "Assegurando sua Bike Num Piscar de Olhos",
      heroSubtitle: "Apenas envie uma foto da bicicleta e a IA preencherá o contrato para seu seguro.",
      ctaText: "Testar Reconhecimento Lens",
      features: ["Identificador Preciso de Marcas", "Simplicidade via Upload Fotográfico", "Eliminação de Cadastros Longos"],
      accentColor: "#22d3ee"
    }
  },
  {
    id: "agroconsciente",
    title: "Plataforma de Conscientização - AgroConsciente",
    client: "Setor Agro",
    category: "Plataforma Educativa",
    tagline: "Combate à escassez através de educação sustentável e rede colaborativa rural.",
    stats: [
      { label: "Integração", value: "Rural" },
      { label: "Networking", value: "Fórum" },
      { label: "Desperdício", value: "-Quedas" }
    ],
    description: "AgroConsciente was developed as a platform designed to raise awareness and educate farmers about strategies to address food shortages and promote sustainable agriculture. Users can create two profiles: donors who share surplus resources, and beneficiaries in need.",
    challenge: "Desconexão entre agricultores que possuem desperdício de safra ou suprimentos extras e aqueles que demandavam recursos iminentes na região.",
    strategy: "Lançamento de portal contendo recursos de capacitação interativa e um sistema interno de matchmaking entre necessidades agrárias de diferentes provedores locais.",
    resultsArray: [
      "Funcionalidades completas de doações e requisições para mitigação de fome.",
      "Acesso a bibliotecas de compostagem, energias renováveis e irrigação de alta eficiência.",
      "Fóruns ativos que consolidam especialistas e fortalece o laço entre agricultores regionais."
    ],
    color: "purple",
    iconName: "ShieldCheck",
    mockupContent: {
      heroTitle: "Hub Sustentável AgroConsciente",
      heroSubtitle: "Estudo contínuo, tutoriais de ponta e compartilhamento mútuo para uma agricultura ética.",
      ctaText: "Acessar Portal do Agricultor",
      features: ["Ambiente Dois Perfis (Doar/Receber)", "Guias Práticos e Fóruns de Discussões", "Base de Dados Sustentável (Solo/Água)"],
      accentColor: "#a855f7"
    }
  }
];

export const SERVICES: Service[] = [
  {
    id: "landing-page",
    title: "Landing Pages Express",
    badge: "Mais Procurado 🔥",
    description: "Páginas únicas focadas 100% em vendas directas. Desenvolvidas sob medida para negócios como delivery, clínicas de estética, escritórios jurídicos, academias e info-produtos.",
    priceEstimate: "A partir de R$ 997",
    iconName: "Rocket",
    features: [
      "Layout totalmente responsivo (mobile-first)",
      "Redação persuasiva (Copywriting focado em vendas)",
      "Carregamento ultra-rápido (< 1 segundo)",
      "Formulário moderno de captação ou botões integrados",
      "Instalação dos pixels de rastreamento (Google Ads, Meta)"
    ]
  },
  {
    id: "redesign",
    title: "Redesign de Sites",
    badge: "Modernização Digital 💎",
    description: "Modernização do seu endereço online antigo. Sites lentos e amadores espantam clientes de alto valor. Nós refilmamos sua fachada digital com elegância, autoridade e velocidade.",
    priceEstimate: "Sob Consulta",
    iconName: "Zap",
    features: [
      "Análise minuciosa de falhas no design atual",
      "Novo layout ultra-fluido alinhado ao seu branding",
      "Substituição de CMS lento por tecnologia leve",
      "Estrutura com UX moderna (Experiência do Usuário)",
      "Otimização extrema para SEO (Google Search)"
    ]
  },
  {
    id: "cro-opt",
    title: "Otimização de Conversão & WhatsApp",
    badge: "Resultado Rápido ⚡",
    description: "Não adianta ter acessos se ninguém clica. Ajustamos toda a navegação e pontos de contato da página para canalizar todo o tráfego de anúncios diretamente para o seu WhatsApp comercial.",
    priceEstimate: "A partir de R$ 497",
    iconName: "MessageCircleCode",
    features: [
      "Configuração de botões flutuantes inteligentes",
      "Mensagens semi-prontas personalizadas por serviço",
      "Análise de mapa de calor de cliques na página",
      "Filtros de pré-conversão integrados no formulário",
      "Triagem inteligente de leads curiosos"
    ]
  }
];
