// Imports das imagens dos projetos
import dashGeralImg from '../assets/dash_geral_img.png';
import pafImg from '../assets/paf_img.png';
import nextproImg from '../assets/nextpro_img.png';
import extratorImg from '../assets/extrator_img.png';
import controleEstoqueImg from '../assets/controle_estoque_img.png';
import painelOperacionalImg from '../assets/painel_operacional_img.png';
import historiaInterativaImg from '../assets/historia_interativa_img.png';

export const projects = [
  {
    id: 'painel-analise-logistica',
    title: 'Painel de Análise Logística',
    description: 'Dashboard interativo para análise de dados de call center, exibindo métricas de desempenho logístico, status de ligações, distribuição geográfica e volume de chamadas por hora.',
    shortDescription: 'Dashboard para visualização e análise de dados de operações de call center.',
    thumbnail: dashGeralImg,
    liveUrl: 'https://dashgeral.vercel.app/',
    technologies: ['React', 'MUI', 'Recharts', 'Leaflet'],
    category: 'Dashboards',
    sections: [
      {
        title: 'Desafio',
        content: 'Consolidar e visualizar grandes volumes de dados de um call center de forma intuitiva para apoiar a tomada de decisão estratégica, uma vez que o projeto foi descontinuado pela empresa, ele está sem dados.',
      },
      {
        title: 'Solução',
        content: 'Desenvolvimento de um painel dinâmico com múltiplos filtros, gráficos interativos e visualização geográfica para facilitar a identificação de tendências e gargalos operacionais.',
      },
      {
        title: 'Resultados',
        content: `<ul>
            <li>Interface centralizada que oferece insights claros sobre a performance logística.</li>
            <li>Visualização geográfica para análise de distribuição.</li>
            <li>Otimização do monitoramento da operação.</li>
          </ul>`,
      },
    ],
  },
  {
    id: 'detector-fraude-paf',
    title: 'Ferramenta de Detecção de Fraude (PAF)',
    description: 'Aplicação desenvolvida para o setor de Prevenção a Fraudes. A ferramenta permite o upload de arquivos de propostas (XLSX) e utiliza algoritmos para identificar e agrupar endereços similares, ajudando a detectar possíveis fraudes.',
    shortDescription: 'Ferramenta para upload e análise de propostas para detecção de fraudes por similaridade de endereços.',
    thumbnail: pafImg,
    liveUrl: 'https://front-projeto-paf.vercel.app/',
    technologies: ['React', 'MUI', 'SheetJS', 'Algoritmos'],
    category: 'Ferramentas Corporativas',
    sections: [
      {
        title: 'Desafio',
        content: 'Criar um sistema automatizado para analisar milhares de propostas e identificar padrões de fraude baseados em endereços duplicados ou similares, um processo antes feito manualmente.',
      },
      {
        title: 'Solução',
        content: 'Implementação de uma interface que processa os dados de arquivos XLSX, aplica algoritmos de comparação e exibe os grupos suspeitos de forma clara, com a opção de exportar o resultado.',
      },
      {
        title: 'Resultados',
        content: `<ul>
            <li>Redução no tempo de análise de propostas.</li>
            <li>Aumento da precisão na detecção de fraudes.</li>
            <li>Ferramenta intuitiva para a equipe de risco.</li>
          </ul>`,
      },
    ],
  },
  {
    id: 'next-pro',
    title: 'NEXTPro - Sistema de Análise de Processos',
    description: 'Sistema robusto para validação e processamento de propostas em lote. A plataforma permite carregar bases de dados, aplicar regras de validação rigorosas e administrar o fluxo de trabalho, garantindo a qualidade das informações.',
    shortDescription: 'Plataforma para upload, validação e gerenciamento de propostas em lote.',
    thumbnail: nextproImg,
    liveUrl: 'https://proposal-status-pilot.vercel.app/',
    technologies: ['React', 'Next.js', 'MUI', 'Zustand'],
    category: 'Ferramentas Corporativas',
    sections: [
      {
        title: 'Desafio',
        content: 'Estruturar e automatizar o complexo processo de validação de propostas, que exigia múltiplas checagens de regras de negócio para minimizar erros manuais e garantir a integridade dos dados.',
      },
      {
        title: 'Solução',
        content: 'Construção de um sistema com diferentes módulos (Visão Geral, Validação, Administração), interface clara para upload de arquivos e feedback instantâneo sobre a qualidade dos dados.',
      },
      {
        title: 'Resultados',
        content: `<ul>
            <li>Aumento da eficiência operacional.</li>
            <li>Redução de erros de processamento.</li>
            <li>Fluxo de trabalho rastreável e seguro.</li>
          </ul>`,
      },
    ],
  },
  {
    id: 'guild-member-extractor',
    title: 'Extrator de Membros de Guilda (com IA)',
    description: 'Ferramenta que utiliza Inteligência Artificial (OCR) para extrair informações de membros de uma guilda a partir de um vídeo. A aplicação processa o vídeo, reconhece os dados e os exibe de forma estruturada.',
    shortDescription: 'Aplicação com IA que lê dados de membros de guilda a partir de um vídeo.',
    thumbnail: extratorImg,
    liveUrl: 'https://guild-member-extrator.vercel.app/',
    technologies: ['React', 'MUI', 'Tesseract.js', 'IA/OCR'],
    category: 'Projetos com IA',
    sections: [
      {
        title: 'Desafio',
        content: 'Automatizar a coleta de dados de membros de uma guilda de jogo (Wild Rift), que só são exibidos em formato de vídeo na tela de gerenciamento do jogo.',
      },
      {
        title: 'Solução',
        content: 'Desenvolvimento de uma interface que permite o upload do vídeo e utiliza uma biblioteca de OCR para ler nomes e informações de cada membro diretamente dos frames, transformando-os em dados pesquisáveis.',
      },
      {
        title: 'Resultados',
        content: `<ul>
            <li>Eliminação da transcrição manual.</li>
            <li>Criação de uma base de dados estruturada a partir de um vídeo.</li>
            <li>Economia de tempo e esforço.</li>
          </ul>`,
      },
    ],
  },
  {
    id: 'controle-estoque',
    title: 'Dashboard de Controle de Estoque',
    description: 'Painel de controle para gerenciamento de estoque, exibindo KPIs como itens em estoque, separados e enviados. Inclui gráficos de performance por estado e um mapa de calor para visualização da distribuição de itens.',
    shortDescription: 'Dashboard visual para monitoramento e gestão de indicadores de estoque.',
    thumbnail: controleEstoqueImg,
    liveUrl: 'https://controle-estoque-pi.vercel.app/',
    technologies: ['React', 'MUI', 'Recharts', 'Leaflet'],
    category: 'Dashboards',
    sections: [
      {
        title: 'Desafio',
        content: 'Centralizar a visualização de dados de um sistema de controle de estoque para facilitar a análise gerencial e o acompanhamento de KPIs, como é um projeto da minha empresa não e possivel enviar dados pro banco de dados.',
      },
      {
        title: 'Solução',
        content: 'Criação de um dashboard responsivo que consome dados (via upload de Excel) e os apresenta de forma clara através de cards, gráficos de barra e um mapa geográfico interativo.',
      },
      {
        title: 'Resultados',
        content: `<ul>
            <li>Visão consolidada do status do estoque.</li>
            <li>Análise de performance por região.</li>
            <li>Facilita a identificação do fluxo de produtos.</li>
          </ul>`,
      },
    ],
  },
  {
    id: 'painel-operacional',
    title: 'Painel de Desempenho Financeiro',
    description: 'Dashboard focado em análise de desempenho financeiro de cartões, com indicadores como taxa de utilização, valor total utilizado, e custos logísticos. Inclui visualizações geográficas por região.',
    shortDescription: 'Dashboard para análise do desempenho financeiro e logístico de cartões.',
    thumbnail: painelOperacionalImg,
    liveUrl: 'https://painel-operacional.vercel.app/',
    technologies: ['React', 'MUI', 'Recharts', 'Leaflet'],
    category: 'Dashboards',
    sections: [
      {
        title: 'Desafio',
        content: 'Criar uma ferramenta para monitorar o ciclo de vida e o desempenho financeiro de produtos (cartões), desde a logística até a utilização pelo cliente, com a interação apenas com interface pois o Backend está desabilitado por ser um projeto empresarial.',
      },
      {
        title: 'Solução',
        content: 'Desenvolvimento de um painel de controle com abas para diferentes áreas (Financeiro, Estoque, Logística), apresentando KPIs em cards de destaque e gráficos comparativos.',
      },
      {
        title: 'Resultados',
        content: `<ul>
            <li>Visão 360º da operação.</li>
            <li>Análise cruzada de dados financeiros e logísticos.</li>
            <li>Otimização de custos e análise de comportamento do cliente.</li>
          </ul>`,
      },
    ],
  },
  {
    id: 'historia-interativa',
    title: 'Plataforma de Histórias Interativas',
    description: 'Plataforma para criação e leitura de histórias interativas. Usuários podem se cadastrar, escolher uma aventura e tomar decisões que alteram o rumo da narrativa, em uma experiência imersiva.',
    shortDescription: 'Plataforma para ler e interagir com narrativas onde suas escolhas mudam a história.',
    thumbnail: historiaInterativaImg,
    liveUrl: 'https://historia-interativa.vercel.app/',
    technologies: ['React', 'Firebase', 'MUI', 'State Management'],
    category: 'Aplicações Web',
    sections: [
      {
        title: 'Desafio',
        content: 'Criar uma experiência de leitura dinâmica e engajante, onde o usuário não é apenas um espectador, mas um participante ativo na construção da narrativa. O projeto está pausado no momento.',
      },
      {
        title: 'Solução',
        content: 'Desenvolvimento de uma interface de galeria para as histórias e um motor de narrativa que gerencia os estados da história (nós, escolhas, finais) com base nas decisões do usuário.',
      },
      {
        title: 'Resultados',
        content: `<ul>
            <li>Protótipo funcional de ficção interativa.</li>
            <li>Sistema de autenticação e persistência de progresso.</li>
            <li>Interface convidativa e escalável para novas histórias.</li>
          </ul>`,
      },
    ],
  },
];

export const articles = [
  {
    id: 'ia-part1',
    title: 'O Universo das IAs e suas Possibilidades',
    platform: 'Medium',
    url: 'https://medium.com/@carloseduardoturina/o-universo-das-ias-e-suas-possibilidades-ac8deb4750dd',
    description: 'Primeira parte da trilogia sobre Inteligência Artificial, explorando suas possibilidades.',
  },
  {
    id: 'ia-part2',
    title: 'O Universo das IAs e seu Alcance',
    platform: 'Medium',
    url: 'https://medium.com/@carloseduardoturina/o-universo-das-ias-e-seu-alcance-fdafaf346bac',
    description: 'Segunda parte da trilogia sobre IA, explorando seu alcance e impacto.',
  },
  {
    id: 'ia-part3',
    title: 'O Universo das IAs e suas Barreiras Éticas e Morais',
    platform: 'Medium',
    url: 'https://medium.com/@carloseduardoturina/o-universo-das-ias-e-suas-barreiras-%C3%A9ticas-e-morais-72565587e979',
    description: 'Terceira parte da trilogia, abordando questões éticas e morais.',
  },
  {
    id: 'rag-ia-secreta',
    title: 'RAG: A Arma Secreta para uma IA que Realmente Entende o seu Negócio',
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/pulse/rag-arma-secreta-para-uma-ia-que-realmente-entende-o-seu-turina-o9ncf',
    description: 'Uma análise sobre a técnica RAG (Retrieval-Augmented Generation), explicando como ela potencializa modelos de linguagem para que forneçam respostas mais precisas e contextualizadas, baseadas em fontes de conhecimento específicas.',
  },
  {
    id: 'vibe-coding',
    title: 'Vibe Coding: A Eficiência da IA Vale Abrir Mão do Conhecimento Técnico?',
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/pulse/vibe-coding-efici%25C3%25AAncia-da-ia-vale-abrir-m%25C3%25A3o-do-t%25C3%25A9cnico-turina-w4huf',
    description: 'Uma reflexão sobre "Vibe Coding", debatendo os prós e contras de usar IA para gerar código. O artigo explora o equilíbrio entre a eficiência e a importância de manter um profundo conhecimento técnico.',
  },
  {
    id: 'drag-drop-implementacao',
    title: 'Implementando Funcionalidade de Arrastar e Soltar na Minha Aplicação',
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/pulse/implementando-funcionalidade-de-arrastar-e-soltar-na-minha-turina-6bemf',
    description: 'Um guia técnico e prático que demonstra, passo a passo, como implementar a funcionalidade de arrastar e soltar (drag and drop) em uma aplicação React utilizando a biblioteca react-beautiful-dnd.',
  },
  {
    id: 'cors-solution-api',
    title: 'Solução de CORS na Minha Aplicação: Integração com API Externa',
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/pulse/solu%25C3%25A7%25C3%25A3o-de-cors-na-minha-aplica%25C3%25A7%25C3%25A3o-integra%25C3%25A7%25C3%25A3o-com-api-turina-ny84f',
    description: 'Uma solução prática para o comum problema de CORS em ambiente de desenvolvimento, detalhando como criar um servidor proxy com Node.js para viabilizar a comunicação com APIs externas.',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'João Silva',
    role: 'Product Owner',
    company: 'Tech Solutions',
    content:
      'Carlos demonstrou excelente capacidade técnica e comprometimento...',
  },
];