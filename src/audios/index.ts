import track01 from './01_CAPíTuLo_I.mp3';
import track02 from './02_CAPíTuLo_II.mp3';
import track03 from './03_CAPíTuLo_III.mp3';
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
import track14 from './14_CAPíTuLo_XIv.mp3';
import track15 from './15_CAPíTuLo_Xv.mp3';
import track16 from './16_Capítulo_XIX.mp3';
import track17 from './17_CAPíTuLo_XvI.mp3';
import track18 from './18_CAPíTuLo_XvII.mp3';
import track19 from './19_CAPíTuLo_XvIII.mp3';
import track20 from './20_CAPíTuLo_XIX.mp3';
import track21 from './21_CAPíTuLo_XX.mp3';
import track22 from './22_Capítulo_XVIII_deste_Código_o_julgamento.mp3';

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
    description: 'Arts. 1º ao 4º - Abrangência do CTB e responsabilidade objetiva dos órgãos de trânsito',
    src: track01
  },
  {
    id: 2,
    chapterNumber: 'Capítulo II',
    title: 'Do Sistema Nacional de Trânsito',
    description: 'Arts. 5º ao 25 - Objetivos, composição e competências dos órgãos do SNT (CONTRAN, DETRAN, PRF, CETRAN)',
    src: track02
  },
  {
    id: 3,
    chapterNumber: 'Capítulo III',
    title: 'Das Normas Gerais de Circulação e Conduta',
    description: 'Arts. 26 ao 67 - Regras de tráfego, preferência, velocidade, uso de luzes e ultrapassagem',
    src: track03
  },
  {
    id: 4,
    chapterNumber: 'Capítulo IV',
    title: 'Da Condução de Veículos por Motoristas Profissionais',
    description: 'Arts. 67-A ao 67-E - Tempos de direção, descanso obrigatório e controle de jornada',
    src: track04
  },
  {
    id: 5,
    chapterNumber: 'Capítulo V',
    title: 'Do Cidadão',
    description: 'Arts. 72 ao 73 - Direitos do cidadão de solicitar sinalização, fiscalização e sugerir alterações',
    src: track05
  },
  {
    id: 6,
    chapterNumber: 'Capítulo VI',
    title: 'Da Educação para o Trânsito',
    description: 'Arts. 74 ao 79 - Diretrizes da educação de trânsito nas escolas e campanhas nacionais',
    src: track06
  },
  {
    id: 7,
    chapterNumber: 'Capítulo VII',
    title: 'Da Sinalização de Trânsito',
    description: 'Arts. 80 ao 90 - Ordens do agente, sinalização de regulamentação, advertência e indicação',
    src: track07
  },
  {
    id: 8,
    chapterNumber: 'Capítulo VIII',
    title: 'Da Engenharia de Tráfego, Operação e Fiscalização',
    description: 'Arts. 91 ao 95 - Engenharia de tráfego, interrupção de vias e obras',
    src: track08
  },
  {
    id: 9,
    chapterNumber: 'Capítulo IX',
    title: 'Dos Veículos',
    description: 'Arts. 96 ao 117 - Classificação dos veículos, equipamentos obrigatórios e identificação',
    src: track09
  },
  {
    id: 10,
    chapterNumber: 'Capítulo X',
    title: 'Dos Veículos em Circulação Internacional',
    description: 'Arts. 118 ao 119 - Regras para veículos estrangeiros em território nacional',
    src: track10
  },
  {
    id: 11,
    chapterNumber: 'Capítulo XI',
    title: 'Do Registro de Veículos',
    description: 'Arts. 120 ao 129 - Certificado de Registro de Veículo (CRV) e transferências de propriedade',
    src: track11
  },
  {
    id: 12,
    chapterNumber: 'Capítulo XII',
    title: 'Do Licenciamento',
    description: 'Arts. 130 ao 135 - Certificado de Licenciamento Anual (CLRV) e quitação de débitos',
    src: track12
  },
  {
    id: 13,
    chapterNumber: 'Capítulo XIII',
    title: 'Das Habilitações',
    description: 'Arts. 140 ao 160 - Categorias de CNH (A a E), validade, renovação e exame toxicológico',
    src: track13
  },
  {
    id: 14,
    chapterNumber: 'Capítulo XIV',
    title: 'Das Infrações',
    description: 'Arts. 161 ao 255 - Tipificação, pontuação (Gravíssima 7, Grave 5, Média 4, Leve 3) e penalidades',
    src: track14
  },
  {
    id: 15,
    chapterNumber: 'Capítulo XV',
    title: 'Das Medidas Administrativas',
    description: 'Arts. 269 ao 279 - Retenção, remoção do veículo, recolhimento da CNH e teste do etilômetro',
    src: track15
  },
  {
    id: 16,
    chapterNumber: 'Capítulo XVI',
    title: 'Do Processo Administrativo',
    description: 'Arts. 280 ao 290 - Auto de infração, notificação de autuação e recursos à JARI e CETRAN',
    src: track16
  },
  {
    id: 17,
    chapterNumber: 'Capítulo XVII',
    title: 'Das Penalidades',
    description: 'Arts. 256 ao 268 - Advertência por escrito, multa, suspensão do direito de dirigir e cassação da CNH',
    src: track17
  },
  {
    id: 18,
    chapterNumber: 'Capítulo XVIII',
    title: 'Das Medidas Administrativas e Autuações',
    description: 'Execução e fiscalização das medidas administrativas no trânsito',
    src: track18
  },
  {
    id: 19,
    chapterNumber: 'Capítulo XVIII-B',
    title: 'Do Julgamento das Autuações e Recursos',
    description: 'Procedimentos de julgamento da defesa prévia e prazos de recurso administrativo',
    src: track19
  },
  {
    id: 20,
    chapterNumber: 'Capítulo XIX',
    title: 'Dos Crimes de Trânsito',
    description: 'Arts. 291 ao 312-B - Homicídio culposo, lesão corporal, embriaguez ao volante e racha',
    src: track20
  },
  {
    id: 21,
    chapterNumber: 'Capítulo XX',
    title: 'Disposições Finais e Transitórias',
    description: 'Arts. 313 ao 341 - Regras de transição, vigência e adaptação das normas',
    src: track21
  },
  {
    id: 22,
    chapterNumber: 'Capítulo Complementar',
    title: 'Julgamento das Autuações e Recursos (Detalhamento Especial)',
    description: 'Detalhamento do rito processual e instâncias recursais no SNT',
    src: track22
  }
];
