import { Question } from '../../types';

export const ctbQuestions: Question[] = [
  // --- BLAG 1: REGRAS GERAIS DE CIRCULAÇÃO, SNT E VELOCIDADES (Q01 a Q15) ---
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
      { letter: 'A', text: '30 pontos.' },
      { letter: 'B', text: '20 pontos.' },
      { letter: 'C', text: '14 pontos.' },
      { letter: 'D', text: '10 pontos.' },
      { letter: 'E', text: '40 pontos.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Conforme o Art. 261, § 5º do CTB, o condutor habilitado nas categorias C, D ou E que exerça atividade remunerada (EAR) pode optar por participar de curso preventivo de reciclagem sempre que, no período de 12 meses, atingir 30 (trinta) pontos no seu prontuário (extinguindo a pontuação acumulada após a conclusão).',
    explanations: {
      A: 'CORRETA. Art. 261, § 5º CTB: 30 pontos acumulados em 12 meses permite a reciclagem preventiva para condutor EAR.',
      B: 'INCORRETA. 20 pontos é o gatilho de suspensão para quem comete 2 ou mais infrações gravíssimas.',
      C: 'INCORRETA. 14 pontos era valor de norma antiga já revogada.',
      D: 'INCORRETA. 10 pontos é insuficiente.',
      E: 'INCORRETA. 40 pontos é o limite máximo geral sem gravíssimas.'
    }
  },
  {
    id: 'ctb-q04',
    subjectId: 'ctb',
    topic: 'Preferência em Cruzamento sem Sinalização (Art. 29)',
    difficulty: 'Fácil',
    statement: 'Ao transitar por vias urbanas em um cruzamento não sinalizado de duas vias de mesma hierarquia, a preferência de passagem, conforme o Art. 29, III, "c" do CTB, caberá ao veículo que:',
    lawReference: 'Art. 29, III, "c" do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Vier pela esquerda do condutor.' },
      { letter: 'B', text: 'Vier pela direita do condutor.' },
      { letter: 'C', text: 'Transitar em maior velocidade.' },
      { letter: 'D', text: 'Estiver buzando de forma contínua.' },
      { letter: 'E', text: 'For de maior porte físico.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'No cruzamento não sinalizado, a regra de ouro do Art. 29, III, "c" do CTB determina que a preferência de passagem é do veículo que se aproxima pela DIREITA do condutor.',
    explanations: {
      A: 'INCORRETA. Pela esquerda não tem preferência.',
      B: 'CORRETA. Art. 29, III, "c": Preferência para quem vem pela direita.',
      C: 'INCORRETA. Velocidade maior não concede prioridade de trânsito.',
      D: 'INCORRETA. Usar buzina não cria direito de passagem.',
      E: 'INCORRETA. Porte físico maior exige responsabilidade pela segurança dos menores, não prioridade.'
    }
  },
  {
    id: 'ctb-q05',
    subjectId: 'ctb',
    topic: 'Regra de Rotatória (Art. 29)',
    difficulty: 'Fácil',
    statement: 'Em uma rotatória não sinalizada por placas ou semáforos, a preferência de passagem (Art. 29, III, "b" do CTB) pertence ao veículo que:',
    lawReference: 'Art. 29, III, "b" do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Estiver circulando por ela.' },
      { letter: 'B', text: 'Estiver preste a entrar nela vindo da via principal.' },
      { letter: 'C', text: 'Estiver em velocidade mais alta.' },
      { letter: 'D', text: 'For transporte coletivo de passageiros.' },
      { letter: 'E', text: 'Dar sinal de luz alta primeiro.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Nos termos do Art. 29, III, "b" do CTB, no caso de rotatória não sinalizada, a preferência de passagem é daquele veículo que já estiver circulando por ela.',
    explanations: {
      A: 'CORRETA. Art. 29, III, "b": Preferência de quem já está circulando na rotatória.',
      B: 'INCORRETA. Quem vai entrar deve dar preferência a quem já circula.',
      C: 'INCORRETA. Velocidade não define preferência.',
      D: 'INCORRETA. Tipo de veículo não altera a regra da rotatória.',
      E: 'INCORRETA. Sinal de luz não concede preferência.'
    }
  },
  {
    id: 'ctb-q06',
    subjectId: 'ctb',
    topic: 'Classificação das Vias Urbanas (Art. 60 e 61)',
    difficulty: 'Médio',
    statement: 'Considerando a classificação das vias públicas e as velocidades máximas estabelecidas no Art. 61 do CTB onde não houver sinalização, assinale a correlação CORRETA:',
    lawReference: 'Art. 60 e 61 do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Via de Trânsito Rápido - 80 km/h.' },
      { letter: 'B', text: 'Via Arterial - 40 km/h.' },
      { letter: 'C', text: 'Via Coletora - 80 km/h.' },
      { letter: 'D', text: 'Via Local - 60 km/h.' },
      { letter: 'E', text: 'Rodovia de Pista Dupla - 60 km/h.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Limites padrão nas vias urbanas não sinalizadas (Art. 61 CTB):\n- Via de Trânsito Rápido: 80 km/h;\n- Via Arterial: 60 km/h;\n- Via Coletora: 40 km/h;\n- Via Local: 30 km/h.',
    explanations: {
      A: 'CORRETA. Via de trânsito rápido = 80 km/h.',
      B: 'INCORRETA. Via arterial o limite é 60 km/h (40 km/h é coletora).',
      C: 'INCORRETA. Via coletora o limite é 40 km/h.',
      D: 'INCORRETA. Via local o limite é 30 km/h.',
      E: 'INCORRETA. Rodovia de pista dupla é via rural (110 km/h).'
    }
  },
  {
    id: 'ctb-q07',
    subjectId: 'ctb',
    topic: 'Uso de Luzes e Faróis (Art. 40)',
    difficulty: 'Médio',
    statement: 'Sobre as regras de uso de luzes nos veículos (Art. 40 do CTB com redação atualizada), é correto afirmar que os veículos de transporte coletivo de passageiros circulando em faixas próprias devem manter acesos:',
    lawReference: 'Art. 40, parágrafo único do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Faróis de luz baixa de dia e de noite.' },
      { letter: 'B', text: 'Luzes de pisca-alerta ininterruptamente.' },
      { letter: 'C', text: 'Faróis de luz alta durante o dia.' },
      { letter: 'D', text: 'Apenas as luzes de posição (lanternas).' },
      { letter: 'E', text: 'Faróis de neblina dianteiros e traseiros.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Art. 40, parágrafo único do CTB determina que os veículos de transporte coletivo de passageiros circulando em faixas próprias e as motocicletas/motonetas/ciclomotores deverão manter acesos os faróis de luz baixa de dia e de noite.',
    explanations: {
      A: 'CORRETA. Art. 40: Farol de luz baixa aceso de dia e de noite para transporte coletivo em faixa própria e motocicletas.',
      B: 'INCORRETA. Pisca-alerta é para imobilizações ou emergências.',
      C: 'INCORRETA. Luz alta é vedada em vias com iluminação pública ou ao cruzar outros veículos.',
      D: 'INCORRETA. A exigência legal é o farol baixo, não apenas luz de posição.',
      E: 'INCORRETA. Farol de neblina é para condições adversas de visibilidade.'
    }
  },
  {
    id: 'ctb-q08',
    subjectId: 'ctb',
    topic: 'Buzina e Horários Vedados (Art. 41)',
    difficulty: 'Fácil',
    statement: 'O uso da buzina por condutores é regulamentado no Art. 41 do CTB. É vedado o uso da buzina no período compreendido entre:',
    lawReference: 'Art. 41, II do CTB & Art. 227, III',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: '22 (vinte e duas) horas e 6 (seis) horas.' },
      { letter: 'B', text: '20 (vinte) horas e 5 (cinco) horas.' },
      { letter: 'C', text: '00 (zero) hora e 7 (sete) horas.' },
      { letter: 'D', text: '21 (vinte e uma) horas e 6 (seis) horas.' },
      { letter: 'E', text: '23 (vinte e três) horas e 5 (cinco) horas.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'É proibido o uso de buzina entre as 22:00 horas e as 06:00 horas, nos termos do Art. 41, II e Art. 227, III do CTB.',
    explanations: {
      A: 'CORRETA. Horário vedado para buzina: 22h às 06h.',
      B: 'INCORRETA. Horário fora do padrão legal.',
      C: 'INCORRETA. Horário incorreto.',
      D: 'INCORRETA. Horário incorreto.',
      E: 'INCORRETA. Horário incorreto.'
    }
  },
  {
    id: 'ctb-q09',
    subjectId: 'ctb',
    topic: 'Distância de Segurança e Ultrapassagem de Ciclista (Art. 201)',
    difficulty: 'Médio',
    statement: 'Deixar de guardar a distância lateral de segurança mínima ao ultrapassar ciclista (Art. 201 do CTB) constitui infração grave. Qual é a distância lateral mínima exigida por lei?',
    lawReference: 'Art. 201 do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: '0,50 metro (meio metro).' },
      { letter: 'B', text: '1,00 metro (um metro).' },
      { letter: 'C', text: '1,50 metro (um metro e meio).' },
      { letter: 'D', text: '2,00 metros (dois metros).' },
      { letter: 'E', text: '2,50 metros (dois metros e meio).' }
    ],
    correctLetter: 'C',
    generalExplanation: 'Ao ultrapassar um ciclista, o condutor do veículo automotor deve guardar a distância lateral mínima de 1,50 metro (um metro e meio), sob pena de cometer infração de trânsito GRAVE (Art. 201 do CTB).',
    explanations: {
      A: 'INCORRETA. Distância perigosa e ilegal.',
      B: 'INCORRETA. 1 metro é insuficiente perante o CTB.',
      C: 'CORRETA. Art. 201 CTB: Distância lateral mínima de 1,50 m.',
      D: 'INCORRETA. 2 metros é acima do valor legal mínimo fixado.',
      E: 'INCORRETA. Distância incorreta.'
    }
  },
  {
    id: 'ctb-q10',
    subjectId: 'ctb',
    topic: 'Composição do Sistema Nacional de Trânsito (Art. 7º)',
    difficulty: 'Médio',
    statement: 'Assinale a alternativa que indica o órgão normativo e consultivo do Sistema Nacional de Trânsito no âmbito da União (Art. 7º, I do CTB):',
    lawReference: 'Art. 7º, I do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Conselho Nacional de Trânsito (CONTRAN).' },
      { letter: 'B', text: 'Departamento Nacional de Infraestrutura de Transportes (DNIT).' },
      { letter: 'C', text: 'Conselho Estadual de Trânsito (CETRAN).' },
      { letter: 'D', text: 'Junta Administrativa de Recursos de Infrações (JARI).' },
      { letter: 'E', text: 'Polícia Rodoviária Federal (PRF).' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O CONTRAN é o órgão máximo normativo e consultivo da União no SNT (Art. 7º, I do CTB). Os CETRANs atuam nos Estados e a JARI é órgão julgador de recursos.',
    explanations: {
      A: 'CORRETA. CONTRAN é o órgão normativo e consultivo máximo da União.',
      B: 'INCORRETA. DNIT é órgão executivo rodoviário da União.',
      C: 'INCORRETA. CETRAN atua no âmbito do Estado.',
      D: 'INCORRETA. JARI é órgão colegiado julgador de recursos.',
      E: 'INCORRETA. PRF é órgão executivo de fiscalização rodoviária federal.'
    }
  },
  {
    id: 'ctb-q11',
    subjectId: 'ctb',
    topic: 'JARI - Juntas Administrativas de Recursos de Infrações (Art. 16)',
    difficulty: 'Médio',
    statement: 'Junto a cada órgão ou entidade executivo de trânsito ou rodoviário funcionam as Juntas Administrativas de Recursos de Infrações (JARI). Conforme o Art. 16 do CTB, a JARI é um órgão:',
    lawReference: 'Art. 16 do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Colegiado, responsável pelo julgamento dos recursos interpostos contra penalidades por eles impostas.' },
      { letter: 'B', text: 'Normativo, responsável pela criação de resoluções de trânsito.' },
      { letter: 'C', text: 'Policial, responsável pela prisão em flagrante de motoristas embriagados.' },
      { letter: 'D', text: 'Exclusivamente médico, responsável pelos exames de aptidão física.' },
      { letter: 'E', text: 'Municipal, competente apenas para cobrança de impostos de IPVA.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A JARI é o órgão colegiado julgador de 1ª instância administrativa, responsável pelo julgamento dos recursos interpostos pelos condutores/proprietários contra penalidades de trânsito (Art. 16 e 17 CTB).',
    explanations: {
      A: 'CORRETA. Art. 16 CTB: Órgão colegiado julgador de recursos administrativos de 1ª instância.',
      B: 'INCORRETA. Órgão normativo é o CONTRAN/CETRAN.',
      C: 'INCORRETA. A JARI não tem autoridade de polícia judiciária penal.',
      D: 'INCORRETA. Exames médicos são realizados por peritos/juntas médicas.',
      E: 'INCORRETA. IPVA é tributo gerido pela Secretaria da Fazenda Estadual.'
    }
  },
  {
    id: 'ctb-q12',
    subjectId: 'ctb',
    topic: 'Prioridade de Batedores e Veículos de Emergência (Art. 29)',
    difficulty: 'Fácil',
    statement: 'Os veículos destinados a socorro de incêndio e salvamento, os de polícia, os de fiscalização e operação de trânsito e as ambulâncias (Art. 29, VII CTB) gozam de livre circulação, estacionamento e parada quando:',
    lawReference: 'Art. 29, VII do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Estiverem em prestação de serviço de urgência e devidamente identificados por dispositivos regulamentares de alarme sonoro e iluminação vermelha intermitente.' },
      { letter: 'B', text: 'Transitarem em velocidade normal retornando ao quartel.' },
      { letter: 'C', text: 'Estiverem estacionados em garagem particular.' },
      { letter: 'D', text: 'Conduzidos por motoristas com mais de 10 anos de CNH sem sirene.' },
      { letter: 'E', text: 'Transportarem familiares de servidores públicos.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A prioridade e a livre circulação dependem da demonstração da urgência por meio dos sinais sonoros (sirene) e luminosos (luzes vermelhas intermitentes) em acionamento concomitante (Art. 29, VII CTB).',
    explanations: {
      A: 'CORRETA. Serviço de urgência + sirene + iluminação vermelha intermitente.',
      B: 'INCORRETA. Retorno sem urgência deve respeitar as regras gerais de circulação.',
      C: 'INCORRETA. Não há prioridade em garagem privada sem emergência.',
      D: 'INCORRETA. O acionamento dos dispositivos sonoros e luminosos é requisito indispensável.',
      E: 'INCORRETA. Transporte de familiares não é serviço de urgência pública.'
    }
  },
  {
    id: 'ctb-q13',
    subjectId: 'ctb',
    topic: 'Uso de Cinto de Segurança (Art. 65)',
    difficulty: 'Fácil',
    statement: 'É obrigatório o uso do cinto de segurança para condutor e passageiros em todas as vias do território nacional (Art. 65 do CTB). Deixar de usar o cinto de segurança configura infração de natureza:',
    lawReference: 'Art. 65 e Art. 167 do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Leve.' },
      { letter: 'B', text: 'Média.' },
      { letter: 'C', text: 'Grave, com retenção do veículo até a colocação do cinto pelo infrator.' },
      { letter: 'D', text: 'Gravíssima, com apreensão imediata da CNH.' },
      { letter: 'E', text: 'Mera infração administrativa sem pontos.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'Deixar o condutor ou passageiro de usar o cinto de segurança (Art. 167 do CTB) é infração GRAVE (5 pontos), com medida administrativa de retenção do veículo até a colocação do cinto.',
    explanations: {
      A: 'INCORRETA. Não é infração leve.',
      B: 'INCORRETA. Não é infração média.',
      C: 'CORRETA. Art. 167 CTB: Infração Grave + retenção do veículo.',
      D: 'INCORRETA. Não é gravíssima nem gera apreensão de CNH.',
      E: 'INCORRETA. Gera a pontuação correspondente à infração grave.'
    }
  },
  {
    id: 'ctb-q14',
    subjectId: 'ctb',
    topic: 'Transporte de Passageiros em Caçamba (Art. 230)',
    difficulty: 'Médio',
    statement: 'Transportar passageiros em compartimento de carga de caminhonete ou caminhão sem autorização prévia da autoridade de trânsito (Art. 230, II do CTB) constitui infração:',
    lawReference: 'Art. 230, II do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Gravíssima, com multa e remoção do veículo.' },
      { letter: 'B', text: 'Grave, sem retenção.' },
      { letter: 'C', text: 'Média, apenas com advertência.' },
      { letter: 'D', text: 'Leve.' },
      { letter: 'E', text: 'Permitida desde que a velocidade seja inferior a 20 km/h.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Transportar pessoas no compartimento de carga ("pau de arara" improvisado em caçambas) constitui infração GRAVÍSSIMA (7 pontos), com penalidade de multa e medida administrativa de remoção do veículo (Art. 230, II CTB).',
    explanations: {
      A: 'CORRETA. Art. 230, II: Infração Gravíssima + remoção do veículo.',
      B: 'INCORRETA. Não é infração grave.',
      C: 'INCORRETA. A gravidade e o risco à vida vedam mera advertência.',
      D: 'INCORRETA. Não é leve.',
      E: 'INCORRETA. Velocidade reduzida não autoriza transporte irregular em caçamba.'
    }
  },
  {
    id: 'ctb-q15',
    subjectId: 'ctb',
    topic: 'Conceito de Residência no Licenciamento (Art. 120)',
    difficulty: 'Médio',
    statement: 'Todo veículo automotor deve ser registrado perante o órgão executivo de trânsito do Estado no Município de residência ou domicílio de seu proprietário (Art. 120 do CTB). Na alteração de domicílio de um proprietário para outro Município:',
    lawReference: 'Art. 123, II do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Será obrigatória a expedição de novo Certificado de Registro do Veículo (CRV).' },
      { letter: 'B', text: 'O registro anterior é cancelado e o veículo deve ser leiloado.' },
      { letter: 'C', text: 'Não há necessidade de qualquer comunicação ao Detran.' },
      { letter: 'D', text: 'O proprietário tem o prazo de 10 anos para atualizar a placa.' },
      { letter: 'E', text: 'O veículo deve passar por nova vistoria do Exército.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Art. 123, II do CTB estabelece que é obrigatória a emissão de novo CRV quando o proprietário mudar o município de residência ou domicílio.',
    explanations: {
      A: 'CORRETA. Art. 123, II: Mudança de município exige novo CRV/CRLV-e.',
      B: 'INCORRETA. O registro não é cancelado nem o bem vai a leilão.',
      C: 'INCORRETA. A comunicação e atualização no Detran são obrigatórias.',
      D: 'INCORRETA. A atualização deve ser providenciada de imediato.',
      E: 'INCORRETA. Vistoria veicular é feita pelo Detran/Empresa Credenciada, não Exército.'
    }
  },

  // --- BLOCO 2: INFRAÇÕES E PENALIDADES (Q16 a Q40) ---
  {
    id: 'ctb-q16',
    subjectId: 'ctb',
    topic: 'Embriaguez ao Volante e Teste de Etilômetro (Art. 165 e 165-A)',
    difficulty: 'Difícil',
    statement: 'Um condutor abordado em blitz de fiscalização recusa-se a ser submetido ao teste do etilômetro ("bafômetro"). Conforme o Art. 165-A do CTB, a conduta de recusar-se a ser submetido a teste ou exame clínico para atestar influência de álcool acarreta:',
    lawReference: 'Art. 165-A do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Infração Gravíssima, com multa multiplicada por 10 (dez) vezes e suspensão do direito de dirigir por 12 (doze) meses.' },
      { letter: 'B', text: 'Infração Grave, com multa simples e retenção do veículo por 24 horas.' },
      { letter: 'C', text: 'Mera falta administrativa, devendo o condutor ser liberado com advertência verbal.' },
      { letter: 'D', text: 'Cassação definitiva de todas as categorias de CNH sem prazo de recurso.' },
      { letter: 'E', text: 'Prisão em flagrante inafiançável de 5 a 10 anos.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A recusa ao teste do etilômetro (Art. 165-A CTB) possui exatamente as mesmas sanções administrativas da infração de dirigir embriagado (Art. 165): Infração GRAVÍSSIMA, multa multiplicada por 10 vezes (R$ 2.934,70) e suspensão do direito de dirigir por 12 meses.',
    explanations: {
      A: 'CORRETA. Art. 165-A CTB: Gravíssima + Multa x10 + Suspensão da CNH por 12 meses.',
      B: 'INCORRETA. Não é infração grave nem multa simples.',
      C: 'INCORRETA. A recusa tem rigor administrativo idêntico ao teste positivo.',
      D: 'INCORRETA. A penalidade aplicável é a suspensão por 12 meses, não a cassação sumária sem recurso.',
      E: 'INCORRETA. A recusa em si gera sanção administrativa de trânsito (o crime do Art. 306 exige comprovação de alteração da capacidade psicomotora).'
    }
  },
  {
    id: 'ctb-q17',
    subjectId: 'ctb',
    topic: 'Reincidência na Embriaguez em 12 Meses (Art. 165 e 165-A)',
    difficulty: 'Difícil',
    statement: 'Caso o condutor cometa nova infração de dirigir sob efeito de álcool ou nova recusa ao teste do etilômetro no período de 12 (doze) meses (Art. 165 e 165-A, parágrafo único do CTB), a penalidade financeira de multa será aplicada:',
    lawReference: 'Art. 165, parágrafo único do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Em dobro (multa multiplicada por 20 vezes).' },
      { letter: 'B', text: 'Com desconto de 50% por pagamento antecipado.' },
      { letter: 'C', text: 'Mantida em valor simples sem fator multiplicador.' },
      { letter: 'D', text: 'Em triplo (multa multiplicada por 30 vezes).' },
      { letter: 'E', text: 'Substituída por prestação de cestas básicas.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A reincidência nas infrações dos Arts. 165 e 165-A no período de 12 meses acarreta a aplicação da multa EM DOBRO (fator multiplicador x20, totalizando R$ 5.869,40), conforme determina a lei.',
    explanations: {
      A: 'CORRETA. Art. 165 e 165-A parágrafo único: Reincidência em 12 meses gera multa em DOBRO (x20).',
      B: 'INCORRETA. Reincidente grave não tem benefício de abono.',
      C: 'INCORRETA. Incide o agravamento do dobro.',
      D: 'INCORRETA. O fator de reincidência previsto no CTB é o dobro (x20), e não o triplo.',
      E: 'INCORRETA. Não há substituição de multa de trânsito por cestas básicas.'
    }
  },
  {
    id: 'ctb-q18',
    subjectId: 'ctb',
    topic: 'Uso de Celular ao Dirigir (Art. 252)',
    difficulty: 'Médio',
    statement: 'Segurar ou manusear telefone celular enquanto conduz veículo automotor (Art. 252, parágrafo único do CTB) configura infração de trânsito de natureza:',
    lawReference: 'Art. 252, parágrafo único do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Gravíssima (7 pontos).' },
      { letter: 'B', text: 'Grave (5 pontos).' },
      { letter: 'C', text: 'Média (4 pontos).' },
      { letter: 'D', text: 'Leve (3 pontos).' },
      { letter: 'E', text: 'Mera advertência sem pontos.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A Lei nº 13.281/2016 alterou o Art. 252 do CTB, enquadrando a conduta de SEGURAR ou MANUSEAR telefone celular ao dirigir como infração GRAVÍSSIMA (7 pontos no prontuário).',
    explanations: {
      A: 'CORRETA. Art. 252, parágrafo único: Manusear/segurar celular é infração GRAVÍSSIMA (7 pontos).',
      B: 'INCORRETA. Falar ao celular usando fone de ouvido é infração média (Art. 252, VI), mas manusear/segurar é Gravíssima.',
      C: 'INCORRETA. Não é média.',
      D: 'INCORRETA. Não é leve.',
      E: 'INCORRETA. Gera os 7 pontos de infração gravíssima.'
    }
  },
  {
    id: 'ctb-q19',
    subjectId: 'ctb',
    topic: 'Transitar na Faixa Exclusiva de Ônibus (Art. 184)',
    difficulty: 'Médio',
    statement: 'Transitar com o veículo na faixa ou via de trânsito exclusivo regulamentada para o transporte coletivo público de passageiros (Art. 184, III do CTB) é infração de natureza:',
    lawReference: 'Art. 184, III do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Gravíssima, com apreensão do veículo.' },
      { letter: 'B', text: 'Gravíssima, com multa e remoção do veículo.' },
      { letter: 'C', text: 'Grave, apenas com multa.' },
      { letter: 'D', text: 'Média.' },
      { letter: 'E', text: 'Leve.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Conforme o Art. 184, III do CTB, transitar na faixa ou via de circulação exclusiva para transporte coletivo de passageiros é infração GRAVÍSSIMA, sujeita a multa e remoção do veículo.',
    explanations: {
      A: 'INCORRETA. A medida administrativa é a remoção do veículo (a penalidade de apreensão foi revogada do CTB).',
      B: 'CORRETA. Art. 184, III CTB: Infração Gravíssima + remoção do veículo.',
      C: 'INCORRETA. Era infração grave no passado, foi elevada para Gravíssima.',
      D: 'INCORRETA. Não é média.',
      E: 'INCORRETA. Não é leve.'
    }
  },
  {
    id: 'ctb-q20',
    subjectId: 'ctb',
    topic: 'Avanço de Sinal Vermelho ou Parada Obrigatória (Art. 208)',
    difficulty: 'Fácil',
    statement: 'Avançar o sinal vermelho do semáforo ou o de parada obrigatória (Art. 208 do CTB) constitui infração de trânsito de natureza:',
    lawReference: 'Art. 208 do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Gravíssima (7 pontos).' },
      { letter: 'B', text: 'Grave (5 pontos).' },
      { letter: 'C', text: 'Média (4 pontos).' },
      { letter: 'D', text: 'Leve (3 pontos).' },
      { letter: 'E', text: 'Infração isenta de pontos no período noturno.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Art. 208 do CTB estabelece que avançar o sinal vermelho do semáforo ou a placa de parada obrigatória (PLACA PARE) é infração GRAVÍSSIMA (7 pontos).',
    explanations: {
      A: 'CORRETA. Art. 208 CTB: Infração Gravíssima (7 pontos).',
      B: 'INCORRETA. Não é grave.',
      C: 'INCORRETA. Não é média.',
      D: 'INCORRETA. Não é leve.',
      E: 'INCORRETA. O CTB veda a desobediência ao sinal vermelho sem ressalva automática semáforo.'
    }
  },
  {
    id: 'ctb-q21',
    subjectId: 'ctb',
    topic: 'Estacionar sobre a Faixa de Pedestres (Art. 181)',
    difficulty: 'Médio',
    statement: 'Estacionar o veículo sobre a faixa destinada a pedestres, sobre ciclovia ou ciclofaixa (Art. 181, VIII do CTB) configura infração:',
    lawReference: 'Art. 181, VIII do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Grave, com multa e remoção do veículo.' },
      { letter: 'B', text: 'Gravíssima, com suspensão da CNH.' },
      { letter: 'C', text: 'Média, sem remoção.' },
      { letter: 'D', text: 'Leve, apenas com advertência.' },
      { letter: 'E', text: 'Permitida por até 15 minutos com pisca-alerta ligado.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Estacionar o veículo sobre a faixa de pedestres, ciclovia ou passeio é infração GRAVE (5 pontos), com penalidade de multa e medida administrativa de remoção do veículo (Art. 181, VIII CTB).',
    explanations: {
      A: 'CORRETA. Art. 181, VIII CTB: Infração Grave + remoção do veículo.',
      B: 'INCORRETA. Não é gravíssima nem gera suspensão direta.',
      C: 'INCORRETA. Cabe a medida de remoção do veículo.',
      D: 'INCORRETA. Não é infração leve.',
      E: 'INCORRETA. Ligar pisca-alerta sobre a faixa de pedestres não legaliza o estacionamento.'
    }
  },
  {
    id: 'ctb-q22',
    subjectId: 'ctb',
    topic: 'Estacionar em Vaga de Idoso ou PCD sem Credencial (Art. 181)',
    difficulty: 'Médio',
    statement: 'Estacionar o veículo nas vagas reservadas às pessoas com deficiência ou idosos sem a credencial que comprove tal condição (Art. 181, XX do CTB) constitui infração:',
    lawReference: 'Art. 181, XX do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Gravíssima, com multa e remoção do veículo.' },
      { letter: 'B', text: 'Grave, com retenção.' },
      { letter: 'C', text: 'Média, sem remoção.' },
      { letter: 'D', text: 'Leve.' },
      { letter: 'E', text: 'Isenta se o motorista alegar emergência de compras.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Estacionar em vaga reservada a idoso ou pessoa com deficiência sem credencial visível (Art. 181, XX do CTB) é infração GRAVÍSSIMA (7 pontos), com multa e remoção do veículo.',
    explanations: {
      A: 'CORRETA. Art. 181, XX CTB: Infração Gravíssima + 7 pontos + remoção do veículo.',
      B: 'INCORRETA. Foi elevada de grave para gravíssima pela Lei da Acessibilidade.',
      C: 'INCORRETA. Não é média.',
      D: 'INCORRETA. Não é leve.',
      E: 'INCORRETA. Exige credencial oficial válida emitida pelo órgão de trânsito.'
    }
  },
  {
    id: 'ctb-q23',
    subjectId: 'ctb',
    topic: 'Velocidade Superior à Máxima em mais de 50% (Art. 218)',
    difficulty: 'Médio',
    statement: 'Transitar em velocidade superior à máxima permitida para o local em mais de 50% (cinquenta por cento) (Art. 218, III do CTB) acarreta como penalidade:',
    lawReference: 'Art. 218, III do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Infração Gravíssima, com multa multiplicada por 3 (três) vezes e suspensão direta do direito de dirigir.' },
      { letter: 'B', text: 'Infração Grave, com multa simples e 5 pontos.' },
      { letter: 'C', text: 'Infração Média, com recolhimento do veículo.' },
      { letter: 'D', text: 'Infração Leve, com advertência por escrito.' },
      { letter: 'E', text: 'Cassação imediata de todas as categorias e proibição de renovar por 10 anos.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Superar a velocidade máxima em mais de 50% (Art. 218, III do CTB) é infração GRAVÍSSIMA AUTO-SUSPENSIVA, sujeita a multa multiplicada por 3 (R$ 880,41) e suspensão direta do direito de dirigir.',
    explanations: {
      A: 'CORRETA. Art. 218, III: Gravíssima + Multa x3 + Suspensão do direito de dirigir.',
      B: 'INCORRETA. Exceder até 20% é média; de 20% a 50% é grave; acima de 50% é Gravíssima com suspensão.',
      C: 'INCORRETA. Não é média.',
      D: 'INCORRETA. Não é leve.',
      E: 'INCORRETA. A penalidade aplicável é a suspensão do direito de dirigir (processo administrativo regular).'
    }
  },
  {
    id: 'ctb-q24',
    subjectId: 'ctb',
    topic: 'Falta de Combustível na Via pública (Art. 180)',
    difficulty: 'Fácil',
    statement: 'Ter o veículo imobilizado na via por falta de combustível (conhecida como "pane seca") (Art. 180 do CTB) configura infração de trânsito de natureza:',
    lawReference: 'Art. 180 do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Média, com multa e remoção do veículo.' },
      { letter: 'B', text: 'Grave, sem remoção.' },
      { letter: 'C', text: 'Gravíssima, com apreensão da CNH.' },
      { letter: 'D', text: 'Leve, sem multa.' },
      { letter: 'E', text: 'Não constitui infração de trânsito por ser força maior.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Ter o veículo imobilizado por falta de combustível (Art. 180 do CTB) constitui infração MÉDIA (4 pontos), com penalidade de multa e medida administrativa de remoção do veículo.',
    explanations: {
      A: 'CORRETA. Art. 180 CTB: Infração Média + remoção do veículo.',
      B: 'INCORRETA. Não é grave.',
      C: 'INCORRETA. Não é gravíssima.',
      D: 'INCORRETA. Gera multa e pontuação média.',
      E: 'INCORRETA. O CTB responsabiliza o condutor pela manutenção prévia do nível de combustível.'
    }
  },
  {
    id: 'ctb-q25',
    subjectId: 'ctb',
    topic: 'Dirigir sem Possuir CNH ou ACC (Art. 162)',
    difficulty: 'Médio',
    statement: 'Dirigir veículo sem possuir Carteira Nacional de Habilitação, Permissão para Dirigir ou Autorização para Conduzir Ciclomotor (Art. 162, I do CTB) constitui infração:',
    lawReference: 'Art. 162, I do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Gravíssima, com multa multiplicada por 3 (três) vezes e retenção do veículo até a apresentação de condutor habilitado.' },
      { letter: 'B', text: 'Grave, apenas com multa simples.' },
      { letter: 'C', text: 'Média, com apreensão imediata do veículo.' },
      { letter: 'D', text: 'Leve.' },
      { letter: 'E', text: 'Mera falta administrativa sem multa.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Dirigir sem possuir CNH/PPD/ACC (Art. 162, I do CTB) é infração GRAVÍSSIMA, com penalidade de multa multiplicada por 3 (R$ 880,41) e retenção do veículo até a apresentação de condutor devidamente habilitado.',
    explanations: {
      A: 'CORRETA. Art. 162, I CTB: Infração Gravíssima + Multa x3 + Retenção do veículo.',
      B: 'INCORRETA. A multa possui o fator multiplicador x3.',
      C: 'INCORRETA. Não é infração média.',
      D: 'INCORRETA. Não é leve.',
      E: 'INCORRETA. É infração gravíssima de trânsito.'
    }
  },
  {
    id: 'ctb-q26',
    subjectId: 'ctb',
    topic: 'Entregar a Direção a Pessoa Não Habilitada (Art. 163)',
    difficulty: 'Médio',
    statement: 'Entregar a direção do veículo a pessoa que não possua CNH, PPD ou ACC (Art. 163 c/c Art. 162, I do CTB) acarreta para o proprietário do veículo:',
    lawReference: 'Art. 163 do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'As mesmas penalidades impostas ao condutor inabilitado (Infração Gravíssima, Multa x3 e retenção do veículo).' },
      { letter: 'B', text: 'Apenas uma advertência verbal por telefone.' },
      { letter: 'C', text: 'Infração Média com 4 pontos.' },
      { letter: 'D', text: 'Isenção de responsabilidade se o proprietário não estava no veículo.' },
      { letter: 'E', text: 'Cassação automática de todas as contas bancárias do proprietário.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Conforme o Art. 163 do CTB, entregar a direção a pessoa inabilitada incorre nas MESMAS penalidades do Art. 162, I: Infração GRAVÍSSIMA, multa multiplicada por 3 e retenção do veículo.',
    explanations: {
      A: 'CORRETA. Art. 163 CTB: Responsabilidade do proprietário idêntica à do infrator direto (Gravíssima x3).',
      B: 'INCORRETA. Não é advertência verbal.',
      C: 'INCORRETA. Não é infração média.',
      D: 'INCORRETA. Entregar a chave ao inabilitado gera responsabilidade direta do proprietário.',
      E: 'INCORRETA. O CTB não realiza bloqueio de contas bancárias.'
    }
  },
  {
    id: 'ctb-q27',
    subjectId: 'ctb',
    topic: 'Dirigir com CNH Vencida há mais de 30 Dias (Art. 162)',
    difficulty: 'Fácil',
    statement: 'Dirigir veículo com a Carteira Nacional de Habilitação (CNH) ou PPD vencida há MAIS de 30 (trinta) dias (Art. 162, V do CTB) constitui infração:',
    lawReference: 'Art. 162, V do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Gravíssima, com multa, recolhimento do documento de habilitação e retenção do veículo.' },
      { letter: 'B', text: 'Grave, sem retenção.' },
      { letter: 'C', text: 'Média.' },
      { letter: 'D', text: 'Leve.' },
      { letter: 'E', text: 'Permitida pelo prazo de até 6 meses de carência.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Conduzir com a CNH vencida há mais de 30 dias (Art. 162, V do CTB) é infração GRAVÍSSIMA (7 pontos), sujeita a multa e retenção do veículo até a apresentação de condutor habilitado.',
    explanations: {
      A: 'CORRETA. Art. 162, V CTB: Infração Gravíssima + recolhimento do documento + retenção do veículo.',
      B: 'INCORRETA. Não é grave.',
      C: 'INCORRETA. Não é média.',
      D: 'INCORRETA. Não é leve.',
      E: 'INCORRETA. A tolerância de condução com CNH vencida é de no máximo 30 dias.'
    }
  },
  {
    id: 'ctb-q28',
    subjectId: 'ctb',
    topic: 'Prazo para Recurso de Defesa Prévia (Art. 281-A)',
    difficulty: 'Médio',
    statement: 'Após a lavratura do auto de infração, a autoridade de trânsito expedirá a Notificação da Autuação ao proprietário do veículo. O prazo mínimo concedido para apresentação de Defesa Prévia (Art. 281-A do CTB) não será inferior a:',
    lawReference: 'Art. 281-A do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: '30 (trinta) dias.' },
      { letter: 'B', text: '15 (quinze) dias.' },
      { letter: 'C', text: '10 (dez) dias.' },
      { letter: 'D', text: '60 (sessenta) dias.' },
      { letter: 'E', text: '5 (cinco) dias.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Com as alterações trazidas pela Lei nº 14.071/2020 (Art. 281-A do CTB), o prazo para indicação do condutor infrator e para apresentação da Defesa Prévia NÃO será inferior a 30 (trinta) dias.',
    explanations: {
      A: 'CORRETA. Art. 281-A CTB: Prazo mínimo de 30 dias para defesa prévia.',
      B: 'INCORRETA. 15 dias era o prazo anterior sob a redação antiga.',
      C: 'INCORRETA. 10 dias é insuficiente.',
      D: 'INCORRETA. 60 dias é acima do limite mínimo fixado.',
      E: 'INCORRETA. 5 dias não atende à ampla defesa.'
    }
  },
  {
    id: 'ctb-q29',
    subjectId: 'ctb',
    topic: 'Prazo de Expedição da Notificação de Autuação (Art. 281)',
    difficulty: 'Difícil',
    statement: 'Se a Notificação da Autuação da infração de trânsito não for expedida pela autoridade no prazo máximo de 30 (trinta) dias contados da data do cometimento da infração (Art. 281, parágrafo único, II do CTB), o auto de infração será:',
    lawReference: 'Art. 281, parágrafo único, II do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Arquivado e seu auto julgado insubsistente.' },
      { letter: 'B', text: 'Cobrado em dobro com acréscimo de juros de mora.' },
      { letter: 'C', text: 'Encaminhado diretamente para execução fiscal no Fisco Estadual.' },
      { letter: 'D', text: 'Convertido em advertência por escrito sem cancelamento.' },
      { letter: 'E', text: 'Prorrogado por mais 180 dias de ofício.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Art. 281, parágrafo único, II do CTB dispõe expressamente que o auto de infração será ARQUIVADO e julgado insubsistente se no prazo máximo de 30 dias não for expedida a notificação da autuação.',
    explanations: {
      A: 'CORRETA. Art. 281, parágrafo único, II: Decadência do direito de punir -> arquivamento e insubsistência.',
      B: 'INCORRETA. A demora da administração pública extingue a autuação, não aumenta o valor.',
      C: 'INCORRETA. Não há execução fiscal de autuação caduca.',
      D: 'INCORRETA. Não pode ser convertido nem mantido.',
      E: 'INCORRETA. Não há prorrogação de ofício para o prazo decadencial de 30 dias.'
    }
  },
  {
    id: 'ctb-q30',
    subjectId: 'ctb',
    topic: 'Desconto de 40% no Pagamento via SNE (Art. 284)',
    difficulty: 'Médio',
    statement: 'O proprietário ou condutor autuado que optar pelo Sistema de Notificação Eletrônica (SNE) e reconhecer o cometimento da infração, sem apresentar defesa prévia ou recurso (Art. 284, § 1º do CTB), terá direito ao desconto no pagamento da multa no percentual de:',
    lawReference: 'Art. 284, § 1º do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: '40% (quarenta por cento).' },
      { letter: 'B', text: '20% (vinte por cento).' },
      { letter: 'C', text: '50% (cinquenta por cento).' },
      { letter: 'D', text: '10% (dez por cento).' },
      { letter: 'E', text: '30% (trinta por cento).' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Art. 284, § 1º do CTB prevê que o pagamento da multa efetuado através do SNE com renúncia expressa a recurso garante o desconto de 40% (quarenta por cento) até a data de vencimento.',
    explanations: {
      A: 'CORRETA. Art. 284, § 1º CTB: Desconto de 40% via SNE com renúncia a recurso.',
      B: 'INCORRETA. 20% é o desconto padrão para pagamento em dia no boleto convencional sem o SNE.',
      C: 'INCORRETA. 50% não é o percentual do CTB.',
      D: 'INCORRETA. 10% é incorreto.',
      E: 'INCORRETA. 30% é incorreto.'
    }
  },

  // --- BLOCO 3: CRIMES DE TRÂNSITO, PROCESSO E PENALIDADES (Q31 a Q55) ---
  {
    id: 'ctb-q31',
    subjectId: 'ctb',
    topic: 'Crime de Homicídio Culposo na Condução de Veículo (Art. 302)',
    difficulty: 'Médio',
    statement: 'Praticar homicídio culposo na direção de veículo automotor (Art. 302 do CTB) sujeita o infrator às penas de:',
    lawReference: 'Art. 302 do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Prisão simples de 1 a 3 meses apenas.' },
      { letter: 'B', text: 'Penas de reclusão de 10 a 20 anos.' },
      { letter: 'C', text: 'Detenção de 2 a 4 anos, e suspensão ou proibição de se obter a permissão ou a habilitação para dirigir veículo automotor.' },
      { letter: 'D', text: 'Multa pecuniária revestida em cestas básicas sem sanção penal.' },
      { letter: 'E', text: 'Trabalho comunitário por 30 dias.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'O Art. 302 do CTB tipifica o crime de homicídio culposo no trânsito, com penas de DETENÇÃO DE 2 A 4 ANOS, cumulada com a suspensão ou proibição de se obter CNH/PPD.',
    explanations: {
      A: 'INCORRETA. 1 a 3 meses é pena desproporcional à perda da vida.',
      B: 'INCORRETA. Reclusão de 10 a 20 anos é pena de homicídio doloso qualificado no Código Penal.',
      C: 'CORRETA. Art. 302 CTB: Detenção de 2 a 4 anos + suspensão/proibição de CNH.',
      D: 'INCORRETA. Trata-se de crime de trânsito com sanção privativa de liberdade.',
      E: 'INCORRETA. Não se restringe a 30 dias de trabalho comunitário.'
    }
  },
  {
    id: 'ctb-q32',
    subjectId: 'ctb',
    topic: 'Causa de Aumento de Pena no Homicídio Culposo (Art. 302)',
    difficulty: 'Difícil',
    statement: 'No crime de homicídio culposo praticado na direção de veículo automotor (Art. 302, § 1º do CTB), a pena é AUMENTADA de 1/3 (um terço) à metade se o agente:',
    lawReference: 'Art. 302, § 1º do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Não possuir Permissão para Dirigir ou Carteira de Habilitação.' },
      { letter: 'B', text: 'Estar conduzindo veículo com mais de 10 anos de fabricação.' },
      { letter: 'C', text: 'Cometer o fato em dia de chuva intensa.' },
      { letter: 'D', text: 'Estiver acompanhado de passageiros menores de 18 anos.' },
      { letter: 'E', text: 'Utilizar veículo de cor vermelha.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'São causas de aumento de pena no Art. 302, § 1º do CTB: I - não possuir CNH ou PPD; II - praticá-lo em faixa de pedestres ou na calçada; III - deixar de prestar socorro à vítima; IV - no exercício de profissão ou atividade de transporte de passageiros.',
    explanations: {
      A: 'CORRETA. Art. 302, § 1º, I: Não possuir CNH ou PPD é causa de aumento de pena de 1/3 à metade.',
      B: 'INCORRETA. Idade do veículo não é causa de aumento de pena penal.',
      C: 'INCORRETA. Chuva não é causa de aumento tipificada.',
      D: 'INCORRETA. Presença de passageiros menores não está no rol do § 1º.',
      E: 'INCORRETA. Cor do veículo é irrelevante.'
    }
  },
  {
    id: 'ctb-q33',
    subjectId: 'ctb',
    topic: 'Crime de Embriaguez ao Volante (Art. 306)',
    difficulty: 'Difícil',
    statement: 'Conduzir veículo automotor com capacidade psicomotora alterada em razão da influência de álcool ou de outra substância psicoativa que determine dependência (Art. 306 do CTB) configura CRIME DE TRÂNSITO. A conduta é constatada mediante concentração de álcool por litro de sangue igual ou superior a:',
    lawReference: 'Art. 306, § 1º, I do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: '6 decigramas de álcool por litro de sangue (ou 0,34 miligrama por litro de ar alveolar).' },
      { letter: 'B', text: '2 decigramas de álcool por litro de sangue.' },
      { letter: 'C', text: '1 decigrama de álcool por litro de sangue.' },
      { letter: 'D', text: '10 decigramas de álcool por litro de sangue.' },
      { letter: 'E', text: 'Qualquer quantidade acima de zero apurada exclusivamente por foto.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O crime do Art. 306 do CTB caracteriza-se pelo teste de sangue igual ou superior a 6 (seis) decigramas de álcool por litro de sangue ou teste de etilômetro com medição igual ou superior a 0,34 miligrama de álcool por litro de ar alveolar.',
    explanations: {
      A: 'CORRETA. Art. 306, § 1º, I: Concentração igual ou superior a 6 decigramas/litro de sangue ou 0,34 mg/L no ar alveolar.',
      B: 'INCORRETA. 2 decigramas é valor de tolerância de infração administrativa em legislações antigas (hoje a margem de infração é tolerância zero).',
      C: 'INCORRETA. Valor incorreto.',
      D: 'INCORRETA. 10 decigramas é valor acima do limite penal fixado.',
      E: 'INCORRETA. Foto não mede concentração alcoólica.'
    }
  },
  {
    id: 'ctb-q34',
    subjectId: 'ctb',
    topic: 'Crime de Racha ou Exibição Não Autorizada (Art. 308)',
    difficulty: 'Médio',
    statement: 'Participar, na direção de veículo automotor, em via pública, de corrida, disputa ou competição automobilística não autorizada ("racha") (Art. 308 do CTB), gerando situação de risco à incolumidade pública ou privada, sujeita o infrator às penas de:',
    lawReference: 'Art. 308 do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Detenção, de 6 (seis) meses a 3 (três) anos, multa e suspensão ou proibição de se obter a permissão ou a habilitação para dirigir.' },
      { letter: 'B', text: 'Apenas multa administrativa no valor de R$ 100,00.' },
      { letter: 'C', text: 'Reclusão de 15 a 30 anos sem direito a advogado.' },
      { letter: 'D', text: 'Trabalho gratuito na prefeitura aos finais de semana por 5 anos.' },
      { letter: 'E', text: 'Cassação dos direitos políticos do condutor.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O crime de racha (Art. 308 do CTB) prevê pena de DETENÇÃO DE 6 MESES A 3 ANOS, multa e suspensão/proibição do direito de dirigir.',
    explanations: {
      A: 'CORRETA. Art. 308 CTB: Detenção de 6 meses a 3 anos + multa + suspensão/proibição de CNH.',
      B: 'INCORRETA. Além da gravíssima infração administrativa (Art. 173/174), a conduta tipifica crime de trânsito.',
      C: 'INCORRETA. 15 a 30 anos é pena de homicídio qualificado gravíssimo.',
      D: 'INCORRETA. Não é sanção direta estipulada no tipo penal principal.',
      E: 'INCORRETA. Direitos políticos só são suspensos após condenação criminal transitada em julgado (Art. 15, III CF/88).'
    }
  },
  {
    id: 'ctb-q35',
    subjectId: 'ctb',
    topic: 'Crime de Dirigir sem CNH Gerando Perigo de Dano (Art. 309)',
    difficulty: 'Médio',
    statement: 'Dirigir veículo automotor, em via pública, sem a devida Permissão para Dirigir ou Carteira de Habilitação ou, ainda, se cassado o direito de dirigir (Art. 309 do CTB), configurará CRIME DE TRÂNSITO se a conduta:',
    lawReference: 'Art. 309 do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Gerar perigo de dano concreto à segurança do trânsito.' },
      { letter: 'B', text: 'Ocorrer em dia de domingo ou feriado nacional.' },
      { letter: 'C', text: 'For praticada por pessoa com mais de 60 anos.' },
      { letter: 'D', text: 'Ocorrer em rodovia concedida à iniciativa privada.' },
      { letter: 'E', text: 'For cometida por motorista usando óculos escuros.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Art. 309 do CTB exige expressamente a ocorrência de PERIGO DE DANO CONCRETO (ex: quase colidir, trafegar na calçada ou ziguezaguar perigosamente). Sem o perigo de dano, a conduta é apenas a infração administrativa do Art. 162, I.',
    explanations: {
      A: 'CORRETA. Art. 309 CTB: O crime exige o elemento "gerando perigo de dano".',
      B: 'INCORRETA. O dia da semana não transforma infração em crime.',
      C: 'INCORRETA. Idade do agente não altera o tipo penal.',
      D: 'INCORRETA. Tipo de concessão da via é irrelevante.',
      E: 'INCORRETA. Irrelevante.'
    }
  },
  {
    id: 'ctb-q36',
    subjectId: 'ctb',
    topic: 'Crime de Omissão de Socorro no Trânsito (Art. 304)',
    difficulty: 'Médio',
    statement: 'Deixar o condutor do veículo, na ocasião do acidente, de prestar imediato socorro à vítima, ou, não podendo fazê-lo diretamente, por justa causa, deixar de solicitar auxílio da autoridade pública (Art. 304 do CTB), sujeita o infrator às penas de:',
    lawReference: 'Art. 304 do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Detenção, de 6 (seis) meses a 1 (um) ano, ou multa, se o fato não constituir elemento de crime mais grave.' },
      { letter: 'B', text: 'Reclusão de 4 a 8 anos sem fiança.' },
      { letter: 'C', text: 'Mera advertência verbal dada pela polícia rodoviária.' },
      { letter: 'D', text: 'Trabalho forçado em hospital militar por 2 anos.' },
      { letter: 'E', text: 'Perda do direito de propriedade do veículo envolvido.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O crime do Art. 304 do CTB pune a omissão de socorro no acidente com pena de DETENÇÃO DE 6 MESES A 1 ANO, ou multa, desde que o fato não integre crime mais grave (como causa de aumento do homicídio ou lesão culposa).',
    explanations: {
      A: 'CORRETA. Art. 304 CTB: Detenção de 6 meses a 1 ano, ou multa.',
      B: 'INCORRETA. Não é pena de reclusão de 4 a 8 anos.',
      C: 'INCORRETA. É crime de trânsito tipificado no CTB.',
      D: 'INCORRETA. Não há previsão de trabalho forçado.',
      E: 'INCORRETA. Não gera confisco de propriedade.'
    }
  },
  {
    id: 'ctb-q37',
    subjectId: 'ctb',
    topic: 'Crime de Afastar-se do Local do Acidente para Fugir à Responsabilidade (Art. 305)',
    difficulty: 'Médio',
    statement: 'Afastar-se o condutor do veículo do local do acidente, para fugir à responsabilidade penal ou civil que lhe possa ser atribuída (Art. 305 do CTB), configura crime punido com:',
    lawReference: 'Art. 305 do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Detenção, de 6 (seis) meses a 1 (um) ano, ou multa.' },
      { letter: 'B', text: 'Reclusão de 5 a 10 anos.' },
      { letter: 'C', text: 'Prisão perpétua.' },
      { letter: 'D', text: 'Apenas multa administrativa sem registro criminal.' },
      { letter: 'E', text: 'Cassação dos documentos de identidade do passageiro.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Fugir do local do acidente para evadir-se da responsabilidade (Art. 305 CTB) é crime punido com pena de DETENÇÃO DE 6 MESES A 1 ANO, ou multa.',
    explanations: {
      A: 'CORRETA. Art. 305 CTB: Detenção de 6 meses a 1 ano, ou multa.',
      B: 'INCORRETA. Pena incompatível.',
      C: 'INCORRETA. Não existe prisão perpétua no direito penal brasileiro (Art. 5º, XLVII "a" CF/88).',
      D: 'INCORRETA. Trata-se de crime ambiental/viário tipificado.',
      E: 'INCORRETA. Irrelevante.'
    }
  },
  {
    id: 'ctb-q38',
    subjectId: 'ctb',
    topic: 'Medida Administrativa vs Penalidade (Arts. 256 e 269)',
    difficulty: 'Difícil',
    statement: 'No âmbito do direito administrativo de trânsito, é fundamental distinguir as PENALIDADES (Art. 256) das MEDIDAS ADMINISTRATIVAS (Art. 269). Assinale a alternativa que apresenta EXCLUSIVAMENTE Medidas Administrativas:',
    lawReference: 'Art. 269 do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Retenção do veículo, remoção do veículo e recolhimento do documento de habilitação.' },
      { letter: 'B', text: 'Multa, suspensão do direito de dirigir e cassação da CNH.' },
      { letter: 'C', text: 'Advertência por escrito, curso de reciclagem e multa.' },
      { letter: 'D', text: 'Cassação da PPD, frequencia obrigatória em curso e multa.' },
      { letter: 'E', text: 'Multa, retenção do veículo e cassação do credenciamento.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'As Medidas Administrativas (Art. 269 CTB) são ações de campo praticadas pelo agente de trânsito e geralmente começam pela letra "R": Retenção, Remoção, Recolhimento do documento, Realização de teste de etilômetro. Já Multa, Suspensão e Cassação são PENALIDADES (Art. 256) aplicadas pela autoridade de trânsito.',
    explanations: {
      A: 'CORRETA. Retenção, Remoção e Recolhimento de documento são MEDIDAS ADMINISTRATIVAS (Art. 269).',
      B: 'INCORRETA. Multa, suspensão e cassação são PENALIDADES (Art. 256).',
      C: 'INCORRETA. Advertência e multa são penalidades.',
      D: 'INCORRETA. Multa e cassação são penalidades.',
      E: 'INCORRETA. Multa é penalidade.'
    }
  },
  {
    id: 'ctb-q39',
    subjectId: 'ctb',
    topic: 'Competência do Agente de Trânsito no Auto de Infração (Art. 280)',
    difficulty: 'Médio',
    statement: 'O auto de infração de trânsito (Art. 280 do CTB) é o documento formal que dá início ao processo administrativo sancionatório. Assinale o elemento que NÃO é de preenchimento obrigatório no auto de infração:',
    lawReference: 'Art. 280 do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Assinatura do infrator, quando não for possível colhê-la no local da abordagem.' },
      { letter: 'B', text: 'Tipificação da infração cometida.' },
      { letter: 'C', text: 'Local, data e hora do cometimento da infração.' },
      { letter: 'D', text: 'Placa e caracteres de identificação do veículo.' },
      { letter: 'E', text: 'Identificação do órgão, da autoridade ou do agente autuador.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Art. 280, VI do CTB dispõe que a assinatura do infrator será colhida "sempre que possível". Portanto, a ausência de assinatura do infrator (ex: autuação por radar ou condutor que recusa assinar) NÃO invalida o auto de infração.',
    explanations: {
      A: 'CORRETA. Art. 280, VI: A assinatura do condutor é dispensável quando não for possível colhê-la.',
      B: 'INCORRETA. A tipificação é requisito obrigatório sob pena de nulidade.',
      C: 'INCORRETA. Local, data e hora são obrigatórios.',
      D: 'INCORRETA. Placa e marca/modelo são indispensáveis.',
      E: 'INCORRETA. Identificação do agente autuador é obrigatória.'
    }
  },
  {
    id: 'ctb-q40',
    subjectId: 'ctb',
    topic: 'Cassação do Credenciamento de CFC (Art. 256)',
    difficulty: 'Médio',
    statement: 'A cassação da Carteira Nacional de Habilitação (Art. 263 do CTB) será aplicada pela autoridade de trânsito quando:',
    lawReference: 'Art. 263 do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'O condutor for flagrado dirigindo qualquer veículo com o direito de dirigir suspenso.' },
      { letter: 'B', text: 'O condutor cometer 1 infração leve no período de 5 anos.' },
      { letter: 'C', text: 'O veículo ficar sem combustível em via pública por 2 vezes.' },
      { letter: 'D', text: 'O proprietário atrasar o pagamento do IPVA por 30 dias.' },
      { letter: 'E', text: 'O condutor mudar de endereço residencial sem avisar a prefeitura.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Conforme o Art. 263, I do CTB, a CASSAÇÃO da CNH é aplicada quando o condutor for flagrado pilotando/dirigindo estando com o direito de dirigir suspenso.',
    explanations: {
      A: 'CORRETA. Art. 263, I CTB: Dirigir com CNH suspensa gera a CASSAÇÃO da CNH.',
      B: 'INCORRETA. Infração leve não gera cassação.',
      C: 'INCORRETA. Falta de combustível é infração média (Art. 180).',
      D: 'INCORRETA. Atraso de IPVA não gera cassação de CNH.',
      E: 'INCORRETA. Mudança de endereço exige atualização no Detran, mas não cassa CNH.'
    }
  },

  // --- BLOCO 4: NORMAS ADICIONAIS DE CIRCULAÇÃO E SINALIZAÇÃO (Q41 a Q55) ---
  {
    id: 'ctb-q41',
    subjectId: 'ctb',
    topic: 'Prioridade em Vias de Fluxo Cruzado (Art. 29)',
    difficulty: 'Médio',
    statement: 'Em um cruzamento não sinalizado entre uma rodovia e uma via urbana comum, a preferência de passagem (Art. 29, III, "a" do CTB) caberá ao veículo que:',
    lawReference: 'Art. 29, III, "a" do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Estiver transitando pela rodovia.' },
      { letter: 'B', text: 'Estiver transitando pela via urbana por ser mais movimentada.' },
      { letter: 'C', text: 'Estiver à esquerda do condutor.' },
      { letter: 'D', text: 'Acionar os faróis altos em sinal de advertência.' },
      { letter: 'E', text: 'Transportar carga viva.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Art. 29, III, "a" estabelece expressamente que no caso de fluxo de veículos que se cruzam em local não sinalizado, a preferência de passagem será, no caso de apenas um fluxo ser proveniente de RODOVIA, daquele que estiver transitando por ela.',
    explanations: {
      A: 'CORRETA. Art. 29, III, "a": Veículo que transita pela rodovia tem preferência sobre a via secundária.',
      B: 'INCORRETA. A prioridade legal da rodovia prevalece sobre a via urbana comum.',
      C: 'INCORRETA. Pela esquerda não há preferência.',
      D: 'INCORRETA. Sinal de luz alta não altera a preferência.',
      E: 'INCORRETA. Tipo de carga não altera a regra de cruzamento.'
    }
  },
  {
    id: 'ctb-q42',
    subjectId: 'ctb',
    topic: 'Sinalização Semafórica de Orientação (Art. 80)',
    difficulty: 'Fácil',
    statement: 'A sinalização de trânsito prevalece sobre as demais regras de circulação. A ordem hierárquica de prevalência da sinalização de trânsito (Art. 89 do CTB) coloca em PRIMEIRO lugar:',
    lawReference: 'Art. 89, I do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'As ordens do agente de trânsito sobre as normas de circulação e outros sinais.' },
      { letter: 'B', text: ' As indicações do semáforo sobre os agentes de trânsito.' },
      { letter: 'C', text: 'As placas de regulamentação sobre o agente de trânsito.' },
      { letter: 'D', text: 'As marcas viárias pintadas no asfalto sobre qualquer sinal.' },
      { letter: 'E', text: 'O desejo dos pedestres em atravessar.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A ordem de prevalência das sinalizações (Art. 89 CTB):\n1º - As ORDENS DO AGENTE DE TRÂNSITO sobre as normas de circulação e outros sinais;\n2º - As indicações do SEMÁFORO sobre os demais sinais;\n3º - As indicações dos SINAIS (placas) sobre as demais normas.',
    explanations: {
      A: 'CORRETA. Art. 89, I CTB: A ordem direta do agente de trânsito prevalece sobre tudo.',
      B: 'INCORRETA. A indicação semafórica cede lugar à ordem do agente de trânsito.',
      C: 'INCORRETA. As placas não prevalecem sobre a ordem humana do agente.',
      D: 'INCORRETA. Pintura no asfalto é sinalização secundária.',
      E: 'INCORRETA. Pedestres devem respeitar a sinalização e as ordens do agente.'
    }
  },
  {
    id: 'ctb-q43',
    subjectId: 'ctb',
    topic: 'Parada e Estacionamento - Definição Técnica (Anexo I)',
    difficulty: 'Médio',
    statement: 'De acordo com os conceitos e definições do Anexo I do CTB, diferencia-se a PARADA do ESTACIONAMENTO pelo seguinte critério técnico:',
    lawReference: 'Anexo I do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'A PARADA é a imobilização pelo tempo estritamente necessário para embarque ou desembarque de passageiros; o ESTACIONAMENTO é por tempo superior a isso.' },
      { letter: 'B', text: 'A PARADA exige que o motorista desligue o motor; o ESTACIONAMENTO exige motor ligado.' },
      { letter: 'C', text: 'A PARADA aplica-se apenas a caminhões de carga.' },
      { letter: 'D', text: 'O ESTACIONAMENTO é permitido apenas nas esquinas.' },
      { letter: 'E', text: 'Não há diferença legal entre os dois termos.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'No Anexo I do CTB:\n- PARADA: Imobilização do veículo com a finalidade e pelo tempo estritamente necessário para o embarque ou desembarque de passageiros.\n- ESTACIONAMENTO: Imobilização do veículo por tempo superior ao necessário para embarque ou desembarque de passageiros.',
    explanations: {
      A: 'CORRETA. Anexo I CTB: Parada = tempo estrito de embarque/desembarque; Estacionamento = tempo superior.',
      B: 'INCORRETA. Desligar o motor não é o elemento divisor conceitual.',
      C: 'INCORRETA. Aplica-se a qualquer veículo.',
      D: 'INCORRETA. Estacionar em esquinas a menos de 5m é infração grave (Art. 181, I).',
      E: 'INCORRETA. Há nítida diferença jurídica.'
    }
  },
  {
    id: 'ctb-q44',
    subjectId: 'ctb',
    topic: 'Operação de Carga e Descarga (Art. 47)',
    difficulty: 'Médio',
    statement: 'A operação de carga ou descarga de mercadorias no veículo (Art. 47 do CTB) é considerada para fins de regulamentação e sinalização como:',
    lawReference: 'Art. 47 do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'ESTACIONAMENTO, devendo ser realizada no tempo fixado pela autoridade e nos locais sinalizados.' },
      { letter: 'B', text: 'Mera PARADA temporária de passageiros.' },
      { letter: 'C', text: 'Infração gravíssima isenta de regulamentação.' },
      { letter: 'D', text: 'Direito absoluto em qualquer calçada do município.' },
      { letter: 'E', text: 'Trânsito livre com luzes de pisca-alerta acesas.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Art. 47 do CTB estabelece que a operação de carga e descarga é considerada ESTACIONAMENTO e será regulamentada pelo órgão executivo de trânsito local.',
    explanations: {
      A: 'CORRETA. Art. 47 CTB: Carga e descarga é considerada juridicamente como ESTACIONAMENTO.',
      B: 'INCORRETA. Carga e descarga movimenta mercadorias/bens, não embarque/desembarque de passageiros.',
      C: 'INCORRETA. É permitida e regulamentada nas vagas/horários próprios.',
      D: 'INCORRETA. Não há direito de estacionar sobre a calçada.',
      E: 'INCORRETA. Pisca-alerta não converte carga em trânsito livre.'
    }
  },
  {
    id: 'ctb-q45',
    subjectId: 'ctb',
    topic: 'Regra de Trânsito em Aclive Semissinalizado (Art. 29)',
    difficulty: 'Médio',
    statement: 'Nos trechos de vias em declive ou aclive acentuados sem espaço para passagem simultânea de dois veículos (Art. 29, § 2º do CTB), a preferência de passagem cabe ao veículo que:',
    lawReference: 'Art. 29, § 2º do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Estiver subindo (em aclive), salvo se o que estiver descendo for de maior porte.' },
      { letter: 'B', text: 'Estiver descendo (em declive).' },
      { letter: 'C', text: 'Estiver transportando carga mais pesada.' },
      { letter: 'D', text: 'Transitar em maior velocidade.' },
      { letter: 'E', text: 'Buzinar primeiro.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Nas vias íngremes e estreitas onde não caibam 2 veículos, a preferência é do veículo que ESTÁ SUBINDO (aclive), pois o arranque em subida é mais complexo. Se o que estiver descendo for de maior porte, este deve dar a passagem.',
    explanations: {
      A: 'CORRETA. Art. 29, § 2º CTB: Preferência de quem está subindo (aclive).',
      B: 'INCORRETA. Quem desce deve dar passagem a quem sobe.',
      C: 'INCORRETA. O fator determinante é o sentido da via (aclive vs declive).',
      D: 'INCORRETA. Velocidade não define prioridade.',
      E: 'INCORRETA. Buzina não é critério legal de passagem.'
    }
  },
  {
    id: 'ctb-q46',
    subjectId: 'ctb',
    topic: 'Fiscalização por Radar e Medição de Velocidade (Art. 280)',
    difficulty: 'Médio',
    statement: 'Na fiscalização de velocidade por instrumentos eletrônicos medidores (radares fixos ou portáteis), para a lavratura do auto de infração por excesso de velocidade exige-se que o equipamento esteja homologado e calibrado pelo:',
    lawReference: 'Art. 280, § 2º do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'INMETRO (Instituto Nacional de Metrologia, Qualidade e Tecnologia) ou entidade por ele credenciada.' },
      { letter: 'B', text: 'Ministério da Justiça.' },
      { letter: 'C', text: 'Sindicato dos motoristas de táxi.' },
      { letter: 'D', text: 'Conselho Regional de Engenharia (CREA).' },
      { letter: 'E', text: 'Corpo de Bombeiros Militar.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Art. 280, § 2º do CTB exige que a medição por instrumento ou equipamento eletrônico (radares) seja aprovada e aferida pelo INMETRO ou entidade por ele delegada (verificação anual).',
    explanations: {
      A: 'CORRETA. Art. 280, § 2º CTB: Aferição pelo INMETRO.',
      B: 'INCORRETA. Ministério da Justiça não faz metrologia legal de radares.',
      C: 'INCORRETA. Sindicato privado não tem função metrológica pública.',
      D: 'INCORRETA. CREA fiscaliza exercício profissional de engenharia, não aferição técnica de velocímetros de rua.',
      E: 'INCORRETA. Bombeiros atuam no resgate e segurança contra incêndio.'
    }
  },
  {
    id: 'ctb-q47',
    subjectId: 'ctb',
    topic: 'Identificação Externa dos Veículos e Placas (Art. 115)',
    difficulty: 'Fácil',
    statement: 'O veículo será identificado externamente por meio de placas dianteira e traseira, sendo esta lacrada ou fixada na estrutura do veículo (Art. 115 do CTB). Os caracteres das placas constituem a identificação do veículo e são:',
    lawReference: 'Art. 115 do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Individuais e reestruturados a cada proprietário sem reutilização.' },
      { letter: 'B', text: 'Alterados anualmente na renovação do licenciamento.' },
      { letter: 'C', text: 'Fixados livremente pelo próprio motorista.' },
      { letter: 'D', text: 'Excluídos após 5 anos de fabricação do carro.' },
      { letter: 'E', text: 'Iguais para todos os veículos da mesma cor na cidade.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'As placas de identificação veicular (Padrão Mercosul / CTB Art. 115) possuem caracteres alfa-numéricos individuais que acompanham o veículo desde a sua fabricação até a baixa definitiva.',
    explanations: {
      A: 'CORRETA. Art. 115 CTB: Caracteres individuais que acompanham o registro do veículo.',
      B: 'INCORRETA. As placas não mudam anualmente.',
      C: 'INCORRETA. Placas são confeccionadas por estampadoras credenciadas com padrão Senatran.',
      D: 'INCORRETA. O veículo mantém as placas até a baixa do registro.',
      E: 'INCORRETA. Cada placa é única por veículo.'
    }
  },
  {
    id: 'ctb-q48',
    subjectId: 'ctb',
    topic: 'Equipamentos Obrigatórios dos Veículos (Art. 105)',
    difficulty: 'Médio',
    statement: 'São equipamentos obrigatórios dos veículos automotores, nos termos do Art. 105 do CTB, EXCETO:',
    lawReference: 'Art. 105 do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Cinto de segurança e encosto de cabeça para os passageiros.' },
      { letter: 'B', text: 'Air bag frontal para condutor e passageiro do banco dianteiro.' },
      { letter: 'C', text: 'Registrador instantâneo inalterável de velocidade e tempo (tacógrafo) para veículos de transporte escolar e de carga pesada.' },
      { letter: 'D', text: 'Dispositivo de rádio AM/FM com antena cromada.' },
      { letter: 'E', text: 'Pneu sobressalente (estepe), chave de roda e macaco.' }
    ],
    correctLetter: 'D',
    generalExplanation: 'O rádio com antena não é equipamento de segurança obrigatório previsto no Art. 105 do CTB. Cinto, air bag frontal, estepe, chave de roda, macaco e tacógrafo (para transporte escolar/pesado) são exigências legais.',
    explanations: {
      A: 'INCORRETA. Cinto de segurança e encosto de cabeça são equipamentos obrigatórios.',
      B: 'INCORRETA. Air bag frontal é obrigatório para veículos produzidos/importados conforme legislação.',
      C: 'INCORRETA. Tacógrafo é obrigatório no transporte escolar e pesados.',
      D: 'CORRETA. Rádio AM/FM é item de conforto/acessório opcional, NÃO sendo equipamento obrigatório do Art. 105.',
      E: 'INCORRETA. Estepe, macaco e chave de roda são equipamentos obrigatórios.'
    }
  },
  {
    id: 'ctb-q49',
    subjectId: 'ctb',
    topic: 'Uso de Triângulo de Sinalização de Emergência (Art. 46)',
    difficulty: 'Fácil',
    statement: 'Sempre que o veículo estiver impossibilitado de circular por avaria ou acidente (Art. 46 do CTB), o condutor deve acionar o pisca-alerta e colocar o triângulo de sinalização de emergência. A ausência do triângulo no veículo configura infração:',
    lawReference: 'Art. 46 e Art. 230, IX do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Grave, com multa e retenção do veículo para regularização.' },
      { letter: 'B', text: 'Média, sem multa.' },
      { letter: 'C', text: 'Gravíssima, com suspensão da CNH.' },
      { letter: 'D', text: 'Leve.' },
      { letter: 'E', text: 'Mera recomendação sem caráter punitivo.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Conduzir veículo sem equipamento obrigatório ou com este inoperante (Art. 230, IX do CTB) é infração GRAVE (5 pontos), sujeita a multa e retenção do veículo para regularização.',
    explanations: {
      A: 'CORRETA. Art. 230, IX CTB: Ausência de equipamento obrigatório (triângulo) é infração GRAVE + retenção do veículo.',
      B: 'INCORRETA. Não é média.',
      C: 'INCORRETA. Não é gravíssima.',
      D: 'INCORRETA. Não é leve.',
      E: 'INCORRETA. O triângulo é de presença obrigatória por lei.'
    }
  },
  {
    id: 'ctb-q50',
    subjectId: 'ctb',
    topic: 'Veículos em Fila de Socorro e Ambulâncias (Art. 29)',
    difficulty: 'Fácil',
    statement: 'Seguir veículo em serviço de urgência com iluminação e alarme sonoro acionados (aproveitar o "vácuo" ou abertura de trânsito gerada por ambulâncias) (Art. 190 do CTB) configura infração de natureza:',
    lawReference: 'Art. 190 do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Grave (5 pontos).' },
      { letter: 'B', text: 'Gravíssima (7 pontos).' },
      { letter: 'C', text: 'Média (4 pontos).' },
      { letter: 'D', text: 'Leve (3 pontos).' },
      { letter: 'E', text: 'Permitida desde que o condutor acione as luzes de pisca-alerta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Seguir veículo em serviço de urgência, com prioridade de passagem sinalizada por alarme sonoro e iluminação (Art. 190 do CTB), é infração GRAVE (5 pontos).',
    explanations: {
      A: 'CORRETA. Art. 190 CTB: Seguir veículo de emergência em serviço de urgência é infração GRAVE.',
      B: 'INCORRETA. Não é gravíssima.',
      C: 'INCORRETA. Não é média.',
      D: 'INCORRETA. Não é leve.',
      E: 'INCORRETA. A conduta coloca em risco a vida dos resgatistas e é expressamente proibida.'
    }
  },

  // --- BLOCO 5: REGRAS COMPLEMENTARES E PROCESSO ADMINISTRATIVO (Q51 a Q70) ---
  {
    id: 'ctb-q51',
    subjectId: 'ctb',
    topic: 'Recurso em 2ª Instância no CETRAN (Art. 288 e 289)',
    difficulty: 'Difícil',
    statement: 'Das decisões da JARI que indeferirem o recurso contra a imposição de penalidade de trânsito (Art. 288 do CTB), caberá recurso em 2ª Instância Administrativa perante o:',
    lawReference: 'Art. 288 e 289 do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Conselho Estadual de Trânsito (CETRAN) ou CONTRANDIFE (no DF).' },
      { letter: 'B', text: 'Conselho Nacional de Trânsito (CONTRAN).' },
      { letter: 'C', text: 'Prefeito Municipal do local da infração.' },
      { letter: 'D', text: 'Juizado Especial Cível.' },
      { letter: 'E', text: 'Ministro dos Transportes.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Das decisões da JARI (1ª instância), o recurso de 2ª instância no âmbito estadual/municipal é apreciado pelo CETRAN (Conselho Estadual de Trânsito) ou CONTRANDIFE (no DF), nos termos do Art. 288 e 289 do CTB.',
    explanations: {
      A: 'CORRETA. Art. 288 e 289 CTB: 2ª Instância administrativa = CETRAN / CONTRANDIFE.',
      B: 'INCORRETA. O CONTRAN não é órgão recursal de 2ª instância para infrações comuns estaduais/municipais.',
      C: 'INCORRETA. Prefeito não atua como julgador de recursos de trânsito.',
      D: 'INCORRETA. O Juizado Especial é órgão do Poder Judiciário, não 2ª instância administrativa.',
      E: 'INCORRETA. O Ministro dos Transportes não julga recursos de autuações de trânsito individuais.'
    }
  },
  {
    id: 'ctb-q52',
    subjectId: 'ctb',
    topic: 'Encerramento da Instância Administrativa (Art. 290)',
    difficulty: 'Médio',
    statement: 'A apreciação do recurso em 2ª instância pelo CETRAN encerra a instância administrativa de julgamento de infrações de trânsito (Art. 290 do CTB). Após o encerramento sem provimento do recurso:',
    lawReference: 'Art. 290 do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'A penalidade torna-se definitiva e o valor da multa é exigível, sendo a pontuação inserida no prontuário.' },
      { letter: 'B', text: 'O processo é automaticamente anulado por prescrição.' },
      { letter: 'C', text: 'O condutor ganha o direito a mais 3 instâncias no Ministério do Trabalho.' },
      { letter: 'D', text: 'A multa é cancelada e convertida em doação de sangue.' },
      { letter: 'E', text: 'O auto de infração é incinerado.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Encerrada a instância administrativa com a decisão do CETRAN (Art. 290 do CTB), a penalidade aplicada torna-se definitiva, tornando a multa exigível e os pontos lançados definitivamente no prontuário do condutor.',
    explanations: {
      A: 'CORRETA. Art. 290 CTB: Encerrada a instância administrativa, a penalidade é definitiva e exigível.',
      B: 'INCORRETA. A decisão do recurso esgota o processo administrativo com validade sancionatória.',
      C: 'INCORRETA. Não há instância no Ministério do Trabalho para infrações de trânsito.',
      D: 'INCORRETA. Não há conversão automática.',
      E: 'INCORRETA. O registro permanece digitalizado no RENAINF/RENACH.'
    }
  },
  {
    id: 'ctb-q53',
    subjectId: 'ctb',
    topic: 'Notificação por Edital na Impossibilidade de Notificar (Art. 282)',
    difficulty: 'Médio',
    statement: 'Quando a Notificação da Autuação ou da Penalidade for devolvida por desatualização do endereço do proprietário junto ao Detran (Art. 282, § 1º do CTB), a notificação considera-se:',
    lawReference: 'Art. 282, § 1º do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Válida para todos os efeitos legais.' },
      { letter: 'B', text: 'Nula e o auto de infração arquivado.' },
      { letter: 'C', text: 'Suspensa até que o proprietário vá voluntariamente ao Detran.' },
      { letter: 'D', text: 'Causadora de prisão preventiva imediata.' },
      { letter: 'E', text: 'Enviada para o endereço dos vizinhos.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Art. 282, § 1º do CTB estabelece expressamente que a notificação devolvida por desatualização do endereço do proprietário no registro do veículo será considerada VÁLIDA para todos os efeitos legais (dever do proprietário manter o endereço atualizado).',
    explanations: {
      A: 'CORRETA. Art. 282, § 1º CTB: Notificação enviada ao endereço cadastrado e devolvida por desatualização é VÁLIDA legalmente.',
      B: 'INCORRETA. O proprietário tem a obrigação de manter seu endereço cadastral correto no Detran.',
      C: 'INCORRETA. O processo administrativo não fica paralisado.',
      D: 'INCORRETA. Não há prisão por devolução de notificação postal.',
      E: 'INCORRETA. Não se envia a vizinhos.'
    }
  },
  {
    id: 'ctb-q54',
    subjectId: 'ctb',
    topic: 'Pontuação de Infrações no Prontuário (Art. 259)',
    difficulty: 'Fácil',
    statement: 'A cada infração cometida são computados os seguintes números de pontos no prontuário do condutor (Art. 259 do CTB):',
    lawReference: 'Art. 259 do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Gravíssima: 7 pontos; Grave: 5 pontos; Média: 4 pontos; Leve: 3 pontos.' },
      { letter: 'B', text: 'Gravíssima: 10 pontos; Grave: 8 pontos; Média: 5 pontos; Leve: 2 pontos.' },
      { letter: 'C', text: 'Gravíssima: 5 pontos; Grave: 4 pontos; Média: 3 pontos; Leve: 1 ponto.' },
      { letter: 'D', text: 'Gravíssima: 7 pontos; Grave: 6 pontos; Média: 5 pontos; Leve: 4 pontos.' },
      { letter: 'E', text: 'Gravíssima: 12 pontos; Grave: 9 pontos; Média: 6 pontos; Leve: 3 pontos.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A escala de pontuação fixada pelo Art. 259 do CTB é:\n- Gravíssima: 7 pontos;\n- Grave: 5 pontos;\n- Média: 4 pontos;\n- Leve: 3 pontos.',
    explanations: {
      A: 'CORRETA. Art. 259 CTB: Gravíssima (7), Grave (5), Média (4), Leve (3).',
      B: 'INCORRETA. Tabela incorreta.',
      C: 'INCORRETA. Tabela incorreta.',
      D: 'INCORRETA. Tabela incorreta.',
      E: 'INCORRETA. Tabela incorreta.'
    }
  },
  {
    id: 'ctb-q55',
    subjectId: 'ctb',
    topic: 'Advertência por Escrito (Art. 267)',
    difficulty: 'Médio',
    statement: 'Conforme o Art. 267 do CTB (com redação da Lei nº 14.071/2020), a penalidade de advertência por escrito DEVERÁ ser imposta pela autoridade de trânsito ao infrator quando este cometer infração de natureza leve ou média, desde que:',
    lawReference: 'Art. 267 do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Não tenha cometido nenhuma outra infração nos últimos 12 (doze) meses.' },
      { letter: 'B', text: 'Pague 50% do valor da multa antecipadamente.' },
      { letter: 'C', text: 'Seja maior de 65 anos e aposentado.' },
      { letter: 'D', text: 'Tenha CNH de categoria profissional D ou E.' },
      { letter: 'E', text: 'Apresente atestado de bons antecedentes criminais.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Com a nova redação do Art. 267 do CTB, a conversão da multa em advertência por escrito passou a ser OBRIGATÓRIA ("deverá ser imposta") para infração de natureza LEVE ou MÉDIA, caso o infrator não tenha cometido nenhuma outra infração nos últimos 12 meses.',
    explanations: {
      A: 'CORRETA. Art. 267 CTB: Infração leve ou média + sem outras infrações nos últimos 12 meses = Advertência por escrito obrigatória.',
      B: 'INCORRETA. A advertência por escrito isenta a cobrança de multa.',
      C: 'INCORRETA. Não se exige requisito etário.',
      D: 'INCORRETA. Aplica-se a qualquer condutor habilitado.',
      E: 'INCORRETA. Não se exige antecedentes penais.'
    }
  },
  {
    id: 'ctb-q56',
    subjectId: 'ctb',
    topic: 'Suspensão do Direito de Dirigir por Pontos (Art. 261)',
    difficulty: 'Difícil',
    statement: 'A penalidade de suspensão do direito de dirigir será imposta pelo prazo mínimo de 2 (dois) meses até 8 (oito) meses quando o condutor atingir no período de 12 meses a seguinte pontuação acumulada (Art. 261, I do CTB):',
    lawReference: 'Art. 261, I, "a", "b" e "c" do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: '20 pontos se constar 2 ou mais infrações gravíssimas; 30 pontos se constar 1 gravíssima; ou 40 pontos se não constar nenhuma gravíssima.' },
      { letter: 'B', text: 'Sempre 20 pontos, independentemente da gravidade das infrações.' },
      { letter: 'C', text: 'Sempre 40 pontos para qualquer condutor.' },
      { letter: 'D', text: '10 pontos para condutores amadores e 100 pontos para profissionais.' },
      { letter: 'E', text: '50 pontos absolutos.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Escala gradativa do Art. 261, I do CTB:\n- 20 PONTOS: se constar 2 ou mais infrações gravíssimas;\n- 30 PONTOS: se constar 1 infração gravíssima;\n- 40 PONTOS: se não constar nenhuma infração gravíssima.',
    explanations: {
      A: 'CORRETA. Art. 261, I CTB: 20 pts (2+ gravíssimas), 30 pts (1 gravíssima) e 40 pts (0 gravíssima).',
      B: 'INCORRETA. A regra fixa de 20 pontos foi substituída pela regra gradativa na Lei 14.071/2020.',
      C: 'INCORRETA. 40 pontos exige ausência total de infrações gravíssimas.',
      D: 'INCORRETA. Tabela incorreta.',
      E: 'INCORRETA. Limite máximo geral é 40 pontos.'
    }
  },
  {
    id: 'ctb-q57',
    subjectId: 'ctb',
    topic: 'Limite de 40 Pontos para Condutor Profissional (EAR) (Art. 261)',
    difficulty: 'Difícil',
    statement: 'Para os condutores que exercem atividade remunerada ao veículo (EAR) em qualquer categoria de CNH (Art. 261, § 5º e § 11 do CTB), a suspensão do direito de dirigir por pontuação ocorrerá:',
    lawReference: 'Art. 261, § 11 do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Sempre com 40 (quarenta) pontos, independentemente da natureza das infrações cometidas.' },
      { letter: 'B', text: 'Com 20 pontos se tiver 1 infração média.' },
      { letter: 'C', text: 'Com 10 pontos se dirigir à noite.' },
      { letter: 'D', text: 'Com 50 pontos se for motorista de aplicativo.' },
      { letter: 'E', text: 'Apenas após condenação na Justiça Federal.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Para o condutor que possui a observação EAR (Exercício de Atividade Remunerada) na CNH, o limite de suspensão é FIXO EM 40 PONTOS, independentemente da quantidade de infrações gravíssimas cometidas (Art. 261, § 11 CTB).',
    explanations: {
      A: 'CORRETA. Art. 261, § 11 CTB: O condutor EAR possui limite cravado de 40 pontos independente da natureza das infrações.',
      B: 'INCORRETA. Para EAR o limite não cai para 20 pontos.',
      C: 'INCORRETA. Horário não interfere.',
      D: 'INCORRETA. Não é 50 pontos.',
      E: 'INCORRETA. Trata-se de pontuação administrativa de trânsito.'
    }
  },
  {
    id: 'ctb-q58',
    subjectId: 'ctb',
    topic: 'Renovação do Exame Médico - Regulamentação no CTB (Art. 147)',
    difficulty: 'Fácil',
    statement: 'Nos termos do Art. 147, § 2º do CTB, o exame de aptidão física e mental para renovação da CNH será realizado a cada 10 anos para condutores com idade:',
    lawReference: 'Art. 147, § 2º, I do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Inferior a 50 (cinquenta) anos.' },
      { letter: 'B', text: 'Entre 50 e 69 anos.' },
      { letter: 'C', text: 'Igual ou superior a 70 anos.' },
      { letter: 'D', text: 'Inferior a 18 anos.' },
      { letter: 'E', text: 'Superior a 80 anos.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Art. 147, § 2º, I do CTB: a validade do exame médico é de até 10 anos para condutores com idade INFERIOR A 50 ANOS.',
    explanations: {
      A: 'CORRETA. Art. 147, § 2º, I CTB: Validade de 10 anos para idade < 50 anos.',
      B: 'INCORRETA. Faixa de 50 a 69 anos a validade é de até 5 anos.',
      C: 'INCORRETA. Idade igual ou superior a 70 anos a validade é de até 3 anos.',
      D: 'INCORRETA. Menores de 18 anos não podem habilitar-se.',
      E: 'INCORRETA. Acima de 70 anos o prazo é de 3 anos.'
    }
  },
  {
    id: 'ctb-q59',
    subjectId: 'ctb',
    topic: 'Transitar em Calçadas e Passeios (Art. 193)',
    difficulty: 'Médio',
    statement: 'Transitar com o veículo em calçadas, passeios, passarelas, ciclovias ou gramados (Art. 193 do CTB) configura infração de trânsito com a seguinte valoração:',
    lawReference: 'Art. 193 do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Gravíssima, com multa multiplicada por 3 (três) vezes.' },
      { letter: 'B', text: 'Grave, com multa simples.' },
      { letter: 'C', text: 'Média.' },
      { letter: 'D', text: 'Leve.' },
      { letter: 'E', text: 'Permitida para cortar caminho no trânsito.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Transitar em calçadas, passeios, ciclovias ou canteiros centrais (Art. 193 do CTB) é infração GRAVÍSSIMA (7 pontos), com penalidade de MULTA MULTIPLICADA POR 3 (R$ 880,41).',
    explanations: {
      A: 'CORRETA. Art. 193 CTB: Infração Gravíssima + Multa x3 (R$ 880,41).',
      B: 'INCORRETA. Não é apenas grave.',
      C: 'INCORRETA. Não é média.',
      D: 'INCORRETA. Não é leve.',
      E: 'INCORRETA. Transitabilidade em calçada é estritamente proibida por colocar em risco a vida de pedestres.'
    }
  },
  {
    id: 'ctb-q60',
    subjectId: 'ctb',
    topic: 'Forçar Passagem entre Veículos (Art. 191)',
    difficulty: 'Difícil',
    statement: 'Forçar passagem entre veículos que, transitando em sentidos opostos, estejam na iminência de passar um pelo outro ao realizar operação de ultrapassagem (Art. 191 do CTB) acarreta:',
    lawReference: 'Art. 191 do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Infração Gravíssima, com multa multiplicada por 10 (dez) vezes e suspensão do direito de dirigir.' },
      { letter: 'B', text: 'Infração Grave com 5 pontos.' },
      { letter: 'C', text: 'Infração Média com remoção do veículo.' },
      { letter: 'D', text: 'Infração Leve.' },
      { letter: 'E', text: 'Isenção de pena se os dois carros forem pequenos.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Forçar passagem entre veículos em sentidos opostos (Art. 191 do CTB) é uma das infrações mais perigosas do código: Infração GRAVÍSSIMA, com MULTA MULTIPLICADA POR 10 (R$ 2.934,70) e suspensão do direito de dirigir.',
    explanations: {
      A: 'CORRETA. Art. 191 CTB: Infração Gravíssima + Multa x10 + Suspensão do direito de dirigir.',
      B: 'INCORRETA. A gravidade extrema eleva para o fator multiplicador x10.',
      C: 'INCORRETA. Não é média.',
      D: 'INCORRETA. Não é leve.',
      E: 'INCORRETA. Tamanho do carro é irrelevante.'
    }
  },
  {
    id: 'ctb-q61',
    subjectId: 'ctb',
    topic: 'Uso de Dispositivo Alarme Não Autorizado (Art. 229)',
    difficulty: 'Médio',
    statement: 'Usar no veículo alarme ou aparelho produtor de som que perturbe o sossego público, em desacordo com as normas fixadas pelo CONTRAN (Art. 229 do CTB), constitui infração:',
    lawReference: 'Art. 229 do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Média, com multa e apreensão/remoção do veículo para regularização.' },
      { letter: 'B', text: 'Gravíssima com cassação da CNH.' },
      { letter: 'C', text: 'Grave sem multa.' },
      { letter: 'D', text: 'Leve.' },
      { letter: 'E', text: 'Permitida aos finais de semana.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Usar alarme ou som em desacordo com as normas do CONTRAN (Art. 229 do CTB) é infração MÉDIA (4 pontos), com multa e retenção do veículo para regularização.',
    explanations: {
      A: 'CORRETA. Art. 229 CTB: Infração Média + multa + retenção/remoção do veículo.',
      B: 'INCORRETA. Não é gravíssima.',
      C: 'INCORRETA. Não é grave.',
      D: 'INCORRETA. Não é leve.',
      E: 'INCORRETA. Perturbação do sossego viário é proibida em qualquer dia.'
    }
  },
  {
    id: 'ctb-q62',
    subjectId: 'ctb',
    topic: 'Licenciamento Anual Obrigatório (Art. 130 e 131)',
    difficulty: 'Fácil',
    statement: 'Todo veículo automotor para circular na via pública deve ser licenciado anualmente pelo órgão executivo de trânsito (Art. 130 do CTB). O Certificado de Licenciamento Anual (CRLV-e) somente será expedido após a quitação de:',
    lawReference: 'Art. 131, § 2º do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Todos os débitos vinculados ao veículo relativos a tributos (IPVA), encargos e multas de trânsito e ambientais já transitadas em julgado.' },
      { letter: 'B', text: 'Apenas a taxa de emplacamento inicial.' },
      { letter: 'C', text: 'Exclusivamente o imposto sobre renda do proprietário.' },
      { letter: 'D', text: 'Mensalidade do seguro privado facultativo de danos.' },
      { letter: 'E', text: 'Apenas a contribuição sindical do motorista.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Art. 131, § 2º do CTB dispõe que o licenciamento anual (CRLV-e) só é emitido após a quitação integral de todos os débitos de IPVA, taxas e multas de trânsito/ambientais vinculadas ao veículo.',
    explanations: {
      A: 'CORRETA. Art. 131, § 2º CTB: Exige quitação de tributos, taxas e multas de trânsito notificadas.',
      B: 'INCORRETA. A quitação anual abrange todos os débitos em aberto.',
      C: 'INCORRETA. Imposto de Renda (IRPF) não é tributo vinculado ao veículo no Detran.',
      D: 'INCORRETA. Seguro facultativo privado não é requisito para emissão do CRLV-e.',
      E: 'INCORRETA. Contribuição sindical não vincula licenciamento veicular.'
    }
  },
  {
    id: 'ctb-q63',
    subjectId: 'ctb',
    topic: 'Conduzir Veículo sem Estar Licenciado (Art. 230)',
    difficulty: 'Médio',
    statement: 'Conduzir veículo que não esteja registrado e devidamente licenciado (Art. 230, V do CTB) configura infração de trânsito de natureza:',
    lawReference: 'Art. 230, V do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Gravíssima, com multa e remoção do veículo.' },
      { letter: 'B', text: 'Grave, sem remoção.' },
      { letter: 'C', text: 'Média.' },
      { letter: 'D', text: 'Leve.' },
      { letter: 'E', text: 'Isenta se o proprietário alegar esquecimento de pagamento.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Conduzir veículo sem estar registrado e licenciado (Art. 230, V do CTB) é infração GRAVÍSSIMA (7 pontos), com penalidade de multa e medida administrativa de remoção do veículo ao pátio.',
    explanations: {
      A: 'CORRETA. Art. 230, V CTB: Infração Gravíssima + 7 pontos + remoção do veículo.',
      B: 'INCORRETA. Não é grave.',
      C: 'INCORRETA. Não é média.',
      D: 'INCORRETA. Não é leve.',
      E: 'INCORRETA. Alegação de esquecimento não anula a autuação.'
    }
  },
  {
    id: 'ctb-q64',
    subjectId: 'ctb',
    topic: 'Transitar com Veículo Derramando Carga na Via (Art. 231)',
    difficulty: 'Médio',
    statement: 'Transitar com o veículo derramando, lançando ou arrastando sobre a via a carga que estiver transportando ou combustível/lubrificante (Art. 231, II do CTB) constitui infração:',
    lawReference: 'Art. 231, II do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Gravíssima, com multa e retenção do veículo para regularização.' },
      { letter: 'B', text: 'Grave.' },
      { letter: 'C', text: 'Média.' },
      { letter: 'D', text: 'Leve.' },
      { letter: 'E', text: 'Permitida em rodovias rurais.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Derramar ou lançar carga/combustível na pista (Art. 231, II do CTB) é infração GRAVÍSSIMA (7 pontos), com penalidade de multa e retenção do veículo para regularização da carga.',
    explanations: {
      A: 'CORRETA. Art. 231, II CTB: Infração Gravíssima + retenção do veículo.',
      B: 'INCORRETA. Não é grave.',
      C: 'INCORRETA. Lançar objetos/saco de lixo pela janela é média (Art. 172), mas derramar a carga do veículo sobre a pista é GRAVÍSSIMA.',
      D: 'INCORRETA. Não é leve.',
      E: 'INCORRETA. O risco de derrapagem e acidentes veda a prática.'
    }
  },
  {
    id: 'ctb-q65',
    subjectId: 'ctb',
    topic: 'Atirar Objetos ou Lixo do Veículo (Art. 172)',
    difficulty: 'Fácil',
    statement: 'Atirar do veículo ou abandonar na via objetos ou substâncias (ex: latinhas, sacos de lixo ou bitucas de cigarro) (Art. 172 do CTB) constitui infração de trânsito de natureza:',
    lawReference: 'Art. 172 do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Média (4 pontos).' },
      { letter: 'B', text: 'Gravíssima (7 pontos).' },
      { letter: 'C', text: 'Grave (5 pontos).' },
      { letter: 'D', text: 'Leve (3 pontos).' },
      { letter: 'E', text: 'Infração isenta de multa por ser delito ambiental.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Atirar objetos ou lixo para fora do veículo (Art. 172 do CTB) é infração MÉDIA (4 pontos), sujeita à penalidade de multa.',
    explanations: {
      A: 'CORRETA. Art. 172 CTB: Infração Média (4 pontos).',
      B: 'INCORRETA. Não é gravíssima.',
      C: 'INCORRETA. Não é grave.',
      D: 'INCORRETA. Não é leve.',
      E: 'INCORRETA. É infração de trânsito punida com multa.'
    }
  },
  {
    id: 'ctb-q66',
    subjectId: 'ctb',
    topic: 'Estacionar Impedindo a Saída de Outro Veículo (Art. 181)',
    difficulty: 'Fácil',
    statement: 'Estacionar o veículo onde houver meio-fio rebaixado destinado à entrada ou saída de veículos (garagens) (Art. 181, IX do CTB) configura infração de natureza:',
    lawReference: 'Art. 181, IX do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Média, com multa e remoção do veículo.' },
      { letter: 'B', text: 'Gravíssima, com cassação da CNH.' },
      { letter: 'C', text: 'Grave, sem remoção.' },
      { letter: 'D', text: 'Leve.' },
      { letter: 'E', text: 'Permitida se a garagem for do próprio condutor.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Estacionar na guia rebaixada bloqueando garagem (Art. 181, IX do CTB) é infração MÉDIA (4 pontos), sujeita a multa e remoção do veículo ao pátio.',
    explanations: {
      A: 'CORRETA. Art. 181, IX CTB: Infração Média + remoção do veículo.',
      B: 'INCORRETA. Não é gravíssima.',
      C: 'INCORRETA. Cabe a medida administrativa de remoção.',
      D: 'INCORRETA. Não é leve.',
      E: 'INCORRETA. A infração se caracteriza ao bloquear a guia rebaixada de acesso.'
    }
  },
  {
    id: 'ctb-q67',
    subjectId: 'ctb',
    topic: 'Conduzir Motocicleta Carregando Criança Menor de 10 Anos (Art. 244)',
    difficulty: 'Difícil',
    statement: 'Conduzir motocicleta, motoneta ou ciclomotor transportando criança menor de 10 (dez) anos ou que não tenha, nas circunstâncias, condições de cuidar da própria segurança (Art. 244, V do CTB com redação da Lei 14.071/20) acarreta:',
    lawReference: 'Art. 244, V do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Infração Gravíssima, com multa e suspensão do direito de dirigir.' },
      { letter: 'B', text: 'Infração Grave com 5 pontos apenas.' },
      { letter: 'C', text: 'Infração Média.' },
      { letter: 'D', text: 'Infração Leve.' },
      { letter: 'E', text: 'Permitida se a criança estiver usando capacete infantil.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A Lei nº 14.071/2020 elevou a idade mínima para transportar crianças em motocicletas de 7 para 10 ANOS. Transportar criança menor de 10 anos em moto (Art. 244, V CTB) é infração GRAVÍSSIMA com suspensão do direito de dirigir.',
    explanations: {
      A: 'CORRETA. Art. 244, V CTB: Criança menor de 10 anos em moto = Infração Gravíssima + Suspensão da CNH.',
      B: 'INCORRETA. A norma é auto-suspensiva gravíssima.',
      C: 'INCORRETA. Não é média.',
      D: 'INCORRETA. Não é leve.',
      E: 'INCORRETA. Mesmo de capacete, o transporte de menores de 10 anos em motocicletas é estritamente proibido.'
    }
  },
  {
    id: 'ctb-q68',
    subjectId: 'ctb',
    topic: 'Conduzir Moto Fazendo Malabarismos ou em Uma Roda (Art. 244)',
    difficulty: 'Médio',
    statement: 'Conduzir motocicleta, motoneta ou ciclomotor fazendo malabarismo ou equilibrando-se apenas em uma roda ("empinar a moto") (Art. 244, III do CTB) é infração:',
    lawReference: 'Art. 244, III do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Gravíssima, com multa, suspensão do direito de dirigir e recolhimento do documento de habilitação.' },
      { letter: 'B', text: 'Grave sem suspensão.' },
      { letter: 'C', text: 'Média.' },
      { letter: 'D', text: 'Leve.' },
      { letter: 'E', text: 'Permitida em vias urbanas secundárias.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Fazer malabarismo ou empinar moto em via pública (Art. 244, III CTB) é infração GRAVÍSSIMA, sujeita a multa, suspensão direta do direito de dirigir e recolhimento da CNH.',
    explanations: {
      A: 'CORRETA. Art. 244, III CTB: Infração Gravíssima + Suspensão direta do direito de dirigir + recolhimento da CNH.',
      B: 'INCORRETA. Trata-se de infração auto-suspensiva.',
      C: 'INCORRETA. Não é média.',
      D: 'INCORRETA. Não é leve.',
      E: 'INCORRETA. Malabarismo em via pública é conduta proibida de elevado risco.'
    }
  },
  {
    id: 'ctb-q69',
    subjectId: 'ctb',
    topic: 'Renovação do Exame Médico - Faixa Etária de 50 a 69 Anos (Art. 147)',
    difficulty: 'Fácil',
    statement: 'De acordo com o Art. 147, § 2º, II do CTB, a renovação do exame de aptidão física e mental para condutores com idade igual ou superior a 50 (cinquenta) anos e inferior a 70 (setenta) anos ocorrerá a cada:',
    lawReference: 'Art. 147, § 2º, II do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: '5 (cinco) anos.' },
      { letter: 'B', text: '10 (dez) anos.' },
      { letter: 'C', text: '3 (três) anos.' },
      { letter: 'D', text: '2 (dois) anos.' },
      { letter: 'E', text: '1 (um) ano.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Para a faixa etária de 50 a 69 anos de idade, o prazo máximo de renovação do exame médico da CNH é de 5 (cinco) anos (Art. 147, § 2º, II CTB).',
    explanations: {
      A: 'CORRETA. Art. 147, § 2º, II CTB: Validade de 5 anos para a faixa etária de 50 a 69 anos.',
      B: 'INCORRETA. 10 anos aplica-se aos condutores com idade inferior a 50 anos.',
      C: 'INCORRETA. 3 anos aplica-se aos condutores com idade de 70 anos ou mais.',
      D: 'INCORRETA. 2 anos é incorreto.',
      E: 'INCORRETA. 1 ano é validade da PPD.'
    }
  },
  {
    id: 'ctb-q70',
    subjectId: 'ctb',
    topic: 'Renovação do Exame Médico - Faixa Etária de 70 Anos ou Mais (Art. 147)',
    difficulty: 'Fácil',
    statement: 'Para os condutores com idade igual ou superior a 70 (setenta) anos (Art. 147, § 2º, III do CTB), a validade máxima do exame de aptidão física e mental será de:',
    lawReference: 'Art. 147, § 2º, III do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: '3 (três) anos.' },
      { letter: 'B', text: '5 (cinco) anos.' },
      { letter: 'C', text: '10 (dez) anos.' },
      { letter: 'D', text: '6 (seis) meses.' },
      { letter: 'E', text: '2 (dois) anos.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Para condutores com 70 anos de idade ou mais, a validade do exame médico de renovação da CNH é de até 3 (três) anos (Art. 147, § 2º, III CTB).',
    explanations: {
      A: 'CORRETA. Art. 147, § 2º, III CTB: Validade máxima de 3 anos para condutores maiores de 70 anos.',
      B: 'INCORRETA. 5 anos é para a faixa de 50 a 69 anos.',
      C: 'INCORRETA. 10 anos é para menores de 50 anos.',
      D: 'INCORRETA. 6 meses não é padrão regulamentar.',
      E: 'INCORRETA. 2 anos é incorreto.'
    }
  },
  {
    id: 'ctb-q71',
    subjectId: 'ctb',
    topic: 'Manusear ou Segurar Celular ao Volante (Art. 252)',
    difficulty: 'Fácil',
    statement: 'De acordo com o parágrafo único do Art. 252 do CTB, a conduta de dirigir veículo segurando ou manuseando telefone celular enquanto conduz constitui infração de trânsito de natureza:',
    lawReference: 'Art. 252, parágrafo único do CTB',
    bancaTag: 'Vunesp / DETRAN 2026',
    options: [
      { letter: 'A', text: 'Gravíssima (7 pontos na CNH).' },
      { letter: 'B', text: 'Grave (5 pontos na CNH).' },
      { letter: 'C', text: 'Média (4 pontos na CNH).' },
      { letter: 'D', text: 'Leve (3 pontos na CNH).' },
      { letter: 'E', text: 'Permitida apenas se o veículo estiver em velocidade inferior a 20 km/h.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A Lei nº 13.281/2016 alterou o Art. 252 do CTB, estipulando que a conduta de dirigir veículo SEGURANDO ou MANUSEANDO telefone celular passou a ser classificada expressamente como infração GRAVÍSSIMA (7 pontos), punida com multa.',
    explanations: {
      A: 'CORRETA. Art. 252, parágrafo único: Segurar ou manusear celular ao dirigir = Infração Gravíssima (7 pontos).',
      B: 'INCORRETA. O uso simples do celular sem segurar/manusear (ex: fone de ouvido) era médio, mas segurar ou manusear é GRAVÍSSIMA.',
      C: 'INCORRETA. Não é mais média.',
      D: 'INCORRETA. Não é leve.',
      E: 'INCORRETA. É proibido em qualquer velocidade com o veículo em movimento.'
    }
  },
  {
    id: 'ctb-q72',
    subjectId: 'ctb',
    topic: 'Penalidades por Dirigir Sob a Influência de Álcool (Art. 165)',
    difficulty: 'Médio',
    statement: 'Dirigir sob a influência de álcool ou de qualquer outra substância psicoativa que determine dependência (Art. 165 do CTB) acarreta ao condutor as seguintes penalidades e medidas administrativas:',
    lawReference: 'Art. 165 do CTB',
    bancaTag: 'Vunesp / DETRAN 2026',
    options: [
      { letter: 'A', text: 'Infração Gravíssima, multa multiplicada por 10 (dez) e suspensão do direito de dirigir por 12 (doze) meses, com recolhimento da CNH e retenção do veículo.' },
      { letter: 'B', text: 'Infração Grave, com multa simples e apreensão imediata da CNH por 5 anos.' },
      { letter: 'C', text: 'Infração Média, com multa e recolhimento do veículo ao pátio sem suspensão.' },
      { letter: 'D', text: 'Infração Gravíssima, com multa multiplicada por 5 e suspensão por 6 meses.' },
      { letter: 'E', text: 'Apenas advertência por escrito na primeira ocorrência.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Art. 165 do CTB prevê: Infração GRAVÍSSIMA, Multa multiplicada por 10 (R$ 2.934,70) e Suspensão do direito de dirigir por 12 meses. As medidas administrativas são recolhimento do documento de habilitação e retenção do veículo.',
    explanations: {
      A: 'CORRETA. Art. 165 CTB: Infração Gravíssima + Multa x10 + Suspensão da CNH por 12 meses + recolhimento do documento + retenção do veículo.',
      B: 'INCORRETA. Não é infração grave, e sim gravíssima.',
      C: 'INCORRETA. Há previsão expressa de suspensão da CNH.',
      D: 'INCORRETA. O fator multiplicador é 10 e o prazo de suspensão é de 12 meses.',
      E: 'INCORRETA. Não cabe advertência por escrito para infração gravíssima.'
    }
  },
  {
    id: 'ctb-q73',
    subjectId: 'ctb',
    topic: 'Recusa ao Teste do Etilômetro / Bafômetro (Art. 165-A)',
    difficulty: 'Médio',
    statement: 'O condutor que recusar submeter-se a teste, exame clínico, perícia ou outro procedimento que permita certificar influência de álcool (Art. 165-A do CTB) estará sujeito a:',
    lawReference: 'Art. 165-A do CTB',
    bancaTag: 'Vunesp / DETRAN 2026',
    options: [
      { letter: 'A', text: 'As mesmas penalidades e medidas administrativas estabelecidas no Art. 165 (Infração Gravíssima, Multa x10 e Suspensão por 12 meses).' },
      { letter: 'B', text: 'Apenas multa de valor médio sem suspensão do direito de dirigir.' },
      { letter: 'C', text: 'Prisão em flagrante obrigatória por crime hediondo.' },
      { letter: 'D', text: 'Infração Grave com perda de 5 pontos, sem retenção do veículo.' },
      { letter: 'E', text: 'Isenção total de sanção por ser direito constitucional não produzir prova contra si mesmo na esfera administrativa.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Art. 165-A do CTB tipifica a recusa expressa ao bafômetro/etilômetro, aplicando as mesmíssimas penalidades do Art. 165: Infração GRAVÍSSIMA, Multa multiplicada por 10 (R$ 2.934,70) e Suspensão da CNH por 12 meses. O STF confirmou a constitucionalidade desse dispositivo.',
    explanations: {
      A: 'CORRETA. Art. 165-A CTB: A recusa atrai exatamente as mesmas penalidades de dirigir embriagado (Gravíssima, Multa x10 e Suspensão 12m).',
      B: 'INCORRETA. A penalidade administrativa é severa e idêntica ao Art. 165.',
      C: 'INCORRETA. A recusa por si só é infração administrativa, não constituindo crime de trânsito direto sem sinais de alteração.',
      D: 'INCORRETA. A infração é de natureza gravíssima.',
      E: 'INCORRETA. O STF pacificou que as sanções administrativas pela recusa são constitucionais.'
    }
  },
  {
    id: 'ctb-q74',
    subjectId: 'ctb',
    topic: 'Crime de Embriaguez ao Volante (Art. 306)',
    difficulty: 'Difícil',
    statement: 'Conduzir veículo automotor com capacidade psicomotora alterada em razão da influência de álcool ou de outra substância psicoativa (Art. 306 do CTB) constitui CRIME DE TRÂNSITO. A conduta é constatada mediante concentração igual ou superior a:',
    lawReference: 'Art. 306, § 1º, I do CTB',
    bancaTag: 'Vunesp / DETRAN 2026',
    options: [
      { letter: 'A', text: '6 decigramas de álcool por litro de sangue ou 0,34 miligrama de álcool por litro de ar alveolar.' },
      { letter: 'B', text: '2 decigramas de álcool por litro de sangue ou 0,10 miligrama por litro de ar alveolar.' },
      { letter: 'C', text: '10 decigramas de álcool por litro de sangue ou 0,50 miligrama por litro de ar alveolar.' },
      { letter: 'D', text: 'Qualquer quantidade superior a zero, sem necessidade de limite mínimo em miligramas.' },
      { letter: 'E', text: '12 decigramas de álcool por litro de sangue.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Segundo o Art. 306, § 1º, I do CTB, a conduta delitiva de embriaguez ao volante é comprovada quando a medição aponta concentração igual ou superior a 6 decigramas de álcool por litro de sangue (6 g/L) ou igual ou superior a 0,34 miligrama de álcool por litro de ar alveolar (0,34 mg/L no etilômetro, descontada a margem de erro).',
    explanations: {
      A: 'CORRETA. Art. 306, § 1º, I CTB: 6 decigramas/litro de sangue ou 0,34 miligrama/litro de ar alveolar caracterizam o crime de trânsito.',
      B: 'INCORRETA. Valores abaixo do patamar penal criminal do CTB.',
      C: 'INCORRETA. Limite superior ao estabelecido no texto legal.',
      D: 'INCORRETA. Qualquer quantidade atrai a infração administrativa (Art. 165), mas para o CRIME do Art. 306 exige-se o limite de 0,34 mg/L de ar ou 6 dgl/L de sangue ou sinais de alteração.',
      E: 'INCORRETA. O limite correto fixado pela lei é 6 decigramas.'
    }
  },
  {
    id: 'ctb-q75',
    subjectId: 'ctb',
    topic: 'Exame Toxicológico Periódico para Categorias C, D e E (Art. 148-A)',
    difficulty: 'Médio',
    statement: 'Conforme o Art. 148-A do CTB, os condutores das categorias C, D e E deverão comprovar resultado negativo em exame toxicológico para obtenção e renovação da CNH, bem como realizar um exame intermediário a cada:',
    lawReference: 'Art. 148-A, § 2º do CTB',
    bancaTag: 'Vunesp / DETRAN 2026',
    options: [
      { letter: 'A', text: '2 (dois) anos e 6 (seis) meses, para condutores com idade inferior a 70 anos.' },
      { letter: 'B', text: '1 (um) ano, independente da idade.' },
      { letter: 'C', text: '5 (cinco) anos, juntamente com a renovação da CNH.' },
      { letter: 'D', text: '3 (três) anos, exclusivamente para condutores com atividade remunerada (EAR).' },
      { letter: 'E', text: '6 (seis) meses para motoristas de ônibus rodoviários.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Art. 148-A, § 2º do CTB impõe o exame toxicológico periódico intermediário a cada 2 anos e 6 meses (30 meses) para os motoristas habilitados nas categorias C, D e E com idade inferior a 70 anos.',
    explanations: {
      A: 'CORRETA. Art. 148-A, § 2º CTB: Exame toxicológico intermediário a cada 2 anos e 6 meses.',
      B: 'INCORRETA. Não é anual.',
      C: 'INCORRETA. 5 anos é o prazo do exame médico de renovação para a faixa de 50 a 69 anos.',
      D: 'INCORRETA. O prazo é de 2 anos e 6 meses para todos os habilitados nas categorias C, D e E.',
      E: 'INCORRETA. Não há especificação de 6 meses para ônibus.'
    }
  },
  {
    id: 'ctb-q76',
    subjectId: 'ctb',
    topic: 'Infração por Dirigir com Exame Toxicológico Vencido (Art. 165-B e 165-C)',
    difficulty: 'Difícil',
    statement: 'Dirigir veículo para o qual se exige habilitação nas categorias C, D ou E sem realizar o exame toxicológico após 30 (trinta) dias do vencimento do prazo estabelecido (Art. 165-B do CTB) constitui infração:',
    lawReference: 'Art. 165-B do CTB',
    bancaTag: 'Vunesp / DETRAN 2026',
    options: [
      { letter: 'A', text: 'Gravíssima, com multa multiplicada por 5 (cinco) e, em caso de reincidência no período de 12 meses, multa multiplicada por 10 e suspensão do direito de dirigir.' },
      { letter: 'B', text: 'Grave, sem fator multiplicador.' },
      { letter: 'C', text: 'Média, com retenção do veículo até a apresentação de condutor habilitado.' },
      { letter: 'D', text: 'Leve, sujeita apenas a advertência.' },
      { letter: 'E', text: 'Isenta se o veículo for de passeio sem carga.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Conforme o Art. 165-B do CTB (com alterações recentes), conduzir veículo das categorias C, D ou E sem realizar o exame toxicológico vencido há mais de 30 dias é infração GRAVÍSSIMA, punida com multa multiplicada por 5 (R$ 1.467,35). Em caso de reincidência no período de 12 meses, a multa é multiplicada por 10 com suspensão do direito de dirigir.',
    explanations: {
      A: 'CORRETA. Art. 165-B CTB: Infração Gravíssima + Multa x5 (R$ 1.467,35) e reincidência em 12 meses com Multa x10 + suspensão.',
      B: 'INCORRETA. A infração é gravíssima com fator multiplicador.',
      C: 'INCORRETA. Não é média.',
      D: 'INCORRETA. Trata-se de conduta de elevado risco punida com gravíssima.',
      E: 'INCORRETA. Se a habilitação for C, D ou E, a exigência do toxicológico é vinculada à categoria da CNH.'
    }
  },
  {
    id: 'ctb-q77',
    subjectId: 'ctb',
    topic: 'Sistema de Pontuação da CNH (Art. 261)',
    difficulty: 'Médio',
    statement: 'De acordo com o Art. 261, I do CTB (com redação da Lei 14.071/2020), a penalidade de suspensão do direito de dirigir por pontuação será aplicada ao condutor que atingir, no período de 12 (doze) meses, a seguinte gradação de pontos:',
    lawReference: 'Art. 261, I, "a", "b" e "c" do CTB',
    bancaTag: 'Vunesp / DETRAN 2026',
    options: [
      { letter: 'A', text: '20 pontos (se tiver 2 ou mais infrações gravíssimas); 30 pontos (se tiver 1 infração gravíssima); 40 pontos (se não tiver nenhuma infração gravíssima).' },
      { letter: 'B', text: '20 pontos em qualquer hipótese, independente da gravidade das infrações.' },
      { letter: 'C', text: '30 pontos para condutores comuns e 50 pontos para condutores EAR.' },
      { letter: 'D', text: '40 pontos para quem tiver 2 infrações gravíssimas e 20 pontos para quem tiver apenas leves.' },
      { letter: 'E', text: '15 pontos para condutores novatos com PPD.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A Lei nº 14.071/2020 estabeleceu o limite variável de pontos no prontuário em 12 meses:\n- 20 pontos: se constarem 2 ou mais infrações gravíssimas;\n- 30 pontos: se constar 1 infração gravíssima;\n- 40 pontos: se NÃO constar nenhuma infração gravíssima (ou para condutores que exercem atividade remunerada - EAR, independentemente das infrações).',
    explanations: {
      A: 'CORRETA. Art. 261, I CTB: 20 pts (2+ gravíssimas), 30 pts (1 gravíssima) e 40 pts (0 gravíssima ou condutor EAR).',
      B: 'INCORRETA. O limite fixo de 20 pontos vigia na legislação antiga e foi alterado pela Lei 14.071/20.',
      C: 'INCORRETA. Os limites legais são 20, 30 e 40 pontos.',
      D: 'INCORRETA. A gradação correta é inversa à quantidade de gravíssimas cometidas.',
      E: 'INCORRETA. Para detentor de PPD, a regra é a não reincidência em média ou cometimento de grave/gravíssima (Art. 148, § 3º).'
    }
  },
  {
    id: 'ctb-q78',
    subjectId: 'ctb',
    topic: 'Validade da CNH para Condutores Menores de 50 Anos (Art. 147)',
    difficulty: 'Fácil',
    statement: 'Segundo o Art. 147, § 2º, I do CTB, o exame de aptidão física e mental para renovação da CNH terá validade máxima de 10 (dez) anos para os condutores com idade:',
    lawReference: 'Art. 147, § 2º, I do CTB',
    bancaTag: 'Vunesp / DETRAN 2026',
    options: [
      { letter: 'A', text: 'Inferior a 50 (cinquenta) anos.' },
      { letter: 'B', text: 'Inferior a 60 (sessenta) anos.' },
      { letter: 'C', text: 'Entre 18 e 25 anos apenas.' },
      { letter: 'D', text: 'Superior a 50 anos e inferior a 70 anos.' },
      { letter: 'E', text: 'Inferior a 30 anos.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Pela redação atual do CTB (Lei 14.071/20), condutores com idade INFERIOR A 50 ANOS têm renovação do exame de aptidão física e mental a cada 10 ANOS.',
    explanations: {
      A: 'CORRETA. Art. 147, § 2º, I CTB: Validade de 10 anos para condutores com menos de 50 anos de idade.',
      B: 'INCORRETA. A faixa limite legal é 50 anos, e não 60.',
      C: 'INCORRETA. Abrange todos os motoristas menores de 50 anos.',
      D: 'INCORRETA. A faixa de 50 a 69 anos tem validade de 5 anos.',
      E: 'INCORRETA. Limite de 30 anos não existe no dispositivo.'
    }
  },
  {
    id: 'ctb-q79',
    subjectId: 'ctb',
    topic: 'Cassação do Documento de Habilitação (Art. 263)',
    difficulty: 'Médio',
    statement: 'A cassação da Carteira Nacional de Habilitação (CNH), prevista no Art. 263 do CTB, será aplicada no seguinte caso:',
    lawReference: 'Art. 263, I, II e III do CTB',
    bancaTag: 'Vunesp / DETRAN 2026',
    options: [
      { letter: 'A', text: 'Quando, suspenso o direito de dirigir, o infrator conduzir qualquer veículo; ou em caso de reincidência, no período de 12 meses, nas infrações especificadas no inciso II do artigo.' },
      { letter: 'B', text: 'Quando o condutor acumular 10 pontos de infrações leves no período de 2 anos.' },
      { letter: 'C', text: 'Sempre que o condutor atrasar o pagamento do licenciamento anual do veículo.' },
      { letter: 'D', text: 'Na primeira autuação por estacionar em local proibido.' },
      { letter: 'E', text: 'Apenas após condenação criminal transitada em julgado por crime não relacionado ao trânsito.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Art. 263 do CTB disciplina a cassação da CNH: I - quando, suspenso o direito de dirigir, o infrator conduzir qualquer veículo; II - em caso de reincidência, no período de 12 meses, das infrações previstas no art. 162, III, 163, 164, 165, 173, 174 e 175; III - quando condenado judicialmente por delito de trânsito.',
    explanations: {
      A: 'CORRETA. Art. 263 CTB: Dirigir com a CNH suspensa ou reincidir em infrações específicas em 12 meses acarreta CASSAÇÃO da CNH.',
      B: 'INCORRETA. Acúmulo de pontos leves não gera cassação.',
      C: 'INCORRETA. Licenciamento atrasado é infração gravíssima (Art. 230, V), mas não gera cassação direta.',
      D: 'INCORRETA. Estacionamento proibido não é hipótese de cassação.',
      E: 'INCORRETA. A cassação pode ser aplicada na esfera administrativa pelo órgão de trânsito.'
    }
  },
  {
    id: 'ctb-q80',
    subjectId: 'ctb',
    topic: 'Prazo para Transferência de Propriedade do Veículo (Art. 123)',
    difficulty: 'Fácil',
    statement: 'No caso de transferência de propriedade de veículo automotor, o novo proprietário deverá adotar as providências necessárias à efetivação da expedição do novo Certificado de Registro de Veículo (CRV) no prazo máximo de (Art. 123, § 1º do CTB):',
    lawReference: 'Art. 123, § 1º do CTB',
    bancaTag: 'Vunesp / DETRAN 2026',
    options: [
      { letter: 'A', text: '30 (trinta) dias.' },
      { letter: 'B', text: '15 (quinze) dias.' },
      { letter: 'C', text: '60 (sessenta) dias.' },
      { letter: 'D', text: '90 (noventa) dias.' },
      { letter: 'E', text: '6 (seis) meses.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Conforme o Art. 123, § 1º do CTB, o prazo para o comprador efetuar a transferência de propriedade e expedir o novo documento do veículo é de 30 (trinta) dias contados da data da assinatura do título de transferência.',
    explanations: {
      A: 'CORRETA. Art. 123, § 1º CTB: Prazo legal expressamente fixado em 30 dias.',
      B: 'INCORRETA. 15 dias é incorreto.',
      C: 'INCORRETA. 60 dias excede o prazo legal.',
      D: 'INCORRETA. 90 dias não se aplica.',
      E: 'INCORRETA. 6 meses é um período excessivo.'
    }
  },
  {
    id: 'ctb-q81',
    subjectId: 'ctb',
    topic: 'Infração por Não Efetuar Transferência de Veículo no Prazo (Art. 233)',
    difficulty: 'Médio',
    statement: 'Deixar de efetuar o registro de veículo no prazo de 30 (trinta) dias, junto ao órgão executivo de trânsito, quando for transferida a propriedade (Art. 233 do CTB com redação da Lei 14.071/20), constitui infração:',
    lawReference: 'Art. 233 do CTB',
    bancaTag: 'Vunesp / DETRAN 2026',
    options: [
      { letter: 'A', text: 'Média, com penalidade de multa.' },
      { letter: 'B', text: 'Grave, com retenção do veículo e 5 pontos na CNH.' },
      { letter: 'C', text: 'Gravíssima, com apreensão do veículo.' },
      { letter: 'D', text: 'Leve, sem aplicação de valor pecuniário.' },
      { letter: 'E', text: 'Conduta atípica não sujeita a sanção administrativa.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Com as alterações trazidas pela Lei nº 14.071/2020, o Art. 233 do CTB reclassificou a infração de deixar de efetuar a transferência do veículo no prazo de 30 dias para a natureza MÉDIA (4 pontos), punida com multa.',
    explanations: {
      A: 'CORRETA. Art. 233 CTB (redação Lei 14.071/20): Infração Média com penalidade de multa.',
      B: 'INCORRETA. Na redação antiga era grave, mas foi alterada para MÉDIA.',
      C: 'INCORRETA. Não é gravíssima.',
      D: 'INCORRETA. Não é leve.',
      E: 'INCORRETA. É infração tipificada no CTB.'
    }
  },
  {
    id: 'ctb-q82',
    subjectId: 'ctb',
    topic: 'Transitar na Faixa ou Via Exclusiva para Transporte Coletivo (Art. 184)',
    difficulty: 'Fácil',
    statement: 'Transitar com o veículo na faixa ou via de trânsito exclusivo regulamentada para o transporte público coletivo de passageiros (Art. 184, III do CTB) constitui infração:',
    lawReference: 'Art. 184, III do CTB',
    bancaTag: 'Vunesp / DETRAN 2026',
    options: [
      { letter: 'A', text: 'Gravíssima, com multa e remoção do veículo.' },
      { letter: 'B', text: 'Grave, sem remoção.' },
      { letter: 'C', text: 'Média.' },
      { letter: 'D', text: 'Leve.' },
      { letter: 'E', text: 'Permitida aos táxis sem passageiros.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Art. 184, III do CTB estabelece que transitar na faixa ou via de circulação exclusiva para transporte coletivo de passageiros é infração GRAVÍSSIMA, sujeita a multa e remoção do veículo ao pátio.',
    explanations: {
      A: 'CORRETA. Art. 184, III CTB: Infração Gravíssima + remoção do veículo.',
      B: 'INCORRETA. Transitar em faixa exclusiva à direita é grave (inciso II), mas na via/faixa EXCLUSIVA do corredor (inciso III) é GRAVÍSSIMA.',
      C: 'INCORRETA. Não é média.',
      D: 'INCORRETA. Não é leve.',
      E: 'INCORRETA. A permissão para táxis depende de regulamentação municipal explícita e sinalizada.'
    }
  },
  {
    id: 'ctb-q83',
    subjectId: 'ctb',
    topic: 'Ultrapassagem em Linha Dupla Contínua Amarela (Art. 203)',
    difficulty: 'Médio',
    statement: 'Ultrapassar outro veículo pela contramão onde houver linha dupla contínua ou simples contínua amarela (Art. 203, V do CTB) configura infração de trânsito de natureza:',
    lawReference: 'Art. 203, V do CTB',
    bancaTag: 'Vunesp / DETRAN 2026',
    options: [
      { letter: 'A', text: 'Gravíssima, com multa multiplicada por 5 (cinco), aplicando-se a multa em dobro em caso de reincidência no período de 12 meses.' },
      { letter: 'B', text: 'Grave, com multa simples e 5 pontos.' },
      { letter: 'C', text: 'Média, sem fator multiplicador.' },
      { letter: 'D', text: 'Leve.' },
      { letter: 'E', text: 'Permitida se a via estiver deserta durante a madrugada.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Ultrapassar pela contramão sobre linha contínua (Art. 203, V do CTB) é infração GRAVÍSSIMA com MULTA MULTIPLICADA POR 5 (R$ 1.467,35). Havendo reincidência no período de 12 meses, a multa é cobrada em DOBRO.',
    explanations: {
      A: 'CORRETA. Art. 203, V CTB: Infração Gravíssima + Multa x5 (dobro na reincidência em 12 meses).',
      B: 'INCORRETA. Não é grave simples; possui fator multiplicador x5.',
      C: 'INCORRETA. Não é média.',
      D: 'INCORRETA. Não é leve.',
      E: 'INCORRETA. A sinalização horizontal contínua proíbe a ultrapassagem em qualquer horário.'
    }
  },
  {
    id: 'ctb-q84',
    subjectId: 'ctb',
    topic: 'Disputa de Racha e Exibição de Manobras Perigosas (Art. 173 e 175)',
    difficulty: 'Difícil',
    statement: 'Disputar corrida por espírito de emulação ("racha" na via pública - Art. 173 do CTB) ou utilizar veículo para demonstrar manobra perigosa mediante arrancada brusca ou derrapagem (Art. 175 do CTB) acarretam:',
    lawReference: 'Art. 173 e 175 do CTB',
    bancaTag: 'Vunesp / DETRAN 2026',
    options: [
      { letter: 'A', text: 'Infração Gravíssima, multa multiplicada por 10 (dez), suspensão do direito de dirigir e recolhimento do documento de habilitação e remoção do veículo.' },
      { letter: 'B', text: 'Infração Grave com multa multiplicada por 2.' },
      { letter: 'C', text: 'Infração Média com retenção temporária do veículo.' },
      { letter: 'D', text: 'Apenas punição penal no Juizado Especial sem processo administrativo de trânsito.' },
      { letter: 'E', text: 'Infração Leve com advertência verbal da autoridade.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Tanto o racha (Art. 173) quanto a exibição de manobra perigosa/derrapagem (Art. 175) são condutas gravíssimas de altíssimo risco. Sanções: Infração GRAVÍSSIMA, Multa multiplicada por 10 (R$ 2.934,70), Suspensão da CNH e remoção do veículo.',
    explanations: {
      A: 'CORRETA. Art. 173 e 175 CTB: Gravíssima + Multa x10 + Suspensão do direito de dirigir + recolhimento da CNH + remoção do veículo.',
      B: 'INCORRETA. Não é grave; é gravíssima multiplicada por 10.',
      C: 'INCORRETA. Não é média.',
      D: 'INCORRETA. Há cumulação das sanções administrativas (Detran) e criminais (Art. 308).',
      E: 'INCORRETA. Punição severa incompatível com advertência.'
    }
  },
  {
    id: 'ctb-q85',
    subjectId: 'ctb',
    topic: 'Transpor Bloqueio Viário Policial sem Autorização (Art. 210)',
    difficulty: 'Médio',
    statement: 'Transpor, sem autorização, bloqueio viário prestado por autoridade de trânsito ou por seus agentes (Art. 210 do CTB) configura infração:',
    lawReference: 'Art. 210 do CTB',
    bancaTag: 'Vunesp / DETRAN 2026',
    options: [
      { letter: 'A', text: 'Gravíssima, com multa, apreensão/remoção do veículo, recolhimento do documento de habilitação e suspensão do direito de dirigir.' },
      { letter: 'B', text: 'Grave, com retenção do veículo apenas.' },
      { letter: 'C', text: 'Média, com penalidade pecuniária.' },
      { letter: 'D', text: 'Leve, sem retenção.' },
      { letter: 'E', text: 'Permitida caso o condutor esteja atrasado para o trabalho.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Transpor bloqueio policial ou de fiscalização de trânsito (Art. 210 do CTB) é infração GRAVÍSSIMA, que atrai diretamente a suspensão do direito de dirigir, recolhimento da CNH e remoção do veículo.',
    explanations: {
      A: 'CORRETA. Art. 210 CTB: Infração Gravíssima + Suspensão da CNH + recolhimento do documento + remoção do veículo.',
      B: 'INCORRETA. É infração auto-suspensiva gravíssima.',
      C: 'INCORRETA. Não é média.',
      D: 'INCORRETA. Não é leve.',
      E: 'INCORRETA. Justificativa pessoal não autoriza furar bloqueio de segurança.'
    }
  },
  {
    id: 'ctb-q86',
    subjectId: 'ctb',
    topic: 'Avançar Sinal Vermelho ou Parada Obrigatória (Art. 208)',
    difficulty: 'Fácil',
    statement: 'Avançar o sinal vermelho do semáforo ou o de parada obrigatória (Art. 208 do CTB), ressalvada a conversão à direita livre sinalizada, é infração de natureza:',
    lawReference: 'Art. 208 do CTB',
    bancaTag: 'Vunesp / DETRAN 2026',
    options: [
      { letter: 'A', text: 'Gravíssima (7 pontos na CNH).' },
      { letter: 'B', text: 'Grave (5 pontos na CNH).' },
      { letter: 'C', text: 'Média (4 pontos na CNH).' },
      { letter: 'D', text: 'Leve (3 pontos na CNH).' },
      { letter: 'E', text: 'Permitida no horário noturno após as 22h em qualquer cidade.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Avançar sinal vermelho ou placa de "PARADA OBRIGATÓRIA" (Art. 208 do CTB) é infração GRAVÍSSIMA (7 pontos), sujeita a multa.',
    explanations: {
      A: 'CORRETA. Art. 208 CTB: Infração Gravíssima (7 pontos).',
      B: 'INCORRETA. Não é grave.',
      C: 'INCORRETA. Não é média.',
      D: 'INCORRETA. Não é leve.',
      E: 'INCORRETA. A regra geral do CTB proíbe o avanço. Exceções noturnas exigem regulamentação municipal e cruzamento em velocidade reduzida de segurança.'
    }
  },
  {
    id: 'ctb-q87',
    subjectId: 'ctb',
    topic: 'Excesso de Velocidade Superior a 50% da Máxima (Art. 218)',
    difficulty: 'Médio',
    statement: 'Transitar em velocidade superior à máxima permitida para o local em MAIS DE 50% (cinquenta por cento) (Art. 218, III do CTB) acarreta:',
    lawReference: 'Art. 218, III do CTB',
    bancaTag: 'Vunesp / DETRAN 2026',
    options: [
      { letter: 'A', text: 'Infração Gravíssima, multa multiplicada por 3 (três) e suspensão imediata do direito de dirigir.' },
      { letter: 'B', text: 'Infração Grave com 5 pontos e multa simples.' },
      { letter: 'C', text: 'Infração Média com 4 pontos.' },
      { letter: 'D', text: 'Infração Leve com advertência por escrito.' },
      { letter: 'E', text: 'Cassação imediata do veículo pelo Ministério Público.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Excesso de velocidade acima de 50% do limite regulamentado na via (Art. 218, III do CTB) é infração GRAVÍSSIMA com MULTA MULTIPLICADA POR 3 e suspensão direta do direito de dirigir.',
    explanations: {
      A: 'CORRETA. Art. 218, III CTB: Velocidade > 50% da máxima = Gravíssima + Multa x3 + Suspensão direta da CNH.',
      B: 'INCORRETA. Velocidade entre 20% e 50% é grave (inciso II), mas acima de 50% é GRAVÍSSIMA com suspensão.',
      C: 'INCORRETA. Velocidade até 20% é média (inciso I).',
      D: 'INCORRETA. Não é leve.',
      E: 'INCORRETA. Medida desprovida de fundamento no CTB.'
    }
  },
  {
    id: 'ctb-q88',
    subjectId: 'ctb',
    topic: 'Preferência de Passagem ao Pedestre na Faixa (Art. 214)',
    difficulty: 'Fácil',
    statement: 'Deixar de dar preferência de passagem ao pedestre e ao veículo não motorizado que se encontre na faixa a ele destinada (Art. 214, I do CTB) constitui infração:',
    lawReference: 'Art. 214, I do CTB',
    bancaTag: 'Vunesp / DETRAN 2026',
    options: [
      { letter: 'A', text: 'Gravíssima (7 pontos).' },
      { letter: 'B', text: 'Grave (5 pontos).' },
      { letter: 'C', text: 'Média (4 pontos).' },
      { letter: 'D', text: 'Leve (3 pontos).' },
      { letter: 'E', text: 'Isenta se o pedestre não fizer sinal com a mão.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Deixar de dar preferência a pedestre que já esteja atravessando a pista na faixa de pedestres (Art. 214, I do CTB) é infração GRAVÍSSIMA (7 pontos), punida com multa.',
    explanations: {
      A: 'CORRETA. Art. 214, I CTB: Infração Gravíssima (7 pontos).',
      B: 'INCORRETA. Não é grave.',
      C: 'INCORRETA. Não é média.',
      D: 'INCORRETA. Não é leve.',
      E: 'INCORRETA. A preferência do pedestre na faixa é absoluta.'
    }
  },
  {
    id: 'ctb-q89',
    subjectId: 'ctb',
    topic: 'Transitar com Veículo em Calçadas e Ciclovias (Art. 193)',
    difficulty: 'Médio',
    statement: 'Transitar com o veículo em calçadas, passeios, passarelas, ciclovias, ciclofaixas ou gramados (Art. 193 do CTB) constitui infração de trânsito de natureza:',
    lawReference: 'Art. 193 do CTB',
    bancaTag: 'Vunesp / DETRAN 2026',
    options: [
      { letter: 'A', text: 'Gravíssima, com multa multiplicada por 3 (três).' },
      { letter: 'B', text: 'Grave com multa simples.' },
      { letter: 'C', text: 'Média com recolhimento da CNH.' },
      { letter: 'D', text: 'Leve.' },
      { letter: 'E', text: 'Permitida apenas para motocicletas em entregas rápidas.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Transitar sobre calçadas, passeios ou ciclovias (Art. 193 do CTB) é infração GRAVÍSSIMA com MULTA MULTIPLICADA POR 3 (7 pontos na CNH).',
    explanations: {
      A: 'CORRETA. Art. 193 CTB: Infração Gravíssima + Multa x3 (7 pontos).',
      B: 'INCORRETA. Há incidência do fator multiplicador x3 devido ao risco aos pedestres.',
      C: 'INCORRETA. Não é média.',
      D: 'INCORRETA. Não é leve.',
      E: 'INCORRETA. Motocicletas estão estritamente proibidas de transitar em calçadas e ciclovias.'
    }
  },
  {
    id: 'ctb-q90',
    subjectId: 'ctb',
    topic: 'Omissão de Socorro em Acidente de Trânsito (Art. 176 e 304)',
    difficulty: 'Difícil',
    statement: 'Deixar o condutor envolvido em acidente com vítima de prestar ou providenciar socorro à vítima, podendo fazê-lo (Art. 176, I do CTB), sujeita o condutor a sanções administrativas e penais. Na esfera administrativa, acarreta:',
    lawReference: 'Art. 176, I do CTB',
    bancaTag: 'Vunesp / DETRAN 2026',
    options: [
      { letter: 'A', text: 'Infração Gravíssima, multa multiplicada por 5 (cinco), suspensão do direito de dirigir e recolhimento do documento de habilitação.' },
      { letter: 'B', text: 'Infração Grave com 5 pontos e multa sem suspensão.' },
      { letter: 'C', text: 'Infração Média com advertência por escrito.' },
      { letter: 'D', text: 'Isenção total se o condutor alegar pavor ou fobia de acidentes.' },
      { letter: 'E', text: 'Infração Leve com recolhimento do veículo.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Deixar de prestar socorro em acidente com vítima (Art. 176, I do CTB) é infração GRAVÍSSIMA auto-suspensiva: Multa multiplicada por 5 (R$ 1.467,35), Suspensão do Direito de Dirigir e recolhimento da CNH, além de configurar CRIME DE TRÂNSITO (Art. 304).',
    explanations: {
      A: 'CORRETA. Art. 176, I CTB: Infração Gravíssima + Multa x5 + Suspensão da CNH + recolhimento do documento.',
      B: 'INCORRETA. A infração é gravíssima multiplicada por 5.',
      C: 'INCORRETA. Não é média.',
      D: 'INCORRETA. A omissão de socorro socorre penal e administrativamente salvo justa causa comprovada de risco pessoal.',
      E: 'INCORRETA. Não é leve.'
    }
  },
  {
    id: 'ctb-q91',
    subjectId: 'ctb',
    topic: 'Uso Obrigatório do Cinto de Segurança (Art. 65 e 167)',
    difficulty: 'Fácil',
    statement: 'Deixar o condutor ou passageiro de usar o cinto de segurança, conforme estabelecido no Art. 65 do CTB (Art. 167 do CTB), constitui infração:',
    lawReference: 'Art. 167 do CTB',
    bancaTag: 'Vunesp / DETRAN 2026',
    options: [
      { letter: 'A', text: 'Grave, com multa e retenção do veículo até a colocação do cinto pelo infrator.' },
      { letter: 'B', text: 'Gravíssima, com suspensão direta da CNH.' },
      { letter: 'C', text: 'Média, sem retenção do veículo.' },
      { letter: 'D', text: 'Leve.' },
      { letter: 'E', text: 'Obrigatória apenas para passageiros do banco dianteiro.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Deixar de usar o cinto de segurança (condutor ou passageiros) (Art. 167 do CTB) é infração GRAVE (5 pontos), punida com multa e retenção do veículo para colocação do cinto.',
    explanations: {
      A: 'CORRETA. Art. 167 CTB: Infração Grave (5 pontos) + medida administrativa de retenção do veículo.',
      B: 'INCORRETA. Não é gravíssima.',
      C: 'INCORRETA. Não é média.',
      D: 'INCORRETA. Não é leve.',
      E: 'INCORRETA. O uso do cinto de segurança é obrigatório em todas as vias para condutor e TODOS os passageiros.'
    }
  },
  {
    id: 'ctb-q92',
    subjectId: 'ctb',
    topic: 'Equipamento Obrigatório Ausente ou Inoperante (Art. 230)',
    difficulty: 'Médio',
    statement: 'Conduzir veículo sem equipamento obrigatório ou estando este ineficiente ou inoperante (ex: pneu careca, extintor vencido em veículos que o exigem, ou sem estepe) (Art. 230, IX do CTB) constitui infração de natureza:',
    lawReference: 'Art. 230, IX do CTB',
    bancaTag: 'Vunesp / DETRAN 2026',
    options: [
      { letter: 'A', text: 'Grave, com multa e retenção do veículo para regularização.' },
      { letter: 'B', text: 'Gravíssima com apreensão da CNH por 1 ano.' },
      { letter: 'C', text: 'Média sem medida administrativa.' },
      { letter: 'D', text: 'Leve com advertência formal.' },
      { letter: 'E', text: 'Permitida caso o motorista esteja a caminho de uma oficina.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Conduzir veículo sem equipamento obrigatório ou com equipamento inoperante/deficiente (Art. 230, IX do CTB) é infração GRAVE (5 pontos), com penalidade de multa e retenção do veículo para sanar a irregularidade.',
    explanations: {
      A: 'CORRETA. Art. 230, IX CTB: Infração Grave (5 pontos) + retenção do veículo.',
      B: 'INCORRETA. Não é gravíssima.',
      C: 'INCORRETA. Há medida administrativa de retenção do veículo.',
      D: 'INCORRETA. Não é leve.',
      E: 'INCORRETA. Trafegar com pneu careca ou sem equipamentos essenciais viola a segurança viária.'
    }
  },
  {
    id: 'ctb-q93',
    subjectId: 'ctb',
    topic: 'Sistema de Notificação Eletrônica - SNE e Desconto na Multa (Art. 284)',
    difficulty: 'Médio',
    statement: 'Conforme o Art. 284, § 1º do CTB, o infrator que optar pelo Sistema de Notificação Eletrônica (SNE), caso opte por não apresentar defesa prévia nem recurso e efetue o pagamento da multa até a data de vencimento, fará jus a um desconto de:',
    lawReference: 'Art. 284, § 1º do CTB',
    bancaTag: 'Vunesp / DETRAN 2026',
    options: [
      { letter: 'A', text: '40% (quarenta por cento) do valor da multa.' },
      { letter: 'B', text: '20% (vinte por cento) do valor da multa.' },
      { letter: 'C', text: '50% (cinquenta por cento) do valor da multa.' },
      { letter: 'D', text: '10% (dez por cento) do valor da multa.' },
      { letter: 'E', text: 'Isenção total do pagamento.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Art. 284, § 1º do CTB prevê que o condutor que aderir ao Sistema de Notificação Eletrônica (SNE), reconhecer o cometimento da infração e abrir mão de recurso pagará a multa com 40% DE DESCONTO até o vencimento.',
    explanations: {
      A: 'CORRETA. Art. 284, § 1º CTB: Desconto de 40% para pagamento via SNE sem apresentação de recurso.',
      B: 'INCORRETA. 20% é o desconto padrão do pagamento sem o SNE (Art. 284, caput).',
      C: 'INCORRETA. 50% é incorreto.',
      D: 'INCORRETA. 10% é incorreto.',
      E: 'INCORRETA. Não há isenção total.'
    }
  },
  {
    id: 'ctb-q94',
    subjectId: 'ctb',
    topic: 'Prazo Máximo para Expedição da Notificação de Autuação (Art. 281)',
    difficulty: 'Médio',
    statement: 'O Auto de Infração de Trânsito será arquivado e seu auto julgado insubsistente se, no prazo máximo de 30 (trinta) dias, não for expedida a notificação da autuação (Art. 281, II do CTB). O prazo de 30 dias é contado a partir:',
    lawReference: 'Art. 281, II do CTB',
    bancaTag: 'Vunesp / DETRAN 2026',
    options: [
      { letter: 'A', text: 'Da data do cometimento da infração de trânsito.' },
      { letter: 'B', text: 'Do recebimento da multa no endereço do condutor.' },
      { letter: 'C', text: 'Do julgamento da JARI.' },
      { letter: 'D', text: 'Da data de vencimento da CNH do condutor.' },
      { letter: 'E', text: 'Do encerramento do ano civil.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Conforme o Art. 281, II do CTB, a autoridade de trânsito tem o prazo decadencial de 30 (trinta) dias, contados da data do COMETIMENTO DA INFRAÇÃO, para expedir a Notificação da Autuação, sob pena de nulidade e arquivamento do auto.',
    explanations: {
      A: 'CORRETA. Art. 281, II CTB: 30 dias contados do cometimento da infração.',
      B: 'INCORRETA. A contagem inicia-se na data do fato/infração.',
      C: 'INCORRETA. A JARI atua em fase recursal posterior.',
      D: 'INCORRETA. Vencimento da CNH não interfere na decadência do auto de infração.',
      E: 'INCORRETA. O marco inicial é a data do cometimento da infração.'
    }
  },
  {
    id: 'ctb-q95',
    subjectId: 'ctb',
    topic: 'Adulteração de Sinal Identificador de Veículo Automotor (Art. 311 do CP / CTB)',
    difficulty: 'Difícil',
    statement: 'Adulterar, remarcar ou suprimir número de chassi, monobloco, motor ou placa de identificação de veículo automotor (Art. 311 do Código Penal com reflexos no CTB) configura:',
    lawReference: 'Art. 311 do Código Penal (com alterações da Lei 14.562/23)',
    bancaTag: 'Vunesp / DETRAN 2026',
    options: [
      { letter: 'A', text: 'Crime grave punido com pena de reclusão de 4 a 8 anos e multa.' },
      { letter: 'B', text: 'Mera infração administrativa de trânsito punida com multa leve.' },
      { letter: 'C', text: 'Contravenção penal punida com 15 dias de prisão simples.' },
      { letter: 'D', text: 'Infração Grave com retenção do veículo até a troca da placa.' },
      { letter: 'E', text: 'Delito afiançável de menor potencial ofensivo praticado por imprudência.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A Lei nº 14.562/2023 alterou o Art. 311 do Código Penal (aplicado ostensivamente nas fiscalizações do DETRAN), tipificando a adulteração de sinal identificador de veículo (placa, chassi, motor, monobloco) como crime grave apenado com RECLUSÃO DE 4 A 8 ANOS e multa.',
    explanations: {
      A: 'CORRETA. Art. 311 do CP (Lei 14.562/23): Adulteração de chassi/placa/motor = Reclusão de 4 a 8 anos e multa.',
      B: 'INCORRETA. Trata-se de crime de alta gravidade, e não mera infração administrativa.',
      C: 'INCORRETA. É crime de reclusão, não contravenção.',
      D: 'INCORRETA. Ultrapassa a esfera administrativa do CTB.',
      E: 'INCORRETA. Crime doloso grave.'
    }
  },
  {
    id: 'ctb-q96',
    subjectId: 'ctb',
    topic: 'Distinção entre Penalidades e Medidas Administrativas (Arts. 256 e 269)',
    difficulty: 'Médio',
    statement: 'Dentre as opções abaixo, assinale a alternativa que contenha EXCLUSIVAMENTE Medidas Administrativas previstas no Art. 269 do CTB:',
    lawReference: 'Art. 269 do CTB',
    bancaTag: 'Vunesp / DETRAN 2026',
    options: [
      { letter: 'A', text: 'Retenção do veículo, Remoção do veículo e Recolhimento do Documento de Habilitação (CNH/PPD).' },
      { letter: 'B', text: 'Multa, Advertência por Escrito e Cassação da CNH.' },
      { letter: 'C', text: 'Suspensão do Direito de Dirigir, Frequência obrigatória em curso de reciclagem e Multa.' },
      { letter: 'D', text: 'Prisão em flagrante, Cassação da PPD e Cobrança judicial.' },
      { letter: 'E', text: 'Multa multiplicada por 10, Advertência verbal e Apreensão da CNH.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'No CTB, as PENALIDADES (Art. 256) são aplicadas pela autoridade após processo administrativo (Multa, Advertência, Suspensão, Cassação, Curso de reciclagem). Já as MEDIDAS ADMINISTRATIVAS (Art. 269) são adotadas de imediato pelo agente de trânsito em campo (Retenção, Remoção, Recolhimento de CNH/CRLV, Teste de etilômetro, Realização de exames).',
    explanations: {
      A: 'CORRETA. Art. 269 CTB: Retenção, Remoção e Recolhimento de CNH são medidas administrativas autênticas.',
      B: 'INCORRETA. Multa, Advertência por Escrito e Cassação da CNH são PENALIDADES (Art. 256).',
      C: 'INCORRETA. Suspensão, curso de reciclagem e multa são PENALIDADES.',
      D: 'INCORRETA. Mistura conceitos penais e penalidades.',
      E: 'INCORRETA. Multa é penalidade.'
    }
  },
  {
    id: 'ctb-q97',
    subjectId: 'ctb',
    topic: 'Homicídio Culposo na Direção de Veículo Automotor (Art. 302)',
    difficulty: 'Difícil',
    statement: 'Praticar homicídio culposo na direção de veículo automotor (Art. 302 do CTB) acarreta pena de penas de detenção de 2 a 4 anos e suspensão ou proibição do direito de se obter a habilitação. Se o agente conduzir o veículo sob a influência de álcool ou de qualquer outra substância psicoativa (Art. 302, § 3º do CTB), a pena será de:',
    lawReference: 'Art. 302, § 3º do CTB',
    bancaTag: 'Vunesp / DETRAN 2026',
    options: [
      { letter: 'A', text: 'Reclusão, de 5 (cinco) a 8 (oito) anos, e suspensão ou proibição do direito de se obter a permissão ou a habilitação.' },
      { letter: 'B', text: 'Detenção de 1 a 2 anos substituída por prestação de serviços à comunidade.' },
      { letter: 'C', text: 'Prisão simples de 6 meses.' },
      { letter: 'D', text: 'Multa exclusiva sem pena privativa de liberdade.' },
      { letter: 'E', text: 'Reclusão de 15 a 30 anos por crime hediondo inafiançável.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A Lei nº 13.546/2017 incluiu o § 3º no Art. 302 do CTB: Se o condutor comete homicídio culposo na direção de veículo automotor estando SOB O EFEITO DE ÁLCOOL ou substância psicoativa, a pena é qualificada para RECLUSÃO DE 5 A 8 ANOS, vedada a conversão simples em penas alternativas leves.',
    explanations: {
      A: 'CORRETA. Art. 302, § 3º CTB: Homicídio culposo + Embriaguez = Reclusão de 5 a 8 anos e suspensão/proibição da CNH.',
      B: 'INCORRETA. A pena foi sensivelmente aumentada pela Lei 13.546/17.',
      C: 'INCORRETA. Não é prisão simples.',
      D: 'INCORRETA. Trata-se de crime com pena privativa de liberdade severa.',
      E: 'INCORRETA. A pena legal fixada é de 5 a 8 anos de reclusão.'
    }
  },
  {
    id: 'ctb-q98',
    subjectId: 'ctb',
    topic: 'Lesão Corporal Culposa na Direção de Veículo Automotor (Art. 303)',
    difficulty: 'Médio',
    statement: 'Praticar lesão corporal culposa na direção de veículo automotor (Art. 303 do CTB) sujeita o condutor à pena de detenção de 6 (seis) meses a 2 (dois) anos e suspensão ou proibição de se obter a CNH. Se o condutor estiver embriagado e causar lesão corporal grave ou gravíssima (Art. 303, § 2º), a pena passa a ser de:',
    lawReference: 'Art. 303, § 2º do CTB',
    bancaTag: 'Vunesp / DETRAN 2026',
    options: [
      { letter: 'A', text: 'Reclusão, de 2 (dois) a 5 (cinco) anos, e suspensão ou proibição do direito de se obter a permissão ou habilitação.' },
      { letter: 'B', text: 'Detenção de 3 meses a 1 ano.' },
      { letter: 'C', text: 'Prisão em regime fechado de 10 a 20 anos.' },
      { letter: 'D', text: 'Apenas multa administrativa.' },
      { letter: 'E', text: 'Trabalho comunitário por 30 dias.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Art. 303, § 2º do CTB estabelece que se a lesão corporal culposa for de natureza GRAVE ou GRAVÍSSIMA e o condutor estiver sob a influência de álcool/substância psicoativa, a pena é de RECLUSÃO DE 2 A 5 ANOS e suspensão/proibição da CNH.',
    explanations: {
      A: 'CORRETA. Art. 303, § 2º CTB: Lesão corporal culposa grave/gravíssima + embriaguez = Reclusão de 2 a 5 anos.',
      B: 'INCORRETA. Esta era a pena simples do caput.',
      C: 'INCORRETA. Período superior ao fixado em lei.',
      D: 'INCORRETA. É crime de trânsito apenado com reclusão.',
      E: 'INCORRETA. Não reflete o dispositivo penal.'
    }
  },
  {
    id: 'ctb-q99',
    subjectId: 'ctb',
    topic: 'Dirigir sem Habilitação Gerando Perigo de Dano (Art. 309)',
    difficulty: 'Fácil',
    statement: 'Dirigir veículo automotor, em via pública, sem a devida Permissão para Dirigir ou Carteira de Habilitação ou, ainda, se cassado o direito de dirigir, GERANDO PERIGO DE DANO (Art. 309 do CTB), constitui:',
    lawReference: 'Art. 309 do CTB',
    bancaTag: 'Vunesp / DETRAN 2026',
    options: [
      { letter: 'A', text: 'Crime de trânsito punido com detenção, de 6 (seis) meses a 1 (um) ano, ou multa.' },
      { letter: 'B', text: 'Mera infração administrativa de trânsito, sem relevância penal.' },
      { letter: 'C', text: 'Crime de perigo abstrato em qualquer circunstância.' },
      { letter: 'D', text: 'Infração Leve sujeita a advertência verbal.' },
      { letter: 'E', text: 'Crime hediondo de trânsito sem possibilidade de fiança.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Art. 309 do CTB exige o elemento subjetivo do tipo "GERANDO PERIGO DE DANO" (ex: ziguezaguear na pista, quase atropelar alguém). Preenchido esse requisito, configura CRIME DE TRÂNSITO apenado com detenção de 6 meses a 1 ano ou multa (além da infração administrativa do Art. 162, I).',
    explanations: {
      A: 'CORRETA. Art. 309 CTB: Dirigir sem CNH gerando perigo de dano = Crime de trânsito (detenção de 6 meses a 1 ano ou multa).',
      B: 'INCORRETA. Dirigir sem CNH sem perigo de dano é infração administrativa (Art. 162, I), mas GERANDO PERIGO DE DANO passa a ser CRIME.',
      C: 'INCORRETA. É crime de perigo CONCRETO (exige a comprovação do perigo de dano).',
      D: 'INCORRETA. Não é infração leve.',
      E: 'INCORRETA. Não é crime hediondo.'
    }
  },
  {
    id: 'ctb-q100',
    subjectId: 'ctb',
    topic: 'Entregar ou Permitir Direção a Pessoa Não Habilitada (Art. 310)',
    difficulty: 'Difícil',
    statement: 'Entregar a direção de veículo automotor a pessoa não habilitada, com habilitação cassada ou com o direito de dirigir suspenso, ou a quem não esteja em condições de conduzi-lo com segurança (Art. 310 do CTB) configura CRIME DE TRÂNSITO. Segundo a Súmula 575 do STJ:',
    lawReference: 'Art. 310 do CTB e Súmula 575 do STJ',
    bancaTag: 'Vunesp / DETRAN 2026',
    options: [
      { letter: 'A', text: 'O crime do Art. 310 do CTB é de perigo ABSTRATO, dispensando-se a demonstração de dano potencial na condução do veículo.' },
      { letter: 'B', text: 'É crime de perigo concreto, exigindo a ocorrência de acidente com lesão.' },
      { letter: 'C', text: 'Não configura crime, apenas infração administrativa para o proprietário.' },
      { letter: 'D', text: 'Trata-se de infração de trânsito de natureza média.' },
      { letter: 'E', text: 'A penalidade penal aplica-se exclusivamente se a pessoa não habilitada for menor de 12 anos.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Súmula 575 do Superior Tribunal de Justiça (STJ): "Constitui crime de PERIGO ABSTRATO a conduta de entregar a direção de veículo automotor a pessoa não habilitada (Art. 310 do CTB)". Ou seja, basta a entrega das chaves/veículo à pessoa sem CNH para a consumação do crime, independentemente de haver perigo concreto na rua.',
    explanations: {
      A: 'CORRETA. Súmula 575 STJ + Art. 310 CTB: O delito de entregar veículo a não habilitado é de PERIGO ABSTRATO (presumido pela lei).',
      B: 'INCORRETA. O Art. 309 exige perigo concreto, mas o Art. 310 é de perigo ABSTRATO conforme a Súmula 575 do STJ.',
      C: 'INCORRETA. É crime de trânsito expressamente tipificado no Art. 310 do CTB.',
      D: 'INCORRETA. Além da infração gravíssima administrativa (Art. 163/164), é CRIME de trânsito.',
      E: 'INCORRETA. Aplica-se a qualquer pessoa não habilitada ou sem condições.'
    }
  }
];
