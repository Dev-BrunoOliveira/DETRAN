export interface ContranArticle {
  id: string;
  resolution: string;
  articleNumber: string;
  chapterNumber?: string;
  chapterTitle: string;
  sectionTitle?: string;
  title: string;
  content: string;
  keyTakeaways: string[];
  examTip: string;
  relatedQuestionIds: string[];
}

export interface ContranTopicSummary {
  id: string;
  resolution: string;
  title: string;
  description: string;
  keyRules: string[];
  articleRefs: string[];
  category: 'Habilitação' | 'Veículos e Equipamentos' | 'Segurança e Exames' | 'Infrações e Fiscalização';
}

export const CONTRAN_RESOLUTIONS_METADATA = {
  mainResolution: {
    number: '1.020/2025',
    date: '1º de dezembro de 2025',
    douDate: '09/12/2025',
    organ: 'Ministério dos Transportes / Conselho Nacional de Trânsito (CONTRAN)',
    subject: 'Normatiza os procedimentos sobre a aprendizagem, a habilitação e a expedição de documentos de condutores e o processo de formação do candidato à obtenção da CNH/ACC.',
    highlights: [
      'Unificação e desburocratização dos processos de formação e exames de habilitação',
      'Regulamentação atualizada da Autorização para Conduzir Ciclomotor (ACC) e CNH categorias A a E',
      'Regras estritas para a Licença de Aprendizagem de Direção Veicular (LADV)',
      'Aproveitamento mínimo de 70% no Exame Teórico (Banco Nacional Senatran)',
      'Disciplinamento da pontuação máxima de faltas e critérios de eliminação no Exame Prático',
      'Infrações impeditivas de concessão da CNH definitiva após período de Permissão para Dirigir (PPD)'
    ]
  },
  complementaryResolutions: [
    {
      number: '911/2022',
      subject: 'Exame Toxicológico de larga janela de detecção para condutores das categorias C, D e E (Art. 148-A do CTB).'
    },
    {
      number: '960/2022',
      subject: 'Requisitos de transmitância luminosa dos vidros dos veículos e proibição de bolhas na área crítica de visão.'
    },
    {
      number: '940/2022',
      subject: 'Uso obrigatório de capacete de segurança para condutores e passageiros de motocicletas, motonetas e ciclomotores.'
    },
    {
      number: '915/2022',
      subject: 'Transporte de crianças menores de 10 anos e dispositivos de retenção (cadeirinhas, assentos de elevação).'
    }
  ]
};

export const CONTRAN_ARTICLES_DATABASE: ContranArticle[] = [
  {
    id: 'art-1',
    resolution: 'Resolução CONTRAN 1.020/2025',
    articleNumber: 'Art. 1º a 3º',
    chapterNumber: 'Capítulo I',
    chapterTitle: 'Disposições Preliminares',
    title: 'Objeto, Abrangência e Competências do Processo de Habilitação',
    content: 'Normatiza os procedimentos sobre aprendizagem, habilitação e expedição de documentos de condutores visando modelo desburocratizado e focado na segurança viária. Compete aos Municípios autorizar a condução de veículos de propulsão humana e tração animal (Art. 24, XVIII do CTB).',
    keyTakeaways: [
      'Aplica-se a todos os candidatos/condutores nacionais ou estrangeiros em vias terrestres.',
      'Veículos de tração animal e propulsão humana são regulados pelos Municípios.',
      'O órgão máximo executivo de trânsito da União (Senatran) estabelece os normativos didáticos e operacionais.'
    ],
    examTip: 'Questões costumam cobrar a divisão de competências: União (normatização/Senatran), Estados (Detran/habilitação) e Municípios (tração animal e propulsão humana).',
    relatedQuestionIds: ['con-q01', 'con-q15', 'con-q41']
  },
  {
    id: 'art-4',
    resolution: 'Resolução CONTRAN 1.020/2025',
    articleNumber: 'Art. 4º',
    chapterNumber: 'Capítulo II',
    chapterTitle: 'Dos Documentos de Habilitação',
    sectionTitle: 'Seção I - Dos Tipos de Documento',
    title: 'Documentos Oficiais de Habilitação e Prontuário do Condutor',
    content: 'São documentos oficiais de habilitação: I - Permissão para Dirigir (PPD); II - Autorização para Conduzir Ciclomotor (ACC); III - Carteira Nacional de Habilitação (CNH). O prontuário do condutor é mantido no RENACH até o óbito do condutor.',
    keyTakeaways: [
      'PPD é o documento provisório de 1 ano do candidato aprovado no processo de 1ª habilitação.',
      'ACC habilita ciclomotores até 50cc ou 4kW e velocidade máxima de 50 km/h.',
      'CNH é o documento definitivo segundo a categoria obtida (A, B, C, D, E).',
      'O prontuário permanece ativo até o óbito, independente de cassação ou perda de validade.'
    ],
    examTip: 'Lembre-se que a CNH vencida CONTINUA valendo como documento oficial de identificação civil em todo o território nacional.',
    relatedQuestionIds: ['con-q02', 'con-q16', 'con-q42']
  },
  {
    id: 'art-5',
    resolution: 'Resolução CONTRAN 1.020/2025',
    articleNumber: 'Art. 5º',
    chapterNumber: 'Capítulo II',
    chapterTitle: 'Dos Documentos de Habilitação',
    sectionTitle: 'Seção I - Categorias e Observações',
    title: 'Categorias de Habilitação e Exercício de Atividade Remunerada (EAR)',
    content: 'As categorias observam o Art. 143 do CTB. Além dos detentores de ACC, apenas condutores com Categoria A estão autorizados a conduzir ciclomotores. O exercício de atividade remunerada (EAR) constará no campo de observações do documento único.',
    keyTakeaways: [
      'Categoria B NÃO autoriza condução de ciclomotores (exige ACC ou Categoria A).',
      'Informações de ACC e categorias constam em um único documento de habilitação.',
      'EAR exige avaliação psicológica prévia obrigatória.'
    ],
    examTip: 'Cuidado! A habilitação na categoria B NÃO permite pilotar nem mesmo um ciclomotor de 50cc. Apenas ACC ou Categoria A habilitam ciclomotores.',
    relatedQuestionIds: ['con-q03', 'con-q17', 'con-q43']
  },
  {
    id: 'art-6',
    resolution: 'Resolução CONTRAN 1.020/2025',
    articleNumber: 'Art. 6º e 7º',
    chapterNumber: 'Capítulo II',
    chapterTitle: 'Dos Documentos de Habilitação',
    sectionTitle: 'Seção I - Processos e Cancelamento',
    title: 'Processos de Expedição e Hipóteses de Cancelamento do Documento',
    content: 'Define os 9 processos formais: obtenção, mudança de categoria, adição, renovação, atualização, transferência, reabilitação, 2ª via e reconhecimento de CNH estrangeira. O cancelamento ocorre a pedido, por irregularidade na expedição ou por infrações impeditivas.',
    keyTakeaways: [
      'O cancelamento a pedido pode ser revertido observando os procedimentos de renovação.',
      'A baixa definitiva da habilitação ocorre EXCLUSIVAMENTE com o óbito do condutor.',
      'Durante o cancelamento, o cidadão é considerado inabilitado para todos os efeitos legais.'
    ],
    examTip: 'A baixa definitiva ocorre APENAS por falecimento do condutor. Cassação e cancelamento geram inabilitação, mas mantêm o registro RENACH ativo.',
    relatedQuestionIds: ['con-q04', 'con-q18', 'con-q44']
  },
  {
    id: 'art-8',
    resolution: 'Resolução CONTRAN 1.020/2025',
    articleNumber: 'Art. 8º a 11',
    chapterNumber: 'Capítulo II',
    chapterTitle: 'Dos Documentos de Habilitação',
    sectionTitle: 'Seção II - Modelos e Identificadores',
    title: 'Elementos de Segurança, BINCO, Espelho e Registro RENACH',
    content: 'Os documentos são expedidos em meio físico e digital, com fé pública. Conterão 2 números de identificação nacional (Registro BINCO de 9 dígitos + 2 DVs; Número do Espelho de 9 dígitos + 1 DV) e 1 número estadual (Formulário RENACH de 11 caracteres com sigla da UF).',
    keyTakeaways: [
      'PPD traz a letra "P" na lateral direita do anverso.',
      'ACC possui indicação em campo específico do documento.',
      'Número do registro BINCO é único para cada condutor durante toda a vida, sendo VEDADA sua reutilização.'
    ],
    examTip: 'O número de registro BINCO é perpétuo (não muda na renovação), enquanto o número do espelho e do formulário RENACH mudam a cada expedição/serviço.',
    relatedQuestionIds: ['con-q05', 'con-q19', 'con-q45']
  },
  {
    id: 'art-12',
    resolution: 'Resolução CONTRAN 1.020/2025',
    articleNumber: 'Art. 12 a 19',
    chapterNumber: 'Capítulo III',
    chapterTitle: 'Do Processo de Formação de Condutores',
    sectionTitle: 'Seção I e II - Requisitos e Início do Processo',
    title: 'Requisitos Obrigatórios para Obtenção da 1ª Habilitação',
    content: 'Para iniciar o processo de obtenção da CNH (Categorias A e/ou B) ou ACC, o candidato deve ser penalmente imputável (18 anos), saber ler e escrever, possuir RG e CPF. O processo tramita no órgão executivo do Estado de sua residência ou domicílio.',
    keyTakeaways: [
      'Requisitos: 18 anos completados, alfabetizado, possuir documento de identidade e CPF.',
      'Não há limite máximo de tempo para concluir o processo no sistema unificado.',
      'Pode haver transferência do processo de formação entre Unidades da Federação.'
    ],
    examTip: 'A exigência é "saber ler e escrever" (alfabetizado) e "ser penalmente imputável" (maior de 18 anos completos na data de abertura do requerimento).',
    relatedQuestionIds: ['con-q06', 'con-q20', 'con-q46']
  },
  {
    id: 'art-31',
    resolution: 'Resolução CONTRAN 1.020/2025',
    articleNumber: 'Art. 31 a 35',
    chapterNumber: 'Capítulo III',
    chapterTitle: 'Do Processo de Formação de Condutores',
    sectionTitle: 'Seção VI - Exame Teórico e LADV',
    title: 'Exame Teórico, Aproveitamento Mínimo e Expedição da LADV',
    content: 'O exame teórico compreende prova objetiva com questões extraídas do Banco Nacional de Questões da Senatran. Para aprovação, é exigido aproveitamento mínimo de 70% (setenta por cento) das questões. A aprovação gera a imediata emissão da Licença de Aprendizagem (LADV).',
    keyTakeaways: [
      'Nota mínima de aprovação: 70% dos pontos da prova teórica.',
      'As questões são padronizadas pelo Banco Nacional mantido pela Senatran.',
      'LADV (Licença de Aprendizagem de Direção Veicular) é emitida imediatamente após o registro da aprovação teórica no RENACH.'
    ],
    examTip: 'Guarde o percentual exato: 70% de acertos para aprovação na prova teórica do DETRAN.',
    relatedQuestionIds: ['con-q07', 'con-q21', 'con-q47']
  },
  {
    id: 'art-36',
    resolution: 'Resolução CONTRAN 1.020/2025',
    articleNumber: 'Art. 36 a 40',
    chapterNumber: 'Capítulo III',
    chapterTitle: 'Do Processo de Formação de Condutores',
    sectionTitle: 'Seção VII - Aulas Práticas de Direção',
    title: 'Regras da Aprendizagem Prática e Licença de Aprendizagem (LADV)',
    content: 'As aulas práticas de direção em vias públicas exigem obrigatoriamente: candidato portando a LADV (física ou digital) e documento oficial de identidade, acompanhado por instrutor credenciado em veículo identificado. Transitar sem LADV configura infração grave e suspensão da LADV por 6 meses.',
    keyTakeaways: [
      'Candidato sem LADV praticando direção incorre em infração e tem a LADV suspensa por 6 meses.',
      'Carga horária mínima deve ser integralmente cumprida e registrada biometricamente/digitalmente no RENACH.',
      'Veículos de aprendizagem devem possuir duplo comando de freios e embreagem e identificação regulamentar.'
    ],
    examTip: 'A penalidade para o candidato surpreendido dirigindo sem a companhia do instrutor ou sem a LADV é a SUSPENSÃO da licença de aprendizagem por 6 (seis) meses!',
    relatedQuestionIds: ['con-q08', 'con-q22', 'con-q48']
  },
  {
    id: 'art-41',
    resolution: 'Resolução CONTRAN 1.020/2025',
    articleNumber: 'Art. 41 a 47',
    chapterNumber: 'Capítulo III',
    chapterTitle: 'Do Processo de Formação de Condutores',
    sectionTitle: 'Seção VIII - Exame Prático de Direção',
    title: 'Exame de Direção Veicular: Avaliação de Faltas e Pontuação',
    content: 'O exame prático avalia o candidato em baliza/percurso com comissão examinadora. A avaliação inicia com zero pontos e são somadas penalidades por faltas cométricas: Eliminitória (reprovação direta), Grave (3 pontos), Média (2 pontos) e Leve (1 ponto). É aprovado quem soma NO MÁXIMO 3 pontos de faltas.',
    keyTakeaways: [
      'Pontuação máxima de faltas permitida para aprovação: 3 (três) pontos.',
      'Uma falta eliminatória (ex: avanço de sinal vermelho, colisão ou transitar na contramão) reprova sumariamente.',
      'Uma falta grave soma 3 pontos (limite máximo de toleração). Uma grave + uma leve (4 pontos) REPROVA.',
      'Em caso de reprovação, não há mais prazo mínimo de espera de 15 dias para remarcação (regra revogada pela desburocratização).'
    ],
    examTip: 'Cuidado em provas! O candidato é REPROVADO se somar MAIS DE 3 pontos no exame prático. 3 pontos cravados ainda é APROVADO.',
    relatedQuestionIds: ['con-q09', 'con-q23', 'con-q49']
  },
  {
    id: 'art-48',
    resolution: 'Resolução CONTRAN 1.020/2025',
    articleNumber: 'Art. 48 a 51',
    chapterNumber: 'Capítulo III',
    chapterTitle: 'Do Processo de Formação de Condutores',
    sectionTitle: 'Seção IX e X - PPD e Concessão da CNH Definitiva',
    title: 'Regras da Permissão para Dirigir (PPD) e Infrações Impeditivas',
    content: 'A PPD tem validade de 1 (um) ano. A CNH definitiva é concedida ao término do período de 1 ano desde que o condutor não tenha cometido nenhuma infração de natureza GRAVE ou GRAVÍSSIMA, nem seja REINCIDENTE em infração MÉDIA (Art. 148, § 3º e § 4º do CTB).',
    keyTakeaways: [
      'Infrações impeditivas durante a PPD: 1 Gravíssima OR 1 Grave OR 2 Médias.',
      'Infrações de natureza LEVE ou uma única infração MÉDIA NÃO impedem a obtenção da CNH definitiva.',
      'Se cometer infração impeditiva, a PPD é cancelada e o candidato deve reiniciar todo o processo de habilitação do zero.'
    ],
    examTip: 'A pegadinha clássica de prova: 1 infração média isolada IMPEDE a CNH definitiva? NÃO! Apenas a REINCIDÊNCIA em média (duas ou mais médias) impede.',
    relatedQuestionIds: ['con-q10', 'con-q24', 'con-q50']
  },
  {
    id: 'art-52',
    resolution: 'Resolução CONTRAN 1.020/2025',
    articleNumber: 'Art. 52 a 66',
    chapterNumber: 'Capítulo IV',
    chapterTitle: 'Mudança, Adição e Cursos Especializados',
    sectionTitle: 'Seção I e II - Requisitos de Mudança de Categoria',
    title: 'Requisitos para Mudança de Categoria (C, D e E) e Toxicológico',
    content: 'Exige prazos prévios de habilitação e não ter cometido infração gravíssima nos últimos 12 meses: De B para C (mínimo 1 ano em B); De B para D (mínimo 2 anos em B e idade mínima de 21 anos); De C para D (mínimo 1 ano em C e 21 anos); De C para E (mínimo 1 ano em C); De D para E (mínimo 1 ano em D). Exame toxicológico obrigatório.',
    keyTakeaways: [
      'Idade mínima de 21 anos para categorias D e E.',
      'Não pode ter cometido NENHUMA infração gravíssima nos últimos 12 meses.',
      'Condutores C, D e E devem obrigatoriamente realizar exame toxicológico de larga janela de detecção (Res. 911/2022).'
    ],
    examTip: 'Para mudar para as categorias D e E exige-se SEMPRE ter 21 anos completos E ausência de infração gravíssima nos últimos 12 meses.',
    relatedQuestionIds: ['con-q11', 'con-q25', 'con-q51']
  },
  {
    id: 'art-87',
    resolution: 'Resolução CONTRAN 1.020/2025',
    articleNumber: 'Art. 87 a 91',
    chapterNumber: 'Capítulo IV',
    chapterTitle: 'Mudança, Adição e Cursos Especializados',
    sectionTitle: 'Seção VII - Curso de Reciclagem',
    title: 'Curso de Reciclagem para Condutores Infratores',
    content: 'O condutor será submetido a Curso de Reciclagem: I - quando suspenso do direito de dirigir; II - quando se envolver em acidente grave para o qual tenha contribuído; III - quando judicialmente determinado por delito de trânsito; IV - ao ser constatada inaptidão para conduzir com segurança.',
    keyTakeaways: [
      'Reciclagem é obrigatória para cumprir a penalidade de suspensão da CNH.',
      'Compreende curso teórico e prova de avaliação com aproveitamento mínimo de 70%.',
      'Pode ser realizado na modalidade presencial ou EAD por instituições homologadas.'
    ],
    examTip: 'Ao cumprir suspensão do direito de dirigir, o condutor DEVE cumprir o prazo de suspensão E realizar o curso de reciclagem com aprovação para reaver a CNH.',
    relatedQuestionIds: ['con-q12', 'con-q26', 'con-q52']
  },
  {
    id: 'art-92',
    resolution: 'Resolução CONTRAN 1.020/2025',
    articleNumber: 'Art. 92 a 93',
    chapterNumber: 'Capítulo V',
    chapterTitle: 'Renovação e Documentos Internacionais',
    sectionTitle: 'Seção I - Prazos de Renovação do Exame de Aptidão',
    title: 'Prazos de Validade do Exame Médico da CNH (Art. 147 CTB / Res. 1.020)',
    content: 'A renovação da CNH depende do Exame de Aptidão Física e Mental. Os prazos máximos de validade são: 10 (dez) anos para condutores com idade inferior a 50 anos; 5 (cinco) anos para condutores de 50 a 69 anos; 3 (três) anos para condutores com 70 anos de idade ou mais.',
    keyTakeaways: [
      'Idade < 50 anos: validade máxima de 10 anos.',
      'Idade de 50 a 69 anos: validade máxima de 5 anos.',
      'Idade >= 70 anos: validade máxima de 3 anos.',
      'O médico perito pode reduzir o prazo de validade a seu critério se houver indício de deficiência progressiva.'
    ],
    examTip: 'A regra de ouro da validade da CNH: 10 anos (<50), 5 anos (50-69) e 3 anos (70+). Decorar essas três faixas etárias!',
    relatedQuestionIds: ['con-q13', 'con-q27', 'con-q53']
  },
  {
    id: 'res-911',
    resolution: 'Resolução CONTRAN 911/2022',
    articleNumber: 'Art. 148-A CTB & Res. 911/2022',
    chapterNumber: 'Legislação Complementar',
    chapterTitle: 'Exame Toxicológico de Larga Janela de Detecção',
    title: 'Periodicidade do Exame Toxicológico para Categorias C, D e E',
    content: 'Os condutores das categorias C, D e E com idade inferior a 70 anos devem realizar exame toxicológico intermediário a cada 2 anos e 6 meses (30 meses), independentemente da validade de sua CNH. Dirigir sem realizar o exame toxicológico após 30 dias do vencimento constitui infração gravíssima com multa multiplicada por 5 (infração das gravíssimas de trânsito).',
    keyTakeaways: [
      'Exame intermediário a cada 2 anos e 6 meses para condutores C, D e E com menos de 70 anos.',
      'Janela de detecção mínima de 90 dias para substâncias psicoativas.',
      'Dirigir com toxicológico vencido há mais de 30 dias: infração gravíssima (multa x5 e suspensão por 3 meses em caso de reincidência).'
    ],
    examTip: 'A periodicidade intermediária do toxicológico é de 2 ANOS E 6 MESES (30 meses), e a tolerância de atraso é de apenas 30 dias.',
    relatedQuestionIds: ['con-q14', 'con-q28', 'con-q54']
  },
  {
    id: 'res-960',
    resolution: 'Resolução CONTRAN 960/2022',
    articleNumber: 'Res. CONTRAN 960/2022',
    chapterNumber: 'Legislação Complementar',
    chapterTitle: 'Transmitância Luminosa e Insulfilm',
    title: 'Transmitância Luminosa Mínima e Proibição de Películas Refletivas',
    content: 'Regulamenta os vidros dos veículos. A transmitância luminosa mínima do para-brisa e das áreas indispensáveis à dirigibilidade (vidros laterais dianteiros) é de 70%. São expressamente proibidas películas refletivas/espelhadas e bolhas na área crítica de visão do condutor.',
    keyTakeaways: [
      'Para-brisa e vidros laterais dianteiros: no mínimo 70% de transmitância luminosa.',
      'Película refletiva ou espelhada é estritamente PROIBIDA em qualquer vidro do veículo.',
      'Bolhas na área de visão do condutor geram autuação de infração e retenção do veículo para regularização.'
    ],
    examTip: 'O valor unificado para o para-brisa e vidros laterais dianteiros é de 70%. Vidros refletivos/espelhados são 100% proibidos.',
    relatedQuestionIds: ['con-q29', 'con-q55']
  },
  {
    id: 'res-940',
    resolution: 'Resolução CONTRAN 940/2022',
    articleNumber: 'Res. CONTRAN 940/2022',
    chapterNumber: 'Legislação Complementar',
    chapterTitle: 'Uso de Capacete de Motociclista',
    title: 'Requisitos Obrigatórios do Capacete e Regras de Viseira',
    content: 'O capacete de segurança para motocicletas, motonetas e ciclomotores deve conter selo/gravação de certificação do INMETRO e dispositivos retrorrefletivos nas laterais e traseira. No período noturno, é proibida viseira fumê/escura ou com películas.',
    keyTakeaways: [
      'Exige selo de conformidade do INMETRO e faixas retrorrefletivas nas laterais e traseira.',
      'A viseira ou óculos de proteção deve estar totalmente abaixada em circulação.',
      'No período noturno é OBRIGATÓRIO o uso de viseira no padrão cristal (transparente).'
    ],
    examTip: 'Pilotar sem capacete ou com capacete não homologado constitui infração gravíssima com suspensão direta do direito de dirigir!',
    relatedQuestionIds: ['con-q30', 'con-q56']
  }
];

export const CONTRAN_TOPIC_SUMMARIES: ContranTopicSummary[] = [
  {
    id: 'topic-ciclomotores',
    resolution: 'Resolução CONTRAN 1.020/2025',
    title: 'Regulamentação Completa de Ciclomotores (ACC vs CNH A)',
    category: 'Habilitação',
    description: 'Ciclomotor é o veículo de 2 ou 3 rodas com motor até 50cc ou 4kW e velocidade máxima de 50 km/h. Para conduzir, exige-se ACC ou CNH na Categoria A.',
    keyRules: [
      'Categoria B NÃO habilita condução de ciclomotores.',
      'ACC exige processo de exames teórico e prático específico.',
      'Equipamentos obrigatórios: capacete homologado pelo INMETRO, espelhos retrovisores em ambos os lados e farol dianteiro.'
    ],
    articleRefs: ['Art. 4º, § 2º', 'Art. 5º, § 1º']
  },
  {
    id: 'topic-ladv-pratica',
    resolution: 'Resolução CONTRAN 1.020/2025',
    title: 'Licença de Aprendizagem (LADV) e Aulas Práticas',
    category: 'Segurança e Exames',
    description: 'A LADV é expedida automaticamente após a aprovação no exame teórico (mínimo de 70% de aproveitamento).',
    keyRules: [
      'É documento individual e obrigatório durante toda aula prática de direção.',
      'Dirigir sem acompanhamento de instrutor credenciado resulta em cassação/suspensão da LADV por 6 meses.',
      'Veículo de instrução deve ter duplo comando de freio/embreagem e identificação "Autoescola".'
    ],
    articleRefs: ['Art. 35', 'Art. 36 a 40']
  },
  {
    id: 'topic-exame-pratico',
    resolution: 'Resolução CONTRAN 1.020/2025',
    title: 'Exame de Direção Veicular (Faltas e Pontuação)',
    category: 'Segurança e Exames',
    description: 'O exame prático avalia o candidato partindo de 0 faltas. Faltas graves (3 pts), médias (2 pts) e leves (1 pt). O limite para aprovação é 3 pontos.',
    keyRules: [
      'Aprovado: candidato com total de faltas <= 3 pontos.',
      'Reprovado: candidato com total de faltas > 3 pontos ou comissao de falta eliminatória.',
      'Falta Eliminatória: colidir, avançar sinal vermelho, subir no meio-fio ou transitar na contramão.'
    ],
    articleRefs: ['Art. 41 a 47']
  },
  {
    id: 'topic-ppd-impeditivas',
    resolution: 'Resolução CONTRAN 1.020/2025',
    title: 'Permissão para Dirigir (PPD) e Regras para CNH Definitiva',
    category: 'Habilitação',
    description: 'Durante 1 ano de PPD, o condutor não pode cometer infração Grave ou Gravíssima, nem ser Reincidente em Média.',
    keyRules: [
      'Infração Grave ou Gravíssima isolada IMPEDE a expedição da CNH.',
      'Reincidência em Média (2 ou mais) IMPEDE a expedição da CNH.',
      '1 única infração Leve ou 1 única infração Média NÃO impede a CNH.'
    ],
    articleRefs: ['Art. 48 a 51', 'Art. 148 § 3º CTB']
  },
  {
    id: 'topic-toxicológico',
    resolution: 'Resolução CONTRAN 911/2022 & 1.020/2025',
    title: 'Exame Toxicológico Periódico (Categorias C, D e E)',
    category: 'Segurança e Exames',
    description: 'Obrigatório para obtenção, renovação e a cada 2 anos e 6 meses (para condutores com < 70 anos).',
    keyRules: [
      'Janela de detecção mínima de 90 dias.',
      'Infração de dirigir com toxicológico vencido há mais de 30 dias: Gravíssima com multa de 5 vezes.',
      'Recusa em realizar o exame: infração gravíssima com suspensão do direito de dirigir por 3 meses.'
    ],
    articleRefs: ['Art. 148-A CTB', 'Res. 911/2022']
  }
];
