import { Question } from '../../types';

export const direitoQuestions: Question[] = [
  {
    id: 'dir-q01',
    subjectId: 'direito',
    topic: 'Ordem Econômica e Planejamento Estatal (Art. 174 CF/88)',
    difficulty: 'Difícil',
    statement: '(Prova Real DETRAN-SP / FCC Q15) À luz do que dispõe a Constituição Federal de 1988 acerca da ordem econômica e financeira (Art. 174), como agente normativo e regulador da atividade econômica, o Estado exercerá, na forma da lei, as funções de fiscalização, incentivo e planejamento, sendo este:',
    lawReference: 'Art. 174 da CF/88',
    bancaTag: 'Prova Oficial DETRAN-SP - FCC Q15',
    options: [
      { letter: 'A', text: 'Obrigatório para o setor privado e facultativo para o setor público.' },
      { letter: 'B', text: 'Determinante para o setor público e indicativo para o setor privado.' },
      { letter: 'C', text: 'Facultativo tanto para o setor público quanto para o setor privado.' },
      { letter: 'D', text: 'Determinante tanto para o setor público como para o privado.' },
      { letter: 'E', text: 'Indicativo para o setor público e nulo para o privado.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'O Art. 174 da CF/88 estabelece taxativamente que o planejamento estatal é DETERMINANTE para o setor público e INDICATIVO para o setor privado.',
    explanations: {
      A: 'INCORRETA. Inverteu o caráter coercitivo do planejamento estatal.',
      B: 'CORRETA. Art. 174 da CF/88: "sendo o planejamento determinante para o setor público e indicativo para o setor privado".',
      C: 'INCORRETA. Para o Estado o planejamento é cogente e determinante.',
      D: 'INCORRETA. A livre iniciativa privada impede que o planejamento seja imposição coercitiva vinculante.',
      E: 'INCORRETA. Para o setor público tem caráter determinante.'
    }
  },
  {
    id: 'dir-q02',
    subjectId: 'direito',
    topic: 'Responsabilidade Civil de Concessionárias de Serviço Público (Art. 37 §6º CF/88)',
    difficulty: 'Difícil',
    statement: '(Prova Real DETRAN-SP / FCC Q20) Em uma rodovia estadual cuja exploração é feita mediante contrato de concessão de serviço público, um veículo particular sofreu um acidente grave causado por um buraco não sinalizado na pista em obras. As vítimas que sofreram danos materiais e físicos podem:',
    lawReference: 'Art. 37, § 6º da CF/88 e Jurisprudência do STF',
    bancaTag: 'Prova Oficial DETRAN-SP - FCC Q20',
    options: [
      { letter: 'A', text: 'Deduzir pleito indenizatório em face da concessionária de serviço público, respondendo esta sob a modalidade de responsabilidade objetiva.' },
      { letter: 'B', text: 'Apresentar ação de indenização sob a modalidade subjetiva exclusivamente contra a empreiteira contratada.' },
      { letter: 'C', text: 'Exigir indenização apenas se provada a culpa individual do engenheiro da obra.' },
      { letter: 'D', text: 'Buscar reparo junto ao Poder Concedente apenas se a concessionária falir.' },
      { letter: 'E', text: 'Processar criminalmente o fiscal do DETRAN-SP por omissão de socorro.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Art. 37, § 6º da CF/88: As pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos (concessionárias) responderão pelos danos que seus agentes, nessa qualidade, causarem a terceiros (RESPONSABILIDADE OBJETIVA), assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa.',
    explanations: {
      A: 'CORRETA. A concessionária prestadora do serviço público responde objetivamente pelos danos decorrentes da má conservação/sinalização da rodovia.',
      B: 'INCORRETA. A responsabilidade é objetiva (independe de culpa subjetiva).',
      C: 'INCORRETA. Dispensa a comprovação de culpa individual de prepostos.',
      D: 'INCORRETA. A concessionária responde diretamente perante o usuário lesado.',
      E: 'INCORRETA. Ação civil de reparação por danos materiais e morais.'
    }
  },
  {
    id: 'dir-q03',
    subjectId: 'direito',
    topic: 'Princípios da Administração Pública (Art. 37 caput CF/88)',
    difficulty: 'Fácil',
    statement: 'Os princípios expressos da Administração Pública Direta e Indireta de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios, previstos no Art. 37, caput da Constituição Federal (Mnemônico LIMPE), são:',
    lawReference: 'Art. 37, caput da CF/88',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência.' },
      { letter: 'B', text: 'Legalidade, Interesse Público, Motivação, Proporcionalidade e Eficiência.' },
      { letter: 'C', text: 'Liberdade, Igualdade, Moralidade, Proteção e Eficiência.' },
      { letter: 'D', text: 'Legalidade, Isonomia, Moderabilidade, Probidade e Eficácia.' },
      { letter: 'E', text: 'Legitimidade, Imparcialidade, Moralidade, Publicidade e Economicidade.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Art. 37, caput da CF/88: A administração pública direta e indireta obedecerá aos princípios de Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência (LIMPE).',
    explanations: {
      A: 'CORRETA. Mnemônico clássico LIMPE do Art. 37 da CF/88.',
      B: 'INCORRETA. Apresenta princípios implícitos da Lei de Processo Administrativo.',
      C: 'INCORRETA. Não são os princípios expressos do caput do Art. 37.',
      D: 'INCORRETA. Não correspondem à redação constitucional.',
      E: 'INCORRETA. Não correspondem à redação constitucional.'
    }
  },
  {
    id: 'dir-q04',
    subjectId: 'direito',
    topic: 'Segurança Viária na Constituição Federal (Art. 144 §10)',
    difficulty: 'Médio',
    statement: 'A Segurança Viária foi expressamente incluída no Capítulo da Segurança Pública da Constituição Federal (Art. 144, § 10) pela Emenda Constitucional nº 82/2014. Sobre a Segurança Viária, é INCORRETO afirmar:',
    lawReference: 'Art. 144, § 10 da CF/88',
    bancaTag: 'FCC / Avalia 2026',
    options: [
      { letter: 'A', text: 'Compreende a educação, engenharia e fiscalização de trânsito, assegurando ao cidadão o direito à mobilidade urbana segura.' },
      { letter: 'B', text: 'Compete, no âmbito dos Estados, do Distrito Federal e dos Municípios, aos respectivos órgãos ou entidades executivas e seus agentes de trânsito.' },
      { letter: 'C', text: 'A estrutura das carreiras dos agentes públicos de trânsito é organizada em lei pelos respectivos entes federativos.' },
      { letter: 'D', text: 'A Segurança Viária é competência privativa e exclusiva da Polícia Federal.' },
      { letter: 'E', text: 'Os agentes de trânsito desempenham atividade essencial para a preservação da ordem pública e da incolumidade das pessoas.' }
    ],
    correctLetter: 'D',
    generalExplanation: 'Art. 144, § 10 da CF/88: A segurança viária é exercida pelos órgãos executivos de trânsito e seus agentes nos âmbitos estadual, distrital e municipal, e não com exclusividade pela Polícia Federal.',
    explanations: {
      A: 'AFIRMATIVA VERDADEIRA. Art. 144, § 10, I.',
      B: 'AFIRMATIVA VERDADEIRA. Art. 144, § 10, II.',
      C: 'AFIRMATIVA VERDADEIRA. Art. 144, § 10, parágrafo único.',
      D: 'INCORRETA / OPCÃO A SER ASSINALADA. A segurança viária não é privativa da Polícia Federal, mas sim dos órgãos executivos de trânsito dos Estados, DF e Municípios.',
      E: 'AFIRMATIVA VERDADEIRA. Redação do caput do § 10.'
    }
  },
  {
    id: 'dir-q05',
    subjectId: 'direito',
    topic: 'Atributos dos Atos Administrativos (PATI)',
    difficulty: 'Médio',
    statement: 'Qual atributo do ato administrativo permite que a Administração Pública execute diretamente suas próprias decisões coercitivas (como a remoção de um veículo que bloqueia um cruzamento), sem necessidade de autorização judicial prévia?',
    lawReference: 'Teoria dos Atos Administrativos',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Presunção de Legitimidade.' },
      { letter: 'B', text: 'Autoexecutoriedade.' },
      { letter: 'C', text: 'Tipicidade.' },
      { letter: 'D', text: 'Imperatividade.' },
      { letter: 'E', text: 'Descricionariedade.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'AUTOEXECUTORIEDADE é o atributo pelo qual o ato administrativo pode ser posto em execução direta pela própria Administração Pública, inclusive mediante o uso de força material preventiva/coercitiva (ex: remoção de veículo em local proibido), sem precisar recorrer previamente ao Poder Judiciário.',
    explanations: {
      A: 'INCORRETA. Presunção de Legitimidade presume que o ato foi praticado conforme a lei.',
      B: 'CORRETA. Autoexecutoriedade permite a execução material direta de medidas urgentes pela própria administração.',
      C: 'INCORRETA. Tipicidade exige que o ato corresponda a figuras previamente definidas em lei.',
      D: 'INCORRETA. Imperatividade impõe deveres a terceiros independentemente de concordância.',
      E: 'INCORRETA. Discrecionariedade é a margem de escolha no ato.'
    }
  },
  {
    id: 'dir-q06',
    subjectId: 'direito',
    topic: 'Poder de Polícia Administrativo',
    difficulty: 'Médio',
    statement: 'A atividade da administração pública que, limitando ou disciplinando direito, interesse ou liberdade, regula a prática de ato ou abstenção de fato, em razão de interesse público concernente à segurança, à higiene e ao trânsito, denomina-se:',
    lawReference: 'Art. 78 do Código Tributário Nacional & Direito Adm.',
    bancaTag: 'FCC / Vunesp',
    options: [
      { letter: 'A', text: 'Poder Hierárquico.' },
      { letter: 'B', text: 'Poder Disciplinar.' },
      { letter: 'C', text: 'Poder de Polícia.' },
      { letter: 'D', text: 'Poder Regulamentar.' },
      { letter: 'E', text: 'Poder Vinculado.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'Definição clássica de PODER DE POLÍCIA (Art. 78 do CTN): Atividade estatal que condiciona, limita ou restringe o exercício de direitos e atividades individuais em prol do bem-estar e da segurança coletiva (ex: fiscalizar habilitação, aplicar multas, proibir estacionamento).',
    explanations: {
      A: 'INCORRETA. Poder Hierárquico distribui e escala funções internamente no órgão.',
      B: 'INCORRETA. Poder Disciplinar pune infrações internas de servidores ou contratados.',
      C: 'CORRETA. Poder de Polícia limita direitos individuais para proteção do interesse público.',
      D: 'INCORRETA. Poder Regulamentar edita decretos para fiel execução da lei.',
      E: 'INCORRETA. Poder Vinculado é a ausência de margem de escolha.'
    }
  },
  {
    id: 'dir-q07',
    subjectId: 'direito',
    topic: 'Lei de Improbidade Administrativa (Lei 8.429/92 alterada pela 14.230/21)',
    difficulty: 'Difícil',
    statement: 'Com as alterações promovidas pela Lei Federal nº 14.230/2021 na Lei de Improbidade Administrativa (Lei nº 8.429/1992), a caracterização de QUALQUER ato de improbidade administrativa exige obrigatoriamente a comprovação de:',
    lawReference: 'Lei 8.429/1992, Art. 1º, § 1º e § 2º',
    bancaTag: 'Vunesp / Avalia 2026',
    options: [
      { letter: 'A', text: 'Dolo específico (vontade livre e consciente de alcançar o resultado ilícito tipificado em lei).' },
      { letter: 'B', text: 'Mera culpa grave ou negligência funcional.' },
      { letter: 'C', text: 'Prejuízo financeiro direto superior a R$ 1.000.000,00.' },
      { letter: 'D', text: 'Condenação penal transitada em julgado.' },
      { letter: 'E', text: 'Perda do cargo público em processo sumário.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A Lei 14.230/2021 extinguiu a modalidade culposa de improbidade administrativa. Atualmente, TODOS os atos de improbidade (Arts. 9º, 10 e 11) exigem a comprovação de DOLO ESPECÍFICO (a vontade livre e consciente de praticar a conduta ilícita descrita na lei).',
    explanations: {
      A: 'CORRETA. Exigência constitucional e legal expressa de Dolo Específico pós-Lei 14.230/2021.',
      B: 'INCORRETA. A improbidade culposa foi expressamente revogada do ordenamento jurídico.',
      C: 'INCORRETA. Não há valor mínimo fixado para configuração do ato.',
      D: 'INCORRETA. As esferas civil/administrativa e penal são independentes.',
      E: 'INCORRETA. Sanções são aplicadas via Ação Civil Pública de Improbidade.'
    }
  },
  {
    id: 'dir-q08',
    subjectId: 'direito',
    topic: 'Tipos de Atos de Improbidade - Enriquecimento Ilícito (Art. 9º)',
    difficulty: 'Médio',
    statement: 'Receber um agente público do DETRAN-SP propina ou vantagem patrimonial indevida para deixar de lavrar auto de infração de trânsito constitui ato de improbidade administrativa que:',
    lawReference: 'Lei 8.429/1992, Art. 9º, I',
    bancaTag: 'FCC / Vunesp',
    options: [
      { letter: 'A', text: 'Importa Enriquecimento Ilícito (Art. 9º).' },
      { letter: 'B', text: 'Causa tão somente Lesão ao Erário sem qualquer ilícito pessoal.' },
      { letter: 'C', text: 'Atenta contra os princípios sem repercussão patrimonial.' },
      { letter: 'D', text: 'Constitui mera falta ética disciplinar isenta de punição judicial.' },
      { letter: 'E', text: 'É ato totalmente atípico segundo a reforma da Lei 14.230/21.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Art. 9º, I da Lei 8.429/92: Constitui ato de improbidade que importa ENRIQUECIMENTO ILÍCITO receber dinheiro, vantagem ou presente para fazer ou omitir ato de oficio na administração pública.',
    explanations: {
      A: 'CORRETA. Enquadramento no Art. 9º da LIA (Enriquecimento Ilícito - sanção mais grave da lei).',
      B: 'INCORRETA. O foco central do tipo é o enriquecimento ilícito do agente.',
      C: 'INCORRETA. Envolve acréscimo patrimonial ilícito direto ao agente.',
      D: 'INCORRETA. Constitui ato de improbidade e crime de corrupção passiva.',
      E: 'INCORRETA. É expressamente tipificado.'
    }
  },
  {
    id: 'dir-q09',
    subjectId: 'direito',
    topic: 'Processo Administrativo Estadual de SP (Lei 10.177/98) - Anulação x Revogação',
    difficulty: 'Difícil',
    statement: 'A Lei Estadual de São Paulo nº 10.177/1998 regula o processo administrativo no âmbito da Administração Pública Paulista. Acerca do dever de invalidação dos atos administrativos, assinale a afirmativa CORRETA:',
    lawReference: 'Lei Estadual SP 10.177/1998, Arts. 58 e 59',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'A Administração deve ANULAR seus próprios atos quando eivados de vício de legalidade, e pode REVOGAR os atos legítimos por motivo de conveniência ou oportunidade.' },
      { letter: 'B', text: 'A anulação produz efeitos ex nunc (não retroativos).' },
      { letter: 'C', text: 'A revogação pode ser decretada pelo Poder Judiciário em qualquer situação.' },
      { letter: 'D', text: 'Atos nulos com vício de legalidade podem ser mantidos se o servidor for simpático.' },
      { letter: 'E', text: 'O Poder Judiciário pode revogar atos administrativos por razões de mérito administrativo.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Princípio da Autotutela e Lei SP 10.177/98:\n- ANULAÇÃO: recai sobre atos ILEGAIS, produzindo efeitos retroativos (ex tunc). Pode ser feita pela Administração ou pelo Judiciário.\n- REVOGAÇÃO: recai sobre atos LEGAIS, por razões de conveniência e oportunidade (mérito), produzindo efeitos não retroativos (ex nunc). É EXCLUSIVA da Administração (o Judiciário não revoga ato do Executivo).',
    explanations: {
      A: 'CORRETA. Distinção clássica: Anulação para atos ilegais / Revogação para conveniência e oportunidade de atos legítimos.',
      B: 'INCORRETA. A anulação produz efeitos ex tunc (retroage à origem do ato ilegal).',
      C: 'INCORRETA. O Judiciário NUNCA revoga ato do Executivo por conveniência.',
      D: 'INCORRETA. Atos ilegais devem ser anulados.',
      E: 'INCORRETA. O Judiciário exerce apenas controle de legalidade, vedado o controle de mérito (revogação).'
    }
  },
  {
    id: 'dir-q10',
    subjectId: 'direito',
    topic: 'Lei de Acesso à Informação (LAI - Lei 12.527/11) - Prazos de Classificação',
    difficulty: 'Difícil',
    statement: 'Conforme a Lei de Acesso à Informação (LAI - Lei Federal nº 12.527/2011), as informações públicas passíveis de restrição de acesso podem ser classificadas quanto ao grau de sigilo nos prazos máximos de:',
    lawReference: 'Lei 12.527/2011, Art. 24',
    bancaTag: 'FCC / Avalia 2026',
    options: [
      { letter: 'A', text: 'Ultrassecreta (25 anos), Secreta (15 anos) e Reservada (5 anos).' },
      { letter: 'B', text: 'Ultrassecreta (50 anos), Secreta (30 anos) e Reservada (10 anos).' },
      { letter: 'C', text: 'Ultrassecreta (10 anos), Secreta (5 anos) e Reservada (2 anos).' },
      { letter: 'D', text: 'Ultrassecreta (30 anos), Secreta (20 anos) e Reservada (10 anos).' },
      { letter: 'E', text: 'Grau único de 10 anos para qualquer documento restrito.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Art. 24, § 1º da LAI (Lei 12.527/11) - Prazos máximos de restrição por classificação de sigilo:\n- ULTRASSECRETA: 25 anos (prorrogável 1 única vez por igual período);\n- SECRETA: 15 anos;\n- RESERVADA: 5 anos.',
    explanations: {
      A: 'CORRETA. Escala oficial da LAI: Ultrassecreta (25 anos), Secreta (15 anos) e Reservada (5 anos).',
      B: 'INCORRETA. Prazos inexistentes na lei.',
      C: 'INCORRETA. Prazos menores do que o texto legal.',
      D: 'INCORRETA. Prazos divergentes.',
      E: 'INCORRETA. A LAI prevê 3 graus distintos de sigilo.'
    }
  },
  {
    id: 'dir-q11',
    subjectId: 'direito',
    topic: 'Remédios Constitucionais - Habeas Data (Art. 5º LXXVII)',
    difficulty: 'Médio',
    statement: 'Para assegurar o conhecimento de informações relativas à pessoa do impetrante, constantes de bancos de dados de entidades governamentais ou de caráter público (como os registros de prontuário de CNH do DETRAN), quando recusadas administrativamente, o remédio constitucional cabível é o:',
    lawReference: 'Art. 5º, LXXII da CF/88',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Habeas Corpus.' },
      { letter: 'B', text: 'Mandado de Segurança.' },
      { letter: 'C', text: 'Habeas Data.' },
      { letter: 'D', text: 'Ação Popular.' },
      { letter: 'E', text: 'Mandado de Injunção.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'Art. 5º, LXXII da CF/88: Conceder-se-á HABEAS DATA:\na) para assegurar o conhecimento de informações relativas à pessoa do impetrante, constantes de registros ou bancos de dados de entidades governamentais ou de caráter público;\nb) para a retificação de dados.',
    explanations: {
      A: 'INCORRETA. Habeas Corpus tutela a liberdade de locomoção / ir e vir.',
      B: 'INCORRETA. Mandado de Segurança tutela direito líquido e certo não amparado por HC ou HD.',
      C: 'CORRETA. Habeas Data é a ação própria para acesso e retificação de informações pessoais em bancos de dados públicos.',
      D: 'INCORRETA. Ação Popular é movida por cidadão para anular ato lesivo ao patrimônio público/meio ambiente.',
      E: 'INCORRETA. Mandado de Injunção supre a ausência de norma regulamentadora.'
    }
  },
  {
    id: 'dir-q12',
    subjectId: 'direito',
    topic: 'Estabilidade no Serviço Público e Estágio Probatório (Art. 41 CF/88)',
    difficulty: 'Médio',
    statement: 'Nos termos do Art. 41 da CF/88, são estáveis após X anos de efetivo exercício os servidores nomeados para cargo de provimento efetivo em virtude de concurso público. Qual é o prazo X e o requisito indispensável para a aquisição dessa estabilidade?',
    lawReference: 'Art. 41 da CF/88',
    bancaTag: 'FCC / Vunesp',
    options: [
      { letter: 'A', text: '3 (três) anos de efetivo exercício e aprovação em avaliação especial de desempenho por comissão instituída para essa finalidade.' },
      { letter: 'B', text: '2 (dois) anos de efetivo exercício, sem necessidade de avaliação formal.' },
      { letter: 'C', text: '5 (cinco) anos de efetivo exercício e indicação política do Secretário.' },
      { letter: 'D', text: '1 (um) ano de efetivo exercício em qualquer tipo de cargo.' },
      { letter: 'E', text: '10 anos de efetivo exercício sem sanções disciplinares.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Art. 41 da CF/88: São estáveis após 3 (TRÊS) ANOS de efetivo exercício os servidores nomeados para cargo efetivo em virtude de concurso público. Como condição obrigatória para a aquisição da estabilidade, é obrigatória a avaliação especial de desempenho por comissão instituída para essa finalidade (§ 4º).',
    explanations: {
      A: 'CORRETA. Prazo de 3 anos + avaliação especial de desempenho compulsória.',
      B: 'INCORRETA. 2 anos era o prazo da redação original pré-Emenda 19/98.',
      C: 'INCORRETA. 5 anos não é o prazo de estabilidade e a indicação política é inconstitucional.',
      D: 'INCORRETA. Prazo de 1 ano é incorreto.',
      E: 'INCORRETA. Prazo de 10 anos é incorreto.'
    }
  },
  {
    id: 'dir-q13',
    subjectId: 'direito',
    topic: 'Acumulação Remunerada de Cargos Públicos (Art. 37 XVI CF/88)',
    difficulty: 'Médio',
    statement: 'A Constituição Federal estabelece como regra geral a VEDAÇÃO de acumulação remunerada de cargos públicos. É exceção constitucionalmente permitida, desde que haja compatibilidade de horários:',
    lawReference: 'Art. 37, XVI da CF/88',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'A de dois cargos de professor; a de um cargo de professor com outro técnico ou científico; e a de dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas.' },
      { letter: 'B', text: 'A de três cargos técnicos de agentes de trânsito.' },
      { letter: 'C', text: 'A de dois cargos administrativos em municípios diferentes.' },
      { letter: 'D', text: 'A de qualquer cargo público com o exercício de mandato de Prefeito sem afastamento.' },
      { letter: 'E', text: 'A de cargo efetivo com duas funções de confiança gratificadas.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Art. 37, XVI da CF/88 - Exceções taxativas à proibição de acumulação de cargos:\na) a de dois cargos de professor;\nb) a de um cargo de professor com outro técnico ou científico;\nc) a de dois cargos ou empregos privativos de profissionais de saúde com profissões regulamentadas.',
    explanations: {
      A: 'CORRETA. Rol taxativo das exceções constitucionais de acumulação lícita.',
      B: 'INCORRETA. Não é permitida a acumulação de 3 cargos.',
      C: 'INCORRETA. Cargos puramente administrativos não se acumulam.',
      D: 'INCORRETA. O mandato de Prefeito exige obrigatoriamente o afastamento do cargo efetivo (Art. 38, II).',
      E: 'INCORRETA. Não se acumulam duas funções de confiança.'
    }
  },
  {
    id: 'dir-q14',
    subjectId: 'direito',
    topic: 'Reintegração, Recondução e Readaptação (Art. 41 §2º CF/88)',
    difficulty: 'Difícil',
    statement: 'Quando a demissão de um servidor público estável é invalidada por decisão administrativa ou judicial, ele retornará ao seu cargo de origem, com ressarcimento de todos os direitos e vantagens. Esse instituto de provimento derivado denomina-se:',
    lawReference: 'Art. 41, § 2º da CF/88 e Direito Administrativo',
    bancaTag: 'FCC / Vunesp',
    options: [
      { letter: 'A', text: 'Reintegração.' },
      { letter: 'B', text: 'Recondução.' },
      { letter: 'C', text: 'Readaptação.' },
      { letter: 'D', text: 'Reversão.' },
      { letter: 'E', text: 'Aproveitamento.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Formas de provimento derivado no serviço público:\n- REINTEGRAÇÃO: retorno do servidor demitido ilegalmente, com ressarcimento total dos prejuízos.\n- RECONDUÇÃO: retorno do servidor estável ao cargo anterior em virtude de inabilitação em estágio probatório de outro cargo ou reintegração do antigo ocupante.\n- READAPTAÇÃO: investidura em cargo compatível com limitação física/mental sofrida.\n- REVERSÃO: retorno do aposentado.',
    explanations: {
      A: 'CORRETA. Reintegração é a anulação da demissão com retorno do servidor estável e indenização.',
      B: 'INCORRETA. Recondução é a volta por inabilitação em estágio probatório ou desocupação.',
      C: 'INCORRETA. Readaptação é por motivo de saúde.',
      D: 'INCORRETA. Reversão é a volta do aposentado.',
      E: 'INCORRETA. Aproveitamento é o retorno do servidor em disponibilidade.'
    }
  },
  {
    id: 'dir-q15',
    subjectId: 'direito',
    topic: 'Atos Administrativos - Elementos de Validade (COFIFOMOB)',
    difficulty: 'Médio',
    statement: 'São elementos ou requisitos constitutivos de validade do ato administrativo (Mnemônico COFIFOMOB):',
    lawReference: 'Teoria dos Atos Administrativos e Lei 4.717/65',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Competência, Finalidade, Forma, Motivo e Objeto.' },
      { letter: 'B', text: 'Conveniência, Oportunidade, Formatação, Motivação e Orçamento.' },
      { letter: 'C', text: 'Competência, Imperatividade, Autoexecutoriedade, Tipicidade e Legitimidade.' },
      { letter: 'D', text: 'Causa, Objeto, Função, Forma e Moralidade.' },
      { letter: 'E', text: 'Capacidade, Vontade, Licitude, Possibilidade e Forma.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Os 5 elementos/requisitos de validade de QUALQUER ato administrativo (Lei 4.717/65, Art. 2º) são:\n1) Competência;\n2) Finalidade;\n3) Forma;\n4) Motivo;\n5) Objeto.\n(Mnemônico CO FIF O MOB).',
    explanations: {
      A: 'CORRETA. Elementos de validade do ato administrativo (Competência, Finalidade, Forma, Motivo e Objeto).',
      B: 'INCORRETA. Misturou aspectos de mérito administrativo.',
      C: 'INCORRETA. Esses são atributos do ato administrativo (PATI).',
      D: 'INCORRETA. Conceitos incorretos.',
      E: 'INCORRETA. Requisitos do negócio jurídico civil.'
    }
  },
  {
    id: 'dir-q16',
    subjectId: 'direito',
    topic: 'Teoria dos Motivos Determinantes',
    difficulty: 'Difícil',
    statement: 'Conforme a Teoria dos Motivos Determinantes no Direito Administrativo:',
    lawReference: 'Doutrina de Direito Administrativo',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: 'A validade do ato administrativo fica vinculada à veracidade e à existência dos motivos alegados pela Administração para a sua prática, de modo que, se o motivo for FALSO ou INEXISTENTE, o ato será NULO.' },
      { letter: 'B', text: 'O administrador pode alegar qualquer motivo falso, pois os atos discricionários são imunes ao controle judicial.' },
      { letter: 'C', text: 'Os motivos do ato administrativo só precisam ser verdadeiros se o ato for assinado pelo Governador.' },
      { letter: 'D', text: 'A motivação é sempre facultativa nos atos vinculados.' },
      { letter: 'E', text: 'Motivo e motivação são termos idênticos que dispensam fundamentação em lei.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Pela Teoria dos Motivos Determinantes, quando a Administração fundamenta a prática de um ato (mesmo que discricionário), a validade do ato fica VINCULADA à veracidade dos motivos declarados. Se os motivos forem comprovadamente falsos ou inexistentes, o ato é nulo por vício de motivo.',
    explanations: {
      A: 'CORRETA. Enunciado perfeito da Teoria dos Motivos Determinantes.',
      B: 'INCORRETA. Atos com motivos falsos são nulos e passíveis de anulação pelo Judiciário.',
      C: 'INCORRETA. Aplica-se a qualquer autoridade administrativa.',
      D: 'INCORRETA. Atos vinculados exigem motivação expressa.',
      E: 'INCORRETA. Motivo é a situação de fato/direito; motivação é a sua demonstração por escrito no processo.'
    }
  },
  {
    id: 'dir-q17',
    subjectId: 'direito',
    topic: 'Poder Disciplinar vs Poder Hierárquico',
    difficulty: 'Médio',
    statement: 'A aplicação de uma sanção de suspensão por 15 dias a um servidor público do DETRAN-SP, após o devido Processo Administrativo Disciplinar (PAD), decorre diretamente do exercício do:',
    lawReference: 'Poderes Administrativos',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Poder Disciplinar (derivado do Poder Hierárquico).' },
      { letter: 'B', text: 'Poder de Polícia executado sobre o cidadão.' },
      { letter: 'C', text: 'Poder Regulamentar do Governador.' },
      { letter: 'D', text: 'Poder Legislativo Municipal.' },
      { letter: 'E', text: 'Poder Discricionário absoluto de polícia.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'PODER DISCIPLINAR é a prerrogativa conferida à Administração para apurar infrações e aplicar penalidades funcionais aos seus próprios servidores ou a particulares submetidos a vínculo estatutário/contratualmente específico com o Estado.',
    explanations: {
      A: 'CORRETA. Punir servidores internos por faltas funcionais é atribuição do Poder Disciplinar.',
      B: 'INCORRETA. Poder de polícia aplica-se à coletividade geral de cidadãos sem vínculo interno.',
      C: 'INCORRETA. Poder regulamentar edita normas gerais.',
      D: 'INCORRETA. Sem relação com a função legislativa municipal.',
      E: 'INCORRETA. A punição disciplinar é vinculada aos tipos previstos no Estatuto.'
    }
  },
  {
    id: 'dir-q18',
    subjectId: 'direito',
    topic: 'Improbidade Administrativa - Lesão ao Erário (Art. 10)',
    difficulty: 'Difícil',
    statement: 'Frustrar a licitude de processo licitatório ou de processo seletivo para celebração de parcerias com entidades sem fins lucrativos, acarretando perda patrimonial efetiva ao DETRAN-SP, configura ato de improbidade administrativa que:',
    lawReference: 'Lei 8.429/1992, Art. 10, VIII',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'Causa Lesão ao Erário (Art. 10 da Lei 8.429/92).' },
      { letter: 'B', text: 'Constitui infração de trânsito de natureza grave.' },
      { letter: 'C', text: 'Constitui falta de decoro parlamentar.' },
      { letter: 'D', text: 'É ilícito meramente tributário punido com multa de trânsito.' },
      { letter: 'E', text: 'Foi descriminalizado e perdoado pela legislação.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Art. 10, VIII da Lei 8.429/92: Constitui ato de improbidade administrativa que causa LESÃO AO ERÁRIO (Art. 10) frustrar a licitude de processo licitatório ou de processo seletivo, exigindo a comprovação de dolo e de efetivo prejuízo patrimonial.',
    explanations: {
      A: 'CORRETA. Enquadramento no Art. 10 da Lei de Improbidade (Lesão ao Erário).',
      B: 'INCORRETA. Trata-se de ilícito civil-administrativo grave da LIA.',
      C: 'INCORRETA. Decoro parlamentar aplica-se a deputados/vereadores.',
      D: 'INCORRETA. Não tem relação com tributos.',
      E: 'INCORRETA. Permanece expressamente tipificado.'
    }
  },
  {
    id: 'dir-q19',
    subjectId: 'direito',
    topic: 'Prescrição das Ações de Improbidade (Art. 23 da Lei 8.429/92)',
    difficulty: 'Difícil',
    statement: 'Com a nova redação dada pela Lei nº 14.230/2021 ao Art. 23 da Lei de Improbidade Administrativa, qual é o PRAZO PRESCRICIONAL para a propositura da ação de improbidade administrativa a contar da data do fato?',
    lawReference: 'Lei 8.429/1992, Art. 23',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: '8 (oito) anos.' },
      { letter: 'B', text: '5 (cinco) anos.' },
      { letter: 'C', text: '10 (dez) anos.' },
      { letter: 'D', text: '2 (dois) anos.' },
      { letter: 'E', text: 'Imprescritível em qualquer hipótese.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Art. 23 da Lei 8.429/1992 (redação da Lei 14.230/2021): A ação para a aplicação das sanções de improbidade prescreve em 8 (OITO) ANOS, contados a partir da data da prática do ato ou, no caso de infrações permanentes, do dia em que cessou a permanência.',
    explanations: {
      A: 'CORRETA. O novo prazo prescricional unificado da LIA é de 8 anos a contar do fato.',
      B: 'INCORRETA. 5 anos era o prazo da regra antiga após o fim do mandato.',
      C: 'INCORRETA. 10 anos era o prazo geral do Código Civil.',
      D: 'INCORRETA. 2 anos é prazo de recurso.',
      E: 'INCORRETA. O STF definiu que a ação de ressarcimento por dolo é imprescritível, mas a ação de sanção de improbidade prescreve em 8 anos.'
    }
  },
  {
    id: 'dir-q20',
    subjectId: 'direito',
    topic: 'Lei de Acesso à Informação (LAI - Lei 12.527/11) - Prazo de Resposta',
    difficulty: 'Médio',
    statement: 'Se o órgão público não puder conceder o acesso imediato à informação solicitada pelo cidadão nos termos da Lei de Acesso à Informação (Lei 12.527/2011), ele deverá responder ao pedido no prazo máximo de:',
    lawReference: 'Lei 12.527/2011, Art. 11, § 1º',
    bancaTag: 'FCC / Vunesp',
    options: [
      { letter: 'A', text: '20 (vinte) dias, prorrogável por mais 10 (dez) dias mediante justificativa expressa.' },
      { letter: 'B', text: '10 (dez) dias improrrogáveis.' },
      { letter: 'C', text: '30 (trinta) dias sem possibilidade de prorrogação.' },
      { letter: 'D', text: '5 (cinco) dias úteis.' },
      { letter: 'E', text: '60 (sessenta) dias.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Art. 11, § 1º da LAI (Lei 12.527/11): Não sendo possível conceder o acesso imediato, o órgão deve responder no prazo de ATÉ 20 (VINTE) DIAS, podendo este prazo ser prorrogado por mais 10 (dez) dias, mediante justificativa expressa.',
    explanations: {
      A: 'CORRETA. Prazo oficial da LAI: 20 dias + 10 dias de prorrogação motivada.',
      B: 'INCORRETA. O prazo inicial é 20 dias.',
      C: 'INCORRETA. É permitida a prorrogação por 10 dias.',
      D: 'INCORRETA. Prazo de 5 dias é incorreto.',
      E: 'INCORRETA. Prazo incorreto.'
    }
  },
  {
    id: 'dir-q21',
    subjectId: 'direito',
    topic: 'Inviolabilidade do Domicílio (Art. 5º XI da CF/88)',
    difficulty: 'Médio',
    statement: 'Nos termos do Art. 5º, XI da Constituição Federal, a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, SALVO:',
    lawReference: 'Art. 5º, XI da CF/88',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.' },
      { letter: 'B', text: 'A qualquer hora da noite, mediante ordem da autoridade policial.' },
      { letter: 'C', text: 'Para cobrança de tributos municipais atrasados durante a noite.' },
      { letter: 'D', text: 'Por determinação judicial cumprida a qualquer hora do dia ou da noite.' },
      { letter: 'E', text: 'Apenas com autorização expressa do Prefeito.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Art. 5º, XI da CF/88: A casa é asilo inviolável, ninguém nela podendo penetrar sem consentimento do morador, salvo:\n1) Flagrante delito (dia ou noite);\n2) Desastre (dia ou noite);\n3) Para prestar socorro (dia ou noite);\n4) Durante o dia, por DETERMINAÇÃO JUDICIAL.',
    explanations: {
      A: 'CORRETA. Redação exata das ressalvas constitucionais do Art. 5º, XI.',
      B: 'INCORRETA. Ordem policial não supre a exigência de mandado judicial diurno.',
      C: 'INCORRETA. Cobrança de tributo não autoriza invasão de domicílio.',
      D: 'INCORRETA. Ordem judicial só pode ser cumprida DURANTE O DIA.',
      E: 'INCORRETA. Prefeito não possui competência jurisdicional.'
    }
  },
  {
    id: 'dir-q22',
    subjectId: 'direito',
    topic: 'Sigilo de Correspondência e Comunicações (Art. 5º XII da CF/88)',
    difficulty: 'Difícil',
    statement: 'A quebra do sigilo das comunicações TELEFÔNICAS (escuta/interceptação telefônica), nos termos do Art. 5º, XII da CF/88, só pode ser autorizada:',
    lawReference: 'Art. 5º, XII da CF/88 e Lei 9.296/96',
    bancaTag: 'FCC / Vunesp',
    options: [
      { letter: 'A', text: 'Por ordem judicial, nas hipóteses e na forma que a lei estabelecer para fins de investigação criminal ou instrução processual penal.' },
      { letter: 'B', text: 'Por ordem de qualquer agente de trânsito em fiscalização de rotina.' },
      { letter: 'C', text: 'Por decisão do Diretor do DETRAN em processo administrativo.' },
      { letter: 'D', text: 'Por determinação da Receita Federal para apuração de débitos fiscais.' },
      { letter: 'E', text: 'Por requerimento de qualquer cidadão em ação popular.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Art. 5º, XII da CF/88: A interceptação telefônica é submetida à RESERVA DE JURISDIÇÃO ABSOLUTA, exigindo ordem de JUIZ DE DIREITO, exclusivamente para fins de investigação criminal ou instrução processual penal.',
    explanations: {
      A: 'CORRETA. Reserva constitucional de jurisdição para fins penais.',
      B: 'INCORRETA. Agente de trânsito não possui poder jurisdicional.',
      C: 'INCORRETA. Processo administrativo não autoriza interceptação telefônica.',
      D: 'INCORRETA. Sigilo bancário/fiscal tem regras próprias, mas telefônico exige investigação criminal.',
      E: 'INCORRETA. Sem relação com a Ação Popular.'
    }
  },
  {
    id: 'dir-q23',
    subjectId: 'direito',
    topic: 'Remédios Constitucionais - Mandado de Segurança (Art. 5º LXIX)',
    difficulty: 'Médio',
    statement: 'Conceder-se-á MANDADO DE SEGURANÇA para proteger direito líquido e certo, não amparado por habeas corpus ou habeas data, quando o responsável pela ilegalidade ou abuso de poder for:',
    lawReference: 'Art. 5º, LXIX da CF/88 e Lei 12.016/09',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Autoridade pública ou agente de pessoa jurídica no exercício de atribuições do Poder Público.' },
      { letter: 'B', text: 'Exclusivamente o Presidente da República.' },
      { letter: 'C', text: 'Qualquer cidadão particular em litígio de vizinhança.' },
      { letter: 'D', text: 'Apenas magistrados do Supremo Tribunal Federal.' },
      { letter: 'E', text: 'Empresas privadas em concorrência comercial sem contrato com o Estado.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Art. 5º, LXIX da CF/88: O Mandado de Segurança protege direito líquido e certo (comprovado mediante prova documental pré-constituída) contra ato ilegal ou praticado com abuso de poder por autoridade pública ou agente de pessoa jurídica no exercício de funções públicas.',
    explanations: {
      A: 'CORRETA. Enunciado perfeito do Art. 5º, LXIX da CF/88.',
      B: 'INCORRETA. Cabe contra qualquer autoridade pública (ex: Diretor do DETRAN).',
      C: 'INCORRETA. Não cabe contra particulares em negócios privados sem função delegada.',
      D: 'INCORRETA. Cabe contra diversas autoridades.',
      E: 'INCORRETA. Exige exercício de atribuição do Poder Público.'
    }
  },
  {
    id: 'dir-q24',
    subjectId: 'direito',
    topic: 'Ação Popular (Art. 5º LXXIII da CF/88)',
    difficulty: 'Médio',
    statement: 'Qualquer CIDADÃO é parte legítima para propor AÇÃO POPULAR que vise a anular ato lesivo ao patrimônio público ou de entidade de que o Estado participe, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural. Para demonstrar a condição de cidadão, exige-se do autor a comprovação de:',
    lawReference: 'Art. 5º, LXXIII da CF/88 e Lei 4.717/65',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: 'Título de Eleitor (estar no gozo dos direitos políticos).' },
      { letter: 'B', text: 'Diploma de curso superior de Direito.' },
      { letter: 'C', text: 'Patrimônio financeiro pessoal superior a 100 salários mínimos.' },
      { letter: 'D', text: 'Certidão de nascimento registrada em São Paulo.' },
      { letter: 'E', text: 'Aprovação em concurso público.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Art. 5º, LXXIII da CF/88 e Lei 4.717/65: O legitimado ativo para propor Ação Popular é o CIDADÃO (brasileiro nato ou naturalizado no pleno gozo de seus direitos políticos), comprovando-se essa condição mediante a apresentação do TÍTULO DE ELEITOR.',
    explanations: {
      A: 'CORRETA. A condição de cidadão é comprovada mediante a juntada do Título de Eleitor.',
      B: 'INCORRETA. Não se exige capacidade postulatória própria (pode ser representado por advogado).',
      C: 'INCORRETA. O cidadão é isento de custas judiciais salvo comprovada má-fé.',
      D: 'INCORRETA. Qualquer cidadão brasileiro tem legitimidade.',
      E: 'INCORRETA. Sem relação com servidores públicos.'
    }
  },
  {
    id: 'dir-q25',
    subjectId: 'direito',
    topic: 'Responsabilidade Civil do Estado - Regresso contra o Agente',
    difficulty: 'Difícil',
    statement: 'Em caso de condenação do DETRAN-SP ao pagamento de indenização por danos materiais causados a um veículo por ato ilícito de um agente de trânsito em serviço, o Estado poderá mover AÇÃO REGRESSIVA contra o agente responsável. A procedência da ação regressiva exige do Estado a comprovação de que o agente atuou com:',
    lawReference: 'Art. 37, § 6º da CF/88',
    bancaTag: 'Vunesp / Avalia 2026',
    options: [
      { letter: 'A', text: 'Dolo ou Culpa.' },
      { letter: 'B', text: 'Responsabilidade objetiva integral.' },
      { letter: 'C', text: 'Imperícia médica.' },
      { letter: 'D', text: 'Apenas dolo, sendo vedado o regresso por culpa.' },
      { letter: 'E', text: 'Reincidência em crime de trânsito.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Art. 37, § 6º da CF/88:\n1) Responsabilidade do Estado perante a vítima: OBJETIVA (independe de dolo ou culpa).\n2) Responsabilidade do Agente em Ação Regressiva perante o Estado: SUBJETIVA (exige a comprovação de DOLO OU CULPA).',
    explanations: {
      A: 'CORRETA. Art. 37, § 6º in fine: A ação regressiva do Estado contra o agente depende da comprovação de Dolo ou Culpa.',
      B: 'INCORRETA. A responsabilidade do agente em regresso não é objetiva, mas subjetiva.',
      C: 'INCORRETA. Imperícia é apenas uma das modalidades de culpa.',
      D: 'INCORRETA. O regresso é perfeitamente cabível também em casos de culpa (negligência, imprudência ou imperícia).',
      E: 'INCORRETA. Não exige crime de trânsito.'
    }
  },
  {
    id: 'dir-q26',
    subjectId: 'direito',
    topic: 'Poder Vinculado vs Poder Discricionário',
    difficulty: 'Médio',
    statement: 'Diferencia-se o Ato Administrativo VINCULADO do Ato DISCRICIONÁRIO porque no ato vinculado:',
    lawReference: 'Teoria do Ato Administrativo',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: 'A lei estabelece todos os requisitos e a única conduta possível a ser adotada pela autoridade, sem margem para valoração de conveniência ou oportunidade.' },
      { letter: 'B', text: 'O administrador possui total liberdade para descumprir a lei.' },
      { letter: 'C', text: 'O ato não pode sofrer nenhum tipo de controle por parte do Poder Judiciário.' },
      { letter: 'D', text: 'A motivação é proibida.' },
      { letter: 'E', text: 'O ato pode ser revogado a qualquer tempo por mera vontade do agente.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'No ATO VINCULADO, a lei predetermina todos os elementos e a única conduta que o agente público deve adotar. Preenchidos os requisitos legais, a autoridade é OBRIGADA a praticar o ato (ex: expedir a CNH quando o candidato for aprovado em todos os exames).',
    explanations: {
      A: 'CORRETA. No ato vinculado não há juízo de conveniência e oportunidade (mérito administrativo).',
      B: 'INCORRETA. NENHUM ato administrativo autoriza descumprir a lei.',
      C: 'INCORRETA. O Judiciário pode anular atos vinculados ilegais.',
      D: 'INCORRETA. A motivação é obrigatória.',
      E: 'INCORRETA. Atos vinculados regulares não são revogáveis por mera vontade.'
    }
  },
  {
    id: 'dir-q27',
    subjectId: 'direito',
    topic: 'Atributo da Imperatividade do Ato Administrativo',
    difficulty: 'Fácil',
    statement: 'O atributo do ato administrativo denominado IMPERATIVIDADE (ou Coercitividade) consiste em:',
    lawReference: 'Atributos dos Atos Administrativos',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Impor obrigações e restrições a terceiros de forma unilateral pela Administração Pública, independentemente da concordância do administrado.' },
      { letter: 'B', text: 'Garantir que todos os atos do governo são imutáveis e eternos.' },
      { letter: 'C', text: 'Presumir que todos os atos praticados por servidores são falsos.' },
      { letter: 'D', text: 'Permitir que o cidadão desobedeça as ordens de trânsito se não concordar.' },
      { letter: 'E', text: 'Exigir que todos os atos passem por aprovação prévia da Câmara de Vereadores.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'IMPERATIVIDADE é o atributo pelo qual os atos administrativos se impõem a terceiros independentemente da sua concordância (ex: uma ordem de parada ou a proibição de estacionar em determinado trecho da via).',
    explanations: {
      A: 'CORRETA. A imperatividade decorre da supremacia do interesse público sobre o privado.',
      B: 'INCORRETA. Os atos administrativos podem ser anulados ou revogados.',
      C: 'INCORRETA. Vigora a presunção de legitimidade (presumem-se verdadeiros e legais).',
      D: 'INCORRETA. As ordens de trânsito são cogentes e de cumprimento obrigatório.',
      E: 'INCORRETA. Não há essa exigência legislativa.'
    }
  },
  {
    id: 'dir-q28',
    subjectId: 'direito',
    topic: 'Lei SP 10.177/98 - Prazos do Processo Administrativo em SP',
    difficulty: 'Difícil',
    statement: 'Nos termos da Lei Estadual de São Paulo nº 10.177/1998, salvo disposição legal em contrário, o prazo geral para a INSTRUÇÃO e DECISÃO dos requerimentos administrativos no âmbito da Administração Pública Paulista é de:',
    lawReference: 'Lei Estadual SP 10.177/1998, Art. 33',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: '30 (trinta) dias.' },
      { letter: 'B', text: '120 (cento e vinte) dias.' },
      { letter: 'C', text: '10 (dez) dias.' },
      { letter: 'D', text: '1 (um) ano.' },
      { letter: 'E', text: '15 (quinze) dias.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Lei Estadual SP 10.177/98, Art. 33: Salvo prorrogação motivada por igual período, o prazo para conclusão da instrução e emissão de decisão em requerimentos administrativos estaduais é de 30 (TRINTA) DIAS.',
    explanations: {
      A: 'CORRETA. Art. 33 da Lei 10.177/98: Prazo de 30 dias para instrução e julgamento no âmbito de SP.',
      B: 'INCORRETA. Prazo excessivo.',
      C: 'INCORRETA. 10 dias é prazo de intimação.',
      D: 'INCORRETA. Prazo incorreto.',
      E: 'INCORRETA. 15 dias é prazo para recurso administrativo.'
    }
  },
  {
    id: 'dir-q29',
    subjectId: 'direito',
    topic: 'Lei 8.429/92 - Atos contra os Princípios da Adm. Pública (Art. 11)',
    difficulty: 'Difícil',
    statement: 'De acordo com o Art. 11 da Lei nº 8.429/1992 (com redação da Lei nº 14.230/2021), constituem atos de improbidade administrativa que atentam contra os princípios da administração pública apenas as condutas taxativamente descritas nos incisos do referido artigo. É exemplo de ato atentatório aos princípios:',
    lawReference: 'Lei 8.429/1992, Art. 11',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'Revelar ou fazer devassar segredo do qual tem ciência em razão do cargo e que deva permanecer em segredo, como dados de concurso público antes da publicação oficial.' },
      { letter: 'B', text: 'Chegar 5 minutos atrasado ao trabalho por motivo de trânsito.' },
      { letter: 'C', text: 'Emitir parecer jurídico fundamentado com interpretação divergente da jurisprudência majoritária.' },
      { letter: 'D', text: 'Aprovar candidato em concurso público com nota máxima obtida por mérito.' },
      { letter: 'E', text: 'Solicitar licença-maternidade prevista em lei.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Art. 11, III da Lei 8.429/92: Constitui ato de improbidade que atenta contra os princípios revelar segredo do qual tem ciência em razão do cargo. (Nota: A reforma da Lei 14.230/21 tornou o rol do Art. 11 TAXATIVO e exigiu dolo específico).',
    explanations: {
      A: 'CORRETA. Art. 11, III da LIA: Revelar segredo funcional com dolo constitui ato atentatório aos princípios.',
      B: 'INCORRETA. Atraso isolado é infração disciplinar leve, jamais improbidade.',
      C: 'INCORRETA. A Lei 14.230/21 excluiu a improbidade baseada em divergência interpretativa (Art. 1º, § 8º).',
      D: 'INCORRETA. Ato totalmente legítimo.',
      E: 'INCORRETA. Exercício de direito constitucional.'
    }
  },
  {
    id: 'dir-q30',
    subjectId: 'direito',
    topic: 'Direitos Fundamentais - Direito de Petição e Certidão (Art. 5º XXXIV)',
    difficulty: 'Fácil',
    statement: 'Nos termos do Art. 5º, XXXIV da CF/88, são a todos assegurados, INDEPENDENTEMENTE DO PAGAMENTO DE TAXAS:',
    lawReference: 'Art. 5º, XXXIV da CF/88',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'O direito de petição aos Poderes Públicos em defesa de direitos ou contra ilegalidade ou abuso de poder, e a obtenção de certidões em repartições públicas para defesa de direitos e esclarecimento de situações de interesse pessoal.' },
      { letter: 'B', text: 'A expedição gratuita da segunda via da CNH em caso de perda.' },
      { letter: 'C', text: 'O licenciamento anual do veículo sem pagamento de IPVA.' },
      { letter: 'D', text: 'A realização de exames médicos de CNH em clínicas privadas.' },
      { letter: 'E', text: 'A transferência de propriedade de veículo importado.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Art. 5º, XXXIV da CF/88: São a todos assegurados, INDEPENDENTEMENTE DO PAGAMENTO DE TAXAS:\na) o direito de petição aos Poderes Públicos;\nb) a obtenção de certidões em repartições públicas.',
    explanations: {
      A: 'CORRETA. Texto literal do Art. 5º, XXXIV da Constituição Federal.',
      B: 'INCORRETA. Emissão de documentos físicos pode estar sujeita a taxas públicas.',
      C: 'INCORRETA. IPVA é imposto constitucional obrigatório.',
      D: 'INCORRETA. Exames privados são remunerados.',
      E: 'INCORRETA. Sujeito a taxas de serviço prestado.'
    }
  },
  {
    id: 'dir-q31',
    subjectId: 'direito',
    topic: 'Presunção de Legitimidade e Veracidade dos Atos Administrativos',
    difficulty: 'Fácil',
    statement: 'Um Auto de Infração de Trânsito lavrado por um agente de trânsito goza do atributo da PRESUNÇÃO DE LEGITIMIDADE E VERACIDADE. Isso significa que:',
    lawReference: 'Atributos dos Atos Administrativos',
    bancaTag: 'FCC / Vunesp',
    options: [
      { letter: 'A', text: 'Os fatos declarados pelo agente presumem-se verdadeiros e praticados conforme a lei, cabendo ao infrator o ônus de provar o contrário (presunção relativa / juris tantum).' },
      { letter: 'B', text: 'A multa não pode ser contestada ou anulada em nenhuma hipótese (presunção absoluta).' },
      { letter: 'C', text: 'O motorista deve ser preso imediatamente sem direito a recurso.' },
      { letter: 'D', text: 'O agente de trânsito responderá criminalmente por qualquer multa aplicada.' },
      { letter: 'E', text: 'O Auto de Infração perde a validade em 24 horas se não for pago.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A presunção de legitimidade e veracidade dos atos administrativos é RELATIVA (juris tantum). O ato presume-se legal e verdadeiro até que o administrado apresente prova em contrário no processo de defesa/recurso.',
    explanations: {
      A: 'CORRETA. Presunção relativa (juris tantum) que inverte o ônus da prova para o administrado.',
      B: 'INCORRETA. A presunção não é absoluta (jure et de jure).',
      C: 'INCORRETA. Aplicação de multa é sanção administrativa com amplo direito de defesa.',
      D: 'INCORRETA. Agente atua sob o manto da legalidade.',
      E: 'INCORRETA. Prazos de recurso são definidos no CTB.'
    }
  },
  {
    id: 'dir-q32',
    subjectId: 'direito',
    topic: 'Desvio de Finalidade (Desvio de Poder)',
    difficulty: 'Médio',
    statement: 'Quando um Diretor do DETRAN-SP remove um servidor público de sua lotação original para um município distante do interior não por necessidade de serviço, mas unicamente com a intenção de PUNI-LO informalmente por desavença pessoal, ocorre o vício do ato administrativo conhecido como:',
    lawReference: 'Elementos do Ato Administrativo - Vício de Finalidade',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Desvio de Finalidade (ou Desvio de Poder).' },
      { letter: 'B', text: 'Incompetência absoluta de foro.' },
      { letter: 'C', text: 'Usurpação de função pública.' },
      { letter: 'D', text: 'Vício de forma sanável.' },
      { letter: 'E', text: 'Excesso de exação tributária.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'DESVIO DE FINALIDADE ocorre quando a autoridade usa de uma prerrogativa legal (ex: remoção ex officio) para alcançar uma finalidade diversa do interesse público ou da finalidade prevista em lei (ex: punição velada de servidor). O ato é insanavelmente NULO.',
    explanations: {
      A: 'CORRETA. Usar a remoção para punir configura desvio de finalidade (vício insanável).',
      B: 'INCORRETA. A autoridade tinha competência formal para mover o servidor.',
      C: 'INCORRETA. O diretor é autoridade legítima.',
      D: 'INCORRETA. Não é vício de forma, mas de finalidade.',
      E: 'INCORRETA. Excesso de exação refere-se a tributos.'
    }
  },
  {
    id: 'dir-q33',
    subjectId: 'direito',
    topic: 'LAI - Transparência Ativa vs Passiva',
    difficulty: 'Médio',
    statement: 'Nos termos da Lei de Acesso à Informação (Lei 12.527/2011), a disponibilização obrigatória de informações de interesse público nos sites oficiais da internet (como a divulgação da estrutura organizacional e licitações do DETRAN-SP), independentemente de requerimento do cidadão, caracteriza a:',
    lawReference: 'Lei 12.527/2011, Arts. 3º e 8º',
    bancaTag: 'FCC / Avalia 2026',
    options: [
      { letter: 'A', text: 'Transparência Ativa.' },
      { letter: 'B', text: 'Transparência Passiva.' },
      { letter: 'C', text: 'Sigilo reservado obrigatório.' },
      { letter: 'D', text: 'Publicidade restrita a servidores.' },
      { letter: 'E', text: 'Segredo de Estado.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Divisão de Transparência na LAI:\n- TRANSPARÊNCIA ATIVA (Art. 8º): O Estado divulga proativamente as informações de interesse geral nos portais de transparência sem precisar de pedido.\n- TRANSPARÊNCIA PASSIVA (Art. 10): O Estado responde aos pedidos específicos apresentados pelos cidadãos.',
    explanations: {
      A: 'CORRETA. Divulgação proativa em portais oficiais configura Transparência Ativa.',
      B: 'INCORRETA. Transparência passiva atende a solicitações feitas pelos cidadãos.',
      C: 'INCORRETA. É o oposto de sigilo.',
      D: 'INCORRETA. A publicidade é para toda a sociedade.',
      E: 'INCORRETA. Não há segredo.'
    }
  },
  {
    id: 'dir-q34',
    subjectId: 'direito',
    topic: 'Mandado de Injunção (Art. 5º LXXI da CF/88)',
    difficulty: 'Difícil',
    statement: 'Conceder-se-á MANDADO DE INJUNÇÃO sempre que a falta de norma regulamentadora torne inviável o exercício dos direitos e liberdades constitucionais e das prerrogativas inerentes à nacionalidade, à soberania e à cidadania. O Mandado de Injunção é a ação adequada para combater:',
    lawReference: 'Art. 5º, LXXI da CF/88 e Lei 13.300/16',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'A omissão legislativa inconstitucional.' },
      { letter: 'B', text: 'A prisão ilegal por abuso de autoridade.' },
      { letter: 'C', text: 'A negação de certidão de tempo de serviço.' },
      { letter: 'D', text: 'A arrematação ilícita de veículo em leilão.' },
      { letter: 'E', text: 'A cobrança abusiva de IPVA.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Mandado de Injunção (Art. 5º, LXXI) destina-se a suprir a OMISSÃO LEGISLATIVA inconstitucional, garantindo a aplicabilidade de direitos previstos na CF que dependam de regulamentação por lei (ex: direito de greve dos servidores públicos antes da lei específica).',
    explanations: {
      A: 'CORRETA. O MI ataca a omissão legislativa inviabilizadora de direitos constitucionais.',
      B: 'INCORRETA. Tutelado por Habeas Corpus.',
      C: 'INCORRETA. Tutelado por Mandado de Segurança ou Habeas Data.',
      D: 'INCORRETA. Ação ordinária ou Mandado de Segurança.',
      E: 'INCORRETA. Ação declaratória ou anulatória tributária.'
    }
  },
  {
    id: 'dir-q35',
    subjectId: 'direito',
    topic: 'Excesso de Poder vs Desvio de Poder',
    difficulty: 'Difícil',
    statement: 'O Abuso de Poder divide-se nas espécies Excesso de Poder e Desvio de Poder. Ocorre EXCESSO DE PODER quando o agente público:',
    lawReference: 'Teoria do Abuso de Poder',
    bancaTag: 'FCC / Vunesp',
    options: [
      { letter: 'A', text: 'Atua fora ou além dos limites de sua competência legal.' },
      { letter: 'B', text: 'Pratica o ato visando a uma finalidade alheia ao interesse público.' },
      { letter: 'C', text: 'Age rigorosamente dentro de suas atribuições sem desvio.' },
      { letter: 'D', text: 'Cumpre ordens judiciais expressas.' },
      { letter: 'E', text: 'Aplica a multa exata prevista na legislação.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Abuso de Poder (Gênero):\n1) EXCESSO DE PODER (Vício de Competência): O agente ultrapassa os limites da sua competência legal.\n2) DESVIO DE PODER (Vício de Finalidade): O agente atua dentro da competência, mas busca finalidade diversa do interesse público.',
    explanations: {
      A: 'CORRETA. Excesso de poder refere-se ao extrapolate dos limites de competência do agente público.',
      B: 'INCORRETA. Esta é a definição de Desvio de Poder (vício de finalidade).',
      C: 'INCORRETA. Ato legítimo.',
      D: 'INCORRETA. Ato legítimo.',
      E: 'INCORRETA. Ato legítimo.'
    }
  },
  {
    id: 'dir-q36',
    subjectId: 'direito',
    topic: 'Lei SP 10.177/98 - Recursos Administrativos sem Efeito Suspensivo',
    difficulty: 'Médio',
    statement: 'No âmbito do Processo Administrativo Estadual de São Paulo (Lei nº 10.177/1998), salvo disposição legal ou regulamentar em contrário, o RECURSO ADMINISTRATIVO interposto pelo interessado:',
    lawReference: 'Lei Estadual SP 10.177/1998, Art. 48',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'Terá efeito apenas devolutivo, podendo a autoridade conceder efeito suspensivo se houver justo receio de prejuízo de difícil reparação.' },
      { letter: 'B', text: 'Terá obrigatoriamente efeito suspensivo automático em todos os casos.' },
      { letter: 'C', text: 'Impede a cobrança da multa até a decisão do Supremo Tribunal Federal.' },
      { letter: 'D', text: 'Não pode ser interposto mais de uma vez.' },
      { letter: 'E', text: 'Exige o depósito prévio do valor da multa para ser conhecido.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Lei SP 10.177/98, Art. 48: Salvo disposição legal em contrário, o recurso não tem efeito suspensivo (tem apenas efeito devolutivo). A autoridade recorrida ou a superior poderá conferir efeito suspensivo se houver justo receio de prejuízo de difícil reparação.',
    explanations: {
      A: 'CORRETA. Regra geral no processo paulista: Efeito Devolutivo, sendo o suspensivo facultativo e motivado.',
      B: 'INCORRETA. O efeito suspensivo não é a regra automática.',
      C: 'INCORRETA. STF não é instância de recursos administrativos ordinários.',
      D: 'INCORRETA. Cabem recursos conforme as instâncias previstas na lei.',
      E: 'INCORRETA. Súmula Vinculante 21 do STF proíbe a exigência de depósito prévio para recurso administrativo.'
    }
  },
  {
    id: 'dir-q37',
    subjectId: 'direito',
    topic: 'Súmula Vinculante 21 do STF - Vedação de Depósito Prévio',
    difficulty: 'Médio',
    statement: 'A Súmula Vinculante nº 21 do STF estabelece que "É inconstitucional a exigência de depósito ou arrolamento prévio de dinheiro ou bens para admissibilidade de recurso administrativo". Essa súmula garante o respeito direto aos princípios constitucionais da:',
    lawReference: 'Súmula Vinculante 21/STF & Art. 5º LV CF/88',
    bancaTag: 'FCC / Vunesp',
    options: [
      { letter: 'A', text: 'Ampla Defesa e do Contraditório (Art. 5º, LV).' },
      { letter: 'B', text: 'Imprescritibilidade dos crimes de trânsito.' },
      { letter: 'C', text: 'Celeridade processual estrita.' },
      { letter: 'D', text: 'Inviolabilidade de domicílio.' },
      { letter: 'E', text: 'Autonomia municipal plena.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A exigência de garantia financeira/depósito prévio para recorrer administrativamente garantia privilégio a quem tinha dinheiro, violando a Ampla Defesa, o Contraditório e o Devido Processo Legal (Art. 5º, LV da CF/88), razão pela qual o STF editou a Súmula Vinculante 21.',
    explanations: {
      A: 'CORRETA. Súmula Vinculante 21 assegura o livre exercício da ampla defesa sem condicionamentos patrimoniais.',
      B: 'INCORRETA. Sem relação com imprescritibilidade.',
      C: 'INCORRETA. Não visa a celeridade, mas a garantia do direito de recorrer.',
      D: 'INCORRETA. Sem relação.',
      E: 'INCORRETA. Sem relação com municípios.'
    }
  },
  {
    id: 'dir-q38',
    subjectId: 'direito',
    topic: 'Revogação dos Atos Administrativos e Direitos Adquiridos',
    difficulty: 'Difícil',
    statement: 'A Revogação do ato administrativo por motivo de conveniência e oportunidade encontra limites jurídicos. É insuscetível de revogação pela Administração:',
    lawReference: 'Teoria da Revogação dos Atos',
    bancaTag: 'Vunesp / FCC',
    options: [
      { letter: 'A', text: 'O ato que já gerou direito adquirido ao seu beneficiário, os atos consumados e os atos vinculados.' },
      { letter: 'B', text: 'Qualquer ato discricionário editado há menos de 30 dias.' },
      { letter: 'C', text: 'Os pareceres opinativos da assessoria jurídica.' },
      { letter: 'D', text: 'As autorizações precárias de uso de bem público.' },
      { letter: 'E', text: 'As ordens de serviço verbais.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Não podem ser REVOGADOS:\n1) Atos consumados (que já produziram todos os seus efeitos);\n2) Atos vinculados (pois não possuem margem de conveniência/oportunidade);\n3) Atos que geraram direito adquirido (Art. 5º, XXXVI CF/88);\n4) Atos que integram um procedimento já precluso.',
    explanations: {
      A: 'CORRETA. Limites materiais ao poder de revogação da Administração Pública.',
      B: 'INCORRETA. Atos discricionários em geral podem ser revogados.',
      C: 'INCORRETA. Pareceres não são atos decisórios revogáveis.',
      D: 'INCORRETA. Atos precários são revogáveis a qualquer tempo.',
      E: 'INCORRETA. Ordens de serviço podem ser alteradas.'
    }
  },
  {
    id: 'dir-q39',
    subjectId: 'direito',
    topic: 'Processo Disciplinar - Sindicância x PAD',
    difficulty: 'Médio',
    statement: 'No âmbito do Estatuto dos Servidores Públicos do Estado de São Paulo (Lei 10.261/68 alterada), quando a infração disciplinar praticada por servidor puder ensejar a pena de DEMISSÃO, a apuração obrigatoriamente deverá ser realizada por meio de:',
    lawReference: 'Estatuto dos Servidores de SP (Lei 10.261/68)',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'Processo Administrativo Disciplinar (PAD).' },
      { letter: 'B', text: 'Sindicância punitiva sumária.' },
      { letter: 'C', text: 'Verificação informal de balcão.' },
      { letter: 'D', text: 'Termo de Ajustamento de Conduta sem defesa.' },
      { letter: 'E', text: 'Boletim de Ocorrência policial.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'No regime estatutário paulista, sanções graves (demissão, cassação de aposentadoria) EXIGEM a instauração de Processo Administrativo Disciplinar (PAD), garantido o contraditório e a ampla defesa com defensor habilitado. A Sindicância aplica-se a penalidades mais brandas (repreensão, suspensão curta).',
    explanations: {
      A: 'CORRETA. Demissão exige obrigatoriamente o rito formal do Processo Administrativo Disciplinar (PAD).',
      B: 'INCORRETA. Sindicância não pode aplicar a pena de demissão.',
      C: 'INCORRETA. Incompatível com o devido processo legal.',
      D: 'INCORRETA. TAC não se aplica para infrações graves puníveis com demissão.',
      E: 'INCORRETA. BO policial atua na esfera penal, não substitui o PAD administrativo.'
    }
  },
  {
    id: 'dir-q40',
    subjectId: 'direito',
    topic: 'Nepotismo na Administração Pública (Súmula Vinculante 13 STF)',
    difficulty: 'Médio',
    statement: 'A Súmula Vinculante nº 13 do STF veda o NEPOTISMO na Administração Pública. A contratação de cônjuge, companheiro ou parente em linha reta, colateral ou por afinidade, até o 3º grau, para o exercício de cargo em comissão ou função de confiança viola diretamente o princípio constitucional da:',
    lawReference: 'Súmula Vinculante 13/STF & Art. 37 CF/88',
    bancaTag: 'FCC / Vunesp',
    options: [
      { letter: 'A', text: 'Impessoalidade e da Moralidade Administrativa.' },
      { letter: 'B', text: 'Celeridade processual penal.' },
      { letter: 'C', text: 'Autotutela judicial.' },
      { letter: 'D', text: 'Publicidade restrita.' },
      { letter: 'E', text: 'Nacionalidade brasileira nata.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Súmula Vinculante 13 do STF: A nomeação de familiares (até o 3º grau) para cargos em comissão ou funções de confiança afronta os princípios constitucionais da IMPESTEALIDADE, MORALIDADE, IGUALDADE e EFICIÊNCIA (Art. 37, caput da CF/88).',
    explanations: {
      A: 'CORRETA. O nepotismo viola frontalmente os princípios da Impessoalidade e da Moralidade Administrativa.',
      B: 'INCORRETA. Sem relação com processo penal.',
      C: 'INCORRETA. Sem relação com autotutela.',
      D: 'INCORRETA. Sem relação.',
      E: 'INCORRETA. Nepotismo refere-se a parentesco, não nacionalidade.'
    }
  }
];
