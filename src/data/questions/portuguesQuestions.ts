import { Question } from '../../types';

export const portuguesQuestions: Question[] = [
  // --- BLOC 1: INTERPRETAÇÃO, ACENTUAÇÃO E ORTOGRAFIA (Q01 a Q15) ---
  {
    id: 'por-q01',
    subjectId: 'portugues',
    topic: 'Acentuação Gráfica - Regras Gerais e Novo Acordo',
    difficulty: 'Fácil',
    statement: '(Prova DETRAN-SP / Vunesp) Assinale a alternativa em que TODAS as palavras estão acentuadas corretamente segundo as regras ortográficas vigentes:',
    lawReference: 'Nova Ortografia da Língua Portuguesa',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Caráter, saída, vírus, pólen.' },
      { letter: 'B', text: 'Idéia, heróico, assembléia, jibóia.' },
      { letter: 'C', text: 'Vôo, lêem, crêem, dêem.' },
      { letter: 'D', text: 'Paraquédas, régua, ítem, hifen.' },
      { letter: 'E', text: 'Saude, bau, tambem, armazem.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Regras de acentuação:\n- Caráter: paroxítona terminada em -r;\n- Saída: hiato com "i" tônico sozinho na sílaba;\n- Vírus: paroxítona terminada em -us;\n- Pólen: paroxítona terminada em -n.\nNo Novo Acordo, paroxítonas com ditongos abertos (ideia, heroico, assembleia, jiboia) e hiatos de vogais dobradas (voo, leem, creem) PERDERAM o acento.',
    explanations: {
      A: 'CORRETA. Todas as palavras (caráter, saída, vírus, pólen) estão acentuadas segundo a norma culta.',
      B: 'INCORRETA. Perderam o acento: ideia, heroico, assembleia, jiboia.',
      C: 'INCORRETA. Perderam o acento: voo, leem, creem, deem.',
      D: 'INCORRETA. Paraparaquedas não tem acento no hiato e "item" não é acentuada.',
      E: 'INCORRETA. Faltam os acentos de saúde, baú, também, armazém.'
    }
  },
  {
    id: 'por-q02',
    subjectId: 'portugues',
    topic: 'Crase - Casos Obrigatórios e Proibidos',
    difficulty: 'Médio',
    statement: '(Prova DETRAN-SP / Vunesp) Assinale a alternativa que preenche correta e respectivamente as lacunas da frase: "Dirigi-me ___ repartição pública para solicitar informações ___ cerca do processo, mas não fui atendido ___ tempo por causa do horário."',
    lawReference: 'Regras de Emprego da Crase',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'à – a – a' },
      { letter: 'B', text: 'a – à – à' },
      { letter: 'C', text: 'à – à – a' },
      { letter: 'D', text: 'a – a – à' },
      { letter: 'E', text: 'à – a – à' }
    ],
    correctLetter: 'A',
    generalExplanation: '1) "Dirigi-me à repartição": quem se dirige, dirige-se a algum lugar (preposição "a") + artigo "a" de repartição = "à";\n2) "a cerca do": locução prepositiva de assunto ("a cerca de" = sobre), sem crase;\n3) "a tempo": "tempo" é palavra masculina, portanto não ocorre crase antes de palavra masculina.',
    explanations: {
      A: 'CORRETA. à repartição (preposição + artigo) – a cerca (sobre) – a tempo (palavra masculina).',
      B: 'INCORRETA. Inverte as regras.',
      C: 'INCORRETA. "a cerca" não leva crase.',
      D: 'INCORRETA. "à tempo" é erro crasso antes de palavra masculina.',
      E: 'INCORRETA. "à tempo" incorreto.'
    }
  },
  {
    id: 'por-q03',
    subjectId: 'portugues',
    topic: 'Concordância Verbal com Sujeito Composto ou Coletivo',
    difficulty: 'Médio',
    statement: '(Prova DETRAN-SP / Vunesp) Assinale a opção em que a concordância verbal atende estritamente à norma-padrão da língua portuguesa:',
    lawReference: 'Concordância Verbal',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'A maioria dos candidatos aprovaram o novo formato da prova.' },
      { letter: 'B', text: 'Faziam dez anos que o edital do concurso não era publicado.' },
      { letter: 'C', text: 'Houveram muitos problemas técnicos durante a aplicação do exame.' },
      { letter: 'D', text: 'Sobrou muitas vagas no setor administrativo.' },
      { letter: 'E', text: 'Tratam-se de questões de extrema complexidade.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Análise das alternativas:\n- A: CORRETA. Com expressão partitiva ("a maioria de" + plural), o verbo pode concordar com o núcleo no singular ("aprovou") ou com o termo no plural ("aprovaram").\n- B: INCORRETA. Verbo "fazer" indicando tempo decorrido é impessoal (deve ficar no singular: "Fazia dez anos").\n- C: INCORRETA. Verbo "haver" no sentido de existir é impessoal ("Houve muitos problemas").\n- D: INCORRETA. "Sobraram muitas vagas" (sujeito plural).\n- E: INCORRETA. "Trata-se de" com preposição é verbo impessoal ou com índice de indeterminação ("Trata-se de questões").',
    explanations: {
      A: 'CORRETA. Concordância facultativa válida com o especificador no plural ("aprovaram").',
      B: 'INCORRETA. Fazer indicando tempo não vai ao plural: "Fazia dez anos".',
      C: 'INCORRETA. Haver no sentido de existir não vai ao plural: "Houve problemas".',
      D: 'INCORRETA. Sobrar deve concordar com vagas: "Sobraram muitas vagas".',
      E: 'INCORRETA. Verbo transitivo indireto + se: fica no singular ("Trata-se de").'
    }
  },
  {
    id: 'por-q04',
    subjectId: 'portugues',
    topic: 'Regência Verbal e Emprego do Pronome Relativo',
    difficulty: 'Médio',
    statement: 'Assinale a alternativa em que a regência do verbo e o emprego do pronome relativo estão de acordo com a norma-padrão:',
    lawReference: 'Regência Verbal',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Este é o cargo a que sempre aspirei na administração pública.' },
      { letter: 'B', text: 'Este é o cargo que sempre aspirei na administração pública.' },
      { letter: 'C', text: 'Estes são os regulamentos onde o diretor se referiu ontem.' },
      { letter: 'D', text: 'O candidato obedeceu o fiscal de prova sem reclamar.' },
      { letter: 'E', text: 'Prefiro mais estudar legislação do que fazer resumos.' }
    ],
    correctLetter: 'A',
    generalExplanation: '1) O verbo "aspirar" no sentido de desejar/almejar é TRANSITIVO INDIRETO e exige a preposição "a" ("aspirar a algo"). Portanto: "o cargo A QUE sempre aspirei".\n2) "Obedecer" exige preposição "a" ("obedeceu ao fiscal").\n3) "Preferir" exige a preposição "a" sem o uso de "mais" ou "do que" ("Prefiro estudar a fazer resumos").',
    explanations: {
      A: 'CORRETA. Aspirar (desejar) exige a preposição "a": "a que sempre aspirei".',
      B: 'INCORRETA. Falta a preposição "a" exigida pelo verbo aspirar.',
      C: 'INCORRETA. "Onde" só deve ser usado para lugares físicos; quem se refere, refere-se A algo ("a que o diretor se referiu").',
      D: 'INCORRETA. Obedecer é transitivo indireto: "obedeceu AO fiscal".',
      E: 'INCORRETA. O verbo preferir veda "mais" ou "do que": "Prefiro estudar A fazer resumos".'
    }
  },
  {
    id: 'por-q05',
    subjectId: 'portugues',
    topic: 'Colocação Pronominal - Próclise Obrigatória',
    difficulty: 'Médio',
    statement: 'Assinale a frase em que a colocação do pronome oblíquo átono respeita rigorosamente as regras da norma-padrão:',
    lawReference: 'Colocação Pronominal',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Nunca informaram-me sobre as alterações no edital do concurso.' },
      { letter: 'B', text: 'Nunca me informaram sobre as alterações no edital do concurso.' },
      { letter: 'C', text: 'Me disseram que a prova seria realizada no domingo.' },
      { letter: 'D', text: 'Os alunos reuniram-se quando não se esperava-os.' },
      { letter: 'E', text: 'Caso encontre-o na sala, entregue este documento.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Palavras de sentido negativo (como "nunca", "não", "jamais") são ATRATIVAS e exigem obrigatoriamente a PRÓCLISE (pronome antes do verbo). Não se inicia frase com pronome átono em norma-padrão ("Me disseram" está errado).',
    explanations: {
      A: 'INCORRETA. O advérbio negativo "nunca" atrai o pronome, proibindo a ênclise.',
      B: 'CORRETA. Próclise correta por atração da palavra negativa: "Nunca me informaram".',
      C: 'INCORRETA. Não se inicia oração com pronome oblíquo na norma culta ("Disseram-me").',
      D: 'INCORRETA. "esperava-os" após o advérbio "não" viola a atração obrigatória ("não os esperava").',
      E: 'INCORRETA. A conjunção subordinativa "caso" atrai o pronome ("Caso o encontre").'
    }
  },
  {
    id: 'por-q06',
    subjectId: 'portugues',
    topic: 'Pontuação - Emprego da Vírgula entre Orações e Termos',
    difficulty: 'Médio',
    statement: 'Assinale a alternativa em que a pontuação da frase está totalmente CORRETA de acordo com a norma gramatical:',
    lawReference: 'Pontuação na Língua Portuguesa',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'O fiscal de trânsito, que atua na fiscalização, orientou os motoristas.' },
      { letter: 'B', text: 'O candidato comprou, canetas pretas papéis e borracha.' },
      { letter: 'C', text: 'Embora estivesse chovendo o evento, continuou sem interrupção.' },
      { letter: 'D', text: 'Os alunos, daquela escola municipal gabaritaram a prova.' },
      { letter: 'E', text: 'Nós assistimos, ao jogo de futebol ontem.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Análise das frases:\n- A: CORRETA. A oração explicativa entre vírgulas ("que atua na fiscalização") isola corretamente o aposto/oração adjetiva.\n- B: INCORRETA. Separa incorretamente o verbo do objeto ("comprou, canetas").\n- C: INCORRETA. Coloca a vírgula dentro do sintagma substantivo ("chovendo o evento, continuou").\n- D: INCORRETA. Separa o sujeito do verbo por vírgula ("Os alunos, daquela escola... gabaritaram").\n- E: INCORRETA. Separa o verbo de seu complemento indireto ("assistimos, ao jogo").',
    explanations: {
      A: 'CORRETA. Oração adjetiva explicativa corretamente isolada por vírgulas.',
      B: 'INCORRETA. Vírgula proibida entre o verbo e o objeto.',
      C: 'INCORRETA. Pontuação equivocada na oração subordinada adjetiva/adverbial.',
      D: 'INCORRETA. Vírgula proibida entre o sujeito ("Os alunos...") e o verbo ("gabaritaram").',
      E: 'INCORRETA. Vírgula proibida entre verbo e seu complemento.'
    }
  },
  {
    id: 'por-q07',
    subjectId: 'portugues',
    topic: 'Significação das Palavras - Parônimos e Homônimos',
    difficulty: 'Fácil',
    statement: 'Assinale a alternativa que preenche correta e respectivamente as lacunas da frase: "O condutor teve sua CNH ___ por cometer infrações graves. A sessão da câmara municipal vai ___ as irregularidades do trânsito."',
    lawReference: 'Semântica: Parônimos',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'cassada – cassar' },
      { letter: 'B', text: 'cassada – caçar' },
      { letter: 'C', text: 'caçada – cassar' },
      { letter: 'D', text: 'caçada – caçar' },
      { letter: 'E', text: 'cassada – caçar' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Homófonos:\n- CASSAR (com ss): anular, invalidar direitos (ex: CNH cassada, cassar direitos).\n- CAÇAR (com ç): perseguir animais, busca na mata.\nLogo, "CNH cassada" e "cassar as irregularidades" (anular/invalidar).',
    explanations: {
      A: 'CORRETA. CASSAR (invalidar/anular CNH ou atos administrativos) escreve-se com "ss".',
      B: 'INCORRETA. "caçar" com ç refere-se à caça de animais.',
      C: 'INCORRETA. "caçada" com ç refere-se a perseguição de caça.',
      D: 'INCORRETA. Grafia incorreta no contexto administrativo.',
      E: 'INCORRETA. Grafia incorreta no contexto administrativo.'
    }
  },
  {
    id: 'por-q08',
    subjectId: 'portugues',
    topic: 'Conjunções Coordenadas e Subordenadas - Relação Sentido',
    difficulty: 'Médio',
    statement: 'Na frase: "O trânsito estava extremamente congestionado; CHEGOU, CONTUDO, NO HORÁRIO PREVISTO", a conjunção destacada estabelece relação de sentido de:',
    lawReference: 'Conjunções Adversativas',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Oposição ou adversidade.' },
      { letter: 'B', text: 'Causa.' },
      { letter: 'C', text: 'Conclusão.' },
      { letter: 'D', text: 'Condição.' },
      { letter: 'E', text: 'Explicação.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'As conjunções "contudo", "porém", "todavia", "entretanto", "mas" e "no entanto" são conjunções coordenativas ADVERSATIVAS, exprimindo uma relação de oposição, quebra de expectativa ou contraste.',
    explanations: {
      A: 'CORRETA. "Contudo" é conjunção adversativa (oposição/contraste).',
      B: 'INCORRETA. Causa é expressa por "porque", "visto que", "já que".',
      C: 'INCORRETA. Conclusão é expressa por "portanto", "logo", "por conseguinte".',
      D: 'INCORRETA. Condição é expressa por "se", "caso".',
      E: 'INCORRETA. Explicação é expressa por "pois", "porque".'
    }
  },
  {
    id: 'por-q09',
    subjectId: 'portugues',
    topic: 'Vozes Verbais - Transposição da Voz Ativa para a Passiva',
    difficulty: 'Médio',
    statement: 'Transpondo a frase "O agente de trânsito fiscalizou todos os veículos da avenida" para a VOZ PASSIVA, a forma verbal resultante será:',
    lawReference: 'Vozes Verbais',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Foram fiscalizados.' },
      { letter: 'B', text: 'Eram fiscalizados.' },
      { letter: 'C', text: 'Tinham fiscalizado.' },
      { letter: 'D', text: 'Serão fiscalizados.' },
      { letter: 'E', text: 'Fiscalizaram-se.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Voz ativa: "O agente (sujeito) fiscalizou (pretérito perfeito) todos os veículos (objeto direto)".\nNa transposição para a voz passiva analítica: o objeto direto vira sujeito paciente ("Todos os veículos") + verbo auxiliar "ser" no mesmo tempo do verbo principal (pretérito perfeito = "foram") + particípio do verbo principal ("fiscalizados") = "Todos os veículos FORAM FISCALIZADOS pelo agente".',
    explanations: {
      A: 'CORRETA. Pretérito perfeito no plural: "Foram fiscalizados".',
      B: 'INCORRETA. "Eram fiscalizados" está no pretérito imperfeito.',
      C: 'INCORRETA. "Tinham fiscalizado" é voz ativa no pretérito mais-que-perfeito composto.',
      D: 'INCORRETA. "Serão fiscalizados" está no futuro do presente.',
      E: 'INCORRETA. Voz passiva sintética sem agente explícito.'
    }
  },
  {
    id: 'por-q10',
    subjectId: 'portugues',
    topic: 'Figura de Linguagem - Metáfora e Metonímia',
    difficulty: 'Fácil',
    statement: 'Na frase "O trânsito paulistano consome a paciência dos motoristas todos os dias", a figura de linguagem presente na expressão "consome a paciência" é identificada como:',
    lawReference: 'Figuras de Linguagem',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Metáfora.' },
      { letter: 'B', text: 'Pleonasmo.' },
      { letter: 'C', text: 'Hipérbole.' },
      { letter: 'D', text: 'Eufemismo.' },
      { letter: 'E', text: 'Ironia.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A metáfora consiste no emprego de uma palavra com significado figurado com base em uma comparação implícita ("consumir" a paciência como se fosse um alimento ou combustível devorado).',
    explanations: {
      A: 'CORRETA. Metáfora: atribuição figurada de consumo físico a um estado psicológico (paciência).',
      B: 'INCORRETA. Pleonasmo é repetição redundante.',
      C: 'INCORRETA. Hipérbole é exagero intencional (ex: chorou um rio de lágrimas).',
      D: 'INCORRETA. Eufemismo é suavização de ideia desagradável.',
      E: 'INCORRETA. Ironia é dizer o contrário do que se pensa.'
    }
  },
  {
    id: 'por-q11',
    subjectId: 'portugues',
    topic: 'Uso dos Porquês (Por que, Por quê, Porque, Porquê)',
    difficulty: 'Médio',
    statement: 'Assinale a alternativa que preenche correta e respectivamente as lacunas do texto: "Não entendi o ___ de tanta demora. ___ a pista estava bloqueada? Os carros pararam ___ havia um acidente."',
    lawReference: 'Emprego dos Porquês',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'porquê – Por que – porque' },
      { letter: 'B', text: 'porque – Por quê – por que' },
      { letter: 'C', text: 'por que – Porquê – por quê' },
      { letter: 'D', text: 'por quê – Porque – por que' },
      { letter: 'E', text: 'porquê – Por quê – porque' }
    ],
    correctLetter: 'A',
    generalExplanation: '1) "o porquê": substantivado com artigo "o" = porquê (junto e com acento);\n2) "Por que a pista...": pergunta no início da frase = Por que (separado e sem acento);\n3) "...porque havia": conjunção explicativa/causal em resposta = porque (junto e sem acento).',
    explanations: {
      A: 'CORRETA. porquê (substantivo com artigo) – Por que (início de pergunta) – porque (causal/explicativo).',
      B: 'INCORRETA. Inverte os empregos gramaticais.',
      C: 'INCORRETA. Uso incorreto.',
      D: 'INCORRETA. Uso incorreto.',
      E: 'INCORRETA. "Por quê" com acento é usado no final de frases interrogativas.'
    }
  },
  {
    id: 'por-q12',
    subjectId: 'portugues',
    topic: 'Sintaxe - Identificação do Sujeito e Predicado',
    difficulty: 'Médio',
    statement: 'Na oração "Chegaram ontem à noite os novos equipamentos de fiscalização do Detran", o sujeito gramatical da oração é:',
    lawReference: 'Sintaxe da Oração',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'os novos equipamentos de fiscalização do Detran.' },
      { letter: 'B', text: 'ontem à noite.' },
      { letter: 'C', text: 'indeterminado.' },
      { letter: 'D', text: 'inexistente.' },
      { letter: 'E', text: 'o agente de trânsito.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A frase está na ordem invertida (verbo + adjunto + sujeito). Colocando na ordem direta: "Os novos equipamentos de fiscalização do Detran (SUJEITO) chegaram (VERBO) ontem à noite (ADJUNTO)". O sujeito é simples, no plural ("os novos equipamentos...").',
    explanations: {
      A: 'CORRETA. Ordem direta: "Os novos equipamentos de fiscalização do Detran (sujeito) chegaram".',
      B: 'INCORRETA. "ontem à noite" é adjunto adverbial de tempo.',
      C: 'INCORRETA. O sujeito está explícito e determinado na oração.',
      D: 'INCORRETA. O verbo "chegar" é pessoal e possui sujeito claro.',
      E: 'INCORRETA. O agente não é mencionado na oração.'
    }
  },
  {
    id: 'por-q13',
    subjectId: 'portugues',
    topic: 'Pronomes Demonstrativos (Este, Esse, Aquele)',
    difficulty: 'Fácil',
    statement: 'Assinale a alternativa em que o uso do pronome demonstrativo atende à norma culta quanto à posição espacial:',
    lawReference: 'Pronomes Demonstrativos',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Guarde esta caneta que está aí na sua mão.' },
      { letter: 'B', text: 'Guarde essa caneta que está aí na sua mão.' },
      { letter: 'C', text: 'Guarde aquela caneta que está aqui na minha mão.' },
      { letter: 'D', text: 'Este documento que está com você na outra sala venceu.' },
      { letter: 'E', text: 'Esse terno que estou vestindo agora é novo.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Regra de posição espacial dos pronomes demonstrativos:\n- ESTE/ESTA/ESTO: próximo de quem fala (aqui comigo);\n- ESSE/ESSA/ESSO: próximo de quem escuta (aí com você);\n- AQUELE/AQUELA: distante de ambos (lá longe).\nComo a caneta está "aí na sua mão" (com o interlocutor), o pronome correto é ESSA.',
    explanations: {
      A: 'INCORRETA. "Esta" é para o que está com o falante (aqui).',
      B: 'CORRETA. "Essa" indica o objeto próximo do ouvinte ("aí na sua mão").',
      C: 'INCORRETA. "Aqui na minha mão" exige "esta", não "aquela".',
      D: 'INCORRETA. "Com você" exige "esse documento", não "este".',
      E: 'INCORRETA. "Que estou vestindo" exige "este terno".'
    }
  },
  {
    id: 'por-q14',
    subjectId: 'portugues',
    topic: 'Regência Nominal - Complemento Nominal',
    difficulty: 'Médio',
    statement: 'Assinale a opção em que a regência nominal está de acordo com a norma-padrão:',
    lawReference: 'Regência Nominal',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'O candidato demonstrou capacidade em resolver os problemas.' },
      { letter: 'B', text: 'O aluno era passível de punição segundo o regimento.' },
      { letter: 'C', text: 'O motorista estava alheio de tudo que acontecia ao redor.' },
      { letter: 'D', text: 'Ele é residente em São Paulo com preferência de morar no litoral.' },
      { letter: 'E', text: 'Fiquei imune contra as críticas da oposição.' }
    ],
    correctLetter: 'B',
    generalExplanation: '1) "Passível DE punição" está perfeitamente correto no padrão culto;\n2) "Capacidade DE resolver" (e não "em");\n3) "Alheio A tudo" (e não "de");\n4) "Imune A críticas" (e não "contra").',
    explanations: {
      A: 'INCORRETA. Regência de capacidade exige preposição "de" ("capacidade de resolver").',
      B: 'CORRETA. Regência correta: "passível DE punição".',
      C: 'INCORRETA. Regência de alheio exige preposição "a" ("alheio a tudo").',
      D: 'INCORRETA. Regência de preferência exige a preposição "por" ou "de" em contextos específicos, e o verbo preferir rege "a".',
      E: 'INCORRETA. Regência de imune exige preposição "a" ("imune a críticas").'
    }
  },
  {
    id: 'por-q15',
    subjectId: 'portugues',
    topic: 'Ortografia - Uso de X e CH',
    difficulty: 'Fácil',
    statement: 'Assinale a alternativa em que TODAS as palavras estão grafadas corretamente com X:',
    lawReference: 'Ortografia Oficial',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Enxada, ename, enxame, enxaguar.' },
      { letter: 'B', text: 'Encher, encharcar, enchouriçar, enchova.' },
      { letter: 'C', text: 'Chícara, chácara, xadrez, xarope.' },
      { letter: 'D', text: 'Faixa, mexerico, enxame, lixo.' },
      { letter: 'E', text: 'Puxar, coxixo, xadrez, xale.' }
    ],
    correctLetter: 'D',
    generalExplanation: 'Análise das grafias:\n- D: Faixa, mexerico, enxame, lixo são todas grafadas com X;\n- A: "ename" é incorreto (exame com x);\n- B: Encher, encharcar são com CH (derivadas de cheio, charco);\n- C: Xícara é com X (chícara está errado);\n- E: Cochicho é com CH.',
    explanations: {
      A: 'INCORRETA. Grafia incorreta em "ename".',
      B: 'INCORRETA. Palavras grafadas com CH.',
      C: 'INCORRETA. Xícara escreve-se com X.',
      D: 'CORRETA. Faixa, mexerico, enxame e lixo são todas com X.',
      E: 'INCORRETA. Cochicho escreve-se com CH.'
    }
  },
  {
    id: 'por-q16',
    subjectId: 'portugues',
    topic: 'Concordância Nominal e Adjetivos Compostos',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q16) Considerando a norma e o conteúdo programático de Concordância Nominal e Adjetivos Compostos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Concordância Nominal e Adjetivos Compostos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Concordância Nominal e Adjetivos Compostos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q17',
    subjectId: 'portugues',
    topic: 'Orações Subordinadas Adjetivas Explicativas e Restritivas',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q17) Considerando a norma e o conteúdo programático de Orações Subordinadas Adjetivas Explicativas e Restritivas, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Orações Subordinadas Adjetivas Explicativas e Restritivas)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Orações Subordinadas Adjetivas Explicativas e Restritivas exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q18',
    subjectId: 'portugues',
    topic: 'Orações Substantivas e Função Sintática do Que',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q18) Considerando a norma e o conteúdo programático de Orações Substantivas e Função Sintática do Que, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Orações Substantivas e Função Sintática do Que)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Orações Substantivas e Função Sintática do Que exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q19',
    subjectId: 'portugues',
    topic: 'Significação de Vocábulos - Sinônimos e Antônimos',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q19) Considerando a norma e o conteúdo programático de Significação de Vocábulos - Sinônimos e Antônimos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Significação de Vocábulos - Sinônimos e Antônimos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Significação de Vocábulos - Sinônimos e Antônimos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q20',
    subjectId: 'portugues',
    topic: 'Uso dos Travessões e Aspas em Textos Técnicos',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q20) Considerando a norma e o conteúdo programático de Uso dos Travessões e Aspas em Textos Técnicos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Uso dos Travessões e Aspas em Textos Técnicos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Uso dos Travessões e Aspas em Textos Técnicos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q21',
    subjectId: 'portugues',
    topic: 'Reescrita de Frases e Manutenção do Sentido Original',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q21) Considerando a norma e o conteúdo programático de Reescrita de Frases e Manutenção do Sentido Original, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Reescrita de Frases e Manutenção do Sentido Original)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Reescrita de Frases e Manutenção do Sentido Original exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q22',
    subjectId: 'portugues',
    topic: 'Flexão de Substantivos e Adjetivos',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q22) Considerando a norma e o conteúdo programático de Flexão de Substantivos e Adjetivos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Flexão de Substantivos e Adjetivos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Flexão de Substantivos e Adjetivos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q23',
    subjectId: 'portugues',
    topic: 'Formação de Palavras - Derivação e Composição',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q23) Considerando a norma e o conteúdo programático de Formação de Palavras - Derivação e Composição, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Formação de Palavras - Derivação e Composição)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Formação de Palavras - Derivação e Composição exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q24',
    subjectId: 'portugues',
    topic: 'Concordância Nominal e Adjetivos Compostos',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q24) Considerando a norma e o conteúdo programático de Concordância Nominal e Adjetivos Compostos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Concordância Nominal e Adjetivos Compostos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Concordância Nominal e Adjetivos Compostos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q25',
    subjectId: 'portugues',
    topic: 'Orações Subordinadas Adjetivas Explicativas e Restritivas',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q25) Considerando a norma e o conteúdo programático de Orações Subordinadas Adjetivas Explicativas e Restritivas, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Orações Subordinadas Adjetivas Explicativas e Restritivas)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Orações Subordinadas Adjetivas Explicativas e Restritivas exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q26',
    subjectId: 'portugues',
    topic: 'Orações Substantivas e Função Sintática do Que',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q26) Considerando a norma e o conteúdo programático de Orações Substantivas e Função Sintática do Que, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Orações Substantivas e Função Sintática do Que)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Orações Substantivas e Função Sintática do Que exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q27',
    subjectId: 'portugues',
    topic: 'Significação de Vocábulos - Sinônimos e Antônimos',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q27) Considerando a norma e o conteúdo programático de Significação de Vocábulos - Sinônimos e Antônimos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Significação de Vocábulos - Sinônimos e Antônimos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Significação de Vocábulos - Sinônimos e Antônimos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q28',
    subjectId: 'portugues',
    topic: 'Uso dos Travessões e Aspas em Textos Técnicos',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q28) Considerando a norma e o conteúdo programático de Uso dos Travessões e Aspas em Textos Técnicos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Uso dos Travessões e Aspas em Textos Técnicos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Uso dos Travessões e Aspas em Textos Técnicos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q29',
    subjectId: 'portugues',
    topic: 'Reescrita de Frases e Manutenção do Sentido Original',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q29) Considerando a norma e o conteúdo programático de Reescrita de Frases e Manutenção do Sentido Original, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Reescrita de Frases e Manutenção do Sentido Original)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Reescrita de Frases e Manutenção do Sentido Original exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q30',
    subjectId: 'portugues',
    topic: 'Flexão de Substantivos e Adjetivos',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q30) Considerando a norma e o conteúdo programático de Flexão de Substantivos e Adjetivos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Flexão de Substantivos e Adjetivos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Flexão de Substantivos e Adjetivos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q31',
    subjectId: 'portugues',
    topic: 'Formação de Palavras - Derivação e Composição',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q31) Considerando a norma e o conteúdo programático de Formação de Palavras - Derivação e Composição, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Formação de Palavras - Derivação e Composição)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Formação de Palavras - Derivação e Composição exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q32',
    subjectId: 'portugues',
    topic: 'Concordância Nominal e Adjetivos Compostos',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q32) Considerando a norma e o conteúdo programático de Concordância Nominal e Adjetivos Compostos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Concordância Nominal e Adjetivos Compostos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Concordância Nominal e Adjetivos Compostos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q33',
    subjectId: 'portugues',
    topic: 'Orações Subordinadas Adjetivas Explicativas e Restritivas',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q33) Considerando a norma e o conteúdo programático de Orações Subordinadas Adjetivas Explicativas e Restritivas, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Orações Subordinadas Adjetivas Explicativas e Restritivas)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Orações Subordinadas Adjetivas Explicativas e Restritivas exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q34',
    subjectId: 'portugues',
    topic: 'Orações Substantivas e Função Sintática do Que',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q34) Considerando a norma e o conteúdo programático de Orações Substantivas e Função Sintática do Que, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Orações Substantivas e Função Sintática do Que)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Orações Substantivas e Função Sintática do Que exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q35',
    subjectId: 'portugues',
    topic: 'Significação de Vocábulos - Sinônimos e Antônimos',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q35) Considerando a norma e o conteúdo programático de Significação de Vocábulos - Sinônimos e Antônimos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Significação de Vocábulos - Sinônimos e Antônimos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Significação de Vocábulos - Sinônimos e Antônimos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q36',
    subjectId: 'portugues',
    topic: 'Uso dos Travessões e Aspas em Textos Técnicos',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q36) Considerando a norma e o conteúdo programático de Uso dos Travessões e Aspas em Textos Técnicos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Uso dos Travessões e Aspas em Textos Técnicos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Uso dos Travessões e Aspas em Textos Técnicos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q37',
    subjectId: 'portugues',
    topic: 'Reescrita de Frases e Manutenção do Sentido Original',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q37) Considerando a norma e o conteúdo programático de Reescrita de Frases e Manutenção do Sentido Original, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Reescrita de Frases e Manutenção do Sentido Original)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Reescrita de Frases e Manutenção do Sentido Original exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q38',
    subjectId: 'portugues',
    topic: 'Flexão de Substantivos e Adjetivos',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q38) Considerando a norma e o conteúdo programático de Flexão de Substantivos e Adjetivos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Flexão de Substantivos e Adjetivos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Flexão de Substantivos e Adjetivos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q39',
    subjectId: 'portugues',
    topic: 'Formação de Palavras - Derivação e Composição',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q39) Considerando a norma e o conteúdo programático de Formação de Palavras - Derivação e Composição, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Formação de Palavras - Derivação e Composição)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Formação de Palavras - Derivação e Composição exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q40',
    subjectId: 'portugues',
    topic: 'Concordância Nominal e Adjetivos Compostos',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q40) Considerando a norma e o conteúdo programático de Concordância Nominal e Adjetivos Compostos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Concordância Nominal e Adjetivos Compostos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Concordância Nominal e Adjetivos Compostos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q41',
    subjectId: 'portugues',
    topic: 'Orações Subordinadas Adjetivas Explicativas e Restritivas',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q41) Considerando a norma e o conteúdo programático de Orações Subordinadas Adjetivas Explicativas e Restritivas, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Orações Subordinadas Adjetivas Explicativas e Restritivas)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Orações Subordinadas Adjetivas Explicativas e Restritivas exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q42',
    subjectId: 'portugues',
    topic: 'Orações Substantivas e Função Sintática do Que',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q42) Considerando a norma e o conteúdo programático de Orações Substantivas e Função Sintática do Que, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Orações Substantivas e Função Sintática do Que)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Orações Substantivas e Função Sintática do Que exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q43',
    subjectId: 'portugues',
    topic: 'Significação de Vocábulos - Sinônimos e Antônimos',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q43) Considerando a norma e o conteúdo programático de Significação de Vocábulos - Sinônimos e Antônimos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Significação de Vocábulos - Sinônimos e Antônimos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Significação de Vocábulos - Sinônimos e Antônimos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q44',
    subjectId: 'portugues',
    topic: 'Uso dos Travessões e Aspas em Textos Técnicos',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q44) Considerando a norma e o conteúdo programático de Uso dos Travessões e Aspas em Textos Técnicos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Uso dos Travessões e Aspas em Textos Técnicos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Uso dos Travessões e Aspas em Textos Técnicos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q45',
    subjectId: 'portugues',
    topic: 'Reescrita de Frases e Manutenção do Sentido Original',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q45) Considerando a norma e o conteúdo programático de Reescrita de Frases e Manutenção do Sentido Original, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Reescrita de Frases e Manutenção do Sentido Original)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Reescrita de Frases e Manutenção do Sentido Original exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q46',
    subjectId: 'portugues',
    topic: 'Flexão de Substantivos e Adjetivos',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q46) Considerando a norma e o conteúdo programático de Flexão de Substantivos e Adjetivos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Flexão de Substantivos e Adjetivos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Flexão de Substantivos e Adjetivos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q47',
    subjectId: 'portugues',
    topic: 'Formação de Palavras - Derivação e Composição',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q47) Considerando a norma e o conteúdo programático de Formação de Palavras - Derivação e Composição, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Formação de Palavras - Derivação e Composição)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Formação de Palavras - Derivação e Composição exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q48',
    subjectId: 'portugues',
    topic: 'Concordância Nominal e Adjetivos Compostos',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q48) Considerando a norma e o conteúdo programático de Concordância Nominal e Adjetivos Compostos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Concordância Nominal e Adjetivos Compostos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Concordância Nominal e Adjetivos Compostos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q49',
    subjectId: 'portugues',
    topic: 'Orações Subordinadas Adjetivas Explicativas e Restritivas',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q49) Considerando a norma e o conteúdo programático de Orações Subordinadas Adjetivas Explicativas e Restritivas, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Orações Subordinadas Adjetivas Explicativas e Restritivas)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Orações Subordinadas Adjetivas Explicativas e Restritivas exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q50',
    subjectId: 'portugues',
    topic: 'Orações Substantivas e Função Sintática do Que',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q50) Considerando a norma e o conteúdo programático de Orações Substantivas e Função Sintática do Que, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Orações Substantivas e Função Sintática do Que)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Orações Substantivas e Função Sintática do Que exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q51',
    subjectId: 'portugues',
    topic: 'Significação de Vocábulos - Sinônimos e Antônimos',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q51) Considerando a norma e o conteúdo programático de Significação de Vocábulos - Sinônimos e Antônimos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Significação de Vocábulos - Sinônimos e Antônimos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Significação de Vocábulos - Sinônimos e Antônimos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q52',
    subjectId: 'portugues',
    topic: 'Uso dos Travessões e Aspas em Textos Técnicos',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q52) Considerando a norma e o conteúdo programático de Uso dos Travessões e Aspas em Textos Técnicos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Uso dos Travessões e Aspas em Textos Técnicos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Uso dos Travessões e Aspas em Textos Técnicos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q53',
    subjectId: 'portugues',
    topic: 'Reescrita de Frases e Manutenção do Sentido Original',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q53) Considerando a norma e o conteúdo programático de Reescrita de Frases e Manutenção do Sentido Original, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Reescrita de Frases e Manutenção do Sentido Original)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Reescrita de Frases e Manutenção do Sentido Original exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q54',
    subjectId: 'portugues',
    topic: 'Flexão de Substantivos e Adjetivos',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q54) Considerando a norma e o conteúdo programático de Flexão de Substantivos e Adjetivos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Flexão de Substantivos e Adjetivos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Flexão de Substantivos e Adjetivos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q55',
    subjectId: 'portugues',
    topic: 'Formação de Palavras - Derivação e Composição',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q55) Considerando a norma e o conteúdo programático de Formação de Palavras - Derivação e Composição, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Formação de Palavras - Derivação e Composição)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Formação de Palavras - Derivação e Composição exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q56',
    subjectId: 'portugues',
    topic: 'Concordância Nominal e Adjetivos Compostos',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q56) Considerando a norma e o conteúdo programático de Concordância Nominal e Adjetivos Compostos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Concordância Nominal e Adjetivos Compostos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Concordância Nominal e Adjetivos Compostos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q57',
    subjectId: 'portugues',
    topic: 'Orações Subordinadas Adjetivas Explicativas e Restritivas',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q57) Considerando a norma e o conteúdo programático de Orações Subordinadas Adjetivas Explicativas e Restritivas, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Orações Subordinadas Adjetivas Explicativas e Restritivas)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Orações Subordinadas Adjetivas Explicativas e Restritivas exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q58',
    subjectId: 'portugues',
    topic: 'Orações Substantivas e Função Sintática do Que',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q58) Considerando a norma e o conteúdo programático de Orações Substantivas e Função Sintática do Que, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Orações Substantivas e Função Sintática do Que)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Orações Substantivas e Função Sintática do Que exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q59',
    subjectId: 'portugues',
    topic: 'Significação de Vocábulos - Sinônimos e Antônimos',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q59) Considerando a norma e o conteúdo programático de Significação de Vocábulos - Sinônimos e Antônimos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Significação de Vocábulos - Sinônimos e Antônimos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Significação de Vocábulos - Sinônimos e Antônimos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q60',
    subjectId: 'portugues',
    topic: 'Uso dos Travessões e Aspas em Textos Técnicos',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q60) Considerando a norma e o conteúdo programático de Uso dos Travessões e Aspas em Textos Técnicos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Uso dos Travessões e Aspas em Textos Técnicos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Uso dos Travessões e Aspas em Textos Técnicos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q61',
    subjectId: 'portugues',
    topic: 'Reescrita de Frases e Manutenção do Sentido Original',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q61) Considerando a norma e o conteúdo programático de Reescrita de Frases e Manutenção do Sentido Original, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Reescrita de Frases e Manutenção do Sentido Original)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Reescrita de Frases e Manutenção do Sentido Original exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q62',
    subjectId: 'portugues',
    topic: 'Flexão de Substantivos e Adjetivos',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q62) Considerando a norma e o conteúdo programático de Flexão de Substantivos e Adjetivos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Flexão de Substantivos e Adjetivos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Flexão de Substantivos e Adjetivos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q63',
    subjectId: 'portugues',
    topic: 'Formação de Palavras - Derivação e Composição',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q63) Considerando a norma e o conteúdo programático de Formação de Palavras - Derivação e Composição, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Formação de Palavras - Derivação e Composição)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Formação de Palavras - Derivação e Composição exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q64',
    subjectId: 'portugues',
    topic: 'Concordância Nominal e Adjetivos Compostos',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q64) Considerando a norma e o conteúdo programático de Concordância Nominal e Adjetivos Compostos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Concordância Nominal e Adjetivos Compostos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Concordância Nominal e Adjetivos Compostos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q65',
    subjectId: 'portugues',
    topic: 'Orações Subordinadas Adjetivas Explicativas e Restritivas',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q65) Considerando a norma e o conteúdo programático de Orações Subordinadas Adjetivas Explicativas e Restritivas, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Orações Subordinadas Adjetivas Explicativas e Restritivas)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Orações Subordinadas Adjetivas Explicativas e Restritivas exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q66',
    subjectId: 'portugues',
    topic: 'Orações Substantivas e Função Sintática do Que',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q66) Considerando a norma e o conteúdo programático de Orações Substantivas e Função Sintática do Que, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Orações Substantivas e Função Sintática do Que)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Orações Substantivas e Função Sintática do Que exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q67',
    subjectId: 'portugues',
    topic: 'Significação de Vocábulos - Sinônimos e Antônimos',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q67) Considerando a norma e o conteúdo programático de Significação de Vocábulos - Sinônimos e Antônimos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Significação de Vocábulos - Sinônimos e Antônimos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Significação de Vocábulos - Sinônimos e Antônimos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q68',
    subjectId: 'portugues',
    topic: 'Uso dos Travessões e Aspas em Textos Técnicos',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q68) Considerando a norma e o conteúdo programático de Uso dos Travessões e Aspas em Textos Técnicos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Uso dos Travessões e Aspas em Textos Técnicos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Uso dos Travessões e Aspas em Textos Técnicos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q69',
    subjectId: 'portugues',
    topic: 'Reescrita de Frases e Manutenção do Sentido Original',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q69) Considerando a norma e o conteúdo programático de Reescrita de Frases e Manutenção do Sentido Original, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Reescrita de Frases e Manutenção do Sentido Original)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Reescrita de Frases e Manutenção do Sentido Original exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q70',
    subjectId: 'portugues',
    topic: 'Flexão de Substantivos e Adjetivos',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q70) Considerando a norma e o conteúdo programático de Flexão de Substantivos e Adjetivos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Flexão de Substantivos e Adjetivos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B', text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C', text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D', text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E', text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Flexão de Substantivos e Adjetivos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q16',
    subjectId: 'portugues',
    topic: 'Concordância Nominal e Adjetivos Compostos',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q16) Considerando a norma e o conteúdo programático de Concordância Nominal e Adjetivos Compostos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Concordância Nominal e Adjetivos Compostos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Concordância Nominal e Adjetivos Compostos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q17',
    subjectId: 'portugues',
    topic: 'Orações Subordinadas Adjetivas Explicativas e Restritivas',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q17) Considerando a norma e o conteúdo programático de Orações Subordinadas Adjetivas Explicativas e Restritivas, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Orações Subordinadas Adjetivas Explicativas e Restritivas)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Orações Subordinadas Adjetivas Explicativas e Restritivas exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q18',
    subjectId: 'portugues',
    topic: 'Orações Substantivas e Função Sintática do Que',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q18) Considerando a norma e o conteúdo programático de Orações Substantivas e Função Sintática do Que, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Orações Substantivas e Função Sintática do Que)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Orações Substantivas e Função Sintática do Que exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q19',
    subjectId: 'portugues',
    topic: 'Significação de Vocábulos - Sinônimos e Antônimos',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q19) Considerando a norma e o conteúdo programático de Significação de Vocábulos - Sinônimos e Antônimos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Significação de Vocábulos - Sinônimos e Antônimos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Significação de Vocábulos - Sinônimos e Antônimos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q20',
    subjectId: 'portugues',
    topic: 'Uso dos Travessões e Aspas em Textos Técnicos',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q20) Considerando a norma e o conteúdo programático de Uso dos Travessões e Aspas em Textos Técnicos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Uso dos Travessões e Aspas em Textos Técnicos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Uso dos Travessões e Aspas em Textos Técnicos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q21',
    subjectId: 'portugues',
    topic: 'Reescrita de Frases e Manutenção do Sentido Original',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q21) Considerando a norma e o conteúdo programático de Reescrita de Frases e Manutenção do Sentido Original, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Reescrita de Frases e Manutenção do Sentido Original)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Reescrita de Frases e Manutenção do Sentido Original exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q22',
    subjectId: 'portugues',
    topic: 'Flexão de Substantivos e Adjetivos',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q22) Considerando a norma e o conteúdo programático de Flexão de Substantivos e Adjetivos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Flexão de Substantivos e Adjetivos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Flexão de Substantivos e Adjetivos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q23',
    subjectId: 'portugues',
    topic: 'Formação de Palavras - Derivação e Composição',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q23) Considerando a norma e o conteúdo programático de Formação de Palavras - Derivação e Composição, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Formação de Palavras - Derivação e Composição)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Formação de Palavras - Derivação e Composição exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q24',
    subjectId: 'portugues',
    topic: 'Concordância Nominal e Adjetivos Compostos',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q24) Considerando a norma e o conteúdo programático de Concordância Nominal e Adjetivos Compostos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Concordância Nominal e Adjetivos Compostos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Concordância Nominal e Adjetivos Compostos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q25',
    subjectId: 'portugues',
    topic: 'Orações Subordinadas Adjetivas Explicativas e Restritivas',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q25) Considerando a norma e o conteúdo programático de Orações Subordinadas Adjetivas Explicativas e Restritivas, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Orações Subordinadas Adjetivas Explicativas e Restritivas)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Orações Subordinadas Adjetivas Explicativas e Restritivas exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q26',
    subjectId: 'portugues',
    topic: 'Orações Substantivas e Função Sintática do Que',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q26) Considerando a norma e o conteúdo programático de Orações Substantivas e Função Sintática do Que, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Orações Substantivas e Função Sintática do Que)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Orações Substantivas e Função Sintática do Que exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q27',
    subjectId: 'portugues',
    topic: 'Significação de Vocábulos - Sinônimos e Antônimos',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q27) Considerando a norma e o conteúdo programático de Significação de Vocábulos - Sinônimos e Antônimos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Significação de Vocábulos - Sinônimos e Antônimos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Significação de Vocábulos - Sinônimos e Antônimos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q28',
    subjectId: 'portugues',
    topic: 'Uso dos Travessões e Aspas em Textos Técnicos',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q28) Considerando a norma e o conteúdo programático de Uso dos Travessões e Aspas em Textos Técnicos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Uso dos Travessões e Aspas em Textos Técnicos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Uso dos Travessões e Aspas em Textos Técnicos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q29',
    subjectId: 'portugues',
    topic: 'Reescrita de Frases e Manutenção do Sentido Original',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q29) Considerando a norma e o conteúdo programático de Reescrita de Frases e Manutenção do Sentido Original, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Reescrita de Frases e Manutenção do Sentido Original)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Reescrita de Frases e Manutenção do Sentido Original exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q30',
    subjectId: 'portugues',
    topic: 'Flexão de Substantivos e Adjetivos',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q30) Considerando a norma e o conteúdo programático de Flexão de Substantivos e Adjetivos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Flexão de Substantivos e Adjetivos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Flexão de Substantivos e Adjetivos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q31',
    subjectId: 'portugues',
    topic: 'Formação de Palavras - Derivação e Composição',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q31) Considerando a norma e o conteúdo programático de Formação de Palavras - Derivação e Composição, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Formação de Palavras - Derivação e Composição)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Formação de Palavras - Derivação e Composição exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q32',
    subjectId: 'portugues',
    topic: 'Concordância Nominal e Adjetivos Compostos',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q32) Considerando a norma e o conteúdo programático de Concordância Nominal e Adjetivos Compostos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Concordância Nominal e Adjetivos Compostos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Concordância Nominal e Adjetivos Compostos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q33',
    subjectId: 'portugues',
    topic: 'Orações Subordinadas Adjetivas Explicativas e Restritivas',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q33) Considerando a norma e o conteúdo programático de Orações Subordinadas Adjetivas Explicativas e Restritivas, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Orações Subordinadas Adjetivas Explicativas e Restritivas)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Orações Subordinadas Adjetivas Explicativas e Restritivas exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q34',
    subjectId: 'portugues',
    topic: 'Orações Substantivas e Função Sintática do Que',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q34) Considerando a norma e o conteúdo programático de Orações Substantivas e Função Sintática do Que, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Orações Substantivas e Função Sintática do Que)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Orações Substantivas e Função Sintática do Que exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q35',
    subjectId: 'portugues',
    topic: 'Significação de Vocábulos - Sinônimos e Antônimos',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q35) Considerando a norma e o conteúdo programático de Significação de Vocábulos - Sinônimos e Antônimos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Significação de Vocábulos - Sinônimos e Antônimos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Significação de Vocábulos - Sinônimos e Antônimos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q36',
    subjectId: 'portugues',
    topic: 'Uso dos Travessões e Aspas em Textos Técnicos',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q36) Considerando a norma e o conteúdo programático de Uso dos Travessões e Aspas em Textos Técnicos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Uso dos Travessões e Aspas em Textos Técnicos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Uso dos Travessões e Aspas em Textos Técnicos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q37',
    subjectId: 'portugues',
    topic: 'Reescrita de Frases e Manutenção do Sentido Original',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q37) Considerando a norma e o conteúdo programático de Reescrita de Frases e Manutenção do Sentido Original, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Reescrita de Frases e Manutenção do Sentido Original)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Reescrita de Frases e Manutenção do Sentido Original exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q38',
    subjectId: 'portugues',
    topic: 'Flexão de Substantivos e Adjetivos',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q38) Considerando a norma e o conteúdo programático de Flexão de Substantivos e Adjetivos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Flexão de Substantivos e Adjetivos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Flexão de Substantivos e Adjetivos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q39',
    subjectId: 'portugues',
    topic: 'Formação de Palavras - Derivação e Composição',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q39) Considerando a norma e o conteúdo programático de Formação de Palavras - Derivação e Composição, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Formação de Palavras - Derivação e Composição)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Formação de Palavras - Derivação e Composição exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q40',
    subjectId: 'portugues',
    topic: 'Concordância Nominal e Adjetivos Compostos',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q40) Considerando a norma e o conteúdo programático de Concordância Nominal e Adjetivos Compostos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Concordância Nominal e Adjetivos Compostos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Concordância Nominal e Adjetivos Compostos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q41',
    subjectId: 'portugues',
    topic: 'Orações Subordinadas Adjetivas Explicativas e Restritivas',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q41) Considerando a norma e o conteúdo programático de Orações Subordinadas Adjetivas Explicativas e Restritivas, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Orações Subordinadas Adjetivas Explicativas e Restritivas)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Orações Subordinadas Adjetivas Explicativas e Restritivas exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q42',
    subjectId: 'portugues',
    topic: 'Orações Substantivas e Função Sintática do Que',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q42) Considerando a norma e o conteúdo programático de Orações Substantivas e Função Sintática do Que, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Orações Substantivas e Função Sintática do Que)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Orações Substantivas e Função Sintática do Que exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q43',
    subjectId: 'portugues',
    topic: 'Significação de Vocábulos - Sinônimos e Antônimos',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q43) Considerando a norma e o conteúdo programático de Significação de Vocábulos - Sinônimos e Antônimos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Significação de Vocábulos - Sinônimos e Antônimos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Significação de Vocábulos - Sinônimos e Antônimos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q44',
    subjectId: 'portugues',
    topic: 'Uso dos Travessões e Aspas em Textos Técnicos',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q44) Considerando a norma e o conteúdo programático de Uso dos Travessões e Aspas em Textos Técnicos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Uso dos Travessões e Aspas em Textos Técnicos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Uso dos Travessões e Aspas em Textos Técnicos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q45',
    subjectId: 'portugues',
    topic: 'Reescrita de Frases e Manutenção do Sentido Original',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q45) Considerando a norma e o conteúdo programático de Reescrita de Frases e Manutenção do Sentido Original, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Reescrita de Frases e Manutenção do Sentido Original)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Reescrita de Frases e Manutenção do Sentido Original exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q46',
    subjectId: 'portugues',
    topic: 'Flexão de Substantivos e Adjetivos',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q46) Considerando a norma e o conteúdo programático de Flexão de Substantivos e Adjetivos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Flexão de Substantivos e Adjetivos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Flexão de Substantivos e Adjetivos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q47',
    subjectId: 'portugues',
    topic: 'Formação de Palavras - Derivação e Composição',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q47) Considerando a norma e o conteúdo programático de Formação de Palavras - Derivação e Composição, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Formação de Palavras - Derivação e Composição)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Formação de Palavras - Derivação e Composição exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q48',
    subjectId: 'portugues',
    topic: 'Concordância Nominal e Adjetivos Compostos',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q48) Considerando a norma e o conteúdo programático de Concordância Nominal e Adjetivos Compostos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Concordância Nominal e Adjetivos Compostos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Concordância Nominal e Adjetivos Compostos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q49',
    subjectId: 'portugues',
    topic: 'Orações Subordinadas Adjetivas Explicativas e Restritivas',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q49) Considerando a norma e o conteúdo programático de Orações Subordinadas Adjetivas Explicativas e Restritivas, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Orações Subordinadas Adjetivas Explicativas e Restritivas)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Orações Subordinadas Adjetivas Explicativas e Restritivas exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q50',
    subjectId: 'portugues',
    topic: 'Orações Substantivas e Função Sintática do Que',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q50) Considerando a norma e o conteúdo programático de Orações Substantivas e Função Sintática do Que, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Orações Substantivas e Função Sintática do Que)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Orações Substantivas e Função Sintática do Que exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q51',
    subjectId: 'portugues',
    topic: 'Significação de Vocábulos - Sinônimos e Antônimos',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q51) Considerando a norma e o conteúdo programático de Significação de Vocábulos - Sinônimos e Antônimos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Significação de Vocábulos - Sinônimos e Antônimos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Significação de Vocábulos - Sinônimos e Antônimos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q52',
    subjectId: 'portugues',
    topic: 'Uso dos Travessões e Aspas em Textos Técnicos',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q52) Considerando a norma e o conteúdo programático de Uso dos Travessões e Aspas em Textos Técnicos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Uso dos Travessões e Aspas em Textos Técnicos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Uso dos Travessões e Aspas em Textos Técnicos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q53',
    subjectId: 'portugues',
    topic: 'Reescrita de Frases e Manutenção do Sentido Original',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q53) Considerando a norma e o conteúdo programático de Reescrita de Frases e Manutenção do Sentido Original, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Reescrita de Frases e Manutenção do Sentido Original)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Reescrita de Frases e Manutenção do Sentido Original exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q54',
    subjectId: 'portugues',
    topic: 'Flexão de Substantivos e Adjetivos',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q54) Considerando a norma e o conteúdo programático de Flexão de Substantivos e Adjetivos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Flexão de Substantivos e Adjetivos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Flexão de Substantivos e Adjetivos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q55',
    subjectId: 'portugues',
    topic: 'Formação de Palavras - Derivação e Composição',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q55) Considerando a norma e o conteúdo programático de Formação de Palavras - Derivação e Composição, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Formação de Palavras - Derivação e Composição)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Formação de Palavras - Derivação e Composição exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q56',
    subjectId: 'portugues',
    topic: 'Concordância Nominal e Adjetivos Compostos',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q56) Considerando a norma e o conteúdo programático de Concordância Nominal e Adjetivos Compostos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Concordância Nominal e Adjetivos Compostos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Concordância Nominal e Adjetivos Compostos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q57',
    subjectId: 'portugues',
    topic: 'Orações Subordinadas Adjetivas Explicativas e Restritivas',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q57) Considerando a norma e o conteúdo programático de Orações Subordinadas Adjetivas Explicativas e Restritivas, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Orações Subordinadas Adjetivas Explicativas e Restritivas)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Orações Subordinadas Adjetivas Explicativas e Restritivas exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q58',
    subjectId: 'portugues',
    topic: 'Orações Substantivas e Função Sintática do Que',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q58) Considerando a norma e o conteúdo programático de Orações Substantivas e Função Sintática do Que, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Orações Substantivas e Função Sintática do Que)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Orações Substantivas e Função Sintática do Que exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q59',
    subjectId: 'portugues',
    topic: 'Significação de Vocábulos - Sinônimos e Antônimos',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q59) Considerando a norma e o conteúdo programático de Significação de Vocábulos - Sinônimos e Antônimos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Significação de Vocábulos - Sinônimos e Antônimos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Significação de Vocábulos - Sinônimos e Antônimos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q60',
    subjectId: 'portugues',
    topic: 'Uso dos Travessões e Aspas em Textos Técnicos',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q60) Considerando a norma e o conteúdo programático de Uso dos Travessões e Aspas em Textos Técnicos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Uso dos Travessões e Aspas em Textos Técnicos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Uso dos Travessões e Aspas em Textos Técnicos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q61',
    subjectId: 'portugues',
    topic: 'Reescrita de Frases e Manutenção do Sentido Original',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q61) Considerando a norma e o conteúdo programático de Reescrita de Frases e Manutenção do Sentido Original, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Reescrita de Frases e Manutenção do Sentido Original)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Reescrita de Frases e Manutenção do Sentido Original exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q62',
    subjectId: 'portugues',
    topic: 'Flexão de Substantivos e Adjetivos',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q62) Considerando a norma e o conteúdo programático de Flexão de Substantivos e Adjetivos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Flexão de Substantivos e Adjetivos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Flexão de Substantivos e Adjetivos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q63',
    subjectId: 'portugues',
    topic: 'Formação de Palavras - Derivação e Composição',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q63) Considerando a norma e o conteúdo programático de Formação de Palavras - Derivação e Composição, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Formação de Palavras - Derivação e Composição)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Formação de Palavras - Derivação e Composição exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q64',
    subjectId: 'portugues',
    topic: 'Concordância Nominal e Adjetivos Compostos',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q64) Considerando a norma e o conteúdo programático de Concordância Nominal e Adjetivos Compostos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Concordância Nominal e Adjetivos Compostos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Concordância Nominal e Adjetivos Compostos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q65',
    subjectId: 'portugues',
    topic: 'Orações Subordinadas Adjetivas Explicativas e Restritivas',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q65) Considerando a norma e o conteúdo programático de Orações Subordinadas Adjetivas Explicativas e Restritivas, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Orações Subordinadas Adjetivas Explicativas e Restritivas)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Orações Subordinadas Adjetivas Explicativas e Restritivas exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q66',
    subjectId: 'portugues',
    topic: 'Orações Substantivas e Função Sintática do Que',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q66) Considerando a norma e o conteúdo programático de Orações Substantivas e Função Sintática do Que, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Orações Substantivas e Função Sintática do Que)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Orações Substantivas e Função Sintática do Que exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q67',
    subjectId: 'portugues',
    topic: 'Significação de Vocábulos - Sinônimos e Antônimos',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q67) Considerando a norma e o conteúdo programático de Significação de Vocábulos - Sinônimos e Antônimos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Significação de Vocábulos - Sinônimos e Antônimos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Significação de Vocábulos - Sinônimos e Antônimos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q68',
    subjectId: 'portugues',
    topic: 'Uso dos Travessões e Aspas em Textos Técnicos',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q68) Considerando a norma e o conteúdo programático de Uso dos Travessões e Aspas em Textos Técnicos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Uso dos Travessões e Aspas em Textos Técnicos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Uso dos Travessões e Aspas em Textos Técnicos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q69',
    subjectId: 'portugues',
    topic: 'Reescrita de Frases e Manutenção do Sentido Original',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q69) Considerando a norma e o conteúdo programático de Reescrita de Frases e Manutenção do Sentido Original, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Reescrita de Frases e Manutenção do Sentido Original)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Reescrita de Frases e Manutenção do Sentido Original exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'por-q70',
    subjectId: 'portugues',
    topic: 'Flexão de Substantivos e Adjetivos',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q70) Considerando a norma e o conteúdo programático de Flexão de Substantivos e Adjetivos, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Flexão de Substantivos e Adjetivos)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Flexão de Substantivos e Adjetivos exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  }
];
