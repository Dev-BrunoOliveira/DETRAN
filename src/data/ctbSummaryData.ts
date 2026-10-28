import { CtbChapter } from '../types';

export const CTB_CHAPTERS_SUMMARY: CtbChapter[] = [
  {
    id: 'cap-1',
    chapterNumber: 'Capítulo I',
    title: 'Disposições Preliminares (Arts. 1º a 4º)',
    articlesRange: 'Arts. 1º - 4º',
    summary: 'Define que o trânsito de qualquer natureza nas vias terrestres do território nacional rege-se por este Código. O trânsito em condições seguras é um direito de todos e dever dos órgãos do Sistema Nacional de Trânsito.',
    keyTakeaways: [
      'Trânsito em condições seguras é direito de todos e dever prioritário dos órgãos públicos.',
      'Os órgãos do SNT respondem objetivamente por danos causados aos cidadãos por omissão ou erro de sinalização e manutenção.',
      'Vias terrestres incluem praias abertas à circulação, vias internas de condomínios e estacionamentos privados de uso coletivo.'
    ],
    importantArticles: [
      {
        article: 'Art. 1º, § 3º',
        title: 'Responsabilidade Objetiva dos Órgãos de Trânsito',
        keyRule: 'Os órgãos e entidades componentes do SNT respondem, no âmbito de suas respectivas competências, objetivamente, por danos causados aos cidadãos por ação, omissão ou erro na execução e manutenção de programas, serviços e sinalização.',
        category: 'Direito Administrativo / Trânsito'
      },
      {
        article: 'Art. 2º, Parágrafo Único',
        title: 'Abrangência das Vias Terrestres',
        keyRule: 'São consideradas vias terrestres as praias abertas à circulação pública, as vias internas pertencentes aos condomínios constituídos por unidades autônomas e as vias e áreas de estacionamento de estabelecimentos privados de uso coletivo.',
        category: 'Âmbito de Aplicação'
      }
    ]
  },
  {
    id: 'cap-2',
    chapterNumber: 'Capítulo II',
    title: 'Do Sistema Nacional de Trânsito (Arts. 5º a 25)',
    articlesRange: 'Arts. 5º - 25',
    summary: 'Conjunto de órgãos e entidades da União, Estados, DF e Municípios que realizam planejamento, normatização, registro, habilitação, fiscalização e julgamento de recursos de trânsito.',
    keyTakeaways: [
      'CONTRAN: Órgão coordenador máximo normativo e consultivo do SNT.',
      'CETRAN e CONTRANDIFE: Órgãos colegiados normativos, consultivos e julgadores em segunda instância no âmbito estadual/distrital.',
      'DETRAN: Órgão executivo de trânsito dos Estados e do DF (habilitação e registro veicular).',
      'JARI: Junta Administrativa de Recursos de Infrações, responsável pelo julgamento em 1ª instância dos recursos contra penalidades.'
    ],
    importantArticles: [
      {
        article: 'Art. 7º e 12',
        title: 'Composição e Competências do CONTRAN',
        keyRule: 'Compete ao CONTRAN estabelecer as normas regulamentares do CTB e as diretrizes da Política Nacional de Trânsito.',
        category: 'Órgãos Normativos'
      },
      {
        article: 'Art. 22',
        title: 'Competências do DETRAN (Executivo Estadual)',
        keyRule: 'Cumprir e fazer cumprir a legislação; realizar, fiscalizar e controlar o processo de formação, habilitação e reciclagem de condutores; registrar e licenciar veículos.',
        category: 'Órgão Executivo Estadual'
      }
    ]
  },
  {
    id: 'cap-3',
    chapterNumber: 'Capítulo III',
    title: 'Normas Gerais de Circulação e Conduta (Arts. 26 a 67)',
    articlesRange: 'Arts. 26 - 67',
    summary: 'Regras essenciais de circulação viária, posicionamento na pista, preferências em cruzamentos, ultrapassagem, velocidade, uso de luzes e parada.',
    keyTakeaways: [
      'A circulação é feita pelo lado DIREITO da via, admitindo-se exceções sinalizadas.',
      'Preferência em cruzamentos não sinalizados: 1º Rodovia; 2º Rotatória; 3º Veículo que vem pela DIREITA.',
      'Uso de faróis baixos durante o dia: obrigatório em rodovias de pista simples situadas fora dos perímetros urbanos para veículos sem DRL.',
      'Distância de segurança lateral e frontal deve ser sempre mantida pelos condutores.'
    ],
    importantArticles: [
      {
        article: 'Art. 29, III',
        title: 'Regras de Preferência em Cruzamento Não Sinalizado',
        keyRule: 'Quando veículos se cruzarem em local não sinalizado, terá preferência: a) no caso de apenas um fluxo ser de rodovia, aquele que estiver circulando por ela; b) no caso de rotatória, aquele que estiver circulando por ela; c) nos demais casos, o que vier pela direita do condutor.',
        penaltyOrDetail: 'Descumprir é Infração Grave (Art. 215).',
        category: 'Normas de Circulação'
      },
      {
        article: 'Art. 44',
        title: 'Aproximação de Cruzamentos',
        keyRule: 'Ao aproximar-se de qualquer tipo de cruzamento, o condutor deve demonstrar prudência especial, transitando em velocidade reduzida.',
        category: 'Segurança Viária'
      }
    ]
  },
  {
    id: 'cap-3a',
    chapterNumber: 'Capítulo III-A',
    title: 'Condução por Motoristas Profissionais (Arts. 67-A a 67-E)',
    articlesRange: 'Arts. 67-A - 67-E',
    summary: 'Regras de jornada e tempos de direção para motoristas de transporte rodoviário de passageiros e transporte rodoviário de cargas.',
    keyTakeaways: [
      'Passageiros: Vedada a direção por mais de 5 horas e meia ininterruptas (descanso obrigatório de 30 minutos).',
      'Cargas: Vedada a direção por mais de 6 horas ininterruptas (descanso obrigatório de 30 minutos).',
      'Descanso diário de 11 horas a cada 24 horas.',
      'Controle por meio de registrador instantâneo inalterável de velocidade e tempo (tacógrafo) ou diário de bordo.'
    ],
    importantArticles: [
      {
        article: 'Art. 67-C',
        title: 'Tempo Máximo de Direção Ininterrupta',
        keyRule: 'É vedado ao motorista profissional dirigir por mais de cinco horas e meia ininterruptas no transporte rodoviário de passageiros, e seis horas ininterruptas no de cargas.',
        category: 'Motoristas Profissionais'
      }
    ]
  },
  {
    id: 'cap-4',
    chapterNumber: 'Capítulo IV',
    title: 'Dos Pedestres e Não Motorizados (Arts. 68 a 71)',
    articlesRange: 'Arts. 68 - 71',
    summary: 'Garante prioridade e proteção aos pedestres e usuários de veículos de propulsão humana (bicicletas) nas vias urbanas e rurais.',
    keyTakeaways: [
      'O pedestre tem prioridade absoluta na faixa delimitada para pedestres.',
      'Ciclistas desmontados empurrando a bicicleta equiparam-se ao pedestre em direitos e deveres.',
      'Veículos de maior porte são sempre responsáveis pela segurança dos menores e pedestres.'
    ],
    importantArticles: [
      {
        article: 'Art. 68',
        title: 'Direitos dos Pedestres e Travessia',
        keyRule: 'É assegurada ao pedestre a utilização dos passeios ou passagens apropriadas das vias urbanas e dos acostamentos das vias rurais.',
        category: 'Pedestres'
      }
    ]
  },
  {
    id: 'cap-7',
    chapterNumber: 'Capítulo VII',
    title: 'Da Sinalização de Trânsito (Arts. 80 a 90)',
    articlesRange: 'Arts. 80 - 90',
    summary: 'Classificação da sinalização (vertical, horizontal, luminosa, sonora e gestual) e ordem hierárquica absoluta.',
    keyTakeaways: [
      '1º Ordem hierárquica: As ordens do agente de trânsito prevalecem sobre as regras de circulação e demais sinais.',
      '2º As indicações do semáforo prevalecem sobre os demais sinais.',
      '3º As indicações dos sinais prevalecem sobre as demais normas de trânsito.'
    ],
    importantArticles: [
      {
        article: 'Art. 89',
        title: 'Hierarquia da Sinalização de Trânsito',
        keyRule: 'A sinalização terá a seguinte ordem de prevalência: I - as ordens do agente de trânsito; II - as indicações do semáforo; III - os demais sinais; IV - as normas de trânsito.',
        category: 'Sinalização Viária'
      }
    ]
  },
  {
    id: 'cap-13',
    chapterNumber: 'Capítulo XIII',
    title: 'Da Condução de Escolares (Arts. 136 a 139)',
    articlesRange: 'Arts. 136 - 139',
    summary: 'Normas rigorosas para veículos e condutores que realizam o transporte coletivo de crianças e estudantes.',
    keyTakeaways: [
      'Registro como veículo de passageiros e inspeção semestral para verificação de segurança.',
      'Faixa amarela lateral de 40 cm com a palavra ESCOLAR em preto.',
      'Condutor deve ter idade superior a 21 anos, ser habilitado na Categoria D e não ter cometido infração gravíssima/grave nos últimos 12 meses.'
    ],
    importantArticles: [
      {
        article: 'Art. 138',
        title: 'Requisitos do Condutor de Escolares',
        keyRule: 'Ter idade superior a 21 anos; habilitação na categoria D; não ter cometido infração grave ou gravíssima, ou ser reincidente em médias durante os últimos doze meses; curso especializado.',
        category: 'Transporte Escolar'
      }
    ]
  },
  {
    id: 'cap-13a',
    chapterNumber: 'Capítulo XIII-A',
    title: 'Da Condução de Moto-Frete (Arts. 139-A e 139-B)',
    articlesRange: 'Arts. 139-A - 139-B',
    summary: 'Regulamenta o transporte remunerado de mercadorias em motocicletas e motonetas (entregas rápidas).',
    keyTakeaways: [
      'Exigência de registro como veículo de aluguel (placa vermelha).',
      'Instalação de protetor de pernas/motor (mata-cachorro) e antena corta-pipas.',
      'Inspeção semestral obrigatória.',
      'Vedado o transporte de combustíveis inflamáveis, exceto gás de cozinha e água mineral com side-car.'
    ],
    importantArticles: [
      {
        article: 'Art. 139-A',
        title: 'Equipamentos e Registro de Moto-Frete',
        keyRule: 'Autorização do DETRAN condicionada a registro de aluguel, protetor mata-cachorro, antena corta-pipa e inspeção periódica.',
        category: 'Moto-Frete'
      }
    ]
  },
  {
    id: 'cap-14',
    chapterNumber: 'Capítulo XIV',
    title: 'Da Habilitação (Arts. 140 a 160)',
    articlesRange: 'Arts. 140 - 160',
    summary: 'Processo de formação de condutores, exames, validade da CNH, categorias de habilitação (A a E) e exame toxicológico.',
    keyTakeaways: [
      'Validade da CNH: 10 anos (<50 anos); 5 anos (50 a 69 anos); 3 anos (70+ anos).',
      'Exame Toxicológico obrigatório para condutores de categorias C, D e E com periodicidade de 2 anos e meio para menores de 70 anos.',
      'Categoria C: Carga > 3.500 kg. Categoria D: Passageiros > 8 lugares. Categoria E: Reboque > 6.000 kg ou com combinação.',
      'Permissão para Dirigir (PPD): validade de 1 ano. Não pode cometer nenhuma infração gravíssima, grave nem ser reincidente em média.'
    ],
    importantArticles: [
      {
        article: 'Art. 143',
        title: 'Categorias de Habilitação',
        keyRule: '• A: 2 ou 3 rodas;\n• B: Veículos até 3.500 kg e lotação até 8 passageiros;\n• C: Carga > 3.500 kg;\n• D: Passageiros > 8 assentos;\n• E: Veículo acoplado com PBT > 6.000 kg.',
        category: 'Categorias CNH'
      },
      {
        article: 'Art. 148, § 3º',
        title: 'Concessão da CNH Definitiva',
        keyRule: 'A Carteira Nacional de Habilitação será concedida ao condutor ao término de um ano, desde que o mesmo não tenha cometido nenhuma infração de natureza GRAVÍSSIMA ou GRAVE, nem seja REINCIDENTE em infração MÉDIA.',
        penaltyOrDetail: 'Se descumprir, perde a PPD e deve reiniciar todo o processo de habilitação.',
        category: 'PPD / Habilitação'
      }
    ]
  },
  {
    id: 'cap-15',
    chapterNumber: 'Capítulo XV',
    title: 'Infrações de Trânsito e Pontuação (Arts. 161 a 255)',
    articlesRange: 'Arts. 161 - 255',
    summary: 'Tipificação das condutas ilícitas no trânsito e atribuição de pontos na CNH (Gravíssima=7, Grave=5, Média=4, Leve=3).',
    keyTakeaways: [
      'Gravíssima: 7 pontos | R$ 293,47 (pode ter multiplicador de 2x, 3x, 5x, 10x, 20x, 60x).',
      'Grave: 5 pontos | R$ 195,23.',
      'Média: 4 pontos | R$ 130,16.',
      'Leve: 3 pontos | R$ 88,38.',
      'Conversão de multa leve ou média em advertência por escrito (Art. 267): obrigatória se o condutor não tiver cometido nenhuma outra infração nos últimos 12 meses.'
    ],
    importantArticles: [
      {
        article: 'Art. 165 e 165-A',
        title: 'Lei Seca e Recusa ao Teste',
        keyRule: 'Dirigir sob efeito de álcool ou recusar-se a fazer o teste do etilômetro: Gravíssima (7 pts), Multa 10x (R$ 2.934,70), Suspensão do direito de dirigir por 12 meses.',
        penaltyOrDetail: 'Reincidência em 12 meses: Multa em dobro (20x) e cassação da CNH.',
        category: 'Infração Gravíssima'
      },
      {
        article: 'Art. 230, V',
        title: 'Conduzir Veículo sem Registro e Licenciamento',
        keyRule: 'Conduzir veículo que não esteja registrado e devidamente licenciado.',
        penaltyOrDetail: 'Gravíssima (7 pts), Multa R$ 293,47 + Medida Administrativa: Remoção do veículo ao pátio.',
        category: 'Infração Gravíssima'
      }
    ]
  },
  {
    id: 'cap-16',
    chapterNumber: 'Capítulo XVI',
    title: 'Das Penalidades (Arts. 256 a 268)',
    articlesRange: 'Arts. 256 - 268',
    summary: 'Sanções aplicadas pela autoridade de trânsito: advertência por escrito, multa, suspensão do direito de dirigir e cassação.',
    keyTakeaways: [
      'Suspensão do direito de dirigir por acúmulo de pontos (em 12 meses): 40 pontos (sem gravíssima); 30 pontos (1 gravíssima); 20 pontos (2 ou mais gravíssimas).',
      'Para condutor profissional com EAR: o limite é sempre de 40 pontos, independentemente do número de gravíssimas.',
      'Cassação da CNH: aplicada quando o condutor dirigir suspenso ou for reincidente em infrações específicas (ex: Lei Seca) no prazo de 12 meses.'
    ],
    importantArticles: [
      {
        article: 'Art. 261',
        title: 'Regra Escalonada de Suspensão da CNH',
        keyRule: 'Limite de 20 pontos (2+ gravíssimas), 30 pontos (1 gravíssima) ou 40 pontos (nenhuma gravíssima ou EAR). Prazo de suspensão de 6 meses a 1 ano.',
        category: 'Penalidades'
      }
    ]
  },
  {
    id: 'cap-17',
    chapterNumber: 'Capítulo XVII',
    title: 'Das Medidas Administrativas (Arts. 269 a 279-A)',
    articlesRange: 'Arts. 269 - 279-A',
    summary: 'Ações imediatas adotadas pelo agente de trânsito em campo com caráter acautelatório e de restauração da segurança viária.',
    keyTakeaways: [
      'Medidas administrativas têm natureza acautelatória, não punitiva.',
      'Retenção: veículo permanece no local até regularização do problema (ex: lâmpada queimada, falta de cinto).',
      'Remoção: veículo é guinchado para o pátio credenciado (ex: estacionamento irregular, falta de licenciamento).',
      'Recolhimento da CNH ou CRLV mediante recibo nos casos expressos em lei.'
    ],
    importantArticles: [
      {
        article: 'Art. 270 e 271',
        title: 'Retenção e Remoção de Veículo',
        keyRule: 'Retenção: sanada a irregularidade no local, o veículo é liberado. Não sanada, pode ser emitido termo de liberação com prazo de até 15 dias para apresentação ao órgão (quando não oferecer risco). Remoção: guincho até depósito.',
        category: 'Medidas Administrativas'
      }
    ]
  },
  {
    id: 'cap-18',
    chapterNumber: 'Capítulo XVIII',
    title: 'Do Processo Administrativo (Arts. 280 a 290-A)',
    articlesRange: 'Arts. 280 - 290-A',
    summary: 'Procedimento de autuação, expedição de notificações, direito à defesa prévia e recursos às instâncias administrativas (JARI e CETRAN).',
    keyTakeaways: [
      'Notificação de Autuação deve ser expedida no prazo máximo de 30 dias contados da infração (sob pena de decadência e arquivamento).',
      'Prazo para Defesa Prévia e indicação de condutor infrator: não inferior a 30 dias contados da notificação.',
      'Recurso à JARI (1ª Instância): cabe contra a imposição de penalidade.',
      'Recurso ao CETRAN / CONTRANDIFE (2ª Instância): julga decisões da JARI.'
    ],
    importantArticles: [
      {
        article: 'Art. 281, Parágrafo Único',
        title: 'Arquivamento do Auto de Infração',
        keyRule: 'O auto de infração será arquivado e seu registro julgado insubsistente: I - se considerado inconsistente ou irregular; II - se, no prazo máximo de trinta dias, não for expedida a notificação da autuação.',
        penaltyOrDetail: 'Prazo decadencial improrrogável.',
        category: 'Processo Administrativo'
      }
    ]
  },
  {
    id: 'cap-19',
    chapterNumber: 'Capítulo XIX',
    title: 'Dos Crimes de Trânsito (Arts. 291 a 312-B)',
    articlesRange: 'Arts. 291 - 312-B',
    summary: 'Crimes cometidos na direção de veículos automotores. Aplica-se subsidiariamente o Código Penal e Código de Processo Penal.',
    keyTakeaways: [
      'Homicídio Culposo no Trânsito (Art. 302): Detenção de 2 a 4 anos. Se estiver embriagado: Reclusão de 5 a 8 anos.',
      'Lesão Corporal Culposa no Trânsito (Art. 303): Detenção de 6 meses a 2 anos. Se embriagado com lesão grave/gravíssima: Reclusão de 2 a 5 anos.',
      'Embriaguez ao Volante Crime (Art. 306): Concentração >= 0.6g/L de sangue ou >= 0.34mg/L no bafômetro. Detenção de 6 meses a 3 anos.',
      'Racha / Corrida Não Autorizada Crime (Art. 308): Detenção de 6 meses a 3 anos. Se resultar em lesão grave (3 a 6 anos reclusão); morte (5 a 10 anos reclusão).'
    ],
    importantArticles: [
      {
        article: 'Art. 301',
        title: 'Prestação de Socorro e Prisão em Flagrante',
        keyRule: 'Ao condutor de veículo, nos casos de acidentes de trânsito de que resulte vítima, NÃO SE IMPORÁ A PRISÃO EM FLAGRANTE, nem se exigirá fiança, se prestar pronto e integral socorro àquela.',
        category: 'Garantia Processual'
      },
      {
        article: 'Art. 306',
        title: 'Crime de Condução sob Efeito de Álcool',
        keyRule: 'Conduzir veículo automotor com capacidade psicomotora alterada em razão da influência de álcool ou outra substância psicoativa.',
        penaltyOrDetail: 'Penas: Detenção de 6 meses a 3 anos, multa e suspensão ou proibição de se obter a permissão ou a habilitação.',
        category: 'Crime de Trânsito'
      }
    ]
  },
  {
    id: 'cap-20',
    chapterNumber: 'Capítulo XX',
    title: 'Disposições Finais e Transitórias (Arts. 313 a 341)',
    articlesRange: 'Arts. 313 - 341',
    summary: 'Regras de transição, vigência, destinação do percentual de 5% das multas ao FUNSET e adaptação das normas complementares do SNT.',
    keyTakeaways: [
      'O percentual de 5% do valor de todas as multas de trânsito arrecadadas é destinado ao FUNSET (Fundo Nacional de Segurança e Educação de Trânsito).',
      'Regulamentações do CONTRAN anteriores continuam válidas naquilo que não conflitarem com o CTB.',
      'Anexos I e II integram o CTB e fixam definições técnicas fundamentais para a atuação dos agentes.'
    ],
    importantArticles: [
      {
        article: 'Art. 320, Parágrafo Único',
        title: 'Destinação ao FUNSET',
        keyRule: 'O percentual de cinco por cento do valor das multas de trânsito arrecadadas será depositado, mensalmente, na conta de fundo de âmbito nacional destinado à segurança e educação de trânsito.',
        category: 'Recursos e Arrecadação'
      }
    ]
  }
];
