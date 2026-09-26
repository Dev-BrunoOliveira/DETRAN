import { Question } from '../../types';

export const ctbQuestions: Question[] = [
  {
    id: 'ctb-q01',
    subjectId: 'ctb',
    topic: 'Velocidade Média Padrão (Art. 61)',
    difficulty: 'Médio',
    statement: '(Prova Real DETRAN-SP / FCC) Onde não existir sinalização regulamentada, a velocidade máxima nas vias rurais será, nas rodovias de pista dupla, de X km/h para automóveis, camionetas e motocicletas e de Y km/h para os demais veículos; e nas rodovias de pista simples será de Z km/h para automóveis e W km/h para os demais. Preenchem correta e respectivamente as lacunas:',
    lawReference: 'Art. 61, § 1º, I, "a" e "b" do CTB',
    bancaTag: 'Prova Oficial DETRAN-SP - FCC',
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
      C: 'INCORRETA. Valores incompatíveis com a lei.',
      D: 'CORRETA. Pista dupla: 110 km/h e 90 km/h; Pista simples: 100 km/h e 90 km/h.',
      E: 'INCORRETA. 120 km/h não é velocidade regulamentada de fábrica no CTB.'
    }
  },
  {
    id: 'ctb-q02',
    subjectId: 'ctb',
    topic: 'Pedestres e Travessia (Art. 69)',
    difficulty: 'Fácil',
    statement: '(Prova Real DETRAN-SP / FCC) Ao cruzar a pista de rolamento, o pedestre tomará precauções de segurança, levando em conta a visibilidade, a distância e a velocidade dos veículos, utilizando sempre as faixas ou passagens a ele destinadas, sempre que estas existirem, em uma distância de até:',
    lawReference: 'Art. 69, III do CTB',
    bancaTag: 'Prova Oficial DETRAN-SP - FCC',
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
      A: 'INCORRETA. O limite fixado expressamente pelo CTB é 50 metros.',
      B: 'INCORRETA. 100 metros não é a distância prevista na norma.',
      C: 'INCORRETA. 60 metros é um valor incorreto.',
      D: 'INCORRETA. 120 metros é uma distância excessiva para exigência de pedestre.',
      E: 'CORRETA. Texto do Art. 69, III: a faixa ou passagem deve ser usada se estiver a até 50 metros.'
    }
  },
  {
    id: 'ctb-q03',
    subjectId: 'ctb',
    topic: 'Curso Preventivo de Reciclagem (Art. 261)',
    difficulty: 'Médio',
    statement: '(Prova Real DETRAN-SP / FCC) Quanto ao curso preventivo de reciclagem previsto na legislação de trânsito, o condutor que exerce atividade remunerada (EAR) na categoria C, D ou E pode optar por realizá-lo quando atingir no período de 12 meses a pontuação de:',
    lawReference: 'Art. 261, § 5º do CTB',
    bancaTag: 'Prova Oficial DETRAN-SP - FCC',
    options: [
      { letter: 'A', text: '10 a 14 pontos.' },
      { letter: 'B', text: '14 a 19 pontos.' },
      { letter: 'C', text: '20 a 29 pontos.' },
      { letter: 'D', text: '30 a 39 pontos.' },
      { letter: 'E', text: '15 a 25 pontos.' }
    ],
    correctLetter: 'D',
    generalExplanation: 'Após as alterações do CTB (Lei 14.071/20), o condutor que exerce atividade remunerada (EAR) em qualquer categoria pode optar pelo curso preventivo de reciclagem sempre que atingir de 30 a 39 pontos no período de 12 meses (Art. 261, § 5º). Na regra original de 2019 da FCC era 14 a 19 pontos em relação ao teto antigo de 20; porém atualizado pela Lei 14.071/20 para o teto de 40 pontos, o intervalo legal do § 5º é 30 a 39 pontos.',
    explanations: {
      A: 'INCORRETA. Intervalo inexistente.',
      B: 'INCORRETA. Era a regra antiga pré-2021.',
      C: 'INCORRETA. O intervalo fixado no CTB atualizado é de 30 a 39 pontos.',
      D: 'CORRETA. CTB Art. 261, § 5º: 30 a 39 pontos para o condutor EAR.',
      E: 'INCORRETA. Não corresponde à redação do Art. 261.'
    }
  },
  {
    id: 'ctb-q04',
    subjectId: 'ctb',
    topic: 'Velocidade e Suspensão da CNH (Art. 218)',
    difficulty: 'Médio',
    statement: '(Prova Real DETRAN-SP / FCC) Transitar em velocidade superior à máxima permitida em mais de 50% (cinquenta por cento) constitui infração de natureza gravíssima. Além da multa (multiplicada por 3), prevê expressamente o CTB como penalidade direta:',
    lawReference: 'Art. 218, III do CTB',
    bancaTag: 'Prova Oficial DETRAN-SP - FCC',
    options: [
      { letter: 'A', text: 'Apreensão do veículo e cassação da CNH.' },
      { letter: 'B', text: 'Frequência em curso de reciclagem apenas.' },
      { letter: 'C', text: 'Suspensão do direito de dirigir.' },
      { letter: 'D', text: 'Retenção do veículo até a quitação das multas.' },
      { letter: 'E', text: 'Advertência por escrito e recolhimento do CRLV.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'O Art. 218, III do CTB prevê que transitar em velocidade superior à máxima em mais de 50% é infração Gravíssima com penalidade de Multa (3x) e Suspensão do Direito de Dirigir (penalidade autossuspensiva direta).',
    explanations: {
      A: 'INCORRETA. A apreensão do veículo não existe mais como penalidade no CTB.',
      B: 'INCORRETA. A penalidade principal é a suspensão do direito de dirigir.',
      C: 'CORRETA. Art. 218, III: Suspensão do direito de dirigir é a penalidade autossuspensiva.',
      D: 'INCORRETA. Medida administrativa não se confunde com retenção por débitos.',
      E: 'INCORRETA. Advertência é applied apenas em infrações leves ou médias sob condições específicas.'
    }
  },
  {
    id: 'ctb-q05',
    subjectId: 'ctb',
    topic: 'Manobra Perigosa e Arrancada Brusca (Art. 175)',
    difficulty: 'Difícil',
    statement: '(Prova Real DETRAN-SP / FCC) Utilizar-se de veículo para demonstrar ou exibir manobra perigosa, mediante arrancada brusca, derrapagem ou frenagem com deslizamento de pneus é infração gravíssima com multa (10x). Quais são as MEDIDAS ADMINISTRATIVAS expressamente previstas para este tipo infracional?',
    lawReference: 'Art. 175 do CTB',
    bancaTag: 'Prova Oficial DETRAN-SP - FCC',
    options: [
      { letter: 'A', text: 'Recolhimento do Certificado de Registro e retenção do veículo.' },
      { letter: 'B', text: 'Suspensão do direito de dirigir e apreensão do veículo.' },
      { letter: 'C', text: 'Recolhimento do documento de habilitação e remoção do veículo.' },
      { letter: 'D', text: 'Retenção do veículo e curso de reciclagem obrigatorio.' },
      { letter: 'E', text: 'Recolhimento do Certificado de Licenciamento e transbordo de carga.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'O Art. 175 do CTB fixa expressamente as seguintes MEDIDAS ADMINISTRATIVAS: Recolhimento do documento de habilitação e Remoção do veículo. (Lembrando que a Suspensão do direito de dirigir é PENALIDADE, não medida administrativa).',
    explanations: {
      A: 'INCORRETA. A medida não é recolhimento do CRV e retenção, mas remoção e recolhimento da CNH.',
      B: 'INCORRETA. Suspensão é penalidade e apreensão de veículo foi revogada.',
      C: 'CORRETA. Art. 175: Medidas administrativas - Recolhimento do documento de habilitação e remoção do veículo.',
      D: 'INCORRETA. Curso é penalidade/acessório.',
      E: 'INCORRETA. Medidas divergentes do CTB.'
    }
  },
  {
    id: 'ctb-q06',
    subjectId: 'ctb',
    topic: 'Crime de Embriaguez ao Volante (Art. 306)',
    difficulty: 'Difícil',
    statement: '(Prova Real DETRAN-SP / FCC) Conforme a Resolução CONTRAN nº 432/2013 e o Art. 306 do CTB, a conduta de conduzir veículo automotor com capacidade psicomotora alterada em razão da influência de álcool configura CRIME DE TRÂNSITO quando a medição realizada por etilômetro (bafômetro) indicar valor considerado igual ou superior a:',
    lawReference: 'Art. 306 do CTB & Res. CONTRAN 432/13',
    bancaTag: 'Prova Oficial DETRAN-SP - FCC',
    options: [
      { letter: 'A', text: '0,05 mg de álcool por litro de ar alveolar.' },
      { letter: 'B', text: '0,14 mg de álcool por litro de ar alveolar.' },
      { letter: 'C', text: '0,24 mg de álcool por litro de ar alveolar.' },
      { letter: 'D', text: '0,34 mg de álcool por litro de ar alveolar.' },
      { letter: 'E', text: '0,50 mg de álcool por litro de ar alveolar.' }
    ],
    correctLetter: 'D',
    generalExplanation: 'A caracterização do CRIME do Art. 306 do CTB via teste de etilômetro ocorre quando o valor considerado (após desconto da margem de erro) for IGUAL OU SUPERIOR A 0,34 mg/L de ar alveolar (ou 6 decigramas de álcool por litro de sangue). Qualquer valor acima de zero até 0,33 mg/L é apenas infração administrativa do Art. 165.',
    explanations: {
      A: 'INCORRETA. 0,05 mg/L é apenas limite de tolerância técnica para infração administrativa.',
      B: 'INCORRETA. Constitui infração administrativa do Art. 165, não crime.',
      C: 'INCORRETA. Constitui infração administrativa.',
      D: 'CORRETA. Art. 306 CTB / Res. 432: Valor considerado >= 0,34 mg/L configura CRIME DE TRÂNSITO.',
      E: 'INCORRETA. Valor superior ao limiar criminal de 0,34 mg/L.'
    }
  },
  {
    id: 'ctb-q07',
    subjectId: 'ctb',
    topic: 'Classificação das Vias Urbanas (Art. 60)',
    difficulty: 'Fácil',
    statement: '(Prova Real DETRAN-SP / FCC) As vias abertas à circulação, de acordo com a sua utilização, classificam-se em vias urbanas e vias rurais. Nos termos do Art. 60 do CTB, as vias urbanas dividem-se taxativamente em:',
    lawReference: 'Art. 60, I do CTB',
    bancaTag: 'Prova Oficial DETRAN-SP - FCC',
    options: [
      { letter: 'A', text: 'Via expressa, via arterial, via coletora e via secundária.' },
      { letter: 'B', text: 'Via marginal, via arterial, via secundária e via local.' },
      { letter: 'C', text: 'Via de trânsito rápido, via arterial, via coletora e via local.' },
      { letter: 'D', text: 'Via expressa, via arterial, via coletora e rodovia.' },
      { letter: 'E', text: 'Via de trânsito rápido, via arterial, via secundária e estrada.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'O Art. 60 do CTB estabelece a seguinte classificação para as vias urbanas:\n1) Via de trânsito rápido;\n2) Via arterial;\n3) Via coletora;\n4) Via local.\n(Rodovias e Estradas são vias rurais).',
    explanations: {
      A: 'INCORRETA. Não existe termo "via expressa" ou "secundária" na classificação do CTB.',
      B: 'INCORRETA. "Via marginal" não é categoria formal do CTB.',
      C: 'CORRETA. Art. 60, I: Trânsito rápido, arterial, coletora e local.',
      D: 'INCORRETA. Rodovia é via rural.',
      E: 'INCORRETA. Estrada é via rural não pavimentada.'
    }
  },
  {
    id: 'ctb-q08',
    subjectId: 'ctb',
    topic: 'Pontuação de CNH e Limites de Suspensão (Art. 261)',
    difficulty: 'Médio',
    statement: 'Com as alterações trazidas pela Lei nº 14.071/2020 ao Art. 261 do CTB, o direito de dirigir será suspenso quando o condutor atingir a seguinte pontuação no período de 12 meses, desde que NÃO exerci atividade remunerada:',
    lawReference: 'Art. 261, I, II e III do CTB',
    bancaTag: 'Vunesp / DETRAN-SP',
    options: [
      { letter: 'A', text: '20 pontos se tiver 1 infração gravíssima; 30 pontos se tiver 2 gravíssimas; 40 pontos se não tiver nenhuma.' },
      { letter: 'B', text: '20 pontos se tiver 2 ou mais infrações gravíssimas; 30 pontos se tiver 1 infração gravíssima; 40 pontos se não tiver nenhuma infração gravíssima.' },
      { letter: 'C', text: '20 pontos em qualquer situação, independentemente da gravidade das infrações.' },
      { letter: 'D', text: '30 pontos para qualquer condutor que cometa infrações graves ou gravíssimas.' },
      { letter: 'E', text: '40 pontos para todos os condutores, independentemente do número de infrações gravíssimas.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'O Art. 261, I, II e III do CTB estabelece a escala de pontuação acumulada em 12 meses para suspensão:\n- 20 PONTOS: se constarem 2 OU MAIS infrações gravíssimas;\n- 30 PONTOS: se constar 1 infração gravíssima;\n- 40 PONTOS: se NÃO constar NENHUMA infração gravíssima.',
    explanations: {
      A: 'INCORRETA. Inverteu os critérios de 20 e 30 pontos.',
      B: 'CORRETA. Escala oficial: 20 pts (>= 2 gravíssimas), 30 pts (1 gravíssima), 40 pts (0 gravíssimas).',
      C: 'INCORRETA. Essa era a regra antiga antes da Lei 14.071/20.',
      D: 'INCORRETA. A gradação depende da quantidade de infrações gravíssimas.',
      E: 'INCORRETA. 40 pontos fixos independente de gravíssima aplica-se apenas ao condutor EAR.'
    }
  },
  {
    id: 'ctb-q09',
    subjectId: 'ctb',
    topic: 'Condutor EAR e Escala de Pontos (Art. 261 §1º)',
    difficulty: 'Médio',
    statement: 'Para o condutor que exerce atividade remunerada (EAR) ao veículo, qual é o limite de pontos acumulados em 12 meses para a aplicação da penalidade de suspensão do direito de dirigir?',
    lawReference: 'Art. 261, § 5º e I, II, III do CTB',
    bancaTag: 'Vunesp / Avalia',
    options: [
      { letter: 'A', text: '20 pontos, independentemente de infração gravíssima.' },
      { letter: 'B', text: '30 pontos, se cometer mais de uma infração gravíssima.' },
      { letter: 'C', text: '40 pontos, independentemente da natureza das infrações cometidas.' },
      { letter: 'D', text: '50 pontos, desde que não cometa crime de trânsito.' },
      { letter: 'E', text: '35 pontos, com redução de 5 pontos por ano sem infração.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'Segundo o Art. 261, parágrafo único e § 5º do CTB, para o condutor que exerce atividade remunerada (EAR) em veículo automotor, a suspensão por pontuação ocorrerá APENAS quando atingir 40 PONTOS, independentemente da gravidade das infrações cometidas.',
    explanations: {
      A: 'INCORRETA. Para EAR o teto é 40 pontos.',
      B: 'INCORRETA. Não há redução para 30 pontos no caso do motorista EAR.',
      C: 'CORRETA. Art. 261: O condutor EAR possui teto fixo de 40 pontos sem importar a quantidade de gravíssimas.',
      D: 'INCORRETA. O CTB não prevê limite de 50 pontos.',
      E: 'INCORRETA. Não existe essa previsão no CTB.'
    }
  },
  {
    id: 'ctb-q10',
    subjectId: 'ctb',
    topic: 'Exame Toxicológico e Infração (Art. 165-B)',
    difficulty: 'Difícil',
    statement: 'Dirigir veículo para o qual se exija habilitação nas categorias C, D ou E sem realizar o exame toxicológico periódico após 30 dias do vencimento do prazo estabelecido constitui infração:',
    lawReference: 'Art. 165-B do CTB',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'Grave, com multa (3x) e retenção do veículo.' },
      { letter: 'B', text: 'Gravíssima, com multa (5x) e suspensão do direito de dirigir por 3 meses.' },
      { letter: 'C', text: 'Gravíssima, com multa (5x) e recolhimento do veículo.' },
      { letter: 'D', text: 'Média, com multa simples e retenção da CNH.' },
      { letter: 'E', text: 'Gravíssima, com multa (10x) e cassação imediata da CNH.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'O Art. 165-B do CTB disciplina a infração do Exame Toxicológico vencido há mais de 30 dias para categorias C, D e E: Infração GRAVÍSSIMA, penalidade de Multa (5 vezes) e Suspensão do direito de dirigir por 3 (três) meses, condicionada a liberação à comprovação de resultado negativo.',
    explanations: {
      A: 'INCORRETA. Não é infração grave.',
      B: 'CORRETA. Art. 165-B do CTB: Infração Gravíssima, Multa (5x) e Suspensão do direito de dirigir por 3 meses.',
      C: 'INCORRETA. O valor do multiplicador é 5x, mas a penalidade correta é a suspensão por 3 meses.',
      D: 'INCORRETA. Não é infração média.',
      E: 'INCORRETA. Não gera cassação imediata nem tem multiplicador de 10x.'
    }
  },
  {
    id: 'ctb-q11',
    subjectId: 'ctb',
    topic: 'Validade da CNH por Faixa Etária (Art. 147)',
    difficulty: 'Fácil',
    statement: 'Conforme a redação do Art. 147, § 2º do CTB, a validade do exame de aptidão física e mental para renovação da CNH será de:',
    lawReference: 'Art. 147, § 2º do CTB',
    bancaTag: 'Vunesp / Avalia',
    options: [
      { letter: 'A', text: '10 anos para condutores com idade inferior a 50 anos; 5 anos para condutores de 50 a 69 anos; 3 anos para condutores com 70 anos ou mais.' },
      { letter: 'B', text: '5 anos para todos os condutores com até 65 anos de idade.' },
      { letter: 'C', text: '10 anos para condutores com idade até 60 anos e 5 anos para mais de 60 anos.' },
      { letter: 'D', text: '5 anos para condutores até 50 anos e 2 anos para maiores de 70 anos.' },
      { letter: 'E', text: '10 anos para condutores com idade até 40 anos e 3 anos para maiores de 60 anos.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Art. 147, § 2º do CTB - Prazos de renovação da CNH:\n- 10 ANOS: para condutores com idade inferior a 50 anos;\n- 5 ANOS: para condutores com idade igual ou superior a 50 anos e inferior a 70 anos;\n- 3 ANOS: para condutores com idade igual ou superior a 70 anos.',
    explanations: {
      A: 'CORRETA. Regra exata: 10 anos (<50 anos), 5 anos (50 a 69 anos) e 3 anos (>=70 anos).',
      B: 'INCORRETA. Desconsidera as faixas etárias de 10 anos introduzidas na legislação recente.',
      C: 'INCORRETA. O marco da regra de 10 anos é inferior a 50 anos, não 60.',
      D: 'INCORRETA. Valores divergentes do CTB.',
      E: 'INCORRETA. A faixa etária inicial é inferior a 50 anos.'
    }
  },
  {
    id: 'ctb-q12',
    subjectId: 'ctb',
    topic: 'Categorias de Habilitação (Art. 143)',
    difficulty: 'Médio',
    statement: 'Um motorista deseja conduzir um veículo motorizado utilizado no transporte de passageiros com capacidade SUPERIOR a 8 (oito) lugares, excluído o do condutor. Para isso, necessita ser habilitado na categoria mínima:',
    lawReference: 'Art. 143, IV do CTB',
    bancaTag: 'FCC / DETRAN-SP',
    options: [
      { letter: 'A', text: 'Categoria C.' },
      { letter: 'B', text: 'Categoria B.' },
      { letter: 'C', text: 'Categoria D.' },
      { letter: 'D', text: 'Categoria E.' },
      { letter: 'E', text: 'Categoria A.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'Art. 143, IV do CTB: Categoria D - condutor de veículo motorizado utilizado no transporte de PASSAGEIROS, cuja lotação exceda a 8 (oito) lugares, excluído o do condutor (ex: vans de passageiros, micro-ônibus, ônibus).',
    explanations: {
      A: 'INCORRETA. Categoria C destina-se a transporte de CARGA com PBT > 3.500 kg.',
      B: 'INCORRETA. Categoria B limita-se a transporte de passageiros com até 8 lugares excluído o condutor.',
      C: 'CORRETA. Art. 143, IV: Categoria D é exigida para transporte de passageiros > 8 lugares.',
      D: 'INCORRETA. Categoria E aplica-se a combinação de veículos articulados ou acoplados.',
      E: 'INCORRETA. Categoria A é para veículos de 2 ou 3 rodas.'
    }
  },
  {
    id: 'ctb-q13',
    subjectId: 'ctb',
    topic: 'Requisitos para Mudança de Categoria CNH (Art. 145)',
    difficulty: 'Difícil',
    statement: 'Para habilitar-se na Categoria D, o condutor deve preencher os seguintes requisitos previstos no Art. 145 do CTB, EXCETO:',
    lawReference: 'Art. 145 do CTB',
    bancaTag: 'Vunesp / Avalia',
    options: [
      { letter: 'A', text: 'Estar habilitado no mínimo há 2 (dois) anos na Categoria B ou há no mínimo 1 (um) ano na Categoria C.' },
      { letter: 'B', text: 'Ser maior de 21 (vinte e um) anos.' },
      { letter: 'C', text: 'Não ter cometido mais de uma infração gravíssima nos últimos 12 (doze) meses.' },
      { letter: 'D', text: 'Ter sido aprovado em curso especializado de transporte de passageiros.' },
      { letter: 'E', text: 'Estar habilitado no mínimo há 3 (três) anos na Categoria A.' }
    ],
    correctLetter: 'E',
    generalExplanation: 'Para obter a Categoria D, a pessoa deve ter pelo menos 21 anos, estar habilitada há pelo menos 2 anos na B ou 1 ano na C, e não ter cometido mais de 1 infração gravíssima nos últimos 12 meses. O tempo de Categoria A é irrelevante para a Categoria D.',
    explanations: {
      A: 'REQUISITO VERDADEIRO. Art. 145, I do CTB.',
      B: 'REQUISITO VERDADEIRO. Art. 145, I (ser maior de 21 anos).',
      C: 'REQUISITO VERDADEIRO. Art. 145, III (não ter cometido mais de uma gravíssima nos últimos 12 meses).',
      D: 'REQUISITO VERDADEIRO. Art. 145, IV (curso de especialização).',
      E: 'EXCEÇÃO / OPCÃO INCORRETA. Estar na Categoria A não é pré-requisito para habilitação na Categoria D.'
    }
  },
  {
    id: 'ctb-q14',
    subjectId: 'ctb',
    topic: 'Preferência em Interseções não Sinalizadas (Art. 29)',
    difficulty: 'Fácil',
    statement: 'Quando veículos, transitando por fluxos que se cruzam, se aproximarem de local não sinalizado, terá preferência de passagem:',
    lawReference: 'Art. 29, III do CTB',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'No caso de apenas um fluxo ser proveniente de rodovia, aquele que estiver saindo dela.' },
      { letter: 'B', text: 'No caso de rotatória, aquele que estiver entrando nela.' },
      { letter: 'C', text: 'Nos demais casos, o que vier pela direita do condutor.' },
      { letter: 'D', text: 'Nos demais casos, o veículo de maior porte sobre o de menor porte.' },
      { letter: 'E', text: 'O veículo que estiver desenvolvendo maior velocidade.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'Conforme o Art. 29, III do CTB:\na) no caso de rodovia, tem preferência quem transita por ela;\nb) no caso de rotatória, quem estiver circulando por ela;\nc) nos demais casos, quem vier pela DIREITA do condutor.',
    explanations: {
      A: 'INCORRETA. A preferência é de quem transita na rodovia, e não de quem está saindo.',
      B: 'INCORRETA. Na rotatória, a preferência é de quem já está circulando nela.',
      C: 'CORRETA. Art. 29, III, "c": Nos cruzamentos não sinalizados, a preferência é do veículo que vem pela direita.',
      D: 'INCORRETA. Porte do veículo estabelece dever de responsabilidade pela segurança, não preferência direta de passagem.',
      E: 'INCORRETA. Velocidade não confere preferência.'
    }
  },
  {
    id: 'ctb-q15',
    subjectId: 'ctb',
    topic: 'Uso de Luzes e Faróis (Art. 40)',
    difficulty: 'Médio',
    statement: 'Sobre as regras de uso de luzes em veículos automotores previstas no Art. 40 do CTB, assinale a alternativa CORRETA:',
    lawReference: 'Art. 40 do CTB',
    bancaTag: 'FCC / Avalia',
    options: [
      { letter: 'A', text: 'O condutor manterá acesos os faróis do veículo, utilizando luz baixa, durante a noite e durante o dia nas rodovias de pista simples fora dos perímetros urbanos.' },
      { letter: 'B', text: 'O uso de luz alta é obrigatório em vias providas de iluminação pública.' },
      { letter: 'C', text: 'As motocicletas devem utilizar luz baixa apenas durante a noite.' },
      { letter: 'D', text: 'O pisca-alerta deve ser utilizado em trânsito normal sempre que houver neblina ou cerração.' },
      { letter: 'E', text: 'Os veículos de transporte coletivo de passageiros não precisam acender luzes de dia.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Com a alteração da Lei 14.071/20, a obrigatoriedade da luz baixa durante o dia em rodovias aplica-se às RODOVIAS DE PISTA SIMPLES localizadas FORA DOS PERÍMETROS URBANOS (Art. 40, I, "b"). Veículos de transporte coletivo e motocicletas devem usar luz baixa de dia em qualquer via.',
    explanations: {
      A: 'CORRETA. Redação atualizada do Art. 40, I, "b" do CTB.',
      B: 'INCORRETA. Em vias com iluminação pública deve-se usar luz baixa.',
      C: 'INCORRETA. Motocicletas devem manter luz baixa acesa de dia e de noite.',
      D: 'INCORRETA. O pisca-alerta é para imobilizações, emergências ou quando a sinalização determinar.',
      E: 'INCORRETA. Devem manter luz baixa acesa de dia em faixas próprias.'
    }
  },
  {
    id: 'ctb-q16',
    subjectId: 'ctb',
    topic: 'Uso da Buzina (Art. 41)',
    difficulty: 'Fácil',
    statement: 'O condutor de veículo só poderá fazer uso da buzina, desde que em toque breve, nas seguintes situações previstas no CTB:',
    lawReference: 'Art. 41 do CTB',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Para apressar o pedestre na travessia e em qualquer horário.' },
      { letter: 'B', text: 'Para advertir outro condutor quando for necessário evitar acidentes ou fora das áreas urbanas, quando for conveniente advertir a um condutor que se tem o propósito de ultrapassá-lo.' },
      { letter: 'C', text: 'Para saudar conhecidos na via pública e em frente a hospitais.' },
      { letter: 'D', text: 'Em trocas de sinal de trânsito para alertar sobre a luz verde.' },
      { letter: 'E', text: 'Entre 22 horas e 6 horas em vias urbanas coletoras.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Art. 41 do CTB: O condutor só poderá buzinar, em toque breve: I - para evitar acidentes; II - fora de áreas urbanas, para advertir intenção de ultrapassar. É proibido buzinar entre 22h e 6h ou em locais com sinalização de proibição.',
    explanations: {
      A: 'INCORRETA. É proibido buzinar para pedestres.',
      B: 'CORRETA. Art. 41, I e II do CTB.',
      C: 'INCORRETA. Infração de trânsito.',
      D: 'INCORRETA. Uso indevido da buzina.',
      E: 'INCORRETA. Proibido buzinar entre 22h e 6h.'
    }
  },
  {
    id: 'ctb-q17',
    subjectId: 'ctb',
    topic: 'Transporte de Crianças em Motocicleta (Art. 244, V)',
    difficulty: 'Difícil',
    statement: 'Conduzir motocicleta, motoneta ou ciclomotor transportando criança que não tenha condições de cuidar da própria segurança ou menor de X anos constitui infração gravíssima com suspensão do direito de dirigir. Qual é a idade mínima X fixada pela Lei 14.071/20 no Art. 244, V do CTB?',
    lawReference: 'Art. 244, V do CTB',
    bancaTag: 'Avalia / DETRAN-SP 2026',
    options: [
      { letter: 'A', text: '7 anos.' },
      { letter: 'B', text: '10 anos.' },
      { letter: 'C', text: '12 anos.' },
      { letter: 'D', text: '8 anos.' },
      { letter: 'E', text: '5 anos.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'A Lei nº 14.071/2020 alterou a idade mínima para transporte de crianças na garupa de motocicletas do Art. 244, V do CTB de 7 para 10 ANOS. Transportar menor de 10 anos em moto é infração Gravíssima com suspensão direta da CNH.',
    explanations: {
      A: 'INCORRETA. 7 anos era o limite da lei antiga (anterior a 2021).',
      B: 'CORRETA. Art. 244, V do CTB atualizado: menor de 10 anos é infração gravíssima com suspensão.',
      C: 'INCORRETA. 12 anos não é a idade disposta no Art. 244.',
      D: 'INCORRETA. Não é a idade legal.',
      E: 'INCORRETA. Valor incorreto.'
    }
  },
  {
    id: 'ctb-q18',
    subjectId: 'ctb',
    topic: 'Recusa ao Teste do Etilômetro (Art. 165-A)',
    difficulty: 'Médio',
    statement: 'Recusar-se a ser submetido a teste, exame clínico, perícia ou outro procedimento que permita certificar influência de álcool ou outra substância psicoativa no organismo acarreta as seguintes sanções previstas no Art. 165-A do CTB:',
    lawReference: 'Art. 165-A do CTB',
    bancaTag: 'Vunesp / FCC',
    options: [
      { letter: 'A', text: 'Infração grave, multa (3x) e retenção do veículo apenas.' },
      { letter: 'B', text: 'Infração gravíssima, penalidade de multa (10x) e suspensão do direito de dirigir por 12 meses.' },
      { letter: 'C', text: 'Crime de trânsito inafiançável com pena de reclusão de 1 a 3 anos.' },
      { letter: 'D', text: 'Infração média com perda de 4 pontos e recolhimento imediato do veículo.' },
      { letter: 'E', text: 'Nenhuma sanção, por força do princípio de não produzir prova contra si mesmo no âmbito administrativo.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Art. 165-A do CTB: A recusa ao teste do etilômetro é infração GRAVÍSSIMA, com penalidade de Multa (10 vezes = R$ 2.934,70) e Suspensão do Direito de Dirigir por 12 meses (mesma sanção do Art. 165). O STF confirmou a constitucionalidade desta sanção administrativa.',
    explanations: {
      A: 'INCORRETA. A infração é gravíssima com multiplicador 10x.',
      B: 'CORRETA. Art. 165-A: Gravíssima, Multa (10x) e Suspensão da CNH por 12 meses.',
      C: 'INCORRETA. A recusa em si é infração administrativa, não crime autônomo (o crime do Art. 306 exige prova da alteração da capacidade psicomotora).',
      D: 'INCORRETA. Não é infração média.',
      E: 'INCORRETA. O STF já pacificou a validade das sanções administrativas da recusa.'
    }
  },
  {
    id: 'ctb-q19',
    subjectId: 'ctb',
    topic: 'Infração por Celular ao Volante (Art. 252)',
    difficulty: 'Fácil',
    statement: 'Manusear ou segurar telefone celular enquanto conduz veículo automotor é classificado pelo CTB como infração de natureza:',
    lawReference: 'Art. 252, parágrafo único do CTB',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Leve (3 pontos).' },
      { letter: 'B', text: 'Média (4 pontos).' },
      { letter: 'C', text: 'Grave (5 pontos).' },
      { letter: 'D', text: 'Gravíssima (7 pontos).' },
      { letter: 'E', text: 'Gravíssima com multiplicador de 3 vezes.' }
    ],
    correctLetter: 'D',
    generalExplanation: 'O Art. 252, parágrafo único do CTB estabelece que a hipótese de segurar ou manusear telefone celular ao conduzir veículo é infração GRAVÍSSIMA (7 pontos na CNH).',
    explanations: {
      A: 'INCORRETA. Não é leve.',
      B: 'INCORRETA. Falar ao celular usando fone era médio, mas manusear/segurar é gravíssima.',
      C: 'INCORRETA. Não é grave.',
      D: 'CORRETA. Art. 252, parágrafo único: Infração GRAVÍSSIMA (7 pontos).',
      E: 'INCORRETA. Não tem fator multiplicador.'
    }
  },
  {
    id: 'ctb-q20',
    subjectId: 'ctb',
    topic: 'Ultrapassagem Indevida (Art. 203)',
    difficulty: 'Médio',
    statement: 'Ultrapassar outro veículo pela contramão em linhas duplas contínuas amarelas é infração gravíssima. Qual é o valor do fator multiplicador aplicado à multa dessa infração (Art. 203, V do CTB)?',
    lawReference: 'Art. 203, V do CTB',
    bancaTag: 'FCC / DETRAN-SP',
    options: [
      { letter: 'A', text: 'Multa (2 vezes).' },
      { letter: 'B', text: 'Multa (3 vezes).' },
      { letter: 'C', text: 'Multa (5 vezes).' },
      { letter: 'D', text: 'Multa (10 vezes).' },
      { letter: 'E', text: 'Multa simples sem multiplicador.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'O Art. 203 do CTB prevê que ultrapassar pela contramão em locais proibidos (linha contínua, curvas, pontes, viadutos, faixa de pedestres) é infração Gravíssima com penalidade de Multa (5 vezes). Em caso de reincidência no período de 12 meses, aplica-se o dobro (10 vezes).',
    explanations: {
      A: 'INCORRETA. Não é 2x.',
      B: 'INCORRETA. Não é 3x.',
      C: 'CORRETA. Art. 203 do CTB: Fator multiplicador de 5 vezes na multa gravíssima.',
      D: 'INCORRETA. 10x aplica-se em caso de reincidência específica no período de 12 meses.',
      E: 'INCORRETA. Há fator multiplicador legal de 5x.'
    }
  },
  {
    id: 'ctb-q21',
    subjectId: 'ctb',
    topic: 'Competência do DETRAN (Art. 22)',
    difficulty: 'Fácil',
    statement: 'Compete aos órgãos ou entidades executivos de trânsito dos Estados e do Distrito Federal (DETRAN), no âmbito de sua jurisdição, EXCETO:',
    lawReference: 'Art. 22 do CTB',
    bancaTag: 'Vunesp / Avalia',
    options: [
      { letter: 'A', text: 'Vistoriar, registrar, emplacar e licenciar veículos.' },
      { letter: 'B', text: 'Realizar, fiscalizar e ministrar cursos de formação de condutores.' },
      { letter: 'C', text: 'Expedir e cassar a Carteira Nacional de Habilitação (CNH).' },
      { letter: 'D', text: 'Estabelecer as normas regulamentares das diretrizes da Política Nacional de Trânsito no âmbito de todo o território brasileiro.' },
      { letter: 'E', text: 'Aplicar penalidades de suspensão e cassação do direito de dirigir.' }
    ],
    correctLetter: 'D',
    generalExplanation: 'Estabelecer as normas regulamentares do CTB e as diretrizes da Política Nacional de Trânsito para TODO o território nacional é competência do CONTRAN (Conselho Nacional de Trânsito - órgão normativo e consultivo da União - Art. 12, I). O DETRAN é órgão executivo estadual.',
    explanations: {
      A: 'COMPETÊNCIA DO DETRAN. Art. 22, III.',
      B: 'COMPETÊNCIA DO DETRAN. Art. 22, II.',
      C: 'COMPETÊNCIA DO DETRAN. Art. 22, II e IV.',
      D: 'EXCEÇÃO / RESPOSTA CORRETA. Função normativa nacional exclusiva do CONTRAN (Art. 12).',
      E: 'COMPETÊNCIA DO DETRAN. Art. 22, V.'
    }
  },
  {
    id: 'ctb-q22',
    subjectId: 'ctb',
    topic: 'Sistema Nacional de Trânsito - JARI (Art. 16 e 17)',
    difficulty: 'Médio',
    statement: 'Junto a cada órgão ou entidade executiva de trânsito ou rodoviário funcionam as Juntas Administrativas de Recursos de Infrações (JARI). Sobre a JARI, assinale a afirmativa CORRETA:',
    lawReference: 'Arts. 16 e 17 do CTB',
    bancaTag: 'FCC / Vunesp',
    options: [
      { letter: 'A', text: 'Trata-se de órgão normativo que elabora as resoluções estaduais de trânsito.' },
      { letter: 'B', text: 'É órgão colegiado responsável pelo julgamento dos recursos interpostos contra penalidades aplicadas pelos órgãos executivos de trânsito.' },
      { letter: 'C', text: 'É subordinada hierarquicamente ao Prefeito Municipal em todas as decisões.' },
      { letter: 'D', text: 'Não possui autonomia de julgamento, apenas encaminha pareceres ao CETRAN.' },
      { letter: 'E', text: 'Julga apenas processos de cassação de CNH em 1ª e única instância.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Art. 16 e 17 do CTB: As JARI são órgãos colegiados executivos que funcionam junto aos órgãos de trânsito, com autonomia de julgamento, competentes para julgar os recursos interpostos pelos infratores em 1ª instância administrativa.',
    explanations: {
      A: 'INCORRETA. JARI não é órgão normativo.',
      B: 'CORRETA. Art. 16 e 17: Órgão colegiado que julga recursos de multas/penalidades em 1ª instância.',
      C: 'INCORRETA. Tem autonomia administrativa e de julgamento.',
      D: 'INCORRETA. Possui autonomia para prover ou negar provimento a recursos.',
      E: 'INCORRETA. Julga recursos contra todas as penalidades aplicadas pelo órgão.'
    }
  },
  {
    id: 'ctb-q23',
    subjectId: 'ctb',
    topic: 'Crime de Homicídio Culposo no Trânsito (Art. 302)',
    difficulty: 'Difícil',
    statement: 'No crime de Homicídio Culposo na direção de veículo automotor (Art. 302 do CTB), a pena é AUMENTADA de 1/3 (um terço) à metade se o agente:',
    lawReference: 'Art. 302, § 1º do CTB',
    bancaTag: 'Vunesp / Avalia',
    options: [
      { letter: 'A', text: 'Estiver conduzindo veículo com mais de 5 anos de fabricação.' },
      { letter: 'B', text: 'Não possuir Permissão para Dirigir ou Carteira de Habilitação.' },
      { letter: 'C', text: 'Cometer o crime em dia chuvoso ou com neblina.' },
      { letter: 'D', text: 'Estiver com o licenciamento do veículo atrasado.' },
      { letter: 'E', text: 'For réu primário e confessar espontaneamente o fato.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Art. 302, § 1º, I do CTB: No homicídio culposo ao volante, a pena é aumentada de 1/3 à metade se o condutor:\nI - não possuir CNH ou PPD;\nII - praticá-lo em faixa de pedestres ou calçada;\nIII - deixar de prestar socorro quando possível;\nIV - no exercício de profissão/atividade de transporte de passageiros.',
    explanations: {
      A: 'INCORRETA. Idade do veículo não é causa de aumento de pena.',
      B: 'CORRETA. Art. 302, § 1º, I: Não possuir CNH ou PPD é causa de aumento de pena.',
      C: 'INCORRETA. Condição climática não consta no § 1º.',
      D: 'INCORRETA. Irregularidade administrativa de licenciamento não é causa de aumento penal.',
      E: 'INCORRETA. Confissão e primariedade são atenuantes genéricas do CP.'
    }
  },
  {
    id: 'ctb-q24',
    subjectId: 'ctb',
    topic: 'Crime de Omissão de Socorro no Trânsito (Art. 304)',
    difficulty: 'Médio',
    statement: 'Deixar o condutor do veículo, na ocasião do acidente, de prestar imediato socorro à vítima, ou, não podendo fazê-lo diretamente, por justa causa, deixar de solicitar auxílio da autoridade pública configura crime previsto no Art. 304 do CTB. Incide nesse crime o condutor:',
    lawReference: 'Art. 304 do CTB e Parágrafo Único',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: 'Mesmo que a sua omissão seja suprida por terceiros ou que se trate de vítima com morte instantânea ou ferimentos leves (conforme parágrafo único).' },
      { letter: 'B', text: 'Apenas se o acidente tiver sido provocado exclusivamente por culpa sua.' },
      { letter: 'C', text: 'Somente se houver testemunhas presenciais no momento da colisão.' },
      { letter: 'D', text: 'Apenas quando a vítima for criança ou idoso.' },
      { letter: 'E', text: 'Exceto se ele fugir para não ser preso em flagrante delito.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Art. 304, parágrafo único do CTB: Nas mesmas penas do crime de omissão de socorro incide o condutor do veículo ainda que a sua omissão seja suprida por terceiros ou que se trate de vítima com morte instantânea ou ferimentos leves.',
    explanations: {
      A: 'CORRETA. Texto expresso do parágrafo único do Art. 304 do CTB.',
      B: 'INCORRETA. O dever de socorrer independe de quem causou o acidente.',
      C: 'INCORRETA. A existência de testemunhas não afasta a tipicidade do crime.',
      D: 'INCORRETA. Aplica-se a qualquer vítima de acidente de trânsito.',
      E: 'INCORRETA. Fugir para evitar prisão em flagrante constitui outro tipo de infração/crime (Art. 305).'
    }
  },
  {
    id: 'ctb-q25',
    subjectId: 'ctb',
    topic: 'Dirigir sem Habilitação Gerando Perigo de Dano (Art. 309)',
    difficulty: 'Difícil',
    statement: 'Dirigir veículo automotor, em via pública, sem a devida Permissão para Dirigir ou Habilitação ou, ainda, se cassado o direito de dirigir, gerando perigo de dano (Art. 309 do CTB) configura:',
    lawReference: 'Art. 309 do CTB e Súmula 98 do STJ',
    bancaTag: 'Vunesp / Avalia',
    options: [
      { letter: 'A', text: 'Crime de perigo abstrato, não necessitando de comprovação de perigo real.' },
      { letter: 'B', text: 'Infração exclusivamente administrativa, sem repercussão penal.' },
      { letter: 'C', text: 'Crime de perigo concreto, exigindo a demonstração efetiva de perigo de dano à incolumidade pública ou privada.' },
      { letter: 'D', text: 'Contravenção penal punida apenas com pena pecuniária.' },
      { letter: 'E', text: 'Crime inafiançável com pena de reclusão de 4 a 8 anos.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'O crime do Art. 309 do CTB é de PERIGO CONCRETO. É indispensável demonstrar que a conduta de dirigir sem CNH gerou perigo real de dano (ex: dirigindo em zigue-zague, subindo na calçada, quase atropelando alguém). Se dirigir sem CNH de forma regular sem gerar perigo, é apenas a infração administrativa do Art. 162, I.',
    explanations: {
      A: 'INCORRETA. Não é de perigo abstrato; a lei exige expressamente "gerando perigo de dano".',
      B: 'INCORRETA. Se gerar perigo de dano, constitui crime do Art. 309.',
      C: 'CORRETA. Crime de perigo concreto que exige a comprovação da situação de risco gerada.',
      D: 'INCORRETA. Trata-se de crime de menor potencial ofensivo (detenção de 6 meses a 1 ano ou multa).',
      E: 'INCORRETA. A pena é de detenção de 6 meses a 1 ano ou multa.'
    }
  },
  {
    id: 'ctb-q26',
    subjectId: 'ctb',
    topic: 'Prazos para Notificação da Autuação (Art. 281)',
    difficulty: 'Médio',
    statement: 'No processo administrativo de trânsito, se a Notificação da Autuação não for expedida no prazo máximo legal a contar da data da infração, o Auto de Infração será arquivado e seu auto julgado insubsistente. Qual é este prazo improrrogável estabelecido pelo Art. 281, II do CTB?',
    lawReference: 'Art. 281, parágrafo único, II do CTB',
    bancaTag: 'FCC / DETRAN-SP',
    options: [
      { letter: 'A', text: '15 (quinze) dias.' },
      { letter: 'B', text: '30 (trinta) dias.' },
      { letter: 'C', text: '60 (sessenta) dias.' },
      { letter: 'D', text: '90 (noventa) dias.' },
      { letter: 'E', text: '180 (cento e oitenta) dias.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Art. 281, parágrafo único, II do CTB: O auto de infração será arquivado e seu auto julgado insubsistente se, no prazo máximo de 30 (TRINTA) DIAS, não for expedida a notificação da autuação.',
    explanations: {
      A: 'INCORRETA. O prazo legal é de 30 dias.',
      B: 'CORRETA. Art. 281, II: Expedição da Notificação da Autuação no prazo máximo de 30 dias.',
      C: 'INCORRETA. Prazo incorreto.',
      D: 'INCORRETA. 90 dias é o prazo para aplicação de penalidade em casos sem defesa prévia.',
      E: 'INCORRETA. Prazo de prescrição intercorrente ou aplicação em casos com defesa prévia.'
    }
  },
  {
    id: 'ctb-q27',
    subjectId: 'ctb',
    topic: 'Diferença entre Penalidade e Medida Administrativa',
    difficulty: 'Médio',
    statement: 'No Código de Trânsito Brasileiro, as sanções dividem-se em Penalidades e Medidas Administrativas. Assinale a opção que apresenta exclusivamente MEDIDAS ADMINISTRATIVAS (Arts. 269 a 279 do CTB):',
    lawReference: 'Art. 269 do CTB',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Multa, Suspensão do Direito de Dirigir e Cassação da CNH.' },
      { letter: 'B', text: 'Retenção do Veículo, Remoção do Veículo e Recolhimento da CNH.' },
      { letter: 'C', text: 'Advertência por Escrito, Frequência em Curso de Reciclagem e Multa.' },
      { letter: 'D', text: 'Cassação da PPD, Multa e Recolhimento do CRLV.' },
      { letter: 'E', text: 'Prestação de Serviços à Comunidade, Multa e Retenção do Veículo.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Mnemônico fundamental de concurso:\n- MEDIDAS ADMINISTRATIVAS começam em geral com a letra "R" ou "T" (Retenção, Remoção, Recolhimento, Transbordo, Teste de etilômetro).\n- PENALIDADES (Art. 256) são aplicadas pela Autoridade de Trânsito (Multa, Suspensão, Cassação, Advertência por escrito, Frequência obrigatória em curso de reciclagem).',
    explanations: {
      A: 'INCORRETA. São todas penalidades.',
      B: 'CORRETA. Retenção, Remoção e Recolhimento são medidas administrativas (Art. 269).',
      C: 'INCORRETA. São todas penalidades.',
      D: 'INCORRETA. Cassação e Multa são penalidades.',
      E: 'INCORRETA. Prestação de serviços é pena criminal; multa é penalidade administrativa.'
    }
  },
  {
    id: 'ctb-q28',
    subjectId: 'ctb',
    topic: 'Remoção de Veículo e Cobrança de Estadia (Art. 271)',
    difficulty: 'Difícil',
    statement: 'A medida administrativa de remoção do veículo (Art. 271 do CTB) será realizada por meio de guincho para o depósito fixado pelo órgão de trânsito. O pagamento das despesas de remoção e estada será exigido:',
    lawReference: 'Art. 271, § 1º e § 10 do CTB',
    bancaTag: 'Avalia / DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'Para a restituição do veículo, limitada a cobrança de estada ao prazo máximo de 6 (seis) meses.' },
      { letter: 'B', text: 'Apenas após a decisão final transitada em julgado do recurso administrativo.' },
      { letter: 'C', text: 'Sem qualquer limite máximo de dias de permanência no depósito.' },
      { letter: 'D', text: 'Exclusivamente se o condutor for reincidente na mesma infração.' },
      { letter: 'E', text: 'Limitada a cobrança de estada a no máximo 30 (trinta) dias.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Art. 271, § 1º e § 10 do CTB: A restituição dos veículos removidos só ocorrerá mediante prévio pagamento das multas, taxas e despesas com remoção e estada, sendo que a cobrança das despesas de estada é LIMITADA AO PRAZO MÁXIMO DE 6 (SEIS) MESES.',
    explanations: {
      A: 'CORRETA. Art. 271, § 10 do CTB: Teto legal máximo de cobrança de diárias de estada é de 6 meses.',
      B: 'INCORRETA. A restituição exige pagamento prévio para liberação imediata do veículo.',
      C: 'INCORRETA. Há limite de cobrança fixado em 6 meses.',
      D: 'INCORRETA. Aplica-se a qualquer veículo removido.',
      E: 'INCORRETA. O limite legal no CTB é de 6 meses.'
    }
  },
  {
    id: 'ctb-q29',
    subjectId: 'ctb',
    topic: 'Transferência de Propriedade de Veículo (Art. 123)',
    difficulty: 'Fácil',
    statement: 'No caso de transferência de propriedade de veículo usado, o novo proprietário deverá adotar as providências necessárias à efetivação da expedição do novo Certificado de Registro de Veículo (CRV) no prazo máximo de:',
    lawReference: 'Art. 123, § 1º do CTB',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: '15 (quinze) dias.' },
      { letter: 'B', text: '30 (trinta) dias.' },
      { letter: 'C', text: '60 (sessenta) dias.' },
      { letter: 'D', text: '45 (quarenta e cinco) dias.' },
      { letter: 'E', text: '90 (noventa) dias.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Art. 123, § 1º do CTB: No caso de transferência de propriedade, o prazo para o proprietário adotar as providências necessárias à expedição do novo CRV é de 30 (TRINTA) DIAS. O descumprimento gera infração média (Art. 233).',
    explanations: {
      A: 'INCORRETA. O prazo é de 30 dias.',
      B: 'CORRETA. Art. 123, § 1º: Prazo legal de 30 dias.',
      C: 'INCORRETA. Prazo excessivo.',
      D: 'INCORRETA. Não previsto no CTB.',
      E: 'INCORRETA. Prazo incorreto.'
    }
  },
  {
    id: 'ctb-q30',
    subjectId: 'ctb',
    topic: 'Equipamentos Obrigatórios (Art. 105)',
    difficulty: 'Médio',
    statement: 'São equipamentos obrigatórios dos veículos, entre outros a serem estabelecidos pelo CONTRAN, EXCETO:',
    lawReference: 'Art. 105 do CTB',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: 'Cinto de segurança, para todos os ocupantes do veículo.' },
      { letter: 'B', text: 'Registrador instantâneo inalterável de velocidade e tempo (tacógrafo), para veículos de transporte escolar e de carga com PBT > 4.536 kg.' },
      { letter: 'C', text: 'Encosto de cabeça, para todos os tipos de veículos automotores, segundo normas do CONTRAN.' },
      { letter: 'D', text: 'Extintor de incêndio obrigatório para todos os veículos de passeio particulares.' },
      { letter: 'E', text: 'Dispositivo destinado ao controle de emissão de gases poluentes e de ruído.' }
    ],
    correctLetter: 'D',
    generalExplanation: 'Pela Resolução CONTRAN nº 556/2015 e atualização do Art. 105, o extintor de incêndio tornou-se FACULTATIVO para automóveis de passeio, utilitários, camionetas e caminhonetes particulares. Permanece obrigatório apenas para veículos de transporte coletivo de passageiros, caminhões, caminhão-trator e escolares.',
    explanations: {
      A: 'EQUIPAMENTO OBRIGATÓRIO. Art. 105, I.',
      B: 'EQUIPAMENTO OBRIGATÓRIO. Art. 105, II.',
      C: 'EQUIPAMENTO OBRIGATÓRIO. Art. 105, III.',
      D: 'EXCEÇÃO / OPCÃO CORRETA. O extintor tornou-se opcional/facultativo para carros de passeio particulares.',
      E: 'EQUIPAMENTO OBRIGATÓRIO. Art. 105, V.'
    }
  },
  {
    id: 'ctb-q31',
    subjectId: 'ctb',
    topic: 'Condução de Veículo Escolar (Art. 136 e 138)',
    difficulty: 'Difícil',
    statement: 'Para conduzir veículos destinados à condução de escolares, o condutor deverá preencher requisitos especiais previstos no Art. 138 do CTB. Assinale a alternativa que NÃO apresenta um desses requisitos:',
    lawReference: 'Art. 138 do CTB',
    bancaTag: 'Vunesp / Avalia',
    options: [
      { letter: 'A', text: 'Ter idade superior a 21 (vinte e um) anos.' },
      { letter: 'B', text: 'Ser habilitado na Categoria D.' },
      { letter: 'C', text: 'Não ter cometido nenhuma infração gravíssima nos últimos 12 (doze) meses.' },
      { letter: 'D', text: 'Ser aprovado em curso especializado de transporte escolar.' },
      { letter: 'E', text: 'Ter pelo menos 5 (cinco) anos de habilitação na Categoria B.' }
    ],
    correctLetter: 'E',
    generalExplanation: 'Requisitos do Art. 138 do CTB para condutor de escolar:\n1) Ter idade superior a 21 anos;\n2) Ser habilitado na Categoria D;\n3) Não ter cometido mais de uma infração gravíssima nos últimos 12 meses;\n4) Ser aprovado em curso especializado.\nNão existe exigência de "5 anos na categoria B".',
    explanations: {
      A: 'REQUISITO VERDADEIRO. Art. 138, I.',
      B: 'REQUISITO VERDADEIRO. Art. 138, II.',
      C: 'REQUISITO VERDADEIRO. Art. 138, IV.',
      D: 'REQUISITO VERDADEIRO. Art. 138, V.',
      E: 'EXCEÇÃO / RESPOSTA CORRETA. Não há essa exigência de 5 anos na categoria B.'
    }
  },
  {
    id: 'ctb-q32',
    subjectId: 'ctb',
    topic: 'Competência da Polícia Rodoviária Federal (Art. 20)',
    difficulty: 'Fácil',
    statement: 'No âmbito das rodovias e estradas federais, a competência para realizar patrulhamento ostensivo, executar a fiscalização de trânsito e aplicar multas e medidas administrativas cabe precipuamente à:',
    lawReference: 'Art. 20 do CTB e Art. 144, § 2º da CF/88',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: 'Polícia Militar do Estado.' },
      { letter: 'B', text: 'Polícia Rodoviária Federal (PRF).' },
      { letter: 'C', text: 'Agência Nacional de Transportes Terrestres (ANTT).' },
      { letter: 'D', text: 'Guarda Municipal dos municípios lindeiros.' },
      { letter: 'E', text: 'Polícia Civil da União.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Art. 20 do CTB: Compete à Polícia Rodoviária Federal (PRF), no âmbito das rodovias e estradas FEDERAIS, realizar o patrulhamento ostensivo, fiscalizar o cumprimento das normas de trânsito e aplicar multas.',
    explanations: {
      A: 'INCORRETA. PM atua em rodovias estaduais ou mediante convênio.',
      B: 'CORRETA. Art. 20 do CTB: Atuação nas rodovias e estradas federais é da PRF.',
      C: 'INCORRETA. ANTT é agência reguladora de transporte concedido.',
      D: 'INCORRETA. Guardas atuam no âmbito das vias municipais.',
      E: 'INCORRETA. Polícia Civil é órgão de polícia judiciária e investigação.'
    }
  },
  {
    id: 'ctb-q33',
    subjectId: 'ctb',
    topic: 'Advertência por Escrito (Art. 267)',
    difficulty: 'Médio',
    statement: 'Com a redação dada pela Lei nº 14.071/2020 ao Art. 267 do CTB, a penalidade de advertência por escrito DEVERÁ ser imposta pela autoridade de trânsito quando:',
    lawReference: 'Art. 267 do CTB',
    bancaTag: 'Vunesp / Avalia',
    options: [
      { letter: 'A', text: 'O infrator cometer infração de natureza leve ou média, desde que não tenha cometido nenhuma outra infração nos últimos 12 (doze) meses.' },
      { letter: 'B', text: 'O infrator for condutor profissional EAR e cometer infração grave.' },
      { letter: 'C', text: 'O condutor confessar o cometimento da infração no prazo da Defesa Prévia.' },
      { letter: 'D', text: 'Tratar-se de primeira infração gravíssima cometida em rodovia federal.' },
      { letter: 'E', text: 'A critério puramente discricionário do agente autuador no momento do ato.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Lei 14.071/2020 alterou o Art. 267 do CTB tornando a conversão da multa em advertência por escrito OBRIGATÓRIA (vinculada): Deverá ser imposta a advertência por escrito para infração LEVE ou MÉDIA, desde que o infrator não tenha cometido nenhuma outra infração nos últimos 12 meses.',
    explanations: {
      A: 'CORRETA. Art. 267 do CTB: Conversão vinculada/obrigatória para infração leve ou média sem reincidência em 12 meses.',
      B: 'INCORRETA. Não se aplica a infrações graves.',
      C: 'INCORRETA. Confissão não é requisito nem gera conversão automática.',
      D: 'INCORRETA. Não se aplica a infrações gravíssimas.',
      E: 'INCORRETA. Deixou de ser ato discricionário e tornou-se ato vinculado se preenchidos os requisitos legais.'
    }
  },
  {
    id: 'ctb-q34',
    subjectId: 'ctb',
    topic: 'Cassação da CNH (Art. 263)',
    difficulty: 'Difícil',
    statement: 'A Cassação da Carteira Nacional de Habilitação será aplicada pela autoridade de trânsito nas hipóteses previstas no Art. 263 do CTB, entre as quais se destaca:',
    lawReference: 'Art. 263, I do CTB',
    bancaTag: 'FCC / DETRAN-SP',
    options: [
      { letter: 'A', text: 'Quando, suspenso o direito de dirigir, o infrator conduzir qualquer veículo.' },
      { letter: 'B', text: 'Sempre que o condutor acumular 20 pontos no período de 6 meses.' },
      { letter: 'C', text: 'Em caso de atraso na renovação do exame de saúde por mais de 60 dias.' },
      { letter: 'D', text: 'Quando o condutor for autuado por estacionar sobre a calçada.' },
      { letter: 'E', text: 'Sempre que o veículo for apreendido por falta de pagamento do IPVA.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Art. 263, I do CTB: A cassação do documento de habilitação dar-se-á quando, SUSPENSO O DIREITO DE DIRIGIR, O INFRATOR CONDUZIR QUALQUER VEÍCULO. Decorridos 2 anos da cassação, o condutor poderá requerer sua reabilitação.',
    explanations: {
      A: 'CORRETA. Art. 263, I do CTB: Dirigir com a CNH suspensa acarreta a CASSAÇÃO do documento de habilitação.',
      B: 'INCORRETA. Acúmulo de pontos gera suspensão, não cassação direta.',
      C: 'INCORRETA. Atrasar exame de saúde gera apenas infração ao dirigir com CNH vencida há mais de 30 dias (Art. 162, V).',
      D: 'INCORRETA. Estacionar na calçada é infração grave com remoção do veículo.',
      E: 'INCORRETA. Não existe cassação por motivo tributário.'
    }
  },
  {
    id: 'ctb-q35',
    subjectId: 'ctb',
    topic: 'Prazo de Reabilitação após Cassação da CNH (Art. 263 §2º)',
    difficulty: 'Médio',
    statement: 'Decorridos quanto tempo da cassação da CNH o infrator poderá requerer sua reabilitação, submetendo-se a todos os exames necessários à habilitação, na forma estabelecida pelo CONTRAN?',
    lawReference: 'Art. 263, § 2º do CTB',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: '6 (seis) meses.' },
      { letter: 'B', text: '1 (um) ano.' },
      { letter: 'C', text: '2 (dois) anos.' },
      { letter: 'D', text: '3 (três) anos.' },
      { letter: 'E', text: '5 (cinco) anos.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'Art. 263, § 2º do CTB: Decorridos 2 (DOIS) ANOS da cassação da CNH, o infrator poderá requerer a sua reabilitação, realizando novos exames de habilitação.',
    explanations: {
      A: 'INCORRETA. O prazo legal é de 2 anos.',
      B: 'INCORRETA. 1 ano é o prazo de suspensão máxima por recusa/embriaguez.',
      C: 'CORRETA. Art. 263, § 2º: Prazo de 2 anos para requerer reabilitação.',
      D: 'INCORRETA. Prazo incorreto.',
      E: 'INCORRETA. Prazo incorreto.'
    }
  },
  {
    id: 'ctb-q36',
    subjectId: 'ctb',
    topic: 'Categorias de CNH e Reboque (Art. 143)',
    difficulty: 'Difícil',
    statement: 'Para conduzir combinação de veículos em que a unidade tracionadora se enquadre na categoria B, C ou D e cuja unidade acoplada, reboque, semi-reboque, trailer ou articulada tenha 6.000 kg ou mais de PBT, ou cuja lotação exceda a 8 lugares, é exigida a Categoria:',
    lawReference: 'Art. 143, V do CTB',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: 'Categoria C.' },
      { letter: 'B', text: 'Categoria D.' },
      { letter: 'C', text: 'Categoria E.' },
      { letter: 'D', text: 'Categoria B.' },
      { letter: 'E', text: 'Categoria ACC.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'Art. 143, V do CTB: Categoria E - condutor de combinação de veículos em que a unidade tracionadora se enquadre nas categorias B, C ou D e cuja unidade acoplada (reboque/semi-reboque/trailer) tenha 6.000 kg ou mais de PBT, ou lotação > 8 lugares.',
    explanations: {
      A: 'INCORRETA. Categoria C limita a unidade acoplada a menos de 6.000 kg PBT.',
      B: 'INCORRETA. Categoria D é para passageiros na unidade tracionadora.',
      C: 'CORRETA. Art. 143, V: Categoria E é exigida para reboques/articulados >= 6.000 kg PBT.',
      D: 'INCORRETA. Categoria B limita reboque a até 3.500 kg PBT total.',
      E: 'INCORRETA. ACC é Autorização para Conduzir Ciclomotores (até 50cc).'
    }
  },
  {
    id: 'ctb-q37',
    subjectId: 'ctb',
    topic: 'Pega ou Racha em Via Pública (Art. 308)',
    difficulty: 'Difícil',
    statement: 'Participar, na direção de veículo automotor, em via pública, de corrida, disputa ou competição automobilística não autorizada pela autoridade competente (Pega ou Racha - Art. 308 do CTB) configura crime de trânsito. Se da prática resultar LESÃO CORPORAL DE NATUREZA GRAVE, a pena privativa de liberdade é de:',
    lawReference: 'Art. 308, § 1º do CTB',
    bancaTag: 'Vunesp / Avalia 2026',
    options: [
      { letter: 'A', text: 'Reclusão, de 3 (três) a 6 (seis) anos.' },
      { letter: 'B', text: 'Detenção, de 6 meses a 2 anos.' },
      { letter: 'C', text: 'Reclusão, de 5 (cinco) a 10 (dez) anos.' },
      { letter: 'D', text: 'Prestação de serviços comunitários por 90 dias.' },
      { letter: 'E', text: 'Detenção de 1 a 3 anos em regime aberto.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Art. 308 do CTB:\n- Caput: Detenção de 6 meses a 3 anos (pega simples);\n- § 1º (Se resultar LESÃO CORPORAL GRAVE): RECLUSÃO, de 3 a 6 anos;\n- § 2º (Se resultar MORTE): RECLUSÃO, de 5 a 10 anos.',
    explanations: {
      A: 'CORRETA. Art. 308, § 1º: Lesão corporal grave no pega/racha gera pena de Reclusão de 3 a 6 anos.',
      B: 'INCORRETA. Detenção de 6 meses a 3 anos é a pena do crime simples sem lesão grave.',
      C: 'INCORRETA. Reclusão de 5 a 10 anos é para o resultado morte (§ 2º).',
      D: 'INCORRETA. Não é sanção penal autônoma isolada para lesão grave.',
      E: 'INCORRETA. Regime de reclusão previsto em lei.'
    }
  },
  {
    id: 'ctb-q38',
    subjectId: 'ctb',
    topic: 'Uso de Película Espelhada e Escura (Art. 230, XVI)',
    difficulty: 'Fácil',
    statement: 'Conduzir veículo com vidros cobertos por películas refletivas ou espelhadas, ou com índice de transmitância luminosa inferior ao mínimo regulamentado pelo CONTRAN constitui infração:',
    lawReference: 'Art. 230, XVI do CTB',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: 'Grave, penalidade de multa e medida administrativa de retenção do veículo para regularização.' },
      { letter: 'B', text: 'Gravíssima, penalidade de multa (5x) e apreensão do veículo.' },
      { letter: 'C', text: 'Média, penalidade de advertência por escrito.' },
      { letter: 'D', text: 'Leve, sem retenção do veículo.' },
      { letter: 'E', text: 'Crime de trânsito do Art. 311.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Art. 230, XVI do CTB: Conduzir veículo com vidros total ou parcialmente cobertos por películas refletivas/espelhadas ou fora dos limites de transmitância é infração GRAVE, com multa e retenção do veículo para regularização.',
    explanations: {
      A: 'CORRETA. Art. 230, XVI do CTB: Infração Grave, multa e retenção do veículo para regularização.',
      B: 'INCORRETA. Não é gravíssima multiplicada nem gera apreensão.',
      C: 'INCORRETA. Não é média.',
      D: 'INCORRETA. É infração de natureza grave.',
      E: 'INCORRETA. Trata-se de ilícito estritamente administrativo.'
    }
  },
  {
    id: 'ctb-q39',
    subjectId: 'ctb',
    topic: 'Transporte de Carga no Compartimento de Passageiros',
    difficulty: 'Médio',
    statement: 'Conduzir veículo transportando passageiros em compartimento de carga, ressalvadas as exceções regulamentadas pelo CONTRAN em casos de força maior ou interesse público, é infração:',
    lawReference: 'Art. 230, II do CTB',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Gravíssima, com multa e apreensão do veículo, e remoção do veículo.' },
      { letter: 'B', text: 'Gravíssima, com multa e apreensão do veículo, e medida administrativa de remoção do veículo.' },
      { letter: 'C', text: 'Gravíssima, com multa e medida administrativa de retenção do veículo.' },
      { letter: 'D', text: 'Grave, com multa e retenção do veículo.' },
      { letter: 'E', text: 'Média, com multa simples.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'Art. 230, II do CTB: Transportar passageiros em compartimento de carga é infração GRAVÍSSIMA, com penalidade de Multa e medida administrativa de Retenção do veículo até a descarga/transbordo seguro dos passageiros.',
    explanations: {
      A: 'INCORRETA. A penalidade de apreensão de veículo foi revogada da legislação.',
      B: 'INCORRETA. A medida é retenção para transbordo dos passageiros.',
      C: 'CORRETA. Art. 230, II do CTB: Infração GRAVÍSSIMA com retenção do veículo.',
      D: 'INCORRETA. A gravidade é gravíssima.',
      E: 'INCORRETA. Não é infração média.'
    }
  },
  {
    id: 'ctb-q40',
    subjectId: 'ctb',
    topic: 'Suspensão da CNH por Decisão Judicial (Art. 293)',
    difficulty: 'Difícil',
    statement: 'A penalidade judicial de suspensão ou de proibição de se obter a permissão ou a habilitação para dirigir veículo automotor (Art. 293 do CTB) tem a duração de:',
    lawReference: 'Art. 293 do CTB',
    bancaTag: 'FCC / Avalia 2026',
    options: [
      { letter: 'A', text: '1 (um) mês a 1 (um) ano.' },
      { letter: 'B', text: '2 (dois) meses a 5 (cinco) anos.' },
      { letter: 'C', text: '6 (seis) meses a 3 (três) anos.' },
      { letter: 'D', text: '1 (um) ano a 10 (dez) anos.' },
      { letter: 'E', text: '3 (três) meses a 2 (dois) anos.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Art. 293 do CTB: A penalidade JUDICIAL de suspensão ou proibição de se obter CNH/PPD tem a duração de 2 (DOIS) MESES a 5 (CINCO) ANOS. A autoridade judiciária comunicará a decisão ao CONTRAN e ao DETRAN.',
    explanations: {
      A: 'INCORRETA. Na esfera administrativa a suspensão varia de 2 a 8 meses ou 8 a 2 anos (reincidência); na judicial o limite é 2 meses a 5 anos.',
      B: 'CORRETA. Art. 293 do CTB: Duração de 2 meses a 5 anos.',
      C: 'INCORRETA. Prazo incorreto.',
      D: 'INCORRETA. Prazo inexistente no CTB.',
      E: 'INCORRETA. Limites incompatíveis com o CTB.'
    }
  }
];
