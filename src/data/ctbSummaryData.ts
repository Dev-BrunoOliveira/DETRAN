import { CtbChapter } from '../types';

export const CTB_CHAPTERS_SUMMARY: CtbChapter[] = [
  {
    id: 'cap-1',
    chapterNumber: 'Capítulo I',
    title: 'Disposições Preliminares (Arts. 1º a 4º)',
    articlesRange: 'Arts. 1º - 4º',
    summary: 'Define que o trânsito de qualquer natureza nas vias terrestres do território nacional rege-se por este Código. O trânsito em condições seguras é um direito de todos e dever dos órgãos do SNT.',
    keyTakeaways: [
      'Trânsito em condições seguras é direito de todos e dever prioritário do Estado.',
      'Os órgãos do SNT respondem objetivamente por danos causados aos cidadãos por omissão ou erro de sinalização/manutenção.',
      'Vias terrestres incluem praias abertas à circulação, vias internas de condomínios e estacionamentos de uso coletivo.'
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
        keyRule: 'Para os efeitos deste Código, são consideradas vias terrestres as praias abertas à circulação pública, as vias internas pertencentes aos condomínios constituídos por unidades autônomas e as vias e áreas de estacionamento de estabelecimentos privados de uso coletivo.',
        category: 'Âmbito de Aplicação'
      }
    ]
  },
  {
    id: 'cap-3',
    chapterNumber: 'Capítulo III',
    title: 'Normas Gerais de Circulação e Conduta (Arts. 26 a 67)',
    articlesRange: 'Arts. 26 - 67',
    summary: 'Regras de tráfego, mão de direção, ultrapassagem, preferências em cruzamentos, uso de luzes e velocidade máxima.',
    keyTakeaways: [
      'A circulação é feita pelo lado DIREITO da via, admitindo-se exceções sinalizadas.',
      'Preferência em cruzamentos não sinalizados: 1º Rodovia; 2º Rotatória; 3º Veículo que vem pela DIREITA.',
      'Uso do pisca-alerta: apenas em imobilizações/emergência ou quando a regulamentação da via determinar.',
      'Distância de segurança lateral e frontal deve ser mantida em relação aos demais veículos.'
    ],
    importantArticles: [
      {
        article: 'Art. 29, III',
        title: 'Regras de Preferência em Cruzamento',
        keyRule: 'Quando veículos se cruzarem em local não sinalizado, terá preferência: a) quem circula por RODOVIA; b) quem circula por ROTATÓRIA; c) quem vem pela DIREITA.',
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
    id: 'cap-14',
    chapterNumber: 'Capítulo XIV',
    title: 'Da Habilitação (Arts. 140 a 160)',
    articlesRange: 'Arts. 140 - 160',
    summary: 'Processo de formação de condutores, exames, validade da CNH, categorias de habilitação (A, B, C, D, E) e toxicológico.',
    keyTakeaways: [
      'Validade da CNH: 10 anos (<50 anos); 5 anos (50-69 anos); 3 anos (70+ anos).',
      'Exame Toxicológico obrigatório para C, D e E a cada 2,5 anos (<70 anos).',
      'Categoria C: Carga > 3.500 kg. Categoria D: Passageiros > 8 lugares. Categoria E: Reboque > 6.000 kg ou com combinação.',
      'Permissão para Dirigir (PPD): validade de 1 ano. Não pode cometer infração gravíssima, grave nem ser reincidente em média.'
    ],
    importantArticles: [
      {
        article: 'Art. 143',
        title: 'Categorias de Habilitação',
        keyRule: '• A: 2 ou 3 rodas;\n• B: Peso bruto até 3.500 kg e lotação até 8 passageiros;\n• C: Carga > 3.500 kg;\n• D: Passageiros > 8 assentos;\n• E: Veículo acoplado com PBT > 6.000 kg.',
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
    title: 'Infrações de Trânsito e Pontuação',
    articlesRange: 'Arts. 161 - 255',
    summary: 'Tipificação das condutas ilícitas no trânsito e atribuição de pontos na CNH (Gravíssima=7, Grave=5, Média=4, Leve=3).',
    keyTakeaways: [
      'Gravíssima: 7 pontos | R$ 293,47 (pode ter multiplicador de 2x, 3x, 5x, 10x, 20x, 60x).',
      'Grave: 5 pontos | R$ 195,23.',
      'Média: 4 pontos | R$ 130,16.',
      'Leve: 3 pontos | R$ 88,38.',
      'Regra da conversão de multa leve/média em advertência por escrito (Art. 267): obrigatória se o condutor não cometeu nenhuma outra infração nos últimos 12 meses.'
    ],
    importantArticles: [
      {
        article: 'Art. 165 e 165-A',
        title: 'Lei Seca e Recusa ao Teste',
        keyRule: 'Dirigir sob efeito de álcool ou recusar-se a fazer o teste do etilômetro: Gravíssima (7 pts), Multa 10x (R$ 2.934,70), Suspensão de 12 meses.',
        penaltyOrDetail: 'Reincidência em 12 meses: Multa em dobro (20x) e cassação da CNH.',
        category: 'Infração Gravíssima'
      },
      {
        article: 'Art. 230, V',
        title: 'Conduzir Veículo sem Licenciamento',
        keyRule: 'Conduzir veículo que não esteja registrado e devidamente licenciado.',
        penaltyOrDetail: 'Gravíssima (7 pts), Multa R$ 293,47 + Medida Admin: Remoção do veículo para o pátio.',
        category: 'Infração Gravíssima'
      }
    ]
  },
  {
    id: 'cap-19',
    chapterNumber: 'Capítulo XIX',
    title: 'Dos Crimes de Trânsito (Arts. 291 a 312-B)',
    articlesRange: 'Arts. 291 - 312-B',
    summary: 'Crimes cometidos na direção de veículos automotores. Aplica-se subsidariamente o Código Penal e Código de Processo Penal.',
    keyTakeaways: [
      'Homicídio Culposo no Trânsito (Art. 302): Detenção de 2 a 4 anos.',
      'Lesão Corporal Culposa no Trânsito (Art. 303): Detenção de 6 meses a 2 anos.',
      'Embriaguez ao Volante Crime (Art. 306): Concentração >= 0.6g/L de sangue ou >= 0.34mg/L no bafômetro. Detenção de 6 meses a 3 anos.',
      'Racha / Corrida Não Autorizada Crime (Art. 308): Detenção de 6 meses a 3 anos. Se resultar em lesão grave (3 a 6 anos reclusão); morte (5 a 10 anos reclusão).'
    ],
    importantArticles: [
      {
        article: 'Art. 301',
        title: 'Prestação de Socorro e Prisão em Flagrante',
        keyRule: 'Ao condutor de veículo, nos casos de acidentes de trânsito de que resulte vítima, NÃO SE IMPORÁ A PRISÃO EM FLAGRANTE, nem se exigirá fiança, se prestar pronto e integral socorro àquela.',
        category: 'Garantia de Processo Penal'
      },
      {
        article: 'Art. 306',
        title: 'Crime de Condução sob Efeito de Álcool',
        keyRule: 'Conduzir veículo automotor com capacidade psicomotora alterada em razão da influência de álcool ou outra substância psicoativa.',
        penaltyOrDetail: 'Penas: Detenção de 6 meses a 3 anos, multa e suspensão ou proibição de se obter a permissão ou a habilitação.',
        category: 'Crime de Trânsito'
      }
    ]
  }
];
