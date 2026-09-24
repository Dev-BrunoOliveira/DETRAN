import { Question } from '../types';

export const QUESTIONS_DATABASE: Question[] = [
  // =========================================================================
  // MATÉRIA 1: CTB - CÓDIGO DE TRÂNSITO BRASILEIRO (PROVA REAL DETRAN-SP & EDITAL 2026)
  // =========================================================================
  {
    id: 'ctb-2019-q09',
    subjectId: 'ctb',
    topic: 'Anexo I - Velocidade Média Padrão',
    difficulty: 'Médio',
    statement: '(Prova Real DETRAN-SP / FCC) Onde não existir sinalização regulamentada, a velocidade máxima nas vias rurais será, nas rodovias de pista dupla, de X km/h para automóveis, camionetas e motocicletas e de Y km/h para os demais veículos; e nas rodovias de pista simples será de Z km/h para automóveis e W km/h para os demais. Preenchem correta e respectivamente as lacunas:',
    lawReference: 'Art. 61, § 1º, I, "a" e "b" do CTB',
    bancaTag: 'Prova Oficial DETRAN-SP 2019 - FCC Q33',
    options: [
      { letter: 'A', text: '110, 80, 90, 80.' },
      { letter: 'B', text: '120, 90, 110, 90.' },
      { letter: 'C', text: '120, 90, 90, 80.' },
      { letter: 'D', text: '110, 90, 100, 90.' },
      { letter: 'E', text: '120, 80, 100, 80.' }
    ],
    correctLetter: 'D',
    generalExplanation: 'Segundo o Art. 61, § 1º do CTB:\n1) Nas RODOVIAS DE PISTA DUPLA: 110 km/h para automóveis, camionetas e motocicletas / 90 km/h para os demais veículos.\n2) Nas RODOVIAS DE PISTA SIMPLES: 100 km/h para automóveis, camionetas e motocicletas / 90 km/h para os demais veículos.',
    explanations: {
      A: 'INCORRETA. Na pista simples o limite para automóveis é 100 km/h, e não 90 km/h.',
      B: 'INCORRETA. Não existe limite padrão de 120 km/h no CTB.',
      C: 'INCORRETA. Limites errados.',
      D: 'CORRETA. Gabarito Oficial FCC Q33 - Tipo 5: Pista dupla (110 e 90 km/h) / Pista simples (100 e 90 km/h).',
      E: 'INCORRETA. 120 km/h não é valor padrão do CTB.'
    }
  },
  {
    id: 'ctb-2019-q24',
    subjectId: 'ctb',
    topic: 'Pedestres e Travessia (Art. 69)',
    difficulty: 'Fácil',
    statement: '(Prova Real DETRAN-SP / FCC Q24) Ao cruzar a pista de rolamento, o pedestre tomará precauções de segurança, levando em conta a visibilidade, a distância e a velocidade dos veículos, utilizando sempre as faixas ou passagens a ele destinadas, sempre que estas existirem, em uma distância de até:',
    lawReference: 'Art. 69, III do CTB',
    bancaTag: 'Prova Oficial DETRAN-SP 2019 - FCC Q24',
    options: [
      { letter: 'A', text: '80 metros dele.' },
      { letter: 'B', text: '100 metros dele.' },
      { letter: 'C', text: '60 metros dele.' },
      { letter: 'D', text: '120 metros dele.' },
      { letter: 'E', text: '50 metros dele.' }
    ],
    correctLetter: 'E',
    generalExplanation: 'Nos termos do Art. 69, III do CTB: para cruzar a pista de rolamento, o pedestre deve utilizar a faixa ou passagem a ele destinada sempre que esta existir a uma distância de ATÉ 50 METROS dele.',
    explanations: {
      A: 'INCORRETA. O limite fixado pelo CTB é 50 metros.',
      B: 'INCORRETA. 100 metros não é o valor previsto.',
      C: 'INCORRETA. 60 metros está incorreto.',
      D: 'INCORRETA. 120 metros está incorreto.',
      E: 'CORRETA. Gabarito Oficial FCC Q24: O pedestre deve utilizar a faixa se estiver a uma distância de até 50 metros.'
    }
  },
  {
    id: 'ctb-2019-q21',
    subjectId: 'ctb',
    topic: 'Curso Preventivo de Reciclagem (Art. 261)',
    difficulty: 'Médio',
    statement: '(Prova Real DETRAN-SP / FCC Q21) Quanto ao curso preventivo de reciclagem previsto na legislação de trânsito, analise as afirmativas:\nI. Poderá optar por participar o condutor que exerce atividade remunerada (EAR), habilitado na categoria C, D ou E, sempre que, no período de 1 ano, atingir 14 pontos.\nII. Só poderá ser realizado uma vez a cada período de 24 meses.\nIII. Opcional para condutor com menos de 14 pontos que cometer infração gravíssima.\nEstá correto o que consta APENAS de:',
    lawReference: 'Art. 261, § 5º do CTB',
    bancaTag: 'Prova Oficial DETRAN-SP 2019 - FCC Q21',
    options: [
      { letter: 'A', text: 'II e III.' },
      { letter: 'B', text: 'I e II.' },
      { letter: 'C', text: 'I e III.' },
      { letter: 'D', text: 'I apenas.' },
      { letter: 'E', text: 'II apenas.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'O Art. 261, § 5º do CTB autoriza o condutor que exerce atividade remunerada (EAR) nas categorias C, D ou E a realizar curso preventivo de reciclagem ao atingir de 14 a 19 pontos no período de 12 meses. O curso só pode ser realizado 1 vez a cada 24 meses (afirmativas I e II corretas).',
    explanations: {
      A: 'INCORRETA. A afirmativa III está errada.',
      B: 'CORRETA. Gabarito Oficial FCC Q21: Estão corretas as afirmativas I e II.',
      C: 'INCORRETA. A III não está prevista.',
      D: 'INCORRETA. A II também está correta.',
      E: 'INCORRETA. A I também está correta.'
    }
  },
  {
    id: 'ctb-2019-q26',
    subjectId: 'ctb',
    topic: 'Velocidade e Suspensão da CNH (Art. 218)',
    difficulty: 'Médio',
    statement: '(Prova Real DETRAN-SP / FCC Q26) Três motoristas cometem infração de trânsito por velocidade:\nMotorista 1: Excesso de até 20% em via local.\nMotorista 2: Excesso entre 20% e 50% em via arterial.\nMotorista 3: Excesso superior a 50% em rodovia.\nAlém da multa, a suspensão direta do direito de dirigir e o recolhimento do documento de habilitação aplicam-se a:',
    lawReference: 'Art. 218, III do CTB',
    bancaTag: 'Prova Oficial DETRAN-SP 2019 - FCC Q26',
    options: [
      { letter: 'A', text: 'Motoristas 2 e 3, apenas.' },
      { letter: 'B', text: 'Motoristas 1, 2 e 3.' },
      { letter: 'C', text: 'Motoristas 1 e 3, apenas.' },
      { letter: 'D', text: 'Motoristas 1 e 2, apenas.' },
      { letter: 'E', text: 'Motorista 3, apenas.' }
    ],
    correctLetter: 'E',
    generalExplanation: 'Transitar em velocidade superior à máxima em MAIS DE 50% (Motorista 3) é a única infração do Art. 218 que acarreta a penalidade autossuspensiva direta do direito de dirigir (Art. 218, III).',
    explanations: {
      A: 'INCORRETA. O motorista 2 cometeu infração grave (até 50%), que não gera suspensão direta.',
      B: 'INCORRETA. Motoristas 1 e 2 não têm suspensão direta.',
      C: 'INCORRETA. Motorista 1 cometeu infração média (até 20%).',
      D: 'INCORRETA. Incorreto.',
      E: 'CORRETA. Gabarito Oficial FCC Q26: Apenas o Motorista 3 (excesso > 50%) sofre suspensão direta da CNH.'
    }
  },
  {
    id: 'ctb-2019-q39',
    subjectId: 'ctb',
    topic: 'Manobra Perigosa e Arrancada Brusca (Art. 175)',
    difficulty: 'Difícil',
    statement: '(Prova Real DETRAN-SP / FCC Q39) Utilizar-se de veículo para demonstrar ou exibir manobra perigosa, mediante arrancada brusca, derrapagem ou frenagem com deslizamento de pneus é infração gravíssima. Além da multa (10x), tem como medida administrativa expressa no CTB:',
    lawReference: 'Art. 175 do CTB',
    bancaTag: 'Prova Oficial DETRAN-SP 2019 - FCC Q39',
    options: [
      { letter: 'A', text: 'Recolhimento do Certificado de Registro e retenção do veículo.' },
      { letter: 'B', text: 'Suspensão do direito de dirigir e apreensão do veículo.' },
      { letter: 'C', text: 'Recolhimento do documento de habilitação, apenas.' },
      { letter: 'D', text: 'Recolhimento do documento de habilitação e remoção do veículo.' },
      { letter: 'E', text: 'Recolhimento do Certificado de Licenciamento Anual e retenção do veículo.' }
    ],
    correctLetter: 'D',
    generalExplanation: 'O Art. 175 do CTB estabelece como medidas administrativas para a manobra perigosa/arrancada brusca: Recolhimento do documento de habilitação (CNH/PPD) e Remoção do veículo.',
    explanations: {
      A: 'INCORRETA. A medida é remoção do veículo e recolhimento da CNH.',
      B: 'INCORRETA. Suspensão é penalidade, não medida administrativa.',
      C: 'INCORRETA. Também inclui a remoção do veículo.',
      D: 'CORRETA. Gabarito Oficial FCC Q39: Recolhimento do documento de habilitação e remoção do veículo.',
      E: 'INCORRETA. Medida errada.'
    }
  },
  {
    id: 'ctb-2019-q51',
    subjectId: 'ctb',
    topic: 'Crime de Embriaguez e Bafômetro (Art. 306)',
    difficulty: 'Difícil',
    statement: '(Prova Real DETRAN-SP / FCC Q51) Três motoristas realizaram o teste do etilômetro na fiscalização:\nMotorista 1: 0,29 mg/L de ar alveolar.\nMotorista 2: 0,31 mg/L de ar alveolar.\nMotorista 3: 0,35 mg/L de ar alveolar.\nConsiderando as margens e a legislação, além da infração administrativa, teve a incidência de CRIME DE TRÂNSITO (Art. 306 CTB):',
    lawReference: 'Art. 306 do CTB e Res. CONTRAN 432/13',
    bancaTag: 'Prova Oficial DETRAN-SP 2019 - FCC Q51',
    options: [
      { letter: 'A', text: 'Os motoristas 1, 2 e 3.' },
      { letter: 'B', text: 'O motorista 3, apenas.' },
      { letter: 'C', text: 'Os motoristas 2 e 3, apenas.' },
      { letter: 'D', text: 'Os motoristas 1 e 2, apenas.' },
      { letter: 'E', text: 'Os motoristas 1 e 3, apenas.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Conforme a Resolução CONTRAN nº 432/2013, o valor considerado no etilômetro para caracterizar o CRIME do Art. 306 do CTB (após desconto da margem de erro) deve ser igual ou superior a 0,34 mg/L. Portanto, apenas o Motorista 3 (0,35 mg/L) cometeu o crime de trânsito.',
    explanations: {
      A: 'INCORRETA. Motoristas 1 e 2 cometeram apenas a infração administrativa do Art. 165.',
      B: 'CORRETA. Gabarito Oficial FCC Q51: O crime incide apenas sobre o Motorista 3 (medição >= 0,34 mg/L).',
      C: 'INCORRETA. O motorista 2 (0,31 mg/L) está abaixo do limite criminal de 0,34 mg/L.',
      D: 'INCORRETA. Limites errados.',
      E: 'INCORRETA. O motorista 1 é apenas infração administrativa.'
    }
  },
  {
    id: 'ctb-2019-q41',
    subjectId: 'ctb',
    topic: 'Classificação das Vias (Art. 60)',
    difficulty: 'Fácil',
    statement: '(Prova Real DETRAN-SP / FCC Q41) As vias abertas à circulação, de acordo com a sua utilização, classificam-se em vias urbanas e vias rurais. As vias urbanas dividem-se em:',
    lawReference: 'Art. 60, I e II do CTB',
    bancaTag: 'Prova Oficial DETRAN-SP 2019 - FCC Q41',
    options: [
      { letter: 'A', text: 'Via expressa, via arterial, via coletora e via secundária.' },
      { letter: 'B', text: 'Via marginal, via arterial, via secundária e via local.' },
      { letter: 'C', text: 'Via de trânsito rápido, via arterial, via coletora e via local.' },
      { letter: 'D', text: 'Via expressa, via arterial, via coletora e rodovia.' },
      { letter: 'E', text: 'Via de trânsito rápido, via arterial, via secundária e via local.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'O Art. 60 do CTB classifica as vias urbanas em 4 categorias exatas: 1) Via de trânsito rápido; 2) Via arterial; 3) Via coletora; 4) Via local. As vias rurais dividem-se em Rodovias e Estradas.',
    explanations: {
      A: 'INCORRETA. Não existe a categoria "via expressa" ou "secundária" no CTB.',
      B: 'INCORRETA. Não existe a classificação "via marginal".',
      C: 'CORRETA. Gabarito Oficial FCC Q41: Trânsito rápido, arterial, coletora e local.',
      D: 'INCORRETA. Rodovia é via rural.',
      E: 'INCORRETA. "Secundária" não é categoria do CTB.'
    }
  },
  {
    id: 'ctb-2019-q48',
    subjectId: 'ctb',
    topic: 'Veículos Novos e Autorização Especial de Trânsito',
    difficulty: 'Médio',
    statement: '(Prova Real DETRAN-SP / FCC Q48) Os veículos novos, antes do registro e licenciamento, adquiridos por pessoas físicas ou jurídicas, podem transportar cargas e pessoas portando a autorização especial. Válida apenas para deslocamento para o município de destino, essa autorização terá validade de:',
    lawReference: 'Resolução CONTRAN e Art. 132 do CTB',
    bancaTag: 'Prova Oficial DETRAN-SP 2019 - FCC Q48',
    options: [
      { letter: 'A', text: '45 dias transcorridos da data da emissão.' },
      { letter: 'B', text: '60 dias transcorridos da data da emissão.' },
      { letter: 'C', text: '5 dias transcorridos da data da emissão.' },
      { letter: 'D', text: '15 dias transcorridos da data da emissão, prorrogável por igual período por motivo de força maior.' },
      { letter: 'E', text: '30 dias transcorridos da data da emissão.' }
    ],
    correctLetter: 'D',
    generalExplanation: 'A autorização especial para trânsito de veículo novo sem placa (do pátio da fábrica/concessionária até o município de emplacamento) tem validade de 15 (quinze) dias, prorrogável por igual período por força maior.',
    explanations: {
      A: 'INCORRETA. O prazo base é 15 dias.',
      B: 'INCORRETA. 60 dias não é o prazo de trânsito sem placa.',
      C: 'INCORRETA. 5 dias é insuficiente.',
      D: 'CORRETA. Gabarito Oficial FCC Q48: 15 dias transcorridos da emissão, prorrogável por igual período.',
      E: 'INCORRETA. Prazo incorreto.'
    }
  },

  // =========================================================================
  // MATÉRIA 2: CONTRAN & LEGISLAÇÃO ESTADUAL SP
  // =========================================================================
  {
    id: 'con-2019-q31',
    subjectId: 'contran_estadual',
    topic: 'Exame Toxicológico e Laboratórios Credenciados',
    difficulty: 'Médio',
    statement: '(Prova Real DETRAN-SP / FCC Q31) Os condutores das categorias C, D e E deverão submeter-se a exames toxicológicos para habilitação e renovação. O exame será realizado em regime de livre concorrência por laboratórios credenciados, sendo VEDADO aos entes públicos:\nI. Fixar preços para os exames.\nII. Limitar o número de empresas ou locais em que a atividade pode ser exercida.\nIII. Estabelecer regras de exclusividade territorial.\nEstá correto o que consta de:',
    lawReference: 'Art. 148-A do CTB e Resoluções CONTRAN',
    bancaTag: 'Prova Oficial DETRAN-SP 2019 - FCC Q31',
    options: [
      { letter: 'A', text: 'I, II e III.' },
      { letter: 'B', text: 'I e III, apenas.' },
      { letter: 'C', text: 'I e II, apenas.' },
      { letter: 'D', text: 'I, apenas.' },
      { letter: 'E', text: 'II e III, apenas.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Para garantir a livre concorrência na realização do exame toxicológico, é vedado ao Poder Público tabelar/fixar preços, restringir número de empresas credenciadas ou conceder reserva de mercado/exclusividade territorial (I, II e III corretas).',
    explanations: {
      A: 'CORRETA. Gabarito Oficial FCC Q31: Todas as afirmativas (I, II e III) são vedadas aos entes públicos.',
      B: 'INCORRETA. A II também é vedada.',
      C: 'INCORRETA. A III também é vedada.',
      D: 'INCORRETA. II e III também são vedadas.',
      E: 'INCORRETA. A I também é vedada.'
    }
  },
  {
    id: 'con-2019-q50',
    subjectId: 'contran_estadual',
    topic: 'FUNSET e Arrecadação de Multas (Art. 320)',
    difficulty: 'Médio',
    statement: '(Prova Real DETRAN-SP / FCC Q50) Os órgãos executivos de trânsito dos Estados e Municípios, para arrecadarem multas de sua competência, deverão garantir o repasse automático do recolhimento do percentual de:',
    lawReference: 'Art. 320, parágrafo único do CTB',
    bancaTag: 'Prova Oficial DETRAN-SP 2019 - FCC Q50',
    options: [
      { letter: 'A', text: '1% do valor arrecadado das multas à conta do FUNDED.' },
      { letter: 'B', text: '5% do valor arrecadado das multas de trânsito à conta do Fundo Nacional de Segurança e Educação de Trânsito (FUNSET).' },
      { letter: 'C', text: '1% do valor arrecadado à conta do FUNSET.' },
      { letter: 'D', text: '1% do valor arrecadado à conta do DPVAT.' },
      { letter: 'E', text: '5% do valor arrecadado à conta do FUNDED.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'O Art. 320, parágrafo único do CTB determina que 5% (cinco por cento) do valor arrecadado com as multas de trânsito serão depositados mensalmente na conta do FUNSET (Fundo Nacional de Segurança e Educação de Trânsito).',
    explanations: {
      A: 'INCORRETA. O percentual é 5% para o FUNSET.',
      B: 'CORRETA. Gabarito Oficial FCC Q50: 5% do valor arrecadado destinado ao FUNSET.',
      C: 'INCORRETA. O percentual é 5%, não 1%.',
      D: 'INCORRETA. Não se destina ao DPVAT.',
      E: 'INCORRETA. O fundo correto é o FUNSET.'
    }
  },

  // =========================================================================
  // MATÉRIA 3: LÍNGUA PORTUGUESA (PROVA REAL DETRAN-SP Q1 A Q8)
  // =========================================================================
  {
    id: 'por-2019-q01',
    subjectId: 'portugues',
    topic: 'Concordância Verbal e Voz Passiva',
    difficulty: 'Médio',
    statement: '(Prova Real DETRAN-SP / FCC Q01) Há ocorrência de forma verbal na voz passiva e pleno atendimento às normas de concordância na frase:',
    lawReference: 'Sintaxe de Voz Passiva e Concordância',
    bancaTag: 'Prova Oficial DETRAN-SP 2019 - FCC Q01',
    options: [
      { letter: 'A', text: 'Quando alguém enuncia verdades incontestáveis não precisam lançar mão de qualquer esforço para prová-las.' },
      { letter: 'B', text: 'Mesmo nas declarações de amor podem haver promessas que, por conta de sua ênfase, não se poderá cumprir.' },
      { letter: 'C', text: 'Não são em todas as circunstâncias que a gente é capaz de defender as opiniões que emitem com segurança.' },
      { letter: 'D', text: 'As artes e as artimanhas que sejam propagadas com ênfase podem indicar a insegurança de quem delas se vale.' },
      { letter: 'E', text: 'São paradoxais as promessas feitas com tanta ênfase, que parece apontar, de fato, para sua fragilidade.' }
    ],
    correctLetter: 'D',
    generalExplanation: 'Na frase da opção D, temos voz passiva analítica ("sejam propagadas") e concordância correta entre o sujeito no plural ("As artes e as artimanhas... podem indicar"). Nas outras opções há erros graves de concordância verbal (ex: "podem haver" incorreto na opção B).',
    explanations: {
      A: 'INCORRETA. Falha de concordância com o sujeito "alguém" (precisa).',
      B: 'INCORRETA. Verbo "haver" no sentido de existir é impessoal: o correto seria "pode haver".',
      C: 'INCORRETA. Erro de concordância: "a gente é capaz... que emite".',
      D: 'CORRETA. Gabarito Oficial FCC Q01: Voz passiva "sejam propagadas" e concordância impecável.',
      E: 'INCORRETA. Erro de concordância no verbo parecer ("parecem apontar").'
    }
  },
  {
    id: 'por-2019-q07',
    subjectId: 'portugues',
    topic: 'Sintaxe de Oração Subordinada Substantiva',
    difficulty: 'Difícil',
    statement: '(Prova Real DETRAN-SP / FCC Q07) No período "E penso que Beethoven concordaria", a oração sublinhada ("que Beethoven concordaria") exerce a função de Oração Subordinada Substantiva Objetiva Direta. Ela exerce a MESMA função sintática que a oração destacada em:',
    lawReference: 'Sintaxe do Período Composto',
    bancaTag: 'Prova Oficial DETRAN-SP 2019 - FCC Q07',
    options: [
      { letter: 'A', text: 'O compositor não previu QUE FARIA TANTO SUCESSO.' },
      { letter: 'B', text: 'Seria preferível QUE VOCÊ CONTINUASSE A COMPOR.' },
      { letter: 'C', text: 'Escreveria sobre a alegria SE FOSSE CAPAZ.' },
      { letter: 'D', text: 'MESMO QUE TENTE, não consigo ser alegre.' },
      { letter: 'E', text: 'Eles resolveram se unir PARA COMPOR UMA GRANDE SINFONIA.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Na frase base, "penso" é verbo transitivo direto e "que Beethoven concordaria" é Oração Subordinada Substantiva Objetiva Direta. Na opção A, "não previu" também é transitivo direto e pede objeto direto: "que faria tanto sucesso".',
    explanations: {
      A: 'CORRETA. Gabarito Oficial FCC Q07: "que faria tanto sucesso" é Objetiva Direta do verbo "previu".',
      B: 'INCORRETA. É Oração Subordinada Substantiva Subjetiva (sujeito de "Seria preferível").',
      C: 'INCORRETA. É Oração Subordinada Adverbial Condicional.',
      D: 'INCORRETA. É Oração Subordinada Adverbial Concessiva.',
      E: 'INCORRETA. É Oração Subordinada Adverbial Final.'
    }
  },

  // =========================================================================
  // MATÉRIA 4: RACIOCÍNIO LÓGICO-MATEMÁTICO (PROVA REAL DETRAN-SP Q9 A Q11)
  // =========================================================================
  {
    id: 'rlm-2019-q09',
    subjectId: 'rlm',
    topic: 'Velocidade Média Padrão / Média Harmônica',
    difficulty: 'Médio',
    statement: '(Prova Real DETRAN-SP / FCC Q09) Um automóvel faz metade do percurso de uma viagem a uma velocidade média de 80 km/h e a outra metade a 120 km/h de velocidade média. A velocidade média desenvolvida pelo automóvel durante a totalidade do percurso da viagem é, em km/h, de:',
    lawReference: 'Matemática - Velocidade Média Padrão',
    bancaTag: 'Prova Oficial DETRAN-SP 2019 - FCC Q09',
    options: [
      { letter: 'A', text: '108.' },
      { letter: 'B', text: '100.' },
      { letter: 'C', text: '96.' },
      { letter: 'D', text: '112.' },
      { letter: 'E', text: '104.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'Quando as distâncias percorridas são iguais (metade e metade), a velocidade média total é a Média Harmônica das velocidades:\nVm = (2 × V1 × V2) / (V1 + V2) = (2 × 80 × 120) / (80 + 120) = 19.200 / 200 = 96 km/h.',
    explanations: {
      A: 'INCORRETA. Erro de cálculo.',
      B: 'INCORRETA. (80+120)/2 = 100 é a média aritmética simples, pega de ratão clássica da FCC!',
      C: 'CORRETA. Gabarito Oficial FCC Q09: Vm = 2×80×120 / (80+120) = 96 km/h.',
      D: 'INCORRETA. Cálculo incorreto.',
      E: 'INCORRETA. Cálculo incorreto.'
    }
  },
  {
    id: 'rlm-2019-q10',
    subjectId: 'rlm',
    topic: 'Lógica Proposicional e Implicação (FCC Q10)',
    difficulty: 'Difícil',
    statement: '(Prova Real DETRAN-SP / FCC Q10) "Em uma festa, se Carlos está acompanhado ou está feliz, canta e dança. Se, na última festa em que esteve, NÃO DANÇOU, então Carlos, necessariamente:"',
    lawReference: 'Lógica Proposicional - Regras de Inferência (Modus Tollens)',
    bancaTag: 'Prova Oficial DETRAN-SP 2019 - FCC Q10',
    options: [
      { letter: 'A', text: 'Não cantou.' },
      { letter: 'B', text: 'Cantou.' },
      { letter: 'C', text: 'Não estava acompanhado, mas estava feliz.' },
      { letter: 'D', text: 'Estava acompanhado, mas não estava feliz.' },
      { letter: 'E', text: 'Não estava acompanhado, nem feliz.' }
    ],
    correctLetter: 'E',
    generalExplanation: 'Proposição: (Acompanhado ∨ Feliz) → (Canta ∧ Dança).\nPelo Modus Tollens, negando o consequente ("não dançou", logo a conjunção Canta ∧ Dança é FALSA), nega-se a disjunção do antecedente: ~(Acompanhado ∨ Feliz) = NÃO estava acompanhado E NÃO estava feliz.',
    explanations: {
      A: 'INCORRETA. Não é a única conclusão necessária.',
      B: 'INCORRETA. Ele não cantou nem dançou.',
      C: 'INCORRETA. Se estivesse feliz, ele teria dançado.',
      D: 'INCORRETA. Se estivesse acompanhado, ele teria dançado.',
      E: 'CORRETA. Gabarito Oficial FCC Q10: Pela Lei de De Morgan na negação de antecedente, ele não estava acompanhado nem feliz.'
    }
  },

  // =========================================================================
  // MATÉRIA 5: NOÇÕES DE INFORMÁTICA (PROVA REAL DETRAN-SP Q12 A Q14)
  // =========================================================================
  {
    id: 'inf-2019-q13',
    subjectId: 'informatica',
    topic: 'MS Excel - Função SOMASE',
    difficulty: 'Médio',
    statement: '(Prova Real DETRAN-SP / FCC Q13) Em uma planilha do Microsoft Excel em português, a coluna D contém a "Gravidade" da infração ("Gravíssima", "Grave", "Média") e a coluna C contém o "Valor em Reais". Para somar no intervalo C2:C5 apenas os valores das infrações rotuladas como "Gravíssima" na coluna D2:D5, a fórmula correta é:',
    lawReference: 'Função SOMASE no MS Excel',
    bancaTag: 'Prova Oficial DETRAN-SP 2019 - FCC Q13',
    options: [
      { letter: 'A', text: '=SE(D2:D5;"=Gravíssima";SOMA(C2;C5))' },
      { letter: 'B', text: '=SOMASE(D2:D5;"Gravíssima";C2:C5)' },
      { letter: 'C', text: '=SOMA(D2:D5;"Gravíssima";C2:C5)' },
      { letter: 'D', text: '=SE((D2:D5)="Gravíssima";SOMA(C2;C5))' },
      { letter: 'E', text: '=SOMASE(D2;D5:"Gravíssima":C2;C5)' }
    ],
    correctLetter: 'B',
    generalExplanation: 'A sintaxe padrão da função SOMASE no Excel é:\n`=SOMASE(intervalo_critério; critério; intervalo_soma)`\nLogo: `=SOMASE(D2:D5;"Gravíssima";C2:C5)`.',
    explanations: {
      A: 'INCORRETA. Sintaxe inválida.',
      B: 'CORRETA. Gabarito Oficial FCC Q13: =SOMASE(D2:D5;"Gravíssima";C2:C5).',
      C: 'INCORRETA. A função SOMA simples não aceita texto como critério de filtro.',
      D: 'INCORRETA. Sintaxe inválida.',
      E: 'INCORRETA. Uso incorreto dos dois pontos.'
    }
  },
  {
    id: 'inf-2019-q14',
    subjectId: 'informatica',
    topic: 'Redes de Computadores (LAN & Switch)',
    difficulty: 'Médio',
    statement: '(Prova Real DETRAN-SP / FCC Q14) Um Agente de Trânsito precisa conectar vários computadores em uma Local Area Network (LAN), de forma que os dados vindos do computador de origem sejam repassados apenas ao computador de destino específico, e não a todos os computadores da rede. O equipamento de rede que realiza essa função inteligente é o:',
    lawReference: 'Equipamentos de Conectividade de Rede',
    bancaTag: 'Prova Oficial DETRAN-SP 2019 - FCC Q14',
    options: [
      { letter: 'A', text: 'Backbone.' },
      { letter: 'B', text: 'Modem.' },
      { letter: 'C', text: 'Firewall.' },
      { letter: 'D', text: 'Hub.' },
      { letter: 'E', text: 'Switch.' }
    ],
    correctLetter: 'E',
    generalExplanation: 'O SWITCH é o equipamento chave da camada 2 (enlace) que comuta dados enviando-os exclusivamente à porta do destinatário. Diferencia-se do HUB, que transmite os dados por difusão (broadcast) para todas as portas indiscriminadamente.',
    explanations: {
      A: 'INCORRETA. Backbone é a espinha dorsal de tráfego de dados de longa distância.',
      B: 'INCORRETA. Modem modula/demodula sinal analógico em digital.',
      C: 'INCORRETA. Firewall é sistema de segurança de tráfego de rede.',
      D: 'INCORRETA. O HUB repassa dados para TODOS os computadores da rede (broadcast).',
      E: 'CORRETA. Gabarito Oficial FCC Q14: O Switch direciona os dados apenas para o destinatário.'
    }
  },

  // =========================================================================
  // MATÉRIA 6: DIREITO CONSTITUCIONAL & ADM (PROVA REAL DETRAN-SP Q15 A Q20)
  // =========================================================================
  {
    id: 'dir-2019-q15',
    subjectId: 'direito',
    topic: 'Ordem Econômica na CF/88 (Art. 174)',
    difficulty: 'Difícil',
    statement: '(Prova Real DETRAN-SP / FCC Q15) À luz do que dispõe a Constituição Federal de 1988 acerca da ordem econômica e financeira (Art. 174), como agente normativo e regulador da atividade econômica, o Estado exercerá, na forma da lei, as funções de fiscalização, incentivo e planejamento, sendo este:',
    lawReference: 'Art. 174 da CF/88',
    bancaTag: 'Prova Oficial DETRAN-SP 2019 - FCC Q15',
    options: [
      { letter: 'A', text: 'Obrigatório para o setor privado e facultativo para o setor público.' },
      { letter: 'B', text: 'Determinante para o setor público e indicativo para o setor privado.' },
      { letter: 'C', text: 'Facultativo tanto para o setor público quanto para o setor privado.' },
      { letter: 'D', text: 'Determinante tanto para o setor público como para o privado.' },
      { letter: 'E', text: 'Indicativo para o setor público e nulo para o privado.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'O Art. 174 da CF/88 estabelece expressamente que o planejamento estatal é DETERMINANTE para o setor público e INDICATIVO para o setor privado.',
    explanations: {
      A: 'INCORRETA. Inverteu a regra constitucional.',
      B: 'CORRETA. Texto exato do Art. 174 da CF/88: "sendo o planejamento determinante para o setor público e indicativo para o setor privado".',
      C: 'INCORRETA. Não é facultativo para o Estado.',
      D: 'INCORRETA. O Estado não pode impor planejamento determinante de forma coercitiva à livre iniciativa privada.',
      E: 'INCORRETA. Para o setor público é determinante.'
    }
  },
  {
    id: 'dir-2019-q20',
    subjectId: 'direito',
    topic: 'Responsabilidade Civil de Concessionária (Art. 37 §6º CF/88)',
    difficulty: 'Difícil',
    statement: '(Prova Real DETRAN-SP / FCC Q20) Em uma rodovia estadual cuja exploração é feita mediante contrato de concessão de serviço público, um veículo particular sofreu um acidente grave causado por um buraco não sinalizado na pista em obras. As vítimas que sofreram danos materiais e físicos podem:',
    lawReference: 'Art. 37, § 6º da CF/88 e Jurisprudência do STF',
    bancaTag: 'Prova Oficial DETRAN-SP 2019 - FCC Q20',
    options: [
      { letter: 'A', text: 'Deduzir pleito indenizatório em face da concessionária de serviço público e do poder concedente (Estado), ambos respondendo sob a modalidade objetiva de responsabilidade.' },
      { letter: 'B', text: 'Apresentar ação de indenização sob a modalidade subjetiva exclusivamente contra a empreiteira de obras.' },
      { letter: 'C', text: 'Exigir indenização apenas se provada a culpa individual do engenheiro da obra.' },
      { letter: 'D', text: 'Buscar reparo junto ao Poder Concedente apenas se a concessionária falir.' },
      { letter: 'E', text: 'Processar criminalmente o fiscal do DETRAN-SP por omissão de socorro.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'As concessionárias de serviço público respondem OBJETIVAMENTE pelos danos causados a terceiros (usuários ou não) no exercício do serviço (Art. 37, § 6º da CF/88), existindo a responsabilidade subsidiária/solidária do Poder Concedente.',
    explanations: {
      A: 'CORRETA. Gabarito Oficial FCC Q20: Responsabilidade objetiva da concessionária prestadora do serviço público.',
      B: 'INCORRETA. A responsabilidade é objetiva, prescindindo de comprovação de culpa subjetiva.',
      C: 'INCORRETA. Não exige prova de culpa individual do engenheiro.',
      D: 'INCORRETA. Cabe ação em face da concessionária.',
      E: 'INCORRETA. Ação civil de reparação de danos.'
    }
  }
];
