import { Question } from '../../types';

export const rlmQuestions: Question[] = [
  {
    id: 'rlm-q01',
    subjectId: 'rlm',
    topic: 'Velocidade Média Total (Média Harmônica)',
    difficulty: 'Médio',
    statement: '(Prova Real DETRAN-SP / FCC Q09) Um automóvel faz metade do percurso de uma viagem a uma velocidade média de 80 km/h e a outra metade a 120 km/h de velocidade média. A velocidade média desenvolvida pelo automóvel durante a totalidade do percurso da viagem é, em km/h, de:',
    lawReference: 'Matemática - Velocidade Média Padrão',
    bancaTag: 'Prova Oficial DETRAN-SP - FCC Q09',
    options: [
      { letter: 'A', text: '108 km/h.' },
      { letter: 'B', text: '100 km/h.' },
      { letter: 'C', text: '96 km/h.' },
      { letter: 'D', text: '112 km/h.' },
      { letter: 'E', text: '104 km/h.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'Quando um veículo percorre distâncias iguais (metade e metade) a velocidades V1 e V2, a velocidade média total é dada pela MÉDIA HARMÔNICA:\nVm = (2 × V1 × V2) / (V1 + V2) = (2 × 80 × 120) / (80 + 120) = 19.200 / 200 = 96 km/h.',
    explanations: {
      A: 'INCORRETA. Erro de fórmula.',
      B: 'INCORRETA. 100 km/h é a média aritmética simples (80+120)/2, pega de ratão clássica da FCC!',
      C: 'CORRETA. Média harmônica Vm = 2×80×120 / (80+120) = 96 km/h.',
      D: 'INCORRETA. Cálculo incorreto.',
      E: 'INCORRETA. Cálculo incorreto.'
    }
  },
  {
    id: 'rlm-q02',
    subjectId: 'rlm',
    topic: 'Lógica Proposicional - Inferência e Modus Tollens',
    difficulty: 'Difícil',
    statement: '(Prova Real DETRAN-SP / FCC Q10) Considere a afirmação: "Em uma festa, se Carlos está acompanhado ou está feliz, canta e dança." Sabendo que, na última festa em que esteve, Carlos NÃO DANÇOU, então é necessariamente verdade que Carlos:',
    lawReference: 'Lógica Proposicional - Regras de Inferência',
    bancaTag: 'Prova Oficial DETRAN-SP - FCC Q10',
    options: [
      { letter: 'A', text: 'Não cantou.' },
      { letter: 'B', text: 'Cantou.' },
      { letter: 'C', text: 'Não estava acompanhado, mas estava feliz.' },
      { letter: 'D', text: 'Estava acompanhado, mas não estava feliz.' },
      { letter: 'E', text: 'Não estava acompanhado e não estava feliz.' }
    ],
    correctLetter: 'E',
    generalExplanation: 'Estrutura lógica: (Acompanhado ∨ Feliz) → (Canta ∧ Dança).\nSe Carlos NÃO DANÇOU, a conjunção (Canta ∧ Dança) é FALSA.\nPela regra do Modus Tollens (se p → q é V e q é F, então p é F), o antecedente (Acompanhado ∨ Feliz) deve ser FALSO.\nPela Lei de De Morgan: ~(A ∨ F) ≡ ~A ∧ ~F (Carlos NÃO estava acompanhado E NÃO estava feliz).',
    explanations: {
      A: 'INCORRETA. Dizer apenas que não cantou é uma dedução incompleta.',
      B: 'INCORRETA. Ele não cantou nem dançou.',
      C: 'INCORRETA. Se estivesse feliz, teria dançado.',
      D: 'INCORRETA. Se estivesse acompanhado, teria dançado.',
      E: 'CORRETA. Negação lógica completa do antecedente pela Lei de De Morgan.'
    }
  },
  {
    id: 'rlm-q03',
    subjectId: 'rlm',
    topic: 'Negação da Condicional (Se... então)',
    difficulty: 'Médio',
    statement: 'Qual é a negação lógica da proposição condicional: "Se o condutor for habilitado, então ele pode dirigir na rodovia"?',
    lawReference: 'Lógica de Negação - Regra do "MANÉ"',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Se o condutor não for habilitado, então ele não pode dirigir na rodovia.' },
      { letter: 'B', text: 'O condutor é habilitado e ele não pode dirigir na rodovia.' },
      { letter: 'C', text: 'O condutor não é habilitado ou ele pode dirigir na rodovia.' },
      { letter: 'D', text: 'Se o condutor pode dirigir na rodovia, então ele é habilitado.' },
      { letter: 'E', text: 'O condutor não é habilitado e não pode dirigir na rodovia.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'A negação lógica de uma condicional (p → q) é dada pela regra do "MANÉ": Mantém a primeira (p) E Nega a segunda (~q).\nLogo: ~(p → q) ≡ p ∧ ~q.\nSubstituindo: "O condutor é habilitado E ele NÃO pode dirigir na rodovia".',
    explanations: {
      A: 'INCORRETA. Essa é a negação de ambas as partes sem trocar por "e".',
      B: 'CORRETA. Negação exata da condicional: Mantém a primeira E Nega a segunda (p ∧ ~q).',
      C: 'INCORRETA. Essa é uma equivalência da condicional (~p ∨ q), não sua negação.',
      D: 'INCORRETA. Essa é a recíproca.',
      E: 'INCORRETA. Negou ambas com "e".'
    }
  },
  {
    id: 'rlm-q04',
    subjectId: 'rlm',
    topic: 'Equivalência Lógica da Condicional (Contrapositiva)',
    difficulty: 'Médio',
    statement: 'A proposição logicamente equivalente a "Se o agente de trânsito fiscaliza a via, então os acidentes diminuem" é:',
    lawReference: 'Lógica Proposicional - Contrapositiva',
    bancaTag: 'FCC / Vunesp',
    options: [
      { letter: 'A', text: 'Se os acidentes diminuem, então o agente de trânsito fiscaliza a via.' },
      { letter: 'B', text: 'Se os acidentes não diminuem, então o agente de trânsito não fiscaliza a via.' },
      { letter: 'C', text: 'O agente de trânsito não fiscaliza a via e os acidentes diminuem.' },
      { letter: 'D', text: 'Se o agente não fiscaliza a via, os acidentes não diminuem.' },
      { letter: 'E', text: 'O agente de trânsito fiscaliza a via ou os acidentes não diminuem.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'A equivalência lógica da condicional (p → q) via CONTRAPOSITIVA é dada por: (~q → ~p).\nInvertem-se as proposições e negam-se ambas:\n"Se os acidentes NÃO diminuem, então o agente de trânsito NÃO fiscaliza a via".',
    explanations: {
      A: 'INCORRETA. Essa é a recíproca (q → p), não equivalente.',
      B: 'CORRETA. Contrapositiva perfeita (~q → ~p).',
      C: 'INCORRETA. Conjunção que não equivale à condicional.',
      D: 'INCORRETA. Essa é a inversa (~p → ~q).',
      E: 'INCORRETA. Erro de conectivo.'
    }
  },
  {
    id: 'rlm-q05',
    subjectId: 'rlm',
    topic: 'Porcentagem e Descontos Sucessivos',
    difficulty: 'Médio',
    statement: 'O valor da multa de trânsito de um motorista sofreu um desconto inicial de 20% por pagamento antecipado no SNE. Em seguida, sobre o novo valor obtido, o motorista recebeu um desconto adicional de 10% por bom condutor. O desconto percentual TOTAL acumulado em relação ao valor original da multa foi de:',
    lawReference: 'Matemática Financeira - Descontos Sucessivos',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: '30%.' },
      { letter: 'B', text: '28%.' },
      { letter: 'C', text: '25%.' },
      { letter: 'D', text: '32%.' },
      { letter: 'E', text: '18%.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Cálculo de descontos sucessivos:\nSe o valor original é 100:\n1º desconto (20%): 100 × 0,80 = 80.\n2º desconto (10% sobre 80): 80 × 0,90 = 72.\nO valor final pago é 72% do valor original.\nDesconto total = 100% - 72% = 28%.',
    explanations: {
      A: 'INCORRETA. 20% + 10% = 30% é a soma simples, armadilha clássica!',
      B: 'CORRETA. Fator multiplicativo: (1 - 0,20) × (1 - 0,10) = 0,80 × 0,90 = 0,72 -> Desconto real de 28%.',
      C: 'INCORRETA. Valor errado.',
      D: 'INCORRETA. Valor errado.',
      E: 'INCORRETA. Valor errado.'
    }
  },
  {
    id: 'rlm-q06',
    subjectId: 'rlm',
    topic: 'Regra de Três Composta',
    difficulty: 'Difícil',
    statement: 'Para realizar a vistoria de 120 veículos em um posto do DETRAN, 6 agentes de trânsito trabalhando com a mesma eficiência levam 4 dias. Quantos dias serão necessários para 8 agentes de trânsito com essa mesma eficiência vistoriarem 240 veículos?',
    lawReference: 'Matemática - Grandezas Proporcionais',
    bancaTag: 'FCC / Vunesp',
    options: [
      { letter: 'A', text: '8 dias.' },
      { letter: 'B', text: '6 dias.' },
      { letter: 'C', text: '5 dias.' },
      { letter: 'D', text: '4 dias.' },
      { letter: 'E', text: '10 dias.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Montando a proporção de dias (D):\n- Agentes e Dias: inversamente proporcionais (mais agentes -> menos dias).\n- Veículos e Dias: diretamente proporcionais (mais veículos -> mais dias).\nD / 4 = (6 / 8) × (240 / 120)\nD / 4 = (3 / 4) × 2 = 6 / 4\nD = 6 dias.',
    explanations: {
      A: 'INCORRETA. Cálculo sem inverter a grandeza agentes.',
      B: 'CORRETA. D = 4 × (6/8) × (240/120) = 4 × 0,75 × 2 = 6 dias.',
      C: 'INCORRETA. Cálculo incorreto.',
      D: 'INCORRETA. Cálculo incorreto.',
      E: 'INCORRETA. Cálculo incorreto.'
    }
  },
  {
    id: 'rlm-q07',
    subjectId: 'rlm',
    topic: 'Análise Combinatória - Arranjo vs Combinação',
    difficulty: 'Médio',
    statement: 'Um posto do DETRAN-SP possui 10 agentes habilitados. De quantas maneiras diferentes o supervisor pode selecionar uma comissão composta por 3 agentes para realizar uma blitz de fiscalização?',
    lawReference: 'Análise Combinatória - Combinação Simples',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: '720 maneiras.' },
      { letter: 'B', text: '120 maneiras.' },
      { letter: 'C', text: '30 maneiras.' },
      { letter: 'D', text: '240 maneiras.' },
      { letter: 'E', text: '360 maneiras.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Como a ordem dos agentes na comissão não altera o grupo escolhido, trata-se de uma COMBINAÇÃO SIMPLES C(10, 3):\nC(10, 3) = (10 × 9 × 8) / (3 × 2 × 1) = 720 / 6 = 120 maneiras.',
    explanations: {
      A: 'INCORRETA. 720 seria o Arranjo A(10,3) se a ordem dos cargos importasse.',
      B: 'CORRETA. Combinação C(10,3) = (10×9×8)/6 = 120 comissões.',
      C: 'INCORRETA. 10 × 3 = 30 é cálculo simplório.',
      D: 'INCORRETA. Cálculo incorreto.',
      E: 'INCORRETA. Cálculo incorreto.'
    }
  },
  {
    id: 'rlm-q08',
    subjectId: 'rlm',
    topic: 'Análise Combinatória - Princípio Fundamental da Contagem (Placas)',
    difficulty: 'Fácil',
    statement: 'As placas de identificação de veículos no padrão Mercosul são compostas por 4 letras e 3 números no formato LLLNLNN (ex: ABC1D23). Considerando o alfabeto com 26 letras e os 10 algarismos (0 a 9), quantas placas distintas podem ser formadas sem nenhuma restrição de repetição?',
    lawReference: 'Princípio Multiplicativo de Contagem',
    bancaTag: 'FCC / Avalia 2026',
    options: [
      { letter: 'A', text: '26⁴ × 10³ = 456.976.000 placas.' },
      { letter: 'B', text: '26³ × 10⁴ = 175.760.000 placas.' },
      { letter: 'C', text: '26 + 10 = 36 placas.' },
      { letter: 'D', text: '26! / 10! placas.' },
      { letter: 'E', text: '4.000.000 placas.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Pelo Princípio Fundamental da Contagem (PFC):\nSão 4 posições para letras (26 opções cada) e 3 posições para números (10 opções cada).\nTotal = 26 × 26 × 10 × 26 × 10 × 10 = 26⁴ × 10³ = 456.976.000 placas distintas.',
    explanations: {
      A: 'CORRETA. 4 posições para 26 letras (26⁴) e 3 posições para 10 números (10³). Total: 456.976.000.',
      B: 'INCORRETA. Inverteu a quantidade de letras e números.',
      C: 'INCORRETA. Soma das opções.',
      D: 'INCORRETA. Fórmula de permutação sem sentido no contexto.',
      E: 'INCORRETA. Valor incorreto.'
    }
  },
  {
    id: 'rlm-q09',
    subjectId: 'rlm',
    topic: 'Probabilidade Simples',
    difficulty: 'Médio',
    statement: 'Em um lote de 50 processos de recurso de infração arquivados no DETRAN, sabe-se que 10 processos contêm vícios formais insanáveis. Retirando-se ao acaso um processo desse lote, qual é a probabilidade de ele NÃO conter vício formal?',
    lawReference: 'Teoria da Probabilidade',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: '20%.' },
      { letter: 'B', text: '80%.' },
      { letter: 'C', text: '50%.' },
      { letter: 'D', text: '10%.' },
      { letter: 'E', text: '40%.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Total de processos = 50.\nProcessos sem vício = 50 - 10 = 40.\nProbabilidade P = 40 / 50 = 4 / 5 = 0,80 = 80%.',
    explanations: {
      A: 'INCORRETA. 20% (10/50) é a probabilidade de CONTER vício.',
      B: 'CORRETA. P = 40/50 = 80% de chances de tirar um processo sem vício.',
      C: 'INCORRETA. 50% é metade.',
      D: 'INCORRETA. Valor incorreto.',
      E: 'INCORRETA. Valor incorreto.'
    }
  },
  {
    id: 'rlm-q10',
    subjectId: 'rlm',
    topic: 'Teoria dos Conjuntos - Diagrama de Venn (3 Conjuntos)',
    difficulty: 'Difícil',
    statement: 'Em um grupo de 100 motoristas fiscalizados em uma operação de trânsito:\n- 40 apresentavam pneus carecas;\n- 50 estavam com o licenciamento atrasado;\n- 20 apresentavam ambas as irregularidades (pneus carecas E licenciamento atrasado).\nQuantos motoristas NÃO apresentavam NENHUMA dessas duas irregularidades?',
    lawReference: 'Teoria dos Conjuntos - União e Interseção',
    bancaTag: 'FCC / Vunesp',
    options: [
      { letter: 'A', text: '30 motoristas.' },
      { letter: 'B', text: '10 motoristas.' },
      { letter: 'C', text: '40 motoristas.' },
      { letter: 'D', text: '20 motoristas.' },
      { letter: 'E', text: '50 motoristas.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Usando o Princípio da Inclusão-Exclusão:\nN(A ∪ B) = N(A) + N(B) - N(A ∩ B)\nN(A ∪ B) = 40 + 50 - 20 = 70 motoristas irregulares.\nMotoristas sem nenhuma irregularidade = Total (100) - Irregulares (70) = 30 motoristas.',
    explanations: {
      A: 'CORRETA. 100 - (40 + 50 - 20) = 100 - 70 = 30 motoristas limpos.',
      B: 'INCORRETA. Cálculo sem subtrair a interseção.',
      C: 'INCORRETA. Valor errado.',
      D: 'INCORRETA. 20 é apenas a interseção.',
      E: 'INCORRETA. Valor errado.'
    }
  },
  {
    id: 'rlm-q11',
    subjectId: 'rlm',
    topic: 'Leis de De Morgan (Negação de Conjunção)',
    difficulty: 'Médio',
    statement: 'Qual é a negação lógica da proposição composta: "O veículo foi apreendido e o condutor foi multado"?',
    lawReference: 'Lógica Proposicional - Lei de De Morgan',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'O veículo não foi apreendido e o condutor não foi multado.' },
      { letter: 'B', text: 'O veículo não foi apreendido ou o condutor não foi multado.' },
      { letter: 'C', text: 'Se o veículo não foi apreendido, o condutor foi multado.' },
      { letter: 'D', text: 'O veículo foi apreendido ou o condutor foi multado.' },
      { letter: 'E', text: 'Se o condutor não foi multado, o veículo foi apreendido.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Lei de De Morgan para negação de conjunção ~(p ∧ q):\nNega-se a primeira (~p), Nega-se a segunda (~q) e Troca-se o "E" pelo "OU".\n~(p ∧ q) ≡ ~p ∨ ~q.\nLogo: "O veículo NÃO foi apreendido OU o condutor NÃO foi multado".',
    explanations: {
      A: 'INCORRETA. Manteve o conectivo "e" (erro clássico).',
      B: 'CORRETA. Negação perfeita pela 1ª Lei de De Morgan: ~p ∨ ~q.',
      C: 'INCORRETA. Transformou em condicional.',
      D: 'INCORRETA. Manteve as afirmativas trocando apenas por "ou".',
      E: 'INCORRETA. Transformou em condicional.'
    }
  },
  {
    id: 'rlm-q12',
    subjectId: 'rlm',
    topic: 'Tabela-Verdade da Disjunção Exclusiva (Ou... ou)',
    difficulty: 'Fácil',
    statement: 'A proposição composta por uma Disjunção Exclusiva ("Ou p ou q") é VERDADEIRA quando:',
    lawReference: 'Lógica Proposicional - Conectivo "Ou... ou"',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: 'Ambas as proposições p e q forem verdadeiras simultaneamente.' },
      { letter: 'B', text: 'Ambas as proposições p e q forem falsas simultaneamente.' },
      { letter: 'C', text: 'Apenas uma das proposições p ou q for verdadeira e a outra for falsa.' },
      { letter: 'D', text: 'Sempre, independentemente do valor lógico das proposições.' },
      { letter: 'E', text: 'Nunca.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'A Disjunção Exclusiva (p ⊕ q) exige que EXATAMENTE UMA das proposições seja verdadeira. Se ambas forem verdadeiras ou ambas forem falsas, a disjunção exclusiva é FALSA.',
    explanations: {
      A: 'INCORRETA. Se ambas forem V, a disjunção exclusiva é Falsa.',
      B: 'INCORRETA. Se ambas forem F, a disjunção exclusiva é Falsa.',
      C: 'CORRETA. V ⊕ F = V; F ⊕ V = V.',
      D: 'INCORRETA. Tautologia não se aplica aqui.',
      E: 'INCORRETA. Não é uma contradição.'
    }
  },
  {
    id: 'rlm-q13',
    subjectId: 'rlm',
    topic: 'Média Aritmética Ponderada',
    difficulty: 'Médio',
    statement: 'A nota final de um candidato no concurso do DETRAN-SP é calculada por média ponderada com pesos 3 para CTB, 2 para Direito e 1 para Português. Se o candidato tirou 8 em CTB, 6 em Direito e 9 em Português, sua nota média final foi de:',
    lawReference: 'Matemática - Estatística Descritiva',
    bancaTag: 'Vunesp / Avalia 2026',
    options: [
      { letter: 'A', text: '7,5.' },
      { letter: 'B', text: '7,7.' },
      { letter: 'C', text: '8,0.' },
      { letter: 'D', text: '7,2.' },
      { letter: 'E', text: '6,8.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Média Ponderada = (Nota1×Peso1 + Nota2×Peso2 + Nota3×Peso3) / (Soma dos Pesos)\nMp = (8×3 + 6×2 + 9×1) / (3 + 2 + 1)\nMp = (24 + 12 + 9) / 6 = 45 / 6 = 7,5.',
    explanations: {
      A: 'CORRETA. Mp = 45 / 6 = 7,5.',
      B: 'INCORRETA. Cálculo incorreto.',
      C: 'INCORRETA. 8,0 é a nota em CTB.',
      D: 'INCORRETA. Cálculo incorreto.',
      E: 'INCORRETA. Cálculo incorreto.'
    }
  },
  {
    id: 'rlm-q14',
    subjectId: 'rlm',
    topic: 'Juros Simples',
    difficulty: 'Fácil',
    statement: 'Uma multa de trânsito no valor de R$ 1.000,00 foi paga com atraso de 5 meses. Sabendo que a taxa de juros simples de mora cobrada é de 2% ao mês, qual foi o valor TOTAL pago (Capital + Juros)?',
    lawReference: 'Matemática Financeira - Juros Simples',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'R$ 1.100,00.' },
      { letter: 'B', text: 'R$ 1.050,00.' },
      { letter: 'C', text: 'R$ 1.200,00.' },
      { letter: 'D', text: 'R$ 1.104,08.' },
      { letter: 'E', text: 'R$ 1.010,00.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Fórmula dos Juros Simples: J = C × i × t\nJ = 1.000 × 0,02 × 5 = R$ 100,00 de juros.\nMontante Total (M) = Capital (1.000) + Juros (100) = R$ 1.100,00.',
    explanations: {
      A: 'CORRETA. J = 1.000 × 0,02 × 5 = 100. Montante = 1.000 + 100 = R$ 1.100,00.',
      B: 'INCORRETA. Cálculo para 2,5 meses.',
      C: 'INCORRETA. Cálculo para 10 meses.',
      D: 'INCORRETA. Este seria o cálculo com juros compostos.',
      E: 'INCORRETA. Cálculo para 0,5 mês.'
    }
  },
  {
    id: 'rlm-q15',
    subjectId: 'rlm',
    topic: 'Permutação com Repetição (Anagramas)',
    difficulty: 'Médio',
    statement: 'Quantos anagramas diferentes podem ser formados com as letras da palavra "DETRAN"?',
    lawReference: 'Análise Combinatória - Permutação Simples',
    bancaTag: 'FCC / Vunesp',
    options: [
      { letter: 'A', text: '720 anagramas.' },
      { letter: 'B', text: '120 anagramas.' },
      { letter: 'C', text: '360 anagramas.' },
      { letter: 'D', text: '24 anagramas.' },
      { letter: 'E', text: '6 Anagramas.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A palavra "DETRAN" possui 6 letras distintas (D, E, T, R, A, N).\nComo todas as letras são distintas, o número de anagramas é a Permutação Simples P(6):\nP(6) = 6! = 6 × 5 × 4 × 3 × 2 × 1 = 720 anagramas.',
    explanations: {
      A: 'CORRETA. P(6) = 6! = 720 anagramas.',
      B: 'INCORRETA. 120 = 5! (para palavra de 5 letras).',
      C: 'INCORRETA. 360 se houvesse 1 letra repetida 2 vezes.',
      D: 'INCORRETA. 24 = 4!.',
      E: 'INCORRETA. Apenas a contagem de letras.'
    }
  },
  {
    id: 'rlm-q16',
    subjectId: 'rlm',
    topic: 'Negação de Quantificador Universal ("Todo")',
    difficulty: 'Fácil',
    statement: 'Qual é a negação lógica da proposição: "Todo condutor em São Paulo respeita a faixa de pedestres"?',
    lawReference: 'Lógica dos Quantificadores',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: 'Nenhum condutor em São Paulo respeita a faixa de pedestres.' },
      { letter: 'B', text: 'Pelo menos um condutor em São Paulo não respeita a faixa de pedestres.' },
      { letter: 'C', text: 'Todos os condutores em São Paulo não respeitam a faixa.' },
      { letter: 'D', text: 'Se o condutor é de São Paulo, ele respeita a faixa.' },
      { letter: 'E', text: 'Algum condutor em São Paulo respeita a faixa.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Para negar o quantificador universal "TODO" (Todo A é B), utiliza-se o macete "PEA + Não" (Pelo menos um / Existe / Algum A NÃO é B).\nNegação de "Todo A é B" ≡ "Existe algum A que NÃO é B".\nLogo: "Pelo menos um condutor em São Paulo NÃO respeita a faixa".',
    explanations: {
      A: 'INCORRETA. "Nenhum" é o contrário, não a negação lógica mínima (erro muito comum!).',
      B: 'CORRETA. Negação exata de "Todo" -> "Pelo menos um... não...".',
      C: 'INCORRETA. Não nega o quantificador universal de forma mínima.',
      D: 'INCORRETA. Reformulação condicional.',
      E: 'INCORRETA. Não introduziu a negação da propriedade.'
    }
  },
  {
    id: 'rlm-q17',
    subjectId: 'rlm',
    topic: 'Argumentação Lógica - Modus Ponens',
    difficulty: 'Médio',
    statement: 'Considere as duas premissas a seguir:\nPremissa 1: "Se o condutor ingerir bebida alcoólica, então sua capacidade psicomotora fica alterada."\nPremissa 2: "O condutor Pedro ingeriu bebida alcoólica."\nConclui-se logicamente que:',
    lawReference: 'Lógica de Argumentação - Modus Ponens',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'A capacidade psicomotora de Pedro ficou alterada.' },
      { letter: 'B', text: 'Pedro não cometeu infração de trânsito.' },
      { letter: 'C', text: 'Pedro recusou o teste do etilômetro.' },
      { letter: 'D', text: 'Pedro não ingeriu bebida alcoólica.' },
      { letter: 'E', text: 'Nenhuma conclusão é possível.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Regra clássica do MODUS PONENS:\nSe p → q é Verdadeiro e o antecedente p é Afirmado como Verdadeiro, conclui-se obrigatoriamente a verdade do consequente q.\n- p: Pedro ingeriu bebida alcoólica (V);\n- q: A capacidade psicomotora de Pedro ficou alterada (V).',
    explanations: {
      A: 'CORRETA. Aplicação perfeita da regra de dedução válida Modus Ponens.',
      B: 'INCORRETA. Contradiz o enunciado.',
      C: 'INCORRETA. Fato não informado nas premissas.',
      D: 'INCORRETA. Contradiz a Premissa 2.',
      E: 'INCORRETA. A conclusão é válida e necessária.'
    }
  },
  {
    id: 'rlm-q18',
    subjectId: 'rlm',
    topic: 'Raciocínio Sequencial Numérico',
    difficulty: 'Fácil',
    statement: 'Observe a sequência numérica de multas aplicadas em um posto a cada hora: 3, 7, 15, 31, 63, X. Seguindo o padrão de formação da sequência, o valor do próximo termo X é:',
    lawReference: 'Raciocínio Lógico Sequencial',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: '127.' },
      { letter: 'B', text: '126.' },
      { letter: 'C', text: '95.' },
      { letter: 'D', text: '120.' },
      { letter: 'E', text: '128.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Padrão da sequência: cada termo é o dobro do anterior mais 1:\n- 3 × 2 + 1 = 7\n- 7 × 2 + 1 = 15\n- 15 × 2 + 1 = 31\n- 31 × 2 + 1 = 63\n- 63 × 2 + 1 = 126 + 1 = 127.',
    explanations: {
      A: 'CORRETA. Padrão (An × 2 + 1) -> 63 × 2 + 1 = 127.',
      B: 'INCORRETA. Faltou somar 1 ao final.',
      C: 'INCORRETA. Soma de 32 incorreta.',
      D: 'INCORRETA. Valor sem nexo com a lei de formação.',
      E: 'INCORRETA. Cálculo incorreto.'
    }
  },
  {
    id: 'rlm-q19',
    subjectId: 'rlm',
    topic: 'Probabilidade de Eventos Independentes',
    difficulty: 'Médio',
    statement: 'Dois candidatos prestam a prova prática de direção no DETRAN. A probabilidade de o candidato A passar é de 70% (0,7) e a probabilidade de o candidato B passar é de 80% (0,8). Sabendo que os desempenhos são independentes, qual é a probabilidade de AMBOS passarem na prova?',
    lawReference: 'Teoria da Probabilidade - Regra do "E"',
    bancaTag: 'Vunesp / Avalia 2026',
    options: [
      { letter: 'A', text: '56%.' },
      { letter: 'B', text: '75%.' },
      { letter: 'C', text: '90%.' },
      { letter: 'D', text: '50%.' },
      { letter: 'E', text: '15%.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Para dois eventos independentes ocorrerem simultaneamente (A E B), multiplicam-se suas probabilidades individuais:\nP(A ∩ B) = P(A) × P(B) = 0,70 × 0,80 = 0,56 = 56%.',
    explanations: {
      A: 'CORRETA. Multiplicação de eventos independentes: 0,7 × 0,8 = 0,56 (56%).',
      B: 'INCORRETA. Média aritmética (70+80)/2 = 75%.',
      C: 'INCORRETA. Soma das probabilidades.',
      D: 'INCORRETA. Cálculo sem nexo.',
      E: 'INCORRETA. Subtração de probabilidades.'
    }
  },
  {
    id: 'rlm-q20',
    subjectId: 'rlm',
    topic: 'Sistemas de Equações do 1º Grau',
    difficulty: 'Médio',
    statement: 'Em um pátio do DETRAN há um total de 30 veículos apreendidos entre carros de passeio (4 rodas) e motocicletas (2 rodas). Contando os pneus de todos esses veículos, totalizam-se 84 rodas. Quantas motocicletas estão apreendidas nesse pátio?',
    lawReference: 'Álgebra - Sistemas de Equações',
    bancaTag: 'FCC / Vunesp',
    options: [
      { letter: 'A', text: '18 motocicletas.' },
      { letter: 'B', text: '12 motocicletas.' },
      { letter: 'C', text: '15 motocicletas.' },
      { letter: 'D', text: '20 motocicletas.' },
      { letter: 'E', text: '10 motocicletas.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Seja c = número de carros e m = número de motos.\n1) c + m = 30  =>  c = 30 - m\n2) 4c + 2m = 84\nSubstituindo (1) em (2):\n4(30 - m) + 2m = 84\n120 - 4m + 2m = 84\n120 - 2m = 84\n2m = 36  =>  m = 18 motocicletas (e 12 carros).',
    explanations: {
      A: 'CORRETA. Sistema resolvido: m = 18 motos e c = 12 carros. (Verificação: 12×4 + 18×2 = 48 + 36 = 84 rodas).',
      B: 'INCORRETA. 12 é o número de carros.',
      C: 'INCORRETA. Metade exata.',
      D: 'INCORRETA. Cálculo incorreto.',
      E: 'INCORRETA. Cálculo incorreto.'
    }
  },
  {
    id: 'rlm-q21',
    subjectId: 'rlm',
    topic: 'Tautologia, Contradição e Contingência',
    difficulty: 'Difícil',
    statement: 'Uma proposição composta cuja tabela-verdade resulta em valor lógico VERDADEIRO para todas as combinações possíveis das proposições simples que a compõem é denominada:',
    lawReference: 'Lógica Proposicional - Tautologia',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: 'Contradição.' },
      { letter: 'B', text: 'Contingência.' },
      { letter: 'C', text: 'Tautologia.' },
      { letter: 'D', text: 'Silogismo categórico.' },
      { letter: 'E', text: 'Premissa falaciosa.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'Definições da lógica formal:\n- TAUTOLOGIA: proposição sempre VERDADEIRA em todas as linhas da tabela-verdade (ex: p ∨ ~p).\n- CONTRADIÇÃO: proposição sempre FALSA em todas as linhas da tabela-verdade (ex: p ∧ ~p).\n- CONTINGÊNCIA: proposição que pode ser verdadeira ou falsa a depender dos valores das componentes.',
    explanations: {
      A: 'INCORRETA. Contradição é sempre falsa.',
      B: 'INCORRETA. Contingência alterna V e F.',
      C: 'CORRETA. Definição clássica de Tautologia.',
      D: 'INCORRETA. É uma estrutura de argumento, não uma tabela-verdade.',
      E: 'INCORRETA. Conceito de falácia.'
    }
  },
  {
    id: 'rlm-q22',
    subjectId: 'rlm',
    topic: 'Negação de Quantificador Existencial ("Algum")',
    difficulty: 'Médio',
    statement: 'Qual é a negação lógica da proposição: "Algum agente do DETRAN é corrupto"?',
    lawReference: 'Lógica dos Quantificadores',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Nenhum agente do DETRAN é corrupto.' },
      { letter: 'B', text: 'Todo agente do DETRAN é corrupto.' },
      { letter: 'C', text: 'Pelo menos um agente do DETRAN é corrupto.' },
      { letter: 'D', text: 'Algum agente do DETRAN não é corrupto.' },
      { letter: 'E', text: 'Todos os agentes do DETRAN são honestos e educados.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A negação lógica do quantificador existencial "ALGUM A É B" (ou "Existe A que é B") é a proposição com quantificador universal negativo: "NENHUM A É B".\nLogo: "Nenhum agente do DETRAN é corrupto".',
    explanations: {
      A: 'CORRETA. Negação exata de "Algum A é B" ≡ "Nenhum A é B".',
      B: 'INCORRETA. "Todo" afirmaria o universal sem negar a existência.',
      C: 'INCORRETA. É sinônimo de "algum".',
      D: 'INCORRETA. Não nega de forma abrangente.',
      E: 'INCORRETA. Adicionou termos extravagantes.'
    }
  },
  {
    id: 'rlm-q23',
    subjectId: 'rlm',
    topic: 'Aumentos Porcentuais Sucessivos',
    difficulty: 'Fácil',
    statement: 'A taxa de um serviço de vistoria veicular sofreu um reajuste de 10% em 2025 e outro reajuste de 20% em 2026. O aumento porcentual acumulado nesses dois anos foi de:',
    lawReference: 'Matemática Financeira - Aumentos Sucessivos',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: '30%.' },
      { letter: 'B', text: '32%.' },
      { letter: 'C', text: '20%.' },
      { letter: 'D', text: '25%.' },
      { letter: 'E', text: '35%.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Fator de aumento acumulado:\n(1 + 0,10) × (1 + 0,20) = 1,10 × 1,20 = 1,32.\n1,32 corresponde a um aumento acumulado total de 32% (e não 30%).',
    explanations: {
      A: 'INCORRETA. 10% + 20% = 30% é a soma simples equivocada.',
      B: 'CORRETA. Fator acumulado: 1,10 × 1,20 = 1,32 -> 32% de aumento real.',
      C: 'INCORRETA. Valor incorreto.',
      D: 'INCORRETA. Valor incorreto.',
      E: 'INCORRETA. Valor incorreto.'
    }
  },
  {
    id: 'rlm-q24',
    subjectId: 'rlm',
    topic: 'Regra de Três Simples Inversa',
    difficulty: 'Fácil',
    statement: 'Viajando a uma velocidade constante de 60 km/h, um motorista cumpre o trajeto entre duas cidades em 4 horas. Se ele realizar o mesmo percurso a uma velocidade constante de 80 km/h, quanto tempo levará?',
    lawReference: 'Matemática - Grandezas Inversamente Proporcionais',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: '3 horas.' },
      { letter: 'B', text: '5 horas.' },
      { letter: 'C', text: '2,5 horas.' },
      { letter: 'D', text: '3,5 horas.' },
      { letter: 'E', text: '4,5 horas.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Velocidade e Tempo são grandezas INVERSEMENTE PROPORCIONAIS (aumentando a velocidade, o tempo diminui):\nDistância = Velocidade × Tempo = 60 × 4 = 240 km.\nNovo tempo = Distância / Nova Velocidade = 240 / 80 = 3 horas.',
    explanations: {
      A: 'CORRETA. Tempo = (60 × 4) / 80 = 240 / 80 = 3 horas.',
      B: 'INCORRETA. O tempo deve diminuir ao aumentar a velocidade.',
      C: 'INCORRETA. Cálculo incorreto.',
      D: 'INCORRETA. Cálculo incorreto.',
      E: 'INCORRETA. Cálculo incorreto.'
    }
  },
  {
    id: 'rlm-q25',
    subjectId: 'rlm',
    topic: 'Princípio da Casa dos Pombos (Pazienzia)',
    difficulty: 'Difícil',
    statement: 'Em um lote de CNHs arquivadas, sabe-se que os motoristas nasceram em algum dia do mês de janeiro (31 dias). Quantas CNHs devem ser retiradas ao acaso desse lote, no mínimo, para ter a CERTEZA de que pelo menos duas pessoas nasceram no mesmo dia de janeiro?',
    lawReference: 'Princípio das Gavetas de Dirichlet',
    bancaTag: 'FCC / Vunesp',
    options: [
      { letter: 'A', text: '32 CNHs.' },
      { letter: 'B', text: '31 CNHs.' },
      { letter: 'C', text: '62 CNHs.' },
      { letter: 'D', text: '16 CNHs.' },
      { letter: 'E', text: '2 CNHs.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Pelo Princípio da Casa dos Pombos (Gavetas de Dirichlet):\nExistem 31 dias possíveis em janeiro (31 gavetas).\nNo pior cenário possível, as primeiras 31 pessoas retiradas nasceram em dias todos diferentes.\nA 32ª pessoa retirada terá obrigatoriamente que ter nascido em um dia já sorteado. Logo, são necessárias 32 CNHs para garantir a repetição.',
    explanations: {
      A: 'CORRETA. 31 dias + 1 = 32 retiradas para garantia absoluta.',
      B: 'INCORRETA. Com 31 pessoas, no pior caso todas nasceram em dias diferentes.',
      C: 'INCORRETA. Excesso desnecessário.',
      D: 'INCORRETA. Metade não garante nada.',
      E: 'INCORRETA. Duas pessoas podem ter nascido em dias diferentes.'
    }
  },
  {
    id: 'rlm-q26',
    subjectId: 'rlm',
    topic: 'Condicional e Tabela-Verdade (Falso -> Falso)',
    difficulty: 'Médio',
    statement: 'Na tabela-verdade do conectivo condicional (p → q), a proposição é FALSA em qual única combinação de valores lógicos?',
    lawReference: 'Lógica Proposicional - Tabela-Verdade da Condicional',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: 'Quando p é Verdadeiro e q é Falso (V → F = F).' },
      { letter: 'B', text: 'Quando p é Falso e q é Verdadeiro (F → V = F).' },
      { letter: 'C', text: 'Quando p é Falso e q é Falso (F → F = F).' },
      { letter: 'D', text: 'Quando p é Verdadeiro e q é Verdadeiro (V → V = F).' },
      { letter: 'E', text: 'Em nenhuma combinação.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A condicional p → q só é FALSA quando o antecedente p é VERDADEIRO e o consequente q é FALSO (caso Vera Fischer!). Nas demais três combinações (V→V, F→V, F→F), a condicional é sempre VERDADEIRA.',
    explanations: {
      A: 'CORRETA. Único caso de falsidade da condicional: V → F = F.',
      B: 'INCORRETA. F → V = V.',
      C: 'INCORRETA. F → F = V.',
      D: 'INCORRETA. V → V = V.',
      E: 'INCORRETA. É falsa quando V → F.'
    }
  },
  {
    id: 'rlm-q27',
    subjectId: 'rlm',
    topic: 'Geometria Básica - Perímetro e Área de Terreno',
    difficulty: 'Fácil',
    statement: 'Um pátio retangular destinado ao recolhimento de veículos pelo DETRAN possui 50 metros de comprimento por 30 metros de largura. A área total desse pátio é de:',
    lawReference: 'Geometria Plana - Área do Retângulo',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: '1.500 m².' },
      { letter: 'B', text: '160 m².' },
      { letter: 'C', text: '80 m².' },
      { letter: 'D', text: '3.000 m².' },
      { letter: 'E', text: '750 m².' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Área do retângulo = Comprimento × Largura = 50 m × 30 m = 1.500 m².\n(Nota: 160 m seria o perímetro: 2×50 + 2×30).',
    explanations: {
      A: 'CORRETA. Área = 50 × 30 = 1.500 m².',
      B: 'INCORRETA. 160 m é o perímetro do terreno, não a área.',
      C: 'INCORRETA. Soma dos dois lados.',
      D: 'INCORRETA. Dobro da área.',
      E: 'INCORRETA. Metade da área.'
    }
  },
  {
    id: 'rlm-q28',
    subjectId: 'rlm',
    topic: 'Equivalência da Disjunção para Condicional',
    difficulty: 'Difícil',
    statement: 'A proposição disjuntiva "Ou o candidato estuda ou ele não passa no concurso" é equivalente à condicional:',
    lawReference: 'Lógica Proposicional - Equivalências',
    bancaTag: 'FCC / Vunesp',
    options: [
      { letter: 'A', text: 'Se o candidato não estuda, então ele não passa no concurso.' },
      { letter: 'B', text: 'Se o candidato estuda, então ele não passa no concurso.' },
      { letter: 'C', text: 'Se o candidato passa no concurso, então ele não estudou.' },
      { letter: 'D', text: 'O candidato estuda e passa no concurso.' },
      { letter: 'E', text: 'Se o candidato não passa no concurso, então ele estuda.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Equivalência entre disjunção e condicional: (p ∨ q) ≡ (~p → q).\nDada a disjunção "~Estuda (p) ∨ ~Passa (q)":\nNegando o primeiro termo (Estuda) e mantendo o segundo (Não passa):\n"Se o candidato NÃO estuda, então ele NÃO passa no concurso".',
    explanations: {
      A: 'CORRETA. Equivalência perfeita (~p → q).',
      B: 'INCORRETA. Não negou o primeiro termo ao converter em condicional.',
      C: 'INCORRETA. Inversão incorreta.',
      D: 'INCORRETA. Conjunção simples.',
      E: 'INCORRETA. Inversão sem equivalência.'
    }
  },
  {
    id: 'rlm-q29',
    subjectId: 'rlm',
    topic: 'Análise Combinatória - Fatorial e Arranjo',
    difficulty: 'Médio',
    statement: 'Qual é o valor numérico da expressão com fatoriais (6! - 4!) / 5!? ',
    lawReference: 'Matemática - Operações com Fatoriais',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: '5,8.' },
      { letter: 'B', text: '2.' },
      { letter: 'C', text: '5,5.' },
      { letter: 'D', text: '6.' },
      { letter: 'E', text: '4.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Calculando os fatoriais:\n6! = 720\n5! = 120\n4! = 24\nSubstituindo: (720 - 24) / 120 = 696 / 120 = 5,8.',
    explanations: {
      A: 'CORRETA. (720 - 24) / 120 = 696 / 120 = 5,8.',
      B: 'INCORRETA. Simplificação direta ilegal dos fatoriais (6-4=2).',
      C: 'INCORRETA. Cálculo incorreto.',
      D: 'INCORRETA. Valor sem considerar o 4!.',
      E: 'INCORRETA. Cálculo incorreto.'
    }
  },
  {
    id: 'rlm-q30',
    subjectId: 'rlm',
    topic: 'Probabilidade com Dados / Moedas',
    difficulty: 'Fácil',
    statement: 'Ao lançar um dado honesto de 6 faces numeradas de 1 a 6, qual é a probabilidade de obter um número PAR ou um número maior que 4?',
    lawReference: 'Teoria da Probabilidade - União de Eventos',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: '4 / 6 (aproximadamente 66,7%).' },
      { letter: 'B', text: '5 / 6 (aproximadamente 83,3%).' },
      { letter: 'C', text: '3 / 6 (50%).' },
      { letter: 'D', text: '2 / 6 (33,3%).' },
      { letter: 'E', text: '1 / 6 (16,7%).' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Espaço amostral = {1, 2, 3, 4, 5, 6} (6 elementos).\nEvento A (números pares) = {2, 4, 6}.\nEvento B (maiores que 4) = {5, 6}.\nUnião (A ∪ B) = {2, 4, 5, 6} (4 elementos favoráveis).\nProbabilidade = 4 / 6 = 2 / 3 ≈ 66,7%.',
    explanations: {
      A: 'CORRETA. Elementos favoráveis: 2, 4, 5, 6 -> 4 em 6 (4/6).',
      B: 'INCORRETA. Contou o número 6 duas vezes.',
      C: 'INCORRETA. Apenas pares.',
      D: 'INCORRETA. Apenas maiores que 4.',
      E: 'INCORRETA. Apenas o 6.'
    }
  },
  {
    id: 'rlm-q31',
    subjectId: 'rlm',
    topic: 'Problema de Torneiras / Raciocínio de Razão e Tempo',
    difficulty: 'Difícil',
    statement: 'Dois computadores do DETRAN processam dados de recursos. O computador A processa um lote em 3 horas e o computador B processa o mesmo lote em 6 horas. Trabalhando juntos simultaneamente, em quanto tempo os dois computadores processarão esse lote?',
    lawReference: 'Matemática - Trabalho Conjunto',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: '2 horas.' },
      { letter: 'B', text: '4,5 horas.' },
      { letter: 'C', text: '1,5 hora.' },
      { letter: 'D', text: '9 horas.' },
      { letter: 'E', text: '3,5 horas.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Taxa de trabalho conjunto por hora:\nEm 1 hora, o computador A faz 1/3 do trabalho e o B faz 1/6.\nJuntos em 1 hora: 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2 do trabalho.\nSe em 1 hora fazem metade (1/2), o tempo total necessário para concluir o lote inteiro é de 2 horas.',
    explanations: {
      A: 'CORRETA. T = (3 × 6) / (3 + 6) = 18 / 9 = 2 horas.',
      B: 'INCORRETA. Média simples (3+6)/2 = 4,5h é incorreta.',
      C: 'INCORRETA. Cálculo incorreto.',
      D: 'INCORRETA. Soma dos tempos.',
      E: 'INCORRETA. Cálculo incorreto.'
    }
  },
  {
    id: 'rlm-q32',
    subjectId: 'rlm',
    topic: 'Lógica dos Conectivos - Tabela-Verdade da Bicondicional',
    difficulty: 'Fácil',
    statement: 'A proposição Bicondicional ("p se e somente se q") é VERDADEIRA nas seguintes situações:',
    lawReference: 'Lógica Proposicional - Conectivo "<->"',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Quando p e q tiverem o mesmo valor lógico (ambas Verdadeiras ou ambas Falsas).' },
      { letter: 'B', text: 'Apenas quando p for Verdadeiro e q for Falso.' },
      { letter: 'C', text: 'Apenas quando ambas forem Falsas.' },
      { letter: 'D', text: 'Quando p for Falso, independentemente de q.' },
      { letter: 'E', text: 'Nunca.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A Bicondicional (p ↔ q) assume valor lógico VERDADEIRO quando ambas as proposições componentes possuem O MESMO VALOR LÓGICO (V ↔ V = V; F ↔ F = V). Se tiverem valores lógicos opostos, a bicondicional é Falsa.',
    explanations: {
      A: 'CORRETA. V ↔ V = V e F ↔ F = V.',
      B: 'INCORRETA. V ↔ F = F.',
      C: 'INCORRETA. V ↔ V também é verdadeiro.',
      D: 'INCORRETA. F ↔ V = F.',
      E: 'INCORRETA. É verdadeira sob condições específicas.'
    }
  },
  {
    id: 'rlm-q33',
    subjectId: 'rlm',
    topic: 'Divisibilidade e Resto de Divisão',
    difficulty: 'Médio',
    statement: 'Um agente organizou 543 fichas de infração em pastas contendo exatamente 12 fichas cada uma. Quantas fichas RESTARAM fora das pastas completas?',
    lawReference: 'Aritmética - Divisão Euclidiana',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: '3 fichas.' },
      { letter: 'B', text: '5 fichas.' },
      { letter: 'C', text: '7 fichas.' },
      { letter: 'D', text: '1 ficha.' },
      { letter: 'E', text: '9 fichas.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Divisão de 543 por 12:\n543 = 12 × 45 + 3.\nCompletam-se 45 pastas inteiras e sobram (resto) exatamente 3 fichas.',
    explanations: {
      A: 'CORRETA. Resto da divisão de 543 por 12 é 3.',
      B: 'INCORRETA. Resto errado.',
      C: 'INCORRETA. Resto errado.',
      D: 'INCORRETA. Resto errado.',
      E: 'INCORRETA. Resto errado.'
    }
  },
  {
    id: 'rlm-q34',
    subjectId: 'rlm',
    topic: 'Negação de "Nenhum"',
    difficulty: 'Fácil',
    statement: 'Qual é a negação lógica da proposição: "Nenhum motorista nesta cidade respeita o limite de velocidade"?',
    lawReference: 'Lógica dos Quantificadores',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: 'Pelo menos um motorista nesta cidade respeita o limite de velocidade.' },
      { letter: 'B', text: 'Todos os motoristas nesta cidade não respeitam o limite de velocidade.' },
      { letter: 'C', text: 'Nenhum motorista desacelera.' },
      { letter: 'D', text: 'Todos os motoristas são multados diariamente.' },
      { letter: 'E', text: 'Algum motorista não respeita a velocidade.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A negação lógica de "Nenhum A é B" é a afirmação da existência de pelo menos uma exceção: "Pelo menos um A é B" (ou "Existe algum A que é B").',
    explanations: {
      A: 'CORRETA. Negação perfeita do quantificador universal negativo.',
      B: 'INCORRETA. É sinônimo de "Nenhum".',
      C: 'INCORRETA. Mudança de verbo sem nexo.',
      D: 'INCORRETA. Adição de termos irrelevantes.',
      E: 'INCORRETA. Não negou a afirmativa.'
    }
  },
  {
    id: 'rlm-q35',
    subjectId: 'rlm',
    topic: 'Combinatória - Permutação Circular',
    difficulty: 'Difícil',
    statement: 'De quantas maneiras diferentes 5 diretores do DETRAN podem se sentar ao redor de uma mesa de reunião circular?',
    lawReference: 'Análise Combinatória - Permutação Circular',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: '24 maneiras.' },
      { letter: 'B', text: '120 maneiras.' },
      { letter: 'C', text: '60 maneiras.' },
      { letter: 'D', text: '25 maneiras.' },
      { letter: 'E', text: '10 maneiras.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A Permutação Circular de n elementos é dada por PC(n) = (n - 1)!.\nPara n = 5:\nPC(5) = (5 - 1)! = 4! = 4 × 3 × 2 × 1 = 24 maneiras.',
    explanations: {
      A: 'CORRETA. PC(5) = (5 - 1)! = 4! = 24 maneiras.',
      B: 'INCORRETA. 120 = 5! seria para fila reta, sem circularidade.',
      C: 'INCORRETA. Cálculo incorreto.',
      D: 'INCORRETA. 5².',
      E: 'INCORRETA. 5 × 2.'
    }
  },
  {
    id: 'rlm-q36',
    subjectId: 'rlm',
    topic: 'Porcentagem de Aumento em Preço',
    difficulty: 'Fácil',
    statement: 'O valor de uma taxa administrativa passou de R$ 80,00 para R$ 100,00. Qual foi o percentual de aumento aplicado nessa taxa?',
    lawReference: 'Matemática - Porcentagem Relativa',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: '25%.' },
      { letter: 'B', text: '20%.' },
      { letter: 'C', text: '15%.' },
      { letter: 'D', text: '30%.' },
      { letter: 'E', text: '80%.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Aumento absoluto = 100 - 80 = R$ 20,00.\nPercentual de aumento = Aumento Absoluto / Valor Inicial = 20 / 80 = 1 / 4 = 0,25 = 25%.',
    explanations: {
      A: 'CORRETA. (100 - 80) / 80 = 20 / 80 = 25%.',
      B: 'INCORRETA. 20/100 seria 20% se a base fosse o valor final (pega de ratão!).',
      C: 'INCORRETA. Valor incorreto.',
      D: 'INCORRETA. Valor incorreto.',
      E: 'INCORRETA. Valor incorreto.'
    }
  },
  {
    id: 'rlm-q37',
    subjectId: 'rlm',
    topic: 'Silogismo Categórico',
    difficulty: 'Médio',
    statement: 'Considere as premissas:\n- Todo Agente de Trânsito é Servidor Público.\n- Nenhum Servidor Público é Corrupto.\nConclui-se logicamente que:',
    lawReference: 'Lógica de Argumentação - Silogismo Categórico',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: 'Nenhum Agente de Trânsito é Corrupto.' },
      { letter: 'B', text: 'Todo Corrupto é Agente de Trânsito.' },
      { letter: 'C', text: 'Algum Agente de Trânsito é Corrupto.' },
      { letter: 'D', text: 'Todo Servidor Público é Agente de Trânsito.' },
      { letter: 'E', text: 'Nenhuma conclusão é válida.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Estrutura dos conjuntos:\nConjunto dos Agentes (A) está contido no Conjunto dos Servidores (S).\nConjunto dos Corruptos (C) é disjunto do Conjunto dos Servidores (S).\nComo A ⊂ S e S ∩ C = ∅, conclui-se obrigatoriamente que A ∩ C = ∅ ("Nenhum Agente de Trânsito é Corrupto").',
    explanations: {
      A: 'CORRETA. Dedução necessária e válida pelo diagrama de conjuntos.',
      B: 'INCORRETA. Contradiz as premissas.',
      C: 'INCORRETA. Contradiz as premissas.',
      D: 'INCORRETA. Erro de conversão universal.',
      E: 'INCORRETA. O argumento é válido.'
    }
  },
  {
    id: 'rlm-q38',
    subjectId: 'rlm',
    topic: 'Diagramas de Venn com 3 Conjuntos',
    difficulty: 'Difícil',
    statement: 'Uma pesquisa com 200 condutores revelou que 100 possuem CNH Categoria A, 120 possuem CNH Categoria B e 40 possuem ambas as categorias (A e B). Quantos condutores NÃO possuem nem a Categoria A nem a Categoria B?',
    lawReference: 'Teoria dos Conjuntos',
    bancaTag: 'Vunesp / Avalia 2026',
    options: [
      { letter: 'A', text: '20 condutores.' },
      { letter: 'B', text: '40 condutores.' },
      { letter: 'C', text: '60 condutores.' },
      { letter: 'D', text: '10 condutores.' },
      { letter: 'E', text: '80 condutores.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'União N(A ∪ B) = N(A) + N(B) - N(A ∩ B)\nN(A ∪ B) = 100 + 120 - 40 = 180 condutores habilitados em A ou B.\nCondutores sem A e sem B = Total (200) - Habilitados (180) = 20 condutores.',
    explanations: {
      A: 'CORRETA. 200 - (100 + 120 - 40) = 200 - 180 = 20 condutores.',
      B: 'INCORRETA. Cálculo incorreto.',
      C: 'INCORRETA. Cálculo incorreto.',
      D: 'INCORRETA. Cálculo incorreto.',
      E: 'INCORRETA. Cálculo incorreto.'
    }
  },
  {
    id: 'rlm-q39',
    subjectId: 'rlm',
    topic: 'Operadores Lógicos - Condicional e Bicondicional',
    difficulty: 'Médio',
    statement: 'Dadas as proposições p = V e q = F, qual das expressões lógicas a seguir resulta em valor VERDADEIRO?',
    lawReference: 'Lógica Proposicional - Valoração',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: '~p ∨ ~q' },
      { letter: 'B', text: 'p ∧ q' },
      { letter: 'C', text: 'p → q' },
      { letter: 'D', text: 'p ↔ q' },
      { letter: 'E', text: 'p ⊕ ~q' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Se p = V e q = F:\n- ~p = F e ~q = V.\n- Opção A: ~p ∨ ~q = F ∨ V = VERDADEIRO (CORRETO).\n- Opção B: p ∧ q = V ∧ F = Falso.\n- Opção C: p → q = V → F = Falso.\n- Opção D: p ↔ q = V ↔ F = Falso.\n- Opção E: p ⊕ ~q = V ⊕ V = Falso.',
    explanations: {
      A: 'CORRETA. F ∨ V = Verdadeiro.',
      B: 'INCORRETA. V ∧ F = Falso.',
      C: 'INCORRETA. V → F = Falso.',
      D: 'INCORRETA. V ↔ F = Falso.',
      E: 'INCORRETA. V ⊕ V = Falso.'
    }
  },
  {
    id: 'rlm-q40',
    subjectId: 'rlm',
    topic: 'Problema de Escala de Trabalho / MDC e MMC',
    difficulty: 'Difícil',
    statement: 'Três agentes de trânsito fazem plantão em prazos regulares: o Agente A a cada 4 dias, o Agente B a cada 6 dias e o Agente C a cada 8 dias. Se no dia 1º de outubro os três fizeram plantão juntos, após quantos dias eles voltarão a fazer plantão juntos no mesmo dia?',
    lawReference: 'Matemática - Mínimo Múltiplo Comum (MMC)',
    bancaTag: 'Vunesp / Avalia 2026',
    options: [
      { letter: 'A', text: '24 dias.' },
      { letter: 'B', text: '12 dias.' },
      { letter: 'C', text: '48 dias.' },
      { letter: 'D', text: '18 dias.' },
      { letter: 'E', text: '36 dias.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O reencontro periódico de eventos concomitantes é dado pelo MMC (Mínimo Múltiplo Comum) dos intervalos:\nMMC(4, 6, 8):\n4 = 2²\n6 = 2 × 3\n8 = 2³\nMMC = 2³ × 3 = 8 × 3 = 24 dias.',
    explanations: {
      A: 'CORRETA. MMC(4, 6, 8) = 24 dias.',
      B: 'INCORRETA. 12 não é múltiplo de 8.',
      C: 'INCORRETA. Múltiplo comum, porém não é o mínimo.',
      D: 'INCORRETA. 18 não é múltiplo de 4 nem de 8.',
      E: 'INCORRETA. Não é o MMC mínimo.'
    }
  }
];
