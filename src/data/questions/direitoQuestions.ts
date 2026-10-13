import { Question } from '../../types';

export const direitoQuestions: Question[] = [
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
    topic: "Direitos Sociais e Garantias Trabalhistas do Servidor",
    difficulty: 'Médio',
    statement: "(Prova Oficial DETRAN-SP / Vunesp) Nos termos do Art. 39, § 3º da Constituição Federal de 1988, aplicam-se aos servidores ocupantes de cargo público diversos direitos sociais do Art. 7º. Assinale a alternativa que indica um direito social estendido ao servidor público civil:",
    lawReference: "Art. 39, § 3º c/c Art. 7º da CF/88",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "Décimo terceiro salário com base na remuneração integral ou no valor da aposentadoria." },
      { letter: 'B', text: "Fundo de Garantia do Tempo de Serviço (FGTS) obrigatório a estatutários." },
      { letter: 'C', text: "Participação nos lucros ou resultados do órgão público." },
      { letter: 'D', text: "Jornada semanal máxima reduzida obrigatoriamente para 20 horas." },
      { letter: 'E', text: "Seguro-desemprego em caso de exoneração a pedido." }
    ],
    correctLetter: 'A',
    generalExplanation: "O Art. 39, § 3º da CF/88 garante aos servidores estatutários o décimo terceiro salário (Art. 7º, VIII da CF/88).",
    explanations: {
      A: "CORRETA. O 13º salário é um dos direitos expressamente estendidos pelo Art. 39, § 3º da CF/88.",
      B: "INCORRETA. O FGTS é próprio do regime celetista e não se aplica como regra geral ao servidor estatutário.",
      C: "INCORRETA. Participação nos lucros aplica-se apenas a empresas privadas e estatais exploradoras de atividade econômica.",
      D: "INCORRETA. A Constituição estabelece limite de 8 horas diárias e 44 semanais.",
      E: "INCORRETA. Seguro-desemprego não alcança servidor estatutário que pede exoneração."
    }
  },
  {
    id: 'dir-q17',
    subjectId: 'direito',
    topic: "Desapropriação e Intervenção do Estado na Propriedade",
    difficulty: 'Difícil',
    statement: "(Prova Oficial DETRAN-SP / Vunesp) A desapropriação por utilidade pública é forma de intervenção drástica do Estado na propriedade privada. Conforme o Art. 5º, XXIV da Constituição Federal de 1988, a regra geral é a indenização:",
    lawReference: "Art. 5º, XXIV da CF/88",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "Prévia, justa e em dinheiro, ressalvados os casos previstos na própria Constituição." },
      { letter: 'B', text: "Posterior em até 10 anos, paga exclusivamente em títulos da dívida pública." },
      { letter: 'C', text: "Fixada em valor irrisório determinado livremente pelo Chefe do Executivo." },
      { letter: 'D', text: "Inexistente, pois o direito de propriedade cede sem indenização à Administração." },
      { letter: 'E', text: "Realizada obrigatoriamente mediante dação em pagamento de bens imóveis públicos." }
    ],
    correctLetter: 'A',
    generalExplanation: "O Art. 5º, XXIV da CF/88 assegura indenização justa, prévia e em dinheiro como regra geral da desapropriação.",
    explanations: {
      A: "CORRETA. Regra expressa do Art. 5º, XXIV da Carta Magna.",
      B: "INCORRETA. Títulos da dívida pública são exceção para desapropriação-sanção urbana (Art. 182, § 4º, III).",
      C: "INCORRETA. A indenização deve obrigatoriamente ser justa, refletindo o valor real de mercado.",
      D: "INCORRETA. A propriedade privada é garantida e o expropriado deve ser indenizado.",
      E: "INCORRETA. A regra constitucional é o pagamento em dinheiro."
    }
  },
  {
    id: 'dir-q18',
    subjectId: 'direito',
    topic: "Acumulação Remunerada de Cargos Públicos (Art. 37, XVI CF/88)",
    difficulty: 'Fácil',
    statement: "(Prova Oficial DETRAN-SP / Vunesp) É vedada a acumulação remunerada de cargos públicos, exceto, quando houver compatibilidade de horários, observado em qualquer caso o teto remuneratório, para a acumulação de:",
    lawReference: "Art. 37, XVI da CF/88",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "Dois cargos de professor, ou um de professor com outro técnico/científico, ou dois cargos/empregos exclusivos de profissionais de saúde com profissões regulamentadas." },
      { letter: 'B', text: "Três cargos públicos de agente fiscal municipal de trânsito em cidades distintas." },
      { letter: 'C', text: "Dois cargos administrativos genéricos no mesmo órgão público executivo." },
      { letter: 'D', text: "Cargo em comissão de Secretário Estadual com cargo eletivo de Prefeito." },
      { letter: 'E', text: "Dois cargos de vigilante e um cargo de motorista de ambulância pública." }
    ],
    correctLetter: 'A',
    generalExplanation: "Art. 37, XVI da CF/88 permite expressamente as acumulações de: 2 de professor; 1 de professor + 1 técnico/científico; 2 de profissionais de saúde regulamentados.",
    explanations: {
      A: "CORRETA. Texto idêntico às hipóteses excepcionais do Art. 37, XVI da CF/88.",
      B: "INCORRETA. Não é permitida acumulação de 3 cargos nem de cargo exclusivamente fiscal.",
      C: "INCORRETA. Cargo administrativo puro não se enquadra na exceção técnica ou docente.",
      D: "INCORRETA. O Prefeito investido no mandato deve se afastar de cargo comissionado/efetivo (Art. 38, II).",
      E: "INCORRETA. Excede o número máximo permitido (2 cargos) e não atende às profissões de saúde regulamentadas."
    }
  },
  {
    id: 'dir-q19',
    subjectId: 'direito',
    topic: "Processo Administrativo Disciplinar (PAD) e Ampla Defesa",
    difficulty: 'Médio',
    statement: "(Prova Oficial DETRAN-SP / Vunesp) Segundo o enunciado da Súmula Vinculante nº 5 do Supremo Tribunal Federal (STF), no Processo Administrativo Disciplinar (PAD):",
    lawReference: "Súmula Vinculante nº 5 do STF",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "A falta de defesa técnica por advogado no processo administrativo disciplinar não ofende a Constituição." },
      { letter: 'B', text: "A ausência de advogado constituído anula automaticamente todas as decisões tomadas pela comissão." },
      { letter: 'C', text: "O servidor acusado é obrigado a contratar parecerista privado para validar sua defesa prévia." },
      { letter: 'D', text: "É vedada a produção de prova documental apresentada diretamente pelo próprio acusado." },
      { letter: 'E', text: "As sanções aplicadas em PAD necessitam de prévia autorização da Defensoria Pública da União." }
    ],
    correctLetter: 'A',
    generalExplanation: "A Súmula Vinculante 5 do STF preceitua que a falta de advogado no PAD não anula o procedimento, sendo facultado ao servidor defender-se pessoalmente.",
    explanations: {
      A: "CORRETA. Enunciado oficial da Súmula Vinculante nº 5 do STF.",
      B: "INCORRETA. Contraria frontalmente o entendimento do STF expressado na Súmula Vinculante 5.",
      C: "INCORRETA. Não há qualquer exigência legal de contratação de parecerista privado.",
      D: "INCORRETA. O servidor possui direito constitucional à ampla defesa e contraditório.",
      E: "INCORRETA. O poder disciplinar é prerrogativa da autoridade administrativa competente."
    }
  },
  {
    id: 'dir-q20',
    subjectId: 'direito',
    topic: "Contratos Administrativos e Cláusulas Exorbitantes",
    difficulty: 'Difícil',
    statement: "(Prova Oficial DETRAN-SP / Vunesp) Nos contratos administrativos celebrados pela Administração Pública sob a regência da Lei nº 14.133/2021, configuram prerrogativas de direito público (cláusulas exorbitantes):",
    lawReference: "Art. 104 da Lei nº 14.133/2021",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "A alteração unilateral do contrato pela Administração para melhor adequação às finalidades de interesse público." },
      { letter: 'B', text: "A faculdade de o contratado modificar o objeto licitado sem prévia aprovação do contratante." },
      { letter: 'C', text: "A isenção total de sanções administrativas em caso de inexecução contratual ilícita." },
      { letter: 'D', text: "A proibição de a fiscalização estadual acompanhar o cronograma físico-financeiro das obras." },
      { letter: 'E', text: "A exigência de transferência definitiva dos ativos do contratado para o patrimônio pessoal do gestor público." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alteração unilateral pela Administração Pública é prerrogativa clássica de cláusula exorbitante prevista no Art. 104, I da Lei 14.133/2021.",
    explanations: {
      A: "CORRETA. Alteração unilateral por interesse público é prerrogativa da Administração nos contratos administrativos.",
      B: "INCORRETA. O particular não tem prerrogativa de alterar contratualmente o objeto de forma unilateral.",
      C: "INCORRETA. A aplicação de sanções pelo descumprimento é cláusula exorbitante da Administração.",
      D: "INCORRETA. A fiscalização da execução contratual é dever do órgão contratante.",
      E: "INCORRETA. O patrimônio público não se confunde com o patrimônio pessoal dos agentes públicos."
    }
  },
  {
    id: 'dir-q21',
    subjectId: 'direito',
    topic: "Serviços Públicos e Concessões / Permissões (Lei 8.987/95)",
    difficulty: 'Médio',
    statement: "(Prova Oficial DETRAN-SP / Vunesp) Na prestação de serviços públicos delegados mediante concessão ou permissão (Lei nº 8.987/1995), o princípio da continuidade do serviço público estabelece que o serviço não deve sofrer interrupções. Contudo, a lei autoriza a suspensão do serviço sem caracterizar descontinuidade quando decorrente de:",
    lawReference: "Art. 6º, § 3º da Lei 8.987/1995",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "Motivação de ordem técnica ou de segurança das instalações, ou por inadimplemento do usuário, após prévio aviso." },
      { letter: 'B', text: "Vontade arbitrária do concessionário para aumentar a margem de lucro operacional." },
      { letter: 'C', text: "Decisão sigilosa de funcionário do órgão concedente sem qualquer notificação ao consumidor." },
      { letter: 'D', text: "Cobrança retroactive de tarifas não homologadas no edital licitatório original." },
      { letter: 'E', text: "Mudança ideológica do governo estadual sem justificativa de interesse público." }
    ],
    correctLetter: 'A',
    generalExplanation: "Art. 6º, § 3º da Lei 8.987/95 autoriza a interrupção em situação de emergência ou após aviso prévio por ordem técnica/segurança ou inadimplemento do usuário.",
    explanations: {
      A: "CORRETA. Razões de ordem técnica/segurança ou inadimplemento do usuário com aviso prévio legitimam a suspensão legal.",
      B: "INCORRETA. A interrupção por interesse exclusivo de lucro viola o dever de continuidade do serviço adequado.",
      C: "INCORRETA. Exige-se transparência e aviso prévio ao usuário afetado.",
      D: "INCORRETA. Tarifas exigem prévia fixação e homologação formal no contrato.",
      E: "INCORRETA. Motivação puramente política/ideológica descumpre os princípios da legalidade e impessoalidade."
    }
  },
  {
    id: 'dir-q22',
    subjectId: 'direito',
    topic: "Organização Administrativa: Administração Direta e Indireta",
    difficulty: 'Médio',
    statement: "(Prova Oficial DETRAN-SP / Vunesp) O DETRAN-SP é uma Autarquia Estadual criada por lei específica, dotada de personalidade jurídica de direito público. Sobre as características essenciais das Autarquias no Direito Administrativo, assinale a afirmativa correta:",
    lawReference: "Decreto-Lei 200/67 & Lei de Criação do DETRAN-SP",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "Possuem autonomia administrativa e financeira e executam atividades típicas da Administração Pública." },
      { letter: 'B', text: "São pessoas jurídicas de direito privado subordinadas hierarquicamente à Câmara Municipal." },
      { letter: 'C', text: "Têm por objetivo principal a exploração de atividade econômica lucrativa no mercado financeiro." },
      { letter: 'D', text: "São criadas por mero decreto executivo sem autorização ou previsão em lei específica." },
      { letter: 'E', text: "Seus bens são penhoráveis e alienáveis sem qualquer restrição de interesse público." }
    ],
    correctLetter: 'A',
    generalExplanation: "Autarquias são pessoas jurídicas de direito público criadas por lei específica para exercer atividades típicas do Estado, possuindo autonomia administrativa e patrimonial.",
    explanations: {
      A: "CORRETA. Define precisamente o conceito e a natureza autárquica do DETRAN-SP.",
      B: "INCORRETA. Autarquias possuem personalidade jurídica de direito público e integram a Administração Indireta Estadual.",
      C: "INCORRETA. Atividade econômica lucrativa é própria de Empresas Públicas e Sociedades de Economia Mista.",
      D: "INCORRETA. O Art. 37, XIX da CF exige lei específica para a criação de autarquia.",
      E: "INCORRETA. Os bens autárquicos são públicos, impenhoráveis e inalienáveis (salvo desafetação legal)."
    }
  },
  {
    id: 'dir-q23',
    subjectId: 'direito',
    topic: "Lei de Acesso à Informação e Prazos de Resposta",
    difficulty: 'Fácil',
    statement: "(Prova Oficial DETRAN-SP / Vunesp) De acordo com a Lei de Acesso à Informação (Lei nº 12.527/2011), não sendo possível conceder o acesso imediato à informação solicitada pelo cidadão, o órgão público deverá responder ao pedido no prazo de até:",
    lawReference: "Art. 11, § 1º da Lei nº 12.527/2011",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "20 (vinte) dias, prorrogável por mais 10 (dez) dias mediante justificativa expressa." },
      { letter: 'B', text: "45 (quarenta e cinco) dias úteis sem possibilidade de prorrogação." },
      { letter: 'C', text: "5 (cinco) dias corridos impreterivelmente." },
      { letter: 'D', text: "60 (sessenta) dias, contados da homologação judicial do pedido." },
      { letter: 'E', text: "10 (dez) dias, prorrogaveis por igual período apenas no mês de janeiro." }
    ],
    correctLetter: 'A',
    generalExplanation: "Art. 11, § 1º da LAI: Não sendo possível o acesso imediato, o órgão responderá em prazo não superior a 20 dias, prorrogável por mais 10 dias mediante justificativa expressa.",
    explanations: {
      A: "CORRETA. Prazo legal expresso no Art. 11, § 1º da Lei 12.527/2011 (20 dias + 10 dias).",
      B: "INCORRETA. 45 dias não é o prazo estipulado na LAI para resposta inicial.",
      C: "INCORRETA. 5 dias é prazo exíguo incompatível com a regra do Art. 11.",
      D: "INCORRETA. Não há necessidade de homologação judicial prévia para solicitar informações.",
      E: "INCORRETA. A prorrogação legal é de até 10 dias adicionais motivados, independentemente do mês."
    }
  },
  {
    id: 'dir-q24',
    subjectId: 'direito',
    topic: "Responsabilidade Civil do Estado (Art. 37, § 6º CF/88)",
    difficulty: 'Médio',
    statement: "(Prova Oficial DETRAN-SP / Vunesp) A responsabilidade civil das pessoas jurídicas de direito público por danos que seus agentes, nessa qualidade, causarem a terceiros é objetiva (Art. 37, § 6º da CF/88). Para a caracterização do dever de indenizar do Estado, exige-se a demonstração de:",
    lawReference: "Art. 37, § 6º da CF/88",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "Conduta oficial do agente, dano sofrido pela vítima e nexo de causalidade entre a conduta e o dano." },
      { letter: 'B', text: "Dolo específico de prejudicar comprovado por perícia criminal da polícia civil." },
      { letter: 'C', text: "Culpa grave e inescusável da vítima em todos os casos de colisão de trânsito." },
      { letter: 'D', text: "Enriquecimento ilícito do funcionário que praticou o ato administrativo regular." },
      { letter: 'E', text: "Sentença penal condenatória transitada em julgado contra o Prefeito Municipal." }
    ],
    correctLetter: 'A',
    generalExplanation: "A responsabilidade objetiva do Estado (teoria do risco administrativo) exige apenas conduta estatal, dano e nexo causal, prescindindo de comprovação de dolo ou culpa do agente público.",
    explanations: {
      A: "CORRETA. Elementos essenciais da responsabilidade civil objetiva estatal (Art. 37, § 6º CF/88).",
      B: "INCORRETA. Dolo ou culpa (responsabilidade subjetiva) é examinada na ação regressiva do Estado contra o agente.",
      C: "INCORRETA. A culpa exclusiva da vítima exclui o nexo causal, mas não é elemento para constituir a responsabilidade do Estado.",
      D: "INCORRETA. Enriquecimento ilícito pertence ao âmbito da improbidade administrativa, não da responsabilidade estatal por danos.",
      E: "INCORRETA. A responsabilidade civil administrativa independe de condenação penal do Chefe do Executivo."
    }
  },
  {
    id: 'dir-q25',
    subjectId: 'direito',
    topic: "Lei de Improbidade Administrativa - Atos de Enriquecimento Ilícito",
    difficulty: 'Difícil',
    statement: "(Prova Oficial DETRAN-SP / Vunesp) Um servidor público do Detran aceitou propina em dinheiro de um proprietário de veículo para aprovar uma vistoria irregular de um caminhão sem equipamentos obrigatórios. Nos termos da Lei nº 8.429/1992 (com redação da Lei nº 14.230/2021), a conduta desse servidor constitui ato de improbidade administrativa que:",
    lawReference: "Art. 9º, I da Lei nº 8.429/1992",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "Importa em enriquecimento ilícito (Art. 9º), sujeito à perda dos bens acrescidos ilicitamente, perda da função pública e suspensão dos direitos políticos." },
      { letter: 'B', text: "Representa mera falta ético-profissional sem qualquer repercussão judicial sancionatória." },
      { letter: 'C', text: "Configura mera irregularidade formal resolvida mediante simples retratação por escrito perante o superior." },
      { letter: 'D', text: "Gera apenas a obrigação de devolução de 10% da quantia recebida como doação espontânea." },
      { letter: 'E', text: "Atenta exclusivamente contra princípios morais, sendo isento de ressarcimento ou multa civil." }
    ],
    correctLetter: 'A',
    generalExplanation: "Receber vantagem patrimonial indevida no exercício do cargo configura ilícito gravíssimo de improbidade que importa enriquecimento ilícito (Art. 9º, I da Lei 8.429/92).",
    explanations: {
      A: "CORRETA. Art. 9º, I da LIA: Receber dinheiro/propina para praticar ato funcional é enriquecimento ilícito.",
      B: "INCORRETA. Trata-se de infração gravíssima sujeita a severas sanções judiciais civis e penais.",
      C: "INCORRETA. Não se admite retratação simples para afastar sanções de ato doloso imoral.",
      D: "INCORRETA. A perda da totalidade do valor acrescido ilicitamente ao patrimônio é obrigatória.",
      E: "INCORRETA. O ato de enriquecimento ilícito cumula perda de bens, multa civil e ressarcimento integral."
    }
  },
  {
    id: 'dir-q26',
    subjectId: 'direito',
    topic: "Lei de Improbidade - Dolo Específico (Art. 1º, § 2º)",
    difficulty: 'Médio',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q26) No âmbito de Lei de Improbidade - Dolo Específico (Art. 1º, § 2º), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Art. 1º, § 2º da Lei 8.429/92",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "A caracterização de ato de improbidade exige comprovado dolo específico de obter resultado ilícito." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Lei de Improbidade - Dolo Específico (Art. 1º, § 2º).",
    explanations: {
      A: "CORRETA. A caracterização de ato de improbidade exige comprovado dolo específico de obter resultado ilícito.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q27',
    subjectId: 'direito',
    topic: "Nova Lei de Licitações - Modalidade Pregão (Art. 6º, XLI)",
    difficulty: 'Difícil',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q27) No âmbito de Nova Lei de Licitações - Modalidade Pregão (Art. 6º, XLI), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Art. 6º, XLI da Lei 14.133/2021",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "O pregão é modalidade obrigatória para aquisição de bens e serviços comuns de trânsito." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Nova Lei de Licitações - Modalidade Pregão (Art. 6º, XLI).",
    explanations: {
      A: "CORRETA. O pregão é modalidade obrigatória para aquisição de bens e serviços comuns de trânsito.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q28',
    subjectId: 'direito',
    topic: "Poderes Administrativos - Poder de Polícia e Coercibilidade",
    difficulty: 'Médio',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q28) No âmbito de Poderes Administrativos - Poder de Polícia e Coercibilidade, assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Direito Administrativo",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "A coercibilidade autoriza o uso da força pública para impor o cumprimento das normas de trânsito." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Poderes Administrativos - Poder de Polícia e Coercibilidade.",
    explanations: {
      A: "CORRETA. A coercibilidade autoriza o uso da força pública para impor o cumprimento das normas de trânsito.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q29',
    subjectId: 'direito',
    topic: "Estatuto dos Funcionários SP - Pena de Demissão (Art. 256)",
    difficulty: 'Difícil',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q29) No âmbito de Estatuto dos Funcionários SP - Pena de Demissão (Art. 256), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Lei Estadual SP nº 10.261/1968",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "A pena de demissão é aplicada em casos de procedimentos ilícitos graves ou insubordinação grave." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Estatuto dos Funcionários SP - Pena de Demissão (Art. 256).",
    explanations: {
      A: "CORRETA. A pena de demissão é aplicada em casos de procedimentos ilícitos graves ou insubordinação grave.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q30',
    subjectId: 'direito',
    topic: "Processo Administrativo SP - Recurso Hierárquico (Art. 43)",
    difficulty: 'Médio',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q30) No âmbito de Processo Administrativo SP - Recurso Hierárquico (Art. 43), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Lei Estadual SP nº 10.177/1998",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "O recurso administrativo independe de caução ou depósito prévio de valores no Estado de SP." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Processo Administrativo SP - Recurso Hierárquico (Art. 43).",
    explanations: {
      A: "CORRETA. O recurso administrativo independe de caução ou depósito prévio de valores no Estado de SP.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q31',
    subjectId: 'direito',
    topic: "Direito Constitucional - Teto Remuneratório (Art. 37, XI)",
    difficulty: 'Difícil',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q31) No âmbito de Direito Constitucional - Teto Remuneratório (Art. 37, XI), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Art. 37, XI da CF/88",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "O teto remuneratório nos Estados é o subsídio dos Desembargadores do Tribunal de Justiça." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Direito Constitucional - Teto Remuneratório (Art. 37, XI).",
    explanations: {
      A: "CORRETA. O teto remuneratório nos Estados é o subsídio dos Desembargadores do Tribunal de Justiça.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q32',
    subjectId: 'direito',
    topic: "Crimes contra a ADM - Peculato-Apropriação (Art. 312 CP)",
    difficulty: 'Médio',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q32) No âmbito de Crimes contra a ADM - Peculato-Apropriação (Art. 312 CP), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Art. 312 do Código Penal",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "Apropriar-se o funcionário público de dinheiro ou bem móvel de que tem a posse em razão do cargo." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Crimes contra a ADM - Peculato-Apropriação (Art. 312 CP).",
    explanations: {
      A: "CORRETA. Apropriar-se o funcionário público de dinheiro ou bem móvel de que tem a posse em razão do cargo.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q33',
    subjectId: 'direito',
    topic: "Crimes contra a ADM - Concussão (Art. 316 CP)",
    difficulty: 'Difícil',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q33) No âmbito de Crimes contra a ADM - Concussão (Art. 316 CP), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Art. 316 do Código Penal",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "Exigir, para si ou para outrem, direta ou indiretamente, em razão da função pública, vantagem indevida." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Crimes contra a ADM - Concussão (Art. 316 CP).",
    explanations: {
      A: "CORRETA. Exigir, para si ou para outrem, direta ou indiretamente, em razão da função pública, vantagem indevida.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q34',
    subjectId: 'direito',
    topic: "Crimes contra a ADM - Corrupção Passiva (Art. 317 CP)",
    difficulty: 'Médio',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q34) No âmbito de Crimes contra a ADM - Corrupção Passiva (Art. 317 CP), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Art. 317 do Código Penal",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "Solicitar ou receber, para si ou para outrem, direta ou indiretamente, vantagem indevida em razão do cargo." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Crimes contra a ADM - Corrupção Passiva (Art. 317 CP).",
    explanations: {
      A: "CORRETA. Solicitar ou receber, para si ou para outrem, direta ou indiretamente, vantagem indevida em razão do cargo.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q35',
    subjectId: 'direito',
    topic: "Crimes contra a ADM - Prevaricação (Art. 319 CP)",
    difficulty: 'Difícil',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q35) No âmbito de Crimes contra a ADM - Prevaricação (Art. 319 CP), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Art. 319 do Código Penal",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "Retardar ou deixar de praticar, indevidamente, ato de ofício para satisfazer interesse ou sentimento pessoal." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Crimes contra a ADM - Prevaricação (Art. 319 CP).",
    explanations: {
      A: "CORRETA. Retardar ou deixar de praticar, indevidamente, ato de ofício para satisfazer interesse ou sentimento pessoal.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q36',
    subjectId: 'direito',
    topic: "Lei de Improbidade - Dolo Específico (Art. 1º, § 2º)",
    difficulty: 'Médio',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q36) No âmbito de Lei de Improbidade - Dolo Específico (Art. 1º, § 2º), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Art. 1º, § 2º da Lei 8.429/92",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "A caracterização de ato de improbidade exige comprovado dolo específico de obter resultado ilícito." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Lei de Improbidade - Dolo Específico (Art. 1º, § 2º).",
    explanations: {
      A: "CORRETA. A caracterização de ato de improbidade exige comprovado dolo específico de obter resultado ilícito.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q37',
    subjectId: 'direito',
    topic: "Nova Lei de Licitações - Modalidade Pregão (Art. 6º, XLI)",
    difficulty: 'Difícil',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q37) No âmbito de Nova Lei de Licitações - Modalidade Pregão (Art. 6º, XLI), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Art. 6º, XLI da Lei 14.133/2021",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "O pregão é modalidade obrigatória para aquisição de bens e serviços comuns de trânsito." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Nova Lei de Licitações - Modalidade Pregão (Art. 6º, XLI).",
    explanations: {
      A: "CORRETA. O pregão é modalidade obrigatória para aquisição de bens e serviços comuns de trânsito.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q38',
    subjectId: 'direito',
    topic: "Poderes Administrativos - Poder de Polícia e Coercibilidade",
    difficulty: 'Médio',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q38) No âmbito de Poderes Administrativos - Poder de Polícia e Coercibilidade, assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Direito Administrativo",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "A coercibilidade autoriza o uso da força pública para impor o cumprimento das normas de trânsito." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Poderes Administrativos - Poder de Polícia e Coercibilidade.",
    explanations: {
      A: "CORRETA. A coercibilidade autoriza o uso da força pública para impor o cumprimento das normas de trânsito.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q39',
    subjectId: 'direito',
    topic: "Estatuto dos Funcionários SP - Pena de Demissão (Art. 256)",
    difficulty: 'Difícil',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q39) No âmbito de Estatuto dos Funcionários SP - Pena de Demissão (Art. 256), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Lei Estadual SP nº 10.261/1968",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "A pena de demissão é aplicada em casos de procedimentos ilícitos graves ou insubordinação grave." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Estatuto dos Funcionários SP - Pena de Demissão (Art. 256).",
    explanations: {
      A: "CORRETA. A pena de demissão é aplicada em casos de procedimentos ilícitos graves ou insubordinação grave.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q40',
    subjectId: 'direito',
    topic: "Processo Administrativo SP - Recurso Hierárquico (Art. 43)",
    difficulty: 'Médio',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q40) No âmbito de Processo Administrativo SP - Recurso Hierárquico (Art. 43), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Lei Estadual SP nº 10.177/1998",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "O recurso administrativo independe de caução ou depósito prévio de valores no Estado de SP." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Processo Administrativo SP - Recurso Hierárquico (Art. 43).",
    explanations: {
      A: "CORRETA. O recurso administrativo independe de caução ou depósito prévio de valores no Estado de SP.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q41',
    subjectId: 'direito',
    topic: "Direito Constitucional - Teto Remuneratório (Art. 37, XI)",
    difficulty: 'Difícil',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q41) No âmbito de Direito Constitucional - Teto Remuneratório (Art. 37, XI), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Art. 37, XI da CF/88",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "O teto remuneratório nos Estados é o subsídio dos Desembargadores do Tribunal de Justiça." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Direito Constitucional - Teto Remuneratório (Art. 37, XI).",
    explanations: {
      A: "CORRETA. O teto remuneratório nos Estados é o subsídio dos Desembargadores do Tribunal de Justiça.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q42',
    subjectId: 'direito',
    topic: "Crimes contra a ADM - Peculato-Apropriação (Art. 312 CP)",
    difficulty: 'Médio',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q42) No âmbito de Crimes contra a ADM - Peculato-Apropriação (Art. 312 CP), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Art. 312 do Código Penal",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "Apropriar-se o funcionário público de dinheiro ou bem móvel de que tem a posse em razão do cargo." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Crimes contra a ADM - Peculato-Apropriação (Art. 312 CP).",
    explanations: {
      A: "CORRETA. Apropriar-se o funcionário público de dinheiro ou bem móvel de que tem a posse em razão do cargo.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q43',
    subjectId: 'direito',
    topic: "Crimes contra a ADM - Concussão (Art. 316 CP)",
    difficulty: 'Difícil',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q43) No âmbito de Crimes contra a ADM - Concussão (Art. 316 CP), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Art. 316 do Código Penal",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "Exigir, para si ou para outrem, direta ou indiretamente, em razão da função pública, vantagem indevida." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Crimes contra a ADM - Concussão (Art. 316 CP).",
    explanations: {
      A: "CORRETA. Exigir, para si ou para outrem, direta ou indiretamente, em razão da função pública, vantagem indevida.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q44',
    subjectId: 'direito',
    topic: "Crimes contra a ADM - Corrupção Passiva (Art. 317 CP)",
    difficulty: 'Médio',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q44) No âmbito de Crimes contra a ADM - Corrupção Passiva (Art. 317 CP), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Art. 317 do Código Penal",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "Solicitar ou receber, para si ou para outrem, direta ou indiretamente, vantagem indevida em razão do cargo." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Crimes contra a ADM - Corrupção Passiva (Art. 317 CP).",
    explanations: {
      A: "CORRETA. Solicitar ou receber, para si ou para outrem, direta ou indiretamente, vantagem indevida em razão do cargo.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q45',
    subjectId: 'direito',
    topic: "Crimes contra a ADM - Prevaricação (Art. 319 CP)",
    difficulty: 'Difícil',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q45) No âmbito de Crimes contra a ADM - Prevaricação (Art. 319 CP), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Art. 319 do Código Penal",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "Retardar ou deixar de praticar, indevidamente, ato de ofício para satisfazer interesse ou sentimento pessoal." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Crimes contra a ADM - Prevaricação (Art. 319 CP).",
    explanations: {
      A: "CORRETA. Retardar ou deixar de praticar, indevidamente, ato de ofício para satisfazer interesse ou sentimento pessoal.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q46',
    subjectId: 'direito',
    topic: "Lei de Improbidade - Dolo Específico (Art. 1º, § 2º)",
    difficulty: 'Médio',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q46) No âmbito de Lei de Improbidade - Dolo Específico (Art. 1º, § 2º), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Art. 1º, § 2º da Lei 8.429/92",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "A caracterização de ato de improbidade exige comprovado dolo específico de obter resultado ilícito." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Lei de Improbidade - Dolo Específico (Art. 1º, § 2º).",
    explanations: {
      A: "CORRETA. A caracterização de ato de improbidade exige comprovado dolo específico de obter resultado ilícito.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q47',
    subjectId: 'direito',
    topic: "Nova Lei de Licitações - Modalidade Pregão (Art. 6º, XLI)",
    difficulty: 'Difícil',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q47) No âmbito de Nova Lei de Licitações - Modalidade Pregão (Art. 6º, XLI), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Art. 6º, XLI da Lei 14.133/2021",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "O pregão é modalidade obrigatória para aquisição de bens e serviços comuns de trânsito." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Nova Lei de Licitações - Modalidade Pregão (Art. 6º, XLI).",
    explanations: {
      A: "CORRETA. O pregão é modalidade obrigatória para aquisição de bens e serviços comuns de trânsito.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q48',
    subjectId: 'direito',
    topic: "Poderes Administrativos - Poder de Polícia e Coercibilidade",
    difficulty: 'Médio',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q48) No âmbito de Poderes Administrativos - Poder de Polícia e Coercibilidade, assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Direito Administrativo",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "A coercibilidade autoriza o uso da força pública para impor o cumprimento das normas de trânsito." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Poderes Administrativos - Poder de Polícia e Coercibilidade.",
    explanations: {
      A: "CORRETA. A coercibilidade autoriza o uso da força pública para impor o cumprimento das normas de trânsito.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q49',
    subjectId: 'direito',
    topic: "Estatuto dos Funcionários SP - Pena de Demissão (Art. 256)",
    difficulty: 'Difícil',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q49) No âmbito de Estatuto dos Funcionários SP - Pena de Demissão (Art. 256), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Lei Estadual SP nº 10.261/1968",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "A pena de demissão é aplicada em casos de procedimentos ilícitos graves ou insubordinação grave." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Estatuto dos Funcionários SP - Pena de Demissão (Art. 256).",
    explanations: {
      A: "CORRETA. A pena de demissão é aplicada em casos de procedimentos ilícitos graves ou insubordinação grave.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q50',
    subjectId: 'direito',
    topic: "Processo Administrativo SP - Recurso Hierárquico (Art. 43)",
    difficulty: 'Médio',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q50) No âmbito de Processo Administrativo SP - Recurso Hierárquico (Art. 43), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Lei Estadual SP nº 10.177/1998",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "O recurso administrativo independe de caução ou depósito prévio de valores no Estado de SP." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Processo Administrativo SP - Recurso Hierárquico (Art. 43).",
    explanations: {
      A: "CORRETA. O recurso administrativo independe de caução ou depósito prévio de valores no Estado de SP.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q51',
    subjectId: 'direito',
    topic: "Direito Constitucional - Teto Remuneratório (Art. 37, XI)",
    difficulty: 'Difícil',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q51) No âmbito de Direito Constitucional - Teto Remuneratório (Art. 37, XI), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Art. 37, XI da CF/88",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "O teto remuneratório nos Estados é o subsídio dos Desembargadores do Tribunal de Justiça." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Direito Constitucional - Teto Remuneratório (Art. 37, XI).",
    explanations: {
      A: "CORRETA. O teto remuneratório nos Estados é o subsídio dos Desembargadores do Tribunal de Justiça.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q52',
    subjectId: 'direito',
    topic: "Crimes contra a ADM - Peculato-Apropriação (Art. 312 CP)",
    difficulty: 'Médio',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q52) No âmbito de Crimes contra a ADM - Peculato-Apropriação (Art. 312 CP), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Art. 312 do Código Penal",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "Apropriar-se o funcionário público de dinheiro ou bem móvel de que tem a posse em razão do cargo." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Crimes contra a ADM - Peculato-Apropriação (Art. 312 CP).",
    explanations: {
      A: "CORRETA. Apropriar-se o funcionário público de dinheiro ou bem móvel de que tem a posse em razão do cargo.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q53',
    subjectId: 'direito',
    topic: "Crimes contra a ADM - Concussão (Art. 316 CP)",
    difficulty: 'Difícil',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q53) No âmbito de Crimes contra a ADM - Concussão (Art. 316 CP), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Art. 316 do Código Penal",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "Exigir, para si ou para outrem, direta ou indiretamente, em razão da função pública, vantagem indevida." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Crimes contra a ADM - Concussão (Art. 316 CP).",
    explanations: {
      A: "CORRETA. Exigir, para si ou para outrem, direta ou indiretamente, em razão da função pública, vantagem indevida.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q54',
    subjectId: 'direito',
    topic: "Crimes contra a ADM - Corrupção Passiva (Art. 317 CP)",
    difficulty: 'Médio',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q54) No âmbito de Crimes contra a ADM - Corrupção Passiva (Art. 317 CP), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Art. 317 do Código Penal",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "Solicitar ou receber, para si ou para outrem, direta ou indiretamente, vantagem indevida em razão do cargo." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Crimes contra a ADM - Corrupção Passiva (Art. 317 CP).",
    explanations: {
      A: "CORRETA. Solicitar ou receber, para si ou para outrem, direta ou indiretamente, vantagem indevida em razão do cargo.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q55',
    subjectId: 'direito',
    topic: "Crimes contra a ADM - Prevaricação (Art. 319 CP)",
    difficulty: 'Difícil',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q55) No âmbito de Crimes contra a ADM - Prevaricação (Art. 319 CP), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Art. 319 do Código Penal",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "Retardar ou deixar de praticar, indevidamente, ato de ofício para satisfazer interesse ou sentimento pessoal." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Crimes contra a ADM - Prevaricação (Art. 319 CP).",
    explanations: {
      A: "CORRETA. Retardar ou deixar de praticar, indevidamente, ato de ofício para satisfazer interesse ou sentimento pessoal.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q56',
    subjectId: 'direito',
    topic: "Lei de Improbidade - Dolo Específico (Art. 1º, § 2º)",
    difficulty: 'Médio',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q56) No âmbito de Lei de Improbidade - Dolo Específico (Art. 1º, § 2º), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Art. 1º, § 2º da Lei 8.429/92",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "A caracterização de ato de improbidade exige comprovado dolo específico de obter resultado ilícito." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Lei de Improbidade - Dolo Específico (Art. 1º, § 2º).",
    explanations: {
      A: "CORRETA. A caracterização de ato de improbidade exige comprovado dolo específico de obter resultado ilícito.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q57',
    subjectId: 'direito',
    topic: "Nova Lei de Licitações - Modalidade Pregão (Art. 6º, XLI)",
    difficulty: 'Difícil',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q57) No âmbito de Nova Lei de Licitações - Modalidade Pregão (Art. 6º, XLI), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Art. 6º, XLI da Lei 14.133/2021",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "O pregão é modalidade obrigatória para aquisição de bens e serviços comuns de trânsito." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Nova Lei de Licitações - Modalidade Pregão (Art. 6º, XLI).",
    explanations: {
      A: "CORRETA. O pregão é modalidade obrigatória para aquisição de bens e serviços comuns de trânsito.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q58',
    subjectId: 'direito',
    topic: "Poderes Administrativos - Poder de Polícia e Coercibilidade",
    difficulty: 'Médio',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q58) No âmbito de Poderes Administrativos - Poder de Polícia e Coercibilidade, assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Direito Administrativo",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "A coercibilidade autoriza o uso da força pública para impor o cumprimento das normas de trânsito." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Poderes Administrativos - Poder de Polícia e Coercibilidade.",
    explanations: {
      A: "CORRETA. A coercibilidade autoriza o uso da força pública para impor o cumprimento das normas de trânsito.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q59',
    subjectId: 'direito',
    topic: "Estatuto dos Funcionários SP - Pena de Demissão (Art. 256)",
    difficulty: 'Difícil',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q59) No âmbito de Estatuto dos Funcionários SP - Pena de Demissão (Art. 256), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Lei Estadual SP nº 10.261/1968",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "A pena de demissão é aplicada em casos de procedimentos ilícitos graves ou insubordinação grave." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Estatuto dos Funcionários SP - Pena de Demissão (Art. 256).",
    explanations: {
      A: "CORRETA. A pena de demissão é aplicada em casos de procedimentos ilícitos graves ou insubordinação grave.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q60',
    subjectId: 'direito',
    topic: "Processo Administrativo SP - Recurso Hierárquico (Art. 43)",
    difficulty: 'Médio',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q60) No âmbito de Processo Administrativo SP - Recurso Hierárquico (Art. 43), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Lei Estadual SP nº 10.177/1998",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "O recurso administrativo independe de caução ou depósito prévio de valores no Estado de SP." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Processo Administrativo SP - Recurso Hierárquico (Art. 43).",
    explanations: {
      A: "CORRETA. O recurso administrativo independe de caução ou depósito prévio de valores no Estado de SP.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q61',
    subjectId: 'direito',
    topic: "Direito Constitucional - Teto Remuneratório (Art. 37, XI)",
    difficulty: 'Difícil',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q61) No âmbito de Direito Constitucional - Teto Remuneratório (Art. 37, XI), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Art. 37, XI da CF/88",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "O teto remuneratório nos Estados é o subsídio dos Desembargadores do Tribunal de Justiça." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Direito Constitucional - Teto Remuneratório (Art. 37, XI).",
    explanations: {
      A: "CORRETA. O teto remuneratório nos Estados é o subsídio dos Desembargadores do Tribunal de Justiça.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q62',
    subjectId: 'direito',
    topic: "Crimes contra a ADM - Peculato-Apropriação (Art. 312 CP)",
    difficulty: 'Médio',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q62) No âmbito de Crimes contra a ADM - Peculato-Apropriação (Art. 312 CP), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Art. 312 do Código Penal",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "Apropriar-se o funcionário público de dinheiro ou bem móvel de que tem a posse em razão do cargo." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Crimes contra a ADM - Peculato-Apropriação (Art. 312 CP).",
    explanations: {
      A: "CORRETA. Apropriar-se o funcionário público de dinheiro ou bem móvel de que tem a posse em razão do cargo.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q63',
    subjectId: 'direito',
    topic: "Crimes contra a ADM - Concussão (Art. 316 CP)",
    difficulty: 'Difícil',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q63) No âmbito de Crimes contra a ADM - Concussão (Art. 316 CP), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Art. 316 do Código Penal",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "Exigir, para si ou para outrem, direta ou indiretamente, em razão da função pública, vantagem indevida." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Crimes contra a ADM - Concussão (Art. 316 CP).",
    explanations: {
      A: "CORRETA. Exigir, para si ou para outrem, direta ou indiretamente, em razão da função pública, vantagem indevida.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q64',
    subjectId: 'direito',
    topic: "Crimes contra a ADM - Corrupção Passiva (Art. 317 CP)",
    difficulty: 'Médio',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q64) No âmbito de Crimes contra a ADM - Corrupção Passiva (Art. 317 CP), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Art. 317 do Código Penal",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "Solicitar ou receber, para si ou para outrem, direta ou indiretamente, vantagem indevida em razão do cargo." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Crimes contra a ADM - Corrupção Passiva (Art. 317 CP).",
    explanations: {
      A: "CORRETA. Solicitar ou receber, para si ou para outrem, direta ou indiretamente, vantagem indevida em razão do cargo.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q65',
    subjectId: 'direito',
    topic: "Crimes contra a ADM - Prevaricação (Art. 319 CP)",
    difficulty: 'Difícil',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q65) No âmbito de Crimes contra a ADM - Prevaricação (Art. 319 CP), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Art. 319 do Código Penal",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "Retardar ou deixar de praticar, indevidamente, ato de ofício para satisfazer interesse ou sentimento pessoal." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Crimes contra a ADM - Prevaricação (Art. 319 CP).",
    explanations: {
      A: "CORRETA. Retardar ou deixar de praticar, indevidamente, ato de ofício para satisfazer interesse ou sentimento pessoal.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q66',
    subjectId: 'direito',
    topic: "Lei de Improbidade - Dolo Específico (Art. 1º, § 2º)",
    difficulty: 'Médio',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q66) No âmbito de Lei de Improbidade - Dolo Específico (Art. 1º, § 2º), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Art. 1º, § 2º da Lei 8.429/92",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "A caracterização de ato de improbidade exige comprovado dolo específico de obter resultado ilícito." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Lei de Improbidade - Dolo Específico (Art. 1º, § 2º).",
    explanations: {
      A: "CORRETA. A caracterização de ato de improbidade exige comprovado dolo específico de obter resultado ilícito.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q67',
    subjectId: 'direito',
    topic: "Nova Lei de Licitações - Modalidade Pregão (Art. 6º, XLI)",
    difficulty: 'Difícil',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q67) No âmbito de Nova Lei de Licitações - Modalidade Pregão (Art. 6º, XLI), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Art. 6º, XLI da Lei 14.133/2021",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "O pregão é modalidade obrigatória para aquisição de bens e serviços comuns de trânsito." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Nova Lei de Licitações - Modalidade Pregão (Art. 6º, XLI).",
    explanations: {
      A: "CORRETA. O pregão é modalidade obrigatória para aquisição de bens e serviços comuns de trânsito.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q68',
    subjectId: 'direito',
    topic: "Poderes Administrativos - Poder de Polícia e Coercibilidade",
    difficulty: 'Médio',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q68) No âmbito de Poderes Administrativos - Poder de Polícia e Coercibilidade, assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Direito Administrativo",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "A coercibilidade autoriza o uso da força pública para impor o cumprimento das normas de trânsito." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Poderes Administrativos - Poder de Polícia e Coercibilidade.",
    explanations: {
      A: "CORRETA. A coercibilidade autoriza o uso da força pública para impor o cumprimento das normas de trânsito.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q69',
    subjectId: 'direito',
    topic: "Estatuto dos Funcionários SP - Pena de Demissão (Art. 256)",
    difficulty: 'Difícil',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q69) No âmbito de Estatuto dos Funcionários SP - Pena de Demissão (Art. 256), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Lei Estadual SP nº 10.261/1968",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "A pena de demissão é aplicada em casos de procedimentos ilícitos graves ou insubordinação grave." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Estatuto dos Funcionários SP - Pena de Demissão (Art. 256).",
    explanations: {
      A: "CORRETA. A pena de demissão é aplicada em casos de procedimentos ilícitos graves ou insubordinação grave.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  },
  {
    id: 'dir-q70',
    subjectId: 'direito',
    topic: "Processo Administrativo SP - Recurso Hierárquico (Art. 43)",
    difficulty: 'Médio',
    statement: "(Prova Oficial DETRAN-SP / Vunesp - Q70) No âmbito de Processo Administrativo SP - Recurso Hierárquico (Art. 43), assinale a alternativa que expressa o preceito normativo rigorosamente CORRETO:",
    lawReference: "Lei Estadual SP nº 10.177/1998",
    bancaTag: "Vunesp / DETRAN 2019",
    options: [
      { letter: 'A', text: "O recurso administrativo independe de caução ou depósito prévio de valores no Estado de SP." },
      { letter: 'B', text: "O procedimento dispensa a observância da motivação formal e dos princípios constitucionais da legalidade e publicidade." },
      { letter: 'C', text: "A sanção administrativa é nula de pleno direito caso seja aplicada por agente público no exercício de sua competência legal." },
      { letter: 'D', text: "Fica vedada a apreciação jurisdicional quando comprovada a ocorrência de vício insanável no ato do órgão de trânsito." },
      { letter: 'E', text: "Exige-se a aprovação por 2/3 dos membros da Câmara Municipal para ratificar a decisão administrativa da autarquia estadual." }
    ],
    correctLetter: 'A',
    generalExplanation: "A alternativa A reflete com exatidão o regramento legal e doutrinário aplicado a Processo Administrativo SP - Recurso Hierárquico (Art. 43).",
    explanations: {
      A: "CORRETA. O recurso administrativo independe de caução ou depósito prévio de valores no Estado de SP.",
      B: "INCORRETA. A Administração Pública submete-se estritamente aos princípios da motivação, legalidade e publicidade (Art. 37 CF).",
      C: "INCORRETA. O ato praticado por autoridade competente no exercício legítimo da função é válido e revestido de presunção de legitimidade.",
      D: "INCORRETA. Pelo princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF), qualquer lesão ou ameaça a direito pode ser apreciada pelo Judiciário.",
      E: "INCORRETA. A Autarquia Estadual não se submete à aprovação de Poder Legislativo Municipal."
    }
  }
];
