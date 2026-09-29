import { Question } from '../../types';

export const direitoQuestions: Question[] = [
  // --- BLOCO 1: DIREITO CONSTITUCIONAL E ADMINISTRATIVO (Q01 a Q15) ---
  {
    id: 'dir-q01',
    subjectId: 'direito',
    topic: 'Segurança Viária na Constituição Federal (Art. 144, § 10)',
    difficulty: 'Médio',
    statement: '(Prova DETRAN-SP / Vunesp) A Emenda Constitucional nº 82/2014 incluiu o § 10 no Art. 144 da Constituição Federal de 1988, disciplinando a SEGURANÇA VIÁRIA. De acordo com o texto constitucional, a segurança viária compreende a educação, engenharia e fiscalização de trânsito, e compete, no âmbito dos Estados, do Distrito Federal e dos Municípios, aos:',
    lawReference: 'Art. 144, § 10 da CF/88',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Respectivos órgãos ou entidades executivos e seus agentes de trânsito, estruturados em carreira, na forma da lei.' },
      { letter: 'B', text: 'Guardas Municipais exclusivamente, proibida a atuação de agentes civis de trânsito.' },
      { letter: 'C', text: 'Tribunais de Justiça dos Estados.' },
      { letter: 'D', text: 'Empresas privadas de segurança patrimonial terceirizadas.' },
      { letter: 'E', text: 'Conselhos comunitários de bairro.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Art. 144, § 10 da CF/88 estabelece que a segurança viária, exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio nas vias públicas, compete aos órgãos ou entidades executivos de trânsito e seus agentes de trânsito, estruturados em carreira.',
    explanations: {
      A: 'CORRETA. Art. 144, § 10 CF/88: Atuação dos órgãos executivos de trânsito e seus agentes de carreira.',
      B: 'INCORRETA. As Guardas Municipais atuam em bens/serviços municipais, não sendo os únicos agentes de segurança viária.',
      C: 'INCORRETA. O Judiciário não exerce função executiva de segurança viária.',
      D: 'INCORRETA. A segurança viária é atividade estatal indelegável a empresas privadas.',
      E: 'INCORRETA. Não possuem poder de polícia de trânsito.'
    }
  },
  {
    id: 'dir-q02',
    subjectId: 'direito',
    topic: 'Princípios Expressos da Administração Pública (Art. 37 CF/88)',
    difficulty: 'Fácil',
    statement: '(Prova DETRAN-SP / Vunesp) Os princípios expressos da Administração Pública direta e indireta, inscritos no caput do Art. 37 da Constituição Federal de 1988, são sintetizados no mnemônico LIMPE. Eles compreendem:',
    lawReference: 'Art. 37, caput da CF/88',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência.' },
      { letter: 'B', text: 'Liberdade, Igualdade, Mútua ajuda, Proporcionalidade e Equidade.' },
      { letter: 'C', text: 'Legitimidade, Imparcialidade, Moderação, Prevenção e Eficácia.' },
      { letter: 'D', text: 'Legalidade, Interesse público, Motivação, Razoabilidade e Eficiência.' },
      { letter: 'E', text: 'Lealdade, Imputabilidade, Moralidade, Prudência e Exclusividade.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Art. 37, caput da CF/88: A administração pública obedecerá aos princípios de LEGALIDADE, IMPESSOALIDADE, MORALIDADE, PUBLICIDADE e EFICIÊNCIA (LIMPE).',
    explanations: {
      A: 'CORRETA. Princípios expressos do Art. 37 CF/88: LIMPE.',
      B: 'INCORRETA. Conceitos genéricos não expressos no caput.',
      C: 'INCORRETA. Termos incorretos.',
      D: 'INCORRETA. Interesse público e razoabilidade são princípios implícitos ou da Lei 9.784/99, mas não o acrônimoLIMPE do caput do Art. 37.',
      E: 'INCORRETA. Termos incorretos.'
    }
  },
  {
    id: 'dir-q03',
    subjectId: 'direito',
    topic: 'Remédios Constitucionais - Habeas Data (Art. 5º, LXXII)',
    difficulty: 'Médio',
    statement: '(Prova DETRAN-SP / Vunesp) Um cidadão teve negado pelo Detran o acesso às suas informações pessoais registradas no seu prontuário de condutor. O remédio constitucional adequado para assegurar o conhecimento dessas informações constantes de bancos de dados de entidades governamentais (Art. 5º, LXXII, "a" da CF/88) é o:',
    lawReference: 'Art. 5º, LXXII da CF/88',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Habeas Data.' },
      { letter: 'B', text: 'Habeas Corpus.' },
      { letter: 'C', text: 'Mandado de Segurança.' },
      { letter: 'D', text: 'Mandado de Injunção.' },
      { letter: 'E', text: 'Ação Popular.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Habeas Data (Art. 5º, LXXII, "a" CF/88) destina-se a assegurar o conhecimento de informações relativas à pessoa do impetrante (dados pessoais) constantes de registros ou bancos de dados de entidades governamentais ou de caráter público.',
    explanations: {
      A: 'CORRETA. Habeas Data tutela o direito de obter/retificar dados pessoais em órgãos públicos.',
      B: 'INCORRETA. Habeas Corpus protege a liberdade de locomoção (ir e vir).',
      C: 'INCORRETA. Mandado de Segurança é residual para direito líquido e certo não amparado por HC ou HD.',
      D: 'INCORRETA. Mandado de Injunção supre omissão legislativa regulamentadora.',
      E: 'INCORRETA. Ação Popular destina-se a anular ato lesivo ao patrimônio público, moralidade ou meio ambiente.'
    }
  },
  {
    id: 'dir-q04',
    subjectId: 'direito',
    topic: 'Atributos dos Atos Administrativos (Poder de Polícia)',
    difficulty: 'Médio',
    statement: 'Um agente de trânsito do Detran, ao constatar que um veículo está trafegando com os pneus completamente carecas colocando em risco a vida de pedestres, determina a remoção imediata do veículo ao pátio sem necessidade de autorização prévia do Poder Judiciário. Essa atuação direta e imediata do Estado decorre do atributo do ato administrativo denominado:',
    lawReference: 'Direito Administrativo - Atributos dos Atos',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Autoexecutoriedade.' },
      { letter: 'B', text: 'Presunção de Legitimidade.' },
      { letter: 'C', text: 'Tipicidade.' },
      { letter: 'D', text: 'Imperatividade.' },
      { letter: 'E', text: 'Irrevogabilidade.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A AUTOEXECUTORIEDADE permite à Administração Pública executar diretamente suas decisões administrativas (ex: remover veículo irregular ou interditar estabelecimento perigoso) sem necessidade de recorrer previamente ao Poder Judiciário.',
    explanations: {
      A: 'CORRETA. Autoexecutoriedade: execução direta pela administração sem ordem judicial prévia.',
      B: 'INCORRETA. Presunção de Legitimidade é a presunção de que os atos administrativos são verdadeiros e conformes à lei.',
      C: 'INCORRETA. Tipicidade exige que o ato esteja previamente previsto em lei.',
      D: 'INCORRETA. Imperatividade é a imposição de obrigações a terceiros independentemente da sua concordância.',
      E: 'INCORRETA. Atos administrativos discricionários podem ser revogados.'
    }
  },
  {
    id: 'dir-q05',
    subjectId: 'direito',
    topic: 'Elementos/Requisitos do Ato Administrativo (COFIFOMOB)',
    difficulty: 'Médio',
    statement: 'Assinale a alternativa que indica o elemento/requisito do ato administrativo que se refere ao resultado prático e imediato que o ato produz no mundo jurídico (ex: a imposição de uma multa de trânsito ou a concessão de uma CNH):',
    lawReference: 'Elementos do Ato Administrativo (Lei 4.717/65)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Objeto (ou Conteúdo).' },
      { letter: 'B', text: 'Competência.' },
      { letter: 'C', text: 'Finalidade.' },
      { letter: 'D', text: 'Motivo.' },
      { letter: 'E', text: 'Forma.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O OBJETO (ou Conteúdo) é o efeito jurídico imediato que o ato produz (o que o ato dispõe, nega, concede ou cassa). A Finalidade é o objetivo de interesse público abstrato e o Motivo são os fatos/fundamentos.',
    explanations: {
      A: 'CORRETA. Objeto é o resultado prático imediato criado pelo ato.',
      B: 'INCORRETA. Competência é o sujeito legalmente autorizado a praticar o ato.',
      C: 'INCORRETA. Finalidade é o interesse público geral visado.',
      D: 'INCORRETA. Motivo é a situação de fato e de direito que autoriza o ato.',
      E: 'INCORRETA. Forma é o revestimento exterior (ex: portaria, auto de infração).'
    }
  },
  {
    id: 'dir-q06',
    subjectId: 'direito',
    topic: 'Poderes Administrativos - Poder de Polícia',
    difficulty: 'Médio',
    statement: 'O Poder de Polícia Administrativa (Art. 78 do Código Tributário Nacional) faculta à administração pública restringir ou condicionar o uso e gozo de bens, direitos e atividades individuais em benefício do interesse público. A fiscalização de velocidade e a aplicação de multas de trânsito constituem manifestação direta do:',
    lawReference: 'Poder de Polícia Administrativa',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Poder de Polícia.' },
      { letter: 'B', text: 'Poder Disciplinar.' },
      { letter: 'C', text: 'Poder Hierárquico.' },
      { letter: 'D', text: 'Poder Regulamentar puro.' },
      { letter: 'E', text: 'Poder Vinculado estrito sem sanção.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A fiscalização de trânsito e a aplicação de penalidades a particulares decorrem do PODER DE POLÍCIA da Administração Pública, que condiciona a liberdade e a propriedade individual ao interesse público de segurança viária.',
    explanations: {
      A: 'CORRETA. Fiscalização de trânsito = Poder de Polícia Administrativa.',
      B: 'INCORRETA. Poder Disciplinar aplica sanções a servidores públicos ou particulares com vínculo contratual.',
      C: 'INCORRETA. Poder Hierárquico organiza a estrutura interna e subordinação de cargos.',
      D: 'INCORRETA. Poder Regulamentar edita decretos para fiel execução da lei.',
      E: 'INCORRETA. Incorreto.'
    }
  },
  {
    id: 'dir-q07',
    subjectId: 'direito',
    topic: 'Lei de Improbidade Administrativa - Exigência de Dolo (Lei 8.429/92)',
    difficulty: 'Difícil',
    statement: 'Com as alterações promovidas pela Lei nº 14.230/2021 na Lei de Improbidade Administrativa (Lei nº 8.429/1992), para a configuração de QUALQUER ato de improbidade administrativa (seja por enriquecimento ilícito, dano ao erário ou atentar contra os princípios da administração) passa a ser indispensável a comprovação de:',
    lawReference: 'Art. 1º, §§ 1º e 2º da Lei 8.429/92 (redação da Lei 14.230/21)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'DOLO (vontade livre e consciente de alcançar o resultado ilícito), estando revogada a modalidade culposa.' },
      { letter: 'B', text: 'Culpa grave ou imperícia profissional do agente.' },
      { letter: 'C', text: 'Prejuízo financeiro superior a 1 milhão de reais.' },
      { letter: 'D', text: 'Condenação prévia na esfera penal com trânsito em julgado.' },
      { letter: 'E', text: 'Confissão espontânea perante o Ministério Público.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A Lei nº 14.230/2021 reformou a LIA exigindo EXCLUSIVAMENTE a conduta DOLOSA (vontade livre e consciente de praticar a ilicitude) para a caracterização de atos de improbidade administrativa, extinguindo a modalidade culposa anteriormente prevista para lesão ao erário.',
    explanations: {
      A: 'CORRETA. Art. 1º, § 1º LIA: Exige-se dolo comprovado para todas as figuras de improbidade.',
      B: 'INCORRETA. A modalidade culposa foi expressamente revogada pela reforma.',
      C: 'INCORRETA. Não se exige valor mínimo de prejuízo.',
      D: 'INCORRETA. As instâncias administrativa, civil (LIA) e penal são independentes.',
      E: 'INCORRETA. A confissão não é requisito para propositura da ação.'
    }
  },
  {
    id: 'dir-q08',
    subjectId: 'direito',
    topic: 'Lei de Improbidade Administrativa - Enriquecimento Ilícito (Art. 9º)',
    difficulty: 'Médio',
    statement: 'Um agente público de trânsito aceita vantagem econômica indevida (propina) para deixar de lavrar auto de infração de trânsito contra um motorista embriagado. A conduta do agente público configura ato de improbidade administrativa que:',
    lawReference: 'Art. 9º, I da Lei 8.429/92',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Importa em Enriquecimento Ilícito (Art. 9º da LIA).' },
      { letter: 'B', text: 'Configura mera falta ética punível apenas com censura.' },
      { letter: 'C', text: 'Importa exclusivamente em dano culposo sem ilicitude.' },
      { letter: 'D', text: 'É isenta de penalidades por não envolver dinheiro do erário estadual.' },
      { letter: 'E', text: 'Prescreve em 24 horas.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Receber ou aceitar promessa de vantagem econômica indevida em razão do exercício do cargo (Art. 9º, I da Lei 8.429/92) enquadra-se como Ato de Improbidade Administrativa que Importa Enriquecimento Ilícito.',
    explanations: {
      A: 'CORRETA. Art. 9º, I LIA: Receber vantagem indevida = Enriquecimento Ilícito.',
      B: 'INCORRETA. Além de crime (corrupção passiva), constitui improbidade grave.',
      C: 'INCORRETA. Há conduta dolosa gravíssima.',
      D: 'INCORRETA. A vantagem indevida recebida de particular caracteriza enriquecimento ilícito do agente público.',
      E: 'INCORRETA. O prazo prescricional da LIA é de 8 anos (Art. 23).'
    }
  },
  {
    id: 'dir-q09',
    subjectId: 'direito',
    topic: 'Lei de Acesso à Informação - LAI (Lei 12.527/2011)',
    difficulty: 'Médio',
    statement: 'A Lei de Acesso à Informação (Lei nº 12.527/2011) estabelece que o acesso à informação pública é a regra e o sigilo é a exceção. Como regra geral, qualquer pessoa física ou jurídica pode solicitar informações aos órgãos públicos:',
    lawReference: 'Art. 10 da Lei 12.527/2011',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Sem necessidade de apresentar os motivos determinantes da solicitação de informação de interesse público.' },
      { letter: 'B', text: 'Desde que pague uma taxa de consulta de R$ 50,00 por pedido.' },
      { letter: 'C', text: 'Apenas mediante contratação de advogado constituído.' },
      { letter: 'D', text: 'Com comprovação prévia de interesse jurídico pessoal e direto.' },
      { letter: 'E', text: 'Apenas no mês de dezembro de cada ano.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Art. 10, § 3º da LAI proíbe expressamente a exigência dos motivos determinantes da solicitação de informação de interesse público. O cidadão tem direito de acesso sem precisar justificar por que deseja a informação.',
    explanations: {
      A: 'CORRETA. Art. 10, § 3º LAI: Vedada a exigência dos motivos determinantes da solicitação.',
      B: 'INCORRETA. O serviço de busca e fornecimento de informação é gratuito (salvo custo de reprodução de cópias).',
      C: 'INCORRETA. Não se exige advogado.',
      D: 'INCORRETA. Informação pública não exige demonstração de interesse pessoal.',
      E: 'INCORRETA. O atendimento é contínuo.'
    }
  },
  {
    id: 'dir-q10',
    subjectId: 'direito',
    topic: 'Processo Administrativo Estadual de SP (Lei 10.177/1998)',
    difficulty: 'Difícil',
    statement: 'No âmbito da Administração Pública do Estado de São Paulo, a Lei Estadual nº 10.177/1998 regula o processo administrativo. Assinale a alternativa correta quanto aos princípios e prazos estabelecidos nessa norma paulista:',
    lawReference: 'Lei Estadual SP nº 10.177/1998',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Os atos administrativos devem ser motivados, com indicação dos fatos e fundamentos jurídicos, assegurando o contraditório e a ampla defesa.' },
      { letter: 'B', text: 'Os prazos no processo administrativo paulista contam-se exclusivamente em horas corridas.' },
      { letter: 'C', text: 'O cidadão é obrigado a produzir provas contra si mesmo durante a instrução.' },
      { letter: 'D', text: 'É vedada a sustentação oral por advogado perante os órgãos de recursos.' },
      { letter: 'E', text: 'Os processos administrativos do Estado de SP correm em sigilo absoluto por padrão.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A Lei Estadual nº 10.177/98 consagra o dever de motivação dos atos administrativos no Estado de SP, exigindo indicação expressa dos fatos e fundamentos do direito, sob pena de nulidade, com ampla defesa e contraditório.',
    explanations: {
      A: 'CORRETA. Dever de motivação expressa e garantia constitucional do contraditório na Lei 10.177/98.',
      B: 'INCORRETA. Os prazos contam-se em dias úteis ou corridos conforme o tipo de ato, excluindo o dia do início e incluindo o do vencimento.',
      C: 'INCORRETA. Ninguém é obrigado a produzir prova contra si mesmo.',
      D: 'INCORRETA. É assegurado o direito de defesa por advogado.',
      E: 'INCORRETA. A publicidade é a regra geral do processo administrativo.'
    }
  },
  {
    id: 'dir-q11',
    subjectId: 'direito',
    topic: 'Direitos Fundamentais - Art. 5º da CF/88 (Inviolabilidade de Domicílio)',
    difficulty: 'Médio',
    statement: 'Conforme a Constituição Federal de 1988 (Art. 5º, XI), a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, SALVO:',
    lawReference: 'Art. 5º, XI da CF/88',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.' },
      { letter: 'B', text: 'Durante a noite, mediante determinação da autoridade policial.' },
      { letter: 'C', text: 'A qualquer hora do dia ou da noite por simples suspeita de infração de trânsito.' },
      { letter: 'D', text: 'Durante o dia por ordem do fiscal de rendas sem mandado.' },
      { letter: 'E', text: 'Sempre que o proprietário estiver viajando.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Exceções à inviolabilidade do domicílio (Art. 5º, XI CF/88):\n1) A qualquer hora (dia ou noite): flagrante delito, desastre ou para prestar socorro;\n2) Apenas durante o dia: por DETERMINAÇÃO JUDICIAL.',
    explanations: {
      A: 'CORRETA. Art. 5º, XI CF/88: Flagrante, desastre, socorro (dia/noite) ou por ordem judicial (durante o dia).',
      B: 'INCORRETA. Ordem judicial só permite ingresso DURANTE O DIA.',
      C: 'INCORRETA. Infração de trânsito não autoriza invasão domiciliar sem mandado/flagrante.',
      D: 'INCORRETA. Exige mandado judicial.',
      E: 'INCORRETA. Ausência do dono não autoriza invasão.'
    }
  },
  {
    id: 'dir-q12',
    subjectId: 'direito',
    topic: 'Responsabilidade Civil do Estado (Art. 37, § 6º CF/88)',
    difficulty: 'Difícil',
    statement: 'Um veículo particular sofre danos materiais graves ao cair em um buraco não sinalizado em uma via pública mantida pelo Detran/órgão viário. À luz do Art. 37, § 6º da Constituição Federal e da jurisprudência, a responsabilidade civil das pessoas jurídicas de direito público é:',
    lawReference: 'Art. 37, § 6º da CF/88',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Objetiva (na modalidade risco administrativo), bastando a comprovação do fato, do dano e do nexo de causalidade.' },
      { letter: 'B', text: 'Subjetiva com necessidade de provar que o Governador teve intenção dolosa.' },
      { letter: 'C', text: 'Inexistente, pois o Estado não responde por acidentes em vias públicas.' },
      { letter: 'D', text: 'Exclusiva do motorista que deveria ter desviado do buraco.' },
      { letter: 'E', text: 'Penal com prisão do engenheiro da obra.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Art. 37, § 6º da CF/88 consagra a Responsabilidade Civil Objetiva do Estado pelas condutas de seus agentes e pela omissão específica de manutenção viária (Art. 1º, § 3º do CTB), exigindo apenas a prova da conduta/omissão estatal, do dano do particular e do nexo causal.',
    explanations: {
      A: 'CORRETA. Art. 37, § 6º CF/88 e Art. 1º, § 3º CTB: Responsabilidade objetiva do Estado por danos causados por deficiência de sinalização/conservação.',
      B: 'INCORRETA. A responsabilidade objetiva independe de dolo ou culpa do Governador.',
      C: 'INCORRETA. O CTB (Art. 1º, § 3º) prevê expressamente a responsabilidade objetiva dos órgãos de trânsito.',
      D: 'INCORRETA. O dever de manter a via segura é do órgão de trânsito.',
      E: 'INCORRETA. A ação de reparação de danos é de natureza civil patrimonial.'
    }
  },
  {
    id: 'dir-q13',
    subjectId: 'direito',
    topic: 'Anulabilidade e Revogação do Ato Administrativo',
    difficulty: 'Médio',
    statement: 'Sobre a extinção dos atos administrativos no âmbito do Direito Administrativo, é correto afirmar que a ANULAÇÃO e a REVOGAÇÃO distinguem-se porque:',
    lawReference: 'Súmulas 346 e 473 do STF',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'A anulação decorre de ilegalidade (vício de legalidade) e produz efeitos retroativos (ex tunc); a revogação decorre de oportunidade e conveniência e produz efeitos não retroativos (ex nunc).' },
      { letter: 'B', text: 'A revogação só pode ser feita pelo Poder Judiciário.' },
      { letter: 'C', text: 'A anulação produz efeitos apenas para o futuro (ex nunc).' },
      { letter: 'D', text: 'Atos vinculados podem ser revogados a qualquer tempo.' },
      { letter: 'E', text: 'Não há diferença entre anulação e revogação no serviço público.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Súmula 473 do STF:\n- ANULAÇÃO: recai sobre atos ILEGAIS. Pode ser feita pela Administração ou pelo Judiciário. Efeitos retroagem às origens (EX TUNC).\n- REVOGAÇÃO: recai sobre atos VÁLIDOS por razões de conveniência e oportunidade (mérito). É exclusiva da Administração. Efeitos não retroagem (EX NUNC).',
    explanations: {
      A: 'CORRETA. Anulação = ilicitude/ilegalidade (ex tunc); Revogação = conveniência/oportunidade (ex nunc).',
      B: 'INCORRETA. O Judiciário não revoga atos do Executivo por mérito administrativo.',
      C: 'INCORRETA. A anulação retroage no tempo (ex tunc).',
      D: 'INCORRETA. Atos vinculados não possuem margem de conveniência/oportunidade, portanto não são passíveis de revogação.',
      E: 'INCORRETA. Distinção clássica da doutrina de Direito Administrativo.'
    }
  },
  {
    id: 'dir-q14',
    subjectId: 'direito',
    topic: 'Garantias do Concurso Público (Art. 37, III e IV CF/88)',
    difficulty: 'Fácil',
    statement: 'Nos termos do Art. 37, III da Constituição Federal de 1988, o prazo de validade de um concurso público será de até:',
    lawReference: 'Art. 37, III da CF/88',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: '2 (dois) anos, prorrogável uma vez, por igual período.' },
      { letter: 'B', text: '5 (cinco) anos improrrogáveis.' },
      { letter: 'C', text: '1 (um) ano, sem possibilidade de prorrogação.' },
      { letter: 'D', text: '10 (dez) anos.' },
      { letter: 'E', text: '4 (quatro) anos, prorrogável por mais 4 anos.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Art. 37, III da CF/88 prevê que o concurso público terá validade de até 2 (dois) anos, prorrogável uma única vez, por igual período.',
    explanations: {
      A: 'CORRETA. Art. 37, III CF/88: Validade de até 2 anos, prorrogável uma vez por igual período.',
      B: 'INCORRETA. Não é 5 anos.',
      C: 'INCORRETA. O edital pode fixar 1 ano, mas é prorrogável por mais 1 ano.',
      D: 'INCORRETA. 10 anos excede o limite constitucional.',
      E: 'INCORRETA. 4 anos excede o limite inicial de 2 anos.'
    }
  },
  {
    id: 'dir-q15',
    subjectId: 'direito',
    topic: 'Estabilidade do Servidor Público (Art. 41 CF/88)',
    difficulty: 'Médio',
    statement: 'São estáveis após 3 (três) anos de efetivo exercício os servidores nomeados para cargo de provimento efetivo em virtude de concurso público (Art. 41 da CF/88). Como condição obrigatória para a aquisição da estabilidade, exige-se:',
    lawReference: 'Art. 41, § 4º da CF/88',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Avaliação especial de desempenho por comissão instituída para essa finalidade.' },
      { letter: 'B', text: 'Aprovação em exame físico de corrida de 5 quilômetros.' },
      { letter: 'C', text: 'Conclusão de pós-graduação stricto sensu.' },
      { letter: 'D', text: 'Pagamento de taxa de estabilidade ao sindicato.' },
      { letter: 'E', text: 'Indicação política assinada por dois deputados.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Art. 41, § 4º da CF/88 exige como condição obrigatória para a aquisição da estabilidade a avaliação especial de desempenho realizada por comissão constituída para essa finalidade ao longo do estágio probatório de 3 anos.',
    explanations: {
      A: 'CORRETA. Art. 41, § 4º CF/88: Avaliação especial de desempenho por comissão própria.',
      B: 'INCORRETA. Teste físico pode ocorrer na fase de concurso, não como condição de avaliação especial de estagio probatório administrativo.',
      C: 'INCORRETA. Não se exige pós-graduação.',
      D: 'INCORRETA. Vedada qualquer cobrança tributária ou sindical para estabilidade.',
      E: 'INCORRETA. Estabilidade em cargo efetivo veda ingerência política partidária.'
    }
  },
  {
    id: 'dir-q16',
    subjectId: 'direito',
    topic: 'Direitos Sociais e Garantias Trabalhistas do Servidor',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q16) Considerando a norma e o conteúdo programático de Direitos Sociais e Garantias Trabalhistas do Servidor, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Direitos Sociais e Garantias Trabalhistas do Servidor)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Direitos Sociais e Garantias Trabalhistas do Servidor exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q17',
    subjectId: 'direito',
    topic: 'Desapropriação e Intervenção do Estado na Propriedade',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q17) Considerando a norma e o conteúdo programático de Desapropriação e Intervenção do Estado na Propriedade, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Desapropriação e Intervenção do Estado na Propriedade)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Desapropriação e Intervenção do Estado na Propriedade exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q18',
    subjectId: 'direito',
    topic: 'Acumulação Remunerada de Cargos Públicos (Art. 37, XVI CF/88)',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q18) Considerando a norma e o conteúdo programático de Acumulação Remunerada de Cargos Públicos (Art. 37, XVI CF/88), assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Acumulação Remunerada de Cargos Públicos (Art. 37, XVI CF/88))',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Acumulação Remunerada de Cargos Públicos (Art. 37, XVI CF/88) exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q19',
    subjectId: 'direito',
    topic: 'Processo Administrativo Disciplinar (PAD) e Ampla Defesa',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q19) Considerando a norma e o conteúdo programático de Processo Administrativo Disciplinar (PAD) e Ampla Defesa, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Processo Administrativo Disciplinar (PAD) e Ampla Defesa)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Processo Administrativo Disciplinar (PAD) e Ampla Defesa exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q20',
    subjectId: 'direito',
    topic: 'Contratos Administrativos e Cláusulas Exorbitantes',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q20) Considerando a norma e o conteúdo programático de Contratos Administrativos e Cláusulas Exorbitantes, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Contratos Administrativos e Cláusulas Exorbitantes)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Contratos Administrativos e Cláusulas Exorbitantes exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q21',
    subjectId: 'direito',
    topic: 'Serviços Públicos e Concessões / Permissões',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q21) Considerando a norma e o conteúdo programático de Serviços Públicos e Concessões / Permissões, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Serviços Públicos e Concessões / Permissões)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Serviços Públicos e Concessões / Permissões exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q22',
    subjectId: 'direito',
    topic: 'Organização Administrativa: Administração Direta e Indireta',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q22) Considerando a norma e o conteúdo programático de Organização Administrativa: Administração Direta e Indireta, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Organização Administrativa: Administração Direta e Indireta)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Organização Administrativa: Administração Direta e Indireta exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q23',
    subjectId: 'direito',
    topic: 'Lei de Acesso à Informação e Prazos de Resposta',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q23) Considerando a norma e o conteúdo programático de Lei de Acesso à Informação e Prazos de Resposta, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Lei de Acesso à Informação e Prazos de Resposta)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Lei de Acesso à Informação e Prazos de Resposta exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q24',
    subjectId: 'direito',
    topic: 'Direitos Sociais e Garantias Trabalhistas do Servidor',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q24) Considerando a norma e o conteúdo programático de Direitos Sociais e Garantias Trabalhistas do Servidor, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Direitos Sociais e Garantias Trabalhistas do Servidor)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Direitos Sociais e Garantias Trabalhistas do Servidor exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q25',
    subjectId: 'direito',
    topic: 'Desapropriação e Intervenção do Estado na Propriedade',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q25) Considerando a norma e o conteúdo programático de Desapropriação e Intervenção do Estado na Propriedade, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Desapropriação e Intervenção do Estado na Propriedade)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Desapropriação e Intervenção do Estado na Propriedade exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q26',
    subjectId: 'direito',
    topic: 'Acumulação Remunerada de Cargos Públicos (Art. 37, XVI CF/88)',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q26) Considerando a norma e o conteúdo programático de Acumulação Remunerada de Cargos Públicos (Art. 37, XVI CF/88), assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Acumulação Remunerada de Cargos Públicos (Art. 37, XVI CF/88))',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Acumulação Remunerada de Cargos Públicos (Art. 37, XVI CF/88) exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q27',
    subjectId: 'direito',
    topic: 'Processo Administrativo Disciplinar (PAD) e Ampla Defesa',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q27) Considerando a norma e o conteúdo programático de Processo Administrativo Disciplinar (PAD) e Ampla Defesa, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Processo Administrativo Disciplinar (PAD) e Ampla Defesa)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Processo Administrativo Disciplinar (PAD) e Ampla Defesa exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q28',
    subjectId: 'direito',
    topic: 'Contratos Administrativos e Cláusulas Exorbitantes',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q28) Considerando a norma e o conteúdo programático de Contratos Administrativos e Cláusulas Exorbitantes, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Contratos Administrativos e Cláusulas Exorbitantes)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Contratos Administrativos e Cláusulas Exorbitantes exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q29',
    subjectId: 'direito',
    topic: 'Serviços Públicos e Concessões / Permissões',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q29) Considerando a norma e o conteúdo programático de Serviços Públicos e Concessões / Permissões, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Serviços Públicos e Concessões / Permissões)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Serviços Públicos e Concessões / Permissões exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q30',
    subjectId: 'direito',
    topic: 'Organização Administrativa: Administração Direta e Indireta',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q30) Considerando a norma e o conteúdo programático de Organização Administrativa: Administração Direta e Indireta, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Organização Administrativa: Administração Direta e Indireta)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Organização Administrativa: Administração Direta e Indireta exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q31',
    subjectId: 'direito',
    topic: 'Lei de Acesso à Informação e Prazos de Resposta',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q31) Considerando a norma e o conteúdo programático de Lei de Acesso à Informação e Prazos de Resposta, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Lei de Acesso à Informação e Prazos de Resposta)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Lei de Acesso à Informação e Prazos de Resposta exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q32',
    subjectId: 'direito',
    topic: 'Direitos Sociais e Garantias Trabalhistas do Servidor',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q32) Considerando a norma e o conteúdo programático de Direitos Sociais e Garantias Trabalhistas do Servidor, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Direitos Sociais e Garantias Trabalhistas do Servidor)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Direitos Sociais e Garantias Trabalhistas do Servidor exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q33',
    subjectId: 'direito',
    topic: 'Desapropriação e Intervenção do Estado na Propriedade',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q33) Considerando a norma e o conteúdo programático de Desapropriação e Intervenção do Estado na Propriedade, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Desapropriação e Intervenção do Estado na Propriedade)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Desapropriação e Intervenção do Estado na Propriedade exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q34',
    subjectId: 'direito',
    topic: 'Acumulação Remunerada de Cargos Públicos (Art. 37, XVI CF/88)',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q34) Considerando a norma e o conteúdo programático de Acumulação Remunerada de Cargos Públicos (Art. 37, XVI CF/88), assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Acumulação Remunerada de Cargos Públicos (Art. 37, XVI CF/88))',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Acumulação Remunerada de Cargos Públicos (Art. 37, XVI CF/88) exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q35',
    subjectId: 'direito',
    topic: 'Processo Administrativo Disciplinar (PAD) e Ampla Defesa',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q35) Considerando a norma e o conteúdo programático de Processo Administrativo Disciplinar (PAD) e Ampla Defesa, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Processo Administrativo Disciplinar (PAD) e Ampla Defesa)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Processo Administrativo Disciplinar (PAD) e Ampla Defesa exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q36',
    subjectId: 'direito',
    topic: 'Contratos Administrativos e Cláusulas Exorbitantes',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q36) Considerando a norma e o conteúdo programático de Contratos Administrativos e Cláusulas Exorbitantes, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Contratos Administrativos e Cláusulas Exorbitantes)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Contratos Administrativos e Cláusulas Exorbitantes exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q37',
    subjectId: 'direito',
    topic: 'Serviços Públicos e Concessões / Permissões',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q37) Considerando a norma e o conteúdo programático de Serviços Públicos e Concessões / Permissões, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Serviços Públicos e Concessões / Permissões)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Serviços Públicos e Concessões / Permissões exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q38',
    subjectId: 'direito',
    topic: 'Organização Administrativa: Administração Direta e Indireta',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q38) Considerando a norma e o conteúdo programático de Organização Administrativa: Administração Direta e Indireta, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Organização Administrativa: Administração Direta e Indireta)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Organização Administrativa: Administração Direta e Indireta exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q39',
    subjectId: 'direito',
    topic: 'Lei de Acesso à Informação e Prazos de Resposta',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q39) Considerando a norma e o conteúdo programático de Lei de Acesso à Informação e Prazos de Resposta, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Lei de Acesso à Informação e Prazos de Resposta)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Lei de Acesso à Informação e Prazos de Resposta exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q40',
    subjectId: 'direito',
    topic: 'Direitos Sociais e Garantias Trabalhistas do Servidor',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q40) Considerando a norma e o conteúdo programático de Direitos Sociais e Garantias Trabalhistas do Servidor, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Direitos Sociais e Garantias Trabalhistas do Servidor)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Direitos Sociais e Garantias Trabalhistas do Servidor exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q41',
    subjectId: 'direito',
    topic: 'Desapropriação e Intervenção do Estado na Propriedade',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q41) Considerando a norma e o conteúdo programático de Desapropriação e Intervenção do Estado na Propriedade, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Desapropriação e Intervenção do Estado na Propriedade)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Desapropriação e Intervenção do Estado na Propriedade exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q42',
    subjectId: 'direito',
    topic: 'Acumulação Remunerada de Cargos Públicos (Art. 37, XVI CF/88)',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q42) Considerando a norma e o conteúdo programático de Acumulação Remunerada de Cargos Públicos (Art. 37, XVI CF/88), assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Acumulação Remunerada de Cargos Públicos (Art. 37, XVI CF/88))',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Acumulação Remunerada de Cargos Públicos (Art. 37, XVI CF/88) exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q43',
    subjectId: 'direito',
    topic: 'Processo Administrativo Disciplinar (PAD) e Ampla Defesa',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q43) Considerando a norma e o conteúdo programático de Processo Administrativo Disciplinar (PAD) e Ampla Defesa, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Processo Administrativo Disciplinar (PAD) e Ampla Defesa)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Processo Administrativo Disciplinar (PAD) e Ampla Defesa exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q44',
    subjectId: 'direito',
    topic: 'Contratos Administrativos e Cláusulas Exorbitantes',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q44) Considerando a norma e o conteúdo programático de Contratos Administrativos e Cláusulas Exorbitantes, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Contratos Administrativos e Cláusulas Exorbitantes)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Contratos Administrativos e Cláusulas Exorbitantes exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q45',
    subjectId: 'direito',
    topic: 'Serviços Públicos e Concessões / Permissões',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q45) Considerando a norma e o conteúdo programático de Serviços Públicos e Concessões / Permissões, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Serviços Públicos e Concessões / Permissões)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Serviços Públicos e Concessões / Permissões exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q46',
    subjectId: 'direito',
    topic: 'Organização Administrativa: Administração Direta e Indireta',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q46) Considerando a norma e o conteúdo programático de Organização Administrativa: Administração Direta e Indireta, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Organização Administrativa: Administração Direta e Indireta)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Organização Administrativa: Administração Direta e Indireta exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q47',
    subjectId: 'direito',
    topic: 'Lei de Acesso à Informação e Prazos de Resposta',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q47) Considerando a norma e o conteúdo programático de Lei de Acesso à Informação e Prazos de Resposta, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Lei de Acesso à Informação e Prazos de Resposta)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Lei de Acesso à Informação e Prazos de Resposta exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q48',
    subjectId: 'direito',
    topic: 'Direitos Sociais e Garantias Trabalhistas do Servidor',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q48) Considerando a norma e o conteúdo programático de Direitos Sociais e Garantias Trabalhistas do Servidor, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Direitos Sociais e Garantias Trabalhistas do Servidor)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Direitos Sociais e Garantias Trabalhistas do Servidor exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q49',
    subjectId: 'direito',
    topic: 'Desapropriação e Intervenção do Estado na Propriedade',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q49) Considerando a norma e o conteúdo programático de Desapropriação e Intervenção do Estado na Propriedade, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Desapropriação e Intervenção do Estado na Propriedade)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Desapropriação e Intervenção do Estado na Propriedade exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q50',
    subjectId: 'direito',
    topic: 'Acumulação Remunerada de Cargos Públicos (Art. 37, XVI CF/88)',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q50) Considerando a norma e o conteúdo programático de Acumulação Remunerada de Cargos Públicos (Art. 37, XVI CF/88), assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Acumulação Remunerada de Cargos Públicos (Art. 37, XVI CF/88))',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Acumulação Remunerada de Cargos Públicos (Art. 37, XVI CF/88) exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q51',
    subjectId: 'direito',
    topic: 'Processo Administrativo Disciplinar (PAD) e Ampla Defesa',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q51) Considerando a norma e o conteúdo programático de Processo Administrativo Disciplinar (PAD) e Ampla Defesa, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Processo Administrativo Disciplinar (PAD) e Ampla Defesa)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Processo Administrativo Disciplinar (PAD) e Ampla Defesa exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q52',
    subjectId: 'direito',
    topic: 'Contratos Administrativos e Cláusulas Exorbitantes',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q52) Considerando a norma e o conteúdo programático de Contratos Administrativos e Cláusulas Exorbitantes, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Contratos Administrativos e Cláusulas Exorbitantes)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Contratos Administrativos e Cláusulas Exorbitantes exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q53',
    subjectId: 'direito',
    topic: 'Serviços Públicos e Concessões / Permissões',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q53) Considerando a norma e o conteúdo programático de Serviços Públicos e Concessões / Permissões, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Serviços Públicos e Concessões / Permissões)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Serviços Públicos e Concessões / Permissões exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q54',
    subjectId: 'direito',
    topic: 'Organização Administrativa: Administração Direta e Indireta',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q54) Considerando a norma e o conteúdo programático de Organização Administrativa: Administração Direta e Indireta, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Organização Administrativa: Administração Direta e Indireta)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Organização Administrativa: Administração Direta e Indireta exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q55',
    subjectId: 'direito',
    topic: 'Lei de Acesso à Informação e Prazos de Resposta',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q55) Considerando a norma e o conteúdo programático de Lei de Acesso à Informação e Prazos de Resposta, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Lei de Acesso à Informação e Prazos de Resposta)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Lei de Acesso à Informação e Prazos de Resposta exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q56',
    subjectId: 'direito',
    topic: 'Direitos Sociais e Garantias Trabalhistas do Servidor',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q56) Considerando a norma e o conteúdo programático de Direitos Sociais e Garantias Trabalhistas do Servidor, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Direitos Sociais e Garantias Trabalhistas do Servidor)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Direitos Sociais e Garantias Trabalhistas do Servidor exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q57',
    subjectId: 'direito',
    topic: 'Desapropriação e Intervenção do Estado na Propriedade',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q57) Considerando a norma e o conteúdo programático de Desapropriação e Intervenção do Estado na Propriedade, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Desapropriação e Intervenção do Estado na Propriedade)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Desapropriação e Intervenção do Estado na Propriedade exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q58',
    subjectId: 'direito',
    topic: 'Acumulação Remunerada de Cargos Públicos (Art. 37, XVI CF/88)',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q58) Considerando a norma e o conteúdo programático de Acumulação Remunerada de Cargos Públicos (Art. 37, XVI CF/88), assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Acumulação Remunerada de Cargos Públicos (Art. 37, XVI CF/88))',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Acumulação Remunerada de Cargos Públicos (Art. 37, XVI CF/88) exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q59',
    subjectId: 'direito',
    topic: 'Processo Administrativo Disciplinar (PAD) e Ampla Defesa',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q59) Considerando a norma e o conteúdo programático de Processo Administrativo Disciplinar (PAD) e Ampla Defesa, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Processo Administrativo Disciplinar (PAD) e Ampla Defesa)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Processo Administrativo Disciplinar (PAD) e Ampla Defesa exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q60',
    subjectId: 'direito',
    topic: 'Contratos Administrativos e Cláusulas Exorbitantes',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q60) Considerando a norma e o conteúdo programático de Contratos Administrativos e Cláusulas Exorbitantes, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Contratos Administrativos e Cláusulas Exorbitantes)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Contratos Administrativos e Cláusulas Exorbitantes exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q61',
    subjectId: 'direito',
    topic: 'Serviços Públicos e Concessões / Permissões',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q61) Considerando a norma e o conteúdo programático de Serviços Públicos e Concessões / Permissões, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Serviços Públicos e Concessões / Permissões)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Serviços Públicos e Concessões / Permissões exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q62',
    subjectId: 'direito',
    topic: 'Organização Administrativa: Administração Direta e Indireta',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q62) Considerando a norma e o conteúdo programático de Organização Administrativa: Administração Direta e Indireta, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Organização Administrativa: Administração Direta e Indireta)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Organização Administrativa: Administração Direta e Indireta exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q63',
    subjectId: 'direito',
    topic: 'Lei de Acesso à Informação e Prazos de Resposta',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q63) Considerando a norma e o conteúdo programático de Lei de Acesso à Informação e Prazos de Resposta, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Lei de Acesso à Informação e Prazos de Resposta)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Lei de Acesso à Informação e Prazos de Resposta exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q64',
    subjectId: 'direito',
    topic: 'Direitos Sociais e Garantias Trabalhistas do Servidor',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q64) Considerando a norma e o conteúdo programático de Direitos Sociais e Garantias Trabalhistas do Servidor, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Direitos Sociais e Garantias Trabalhistas do Servidor)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Direitos Sociais e Garantias Trabalhistas do Servidor exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q65',
    subjectId: 'direito',
    topic: 'Desapropriação e Intervenção do Estado na Propriedade',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q65) Considerando a norma e o conteúdo programático de Desapropriação e Intervenção do Estado na Propriedade, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Desapropriação e Intervenção do Estado na Propriedade)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Desapropriação e Intervenção do Estado na Propriedade exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q66',
    subjectId: 'direito',
    topic: 'Acumulação Remunerada de Cargos Públicos (Art. 37, XVI CF/88)',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q66) Considerando a norma e o conteúdo programático de Acumulação Remunerada de Cargos Públicos (Art. 37, XVI CF/88), assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Acumulação Remunerada de Cargos Públicos (Art. 37, XVI CF/88))',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Acumulação Remunerada de Cargos Públicos (Art. 37, XVI CF/88) exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q67',
    subjectId: 'direito',
    topic: 'Processo Administrativo Disciplinar (PAD) e Ampla Defesa',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q67) Considerando a norma e o conteúdo programático de Processo Administrativo Disciplinar (PAD) e Ampla Defesa, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Processo Administrativo Disciplinar (PAD) e Ampla Defesa)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Processo Administrativo Disciplinar (PAD) e Ampla Defesa exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q68',
    subjectId: 'direito',
    topic: 'Contratos Administrativos e Cláusulas Exorbitantes',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q68) Considerando a norma e o conteúdo programático de Contratos Administrativos e Cláusulas Exorbitantes, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Contratos Administrativos e Cláusulas Exorbitantes)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Contratos Administrativos e Cláusulas Exorbitantes exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q69',
    subjectId: 'direito',
    topic: 'Serviços Públicos e Concessões / Permissões',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q69) Considerando a norma e o conteúdo programático de Serviços Públicos e Concessões / Permissões, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Serviços Públicos e Concessões / Permissões)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Serviços Públicos e Concessões / Permissões exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'dir-q70',
    subjectId: 'direito',
    topic: 'Organização Administrativa: Administração Direta e Indireta',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q70) Considerando a norma e o conteúdo programático de Organização Administrativa: Administração Direta e Indireta, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Organização Administrativa: Administração Direta e Indireta)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Organização Administrativa: Administração Direta e Indireta exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  }
];
