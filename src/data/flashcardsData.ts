import { Flashcard } from '../types';

export const FLASHCARDS_DATABASE: Flashcard[] = [
  {
    id: 'fc-001',
    subjectId: 'ctb',
    topic: 'Limites de Velocidade não sinalizados (Art. 61)',
    front: 'Quais são os limites de velocidade padrão em Rodovias de Pista Dupla onde NÃO houver sinalização regulamentadora?',
    back: '• 110 km/h: para Automóveis, Camionetas, Camionetes e Motocicletas.\n• 90 km/h: para os Demais Veículos (ônibus, caminhões, etc.).',
    tip: 'Lembre-se: em Pista Simples, automóveis ficam restritos a 100 km/h.',
    articleRef: 'Art. 61, § 1º, I, "a" do CTB'
  },
  {
    id: 'fc-002',
    subjectId: 'ctb',
    topic: 'Pontuação de CNH e Limite para Suspensão (Art. 261)',
    front: 'Qual é a nova regra de pontuação no período de 12 meses para suspensão do direito de dirigir por pontos?',
    back: '• 20 pontos: se constarem 2 ou mais infrações Gravíssimas.\n• 30 pontos: se constar 1 infração Gravíssima.\n• 40 pontos: se NÃO constar NENHUMA infração Gravíssima (ou para condutores que exercem atividade remunerada - EAR).',
    tip: 'EAR (Atividade Remunerada) tem teto fixo de 40 pontos independentemente da gravidade!',
    articleRef: 'Art. 261, I, II, III e § 5º do CTB'
  },
  {
    id: 'fc-003',
    subjectId: 'ctb',
    topic: 'Infrações e Álcool - Art. 165 vs Art. 165-A',
    front: 'Qual é a consequência de RECUSAR-SE a ser submetido ao teste do etilômetro ou bafômetro?',
    back: 'Infração GRAVÍSSIMA, penalidade de Multa (10x - R$ 2.934,70) e Suspensão do direito de dirigir por 12 meses, além das medidas de recolhimento da CNH e retenção do veículo. (Idêntica sanção do Art. 165).',
    tip: 'A recusa gera exatamente a mesma penalidade administrativa do teste positivo!',
    articleRef: 'Art. 165-A do CTB'
  },
  {
    id: 'fc-004',
    subjectId: 'ctb',
    topic: 'Crimes de Trânsito - Embriaguez (Art. 306)',
    front: 'Qual é o limite de concentração de álcool no sangue/ar alveolar para caracterizar CRIME DE TRÂNSITO?',
    back: '• Sangue: igual ou superior a 6 decigramas de álcool por litro.\n• Ar alveolar (bafômetro): igual ou superior a 0,34 miligramas (desconto da margem de erro: 0,30 mg/L).',
    tip: 'Até 0,33 mg/L no bafômetro é infração administrativa (Art. 165); 0,34 mg/L ou mais é CRIME (Art. 306)!',
    articleRef: 'Art. 306 do CTB e Res. CONTRAN 432/13'
  },
  {
    id: 'fc-005',
    subjectId: 'contran_estadual',
    topic: 'Exame Toxicológico (Resolução CONTRAN 911/22 e Art. 148-A)',
    front: 'Quem é obrigado a realizar o Exame Toxicológico periódico e qual o prazo de renovação intermediária?',
    back: 'Obrigatório para condutores das categorias C, D e E. Deve ser realizado a cada 2 anos e 6 meses para condutores com menos de 70 anos.',
    tip: 'Dirigir sem realizar o toxicológico após 30 dias do vencimento é infração gravíssima (Art. 165-B).',
    articleRef: 'Art. 148-A do CTB & Res. 911/2022'
  },
  {
    id: 'fc-006',
    subjectId: 'portugues',
    topic: 'Crase Proibida - Casos de Ouro',
    front: 'Quais são as 5 proibições clássicas de uso da crase que mais caem em bancas?',
    back: '1. Antes de palavras masculinas (a pé, a bordo).\n2. Antes de verbos (a partir, a começar).\n3. Antes de pronomes pessoais e de tratamento (ela, você, Sua Excelência).\n4. Entre expressões com palavras repetidas (dia a dia, cara a cara).\n5. Com "a" no singular antes de palavra no plural (a pessoas).',
    tip: 'Se dá para trocar por "ao" no masculino, tem crase no feminino!',
    articleRef: 'Regra Gramatical de Crase'
  },
  {
    id: 'fc-007',
    subjectId: 'direito',
    topic: 'Segurança Viária na CF/88 (Art. 144, § 10)',
    front: 'Quais são os 3 pilares da Segurança Viária expressos na Constituição Federal?',
    back: '1. EDUCAÇÃO de Trânsito;\n2. ENGENHARIA de Trânsito;\n3. FISCALIZAÇÃO de Trânsito.',
    tip: 'Objetivo constitucional: assegurar ao cidadão o direito à mobilidade urbana eficiente!',
    articleRef: 'Art. 144, § 10, I da CF/88'
  },
  {
    id: 'fc-008',
    subjectId: 'informatica',
    topic: 'Atalhos de Teclado no Windows 11',
    front: 'Quais as funções dos atalhos `Win + V` e `Win + Shift + S` no Windows 11?',
    back: '• Win + V: Abre o Histórico da Área de Transferência (Clipboard).\n• Win + Shift + S: Abre a Ferramenta de Captura (Snippet / Print de seleção de tela).',
    tip: 'Altamente cobrados em provas do Instituto Avalia e Vunesp!',
    articleRef: 'Informática Windows 11'
  }
];
