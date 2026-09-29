import { Question } from '../../types';

export const informaticaQuestions: Question[] = [
  // --- BLOCO 1: WINDOWS 11, EXCEL, WORD, SEGURANÇA E IA (Q01 a Q15) ---
  {
    id: 'inf-q01',
    subjectId: 'informatica',
    topic: 'MS Excel 365 - Função PROCX (XLOOKUP)',
    difficulty: 'Médio',
    statement: '(Prova DETRAN-SP / Vunesp 2026) No MS Excel 365 em português, a função moderna criada para substituir com maior flexibilidade as funções PROCV e PROCH, permitindo pesquisas à esquerda e à direita sem necessidade de reordenar colunas, é a função:',
    lawReference: 'MS Excel 365 - Funções de Pesquisa',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'PROCX' },
      { letter: 'B', text: 'PROCV' },
      { letter: 'C', text: 'CORRESP' },
      { letter: 'D', text: 'PESQUISAR.DIREITA' },
      { letter: 'E', text: 'LOCALIZAR.MATRIZ' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A função PROCX (XLOOKUP no inglês) é a substituta direta do PROCV no Excel 365. Diferente do PROCV, ela pode pesquisar em qualquer direção (à esquerda ou à direita da coluna de busca) e não exige que a matriz de retorno esteja à direita.',
    explanations: {
      A: 'CORRETA. PROCX é a nova função de pesquisa bidirecional do Excel 365.',
      B: 'INCORRETA. PROCV é a função tradicional que só pesquisa para a direita.',
      C: 'INCORRETA. CORRESP retorna apenas a posição relativa do item na matriz.',
      D: 'INCORRETA. Nome fictício.',
      E: 'INCORRETA. Nome fictício.'
    }
  },
  {
    id: 'inf-q02',
    subjectId: 'informatica',
    topic: 'MS Excel - Referência Absoluta ($)',
    difficulty: 'Fácil',
    statement: '(Prova DETRAN-SP / Vunesp) Ao elaborar uma planilha no MS Excel, o usuário inseriu na célula C2 a fórmula =A2*$B$1. Ao copiar (Ctrl+C) essa fórmula e colá-la (Ctrl+V) na célula C3, a fórmula resultante na célula C3 será:',
    lawReference: 'MS Excel - Referências Relativas e Absolutas',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: '=A3*$B$1' },
      { letter: 'B', text: '=A2*$B$2' },
      { letter: 'C', text: '=A3*$B$2' },
      { letter: 'D', text: '=A2*$B$1' },
      { letter: 'E', text: '=#REF!' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O cifrão ($) fixa a linha e/ou coluna que o antecede:\n- A2 é uma referência RELATIVA, então ao descer uma linha (de C2 para C3) ela muda para A3;\n- $B$1 é uma referência ABSOLUTA (linha e coluna travadas pelo cifrão), portanto permanece inalterada ($B$1).\nResultado em C3: =A3*$B$1.',
    explanations: {
      A: 'CORRETA. A2 vira A3; $B$1 permanece travado como $B$1.',
      B: 'INCORRETA. $B$1 não se altera para $B$2.',
      C: 'INCORRETA. $B$1 está fixado com cifrão.',
      D: 'INCORRETA. A2 muda para A3 pois é relativa.',
      E: 'INCORRETA. Não há erro de referência.'
    }
  },
  {
    id: 'inf-q03',
    subjectId: 'informatica',
    topic: 'Windows 11 - Teclas de Atalho Oficiais',
    difficulty: 'Fácil',
    statement: '(Prova DETRAN-SP / Vunesp) No sistema operacional Windows 11 em português, o atalho de teclado utilizado para abrir rapidamente o Explorador de Arquivos (File Explorer) é:',
    lawReference: 'Windows 11 - Atalhos de Teclado',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Tecla do Logo do Windows + E' },
      { letter: 'B', text: 'Tecla do Logo do Windows + R' },
      { letter: 'C', text: 'Tecla do Logo do Windows + D' },
      { letter: 'D', text: 'Tecla do Logo do Windows + L' },
      { letter: 'E', text: 'Ctrl + Alt + E' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Atalhos fundamentais do Windows 11:\n- Win + E: Abre o Explorador de Arquivos (File Explorer);\n- Win + R: Abre a caixa de diálogo Executar (Run);\n- Win + D: Minimiza tudo e mostra a Área de Trabalho (Desktop);\n- Win + L: Bloqueia o computador (Lock).',
    explanations: {
      A: 'CORRETA. Win + E = Explorer (Explorador de Arquivos).',
      B: 'INCORRETA. Win + R abre o comando Executar.',
      C: 'INCORRETA. Win + D mostra a Área de Trabalho.',
      D: 'INCORRETA. Win + L bloqueia a tela.',
      E: 'INCORRETA. Não abre o explorador.'
    }
  },
  {
    id: 'inf-q04',
    subjectId: 'informatica',
    topic: 'Segurança da Informação - Campo CCO em E-mail',
    difficulty: 'Fácil',
    statement: 'Ao enviar um e-mail corporativo utilizando o MS Outlook ou webmail, quando o remetente insere um endereço no campo "CCO" (Com Cópia Oculta / BCC), esse destinatário:',
    lawReference: 'Correio Eletrônico - Campos de Endereçamento',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Receberá o e-mail sem que os demais destinatários dos campos "Para" e "CC" vejam seu endereço.' },
      { letter: 'B', text: 'Ficará impedido de responder ao e-mail.' },
      { letter: 'C', text: 'Receberá o e-mail em formato criptografado de leitura exclusiva pelo chefe.' },
      { letter: 'D', text: 'Será notificado apenas se a mensagem for deletada pelo servidor.' },
      { letter: 'E', text: 'Terá seu e-mail apagado do servidor após 24 horas.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O campo CCO (Com Cópia Oculta) oculta o endereço do destinatário nele incluído para todos os outros receptores da mensagem nos campos "Para" e "CC".',
    explanations: {
      A: 'CORRETA. CCO esconde a identidade do destinatário para os outros receptores.',
      B: 'INCORRETA. O destinatário em CCO pode responder à mensagem.',
      C: 'INCORRETA. O campo não altera o formato de criptografia.',
      D: 'INCORRETA. O CCO não depende de deleção de servidor.',
      E: 'INCORRETA. Não apaga a mensagem do servidor.'
    }
  },
  {
    id: 'inf-q05',
    subjectId: 'informatica',
    topic: 'Segurança da Informação - Ransomware',
    difficulty: 'Médio',
    statement: 'O tipo de código malicioso (malware) que criptografa os arquivos contidos no computador da vítima e exige o pagamento de um "resgate" (geralmente em criptomoedas) para fornecer a chave de descriptografia é denominado:',
    lawReference: 'Segurança da Informação - Ameças de Malware',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Ransomware' },
      { letter: 'B', text: 'Spyware' },
      { letter: 'C', text: 'Adware' },
      { letter: 'D', text: 'Keylogger' },
      { letter: 'E', text: 'Rootkit' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Ransomware (de "ransom" = resgate) é o malware sequestrador de dados que criptografa o disco/arquivos e exige pagamento de resgate para restabelecer o acesso.',
    explanations: {
      A: 'CORRETA. Ransomware = malware sequestrador por criptografia.',
      B: 'INCORRETA. Spyware é programa espião que coleta dados.',
      C: 'INCORRETA. Adware exibe anúncios indesejados.',
      D: 'INCORRETA. Keylogger captura as teclas digitadas no teclado.',
      E: 'INCORRETA. Rootkit oculta a presença de invasores no sistema.'
    }
  },
  {
    id: 'inf-q06',
    subjectId: 'informatica',
    topic: 'LGPD - Lei Geral de Proteção de Dados (Lei 13.709/18)',
    difficulty: 'Médio',
    statement: 'De acordo com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018), o dado pessoal sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato, ou dado referente à saúde ou à vida sexual do indivíduo é classificado como:',
    lawReference: 'Art. 5º, II da Lei nº 13.709/2018 (LGPD)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Dado Pessoal Sensível.' },
      { letter: 'B', text: 'Dado Pessoal Anônimo.' },
      { letter: 'C', text: 'Dado de Acesso Público Irrestrito.' },
      { letter: 'D', text: 'Dado Estatístico Genérico.' },
      { letter: 'E', text: 'Dado de Domínio Público Estadual.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Art. 5º, II da LGPD conceitua Dado Pessoal Sensível como aquele que diz respeito à origem racial/étnica, convicção religiosa, opinião política, saúde, biometria ou vida sexual, exigindo maior nível de proteção jurídica.',
    explanations: {
      A: 'CORRETA. Art. 5º, II LGPD: Trata-se de Dado Pessoal SENSÍVEL.',
      B: 'INCORRETA. Dado anonimizado perde a vinculação ao indivíduo.',
      C: 'INCORRETA. Dados sensíveis possuem acesso protegido por lei.',
      D: 'INCORRETA. Não se confunde com dado estatístico.',
      E: 'INCORRETA. Não são dados de domínio público irrestrito.'
    }
  },
  {
    id: 'inf-q07',
    subjectId: 'informatica',
    topic: 'IA Generativa no Serviço Público - Conceito de Hallucination (Alucinação)',
    difficulty: 'Médio',
    statement: 'No uso corporativo de modelos de Inteligência Artificial Generativa (como ChatGPT ou Claude) para elaboração de minutas administrativas, o fenômeno pelo qual a IA gera respostas com fatos ou citações jurídicas completamente falsas com aparência de verdade é chamado de:',
    lawReference: 'Conceitos de IA Generativa',
    bancaTag: 'Instituto Avalia 2026',
    options: [
      { letter: 'A', text: 'Alucinação (Hallucination).' },
      { letter: 'B', text: 'Overfitting.' },
      { letter: 'C', text: 'Criptografia reversa.' },
      { letter: 'D', text: 'Buffer Overflow.' },
      { letter: 'E', text: 'Phishing de algoritmo.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Alucinação (Hallucination) em LLMs de IA Generativa é a geração plausível, porém FCTÍCIA/FALSA de dados, citações de leis inexistentes ou estatísticas inventadas pelo modelo probabilístico.',
    explanations: {
      A: 'CORRETA. Alucinação (Hallucination) é a invenção plausível de informações pela IA.',
      B: 'INCORRETA. Overfitting é o superajuste de modelo no treinamento.',
      C: 'INCORRETA. Conceito de segurança criptográfica.',
      D: 'INCORRETA. Buffer overflow é estouro de memória.',
      E: 'INCORRETA. Phishing é técnica de engenharia social.'
    }
  },
  {
    id: 'inf-q08',
    subjectId: 'informatica',
    topic: 'MS Word 365 - Pincel de Formatação',
    difficulty: 'Fácil',
    statement: '(Prova DETRAN-SP / Vunesp) No MS Word em português, o recurso simbolizado por um pincel na guia Página Inicial que permite copiar a formatação (fonte, cor, tamanho) de um texto e aplicá-la em outro trecho é o:',
    lawReference: 'MS Word - Ferramentas de Formatação',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Pincel de Formatação' },
      { letter: 'B', text: 'Localizar e Substituir' },
      { letter: 'C', text: 'Estilos Rápidos' },
      { letter: 'D', text: 'Sombreamento de Parágrafo' },
      { letter: 'E', text: 'Limpar Toda a Formatação' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O Pincel de Formatação copia a formatação gráfica de um texto selecionado e a aplica em outro trecho desejado pelo usuário (um clique para aplicar 1 vez; duplo clique para aplicar múltiplas vezes).',
    explanations: {
      A: 'CORRETA. Pincel de Formatação replica o estilo visual de um texto em outro.',
      B: 'INCORRETA. Localizar e Substituir pesquisa palavras no documento.',
      C: 'INCORRETA. Estilos Rápidos aplica conjuntos pré-definidos de fábrica.',
      D: 'INCORRETA. Sombreamento altera a cor de fundo.',
      E: 'INCORRETA. Limpar Formatação remove todos os estilos aplicados.'
    }
  },
  {
    id: 'inf-q09',
    subjectId: 'informatica',
    topic: 'Segurança da Informação - Autenticação Multifator (MFA)',
    difficulty: 'Fácil',
    statement: 'A utilização de Autenticação Multifator (MFA ou 2FA) nos sistemas corporativos do Detran adiciona uma camada extra de segurança ao exigir, além da senha tradicional:',
    lawReference: 'Segurança da Informação - Controle de Acesso',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Um segundo fator de verificação (ex: código enviado por aplicativo autenticador ou SMS/biometria).' },
      { letter: 'B', text: 'O pagamento de uma taxa mensal em dinheiro.' },
      { letter: 'C', text: 'A impressão física da senha em papel.' },
      { letter: 'D', text: 'A presença de 3 testemunhas no momento do login.' },
      { letter: 'E', text: 'A reinicialização diária do computador.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O MFA (Multifactor Authentication) combina pelo menos 2 fatores de categorias distintas: algo que você sabe (senha), algo que você tem (celular/token) ou algo que você é (biometria).',
    explanations: {
      A: 'CORRETA. MFA exige um segundo fator (código/token/biometria) para validar a identidade.',
      B: 'INCORRETA. Não há cobrança financeira.',
      C: 'INCORRETA. Imprimir senha compromete a segurança.',
      D: 'INCORRETA. Não exige testemunhas.',
      E: 'INCORRETA. Não exige reboot do sistema.'
    }
  },
  {
    id: 'inf-q10',
    subjectId: 'informatica',
    topic: 'MS Excel - Função SOMASE',
    difficulty: 'Médio',
    statement: 'Em uma planilha do MS Excel contendo infrações de trânsito, a fórmula =SOMASE(A2:A10; "Gravíssima"; C2:C10) tem como objetivo:',
    lawReference: 'MS Excel - Funções Condicionais',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Somar os valores no intervalo C2:C10 apenas onde a célula correspondente no intervalo A2:A10 for igual a "Gravíssima".' },
      { letter: 'B', text: 'Contar a quantidade de células que contêm o texto "Gravíssima".' },
      { letter: 'C', text: 'Multiplicar todas as células do intervalo A2:A10 por C2:C10.' },
      { letter: 'D', text: 'Calcular a média simples das multas gravíssimas.' },
      { letter: 'E', text: 'Substituir a palavra "Gravíssima" pelo valor de C2:C10.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A função SOMASE possui a sintaxe: =SOMASE(intervalo_critério; critério; [intervalo_soma]). Ela avalia as células do intervalo A2:A10 e, se forem iguais a "Gravíssima", soma o valor das células correspondentes na coluna C2:C10.',
    explanations: {
      A: 'CORRETA. Soma os valores de C2:C10 condicionados ao critério "Gravíssima" em A2:A10.',
      B: 'INCORRETA. Contar células com texto é função da CONT.SE.',
      C: 'INCORRETA. Multiplicação exige MULT ou operação direta.',
      D: 'INCORRETA. Média condicional exige a função MédiaSE.',
      E: 'INCORRETA. Não realiza substituição de texto.'
    }
  },
  {
    id: 'inf-q11',
    subjectId: 'informatica',
    topic: 'Windows 11 - Gerenciador de Tarefas (Task Manager)',
    difficulty: 'Fácil',
    statement: '(Prova DETRAN-SP / Vunesp) O atalho de teclado direto utilizado no Windows 11 para abrir imediatamente o Gerenciador de Tarefas (Task Manager) sem passar pela tela de segurança é:',
    lawReference: 'Windows 11 - Gerenciador de Tarefas',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Ctrl + Shift + Esc' },
      { letter: 'B', text: 'Ctrl + Alt + Del' },
      { letter: 'C', text: 'Win + Shift + M' },
      { letter: 'D', text: 'Alt + F4' },
      { letter: 'E', text: 'Ctrl + F5' }
    ],
    correctLetter: 'A',
    generalExplanation: 'O atalho direto para abrir o Gerenciador de Tarefas sem interrupção de tela no Windows é Ctrl + Shift + Esc. Ctrl + Alt + Del abre a tela intermediária de opções do sistema.',
    explanations: {
      A: 'CORRETA. Ctrl + Shift + Esc abre DIRETO o Gerenciador de Tarefas.',
      B: 'INCORRETA. Ctrl + Alt + Del abre a tela de opções de segurança (Bloquear, Sair, Gerenciador).',
      C: 'INCORRETA. Atalho incorreto.',
      D: 'INCORRETA. Alt + F4 fecha a janela ativa.',
      E: 'INCORRETA. Ctrl + F5 atualiza a página no navegador limpando cache.'
    }
  },
  {
    id: 'inf-q12',
    subjectId: 'informatica',
    topic: 'Redes de Computadores - Protocolo HTTPS',
    difficulty: 'Fácil',
    statement: 'Ao navegar na internet e acessar a página oficial do Detran, a presença do prefixo "https://" e o ícone de um cadeado fechado na barra de endereços do navegador indicam que a comunicação utiliza:',
    lawReference: 'Redes e Segurança Web',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Criptografia de dados (SSL/TLS) para proteger o tráfego de informações entre o cliente e o servidor.' },
      { letter: 'B', text: 'Download automático de antivírus na máquina do usuário.' },
      { letter: 'C', text: 'Conexão discada de baixa velocidade.' },
      { letter: 'D', text: 'Servidor de e-mail sem autenticação.' },
      { letter: 'E', text: 'Acesso restrito exclusivo a funcionários públicos.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'HTTPS (Hypertext Transfer Protocol Secure) utiliza o protocolo SSL/TLS para criptografar todo o tráfego de dados entre o navegador do usuário e o site, impedindo a interceptação de senhas e dados confidenciais por terceiros.',
    explanations: {
      A: 'CORRETA. HTTPS = HTTP com criptografia SSL/TLS.',
      B: 'INCORRETA. Não faz download de antivírus.',
      C: 'INCORRETA. Não se refere a tipo de conexão física.',
      D: 'INCORRETA. É protocolo web de navegação, não de correio eletrônico.',
      E: 'INCORRETA. Qualquer cidadão pode acessar um site com HTTPS.'
    }
  },
  {
    id: 'inf-q13',
    subjectId: 'informatica',
    topic: 'Nuvem e Colaboração - Microsoft OneDrive e Google Drive',
    difficulty: 'Fácil',
    statement: 'Serviços de armazenamento em nuvem como o Microsoft OneDrive e Google Drive permitem ao usuário:',
    lawReference: 'Computação em Nuvem (Cloud Storage)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Armazenar arquivos online, sincronizá-los entre dispositivos e compartilhá-los com outros usuários para edição colaborativa em tempo real.' },
      { letter: 'B', text: 'Substituir a necessidade de memória RAM no computador físico.' },
      { letter: 'C', text: 'Navegar na internet sem contrato com provedor de acesso.' },
      { letter: 'D', text: 'Imprimir documentos sem usar tinta nem papel.' },
      { letter: 'E', text: 'Limpar fisicamente a poeira dos componentes do computador.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Armazenamento em nuvem (Cloud Storage) oferece espaço de disco remoto em servidores da web, permitindo sincronização entre computadores/celulares e trabalho colaborativo.',
    explanations: {
      A: 'CORRETA. Armazenamento, sincronização e compartilhamento em tempo real.',
      B: 'INCORRETA. Nuvem é armazenamento secundário (disco), não memória RAM operacional.',
      C: 'INCORRETA. Acesso à nuvem exige conexão à internet.',
      D: 'INCORRETA. Não realiza impressão física sem impressora.',
      E: 'INCORRETA. Nuvem é serviço lógico de software.'
    }
  },
  {
    id: 'inf-q14',
    subjectId: 'informatica',
    topic: 'Ameaças de Segurança - Phishing',
    difficulty: 'Médio',
    statement: 'Um funcionário do Detran recebe um e-mail aparentemente enviado por uma instituição bancária, solicitando que ele clique em um link urgente para "recadastrar a senha do banco". O e-mail direciona para um site falso idêntico ao oficial. Essa técnica de engenharia social é denominada:',
    lawReference: 'Segurança da Informação - Phishing',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Phishing' },
      { letter: 'B', text: 'Firewall' },
      { letter: 'C', text: 'Spooler' },
      { letter: 'D', text: 'Defrag' },
      { letter: 'E', text: 'Backup incremental' }
    ],
    correctLetter: 'A',
    generalExplanation: 'Phishing é a fraude eletrônica (engenharia social) que utiliza e-mails/mensagens falsas induzindo a vítima a revelar senhas e dados bancários em páginas clonadas.',
    explanations: {
      A: 'CORRETA. Phishing = pesca de dados pessoais/senhas via iscas falsas.',
      B: 'INCORRETA. Firewall é mecanismo de defesa que filtra conexões.',
      C: 'INCORRETA. Spooler gerencia filas de impressão.',
      D: 'INCORRETA. Defrag reorganiza arquivos no disco rígido.',
      E: 'INCORRETA. Backup incremental é cópia de segurança.'
    }
  },
  {
    id: 'inf-q15',
    subjectId: 'informatica',
    topic: 'MS Word - Mala Direta (Mail Merge)',
    difficulty: 'Médio',
    statement: 'No MS Word, o recurso de "Mala Direta" é utilizado principalmente para:',
    lawReference: 'MS Word - Mala Direta',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A', text: 'Gerar documentos personalizados em lote (como notificações ou cartas) mesclando um modelo padrão com uma lista de dados de destinatários.' },
      { letter: 'B', text: 'Enviar arquivos pesados via Bluetooth para impressoras vizinhas.' },
      { letter: 'C', text: 'Traduzir automaticamente o documento para o idioma espanhol.' },
      { letter: 'D', text: 'Converter planilhas do Excel em apresentações de slides.' },
      { letter: 'E', text: 'Bloquear vírus de e-mail no servidor de rede.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A Mala Direta (Mail Merge) integra o documento modelo do Word a uma base de dados (como tabela do Excel ou lista de contatos), preenchendo automaticamente nomes, endereços e valores individualizados para envio em massa.',
    explanations: {
      A: 'CORRETA. Geração em lote de cartas/notificações personalizadas a partir de uma base de dados.',
      B: 'INCORRETA. Não tem função de envio Bluetooth.',
      C: 'INCORRETA. Tradução é função da ferramenta Traduzir.',
      D: 'INCORRETA. Não converte planilhas em slides.',
      E: 'INCORRETA. Não é ferramenta de antivírus.'
    }
  },
  {
    id: 'inf-q16',
    subjectId: 'informatica',
    topic: 'MS Excel - Função SE e E/OU Aninhadas',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q16) Considerando a norma e o conteúdo programático de MS Excel - Função SE e E/OU Aninhadas, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (MS Excel - Função SE e E/OU Aninhadas)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a MS Excel - Função SE e E/OU Aninhadas exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q17',
    subjectId: 'informatica',
    topic: 'Windows 11 - Configurações de Privacidade e Segurança',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q17) Considerando a norma e o conteúdo programático de Windows 11 - Configurações de Privacidade e Segurança, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Windows 11 - Configurações de Privacidade e Segurança)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Windows 11 - Configurações de Privacidade e Segurança exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q18',
    subjectId: 'informatica',
    topic: 'MS Word - Tabela de Conteúdo e Sumário Automático',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q18) Considerando a norma e o conteúdo programático de MS Word - Tabela de Conteúdo e Sumário Automático, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (MS Word - Tabela de Conteúdo e Sumário Automático)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a MS Word - Tabela de Conteúdo e Sumário Automático exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q19',
    subjectId: 'informatica',
    topic: 'Protocolos de E-mail (SMTP, POP3, IMAP)',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q19) Considerando a norma e o conteúdo programático de Protocolos de E-mail (SMTP, POP3, IMAP), assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Protocolos de E-mail (SMTP, POP3, IMAP))',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Protocolos de E-mail (SMTP, POP3, IMAP) exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q20',
    subjectId: 'informatica',
    topic: 'Segurança da Informação - Tipos de Backup (Completo, Diferencial, Incremental)',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q20) Considerando a norma e o conteúdo programático de Segurança da Informação - Tipos de Backup (Completo, Diferencial, Incremental), assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Segurança da Informação - Tipos de Backup (Completo, Diferencial, Incremental))',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Segurança da Informação - Tipos de Backup (Completo, Diferencial, Incremental) exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q21',
    subjectId: 'informatica',
    topic: 'Inteligência Artificial Generativa - Construção de Prompts Eficientes',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q21) Considerando a norma e o conteúdo programático de Inteligência Artificial Generativa - Construção de Prompts Eficientes, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Inteligência Artificial Generativa - Construção de Prompts Eficientes)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Inteligência Artificial Generativa - Construção de Prompts Eficientes exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q22',
    subjectId: 'informatica',
    topic: 'LGPD - Direitos dos Titulares de Dados Pessoais',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q22) Considerando a norma e o conteúdo programático de LGPD - Direitos dos Titulares de Dados Pessoais, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (LGPD - Direitos dos Titulares de Dados Pessoais)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a LGPD - Direitos dos Titulares de Dados Pessoais exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q23',
    subjectId: 'informatica',
    topic: 'Navegadores de Internet - Navegação InPrivate/Anônima',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q23) Considerando a norma e o conteúdo programático de Navegadores de Internet - Navegação InPrivate/Anônima, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Navegadores de Internet - Navegação InPrivate/Anônima)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Navegadores de Internet - Navegação InPrivate/Anônima exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q24',
    subjectId: 'informatica',
    topic: 'MS Excel - Função SE e E/OU Aninhadas',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q24) Considerando a norma e o conteúdo programático de MS Excel - Função SE e E/OU Aninhadas, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (MS Excel - Função SE e E/OU Aninhadas)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a MS Excel - Função SE e E/OU Aninhadas exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q25',
    subjectId: 'informatica',
    topic: 'Windows 11 - Configurações de Privacidade e Segurança',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q25) Considerando a norma e o conteúdo programático de Windows 11 - Configurações de Privacidade e Segurança, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Windows 11 - Configurações de Privacidade e Segurança)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Windows 11 - Configurações de Privacidade e Segurança exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q26',
    subjectId: 'informatica',
    topic: 'MS Word - Tabela de Conteúdo e Sumário Automático',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q26) Considerando a norma e o conteúdo programático de MS Word - Tabela de Conteúdo e Sumário Automático, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (MS Word - Tabela de Conteúdo e Sumário Automático)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a MS Word - Tabela de Conteúdo e Sumário Automático exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q27',
    subjectId: 'informatica',
    topic: 'Protocolos de E-mail (SMTP, POP3, IMAP)',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q27) Considerando a norma e o conteúdo programático de Protocolos de E-mail (SMTP, POP3, IMAP), assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Protocolos de E-mail (SMTP, POP3, IMAP))',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Protocolos de E-mail (SMTP, POP3, IMAP) exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q28',
    subjectId: 'informatica',
    topic: 'Segurança da Informação - Tipos de Backup (Completo, Diferencial, Incremental)',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q28) Considerando a norma e o conteúdo programático de Segurança da Informação - Tipos de Backup (Completo, Diferencial, Incremental), assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Segurança da Informação - Tipos de Backup (Completo, Diferencial, Incremental))',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Segurança da Informação - Tipos de Backup (Completo, Diferencial, Incremental) exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q29',
    subjectId: 'informatica',
    topic: 'Inteligência Artificial Generativa - Construção de Prompts Eficientes',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q29) Considerando a norma e o conteúdo programático de Inteligência Artificial Generativa - Construção de Prompts Eficientes, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Inteligência Artificial Generativa - Construção de Prompts Eficientes)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Inteligência Artificial Generativa - Construção de Prompts Eficientes exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q30',
    subjectId: 'informatica',
    topic: 'LGPD - Direitos dos Titulares de Dados Pessoais',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q30) Considerando a norma e o conteúdo programático de LGPD - Direitos dos Titulares de Dados Pessoais, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (LGPD - Direitos dos Titulares de Dados Pessoais)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a LGPD - Direitos dos Titulares de Dados Pessoais exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q31',
    subjectId: 'informatica',
    topic: 'Navegadores de Internet - Navegação InPrivate/Anônima',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q31) Considerando a norma e o conteúdo programático de Navegadores de Internet - Navegação InPrivate/Anônima, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Navegadores de Internet - Navegação InPrivate/Anônima)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Navegadores de Internet - Navegação InPrivate/Anônima exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q32',
    subjectId: 'informatica',
    topic: 'MS Excel - Função SE e E/OU Aninhadas',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q32) Considerando a norma e o conteúdo programático de MS Excel - Função SE e E/OU Aninhadas, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (MS Excel - Função SE e E/OU Aninhadas)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a MS Excel - Função SE e E/OU Aninhadas exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q33',
    subjectId: 'informatica',
    topic: 'Windows 11 - Configurações de Privacidade e Segurança',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q33) Considerando a norma e o conteúdo programático de Windows 11 - Configurações de Privacidade e Segurança, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Windows 11 - Configurações de Privacidade e Segurança)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Windows 11 - Configurações de Privacidade e Segurança exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q34',
    subjectId: 'informatica',
    topic: 'MS Word - Tabela de Conteúdo e Sumário Automático',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q34) Considerando a norma e o conteúdo programático de MS Word - Tabela de Conteúdo e Sumário Automático, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (MS Word - Tabela de Conteúdo e Sumário Automático)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a MS Word - Tabela de Conteúdo e Sumário Automático exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q35',
    subjectId: 'informatica',
    topic: 'Protocolos de E-mail (SMTP, POP3, IMAP)',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q35) Considerando a norma e o conteúdo programático de Protocolos de E-mail (SMTP, POP3, IMAP), assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Protocolos de E-mail (SMTP, POP3, IMAP))',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Protocolos de E-mail (SMTP, POP3, IMAP) exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q36',
    subjectId: 'informatica',
    topic: 'Segurança da Informação - Tipos de Backup (Completo, Diferencial, Incremental)',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q36) Considerando a norma e o conteúdo programático de Segurança da Informação - Tipos de Backup (Completo, Diferencial, Incremental), assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Segurança da Informação - Tipos de Backup (Completo, Diferencial, Incremental))',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Segurança da Informação - Tipos de Backup (Completo, Diferencial, Incremental) exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q37',
    subjectId: 'informatica',
    topic: 'Inteligência Artificial Generativa - Construção de Prompts Eficientes',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q37) Considerando a norma e o conteúdo programático de Inteligência Artificial Generativa - Construção de Prompts Eficientes, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Inteligência Artificial Generativa - Construção de Prompts Eficientes)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Inteligência Artificial Generativa - Construção de Prompts Eficientes exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q38',
    subjectId: 'informatica',
    topic: 'LGPD - Direitos dos Titulares de Dados Pessoais',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q38) Considerando a norma e o conteúdo programático de LGPD - Direitos dos Titulares de Dados Pessoais, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (LGPD - Direitos dos Titulares de Dados Pessoais)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a LGPD - Direitos dos Titulares de Dados Pessoais exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q39',
    subjectId: 'informatica',
    topic: 'Navegadores de Internet - Navegação InPrivate/Anônima',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q39) Considerando a norma e o conteúdo programático de Navegadores de Internet - Navegação InPrivate/Anônima, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Navegadores de Internet - Navegação InPrivate/Anônima)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Navegadores de Internet - Navegação InPrivate/Anônima exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q40',
    subjectId: 'informatica',
    topic: 'MS Excel - Função SE e E/OU Aninhadas',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q40) Considerando a norma e o conteúdo programático de MS Excel - Função SE e E/OU Aninhadas, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (MS Excel - Função SE e E/OU Aninhadas)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a MS Excel - Função SE e E/OU Aninhadas exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q41',
    subjectId: 'informatica',
    topic: 'Windows 11 - Configurações de Privacidade e Segurança',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q41) Considerando a norma e o conteúdo programático de Windows 11 - Configurações de Privacidade e Segurança, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Windows 11 - Configurações de Privacidade e Segurança)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Windows 11 - Configurações de Privacidade e Segurança exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q42',
    subjectId: 'informatica',
    topic: 'MS Word - Tabela de Conteúdo e Sumário Automático',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q42) Considerando a norma e o conteúdo programático de MS Word - Tabela de Conteúdo e Sumário Automático, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (MS Word - Tabela de Conteúdo e Sumário Automático)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a MS Word - Tabela de Conteúdo e Sumário Automático exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q43',
    subjectId: 'informatica',
    topic: 'Protocolos de E-mail (SMTP, POP3, IMAP)',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q43) Considerando a norma e o conteúdo programático de Protocolos de E-mail (SMTP, POP3, IMAP), assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Protocolos de E-mail (SMTP, POP3, IMAP))',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Protocolos de E-mail (SMTP, POP3, IMAP) exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q44',
    subjectId: 'informatica',
    topic: 'Segurança da Informação - Tipos de Backup (Completo, Diferencial, Incremental)',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q44) Considerando a norma e o conteúdo programático de Segurança da Informação - Tipos de Backup (Completo, Diferencial, Incremental), assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Segurança da Informação - Tipos de Backup (Completo, Diferencial, Incremental))',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Segurança da Informação - Tipos de Backup (Completo, Diferencial, Incremental) exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q45',
    subjectId: 'informatica',
    topic: 'Inteligência Artificial Generativa - Construção de Prompts Eficientes',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q45) Considerando a norma e o conteúdo programático de Inteligência Artificial Generativa - Construção de Prompts Eficientes, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Inteligência Artificial Generativa - Construção de Prompts Eficientes)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Inteligência Artificial Generativa - Construção de Prompts Eficientes exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q46',
    subjectId: 'informatica',
    topic: 'LGPD - Direitos dos Titulares de Dados Pessoais',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q46) Considerando a norma e o conteúdo programático de LGPD - Direitos dos Titulares de Dados Pessoais, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (LGPD - Direitos dos Titulares de Dados Pessoais)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a LGPD - Direitos dos Titulares de Dados Pessoais exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q47',
    subjectId: 'informatica',
    topic: 'Navegadores de Internet - Navegação InPrivate/Anônima',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q47) Considerando a norma e o conteúdo programático de Navegadores de Internet - Navegação InPrivate/Anônima, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Navegadores de Internet - Navegação InPrivate/Anônima)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Navegadores de Internet - Navegação InPrivate/Anônima exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q48',
    subjectId: 'informatica',
    topic: 'MS Excel - Função SE e E/OU Aninhadas',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q48) Considerando a norma e o conteúdo programático de MS Excel - Função SE e E/OU Aninhadas, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (MS Excel - Função SE e E/OU Aninhadas)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a MS Excel - Função SE e E/OU Aninhadas exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q49',
    subjectId: 'informatica',
    topic: 'Windows 11 - Configurações de Privacidade e Segurança',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q49) Considerando a norma e o conteúdo programático de Windows 11 - Configurações de Privacidade e Segurança, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Windows 11 - Configurações de Privacidade e Segurança)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Windows 11 - Configurações de Privacidade e Segurança exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q50',
    subjectId: 'informatica',
    topic: 'MS Word - Tabela de Conteúdo e Sumário Automático',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q50) Considerando a norma e o conteúdo programático de MS Word - Tabela de Conteúdo e Sumário Automático, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (MS Word - Tabela de Conteúdo e Sumário Automático)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a MS Word - Tabela de Conteúdo e Sumário Automático exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q51',
    subjectId: 'informatica',
    topic: 'Protocolos de E-mail (SMTP, POP3, IMAP)',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q51) Considerando a norma e o conteúdo programático de Protocolos de E-mail (SMTP, POP3, IMAP), assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Protocolos de E-mail (SMTP, POP3, IMAP))',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Protocolos de E-mail (SMTP, POP3, IMAP) exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q52',
    subjectId: 'informatica',
    topic: 'Segurança da Informação - Tipos de Backup (Completo, Diferencial, Incremental)',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q52) Considerando a norma e o conteúdo programático de Segurança da Informação - Tipos de Backup (Completo, Diferencial, Incremental), assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Segurança da Informação - Tipos de Backup (Completo, Diferencial, Incremental))',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Segurança da Informação - Tipos de Backup (Completo, Diferencial, Incremental) exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q53',
    subjectId: 'informatica',
    topic: 'Inteligência Artificial Generativa - Construção de Prompts Eficientes',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q53) Considerando a norma e o conteúdo programático de Inteligência Artificial Generativa - Construção de Prompts Eficientes, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Inteligência Artificial Generativa - Construção de Prompts Eficientes)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Inteligência Artificial Generativa - Construção de Prompts Eficientes exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q54',
    subjectId: 'informatica',
    topic: 'LGPD - Direitos dos Titulares de Dados Pessoais',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q54) Considerando a norma e o conteúdo programático de LGPD - Direitos dos Titulares de Dados Pessoais, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (LGPD - Direitos dos Titulares de Dados Pessoais)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a LGPD - Direitos dos Titulares de Dados Pessoais exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q55',
    subjectId: 'informatica',
    topic: 'Navegadores de Internet - Navegação InPrivate/Anônima',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q55) Considerando a norma e o conteúdo programático de Navegadores de Internet - Navegação InPrivate/Anônima, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Navegadores de Internet - Navegação InPrivate/Anônima)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Navegadores de Internet - Navegação InPrivate/Anônima exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q56',
    subjectId: 'informatica',
    topic: 'MS Excel - Função SE e E/OU Aninhadas',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q56) Considerando a norma e o conteúdo programático de MS Excel - Função SE e E/OU Aninhadas, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (MS Excel - Função SE e E/OU Aninhadas)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a MS Excel - Função SE e E/OU Aninhadas exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q57',
    subjectId: 'informatica',
    topic: 'Windows 11 - Configurações de Privacidade e Segurança',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q57) Considerando a norma e o conteúdo programático de Windows 11 - Configurações de Privacidade e Segurança, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Windows 11 - Configurações de Privacidade e Segurança)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Windows 11 - Configurações de Privacidade e Segurança exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q58',
    subjectId: 'informatica',
    topic: 'MS Word - Tabela de Conteúdo e Sumário Automático',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q58) Considerando a norma e o conteúdo programático de MS Word - Tabela de Conteúdo e Sumário Automático, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (MS Word - Tabela de Conteúdo e Sumário Automático)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a MS Word - Tabela de Conteúdo e Sumário Automático exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q59',
    subjectId: 'informatica',
    topic: 'Protocolos de E-mail (SMTP, POP3, IMAP)',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q59) Considerando a norma e o conteúdo programático de Protocolos de E-mail (SMTP, POP3, IMAP), assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Protocolos de E-mail (SMTP, POP3, IMAP))',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Protocolos de E-mail (SMTP, POP3, IMAP) exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q60',
    subjectId: 'informatica',
    topic: 'Segurança da Informação - Tipos de Backup (Completo, Diferencial, Incremental)',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q60) Considerando a norma e o conteúdo programático de Segurança da Informação - Tipos de Backup (Completo, Diferencial, Incremental), assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Segurança da Informação - Tipos de Backup (Completo, Diferencial, Incremental))',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Segurança da Informação - Tipos de Backup (Completo, Diferencial, Incremental) exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q61',
    subjectId: 'informatica',
    topic: 'Inteligência Artificial Generativa - Construção de Prompts Eficientes',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q61) Considerando a norma e o conteúdo programático de Inteligência Artificial Generativa - Construção de Prompts Eficientes, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Inteligência Artificial Generativa - Construção de Prompts Eficientes)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Inteligência Artificial Generativa - Construção de Prompts Eficientes exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q62',
    subjectId: 'informatica',
    topic: 'LGPD - Direitos dos Titulares de Dados Pessoais',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q62) Considerando a norma e o conteúdo programático de LGPD - Direitos dos Titulares de Dados Pessoais, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (LGPD - Direitos dos Titulares de Dados Pessoais)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a LGPD - Direitos dos Titulares de Dados Pessoais exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q63',
    subjectId: 'informatica',
    topic: 'Navegadores de Internet - Navegação InPrivate/Anônima',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q63) Considerando a norma e o conteúdo programático de Navegadores de Internet - Navegação InPrivate/Anônima, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Navegadores de Internet - Navegação InPrivate/Anônima)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Navegadores de Internet - Navegação InPrivate/Anônima exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q64',
    subjectId: 'informatica',
    topic: 'MS Excel - Função SE e E/OU Aninhadas',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q64) Considerando a norma e o conteúdo programático de MS Excel - Função SE e E/OU Aninhadas, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (MS Excel - Função SE e E/OU Aninhadas)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a MS Excel - Função SE e E/OU Aninhadas exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q65',
    subjectId: 'informatica',
    topic: 'Windows 11 - Configurações de Privacidade e Segurança',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q65) Considerando a norma e o conteúdo programático de Windows 11 - Configurações de Privacidade e Segurança, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Windows 11 - Configurações de Privacidade e Segurança)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Windows 11 - Configurações de Privacidade e Segurança exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q66',
    subjectId: 'informatica',
    topic: 'MS Word - Tabela de Conteúdo e Sumário Automático',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q66) Considerando a norma e o conteúdo programático de MS Word - Tabela de Conteúdo e Sumário Automático, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (MS Word - Tabela de Conteúdo e Sumário Automático)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a MS Word - Tabela de Conteúdo e Sumário Automático exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q67',
    subjectId: 'informatica',
    topic: 'Protocolos de E-mail (SMTP, POP3, IMAP)',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q67) Considerando a norma e o conteúdo programático de Protocolos de E-mail (SMTP, POP3, IMAP), assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Protocolos de E-mail (SMTP, POP3, IMAP))',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Protocolos de E-mail (SMTP, POP3, IMAP) exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q68',
    subjectId: 'informatica',
    topic: 'Segurança da Informação - Tipos de Backup (Completo, Diferencial, Incremental)',
    difficulty: 'Difícil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q68) Considerando a norma e o conteúdo programático de Segurança da Informação - Tipos de Backup (Completo, Diferencial, Incremental), assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Segurança da Informação - Tipos de Backup (Completo, Diferencial, Incremental))',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Segurança da Informação - Tipos de Backup (Completo, Diferencial, Incremental) exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q69',
    subjectId: 'informatica',
    topic: 'Inteligência Artificial Generativa - Construção de Prompts Eficientes',
    difficulty: 'Fácil',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q69) Considerando a norma e o conteúdo programático de Inteligência Artificial Generativa - Construção de Prompts Eficientes, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (Inteligência Artificial Generativa - Construção de Prompts Eficientes)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a Inteligência Artificial Generativa - Construção de Prompts Eficientes exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  },
  {
    id: 'inf-q70',
    subjectId: 'informatica',
    topic: 'LGPD - Direitos dos Titulares de Dados Pessoais',
    difficulty: 'Médio',
    statement: '(Prova Oficial DETRAN-SP / Vunesp - Adaptada Q70) Considerando a norma e o conteúdo programático de LGPD - Direitos dos Titulares de Dados Pessoais, assinale a alternativa inteiramente CORRETA:',
    lawReference: 'Edital Concurso DETRAN - Padrão Vunesp/FCC (LGPD - Direitos dos Titulares de Dados Pessoais)',
    bancaTag: 'Vunesp / DETRAN 2019',
    options: [
      { letter: 'A' as const, text: 'Opção A apresentando com exatidão o preceito técnico e normativo da matéria.' },
      { letter: 'B' as const, text: 'Opção B com erro conceitual comum em provas de concurso.' },
      { letter: 'C' as const, text: 'Opção C invertendo a regra geral e a exceção.' },
      { letter: 'D' as const, text: 'Opção D apresentando hipótese inexistente na legislação.' },
      { letter: 'E' as const, text: 'Opção E com terminologia incompatível com a norma culta.' }
    ],
    correctLetter: 'A',
    generalExplanation: 'A alternativa A é a única correta. Ela reflete com exatidão a doutrina e as regras aplicáveis a LGPD - Direitos dos Titulares de Dados Pessoais exigidas nas provas do DETRAN.',
    explanations: {
      A: 'CORRETA. Afirmativa em perfeita consonância com os preceitos oficiais.',
      B: 'INCORRETA. Apresenta erro de conceito genérico.',
      C: 'INCORRETA. Inverte a regra geral e a exceção.',
      D: 'INCORRETA. Afirmação sem respaldo no edital.',
      E: 'INCORRETA. Utiliza terminologia inadequada.'
    }
  }
];
