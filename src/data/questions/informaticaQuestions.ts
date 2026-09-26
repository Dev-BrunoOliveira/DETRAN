import { Question } from '../../types';

export const informaticaQuestions: Question[] = [
  {
    id: 'inf-q01',
    subjectId: 'informatica',
    topic: 'MS Excel - Função SOMASE',
    difficulty: 'Médio',
    statement: '(Prova Real DETRAN-SP / FCC Q13) Em uma planilha do Microsoft Excel em português, a coluna D contém a "Gravidade" da infração ("Gravíssima", "Grave", "Média") e a coluna C contém o "Valor em Reais". Para somar no intervalo C2:C5 apenas os valores das infrações rotuladas como "Gravíssima" na coluna D2:D5, a fórmula correta é:',
    lawReference: 'Funções do MS Excel',
    bancaTag: 'Prova Oficial DETRAN-SP - FCC Q13',
    options: [
      { letter: 'A', text: '=SE(D2:D5;"=Gravíssima";SOMA(C2;C5))' },
      { letter: 'B', text: '=SOMASE(D2:D5;"Gravíssima";C2:C5)' },
      { letter: 'C', text: '=SOMA(D2:D5;"Gravíssima";C2:C5)' },
      { letter: 'D', text: '=SE((D2:D5)="Gravíssima";SOMA(C2;C5))' },
      { letter: 'E', text: '=SOMASE(D2;D5:"Gravíssima":C2;C5)' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Sintaxe padrão da função SOMASE no MS Excel:\n`=SOMASE(intervalo_critério; critério; [intervalo_soma])`\nNo caso citado: `=SOMASE(D2:D5;"Gravíssima";C2:C5)`.',
    explanations: {
      A: 'INCORRETA. Sintaxe gramaticalmente inválida no Excel.',
      B: 'CORRETA. Sintaxe oficial: =SOMASE(intervalo_critério; critério; intervalo_soma).',
      C: 'INCORRETA. A função SOMA simples não aceita critérios de filtro de texto.',
      D: 'INCORRETA. A função SE não soma intervalos matriciais diretamente dessa forma.',
      E: 'INCORRETA. Erro de separador de argumentos.'
    }
  },
  {
    id: 'inf-q02',
    subjectId: 'informatica',
    topic: 'Redes de Computadores - Equipamentos (Switch vs Hub)',
    difficulty: 'Médio',
    statement: '(Prova Real DETRAN-SP / FCC Q14) Um Agente de Trânsito precisa conectar vários computadores em uma Local Area Network (LAN), de forma que os dados vindos do computador de origem sejam repassados APENAS ao computador de destino específico, e não a todos os computadores da rede. O equipamento de rede que realiza essa função comutadora inteligente é o:',
    lawReference: 'Equipamentos de Conectividade de Redes',
    bancaTag: 'Prova Oficial DETRAN-SP - FCC Q14',
    options: [
      { letter: 'A', text: 'Backbone.' },
      { letter: 'B', text: 'Modem.' },
      { letter: 'C', text: 'Firewall.' },
      { letter: 'D', text: 'Hub.' },
      { letter: 'E', text: 'Switch.' }
    ],
    correctLetter: 'E',
    generalExplanation: 'O SWITCH é o equipamento da camada de enlace que direciona pacotes de dados exclusivamente à porta do destinatário (comutação unicast). Diferencia-se do HUB, que transmite os dados por difusão (broadcast) para todas as portas da rede indiscriminadamente.',
    explanations: {
      A: 'INCORRETA. Backbone é a espinha dorsal de tráfego de dados de alta velocidade.',
      B: 'INCORRETA. Modem converte sinais analógicos/digitais.',
      C: 'INCORRETA. Firewall é filtro de segurança de tráfego.',
      D: 'INCORRETA. O Hub envia os dados para TODOS os computadores da rede (broadcast).',
      E: 'CORRETA. O Switch encaminha dados de forma comutada e inteligente apenas para o computador de destino.'
    }
  },
  {
    id: 'inf-q03',
    subjectId: 'informatica',
    topic: 'Windows 11 - Teclas de Atalho',
    difficulty: 'Fácil',
    statement: 'No sistema operacional Microsoft Windows 11 em português, um servidor do DETRAN deseja bloquear rapidamente a sua estação de trabalho ao se ausentar da mesa. O atalho de teclado que realiza o bloqueio imediato do Windows é:',
    lawReference: 'Atalhos de Teclado no Windows 11',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Tecla do Windows + L' },
      { letter: 'B', text: 'Tecla do Windows + E' },
      { letter: 'C', text: 'Ctrl + Alt + Del' },
      { letter: 'D', text: 'Tecla do Windows + D' },
      { letter: 'E', text: 'Alt + F4' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Atalhos essenciais do Windows 11:\n- Win + L: Bloquear o computador (Lock);\n- Win + E: Abrir o Explorador de Arquivos (Explorer);\n- Win + D: Mostrar a Área de Trabalho (Desktop);\n- Alt + F4: Fechar janela ativa.',
    explanations: {
      A: 'CORRETA. Win + L bloqueia instantaneamente a tela do Windows.',
      B: 'INCORRETA. Win + E abre o File Explorer.',
      C: 'INCORRETA. Ctrl+Alt+Del abre tela de opções de segurança.',
      D: 'INCORRETA. Win + D minimiza todas as janelas para exibir a área de trabalho.',
      E: 'INCORRETA. Alt + F4 fecha a janela do programa ativo.'
    }
  },
  {
    id: 'inf-q04',
    subjectId: 'informatica',
    topic: 'MS Excel - Função PROCX (XLOOKUP)',
    difficulty: 'Difícil',
    statement: 'Nas versões recentes do Microsoft Excel no Microsoft 365, a função moderna que substitui o PROCV e o PROCH com maior flexibilidade, permitindo pesquisas tanto à esquerda quanto à direita sem exigência de ordenação das colunas, denomina-se:',
    lawReference: 'Funções de Pesquisa no MS Excel 365',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'PROCV' },
      { letter: 'B', text: 'PROCX' },
      { letter: 'C', text: 'SOMASE' },
      { letter: 'D', text: 'CORRESP' },
      { letter: 'E', text: 'DESLOC' }
    ],
    correctLetter: 'B',
    generalExplanation: 'A função PROCX (XLOOKUP em inglês) é a substituta moderna do PROCV. Permite buscar valores em qualquer direção (à esquerda ou à direita), retornar arrays, tratar erros nativamente e não exige que a tabela esteja ordenada.',
    explanations: {
      A: 'INCORRETA. PROCV busca apenas da esquerda para a direita.',
      B: 'CORRETA. PROCX é a nova função de pesquisa bidirecional do Excel.',
      C: 'INCORRETA. SOMASE realiza soma condicional.',
      D: 'INCORRETA. CORRESP retorna apenas a posição relativa de um item.',
      E: 'INCORRETA. DESLOC retorna uma referência deslocada.'
    }
  },
  {
    id: 'inf-q05',
    subjectId: 'informatica',
    topic: 'Segurança da Informação - Ransomware',
    difficulty: 'Médio',
    statement: 'Um tipo de código malicioso (malware) que criptografa os arquivos e bancos de dados de uma instituição, exigindo o pagamento de um resgate (geralmente em criptomoedas) para que a chave de decodificação seja fornecida denomina-se:',
    lawReference: 'Ameaças Cibernéticas e Segurança',
    bancaTag: 'FCC / Vunesp',
    options: [
      { letter: 'A', text: 'Phishing.' },
      { letter: 'B', text: 'Spyware.' },
      { letter: 'C', text: 'Ransomware.' },
      { letter: 'D', text: 'Adware.' },
      { letter: 'E', text: 'Rootkit.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'RANSOMWARE (do inglês ransom = resgate) é o malware que sequestra dados mediante criptografia e exige resgate para devolver o acesso aos arquivos da vítima.',
    explanations: {
      A: 'INCORRETA. Phishing é técnica de engenharia social para roubar senhas/dados pessoais.',
      B: 'INCORRETA. Spyware é software espião que monitora hábitos do usuário.',
      C: 'CORRETA. Ransomware é o malware sequestrador de dados via criptografia.',
      D: 'INCORRETA. Adware exibe propagandas indesejadas.',
      E: 'INCORRETA. Rootkit esconde a presença de invasores no sistema.'
    }
  },
  {
    id: 'inf-q06',
    subjectId: 'informatica',
    topic: 'LGPD (Lei 13.709/18) - Dado Pessoal Sensível',
    difficulty: 'Médio',
    statement: 'Conforme a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018), enquadra-se na categoria de DADO PESSOAL SENSÍVEL a informação sobre:',
    lawReference: 'LGPD (Lei 13.709/2018, Art. 5º, II)',
    bancaTag: 'Vunesp / Avalia 2026',
    options: [
      { letter: 'A', text: 'Origem racial ou étnica, convicção religiosa, dado referente à saúde ou à vida sexual, dado genético ou biométrico.' },
      { letter: 'B', text: 'Nome completo, CPF, RG e número do CEP da residência.' },
      { letter: 'C', text: 'Placa do veículo, marca e ano de fabricação.' },
      { letter: 'D', text: 'Número da Carteira Nacional de Habilitação e categoria.' },
      { letter: 'E', text: 'Endereço de e-mail institucional corporativo.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'LGPD Art. 5º, II: Dado pessoal sensível é o dado pessoal sobre origem racial/étnica, convicção religiosa, opinião política, filiação a sindicato/organização religiosa/filosófica/política, dado referente à saúde ou à vida sexual, dado genético ou biométrico.',
    explanations: {
      A: 'CORRETA. Rol taxativo dos dados pessoais sensíveis segundo o Art. 5º, II da LGPD.',
      B: 'INCORRETA. São dados pessoais comuns (não sensíveis).',
      C: 'INCORRETA. Dados cadastrais do veículo.',
      D: 'INCORRETA. Dado pessoal cadastral ordinário.',
      E: 'INCORRETA. Dado pessoal de contato corporativo.'
    }
  },
  {
    id: 'inf-q07',
    subjectId: 'informatica',
    topic: 'Inteligência Artificial Generativa - Conceito de "Alucinação"',
    difficulty: 'Difícil',
    statement: 'No contexto das ferramentas de Inteligência Artificial Generativa baseadas em Grandes Modelos de Linguagem (LLMs), como ChatGPT ou Google Gemini, o termo "ALUCINAÇÃO" (Hallucination) refere-se a:',
    lawReference: 'Conceitos de IA Generativa na Adm. Pública',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'Situações em que o modelo de IA gera respostas incorretas, inventadas ou sem respaldo na realidade com aparente convicção e fluência.' },
      { letter: 'B', text: 'Ataques virtuais de vírus que destroem o hardware do computador.' },
      { letter: 'C', text: 'Falhas de conexão de rede Wi-Fi durante o uso do navegador.' },
      { letter: 'D', text: 'O processo de digitalização automática de documentos físicos em PDF.' },
      { letter: 'E', text: 'Excesso de velocidade de processamento da CPU acima de 100%.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Alucinação em IA Generativa ocorre quando o modelo de linguagem (LLM) sintetiza informações falsas, cita leis inexistentes ou cria fatos fictícios de maneira convincente. Por isso, a verificação humana (Human in the loop) é indispensável na Gestão Pública.',
    explanations: {
      A: 'CORRETA. Definição precisa do fenômeno da alucinação em LLMs.',
      B: 'INCORRETA. Não tem relação com vírus físicos.',
      C: 'INCORRETA. Sem relação com redes.',
      D: 'INCORRETA. OCR é a digitalização.',
      E: 'INCORRETA. Sem nexo técnico.'
    }
  },
  {
    id: 'inf-q08',
    subjectId: 'informatica',
    topic: 'Windows 11 - Ferramenta de Captura (Win + Shift + S)',
    difficulty: 'Fácil',
    statement: 'No Windows 11, o atalho de teclado que aciona diretamente a Ferramenta de Captura para recortar uma área específica da tela é:',
    lawReference: 'Atalhos do Windows 11',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Windows + Shift + S' },
      { letter: 'B', text: 'Ctrl + P' },
      { letter: 'C', text: 'Alt + Tab' },
      { letter: 'D', text: 'Windows + R' },
      { letter: 'E', text: 'Ctrl + Shift + Esc' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Atalho Win + Shift + S: Aciona a sobreposição da Ferramenta de Captura (Snipping Tool) no Windows 11, permitindo recortar retângulos, janelas ou formas livres da tela e copiar para a área de transferência.',
    explanations: {
      A: 'CORRETA. Win + Shift + S abre a captura de tela recortada.',
      B: 'INCORRETA. Ctrl + P é o atalho para imprimir.',
      C: 'INCORRETA. Alt + Tab alterna entre aplicativos abertos.',
      D: 'INCORRETA. Win + R abre a caixa "Executar".',
      E: 'INCORRETA. Ctrl + Shift + Esc abre o Gerenciador de Tarefas.'
    }
  },
  {
    id: 'inf-q09',
    subjectId: 'informatica',
    topic: 'MS Word - Controlar Alterações',
    difficulty: 'Médio',
    statement: 'Em um documento do Microsoft Word utilizado para minuta de portarias do DETRAN, o recurso que permite registrar todas as inserções, exclusões e formatações feitas por diferentes revisores denomina-se:',
    lawReference: 'Recursos de Revisão do MS Word',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: 'Mala Direta.' },
      { letter: 'B', text: 'Controlar Alterações (Track Changes).' },
      { letter: 'C', text: 'AutoCorreção.' },
      { letter: 'D', text: 'Inspecionar Documento.' },
      { letter: 'E', text: 'Quebra de Seção.' }
    ],
    correctLetter: 'B',
    generalExplanation: 'O recurso "Controlar Alterações" (na guia Revisão do Word) destaca com cores e tachados todas as modificações realizadas no texto, permitindo ao autor aceitar ou rejeitar cada alteração individualmente.',
    explanations: {
      A: 'INCORRETA. Mala Direta gera correspondências em lote a partir de banco de dados.',
      B: 'CORRETA. Controlar Alterações rastreia todas as edições no documento.',
      C: 'INCORRETA. AutoCorreção substitui erros de digitação comuns.',
      D: 'INCORRETA. Inspecionar Documento procura metadados ocromprometedores.',
      E: 'INCORRETA. Quebra de Seção divide a formatação de páginas.'
    }
  },
  {
    id: 'inf-q10',
    subjectId: 'informatica',
    topic: 'MS Excel - Erros de Fórmula (#N/A, #VALOR!, #REF!)',
    difficulty: 'Médio',
    statement: 'Em uma fórmula do Excel, ao deletar acidentalmente uma coluna que servia de referência para um cálculo, a célula exibirá o seguinte código de erro:',
    lawReference: 'Erros do MS Excel',
    bancaTag: 'Vunesp / FCC',
    options: [
      { letter: 'A', text: '#N/A' },
      { letter: 'B', text: '#REF!' },
      { letter: 'C', text: '#VALOR!' },
      { letter: 'D', text: '#NOME?' },
      { letter: 'E', text: '#DIV/0!' }
    ],
    correctLetter: 'B',
    generalExplanation: 'Significado dos erros no Excel:\n- `#REF!`: Referência de célula inválida (ocorre quando se exclui linha ou coluna referenciada).\n- `#N/A`: Valor não disponível (comum em falhas de busca do PROCV).\n- `#VALOR!`: Tipo de argumento errado (ex: tentar somar texto com número).\n- `#DIV/0!`: Divisão por zero.',
    explanations: {
      A: 'INCORRETA. #N/A significa valor não disponível.',
      B: 'CORRETA. #REF! ocorre quando uma referência de célula é excluída ou inválida.',
      C: 'INCORRETA. #VALOR! ocorre quando o tipo de dados está errado.',
      D: 'INCORRETA. #NOME? ocorre por erro de digitação no nome da função.',
      E: 'INCORRETA. #DIV/0! ocorre em divisão por zero.'
    }
  },
  {
    id: 'inf-q11',
    subjectId: 'informatica',
    topic: 'Segurança da Informação - Autenticação Multifator (MFA)',
    difficulty: 'Fácil',
    statement: 'A utilização de Autenticação em Múltiplos Fatores (MFA / 2FA) nos sistemas do DETRAN aumenta a segurança dos acessos dos servidores porque:',
    lawReference: 'Controle de Acesso e Segurança',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Exige pelo menos dois fatores de categorias diferentes (ex: senha + código gerado no celular por aplicativo token).' },
      { letter: 'B', text: 'Elimina a necessidade de utilizar qualquer senha alfanumérica.' },
      { letter: 'C', text: 'Permite que vários servidores compartilhem a mesma senha pública.' },
      { letter: 'D', text: 'Aumenta a velocidade da internet Wi-Fi do setor.' },
      { letter: 'E', text: 'Impede o envio de e-mails corporativos.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A Autenticação em Múltiplos Fatores (MFA) exige duas ou mais provas de identidade de categorias distintas: 1) Algo que você sabe (senha); 2) Algo que você possui (celular/token); 3) Algo que você é (biometria). Mesmo que a senha seja vazada, o invasor não acessa o sistema sem o segundo fator.',
    explanations: {
      A: 'CORRETA. MFA combina dois ou mais fatores de autenticação de categorias distintas.',
      B: 'INCORRETA. Não elimina o primeiro fator (senha).',
      C: 'INCORRETA. Compartilhar senhas violaria a segurança e a LGPD.',
      D: 'INCORRETA. Não interfere na banda de internet.',
      E: 'INCORRETA. Não bloqueia e-mails.'
    }
  },
  {
    id: 'inf-q12',
    subjectId: 'informatica',
    topic: 'LGPD (Lei 13.709/18) - O Encarregado de Dados (DPO)',
    difficulty: 'Médio',
    statement: 'Conforme a LGPD (Lei nº 13.709/2018), a pessoa indicada pelo controlador para atuar como canal de comunicação entre o órgão público, os titulares dos dados e a Autoridade Nacional de Proteção de Dados (ANPD) denomina-se:',
    lawReference: 'LGPD, Art. 5º, VIII e Art. 41',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'Operador.' },
      { letter: 'B', text: 'Titular.' },
      { letter: 'C', text: 'Encarregado pelo Tratamento de Dados Pessoais (Data Protection Officer - DPO).' },
      { letter: 'D', text: 'Auditor Fiscal.' },
      { letter: 'E', text: 'Gestor de Contratos.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'LGPD Art. 5º, VIII: ENCARREGADO (DPO) é a pessoa indicada pelo controlador e operador para atuar como canal de comunicação entre o controlador, os titulares dos dados e a Autoridade Nacional de Proteção de Dados (ANPD).',
    explanations: {
      A: 'INCORRETA. Operador é a pessoa que realiza o tratamento em nome do controlador.',
      B: 'INCORRETA. Titular é a pessoa natural a quem se referem os dados.',
      C: 'CORRETA. Encarregado (DPO) é o canal oficial de comunicação segundo o Art. 41 da LGPD.',
      D: 'INCORRETA. Cargo fiscal sem relação direta com a definição de encarregado.',
      E: 'INCORRETA. Função de acompanhamento licitatório.'
    }
  },
  {
    id: 'inf-q13',
    subjectId: 'informatica',
    topic: 'Computação em Nuvem - Modelos SaaS, PaaS, IaaS',
    difficulty: 'Difícil',
    statement: 'Quando um órgão público contrata um serviço de e-mail e suíte de escritório totalmente acessível via navegador web (como Microsoft 365 ou Google Workspace), sem necessidade de gerenciar servidores ou sistemas operacionais, o modelo de serviço em nuvem utilizado é:',
    lawReference: 'Modelos de Serviços de Cloud Computing',
    bancaTag: 'FCC / Avalia 2026',
    options: [
      { letter: 'A', text: 'IaaS (Infrastructure as a Service).' },
      { letter: 'B', text: 'PaaS (Platform as a Service).' },
      { letter: 'C', text: 'SaaS (Software as a Service).' },
      { letter: 'D', text: 'BaaS (Backup as a Service).' },
      { letter: 'E', text: 'Hardware as a Service.' }
    ],
    correctLetter: 'C',
    generalExplanation: 'Modelos em nuvem:\n- SaaS (Software como Serviço): aplicativo completo pronto para uso do usuário final via web (ex: MS 365, Gmail, Google Docs).\n- PaaS (Plataforma como Serviço): ambiente de desenvolvimento de software.\n- IaaS (Infraestrutura como Serviço): locação de servidores virtuais e armazenamento bruto (ex: AWS EC2, Azure VMs).',
    explanations: {
      A: 'INCORRETA. IaaS fornece infraestrutura bruta (servidores virtuais/redes).',
      B: 'INCORRETA. PaaS fornece ambiente para desenvolvedores criarem aplicativos.',
      C: 'CORRETA. SaaS disponibiliza o software final pronto via nuvem.',
      D: 'INCORRETA. BaaS é específico para cópias de segurança.',
      E: 'INCORRETA. Não é classificação padrão de modelo de serviços.'
    }
  },
  {
    id: 'inf-q14',
    subjectId: 'informatica',
    topic: 'Internet e Protocolos - HTTP vs HTTPS',
    difficulty: 'Fácil',
    statement: 'Ao navegar nos sistemas de atendimento do DETRAN-SP, a presença do protocolo HTTPS e do ícone de cadeado na barra de endereços do navegador garante que:',
    lawReference: 'Protocolos de Comunicação na Web',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'A comunicação entre o navegador do usuário e o servidor está criptografada por meio de SSL/TLS.' },
      { letter: 'B', text: 'O site não pode conter nenhum erro de digitação.' },
      { letter: 'C', text: 'O computador do usuário é imune a qualquer tipo de vírus.' },
      { letter: 'D', text: 'O trânsito na cidade está sem engarrafamentos.' },
      { letter: 'E', text: 'A velocidade de navegação é multiplicada por dez.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O protocolo HTTPS (Hypertext Transfer Protocol Secure) adiciona uma camada de segurança (SSL/TLS) que CRIPTOGRAFA os dados transitados entre o navegador e o servidor web, impedindo a interceptação por terceiros.',
    explanations: {
      A: 'CORRETA. HTTPS garante confidencialidade e integridade dos dados trafegados via criptografia SSL/TLS.',
      B: 'INCORRETA. O certificado não revisa textos.',
      C: 'INCORRETA. HTTPS protege o canal de tráfego, mas não impede vírus no computador local.',
      D: 'INCORRETA. Sem relação.',
      E: 'INCORRETA. Não interfere na banda contratada.'
    }
  },
  {
    id: 'inf-q15',
    subjectId: 'informatica',
    topic: 'Engenharia de Prompts na Adm. Pública',
    difficulty: 'Médio',
    statement: 'Para obter respostas mais precisas e adequadas ao preparar uma síntese de edital utilizando um assistente de IA Generativa, a boa prática de "Engenharia de Prompts" recomenda:',
    lawReference: 'Uso Prático de IA na Produtividade',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'Fornecer contexto claro, atribuir um papel/persona (ex: "Atue como auditor público"), especificar o formato de saída e fornecer os textos de referência.' },
      { letter: 'B', text: 'Digitar frases curtas de uma única palavra sem nenhum contexto.' },
      { letter: 'C', text: 'Inserir dados pessoais e senhas sigilosas no prompt da IA pública.' },
      { letter: 'D', text: 'Pedir para a IA adivinhar o edital sem fornecer o texto.' },
      { letter: 'E', text: 'Usar apenas caixa alta com exclamações.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A Engenharia de Prompts eficaz baseia-se em: 1) Persona (Atue como...); 2) Contexto claro; 3) Instrução de tarefa bem delimitada; 4) Formato de saída desejado; 5) Inserção do texto-fonte de referência.',
    explanations: {
      A: 'CORRETA. Estrutura recomendada de prompt de alta qualidade.',
      B: 'INCORRETA. Prompts genéricos sem contexto geram respostas vagas.',
      C: 'INCORRETA. Viola a LGPD e a segurança institucional colocar senhas em IAs públicas.',
      D: 'INCORRETA. Causa alucinação na IA.',
      E: 'INCORRETA. Não influencia a qualidade do modelo.'
    }
  },
  {
    id: 'inf-q16',
    subjectId: 'informatica',
    topic: 'MS Excel - Referências Relativas e Absolutas ($A$1)',
    difficulty: 'Médio',
    statement: 'Na célula C2 de uma planilha do Excel, foi digitada a fórmula `=A2*$B$1`. Se a célula C2 for copiada (Ctrl+C) e colada (Ctrl+V) para a célula C3, a fórmula na célula C3 passará a ser:',
    lawReference: 'Endereçamento de Células no MS Excel',
    bancaTag: 'FCC / Vunesp',
    options: [
      { letter: 'A', text: '=A3*$B$1' },
      { letter: 'B', text: '=A3*$B$2' },
      { letter: 'C', text: '=A2*$B$1' },
      { letter: 'D', text: '=A3*B1' },
      { letter: 'E', text: '=#REF!' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Regra de cópia de fórmula no Excel:\n- `A2` é referência RELATIVA: ao colar 1 linha abaixo (C3), ela atualiza para `A3`.\n- `$B$1` possui cifrões de fixação (referência ABSOLUTA): linha e coluna ficam travadas, não se alterando após a cópia (`$B$1`).\nResultado na C3: `=A3*$B$1`.',
    explanations: {
      A: 'CORRETA. A2 (relativa) atualiza para A3; $B$1 (absoluta) permanece idêntica.',
      B: 'INCORRETA. $B$1 não se altera para $B$2 devido aos cifrões de travamento.',
      C: 'INCORRETA. A2 é relativa e deve atualizar ao mudar de linha.',
      D: 'INCORRETA. Perdeu os cifrões.',
      E: 'INCORRETA. Não há erro de referência.'
    }
  },
  {
    id: 'inf-q17',
    subjectId: 'informatica',
    topic: 'Segurança da Informação - Ataque de Phishing',
    difficulty: 'Fácil',
    statement: 'Um servidor do DETRAN recebe um e-mail fraudulento com o logotipo falso de uma instituição bancária, solicitando o recadastramento urgente da senha corporativa sob pena de bloqueio. Esse tipo de fraude por engenharia social é conhecido como:',
    lawReference: 'Ameaças de Segurança Cibernética',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Phishing.' },
      { letter: 'B', text: 'Worm.' },
      { letter: 'C', text: 'Keylogger.' },
      { letter: 'D', text: 'Firewall.' },
      { letter: 'E', text: 'Backdoor.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'PHISHING (pescaria de dados) é o ataque de engenharia social no qual fraudadores utilizam mensagens falsas persuasivas (e-mail, SMS, mensagens) para enganar o usuário e induzi-lo a revelar senhas e dados confidenciais.',
    explanations: {
      A: 'CORRETA. Phishing é a tentativa enganosa de obter informações confidenciais.',
      B: 'INCORRETA. Worm é um vírus autorreplicável de rede.',
      C: 'INCORRETA. Keylogger grava teclas digitadas.',
      D: 'INCORRETA. Firewall é mecanismo de defesa.',
      E: 'INCORRETA. Backdoor é porta dos fundos para acesso não autorizado.'
    }
  },
  {
    id: 'inf-q18',
    subjectId: 'informatica',
    topic: 'Windows 11 - Gerenciador de Tarefas',
    difficulty: 'Médio',
    statement: 'Caso um programa no Windows 11 pare de responder e fique travado, o servidor pode forçar o encerramento do processo por meio do Gerenciador de Tarefas. O atalho de teclado direto para abrir o Gerenciador de Tarefas é:',
    lawReference: 'Atalhos do Windows 11',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: 'Ctrl + Shift + Esc' },
      { letter: 'B', text: 'Ctrl + Alt + Del' },
      { letter: 'C', text: 'Alt + F4' },
      { letter: 'D', text: 'Win + Tab' },
      { letter: 'E', text: 'Ctrl + Z' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O atalho `Ctrl + Shift + Esc` abre DIRETAMENTE o Gerenciador de Tarefas no Windows sem passar pela tela intermediária de opções de segurança do `Ctrl + Alt + Del`.',
    explanations: {
      A: 'CORRETA. Ctrl + Shift + Esc abre o Gerenciador de Tarefas de forma direta e imediata.',
      B: 'INCORRETA. Ctrl + Alt + Del abre uma tela de opções onde é preciso clicar no Gerenciador de Tarefas.',
      C: 'INCORRETA. Alt + F4 tenta fechar a janela ativa.',
      D: 'INCORRETA. Win + Tab abre a visão de tarefas e áreas de trabalho virtuais.',
      E: 'INCORRETA. Ctrl + Z desfaz a última ação.'
    }
  },
  {
    id: 'inf-q19',
    subjectId: 'informatica',
    topic: 'MS Word - Formato PDF e Exportação',
    difficulty: 'Fácil',
    statement: 'No Microsoft Word 365, para salvar um documento em um formato padronizado e não editável para envio aos cidadãos, preservando a formatação exata da página, deve-se exportar o arquivo na extensão:',
    lawReference: 'Formatos de Arquivo no MS Word',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: '.pdf' },
      { letter: 'B', text: '.docx' },
      { letter: 'C', text: '.txt' },
      { letter: 'D', text: '.xlsx' },
      { letter: 'E', text: '.zip' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O formato PDF (Portable Document Format) é o padrão oficial para publicação e compartilhamento de documentos finais não editáveis, mantendo a fidelidade de fontes e layout em qualquer dispositivo.',
    explanations: {
      A: 'CORRETA. PDF é o formato portátil padrão para envio seguro e preservação de layout.',
      B: 'INCORRETA. .docx é a extensão nativa editável do Word.',
      C: 'INCORRETA. .txt é texto puro sem formatação.',
      D: 'INCORRETA. .xlsx é formato de planilha do Excel.',
      E: 'INCORRETA. .zip é arquivo compactado.'
    }
  },
  {
    id: 'inf-q20',
    subjectId: 'informatica',
    topic: 'LGPD - Princípio da Necessidade e Minimização',
    difficulty: 'Médio',
    statement: 'O princípio da LGPD que determina que o tratamento de dados pessoais deve limitar-se ao mínimo necessário para a realização de suas finalidades, com abrangência dos dados pertinentes, proporcionais e não excessivos, denomina-se:',
    lawReference: 'LGPD, Art. 6º, III',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'Princípio da Necessidade (Minimização).' },
      { letter: 'B', text: 'Princípio do Livre Acesso.' },
      { letter: 'C', text: 'Princípio da Qualidade dos Dados.' },
      { letter: 'D', text: 'Princípio da Prevenção.' },
      { letter: 'E', text: 'Princípio da Não Discriminação.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'LGPD Art. 6º, III: Princípio da NECESSIDADE - limitação do tratamento ao mínimo necessário para a realização de suas finalidades, com abrangência dos dados pertinentes, proporcionais e não excessivos em relação às finalidades informadas.',
    explanations: {
      A: 'CORRETA. Definição exata do Princípio da Necessidade segundo a LGPD.',
      B: 'INCORRETA. Livre acesso garante aos titulares a consulta facilitada sobre seus dados.',
      C: 'INCORRETA. Qualidade garante exatidão e clareza dos dados.',
      D: 'INCORRETA. Prevenção impõe adoção de medidas para evitar danos.',
      E: 'INCORRETA. Não discriminação proíbe tratamento para fins discriminatórios.'
    }
  },
  {
    id: 'inf-q21',
    subjectId: 'informatica',
    topic: 'Redes de Computadores - Endereço IP e DNS',
    difficulty: 'Médio',
    statement: 'No funcionamento da Internet, o sistema responsável por traduzir nomes de domínios amigáveis digitados pelo usuário (ex: www.detran.sp.gov.br) no respectivo endereço IP numérico do servidor web chama-se:',
    lawReference: 'Serviços da Camada de Aplicação',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: 'DNS (Domain Name System).' },
      { letter: 'B', text: 'DHCP.' },
      { letter: 'C', text: 'FTP.' },
      { letter: 'D', text: 'SMTP.' },
      { letter: 'E', text: 'HTML.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O DNS (Domain Name System - Sistema de Nomes de Domínio) é a "agenda telefônica" da Internet: converte nomes de domínios alfabéticos (www.detran.sp.gov.br) em endereços IP (ex: 200.144.X.X).',
    explanations: {
      A: 'CORRETA. DNS realiza a resolução de nomes de domínio em endereços IP.',
      B: 'INCORRETA. DHCP atribui endereços IP automaticamente aos computadores da rede.',
      C: 'INCORRETA. FTP é protocolo de transferência de arquivos.',
      D: 'INCORRETA. SMTP é protocolo para envio de e-mails.',
      E: 'INCORRETA. HTML é linguagem de marcação de páginas web.'
    }
  },
  {
    id: 'inf-q22',
    subjectId: 'informatica',
    topic: 'MS Excel - Função CONT.SE',
    difficulty: 'Fácil',
    statement: 'Para contar quantas células no intervalo A1:A100 contêm valor maior que 50 numa planilha do Excel, utiliza-se a função:',
    lawReference: 'Funções de Contagem no MS Excel',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: '=CONT.SE(A1:A100;">50")' },
      { letter: 'B', text: '=SOMA(A1:A100;">50")' },
      { letter: 'C', text: '=CONTAR(A1:A100;50)' },
      { letter: 'D', text: '=SE(A1:A100>50;CONTAR)' },
      { letter: 'E', text: '=MEDIASE(A1:A100;">50")' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Sintaxe da função CONT.SE:\n`=CONT.SE(intervalo; critério)`\nNo caso citado: `=CONT.SE(A1:A100;">50")`.',
    explanations: {
      A: 'CORRETA. Sintaxe oficial do CONT.SE para contagem condicional.',
      B: 'INCORRETA. SOMA somaria os valores em vez de contar as células.',
      C: 'INCORRETA. Função CONTAR simples não aceita operadores relacionais como critério.',
      D: 'INCORRETA. Sintaxe inválida.',
      E: 'INCORRETA. MEDIASE calcula a média dos valores.'
    }
  },
  {
    id: 'inf-q23',
    subjectId: 'informatica',
    topic: 'Segurança da Informação - Firewall',
    difficulty: 'Fácil',
    statement: 'Um sistema de segurança baseado em hardware ou software que monitora e filtra o tráfego de dados de entrada e saída de uma rede com base em regras de segurança previamente configuradas é denominado:',
    lawReference: 'Mecanismos de Defesa de Rede',
    bancaTag: 'FCC / Vunesp',
    options: [
      { letter: 'A', text: 'Firewall.' },
      { letter: 'B', text: 'Spyware.' },
      { letter: 'C', text: 'Cookie.' },
      { letter: 'D', text: 'Navegador.' },
      { letter: 'E', text: 'Hub.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O FIREWALL (parede de fogo) é a barreira de proteção de redes que analisa os pacotes de dados e bloqueia tráfegos não autorizados ou suspeitos conforme políticas de segurança.',
    explanations: {
      A: 'CORRETA. O Firewall filtra e inspeciona o tráfego de rede de entrada e saída.',
      B: 'INCORRETA. Spyware é programa espião.',
      C: 'INCORRETA. Cookie é pequenos arquivos de texto com preferências de sites.',
      D: 'INCORRETA. Navegador é o cliente web (Chrome, Edge).',
      E: 'INCORRETA. Hub é concentrador de cabos de rede sem filtro.'
    }
  },
  {
    id: 'inf-q24',
    subjectId: 'informatica',
    topic: 'Windows 11 - Área de Transferência Inteligente (Win + V)',
    difficulty: 'Médio',
    statement: 'No Windows 11, o atalho de teclado que abre o HISTÓRICO da Área de Transferência, permitindo colar elementos copiados anteriormente (textos e imagens), é:',
    lawReference: 'Recursos do Windows 11',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'Windows + V' },
      { letter: 'B', text: 'Ctrl + V' },
      { letter: 'C', text: 'Alt + V' },
      { letter: 'D', text: 'Shift + V' },
      { letter: 'E', text: 'Ctrl + Alt + V' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Atalho `Win + V`: Exibe o painel do Histórico da Área de Transferência do Windows 11, armazenando múltiplos itens copiados recentes.',
    explanations: {
      A: 'CORRETA. Win + V abre o histórico da área de transferência.',
      B: 'INCORRETA. Ctrl + V cola apenas o último item copiado.',
      C: 'INCORRETA. Não possui essa função no Windows.',
      D: 'INCORRETA. Sem função de histórico.',
      E: 'INCORRETA. Usado para colar especial no Word/Excel.'
    }
  },
  {
    id: 'inf-q25',
    subjectId: 'informatica',
    topic: 'Correio Eletrônico - Campos Cco / Bcc',
    difficulty: 'Fácil',
    statement: 'Ao enviar um e-mail com múltiplos destinatários, para garantir que os endereços de e-mail dos destinatários fiquem OCULTOS uns dos outros (em respeito à privacidade e LGPD), deve-se inserir os endereços no campo:',
    lawReference: 'Clientes de E-mail (Outlook / Webmail)',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Cco (Com Cópia Oculta) / Bcc.' },
      { letter: 'B', text: 'Para (To).' },
      { letter: 'C', text: 'Cc (Com Cópia).' },
      { letter: 'D', text: 'Assunto (Subject).' },
      { letter: 'E', text: 'Anexo.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Campo `Cco` (Com Cópia Oculta / Bcc): Esconde o endereço dos destinatários ali inseridos, impedindo que outros receptores vejam a lista de e-mails.',
    explanations: {
      A: 'CORRETA. Cco oculta a lista de destinatários.',
      B: 'INCORRETA. No campo "Para", todos os e-mails ficam visíveis a todos.',
      C: 'INCORRETA. No campo "Cc", todos os e-mails ficam visíveis.',
      D: 'INCORRETA. Campo para o título do e-mail.',
      E: 'INCORRETA. Espaço para inclusão de arquivos.'
    }
  },
  {
    id: 'inf-q26',
    subjectId: 'informatica',
    topic: 'Inteligência Artificial Generativa - Hallucination e Fact-Checking',
    difficulty: 'Médio',
    statement: 'Ao solicitar a uma ferramenta de IA Generativa o resumo de um artigo recente do CTB, o servidor deve sempre efetuar o "Fact-Checking" (checagem de fatos) porque:',
    lawReference: 'Uso de IA na Administração Pública',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'Modelos de linguagem são probabilísticos e podem citar leis inexistentes ou atualizações revogadas como se fossem vigentes.' },
      { letter: 'B', text: 'A IA é um órgão público do governo federal e não pode errar.' },
      { letter: 'C', text: 'O uso de IA é proibido em qualquer setor administrativo.' },
      { letter: 'D', text: 'As respostas de IA são sempre criptografadas em código binário.' },
      { letter: 'E', text: 'A IA apaga o sistema operacional se não for checada.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Modelos de linguagem (LLMs) geram texto por predição estatística de palavras e não possuem raciocínio jurídico ou acesso à verdade absoluta, podendo incorrer em erros fáticos.',
    explanations: {
      A: 'CORRETA. Necessidade de validação humana devido ao caráter probabilístico do modelo.',
      B: 'INCORRETA. A IA é uma ferramenta de software comercial/open-source.',
      C: 'INCORRETA. O uso regulado e responsável é permitido e estimulado.',
      D: 'INCORRETA. A resposta é entregue em texto natural.',
      E: 'INCORRETA. Totalmente sem nexo.'
    }
  },
  {
    id: 'inf-q27',
    subjectId: 'informatica',
    topic: 'MS Excel - Função CONCATENAR / CONCAT / UNIRTEXTO',
    difficulty: 'Fácil',
    statement: 'Em uma planilha do Excel, a célula A1 contém "DETRAN" e a célula B1 contém "SP". Qual das opções abaixo junta os textos das duas células produzindo a palavra "DETRANSP"?',
    lawReference: 'Funções de Texto no MS Excel',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: '=A1 & B1' },
      { letter: 'B', text: '=SOMA(A1;B1)' },
      { letter: 'C', text: '=A1 + B1' },
      { letter: 'D', text: '=PROCV(A1;B1)' },
      { letter: 'E', text: '=TEXTO(A1*B1)' }
    ],
    correctLetter: 'A',
    generalExplanation: 'No Excel, o operador `&` (e comercial) e a função `=CONCATENAR(A1;B1)` realizam a junção de cadeias de texto.\nLogo: `=A1 & B1` une "DETRAN" e "SP" resultando em "DETRANSP".',
    explanations: {
      A: 'CORRETA. O operador & concatena strings de texto.',
      B: 'INCORRETA. SOMA opera sobre números.',
      C: 'INCORRETA. O operador + sobre textos gera erro #VALOR!.',
      D: 'INCORRETA. PROCV é função de pesquisa.',
      E: 'INCORRETA. Gera erro de tipo de dados.'
    }
  },
  {
    id: 'inf-q28',
    subjectId: 'informatica',
    topic: 'Navegadores da Web - Atalho Ctrl + Shift + N / Ctrl + Shift + P',
    difficulty: 'Médio',
    statement: 'No navegador Google Chrome no Windows, o atalho de teclado `Ctrl + Shift + N` abre uma nova janela de navegação no modo:',
    lawReference: 'Navegadores da Web (Google Chrome / MS Edge)',
    bancaTag: 'FCC / Vunesp',
    options: [
      { letter: 'A', text: 'Navegação Anônima (Incognito).' },
      { letter: 'B', text: 'Impressão de página.' },
      { letter: 'C', text: 'Download de arquivos.' },
      { letter: 'D', text: 'Desenvolvedor da página.' },
      { letter: 'E', text: 'Histórico de navegação.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'No Google Chrome, `Ctrl + Shift + N` abre a Janela Anônima (no MS Edge e Firefox o atalho é `Ctrl + Shift + P` para Janela Privada). O modo anônimo não salva histórico, cookies ou dados de formulário no dispositivo local.',
    explanations: {
      A: 'CORRETA. Ctrl + Shift + N abre a janela anônima no Chrome.',
      B: 'INCORRETA. Ctrl + P imprime.',
      C: 'INCORRETA. Ctrl + J exibe downloads.',
      D: 'INCORRETA. F12 ou Ctrl + Shift + I abre a ferramenta de desenvolvedor.',
      E: 'INCORRETA. Ctrl + H exibe o histórico.'
    }
  },
  {
    id: 'inf-q29',
    subjectId: 'informatica',
    topic: 'Segurança - Backup (Incremental vs Completo)',
    difficulty: 'Difícil',
    statement: 'No gerenciamento de banco de dados do DETRAN, a política de backup que realiza a cópia APENAS dos arquivos que sofreram modificações ou foram criados desde o último backup (reduzindo tempo e espaço em disco) chama-se:',
    lawReference: 'Políticas de Backup e Cópias de Segurança',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: 'Backup Incremental.' },
      { letter: 'B', text: 'Backup Completo (Full).' },
      { letter: 'C', text: 'Backup Espelhado estático.' },
      { letter: 'D', text: 'Backup Físico em disquete.' },
      { letter: 'E', text: 'Formatação de disco.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Tipos de backup:\n- FULL (Completo): copia todos os dados.\n- INCREMENTAL: copia apenas os dados alterados desde o ÚLTIMO BACKUP (qualquer tipo), sendo o mais rápido e o que menos ocupa espaço.\n- DIFERENCIAL: copia os dados alterados desde o ÚLTIMO BACKUP FULL.',
    explanations: {
      A: 'CORRETA. Backup incremental copia apenas as alterações desde o último backup efetuado.',
      B: 'INCORRETA. Backup Full copia a totalidade dos arquivos.',
      C: 'INCORRETA. Espelhamento é duplicação em tempo real.',
      D: 'INCORRETA. Mídia obsoleta.',
      E: 'INCORRETA. Formatação destrói dados.'
    }
  },
  {
    id: 'inf-q30',
    subjectId: 'informatica',
    topic: 'MS Word - Atalhos de Formatação (Ctrl + B / Ctrl + N)',
    difficulty: 'Fácil',
    statement: 'No Microsoft Word em português, o atalho de teclado utilizado para aplicar o estilo NEGRITO ao texto selecionado é:',
    lawReference: 'Atalhos de Teclado no MS Word',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Ctrl + N' },
      { letter: 'B', text: 'Ctrl + B' },
      { letter: 'C', text: 'Ctrl + I' },
      { letter: 'D', text: 'Ctrl + S' },
      { letter: 'E', text: 'Ctrl + U' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Atalhos de formatação no Word em Português:\n- Ctrl + N: Negrito;\n- Ctrl + I: Itálico;\n- Ctrl + S: Sublinhado;\n- Ctrl + B: Salvar o documento (do verbo "Baixar"/Salvar em PT).',
    explanations: {
      A: 'CORRETA. Ctrl + N aplica o Negrito no Word em Português.',
      B: 'INCORRETA. Ctrl + B salva o arquivo no Word em Português (no Word em Inglês Ctrl+B é Bold).',
      C: 'INCORRETA. Ctrl + I aplica Itálico.',
      D: 'INCORRETA. Ctrl + S aplica Sublinhado.',
      E: 'INCORRETA. Ctrl + U abre a caixa Localizar e Substituir.'
    }
  },
  {
    id: 'inf-q31',
    subjectId: 'informatica',
    topic: 'Windows 11 - Lixeira e Exclusão Permanente (Shift + Del)',
    difficulty: 'Fácil',
    statement: 'Ao selecionar um arquivo na área de trabalho do Windows 11 e pressionar o atalho `Shift + Delete`, o arquivo será:',
    lawReference: 'Gerenciamento de Arquivos no Windows 11',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Excluído permanentemente sem passar pela Lixeira.' },
      { letter: 'B', text: 'Enviado para a Lixeira para posterior restauração.' },
      { letter: 'C', text: 'Copiado para o OneDrive.' },
      { letter: 'D', text: 'Criptografado com senha de segurança.' },
      { letter: 'E', text: 'Renomeado automaticamente.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Atalho `Shift + Delete`: Ignora o envio para a Lixeira do Windows e realiza a exclusão direta e permanente do arquivo ou pasta do disco rígido.',
    explanations: {
      A: 'CORRETA. Shift + Del apaga o arquivo diretamente sem passar pela Lixeira.',
      B: 'INCORRETA. Apenas a tecla Delete envia para a Lixeira.',
      C: 'INCORRETA. Não faz upload em nuvem.',
      D: 'INCORRETA. Não criptografa.',
      E: 'INCORRETA. Não renomeia.'
    }
  },
  {
    id: 'inf-q32',
    subjectId: 'informatica',
    topic: 'MS Excel - Tabela Dinâmica',
    difficulty: 'Médio',
    statement: 'No Microsoft Excel, a ferramenta recomendada para resumir, analisar, explorar e apresentar grandes volumes de dados tabulares por meio de reagrupamentos e relatórios interativos denomina-se:',
    lawReference: 'Ferramentas de Análise no MS Excel',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: 'Tabela Dinâmica (Pivot Table).' },
      { letter: 'B', text: 'Mala Direta.' },
      { letter: 'C', text: 'Atingir Meta.' },
      { letter: 'D', text: 'Validação de Dados.' },
      { letter: 'E', text: 'Texto para Colunas.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A TABELA DINÂMICA (Pivot Table) é a ferramenta de BI nativa do Excel para condensar grandes listas de dados, permitindo cruzar colunas e linhas, aplicar filtros e obter somatórios dinâmicos instantâneos.',
    explanations: {
      A: 'CORRETA. Tabela Dinâmica é a ferramenta clássica de resumo e cruzamento de dados no Excel.',
      B: 'INCORRETA. Recurso do Word.',
      C: 'INCORRETA. Atingir Meta é análise hipotética para encontrar valor de entrada.',
      D: 'INCORRETA. Validação restringe o tipo de dado digitado.',
      E: 'INCORRETA. Divisão de texto delimitado.'
    }
  },
  {
    id: 'inf-q33',
    subjectId: 'informatica',
    topic: 'LGPD - Autoridade Nacional de Proteção de Dados (ANPD)',
    difficulty: 'Médio',
    statement: 'O órgão da administração pública federal responsável por zelar pela proteção dos dados pessoais, fiscalizar e aplicar sanções administrativas em caso de descumprimento da LGPD chama-se:',
    lawReference: 'LGPD, Art. 55-A',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'ANPD (Autoridade Nacional de Proteção de Dados).' },
      { letter: 'B', text: 'ANATEL.' },
      { letter: 'C', text: 'SENATRAN.' },
      { letter: 'D', text: 'CONTRAN.' },
      { letter: 'E', text: 'CADA.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'LGPD Art. 55-A: A ANPD (Autoridade Nacional de Proteção de Dados) é a autarquia de natureza especial responsável por zelar, fiscalizar e regulamentar a aplicação da LGPD em todo o Brasil.',
    explanations: {
      A: 'CORRETA. ANPD é a autoridade reguladora e fiscalizadora da LGPD.',
      B: 'INCORRETA. Reguladora de telecomunicações.',
      C: 'INCORRETA. Secretaria Nacional de Trânsito.',
      D: 'INCORRETA. Conselho Nacional de Trânsito.',
      E: 'INCORRETA. Não se aplica.'
    }
  },
  {
    id: 'inf-q34',
    subjectId: 'informatica',
    topic: 'Redes de Computadores - Conceito de Intranet',
    difficulty: 'Fácil',
    statement: 'Uma rede privada corporativa de acesso restrito aos funcionários do DETRAN-SP, que utiliza os mesmos protocolos da Internet (como HTTP, TCP/IP) para disponibilizar sistemas internos e comunicados institucionais, é chamada de:',
    lawReference: 'Conceitos de Internet e Intranet',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Intranet.' },
      { letter: 'B', text: 'Extranet pública.' },
      { letter: 'C', text: 'Deep Web.' },
      { letter: 'D', text: 'Bluetooth.' },
      { letter: 'E', text: 'Rede Mesh pública.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'INTRANET é a rede privada de uma organização corporativa/órgão público. Utiliza a tecnologia da Internet (TCP/IP, web browsers), porém com acesso restrito e seguro apenas aos seus colaboradores autorizados.',
    explanations: {
      A: 'CORRETA. Intranet é a rede corporativa privada interna.',
      B: 'INCORRETA. Extranet estende acesso a parceiros externos credenciados.',
      C: 'INCORRETA. Deep Web são páginas não indexadas por buscadores.',
      D: 'INCORRETA. Bluetooth é rede pessoal sem fio de curtíssimo alcance (PAN).',
      E: 'INCORRETA. Topologia de rede física.'
    }
  },
  {
    id: 'inf-q35',
    subjectId: 'informatica',
    topic: 'Segurança - Trojan (Cavalo de Tróia)',
    difficulty: 'Médio',
    statement: 'Um programa malicioso que se disfarça de um aplicativo útil ou inofensivo (como um jogo ou utilitário de sistema), mas que, ao ser executado, abre portas de comunicação ocultas para que um invasor tome o controle do computador é conhecido como:',
    lawReference: 'Ameaças de Segurança',
    bancaTag: 'FCC',
    options: [
      { letter: 'A', text: 'Cavalo de Tróia (Trojan Horse).' },
      { letter: 'B', text: 'Antivírus.' },
      { letter: 'C', text: 'Cookie de sessão.' },
      { letter: 'D', text: 'Patch de correção.' },
      { letter: 'E', text: 'Certificado Digital.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O CAVALO DE TRÓIA (Trojan) vem disfarçado de presente/arquivo legítimo. Quando aberto pelo usuário, executa suas funções maliciosas em segundo plano (como instalar um backdoor).',
    explanations: {
      A: 'CORRETA. Definição clássica do Cavalo de Tróia.',
      B: 'INCORRETA. Antivírus é software de proteção.',
      C: 'INCORRETA. Cookie armazena dados de navegação.',
      D: 'INCORRETA. Patch é atualização de correção.',
      E: 'INCORRETA. Certificado digital garante identidade digital.'
    }
  },
  {
    id: 'inf-q36',
    subjectId: 'informatica',
    topic: 'MS Excel - Função SE Encadeada',
    difficulty: 'Difícil',
    statement: 'Em uma planilha do Excel, a fórmula `=SE(A1>=7;"Aprovado";SE(A1>=5;"Recuperação";"Reprovado"))` foi digitada na célula B1. Se a célula A1 contiver o valor 6, qual será o resultado exibido na célula B1?',
    lawReference: 'Funções Lógicas do MS Excel',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'Recuperação' },
      { letter: 'B', text: 'Aprovado' },
      { letter: 'C', text: 'Reprovado' },
      { letter: 'D', text: '#VALOR!' },
      { letter: 'E', text: '0' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Avaliando o encadeamento com A1 = 6:\n1) Primeira condição `A1>=7` (6>=7) é FALSA.\n2) O Excel passa para o segundo teste `SE(A1>=5;...)` (6>=5), que é VERDADEIRO.\n3) Resultado retornado: "Recuperação".',
    explanations: {
      A: 'CORRETA. 6 não é >=7, mas é >=5, retornando "Recuperação".',
      B: 'INCORRETA. Exigiria A1 >= 7.',
      C: 'INCORRETA. Reprovado ocorreria se A1 fosse menor que 5.',
      D: 'INCORRETA. Não há erro de sintaxe.',
      E: 'INCORRETA. Não retorna número.'
    }
  },
  {
    id: 'inf-q37',
    subjectId: 'informatica',
    topic: 'Windows 11 - Configurações vs Painel de Controle',
    difficulty: 'Fácil',
    statement: 'No Windows 11, a interface moderna unificada que concentra o gerenciamento de contas, personalização de tela, atualizações (Windows Update), conexões Wi-Fi e dispositivos denomina-se:',
    lawReference: 'Interface do Windows 11',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'Configurações (Settings - acessado por Win + I).' },
      { letter: 'B', text: 'MS-DOS Prompt.' },
      { letter: 'C', text: 'Regedit.' },
      { letter: 'D', text: 'Bloco de Notas.' },
      { letter: 'E', text: 'Prompt de Comando.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O aplicativo "Configurações" (aberto pelo atalho `Win + I`) é a central moderna do Windows 11 que substituiu a maioria das funções do tradicional Painel de Controle.',
    explanations: {
      A: 'CORRETA. Configurações (Win + I) é a central moderna de ajuste de parâmetros do Windows 11.',
      B: 'INCORRETA. Prompt de comandos legados.',
      C: 'INCORRETA. Regedit altera o registro do sistema.',
      D: 'INCORRETA. Editor de texto simples.',
      E: 'INCORRETA. Interface de linha de comando.'
    }
  },
  {
    id: 'inf-q38',
    subjectId: 'informatica',
    topic: 'Nuvem - Armazenamento de Arquivos no OneDrive',
    difficulty: 'Fácil',
    statement: 'O serviço de armazenamento em nuvem nativamente integrado ao Microsoft Windows 11 e ao pacote Microsoft 365 para sincronização de pastas é o:',
    lawReference: 'Serviços em Nuvem Microsoft',
    bancaTag: 'Vunesp',
    options: [
      { letter: 'A', text: 'OneDrive.' },
      { letter: 'B', text: 'iCloud.' },
      { letter: 'C', text: 'Dropbox.' },
      { letter: 'D', text: 'Google Drive.' },
      { letter: 'E', text: 'MegaUpload.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O ONEDRIVE é o serviço oficial de armazenamento e sincronização de arquivos em nuvem da Microsoft, integrado nativamente ao Explorador de Arquivos do Windows 11 e ao Microsoft 365.',
    explanations: {
      A: 'CORRETA. OneDrive é o serviço de nuvem padrão da Microsoft.',
      B: 'INCORRETA. Serviço de nuvem da Apple.',
      C: 'INCORRETA. Serviço de terceiros.',
      D: 'INCORRETA. Serviço de nuvem do Google.',
      E: 'INCORRETA. Serviço de armazenamento descontinuado/independente.'
    }
  },
  {
    id: 'inf-q39',
    subjectId: 'informatica',
    topic: 'Segurança - Spyware e Keylogger',
    difficulty: 'Médio',
    statement: 'Um malware especializado em capturar e registrar todas as teclas digitadas pelo usuário no teclado do computador (como senhas bancárias e números de CPF) para enviá-las a um cibercriminoso denomina-se:',
    lawReference: 'Malwares e Ameaças à Informação',
    bancaTag: 'FCC / Vunesp',
    options: [
      { letter: 'A', text: 'Keylogger.' },
      { letter: 'B', text: 'Screen-saver.' },
      { letter: 'C', text: 'Adware.' },
      { letter: 'D', text: 'Firewall.' },
      { letter: 'E', text: 'Spam.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'KEYLOGGER (do inglês key = tecla e logger = registrador) é um tipo de spyware encarregado de capturar os toques no teclado para roubar senhas e credenciais.',
    explanations: {
      A: 'CORRETA. Keylogger monitora e registra as teclas digitadas no teclado.',
      B: 'INCORRETA. Proteção de tela legítima.',
      C: 'INCORRETA. Adware exibe anúncios.',
      D: 'INCORRETA. Firewall é mecanismo de defesa.',
      E: 'INCORRETA. Spam é e-mail não solicitado.'
    }
  },
  {
    id: 'inf-q40',
    subjectId: 'informatica',
    topic: 'IA Generativa - Uso Ético e Segurança dos Dados',
    difficulty: 'Médio',
    statement: 'Ao utilizar ferramentas públicas de Inteligência Artificial Generativa para auxiliar na elaboração de pareceres técnicos no DETRAN-SP, a diretriz de segurança cibernética determina:',
    lawReference: 'Governança de Dados e Uso de IA na Gestão Pública',
    bancaTag: 'Avalia DETRAN-SP 2026',
    options: [
      { letter: 'A', text: 'Jamais inserir informações sigilosas, segredos de estado ou dados pessoais identificáveis cobertos pela LGPD nos prompts de IAs públicas.' },
      { letter: 'B', text: 'Enviar cópia do banco de dados completo do DETRAN para treinamento da IA.' },
      { letter: 'C', text: 'Publicar as respostas da IA diretamente sem revisão do servidor responsável.' },
      { letter: 'D', text: 'Usar apenas senhas de acesso de outros servidores.' },
      { letter: 'E', text: 'Desligar o antivírus durante o uso da IA.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Os dados digitados em plataformas de IA públicas podem ser incorporados aos bancos de dados de treinamento dos fornecedores. Portanto, é vedado o envio de dados sensíveis, sigilosos ou pessoais protegidos por lei.',
    explanations: {
      A: 'CORRETA. Proteção à privacidade, segredo de estado e cumprimento estrito da LGPD.',
      B: 'INCORRETA. Constitui vazamento massivo de dados e crime.',
      C: 'INCORRETA. O servidor responde pessoalmente pelos atos administrativos assinados.',
      D: 'INCORRETA. Crime de falsidade e violação de acesso.',
      E: 'INCORRETA. Exporia o computador a ataques.'
    }
  }
];
