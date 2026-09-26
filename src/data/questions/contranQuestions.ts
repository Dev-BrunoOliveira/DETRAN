import { Question } from '../../types';

export const contranQuestions: Question[] = [
  {
    id: 'con-q01',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 911/2022 - Exame Toxicológico',
    difficulty: 'Médio',
    statement: 'Nos termos da Resolução CONTRAN nº 911/2022 e do Art. 148-A do CTB, os condutores das categorias C, D e E deverão comprovar resultado negativo em exame toxicológico para obtenção e renovação da CNH. Qual é a periodicidade exigida para o exame toxicológico intermediário para condutores com idade inferior a 70 anos?',
    lawReference: 'Resolução CONTRAN 911/2022 & Art. 148-A, § 2º do CTB',
    bancaTag: 'Vunesp / Avalia 2026',
    options: [
      { letter: 'A', text: 'A cada 1 (um) ano.' },
      { letter: 'B', text: 'A cada 2 (dois) anos e 6 (seis) meses.' },
      { letter: 'C', text: 'A cada 3 (três) anos.' },
      { letter: 'D', text: 'A cada 5 (cinco) anos.' },
      { letter: 'E', text: 'Apenas no momento da renovação da CNH.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Conforme a Resolução CONTRAN 911/2022 e o Art. 148-A, § 2º do CTB, os condutores das categorias C, D e E com idade inferior a 70 anos serão submetidos a novo exame toxicológico a cada período de 2 ANOS E 6 MESES, a contar da data de obtenção ou renovação da CNH.',
    explanations: {
      A: 'INCORRETA. Não é anual.',
      B: 'CORRETA. Prazo legal oficial: 2 anos e 6 meses (30 meses).',
      C: 'INCORRETA. 3 anos é o prazo de renovação do exame de saúde para maiores de 70 anos.',
      D: 'INCORRETA. 5 anos é o prazo geral de CNH para maiores de 50 anos.',
      E: 'INCORRETA. O exame intermediário (toxicológico periódico) é obrigatório independentemente da validade total da CNH.'
    }
  },
  {
    id: 'con-q02',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 960/2022 - Transmitância Luminosa e Insulfilm',
    difficulty: 'Médio',
    statement: 'A Resolução CONTRAN nº 960/2022 estabelece os requisitos sobre a transmitância luminosa dos vidros dos veículos. O índice mínimo de transmitância luminosa para o parabrisa e demais vidros indispensáveis à dirigibilidade é de:',
    lawReference: 'Resolução CONTRAN 960/2022, Art. 4º',
    bancaTag: 'FCC / Avalia 2026',
    options: [
      { letter: 'A', text: '50% (cinquenta por cento).' },
      { letter: 'B', text: '70% (setenta por cento).' },
      { letter: 'C', text: '28% (vinte e oito por cento).' },
      { letter: 'D', text: '75% (setenta e cinco por cento).' },
      { letter: 'E', text: '100% (cem por cento).' }
    ],
    correctLetter: 'B',
    generalExplanation: 'A Resolução CONTRAN nº 960/2022 unificou a exigência de transmitância luminosa mínima para o parabrisa e para os vidros das áreas envidraçadas indispensáveis à dirigibilidade (vidros laterais dianteiros) em no mínimo 70% (setenta por cento).',
    explanations: {
      A: 'INCORRETA. 50% não é o limite mínimo legal.',
      B: 'CORRETA. Res. CONTRAN 960/2022: Mínimo de 70% de transmitância luminosa.',
      C: 'INCORRETA. 28% era o limite antigo para vidros que não interferem na dirigibilidade (traseiros).',
      D: 'INCORRETA. 75% era exigência de normas anteriores já revogadas.',
      E: 'INCORRETA. 100% representaria ausência total de película.'
    }
  },
  {
    id: 'con-q03',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 960/2022 - Bolhas e Película Refletiva',
    difficulty: 'Fácil',
    statement: 'Acerca das proibições relativas ao uso de películas nos vidros dos veículos (Resolução CONTRAN 960/2022), assinale a opção CORRETA:',
    lawReference: 'Resolução CONTRAN 960/2022, Art. 4º, § 2º',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'É permitida a aplicação de películas refletivas ou espelhadas no parabrisa, desde que com chancela.' },
      { letter: 'B', text: 'Fica proibida a aplicação de películas refletivas no veículo, bem como a presença de bolhas na área de visão do condutor no parabrisa e nos vidros laterais dianteiros.' },
      { letter: 'C', text: 'Bolhas no insulfilm nos vidros traseiros geram apreensão imediata do veículo.' },
      { letter: 'D', text: 'A chancela de identificação da película pode ser gravada com caneta esferográfica.' },
      { letter: 'E', text: 'É autorizada a pintura dos vidros dianteiros com tinta preta opaca.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'A Res. CONTRAN 960/22 proíbe expressamente: 1) a aplicação de películas refletivas/espelhadas em qualquer vidro do veículo; 2) a presença de bolhas na área de visão do condutor no parabrisa e nos vidros laterais dianteiros.',
    explanations: {
      A: 'INCORRETA. Película refletiva/espelhada é totalmente proibida.',
      B: 'CORRETA. Res. 960/22, Art. 4º: Proibição de película refletiva e de bolhas na área crítica de visão.',
      C: 'INCORRETA. A proibição de bolhas enfoca a área crítica de visão dianteira, e a penalidade é retenção, não apreensão.',
      D: 'INCORRETA. A chancela deve ser indelével e legível por fora.',
      E: 'INCORRETA. É proibida a opacidade ou pintura.'
    }
  },
  {
    id: 'con-q04',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 940/2022 - Capacete de Motociclista',
    difficulty: 'Médio',
    statement: 'A Resolução CONTRAN nº 940/2022 disciplina o uso de capacete para condutores e passageiros de motocicletas, motonetas, ciclomotores, triciclos e quadriciclos motorizados. É correto afirmar que o capacete deve conter obrigatoriamente:',
    lawReference: 'Resolução CONTRAN 940/2022, Art. 2º',
    bancaTag: 'FCC / Avalia 2026',
    options: [
      { letter: 'A', text: 'Selo de certificação do INMETRO (ou gravado no capacete) e dispositivo retrorrefletivo nas laterais e traseira.' },
      { letter: 'B', text: 'Viseira fumê de uso obrigatório no período noturno.' },
      { letter: 'C', text: 'Número do CPF do condutor gravado na parte interna.' },
      { letter: 'D', text: 'Trava metálica com chave de segurança integrada.' },
      { letter: 'E', text: 'Pintura amarela fluorescente em toda a calota.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A Res. CONTRAN 940/22 exige que o capacete de segurança possua obrigatoriamente: 1) Certificação de conformidade pelo INMETRO (selo ou gravação indelével); 2) Dispositivos retrorrefletivos de segurança nas laterais e parte traseira; 3) Viseira ou óculos de proteção (vedada viseira escura à noite).',
    explanations: {
      A: 'CORRETA. Res. 940/22: Selo/gravação do INMETRO e retrorrefletivos obrigatórios.',
      B: 'INCORRETA. No período noturno é proibido o uso de viseira com película ou escura/fumê.',
      C: 'INCORRETA. Não exige gravação de CPF.',
      D: 'INCORRETA. A cinta jugular deve ser ajustada, mas não há trava por chave.',
      E: 'INCORRETA. A cor do capacete é livre, exigindo-se apenas os retrorrefletivos.'
    }
  },
  {
    id: 'con-q05',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 915/2022 - Transporte de Crianças',
    difficulty: 'Médio',
    statement: 'A Resolução CONTRAN nº 915/2022 e o Art. 64 do CTB regulam o transporte de crianças com idade inferior a 10 anos em veículos automotores. O dispositivo de retenção adequado conhecido como "ASSENTO DE ELEVAÇÃO" é obrigatório para crianças com a seguinte faixa etária/estatura:',
    lawReference: 'Resolução CONTRAN 915/2022, Art. 3º',
    bancaTag: 'Vunesp / DETRAN-SP',
    options: [
      { letter: 'A', text: 'Crianças de até 1 ano de idade.' },
      { letter: 'B', text: 'Crianças com idade superior a 1 ano e até 4 anos.' },
      { letter: 'C', text: 'Crianças com idade superior a 4 anos e até 7 anos e meio (ou até 1,45m de altura).' },
      { letter: 'D', text: 'Crianças maiores de 10 anos exclusivamente no banco dianteiro.' },
      { letter: 'E', text: 'Crianças de qualquer idade sem cinto de segurança.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'Dispositivos de retenção infantis (Res. 915/22 e Art. 64 CTB):\n- Bebê Conforto: até 1 ano;\n- Cadeirinha: > 1 ano até 4 anos;\n- Assento de Elevação: > 4 anos até 7 anos e meio (ou até atingir 1,45 m de altura);\n- Cinto de segurança do veículo no banco traseiro: > 7,5 anos até 10 anos (ou mais de 1,45m).',
    explanations: {
      A: 'INCORRETA. Para até 1 ano utiliza-se o Bebê Conforto (voltado para trás).',
      B: 'INCORRETA. Para 1 a 4 anos utiliza-se a Cadeirinha.',
      C: 'CORRETA. Assento de elevação: crianças de 4 a 7,5 anos que não tenham atingido 1,45m.',
      D: 'INCORRETA. Maiores de 10 anos usam cinto normal e podem ir no banco dianteiro.',
      E: 'INCORRETA. Cinto ou dispositivo é sempre obrigatório.'
    }
  },
  {
    id: 'con-q06',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 915/2022 - Exceção do Banco Dianteiro',
    difficulty: 'Difícil',
    statement: 'Uma criança menor de 10 anos que ainda não atingiu 1,45 m de altura poderá ser transportada no BANCO DIANTEIRO do veículo, utilizando o dispositivo de retenção adequado, em qual das situações excepcionais abaixo?',
    lawReference: 'Resolução CONTRAN 915/2022, Art. 4º',
    bancaTag: 'FCC / Avalia 2026',
    options: [
      { letter: 'A', text: 'Quando o veículo for dotado exclusivamente de banco dianteiro (ex: caminhonete cabine simples) ou quando a quantidade de crianças dessa idade exceder a lotação do banco traseiro.' },
      { letter: 'B', text: 'Sempre que o motorista for o pai ou a mãe da criança.' },
      { letter: 'C', text: 'Em viagens de longa distância em rodovias federais.' },
      { letter: 'D', text: 'Quando o banco traseiro estiver ocupado por bagagens soltas.' },
      { letter: 'E', text: 'Apenas se a criança for maior de 5 anos e estiver de capacete.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Res. 915/22, Art. 4º: A criança menor de 10 anos pode ir no banco dianteiro nas exceções legais: 1) quando o veículo for dotado apenas de banco dianteiro; 2) quando a quantidade de crianças menores de 10 anos exceder a capacidade de lotação do banco traseiro; 3) quando o veículo possuir apenas cintos de 2 pontos no banco traseiro e de 3 pontos no dianteiro.',
    explanations: {
      A: 'CORRETA. Res. 915/22, Art. 4º: Exceções legais para transporte no banco dianteiro.',
      B: 'INCORRETA. A relação de parentesco não flexibiliza a regra de segurança.',
      C: 'INCORRETA. A extensão da viagem não é exceção permitida.',
      D: 'INCORRETA. Bagagens não justificam desalojar crianças do banco traseiro.',
      E: 'INCORRETA. Capacete não se aplica a veículos de passeio.'
    }
  },
  {
    id: 'con-q07',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 925/2022 - Sinalização e Fiscalização',
    difficulty: 'Médio',
    statement: 'Conforme a Resolução CONTRAN nº 925/2022, os equipamentos medidores de velocidade (radares fixos, estáticos e portáteis) utilizados pela fiscalização de trânsito dependem de requisitos de validação. Qual é a periodicidade máxima de verificação metrológica pelo INMETRO ou entidade credenciada?',
    lawReference: 'Resolução CONTRAN 925/2022 & Portaria INMETRO',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'A cada 6 meses.' },
      { letter: 'B', text: 'A cada 12 (doze) meses.' },
      { letter: 'C', text: 'A cada 2 anos.' },
      { letter: 'D', text: 'A cada 5 anos.' },
      { letter: 'E', text: 'Apenas uma vez na instalação inicial.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Res. CONTRAN 925/2022 e normas de metrologia legal: Todo medidor de velocidade (radar) deve ser aprovado pelo INMETRO e passar por verificação metrológica periódica no prazo máximo de 12 (DOIS) MESES (1 ano). Sem a verificação anual válida, o auto de infração é nulo.',
    explanations: {
      A: 'INCORRETA. Não é semestral.',
      B: 'CORRETA. A aferição/verificação metrológica de radares deve ser feita a cada 12 meses.',
      C: 'INCORRETA. 2 anos não atende ao requisito anual.',
      D: 'INCORRETA. Prazo excessivo.',
      E: 'INCORRETA. A aferição inicial isolada não basta.'
    }
  },
  {
    id: 'con-q08',
    subjectId: 'contran_estadual',
    topic: 'Decreto Estadual SP nº 69.053/2024 - Estrutura do DETRAN-SP',
    difficulty: 'Médio',
    statement: 'O Decreto Estadual nº 69.053/2024 reorganizou a Estrutura Organizacional do Departamento Estadual de Trânsito de São Paulo (DETRAN-SP). Nos termos deste Decreto, o DETRAN-SP é caracterizado juridicamente como:',
    lawReference: 'Decreto Estadual SP 69.053/2024, Art. 1º',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'Autarquia estadual de regime especial, dotada de autonomia administrativa, financeira e patrimonial, vinculada à Secretaria de Gestão e Governo Digital.' },
      { letter: 'B', text: 'Empresa pública estadual com fins lucrativos.' },
      { letter: 'C', text: 'Sociedade de economia mistada vinculada ao Ministério dos Transportes.' },
      { letter: 'D', text: 'Órgão da administração direta integrante da Polícia Militar do Estado de São Paulo.' },
      { letter: 'E', text: 'Fundação privada sem fins lucrativos.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O DETRAN-SP (transformado pela Lei Complementar Estadual 1.195/2013 e estruturado pelo Decreto 69.053/2024) é uma AUTARQUIA ESTADUAL de regime especial, com autonomia administrativa e financeira, vinculada à Secretaria de Gestão e Governo Digital do Estado de São Paulo.',
    explanations: {
      A: 'CORRETA. Decreto 69.053/2024, Art. 1º: Autarquia estadual de regime especial vinculada à SGGD.',
      B: 'INCORRETA. Não é empresa pública.',
      C: 'INCORRETA. Não é sociedade de economia mista e é estadual, não federal.',
      D: 'INCORRETA. Não é órgão da administração direta e não integra a PM.',
      E: 'INCORRETA. Não é fundação privada.'
    }
  },
  {
    id: 'con-q09',
    subjectId: 'contran_estadual',
    topic: 'Decreto Estadual SP nº 69.053/2024 - Diretoria Presidência do DETRAN-SP',
    difficulty: 'Difícil',
    statement: 'Segundo a estrutura estabelecida no Decreto Estadual SP nº 69.053/2024, qual é o órgão de direção superior competente para representar o DETRAN-SP em juízo e fora dele, bem como exercer a gestão executiva da autarquia?',
    lawReference: 'Decreto Estadual SP 69.053/2024, Art. 5º',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'Conselho Estadual de Trânsito (CETRAN).' },
      { letter: 'B', text: 'Diretoria Presidência do DETRAN-SP.' },
      { letter: 'C', text: 'Superintendência Regional de Polícia Científica.' },
      { letter: 'D', text: 'Junta Administrativa de Recursos de Infrações (JARI).' },
      { letter: 'E', text: 'Ouvidoria Geral do Estado.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Decreto 69.053/2024, Art. 5º: A Diretoria Presidência é o órgão executivo de direção superior encarregado de administrar, coordenar, supervisionar e representar o DETRAN-SP em todas as suas instâncias.',
    explanations: {
      A: 'INCORRETA. CETRAN é órgão colegiado normativo estadual.',
      B: 'CORRETA. Decreto 69.053/2024: A Diretoria Presidência representa e dirige a autarquia.',
      C: 'INCORRETA. Não integra a estrutura do DETRAN-SP.',
      D: 'INCORRETA. JARI é órgão julgador de recursos de infrações.',
      E: 'INCORRETA. Ouvidoria é órgão de controle e escuta cidadã.'
    }
  },
  {
    id: 'con-q10',
    subjectId: 'contran_estadual',
    topic: 'Decreto Estadual SP nº 69.328/2025 - Código de Ética de SP',
    difficulty: 'Médio',
    statement: 'O Código de Ética da Administração Pública do Estado de São Paulo (Decreto Estadual nº 69.328/2025) estabelece os deveres dos agentes públicos estaduais. Dentre esses deveres, destaca-se:',
    lawReference: 'Decreto Estadual SP 69.328/2025, Art. 4º',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'Exercer as atribuições do cargo com urbanidade, imparcialidade, transparência e eficiência, evitando conflitos de interesses.' },
      { letter: 'B', text: 'Aceitar brindes de alto valor de fornecedores licitantes em datas comemorativas.' },
      { letter: 'C', text: 'Utilizar informações privilegiadas obtidas no cargo para investimentos pessoais no mercado financeiro.' },
      { letter: 'D', text: 'Ocultar relatórios de auditoria interna para preservar a imagem do órgão.' },
      { letter: 'E', text: 'Priorizar o atendimento de parentes e amigos na fila das Ciretrans.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Decreto Estadual SP nº 69.328/2025 (Código de Ética) impõe como dever dos agentes públicos agir com probidade, urbanidade, impessoalidade, transparência e estrita prevenção a conflitos de interesse na administração pública paulista.',
    explanations: {
      A: 'CORRETA. Decreto 69.328/2025: Princípios fundamentais de ética, imparcialidade e eficiência.',
      B: 'INCORRETA. O recebimento de brindes de licitantes é vedado pelo Código de Ética.',
      C: 'INCORRETA. Constitui ato ilícito e improbidade administrativa.',
      D: 'INCORRETA. Viola a transparência e a legalidade.',
      E: 'INCORRETA. Afronta o princípio constitucional da impessoalidade.'
    }
  },
  {
    id: 'con-q11',
    subjectId: 'contran_estadual',
    topic: 'Decreto Estadual SP nº 69.328/2025 - Recebimento de Presentes',
    difficulty: 'Difícil',
    statement: 'Nos termos do Decreto Estadual nº 69.328/2025 (Código de Ética de SP), é VEDADO ao agente público do DETRAN-SP aceitar presentes, favores ou vantagens de pessoas que tenham interesse em decisão de sua alçada. Não se consideram presentes, contudo, os brindes que:',
    lawReference: 'Decreto Estadual SP 69.328/2025, Art. 8º',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'Não tenham valor comercial ou sejam distribuídos por entidades a título de cortesia, de valor modesto e caráter de divulgação em massa.' },
      { letter: 'B', text: 'Superem o valor de um salário mínimo mensal.' },
      { letter: 'C', text: 'Sejam entregues em dinheiro vivo ou Pix diretamente na conta pessoal.' },
      { letter: 'D', text: 'Consistam em viagens de férias pagas por despachantes credenciados.' },
      { letter: 'E', text: 'Venham acompanhados de nota fiscal no nome do agente.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Decreto 69.328/2025 (Código de Ética de SP): O recebimento de presentes é expressamente proibido. Excepcionam-se apenas os brindes sem valor comercial expressivo, distribuídos de forma genérica e em massa (ex: canetas, agendas promocionais institucionais de valor irrisório).',
    explanations: {
      A: 'CORRETA. Decreto 69.328/2025, Art. 8º: Brindes de valor modesto e divulgação institucional são a única exceção.',
      B: 'INCORRETA. Brindes de valor relevante são vedados.',
      C: 'INCORRETA. Receber valor em dinheiro/Pix é crime de corrupção e improbidade.',
      D: 'INCORRETA. Constitui vantagem indevida grave.',
      E: 'INCORRETA. Ter nota fiscal em nome pessoal não descaracteriza o presente proibido.'
    }
  },
  {
    id: 'con-q12',
    subjectId: 'contran_estadual',
    topic: 'Decreto Estadual SP nº 70.551/2026 - PSV-SP (2025-2035)',
    difficulty: 'Médio',
    statement: 'O Decreto Estadual SP nº 70.551/2026 instituiu o Plano de Segurança Viária do Estado de São Paulo (PSV-SP 2025-2035). O plano adota a premissa internacional da "Visão Zero" (Vision Zero), segundo a qual:',
    lawReference: 'Decreto Estadual SP 70.551/2026, Art. 2º',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'Nenhuma morte ou lesão grave no trânsito é aceitável, e a responsabilidade pela segurança deve ser compartilhada entre quem projeta as vias, fiscaliza e os usuários.' },
      { letter: 'B', text: 'O número de acidentes deve ser reduzido a zero mediante a eliminação total de veículos particulares das rodovias.' },
      { letter: 'C', text: 'A culpa dos acidentes é sempre 100% exclusiva do pedestre.' },
      { letter: 'D', text: 'As infrações de trânsito deixam de ser punidas com multas financeiras.' },
      { letter: 'E', text: 'A velocidade máxima em todas as rodovias passa a ser fixada em 30 km/h.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O conceito internacional de "Visão Zero" e "Sistema Seguro", incorporado no PSV-SP 2025-2035 (Decreto 70.551/2026), estabelece que nenhuma morte ou lesão severa no trânsito é eticamente aceitável, reconhecendo que seres humanos erram e que o sistema viário deve ser projetado de forma tolerante para salvar vidas.',
    explanations: {
      A: 'CORRETA. Princípio fundamental da Visão Zero no PSV-SP 2025-2035.',
      B: 'INCORRETA. Não prega eliminação de veículos particulares.',
      C: 'INCORRETA. O sistema seguro descentraliza e compartilha a responsabilidade.',
      D: 'INCORRETA. A fiscalização e punição continuam sendo pilares.',
      E: 'INCORRETA. Não impõe velocidade única de 30 km/h em rodovias.'
    }
  },
  {
    id: 'con-q13',
    subjectId: 'contran_estadual',
    topic: 'Decreto Estadual SP nº 70.551/2026 - Pilares do PSV-SP',
    difficulty: 'Difícil',
    statement: 'Dentre os pilares de ação estruturados pelo Decreto Estadual SP nº 70.551/2026 no Plano de Segurança Viária (PSV-SP), destacam-se as seguintes áreas prioritárias, EXCETO:',
    lawReference: 'Decreto Estadual SP 70.551/2026, Art. 4º',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'Gestão da Segurança Viária e Vias Mais Seguras.' },
      { letter: 'B', text: 'Velocidades Seguras e Veículos Mais Seguros.' },
      { letter: 'C', text: 'Usuários de Vias Mais Seguros e Atendimento Pós-Acidente.' },
      { letter: 'D', text: 'Privatização de 100% dos postos de atendimento de saúde municipal.' },
      { letter: 'E', text: 'Fiscalização Integrada e Educação para o Trânsito.' }
    ],
    correctLetter: 'D',
    generalExplanation: 'Os pilares do PSV-SP (baseados na Década de Ação para Segurança no Trânsito da ONU/OMS) incluem: 1) Gestão; 2) Vias Seguras; 3) Veículos Seguros; 4) Usuários Seguros; 5) Velocidades Seguras; 6) Atendimento Pós-Acidente. Não existe pilar de privatização de postos de saúde.',
    explanations: {
      A: 'PILAR DO PSV-SP. Art. 4º.',
      B: 'PILAR DO PSV-SP. Art. 4º.',
      C: 'PILAR DO PSV-SP. Art. 4º.',
      D: 'EXCEÇÃO / OPCÃO CORRETA. Não é pilar nem objetivo do Plano de Segurança Viária.',
      E: 'PILAR DO PSV-SP. Art. 4º.'
    }
  },
  {
    id: 'con-q14',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 960/2022 - Medição com Luxímetro',
    difficulty: 'Médio',
    statement: 'A fiscalização da transmitância luminosa de películas aplicadas nos vidros dos veículos deve ser realizada pelo agente de trânsito mediante a utilização do instrumento medidor denominado:',
    lawReference: 'Resolução CONTRAN 960/2022, Art. 7º',
    bancaTag: 'Vunesp / FCC',
    options: [
      { letter: 'A', text: 'Etilômetro.' },
      { letter: 'B', text: 'Medidor de Transmitância Luminosa (Luxímetro / Medidor de Película) aprovado pelo INMETRO.' },
      { letter: 'C', text: 'Tacógrafo eletrônico.' },
      { letter: 'D', text: 'Decibelímetro.' },
      { letter: 'E', text: 'Opacímetro de exaustão.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Res. 960/2022, Art. 7º: A medição do índice de transmitância luminosa deve ser realizada exclusivamente por Medidor de Transmitância Luminosa (MTL) aprovado pelo INMETRO e homologado pelo SENATRAN. A constatação puramente visual não autoriza a autuação por transmitância.',
    explanations: {
      A: 'INCORRETA. Etilômetro mede alcoolemia.',
      B: 'CORRETA. Exigência formal do MTL (Medidor de Transmitância Luminosa).',
      C: 'INCORRETA. Tacógrafo registra velocidade e tempo.',
      D: 'INCORRETA. Decibelímetro mede ruído sonoro.',
      E: 'INCORRETA. Opacímetro mede fumaça expelida por motores diesel.'
    }
  },
  {
    id: 'con-q15',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 940/2022 - Viseiras e Óculos de Proteção',
    difficulty: 'Fácil',
    statement: 'Durante a condução de motocicleta na ausência de viseira no capacete, a Resolução CONTRAN nº 940/2022 exige o uso de:',
    lawReference: 'Resolução CONTRAN 940/2022, Art. 3º',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: 'Óculos de sol convencionais de acrílico.' },
      { letter: 'B', text: 'Óculos de grau de uso diário.' },
      { letter: 'C', text: 'Óculos de proteção apropriados que permitam ao usuário a utilização simultânea de óculos corretivos ou de sol.' },
      { letter: 'D', text: 'Máscara de solda industrial.' },
      { letter: 'E', text: 'Nenhum acessório adicional.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'Res. 940/22, Art. 3º, § 2º: Na ausência da viseira, é obrigatório o uso de Óculos de Proteção específicos para motociclista. É proibido o uso de óculos de sol comuns, óculos corretivos ou óculos de segurança do trabalho em substituição aos óculos de proteção para motociclo.',
    explanations: {
      A: 'INCORRETA. Óculos de sol comuns não substituem óculos de proteção motociclística.',
      B: 'INCORRETA. Óculos de grau comuns não servem como óculos de proteção.',
      C: 'CORRETA. Óculos de proteção motociclística próprios que cobrem a cavidade ocular.',
      D: 'INCORRETA. Totalmente desapropriado.',
      E: 'INCORRETA. O uso de proteção ocular é obrigatório.'
    }
  },
  {
    id: 'con-q16',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 911/2022 - Sanção por Falso Positivo / Recusa',
    difficulty: 'Difícil',
    statement: 'Caso o condutor habilitado na categoria C, D ou E obtenha resultado POSITIVO no exame toxicológico periódico (Res. 911/2022 e Art. 165-C do CTB), qual será a consequência direta aplicada?',
    lawReference: 'Art. 165-C do CTB & Res. 911/2022',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'Infração gravíssima, multa (5x) e suspensão do direito de dirigir por 3 meses.' },
      { letter: 'B', text: 'Cancelamento definitivo e irrevogável de todos os documentos de habilitação.' },
      { letter: 'C', text: 'Prisão em flagrante pelo crime de tráfico de drogas.' },
      { letter: 'D', text: 'Rebaixamento automático e perpétuo para a Categoria A.' },
      { letter: 'E', text: 'Advertência por escrito e permissão para dirigir apenas aos finais de semana.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Art. 165-C do CTB: Dirigir veículo tendo obtido resultado positivo no exame toxicológico é infração GRAVÍSSIMA, com penalidade de Multa (5 vezes) e Suspensão do Direito de Dirigir por 3 meses. A renovação/liberação depende de novo teste com resultado negativo.',
    explanations: {
      A: 'CORRETA. Art. 165-C: Gravíssima, Multa (5x) e Suspensão do direito de dirigir por 3 meses.',
      B: 'INCORRETA. Não há cancelamento irrevogável automático.',
      C: 'INCORRETA. O resultado positivo no toxicológico em si gera sanção estritamente administrativa.',
      D: 'INCORRETA. Não há rebaixamento perpétuo forçado.',
      E: 'INCORRETA. A suspensão impede a condução.'
    }
  },
  {
    id: 'con-q17',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 915/2022 - Transporte em Táxi e Aplicativo',
    difficulty: 'Médio',
    statement: 'Conforme dispõe a Resolução CONTRAN nº 915/2022, as exigências relativas ao uso dos dispositivos de retenção de crianças (bebê conforto, cadeirinha e assento de elevação) NÃO se aplicam obrigatoriamente a:',
    lawReference: 'Resolução CONTRAN 915/2022, Art. 2º, § 3º',
    bancaTag: 'Vunesp / FCC',
    options: [
      { letter: 'A', text: 'Veículos de transporte coletivo de passageiros, táxis, veículos alugados e transporte escolar.' },
      { letter: 'B', text: 'Veículos de passeio de famílias particulares em viagens rodoviárias.' },
      { letter: 'C', text: 'Automóveis conduzidos por motoristas com mais de 50 anos.' },
      { letter: 'D', text: 'Veículos novos com menos de 1.000 km rodados.' },
      { letter: 'E', text: 'SUVs e caminhonetes de grande porte.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Res. 915/2022, Art. 2º, § 3º: As exigências de uso dos dispositivos de retenção infantil (bebê conforto/cadeirinha/assento) não se aplicam aos veículos de transporte coletivo, de aluguel, aos táxis e aos veículos de transporte escolar (estes sujeitos a normas específicas do Art. 136).',
    explanations: {
      A: 'CORRETA. Res. 915/22: Isenção expressa da obrigatoriedade do transporte do dispositivo próprio de retenção para táxis, aluguel e coletivos.',
      B: 'INCORRETA. Carros particulares de passeio são obrigados.',
      C: 'INCORRETA. A idade do condutor é irrelevante.',
      D: 'INCORRETA. Quilometragem é irrelevante.',
      E: 'INCORRETA. Veículos de passeio SUV são obrigados a ter o dispositivo.'
    }
  },
  {
    id: 'con-q18',
    subjectId: 'contran_estadual',
    topic: 'Decreto Estadual SP nº 69.053/2024 - CIRETRANS',
    difficulty: 'Fácil',
    statement: 'No âmbito da descentralização territorial do DETRAN-SP disciplinada pelo Decreto Estadual SP nº 69.053/2024, as unidades operacionais incumbidas de prestar atendimento presencial ao público e executar serviços de trânsito nos municípios do interior do Estado denominam-se:',
    lawReference: 'Decreto Estadual SP 69.053/2024, Art. 14',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'Circunscrições Regionais de Trânsito (CIRETRANS).' },
      { letter: 'B', text: 'Delegacias Seccionais de Polícia Civil.' },
      { letter: 'C', text: 'Juntas Comerciais Paulistas.' },
      { letter: 'D', text: 'Batalhões de Polícia Rodoviária Federal.' },
      { letter: 'E', text: 'Inspetorias Fazendárias Estaduais.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Decreto 69.053/2024: As CIRETRANS (Circunscrições Regionais de Trânsito) são as unidades desconcentradas do DETRAN-SP responsáveis pela execução dos serviços de habilitação e veículos nos municípios do interior de São Paulo.',
    explanations: {
      A: 'CORRETA. CIRETRANS são as unidades desconcentradas regionais do DETRAN-SP.',
      B: 'INCORRETA. Delegacias pertencem à estrutura da Segurança Pública / Polícia Civil.',
      C: 'INCORRETA. Jucesp cuida do registro de empresas.',
      D: 'INCORRETA. PRF é órgão federal.',
      E: 'INCORRETA. Inspetorias pertencem à Secretaria da Fazenda.'
    }
  },
  {
    id: 'con-q19',
    subjectId: 'contran_estadual',
    topic: 'Decreto Estadual SP nº 69.328/2025 - Conflito de Interesses',
    difficulty: 'Médio',
    statement: 'De acordo com o Código de Ética (Decreto 69.328/2025), configura situação de CONFLITO DE INTERESSES o exercício por parte de servidor do DETRAN-SP de atividades que possam comprometer a imparcialidade de suas funções. Constitui exemplo de conflito de interesses:',
    lawReference: 'Decreto Estadual SP 69.328/2025, Art. 6º',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'Atuar simultaneamente como sócio-proprietário ou instrutor em Centro de Formação de Condutores (CFC) credenciado pela autarquia.' },
      { letter: 'B', text: 'Ministrar aulas gratuitas em universidades públicas estaduais fora do horário de expediente.' },
      { letter: 'C', text: 'Doar sangue em campanhas de saúde pública.' },
      { letter: 'D', text: 'Votar em eleições sindicais da categoria.' },
      { letter: 'E', text: 'Publicar artigos científicos acadêmicos sobre engenharia de tráfego.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Decreto 69.328/2025, Art. 6º: É flagrante conflito de interesses o agente do DETRAN-SP possuir participação ou prestar serviços a CFCs, estampadoras de placas ou empresas de vistoria credenciadas e fiscalizadas pelo próprio órgão de trânsito.',
    explanations: {
      A: 'CORRETA. Conflito direto entre fiscalizador e fiscalizado.',
      B: 'INCORRETA. Atividade docente é compatível na forma da lei.',
      C: 'INCORRETA. Ato de cidadania.',
      D: 'INCORRETA. Direito sindical legítimo.',
      E: 'INCORRETA. Produção acadêmica é permitida.'
    }
  },
  {
    id: 'con-q20',
    subjectId: 'contran_estadual',
    topic: 'Decreto Estadual SP nº 70.551/2026 - Meta de Redução de Mortes',
    difficulty: 'Difícil',
    statement: 'Qual é o percentual meta de redução de mortes no trânsito paulista estabelecido pelo Plano de Segurança Viária do Estado de São Paulo (PSV-SP 2025-2035 - Decreto nº 70.551/2026) até o ano de 2030, em alinhamento com a Meta da ONU?',
    lawReference: 'Decreto Estadual SP 70.551/2026, Art. 3º',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'Redução de no mínimo 50% (cinquenta por cento) nas mortes por sinistros de trânsito.' },
      { letter: 'B', text: 'Redução de 10% nas mortes em rodovias estaduais apenas.' },
      { letter: 'C', text: 'Manutenção dos índices atuais sem acréscimo.' },
      { letter: 'D', text: 'Redução de 100% das multas de velocidade.' },
      { letter: 'E', text: 'Redução de 25% exclusivamente nas infrações de estacionamento.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Decreto SP 70.551/2026 e Segunda Década de Ação para Segurança no Trânsito da ONU (PNATRANS / PSV-SP): A meta oficial alinhada globalmente é REDUZIR EM NO MÍNIMO 50% as mortes e lesões graves no trânsito até 2030.',
    explanations: {
      A: 'CORRETA. Meta global e estadual oficial de 50% de redução nas mortes de trânsito até 2030.',
      B: 'INCORRETA. A meta é de 50% e abrange todas as vias.',
      C: 'INCORRETA. O plano visa redução drástica da mortalidade.',
      D: 'INCORRETA. Não tem relação com as metas de vidas salvas.',
      E: 'INCORRETA. Meta desassociada da preservação da vida.'
    }
  },
  {
    id: 'con-q21',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 960/2022 - Vidros do Teto Solar',
    difficulty: 'Fácil',
    statement: 'As exigências de transmitância luminosa fixadas na Resolução CONTRAN nº 960/2022 aplicam-se aos vidros do teto solar dos veículos?',
    lawReference: 'Resolução CONTRAN 960/2022, Art. 5º',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Não se aplicam aos vidros do teto solar.' },
      { letter: 'B', text: 'Exigem transmitância mínima de 90%.' },
      { letter: 'C', text: 'São idênticas às exigências do parabrisa (70%).' },
      { letter: 'D', text: 'Proíbem totalmente a presença de vidros no teto.' },
      { letter: 'E', text: 'Exigem chancela do INMETRO gravada a laser no teto.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Res. CONTRAN 960/2022, Art. 5º: Ficam excluídos das exigências de transmitância luminosa estabelecidas nesta Resolução os vidros do teto solar e os vidros blindados de veículos de uso militar.',
    explanations: {
      A: 'CORRETA. O teto solar é expressamente isento dos limites mínimos de transmitância.',
      B: 'INCORRETA. Não há essa exigência.',
      C: 'INCORRETA. Não se aplica o limite do parabrisa.',
      D: 'INCORRETA. Teto solar é perfeitamente legal.',
      E: 'INCORRETA. Isenção expressa.'
    }
  },
  {
    id: 'con-q22',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 940/2022 - Tipos de Capacete Permitidos',
    difficulty: 'Médio',
    statement: 'Segundo a Resolução CONTRAN nº 940/2022, são modelos de capacetes de segurança permitidos para uso em vias públicas:',
    lawReference: 'Resolução CONTRAN 940/2022, Anexo I',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: 'Capacete integral (fechado), capacete misto (com queixeira removível), capacete modular (articulado) e capacete aberto (sem queixeira).' },
      { letter: 'B', text: 'Capacete do tipo "coquinho" (sem proteção auricular ou occipital).' },
      { letter: 'C', text: 'Capacete de ciclista leve de isopor.' },
      { letter: 'D', text: 'Capacete de obra/construção civil de plástico seco.' },
      { letter: 'E', text: 'Capacete de equitação e hipismo.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Res. 940/22: São permitidos os 4 tipos homologados de capacete motociclístico: 1) Integral (fechado); 2) Misto; 3) Modular (escamoteável/articulado); 4) Aberto (sem queixeira, desde que com viseira/óculos de proteção). É PROIBIDO o capacete estilo "coquinho" ou capacetes industriais/esportivos não ciclísticos.',
    explanations: {
      A: 'CORRETA. Apresenta os 4 modelos válidos homologados pelo INMETRO.',
      B: 'INCORRETA. Capacete tipo "coquinho" é proibido.',
      C: 'INCORRETA. Capacete de bicicleta é proibido para motos.',
      D: 'INCORRETA. Capacete de obra não possui proteção para trânsito.',
      E: 'INCORRETA. Proibido em motocicletas.'
    }
  },
  {
    id: 'con-q23',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 911/2022 - Laboratórios Credenciados',
    difficulty: 'Difícil',
    statement: 'A coleta de material biológico para o exame toxicológico de larga janela de detecção (Res. 911/22) deve ser realizada por laboratório credenciado pelo SENATRAN. A amostra biológica utilizada prioritariamente para o exame é:',
    lawReference: 'Resolução CONTRAN 911/2022, Art. 4º',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'Cabelos, pelos ou unhas.' },
      { letter: 'B', text: 'Sangue venoso colhido em jejum.' },
      { letter: 'C', text: 'Urina colhida no momento do teste.' },
      { letter: 'D', text: 'Ar alveolar expelido no etilômetro.' },
      { letter: 'E', text: 'Saliva colhida com swab.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Res. 911/2022: O exame toxicológico exige larga janela de detecção (mínimo de 90 dias), sendo realizado a partir de amostras de keratina (cabelos, pelos corporais ou unhas). Exames de sangue ou urina possuem janela curta e não atendem a esse requisito.',
    explanations: {
      A: 'CORRETA. Res. 911/22: Amostras de cabelo, pelo ou unhas garantem janela retroativa de 90 dias.',
      B: 'INCORRETA. Sangue possui janela curta de horas/dias.',
      C: 'INCORRETA. Urina possui janela curta (poucos dias).',
      D: 'INCORRETA. Etilômetro mede apenas álcool recente no ar expirado.',
      E: 'INCORRETA. Saliva é para detecção imediata.'
    }
  },
  {
    id: 'con-q24',
    subjectId: 'contran_estadual',
    topic: 'Decreto SP 69.053/2024 - Ouvidoria e Canal de Denúncias',
    difficulty: 'Médio',
    statement: 'De acordo com o Decreto Estadual nº 69.053/2024, a Ouvidoria do DETRAN-SP tem como atribuição precípua:',
    lawReference: 'Decreto Estadual SP 69.053/2024, Art. 21',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'Receber, examinar e encaminhar reclamações, elogios, sugestões e denúncias dos cidadãos quanto aos serviços prestados pela autarquia.' },
      { letter: 'B', text: 'Aplicar penas de demissão a servidores concursados.' },
      { letter: 'C', text: 'Realizar o julgamento em 2ª instância dos recursos de multas de velocidade.' },
      { letter: 'D', text: 'Expedir as carteiras de habilitação e os licenciamentos.' },
      { letter: 'E', text: 'Fiscalizar a arrecadação do imposto sobre a propriedade de veículos (IPVA).' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Decreto 69.053/2024, Art. 21: A Ouvidoria do DETRAN-SP atua como canal direto entre a sociedade e o órgão, garantindo o tratamento de manifestações, denúncias de irregularidades e a melhoria da qualidade dos serviços públicos.',
    explanations: {
      A: 'CORRETA. Função institucional de ouvidoria pública.',
      B: 'INCORRETA. Aplicação de penalidades disciplinares cabe à Corregedoria/Presidência após PAD.',
      C: 'INCORRETA. Compete ao CETRAN.',
      D: 'INCORRETA. Função das Diretorias Setoriais operacionais.',
      E: 'INCORRETA. IPVA é tributo gerido pela Secretaria da Fazenda e Planejamento (SFAZ).'
    }
  },
  {
    id: 'con-q25',
    subjectId: 'contran_estadual',
    topic: 'Decreto SP 69.328/2025 - Comissão de Ética',
    difficulty: 'Difícil',
    statement: 'A apuração de infrações ao Código de Ética da Administração Pública do Estado de São Paulo (Decreto nº 69.328/2025) no âmbito do DETRAN-SP cabe à:',
    lawReference: 'Decreto Estadual SP 69.328/2025, Art. 12',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'Comissão de Ética Setorial do DETRAN-SP.' },
      { letter: 'B', text: 'Polícia Rodoviária Estadual.' },
      { letter: 'C', text: 'Assembleia Legislativa do Estado de São Paulo (ALESP).' },
      { letter: 'D', text: 'Câmara Municipal de São Paulo.' },
      { letter: 'E', text: 'Tribunal de Justiça do Estado.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Decreto 69.328/2025: A gestão da ética e a apuração de desvios éticos nos órgãos e autarquias estaduais é exercida pelas respectivas Comissões de Ética Setoriais, com competência para orientar e aplicar a sanção ética de censura.',
    explanations: {
      A: 'CORRETA. Decreto 69.328/2025: Comissão de Ética responsável por zelar pelo cumprimento do Código.',
      B: 'INCORRETA. Atua na fiscalização de trânsito em rodovias.',
      C: 'INCORRETA. Poder Legislativo Estadual.',
      D: 'INCORRETA. Poder Legislativo Municipal.',
      E: 'INCORRETA. Poder Judiciário.'
    }
  },
  {
    id: 'con-q26',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 925/2022 - Balanças de Pesagem',
    difficulty: 'Médio',
    statement: 'A fiscalização do excesso de peso de veículos de carga (Resolução CONTRAN nº 925/2022) exige a tolerância máxima sobre o Peso Bruto Total (PBT) de:',
    lawReference: 'Resolução CONTRAN 925/2022 & Lei 14.229/21',
    bancaTag: 'FCC / Vunesp',
    options: [
      { letter: 'A', text: '5% (cinco por cento) sobre o Peso Bruto Total (PBT).' },
      { letter: 'B', text: '12% (doze por cento) sobre o PBT.' },
      { letter: 'C', text: '20% (vinte por cento) sobre o PBT.' },
      { letter: 'D', text: 'Isenção total sem tolerância.' },
      { letter: 'E', text: '15% sobre o peso por eixo apenas.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Legislação de Pesagem (Res. 925/2022 e CTB Art. 257): A tolerância máxima admitida na medição do Peso Bruto Total (PBT) do veículo de carga é de 5% (cinco por cento). Para o excesso por eixo, a tolerância legal atualizada é de 12,5%.',
    explanations: {
      A: 'CORRETA. Tolerância de 5% sobre o Peso Bruto Total (PBT).',
      B: 'INCORRETA. 12,5% aplica-se ao peso por eixo.',
      C: 'INCORRETA. Valor incorreto.',
      D: 'INCORRETA. Há margem de tolerância metrológica.',
      E: 'INCORRETA. O limite por eixo é 12,5%.'
    }
  },
  {
    id: 'con-q27',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 960/2022 - Painéis Luminosos / Publicidade',
    difficulty: 'Fácil',
    statement: 'É permitida a afixação de inscrições, painéis luminosos, faixas publicitárias ou pictogramas no parabrisa e nos vidros laterais dianteiros dos veículos?',
    lawReference: 'Resolução CONTRAN 960/2022, Art. 6º',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'É expressamente proibida a afixação de qualquer publicidade ou painel luminoso nessas áreas.' },
      { letter: 'B', text: 'É permitida se a empresa pagar taxa ao DETRAN.' },
      { letter: 'C', text: 'É autorizada durante o período diurno.' },
      { letter: 'D', text: 'É permitida em veículos de táxi e transporte privado.' },
      { letter: 'E', text: 'É permitida se o texto for escrito em letras brancas.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Res. 960/2022, Art. 6º: Fica proibida a afixação de cartazes, painéis decorativos, adesivos ou painéis luminosos na área envidraçada indispensável à dirigibilidade (parabrisa e vidros laterais dianteiros), para evitar prejuízo à visibilidade do condutor.',
    explanations: {
      A: 'CORRETA. Proibição taxativa para preservar a visibilidade e a segurança viária.',
      B: 'INCORRETA. Nenhuma taxa descaracteriza a vedação de segurança.',
      C: 'INCORRETA. Proibido em qualquer horário.',
      D: 'INCORRETA. Proibido também para veículos de transporte de passageiros.',
      E: 'INCORRETA. A cor da letra não afasta o risco de obstrução da visão.'
    }
  },
  {
    id: 'con-q28',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 940/2022 - Cinta Jugular e Engate',
    difficulty: 'Médio',
    statement: 'O uso do capacete de segurança exige a perfeita fixação à cabeça. Nos termos da Resolução CONTRAN nº 940/2022, a cinta jugular deve ser:',
    lawReference: 'Resolução CONTRAN 940/2022, Art. 2º, § 1º',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: 'Devidamente engatada e ajustada por baixo do maxilar inferior.' },
      { letter: 'B', text: 'Deixada frouxa para facilitar a respiração.' },
      { letter: 'C', text: 'Posicionada em cima do nariz do condutor.' },
      { letter: 'D', text: 'Amarrada no guidão da motocicleta.' },
      { letter: 'E', text: 'Removida após o início do percurso.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Res. 940/22: O capacete só cumpre sua função protetiva se estiver corretamente afixado à cabeça, com a cinta jugular devidamente engatada e ajustada por baixo do maxilar inferior.',
    explanations: {
      A: 'CORRETA. Exigência expressa de segurança do Art. 2º da Res. 940/22.',
      B: 'INCORRETA. Deixar frouxa faz o capacete voar no momento do impacto.',
      C: 'INCORRETA. Posição perigosa e incorreta.',
      D: 'INCORRETA. Descabido.',
      E: 'INCORRETA. A cinta jugular é componente essencial do capacete.'
    }
  },
  {
    id: 'con-q29',
    subjectId: 'contran_estadual',
    topic: 'Decreto SP 70.551/2026 - Engenharia e Infraestrutura Segura',
    difficulty: 'Médio',
    statement: 'No âmbito do Plano de Segurança Viária do Estado de São Paulo (PSV-SP 2025-2035), as intervenções de ENGENHARIA DE INFRAESTRUTURA nas rodovias estaduais administradas pelo DER-SP ou concedidas priorizam:',
    lawReference: 'Decreto Estadual SP 70.551/2026, Art. 6º',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'Eliminação de pontos críticos de sinistros (blackspots), implantação de defensas metálicas/barreiras de proteção e sinalização tátil/refletiva.' },
      { letter: 'B', text: 'Aumento ilimitado dos limites de velocidade sem estudos técnicos.' },
      { letter: 'C', text: 'Remoção de todas as passadeiras de pedestres e passarelas.' },
      { letter: 'D', text: 'Substituição do asfalto por paralelepípedos liso.' },
      { letter: 'E', text: 'Desativação total da iluminação pública nas travessias urbanas.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Decreto SP 70.551/2026 (PSV-SP): As diretrizes de engenharia viária segura focam na identificação e tratamento dos pontos concentradores de acidentes (blackspots), adequação da geometria, instalação de contenções viárias e sinalização padrão.',
    explanations: {
      A: 'CORRETA. Diretriz oficial do pilar de Infraestrutura e Vias Seguras do PSV-SP.',
      B: 'INCORRETA. Velocidades devem ser gerenciadas e reduzidas em pontos vulneráveis.',
      C: 'INCORRETA. Passarelas e faixas protegem os vulneráveis.',
      D: 'INCORRETA. Paralelepípedo liso reduz aderência e aumenta acidentes.',
      E: 'INCORRETA. Iluminação é fator crítico de proteção noturna.'
    }
  },
  {
    id: 'con-q30',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 911/2022 - Validade do Laudo Toxicológico',
    difficulty: 'Difícil',
    statement: 'O laudo do exame toxicológico de larga janela de detecção possui validade máxima para ser utilizado no processo de renovação ou mudança de categoria da CNH de:',
    lawReference: 'Resolução CONTRAN 911/2022, Art. 6º',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: '90 (noventa) dias, contados a partir da data da coleta da amostra.' },
      { letter: 'B', text: '30 (trinta) dias da coleta.' },
      { letter: 'C', text: '180 (cento e oitenta) dias da coleta.' },
      { letter: 'D', text: '1 (um) ano da coleta.' },
      { letter: 'E', text: 'Indefinida.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Res. CONTRAN 911/2022, Art. 6º: O laudo do exame toxicológico tem validade de 90 (noventa) dias, contados a partir da data da coleta da amostra. Decorrido esse prazo sem que tenha sido apresentado ao DETRAN, o condutor deverá realizar nova coleta.',
    explanations: {
      A: 'CORRETA. Res. 911/22, Art. 6º: Prazo de validade legal de 90 dias a contar da coleta.',
      B: 'INCORRETA. Prazo de 30 dias é o limite para dirigir com o exame vencido antes da autuação.',
      C: 'INCORRETA. 180 dias é superior ao prazo regulamentar.',
      D: 'INCORRETA. 1 ano é incorreto.',
      E: 'INCORRETA. O laudo tem validade temporal estrita.'
    }
  },
  {
    id: 'con-q31',
    subjectId: 'contran_estadual',
    topic: 'Decreto SP 69.053/2024 - Corregedoria do DETRAN-SP',
    difficulty: 'Médio',
    statement: 'No âmbito do Decreto Estadual SP nº 69.053/2024, a Unidade de Corregedoria do DETRAN-SP tem como finalidade primordial:',
    lawReference: 'Decreto Estadual SP 69.053/2024, Art. 18',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'Instaurar e conduzir procedimentos disciplinares e apurações preliminares sobre a conduta funcionária de servidores e agentes credenciados.' },
      { letter: 'B', text: 'Efetuar a cobrança judicial da dívida ativa do IPVA.' },
      { letter: 'C', text: 'Elaborar o orçamento anual de investimento do Estado.' },
      { letter: 'D', text: 'Conceder descontos na compra de veículos novos zero km.' },
      { letter: 'E', text: 'Organizar leilões de veículos apreendidos.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Decreto 69.053/2024, Art. 18: A Corregedoria é o órgão de correição encarregado de apurar denúncias, instaurar Sindicâncias e Processos Administrativos Disciplinares (PAD) e fiscalizar parceiros credenciados (CFCs, ECVs, estampadoras).',
    explanations: {
      A: 'CORRETA. Função institucional da Corregedoria do DETRAN-SP.',
      B: 'INCORRETA. Cobrança de dívida ativa é atribuição da PGE-SP (Procuradoria Geral do Estado).',
      C: 'INCORRETA. Atribuição da Secretaria da Fazenda e Planejamento.',
      D: 'INCORRETA. Não cabe à autarquia intervir no comércio de veículos.',
      E: 'INCORRETA. Leilões cabem à Comissão de Leilões / Diretoria de Veículos.'
    }
  },
  {
    id: 'con-q32',
    subjectId: 'contran_estadual',
    topic: 'Decreto SP 69.328/2025 - Vedações Éticas na Gestão Pública',
    difficulty: 'Fácil',
    statement: 'Qual das condutas abaixo é tipificada como VEDAÇÃO ÉTICA expressa aos servidores do Estado pelo Decreto nº 69.328/2025?',
    lawReference: 'Decreto Estadual SP 69.328/2025, Art. 7º',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'Usar do cargo ou função para obter favorecimento pessoal ou para terceiros.' },
      { letter: 'B', text: 'Cumprir as ordens superiores legais expedidas pela chefia.' },
      { letter: 'C', text: 'Atender aos cidadãos com cortesia e prontidão.' },
      { letter: 'D', text: 'Manter atualizados os sistemas informatizados de atendimento.' },
      { letter: 'E', text: 'Participar de treinamentos de capacitação promovidos pelo órgão.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Decreto 69.328/2025, Art. 7º: É vedado ao agente público utilizar o cargo, a função ou as facilidades do serviço para obter qualquer espécie de favorecimento, benefício pessoal ou para outrem, configurando quebra do dever de moralidade administrativa.',
    explanations: {
      A: 'CORRETA. Trata-se de vedação ética gravíssima expressa no Código de Ética.',
      B: 'INCORRETA. Trata-se de dever do servidor público.',
      C: 'INCORRETA. Trata-se de dever de urbanidade.',
      D: 'INCORRETA. Trata-se de dever de eficiência.',
      E: 'INCORRETA. Trata-se de direito/dever de aprimoramento profissional.'
    }
  },
  {
    id: 'con-q33',
    subjectId: 'contran_estadual',
    topic: 'Decreto SP 70.551/2026 - Proteção dos Pedestres e Ciclistas',
    difficulty: 'Médio',
    statement: 'No âmbito do Plano de Segurança Viária (PSV-SP 2025-2035 - Decreto 70.551/2026), a proteção aos USUÁRIOS VULNERÁVEIS (pedestres, ciclistas e motociclistas) estabelece como medida prioritária:',
    lawReference: 'Decreto Estadual SP 70.551/2026, Art. 5º',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'A pacificação do trânsito urbano com zonas de velocidade reduzida (Zonas 30), ampliação da malha cicloviária e faixas elevadas de pedestres.' },
      { letter: 'B', text: 'A proibição do trânsito de bicicletas em todas as cidades paulistas.' },
      { letter: 'C', text: 'A obrigatoriedade de pedestres registrarem licença no DETRAN antes de caminhar na rua.' },
      { letter: 'D', text: 'A eliminação das calçadas nas avenidas de grande fluxo.' },
      { letter: 'E', text: 'A autorização de ultrapassagem de ciclistas a menos de 10 cm de distância.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'PSV-SP 2025-2035 (Decreto 70.551/2026): A proteção dos usuários vulneráveis exige desenho urbano seguro (Zonas 30, travessias elevadas, calçadas acessíveis e infraestrutura cicloviária segregada).',
    explanations: {
      A: 'CORRETA. Diretriz essencial de proteção aos vulneráveis no PSV-SP.',
      B: 'INCORRETA. Bicicletas são modais sustentáveis incentivados.',
      C: 'INCORRETA. Pedestres não necessitam de licença ou registro.',
      D: 'INCORRETA. Calçadas são elementos indispensáveis de circulação.',
      E: 'INCORRETA. O CTB exige distância mínima de 1,5m ao ultrapassar ciclista (Art. 201).'
    }
  },
  {
    id: 'con-q34',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 960/2022 - Transmitância em Vidros Traseiros',
    difficulty: 'Médio',
    statement: 'Para os vidros que não interferem na dirigibilidade do veículo (vidros das portas traseiras e vidro traseiro/vigia), a Resolução CONTRAN nº 960/2022 fixa a transmitância luminosa mínima de:',
    lawReference: 'Resolução CONTRAN 960/2022, Art. 4º, § 1º',
    bancaTag: 'FCC / Vunesp',
    options: [
      { letter: 'A', text: 'Não há limite mínimo de transmitância luminosa, desde que o veículo possua espelhos retrovisores externos em ambos os lados.' },
      { letter: 'B', text: '70% obrigatório.' },
      { letter: 'C', text: '90% obrigatório.' },
      { letter: 'D', text: '50% obrigatório.' },
      { letter: 'E', text: '28% obrigatório para veículos de passeio e 70% para utilitários.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Res. 960/2022, Art. 4º, § 1º: A transmitância luminosa dos vidros que NÃO interferem na dirigibilidade do veículo (portas traseiras e vigia traseiro) não poderá ser inferior a 28%, porém, a alteração da norma estabeleceu que, desde que o veículo esteja dotado de espelhos retrovisores externos de ambos os lados, não há exigência de transmitância mínima para as áreas não críticas à visão do condutor (com ressalva da proibição de películas refletivas).',
    explanations: {
      A: 'CORRETA. Redação da Res. 960/2022 para áreas não críticas à dirigibilidade quando munido de retrovisores em ambos os lados.',
      B: 'INCORRETA. 70% é a exigência para o parabrisa e vidros dianteiros.',
      C: 'INCORRETA. Valor inexistente.',
      D: 'INCORRETA. 50% não é o limite aplicável.',
      E: 'INCORRETA. A regra antiga de 28% foi flexibilizada na norma atualizada para dispensar limite mínimo se houver retrovisor nos dois lados.'
    }
  },
  {
    id: 'con-q35',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 940/2022 - Capacete e Viseira Noturna',
    difficulty: 'Fácil',
    statement: 'No período noturno, o condutor de motocicleta pode utilizar viseira do capacete com película escura ou efeito fumê?',
    lawReference: 'Resolução CONTRAN 940/2022, Art. 3º, § 1º',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'É proibido o uso de viseira com filme protetor ou no padrão escuro/fumê no período noturno.' },
      { letter: 'B', text: 'É permitido se a via for dotada de iluminação por LED.' },
      { letter: 'C', text: 'É permitido desde que a velocidade seja inferior a 40 km/h.' },
      { letter: 'D', text: 'É obrigatório para evitar o ofuscamento dos faróis contrários.' },
      { letter: 'E', text: 'É permitido apenas para entregadores de aplicativos.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Res. 940/2022, Art. 3º, § 1º: No período noturno, é OBRIGATÓRIO o uso de viseira no padrão CRISTAL (transparente). É proibido o uso de viseira fumê, escura ou com películas no período noturno.',
    explanations: {
      A: 'CORRETA. À noite exige-se transparência total (padrão cristal) na viseira.',
      B: 'INCORRETA. O tipo de iluminação pública não afasta a proibição legal.',
      C: 'INCORRETA. Velocidade reduzida não autoriza o uso.',
      D: 'INCORRETA. É proibido pelo risco sério de perda de visibilidade noturna.',
      E: 'INCORRETA. Nenhuma categoria de motociclista está isenta.'
    }
  },
  {
    id: 'con-q36',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 911/2022 - Contraprova Toxicológica',
    difficulty: 'Difícil',
    statement: 'Caso o laudo do exame toxicológico resulte POSITIVO, é facultado ao condutor solicitar a realização de contraprova ou novo exame. Nos termos da Resolução CONTRAN nº 911/2022, a contraprova deverá ser realizada:',
    lawReference: 'Resolução CONTRAN 911/2022, Art. 8º',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'Utilizando-se a amostra testemunha colhida no mesmo ato da primeira amostragem, no mesmo laboratório ou em laboratório credenciado.' },
      { letter: 'B', text: 'Mediante nova coleta de cabelo após 6 meses.' },
      { letter: 'C', text: 'Através de teste de saliva realizado perante o agente de trânsito.' },
      { letter: 'D', text: 'Por meio de atestado médico particular sem análise laboratorial.' },
      { letter: 'E', text: 'Exclusivamente por perícia judicial no Tribunal de Justiça.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Res. 911/2022, Art. 8º: A contraprova é o exame realizado na amostra testemunha (alíquota colhida no mesmo momento do primeiro teste e armazenada sob custódia), assegurando a ampla defesa técnica ao condutor.',
    explanations: {
      A: 'CORRETA. Res. 911/22, Art. 8º: Contraprova realizada com a amostra testemunha colhida originariamente.',
      B: 'INCORRETA. A contraprova não se faz com nova coleta posterior, mas com a amostra reservada.',
      C: 'INCORRETA. Saliva não substitui o teste laboratorial de keratina.',
      D: 'INCORRETA. Atestado simples não sobrepõe a análise toxicológica.',
      E: 'INCORRETA. Trata-se de procedimento administrativo laboratorial.'
    }
  },
  {
    id: 'con-q37',
    subjectId: 'contran_estadual',
    topic: 'Decreto SP 69.053/2024 - Diretoria de Habilitação do DETRAN-SP',
    difficulty: 'Médio',
    statement: 'No âmbito do Decreto Estadual SP nº 69.053/2024, a Diretoria Setorial responsável pela coordenação, credenciamento e fiscalização dos Centros de Formação de Condutores (CFCs) e exames de habilitação é a:',
    lawReference: 'Decreto Estadual SP 69.053/2024, Art. 10',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'Diretoria de Habilitação do DETRAN-SP.' },
      { letter: 'B', text: 'Diretoria de Veículos.' },
      { letter: 'C', text: 'Diretoria de Tecnologia da Informação.' },
      { letter: 'D', text: 'Diretoria de Educação para o Trânsito.' },
      { letter: 'E', text: 'Diretoria de Licitações e Contratos.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Decreto 69.053/2024, Art. 10: Compete à Diretoria de Habilitação gerir todos os processos relativos à formação de condutores, exames teóricos e práticos, junta médica/psicológica e credenciamento de CFCs.',
    explanations: {
      A: 'CORRETA. Atribuição regimental da Diretoria de Habilitação.',
      B: 'INCORRETA. Cuida de emplacamento, CRV, CRLV e registro de veículos.',
      C: 'INCORRETA. Cuida da infraestrutura de sistemas e TI.',
      D: 'INCORRETA. Cuida de campanhas educativas e programas pedagógicos.',
      E: 'INCORRETA. Cuida de compras públicas e contratos administrativos.'
    }
  },
  {
    id: 'con-q38',
    subjectId: 'contran_estadual',
    topic: 'Decreto SP 69.328/2025 - Sanção Ética de Censura',
    difficulty: 'Difícil',
    statement: 'A penalidade máxima de natureza exclusivamente ÉTICA aplicável pela Comissão de Ética do Estado ao servidor que descumprir o Código de Ética (Decreto SP 69.328/2025) consiste em:',
    lawReference: 'Decreto Estadual SP 69.328/2025, Art. 15',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'Censura Ética, registrada nos assentamentos funcionais do agente público.' },
      { letter: 'B', text: 'Demissão a bem do serviço público.' },
      { letter: 'C', text: 'Cassação da aposentadoria.' },
      { letter: 'D', text: 'Prisão administrativa por 30 dias.' },
      { letter: 'E', text: 'Multa no valor de 10 salários mínimos.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Decreto 69.328/2025: As Comissões de Ética não aplicam penalidades disciplinares estatutárias (como demissão ou suspensão), limitando-se à aplicação da sanção ética de CENSURA ÉTICA, com o devido registro nos assentamentos funcionais do servidor.',
    explanations: {
      A: 'CORRETA. Censura Ética é a sanção própria aplicável pelas Comissões de Ética pública.',
      B: 'INCORRETA. Demissão é penalidade disciplinar de PAD (Estatuto dos Servidores / Lei 10.261/68).',
      C: 'INCORRETA. Cassação é penalidade disciplinar estatutária.',
      D: 'INCORRETA. Não existe prisão administrativa por violação ética.',
      E: 'INCORRETA. Comissão de Ética não aplica penas pecuniárias de multa.'
    }
  },
  {
    id: 'con-q39',
    subjectId: 'contran_estadual',
    topic: 'Decreto SP 70.551/2026 - Atendimento Pós-Acidente no PSV-SP',
    difficulty: 'Médio',
    statement: 'O pilar "Atendimento Pós-Acidente" do Plano de Segurança Viária do Estado de São Paulo (PSV-SP 2025-2035 - Decreto 70.551/2026) visa reduzir a severidade das lesões através de:',
    lawReference: 'Decreto Estadual SP 70.551/2026, Art. 7º',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'Integração entre resgate (SAMU, Corpo de Bombeiros e Concessionárias), redução do tempo de resposta (hora de ouro) e suporte pré-hospitalar qualificado.' },
      { letter: 'B', text: 'Exigência de pagamento antecipado do resgate pelos familiares da vítima.' },
      { letter: 'C', text: 'Proibição de ambulâncias transitarem com sirene ligada em rodovias.' },
      { letter: 'D', text: 'Substituição das equipes médicas por voluntários sem treinamento.' },
      { letter: 'E', text: 'Atendimento exclusivo por telemedicina no local do acidente.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Decreto SP 70.551/2026: O atendimento pré-hospitalar e o resgate rápido ("Golden Hour" / Hora de Ouro) são determinantes para evitar que feridos graves venham a óbito, sendo pilar estratégico do PSV-SP.',
    explanations: {
      A: 'CORRETA. Agilidade no socorro integrado e suporte pré-hospitalar para salvar vidas.',
      B: 'INCORRETA. O socorro público de urgência é gratuito e universal.',
      C: 'INCORRETA. Veículos de socorro têm prioridade de trânsito e uso de sirene (Art. 29, VII CTB).',
      D: 'INCORRETA. O pilar exige alta qualificação técnica.',
      E: 'INCORRETA. Atendimento presencial de emergência no local é insubstituível.'
    }
  },
  {
    id: 'con-q40',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 915/2022 - Crianças até 10 Anos no Banco Traseiro',
    difficulty: 'Fácil',
    statement: 'Em regra geral, as crianças com idade INFERIOR a 10 (dez) anos que NÃO tenham atingido 1,45 m (um metro e quarenta e cinco centímetros) de altura devem ser transportadas obrigatoriamente:',
    lawReference: 'Resolução CONTRAN 915/2022 & Art. 64 do CTB',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Nos bancos traseiros dos veículos, utilizando individualmente cinto de segurança ou dispositivo de retenção equivalente.' },
      { letter: 'B', text: 'No banco dianteiro ao lado do condutor.' },
      { letter: 'C', text: 'No porta-malas do veículo.' },
      { letter: 'D', text: 'No colo de passageiro adulto no banco dianteiro.' },
      { letter: 'E', text: 'Em caçambas abertas com capacete de ciclista.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Art. 64 do CTB e Resolução CONTRAN 915/2022: Crianças menores de 10 anos que não tenham atingido 1,45m de altura devem ser transportadas nos BANCOS TRASEIROS, usando o dispositivo de retenção adequado à sua idade/peso.',
    explanations: {
      A: 'CORRETA. Regra geral imperativa de segurança do Art. 64 do CTB e Res. 915/22.',
      B: 'INCORRETA. O banco dianteiro é exceção estrita.',
      C: 'INCORRETA. Absurdo e infração gravíssima.',
      D: 'INCORRETA. Transportar no colo é extremamente perigoso e proibido.',
      E: 'INCORRETA. Proibido pelo CTB.'
    }
  }
];
