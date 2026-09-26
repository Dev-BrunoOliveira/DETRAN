import { Question } from '../../types';

export const portuguesQuestions: Question[] = [
  {
    id: 'por-q01',
    subjectId: 'portugues',
    topic: 'Concordância Verbal e Voz Passiva',
    difficulty: 'Médio',
    statement: '(Prova Real DETRAN-SP / FCC) Há ocorrência de forma verbal na voz passiva e pleno atendimento às normas de concordância na frase:',
    lawReference: 'Sintaxe de Voz Passiva e Concordância Verbal',
    bancaTag: 'Prova Oficial DETRAN-SP - FCC',
    options: [
      { letter: 'A', text: 'Quando alguém enuncia verdades incontestáveis não precisam lançar mão de qualquer esforço para prová-las.' },
      { letter: 'B', text: 'Mesmo nas declarações de amor podem haver promessas que, por conta de sua ênfase, não se poderá cumprir.' },
      { letter: 'C', text: 'Não são em todas as circunstâncias que a gente é capaz de defender as opiniões que emitem com segurança.' },
      { letter: 'D', text: 'As artes e as artimanhas que sejam propagadas com ênfase podem indicar a insegurança de quem delas se vale.' },
      { letter: 'E', text: 'São paradoxais as promessas feitas com tanta ênfase, que parece apontar, de fato, para sua fragilidade.' }
    ],
    correctLetter: 'D',
    generalExplanation: 'Na frase da opção D, a locução verbal "sejam propagadas" está na voz passiva analítica e a concordância verbal está perfeita: "As artes e as artimanhas... podem indicar". Nas demais opções há erros graves de concordância (ex: "podem haver" na B é incorreto, pois haver é impessoal e transmite a impessoalidade ao auxiliar: "pode haver").',
    explanations: {
      A: 'INCORRETA. Erro de concordância: "alguém... não precisa".',
      B: 'INCORRETA. O verbo "haver" no sentido de existir é impessoal: o correto é "pode haver".',
      C: 'INCORRETA. Erro de concordância: "a gente... emite".',
      D: 'CORRETA. Voz passiva analítica "sejam propagadas" e concordância plural irretocável.',
      E: 'INCORRETA. Erro de concordância em "parece apontar" (deveria ser "parecem apontar").'
    }
  },
  {
    id: 'por-q02',
    subjectId: 'portugues',
    topic: 'Sintaxe da Oração Subordinada Substantiva',
    difficulty: 'Difícil',
    statement: '(Prova Real DETRAN-SP / FCC) No período "E penso que a legislação de trânsito traz segurança", a oração destacada ("que a legislação de trânsito traz segurança") exerce a função de Oração Subordinada Substantiva Objetiva Direta. Ela exerce a MESMA função sintática que a oração destacada em:',
    lawReference: 'Sintaxe do Período Composto',
    bancaTag: 'Prova Oficial DETRAN-SP - FCC',
    options: [
      { letter: 'A', text: 'O fiscal de trânsito não previu QUE A MULTA SERIA ANULADA.' },
      { letter: 'B', text: 'Seria preferível QUE TODOS RESPEITASSEM O LIMITE DE VELOCIDADE.' },
      { letter: 'C', text: 'A autuação será mantida SE NÃO HOUVER RECURSO.' },
      { letter: 'D', text: 'EMBORA TENHA RECORRIDO, o motorista pagou a multa.' },
      { letter: 'E', text: 'Os agentes se reuniram PARA DEBATIR O PLANO DE SEGURANÇA.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Na frase-matriz, o verbo "penso" é transitivo direto e exige complemento sem preposição ("que a legislação..."), que é uma Oração Subordinada Substantiva Objetiva Direta. Na opção A, o verbo "previu" também é VTD e exige Objeto Direto: "que a multa seria anulada".',
    explanations: {
      A: 'CORRETA. Oração Subordinada Substantiva Objetiva Direta do verbo transitivo direto "previu".',
      B: 'INCORRETA. É Oração Subordinada Substantiva Subjetiva (sujeito de "Seria preferível").',
      C: 'INCORRETA. É Oração Subordinada Adverbial Condicional.',
      D: 'INCORRETA. É Oração Subordinada Adverbial Concessiva.',
      E: 'INCORRETA. É Oração Subordinada Adverbial Final.'
    }
  },
  {
    id: 'por-q03',
    subjectId: 'portugues',
    topic: 'Emprego do Acento Indicativo de Crase',
    difficulty: 'Médio',
    statement: 'Assinale a alternativa em que o uso do acento indicativo de crase está inteiramente CORRETO e de acordo com a norma-padrão:',
    lawReference: 'Regra Geral e Casos Específicos de Crase',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'O agente de trânsito dirigiu-se à uma motorista para solicitar a CNH.' },
      { letter: 'B', text: 'A fiscalização de trânsito visa à garantir a segurança de todos nas rodovias.' },
      { letter: 'C', text: 'Entregou o recurso de defesa à junta administrativa dentro do prazo legal.' },
      { letter: 'D', text: 'Fomos à pé até o posto do DETRAN para evitar o engarrafamento.' },
      { letter: 'E', text: 'O motorista começou à acelerar assim que o sinal ficou amarelo.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'Análise das opções:\nA) INCORRETA: Proibida crase antes do artigo indefinido "uma".\nB) INCORRETA: Proibida crase antes de verbo no infinitivo ("garantir").\nC) CORRETA: "Entregou a..." (regência do verbo entregar) + "a junta" (artigo definido feminino) = "à junta".\nD) INCORRETA: Proibida crase antes de palavra masculina ("pé").\nE) INCORRETA: Proibida crase antes de verbo ("acelerar").',
    explanations: {
      A: 'INCORRETA. Nunca ocorre crase diante do artigo indefinido "uma".',
      B: 'INCORRETA. Nunca ocorre crase diante de verbos ("garantir").',
      C: 'CORRETA. Fusão regular da preposição "a" (exigida por entregar) com o artigo "a" (de "junta").',
      D: 'INCORRETA. "Pé" é palavra masculina; usa-se apenas preposição sem crase ("a pé").',
      E: 'INCORRETA. Nunca ocorre crase diante de verbo no infinitivo.'
    }
  },
  {
    id: 'por-q04',
    subjectId: 'portugues',
    topic: 'Concordância com Verbo Impessoal (Haver e Fazer)',
    difficulty: 'Médio',
    statement: 'Assinale a opção que preenche correta e respectivamente as lacunas da frase: "______ muitos anos que não se ______ tantas infrações por excesso de velocidade; por isso, ______ haver novas campanhas educativas nas rodovias."',
    lawReference: 'Sintaxe de Impessoalidade dos Verbos Haver e Fazer',
    bancaTag: 'FCC / Vunesp',
    options: [
      { letter: 'A', text: 'Faz - registravam - deve' },
      { letter: 'B', text: 'Fazem - registrava - devem' },
      { letter: 'C', text: 'Faz - registrava - devem' },
      { letter: 'D', text: 'Fazem - registravam - deve' },
      { letter: 'E', text: 'Fazem - registravam - devem' }
    ],
    correctLetter: 'A',
    generalExplanation: '1) O verbo "fazer" indicando tempo decorrido é IMPESSOAL, ficando no singular: "Faz muitos anos...".\n2) Na voz passiva sintética "não se registravam tantas infrações", o verbo concorda com o sujeito paciente no plural ("tantas infrações").\n3) Na locução verbal com verbo "haver" impessoal ("deve haver"), o verbo auxiliar "dever" transmite a impessoalidade e fica no singular: "deve haver novas campanhas".',
    explanations: {
      A: 'CORRETA. Faz (singular impessoal) - registravam (plural concordando com "tantas infrações") - deve (singular impessoal antes de "haver").',
      B: 'INCORRETA. "Fazem" e "devem" violam as regras de impessoalidade.',
      C: 'INCORRETA. "Registrava" violaria a concordância com o sujeito plural "tantas infrações".',
      D: 'INCORRETA. "Fazem" é incorreto.',
      E: 'INCORRETA. Todos os verbos impessoais estão no plural incorretamente.'
    }
  },
  {
    id: 'por-q05',
    subjectId: 'portugues',
    topic: 'Regência Verbal dos Verbos Visar, Aspirar e Assistir',
    difficulty: 'Difícil',
    statement: 'Considere a regência dos verbos no trecho a seguir e assinale a alternativa inteiramente CORRETA de acordo com a norma-padrão da língua portuguesa:',
    lawReference: 'Regência Verbal',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'O candidato ao cargo no DETRAN-SP aspira a uma vaga concorrida, pois visa ao aprimoramento da segurança pública e assiste ao desenrolar das provas com serenidade.' },
      { letter: 'B', text: 'O candidato aspira uma vaga concorrida, pois visa o aprimoramento da segurança e assiste o desenrolar das provas.' },
      { letter: 'C', text: 'O candidato aspira à uma vaga, visa o aprimoramento e assiste no desenrolar das provas.' },
      { letter: 'D', text: 'O candidato aspira por uma vaga, visa com o aprimoramento e assiste o desenrolar das provas.' },
      { letter: 'E', text: 'O candidato aspira de uma vaga, visa à aprimoramento e assiste à o desenrolar.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Regência culta dos verbos:\n1) ASPIRAR no sentido de almejar/desejar é Transitivo Indireto e exige a preposição "a": "aspira a uma vaga".\n2) VISAR no sentido de ter por objetivo é Transitivo Indireto e exige preposição "a": "visa ao aprimoramento".\n3) ASSISTIR no sentido de presenciar/ver é Transitivo Indireto e exige preposição "a": "assiste ao desenrolar".',
    explanations: {
      A: 'CORRETA. Todos os verbos (aspira a, visa ao, assiste ao) empregados com a regência correta no sentido de almejar, objetivar e presenciar.',
      B: 'INCORRETA. Empregou os verbos como transitivos diretos sem preposição, contrariando a norma culta.',
      C: 'INCORRETA. Erros de crase antes de "uma" e falta de preposição em "visa".',
      D: 'INCORRETA. Regência inventada incompatível com o padrão culto.',
      E: 'INCORRETA. Uso de construções agramaticais.'
    }
  },
  {
    id: 'por-q06',
    subjectId: 'portugues',
    topic: 'Colocação Pronomial (Próclise, Mesóclise e Êclise)',
    difficulty: 'Médio',
    statement: 'A colocação pronominal atende rigorosamente às exigências da gramática normativa na frase:',
    lawReference: 'Sintaxe de Colocação Pronomial',
    bancaTag: 'FCC / Vunesp',
    options: [
      { letter: 'A', text: 'Me disseram que o edital do concurso do DETRAN-SP já foi publicado.' },
      { letter: 'B', text: 'Não informou-se os candidatos sobre o local exato da realização das provas.' },
      { letter: 'C', text: 'Jamais esquecer-me-ei das aulas de Legislação de Trânsito.' },
      { letter: 'D', text: 'Se todos prepararem-se com antecedência, obterão excelente pontuação.' },
      { letter: 'E', text: 'Caso se apresente o recurso no prazo legal, a penalidade poderá ser revisada.' }
    ],
    correctLetter: 'E',
    generalExplanation: 'Análise das alternativas:\nA) INCORRETA: Proibido iniciar oração com pronome oblíquo átono ("Me disseram").\nB) INCORRETA: A palavra negativa "Não" atrai obrigatoriamente a próclise ("Não se informou").\nC) INCORRETA: A palavra negativa "Jamais" exige próclise ("Jamais me esquecerei"), superando a mesóclise.\nD) INCORRETA: A conjunção subordinativa "Se" atrai próclise ("Se todos se prepararem").\nE) CORRETA: A conjunção "Caso" atrai a próclise ("Caso se apresente...").',
    explanations: {
      A: 'INCORRETA. Não se inicia frase com pronome átono na norma culta.',
      B: 'INCORRETA. Palavra negativa "Não" exige próclise obrigatória.',
      C: 'INCORRETA. Advérbio negativo "Jamais" atrai o pronome, impedindo a mesóclise.',
      D: 'INCORRETA. Conjunção subordinativa "Se" atrai o pronome para antes do verbo.',
      E: 'CORRETA. Conjunção "Caso" exerce atração próclitica perfeita.'
    }
  },
  {
    id: 'por-q07',
    subjectId: 'portugues',
    topic: 'Pontuação - Uso da Vírgula',
    difficulty: 'Médio',
    statement: 'Assinale a opção em que a vírgula está empregada em estrita CONFORMIDADE com as regras de pontuação:',
    lawReference: 'Sinais de Pontuação',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'O agente de trânsito, aplicou a multa ao condutor imprudente.' },
      { letter: 'B', text: 'Os motoristas que respeitam a sinalização, contribuem para um trânsito mais seguro.' },
      { letter: 'C', text: 'Em São Paulo, no período de férias escolares, o volume de tráfego diminui consideravelmente.' },
      { letter: 'D', text: 'O CTB estabelece, que a prioridade é sempre da vida humana.' },
      { letter: 'E', text: 'A fiscalização de trânsito precisa ser, constante e rigorosa em todas as rodovias.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'Na alternativa C, as vírgulas isolam corretamente os adjuntos adverbiais de lugar ("Em São Paulo") e de tempo ("no período de férias escolares") deslocados para o início da oração.\nNas outras opções há vírgula proibida separando sujeito de predicado (A e B) ou verbo de objeto/oração subordinada (D e E).',
    explanations: {
      A: 'INCORRETA. Erro gravíssimo: separou o sujeito "O agente de trânsito" do verbo "aplicou".',
      B: 'INCORRETA. Separou a oração que funciona como sujeito do verbo principal "contribuem".',
      C: 'CORRETA. Isolamento correto de adjuntos adverbiais compostos deslocados.',
      D: 'INCORRETA. Separou o verbo transitivo "estabelece" da sua oração subordinada substantiva objetiva direta.',
      E: 'INCORRETA. Separou o predicativo do sujeito.'
    }
  },
  {
    id: 'por-q08',
    subjectId: 'portugues',
    topic: 'Novo Acordo Ortográfico e Acentuação Gráfica',
    difficulty: 'Fácil',
    statement: 'De acordo com o Novo Acordo Ortográfico da Língua Portuguesa, assinale a alternativa em que TODAS as palavras estão grafadas e acentuadas CORRETAMENTE:',
    lawReference: 'Regras de Acentuação Gráfica',
    bancaTag: 'FCC / Avalia 2026',
    options: [
      { letter: 'A', text: 'Idéia, assembléia, jibóia, heróico.' },
      { letter: 'B', text: 'Ideia, assembleia, jiboia, heroico.' },
      { letter: 'C', text: 'Vôo, enjôo, abençôo, perdôo.' },
      { letter: 'D', text: 'Pára (verbo), pára-choque, pára-brisa.' },
      { letter: 'E', text: 'Saúde, baú, raízes, fáisca.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Com o Novo Acordo Ortográfico:\n1) Os ditongos abertos "ei" e "oi" nas palavras PAROXÍTONAS perderam o acento (ideia, assembleia, jiboia, heroico, coréia).\n2) O acento circunflexo nos hiatos "oo" caiu (voo, enjoo, abençoo).\n3) O acento diferencial do verbo "parar" (para) caiu.',
    explanations: {
      A: 'INCORRETA. Todas essas paroxítonas perderam o acento no Novo Acordo.',
      B: 'CORRETA. Grafia perfeita segundo a reforma ortográfica vigente (ditongos abertos em paroxítonas não levam acento).',
      C: 'INCORRETA. O duplo "o" não leva mais acento circunflexo.',
      D: 'INCORRETA. O verbo "parar" não leva mais acento diferencial.',
      E: 'INCORRETA. "Faísca" leva acento agudo no "i", mas a opção grafou incorretamente.'
    }
  },
  {
    id: 'por-q09',
    subjectId: 'portugues',
    topic: 'Concordância Nominal (Anexo, Mesmo, Bastante)',
    difficulty: 'Médio',
    statement: 'Assinale a alternativa que preenche CORRETAMENTE as lacunas da frase: "Seguem ______ as cópias dos documentos exigidos; os condutores ______ providenciaram os comprovantes e estão ______ satisfeitos com o atendimento."',
    lawReference: 'Sintaxe de Concordância Nominal',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'anexas - mesmos - bastante' },
      { letter: 'B', text: 'anexo - mesmo - bastantes' },
      { letter: 'C', text: 'em anexo - mesmos - bastantes' },
      { letter: 'D', text: 'anexas - mesmo - bastante' },
      { letter: 'E', text: 'anexo - mesmos - bastante' }
    ],
    correctLetter: 'A',
    generalExplanation: '1) "Anexo" é adjetivo e concorda com o substantivo: "Seguem anexas as cópias".\n2) "Mesmos" é pronome demonstrativo reforçativo de sujeito plural: "os condutores mesmos providenciaram".\n3) "Bastante" modificando o adjetivo "satisfeitos" é ADVÉRBIO (equivale a "muito") e permanece INVARIÁVEL: "estão bastante satisfeitos".',
    explanations: {
      A: 'CORRETA. Anexas (concorda com "cópias") - mesmos (concorda com "condutores") - bastante (advérbio invariável).',
      B: 'INCORRETA. "Anexo" singular violaria a concordância com "as cópias".',
      C: 'INCORRETA. "Bastantes" como advérbio é incorreto.',
      D: 'INCORRETA. "Mesmo" no singular não concorda com "condutores".',
      E: 'INCORRETA. "Anexo" no masculino singular não concorda com o termo feminino plural "cópias".'
    }
  },
  {
    id: 'por-q10',
    subjectId: 'portugues',
    topic: 'Significação das Palavras - Homônimos e Parônimos',
    difficulty: 'Difícil',
    statement: 'No vocabulário jurídico e administrativo, a precisão das palavras é essencial. Assinale a opção que emprega CORRETAMENTE os vocábulos sublinhados:',
    lawReference: 'Semântica e Ortografia',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: 'O agente de trânsito agiu com muita discrição ao abordar o condutor, mantendo a polidez e a reserva necessárias.' },
      { letter: 'B', text: 'A autoridade exerceu o seu poder de despesa com total descrição e segredo.' },
      { letter: 'C', text: 'O infrator foi preso em flagrante delito ao cometer uma infração que infligiu a lei.' },
      { letter: 'D', text: 'A câmara de vereadores aprovou a cessão de direitos, mas a sessão do município negou o alvará.' },
      { letter: 'E', text: 'O juiz cassou os direitos do réu por ter agido com extrema descrição.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Análise dos parônimos:\n- DISCRIÇÃO: qualidade de quem é discreto, reservado (CORRETO na opção A).\n- DESCRIÇÃO: ato de descrever, detalhar algo.\n- INFRINGIR: violar, desrespeitar norma (infringiu a lei, e não "infligiu" que significa aplicar pena).\n- CESSÃO: ato de ceder; SESSÃO: reunião; SEÇÃO/SECÇÃO: divisão/repartição.',
    explanations: {
      A: 'CORRETA. "Discrição" empregado corretamente no sentido de conduta discreta e prudente.',
      B: 'INCORRETA. Usou "descrição" quando o sentido pretendido era moderação/discrição.',
      C: 'INCORRETA. O correto para violar lei é "infringiu" (infligir é aplicar pena).',
      D: 'INCORRETA. Confundiu "seção" (divisão territorial do município) com "sessão" (reunião).',
      E: 'INCORRETA. Confundiu "descrição" com "discrição".'
    }
  },
  {
    id: 'por-q11',
    subjectId: 'portugues',
    topic: 'Orações Subordinadas Adjetivas (Explicativa vs Restritiva)',
    difficulty: 'Médio',
    statement: 'Analise os dois períodos a seguir:\nI. "Os agentes de trânsito, que concluíram o treinamento de reciclagem, receberam a gratificação."\nII. "Os agentes de trânsito que concluíram o treinamento de reciclagem receberam a gratificação."\nÉ correto afirmar que:',
    lawReference: 'Sintaxe do Período Composto - Orações Adjetivas',
    bancaTag: 'Vunesp / Avalia 2026',
    options: [
      { letter: 'A', text: 'No trecho I, a oração é subordinada adjetiva explicativa, indicando que TODOS os agentes de trânsito concluíram o treinamento.' },
      { letter: 'B', text: 'No trecho II, a oração é explicativa e afirma que nenhum agente concluiu o treinamento.' },
      { letter: 'C', text: 'Ambos os trechos possuem exatamente o mesmo sentido sintático e semântico.' },
      { letter: 'D', text: 'No trecho I, a presença de vírgulas restringe o sentido apenas a uma parte dos agentes.' },
      { letter: 'E', text: 'No trecho II, a ausência de vírgulas transforma a oração em subordinada substantiva.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A diferença entre orações subordinadas adjetivas:\n- COM VÍRGULAS (Trecho I): Oração Adjetiva EXPLICATIVA. Atribui uma característica geral a TODO o grupo (todos os agentes concluíram o curso).\n- SEM VÍRGULAS (Trecho II): Oração Adjetiva RESTRITIVA. Restringe o fato apenas àqueles agentes específicos que concluíram o curso.',
    explanations: {
      A: 'CORRETA. As vírgulas tornam a oração explicativa, generalizando o atributo para a totalidade dos agentes.',
      B: 'INCORRETA. A oração II é restritiva.',
      C: 'INCORRETA. A presença ou ausência de vírgulas altera profundamente o sentido.',
      D: 'INCORRETA. Vírgulas explicam (generalizam), não restringem.',
      E: 'INCORRETA. Continua sendo oração subordinada adjetiva (restritiva).'
    }
  },
  {
    id: 'por-q12',
    subjectId: 'portugues',
    topic: 'Regência com o Pronome Relativo "Que"',
    difficulty: 'Difícil',
    statement: 'Assinale a alternativa que atende inteiramente à norma-padrão quanto à regência verbal na inserção da preposição antes do pronome relativo:',
    lawReference: 'Regência e Pronomes Relativos',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: 'O cargo público a que aspirei durante anos exige dedicação integral aos estudos.' },
      { letter: 'B', text: 'A lei que todos se referem foi modificada pelo Congresso Nacional.' },
      { letter: 'C', text: 'O recurso onde o advogado apresentou de nada adiantou.' },
      { letter: 'D', text: 'As diretrizes que simpatizamos foram aprovadas na reunião.' },
      { letter: 'E', text: 'O edital que o candidato gosta foi publicado ontem.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Análise da regência com pronome relativo:\n- Verbo ASPIRAR (no sentido de desejar) rege preposição "a" -> "O cargo público A QUE aspirei..." (CORRETO na opção A).\n- B: "referir-se" exige preposição "a" ("a que todos se referem").\n- C: "onde" só deve ser usado para indicar lugar físico fixo.\n- D: "simpatizar" rege preposição "com" ("com que simpatizamos").\n- E: "gostar" rege preposição "de" ("de que o candidato gosta").',
    explanations: {
      A: 'CORRETA. A preposição "a" exigida pelo verbo aspirar foi devidamente colocada antes do pronome relativo "que".',
      B: 'INCORRETA. Falta a preposição "a" exigi pelo verbo referir-se ("a que").',
      C: 'INCORRETA. "Onde" não pode retomar substantivos abstratos como "recurso".',
      D: 'INCORRETA. Falta a preposição "com" exigida por simpatizar ("com que").',
      E: 'INCORRETA. Falta a preposição "de" exigida por gostar ("de que").'
    }
  },
  {
    id: 'por-q13',
    subjectId: 'portugues',
    topic: 'Crase Facultativa',
    difficulty: 'Médio',
    statement: 'Assinale a alternativa em que o uso do acento indicativo de crase é FACULTATIVO:',
    lawReference: 'Regras de Crase Facultativa',
    bancaTag: 'Vunesp / FCC',
    options: [
      { letter: 'A', text: 'Encaminhou a notificação à sua irmã.' },
      { letter: 'B', text: 'Os carros dirigiam-se à cidade de São Paulo.' },
      { letter: 'C', text: 'O pedestre atravessou a rua à noite.' },
      { letter: 'D', text: 'Entregou o formulário à fiscalização.' },
      { letter: 'E', text: 'Dedicou a vida à causa da segurança viária.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A crase é FACULTATIVA em três situações clássicas de concurso:\n1) Diante de pronomes possessivos femininos singulares ("à sua irmã" ou "a sua irmã");\n2) Diante de nomes próprios femininos ("à Maria" ou "a Maria");\n3) Após a preposição "até" ("até à praia" ou "até a praia").',
    explanations: {
      A: 'CORRETA. Diante de pronome possessivo feminino singular ("sua"), o uso da crase é facultativo.',
      B: 'INCORRETA. Crase obrigatória diante de nome de cidade especificada ("cidade de São Paulo").',
      C: 'INCORRETA. Crase obrigatória em locução adverbial feminina de tempo ("à noite").',
      D: 'INCORRETA. Crase obrigatória.',
      E: 'INCORRETA. Crase obrigatória.'
    }
  },
  {
    id: 'por-q14',
    subjectId: 'portugues',
    topic: 'Morfologia - Sentido de Conectivos e Conjunções',
    difficulty: 'Médio',
    statement: 'No período "O motorista transitava em alta velocidade; CONQUANTO estivesse chovendo intensamente, não reduziu a marcha", a conjunção sublinhada "CONQUANTO" estabelece relação semântica de:',
    lawReference: 'Conjunções Subordinativas Adverbiais',
    bancaTag: 'FCC / Vunesp',
    options: [
      { letter: 'A', text: 'Causa.' },
      { letter: 'B', text: 'Concessão.' },
      { letter: 'C', text: 'Consequência.' },
      { letter: 'D', text: 'Condição.' },
      { letter: 'E', text: 'Finalidade.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'A conjunção "CONQUANTO" é subordinativa adverbial CONCESSIVA (equivale a "embora", "ainda que", "posto que", "se bem que"). Introduz um fato que contraria ou opõe uma objeção que contudo não impede a realização da oração principal.',
    explanations: {
      A: 'INCORRETA. Causa seria expressa por "porquanto", "porque", "visto que".',
      B: 'CORRETA. "Conquanto" é conjunção subordinativa concessiva por excelência.',
      C: 'INCORRETA. Consequência é expressa por "de modo que", "tanto que".',
      D: 'INCORRETA. Condição é expressa por "se", "caso".',
      E: 'INCORRETA. Finalidade é expressa por "a fim de que", "para que".'
    }
  },
  {
    id: 'por-q15',
    subjectId: 'portugues',
    topic: 'Vozes Verbais e Agente da Passiva',
    difficulty: 'Difícil',
    statement: 'Assinale a alternativa que apresenta a correta transposição da frase "O agente autuou o infrator no cruzamento" para a VOZ PASSIVA ANALÍTICA:',
    lawReference: 'Transposição de Vozes Verbais',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'O infrator foi autuado pelo agente no cruzamento.' },
      { letter: 'B', text: 'O infrator fora autuado pelo agente no cruzamento.' },
      { letter: 'C', text: 'O agente tinha autuado o infrator no cruzamento.' },
      { letter: 'D', text: 'Autuou-se o agente no cruzamento.' },
      { letter: 'E', text: 'O infrator é autuado pelo agente no cruzamento.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Regra de transposição de voz ativa para passiva analítica:\n1) O objeto direto da ativa ("o infrator") vira sujeito paciente.\n2) O verbo principal "autuou" (pretérito perfeito do indicativo) é substituído pelo auxiliar "ser" no mesmo tempo/modo ("foi") + particípio ("autuado").\n3) O sujeito da ativa ("O agente") vira agente da passiva ("pelo agente").\nResultado: "O infrator foi autuado pelo agente no cruzamento".',
    explanations: {
      A: 'CORRETA. Transposição perfeita mantendo a equivalência do pretérito perfeito do indicativo ("foi autuado").',
      B: 'INCORRETA. "Fora autuado" altera o tempo verbal para o pretérito mais-que-perfeito.',
      C: 'INCORRETA. Permanece na voz ativa (voz ativa composta).',
      D: 'INCORRETA. Altera o sentido do texto.',
      E: 'INCORRETA. "É autuado" altera o tempo verbal para o presente do indicativo.'
    }
  },
  {
    id: 'por-q16',
    subjectId: 'portugues',
    topic: 'Parônimos - "A fim de" vs "Afim"',
    difficulty: 'Fácil',
    statement: 'Assinale a alternativa em que a grafia das expressões destacadas atende à norma-padrão:',
    lawReference: 'Ortografia e Semântica',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'O motorista compareceu ao DETRAN a fim de regularizar sua CNH.' },
      { letter: 'B', text: 'O motorista compareceu ao DETRAN afim de regularizar sua CNH.' },
      { letter: 'C', text: 'Eles possuem ideias a fim de defender o trânsito humano.' },
      { letter: 'D', text: 'Estudou bastante afim de passar no concurso do DETRAN.' },
      { letter: 'E', text: 'A reunião foi agendada afim de decidir o horário das provas.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Distinção ortográfica essencial:\n- "A FIM DE" (separado): locução conjuntiva que indica finalidade, propósito (equivale a "para").\n- "AFIM" (junto): adjetivo que significa igual, semelhante, com afinidade (ex: "ideias afins").',
    explanations: {
      A: 'CORRETA. "A fim de" grafado separadamente indicando finalidade ("para regularizar").',
      B: 'INCORRETA. Grafia junta errada para ideia de finalidade.',
      C: 'INCORRETA. Para ideias semelhantes deveria ser "afins".',
      D: 'INCORRETA. Finalidade exige a locução separada "a fim de".',
      E: 'INCORRETA. Exige locução separada "a fim de".'
    }
  },
  {
    id: 'por-q17',
    subjectId: 'portugues',
    topic: 'Coesão Textual e Pronomes Anafóricos',
    difficulty: 'Médio',
    statement: 'Em um texto dissertativo, os pronomes demonstrativos "ESTE" e "AQUELE" são utilizados para evitar repetições e retomar elementos citados anteriormente. Na citação de dois elementos prévios, o pronome "ESTE" retoma:',
    lawReference: 'Coesão Referencial Anafórica',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: 'O elemento mais próximo (o último citado).' },
      { letter: 'B', text: 'O elemento mais distante (o primeiro citado).' },
      { letter: 'C', text: 'Ambos os elementos simultaneamente sem distinção.' },
      { letter: 'D', text: 'Apenas elementos no tempo futuro.' },
      { letter: 'E', text: 'Um elemento hipotético fora do texto.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Na coesão referencial para retomar dois termos já mencionados no texto:\n- "ESTE" (e variações) retoma o termo MAIS PRÓXIMO (o último elemento citado).\n- "AQUELE" (e variações) retoma o termo MAIS DISTANTE (o primeiro elemento citado).',
    explanations: {
      A: 'CORRETA. Regra clássica de anáfora: "este" retoma o termo mais recente/próximo.',
      B: 'INCORRETA. O termo mais distante é retomado por "aquele".',
      C: 'INCORRETA. Cada pronome possui função coesiva distinta.',
      D: 'INCORRETA. Não se refere a tempo futuro nessa função anafórica.',
      E: 'INCORRETA. Refere-se estritamente a elementos intratextuais.'
    }
  },
  {
    id: 'por-q18',
    subjectId: 'portugues',
    topic: 'Concordância com Sujeito Coletivo e Partitivo',
    difficulty: 'Médio',
    statement: 'Assinale a opção em que a concordância verbal está em conformidade com as regras gramaticais da norma-padrão:',
    lawReference: 'Sintaxe de Concordância Verbal',
    bancaTag: 'Vunesp / Avalia 2026',
    options: [
      { letter: 'A', text: 'A maioria dos candidatos aprovaram a organização do concurso.' },
      { letter: 'B', text: 'A maioria dos candidatos aprovou a organização do concurso.' },
      { letter: 'C', text: 'Ambas as frases A e B estão corretas, pois expressões partitivas seguidas de especificação no plural admitem concordância no singular ou no plural.' },
      { letter: 'D', text: 'Nenhuma das frases está correta, devendo-se usar obrigatoriamente "aprovou-se".' },
      { letter: 'E', text: 'Apenas o verbo no futuro do pretérito seria aceito.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'Expressões partitivas (como "a maioria de", "a maior parte de", "uma porção de") seguidas de substantivo no plural admitem DUPLA CONCORDÂNCIA:\n1) Concordância com o núcleo partitivo no singular ("A maioria... aprovou");\n2) Concordância com o especificador no plural ("...dos candidatos aprovaram"). Both are correct in standard Portuguese.',
    explanations: {
      A: 'INCORRETA isoladamente, pois a opção C é mais abrangente e exata ao constatar a dupla possibilidade.',
      B: 'INCORRETA isoladamente.',
      C: 'CORRETA. Admite-se a dupla concordância gramatical com expressões partitivas especificadas.',
      D: 'INCORRETA. As formas estão corretas.',
      E: 'INCORRETA. Invenção sem respaldo normativo.'
    }
  },
  {
    id: 'por-q19',
    subjectId: 'portugues',
    topic: 'Regência e Crase com Nomes de Lugares',
    difficulty: 'Médio',
    statement: 'Para verificar se há crase antes de nomes de lugares (cidades, países, estados), utiliza-se o macete "Se vou a e volto da, crase há; se vou a e volto de, crase pra quê?". Assinale a frase com a crase CORRETAMENTE empregada:',
    lawReference: 'Crase e Regência Geográfica',
    bancaTag: 'FCC / Vunesp',
    options: [
      { letter: 'A', text: 'Viajaremos à Itália no próximo mês.' },
      { letter: 'B', text: 'Iremos à Roma no próximo domingo.' },
      { letter: 'C', text: 'Os inspetores foram à Campinas para realizar a vistoria.' },
      { letter: 'D', text: 'Chegamos à São Paulo ao amanhecer.' },
      { letter: 'E', text: 'Retornaremos à Paris após o evento.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Teste da crase com topônimos:\n- Volto DA Itália -> logo, "Vou À Itália" (há crase! - opção A CORRETA).\n- Volto DE Roma -> Vou a Roma (sem crase).\n- Volto DE Campinas -> Vou a Campinas (sem crase).\n- Volto DE São Paulo -> Vou a São Paulo (sem crase).\n- Volto DE Paris -> Vou a Paris (sem crase).',
    explanations: {
      A: 'CORRETA. Quem volta "DA" Itália, vai "À" Itália (crase obrigatória).',
      B: 'INCORRETA. Quem volta "DE" Roma, vai "a" Roma (sem crase).',
      C: 'INCORRETA. Quem volta "DE" Campinas, vai "a" Campinas (sem crase).',
      D: 'INCORRETA. Quem volta "DE" São Paulo, vai "a" São Paulo (sem crase).',
      E: 'INCORRETA. Quem volta "DE" Paris, vai "a" Paris (sem crase).'
    }
  },
  {
    id: 'por-q20',
    subjectId: 'portugues',
    topic: 'Hífen no Novo Acordo Ortográfico',
    difficulty: 'Difícil',
    statement: 'Segundo as regras do Novo Acordo Ortográfico relativas ao uso do hífen, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Uso do Hífen no Acordo Ortográfico',
    bancaTag: 'FCC / Avalia 2026',
    options: [
      { letter: 'A', text: 'Auto-escola, anti-social, micro-ondas, infra-estrutura.' },
      { letter: 'B', text: 'Autoescola, antissocial, micro-ondas, infraestrutura.' },
      { letter: 'C', text: 'Auto-escola, anti-social, microondas, infraestrutura.' },
      { letter: 'D', text: 'Autoescola, anti-social, micro-ondas, infra-estrutura.' },
      { letter: 'E', text: 'Autoescola, antissocial, microondas, infra-estrutura.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Regras do hífen com prefixos:\n1) Prefixos terminados em vogal diferente da vogal inicial do segundo elemento UNEM-SE sem hífen: "autoescola", "infraestrutura".\n2) Se o prefixo termina em vogal e o segundo elemento começa com R ou S, DOBRA-SE a consoante sem hífen: "antissocial", "microssistema".\n3) Se o prefixo termina na MESMA VOGAL em que se inicia o segundo elemento, USA-SE HÍFEN: "micro-ondas", "anti-inflamatório".',
    explanations: {
      A: 'INCORRETA. Erros de hífen em autoescola, antissocial e infraestrutura.',
      B: 'CORRETA. Aplicação perfeita de todas as regras do Novo Acordo Ortográfico.',
      C: 'INCORRETA. Micro-ondas exige hífen (vogais iguais "o-o").',
      D: 'INCORRETA. Antissocial deve ser grafado junto com consoante dobrada.',
      E: 'INCORRETA. Micro-ondas exige hífen.'
    }
  },
  {
    id: 'por-q21',
    subjectId: 'portugues',
    topic: 'Regência do Verbo Preferir',
    difficulty: 'Fácil',
    statement: 'Na norma-padrão da língua portuguesa, o verbo PREFERIR é transitivo direto e indireto, exigindo a preposição "a". Assinale a opção que atende estritamente a essa regra:',
    lawReference: 'Regência Verbal',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'O candidato prefere estudar Legislação do que Português.' },
      { letter: 'B', text: 'O candidato prefere estudar Legislação a Português.' },
      { letter: 'C', text: 'O candidato prefere mais Legislação do que Português.' },
      { letter: 'D', text: 'O candidato prefere antes Legislação do que Português.' },
      { letter: 'E', text: 'O candidato prefere mil vezes Legislação do que Português.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'O verbo PREFERIR exige a regência "preferir X A Y". É erro de regência na norma culta usar "do que", "mais que" ou intensificadores como "mais", "antes", "mil vezes" associados ao verbo preferir.',
    explanations: {
      A: 'INCORRETA. O uso de "do que" com preferir é condenado pela gramática normativa.',
      B: 'CORRETA. Regência límpida: "prefere X a Y".',
      C: 'INCORRETA. Uso redundante e incorreto de "mais... do que".',
      D: 'INCORRETA. Uso incorreto de "antes... do que".',
      E: 'INCORRETA. Uso de "mil vezes... do que" é coloquial e incorreto.'
    }
  },
  {
    id: 'por-q22',
    subjectId: 'portugues',
    topic: 'Orações Coordenadas Sindicatórias e Conectivos',
    difficulty: 'Médio',
    statement: 'No período "O trânsito estava caótico; PORCONSEGUINTE, os ônibus atrasaram", a oração sublinhada é coordenada sindética:',
    lawReference: 'Sintaxe das Orações Coordenadas',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: 'Adversativa.' },
      { letter: 'B', text: 'Explicativa.' },
      { letter: 'C', text: 'Conclusiva.' },
      { letter: 'D', text: 'Aditiva.' },
      { letter: 'E', text: 'Alternativa.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'O conectivo "PORCONSEGUINTE" (assim como "logo", "portanto", "assim", "por isso", "dessarte") é uma conjunção coordenada CONCLUSIVA, pois introduz a conclusão lógica decorrente do fato enunciado na oração anterior.',
    explanations: {
      A: 'INCORRETA. Adversativa seria expressa por "mas", "porém", "todavia".',
      B: 'INCORRETA. Explicativa seria expressa por "porque", "pois" antes do verbo.',
      C: 'CORRETA. "Porconseguinte" expressa conclusão ilativa/conclusiva.',
      D: 'INCORRETA. Aditiva seria expressa por "e", "nem", "não só... mas também".',
      E: 'INCORRETA. Alternativa seria expressa por "ou... ou", "quer... quer".'
    }
  },
  {
    id: 'por-q23',
    subjectId: 'portugues',
    topic: 'Funções da Partícula "SE"',
    difficulty: 'Difícil',
    statement: 'Na frase "Alugam-se vagas de garagem próximas ao DETRAN-SP", a partícula "SE" exerce a função de:',
    lawReference: 'Sintaxe e Funções do "SE"',
    bancaTag: 'Vunesp / Avalia 2026',
    options: [
      { letter: 'A', text: 'Índice de indeterminação do sujeito.' },
      { letter: 'B', text: 'Partícula apassivadora (Pronome Apassivador).' },
      { letter: 'C', text: 'Conjunção subordinativa integrante.' },
      { letter: 'D', text: 'Partícula de realce (expletiva).' },
      { letter: 'E', text: 'Pronome reflexivo com função de objeto indireto.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Na estrutura "Alugam-se vagas" (Verbo Transitivo Direto + SE + Sujeito Paciente no Plural), a partícula "SE" é PRONOME APASSIVADOR. Equivale à voz passiva analítica "Vagas de garagem são alugadas". Por isso o verbo vai obrigatoriamente para o plural concordando com "vagas".',
    explanations: {
      A: 'INCORRETA. O índice de indeterminação do sujeito ocorre com verbos intransitivos, transitivos indiretos ou de ligação (ex: "Precisa-se de agentes").',
      B: 'CORRETA. Partícula apassivadora acompanhando VTD com sujeito paciente explícito.',
      C: 'INCORRETA. Conjunção integrante introduz orações substantivas.',
      D: 'INCORRETA. Não é partícula expletiva.',
      E: 'INCORRETA. Não há reflexividade de ação no sujeito.'
    }
  },
  {
    id: 'por-q24',
    subjectId: 'portugues',
    topic: 'Crase com Horas e Expressões de Tempo',
    difficulty: 'Médio',
    statement: 'Assinale a opção em que o acento indicativo de crase foi empregado CORRETAMENTE diante de indicação de horas ou tempo:',
    lawReference: 'Regras de Crase com Horas',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'A prova do concurso terá início às 8 horas da manhã.' },
      { letter: 'B', text: 'O atendimento ao público vai de 9hs à 17hs.' },
      { letter: 'C', text: 'Ele permaneceu no local à uma hora da tarde inteira.' },
      { letter: 'D', text: 'Esperou pelo fiscal durante à duas horas seguidas.' },
      { letter: 'E', text: 'A palestra será realizada daqui à cinco dias.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Análise das horas e tempo:\n- Usa-se crase obrigatória diante de HORAS DETERMINADAS: "às 8 horas", "à 1 hora" (Opção A CORRETA).\n- Em correlações "de X a Y" sem artigo inicial, não há crase ("de 9 a 17h"). Se houver artigo inicial, haverá crase ("das 9h às 17h").\n- Diante de tempo decorrido ou futuro ("daqui a cinco dias", "durante duas horas") não há crase.',
    explanations: {
      A: 'CORRETA. Crase obrigatória diante de hora determinada ("às 8 horas").',
      B: 'INCORRETA. O correto em correlação seria "das 9h às 17h" ou "de 9h a 17h".',
      C: 'INCORRETA. Na indicação de duração de tempo não há crase.',
      D: 'INCORRETA. Proibida crase após preposição "durante".',
      E: 'INCORRETA. "Daqui a" indica tempo futuro; usa-se apenas preposição sem crase.'
    }
  },
  {
    id: 'por-q25',
    subjectId: 'portugues',
    topic: 'Uso dos Porquês',
    difficulty: 'Fácil',
    statement: 'Assinale a opção em que o uso do "porquê" está inteiramente CORRETO de acordo com a norma culta:',
    lawReference: 'Ortografia - Uso dos Porquês',
    bancaTag: 'FCC / Vunesp',
    options: [
      { letter: 'A', text: 'Não entendi o porquê de tanta demora no julgamento do recurso.' },
      { letter: 'B', text: 'Você não respondeu às perguntas do fiscal por que?' },
      { letter: 'C', text: 'O trânsito parou por quê houve um acidente grave.' },
      { letter: 'D', text: 'Queremos saber porquê a via foi interditada.' },
      { letter: 'E', text: 'A razão porquê não viajei foi a falta de licenciamento.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Regras dos porquês:\n1) PORQUÊ (junto e com acento): é substantivo (motivo, razão), antecedido de artigo ou pronome ("o porquê" - opção A CORRETA).\n2) POR QUE (separado e sem acento): em perguntas diretas/indiretas no início ou meio, ou equivalendo a "pelo qual".\n3) POR QUÊ (separado e com acento): no final de frases antes da pontuação.\n4) PORQUE (junto e sem acento): conjunção explicativa ou causal (equivale a "pois").',
    explanations: {
      A: 'CORRETA. Substantivo antecedido pelo artigo "o" exige a forma "porquê" (junto com acento).',
      B: 'INCORRETA. No final de frase exige acento: "por quê?".',
      C: 'INCORRETA. Conjunção causal exige "porque" (junto sem acento).',
      D: 'INCORRETA. Pergunta indireta exige "por que" (separado sem acento).',
      E: 'INCORRETA. Equivalendo a "pela qual" exige "por que" (separado sem acento).'
    }
  },
  {
    id: 'por-q26',
    subjectId: 'portugues',
    topic: 'Significado de Conjunções Adverbiais',
    difficulty: 'Médio',
    statement: 'A frase "À MEDIDA QUE o tráfego aumenta, os riscos de acidentes se multiplicam" apresenta oração subordinada adverbial:',
    lawReference: 'Sintaxe do Período Composto',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Proporcional.' },
      { letter: 'B', text: 'Temporal.' },
      { letter: 'C', text: 'Causal.' },
      { letter: 'D', text: 'Comparativa.' },
      { letter: 'E', text: 'Concessiva.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A locução conjuntiva "À MEDIDA QUE" (assim como "à proporção que", "ao passo que") introduz oração subordinada adverbial PROPORCIONAL, indicando fatos que ocorrem simultaneamente em relação de concomitância e proporção.',
    explanations: {
      A: 'CORRETA. "À medida que" é locução conjuntiva proporcional por excelência.',
      B: 'INCORRETA. Temporal seria expressa por "quando", "assim que".',
      C: 'INCORRETA. Causal seria expressa por "já que", "porque".',
      D: 'INCORRETA. Comparativa seria expressa por "como", "tal qual".',
      E: 'INCORRETA. Concessiva seria expressa por "embora".'
    }
  },
  {
    id: 'por-q27',
    subjectId: 'portugues',
    topic: 'Formação de Palavras - Derivação e Composição',
    difficulty: 'Difícil',
    statement: 'O vocábulo "CONTRATEMPO" é formado pelo processo de estruturação morfológica denominado:',
    lawReference: 'Morfologia - Formação de Palavras',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: 'Derivação Prefixal.' },
      { letter: 'B', text: 'Composição por Aglutinação.' },
      { letter: 'C', text: 'Derivação Parassintética.' },
      { letter: 'D', text: 'Derivação Regressiva.' },
      { letter: 'E', text: 'Hibridismo.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A palavra "CONTRATEMPO" é formada pelo acréscimo do prefixo de oposição "contra-" à palavra primitiva "tempo", configurando o processo de DERIVAÇÃO PREFIXAL.',
    explanations: {
      A: 'CORRETA. Prefixação: prefixo "contra-" + radical "tempo".',
      B: 'INCORRETA. Não se trata da junção de dois radicais autônomos com perda fonética.',
      C: 'INCORRETA. Parassíntese exige prefixo e sufixo simultâneos indispensáveis.',
      D: 'INCORRETA. Derivação regressiva reduz a palavra (ex: combater -> combate).',
      E: 'INCORRETA. Hibridismo exige radicais de línguas diferentes.'
    }
  },
  {
    id: 'por-q28',
    subjectId: 'portugues',
    topic: 'Regência e Substituição por Pronome Obliquo',
    difficulty: 'Difícil',
    statement: 'Substituindo-se o complemento sublinhado na frase "O inspetor comunicou O RESULTADO DA VISTORIA aos proprietários" pelo pronome oblíquo correspondente, a forma resultante segundo a norma culta é:',
    lawReference: 'Colocação e Emprego de Pronomes Oblíquos',
    bancaTag: 'FCC / Vunesp',
    options: [
      { letter: 'A', text: 'O inspetor comunicou-o aos proprietários.' },
      { letter: 'B', text: 'O inspetor comunicou-lhe aos proprietários.' },
      { letter: 'C', text: 'O inspetor comunicou o mesmo aos proprietários.' },
      { letter: 'D', text: 'O inspetor comunicou-no aos proprietários.' },
      { letter: 'E', text: 'O inspetor comunicou a ele aos proprietários.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O termo "O resultado da vistoria" é Objeto Direto masculino singular. O pronome que substitui o Objeto Direto de 3ª pessoa é "O". Como o verbo termina em vogal ("comunicou"), adiciona-se o pronome diretamente com hífen: "comunicou-o". (O pronome "lhe" substitui objeto indireto).',
    explanations: {
      A: 'CORRETA. "O" substitui o objeto direto masculino "o resultado da vistoria".',
      B: 'INCORRETA. "Lhe" substitui objeto indireto com preposição.',
      C: 'INCORRETA. "O mesmo" não deve ser empregado como pronome anafórico de pessoa/coisa.',
      D: 'INCORRETA. "No" só se usa se o verbo terminar em som nasal (ex: comunicavam-no).',
      E: 'INCORRETA. "A ele" para objeto direto sem preposição é incorreto na norma culta.'
    }
  },
  {
    id: 'por-q29',
    subjectId: 'portugues',
    topic: 'Plural dos Substantivos Compostos',
    difficulty: 'Difícil',
    statement: 'Assinale a opção em que o plural dos substantivos compostos está grafado em inteira CONFORMIDADE com a norma gramatical:',
    lawReference: 'Flexão de Plural dos Substantivos Compostos',
    bancaTag: 'Vunesp / Avalia 2026',
    options: [
      { letter: 'A', text: 'Pára-brisas, abaixo-assinados, decreto-leis.' },
      { letter: 'B', text: 'Parabrisas, abaixo-assinados, decretos-lei.' },
      { letter: 'C', text: 'Para-brisas, abaixo-assinados, decretos-leis (ou decretos-lei).' },
      { letter: 'D', text: 'Para-brisa, abaixos-assinados, decretos-leis.' },
      { letter: 'E', text: 'Para-brisas, abaixos-assinado, decreto-leis.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'Regras de plural composto:\n1) "para-brisa" (verbo + substantivo): apenas o segundo elemento vai ao plural -> "para-brisas".\n2) "abaixo-assinado" (advérbio + adjetivo/substantivo): advérbio não varia, logo apenas o segundo elemento varia -> "abaixo-assinados".\n3) "decreto-lei" (substantivo + substantivo em que o segundo especifica o primeiro): admite plural nos dois elementos ("decretos-leis") ou apenas no primeiro ("decretos-lei").',
    explanations: {
      A: 'INCORRETA. "Pára" não leva mais acento no Novo Acordo.',
      B: 'INCORRETA. "Parabrisas" sem hífen é ortograficamente incorreto.',
      C: 'CORRETA. Pluralização perfeita segundo as regras normativas.',
      D: 'INCORRETA. Advérbio "abaixo" não varia (erro em abaixos-assinados).',
      E: 'INCORRETA. Erro em abaixos-assinado.'
    }
  },
  {
    id: 'por-q30',
    subjectId: 'portugues',
    topic: 'Significado das Orações Concessivas',
    difficulty: 'Médio',
    statement: 'Na frase "POSTO QUE houvesse intenso nevoeiro na serra, os agentes mantiveram a fiscalização de trânsito", a locução "POSTO QUE" pode ser substituída, sem alterar o sentido original, por:',
    lawReference: 'Semântica das Conjunções',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: 'Embora.' },
      { letter: 'B', text: 'Visto que.' },
      { letter: 'C', text: 'Dado que.' },
      { letter: 'D', text: 'Visto como.' },
      { letter: 'E', text: 'Desde que.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A locução conjuntiva "POSTO QUE" é genuinamente CONCESSIVA no padrão culto da língua portuguesa, sendo sinônima exata de "embora", "ainda que", "se bem que". (Não confundir com locuções causais como "visto que").',
    explanations: {
      A: 'CORRETA. "Posto que" é conjunção concessiva sinônima de "embora".',
      B: 'INCORRETA. "Visto que" é causal.',
      C: 'INCORRETA. "Dado que" é causal.',
      D: 'INCORRETA. "Visto como" é causal.',
      E: 'INCORRETA. "Desde que" é condicional ou temporal.'
    }
  },
  {
    id: 'por-q31',
    subjectId: 'portugues',
    topic: 'Crase Proibida - Verbos e Palavras Masculinas',
    difficulty: 'Fácil',
    statement: 'Assinale a opção em que o uso da crase é PROIBIDO em todas as situações apresentadas:',
    lawReference: 'Casos Proibitivos de Crase',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Andar a cavalo / Escrever a lápis / Começar a estudar.' },
      { letter: 'B', text: 'Ir à praia / Entregar à professora / Falar à diretora.' },
      { letter: 'C', text: 'Voltar às pressas / Sair às escondidas / Chegar às 14 horas.' },
      { letter: 'D', text: 'Refiro-me à tese / Obedecer à lei / Agradecer à mãe.' },
      { letter: 'E', text: 'Dedicação à pátria / Direito à educação / Assistência à saúde.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A crase é TOTALMENTE PROIBIDA:\n1) Antes de palavras masculinas ("a cavalo", "a lápis");\n2) Antes de verbos no infinitivo ("a estudar").\nNa alternativa A, todas as expressões enquadram-se na proibição absoluta da crase.',
    explanations: {
      A: 'CORRETA. Apresenta exclusivamente casos proibidos de crase (palavras masculinas e verbo).',
      B: 'INCORRETA. Apresenta casos de crase obrigatória.',
      C: 'INCORRETA. Apresenta locuções adverbiais femininas com crase obrigatória.',
      D: 'INCORRETA. Apresenta regência com crase obrigatória.',
      E: 'INCORRETA. Apresenta crase obrigatória.'
    }
  },
  {
    id: 'por-q32',
    subjectId: 'portugues',
    topic: 'Acentuação das Palavras Paroxítonas e Proparoxítonas',
    difficulty: 'Fácil',
    statement: 'Assinale a alternativa em que TODAS as palavras são acentuadas pela MESMA regra gramatical de acentuação:',
    lawReference: 'Regras Principais de Acentuação Gráfica',
    bancaTag: 'FCC / Vunesp',
    options: [
      { letter: 'A', text: 'Trânsito, público, veículo, cômputo.' },
      { letter: 'B', text: 'Café, cipó, armazém, caráter.' },
      { letter: 'C', text: 'Fácil, táxi, parabéns, saúva.' },
      { letter: 'D', text: 'Água, história, baú, também.' },
      { letter: 'E', text: 'Pé, nó, já, vírus.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Regra da opção A: Todas as palavras ("Trân-si-to", "pú-bli-co", "ve-í-cu-lo", "côm-pu-to") são PROPAROXÍTONAS, e a regra gramatical estabelece que TODAS AS PROPAROXÍTONAS SÃO ACENTUADAS.',
    explanations: {
      A: 'CORRETA. Todas são proparoxítonas (acento na antepenúltima sílaba).',
      B: 'INCORRETA. Café/cipó/armazém são oxítonas; caráter é paroxítona.',
      C: 'INCORRETA. Regras mistas (paroxítonas, oxítonas e hiato).',
      D: 'INCORRETA. Água/história são paroxítonas terminadas em ditongo; baú é hiato; também é oxítona.',
      E: 'INCORRETA. Pé/nó/já são monossílabos tônicos; vírus é paroxítona.'
    }
  },
  {
    id: 'por-q33',
    subjectId: 'portugues',
    topic: 'Substantivos Sobrecomuns, Comuns de Dois e Epicenos',
    difficulty: 'Médio',
    statement: 'Os substantivos que possuem uma única forma gramatical (masculina ou feminina) para designar ambos os sexos de seres humanos denominam-se substantivos sobrecomuns. É exemplo de substantivo SOBRECOMUM:',
    lawReference: 'Morfologia - Gênero dos Substantivos',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'A vítima.' },
      { letter: 'B', text: 'O estudante / A estudante.' },
      { letter: 'C', text: 'O jacaré macho / O jacaré fêmea.' },
      { letter: 'D', text: 'O motorista / A motorista.' },
      { letter: 'E', text: 'O artista / A artista.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Classificação do gênero:\n- SOBRECOMUM: uma só forma e um só artigo para homens e mulheres (ex: "a vítima", "a testemunha", "o indivíduo", "a criança").\n- COMUM DE DOIS GÊNEROS: uma só forma mas varia o artigo (ex: "o estudante / a estudante").\n- EPICENO: usado para animais (ex: "jacaré macho/fêmea").',
    explanations: {
      A: 'CORRETA. "A vítima" é substantivo sobrecomum (diz-se "a vítima masculino" ou "a vítima feminino" sempre com o artigo "a").',
      B: 'INCORRETA. É substantivo comum de dois gêneros.',
      C: 'INCORRETA. É substantivo epiceno (para animais).',
      D: 'INCORRETA. É comum de dois gêneros.',
      E: 'INCORRETA. É comum de dois gêneros.'
    }
  },
  {
    id: 'por-q34',
    subjectId: 'portugues',
    topic: 'Concordância Verbal com Numerais e Porcentagens',
    difficulty: 'Difícil',
    statement: 'Assinale a alternativa em que a concordância verbal com porcentagem atende à norma-padrão:',
    lawReference: 'Concordância Verbal com Porcentagens',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: '1% dos motoristas recusou o teste do bafômetro.' },
      { letter: 'B', text: '1% dos motoristas recusaram o teste do bafômetro.' },
      { letter: 'C', text: 'Ambas as opções A e B estão gramaticalmente corretas.' },
      { letter: 'D', text: 'Nenhuma opção está correta, pois a porcentagem exige o verbo no infinitivo.' },
      { letter: 'E', text: 'Apenas a porcentagem acima de 50% exige concordância.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'Com numerais percentuais seguidos de elemento especificativo no plural ("1% dos motoristas"), a concordância verbal admite duas formas legítimas:\n1) Concordar com o numeral "1%" (singular): "1%... recusou";\n2) Concordar com o especificador "dos motoristas" (plural): "1%... recusaram". Both are correct.',
    explanations: {
      A: 'INCORRETA isoladamente.',
      B: 'INCORRETA isoladamente.',
      C: 'CORRETA. A regra de concordância com porcentagem especificada permite concordar com o número ou com o determinante.',
      D: 'INCORRETA. As formas estão corretas.',
      E: 'INCORRETA. Regra inexistente.'
    }
  },
  {
    id: 'por-q35',
    subjectId: 'portugues',
    topic: 'Significado das Locuções Adverbiais',
    difficulty: 'Médio',
    statement: 'Na frase "O recurso foi indeferido DE IMPROVISO", a locução sublinhada atribui à ação verbal a ideia circunstancial de:',
    lawReference: 'Sintaxe - Adjunto Adverbial de Modo',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Modo (subitamente, sem preparação prévia).' },
      { letter: 'B', text: 'Tempo cronológico futuro.' },
      { letter: 'C', text: 'Lugar geográfico fixo.' },
      { letter: 'D', text: 'Causa e efeito numérico.' },
      { letter: 'E', text: 'Instrumento mecânico.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A locução adverbial "DE IMPROVISO" (sinônima de "subitamente", "de surpresa", "inesperadamente") indica a circunstância de MODO como o fato ocorreu.',
    explanations: {
      A: 'CORRETA. Adjunto adverbial de modo.',
      B: 'INCORRETA. Não indica tempo futuro.',
      C: 'INCORRETA. Não indica lugar.',
      D: 'INCORRETA. Não indica causa numérica.',
      E: 'INCORRETA. Não indica instrumento.'
    }
  },
  {
    id: 'por-q36',
    subjectId: 'portugues',
    topic: 'Colocação Pronomial com Verbo no Participio',
    difficulty: 'Difícil',
    statement: 'Quanto à colocação pronominal em locuções verbais cujo verbo principal está no PARTICIPIO, assinale a regra CORRETA segundo a gramática normativa:',
    lawReference: 'Colocação Pronomial em Locuções Verbais',
    bancaTag: 'FCC / Vunesp',
    options: [
      { letter: 'A', text: 'Nunca se coloca pronome oblíquo átono APÓS o particípio (ex: "Tinha informado-me" é proibido; o correto é "Tinha-me informado" ou "Me tinha informado").' },
      { letter: 'B', text: 'É obrigatório colocar o pronome sempre após o particípio.' },
      { letter: 'C', text: 'O particípio atrai obrigatoriamente a próclise antecedente.' },
      { letter: 'D', text: 'Pode-se usar êclise ao particípio em qualquer contexto formal.' },
      { letter: 'E', text: 'Particípios não aceitam nenhum tipo de pronome na frase.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'REGRA DE OURO DE CONCURSO: NUNCA SE COLOCA PRONOME OBLÍQUO ÁTONO APÓS VERBO NO PARTICÍPIO! Frases como "Havia dito-me" ou "Tinha informado-me" são erros graves. O pronome deve ficar junto ao verbo auxiliar.',
    explanations: {
      A: 'CORRETA. Regra absoluta: proibida êclise a verbo no particípio.',
      B: 'INCORRETA. É proibido colocar o pronome após o particípio.',
      C: 'INCORRETA. O particípio em si não é palavra atrativa de próclise.',
      D: 'INCORRETA. É proibido.',
      E: 'INCORRETA. O pronome pode vir associado ao verbo auxiliar.'
    }
  },
  {
    id: 'por-q37',
    subjectId: 'portugues',
    topic: 'Uso das Aspas e Discurso Direto/Indireto',
    difficulty: 'Fácil',
    statement: 'As aspas devem ser empregadas em um texto formal para:',
    lawReference: 'Pontuação e Estilística',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Isolar citações diretas de outros autores, destacar gírias, neologismos ou ironias.' },
      { letter: 'B', text: 'Separar o sujeito do predicado verbal.' },
      { letter: 'C', text: 'Substituir a vírgula antes de conjunções explicativas.' },
      { letter: 'D', text: 'Indicar a contagem de tempo de prova.' },
      { letter: 'E', text: 'Finalizar períodos declarativos absolutos.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'As aspas têm como funções normativas principais: 1) delimitar transcrições e citações diretas; 2) destacar estrangeirismos, gírias, neologismos ou expressões usadas com ironia.',
    explanations: {
      A: 'CORRETA. Emprego regulamentar das aspas.',
      B: 'INCORRETA. Separar sujeito de predicado é proibido.',
      C: 'INCORRETA. Aspas não substituem vírgulas sintáticas.',
      D: 'INCORRETA. Sem relação com contagem de tempo.',
      E: 'INCORRETA. Finalizar período cabe ao ponto final.'
    }
  },
  {
    id: 'por-q38',
    subjectId: 'portugues',
    topic: 'Pontuação - Travessão e Parênteses',
    difficulty: 'Médio',
    statement: 'Em um texto, o par de travessões pode ser utilizado para:',
    lawReference: 'Sinais de Pontuação',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: 'Isolar explicações, comentários ou elementos intercalados, substituindo a vírgula ou os parênteses.' },
      { letter: 'B', text: 'Indicar a omissão de letras em palavras palavrões.' },
      { letter: 'C', text: 'Marcar a acentuação gráfica de proparoxítonas.' },
      { letter: 'D', text: 'Conectar frases sem relação de sentido.' },
      { letter: 'E', text: 'Substituir o ponto de interrogação.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O par de travessões (assim como as vírgulas duplas e os parênteses) serve para isolar orações intercaladas, explicações, apostos ou comentários do autor no meio do período.',
    explanations: {
      A: 'CORRETA. Função estilística e sintática reconhecida dos travessões duplos.',
      B: 'INCORRETA. Omissão de letras é indicada por reticências ou asteriscos.',
      C: 'INCORRETA. Não é sinal de acentuação.',
      D: 'INCORRETA. Não conecta frases desconexas.',
      E: 'INCORRETA. Não substitui interrogação.'
    }
  },
  {
    id: 'por-q39',
    subjectId: 'portugues',
    topic: 'Sentido de Conectivos - "Não obstante"',
    difficulty: 'Difícil',
    statement: 'A locução "NÃO OBSTANTE" pode atuar no texto como conectivo com valor semântico de:',
    lawReference: 'Semântica dos Conectivos',
    bancaTag: 'FCC / Vunesp',
    options: [
      { letter: 'A', text: 'Concessão ou Adversidade (equivale a "embora" ou "contudo").' },
      { letter: 'B', text: 'Causa exclusiva do fato principal.' },
      { letter: 'C', text: 'Proporção geométrica.' },
      { letter: 'D', text: 'Finalidade estrita.' },
      { letter: 'E', text: 'Condição hipotética necessária.' }
    ],
    correctLetter: 'A',
    generalExplanation: '"NÃO OBSTANTE" é um conectivo de valor CONCESSIVO (quando seguido de verbo no subjuntivo, equivalendo a "embora") ou ADVERSATIVO (quando seguido de verbo no indicativo, equivalendo a "contudo", "entretanto").',
    explanations: {
      A: 'CORRETA. "Não obstante" é marca registrada de concessão ou oposição/adversidade.',
      B: 'INCORRETA. Não expressa causa.',
      C: 'INCORRETA. Não expressa proporção.',
      D: 'INCORRETA. Não expressa finalidade.',
      E: 'INCORRETA. Não expressa condição.'
    }
  },
  {
    id: 'por-q40',
    subjectId: 'portugues',
    topic: 'Regência e Crase com Pronomes Demonstrativos (Aquele, Aquela)',
    difficulty: 'Difícil',
    statement: 'Assinale a frase em que o acento indicativo de crase antes do pronome demonstrativo "AQUELE" está empregado de forma CORRETA:',
    lawReference: 'Crase com Pronomes Demonstrativos',
    bancaTag: 'Vunesp / Avalia 2026',
    options: [
      { letter: 'A', text: 'Refiro-me àquele agente de trânsito que realizou a autuação.' },
      { letter: 'B', text: 'Avistei àquele fiscal no posto da rodovia.' },
      { letter: 'C', text: 'Elogiei àquele funcionário pela presteza no atendimento.' },
      { letter: 'D', text: 'Comprei àquele livro de Legislação na promoção.' },
      { letter: 'E', text: 'Encontrei àquele documento na pasta do processo.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Ocorre crase com os pronomes demonstrativos aquele(s), aquela(s), aquilo quando o verbo ou nome anterior exigir a PREPOSIÇÃO "A":\n- "Refiro-me A" + "AQUELE" = "Refiro-me ÀQUELE" (Opção A CORRETA).\nNas demais opções os verbos são transitivos diretos (avistei, elogiei, comprei, encontrei) e não exigem preposição "a", tornando a crase proibida.',
    explanations: {
      A: 'CORRETA. O verbo "referir-se" é VTI e exige preposição "a", que se funde com a letra inicial do pronome "aquele" formando "àquele".',
      B: 'INCORRETA. "Avistar" é VTD (não exige preposição "a").',
      C: 'INCORRETA. "Elogiar" é VTD (não exige preposição "a").',
      D: 'INCORRETA. "Comprar" é VTD (não exige preposição "a").',
      E: 'INCORRETA. "Encontrar" é VTD (não exige preposição "a").'
    }
  }
];
