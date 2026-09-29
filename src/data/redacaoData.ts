export interface RedacaoTheme {
  id: string;
  title: string;
  category: 'Segurança Viária' | 'Tecnologia e Cidades' | 'Fiscalização e Ética' | 'Mobilidade e Legislação';
  probability: 'Alta' | 'Altíssima';
  context: string;
  motivatingText: string;
  legalReferences: string[];
  keyArguments: {
    title: string;
    description: string;
  }[];
  interventionProposal: string;
  sampleOutline: {
    intro: string;
    dev1: string;
    dev2: string;
    conclusion: string;
  };
}

export const REDACAO_THEMES: RedacaoTheme[] = [
  {
    id: 'tema-pnatrans',
    title: 'A Transição para a Mobilidade Segura no Brasil: O Papel do PNATRANS e o Combate à Mortalidade no Trânsito',
    category: 'Segurança Viária',
    probability: 'Altíssima',
    context: 'O Plano Nacional de Redução de Mortes e Lesões no Trânsito (PNATRANS - Lei nº 13.614/2018) estabelece metas para reduzir pela metade o índice de mortes no trânsito brasileiro por 100 mil habitantes.',
    motivatingText: 'O trânsito brasileiro mata mais de 30 mil pessoas por ano, representando uma grave tragédia humana e pesados custos ao sistema de saúde pública (SUS). O PNATRANS visa integrar ações de fiscalização, engenharia e educação para transformar a cultura viária nacional.',
    legalReferences: [
      'Art. 144, § 10 da CF/88 (Segurança Viária)',
      'Art. 1º, § 2º do CTB (Trânsito seguro como direito de todos)',
      'Lei Federal nº 13.614/2018 (PNATRANS)',
      'Decreto Estadual 70.551/2026 (PSV-SP 2025-2035)'
    ],
    keyArguments: [
      {
        title: 'Ação Sistêmica e Multidisciplinar',
        description: 'Reduzir sinistros viários exige atuação conjunta de engenharia de vias, fiscalização ostensiva e campanhas educativas permanentes.'
      },
      {
        title: 'Valorização da Vida e Custo Social',
        description: 'A mortalidade viária sobrecarrega o SUS e gera perdas econômicas bilionárias ao Estado com invalidez temporária e permanente.'
      }
    ],
    interventionProposal: 'Implantação de fiscalização eletrônica inteligente nos pontos críticos de acidentes mapeados pelo Detran, combinada a programas continuados de educação no trânsito na rede escolar.',
    sampleOutline: {
      intro: 'Apresentar a garantia constitucional da segurança viária (Art. 144 § 10 CF/88) e pontuar que a mortalidade no trânsito representa um desafio social e de saúde pública no Brasil.',
      dev1: 'Discutir a importância das diretrizes do PNATRANS na integração entre órgãos de trânsito, engenharia de tráfego e aplicação rigorosa da legislação.',
      dev2: 'Analisar o papel ostensivo e pedagógico do Agente de Trânsito na fiscalização de condutas de risco (excesso de velocidade, celular ao dirigir).',
      conclusion: 'Reafirmar a tese sustentando a necessidade de fortalecer o Plano Estadual de Segurança Viária com tecnologia e educação continuada.'
    }
  },
  {
    id: 'tema-tecnologia-ia',
    title: 'Inteligência Artificial, OCR e Tecnologia na Fiscalização de Trânsito: Eficiência vs. Privacidade dos Cidadãos',
    category: 'Tecnologia e Cidades',
    probability: 'Altíssima',
    context: 'A expansão de radares inteligentes com leitura automática de placas (OCR), biometria facial nos exames de CNH e inteligência artificial para detecção de manuseio de celular.',
    motivatingText: 'Se por um lado a tecnologia amplia imensamente a capacidade de fiscalização dos órgãos estaduais de trânsito e reduz sinistros, por outro gera debates sobre a proteção de dados pessoais e o direito à privacidade dos condutores.',
    legalReferences: [
      'Lei Federal nº 13.709/2018 (LGPD - Dados Sensíveis e Pessoais)',
      'Art. 5º, X da CF/88 (Inviolabilidade da intimidade e vida privada)',
      'Resolução CONTRAN nº 1.020/2025 (Biometria nos Exames)',
      'Art. 280, § 2º do CTB (Aferição técnica pelo INMETRO)'
    ],
    keyArguments: [
      {
        title: 'Eficácia na Prevenção de Crimes e Infrações',
        description: 'Sistemas OCR e IA identificam veículos clonados, furtados e condutores sem CNH de forma instantânea e sem viés pessoal.'
      },
      {
        title: 'Governança Transparente e LGPD',
        description: 'A coleta massiva de imagens e dados biométricos pelos órgãos públicos exige conformidade com a LGPD e criptografia de ponta a ponta.'
      }
    ],
    interventionProposal: 'Adoção pelo Detran de protocolos de governança de dados em conformidade com a LGPD, garantindo auditoria pública dos algoritmos e uso estrito das imagens para a segurança viária.',
    sampleOutline: {
      intro: 'Contextualizar a revolução digital no serviço público de trânsito e o advento da fiscalização automatizada por inteligência artificial.',
      dev1: 'Argumentar sobre os ganhos de eficiência e impessoalidade trazidos pelos radares OCR e biometria na prevenção de fraudes e sinistros.',
      dev2: 'Problematizar a necessidade de proteger a intimidade dos cidadãos segundo os ditames da LGPD e os limites do poder de polícia.',
      conclusion: 'Propor diretrizes de governança transparente de dados no Detran, conciliando inovação tecnológica e respeito aos direitos fundamentais.'
    }
  },
  {
    id: 'tema-agente-educador',
    title: 'O Agente Estadual de Trânsito como Educador Social: Superando o Estigma da "Indústria da Multa"',
    category: 'Fiscalização e Ética',
    probability: 'Altíssima',
    context: 'A constante discussão sobre a função pedagógica da fiscalização de trânsito em oposição à ideia de que o Estado autua apenas para arrecadar receitas tributárias.',
    motivatingText: 'A fiscalização de trânsito tem como finalidade primordial a preservação de vidas e a garantia da ordem pública. Contudo, persiste no imaginário popular a visão distorcida de que o auto de infração possui fins meramente arrecadatórios.',
    legalReferences: [
      'Art. 37 da CF/88 (Princípios da Legalidade, Impessoalidade e Eficiência)',
      'Decreto Estadual nº 69.328/2025 (Código de Ética da Adm. SP)',
      'Art. 269 do CTB (Medidas Administrativas de Proteção)',
      'Art. 267 do CTB (Conversão de multa leve/média em advertência)'
    ],
    keyArguments: [
      {
        title: 'Caráter Pedagógico do Auto de Infração',
        description: 'A sanção administrativa de trânsito visa desestimular comportamentos de risco e reafirmar o pacto coletivo de civilidade.'
      },
      {
        title: 'Atuação Ética e Transparência Arrecadatória',
        description: 'A prestação de contas dos recursos arrecadados com multas (destinados por lei à sinalização, engenharia e educação) desmistifica a visão punitivista.'
      }
    ],
    interventionProposal: 'Fomento a ações de fiscalização orientativa e transparente, aliada à divulgação periódica dos relatórios de aplicação dos recursos de multas em melhorias viárias.',
    sampleOutline: {
      intro: 'Apresentar a missão do Agente Estadual de Trânsito como agente garantidor do direito constitucional a um trânsito seguro (Art. 1º § 2º CTB).',
      dev1: 'Demonstrar que o poder de polícia exercido na lavratura dos autos de infração possui natureza protetiva e pedagógica, não arrecadatória.',
      dev2: 'Enfatizar a aplicação das diretrizes do Código de Ética da Administração SP (Decreto 69.328/2025) na conduta impessoal e cidadã do agente.',
      conclusion: 'Concluir propondo maior transparência na destinação das verbas de multas para educação viária, fortalecendo a confiança da sociedade.'
    }
  },
  {
    id: 'tema-lei-seca-toxico',
    title: 'A Rigidez da Lei Seca e do Exame Toxicológico no Combate às Fatalidades Viárias no Brasil',
    category: 'Segurança Viária',
    probability: 'Alta',
    context: 'A consolidação da política de tolerância zero ao álcool e a obrigatoriedade do exame toxicológico periódico para condutores de cargas e passageiros (categorias C, D e E).',
    motivatingText: 'Direção e álcool/drogas constituem uma combinação letal. O endurecimento das sanções pelo CTB e o controle rigoroso pelo exame toxicológico representam marcos na defesa da vida nas estradas e cidades.',
    legalReferences: [
      'Art. 165 e 165-A do CTB (Tolerância Zero e Recusa ao Etilômetro)',
      'Art. 148-A do CTB (Exame Toxicológico Periódico)',
      'Art. 306 do CTB (Crime de Embriaguez ao Volante)',
      'Resolução CONTRAN nº 911/2022 (Regulamentação Toxicológica)'
    ],
    keyArguments: [
      {
        title: 'Redução Comprovada de Lesões Fatais',
        description: 'A Operação Lei Seca reduziu significativamente as internações hospitalares decorrentes de acidentes no período noturno e finais de semana.'
      },
      {
        title: 'Prevenção no Transporte Profissional de Cargas',
        description: 'O exame toxicológico intermediário a cada 30 meses coíbe o uso continuado de rebites e substâncias psicoativas por motoristas pesados.'
      }
    ],
    interventionProposal: 'Ampliação do contingente de blitze de fiscalização integrada e facilitação do acesso à renovação do exame toxicológico nas clínicas credenciadas.',
    sampleOutline: {
      intro: 'Abordar o impacto devastador do uso de substâncias psicoativas na condução de veículos automotores e a resposta normativa do CTB.',
      dev1: 'Analisar a eficácia da Tolerância Zero da Lei Seca na mudança de comportamento cultural dos motoristas brasileiros.',
      dev2: 'Discutir o papel do Exame Toxicológico de larga janela (Res. CONTRAN 911/2022) na segurança dos corredores de transporte de carga e passageiros.',
      conclusion: 'Sintetizar propondo a manutenção da rigidez fiscalizatória com ações educativas dirigidas aos motoristas jovens e profissionais.'
    }
  },
  {
    id: 'tema-mobilidade-ativa',
    title: 'Desafios da Mobilidade Ativa: A Proteção aos Pedestres, Ciclistas e Usuários de Ciclomotores Elétricos',
    category: 'Mobilidade e Legislação',
    probability: 'Alta',
    context: 'O crescimento da frota de ciclomotores elétricos, patinetes e bicicletas nos centros urbanos e a necessidade de regulamentação e coexistência pacífica no trânsito.',
    motivatingText: 'A pirâmide de prioridade do trânsito estabelecida no Art. 29, § 2º do CTB determina que os veículos de maior porte são sempre responsáveis pela segurança dos menores, os motorizados pelos não motorizados e todos pela proteção dos pedestres.',
    legalReferences: [
      'Art. 29, § 2º do CTB (Regra de Responsabilidade Hierárquica)',
      'Resolução CONTRAN nº 1.020/2025 (Ciclomotores e ACC)',
      'Resolução CONTRAN nº 996/2023 (Equipamentos de Mobilidade Individual)',
      'Art. 201 do CTB (Distância lateral de 1,5m ao ultrapassar ciclista)'
    ],
    keyArguments: [
      {
        title: 'Respeito à Pirâmide de Vulnerabilidade',
        description: 'Pedestres e ciclistas são as principais vítimas fatais nos atropelamentos urbanos, exigindo prioridade no desenho viário e na fiscalização.'
      },
      {
        title: 'Regulamentação e Fiscalização de Ciclomotores',
        description: 'A proliferação de ciclomotores elétricos de alta velocidade exige fiscalização firme de ACC/CNH A e capacete homologado (Res. 940/22).'
      }
    ],
    interventionProposal: 'Criação de infraestrutura viária segregada (ciclofaixas e calçamentos acessíveis) e fiscalização rígida da distância de segurança de 1,5m ao ultrapassar ciclistas.',
    sampleOutline: {
      intro: 'Citar o Art. 29 § 2º do CTB e a importância da mobilidade ativa e sustentável para a saúde e descarbonização das cidades.',
      dev1: 'Discutir a vulnerabilidade dos pedestres e ciclistas e a necessidade de punir com rigor condutas como a invasão de ciclofaixas.',
      dev2: 'Abordar os novos desafios trazidos pela Resolução CONTRAN 1.020/2025 na regulamentação dos ciclomotores de até 50cc ou 4kW.',
      conclusion: 'Propor a reformulação dos espaços urbanos com engenharia de tráfego inclusiva e campanhas de empatia no trânsito.'
    }
  },
  {
    id: 'tema-etica-administracao',
    title: 'Ética e Integridade na Administração Pública Estadual: Garantias contra a Corrupção no Trânsito',
    category: 'Fiscalização e Ética',
    probability: 'Alta',
    context: 'A promulgação do novo Código de Ética da Administração Pública de São Paulo (Decreto nº 69.328/2025) e as regras rígidas da Lei de Improbidade Administrativa.',
    motivatingText: 'A confiança da sociedade no Detran-SP e nos órgãos de fiscalização depende da conduta ilibada, transparente e ética de seus agentes públicos no combate a qualquer favorecimento ilícito.',
    legalReferences: [
      'Decreto Estadual SP nº 69.328/2025 (Código de Ética da Adm. SP)',
      'Lei Federal nº 8.429/1992 (Lei de Improbidade Administrativa reformada)',
      'Decreto Estadual 69.053/2024 (Estrutura Organizacional do DETRAN-SP)',
      'Art. 37 da CF/88 (Princípio da Moralidade e Impessoalidade)'
    ],
    keyArguments: [
      {
        title: 'Transparência Ativa e Combate ao Conflito de Interesses',
        description: 'O servidor público deve pautar sua conduta pela impessoalidade, sendo vedado aceitar qualquer tipo de vantagem ou favorecimento.'
      },
      {
        title: 'Tecnologia como Aliada da Integridade',
        description: 'O uso de câmeras corporais (bodycams) nas operações de trânsito e a digitalização de processos protegem tanto o cidadão quanto o bom servidor.'
      }
    ],
    interventionProposal: 'Implementação de programa permanente de integridade (Compliance Público) no Detran-SP com uso de câmeras corporais na fiscalização e fortalecimento da Ouvidoria.',
    sampleOutline: {
      intro: 'Apresentar a moralidade administrativa (Art. 37 CF/88) e o novo Código de Ética da Administração Paulista (Decreto 69.328/2025).',
      dev1: 'Analisar o impacto do comportamento ético e ilibado do Agente de Trânsito na credibilidade da fiscalização perante a população.',
      dev2: 'Destacar o uso de tecnologias de gravação e transparência nos autos de infração para prevenir atos de improbidade (Lei 8.429/92).',
      conclusion: 'Concluir reafirmando que a ética é o pilar indispensável para uma gestão de trânsito justa, eficiente e respeitada.'
    }
  }
];
