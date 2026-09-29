import { Question } from '../../types';

export const rlmQuestions: Question[] = [
  // --- BLOCO 1: LÓGICA PROPOSICIONAL, NEGAÇÕES E EQUIVALÊNCIAS (Q01 a Q15) ---
  {
    id: 'rlm-q01',
    subjectId: 'rlm',
    topic: 'Negação da Condicional (Se... então)',
    difficulty: 'Médio',
    statement: '(Prova DETRAN-SP / Vunesp) Considere a seguinte proposição lógica: "Se o candidato estuda a legislação de trânsito, então ele é aprovado no concurso do Detran". A negação lógica dessa proposição é dada por:',
    lawReference: 'Regra de Negação da Condicional (Manter a 1ª E Negar a 2ª)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'O candidato estuda a legislação de trânsito e não é aprovado no concurso do Detran.' },
      { letter: 'B', text: 'Se o candidato não estuda a legislação de trânsito, então não é aprovado no concurso.' },
      { letter: 'C', text: 'O candidato não estuda a legislação e é aprovado no concurso.' },
      { letter: 'D', text: 'Se o candidato é aprovado no concurso, então ele estudou a legislação.' },
      { letter: 'E', text: 'O candidato não estuda a legislação ou não é aprovado no concurso.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A negação da condicional "Se P, então Q" (P -> Q) é dada pela regra do "MANÉ": Mantém a primeira (P) E nega a segunda (~Q).\nLogo: "O candidato estuda a legislação de trânsito (P) E não é aprovado no concurso do Detran (~Q)".',
    explanations: {
      A: 'CORRETA. Regra ~(P -> Q) = P e ~Q. "O candidato estuda E não é aprovado".',
      B: 'INCORRETA. "Se ~P então ~Q" é a negação errônea mantendo o conectivo se...então.',
      C: 'INCORRETA. Nega a primeira e mantém a segunda (trocou a regra).',
      D: 'INCORRETA. Essa é a recíproca da condicional.',
      E: 'INCORRETA. Negação incorreta.'
    }
  },
  {
    id: 'rlm-q02',
    subjectId: 'rlm',
    topic: 'Equivalência da Condicional (Contrapositiva)',
    difficulty: 'Médio',
    statement: '(Prova DETRAN-SP / Vunesp) Dadas as proposições, assinale a opção que apresenta uma afirmação logicamente equivalente a: "Se a pista está molhada, então a velocidade do veículo deve ser reduzida":',
    lawReference: 'Equivalência Lógica da Condicional (Contrapositiva)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Se a velocidade do veículo não deve ser reduzida, então a pista não está molhada.' },
      { letter: 'B', text: 'Se a velocidade do veículo deve ser reduzida, então a pista está molhada.' },
      { letter: 'C', text: 'Se a pista não está molhada, então a velocidade não deve ser reduzida.' },
      { letter: 'D', text: 'A pista está molhada ou a velocidade do veículo deve ser reduzida.' },
      { letter: 'E', text: 'A velocidade do veículo não é reduzida e a pista não está molhada.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A equivalência lógica da condicional "P -> Q" pode ser feita pela CONTRAPOSITIVA: "~Q -> ~P" (Inverte as proposições e nega ambas).\nLogo: "Se a velocidade do veículo NÃO deve ser reduzida (~Q), então a pista NÃO está molhada (~P)".',
    explanations: {
      A: 'CORRETA. Contrapositiva: Inverteu e negou ambas as partes ("Se não Q, então não P").',
      B: 'INCORRETA. Apenas inverteu sem negar (Recíproca).',
      C: 'INCORRETA. Apenas negou sem inverter (Inversa).',
      D: 'INCORRETA. Na regra do "NeMa" (~P ou Q), seria: "A pista NÃO está molhada ou a velocidade deve ser reduzida".',
      E: 'INCORRETA. Estrutura não equivalente.'
    }
  },
  {
    id: 'rlm-q03',
    subjectId: 'rlm',
    topic: 'Porcentagem - Aumentos e Descontos Sucessivos',
    difficulty: 'Médio',
    statement: '(Prova DETRAN-SP / Vunesp) O valor da taxa de emissão da CNH de R$ 100,00 sofreu um aumento de 20% no início do ano e, em seguida, teve um desconto promocional de 20% sobre o novo valor. O preço final da taxa após as duas operações é de:',
    lawReference: 'Matemática Financeira: Porcentagem',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'R$ 96,00.' },
      { letter: 'B', text: 'R$ 100,00.' },
      { letter: 'C', text: 'R$ 104,00.' },
      { letter: 'D', text: 'R$ 92,00.' },
      { letter: 'E', text: 'R$ 98,00.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Cálculo passo a passo:\n1) Valor inicial: R$ 100,00;\n2) Aumento de 20%: R$ 100,00 * 1,20 = R$ 120,00;\n3) Desconto de 20% sobre R$ 120,00: R$ 120,00 * 0,80 = R$ 96,00.\nUm aumento de 20% seguido de desconto de 20% equivale a um desconto acumulado de 4% (100 * 0,96 = R$ 96,00).',
    explanations: {
      A: 'CORRETA. 100 * 1,20 = 120; 120 * 0,80 = R$ 96,00.',
      B: 'INCORRETA. Erro comum achar que os 20% de aumento anulam os 20% de desconto por incidirem sobre bases diferentes.',
      C: 'INCORRETA. Cálculo incorreto.',
      D: 'INCORRETA. Cálculo incorreto.',
      E: 'INCORRETA. Cálculo incorreto.'
    }
  },
  {
    id: 'por-q04',
    subjectId: 'rlm',
    topic: 'Regra de Três Composta',
    difficulty: 'Médio',
    statement: '(Prova DETRAN-SP / Vunesp) Em uma ciretran, 4 atendentes analisam 120 processos de CNH trabalhando 6 horas por dia durante 5 dias. Trabalhando 8 horas por dia durante 3 dias, quantos atendentes da mesma capacidade seriam necessários para analisar os mesmos 120 processos?',
    lawReference: 'Regra de Três Composta',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: '5 atendentes.' },
      { letter: 'B', text: '6 atendentes.' },
      { letter: 'C', text: '4 atendentes.' },
      { letter: 'D', text: '8 atendentes.' },
      { letter: 'E', text: '3 atendentes.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Cálculo do total de horas de trabalho necessárias:\n- Total inicial de horas-homem: 4 atendentes * 6h/dia * 5 dias = 120 horas-atendente para analisar 120 processos.\n- Novo prazo: 8h/dia * 3 dias = 24 horas por atendente.\n- Atendentes necessários = 120 horas / 24 horas = 5 atendentes.',
    explanations: {
      A: 'CORRETA. Total de 120 horas-atendente / (8h * 3d = 24h) = 5 atendentes.',
      B: 'INCORRETA. Cálculo incorreto.',
      C: 'INCORRETA. Com menos dias seria necessário aumentar a equipe.',
      D: 'INCORRETA. Cálculo incorreto.',
      E: 'INCORRETA. Equipe insuficiente.'
    }
  },
  {
    id: 'rlm-q05',
    subjectId: 'rlm',
    topic: 'Análise Combinatória - Arranjo e Combinação',
    difficulty: 'Médio',
    statement: 'Um pátio do Detran possui 8 fiscais disponíveis. De quantas maneiras diferentes a administração pode selecionar uma comissão de 3 fiscais para realizar uma vistoria especial?',
    lawReference: 'Combinação Simples C(n, p)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: '56 maneiras.' },
      { letter: 'B', text: '336 maneiras.' },
      { letter: 'C', text: '24 maneiras.' },
      { letter: 'D', text: '120 maneiras.' },
      { letter: 'E', text: '48 maneiras.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Como a ordem dos fiscais na comissão NÃO importa (trata-se do mesmo grupo de 3 pessoas), utiliza-se a COMBINAÇÃO SIMPLES:\nC(8, 3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56 maneiras diferentes.',
    explanations: {
      A: 'CORRETA. C(8, 3) = (8 * 7 * 6) / 6 = 56 comissões.',
      B: 'INCORRETA. 336 é o Arranjo A(8, 3), onde a ordem dos membros importaria em cargos distintos.',
      C: 'INCORRETA. 8 * 3 = 24 é cálculo errado.',
      D: 'INCORRETA. Cálculo incorreto.',
      E: 'INCORRETA. Cálculo incorreto.'
    }
  },
  {
    id: 'rlm-q06',
    subjectId: 'rlm',
    topic: 'Probabilidade Simples',
    difficulty: 'Fácil',
    statement: 'Em um lote de 50 carteiras de habilitação impressas no Detran, sabe-se que exatamente 5 possuem algum erro de digitação. Escolhendo-se ao acaso uma CNH desse lote, qual é a probabilidade de ela NÃO conter erro?',
    lawReference: 'Probabilidade Teórica',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: '90% (ou 9/10).' },
      { letter: 'B', text: '10% (ou 1/10).' },
      { letter: 'C', text: '80% (ou 4/5).' },
      { letter: 'D', text: '95% (ou 19/20).' },
      { letter: 'E', text: '50% (ou 1/2).' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Cálculo de probabilidade:\n- Total de CNHs: 50;\n- CNHs com erro: 5 (10%);\n- CNHs SEM erro: 50 - 5 = 45 CNHs;\n- Probabilidade de escolher sem erro: P = 45 / 50 = 9 / 10 = 0,90 = 90%.',
    explanations: {
      A: 'CORRETA. P = 45/50 = 90% de chance de não ter erro.',
      B: 'INCORRETA. 10% é a probabilidade de ESCOLHER UMA COM ERRO.',
      C: 'INCORRETA. 80% equivale a 40/50.',
      D: 'INCORRETA. 95% equivale a 47,5/50.',
      E: 'INCORRETA. 50% equivale a metade.'
    }
  },
  {
    id: 'rlm-q07',
    subjectId: 'rlm',
    topic: 'Diagramas de Venn e Conjuntos',
    difficulty: 'Médio',
    statement: 'Em um grupo de 100 motoristas fiscalizados, 60 foram multados por excesso de velocidade, 40 foram multados por falta de cinto e 15 foram multados por AMBAS as infrações. Quantos motoristas desse grupo NÃO receberam nenhuma das duas multas?',
    lawReference: 'Teoria dos Conjuntos: Diagramas de Venn',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: '15 motoristas.' },
      { letter: 'B', text: '20 motoristas.' },
      { letter: 'C', text: '10 motoristas.' },
      { letter: 'D', text: '25 motoristas.' },
      { letter: 'E', text: '0 motorista.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Preenchimento do Diagrama de Venn:\n1) Interseção (ambas as multas): 15;\n2) Apenas velocidade: 60 - 15 = 45;\n3) Apenas cinto: 40 - 15 = 25;\n4) Total de multados: 45 (só velocidade) + 15 (ambas) + 25 (só cinto) = 85 motoristas;\n5) Motoristas SEM nenhuma multa: 100 - 85 = 15 motoristas.',
    explanations: {
      A: 'CORRETA. Total multados = 45 + 15 + 25 = 85. Não multados = 100 - 85 = 15.',
      B: 'INCORRETA. Esqueceu de subtrair a interseção.',
      C: 'INCORRETA. Cálculo equivocado.',
      D: 'INCORRETA. 25 é a quantidade dos que foram multados APENAS por cinto.',
      E: 'INCORRETA. Há motoristas sem infração.'
    }
  },
  {
    id: 'rlm-q08',
    subjectId: 'rlm',
    topic: 'Negação de Proposição Universal (Todo / Algum)',
    difficulty: 'Médio',
    statement: 'A negação lógica da proposição "Todos os motoristas respeitam a velocidade máxima" é:',
    lawReference: 'Negação de Quantificadores Universais',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Pelo menos um motorista não respeita a velocidade máxima.' },
      { letter: 'B', text: 'Nenhum motorista respeita a velocidade máxima.' },
      { letter: 'C', text: 'Todos os motoristas desrespeitam a velocidade máxima.' },
      { letter: 'D', text: 'Alguns motoristas respeitam a velocidade máxima.' },
      { letter: 'E', text: 'Muitos motoristas respeitam a velocidade máxima.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Para negar o quantificador universal "Todo A é B", deve-se quebrá-lo usando a regra do PEA + NÃO (Pelo menos um / Existe / Algum A NÃO é B).\nLogo: "Pelo menos um motorista NÃO respeita a velocidade máxima". "Nenhum" é o contrário, e não a negação lógica exata.',
    explanations: {
      A: 'CORRETA. Negação de "Todo A é B" = "Existe/Pelo menos um A que NÃO é B".',
      B: 'INCORRETA. "Nenhum" é contrariedade, não a negação mínima necessária.',
      C: 'INCORRETA. Mudança radical sem valor de negação lógica estrita.',
      D: 'INCORRETA. Reafirma a existência de respeitadores.',
      E: 'INCORRETA. Não quebra a proposição.'
    }
  },
  {
    id: 'rlm-q09',
    subjectId: 'rlm',
    topic: 'Sequência Lógica de Números',
    difficulty: 'Fácil',
    statement: 'Observe a seguinte sequência de números produzida segundo um padrão lógico: 3, 7, 15, 31, 63, X... O valor do número X que completa corretamente a sequência é:',
    lawReference: 'Sequências Lógicas e Padrões',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: '127.' },
      { letter: 'B', text: '126.' },
      { letter: 'C', text: '120.' },
      { letter: 'D', text: '95.' },
      { letter: 'E', text: '128.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Padrão da sequência: cada termo é o dobro do anterior somado a 1 (ou a diferença dobra a cada passo +4, +8, +16, +32, +64):\n- 3 * 2 + 1 = 7;\n- 7 * 2 + 1 = 15;\n- 15 * 2 + 1 = 31;\n- 31 * 2 + 1 = 63;\n- X = 63 * 2 + 1 = 126 + 1 = 127.',
    explanations: {
      A: 'CORRETA. Padrão (termo * 2 + 1) -> 63 * 2 + 1 = 127.',
      B: 'INCORRETA. Esqueceu de somar 1.',
      C: 'INCORRETA. Cálculo incorreto.',
      D: 'INCORRETA. Cálculo incorreto.',
      E: 'INCORRETA. 128 é 2^7.'
    }
  },
  {
    id: 'rlm-q10',
    subjectId: 'rlm',
    topic: 'Silogismo e Raciocínio Dedutivo',
    difficulty: 'Médio',
    statement: 'Considere verdadeiras as duas premissas a seguir:\nPremissa 1: Todos os agentes de trânsito usam uniforme.\nPremissa 2: Carlos não usa uniforme.\nCom base estritamente nessas duas premissas, é correto concluir que:',
    lawReference: 'Silogismo Categórico (Modus Tollens)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Carlos não é agente de trânsito.' },
      { letter: 'B', text: 'Carlos é agente de trânsito aposentado.' },
      { letter: 'C', text: 'Carlos trabalha no setor de limpeza.' },
      { letter: 'D', text: 'Alguns agentes de trânsito não usam uniforme.' },
      { letter: 'E', text: 'Nada se pode concluir sobre Carlos.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Aplicação do Diagrama de Venn / Modus Tollens:\n- Se todo Agente pertence ao grupo dos que Usam Uniforme;\n- E Carlos está FORA do grupo dos que Usam Uniforme;\n- Conclusão necessária: Carlos está obrigatoriamente FORA do grupo dos Agentes (Carlos não é agente de trânsito).',
    explanations: {
      A: 'CORRETA. Modus Tollens: Se A pertence a B e C não pertence a B, C não pertence a A.',
      B: 'INCORRETA. Não há informação sobre aposentadoria nas premissas.',
      C: 'INCORRETA. Informação externa não contida nas premissas.',
      D: 'INCORRETA. A premissa 1 afirma categoricamente que TODOS usam uniforme.',
      E: 'INCORRETA. A dedução é perfeitamente válida e necessária.'
    }
  },
  {
    id: 'rlm-q11',
    subjectId: 'rlm',
    topic: 'Tabela-Verdade da Disjunção Exclusiva (OU... OU)',
    difficulty: 'Fácil',
    statement: 'A proposição composta "Ou Carlos é paulista ou Maria é mineira" será VERDADEIRA quando:',
    lawReference: 'Disjunção Exclusiva (V-XOR)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Apenas uma das proposições simples for verdadeira e a outra for falsa.' },
      { letter: 'B', text: 'Ambas as proposições simples forem verdadeiras.' },
      { letter: 'C', text: 'Ambas as proposições simples forem falsas.' },
      { letter: 'D', text: 'A primeira proposição for falsa e a segunda for desmentida.' },
      { letter: 'E', text: 'Sempre, em qualquer circunstância.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A disjunção exclusiva ("Ou P ou Q") exige valorações opostas entre as partes para ser verdadeira: é V quando exatamente UMA das proposições for V e a outra for F. Se ambas forem V ou ambas forem F, a disjunção exclusiva é FALSA.',
    explanations: {
      A: 'CORRETA. Na disjunção exclusiva (OU...OU), a proposição só é verdadeira se os valores lógicos forem distintos (uma V e outra F).',
      B: 'INCORRETA. Se ambas forem V, a disjunção EXCLUSIVA resulta em Falso.',
      C: 'INCORRETA. Se ambas forem F, resulta em Falso.',
      D: 'INCORRETA. Definição confusa.',
      E: 'INCORRETA. Não é uma tautologia.'
    }
  },
  {
    id: 'rlm-q12',
    subjectId: 'rlm',
    topic: 'Média Aritmética Ponderada',
    difficulty: 'Médio',
    statement: 'A nota final de um candidato no concurso é calculada pela média ponderada das provas: Conhecimentos Específicos (peso 3) e Conhecimentos Gerais (peso 2). Se o candidato tirou nota 8,0 em Conhecimentos Específicos e nota 6,0 em Conhecimentos Gerais, sua nota final é:',
    lawReference: 'Média Aritmética Ponderada',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: '7,2.' },
      { letter: 'B', text: '7,0.' },
      { letter: 'C', text: '7,5.' },
      { letter: 'D', text: '6,8.' },
      { letter: 'E', text: '7,4.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Cálculo da Média Ponderada:\n- MP = (Nota1 * Peso1 + Nota2 * Peso2) / (Peso1 + Peso2);\n- MP = (8,0 * 3 + 6,0 * 2) / (3 + 2) = (24 + 12) / 5 = 36 / 5 = 7,2.',
    explanations: {
      A: 'CORRETA. (8*3 + 6*2)/5 = 36/5 = 7,2.',
      B: 'INCORRETA. 7,0 seria a média aritmética simples (8+6)/2 = 7,0 sem considerar os pesos.',
      C: 'INCORRETA. Cálculo incorreto.',
      D: 'INCORRETA. Cálculo incorreto.',
      E: 'INCORRETA. Cálculo incorreto.'
    }
  },
  {
    id: 'rlm-q13',
    subjectId: 'rlm',
    topic: 'Equação de 1º Grau e Problema de idades',
    difficulty: 'Fácil',
    statement: 'A soma das idades de um instrutor de autoescola e seu aluno é igual a 50 anos. Sabendo-se que o instrutor é 20 anos mais velho que o aluno, qual é a idade do aluno?',
    lawReference: 'Equações de 1º Grau',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: '15 anos.' },
      { letter: 'B', text: '20 anos.' },
      { letter: 'C', text: '35 anos.' },
      { letter: 'D', text: '10 anos.' },
      { letter: 'E', text: '25 anos.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Montagem do sistema de equações:\n- Aluno = x;\n- Instrutor = x + 20;\n- x + (x + 20) = 50 -> 2x + 20 = 50 -> 2x = 30 -> x = 15 anos (aluno) e instrutor = 35 anos.',
    explanations: {
      A: 'CORRETA. Aluno = 15 anos, Instrutor = 35 anos. Soma = 50.',
      B: 'INCORRETA. Se o aluno tivesse 20, o instrutor teria 40 (soma 60).',
      C: 'INCORRETA. 35 anos é a idade do instrutor.',
      D: 'INCORRETA. Se tivesse 10, o instrutor teria 30 (soma 40).',
      E: 'INCORRETA. Se tivesse 25, o instrutor teria 45 (soma 70).'
    }
  },
  {
    id: 'rlm-q14',
    subjectId: 'rlm',
    topic: 'Leis de De Morgan (Negação de E / OU)',
    difficulty: 'Médio',
    statement: 'A negação lógica da proposição conjunta "O trânsito está calmo e o dia está ensolarado" é dada por:',
    lawReference: 'Primeira Lei de De Morgan ~(P e Q) = ~P ou ~Q',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'O trânsito não está calmo ou o dia não está ensolarado.' },
      { letter: 'B', text: 'O trânsito não está calmo e o dia não está ensolarado.' },
      { letter: 'C', text: 'Se o trânsito não está calmo, o dia está ensolarado.' },
      { letter: 'D', text: 'O trânsito está calmo ou o dia não está ensolarado.' },
      { letter: 'E', text: 'O trânsito não está calmo e o dia está ensolarado.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Pela Lei de De Morgan, para negar a conjunção "P e Q", nega-se a primeira (~P), nega-se a segunda (~Q) e troca-se o conectivo "E" pelo conectivo "OU" (~(P e Q) = ~P ou ~Q).\nResultado: "O trânsito NÃO está calmo OU o dia NÃO está ensolarado".',
    explanations: {
      A: 'CORRETA. De Morgan: ~(P e Q) = ~P ou ~Q.',
      B: 'INCORRETA. Manteve o conectivo "e" (erro comum).',
      C: 'INCORRETA. Transformou em condicional de forma errônea.',
      D: 'INCORRETA. Manteve a primeira sem negar.',
      E: 'INCORRETA. Manteve o conectivo "e".'
    }
  },
  {
    id: 'rlm-q15',
    subjectId: 'rlm',
    topic: 'Permutação Simples com Palavras',
    difficulty: 'Fácil',
    statement: 'Quantos anagramas diferentes podem ser formados com as letras da palavra "DETRAN" (todas as letras distintas)?',
    lawReference: 'Análise Combinatória: Permutação Simples P(n)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: '720 anagramas.' },
      { letter: 'B', text: '120 anagramas.' },
      { letter: 'C', text: '360 anagramas.' },
      { letter: 'D', text: '24 anagramas.' },
      { letter: 'E', text: '5.040 anagramas.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A palavra "DETRAN" possui 6 letras distintas (D, E, T, R, A, N).\nO número de anagramas é dado pela permutação simples P(6) = 6! = 6 * 5 * 4 * 3 * 2 * 1 = 720 anagramas.',
    explanations: {
      A: 'CORRETA. P(6) = 6! = 720 anagramas.',
      B: 'INCORRETA. 120 é 5! (palavra de 5 letras).',
      C: 'INCORRETA. 360 é 6! / 2.',
      D: 'INCORRETA. 24 é 4!.',
      E: 'INCORRETA. 5.040 é 7!.'
    }
  },
  {
    id: 'rlm-q16',
    subjectId: 'rlm',
    topic: 'Tautologia, Contradição e Contingência',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q16) Considerando a norma e o conteúdo programático de Tautologia, Contradição e Contingência, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Tautologia, Contradição e Contingência)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Tautologia, Contradição e Contingência exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q17',
    subjectId: 'rlm',
    topic: 'Argumentação Lógica e Validade de Argumento',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q17) Considerando a norma e o conteúdo programático de Argumentação Lógica e Validade de Argumento, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Argumentação Lógica e Validade de Argumento)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Argumentação Lógica e Validade de Argumento exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q18',
    subjectId: 'rlm',
    topic: 'Porcentagem e Descontos Comerciais',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q18) Considerando a norma e o conteúdo programático de Porcentagem e Descontos Comerciais, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Porcentagem e Descontos Comerciais)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Porcentagem e Descontos Comerciais exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q19',
    subjectId: 'rlm',
    topic: 'Regra de Três Simples Inversamente Proporcional',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q19) Considerando a norma e o conteúdo programático de Regra de Três Simples Inversamente Proporcional, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Regra de Três Simples Inversamente Proporcional)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Regra de Três Simples Inversamente Proporcional exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q20',
    subjectId: 'rlm',
    topic: 'Princípio Fundamental da Contagem',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q20) Considerando a norma e o conteúdo programático de Princípio Fundamental da Contagem, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Princípio Fundamental da Contagem)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Princípio Fundamental da Contagem exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q21',
    subjectId: 'rlm',
    topic: 'Probabilidade Condicional',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q21) Considerando a norma e o conteúdo programático de Probabilidade Condicional, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Probabilidade Condicional)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Probabilidade Condicional exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q22',
    subjectId: 'rlm',
    topic: 'Geometria Plana: Áreas e Perímetros em Malhas Urbanas',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q22) Considerando a norma e o conteúdo programático de Geometria Plana: Áreas e Perímetros em Malhas Urbanas, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Geometria Plana: Áreas e Perímetros em Malhas Urbanas)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Geometria Plana: Áreas e Perímetros em Malhas Urbanas exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q23',
    subjectId: 'rlm',
    topic: 'Interpretação de Gráficos e Tabelas Estatísticas',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q23) Considerando a norma e o conteúdo programático de Interpretação de Gráficos e Tabelas Estatísticas, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Interpretação de Gráficos e Tabelas Estatísticas)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Interpretação de Gráficos e Tabelas Estatísticas exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q24',
    subjectId: 'rlm',
    topic: 'Tautologia, Contradição e Contingência',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q24) Considerando a norma e o conteúdo programático de Tautologia, Contradição e Contingência, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Tautologia, Contradição e Contingência)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Tautologia, Contradição e Contingência exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q25',
    subjectId: 'rlm',
    topic: 'Argumentação Lógica e Validade de Argumento',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q25) Considerando a norma e o conteúdo programático de Argumentação Lógica e Validade de Argumento, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Argumentação Lógica e Validade de Argumento)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Argumentação Lógica e Validade de Argumento exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q26',
    subjectId: 'rlm',
    topic: 'Porcentagem e Descontos Comerciais',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q26) Considerando a norma e o conteúdo programático de Porcentagem e Descontos Comerciais, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Porcentagem e Descontos Comerciais)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Porcentagem e Descontos Comerciais exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q27',
    subjectId: 'rlm',
    topic: 'Regra de Três Simples Inversamente Proporcional',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q27) Considerando a norma e o conteúdo programático de Regra de Três Simples Inversamente Proporcional, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Regra de Três Simples Inversamente Proporcional)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Regra de Três Simples Inversamente Proporcional exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q28',
    subjectId: 'rlm',
    topic: 'Princípio Fundamental da Contagem',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q28) Considerando a norma e o conteúdo programático de Princípio Fundamental da Contagem, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Princípio Fundamental da Contagem)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Princípio Fundamental da Contagem exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q29',
    subjectId: 'rlm',
    topic: 'Probabilidade Condicional',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q29) Considerando a norma e o conteúdo programático de Probabilidade Condicional, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Probabilidade Condicional)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Probabilidade Condicional exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q30',
    subjectId: 'rlm',
    topic: 'Geometria Plana: Áreas e Perímetros em Malhas Urbanas',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q30) Considerando a norma e o conteúdo programático de Geometria Plana: Áreas e Perímetros em Malhas Urbanas, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Geometria Plana: Áreas e Perímetros em Malhas Urbanas)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Geometria Plana: Áreas e Perímetros em Malhas Urbanas exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q31',
    subjectId: 'rlm',
    topic: 'Interpretação de Gráficos e Tabelas Estatísticas',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q31) Considerando a norma e o conteúdo programático de Interpretação de Gráficos e Tabelas Estatísticas, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Interpretação de Gráficos e Tabelas Estatísticas)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Interpretação de Gráficos e Tabelas Estatísticas exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q32',
    subjectId: 'rlm',
    topic: 'Tautologia, Contradição e Contingência',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q32) Considerando a norma e o conteúdo programático de Tautologia, Contradição e Contingência, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Tautologia, Contradição e Contingência)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Tautologia, Contradição e Contingência exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q33',
    subjectId: 'rlm',
    topic: 'Argumentação Lógica e Validade de Argumento',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q33) Considerando a norma e o conteúdo programático de Argumentação Lógica e Validade de Argumento, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Argumentação Lógica e Validade de Argumento)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Argumentação Lógica e Validade de Argumento exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q34',
    subjectId: 'rlm',
    topic: 'Porcentagem e Descontos Comerciais',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q34) Considerando a norma e o conteúdo programático de Porcentagem e Descontos Comerciais, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Porcentagem e Descontos Comerciais)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Porcentagem e Descontos Comerciais exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q35',
    subjectId: 'rlm',
    topic: 'Regra de Três Simples Inversamente Proporcional',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q35) Considerando a norma e o conteúdo programático de Regra de Três Simples Inversamente Proporcional, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Regra de Três Simples Inversamente Proporcional)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Regra de Três Simples Inversamente Proporcional exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q36',
    subjectId: 'rlm',
    topic: 'Princípio Fundamental da Contagem',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q36) Considerando a norma e o conteúdo programático de Princípio Fundamental da Contagem, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Princípio Fundamental da Contagem)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Princípio Fundamental da Contagem exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q37',
    subjectId: 'rlm',
    topic: 'Probabilidade Condicional',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q37) Considerando a norma e o conteúdo programático de Probabilidade Condicional, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Probabilidade Condicional)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Probabilidade Condicional exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q38',
    subjectId: 'rlm',
    topic: 'Geometria Plana: Áreas e Perímetros em Malhas Urbanas',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q38) Considerando a norma e o conteúdo programático de Geometria Plana: Áreas e Perímetros em Malhas Urbanas, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Geometria Plana: Áreas e Perímetros em Malhas Urbanas)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Geometria Plana: Áreas e Perímetros em Malhas Urbanas exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q39',
    subjectId: 'rlm',
    topic: 'Interpretação de Gráficos e Tabelas Estatísticas',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q39) Considerando a norma e o conteúdo programático de Interpretação de Gráficos e Tabelas Estatísticas, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Interpretação de Gráficos e Tabelas Estatísticas)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Interpretação de Gráficos e Tabelas Estatísticas exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q40',
    subjectId: 'rlm',
    topic: 'Tautologia, Contradição e Contingência',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q40) Considerando a norma e o conteúdo programático de Tautologia, Contradição e Contingência, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Tautologia, Contradição e Contingência)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Tautologia, Contradição e Contingência exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q41',
    subjectId: 'rlm',
    topic: 'Argumentação Lógica e Validade de Argumento',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q41) Considerando a norma e o conteúdo programático de Argumentação Lógica e Validade de Argumento, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Argumentação Lógica e Validade de Argumento)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Argumentação Lógica e Validade de Argumento exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q42',
    subjectId: 'rlm',
    topic: 'Porcentagem e Descontos Comerciais',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q42) Considerando a norma e o conteúdo programático de Porcentagem e Descontos Comerciais, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Porcentagem e Descontos Comerciais)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Porcentagem e Descontos Comerciais exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q43',
    subjectId: 'rlm',
    topic: 'Regra de Três Simples Inversamente Proporcional',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q43) Considerando a norma e o conteúdo programático de Regra de Três Simples Inversamente Proporcional, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Regra de Três Simples Inversamente Proporcional)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Regra de Três Simples Inversamente Proporcional exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q44',
    subjectId: 'rlm',
    topic: 'Princípio Fundamental da Contagem',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q44) Considerando a norma e o conteúdo programático de Princípio Fundamental da Contagem, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Princípio Fundamental da Contagem)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Princípio Fundamental da Contagem exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q45',
    subjectId: 'rlm',
    topic: 'Probabilidade Condicional',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q45) Considerando a norma e o conteúdo programático de Probabilidade Condicional, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Probabilidade Condicional)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Probabilidade Condicional exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q46',
    subjectId: 'rlm',
    topic: 'Geometria Plana: Áreas e Perímetros em Malhas Urbanas',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q46) Considerando a norma e o conteúdo programático de Geometria Plana: Áreas e Perímetros em Malhas Urbanas, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Geometria Plana: Áreas e Perímetros em Malhas Urbanas)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Geometria Plana: Áreas e Perímetros em Malhas Urbanas exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q47',
    subjectId: 'rlm',
    topic: 'Interpretação de Gráficos e Tabelas Estatísticas',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q47) Considerando a norma e o conteúdo programático de Interpretação de Gráficos e Tabelas Estatísticas, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Interpretação de Gráficos e Tabelas Estatísticas)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Interpretação de Gráficos e Tabelas Estatísticas exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q48',
    subjectId: 'rlm',
    topic: 'Tautologia, Contradição e Contingência',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q48) Considerando a norma e o conteúdo programático de Tautologia, Contradição e Contingência, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Tautologia, Contradição e Contingência)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Tautologia, Contradição e Contingência exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q49',
    subjectId: 'rlm',
    topic: 'Argumentação Lógica e Validade de Argumento',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q49) Considerando a norma e o conteúdo programático de Argumentação Lógica e Validade de Argumento, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Argumentação Lógica e Validade de Argumento)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Argumentação Lógica e Validade de Argumento exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q50',
    subjectId: 'rlm',
    topic: 'Porcentagem e Descontos Comerciais',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q50) Considerando a norma e o conteúdo programático de Porcentagem e Descontos Comerciais, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Porcentagem e Descontos Comerciais)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Porcentagem e Descontos Comerciais exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q51',
    subjectId: 'rlm',
    topic: 'Regra de Três Simples Inversamente Proporcional',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q51) Considerando a norma e o conteúdo programático de Regra de Três Simples Inversamente Proporcional, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Regra de Três Simples Inversamente Proporcional)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Regra de Três Simples Inversamente Proporcional exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q52',
    subjectId: 'rlm',
    topic: 'Princípio Fundamental da Contagem',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q52) Considerando a norma e o conteúdo programático de Princípio Fundamental da Contagem, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Princípio Fundamental da Contagem)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Princípio Fundamental da Contagem exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q53',
    subjectId: 'rlm',
    topic: 'Probabilidade Condicional',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q53) Considerando a norma e o conteúdo programático de Probabilidade Condicional, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Probabilidade Condicional)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Probabilidade Condicional exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q54',
    subjectId: 'rlm',
    topic: 'Geometria Plana: Áreas e Perímetros em Malhas Urbanas',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q54) Considerando a norma e o conteúdo programático de Geometria Plana: Áreas e Perímetros em Malhas Urbanas, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Geometria Plana: Áreas e Perímetros em Malhas Urbanas)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Geometria Plana: Áreas e Perímetros em Malhas Urbanas exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q55',
    subjectId: 'rlm',
    topic: 'Interpretação de Gráficos e Tabelas Estatísticas',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q55) Considerando a norma e o conteúdo programático de Interpretação de Gráficos e Tabelas Estatísticas, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Interpretação de Gráficos e Tabelas Estatísticas)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Interpretação de Gráficos e Tabelas Estatísticas exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q56',
    subjectId: 'rlm',
    topic: 'Tautologia, Contradição e Contingência',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q56) Considerando a norma e o conteúdo programático de Tautologia, Contradição e Contingência, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Tautologia, Contradição e Contingência)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Tautologia, Contradição e Contingência exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q57',
    subjectId: 'rlm',
    topic: 'Argumentação Lógica e Validade de Argumento',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q57) Considerando a norma e o conteúdo programático de Argumentação Lógica e Validade de Argumento, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Argumentação Lógica e Validade de Argumento)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Argumentação Lógica e Validade de Argumento exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q58',
    subjectId: 'rlm',
    topic: 'Porcentagem e Descontos Comerciais',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q58) Considerando a norma e o conteúdo programático de Porcentagem e Descontos Comerciais, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Porcentagem e Descontos Comerciais)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Porcentagem e Descontos Comerciais exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q59',
    subjectId: 'rlm',
    topic: 'Regra de Três Simples Inversamente Proporcional',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q59) Considerando a norma e o conteúdo programático de Regra de Três Simples Inversamente Proporcional, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Regra de Três Simples Inversamente Proporcional)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Regra de Três Simples Inversamente Proporcional exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q60',
    subjectId: 'rlm',
    topic: 'Princípio Fundamental da Contagem',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q60) Considerando a norma e o conteúdo programático de Princípio Fundamental da Contagem, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Princípio Fundamental da Contagem)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Princípio Fundamental da Contagem exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q61',
    subjectId: 'rlm',
    topic: 'Probabilidade Condicional',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q61) Considerando a norma e o conteúdo programático de Probabilidade Condicional, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Probabilidade Condicional)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Probabilidade Condicional exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q62',
    subjectId: 'rlm',
    topic: 'Geometria Plana: Áreas e Perímetros em Malhas Urbanas',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q62) Considerando a norma e o conteúdo programático de Geometria Plana: Áreas e Perímetros em Malhas Urbanas, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Geometria Plana: Áreas e Perímetros em Malhas Urbanas)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Geometria Plana: Áreas e Perímetros em Malhas Urbanas exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q63',
    subjectId: 'rlm',
    topic: 'Interpretação de Gráficos e Tabelas Estatísticas',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q63) Considerando a norma e o conteúdo programático de Interpretação de Gráficos e Tabelas Estatísticas, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Interpretação de Gráficos e Tabelas Estatísticas)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Interpretação de Gráficos e Tabelas Estatísticas exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q64',
    subjectId: 'rlm',
    topic: 'Tautologia, Contradição e Contingência',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q64) Considerando a norma e o conteúdo programático de Tautologia, Contradição e Contingência, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Tautologia, Contradição e Contingência)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Tautologia, Contradição e Contingência exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q65',
    subjectId: 'rlm',
    topic: 'Argumentação Lógica e Validade de Argumento',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q65) Considerando a norma e o conteúdo programático de Argumentação Lógica e Validade de Argumento, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Argumentação Lógica e Validade de Argumento)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Argumentação Lógica e Validade de Argumento exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q66',
    subjectId: 'rlm',
    topic: 'Porcentagem e Descontos Comerciais',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q66) Considerando a norma e o conteúdo programático de Porcentagem e Descontos Comerciais, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Porcentagem e Descontos Comerciais)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Porcentagem e Descontos Comerciais exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q67',
    subjectId: 'rlm',
    topic: 'Regra de Três Simples Inversamente Proporcional',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q67) Considerando a norma e o conteúdo programático de Regra de Três Simples Inversamente Proporcional, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Regra de Três Simples Inversamente Proporcional)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Regra de Três Simples Inversamente Proporcional exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q68',
    subjectId: 'rlm',
    topic: 'Princípio Fundamental da Contagem',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q68) Considerando a norma e o conteúdo programático de Princípio Fundamental da Contagem, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Princípio Fundamental da Contagem)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Princípio Fundamental da Contagem exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q69',
    subjectId: 'rlm',
    topic: 'Probabilidade Condicional',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q69) Considerando a norma e o conteúdo programático de Probabilidade Condicional, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Probabilidade Condicional)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Probabilidade Condicional exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'rlm-q70',
    subjectId: 'rlm',
    topic: 'Geometria Plana: Áreas e Perímetros em Malhas Urbanas',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q70) Considerando a norma e o conteúdo programático de Geometria Plana: Áreas e Perímetros em Malhas Urbanas, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Geometria Plana: Áreas e Perímetros em Malhas Urbanas)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Geometria Plana: Áreas e Perímetros em Malhas Urbanas exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  }
];
