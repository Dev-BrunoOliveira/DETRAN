import track01 from './01_CAPíTuLo_I.mp3';
import track02 from './02_CAPíTuLo_II.mp3';
import track03 from './03_CAPíTuLo_III.mp3';
import track03A from './04_CAPITULO_III_A.mp3';
import track04 from './04_CAPíTuLo_Iv.mp3';
import track05 from './05_CAPíTuLo_v.mp3';
import track06 from './06_CAPíTuLo_vI.mp3';
import track07 from './07_CAPíTuLo_vII.mp3';
import track08 from './08_CAPíTuLo_vIII.mp3';
import track09 from './09_CAPíTuLo_IX.mp3';
import track10 from './10_CAPíTuLo_X.mp3';
import track11 from './11_CAPíTuLo_XI.mp3';
import track12 from './12_CAPíTuLo_XII.mp3';
import track13 from './13_CAPíTuLo_XIII.mp3';
import track13A from './15_CAPITULO_XIII_A.mp3';
import track14 from './14_CAPíTuLo_XIv.mp3';
import track15 from './16_CAPITULO_XV_Infracoes_Completo.mp3';
import track16 from './17_CAPíTuLo_XvI.mp3';
import track17 from './18_CAPíTuLo_XvII.mp3';
import track18 from './19_CAPíTuLo_XvIII.mp3';
import track19 from './20_CAPíTuLo_XIX.mp3';
import track20 from './21_CAPíTuLo_XX.mp3';
import track21 from './22_Capítulo_XVIII_deste_Código_o_julgamento.mp3';

export interface CtbAudioTrack {
  id: number;
  chapterNumber: string;
  title: string;
  description: string;
  src: string;
}

export const CTB_AUDIO_TRACKS: CtbAudioTrack[] = [
  {
    id: 1,
    chapterNumber: 'Capítulo I',
    title: 'Disposições Preliminares',
    description: 'Arts. 1º ao 4º - Âmbito de aplicação do CTB, trânsito como direito à segurança, responsabilidade objetiva dos órgãos de trânsito e conceitos gerais',
    src: track01
  },
  {
    id: 2,
    chapterNumber: 'Capítulo II',
    title: 'Do Sistema Nacional de Trânsito',
    description: 'Arts. 5º ao 25 - Objetivos, composição, atribuições e competências (CONTRAN, CETRAN, CONTRANDIFE, DETRAN, PRF, JARI e órgãos municipais)',
    src: track02
  },
  {
    id: 3,
    chapterNumber: 'Capítulo III',
    title: 'Das Normas Gerais de Circulação e Conduta',
    description: 'Arts. 26 ao 67 - Regras de tráfego, mão de direção, preferências em cruzamentos e rotatórias, ultrapassagem, limites de velocidade e uso de luzes',
    src: track03
  },
  {
    id: 4,
    chapterNumber: 'Capítulo III-A',
    title: 'Da Condução de Veículos por Motoristas Profissionais',
    description: 'Arts. 67-A ao 67-E - Tempos máximos de direção contínua, períodos obrigatórios de descanso, controle de jornada e fiscalização por tacógrafo',
    src: track03A
  },
  {
    id: 5,
    chapterNumber: 'Capítulo IV',
    title: 'Dos Pedestres e Condutores de Veículos Não Motorizados',
    description: 'Arts. 68 ao 71 - Direitos e deveres dos pedestres, prioridade na faixa de pedestres, regras de travessia e circulação de ciclistas e veículos de propulsão humana',
    src: track04
  },
  {
    id: 6,
    chapterNumber: 'Capítulo V',
    title: 'Do Cidadão',
    description: 'Arts. 72 e 73 - Direitos do cidadão e entidades de solicitar sinalização, fiscalização, melhorias no trânsito e obter resposta fundamentada do Poder Público',
    src: track05
  },
  {
    id: 7,
    chapterNumber: 'Capítulo VI',
    title: 'Da Educação para o Trânsito',
    description: 'Arts. 74 ao 79 - Diretrizes da educação de trânsito da pré-escola à universidade, Semana Nacional de Trânsito e campanhas públicas anuais',
    src: track06
  },
  {
    id: 8,
    chapterNumber: 'Capítulo VII',
    title: 'Da Sinalização de Trânsito',
    description: 'Arts. 80 ao 90 - Hierarquia da sinalização (ordens do agente têm prevalência máxima), semáforos, placas de regulamentação, advertência e indicação',
    src: track07
  },
  {
    id: 9,
    chapterNumber: 'Capítulo VIII',
    title: 'Da Engenharia de Tráfego, Operação e Fiscalização',
    description: 'Arts. 91 ao 95 - Engenharia de tráfego, limites de circulação, autorização prévia para obras na via e responsabilidade por sinistros decorrentes de obras',
    src: track08
  },
  {
    id: 10,
    chapterNumber: 'Capítulo IX',
    title: 'Dos Veículos',
    description: 'Arts. 96 ao 117 - Classificação dos veículos (tração, espécie e categoria), equipamentos obrigatórios, pesos, dimensões e identificação (VIN e placas Mercosul)',
    src: track09
  },
  {
    id: 11,
    chapterNumber: 'Capítulo X',
    title: 'Dos Veículos em Circulação Internacional',
    description: 'Arts. 118 e 119 - Regras para circulação de veículos estrangeiros em território nacional e tratados internacionais de trânsito (Convenção de Viena)',
    src: track10
  },
  {
    id: 12,
    chapterNumber: 'Capítulo XI',
    title: 'Do Registro de Veículos',
    description: 'Arts. 120 ao 129-B - Expedição do CRV, cadastro no RENAVAM, prazo de 30 dias para transferência de propriedade, comunicação de venda e RNPC',
    src: track11
  },
  {
    id: 13,
    chapterNumber: 'Capítulo XII',
    title: 'Do Licenciamento',
    description: 'Arts. 130 ao 135 - Certificado de Licenciamento Anual (CRLV-e), comprovação de quitação de IPVA, multas e encargos para emissão',
    src: track12
  },
  {
    id: 14,
    chapterNumber: 'Capítulo XIII',
    title: 'Da Condução de Escolares',
    description: 'Arts. 136 ao 139 - Regras para transporte escolar, autorização do DETRAN, inspeção semestral, faixa amarela lateral de 40 cm, tacógrafo e condutor Categoria D',
    src: track13
  },
  {
    id: 15,
    chapterNumber: 'Capítulo XIII-A',
    title: 'Da Condução de Moto-Frete',
    description: 'Arts. 139-A e 139-B - Requisitos para transporte remunerado de mercadorias em moto/motoneta (placa de aluguel, mata-cachorro, antena corta-pipa e inspeção)',
    src: track13A
  },
  {
    id: 16,
    chapterNumber: 'Capítulo XIV',
    title: 'Da Habilitação',
    description: 'Arts. 140 ao 160 - Categorias de CNH (A a E), validade (10 anos até 49 anos, 5 anos de 50 a 69, 3 anos 70+), Permissão para Dirigir (PPD) e exame toxicológico periódico',
    src: track14
  },
  {
    id: 17,
    chapterNumber: 'Capítulo XV',
    title: 'Das Infrações',
    description: 'Arts. 161 ao 255 - Tipificação completa das infrações, pontuação (Gravíssima 7, Grave 5, Média 4, Leve 3), fatores multiplicadores e medidas cabíveis (Áudio Integral)',
    src: track15
  },
  {
    id: 18,
    chapterNumber: 'Capítulo XVI',
    title: 'Das Penalidades',
    description: 'Arts. 256 ao 268 - Advertência por escrito, multa, suspensão do direito de dirigir (escalonada em 20, 30 e 40 pontos), cassação da CNH e curso de reciclagem',
    src: track16
  },
  {
    id: 19,
    chapterNumber: 'Capítulo XVII',
    title: 'Das Medidas Administrativas',
    description: 'Arts. 269 ao 279-A - Retenção e remoção do veículo para depósito, recolhimento da CNH ou CRLV, transbordo de carga e teste de etilômetro (Lei Seca)',
    src: track17
  },
  {
    id: 20,
    chapterNumber: 'Capítulo XVIII',
    title: 'Do Processo Administrativo',
    description: 'Arts. 280 ao 290-A - Auto de Infração de Trânsito (AIT), notificação de autuação (30 dias), defesa prévia, recurso à JARI e julgamento em 2ª instância pelo CETRAN',
    src: track18
  },
  {
    id: 21,
    chapterNumber: 'Capítulo XIX',
    title: 'Dos Crimes de Trânsito',
    description: 'Arts. 291 ao 312-B - Homicídio culposo (Art. 302), lesão culposa (Art. 303), omissão de socorro (Art. 304), embriaguez ao volante (Art. 306) e racha (Art. 308)',
    src: track19
  },
  {
    id: 22,
    chapterNumber: 'Capítulo XX',
    title: 'Disposições Finais e Transitórias (Parte 1)',
    description: 'Arts. 313 ao 331 - Prazos de transição, vigência do Código, destinação do FUNSET e aplicação das resoluções do CONTRAN',
    src: track20
  },
  {
    id: 23,
    chapterNumber: 'Capítulo XX e Anexos',
    title: 'Disposições Finais (Parte 2), Conceitos e Sinalização',
    description: 'Arts. 332 ao 341 e Anexos I e II - Competências recursais de transição, glossário completo de Conceitos e Definições e diretrizes de Sinalização de Trânsito',
    src: track21
  }
];
