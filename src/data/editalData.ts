import { SubjectInfo } from '../types';

export const EDITAL_INFO = {
  orgao: 'Departamento Estadual de Trânsito de São Paulo (DETRAN-SP)',
  cargo: 'Agente Estadual de Trânsito (Código 401)',
  banca: 'Instituto Avalia (www.avalia.org.br)',
  remuneracao: 'R$ 5.702,18',
  cargaHoraria: '40 horas semanais',
  nivelExigido: 'Nível Superior Completo em qualquer área',
  vagas: 145,
  taxaInscricao: 'R$ 98,00',
  periodoInscricao: '09/09/2026 a 07/10/2026',
  dataProvaPrevista: '26/10/2026',
  cidadesProva: [
    'São Paulo', 'Campinas', 'Ribeirão Preto', 'São José dos Campos',
    'São José do Rio Preto', 'Sorocaba', 'Bauru', 'Santos', 'Presidente Prudente',
    'Araçatuba', 'Araraquara', 'Guarulhos', 'Itapeva', 'Osasco', 'Ourinhos', 'Piracicaba', 'Taubaté'
  ],
  regraAprovacao: {
    minimoObjetivaPontos: 6.0,
    maximoObjetivaPontos: 10.0,
    proibicaoZerar: true,
    minimoRedacaoPontos: 6.0,
    maximoRedacaoPontos: 10.0,
    linhasRedacaoMin: 20,
    linhasRedacaoMax: 30,
  }
};

export const SUBJECTS_LIST: SubjectInfo[] = [
  {
    id: 'ctb',
    title: 'Código de Trânsito Brasileiro (CTB - Lei 9.503/97)',
    shortTitle: 'CTB 2026',
    category: 'Especificos',
    questionCount: 17,
    weightPerQuestion: 0.20,
    totalPoints: 3.4,
    color: 'amber',
    iconName: 'ShieldAlert',
    description: 'A matéria de maior peso da prova! Trata das normas gerais, sinalização, infrações, penalidades, crimes e habilitação.',
    topics: [
      'Normas Gerais de Circulação e Conduta (Arts. 26 a 67)',
      'Habilitação e Categorias de CNH (Arts. 140 a 160)',
      'Infrações de Trânsito (Gravíssima, Grave, Média, Leve)',
      'Penalidades e Medidas Administrativas (Arts. 256 a 279)',
      'Crimes de Trânsito (Arts. 291 a 312-B)',
      'Sistema Nacional de Trânsito e Órgãos (Arts. 5º a 25)'
    ]
  },
  {
    id: 'contran_estadual',
    title: 'Resoluções do CONTRAN & Legislação Estadual SP',
    shortTitle: 'CONTRAN & Leg. SP',
    category: 'Especificos',
    questionCount: 13, // 8 CONTRAN + 5 Leg. Estadual
    weightPerQuestion: 0.20,
    totalPoints: 2.6,
    color: 'blue',
    iconName: 'FileCheck2',
    description: 'Resoluções atualizadas do CONTRAN (insulfilm, capacete, cadeirinha) e Legislação do Estado de SP (Código de Ética, Estrutura do DETRAN-SP e PSV-SP 2025-2035).',
    topics: [
      'Resolução CONTRAN 911/2022 (Exame Toxicológico)',
      'Resolução CONTRAN 960/2022 (Transmitância luminosa/Insulfilm)',
      'Resolução CONTRAN 940/2022 (Capacete de Motociclista)',
      'Resolução CONTRAN 915/2022 (Transporte de Crianças/Cadeirinhas)',
      'Decreto Estadual 69.053/2024 (Estrutura Organizacional do DETRAN-SP)',
      'Decreto Estadual 69.328/2025 (Código de Ética da Adm. SP)',
      'Decreto Estadual 70.551/2026 (Plano de Segurança Viária PSV-SP 2025-2035)'
    ]
  },
  {
    id: 'portugues',
    title: 'Língua Portuguesa',
    shortTitle: 'Português',
    category: 'Gerais',
    questionCount: 10,
    weightPerQuestion: 0.10,
    totalPoints: 1.0,
    color: 'emerald',
    iconName: 'BookOpen',
    description: 'Compreensão de textos, sintaxe da oração e período, crase, pontuação, concordância verbal/nominal e regência.',
    topics: [
      'Interpretação e Compreensão de Textos',
      'Ortografia Oficial e Acentuação Gráfica',
      'Emprego do Acento Indicativo de Crase',
      'Concordância Verbal e Nominal',
      'Regência Verbal e Nominal',
      'Sinais de Pontuação e Colocação Pronomial'
    ]
  },
  {
    id: 'rlm',
    title: 'Matemática e Raciocínio Lógico-Matemático',
    shortTitle: 'Raciocínio Lógico',
    category: 'Gerais',
    questionCount: 5,
    weightPerQuestion: 0.20,
    totalPoints: 1.0,
    color: 'purple',
    iconName: 'BrainCircuit',
    description: 'Estruturas lógicas, tabela-verdade, porcentagem, equações, razão/proporção e análise de dados.',
    topics: [
      'Proposições, Conectivos e Tabela-Verdade',
      'Lógica de Argumentação e Equivalências',
      'Porcentagem, Juros e Regra de Três',
      'Análise Combinatória e Probabilidade',
      'Interpretação de Gráficos e Tabelas'
    ]
  },
  {
    id: 'informatica',
    title: 'Noções de Informática & Inteligência Artificial',
    shortTitle: 'Informática & IA',
    category: 'Gerais',
    questionCount: 5,
    weightPerQuestion: 0.20,
    totalPoints: 1.0,
    color: 'cyan',
    iconName: 'Monitor',
    description: 'Windows 11, MS Word/Excel (PROCV/XLOOKUP), Segurança da Informação, LGPD e aplicações de IA Generativa.',
    topics: [
      'Windows 11 e Atalhos de Teclado',
      'MS Word e MS Excel (PROCV, PROCX, Tabelas Dinâmicas)',
      'Nuvem (OneDrive, Google Drive) e Ferramentas de Colaboração',
      'Segurança da Informação, MFA e LGPD (Lei 13.709/18)',
      'Conceitos e Uso Responsável de Inteligência Artificial Generativa'
    ]
  },
  {
    id: 'direito',
    title: 'Direito Constitucional & Direito Administrativo',
    shortTitle: 'Direito Const. & Adm.',
    category: 'Gerais',
    questionCount: 10, // 5 Constitucional + 5 Administrativo
    weightPerQuestion: 0.10,
    totalPoints: 1.0,
    color: 'rose',
    iconName: 'Scale',
    description: 'Art. 5º, Art. 144 (Segurança Viária), Atos Administrativos, Improbidade (Lei 8.429/92) e Processo Adm. SP (Lei 10.177/98).',
    topics: [
      'Direitos e Garantias Fundamentais (Art. 5º da CF/88)',
      'Segurança Pública e Segurança Viária (Art. 144 da CF/88)',
      'Atos e Poderes Administrativos (Hierárquico, Disciplinar, Polícia)',
      'Lei de Improbidade Administrativa (Lei Federal 8.429/1992)',
      'Processo Administrativo Estadual de SP (Lei Estadual 10.177/1998)',
      'Lei de Acesso à Informação (LAI - Lei 12.527/2011)'
    ]
  },
  {
    id: 'redacao',
    title: 'Prova Discursiva - Redação Técnica',
    shortTitle: 'Redação (10 pts)',
    category: 'Discursiva',
    questionCount: 1,
    weightPerQuestion: 10.0,
    totalPoints: 10.0,
    color: 'indigo',
    iconName: 'PenTool',
    description: 'Texto dissertativo-argumentativo técnico sobre trânsito e administração pública (20 a 30 linhas). Avaliado em 4 aspectos.',
    topics: [
      'Domínio do Conteúdo e Argumentação Técnica (3,0 pts)',
      'Norma-Padrão da Língua Portuguesa (2,0 pts)',
      'Coerência e Coesão Textual (2,0 pts)',
      'Estrutura Dissertativa e Objetividade (3,0 pts)'
    ]
  }
];
