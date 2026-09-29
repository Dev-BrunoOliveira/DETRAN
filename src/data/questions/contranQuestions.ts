import { Question } from '../../types';

export const contranQuestions: Question[] = [
  // --- BLAG 1: DOCUMENTOS DE HABILITAÇÃO, CATEGORIAS E REGISTROS (Q01 a Q15) ---
  {
    id: 'con-q01',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Competências e Abrangência',
    difficulty: 'Fácil',
    statement: 'Nos termos da Resolução CONTRAN nº 1.020/2025 e do Código de Trânsito Brasileiro, a competência para autorizar a condução de veículos de propulsão humana e de tração animal cabe aos:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 3º & Art. 24, XVIII do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Órgãos executivos de trânsito dos Estados (DETRANs).' },
      { letter: 'B', text: 'Órgãos e entidades executivos de trânsito dos Municípios.' },
      { letter: 'C', text: 'Conselhos Estaduais de Trânsito (CETRANs).' },
      { letter: 'D', text: 'Polícia Rodoviária Federal (PRF).' },
      { letter: 'E', text: 'Órgão máximo executivo de trânsito da União (SENATRAN).' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Conforme o Art. 3º da Resolução CONTRAN nº 1.020/2025 e o Art. 24, inciso XVIII do CTB, a autorização para conduzir veículos de propulsão humana (ex: carroças de mão) e de tração animal (ex: charretes) compete exclusivamente aos órgãos e entidades executivos de trânsito dos Municípios.',
    explanations: {
      A: 'INCORRETA. O Detran atua nos veículos automotores e documentos nacionais.',
      B: 'CORRETA. Res. 1.020/2025 Art. 3º e Art. 24, XVIII do CTB: Competência Municipal.',
      C: 'INCORRETA. Os CETRANs são órgãos normativos e recursais estaduais.',
      D: 'INCORRETA. A PRF atua na fiscalização de rodovias e estradas federais.',
      E: 'INCORRETA. A Senatran é o órgão executivo da União.'
    }
  },
  {
    id: 'con-q02',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Documentos de Habilitação',
    difficulty: 'Fácil',
    statement: 'De acordo com o Art. 4º da Resolução CONTRAN nº 1.020/2025, assinale a opção que apresenta CORRETAMENTE os três documentos oficiais de habilitação reconhecidos no Brasil:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 4º',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Licença de Aprendizagem (LADV), Registro RENACH e Carteira Nacional de Habilitação (CNH).' },
      { letter: 'B', text: 'Permissão para Dirigir (PPD), Autorização para Conduzir Ciclomotor (ACC) e Carteira Nacional de Habilitação (CNH).' },
      { letter: 'C', text: 'Certificado de Registro do Veículo (CRV), Permissão para Dirigir (PPD) e CNH.' },
      { letter: 'D', text: 'Autorização Temporária de Trânsito, Registro BINCO e CNH.' },
      { letter: 'E', text: 'Passaporte de Trânsito, LADV e Permissão para Dirigir (PPD).' }
    ],
    correctLetter: 'B',
    generalExplanation: 'O Art. 4º estabelece taxativamente que são documentos de habilitação: I - Permissão para Dirigir (PPD); II - Autorização para Conduzir Ciclomotor (ACC); e III - Carteira Nacional de Habilitação (CNH).',
    explanations: {
      A: 'INCORRETA. LADV e RENACH não são documentos formais de habilitação final.',
      B: 'CORRETA. Res. 1.020/2025 Art. 4º: PPD, ACC e CNH.',
      C: 'INCORRETA. CRV é documento de registro de propriedade do veículo.',
      D: 'INCORRETA. BINCO é a base de dados informatizada da União.',
      E: 'INCORRETA. Passaporte de trânsito não é categoria de documento de habilitação nacional.'
    }
  },
  {
    id: 'con-q03',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Ciclomotores e Categorias',
    difficulty: 'Médio',
    statement: 'Um cidadão habilitado exclusivamente na Categoria B de CNH pretende conduzir um ciclomotor elétrico com velocidade máxima de fabricação de 45 km/h e potência de 3 kW. À luz da Resolução CONTRAN nº 1.020/2025, o condutor:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 5º, § 1º',
    bancaTag: 'Instituto Avalia / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Está plenamente autorizado, pois a Categoria B engloba todos os veículos de duas rodas.' },
      { letter: 'B', text: 'NÃO está autorizado, pois além dos portadores de ACC, apenas condutores habilitados na Categoria A podem conduzir ciclomotores.' },
      { letter: 'C', text: 'Está autorizado apenas se o veículo possuir câmbio automático.' },
      { letter: 'D', text: 'Poderá conduzir desde que realize curso de atualização de 10 horas em Autoescola.' },
      { letter: 'E', text: 'Poderá conduzir apenas no período diurno e em vias urbanas secundárias.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Conforme a Resolução CONTRAN nº 1.020/2025, Art. 5º, § 1º, "Além dos condutores com Autorização para Conduzir Ciclomotor, apenas os habilitados na categoria A estão aptos a conduzirem ciclomotores." A Categoria B habilita veículos de 4 rodas até 3.500 kg, não cobrindo veículos de 2 rodas.',
    explanations: {
      A: 'INCORRETA. Categoria B habilita automóveis de passeio até 8 passageiros, não 2 rodas.',
      B: 'CORRETA. Res. 1.020/2025 Art. 5º § 1º: Somente Categoria A ou ACC podem conduzir ciclomotores.',
      C: 'INCORRETA. Tipo de câmbio não altera a exigência legal da categoria.',
      D: 'INCORRETA. Não há previsão de curso de 10h para liberar ciclomotor a condutor B.',
      E: 'INCORRETA. Não há essa restrição de horário.'
    }
  },
  {
    id: 'con-q04',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Prontuário e Baixa Definitiva',
    difficulty: 'Médio',
    statement: 'A respeito do prontuário do condutor e do cancelamento do documento de habilitação (Resolução CONTRAN nº 1.020/2025), assinale a afirmativa CORRETA:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 4º, § 4º e Art. 7º, § 3º',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'A baixa definitiva do documento de habilitação ocorrerá exclusivamente com o óbito do condutor.' },
      { letter: 'B', text: 'O prontuário do condutor é eliminado do sistema RENACH após 5 anos sem o cometimento de infrações.' },
      { letter: 'C', text: 'A cassação da CNH gera a exclusão automática de todo o histórico do prontuário.' },
      { letter: 'D', text: 'O cancelamento a pedido do condutor é irreversível e exige novo processo de primeira habilitação.' },
      { letter: 'E', text: 'A validade do prontuário expira no momento em que a CNH atinge a data de vencimento do exame médico.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Nos termos do Art. 7º, § 3º da Resolução CONTRAN nº 1.020/2025, "A baixa definitiva do documento de habilitação ocorrerá exclusivamente com o óbito do condutor." O prontuário permanece ativo no RENACH durante toda a existência do indivíduo.',
    explanations: {
      A: 'CORRETA. Res. 1.020/2025, Art. 7º, § 3º: Baixa definitiva ocorre apenas no óbito.',
      B: 'INCORRETA. O prontuário não é eliminado do RENACH.',
      C: 'INCORRETA. A cassação inabilita o condutor, mas o registro histórico permanece no RENACH.',
      D: 'INCORRETA. O Art. 7º, § 2º prevê que a reversão do cancelamento a pedido pode ser requerida via procedimentos de renovação.',
      E: 'INCORRETA. O vencimento da CNH suspende o direito de dirigir, mas não apaga o prontuário.'
    }
  },
  {
    id: 'con-q05',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Números de Identificação (BINCO/RENACH)',
    difficulty: 'Médio',
    statement: 'Quanto aos elementos de identificação nacional e estadual constantes nos documentos de habilitação (Resolução CONTRAN nº 1.020/2025, Art. 10), é correto afirmar que o número do registro nacional BINCO:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 10, I',
    bancaTag: 'Instituto Avalia',
    options: [
      { letter: 'A', text: 'É modificado a cada renovação periódica da CNH.' },
      { letter: 'B', text: 'É composto por 9 caracteres e 2 dígitos verificadores, sendo único para cada condutor durante toda a sua existência, vedada sua reutilização.' },
      { letter: 'C', text: 'Varia conforme o Estado da Federação em que o condutor reside.' },
      { letter: 'D', text: 'Identifica o lote do papel-moeda de impressão do espelho físico.' },
      { letter: 'E', text: 'É temporário, expirando juntamente com a Permissão para Dirigir.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'O Art. 10, I da Res. CONTRAN 1.020/2025 estabelece que o número do registro nacional BINCO é "gerado pelo sistema informatizado da BINCO/Senatran, composto de nove caracteres e dois dígitos verificadores, único para cada condutor durante toda a sua existência, sendo vedada sua reutilização".',
    explanations: {
      A: 'INCORRETA. O número do registro é perpétuo e não muda nas renovações.',
      B: 'CORRETA. Res. 1.020/2025, Art. 10, I: 9 caracteres + 2 DVs, único e vitalício.',
      C: 'INCORRETA. Quem possui sigla da UF é o formulário RENACH, não o registro BINCO.',
      D: 'INCORRETA. O espelho é identificado pelo número do espelho (Art. 10, II).',
      E: 'INCORRETA. O registro BINCO acompanha o condutor da PPD para a CNH e até a velhice.'
    }
  },
  {
    id: 'con-q06',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Requisitos para Primeira Habilitação',
    difficulty: 'Fácil',
    statement: 'Para dar início ao processo de obtenção da Carteira Nacional de Habilitação (CNH) ou da Autorização para Conduzir Ciclomotor (ACC), o candidato deve preencher os seguintes requisitos previstos na Resolução CONTRAN nº 1.020/2025 e no Art. 140 do CTB:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 17 & Art. 140 do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Ser penalmente imputável, saber ler e escrever, e possuir documento de identidade e CPF.' },
      { letter: 'B', text: 'Ter concluído o Ensino Médio, ter 18 anos completos e comprovar renda própria.' },
      { letter: 'C', text: 'Ser maior de 21 anos, saber ler e escrever e ser domiciliado no município há mais de 2 anos.' },
      { letter: 'D', text: 'Possuir título de eleitor, ser penalmente imputável e ter concluído o Ensino Fundamental.' },
      { letter: 'E', text: 'Estar quitado com o serviço militar, ter 18 anos e carteira de trabalho assinada.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Conforme o Art. 17 da Res. 1.020/2025 e Art. 140 do CTB, os requisitos cumulativos para habilitação são: I - ser penalmente imputável (ter 18 anos completos); II - saber ler e escrever (alfabetizado); III - possuir documento de identidade; IV - possuir CPF.',
    explanations: {
      A: 'CORRETA. Res. 1.020/2025 Art. 17: Penalmente imputável, alfabetizado, RG e CPF.',
      B: 'INCORRETA. Não se exige escolaridade de ensino médio nem comprovação de renda.',
      C: 'INCORRETA. Para 1ª habilitação (A ou B) a idade é 18 anos completos, não 21.',
      D: 'INCORRETA. Não se exige ensino fundamental completo, apenas saber ler e escrever.',
      E: 'INCORRETA. Não se exige carteira de trabalho ou quitação militar como pré-requisito de inscrição.'
    }
  },
  {
    id: 'con-q07',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Validade como Identificação Oficial',
    difficulty: 'Fácil',
    statement: 'Sobre o valor probatório e a validade dos documentos de habilitação como documento de identificação civil (Resolução CONTRAN nº 1.020/2025, Art. 8º), é correto afirmar que:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 8º, § 1º',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'A CNH perde a validade como documento de identidade civil assim que vence o prazo do exame de aptidão física e mental.' },
      { letter: 'B', text: 'A perda de validade do documento de habilitação restringe-se ao exercício do direito de conduzir veículos, não afetando sua utilização como documento oficial de identificação em todo o território nacional.' },
      { letter: 'C', text: 'A CNH digital possui valor secundário, devendo ser acompanhada obrigatoriamente do documento em papel-moeda.' },
      { letter: 'D', text: 'A Permissão para Dirigir (PPD) não possui valor de documento de identidade civil.' },
      { letter: 'E', text: 'O uso da CNH como documento de identificação depende de autorização da Polícia Federal.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'O Art. 8º, § 1º da Res. 1.020/2025 estabelece expressamente que "A perda de validade do documento de habilitação restringe-se ao exercício do direito de conduzir veículos automotores em vias terrestres, não afetando sua utilização como documento oficial de identificação".',
    explanations: {
      A: 'INCORRETA. O vencimento atinge a licença de condução, mas a CNH continua valendo como RG.',
      B: 'CORRETA. Res. 1.020/2025, Art. 8º, § 1º: Mantém fé pública como documento de identidade.',
      C: 'INCORRETA. A CNH digital possui a mesma validade jurídica e fé pública do documento físico.',
      D: 'INCORRETA. A PPD também equivale a documento de identidade.',
      E: 'INCORRETA. É documento oficial por lei federal.'
    }
  },
  {
    id: 'con-q08',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Permissão Internacional para Dirigir (PID)',
    difficulty: 'Médio',
    statement: 'A respeito da Permissão Internacional para Dirigir (PID) emitida no Brasil nos termos do Art. 99 da Resolução CONTRAN nº 1.020/2025, assinale a alternativa correta:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 99 e 100',
    bancaTag: 'FCC / DETRAN 2019',
    options: [
      { letter: 'A', text: 'A PID substitui integralmente a CNH nacional quando o condutor estiver transitando em território brasileiro.' },
      { letter: 'B', text: 'A validade da PID será de no máximo 3 anos ou até a data de vencimento da CNH nacional, o que ocorrer primeiro.' },
      { letter: 'C', text: 'A PID pode ser expedida para condutores titulares apenas de Permissão para Dirigir (PPD).' },
      { letter: 'D', text: 'A obtenção da PID exige aprovação prévia em exame de proficiência na língua do país de destino.' },
      { letter: 'E', text: 'A PID é emitida exclusivamente pelo Ministério das Relações Exteriores (Itamaraty).' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Conforme normatizado na Resolução CONTRAN nº 1.020/2025 (e regramento de documentos internacionais), a PID emitida no Brasil terá validade subordinada à validade da CNH nacional respectiva, limitada ao prazo máximo de 3 anos ou ao vencimento da CNH (o que vencer primeiro).',
    explanations: {
      A: 'INCORRETA. Em território nacional, o documento a ser apresentado é a CNH/PPD.',
      B: 'CORRETA. Regra da PID: Máximo de 3 anos ou o vencimento da CNH de origem.',
      C: 'INCORRETA. Exige CNH definitiva válida.',
      D: 'INCORRETA. Não há exame de idiomas.',
      E: 'INCORRETA. É emitida pelos órgãos de trânsito (Senatran/Detrans).'
    }
  },
  {
    id: 'con-q09',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Processo de Adição de Categoria',
    difficulty: 'Médio',
    statement: 'Um condutor habilitado na Categoria B deseja realizar o processo de adição da Categoria A. Nos termos da Resolução CONTRAN nº 1.020/2025 (Art. 62 a 66), as etapas obrigatórias compreendem:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 62',
    bancaTag: 'Instituto Avalia',
    options: [
      { letter: 'A', text: 'Realização de novo curso teórico completo de 45 horas e nova prova teórica.' },
      { letter: 'B', text: 'Exame de aptidão física e mental, curso prático de direção veicular na categoria pretendida e exame prático de direção.' },
      { letter: 'C', text: 'Apenas apresentação de atestado médico e pagamento de taxa simplificada, sem aulas práticas.' },
      { letter: 'D', text: 'Exame toxicológico de larga janela e prova teórica de legislação específica.' },
      { letter: 'E', text: 'Estágio supervisionado de 6 meses no órgão executivo de trânsito.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'O Art. 62 da Resolução CONTRAN nº 1.020/2025 dispõe que o processo de adição de categoria constitui-se de: I - exame de aptidão física e mental (e avaliação psicológica se exercer atividade remunerada); II - curso prático de direção na categoria a ser adicionada; e III - exame prático de direção veicular.',
    explanations: {
      A: 'INCORRETA. Quem já possui CNH é dispensado de repetir o curso teórico geral.',
      B: 'CORRETA. Res. 1.020/2025 Art. 62: Exame médico + aulas práticas + exame prático.',
      C: 'INCORRETA. Aulas práticas e exame de direção são indispensáveis para adição da categoria A.',
      D: 'INCORRETA. Exame toxicológico é exigido para categorias C, D e E, não para adição de A.',
      E: 'INCORRETA. Não existe estágio supervisionado em Detran.'
    }
  },
  {
    id: 'con-q10',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Reversão de Adição de Categoria',
    difficulty: 'Fácil',
    statement: 'Nos termos do Art. 66 da Resolução CONTRAN nº 1.020/2025, a adição de categoria realizada por um condutor:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 66',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Torna-se vitalícia, sendo expressamente proibida sua exclusão ou renúncia.' },
      { letter: 'B', text: 'Poderá ser revertida a qualquer tempo, por solicitação do condutor habilitado junto ao órgão executivo de trânsito.' },
      { letter: 'C', text: 'Apenas poderá ser revertida mediante laudo de junta médica especial.' },
      { letter: 'D', text: 'Será cancelada automaticamente caso o condutor fique 2 anos sem pilotar.' },
      { letter: 'E', text: 'Exige pagamento de multa administrativa para desistência.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Conforme o Art. 66 da Resolução CONTRAN nº 1.020/2025, "A adição de categoria poderá ser revertida a qualquer tempo, por solicitação do condutor", permitindo o rebaixamento ou exclusão voluntária da categoria adicionada.',
    explanations: {
      A: 'INCORRETA. O condutor pode renunciar a uma categoria adicionada.',
      B: 'CORRETA. Res. 1.020/2025 Art. 66: Reversão a qualquer tempo a pedido do condutor.',
      C: 'INCORRETA. Trata-se de ato voluntário administrativo, sem necessidade de laudo médico impeditivo.',
      D: 'INCORRETA. Não há cancelamento por desuso.',
      E: 'INCORRETA. Não se cobra multa por solicitar exclusão de categoria.'
    }
  },
  {
    id: 'con-q11',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Condutor Estrangeiro no Brasil',
    difficulty: 'Difícil',
    statement: 'Um condutor estrangeiro, habilitado em país signatário da Convenção de Viena, ingressa no Brasil em viagem de turismo. Com base nos artigos 101 a 103 da Resolução CONTRAN nº 1.020/2025, é CORRETO afirmar que ele poderá dirigir no território nacional:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 102 e 103',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Por até 180 (cento e oitenta) dias, respeitada a validade da habilitação de origem, acompanhada de documento de identificação e tradução oficial.' },
      { letter: 'B', text: 'Por no máximo 30 dias, devendo em seguida realizar exame de direção veicular obrigatoriamente.' },
      { letter: 'C', text: 'Indefinidamente, sem necessidade de qualquer tradução ou documento complementar.' },
      { letter: 'D', text: 'Apenas se contratar seguro obrigatório de trânsito internacional em moeda nacional.' },
      { letter: 'E', text: 'Por 1 ano, desde que efetue o cadastro prévio na Prefeitura da capital do Estado.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Art. 102 da Res. CONTRAN 1.020/2025 estabelece que o condutor habilitado em país signatário de convenções ou acordos internacionais (como a Convenção de Viena) poderá dirigir no País pelo prazo de até 180 dias, contados da data de entrada, desde que amparado por sua habilitação de origem válida e documento oficial de identidade.',
    explanations: {
      A: 'CORRETA. Res. 1.020/2025, Art. 102: Prazo de até 180 dias para países com acordo/reciprocidade.',
      B: 'INCORRETA. O prazo legal é de 180 dias, e não 30 dias.',
      C: 'INCORRETA. Após 180 dias exige-se aprovação em exames médicos para expedição de CNH brasileira.',
      D: 'INCORRETA. Não há exigência de seguro especial para valer a CNH estrangeira.',
      E: 'INCORRETA. O prazo não é de 1 ano nem o cadastro é em prefeitura.'
    }
  },
  {
    id: 'con-q12',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Estrangeiro com Residência no Brasil',
    difficulty: 'Médio',
    statement: 'Um cidadão estrangeiro que fixou residência habitual no Brasil há mais de 180 dias pretende obter a Carteira Nacional de Habilitação (CNH) brasileira aproveitando sua habilitação de origem. Segundo o Art. 103 da Resolução CONTRAN nº 1.020/2025, ele deverá:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 103',
    bancaTag: 'Instituto Avalia',
    options: [
      { letter: 'A', text: 'Reiniciar todo o processo de primeira habilitação como se nunca tivesse sido habilitado.' },
      { letter: 'B', text: 'Submeter-se aos exames de aptidão física e mental e à avaliação psicológica, respeitada a equivalência de categoria.' },
      { letter: 'C', text: 'Realizar apenas prova prática de baliza e percurso em autoescola pública.' },
      { letter: 'D', text: 'Solicitar a validação direta no Consulado sem necessidade de exames médicos.' },
      { letter: 'E', text: 'Aguardar o prazo de 5 anos de residência contínua para requerer a CNH.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Conforme o Art. 103 da Res. 1.020/2025, decorrido o prazo de 180 dias de permanência no País, o condutor estrangeiro que pretenda continuar dirigindo deverá requerer a expedição da CNH submetendo-se aos exames de aptidão física e mental e avaliação psicológica.',
    explanations: {
      A: 'INCORRETA. Se houver reciprocidade/acordo, ele não precisa refazer o curso teórico e prático do zero.',
      B: 'CORRETA. Res. 1.020/2025 Art. 103: Exames de aptidão física e mental e avaliação psicológica.',
      C: 'INCORRETA. O exame de direção é dispensado se houver acordo internacional de reciprocidade.',
      D: 'INCORRETA. Exige-se avaliação médica no Brasil.',
      E: 'INCORRETA. Pode requerer após os 180 dias de residência.'
    }
  },
  {
    id: 'con-q13',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Atividade Remunerada (EAR)',
    difficulty: 'Fácil',
    statement: 'Para incluir a observação de Exercício de Atividade Remunerada (EAR) na CNH de qualquer categoria, a Resolução CONTRAN nº 1.020/2025 e o Art. 147, § 3º do CTB exigem obrigatoriamente:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 30 & Art. 147, § 3º do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Aprovação em Exame Toxicológico independentemente da categoria de CNH.' },
      { letter: 'B', text: 'Aprovação em Avaliação Psicológica específica realizada por perito credenciado.' },
      { letter: 'C', text: 'Curso presencial de direção defensiva avançada com carga horária de 100 horas.' },
      { letter: 'D', text: 'Certidão negativa de débitos estaduais e municipais.' },
      { letter: 'E', text: 'Exame prático especial em veículo comercial equipado com tacógrafo.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'O Art. 147, § 3º do CTB e a Resolução CONTRAN nº 1.020/2025 estabelecem que o condutor que exerce atividade remunerada ao veículo (EAR) deve ser submetido à Avaliação Psicológica na concessão e em cada renovação da CNH.',
    explanations: {
      A: 'INCORRETA. Toxicológico é exigido para categorias C, D e E, não para EAR em A ou B.',
      B: 'CORRETA. EAR exige obrigatoriamente avaliação psicológica pericial.',
      C: 'INCORRETA. Não há exigência de curso de 100 horas apenas para a sigla EAR.',
      D: 'INCORRETA. Débitos fiscais não impedem avaliação médica/psicológica.',
      E: 'INCORRETA. Não exige novo exame prático de direção.'
    }
  },
  {
    id: 'con-q14',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Identificação na PPD e CNH',
    difficulty: 'Fácil',
    statement: 'A Permissão para Dirigir (PPD) distingue-se visualmente do modelo definitivo da CNH no documento físico e digital por conter (Resolução CONTRAN nº 1.020/2025, Art. 9º, I):',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 9º, I',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'A tarja vermelha com a inscrição "CONDUTOR EM ESTÁGIO PROBATÓRIO".' },
      { letter: 'B', text: 'A letra "P" gravada na lateral direita do anverso do documento.' },
      { letter: 'C', text: 'Fundo de cor amarela fluorescente com marca d’água do Detran.' },
      { letter: 'D', text: 'O número do CPF impresso em destaque em vermelho.' },
      { letter: 'E', text: 'Um código de barras tridimensional exclusivo para iniciantes.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'O Art. 9º, inciso I da Resolução CONTRAN nº 1.020/2025 especifica que "a Permissão para Dirigir será assinalada pela letra \'P\' na lateral direita do anverso do documento".',
    explanations: {
      A: 'INCORRETA. Não há tarja vermelha com essa inscrição.',
      B: 'CORRETA. Res. 1.020/2025 Art. 9º, I: Letra "P" no anverso do documento.',
      C: 'INCORRETA. O modelo de espelho de papel/digital é padronizado e idêntico ao da CNH.',
      D: 'INCORRETA. O CPF consta no padrão normal.',
      E: 'INCORRETA. Não há código tridimensional exclusivo.'
    }
  },
  {
    id: 'con-q15',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Segunda Via do Documento',
    difficulty: 'Fácil',
    statement: 'A emissão de segunda via do documento de habilitação (Resolução CONTRAN nº 1.020/2025, Art. 6º, VIII) é o processo destinado a:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 6º, VIII',
    bancaTag: 'Instituto Avalia',
    options: [
      { letter: 'A', text: 'Prorrogar a validade do exame médico que se encontra vencido.' },
      { letter: 'B', text: 'Expedir nova via do documento em casos de perda, dano ou extravio, sem quaisquer alterações nos dados constantes do documento original.' },
      { letter: 'C', text: 'Incluir nova categoria de habilitação mediante requerimento simplificado.' },
      { letter: 'D', text: 'Alterar o nome do condutor após casamento ou divórcio.' },
      { letter: 'E', text: 'Transferir o prontuário para outro Estado da Federação.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Conforme o Art. 6º, VIII, a emissão de 2ª via é o "processo em que o condutor habilitado requer a emissão de nova via de seu documento de habilitação, nos casos de perda, dano ou extravio, sem quaisquer alterações nos dados constantes do documento original".',
    explanations: {
      A: 'INCORRETA. Prorrogação de validade é o processo de renovação (Art. 6º, IV).',
      B: 'CORRETA. Res. 1.020/2025 Art. 6º, VIII: 2ª via por perda/dano sem alteração de dados.',
      C: 'INCORRETA. Inclusão de categoria é o processo de adição (Art. 6º, III).',
      D: 'INCORRETA. Alteração de dados cadastrais é o processo de atualização (Art. 6º, V).',
      E: 'INCORRETA. Transferência de UF é o processo de transferência (Art. 6º, VI).'
    }
  },

  // --- BLOCO 2: FORMAÇÃO, CURSO TEÓRICO, LADV E AULAS PRÁTICAS (Q16 a Q30) ---
  {
    id: 'con-q16',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Validade do Curso Teórico',
    difficulty: 'Médio',
    statement: 'No processo de primeira habilitação (Resolução CONTRAN nº 1.020/2025, Art. 21 a 24), a realização e conclusão do curso teórico presencial ou na modalidade EAD é formalmente comprovada no sistema por meio de:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 24',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Apresentação de declaração de próprio punho firmada pelo candidato.' },
      { letter: 'B', text: 'Registro de sua realização no sistema RENACH pelo órgão ou entidade executivo de trânsito.' },
      { letter: 'C', text: 'Apenas carimbo em ficha física arquivada na autoescola.' },
      { letter: 'D', text: 'Publicação do nome do candidato no Diário Oficial do Estado.' },
      { letter: 'E', text: 'Atestado emitido pelo Ministério da Educação (MEC).' }
    ],
    correctLetter: 'B',
    generalExplanation: 'O Art. 24 da Res. CONTRAN 1.020/2025 dispõe que "O curso teórico será considerado concluído mediante registro de sua realização no Renach pelo órgão ou entidade executivo de trânsito do Estado ou do Distrito Federal".',
    explanations: {
      A: 'INCORRETA. Declaração do aluno não possui validade sistêmica.',
      B: 'CORRETA. Res. 1.020/2025 Art. 24: Registro sistêmico no RENACH.',
      C: 'INCORRETA. O controle é obrigatoriamente informatizado e sistêmico via RENACH.',
      D: 'INCORRETA. Não há publicação no Diário Oficial para conclusão de curso teórico de CNH.',
      E: 'INCORRETA. O MEC não chancela exames teóricos de trânsito.'
    }
  },
  {
    id: 'con-q17',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Aproveitamento no Exame Teórico',
    difficulty: 'Fácil',
    statement: 'Para ser considerado APROVADO nos exames teóricos de habilitação (Resolução CONTRAN nº 1.020/2025, Art. 34), o candidato deverá alcançar o aproveitamento mínimo de:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 34',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: '50% (cinquenta por cento) dos pontos da prova.' },
      { letter: 'B', text: '60% (sessenta por cento) dos pontos da prova.' },
      { letter: 'C', text: '70% (setenta por cento) dos pontos da prova.' },
      { letter: 'D', text: '80% (oitenta por cento) dos pontos da prova.' },
      { letter: 'E', text: '90% (noventa por cento) dos pontos da prova.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'O Art. 34 da Resolução CONTRAN nº 1.020/2025 especifica expressamente: "Para aprovação nos exames teóricos, o candidato deverá alcançar aproveitamento mínimo de 70% (setenta por cento)". Em uma prova de 30 questões, o mínimo é 21 acertos.',
    explanations: {
      A: 'INCORRETA. 50% é insuficiente.',
      B: 'INCORRETA. 60% não atinge a exigência legal.',
      C: 'CORRETA. Res. 1.020/2025 Art. 34: Exige-se exatamente no mínimo 70% de aproveitamento.',
      D: 'INCORRETA. 80% é acima da exigência regulamentar.',
      E: 'INCORRETA. 90% não é o corte fixado.'
    }
  },
  {
    id: 'con-q18',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Expedição da LADV',
    difficulty: 'Fácil',
    statement: 'Segundo o Art. 35 da Resolução CONTRAN nº 1.020/2025, a Licença de Aprendizagem de Direção Veicular (LADV) será expedida imediatamente após:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 35',
    bancaTag: 'Instituto Avalia',
    options: [
      { letter: 'A', text: 'O cadastramento dos dados biométricos do candidato na etapa inicial.' },
      { letter: 'B', text: 'O registro no RENACH do resultado de aprovação nos exames teóricos.' },
      { letter: 'C', text: 'A conclusão de metade da carga horária de aulas práticas.' },
      { letter: 'D', text: 'A aprovação no exame de direção veicular.' },
      { letter: 'E', text: 'O pagamento da taxa de expedição da CNH definitiva.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Conforme o Art. 35 da Res. CONTRAN 1.020/2025, "O registro no Renach do resultado de aprovação nos exames teóricos resultará na expedição da Licença de Aprendizagem", autorizando o início da aprendizagem prática de direção.',
    explanations: {
      A: 'INCORRETA. A biometria antecede os exames médicos e teóricos.',
      B: 'CORRETA. Res. 1.020/2025 Art. 35: A LADV é emitida logo após o registro da aprovação teórica.',
      C: 'INCORRETA. As aulas práticas exigem a LADV antes de iniciarem.',
      D: 'INCORRETA. O exame prático exige ter concluído as aulas práticas com LADV.',
      E: 'INCORRETA. A CNH é o documento final, após a LADV e aprovação prática.'
    }
  },
  {
    id: 'con-q19',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Requisitos das Aulas Práticas',
    difficulty: 'Médio',
    statement: 'Durante a realização das aulas práticas de direção veicular em vias públicas (Resolução CONTRAN nº 1.020/2025, Art. 37), o candidato deverá obrigatoriamente:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 37',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Estar desacompanhado no veículo para demonstrar autoconfiança no trânsito.' },
      { letter: 'B', text: 'Portar a LADV (física ou digital) e documento oficial de identificação, acompanhado por instrutor de trânsito credenciado.' },
      { letter: 'C', text: 'Portar apenas o comprovante de pagamento da taxa de matrícula da autoescola.' },
      { letter: 'D', text: 'Transitar exclusivamente no período noturno até cumprir 50% das aulas.' },
      { letter: 'E', text: 'Conduzir apenas veículos equipados com transmissão automática.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'O Art. 37 exige expressamente que as aulas práticas em vias públicas ocorram com o candidato portando a LADV e documento de identidade oficial, acompanhado por instrutor credenciado e em veículo devidamente identificado.',
    explanations: {
      A: 'INCORRETA. O candidato em aprendizagem jamais pode conduzir desacompanhado.',
      B: 'CORRETA. Res. 1.020/2025 Art. 37: LADV + RG + acompanhado de instrutor credenciado.',
      C: 'INCORRETA. Comprovante de taxa da autoescola não supre o documento legal (LADV).',
      D: 'INCORRETA. Não há obrigatoriedade de fazer 50% das aulas à noite.',
      E: 'INCORRETA. Não há restrição exclusiva para veículos automáticos.'
    }
  },
  {
    id: 'con-q20',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Penalidade para Direção sem LADV',
    difficulty: 'Difícil',
    statement: 'Caso um candidato à habilitação seja flagrado conduzindo veículo automotor em via pública sem estar acompanhado do instrutor credenciado ou desprovido da LADV, a Resolução CONTRAN nº 1.020/2025 estabelece como medida/penalidade administrativa:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 37, § 2º / Art. 130',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Advertência verbal pelo agente de trânsito e liberação imediata.' },
      { letter: 'B', text: 'Suspensão da LADV pelo prazo de 6 (seis) meses.' },
      { letter: 'C', text: 'Cancelamento definitivo e irrevogável do CPF do candidato.' },
      { letter: 'D', text: 'Obrigação de refazer o curso teórico de 45 horas com pagamento em dobro.' },
      { letter: 'E', text: 'Cassação imediata do direito de dirigir por 2 anos.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'A infração de conduzir veículo de aprendizagem desacompanhado de instrutor ou sem portar a LADV acarreta a suspensão da Licença de Aprendizagem pelo período de 6 (seis) meses, conforme disciplina da Resolução CONTRAN nº 1.020/2025.',
    explanations: {
      A: 'INCORRETA. Não é mera advertência verbal.',
      B: 'CORRETA. Res. 1.020/2025: Suspensão da LADV pelo prazo de 6 meses.',
      C: 'INCORRETA. O CTB/CONTRAN não tem competência para cancelar CPF.',
      D: 'INCORRETA. A penalidade incidente sobre o processo de aprendizagem é a suspensão temporal da LADV.',
      E: 'INCORRETA. O candidato ainda não possui CNH para ser cassada.'
    }
  },
  {
    id: 'con-q21',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Veículos de Aprendizagem e Duplo Comando',
    difficulty: 'Médio',
    statement: 'Os veículos destinados ao ensino prático de direção veicular pertencentes aos Centros de Formação de Condutores (Resolução CONTRAN nº 1.020/2025, Art. 127 e 128) devem possuir obrigatoriamente:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 128',
    bancaTag: 'FCC / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Duplo comando de freio e embreagem e espelho retrovisor interno extra para o instrutor.' },
      { letter: 'B', text: 'Sirene de emergência e faróis estroboscópicos azuis.' },
      { letter: 'C', text: 'Blindagem nível III-A para proteção durante o exame.' },
      { letter: 'D', text: 'Limitador de velocidade eletrônico travado em 30 km/h.' },
      { letter: 'E', text: 'Câmeras internas com gravação contínua conectadas diretamente ao Exército.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Art. 128 da Res. 1.020/2025 prevê que os veículos de instrução prática da Categoria B devem dispor de duplo comando de freio e embreagem, além de espelho retrovisor interno complementar para uso do instrutor/examinador.',
    explanations: {
      A: 'CORRETA. Res. 1.020/2025 Art. 128: Duplo comando pedagógico de freio/embreagem e retrovisor extra.',
      B: 'INCORRETA. Sirene e estroboscópio são exclusivos de veículos de emergência.',
      C: 'INCORRETA. Blindagem não é exigida.',
      D: 'INCORRETA. Não há limitador fixo de 30 km/h.',
      E: 'INCORRETA. O Exército não monitora veículos de autoescola.'
    }
  },
  {
    id: 'con-q22',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Identidade do Candidato nos Exames',
    difficulty: 'Fácil',
    statement: 'Conforme estabelece o Art. 27 da Resolução CONTRAN nº 1.020/2025, a identificação do candidato na realização dos exames teórico e prático será verificada por meio de:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 27',
    bancaTag: 'Instituto Avalia',
    options: [
      { letter: 'A', text: 'Documento oficial de identidade e validação biográﬁca/biométrica no sistema.' },
      { letter: 'B', text: 'Assinatura de testemunha presencial devidamente reconhecida em cartório.' },
      { letter: 'C', text: 'Apenas apresentação de cartão de estudante ou crachá de trabalho.' },
      { letter: 'D', text: 'Atestado de bons antecedentes emitido pela Polícia Civil.' },
      { letter: 'E', text: 'Comprovante de residência atualizado em nome dos pais.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Conforme o Art. 27, a identidade do candidato será verificada nos exames teórico e prático por meio de documento oficial de identificação com foto e confirmação biométrica no sistema informatizado.',
    explanations: {
      A: 'CORRETA. Res. 1.020/2025 Art. 27: Documento oficial de identificação + biometria.',
      B: 'INCORRETA. Não se exige testemunha de cartório.',
      C: 'INCORRETA. Cartão de estudante não supre a exigência de documento oficial de identidade.',
      D: 'INCORRETA. Atestado de antecedentes não é a forma de checagem biométrica no ato do exame.',
      E: 'INCORRETA. Comprovante de residência é usado na etapa de abertura do processo.'
    }
  },
  {
    id: 'con-q23',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Transferência de Estado no Processo',
    difficulty: 'Médio',
    statement: 'Um candidato iniciou o processo de obtenção da CNH no Estado de São Paulo e, por motivo de mudança de residência, transferiu seu domicílio para o Estado de Minas Gerais antes de concluir as aulas práticas. Segundo o Art. 14 da Resolução CONTRAN nº 1.020/2025:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 14',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'O candidato perderá todas as etapas já cumpridas, devendo reiniciar o processo do zero em Minas Gerais.' },
      { letter: 'B', text: 'É assegurada a transferência do processo de formação entre órgãos executivos de trânsito, aproveitando-se as etapas e exames já concluídos com aprovação.' },
      { letter: 'C', text: 'A transferência só é permitida se o candidato pagar multa de transferência interestadual.' },
      { letter: 'D', text: 'O processo poderá ser transferido apenas se faltar apenas o exame de direção.' },
      { letter: 'E', text: 'A transferência exige autorização do Juiz Diretor do Foro da comarca de origem.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'O Art. 14 da Res. CONTRAN 1.020/2025 prevê a possibilidade de transferência do processo de habilitação entre Unidades da Federação, mediante reaproveitamento dos atos e exames já registrados com sucesso na Base BINCO/RENACH.',
    explanations: {
      A: 'INCORRETA. Não há perda das etapas teóricas ou exames médicos aprovados.',
      B: 'CORRETA. Res. 1.020/2025 Art. 14: Aproveitamento integral das etapas concluídas.',
      C: 'INCORRETA. Não há incidência de multa por mudança de domicílio.',
      D: 'INCORRETA. Pode ser transferido em qualquer fase do processo.',
      E: 'INCORRETA. É procedimento estritamente administrativo entre Detrans.'
    }
  },
  {
    id: 'con-q24',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Banco Nacional de Questões',
    difficulty: 'Fácil',
    statement: 'As questões objetivas que integram as provas dos exames teóricos aplicados pelos Detrans em todo o Brasil (Resolução CONTRAN nº 1.020/2025, Art. 33) são extraídas obrigatoriamente do:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 33',
    bancaTag: 'Instituto Avalia',
    options: [
      { letter: 'A', text: 'Banco Nacional de Questões mantido pelo órgão máximo executivo de trânsito da União (SENATRAN).' },
      { letter: 'B', text: 'Acervo privado de cada autoescola credenciada no município.' },
      { letter: 'C', text: 'Arquivo de provas antigas do Ministério da Justiça.' },
      { letter: 'D', text: 'Banco de dados da Polícia Rodoviária Federal.' },
      { letter: 'E', text: 'Sistema de consulta pública do Tribunal Superior Eleitoral.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Conforme o Art. 33 da Res. 1.020/2025, as questões dos exames teóricos são padronizadas e extraídas do Banco Nacional de Questões sob gestão e responsabilidade da Senatran.',
    explanations: {
      A: 'CORRETA. Res. 1.020/2025 Art. 33: Banco Nacional de Questões da Senatran.',
      B: 'INCORRETA. Autoescolas não elaboram as provas teóricas oficiais.',
      C: 'INCORRETA. O órgão responsável é a Senatran (Ministério dos Transportes).',
      D: 'INCORRETA. A PRF não elabora o banco de exames de CNH.',
      E: 'INCORRETA. O TSE não tem relação com trânsito.'
    }
  },
  {
    id: 'con-q25',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Candidato com Deficiência Auditiva',
    difficulty: 'Médio',
    statement: 'A Resolução CONTRAN nº 1.020/2025, em seu Art. 86, estabelece garantias aos candidatos com deficiência auditiva no processo de habilitação. É CORRETO afirmar que é assegurado a esses candidatos:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 86',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Isenção total de exames práticos e teóricos de direção.' },
      { letter: 'B', text: 'Atendimento por intérprete da Língua Brasileira de Sinais (LIBRAS) ou uso de tecnologias assistivas nos exames.' },
      { letter: 'C', text: 'Concessão direta de CNH na Categoria E sem necessidade de aulas.' },
      { letter: 'D', text: 'Autorização exclusiva para dirigir no horário entre 08h e 12h.' },
      { letter: 'E', text: 'Dispensa da obrigatoriedade do uso de espelhos retrovisores.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'O Art. 86 garante a acessibilidade plena ao candidato com deficiência auditiva, assegurando a presença de tradutor/intérprete de LIBRAS ou utilização de recursos tecnológicos assistivos aprovados durante os exames.',
    explanations: {
      A: 'INCORRETA. A acessibilidade garante meios para realização dos exames, não a dispensa das avaliações.',
      B: 'CORRETA. Res. 1.020/2025 Art. 86: Intérprete de LIBRAS ou tecnologia assistiva.',
      C: 'INCORRETA. Não há privilégio de categoria E direta sem processo prévio.',
      D: 'INCORRETA. Não há restrição de horário decorrente unicamente da deficiência auditiva.',
      E: 'INCORRETA. O uso de espelhos é ainda mais crítico para deficientes auditivos.'
    }
  },
  {
    id: 'con-q26',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Educação para o Trânsito nas Escolas',
    difficulty: 'Fácil',
    statement: 'O Capítulo IV, Seção V da Resolução CONTRAN nº 1.020/2025 institui formalmente o programa que permite a realização do conteúdo teórico do processo de habilitação em instituições de ensino. Esse programa é denominado:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 80',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Programa Nacional de Educação para o Trânsito nas Escolas.' },
      { letter: 'B', text: 'Programa Jovem Condutor das Rodovias.' },
      { letter: 'C', text: 'Sistema Integrado de Trânsito Escolar.' },
      { letter: 'D', text: 'Plano Nacional de Redução de Mortes (PNATRANS Escolar).' },
      { letter: 'E', text: 'Projeto Escola Aberta de Trânsito.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Art. 80 institui o "Programa Nacional de Educação para o Trânsito nas Escolas", destinado a promover a formação teórica de condutores no âmbito do ensino médio e superior das redes pública e privada.',
    explanations: {
      A: 'CORRETA. Res. 1.020/2025 Art. 80: Programa Nacional de Educação para o Trânsito nas Escolas.',
      B: 'INCORRETA. Nome incorreto.',
      C: 'INCORRETA. Nome fictício.',
      D: 'INCORRETA. PNATRANS é o plano de redução de mortes geral, não o programa escolar específico do Art. 80.',
      E: 'INCORRETA. Denominação incorreta.'
    }
  },
  {
    id: 'con-q27',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Validade do Certificado Teórico',
    difficulty: 'Médio',
    statement: 'O certificado de conclusão do curso teórico emitido ao candidato aprovado no processo de formação de condutores (Resolução CONTRAN nº 1.020/2025, Art. 23):',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 23',
    bancaTag: 'Instituto Avalia',
    options: [
      { letter: 'A', text: 'Substitui a Permissão para Dirigir (PPD) pelo prazo de 30 dias até a chegada do documento.' },
      { letter: 'B', text: 'Destina-se unicamente a comprovar o cumprimento da carga horária teórica para fins do processo de habilitação no RENACH.' },
      { letter: 'C', text: 'Autoriza o aluno a pilotar ciclomotores em vias rurais não pavimentadas.' },
      { letter: 'D', text: 'Concede desconto automático na compra de veículos zero quilômetro.' },
      { letter: 'E', text: 'Serve como título de habilitação provisória internacional.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Conforme o Art. 23 da Res. 1.020/2025, o certificado de conclusão do curso teórico tem efeito exclusivamente pedagógico e cadastral, destinado a comprovar a realização das aulas para liberação do exame teórico e expedição da LADV.',
    explanations: {
      A: 'INCORRETA. Não autoriza condução de veículos automotores.',
      B: 'CORRETA. Res. 1.020/2025 Art. 23: Destina-se unicamente a comprovar a frequência/cumprimento das aulas teóricas no RENACH.',
      C: 'INCORRETA. Não é licença de condução.',
      D: 'INCORRETA. Não tem efeito fiscal ou comercial.',
      E: 'INCORRETA. Não possui valor internacional.'
    }
  },
  {
    id: 'con-q28',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Cursos na Modalidade EAD',
    difficulty: 'Médio',
    statement: 'As entidades que oferecem cursos teóricos de trânsito na modalidade de educação a distância (EAD) devem cumprir requisitos estritos disciplinados na Resolução CONTRAN nº 1.020/2025 (Art. 121). É correto afirmar que essas entidades:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 121',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Dependem de homologação da Senatran e validação de mecanismos de controle de frequência e biometria facial dos alunos.' },
      { letter: 'B', text: 'Podem funcionar livremente sem qualquer fiscalização do Detran ou da Senatran.' },
      { letter: 'C', text: 'Estão dispensadas de registrar a carga horária no sistema RENACH.' },
      { letter: 'D', text: 'Podem emitir CNH definitiva diretamente aos alunos sem passar pelos exames do Detran.' },
      { letter: 'E', text: 'São restritas a atender alunos com idade superior a 60 anos.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Art. 121 exige que as soluções e plataformas EAD sejam homologadas pela Senatran e integradas ao RENACH, possuindo validação biométrica facial e controle rígido de presença para evitar fraudes.',
    explanations: {
      A: 'CORRETA. Res. 1.020/2025 Art. 121: Homologação Senatran + controle biométrico facial/frequência.',
      B: 'INCORRETA. São rigorosamente credenciadas e fiscalizadas.',
      C: 'INCORRETA. O registro no RENACH é obrigatório.',
      D: 'INCORRETA. A expedição da CNH é ato exclusivo do órgão público estadual de trânsito.',
      E: 'INCORRETA. Modalidade EAD é acessível a qualquer aluno apto no processo.'
    }
  },
  {
    id: 'con-q29',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Exame Teórico e Desempenho',
    difficulty: 'Fácil',
    statement: 'Caso um candidato não alcance o aproveitamento mínimo de 70% no exame teórico do Detran (Resolução CONTRAN nº 1.020/2025), o procedimento correto é:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 34 e 35',
    bancaTag: 'Instituto Avalia',
    options: [
      { letter: 'A', text: 'Realizar o reexame teórico mediante reagendamento, sem necessidade de cumprir prazos de carência abusivos.' },
      { letter: 'B', text: 'Ser sumariamente banido do sistema por 2 anos.' },
      { letter: 'C', text: 'Ser obrigado a refazer todas as aulas médicas e psicológicas.' },
      { letter: 'D', text: 'Ter seu documento de identidade confiscado pelo examinador.' },
      { letter: 'E', text: 'Iniciar obrigatoriamente as aulas práticas de direção para compensar a nota.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Com a revogação do antigo prazo de espera de 15 dias, o candidato reprovado no exame teórico pode agendar o reexame assim que recolhida a respectiva taxa e disponibilizada a vaga pelo órgão de trânsito.',
    explanations: {
      A: 'CORRETA. Reexame mediante novo agendamento, sem prazos de carência despropositados.',
      B: 'INCORRETA. Não há banimento do sistema.',
      C: 'INCORRETA. Exames médicos aprovados continuam válidos.',
      D: 'INCORRETA. Documentos pessoais não são confiscados.',
      E: 'INCORRETA. As aulas práticas exigem aprovação prévia no exame teórico para emissão da LADV.'
    }
  },
  {
    id: 'con-q30',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Biometria no Processo de Habilitação',
    difficulty: 'Fácil',
    statement: 'A coleta de dados biométricos (impressões digitais e fotografia digital) durante o processo de habilitação (Resolução CONTRAN nº 1.020/2025, Art. 28) destina-se a:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 28',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Garantir a unicidade cadastral no RENACH, prevenir fraudes e confeccionar os documentos de habilitação.' },
      { letter: 'B', text: 'Vender os dados biométricos a empresas seguradoras de veículos.' },
      { letter: 'C', text: 'Criar um banco de dados para a Justiça Eleitoral realizar votação por biometria.' },
      { letter: 'D', text: 'Cadastrar o condutor no sistema de cobrança automática de pedágios.' },
      { letter: 'E', text: 'Substituir a necessidade de apresentação da CNH em abordagens de fiscalização.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Conforme o Art. 28, os dados biométricos coletados destinam-se a garantir a identificação unívoca do condutor no RENACH/BINCO, evitar falsidade ideológica e alimentar os sistemas de confecção dos documentos físico e digital.',
    explanations: {
      A: 'CORRETA. Res. 1.020/2025 Art. 28: Identificação unívoca, segurança e expedição de documentos.',
      B: 'INCORRETA. Comercialização de dados biométricos é crime e viola a LGPD.',
      C: 'INCORRETA. A finalidade do RENACH é estritamente no âmbito do SNT.',
      D: 'INCORRETA. Não se destina a cobrança de pedágio.',
      E: 'INCORRETA. O condutor continua obrigado a portar a CNH (física ou digital).'
    }
  },

  // --- BLOCO 3: EXAME PRÁTICO, FALTAS, PONTUAÇÃO, PPD E INFRAÇÕES IMPEDITIVAS (Q31 a Q45) ---
  {
    id: 'con-q31',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Exame Prático e Pontuação de Faltas',
    difficulty: 'Médio',
    statement: 'No exame de direção veicular para obtenção da CNH (Resolução CONTRAN nº 1.020/2025, Art. 45 a 47), a avaliação do candidato é feita mediante a apuração de faltas cometidas durante o percurso. Para ser considerado APROVADO, a pontuação negativa total do candidato não poderá exceder a:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 47',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: '1 (um) ponto.' },
      { letter: 'B', text: '2 (dois) pontos.' },
      { letter: 'C', text: '3 (três) pontos.' },
      { letter: 'D', text: '4 (quatro) pontos.' },
      { letter: 'E', text: '5 (cinco) pontos.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'O Art. 47 da Res. CONTRAN 1.020/2025 dispõe que "Para aprovação no exame de direção veicular, o candidato deverá ter nota atribuída não superior a 3 (três) pontos negativos". Somar 4 ou mais pontos resulta em reprovação.',
    explanations: {
      A: 'INCORRETA. O limite tolerado é até 3 pontos.',
      B: 'INCORRETA. Com 2 pontos o candidato ainda está dentro da margem de aprovação.',
      C: 'CORRETA. Res. 1.020/2025 Art. 47: Máximo de 3 pontos de faltas para aprovação.',
      D: 'INCORRETA. 4 pontos reprova o candidato.',
      E: 'INCORRETA. 5 pontos é acima do limite regulamentar.'
    }
  },
  {
    id: 'con-q32',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Falta Eliminatória no Exame Prático',
    difficulty: 'Médio',
    statement: 'Durante a realização do exame prático de direção veicular na Categoria B, o candidato comete uma falta eliminatória ao subir com a roda no meio-fio durante a manobra de estacionamento (baliza). De acordo com a Resolução CONTRAN nº 1.020/2025 (Art. 46):',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 46',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'O candidato perde apenas 1 ponto e pode continuar o percurso normalmente.' },
      { letter: 'B', text: 'O exame poderá ser imediatamente interrompido pela comissão examinadora, resultando na reprovação direta do candidato.' },
      { letter: 'C', text: 'O examinador deve conceder 3 tentativas adicionais para refazer a baliza.' },
      { letter: 'D', text: 'O candidato é aprovado com ressalva, devendo fazer 2 aulas extras.' },
      { letter: 'E', text: 'A falta é convertida em multa pecuniária a ser paga na autoescola.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Conforme o Art. 46, a comissão examinadora interromperá o exame e reprovará o candidato imediatamente após o cometimento de qualquer falta eliminatória (como subir no meio-fio, avançar sinal vermelho ou colidir o veículo).',
    explanations: {
      A: 'INCORRETA. Subir no meio-fio é falta eliminatória, não leve de 1 ponto.',
      B: 'CORRETA. Res. 1.020/2025 Art. 46: Falta eliminatória interrompe o exame e reprova sumariamente.',
      C: 'INCORRETA. Não há concessão de tentativas extras após falta eliminatória.',
      D: 'INCORRETA. Não existe aprovação com ressalva em exame prático.',
      E: 'INCORRETA. Não há conversão de falta técnica em cobrança pecuniária.'
    }
  },
  {
    id: 'con-q33',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Classificação das Faltas no Exame Prático',
    difficulty: 'Médio',
    statement: 'Na valoração das faltas durante o exame de direção veicular (Resolução CONTRAN nº 1.020/2025), a uma falta de natureza GRAVE é atribuída a pontuação de:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 45',
    bancaTag: 'Instituto Avalia',
    options: [
      { letter: 'A', text: '1 (um) ponto negativo.' },
      { letter: 'B', text: '2 (dois) pontos negativos.' },
      { letter: 'C', text: '3 (três) pontos negativos.' },
      { letter: 'D', text: '4 (quatro) pontos negativos.' },
      { letter: 'E', text: '5 (cinco) pontos negativos.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'A escala de pontuação de faltas no exame prático é: Eliminatória (reprovação direta); Grave = 3 pontos; Média = 2 pontos; Leve = 1 ponto. Portanto, uma falta grave equivale a 3 pontos.',
    explanations: {
      A: 'INCORRETA. 1 ponto é atribuído à falta Leve.',
      B: 'INCORRETA. 2 pontos são atribuídos à falta Média.',
      C: 'CORRETA. Res. 1.020/2025 Art. 45: Falta Grave = 3 pontos negativos.',
      D: 'INCORRETA. 4 pontos não é valor de tabela isolado.',
      E: 'INCORRETA. Tabela não possui pontuação de 5 pontos.'
    }
  },
  {
    id: 'con-q34',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Combinação de Faltas no Exame Prático',
    difficulty: 'Médio',
    statement: 'Durante a prova de direção veicular, um candidato cometeu 1 (uma) falta de natureza média (2 pontos) e 1 (uma) falta de natureza leve (1 ponto). Ao final do percurso, considerando os critérios da Resolução CONTRAN nº 1.020/2025, o candidato será considerado:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 47',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'APROVADO, pois a soma total de faltas foi de 3 pontos negativos (limite máximo permitido).' },
      { letter: 'B', text: 'REPROVADO, pois o acúmulo de duas faltas de naturezas diferentes gera eliminação direta.' },
      { letter: 'C', text: 'APROVADO com obrigação de refazer o teste de baliza.' },
      { letter: 'D', text: 'REPROVADO, pois faltas médias e leves não podem se somar.' },
      { letter: 'E', text: 'ENCAMINHADO para junta médica pericial.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Soma dos pontos: Média (2 pts) + Leve (1 pt) = 3 pontos negativos. Como o Art. 47 permite aprovação com até 3 pontos negativos inclusive, o candidato é considerado APROVADO.',
    explanations: {
      A: 'CORRETA. Total de 3 pontos = APROVADO (atingiu exatamente o limite máximo permitido).',
      B: 'INCORRETA. Faltas de naturezas diferentes se somam aritmeticamente.',
      C: 'INCORRETA. Se aprovado, a prova está encerrada com sucesso.',
      D: 'INCORRETA. Faltas leves e médias somam normalmente.',
      E: 'INCORRETA. Não há encaminhamento médico por pontuação de exame prático.'
    }
  },
  {
    id: 'con-q35',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Validade da Permissão para Dirigir (PPD)',
    difficulty: 'Fácil',
    statement: 'A Permissão para Dirigir (PPD), emitida ao candidato aprovado em todas as etapas do processo de primeira habilitação (Resolução CONTRAN nº 1.020/2025, Art. 49), possui validade de exatamente:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 49 & Art. 148, § 2º CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: '6 (seis) meses.' },
      { letter: 'B', text: '1 (um) ano.' },
      { letter: 'C', text: '2 (dois) anos.' },
      { letter: 'D', text: '5 (cinco) anos.' },
      { letter: 'E', text: '10 (dez) anos.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'A PPD tem validade de exatamente 1 (um) ano, contado a partir da data de expedição do documento, conforme determina o Art. 49 da Res. 1.020/2025 e o Art. 148, § 2º do CTB.',
    explanations: {
      A: 'INCORRETA. 6 meses é o prazo de suspensão da LADV por infração.',
      B: 'CORRETA. Res. 1.020/2025 Art. 49: Validade de 1 ano para a PPD.',
      C: 'INCORRETA. 2 anos não é o prazo da PPD.',
      D: 'INCORRETA. 5 anos é validade de CNH para faixa de 50 a 69 anos.',
      E: 'INCORRETA. 10 anos é validade de CNH para menores de 50 anos.'
    }
  },
  {
    id: 'con-q36',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Concessão da CNH Definitiva e Infrações',
    difficulty: 'Médio',
    statement: 'Ao término do período de 1 ano de validade da Permissão para Dirigir (PPD), o condutor receberá a CNH definitiva desde que atenda à seguinte condição legal (Resolução CONTRAN nº 1.020/2025, Art. 51):',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 51 & Art. 148, § 3º CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Não ter cometido nenhuma infração de trânsito de qualquer natureza.' },
      { letter: 'B', text: 'Não ter sido autuado por nenhuma infração de natureza GRAVE ou GRAVÍSSIMA, nem ser REINCIDENTE em infração MÉDIA.' },
      { letter: 'C', text: 'Ter realizado pelo menos 1.000 quilômetros de rodagem comprovados por GPS.' },
      { letter: 'D', text: 'Apresentar declaração de quitação de tributos municipais e estaduais.' },
      { letter: 'E', text: 'Prestar 20 horas de serviços comunitários na Prefeitura.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Conforme o Art. 51 da Res. 1.020/2025 e Art. 148, § 3º do CTB, a CNH definitiva será concedida desde que o condutor não tenha cometido nenhuma infração grave ou gravíssima, nem seja reincidente em infração média durante os 12 meses da PPD.',
    explanations: {
      A: 'INCORRETA. Infrações leves ou 1 infração média isolada NÃO impedem a CNH.',
      B: 'CORRETA. Res. 1.020/2025 Art. 51: Proibido 1 Grave, 1 Gravíssima ou 2+ Médias.',
      C: 'INCORRETA. Não há monitoramento de quilometragem por GPS para emissão de CNH.',
      D: 'INCORRETA. Débitos fiscais não impedem a concessão da CNH definitiva.',
      E: 'INCORRETA. Serviço comunitário é sanção penal/administrativa, não requisito de PPD.'
    }
  },
  {
    id: 'con-q37',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Infração Média Isolada na PPD',
    difficulty: 'Médio',
    statement: 'Um condutor portador de Permissão para Dirigir (PPD) há 8 meses cometeu uma única infração de trânsito de natureza MÉDIA (ex: ter seu veículo imobilizado na via por falta de combustível - Art. 180 CTB). Ao completar 12 meses de PPD, ele:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 51 & Art. 148, § 3º CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Terá sua PPD cancelada e deverá reiniciar todo o processo de habilitação do zero.' },
      { letter: 'B', text: 'Poderá obter normalmente a CNH definitiva, pois a lei veda apenas a REINCIDÊNCIA em infrações médias.' },
      { letter: 'C', text: 'Será obrigado a cumprir 6 meses adicionais de estágio probatório.' },
      { letter: 'D', text: 'Terá a PPD suspensa por 30 dias com apreensão do veículo.' },
      { letter: 'E', text: 'Deverá realizar obrigatoriamente novo exame prático de baliza.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'A regra do Art. 148, § 3º do CTB e Art. 51 da Res. 1.020/2025 proíbe a reincidência em infração média (ou seja, cometer 2 ou mais médias). O cometimento de UMA ÚNICA infração média não impede a obtenção da CNH definitiva.',
    explanations: {
      A: 'INCORRETA. O cancelamento exige infração grave, gravíssima ou reincidência em média.',
      B: 'CORRETA. 1 infração média isolada PERMITE a emissão da CNH definitiva.',
      C: 'INCORRETA. Não existe prorrogação de prazo probatório.',
      D: 'INCORRETA. Não há previsão de suspensão por 1 infração média isolada na PPD.',
      E: 'INCORRETA. Não se exige novo exame de direção.'
    }
  },
  {
    id: 'con-q38',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Cometimento de Infração Gravíssima na PPD',
    difficulty: 'Médio',
    statement: 'Um condutor titular de Permissão para Dirigir (PPD) é autuado por transitar em velocidade superior à máxima permitida em mais de 50% (infração gravíssima). Nos termos da Resolução CONTRAN nº 1.020/2025 (Art. 51, § 1º) e do Art. 148, § 4º do CTB:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 51, § 1º & Art. 148, § 4º CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'A PPD será renovada por mais 1 ano sob supervisão policial.' },
      { letter: 'B', text: 'A CNH definitiva não será concedida, ocorrendo o cancelamento do documento de habilitação e a obrigação de reiniciar todo o processo de formação do zero.' },
      { letter: 'C', text: 'O condutor receberá apenas uma advertência por escrito se não tiver outros pontos.' },
      { letter: 'D', text: 'A PPD será convertida em CNH definitiva na Categoria A.' },
      { letter: 'E', text: 'O condutor pagará multa dobrada e receberá a CNH definitiva normalmente.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'O cometimento de infração de natureza Gravíssima durante a PPD impede a concessão da CNH definitiva e cancela o processo (Art. 148, § 4º CTB / Res. 1.020 Art. 51). O cidadão é considerado inabilitado e deve reiniciar todo o processo de habilitação.',
    explanations: {
      A: 'INCORRETA. Não há renovação probatória sob supervisão.',
      B: 'CORRETA. Infração gravíssima cancela a PPD e exige reiniciar o processo do zero.',
      C: 'INCORRETA. Infração gravíssima não é passível de advertência por escrito.',
      D: 'INCORRETA. Não há mudança involuntária de categoria.',
      E: 'INCORRETA. O pagamento da multa não anula o impedimento administrativo da CNH.'
    }
  },
  {
    id: 'con-q39',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Infrações Leves na PPD',
    difficulty: 'Fácil',
    statement: 'Durante os 12 meses de vigência da Permissão para Dirigir (PPD), um condutor foi autuado por 3 (três) infrações de trânsito de natureza LEVE. De acordo com a regramento da Resolução CONTRAN nº 1.020/2025 e do CTB, ao final do período ele:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 51 & Art. 148 CTB',
    bancaTag: 'Instituto Avalia',
    options: [
      { letter: 'A', text: 'Receberá normalmente a CNH definitiva, pois o CTB não veda o cometimento de infrações de natureza leve.' },
      { letter: 'B', text: 'Terá a PPD cancelada imediatamente por ter somado mais de 2 infrações.' },
      { letter: 'C', text: 'Será obrigado a realizar curso de reciclagem para infratores leves.' },
      { letter: 'D', text: 'Ficará impedido de dirigir por 6 meses.' },
      { letter: 'E', text: 'Terá que refazer o exame de aptidão física e mental.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A restrição imposta pelo Art. 148, § 3º do CTB e Res. 1.020/2025 recai exclusivamente sobre infrações GRAVES, GRAVÍSSIMAS ou REINCIDÊNCIA EM MÉDIAS. Infrações de natureza LEVE, independentemente da quantidade, NÃO impedem a concessão da CNH definitiva.',
    explanations: {
      A: 'CORRETA. Infrações leves não são impeditivas para a CNH definitiva.',
      B: 'INCORRETA. O cancelamento não se aplica a infrações leves.',
      C: 'INCORRETA. Não há reciclagem por acúmulo de infrações leves na PPD sem atingir o limite geral de pontos.',
      D: 'INCORRETA. Não há impedimento.',
      E: 'INCORRETA. Não se exige reexame médico fora do vencimento regulamentar.'
    }
  },
  {
    id: 'con-q40',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Interrupção do Exame Prático por Falta Eliminatória',
    difficulty: 'Médio',
    statement: 'Nos termos do Art. 46 da Resolução CONTRAN nº 1.020/2025, durante a aplicação do exame de direção veicular, o exame poderá ser interrompido pela comissão examinadora quando:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 46',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'O candidato cometer 1 falta leve e 1 falta média.' },
      { letter: 'B', text: 'O candidato cometer qualquer falta eliminatória ou atingir a pontuação limite de reprovação.' },
      { letter: 'C', text: 'O tempo de prova ultrapassar 5 minutos no total.' },
      { letter: 'D', text: 'O veículo de instrução estancar o motor uma única vez.' },
      { letter: 'E', text: 'O candidato não estiver usando calçado com salto alto.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'O Art. 46 determina que o exame será interrompido pela comissão examinadora assim que constatada falta eliminatória ou atinjida a pontuação superior a 3 pontos de faltas, declarando a reprovação do candidato.',
    explanations: {
      A: 'INCORRETA. 1 leve (1 pt) + 1 média (2 pts) = 3 pts (candidato continua aprovado).',
      B: 'CORRETA. Res. 1.020/2025 Art. 46: Falta eliminatória ou estouro de pontos interrompe o exame.',
      C: 'INCORRETA. O tempo de prova segue os parâmetros regulamentares do percurso.',
      D: 'INCORRETA. Estancar o motor é falta leve ou média (conforme regramento), não eliminatória imediata.',
      E: 'INCORRETA. Usar calçado inadequado é infração/falta, mas a regra de salto alto não é motivo de interrupção padrão.'
    }
  },

  // --- BLOCO 4: MUDANÇA DE CATEGORIA, CURSOS ESPECIALIZADOS E REQUISITOS (Q41 a Q55) ---
  {
    id: 'con-q41',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Requisitos para Mudança de Categoria C',
    difficulty: 'Médio',
    statement: 'Para habilitar-se na Categoria C (veículos de carga com PBT superior a 3.500 kg), a Resolução CONTRAN nº 1.020/2025 e o Art. 145 do CTB exigem do condutor:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 53 & Art. 145 do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Estar habilitado há pelo menos 1 (um) ano na Categoria B e não ter cometido nenhuma infração gravíssima nos últimos 12 (doze) meses.' },
      { letter: 'B', text: 'Estar habilitado há pelo menos 2 anos na Categoria A e ter 25 anos completos.' },
      { letter: 'C', text: 'Estar habilitado na Categoria B há 6 meses, independentemente de histórico de infrações.' },
      { letter: 'D', text: 'Ter concluído o curso superior de engenharia de transportes.' },
      { letter: 'E', text: 'Ter 21 anos completos e 3 anos de habilitação na Categoria B.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'De acordo com o Art. 53 da Res. 1.020/2025 e Art. 145 do CTB, para mudança da Categoria B para a C, exige-se: 1) estar habilitado há no mínimo 1 ano na Categoria B; 2) não ter cometido nenhuma infração GRAVÍSSIMA nos últimos 12 meses; 3) aprovação em exame toxicológico.',
    explanations: {
      A: 'CORRETA. 1 ano de B + ausência de infração gravíssima nos últimos 12 meses.',
      B: 'INCORRETA. Categoria A não dá acesso direto à Categoria C.',
      C: 'INCORRETA. 6 meses em B é insuficiente e o histórico de infrações é relevante.',
      D: 'INCORRETA. Não se exige nível superior.',
      E: 'INCORRETA. Para Categoria C não se exige 21 anos completos (21 anos é exigido para D e E).'
    }
  },
  {
    id: 'con-q42',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Requisitos para Categoria D',
    difficulty: 'Médio',
    statement: 'Para obter a Categoria D (transporte de passageiros com mais de 8 lugares), o candidato vindo da Categoria B deve comprovar os seguintes requisitos (Resolução CONTRAN nº 1.020/2025 e Art. 145 CTB):',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 53 & Art. 145 CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Estar habilitado no mínimo há 2 (dois) anos na Categoria B, ter 21 (vinte e um) anos de idade completos e não ter cometido infração gravíssima nos últimos 12 meses.' },
      { letter: 'B', text: 'Estar habilitado há 1 ano na Categoria B e ter 18 anos completos.' },
      { letter: 'C', text: 'Possuir 5 anos de Categoria B e 30 anos de idade.' },
      { letter: 'D', text: 'Estar habilitado na Categoria A há 3 anos.' },
      { letter: 'E', text: 'Ter 21 anos e estar na PPD há 6 meses.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Regra de B para D: exige mínimo de 2 anos na Categoria B, idade de no mínimo 21 anos completos e não ter cometido infração gravíssima nos últimos 12 meses.',
    explanations: {
      A: 'CORRETA. B para D exige 2 anos de B, 21 anos de idade e ausência de infração gravíssima nos últimos 12 meses.',
      B: 'INCORRETA. Exige-se 21 anos de idade e 2 anos de B.',
      C: 'INCORRETA. 5 anos de B e 30 anos são exigências exageradas.',
      D: 'INCORRETA. Categoria A não pontua para obtenção de D.',
      E: 'INCORRETA. Condutor na PPD não pode mudar diretamente para D.'
    }
  },
  {
    id: 'con-q43',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Requisitos para Categoria E',
    difficulty: 'Médio',
    statement: 'Um condutor habilitado na Categoria C pretende obter a Categoria E (combinação de veículos com reboque/semi-reboque com PBT superior a 6.000 kg). Quais requisitos ele deve comprovar perante o Detran (Resolução CONTRAN nº 1.020/2025)?',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 53 & Art. 145 CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Estar habilitado há no mínimo 1 (um) ano na Categoria C, ter 21 (vinte e um) anos completos e não ter cometido infração gravíssima nos últimos 12 meses.' },
      { letter: 'B', text: 'Estar habilitado há 6 meses na Categoria C e ter 18 anos completos.' },
      { letter: 'C', text: 'Estar habilitado há 3 anos na Categoria B sem necessidade de ter passado pela C.' },
      { letter: 'D', text: 'Ter 18 anos completos e aprovação em exame teórico de aviação.' },
      { letter: 'E', text: 'Apenas apresentação de exame toxicológico negativo.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Para transitar de C para E, o condutor deve comprovar no mínimo 1 ano de Categoria C, ter 21 anos de idade completos e ausência de infrações gravíssimas nos últimos 12 meses.',
    explanations: {
      A: 'CORRETA. C para E exige 1 ano de C, 21 anos de idade e ausência de infração gravíssima nos últimos 12 meses.',
      B: 'INCORRETA. 6 meses de C é insuficiente e exige-se 21 anos.',
      C: 'INCORRETA. De B para E exige ter passado por C ou D primeiro.',
      D: 'INCORRETA. Não se exige aviação.',
      E: 'INCORRETA. Exige-se também tempo de habilitação e idade.'
    }
  },
  {
    id: 'con-q44',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Rebaixamento Voluntário de Categoria',
    difficulty: 'Fácil',
    statement: 'Um condutor habilitado na Categoria E decide, por conveniência pessoal e para isentar-se do exame toxicológico periódico, solicitar o rebaixamento de sua habilitação para a Categoria B. De acordo com o Art. 54 da Resolução CONTRAN nº 1.020/2025:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 54',
    bancaTag: 'Instituto Avalia',
    options: [
      { letter: 'A', text: 'O pedido de rebaixamento de categoria é um direito do condutor e pode ser requerido a qualquer tempo junto ao órgão executivo de trânsito.' },
      { letter: 'B', text: 'O rebaixamento é expressamente proibido pela legislação de trânsito brasileira.' },
      { letter: 'C', text: 'O rebaixamento exige autorização de junta médica do Ministério da Saúde.' },
      { letter: 'D', text: 'Ao solicitar o rebaixamento, a CNH é cancelada definitivamente e o condutor perde o direito de dirigir.' },
      { letter: 'E', text: 'O condutor deve pagar uma multa de rebaixamento no valor de 10 mensalidades do Detran.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Art. 54 permite expressamente que o condutor requeira a qualquer momento o rebaixamento de sua categoria de habilitação (ex: de E para B), desobrigando-o das exigências das categorias pesadas.',
    explanations: {
      A: 'CORRETA. Res. 1.020/2025 Art. 54: Rebaixamento a pedido é facultado ao condutor.',
      B: 'INCORRETA. É expressamente permitido.',
      C: 'INCORRETA. É ato administrativo a pedido do interessado.',
      D: 'INCORRETA. O condutor mantém a CNH na categoria B.',
      E: 'INCORRETA. Não há cobrança de multa por rebaixamento voluntário.'
    }
  },
  {
    id: 'con-q45',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Cursos Especializados (Renovação)',
    difficulty: 'Médio',
    statement: 'Os cursos especializados para condutores (Transporte Escolar, MOPP, Veículos de Emergência, Transporte Coletivo de Passageiros) disciplinados no Art. 67 da Resolução CONTRAN nº 1.020/2025 possuem validade de:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 67 e 70',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: '1 (um) ano, devendo ser refeitos anualmente.' },
      { letter: 'B', text: '2 (dois) anos.' },
      { letter: 'C', text: '5 (cinco) anos, devendo o condutor realizar curso de atualização periodicamente.' },
      { letter: 'D', text: '10 (dez) anos para condutores de qualquer idade.' },
      { letter: 'E', text: 'Validade vitalícia, sem necessidade de atualização.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'Os cursos especializados homologados pelo CONTRAN têm validade de 5 (cinco) anos, devendo o profissional realizar o curso de atualização a cada 5 anos para manter a homologação ativa no RENACH.',
    explanations: {
      A: 'INCORRETA. 1 ano é o prazo de validade da PPD.',
      B: 'INCORRETA. 2 anos não é a periodicidade dos cursos especializados.',
      C: 'CORRETA. Cursos especializados possuem validade de 5 anos.',
      D: 'INCORRETA. 10 anos é a validade do exame médico de CNH para <50 anos.',
      E: 'INCORRETA. Os cursos exigem atualização quinquenal.'
    }
  },
  {
    id: 'con-q46',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Curso de Reciclagem para Suspenso',
    difficulty: 'Fácil',
    statement: 'Quando um condutor tem seu direito de dirigir suspenso por acúmulo de pontos ou por infração auto-suspensiva (Resolução CONTRAN nº 1.020/2025, Art. 87), para reaver a CNH ele deverá:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 87 e 91',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Apenas aguardar o cumprimento do prazo de suspensão e solicitar a devolução do documento.' },
      { letter: 'B', text: 'Cumprir integralmente o prazo de suspensão e comprovar aprovação em Curso de Reciclagem para Condutores Infratores.' },
      { letter: 'C', text: 'Prestar 100 horas de trabalho voluntário na Polícia Rodoviária Federal.' },
      { letter: 'D', text: 'Refazer integralmente o processo de 1ª habilitação com aulas práticas de baliza.' },
      { letter: 'E', text: 'Realizar apenas exame de visão em clínica credenciada.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Conforme o Art. 87 e 91 da Res. 1.020/2025 e Art. 261, § 2º do CTB, a restituição da CNH suspensa fica condicionada ao cumprimento do prazo de suspensão E à aprovação em Curso de Reciclagem.',
    explanations: {
      A: 'INCORRETA. Apenas aguardar o prazo não devolve a CNH sem o curso de reciclagem aprovado.',
      B: 'CORRETA. Res. 1.020/2025 Art. 87 e 91: Cumprimento do prazo + Aprovação em Reciclagem.',
      C: 'INCORRETA. Trabalho voluntário não substitui o curso de reciclagem exigido por lei.',
      D: 'INCORRETA. Refazer o processo do zero é exigência no caso de CASSAÇÃO, e não de suspensão.',
      E: 'INCORRETA. Exame de visão isolado não resolve a penalidade pedagógica da suspensão.'
    }
  },
  {
    id: 'con-q47',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Aprovação no Curso de Reciclagem',
    difficulty: 'Fácil',
    statement: 'Para obter aprovação na prova teórica do Curso de Reciclagem para Condutores Infratores (Resolução CONTRAN nº 1.020/2025, Art. 90), o condutor deve alcançar aproveitamento mínimo de:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 90 & Art. 34',
    bancaTag: 'Instituto Avalia',
    options: [
      { letter: 'A', text: '50% (cinquenta por cento).' },
      { letter: 'B', text: '60% (sessenta por cento).' },
      { letter: 'C', text: '70% (setenta por cento).' },
      { letter: 'D', text: '80% (oitenta por cento).' },
      { letter: 'E', text: '100% (cem por cento).' }
    ],
    correctLetter: 'C',
    generalExplanation: 'Assim como na prova teórica da primeira habilitação, a aprovação no exame do curso de reciclagem exige o aproveitamento mínimo de 70% (setenta por cento) de acertos nas questões.',
    explanations: {
      A: 'INCORRETA. 50% é nota insuficiente.',
      B: 'INCORRETA. 60% não atinge a exigência legal.',
      C: 'CORRETA. Res. 1.020/2025 Art. 90: Exige-se 70% de aproveitamento.',
      D: 'INCORRETA. 80% é superior ao limite legal exigido.',
      E: 'INCORRETA. Não se exige gabarito 100% perfeito.'
    }
  },
  {
    id: 'con-q48',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Cassação de CNH e Reabilitação',
    difficulty: 'Médio',
    statement: 'O condutor que tem sua CNH CASADA por pilotar sob a influência de álcool reincidente em 12 meses poderá requerer sua REABILITAÇÃO (Resolução CONTRAN nº 1.020/2025, Art. 6º, VII & Art. 263 CTB) após decorridos:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 6º, VII & Art. 263, § 2º CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: '6 (seis) meses de cassação.' },
      { letter: 'B', text: '1 (um) ano de cassação.' },
      { letter: 'C', text: '2 (dois) anos de cassação, submetendo-se a todos os exames necessários à habilitação.' },
      { letter: 'D', text: '5 (cinco) anos de cassação.' },
      { letter: 'E', text: '10 (dez) anos de cassação.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'Decorridos 2 (dois) anos da cassação da CNH, o condutor poderá requerer sua reabilitação submetendo-se a todos os exames exigidos para habilitação (Art. 263, § 2º do CTB / Res. 1.020 Art. 6º, VII).',
    explanations: {
      A: 'INCORRETA. 6 meses é prazo de suspensão da LADV ou penalidades leves.',
      B: 'INCORRETA. 1 ano é o prazo da PPD.',
      C: 'CORRETA. Cassação exige o cumprimento do prazo de 2 anos (24 meses) para requerimento de reabilitação.',
      D: 'INCORRETA. 5 anos é prazo prescricional de débitos, não carência de cassação.',
      E: 'INCORRETA. 10 anos não é prazo de cassação.'
    }
  },
  {
    id: 'con-q49',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Impedimentos para Instrutor de Trânsito',
    difficulty: 'Médio',
    statement: 'Nos termos da Resolução CONTRAN nº 1.020/2025 (Art. 113), é vedado aos instrutores de trânsito durante o exercício de suas funções pedagógicas:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 113',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Ministrar aulas em veículos adaptados para candidatos com deficiência.' },
      { letter: 'B', text: 'Agressão física ou verbal a candidatos, ausentar-se da aula de instrução ou ministrar aulas sob efeito de álcool ou substância psicoativa.' },
      { letter: 'C', text: 'Utilizar mapas impressos para orientar o percurso.' },
      { letter: 'D', text: 'Orientações sobre direção defensiva e regras de circulação.' },
      { letter: 'E', text: 'Registrar a frequência biométrica do aluno no início da aula.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'O Art. 113 disciplina o código de conduta dos instrutores, proibindo condutas como faltas com a ética, agressão verbal/física, ausentar-se do veículo em instrução ou estar sob efeito de álcool/drogas.',
    explanations: {
      A: 'INCORRETA. Ministrar aula em veículo adaptado é permitido e necessário para PCD.',
      B: 'CORRETA. Res. 1.020/2025 Art. 113: Condutas sumariamente vedadas ao instrutor.',
      C: 'INCORRETA. Orientação pedagógica por mapas é válida.',
      D: 'INCORRETA. Orientar sobre regras é o dever do instrutor.',
      E: 'INCORRETA. O registro biométrico é obrigatório por lei.'
    }
  },
  {
    id: 'con-q50',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Impedimentos para Examinador de Trânsito',
    difficulty: 'Médio',
    statement: 'A Resolução CONTRAN nº 1.020/2025 (Art. 116) veda expressamente aos examinadores de trânsito que compõem as comissões de exame prático:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 116',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Avaliar candidatos que sejam seus parentes consanguíneos ou afins até o 3º grau, ou alunos dos quais tenham sido instrutores.' },
      { letter: 'B', text: 'Portar prancheta ou dispositivo eletrônico de anotação de faltas.' },
      { letter: 'C', text: 'Usar uniforme oficial fornecido pelo Detran.' },
      { letter: 'D', text: 'Exigir o documento de identidade antes de iniciar a prova.' },
      { letter: 'E', text: 'Informar o resultado da prova ao final da avaliação.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Art. 116 proíbe o conflito de interesses e o nepotismo na avaliação, impedindo que o examinador avalie parentes de até 3º grau ou alunos que ele próprio tenha treinado como instrutor.',
    explanations: {
      A: 'CORRETA. Res. 1.020/2025 Art. 116: Impedimento por parentesco até 3º grau ou relação instrutor-aluno.',
      B: 'INCORRETA. O uso de prancheta/tablet de avaliação é o dever do examinador.',
      C: 'INCORRETA. O uso de uniforme oficial é permitido/exigido.',
      D: 'INCORRETA. Checar documento com foto é obrigação do examinador.',
      E: 'INCORRETA. Comunicar o resultado ao candidato ao final é procedimento padrão.'
    }
  },

  // --- BLOCO 5: RENOVAÇÃO, PRAZOS MÉDICOS, RES 911, RES 960 E RES 940 (Q51 a Q70) ---
  {
    id: 'con-q51',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Validade do Exame Médico (<50 Anos)',
    difficulty: 'Fácil',
    statement: 'De acordo com o Art. 92 da Resolução CONTRAN nº 1.020/2025 e o Art. 147, § 2º do CTB, o prazo máximo de validade do exame de aptidão física e mental para um condutor com 35 anos de idade é de:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 92 & Art. 147, § 2º CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: '3 (três) anos.' },
      { letter: 'B', text: '5 (cinco) anos.' },
      { letter: 'C', text: '10 (dez) anos.' },
      { letter: 'D', text: '15 (quinze) anos.' },
      { letter: 'E', text: 'Indefinido até a aposentadoria.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'Para condutores com idade inferior a 50 anos (caso do condutor de 35 anos), o prazo máximo de validade do exame médico de renovação da CNH é de 10 (dez) anos.',
    explanations: {
      A: 'INCORRETA. 3 anos aplica-se aos condutores com 70 anos de idade ou mais.',
      B: 'INCORRETA. 5 anos aplica-se aos condutores com idade entre 50 e 69 anos.',
      C: 'CORRETA. Res. 1.020/2025 Art. 92: 10 anos de validade para condutores <50 anos.',
      D: 'INCORRETA. Não existe prazo de 15 anos.',
      E: 'INCORRETA. O exame médico obrigatoriamente expira em prazo determinado por lei.'
    }
  },
  {
    id: 'con-q52',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Validade do Exame Médico (50 a 69 Anos)',
    difficulty: 'Fácil',
    statement: 'Um condutor de 58 anos de idade comparece ao Detran para renovar sua CNH. Nos termos do Art. 92 da Resolução CONTRAN nº 1.020/2025 e do CTB, o prazo de validade de seu novo exame médico será de até:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 92 & Art. 147, § 2º CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: '2 (dois) anos.' },
      { letter: 'B', text: '3 (três) anos.' },
      { letter: 'C', text: '5 (cinco) anos.' },
      { letter: 'D', text: '10 (dez) anos.' },
      { letter: 'E', text: '1 (um) ano.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'Para a faixa etária compreendida entre 50 e 69 anos de idade (caso do condutor de 58 anos), o prazo máximo de validade do exame de aptidão física e mental é de 5 (cinco) anos.',
    explanations: {
      A: 'INCORRETA. 2 anos não é patamar etário da regra geral.',
      B: 'INCORRETA. 3 anos aplica-se a condutores com 70 anos de idade ou mais.',
      C: 'CORRETA. Faixa de 50 a 69 anos = validade máxima de 5 anos.',
      D: 'INCORRETA. 10 anos aplica-se aos condutores com menos de 50 anos.',
      E: 'INCORRETA. 1 ano é validade da PPD.'
    }
  },
  {
    id: 'con-q53',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Validade do Exame Médico (70+ Anos)',
    difficulty: 'Fácil',
    statement: 'Um condutor com 72 anos de idade renova sua CNH. Conforme o regramento do Art. 92 da Resolução CONTRAN nº 1.020/2025, qual é o prazo máximo de validade de seu exame de aptidão física e mental?',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 92 & Art. 147, § 2º CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: '1 (um) ano.' },
      { letter: 'B', text: '3 (três) anos.' },
      { letter: 'C', text: '5 (cinco) anos.' },
      { letter: 'D', text: '10 (dez) anos.' },
      { letter: 'E', text: '6 (seis) meses.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Para condutores com idade igual ou superior a 70 anos, o prazo máximo de validade do exame de aptidão física e mental para renovação da CNH é de 3 (três) anos.',
    explanations: {
      A: 'INCORRETA. 1 ano é validade de PPD.',
      B: 'CORRETA. Faixa de 70 anos ou mais = validade máxima de 3 anos.',
      C: 'INCORRETA. 5 anos aplica-se à faixa de 50 a 69 anos.',
      D: 'INCORRETA. 10 anos aplica-se a menores de 50 anos.',
      E: 'INCORRETA. 6 meses não é padrão regulamentar etário.'
    }
  },
  {
    id: 'con-q54',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 911/2022 - Exame Toxicológico Periódico',
    difficulty: 'Médio',
    statement: 'Nos termos da Resolução CONTRAN nº 911/2022 e do Art. 148-A do CTB, os condutores das categorias C, D e E com idade inferior a 70 anos deverão realizar exame toxicológico intermediário com qual periodicidade regular?',
    lawReference: 'Resolução CONTRAN 911/2022 & Art. 148-A, § 2º CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'A cada 1 (um) ano.' },
      { letter: 'B', text: 'A cada 2 (dois) anos e 6 (seis) meses.' },
      { letter: 'C', text: 'A cada 3 (três) anos.' },
      { letter: 'D', text: 'A cada 5 (cinco) anos.' },
      { letter: 'E', text: 'Apenas no momento da renovação decenal da CNH.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Conforme a Res. CONTRAN 911/2022 e o Art. 148-A, § 2º do CTB, os condutores C, D e E com menos de 70 anos realizarão exame toxicológico periódico a cada 2 ANOS E 6 MESES (30 meses), a contar da obtenção ou renovação.',
    explanations: {
      A: 'INCORRETA. Não é exame de periodicidade anual.',
      B: 'CORRETA. Res. 911/2022 e Art. 148-A, § 2º CTB: Periodicidade de 2 anos e 6 meses.',
      C: 'INCORRETA. 3 anos é o prazo médico para condutores maiores de 70 anos.',
      D: 'INCORRETA. 5 anos é o prazo médico para faixa 50-69 anos.',
      E: 'INCORRETA. O exame intermediário independe da validade total da CNH.'
    }
  },
  {
    id: 'con-q55',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 911/2022 - Penalidade por Dirigir com Toxicológico Vencido',
    difficulty: 'Difícil',
    statement: 'Um condutor da Categoria D é abordado fiscalizado dirigindo caminhão de carga após 45 dias do vencimento do prazo do exame toxicológico periódico (Resolução CONTRAN 911/2022 e Art. 165-B do CTB). De acordo com a legislação, ele cometeu infração de natureza:',
    lawReference: 'Resolução CONTRAN 911/2022 & Art. 165-B do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Leve, com penalidade de advertência por escrito.' },
      { letter: 'B', text: 'Média, com retenção do veículo por 2 horas.' },
      { letter: 'C', text: 'Grave, com acúmulo de 5 pontos na CNH.' },
      { letter: 'D', text: 'Gravíssima, com penalidade de multa multiplicada por 5 (cinco) vezes.' },
      { letter: 'E', text: 'Administrativa sem pontuação na carteira.' }
    ],
    correctLetter: 'D',
    generalExplanation: 'Dirigir veículo para o qual se exige C, D ou E sem realizar o exame toxicológico após 30 dias do vencimento é infração GRAVÍSSIMA, com penalidade de MULTA MULTIPLICADA POR 5 (Art. 165-B do CTB).',
    explanations: {
      A: 'INCORRETA. É infração gravíssima gravíssima de trânsito.',
      B: 'INCORRETA. Não é infração média.',
      C: 'INCORRETA. Não é apenas gravidade grave.',
      D: 'CORRETA. Art. 165-B CTB & Res. 911/2022: Infração Gravíssima com valor de multa x5.',
      E: 'INCORRETA. Incide pontuação e penalidade financeira multiplicada por 5.'
    }
  },
  {
    id: 'con-q56',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 960/2022 - Transmitância Luminosa no Para-brisa',
    difficulty: 'Médio',
    statement: 'A Resolução CONTRAN nº 960/2022 unificou a exigência mínima de transmitância luminosa para o para-brisa e demais vidros indispensáveis à dirigibilidade (vidros laterais dianteiros) do veículo em no mínimo:',
    lawReference: 'Resolução CONTRAN 960/2022, Art. 4º',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: '50% (cinquenta por cento).' },
      { letter: 'B', text: '70% (setenta por cento).' },
      { letter: 'C', text: '28% (vinte e oito por cento).' },
      { letter: 'D', text: '75% (setenta e cinco por cento).' },
      { letter: 'E', text: '100% (cem por cento).' }
    ],
    correctLetter: 'B',
    generalExplanation: 'A Resolução CONTRAN nº 960/2022 fixou em 70% (setenta por cento) o índice mínimo de transmitância luminosa para o para-brisa e vidros das áreas envidraçadas indispensáveis à dirigibilidade.',
    explanations: {
      A: 'INCORRETA. 50% não é o limite mínimo legal das áreas de visão frontal.',
      B: 'CORRETA. Res. CONTRAN 960/2022: Mínimo de 70% de transmitância luminosa.',
      C: 'INCORRETA. 28% era o limite antigo dos vidros traseiros que não interferem na visão dianteira.',
      D: 'INCORRETA. 75% era norma revogada.',
      E: 'INCORRETA. 100% representaria vidro sem película alguma.'
    }
  },
  {
    id: 'con-q57',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 960/2022 - Proibição de Películas Refletivas e Bolhas',
    difficulty: 'Fácil',
    statement: 'Sobre a aplicação de películas de proteção solar (insulfilm) e conservação dos vidros dos veículos (Resolução CONTRAN nº 960/2022), é correto afirmar que é ESTRITAMENTE PROIBIDO:',
    lawReference: 'Resolução CONTRAN 960/2022, Art. 4º, § 2º',
    bancaTag: 'Instituto Avalia',
    options: [
      { letter: 'A', text: 'O uso de qualquer película de proteção solar em qualquer vidro do veículo.' },
      { letter: 'B', text: 'A aplicação de películas refletivas ou espelhadas e a presença de bolhas na área de visão do condutor no para-brisa e vidros laterais dianteiros.' },
      { letter: 'C', text: 'O uso de vidros laminados na parte frontal dos automóveis.' },
      { letter: 'D', text: 'A higienização dos vidros com produtos à base de álcool.' },
      { letter: 'E', text: 'A instalação de desembaçador térmico no vidro traseiro.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'A Res. CONTRAN 960/2022 proíbe expressamente: 1) a aplicação de películas refletivas ou espelhadas em qualquer vidro; 2) a presença de bolhas na película na área crítica de visão do condutor.',
    explanations: {
      A: 'INCORRETA. Películas não refletivas são permitidas desde que respeitada a transmitância mínima de 70%.',
      B: 'CORRETA. Res. 960/2022: Proibição de película refletiva/espelhada e bolhas na área de visão.',
      C: 'INCORRETA. Vidros laminados são obrigatórios no para-brisa.',
      D: 'INCORRETA. Não há vedação quanto a produtos de limpeza.',
      E: 'INCORRETA. Desembaçador térmico é equipamento de segurança permitido.'
    }
  },
  {
    id: 'con-q58',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 940/2022 - Capacete de Motociclista e Certificação',
    difficulty: 'Fácil',
    statement: 'A Resolução CONTRAN nº 940/2022 disciplina o uso de capacete para condutores e passageiros de motocicletas e ciclomotores. O capacete de segurança deve conter obrigatoriamente:',
    lawReference: 'Resolução CONTRAN 940/2022, Art. 2º',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Selo ou gravação de certificação do INMETRO e dispositivos retrorrefletivos nas laterais e parte traseira.' },
      { letter: 'B', text: 'Viseira escura fumê de uso obrigatório no período noturno.' },
      { letter: 'C', text: 'Gravação do número do CPF do condutor em letras amarelas.' },
      { letter: 'D', text: 'Farol de LED embutido na calota superior.' },
      { letter: 'E', text: 'Dispositivo de travamento por senha biométrica.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A Res. CONTRAN 940/2022 exige que o capacete possua certificação do INMETRO (selo ou etiqueta indelével) e faixas retrorrefletivas de segurança nas laterais e traseira.',
    explanations: {
      A: 'CORRETA. Res. 940/2022: Certificação INMETRO e faixas retrorrefletivas obrigatórias.',
      B: 'INCORRETA. No período noturno é PROIBIDA a viseira fumê/escura.',
      C: 'INCORRETA. Não se exige CPF gravado no capacete.',
      D: 'INCORRETA. Não se exige farol embutido no capacete.',
      E: 'INCORRETA. Não há exigência de senha biométrica na cinta jugular.'
    }
  },
  {
    id: 'con-q59',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 940/2022 - Viseira e Óculos de Proteção',
    difficulty: 'Médio',
    statement: 'Em relação ao uso de viseira ou óculos de proteção na condução de motocicletas (Resolução CONTRAN nº 940/2022), assinale a afirmativa CORRETA:',
    lawReference: 'Resolução CONTRAN 940/2022, Art. 3º e 4º',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'O uso de óculos de sol comuns ou de grau substitui legalmente os óculos de proteção de motociclista.' },
      { letter: 'B', text: 'É permitida a utilização de viseira com película fumê ou escura no período noturno.' },
      { letter: 'C', text: 'A viseira ou óculos de proteção deve estar totalmente posicionada à frente dos olhos durante a circulação do veículo.' },
      { letter: 'D', text: 'Com o veículo parado no semáforo, a viseira não pode ser levantada sob hipótese alguma.' },
      { letter: 'E', text: 'Capacetes sem viseira dispensam o uso de óculos de proteção se o condutor usar barba.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'Conforme a Res. CONTRAN 940/2022, quando o veículo estiver em circulação, a viseira ou os óculos de proteção devem estar posicionados de forma a proteger integralmente os olhos. Com o veículo imobilizado na via (ex: no semáforo), a viseira pode ser levantada, devendo ser fechada ao reiniciar o deslocamento.',
    explanations: {
      A: 'INCORRETA. Óculos de sol/grau comuns não substituem os óculos de proteção específicos.',
      B: 'INCORRETA. No período noturno é vedado o uso de viseira escura ou com películas.',
      C: 'CORRETA. Res. 940/2022: Viseira abaixada em circulação.',
      D: 'INCORRETA. Com o veículo parado, a viseira pode ser levantada para ventilação.',
      E: 'INCORRETA. Barba não substitui equipamento de proteção visual.'
    }
  },
  {
    id: 'con-q60',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 915/2022 - Transporte de Crianças (Cadeirinhas)',
    difficulty: 'Médio',
    statement: 'A Resolução CONTRAN nº 915/2022 e o Art. 64 do CTB tratam do transporte de crianças em veículos automotores. As crianças com idade inferior a 10 anos que não tenham atingido 1,45m de altura devem obrigatoriamente:',
    lawReference: 'Resolução CONTRAN 915/2022 & Art. 64 do CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Ser transportadas nos bancos traseiros utilizando dispositivo de retenção adequado à sua idade, peso e altura.' },
      { letter: 'B', text: 'Ser transportadas no banco dianteiro desde que no colo de um adulto com cinto.' },
      { letter: 'C', text: 'Ser transportadas no porta-malas em caixas de transporte ventiladas.' },
      { letter: 'D', text: 'Usar apenas o cinto de segurança abdominal de dois pontos do banco dianteiro.' },
      { letter: 'E', text: 'Ser transportadas apenas em ônibus de transporte coletivo municipal.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'As crianças menores de 10 anos que não tenham atingido 1,45m de altura devem ser transportadas obrigatoriamente no banco traseiro utilizando o dispositivo de retenção adequado (bebê conforto, cadeirinha ou assento de elevação), nos termos da Res. 915/2022 e do CTB.',
    explanations: {
      A: 'CORRETA. Banco traseiro com dispositivo de retenção compatível com a idade/peso/altura.',
      B: 'INCORRETA. Transportar criança no colo no banco dianteiro é infração gravíssima.',
      C: 'INCORRETA. Prática ilegal e extremamente perigosa.',
      D: 'INCORRETA. Cinto abdominal de 2 pontos não atende crianças menores de 1,45m.',
      E: 'INCORRETA. A regra aplica-se aos veículos de passeio particulares.'
    }
  },
  {
    id: 'con-q61',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 915/2022 - Exceção de Criança no Banco Dianteiro',
    difficulty: 'Difícil',
    statement: 'Em qual das hipóteses a seguir a legislação de trânsito (Resolução CONTRAN nº 915/2022 e CTB) AUTORIZA o transporte de criança menor de 10 anos no banco dianteiro do veículo passeio?',
    lawReference: 'Resolução CONTRAN 915/2022 & Art. 64 CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Quando a quantidade de crianças dessa faixa etária exceder a lotação do banco traseiro.' },
      { letter: 'B', text: 'Sempre que o motorista estiver sozinho no veículo com a criança.' },
      { letter: 'C', text: 'Quando a viagem ocorrer durante o período noturno em rodovias.' },
      { letter: 'D', text: 'Apenas quando o veículo tiver câmbio manual.' },
      { letter: 'E', text: 'Em nenhuma hipótese a lei permite criança no banco dianteiro.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Constitui exceção legal permitida: quando a quantidade de crianças menores de 10 anos exceder a capacidade de lotação do banco traseiro, a criança de maior estatura dessa faixa etária poderá ser transportada no banco dianteiro, utilizando o dispositivo de retenção adequado (com air-bag desativado se for bebê conforto).',
    explanations: {
      A: 'CORRETA. Excesso de lotação no banco traseiro autoriza a criança de maior estatura no banco dianteiro.',
      B: 'INCORRETA. Estar sozinho não é exceção permitida.',
      C: 'INCORRETA. O horário da viagem não altera a regra de segurança.',
      D: 'INCORRETA. Tipo de câmbio não interfere.',
      E: 'INCORRETA. Existem exceções expressas na norma (ex: veículo sem banco traseiro como caminhonetes de cabine simples ou excesso de lotação traseira).'
    }
  },
  {
    id: 'con-q62',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Credenciamento de Autoescolas (CFCs)',
    difficulty: 'Médio',
    statement: 'As autoescolas (Centros de Formação de Condutores - CFCs) integram o conjunto de entidades credenciadas para a formação de condutores. De acordo com o Art. 119 da Resolução CONTRAN nº 1.020/2025, o credenciamento de uma autoescola é ato de competência dos:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 119 e 120',
    bancaTag: 'Instituto Avalia',
    options: [
      { letter: 'A', text: 'Órgãos ou entidades executivos de trânsito dos Estados e do Distrito Federal (DETRANs).' },
      { letter: 'B', text: 'Ministério da Educação (MEC).' },
      { letter: 'C', text: 'Conselhos Municipais de Educação.' },
      { letter: 'D', text: 'Sindicatos estaduais de motoristas autônomos.' },
      { letter: 'E', text: 'Tribunais de Justiça dos Estados.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O credenciamento, regulação e fiscalização das autoescolas e seus instrutores incumbem aos órgãos executivos estaduais de trânsito (DETRANs), sob diretrizes gerais do CONTRAN e da SENATRAN.',
    explanations: {
      A: 'CORRETA. Res. 1.020/2025 Art. 119 e 120: Competência dos DETRANs estaduais.',
      B: 'INCORRETA. O MEC regula educação formal escolar, não o credenciamento de trânsito.',
      C: 'INCORRETA. Conselhos de educação não credenciam autoescolas.',
      D: 'INCORRETA. Sindicatos não possuem poder público credenciador.',
      E: 'INCORRETA. O Poder Judiciário não administra credenciamento de CFCs.'
    }
  },
  {
    id: 'con-q63',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Formação de Profissionais das Forças Armadas',
    difficulty: 'Médio',
    statement: 'A Resolução CONTRAN nº 1.020/2025, no Art. 76 a 79, disciplina a formação de condutores promovida no âmbito das Forças Armadas, Polícias e Bombeiros Militares. É correto afirmar que essas corporações:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 76 a 79',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Podem realizar o processo de formação de seus próprios integrantes para a condução de veículos oficiais, mediante autorização do órgão máximo executivo de trânsito da União.' },
      { letter: 'B', text: 'São obrigadas a contratar autoescolas privadas para a instrução de seus militares.' },
      { letter: 'C', text: 'Estão isentas de registrar seus alunos no sistema RENACH.' },
      { letter: 'D', text: 'Emitem CNHs militares que não possuem validade em vias civis.' },
      { letter: 'E', text: 'Não necessitam submeter seus instruendos a exames de aptidão médica.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'As Forças Armadas e Auxiliares podem formar seus próprios condutores de veículos militares/oficiais através de centros de instrução próprios autorizados pela Senatran, com emissão de CNH válida registrada no RENACH.',
    explanations: {
      A: 'CORRETA. Res. 1.020/2025 Art. 76 a 79: Formação própria autorizada pela Senatran.',
      B: 'INCORRETA. As corporações possuem autonomia para instrução própria.',
      C: 'INCORRETA. O registro no RENACH é obrigatório para emissão do documento nacional.',
      D: 'INCORRETA. A CNH expedida possui validade nacional plena.',
      E: 'INCORRETA. Exames de aptidão física e mental são obrigatórios.'
    }
  },
  {
    id: 'con-q64',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Penalidades Administrativas aos CFCs',
    difficulty: 'Médio',
    statement: 'Uma autoescola credenciada descumpriu as regras de transmissão das aulas práticas via biometria, incorrendo em irregularidade administrativa grave. Conforme o Art. 133 da Resolução CONTRAN nº 1.020/2025, ela estará sujeita às seguintes penalidades impostas pelo Detran:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 133',
    bancaTag: 'Instituto Avalia',
    options: [
      { letter: 'A', text: 'Advertência, suspensão das atividades do credenciamento ou cassação do credenciamento, apuradas em processo administrativo.' },
      { letter: 'B', text: 'Prisão em flagrante dos diretores da autoescola.' },
      { letter: 'C', text: 'Confisco imediato dos veículos de passeio sem direito a defesa.' },
      { letter: 'D', text: 'Cancelamento das CNHs de todos os alunos que já se formaram na autoescola há mais de 10 anos.' },
      { letter: 'E', text: 'Obrigação de fornecer gasolina gratuita ao Detran.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Art. 133 e 134 da Res. 1.020/2025 preveem o rol de sanções administrativas cabíveis às entidades credenciadas: advertência, suspensão das atividades e cassação do credenciamento, mediante devido processo administrativo com contraditório e ampla defesa.',
    explanations: {
      A: 'CORRETA. Res. 1.020/2025 Art. 133: Advertência, suspensão ou cassação do credenciamento.',
      B: 'INCORRETA. Penalidades penais de prisão são privativas do Poder Judiciário em processos criminais.',
      C: 'INCORRETA. Confisco direto de bens sem processo é vedado pela Constituição.',
      D: 'INCORRETA. Alunos formados de boa-fé não têm suas CNHs antigas anuladas por infração posterior da escola.',
      E: 'INCORRETA. Não existe sanção de fornecimento de combustível.'
    }
  },
  {
    id: 'con-q65',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Cursos para Condução de Ambulâncias',
    difficulty: 'Médio',
    statement: 'De acordo com o Art. 75 da Resolução CONTRAN nº 1.020/2025, o condutor de veículos de emergência (ambulâncias) deve comprovar a conclusão de curso especializado específico. É um pré-requisito para matricular-se nesse curso:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 75 & Art. 145 CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Estar habilitado no mínimo na Categoria B, ter 21 anos completos e não estar cumprindo pena de suspensão da CNH.' },
      { letter: 'B', text: 'Estar obrigatoriamente na Categoria E e ter concluído curso de medicina.' },
      { letter: 'C', text: 'Possuir CNH na Categoria A há 5 anos.' },
      { letter: 'D', text: 'Ser maior de 18 anos e estar no período da PPD.' },
      { letter: 'E', text: 'Apresentar diploma de bacharel em enfermagem.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Para cursos especializados de veículos de emergência (como ambulâncias), exige-se ter 21 anos de idade completos, estar habilitado na categoria compatível (mínimo B) e não estar com a CNH suspensa ou cassada.',
    explanations: {
      A: 'CORRETA. 21 anos completos, CNH válida (mínimo B) e ausência de suspensão do direito de dirigir.',
      B: 'INCORRETA. Não se exige curso de medicina nem Categoria E obrigatória para condutor de ambulância de passeio/van (pode ser B, C ou D).',
      C: 'INCORRETA. Categoria A é para motos, não atende condução de ambulâncias de 4 rodas.',
      D: 'INCORRETA. Exige-se 21 anos e CNH definitiva.',
      E: 'INCORRETA. Não se exige graduação em enfermagem para ser condutor socorrista de trânsito.'
    }
  },
  {
    id: 'con-q66',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Cursos para Transporte Escolar',
    difficulty: 'Médio',
    statement: 'Para conduzir veículos de transporte escolar (vans e ônibus escolares), além de aprovação em curso especializado (Resolução CONTRAN nº 1.020/2025 e Art. 138 do CTB), exige-se do condutor ter idade mínima de 21 anos e estar habilitado na Categoria:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 67 & Art. 138 CTB',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Categoria B.' },
      { letter: 'B', text: 'Categoria C.' },
      { letter: 'C', text: 'Categoria D.' },
      { letter: 'D', text: 'Categoria A.' },
      { letter: 'E', text: 'ACC.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'O Art. 138 do CTB e a Resolução CONTRAN nº 1.020/2025 exigem expressamente a Categoria D para condutores de transporte escolar, além de idade superior a 21 anos e ausência de infração gravíssima nos últimos 12 meses.',
    explanations: {
      A: 'INCORRETA. Categoria B não habilita transporte escolar.',
      B: 'INCORRETA. Categoria C é para transporte de carga, não de passageiros escolares.',
      C: 'CORRETA. Transporte escolar exige Categoria D.',
      D: 'INCORRETA. Categoria A é para veículos de duas rodas.',
      E: 'INCORRETA. ACC é para ciclomotores.'
    }
  },
  {
    id: 'con-q67',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Gratuidade no Processo de Habilitação',
    difficulty: 'Fácil',
    statement: 'Em relação à cobrança de taxas públicas pelos serviços de habilitação de condutores, a Resolução CONTRAN nº 1.020/2025 estabelece em seu Art. 26 que:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 26',
    bancaTag: 'Instituto Avalia',
    options: [
      { letter: 'A', text: 'As taxas devidas pelos serviços de habilitação são regulamentadas e arrecadadas pelos órgãos executivos estaduais (Detrans) conforme legislação tributária estadual específica.' },
      { letter: 'B', text: 'Todos os exames de habilitação são 100% gratuitos por lei federal em qualquer circunstância.' },
      { letter: 'C', text: 'A taxa é fixada em dólares americanos pelo Banco Central.' },
      { letter: 'D', text: 'O candidato deve pagar uma mensalidade perpétua para manter a CNH ativa.' },
      { letter: 'E', text: 'As taxas são arrecadadas diretamente pelas bancas examinadoras privadas.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Conforme o Art. 26, as taxas estaduais de trânsito relativas aos exames e emissão de documentos são disciplinadas pela legislação tributária de cada Unidade da Federação e arrecadadas pelos Detrans.',
    explanations: {
      A: 'CORRETA. Res. 1.020/2025 Art. 26: Taxas reguladas por lei estadual específica de cada Estado.',
      B: 'INCORRETA. Não há gratuidade geral universal na lei federal de trânsito.',
      C: 'INCORRETA. Cobraria em moeda nacional (Reais).',
      D: 'INCORRETA. Não existe mensalidade de CNH.',
      E: 'INCORRETA. As taxas públicas de trânsito são receitas tributárias estaduais.'
    }
  },
  {
    id: 'con-q68',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Validade da LADV',
    difficulty: 'Médio',
    statement: 'A Licença de Aprendizagem de Direção Veicular (LADV) expedida ao candidato (Resolução CONTRAN nº 1.020/2025, Art. 35) tem sua validade vinculada a qual evento no sistema?',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 35',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Permanece válida enquanto durar o processo de formação do candidato para a obtenção da habilitação correspondente.' },
      { letter: 'B', text: 'Expira impreterivelmente em 30 dias contados de sua emissão.' },
      { letter: 'C', text: 'Possui validade vitalícia para qualquer veículo.' },
      { letter: 'D', text: 'Expira assim que o aluno completa 10 horas de aulas práticas.' },
      { letter: 'E', text: 'Vale apenas para o município de residência do instrutor.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A LADV permanece válida e ativa durante todo o trâmite do processo de formação de condutores no RENACH, até a conclusão com aprovação no exame prático ou eventuais sanções de suspensão.',
    explanations: {
      A: 'CORRETA. Res. 1.020/2025 Art. 35: Validade atrelada à duração do processo no RENACH.',
      B: 'INCORRETA. Não expira em apenas 30 dias.',
      C: 'INCORRETA. Não é vitalícia; expira na conclusão do processo ou expedição da PPD.',
      D: 'INCORRETA. Permanece válida até a realização do exame prático.',
      E: 'INCORRETA. A LADV autoriza o aprendizado em vias terrestres conforme jurisdição do órgão de trânsito.'
    }
  },
  {
    id: 'con-q69',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Revogação de Normas Anteriores',
    difficulty: 'Fácil',
    statement: 'A Resolução CONTRAN nº 1.020/2025 (Art. 139 e 140) promoveu a consolidação das normas de habilitação de condutores no Brasil. Qual foi o principal objetivo dessa consolidação legislativa?',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 1º, 139 e 140',
    bancaTag: 'Instituto Avalia',
    options: [
      { letter: 'A', text: 'Unificar a regulamentação sobre formação, aprendizagem e exames, revogando resoluções esparsas para desburocratizar o processo e aumentar a segurança viária.' },
      { letter: 'B', text: 'Tornar os exames de direção veicular facultativos no Brasil.' },
      { letter: 'C', text: 'Proibir o funcionamento de autoescolas em todo o território nacional.' },
      { letter: 'D', text: 'Transferir a fiscalização de CNH para o Exército Brasileiro.' },
      { letter: 'E', text: 'Extinguir as categorias de habilitação C, D e E.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A Resolução CONTRAN nº 1.020/2025 unificou e consolidou dezenas de normas esparsas (como a Res. 789/2020 e atualizações), tornando o processo de habilitação mais claro, moderno e integrado ao sistema digital.',
    explanations: {
      A: 'CORRETA. Res. 1.020/2025: Consolidação normativa para desburocratizar e unificar regras de habilitação.',
      B: 'INCORRETA. Os exames teórico e prático permanecem estritamente obrigatórios.',
      C: 'INCORRETA. As autoescolas continuam credenciadas e integradas ao SNT.',
      D: 'INCORRETA. A fiscalização de trânsito é do SNT (Detrans, PRF, PMs).',
      E: 'INCORRETA. As categorias de CNH continuam mantidas nos termos do CTB.'
    }
  },
  {
    id: 'con-q70',
    subjectId: 'contran_estadual',
    topic: 'Resolução CONTRAN 1.020/2025 - Entrada em Vigor e Vigência',
    difficulty: 'Fácil',
    statement: 'Nos termos do Art. 142 da Resolução CONTRAN nº 1.020/2025, a nova norma regulamentadora sobre a formação e habilitação de condutores entrou em vigor:',
    lawReference: 'Resolução CONTRAN nº 1.020/2025, Art. 142',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Na data de sua publicação oficial no Diário Oficial da União.' },
      { letter: 'B', text: 'Após o decurso da vacatio legis de 180 dias.' },
      { letter: 'C', text: 'Em 1º de janeiro de 2030.' },
      { letter: 'D', text: 'Apenas após homologação por plebiscito popular.' },
      { letter: 'E', text: 'Regressivamente retroagindo a 1997.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Art. 142 dispõe formalmente: "Esta Resolução entra em vigor na data de sua publicação" no Diário Oficial da União.',
    explanations: {
      A: 'CORRETA. Res. 1.020/2025 Art. 142: Vigência imediata na data de sua publicação.',
      B: 'INCORRETA. Não houve estipulação de vacatio legis de 180 dias.',
      C: 'INCORRETA. A entrada em vigor não foi postergada para 2030.',
      D: 'INCORRETA. Não depende de plebiscito.',
      E: 'INCORRETA. Normas administrativas entram em vigor no presente/futuro.'
    }
  }
];
