import json
import os

questions = [
  # ----------------------------------------------------
  # Theme 1: Windows 11 & Ferramentas do Sistema (q01 - q07)
  # ----------------------------------------------------
  {
    "id": "inf-q01",
    "subjectId": "informatica",
    "topic": "Windows 11 - Atalhos de Teclado e Explorador de Arquivos",
    "difficulty": "Fácil",
    "statement": "(Prova DETRAN-SP / Instituto Avalia 2026) Durante a rotina de atendimento no DETRAN-SP, um agente necessita abrir de forma rápida a janela do Explorador de Arquivos (File Explorer) do Windows 11 para localizar pastas de processos administrativos. O atalho de teclado oficial para essa ação direta é:",
    "lawReference": "Windows 11 - Navegação e Atalhos",
    "bancaTag": "Instituto Avalia / DETRAN-SP 2026",
    "options": [
      { "letter": "A", "text": "Tecla do Logo do Windows + E" },
      { "letter": "B", "text": "Tecla do Logo do Windows + R" },
      { "letter": "C", "text": "Tecla do Logo do Windows + D" },
      { "letter": "D", "text": "Tecla do Logo do Windows + L" },
      { "letter": "E", "text": "Ctrl + Shift + E" }
    ],
    "correctLetter": "A",
    "generalExplanation": "No Windows 11, o atalho Tecla do Logo do Windows + E (E de Explorer) abre imediatamente uma nova janela do Explorador de Arquivos.",
    "explanations": {
      "A": "CORRETA. Tecla do Windows + E é o atalho universal do Windows para abrir o Explorador de Arquivos (File Explorer).",
      "B": "INCORRETA. Win + R abre a caixa de diálogo Executar (Run).",
      "C": "INCORRETA. Win + D minimiza ou restaura todas as janelas, exibindo a Área de Trabalho (Desktop).",
      "D": "INCORRETA. Win + L bloqueia imediatamente a sessão do usuário (Lock) ou alterna contas.",
      "E": "INCORRETA. Combinação inexistente para abertura do Explorador de Arquivos."
    }
  },
  {
    "id": "inf-q02",
    "subjectId": "informatica",
    "topic": "Windows 11 - Histórico da Área de Transferência",
    "difficulty": "Médio",
    "statement": "(Prova DETRAN-SP / Vunesp) Um servidor precisa copiar múltiplos números de Renavam de uma lista e colá-los em campos distintos de um sistema corporativo. No Windows 11, o recurso que armazena múltiplos itens copiados recentemente (textos e imagens) e permite selecionar qual colar é acessado pelo atalho:",
    "lawReference": "Windows 11 - Recursos de Produtividade",
    "bancaTag": "Vunesp / DETRAN 2019",
    "options": [
      { "letter": "A", "text": "Ctrl + Shift + V" },
      { "letter": "B", "text": "Tecla do Logo do Windows + V" },
      { "letter": "C", "text": "Alt + Tab" },
      { "letter": "D", "text": "Tecla do Logo do Windows + H" },
      { "letter": "E", "text": "Ctrl + Alt + V" }
    ],
    "correctLetter": "B",
    "generalExplanation": "A tecla Win + V abre o painel do Histórico da Área de Transferência (Clipboard History) no Windows 10 e 11, permitindo colar itens copiados anteriormente e fixar itens frequentes.",
    "explanations": {
      "A": "INCORRETA. Ctrl + Shift + V em muitos navegadores e aplicativos cola texto sem formatação, mas não abre o painel histórico do sistema operacional.",
      "B": "CORRETA. Tecla do Windows + V abre o Histórico da Área de Transferência do Windows 11.",
      "C": "INCORRETA. Alt + Tab alterna entre janelas abertas e tarefas ativas.",
      "D": "INCORRETA. Win + H ativa a ferramenta de Digitação por Voz (ditado).",
      "E": "INCORRETA. Ctrl + Alt + V é utilizado em alguns aplicativos (como Excel) para abrir a caixa de diálogo Colar Especial."
    }
  },
  {
    "id": "inf-q03",
    "subjectId": "informatica",
    "topic": "Windows 11 - Gerenciador de Tarefas",
    "difficulty": "Médio",
    "statement": "(Prova DETRAN-SP / FCC) Quando um aplicativo trava e deixa de responder no Windows 11, o operador pode acessar DIRETAMENTE o Gerenciador de Tarefas (Task Manager) para finalizar o processo sem passar por telas intermediárias de segurança através do atalho:",
    "lawReference": "Windows 11 - Diagnóstico e Desempenho",
    "bancaTag": "FCC / DETRAN",
    "options": [
      { "letter": "A", "text": "Ctrl + Alt + Del" },
      { "letter": "B", "text": "Alt + F4" },
      { "letter": "C", "text": "Ctrl + Shift + Esc" },
      { "letter": "D", "text": "Tecla do Logo do Windows + X" },
      { "letter": "E", "text": "Ctrl + Alt + Tab" }
    ],
    "correctLetter": "C",
    "generalExplanation": "Ctrl + Shift + Esc é a combinação direta que invoca instantaneamente o Gerenciador de Tarefas no Windows. O atalho Ctrl + Alt + Del abre a tela de segurança (com opções de Bloquear, Trocar Usuário, Sair e Gerenciador).",
    "explanations": {
      "A": "INCORRETA. Ctrl + Alt + Del abre a tela de opções de segurança do sistema, exigindo um clique adicional para abrir o gerenciador.",
      "B": "INCORRETA. Alt + F4 tenta fechar a janela ativa; se o aplicativo estiver travado, pode não responder.",
      "C": "CORRETA. Ctrl + Shift + Esc abre o Gerenciador de Tarefas de forma direta e imediata.",
      "D": "INCORRETA. Win + X abre o Menu de Link Rápido (menu do botão Iniciar).",
      "E": "INCORRETA. Ctrl + Alt + Tab mantém abertas as miniaturas de alternância de janelas."
    }
  },
  {
    "id": "inf-q04",
    "subjectId": "informatica",
    "topic": "Windows 11 - Ferramenta de Captura de Tela",
    "difficulty": "Fácil",
    "statement": "(Prova DETRAN-SP / Instituto Avalia 2026) Para registrar a tela de uma autuação de trânsito recortando apenas uma área retangular específica com a Ferramenta de Captura no Windows 11, o usuário deve acionar a combinação de teclas:",
    "lawReference": "Windows 11 - Ferramentas de Sistema",
    "bancaTag": "Instituto Avalia / DETRAN-SP 2026",
    "options": [
      { "letter": "A", "text": "Tecla do Logo do Windows + P" },
      { "letter": "B", "text": "Ctrl + Print Screen" },
      { "letter": "C", "text": "Alt + Shift + C" },
      { "letter": "D", "text": "Tecla do Logo do Windows + Shift + S" },
      { "letter": "E", "text": "Tecla do Logo do Windows + G" }
    ],
    "correctLetter": "D",
    "generalExplanation": "Win + Shift + S abre a barra superior de captura de tela no Windows 10 e 11, permitindo seleção retangular, de forma livre, de janela ou tela inteira.",
    "explanations": {
      "A": "INCORRETA. Win + P abre o painel de projeção de vídeo (Telas duplicadas/estendidas).",
      "B": "INCORRETA. Print Screen tradicional captura a tela inteira para o clipboard sem a barra seletiva.",
      "C": "INCORRETA. Atalho inexistente para captura.",
      "D": "CORRETA. Win + Shift + S aciona o menu da Ferramenta de Captura para seleção de recorte.",
      "E": "INCORRETA. Win + G abre a Xbox Game Bar."
    }
  },
  {
    "id": "inf-q05",
    "subjectId": "informatica",
    "topic": "Windows 11 - Sistemas de Arquivos e Armazenamento",
    "difficulty": "Difícil",
    "statement": "(Prova DETRAN-SP / Vunesp) Na instalação padrão do Windows 11 em unidades de armazenamento interno (SSD ou HD), o sistema de arquivos adotado nativamente, que oferece suporte a listas de controle de acesso (ACL) para permissões de segurança de arquivos e pastas, criptografia e volumes de grande capacidade, é o:",
    "lawReference": "Sistemas Operacionais - Armazenamento e Permissões",
    "bancaTag": "Vunesp / DETRAN 2019",
    "options": [
      { "letter": "A", "text": "FAT32" },
      { "letter": "B", "text": "exFAT" },
      { "letter": "C", "text": "ext4" },
      { "letter": "D", "text": "ISO 9660" },
      { "letter": "E", "text": "NTFS" }
    ],
    "correctLetter": "E",
    "generalExplanation": "O NTFS (New Technology File System) é o sistema de arquivos proprietário padrão da Microsoft para as edições modernas do Windows, oferecendo permissões de segurança por usuário, compactação nativa e suporte a arquivos maiores que 4 GB (limitação do FAT32).",
    "explanations": {
      "A": "INCORRETA. FAT32 possui limite de 4 GB por arquivo individual e não suporta permissões de segurança granulares (ACL).",
      "B": "INCORRETA. exFAT é voltado para memórias flash e pendrives, mas não é o padrão de instalação do Windows 11 com ACLs corporativas.",
      "C": "INCORRETA. ext4 é o sistema de arquivos padrão do kernel Linux.",
      "D": "INCORRETA. ISO 9660 é o padrão para mídias óticas (CD-ROM).",
      "E": "CORRETA. NTFS é o sistema de arquivos padrão do Windows com suporte a controle de acesso e segurança."
    }
  },
  {
    "id": "inf-q06",
    "subjectId": "informatica",
    "topic": "Windows 11 - Multitarefa e Layouts de Ajuste (Snap Layouts)",
    "difficulty": "Médio",
    "statement": "(Prova DETRAN-SP / Cebraspe) No Windows 11, o recurso 'Snap Layouts' (Layouts de Ajuste) permite organizar de forma rápida várias janelas abertas em diferentes quadrantes da tela. Para acionar os modelos visuais de layout de ajuste pelo teclado, o usuário deve selecionar a janela ativa e pressionar:",
    "lawReference": "Windows 11 - Gerenciamento de Janelas",
    "bancaTag": "Cebraspe / DETRAN",
    "options": [
      { "letter": "A", "text": "Tecla do Logo do Windows + Z" },
      { "letter": "B", "text": "Tecla do Logo do Windows + Tab" },
      { "letter": "C", "text": "Tecla do Logo do Windows + Home" },
      { "letter": "D", "text": "Alt + Espaço" },
      { "letter": "E", "text": "Ctrl + Alt + Seta para Cima" }
    ],
    "correctLetter": "A",
    "generalExplanation": "O atalho Win + Z é a novidade introduzida no Windows 11 que abre a sobreposição visual dos Snap Layouts no canto da janela ativa, permitindo escolher a disposição (2, 3 ou 4 quadrantes).",
    "explanations": {
      "A": "CORRETA. Win + Z ativa a sobreposição de caixas dos Snap Layouts no Windows 11.",
      "B": "INCORRETA. Win + Tab abre a Visão de Tarefas (Task View) e as Áreas de Trabalho Virtuais.",
      "C": "INCORRETA. Win + Home minimiza todas as janelas, exceto a janela ativa.",
      "D": "INCORRETA. Alt + Espaço abre o menu de contexto do sistema da janela ativa (Restaurar, Mover, Minimizar, Maximizar, Fechar).",
      "E": "INCORRETA. Atalho frequentemente associado a drivers de vídeo para girar tela, não aos Snap Layouts."
    }
  },
  {
    "id": "inf-q07",
    "subjectId": "informatica",
    "topic": "Windows 11 - Painel de Configurações do Sistema",
    "difficulty": "Fácil",
    "statement": "(Prova DETRAN-SP / Instituto Avalia 2026) Para acessar rapidamente a tela principal de 'Configurações' (Settings) do Windows 11, onde é possível gerenciar redes, contas de usuário, impressoras e privacidade, o atalho de teclado padrão é:",
    "lawReference": "Windows 11 - Painel de Controle e Configurações",
    "bancaTag": "Instituto Avalia / DETRAN-SP 2026",
    "options": [
      { "letter": "A", "text": "Tecla do Logo do Windows + K" },
      { "letter": "B", "text": "Tecla do Logo do Windows + I" },
      { "letter": "C", "text": "Tecla do Logo do Windows + U" },
      { "letter": "D", "text": "Tecla do Logo do Windows + P" },
      { "letter": "E", "text": "Tecla do Logo do Windows + A" }
    ],
    "correctLetter": "B",
    "generalExplanation": "Win + I (I de Informações/Instalações/Settings) abre diretamente o aplicativo moderno Configurações do Windows 10 e 11.",
    "explanations": {
      "A": "INCORRETA. Win + K abre o menu de conexão sem fio (Cast/Transmitir).",
      "B": "CORRETA. Win + I abre o aplicativo Configurações (Settings).",
      "C": "INCORRETA. Win + U abre a seção de Acessibilidade dentro das configurações.",
      "D": "INCORRETA. Win + P abre o menu Projetar.",
      "E": "INCORRETA. Win + A abre o painel Configurações Rápidas (Wi-Fi, Bluetooth, volume)."
    }
  },

  # ----------------------------------------------------
  # Theme 2: Microsoft Word 365 / 2019 (q08 - q14)
  # ----------------------------------------------------
  {
    "id": "inf-q08",
    "subjectId": "informatica",
    "topic": "MS Word 365 - Pincel de Formatação",
    "difficulty": "Médio",
    "statement": "(Prova DETRAN-SP / Vunesp) Um funcionário do DETRAN-SP deseja replicar a formatação de um parágrafo (fonte, tamanho, cor e recuo) para múltiplos títulos distribuídos ao longo de um extenso relatório no MS Word 2019/365. Para manter a ferramenta Pincel de Formatação ativa para várias aplicações sucessivas, ele deve:",
    "lawReference": "MS Word - Ferramentas de Edição",
    "bancaTag": "Vunesp / DETRAN 2019",
    "options": [
      { "letter": "A", "text": "Pressionar a tecla Shift enquanto dá um clique simples no ícone do Pincel." },
      { "letter": "B", "text": "Clicar com o botão direito do mouse sobre o ícone do Pincel e escolher 'Fixar Formato'." },
      { "letter": "C", "text": "Dar um duplo clique (dois cliques rápidos) sobre o botão do Pincel de Formatação." },
      { "letter": "D", "text": "Manter a tecla Ctrl pressionada durante a seleção dos novos textos." },
      { "letter": "E", "text": "Salvar o parágrafo de origem como macro executável do Visual Basic." }
    ],
    "correctLetter": "C",
    "generalExplanation": "No MS Word e Excel, um clique simples no Pincel de Formatação permite aplicar o estilo uma única vez; dar um duplo clique mantém o pincel ativado para múltiplas aplicações até que o usuário pressione Esc ou clique novamente no botão.",
    "explanations": {
      "A": "INCORRETA. Shift + clique não ativa o modo contínuo do pincel.",
      "B": "INCORRETA. O botão direito não possui essa opção.",
      "C": "CORRETA. O duplo clique no ícone do Pincel de Formatação permite aplicá-lo repetidas vezes em trechos distintos.",
      "D": "INCORRETA. Ctrl serve para selecionar trechos não contíguos de texto, mas não trava o pincel.",
      "E": "INCORRETA. Criar macro é desnecessário e incorreto para essa função básica nativa."
    }
  },
  {
    "id": "inf-q09",
    "subjectId": "informatica",
    "topic": "MS Word 365 - Quebras de Seção e Orientação de Página",
    "difficulty": "Difícil",
    "statement": "(Prova DETRAN-SP / FCC) Em um documento oficial do DETRAN-SP formatado no MS Word em orientação Retrato (vertical), o redator necessita inserir uma página central em orientação Paisagem (horizontal) contendo um mapa de fluxo de trânsito, mantendo as páginas anteriores e posteriores em formato Retrato. O procedimento correto requer a inserção de:",
    "lawReference": "MS Word - Layout e Estrutura de Documentos",
    "bancaTag": "FCC / DETRAN",
    "options": [
      { "letter": "A", "text": "Quebra de Página Simples antes e depois do mapa." },
      { "letter": "B", "text": "Quebra de Linha Manual (Shift + Enter)." },
      { "letter": "C", "text": "Quebra de Coluna através da guia Inserir." },
      { "letter": "D", "text": "Quebras de Seção (Próxima Página) antes e depois da referida página." },
      { "letter": "E", "text": "Caixa de texto girada em 90 graus com quebra automática justa." }
    ],
    "correctLetter": "D",
    "generalExplanation": "Para aplicar formatações de página distintas (orientação retrato/paisagem, margens ou cabeçalhos independentes) dentro de um mesmo arquivo do Word, é obrigatório isolar o trecho por meio de Quebras de Seção.",
    "explanations": {
      "A": "INCORRETA. A quebra de página apenas salta para a próxima folha, mas mantém as configurações de página e orientação de todo o documento.",
      "B": "INCORRETA. Quebra de linha manual apenas desce a linha sem iniciar novo parágrafo.",
      "C": "INCORRETA. Quebra de coluna é utilizada na divisão de texto em colunas jornalísticas.",
      "D": "CORRETA. As Quebras de Seção (Próxima Página) criam seções independentes, permitindo alterar a orientação apenas da seção desejada.",
      "E": "INCORRETA. Girar caixa de texto é uma solução paliativa e imprópria para formatação de página inteira."
    }
  },
  {
    "id": "inf-q10",
    "subjectId": "informatica",
    "topic": "MS Word 365 - Recurso de Mala Direta (Mail Merge)",
    "difficulty": "Médio",
    "statement": "(Prova DETRAN-SP / Instituto Avalia 2026) O setor de notificações do DETRAN precisa emitir 1.500 comunicados padronizados para proprietários de veículos autuados, onde o modelo da carta é idêntico para todos, alterando-se apenas o nome do condutor, placa do veículo e valor da multa a partir de uma planilha do Excel. A funcionalidade do MS Word indicada para essa tarefa em lote é:",
    "lawReference": "MS Word - Correspondências e Mala Direta",
    "bancaTag": "Instituto Avalia / DETRAN-SP 2026",
    "options": [
      { "letter": "A", "text": "AutoTexto e Partes Rápidas." },
      { "letter": "B", "text": "Localizar e Substituir Avançado." },
      { "letter": "C", "text": "Controle de Alterações e Comentários." },
      { "letter": "D", "text": "Vincular Objeto OLE em tabela dinâmica." },
      { "letter": "E", "text": "Mala Direta (Iniciar Mala Direta / Mail Merge)." }
    ],
    "correctLetter": "E",
    "generalExplanation": "A Mala Direta (Mail Merge) integra um documento modelo a uma fonte de dados externa (Excel, Access ou catálogo), gerando cartas, etiquetas ou e-mails personalizados em lote.",
    "explanations": {
      "A": "INCORRETA. AutoTexto insere blocos de texto pré-formatados manualmente.",
      "B": "INCORRETA. Localizar e Substituir altera termos já digitados, não automatiza correspondências em massa com registros externos.",
      "C": "INCORRETA. Controle de alterações registra revisões feitas no texto.",
      "D": "INCORRETA. OLE vincula objetos entre softwares, mas não gera documentos personalizados em lote.",
      "E": "CORRETA. A Mala Direta é o recurso desenhado exatamente para mesclar modelos com bancos de dados de destinatários."
    }
  },
  {
    "id": "inf-q11",
    "subjectId": "informatica",
    "topic": "MS Word 365 - Sumário Automático (Tabela de Conteúdo)",
    "difficulty": "Fácil",
    "statement": "(Prova DETRAN-SP / Vunesp) Para que o MS Word gere um Sumário Automático (Tabela de Conteúdo) funcional e atualizável com números de página corretos, é pré-requisito indispensável que o usuário:",
    "lawReference": "MS Word - Referências e Sumários",
    "bancaTag": "Vunesp / DETRAN 2019",
    "options": [
      { "letter": "A", "text": "Aplique os Estilos de Título predefinidos (ex: Título 1, Título 2, Título 3) aos tópicos do documento." },
      { "letter": "B", "text": "Insira uma nota de rodapé no início de cada capítulo com hiperlink externo." },
      { "letter": "C", "text": "Formate todas as palavras-chave do documento em negrito e itálico simultaneamente." },
      { "letter": "D", "text": "Numere manualmente cada linha do documento a partir da guia Layout." },
      { "letter": "E", "text": "Converta o arquivo para o formato RTF antes de criar o sumário." }
    ],
    "correctLetter": "A",
    "generalExplanation": "O gerador de sumários do Word localiza no texto os parágrafos marcados com os Estilos estruturais de cabeçalho (Título 1, Título 2, etc.) e monta a hierarquia de páginas automaticamente.",
    "explanations": {
      "A": "CORRETA. A aplicação de Estilos de Título (Heading 1, 2, 3) é a base para o sumário automático.",
      "B": "INCORRETA. Notas de rodapé destinam-se a comentários e referências bibliográficas no final da folha.",
      "C": "INCORRETA. Negrito e itálico são formatações visuais que não definem nível hierárquico estrutural.",
      "D": "INCORRETA. A numeração de linhas não tem relação com sumário automático.",
      "E": "INCORRETA. O formato RTF reduz funcionalidades do Word."
    }
  },
  {
    "id": "inf-q12",
    "subjectId": "informatica",
    "topic": "MS Word 365 - Controle de Alterações",
    "difficulty": "Médio",
    "statement": "(Prova DETRAN-SP / Cebraspe) Na elaboração conjunta de uma minuta de portaria no DETRAN-SP, os advogados utilizaram a ferramenta 'Controlar Alterações' (Track Changes) da guia Revisão. Essa ferramenta tem por finalidade:",
    "lawReference": "MS Word - Revisão e Colaboração",
    "bancaTag": "Cebraspe / DETRAN",
    "options": [
      { "letter": "A", "text": "Bloquear o arquivo com criptografia de ponta a ponta impedindo a visualização por estagiários." },
      { "letter": "B", "text": "Registrar visualmente adições, exclusões e modificações de formatação no texto, permitindo ao autor aceitá-las ou rejeitá-las." },
      { "letter": "C", "text": "Substituir palavras com erros ortográficos sem avisar o operador do sistema." },
      { "letter": "D", "text": "Publicar automaticamente a versão final no Diário Oficial do Estado de São Paulo." },
      { "letter": "E", "text": "Impedir que impressões físicas sejam realizadas sem autorização da chefia." }
    ],
    "correctLetter": "B",
    "generalExplanation": "O recurso Controlar Alterações marca todas as edições feitas no documento (inserções, deleções e formatações), permitindo posterior análise e aprovação/rejeição pelo revisor principal.",
    "explanations": {
      "A": "INCORRETA. A ferramenta não se confunde com bloqueio por senha ou criptografia.",
      "B": "CORRETA. O Controle de Alterações documenta todas as modificações para validação pontual (Aceitar/Rejeitar).",
      "C": "INCORRETA. A autocorreção é que cuida de digitação rápida, não o controle de alterações.",
      "D": "INCORRETA. O Word não faz publicação automática em órgãos externos.",
      "E": "INCORRETA. Não se trata de bloqueio de spooler de impressão."
    }
  },
  {
    "id": "inf-q13",
    "subjectId": "informatica",
    "topic": "MS Word 365 - Atalhos de Teclado Oficiais",
    "difficulty": "Fácil",
    "statement": "(Prova DETRAN-SP / Vunesp) Ao redigir um parecer no MS Word 2019/365 configurado em português do Brasil, o atalho de teclado que executa a função de 'Salvar' o arquivo atual em disco é:",
    "lawReference": "MS Word - Atalhos de Teclado",
    "bancaTag": "Vunesp / DETRAN 2019",
    "options": [
      { "letter": "A", "text": "Ctrl + S" },
      { "letter": "B", "text": "Ctrl + G" },
      { "letter": "C", "text": "Ctrl + B" },
      { "letter": "D", "text": "Ctrl + A" },
      { "letter": "E", "text": "Ctrl + L" }
    ],
    "correctLetter": "C",
    "generalExplanation": "Pegadinha clássica de concursos na versão em português do Word: Ctrl + B salva o documento (B de 'graBar'/Salvar). Ctrl + S aplica Sublinhado. Ctrl + L abre o Localizar.",
    "explanations": {
      "A": "INCORRETA. No Word em português, Ctrl + S aplica estilo Sublinhado (no inglês seria Save).",
      "B": "INCORRETA. No Word em português, Ctrl + G alinha o texto à direita.",
      "C": "CORRETA. Ctrl + B é o comando padrão de Salvar no MS Word em português.",
      "D": "INCORRETA. Ctrl + A abre o comando 'Abrir documento' na versão em português.",
      "E": "INCORRETA. Ctrl + L abre a ferramenta Localizar (em inglês seria Ctrl+F)."
    }
  },
  {
    "id": "inf-q14",
    "subjectId": "informatica",
    "topic": "MS Word 365 - Localizar e Substituir Avançado",
    "difficulty": "Difícil",
    "statement": "(Prova DETRAN-SP / FCC) No MS Word, a caixa de diálogo 'Localizar e Substituir' permite buscar não apenas palavras comuns, mas também marcas de formatação e caracteres especiais. O código especial utilizado no campo Localizar para encontrar uma 'Quebra de Parágrafo' é:",
    "lawReference": "MS Word - Edição Avançada",
    "bancaTag": "FCC / DETRAN",
    "options": [
      { "letter": "A", "text": "^t" },
      { "letter": "B", "text": "^b" },
      { "letter": "C", "text": "^l" },
      { "letter": "D", "text": "^p" },
      { "letter": "E", "text": "^s" }
    ],
    "correctLetter": "D",
    "generalExplanation": "No recurso Localizar e Substituir do Word, o caractere circunflexo seguido de 'p' (^p) representa o caractere invisível de quebra de parágrafo (Enter). ^t representa tabulação e ^l quebra de linha manual.",
    "explanations": {
      "A": "INCORRETA. ^t representa um caractere de Tabulação (Tab).",
      "B": "INCORRETA. ^b representa quebra de seção no Word.",
      "C": "INCORRETA. ^l (L minúsculo) representa Quebra de Linha Manual (Shift + Enter).",
      "D": "CORRETA. ^p representa Quebra de Parágrafo (Paragraph break / tecla Enter).",
      "E": "INCORRETA. ^s representa espaço não separável."
    }
  },

  # ----------------------------------------------------
  # Theme 3: MS Excel - Fórmulas Básicas e Funções Condicionais (q15 - q21)
  # ----------------------------------------------------
  {
    "id": "inf-q15",
    "subjectId": "informatica",
    "topic": "MS Excel - Referências Relativas e Absolutas ($)",
    "difficulty": "Fácil",
    "statement": "(Prova DETRAN-SP / Vunesp) Em uma planilha do MS Excel, um agente inseriu na célula D2 a fórmula =B2*$C$1 para calcular o valor de uma multa com desconto fixado em C1. Ao copiar a célula D2 e colá-la na célula D4, a fórmula resultante na célula D4 será:",
    "lawReference": "MS Excel - Referenciamento de Células",
    "bancaTag": "Vunesp / DETRAN 2019",
    "options": [
      { "letter": "A", "text": "=B4*$C$3" },
      { "letter": "B", "text": "=B2*$C$1" },
      { "letter": "C", "text": "=D4*$C$1" },
      { "letter": "D", "text": "=B4*C3" },
      { "letter": "E", "text": "=B4*$C$1" }
    ],
    "correctLetter": "E",
    "generalExplanation": "B2 é referência relativa; ao descer duas linhas (de D2 para D4), B2 transforma-se em B4. $C$1 possui cifrão travando linha e coluna (absoluta), permanecendo exatamente $C$1. Logo, em D4 teremos =B4*$C$1.",
    "explanations": {
      "A": "INCORRETA. $C$1 não se altera para $C$3 pois está fixada com cifrão.",
      "B": "INCORRETA. B2 é relativa e deve ser deslocada duas linhas para baixo, virando B4.",
      "C": "INCORRETA. A coluna referenciada na fórmula é B, não D.",
      "D": "INCORRETA. Os cifrões de $C$1 não desaparecem na cópia.",
      "E": "CORRETA. B2 muda para B4 (relativa) e $C$1 permanece inalterada (absoluta)."
    }
  },
  {
    "id": "inf-q16",
    "subjectId": "informatica",
    "topic": "MS Excel - Função SE com Função E Aninhada",
    "difficulty": "Médio",
    "statement": "(Prova DETRAN-SP / Instituto Avalia 2026) Em uma planilha de controle de candidatos à CNH no MS Excel, a célula A2 contém a nota da prova teórica (valor 8) e a célula B2 contém a frequência às aulas (valor 70%). Foi inserida na célula C2 a fórmula:\n=SE(E(A2>=7; B2>=75%); \"Apto\"; \"Inapto\")\nO resultado retornado na célula C2 será:",
    "lawReference": "MS Excel - Funções Lógicas",
    "bancaTag": "Instituto Avalia / DETRAN-SP 2026",
    "options": [
      { "letter": "A", "text": "Inapto" },
      { "letter": "B", "text": "Apto" },
      { "letter": "C", "text": "#VALOR!" },
      { "letter": "D", "text": "FALSO" },
      { "letter": "E", "text": "#N/D" }
    ],
    "correctLetter": "A",
    "generalExplanation": "A função E(A2>=7; B2>=75%) avalia se ambas as condições são verdadeiras. A2>=7 (8>=7) é VERDADEIRO, mas B2>=75% (70%>=75%) é FALSO. Como uma condição falhou, o resultado de E(...) é FALSO. A função SE então retorna seu terceiro argumento: 'Inapto'.",
    "explanations": {
      "A": "CORRETA. A condição E requer ambos os critérios verdadeiros; como a frequência (70%) foi inferior a 75%, o resultado é 'Inapto'.",
      "B": "INCORRETA. Retornaria 'Apto' somente se a frequência também atingisse 75% ou mais.",
      "C": "INCORRETA. Não há incompatibilidade de tipos de dados geradora de #VALOR!.",
      "D": "INCORRETA. A fórmula define strings explícitas de saída ('Apto' ou 'Inapto'), não o valor booleano puro.",
      "E": "INCORRETA. #N/D é erro de pesquisa/busca, inexistente nessa estrutura lógica."
    }
  },
  {
    "id": "inf-q17",
    "subjectId": "informatica",
    "topic": "MS Excel - Função SOMASE",
    "difficulty": "Médio",
    "statement": "(Prova DETRAN-SP / Vunesp) Em uma planilha do MS Excel com registros de fiscalização de trânsito, a coluna B lista o tipo da infração ('Média', 'Grave', 'Gravíssima') e a coluna E lista o valor cobrado em reais (R$). Para calcular o valor financeiro total arrecadado exclusivamente com as infrações 'Gravíssima', a fórmula correta é:",
    "lawReference": "MS Excel - Funções Condicionais",
    "bancaTag": "Vunesp / DETRAN 2019",
    "options": [
      { "letter": "A", "text": "=CONT.SE(B2:B50; \"Gravíssima\"; E2:E50)" },
      { "letter": "B", "text": "=SOMASE(B2:B50; \"Gravíssima\"; E2:E50)" },
      { "letter": "C", "text": "=SOMASE(E2:E50; \"Gravíssima\"; B2:B50)" },
      { "letter": "D", "text": "=SOMA(B2:B50=\"Gravíssima\" * E2:E50)" },
      { "letter": "E", "text": "=TOTAL.SE(\"Gravíssima\"; B2:B50; E2:E50)" }
    ],
    "correctLetter": "B",
    "generalExplanation": "A sintaxe oficial do SOMASE é: =SOMASE(intervalo_critério; critérios; [intervalo_soma]). Logo, avalia-se a coluna das infrações (B2:B50), com critério 'Gravíssima', somando os valores correspondentes em E2:E50.",
    "explanations": {
      "A": "INCORRETA. CONT.SE conta quantidade de ocorrências e aceita apenas 2 argumentos.",
      "B": "CORRETA. Sintaxe correta: =SOMASE(intervalo_critério; critério; intervalo_soma).",
      "C": "INCORRETA. Os intervalos estão invertidos (tentando comparar texto na coluna de valores).",
      "D": "INCORRETA. Sintaxe inválida no Excel sem operação matricial explícita.",
      "E": "INCORRETA. A função 'TOTAL.SE' inexiste no Excel."
    }
  },
  {
    "id": "inf-q18",
    "subjectId": "informatica",
    "topic": "MS Excel - Funções de Contagem (CONT.VALORES vs CONT.NÚM)",
    "difficulty": "Fácil",
    "statement": "(Prova DETRAN-SP / FCC) Para contar quantas células em um intervalo (A1:A30) contêm qualquer tipo de informação preenchida (incluindo textos, números, datas ou erros), desconsiderando apenas as células totalmente vazias, deve-se empregar a função:",
    "lawReference": "MS Excel - Funções Estatísticas",
    "bancaTag": "FCC / DETRAN",
    "options": [
      { "letter": "A", "text": "CONT.NÚM" },
      { "letter": "B", "text": "CONTAR.VAZIO" },
      { "letter": "C", "text": "CONT.VALORES" },
      { "letter": "D", "text": "CONT.CÉLULA" },
      { "letter": "E", "text": "SOMA" }
    ],
    "correctLetter": "C",
    "generalExplanation": "CONT.VALORES conta todas as células não vazias em um intervalo. Já CONT.NÚM conta exclusivamente células com valores numéricos ou datas válidas.",
    "explanations": {
      "A": "INCORRETA. CONT.NÚM conta apenas células que contêm números, ignorando textos.",
      "B": "INCORRETA. CONTAR.VAZIO conta exatamente as células em branco.",
      "C": "CORRETA. CONT.VALORES (COUNTA) calcula o número de células não vazias em um intervalo.",
      "D": "INCORRETA. Função inexistente no pacote básico de fórmulas do Excel.",
      "E": "INCORRETA. SOMA adiciona valores numéricos, não conta quantidade de células preenchidas."
    }
  },
  {
    "id": "inf-q19",
    "subjectId": "informatica",
    "topic": "MS Excel - Precedência de Operadores Matemáticos",
    "difficulty": "Médio",
    "statement": "(Prova DETRAN-SP / Vunesp) Considere a fórmula inserida na célula A1 de uma planilha do MS Excel:\n=10 + 2 * 3 ^ 2 - 8 / 4\nSeguindo a ordem padrão de precedência aritmética adotada pelo Excel, o resultado numérico gerado na célula A1 será:",
    "lawReference": "MS Excel - Operadores e Precedência",
    "bancaTag": "Vunesp / DETRAN 2019",
    "options": [
      { "letter": "A", "text": "106" },
      { "letter": "B", "text": "34" },
      { "letter": "C", "text": "48" },
      { "letter": "D", "text": "26" },
      { "letter": "E", "text": "18" }
    ],
    "correctLetter": "D",
    "generalExplanation": "Ordem de precedência: 1º Potenciação (3^2 = 9); 2º Multiplicação e Divisão (2 * 9 = 18 e 8 / 4 = 2); 3º Adição e Subtração da esquerda para a direita (10 + 18 - 2 = 28 - 2 = 26).",
    "explanations": {
      "A": "INCORRETA. Ocorria caso a soma inicial (10+2=12) fosse calculada antes da potenciação.",
      "B": "INCORRETA. Cálculo aritmético incorreto.",
      "C": "INCORRETA. Desrespeita a regra de precedência matemática.",
      "D": "CORRETA. 3^2=9 -> 2*9=18 -> 8/4=2 -> 10+18-2 = 26.",
      "E": "INCORRETA. Resultado incorreto."
    }
  },
  {
    "id": "inf-q20",
    "subjectId": "informatica",
    "topic": "MS Excel - Função MAIOR vs MÁXIMO",
    "difficulty": "Médio",
    "statement": "(Prova DETRAN-SP / Instituto Avalia 2026) Em uma lista com as pontuações de 50 candidatos em um processo seletivo do DETRAN no intervalo B2:B51, o examinador precisa identificar exatamente o 3º maior valor de pontuação. A fórmula correta para essa finalidade é:",
    "lawReference": "MS Excel - Funções Estatísticas de Posição",
    "bancaTag": "Instituto Avalia / DETRAN-SP 2026",
    "options": [
      { "letter": "A", "text": "=MÁXIMO(B2:B51; 3)" },
      { "letter": "B", "text": "=TERCEIRO.MAIOR(B2:B51)" },
      { "letter": "C", "text": "=ORDEM.MAIOR(B2:B51; 3)" },
      { "letter": "D", "text": "=POSIÇÃO.MÁXIMA(B2:B51; 3)" },
      { "letter": "E", "text": "=MAIOR(B2:B51; 3)" }
    ],
    "correctLetter": "E",
    "generalExplanation": "A função MAIOR(matriz; k) retorna o k-ésimo maior valor em um conjunto de dados. Para o 3º maior, usa-se =MAIOR(B2:B51; 3). A função MÁXIMO retorna apenas o primeiro maior absoluto.",
    "explanations": {
      "A": "INCORRETA. A função MÁXIMO compara argumentos individuais e não aceita parâmetro de posição ordinal k.",
      "B": "INCORRETA. Nome fictício de função.",
      "C": "INCORRETA. ORDEM retorna a classificação ordinal de um número, não seu valor.",
      "D": "INCORRETA. Nome fictício de função.",
      "E": "CORRETA. =MAIOR(intervalo; k) retorna o k-ésimo maior valor (no caso, k=3)."
    }
  },
  {
    "id": "inf-q21",
    "subjectId": "informatica",
    "topic": "MS Excel - Função SE com Função OU",
    "difficulty": "Médio",
    "statement": "(Prova DETRAN-SP / Cebraspe) Na triagem de atendimento presencial de um posto do Poupatempo/DETRAN, a célula A1 armazena a condição do cidadão ('Geral' ou 'Idoso') e a célula B1 armazena se é 'Gestante' ('Sim' ou 'Não'). A fórmula para conceder 'Prioridade' se qualquer uma das condições especiais for atendida é expressa corretamente por:",
    "lawReference": "MS Excel - Lógica Booleana",
    "bancaTag": "Cebraspe / DETRAN",
    "options": [
      { "letter": "A", "text": "=SE(OU(A1=\"Idoso\"; B1=\"Sim\"); \"Prioridade\"; \"Normal\")" },
      { "letter": "B", "text": "=SE(E(A1=\"Idoso\"; B1=\"Sim\"); \"Prioridade\"; \"Normal\")" },
      { "letter": "C", "text": "=OU(SE(A1=\"Idoso\"); SE(B1=\"Sim\"); \"Prioridade\")" },
      { "letter": "D", "text": "=SE(A1=\"Idoso\" + B1=\"Sim\"; \"Prioridade\"; \"Normal\")" },
      { "letter": "E", "text": "=CONDICIONAL(A1=\"Idoso\" OU B1=\"Sim\"; \"Prioridade\")" }
    ],
    "correctLetter": "A",
    "generalExplanation": "A função OU retorna VERDADEIRO se pelo menos uma das condições for verdadeira. Assim, =SE(OU(A1=\"Idoso\"; B1=\"Sim\"); \"Prioridade\"; \"Normal\") garante atendimento prioritário se for idoso ou gestante.",
    "explanations": {
      "A": "CORRETA. A função OU aninhada ao SE retorna 'Prioridade' caso qualquer uma das condições seja verdadeira.",
      "B": "INCORRETA. A função E exigiria que a pessoa fosse simultaneamente idosa E gestante para ter prioridade.",
      "C": "INCORRETA. Estrutura de sintaxe invertida e inválida no Excel.",
      "D": "INCORRETA. Operador '+' não substitui o conector OU dessa forma em fórmulas padrão.",
      "E": "INCORRETA. Não existe a função CONDICIONAL no Excel."
    }
  },

  # ----------------------------------------------------
  # Theme 4: MS Excel - Pesquisa, Matrizes, Tabela Dinâmica e Erros (q22 - q28)
  # ----------------------------------------------------
  {
    "id": "inf-q22",
    "subjectId": "informatica",
    "topic": "MS Excel 365 - Diferencial da Função PROCX (XLOOKUP)",
    "difficulty": "Médio",
    "statement": "(Prova DETRAN-SP / Instituto Avalia 2026) Uma das maiores inovações trazidas pelo MS Excel 365 foi a introdução da função PROCX (XLOOKUP), criada para substituir as limitações históricas da função PROCV. Uma vantagem EXCLUSIVA da função PROCX em relação ao PROCV tradicional é:",
    "lawReference": "MS Excel 365 - Novas Funções de Pesquisa",
    "bancaTag": "Instituto Avalia / DETRAN-SP 2026",
    "options": [
      { "letter": "A", "text": "Funcionar apenas em planilhas salvas na nuvem com formato XLSX." },
      { "letter": "B", "text": "Permitir pesquisar dados à esquerda da coluna de pesquisa sem exigir reordenação da tabela." },
      { "letter": "C", "text": "Exigir obrigatoriamente que a primeira coluna esteja classificada em ordem alfabética estrita." },
      { "letter": "D", "text": "Calcular automaticamente juros compostos para valores não encontrados." },
      { "letter": "E", "text": "Substituir a necessidade de memória RAM no processamento de dados." }
    ],
    "correctLetter": "B",
    "generalExplanation": "O PROCV tradicional tem a limitação de apenas pesquisar valores na primeira coluna à esquerda e retornar dados das colunas à direita. O PROCX supera isso permitindo buscas em qualquer sentido (esquerda/direita/cima/baixo) e traz tratamento nativo para erros.",
    "explanations": {
      "A": "INCORRETA. PROCX funciona em arquivos locais ou em nuvem no Excel 365.",
      "B": "CORRETA. O PROCX é bidirecional e pode retornar valores situados à esquerda da coluna de busca, ao contrário do PROCV.",
      "C": "INCORRETA. PROCX faz correspondência exata por padrão e não exige ordenação prévia da matriz.",
      "D": "INCORRETA. PROCX é função de busca e referência, não de matemática financeira.",
      "E": "INCORRETA. Afirmação sem fundamento técnico sobre hardware."
    }
  },
  {
    "id": "inf-q23",
    "subjectId": "informatica",
    "topic": "MS Excel - Diagnóstico de Erros Comuns (#N/D)",
    "difficulty": "Médio",
    "statement": "(Prova DETRAN-SP / Vunesp) Ao utilizar uma função de busca como PROCV ou CORRESP em uma base de dados de veículos do DETRAN, a planilha retornou o erro '#N/D'. Esse código de erro específico indica que:",
    "lawReference": "MS Excel - Tratamento de Erros em Fórmulas",
    "bancaTag": "Vunesp / DETRAN 2019",
    "options": [
      { "letter": "A", "text": "Ocorreu uma tentativa de divisão por zero na fórmula." },
      { "letter": "B", "text": "O nome da função foi digitado com erro de ortografia." },
      { "letter": "C", "text": "O valor procurado pela função não foi encontrado na matriz de pesquisa (Não Disponível)." },
      { "letter": "D", "text": "A célula contém um tipo de dado incompatível, como tentar somar texto com número." },
      { "letter": "E", "text": "A largura da coluna é insuficiente para exibir o número digitado." }
    ],
    "correctLetter": "C",
    "generalExplanation": "#N/D significa 'Não Disponível' (ou #N/A no inglês). É gerado quando uma função de pesquisa não localiza o argumento procurado no intervalo especificado.",
    "explanations": {
      "A": "INCORRETA. Divisão por zero gera o erro #DIV/0!.",
      "B": "INCORRETA. Nome de função incorreto gera o erro #NOME?.",
      "C": "CORRETA. #N/D (Não Disponível) indica que o valor procurado não existe na matriz pesquisada.",
      "D": "INCORRETA. Tipos de dados incompatíveis geram o erro #VALOR!.",
      "E": "INCORRETA. Coluna estreita exibe caracteres sustenido em sequência (#####)."
    }
  },
  {
    "id": "inf-q24",
    "subjectId": "informatica",
    "topic": "MS Excel - Diagnóstico de Erros Comuns (#REF!)",
    "difficulty": "Médio",
    "statement": "(Prova DETRAN-SP / FCC) Em uma planilha do MS Excel, um agente notou que uma célula que anteriormente continha a fórmula =SOMA(A1; C1) passou subitamente a exibir o erro '#REF!'. A causa mais comum para o surgimento desse erro é:",
    "lawReference": "MS Excel - Erros de Referência",
    "bancaTag": "FCC / DETRAN",
    "options": [
      { "letter": "A", "text": "A memória do computador atingiu o limite de capacidade de processamento." },
      { "letter": "B", "text": "A célula foi bloqueada por um administrador de segurança do Windows." },
      { "letter": "C", "text": "Foi inserida uma fórmula com mais de 255 caracteres." },
      { "letter": "D", "text": "Uma coluna ou linha referenciada diretamente na fórmula foi excluída fisicamente da planilha." },
      { "letter": "E", "text": "O usuário digitou o símbolo de porcentagem no lugar de ponto e vírgula." }
    ],
    "correctLetter": "D",
    "generalExplanation": "O erro #REF! (Referência Inválida) ocorre quando uma célula, linha ou coluna utilizada em uma fórmula é excluída da planilha, fazendo com que o Excel perca o ponteiro do endereço daquela célula.",
    "explanations": {
      "A": "INCORRETA. Limite de memória não gera #REF!.",
      "B": "INCORRETA. Células protegidas impedem edição, mas mantêm o cálculo visível.",
      "C": "INCORRETA. Fórmulas longas são aceitas até limites de milhares de caracteres no Excel moderno.",
      "D": "CORRETA. A exclusão de uma linha ou coluna referenciada na fórmula gera #REF! (ex: excluir a coluna C transforma =SOMA(A1; C1) em =SOMA(A1; #REF!)).",
      "E": "INCORRETA. Erro de pontuação causaria erro de sintaxe genérico."
    }
  },
  {
    "id": "inf-q25",
    "subjectId": "informatica",
    "topic": "MS Excel - Tabela Dinâmica (Pivot Table)",
    "difficulty": "Fácil",
    "statement": "(Prova DETRAN-SP / Instituto Avalia 2026) O diretor de operações do DETRAN-SP solicitou um relatório executivo para cruzar dados de 80.000 autuações do ano, agrupando rapidamente os totais de multas por município, por tipo de veículo e por mês do ano, permitindo filtros interativos sem alterar a planilha original. A ferramenta nativa do Excel mais indicada para esse resumo é a:",
    "lawReference": "MS Excel - Análise de Dados e Relatórios",
    "bancaTag": "Instituto Avalia / DETRAN-SP 2026",
    "options": [
      { "letter": "A", "text": "Validação de Dados por Lista." },
      { "letter": "B", "text": "Formatação Condicional em Escala de Cor." },
      { "letter": "C", "text": "Atingir Meta (What-If Analysis)." },
      { "letter": "D", "text": "AutoFiltro Básico com classificação A-Z." },
      { "letter": "E", "text": "Tabela Dinâmica (Pivot Table)." }
    ],
    "correctLetter": "E",
    "generalExplanation": "A Tabela Dinâmica é a ferramenta mais poderosa do Excel para agregar, resumir e analisar grandes matrizes de dados, possibilitando arrastar campos para linhas, colunas, valores e filtros rapidamente.",
    "explanations": {
      "A": "INCORRETA. Validação de dados restringe os valores que o usuário pode digitar em uma célula.",
      "B": "INCORRETA. Formatação condicional altera as cores e aparências das células com base em regras.",
      "C": "INCORRETA. Atingir Meta calcula o valor de entrada necessário para atingir um resultado desejado em uma fórmula.",
      "D": "INCORRETA. O AutoFiltro apenas oculta linhas que não atendem ao critério, mas não totaliza nem cruza dimensões em formato de matriz resumo.",
      "E": "CORRETA. A Tabela Dinâmica é desenhada especificamente para sintetizar grandes volumes de dados de modo cruzado e multidimensional."
    }
  },
  {
    "id": "inf-q26",
    "subjectId": "informatica",
    "topic": "MS Excel - Sintaxe e Argumentos da Função PROCV",
    "difficulty": "Médio",
    "statement": "(Prova DETRAN-SP / Vunesp) A sintaxe oficial da função PROCV no MS Excel é:\n=PROCV(valor_procurado; matriz_tabela; núm_índice_coluna; [procurar_intervalo])\nPara garantir que a função busque EXATAMENTE o código correspondente da CNH (sem aceitar aproximações alfabéticas ou numéricas), o 4º argumento [procurar_intervalo] deve ser preenchido com:",
    "lawReference": "MS Excel - Pesquisa e Referência",
    "bancaTag": "Vunesp / DETRAN 2019",
    "options": [
      { "letter": "A", "text": "FALSO (ou o número 0)." },
      { "letter": "B", "text": "VERDADEIRO (ou o número 1)." },
      { "letter": "C", "text": "\"EXATO\"." },
      { "letter": "D", "text": "NULO (ou deixar o campo com aspas vazias \"\")." },
      { "letter": "E", "text": "-1." }
    ],
    "correctLetter": "A",
    "generalExplanation": "No PROCV, o 4º parâmetro [procurar_intervalo] aceita VERDADEIRO (1) para busca aproximada (padrão) e FALSO (0) para correspondência exata.",
    "explanations": {
      "A": "CORRETA. FALSO ou 0 força a pesquisa por correspondência exata no PROCV.",
      "B": "INCORRETA. VERDADEIRO ou 1 realiza busca aproximada, exigindo que a tabela esteja ordenada.",
      "C": "INCORRETA. 'EXATO' não é um argumento válido no Excel.",
      "D": "INCORRETA. Omitir o parâmetro ou passar aspas vazias assume VERDADEIRO (aproximado).",
      "E": "INCORRETA. O valor -1 não é usado no PROCV (é usado no PROCX para busca invertida)."
    }
  },
  {
    "id": "inf-q27",
    "subjectId": "informatica",
    "topic": "MS Excel - Associação das Funções ÍNDICE e CORRESP",
    "difficulty": "Difícil",
    "statement": "(Prova DETRAN-SP / FCC) Em versões anteriores do Excel que não dispõem do PROCX, os analistas frequentemente combinam as funções ÍNDICE e CORRESP em substituição ao PROCV. Essa combinação é amplamente utilizada porque:",
    "lawReference": "MS Excel - Funções de Procura Avançada",
    "bancaTag": "FCC / DETRAN",
    "options": [
      { "letter": "A", "text": "Permite somar intervalos de texto sem gerar o erro #VALOR!." },
      { "letter": "B", "text": "Permite retornar valores de colunas localizadas à esquerda da coluna de pesquisa e não quebra quando colunas intermediárias são inseridas." },
      { "letter": "C", "text": "Imede a execução de vírus e códigos maliciosos inseridos em macros VBA." },
      { "letter": "D", "text": "Converte automaticamente valores em reais para moedas estrangeiras atualizadas pelo Banco Central." },
      { "letter": "E", "text": "Ocupa metade do espaço de armazenamento no disco rígido." }
    ],
    "correctLetter": "B",
    "generalExplanation": "A combinação ÍNDICE(matriz_retorno; CORRESP(valor; matriz_pesquisa; 0)) é mais flexível que o PROCV porque desvincula a busca de um índice estático de coluna e permite buscar para a esquerda.",
    "explanations": {
      "A": "INCORRETA. ÍNDICE e CORRESP não somam textos.",
      "B": "CORRETA. CORRESP encontra a posição da linha e ÍNDICE recupera o valor em qualquer coluna (inclusive à esquerda), sendo imune à inserção de colunas intermediárias.",
      "C": "INCORRETA. Fórmulas de planilha não têm função antivírus.",
      "D": "INCORRETA. Não faz cotação de câmbio nativa.",
      "E": "INCORRETA. Não há redução no tamanho do arquivo em disco."
    }
  },
  {
    "id": "inf-q28",
    "subjectId": "informatica",
    "topic": "MS Excel - Formatação Condicional",
    "difficulty": "Fácil",
    "statement": "(Prova DETRAN-SP / Instituto Avalia 2026) Em uma planilha de controle de validade de exames médicos de motoristas, o supervisor deseja que a célula com a data do exame fique automaticamente com preenchimento em vermelho e texto em negrito quando faltarem menos de 30 dias para o vencimento. O recurso do Excel apropriado para essa tarefa é:",
    "lawReference": "MS Excel - Estilos e Formatação",
    "bancaTag": "Instituto Avalia / DETRAN-SP 2026",
    "options": [
      { "letter": "A", "text": "Proteção de Planilha com senha de edição." },
      { "letter": "B", "text": "Consolidação de Dados por Categoria." },
      { "letter": "C", "text": "Formatação Condicional." },
      { "letter": "D", "text": "Preenchimento Relâmpago (Flash Fill)." },
      { "letter": "E", "text": "Cálculo Iterativo Manual." }
    ],
    "correctLetter": "C",
    "generalExplanation": "A Formatação Condicional altera dinamicamente estilos visuais (cores, fontes, bordas e ícones) de células quando determinadas condições ou fórmulas são verdadeiras.",
    "explanations": {
      "A": "INCORRETA. Proteção de planilha restringe alterações de conteúdo por terceiros.",
      "B": "INCORRETA. Consolidação reúne dados de várias planilhas em uma matriz resumo.",
      "C": "CORRETA. A Formatação Condicional aplica regras de cor e destaque com base nos valores das células.",
      "D": "INCORRETA. O Preenchimento Relâmpago identifica padrões em textos e preenche colunas automaticamente.",
      "E": "INCORRETA. Cálculo iterativo serve para resolver referências circulares em cálculos matemáticos avançados."
    }
  },

  # ----------------------------------------------------
  # Theme 5: Nuvem, Armazenamento e Ferramentas Colaborativas (q29 - q35)
  # ----------------------------------------------------
  {
    "id": "inf-q29",
    "subjectId": "informatica",
    "topic": "Computação em Nuvem - OneDrive e Google Drive",
    "difficulty": "Fácil",
    "statement": "(Prova DETRAN-SP / Vunesp) Os serviços de armazenamento em nuvem (como Microsoft OneDrive e Google Drive) tornaram-se essenciais no serviço público. A principal característica e vantagem desse modelo para a administração pública é:",
    "lawReference": "Computação em Nuvem (Cloud Storage)",
    "bancaTag": "Vunesp / DETRAN 2019",
    "options": [
      { "letter": "A", "text": "Eliminar a necessidade de contrato de conexão com provedor de internet para baixar arquivos." },
      { "letter": "B", "text": "Substituir os circuitos de memória RAM dos computadores por memória lógica remota." },
      { "letter": "C", "text": "Permitir a impressão em papel físico sem necessidade de equipamentos de impressão." },
      { "letter": "D", "text": "Armazenar arquivos em data centers remotos, permitindo sincronização entre múltiplos dispositivos, backup e compartilhamento seguro." },
      { "letter": "E", "text": "Excluir automaticamente arquivos governamentais após 30 dias por exigência de sigilo." }
    ],
    "correctLetter": "D",
    "generalExplanation": "Armazenamento em nuvem guarda dados em servidores seguros na internet, viabilizando acesso multiplataforma, sincronização automática de arquivos e trabalho colaborativo em tempo real.",
    "explanations": {
      "A": "INCORRETA. O acesso a serviços em nuvem exige conexão com a internet.",
      "B": "INCORRETA. Armazenamento em nuvem é armazenamento secundário (disco), não memória RAM operacional de trabalho.",
      "C": "INCORRETA. A nuvem não imprime documentos em papel sem impressora física.",
      "D": "CORRETA. A computação em nuvem oferece disponibilidade remota, backup e sincronização em data centers.",
      "E": "INCORRETA. Arquivos não são apagados compulsoriamente após 30 dias."
    }
  },
  {
    "id": "inf-q30",
    "subjectId": "informatica",
    "topic": "Nuvem - Histórico de Versões (Versionamento de Arquivos)",
    "difficulty": "Médio",
    "statement": "(Prova DETRAN-SP / Instituto Avalia 2026) Durante a edição de uma planilha compartilhada no OneDrive, um colaborador apagou acidentalmente fórmulas e dados essenciais de uma aba e salvou o arquivo. O recurso nativo do OneDrive que permite ao supervisor recuperar o arquivo no estado exato em que se encontrava antes do incidente é o:",
    "lawReference": "Ferramentas Colaborativas e Nuvem",
    "bancaTag": "Instituto Avalia / DETRAN-SP 2026",
    "options": [
      { "letter": "A", "text": "Ponto de Restauração da BIOS." },
      { "letter": "B", "text": "Desfragmentador de Disco em Nuvem." },
      { "letter": "C", "text": "Modo de Compatibilidade Legada." },
      { "letter": "D", "text": "Criptografia BitLocker reversa." },
      { "letter": "E", "text": "Histórico de Versões (Version History)." }
    ],
    "correctLetter": "E",
    "generalExplanation": "O Histórico de Versões armazena snapshots de cada modificação salva na nuvem, permitindo inspecionar e restaurar versões anteriores em caso de erros ou exclusões indevidas.",
    "explanations": {
      "A": "INCORRETA. A BIOS não gerencia arquivos individuais de software de escritório.",
      "B": "INCORRETA. Desfragmentador não recupera conteúdo sobrescrito em arquivos de texto/planilha.",
      "C": "INCORRETA. Modo de compatibilidade serve para abrir formatos de versões antigas do Office.",
      "D": "INCORRETA. BitLocker protege unidades de disco inteiras contra roubo físico, não recupera versões antigas de arquivos editados.",
      "E": "CORRETA. O Histórico de Versões registra cada salvamento e permite restaurar versões passadas com poucos cliques."
    }
  },
  {
    "id": "inf-q31",
    "subjectId": "informatica",
    "topic": "Nuvem - Permissões de Compartilhamento de Arquivos",
    "difficulty": "Fácil",
    "statement": "(Prova DETRAN-SP / Vunesp) Ao gerar um link de compartilhamento para um arquivo de relatório armazenado no OneDrive/SharePoint corporativo do DETRAN-SP, a distinção correta entre os níveis de permissão 'Pode exibir' (Somente Exibição) e 'Pode editar' é:",
    "lawReference": "Nuvem - Controle de Acesso",
    "bancaTag": "Vunesp / DETRAN 2019",
    "options": [
      { "letter": "A", "text": "Em 'Pode exibir', o usuário pode visualizar e baixar o documento sem alterá-lo; em 'Pode editar', ele pode fazer alterações diretas no conteúdo compartilhado." },
      { "letter": "B", "text": "Em 'Pode exibir', o arquivo só pode ser aberto por 10 minutos antes de ser deletado." },
      { "letter": "C", "text": "Em 'Pode editar', o usuário passa a ter a propriedade definitiva da conta do remetente." },
      { "letter": "D", "text": "'Pode exibir' exige pagamento de taxa por visualização." },
      { "letter": "E", "text": "Não há qualquer diferença técnica entre os dois níveis." }
    ],
    "correctLetter": "A",
    "generalExplanation": "A permissão 'Pode exibir' concede apenas leitura (Read-only), impedindo edições no documento original. A permissão 'Pode editar' confere autorização para modificar, formatar ou excluir informações no arquivo compartilhado.",
    "explanations": {
      "A": "CORRETA. 'Pode exibir' restringe à leitura/consulta, enquanto 'Pode editar' permite alteração do conteúdo.",
      "B": "INCORRETA. Não há exclusão em 10 minutos.",
      "C": "INCORRETA. A titularidade da conta não é transferida.",
      "D": "INCORRETA. Não há cobrança financeira por visualização.",
      "E": "INCORRETA. Há nítida diferença de privilégios de gravação/leitura."
    }
  },
  {
    "id": "inf-q32",
    "subjectId": "informatica",
    "topic": "Ferramentas Colaborativas - Edição em Tempo Real (Coautoria)",
    "difficulty": "Médio",
    "statement": "(Prova DETRAN-SP / Cebraspe) Na elaboração de um plano estratégico para redução de acidentes, três agentes de trânsito em cidades diferentes (São Paulo, Campinas e Ribeirão Preto) abriram simultaneamente o mesmo arquivo no Word Online. Essa funcionalidade de trabalho conjunto concomitante é chamada tecnicamente de:",
    "lawReference": "Produtividade e Trabalho Colaborativo",
    "bancaTag": "Cebraspe / DETRAN",
    "options": [
      { "letter": "A", "text": "Mesclagem Assíncrona em Lote." },
      { "letter": "B", "text": "Coautoria em Tempo Real (Real-time Co-authoring)." },
      { "letter": "C", "text": "Espelhamento RAID 1 de Processador." },
      { "letter": "D", "text": "Transmissão Peer-to-Peer por Torrent." },
      { "letter": "E", "text": "Substituição OLE Compartilhada." }
    ],
    "correctLetter": "B",
    "generalExplanation": "A coautoria em tempo real (Co-authoring) permite que múltiplos usuários editem o mesmo documento ao mesmo tempo na nuvem, com sinalização visual de cursores e alterações instantâneas.",
    "explanations": {
      "A": "INCORRETA. Não é assíncrona, as edições ocorrem em tempo real simultâneo.",
      "B": "CORRETA. O recurso oficial denomina-se Coautoria (Co-authoring) em tempo real.",
      "C": "INCORRETA. RAID 1 é espelhamento físico de discos rígidos em hardware.",
      "D": "INCORRETA. Torrent é protocolo de compartilhamento descentralizado de arquivos.",
      "E": "INCORRETA. OLE é tecnologia de vinculação de objetos de software."
    }
  },
  {
    "id": "inf-q33",
    "subjectId": "informatica",
    "topic": "OneDrive - Arquivos sob Demanda (Files On-Demand)",
    "difficulty": "Difícil",
    "statement": "(Prova DETRAN-SP / FCC) O recurso 'Arquivos sob Demanda' (Files On-Demand) do Microsoft OneDrive no Windows 11 tem como principal benefício prático para os computadores corporativos do DETRAN-SP:",
    "lawReference": "Armazenamento em Nuvem e Gerenciamento de Espaço",
    "bancaTag": "FCC / DETRAN",
    "options": [
      { "letter": "A", "text": "Excluir permanentemente os arquivos locais após 24 horas para evitar vazamentos." },
      { "letter": "B", "text": "Impedir que outros servidores baixem documentos sigilosos." },
      { "letter": "C", "text": "Visualizar e gerenciar todos os arquivos da nuvem no Explorador de Arquivos local sem ocupar espaço físico no disco rígido até que sejam abertos." },
      { "letter": "D", "text": "Compactar os arquivos em formato ZIP com senha de 64 bits." },
      { "letter": "E", "text": "Converter planilhas do Excel em código binário para acelerar o boot do sistema operacional." }
    ],
    "correctLetter": "C",
    "generalExplanation": "Arquivos sob Demanda (Files On-Demand) exibe os arquivos do OneDrive no Explorador de Arquivos como 'somente online' (ícone de nuvem), consumindo zero bytes de disco até que o usuário clique para abri-los, quando são baixados sob demanda.",
    "explanations": {
      "A": "INCORRETA. Não há exclusão de arquivos, mas gerenciamento inteligente de cache.",
      "B": "INCORRETA. O recurso é focado em economia de espaço em disco, não em restrição de download para terceiros.",
      "C": "CORRETA. Permite navegar por toda a estrutura de pastas da nuvem sem consumir espaço do disco local até que o arquivo seja aberto.",
      "D": "INCORRETA. Não utiliza compressão ZIP.",
      "E": "INCORRETA. Afirmação sem sentido técnico."
    }
  },
  {
    "id": "inf-q34",
    "subjectId": "informatica",
    "topic": "Microsoft Teams - Comunicação e Reuniões Corporativas",
    "difficulty": "Fácil",
    "statement": "(Prova DETRAN-SP / Instituto Avalia 2026) O Microsoft Teams é amplamente utilizado em órgãos públicos estaduais. Dentre as suas funções nativas integradas ao pacote Microsoft 365, destacam-se:",
    "lawReference": "Comunicação e Colaboração Corporativa",
    "bancaTag": "Instituto Avalia / DETRAN-SP 2026",
    "options": [
      { "letter": "A", "text": "Execução de testes de estresse em hardware e overcloking de processadores." },
      { "letter": "B", "text": "Criação de partições de disco rígido e formatação de unidades externas." },
      { "letter": "C", "text": "Roteamento de pacotes TCP/IP na camada de enlace de rede." },
      { "letter": "D", "text": "Realização de videoconferências, chats individuais/em grupo, canais temáticos de trabalho e compartilhamento integrado de documentos." },
      { "letter": "E", "text": "Edição de vetores gráficos para confecção de placas metálicas de sinalização viária." }
    ],
    "correctLetter": "D",
    "generalExplanation": "O Microsoft Teams centraliza comunicação corporativa (chat, chamadas de vídeo e áudio, canais de equipes) e produtividade integrada ao SharePoint e OneDrive.",
    "explanations": {
      "A": "INCORRETA. Teams não é software de benchmarking ou overclocking de hardware.",
      "B": "INCORRETA. Particionamento de disco é função do utilitário Gerenciamento de Disco do Windows.",
      "C": "INCORRETA. Roteamento de pacotes é atribuição de equipamentos e protocolos de rede.",
      "D": "CORRETA. O Teams integra videoconferências, chats, reuniões virtuais e colaboração documental.",
      "E": "INCORRETA. Edição vetorial de sinalização viária exige softwares CAD/design como AutoCAD ou Illustrator."
    }
  },
  {
    "id": "inf-q35",
    "subjectId": "informatica",
    "topic": "Segurança no Compartilhamento em Nuvem - Boas Práticas",
    "difficulty": "Médio",
    "statement": "(Prova DETRAN-SP / Vunesp) Ao compartilhar um arquivo confidencial contendo dados de fiscalização no Google Drive ou OneDrive, a prática de segurança MAIS ADEQUADA para mitigar o risco de vazamento de informações para terceiros não autorizados é:",
    "lawReference": "Segurança em Nuvem e Proteção de Dados",
    "bancaTag": "Vunesp / DETRAN 2019",
    "options": [
      { "letter": "A", "text": "Gerar um link com acesso público configurado como 'Qualquer pessoa com o link'." },
      { "letter": "B", "text": "Publicar o link na página inicial de uma rede social institucional para facilitar o acesso." },
      { "letter": "C", "text": "Desativar o antivírus corporativo antes de fazer o upload do documento." },
      { "letter": "D", "text": "Inserir o link no corpo de um e-mail sem destinatário definido." },
      { "letter": "E", "text": "Restringir o acesso a pessoas específicas por meio de seus e-mails institucionais e definir prazo de expiração para o link compartilhado." }
    ],
    "correctLetter": "E",
    "generalExplanation": "A boa prática de segurança em nuvem consiste em conceder acesso somente a destinatários específicos autenticados, com privilégios mínimos necessários e prazo de validade determinado.",
    "explanations": {
      "A": "INCORRETA. Links públicos ('qualquer pessoa com o link') podem ser repassados e indexados indevidamente.",
      "B": "INCORRETA. Publicar link em rede social expõe o documento a vazamento massivo.",
      "C": "INCORRETA. Desativar antivírus compromete a integridade do sistema.",
      "D": "INCORRETA. Envio de e-mail sem destinatário não resolve compartilhamento e é incorreto.",
      "E": "CORRETA. Restringir por conta institucional e aplicar expiração do link são regras de ouro de segurança e governança."
    }
  },

  # ----------------------------------------------------
  # Theme 6: Redes de Computadores, Protocolos e Navegadores Web (q36 - q42)
  # ----------------------------------------------------
  {
    "id": "inf-q36",
    "subjectId": "informatica",
    "topic": "Redes de Computadores - Protocolo HTTPS e Certificado SSL/TLS",
    "difficulty": "Fácil",
    "statement": "(Prova DETRAN-SP / Instituto Avalia 2026) Ao acessar o portal oficial do DETRAN-SP, o usuário observa na barra de endereços do navegador o prefixo 'https://' acompanhado pelo ícone de um cadeado fechado. Esse indicador técnico assegura que:",
    "lawReference": "Redes de Computadores - Protocolos Seguros",
    "bancaTag": "Instituto Avalia / DETRAN-SP 2026",
    "options": [
      { "letter": "A", "text": "O tráfego de dados entre o navegador do usuário e o servidor web é criptografado por protocolo SSL/TLS, garantindo confidencialidade e autenticidade da conexão." },
      { "letter": "B", "text": "O computador do usuário está imune a qualquer ataque de vírus, dispensando o uso de antivírus local." },
      { "letter": "C", "text": "O portal pertence a uma instituição bancária internacional privada." },
      { "letter": "D", "text": "A velocidade de navegação na internet foi quadruplicada pela tecnologia da operadora." },
      { "letter": "E", "text": "Todas as informações acessadas pelo usuário se tornarão públicas no Diário Oficial." }
    ],
    "correctLetter": "A",
    "generalExplanation": "O HTTPS (HTTP Secure) utiliza certificados digitais com protocolos criptográficos SSL/TLS (na porta padrão 443) para criptografar a comunicação entre o cliente e o servidor, impedindo a interceptação de senhas e dados confidenciais por terceiros.",
    "explanations": {
      "A": "CORRETA. HTTPS implementa canal criptografado via SSL/TLS garantindo privacidade e autenticação do site.",
      "B": "INCORRETA. Ter HTTPS não impede que o usuário baixe arquivos infectados ou sofra ataques de phishing.",
      "C": "INCORRETA. O domínio gov.br é governamental brasileiro, não bancário internacional.",
      "D": "INCORRETA. Criptografia não quadruplica a velocidade da banda de internet.",
      "E": "INCORRETA. O tráfego seguro visa sigilo, não divulgação compulsória."
    }
  },
  {
    "id": "inf-q37",
    "subjectId": "informatica",
    "topic": "Navegadores Web - Navegação InPrivate / Anônima",
    "difficulty": "Médio",
    "statement": "(Prova DETRAN-SP / Vunesp) No Microsoft Edge e Google Chrome, a utilização da janela de 'Navegação InPrivate' (ou Anônima) assegura ao usuário que, ao fechar a janela:",
    "lawReference": "Navegadores de Internet - Privacidade e Cache",
    "bancaTag": "Vunesp / DETRAN 2019",
    "options": [
      { "letter": "A", "text": "O endereço IP do computador do usuário ficará 100% invisível para os sites visitados e para o provedor de internet." },
      { "letter": "B", "text": "O histórico de navegação, cookies, dados de formulários e arquivos temporários não serão salvos no computador local." },
      { "letter": "C", "text": "Arquivos baixados (downloads) e favoritos criados durante a sessão serão apagados automaticamente do disco." },
      { "letter": "D", "text": "O tráfego de dados não poderá ser monitorado pelo administrador da rede local de trabalho do DETRAN." },
      { "letter": "E", "text": "O computador estará protegido contra danos físicos decorrentes de surtos na rede elétrica." }
    ],
    "correctLetter": "B",
    "generalExplanation": "A navegação anônima/InPrivate apenas impede que o dispositivo local armazene o histórico de páginas, cookies e dados inseridos em formulários após o fechamento da janela. O provedor de acesso, o administrador da rede corporativa e os sites acessados continuam enxergando a conexão e o IP.",
    "explanations": {
      "A": "INCORRETA. Navegação anônima não mascara o IP perante provedores ou sites (para isso seria necessária uma VPN/Proxy).",
      "B": "CORRETA. A função principal é não reter no dispositivo local histórico, cookies e dados de formulários após o término da sessão.",
      "C": "INCORRETA. Arquivos baixados pelo usuário e novos favoritos adicionados permanecem salvos no computador.",
      "D": "INCORRETA. O firewall e roteadores da rede corporativa continuam registrando o tráfego de rede normalmente.",
      "E": "INCORRETA. Afirmação física sem relação com software."
    }
  },
  {
    "id": "inf-q38",
    "subjectId": "informatica",
    "topic": "Redes de Computadores - Protocolo DNS (Domain Name System)",
    "difficulty": "Fácil",
    "statement": "(Prova DETRAN-SP / FCC) Na arquitetura de redes TCP/IP e da internet, o protocolo responsável por traduzir nomes de domínio amigáveis (como 'www.detran.sp.gov.br') em seus respectivos endereços IP numéricos (como 187.xx.xx.xx) é o:",
    "lawReference": "Redes e Protocolos - Resolução de Nomes",
    "bancaTag": "FCC / DETRAN",
    "options": [
      { "letter": "A", "text": "DHCP" },
      { "letter": "B", "text": "FTP" },
      { "letter": "C", "text": "DNS" },
      { "letter": "D", "text": "SNMP" },
      { "letter": "E", "text": "NTP" }
    ],
    "correctLetter": "C",
    "generalExplanation": "O DNS (Domain Name System) funciona como a 'lista telefônica' da internet, convertendo nomes de domínios alfanuméricos em endereços IP para que os roteadores possam localizar os servidores corretos.",
    "explanations": {
      "A": "INCORRETA. DHCP distribui dinamicamente endereços IP para os dispositivos da rede.",
      "B": "INCORRETA. FTP é protocolo de transferência de arquivos.",
      "C": "CORRETA. DNS (Domain Name System) resolve nomes de domínio em endereços IP.",
      "D": "INCORRETA. SNMP é protocolo de gerenciamento e monitoramento de dispositivos de rede.",
      "E": "INCORRETA. NTP sincroniza os relógios dos computadores com bases de tempo padrão."
    }
  },
  {
    "id": "inf-q39",
    "subjectId": "informatica",
    "topic": "Redes de Computadores - Protocolo DHCP",
    "difficulty": "Médio",
    "statement": "(Prova DETRAN-SP / Instituto Avalia 2026) Ao conectar um novo computador à rede local do DETRAN-SP, a máquina obtém automaticamente seu endereço IP, máscara de sub-rede, gateway padrão e endereços de servidores DNS sem intervenção manual do técnico de TI. O protocolo de rede encarregado dessa atribuição dinâmica e automática é o:",
    "lawReference": "Redes de Computadores - Configuração de Hosts",
    "bancaTag": "Instituto Avalia / DETRAN-SP 2026",
    "options": [
      { "letter": "A", "text": "HTTP" },
      { "letter": "B", "text": "Telnet" },
      { "letter": "C", "text": "ICMP" },
      { "letter": "D", "text": "DHCP" },
      { "letter": "E", "text": "ARP" }
    ],
    "correctLetter": "D",
    "generalExplanation": "O DHCP (Dynamic Host Configuration Protocol) automatiza a distribuição de parâmetros de rede (IP, máscara, gateway, DNS) para dispositivos que solicitam conexão.",
    "explanations": {
      "A": "INCORRETA. HTTP é o protocolo de transferência de páginas web.",
      "B": "INCORRETA. Telnet é protocolo de acesso a terminal remoto em texto claro.",
      "C": "INCORRETA. ICMP é utilizado para mensagens de controle e testes de conectividade (como o utilitário Ping).",
      "D": "CORRETA. DHCP (Dynamic Host Configuration Protocol) configura automaticamente IPs e parâmetros de rede para os clientes.",
      "E": "INCORRETA. ARP mapeia endereços lógicos IP para endereços físicos MAC da placa de rede."
    }
  },
  {
    "id": "inf-q40",
    "subjectId": "informatica",
    "topic": "Redes de Computadores - Intranet vs Internet vs Extranet",
    "difficulty": "Médio",
    "statement": "(Prova DETRAN-SP / Cebraspe) No âmbito da infraestrutura de tecnologia do DETRAN-SP, os funcionários acessam um portal corporativo interno exclusivo para consultar manuais de procedimento e escalas de plantão. Além disso, empresas de vistoria credenciadas acessam módulos específicos desse sistema de fora das dependências do órgão mediante autenticação segura. Essas duas redes caracterizam-se, respectivamente, como:",
    "lawReference": "Conceitos de Redes - Intranet e Extranet",
    "bancaTag": "Cebraspe / DETRAN",
    "options": [
      { "letter": "A", "text": "Internet e Deep Web." },
      { "letter": "B", "text": "Darknet e Rede Mesh." },
      { "letter": "C", "text": "PAN (Personal Area Network) e LAN." },
      { "letter": "D", "text": "Rede Pública e Rede P2P." },
      { "letter": "E", "text": "Intranet e Extranet." }
    ],
    "correctLetter": "E",
    "generalExplanation": "Intranet é a rede privada restrita aos colaboradores de uma organização. Extranet é a extensão dessa rede privada que concede acesso controlado a parceiros externos autorizados (fornecedores, credenciados).",
    "explanations": {
      "A": "INCORRETA. Internet é a rede mundial pública irrestrita; Deep Web refere-se a conteúdos não indexados por buscadores.",
      "B": "INCORRETA. Darknet refere-se a redes sobrepostas com criptografia especial (ex: Tor); Mesh é topologia de malha física/sem fio.",
      "C": "INCORRETA. PAN é rede de área pessoal (Bluetooth); LAN é rede de área local física.",
      "D": "INCORRETA. Redes públicas e redes P2P não descrevem essa divisão institucional corporativa.",
      "E": "CORRETA. O ambiente restrito aos funcionários internos é a Intranet, e a abertura segura a parceiros/credenciados externos constitui a Extranet."
    }
  },
  {
    "id": "inf-q41",
    "subjectId": "informatica",
    "topic": "Navegadores Web - Cookies de Navegação",
    "difficulty": "Fácil",
    "statement": "(Prova DETRAN-SP / Vunesp) Ao navegar em portais de serviços públicos na internet, os chamados 'Cookies' armazenados no navegador têm como objetivo principal:",
    "lawReference": "Navegadores e Sessão de Usuário",
    "bancaTag": "Vunesp / DETRAN 2019",
    "options": [
      { "letter": "A", "text": "Salvar pequenas informações de texto com preferências do usuário, estado de autenticação de sessão e histórico recente de visitas ao site." },
      { "letter": "B", "text": "Executar instruções de baixo nível na BIOS para acelerar a placa-mãe." },
      { "letter": "C", "text": "Proteger o computador contra oscilações de voltagem da fonte de energia." },
      { "letter": "D", "text": "Substituir a memória cache do processador por arquivos de texto compactados." },
      { "letter": "E", "text": "Impedir a instalação de atualizações automáticas do sistema operacional." }
    ],
    "correctLetter": "A",
    "generalExplanation": "Cookies são pequenos arquivos de texto criados pelos sites e armazenados pelo navegador para reter preferências de visualização, tokens de sessão e personalização.",
    "explanations": {
      "A": "CORRETA. Cookies guardam preferências de navegação e mantêm o usuário autenticado em sessões de websites.",
      "B": "INCORRETA. Cookies são lógicos de navegador web e não interagem com a BIOS da placa-mãe.",
      "C": "INCORRETA. Cookies não possuem atuação sobre energia elétrica do computador.",
      "D": "INCORRETA. Não substituem memória cache L1/L2/L3 de processadores físicos.",
      "E": "INCORRETA. Não interferem no Windows Update."
    }
  },
  {
    "id": "inf-q42",
    "subjectId": "informatica",
    "topic": "Navegadores Web - Atalhos de Teclado Essenciais",
    "difficulty": "Fácil",
    "statement": "(Prova DETRAN-SP / Instituto Avalia 2026) Em navegadores modernos como o Google Chrome e o Microsoft Edge, o atalho de teclado que permite restaurar (reabrir) imediatamente a última guia (aba) que foi fechada acidentalmente é:",
    "lawReference": "Navegadores de Internet - Atalhos",
    "bancaTag": "Instituto Avalia / DETRAN-SP 2026",
    "options": [
      { "letter": "A", "text": "Ctrl + T" },
      { "letter": "B", "text": "Ctrl + Shift + T" },
      { "letter": "C", "text": "Ctrl + H" },
      { "letter": "D", "text": "Ctrl + J" },
      { "letter": "E", "text": "Ctrl + W" }
    ],
    "correctLetter": "B",
    "generalExplanation": "Ctrl + T abre uma nova guia em branco. Para reabrir uma guia fechada recentemente, pressiona-se Ctrl + Shift + T. Ctrl + H abre o histórico e Ctrl + J abre downloads.",
    "explanations": {
      "A": "INCORRETA. Ctrl + T abre uma NOVA guia em branco.",
      "B": "CORRETA. Ctrl + Shift + T reabre a última guia fechada.",
      "C": "INCORRETA. Ctrl + H abre a janela do Histórico de navegação.",
      "D": "INCORRETA. Ctrl + J abre a lista de Downloads realizados.",
      "E": "INCORRETA. Ctrl + W fecha a guia ativa atual."
    }
  },

  # ----------------------------------------------------
  # Theme 7: Correio Eletrônico e Comunicação Corporativa (q43 - q49)
  # ----------------------------------------------------
  {
    "id": "inf-q43",
    "subjectId": "informatica",
    "topic": "Correio Eletrônico - Campos de Endereçamento (Para, CC e CCO)",
    "difficulty": "Fácil",
    "statement": "(Prova DETRAN-SP / Vunesp) Ao enviar uma mensagem de correio eletrônico corporativo para vários cidadãos notificando sobre um recall de veículos, o remetente adiciona os endereços de e-mail no campo 'CCO' (Com Cópia Oculta / BCC). Essa prática garante que:",
    "lawReference": "Correio Eletrônico - Privacidade em Mensagens",
    "bancaTag": "Vunesp / DETRAN 2019",
    "options": [
      { "letter": "A", "text": "As mensagens sejam criptografadas por chave quântica de leitura exclusiva do governador." },
      { "letter": "B", "text": "Os destinatários do campo CCO fiquem impossibilitados de ler os anexos da mensagem." },
      { "letter": "C", "text": "Nenhum dos destinatários incluídos em CCO tenha seu endereço de e-mail exposto aos demais receptores da mensagem." },
      { "letter": "D", "text": "O e-mail seja deletado automaticamente do servidor após 10 minutos da entrega." },
      { "letter": "E", "text": "Os servidores dos campos 'Para' e 'CC' recebam uma notificação sonora no Windows ao abrir o e-mail." }
    ],
    "correctLetter": "C",
    "generalExplanation": "O campo CCO (Com Cópia Oculta / BCC) oculta os endereços de e-mail nele inseridos de todos os outros receptores, preservando a privacidade dos destinatários em comunicações em massa.",
    "explanations": {
      "A": "INCORRETA. O campo CCO não implementa criptografia quântica.",
      "B": "INCORRETA. Destinatários em CCO recebem todo o conteúdo do e-mail, inclusive anexos.",
      "C": "CORRETA. CCO resguarda a identidade dos destinatários, que não visualizam os endereços uns dos outros nem são vistos pelos campos Para/CC.",
      "D": "INCORRETA. Não há auto-deleção automática em 10 minutos pelo campo CCO.",
      "E": "INCORRETA. Afirmação fantasiosa sem fundamentação técnica."
    }
  },
  {
    "id": "inf-q44",
    "subjectId": "informatica",
    "topic": "Correio Eletrônico - Protocolos de Envio (SMTP)",
    "difficulty": "Fácil",
    "statement": "(Prova DETRAN-SP / FCC) No envio e recebimento de mensagens eletrônicas através da internet, o protocolo padrão da suíte TCP/IP responsável especificamente pelo ENVIO (saída) de e-mails do cliente para o servidor e entre servidores de correio é o:",
    "lawReference": "Correio Eletrônico - Protocolos de Transporte",
    "bancaTag": "FCC / DETRAN",
    "options": [
      { "letter": "A", "text": "IMAP" },
      { "letter": "B", "text": "POP3" },
      { "letter": "C", "text": "HTTP" },
      { "letter": "D", "text": "SMTP" },
      { "letter": "E", "text": "SNMP" }
    ],
    "correctLetter": "D",
    "generalExplanation": "O SMTP (Simple Mail Transfer Protocol, mnemônico: 'Sua Mensagem Tá Partindo') é o protocolo universal de saída/envio de e-mails. POP3 e IMAP são protocolos de entrada/recebimento.",
    "explanations": {
      "A": "INCORRETA. IMAP é protocolo de recebimento e sincronização de mensagens.",
      "B": "INCORRETA. POP3 é protocolo de recebimento e download de mensagens.",
      "C": "INCORRETA. HTTP é protocolo de transferência de hipertexto para web.",
      "D": "CORRETA. SMTP (Simple Mail Transfer Protocol) é o protocolo padrão para ENVIO de correio eletrônico.",
      "E": "INCORRETA. SNMP é protocolo de gerenciamento de redes."
    }
  },
  {
    "id": "inf-q45",
    "subjectId": "informatica",
    "topic": "Correio Eletrônico - Diferença entre POP3 e IMAP",
    "difficulty": "Médio",
    "statement": "(Prova DETRAN-SP / Instituto Avalia 2026) Um agente do DETRAN-SP utiliza tanto o computador do posto de atendimento quanto o smartphone corporativo para gerenciar seus e-mails institucionais. Ao configurar sua caixa de correio no cliente de e-mail, foi recomendada a utilização do protocolo IMAP em vez do POP3. A principal razão técnica dessa escolha é:",
    "lawReference": "Correio Eletrônico - Protocolos de Entrada e Sincronização",
    "bancaTag": "Instituto Avalia / DETRAN-SP 2026",
    "options": [
      { "letter": "A", "text": "O POP3 exige o pagamento de licenças mensais por e-mail lido." },
      { "letter": "B", "text": "O IMAP impede a entrada de qualquer tipo de anexo em arquivos compactados ZIP." },
      { "letter": "C", "text": "O POP3 não suporta senhas alfanuméricas com mais de 8 dígitos." },
      { "letter": "D", "text": "O IMAP apaga imediatamente todas as mensagens do servidor após a leitura no smartphone." },
      { "letter": "E", "text": "O IMAP mantém as mensagens salvas no servidor e sincroniza pastas e status de leitura entre múltiplos dispositivos, enquanto o POP3 tradicionalmente baixa os e-mails para um único dispositivo." }
    ],
    "correctLetter": "E",
    "generalExplanation": "O IMAP (Internet Message Access Protocol) opera diretamente no servidor em tempo real, permitindo que vários dispositivos (PC, celular, tablet) vejam exatamente as mesmas pastas, rascunhos e mensagens lidas. O POP3 costuma baixar as mensagens para a máquina local e excluí-las do servidor.",
    "explanations": {
      "A": "INCORRETA. POP3 é um protocolo de padrão aberto da IETF, gratuito e sem cobrança por leitura.",
      "B": "INCORRETA. O protocolo IMAP suporta perfeitamente anexos em formato ZIP.",
      "C": "INCORRETA. Não existe essa restrição de tamanho de senha no protocolo POP3 moderno.",
      "D": "INCORRETA. É o POP3 tradicional que baixa e remove do servidor; o IMAP preserva as mensagens no servidor.",
      "E": "CORRETA. O IMAP é a escolha indicada para acesso sincronizado multiplataforma mantendo os e-mails no servidor."
    }
  },
  {
    "id": "inf-q46",
    "subjectId": "informatica",
    "topic": "Correio Eletrônico - Ação de 'Responder a Todos'",
    "difficulty": "Fácil",
    "statement": "(Prova DETRAN-SP / Vunesp) Em um aplicativo de e-mail como o Microsoft Outlook, quando o usuário recebe uma mensagem que continha vários colegas listados nos campos 'Para' e 'CC', além de outros em 'CCO', ao clicar no botão 'Responder a Todos' (Reply All):",
    "lawReference": "Correio Eletrônico - Operações de Resposta",
    "bancaTag": "Vunesp / DETRAN 2019",
    "options": [
      { "letter": "A", "text": "A resposta será enviada para o remetente original e para todos os endereços listados nos campos 'Para' e 'CC', mas NÃO alcançará os destinatários que estavam em 'CCO'." },
      { "letter": "B", "text": "A resposta será enviada também para todos os destinatários ocultos em CCO revelando seus endereços." },
      { "letter": "C", "text": "A mensagem de resposta é convertida em SMS e enviada para os celulares dos destinatários." },
      { "letter": "D", "text": "O e-mail original é excluído da lixeira de todos os participantes." },
      { "letter": "E", "text": "O sistema bloqueia a operação caso existam mais de 3 pessoas em cópia." }
    ],
    "correctLetter": "A",
    "generalExplanation": "Ao 'Responder a Todos', o cliente de e-mail encaminha a réplica ao remetente original e a todos os listados em 'Para' e 'CC'. Como os endereços de 'CCO' são ocultos no cabeçalho recebido, eles não recebem nem são revelados no Responder a Todos.",
    "explanations": {
      "A": "CORRETA. 'Responder a Todos' abrange o remetente e quem estiver em Para e CC; os de CCO não participam da resposta.",
      "B": "INCORRETA. O cliente de e-mail não conhece os endereços ocultos de CCO da mensagem original.",
      "C": "INCORRETA. Não há envio de SMS automático.",
      "D": "INCORRETA. A ação de resposta não interfere na lixeira de caixas postais alheias.",
      "E": "INCORRETA. Não há bloqueio para mais de 3 destinatários."
    }
  },
  {
    "id": "inf-q47",
    "subjectId": "informatica",
    "topic": "Correio Eletrônico - Políticas de Segurança para Arquivos Anexos",
    "difficulty": "Médio",
    "statement": "(Prova DETRAN-SP / Cebraspe) Por diretriz de segurança cibernética em servidores de correio eletrônico corporativo do Estado de São Paulo, o gateway de e-mail costuma bloquear automaticamente a entrega de mensagens que contenham arquivos anexados com determinadas extensões com alto potencial de execução de malwares. Dentre as extensões comumente bloqueadas por segurança nativa, estão:",
    "lawReference": "Segurança da Informação - Filtros de E-mail",
    "bancaTag": "Cebraspe / DETRAN",
    "options": [
      { "letter": "A", "text": ".pdf, .txt e .docx" },
      { "letter": "B", "text": ".exe, .bat, .cmd e .vbs" },
      { "letter": "C", "text": ".jpg, .png e .gif" },
      { "letter": "D", "text": ".mp3, .wav e .mid" },
      { "letter": "E", "text": ".csv, .xlsx e .rtf" }
    ],
    "correctLetter": "B",
    "generalExplanation": "Extensões executáveis diretas (.exe, .bat, .cmd, .vbs, .scr, .com) são rotineiramente bloqueadas por filtros de segurança de servidores de e-mail corporativo devido ao elevado risco de infecção por vírus e cavalos de troia.",
    "explanations": {
      "A": "INCORRETA. .pdf, .txt e .docx são documentos de trabalho padrão permitidos no dia a dia corporativo.",
      "B": "CORRETA. .exe (executável), .bat (script de lote), .cmd e .vbs (Visual Basic Script) são formatos executáveis comumente barrados em gateways de e-mail.",
      "C": "INCORRETA. Extensões de imagem comuns não são bloqueadas por padrão.",
      "D": "INCORRETA. Arquivos de áudio comuns não são vetores executáveis primários bloqueados por padrão.",
      "E": "INCORRETA. Planilhas e textos puros são formatos de trabalho permitidos."
    }
  },
  {
    "id": "inf-q48",
    "subjectId": "informatica",
    "topic": "Correio Eletrônico - Webmail vs Clientes Instalados (Outlook)",
    "difficulty": "Fácil",
    "statement": "(Prova DETRAN-SP / Instituto Avalia 2026) Uma das vantagens centrais da utilização do 'Webmail' para acesso à caixa postal corporativa em comparação com clientes de e-mail instalados localmente na máquina (como o Microsoft Outlook desktop) é:",
    "lawReference": "Correio Eletrônico - Modos de Acesso",
    "bancaTag": "Instituto Avalia / DETRAN-SP 2026",
    "options": [
      { "letter": "A", "text": "Permitir o envio de mensagens mesmo com o computador totalmente desconectado da internet." },
      { "letter": "B", "text": "Eliminar a necessidade de digitação de senha e autenticação de usuário." },
      { "letter": "C", "text": "Possibilitar o acesso à conta de correio eletrônico a partir de qualquer computador ou dispositivo com navegador web, sem necessidade de instalar aplicativos dedicados." },
      { "letter": "D", "text": "Garantir velocidade de conexão 10 vezes superior à do aplicativo desktop." },
      { "letter": "E", "text": "Armazenar cópias físicas impressas dos e-mails no servidor central." }
    ],
    "correctLetter": "C",
    "generalExplanation": "O Webmail funciona diretamente no navegador através de páginas HTTP/HTTPS, conferindo portabilidade total para acessar a caixa postal de qualquer computador sem pré-configuração ou instalação de programas dedicados.",
    "explanations": {
      "A": "INCORRETA. O Webmail depende de conexão ativa com a internet para funcionar.",
      "B": "INCORRETA. A autenticação com login e senha (e MFA) permanece estritamente obrigatória.",
      "C": "CORRETA. O Webmail pode ser acessado em qualquer navegador web sem exigir software cliente instalado no sistema operacional.",
      "D": "INCORRETA. A velocidade depende da rede do usuário, não sendo 10 vezes mais rápida por ser web.",
      "E": "INCORRETA. Não há impressão física de mensagens em servidores."
    }
  },
  {
    "id": "inf-q49",
    "subjectId": "informatica",
    "topic": "Segurança em E-mail - Falsificação de Remetente (E-mail Spoofing)",
    "difficulty": "Difícil",
    "statement": "(Prova DETRAN-SP / FCC) Criminosos cibernéticos frequentemente forjam o cabeçalho de e-mails para fazer com que a mensagem pareça ter sido enviada por um endereço legítimo do DETRAN-SP (ex: 'ouvidoria@detran.sp.gov.br'), induzindo o cidadão a pagar boletos falsos. Essa técnica de falsificação de cabeçalho de e-mail é denominada:",
    "lawReference": "Ameaças Cibernéticas - Engenharia Social",
    "bancaTag": "FCC / DETRAN",
    "options": [
      { "letter": "A", "text": "Cross-Site Scripting (XSS)" },
      { "letter": "B", "text": "SQL Injection" },
      { "letter": "C", "text": "Buffer Overflow" },
      { "letter": "D", "text": "E-mail Spoofing" },
      { "letter": "E", "text": "Man-in-the-Middle Quântico" }
    ],
    "correctLetter": "D",
    "generalExplanation": "E-mail Spoofing é a falsificação do endereço do remetente em mensagens de e-mail, fazendo o destinatário acreditar que a mensagem partiu de uma fonte confiável. Mecanismos como SPF, DKIM e DMARC foram criados exatamente para combater o spoofing.",
    "explanations": {
      "A": "INCORRETA. XSS é uma vulnerabilidade de aplicações web que injeta scripts maliciosos em páginas visualizadas por outros usuários.",
      "B": "INCORRETA. SQL Injection é ataque que injeta comandos maliciosos em formulários web para manipular bancos de dados relacionais.",
      "C": "INCORRETA. Buffer Overflow é vulnerabilidade de software decorrente de gravação de dados além do limite de memória alocado.",
      "D": "CORRETA. E-mail Spoofing consiste em mascarar/forjar o remetente de uma mensagem de e-mail para fraudar o destinatário.",
      "E": "INCORRETA. Expressão inexistente no contexto técnico usual de fraude de e-mail."
    }
  },

  # ----------------------------------------------------
  # Theme 8: Segurança da Informação - Malwares e Engenharia Social (q50 - q56)
  # ----------------------------------------------------
  {
    "id": "inf-q50",
    "subjectId": "informatica",
    "topic": "Segurança da Informação - Ransomware",
    "difficulty": "Médio",
    "statement": "(Prova DETRAN-SP / Vunesp) Um tipo perigoso de código malicioso (malware) infectou os servidores de um departamento estadual, bloqueando o acesso aos arquivos através de criptografia e exibindo uma mensagem na tela que exigia o pagamento de uma quantia em criptomoedas para fornecer a chave de descriptografia. Esse tipo de malware é denominado:",
    "lawReference": "Segurança da Informação - Ameças de Código Malicioso",
    "bancaTag": "Vunesp / DETRAN 2019",
    "options": [
      { "letter": "A", "text": "Spyware" },
      { "letter": "B", "text": "Keylogger" },
      { "letter": "C", "text": "Adware" },
      { "letter": "D", "text": "Rootkit" },
      { "letter": "E", "text": "Ransomware" }
    ],
    "correctLetter": "E",
    "generalExplanation": "Ransomware (de 'ransom' = resgate) é o malware extorsivo que criptografa os arquivos da vítima e exige o pagamento de um resgate para disponibilizar a chave de recuperação dos dados.",
    "explanations": {
      "A": "INCORRETA. Spyware é programa espião que coleta hábitos e dados sigilosos sem criptografar arquivos para resgate.",
      "B": "INCORRETA. Keylogger captura as teclas digitadas no teclado físico.",
      "C": "INCORRETA. Adware exibe propagandas e anúncios invasivos.",
      "D": "INCORRETA. Rootkit oculta e mantém a presença de invasores no núcleo do sistema.",
      "E": "CORRETA. Ransomware é o software malicioso sequestrador de dados por criptografia mediante resgate."
    }
  },
  {
    "id": "inf-q51",
    "subjectId": "informatica",
    "topic": "Segurança da Informação - Phishing e Engenharia Social",
    "difficulty": "Fácil",
    "statement": "(Prova DETRAN-SP / Instituto Avalia 2026) Um servidor do DETRAN-SP recebeu uma mensagem urgente com o logotipo oficial de um banco estatal, informando que sua conta bancária seria bloqueada imediatamente caso ele não clicasse em um link para 'atualizar seus dados cadastrais'. Ao clicar no link, o servidor é direcionado para uma página clonada muito parecida com a original com campos para digitação de agência, conta e senha pessoal. Essa técnica de fraude é conhecida como:",
    "lawReference": "Segurança da Informação - Engenharia Social",
    "bancaTag": "Instituto Avalia / DETRAN-SP 2026",
    "options": [
      { "letter": "A", "text": "Phishing" },
      { "letter": "B", "text": "Worm" },
      { "letter": "C", "text": "Firewall" },
      { "letter": "D", "text": "Backup diferencial" },
      { "letter": "E", "text": "Desfragmentação de disco" }
    ],
    "correctLetter": "A",
    "generalExplanation": "Phishing (pesca de dados) é o ataque de engenharia social que induz a vítima, por meio de e-mails, mensagens ou sites falsos, a revelar voluntariamente informações confidenciais como senhas, códigos de token e números de cartão.",
    "explanations": {
      "A": "CORRETA. Phishing é a técnica que utiliza iscas fraudulentas para roubar senhas e credenciais dos usuários.",
      "B": "INCORRETA. Worm é um malware que se propaga automaticamente pela rede explorando brechas de sistema.",
      "C": "INCORRETA. Firewall é uma barreira de segurança de tráfego de rede, não um golpe.",
      "D": "INCORRETA. Backup diferencial é uma rotina de cópia de segurança.",
      "E": "INCORRETA. Desfragmentação de disco é utilitário de otimização de armazenamento."
    }
  },
  {
    "id": "inf-q52",
    "subjectId": "informatica",
    "topic": "Segurança da Informação - Vírus vs Worm (Minhoca)",
    "difficulty": "Médio",
    "statement": "(Prova DETRAN-SP / Cebraspe) Na taxonomia de malwares em segurança da informação, a diferença técnica fundamental entre um 'Vírus de Computador' e um 'Worm' (Minhoca) consiste em que:",
    "lawReference": "Mecanismos de Propagação de Malwares",
    "bancaTag": "Cebraspe / DETRAN",
    "options": [
      { "letter": "A", "text": "O Vírus não causa nenhum dano ao computador, enquanto o Worm queima a placa-mãe." },
      { "letter": "B", "text": "O Vírus necessita de um arquivo hospedeiro e da execução explícita pelo usuário para se propagar, enquanto o Worm é um programa autônomo que se propaga automaticamente pelas redes explorando vulnerabilidades." },
      { "letter": "C", "text": "O Worm só pode ser transmitido através de cabos de fibra óptica subterrâneos." },
      { "letter": "D", "text": "O Vírus é um hardware físico conectado à porta USB, enquanto o Worm é um software." },
      { "letter": "E", "text": "Não há nenhuma diferença técnica, tratando-se exatamente do mesmo conceito." }
    ],
    "correctLetter": "B",
    "generalExplanation": "O Vírus precisa 'infectar' um arquivo existente e depende de o usuário executar esse hospedeiro para agir. O Worm é um arquivo autônomo e autorreplicante que se espalha pelas redes sem necessidade de ação humana.",
    "explanations": {
      "A": "INCORRETA. Vírus causam danos severos a arquivos e sistemas; malwares não costumam queimar peças fisicamente dessa forma.",
      "B": "CORRETA. O Vírus requer hospedeiro e execução pelo usuário; o Worm propaga-se de modo autônomo explorando vulnerabilidades de rede.",
      "C": "INCORRETA. Worms propagam-se por qualquer tipo de meio de rede (Wi-Fi, cabo, internet).",
      "D": "INCORRETA. Tanto o Vírus quanto o Worm são softwares (códigos maliciosos).",
      "E": "INCORRETA. Há nítida diferenciação técnica na literatura de segurança da informação."
    }
  },
  {
    "id": "inf-q53",
    "subjectId": "informatica",
    "topic": "Segurança da Informação - Cavalo de Troia (Trojan Horse)",
    "difficulty": "Fácil",
    "statement": "(Prova DETRAN-SP / FCC) Um usuário baixou da internet um suposto arquivo intitulado 'Atualizador_Tabela_Detran_2026.exe' acreditando ser uma ferramenta útil de consulta. Ao ser executado, o programa simulou a atualização, mas, em segundo plano, abriu portas do sistema (backdoor) e instalou ferramentas para controle remoto da máquina por invasores. Essa modalidade de malware é classificada como:",
    "lawReference": "Classificação de Malwares - Cavalos de Troia",
    "bancaTag": "FCC / DETRAN",
    "options": [
      { "letter": "A", "text": "Firewall de Aplicação" },
      { "letter": "B", "text": "Assinatura Digital ICP-Brasil" },
      { "letter": "C", "text": "Cavalo de Troia (Trojan Horse)" },
      { "letter": "D", "text": "Protocolo SSL de Alta Precisão" },
      { "letter": "E", "text": "Backup Incremental Contínuo" }
    ],
    "correctLetter": "C",
    "generalExplanation": "O Cavalo de Troia (Trojan Horse) é o código malicioso que se passa por um aplicativo legítimo, útil ou inofensivo para ludibriar o usuário, mas que executa funções ocultas prejudiciais (como abrir portas de acesso para invasores).",
    "explanations": {
      "A": "INCORRETA. Firewall é mecanismo de defesa e controle de conexões.",
      "B": "INCORRETA. Assinatura digital é instrumento criptográfico de autenticidade jurídica.",
      "C": "CORRETA. O Cavalo de Troia apresenta-se como algo desejável para mascarar sua real atividade invasora.",
      "D": "INCORRETA. Nome fictício misturado com protocolo criptográfico.",
      "E": "INCORRETA. Backup é cópia de segurança de dados."
    }
  },
  {
    "id": "inf-q54",
    "subjectId": "informatica",
    "topic": "Segurança da Informação - Spyware e Keylogger",
    "difficulty": "Médio",
    "statement": "(Prova DETRAN-SP / Vunesp) Um funcionário teve suas senhas de acesso aos sistemas de multas e do banco de dados de condutores interceptadas. A investigação da perícia de TI descobriu que havia sido instalado na estação de trabalho um tipo de software espião que monitorava e gravava secretamente tudo o que o usuário digitava no teclado do computador. Esse programa malicioso é denominado:",
    "lawReference": "Programas Espiões e Captura de Dados",
    "bancaTag": "Vunesp / DETRAN 2019",
    "options": [
      { "letter": "A", "text": "Screenlogger" },
      { "letter": "B", "text": "Ransomware" },
      { "letter": "C", "text": "Honeypot" },
      { "letter": "D", "text": "Keylogger" },
      { "letter": "E", "text": "Worm" }
    ],
    "correctLetter": "D",
    "generalExplanation": "Keylogger (de 'key' = tecla e 'logger' = registrador) é a variedade de spyware que captura e armazena as sequências de teclas digitadas pelo usuário no teclado físico para roubo de senhas e dados confidenciais.",
    "explanations": {
      "A": "INCORRETA. Screenlogger captura a imagem da tela (prints) nos cliques do mouse, não o teclado físico.",
      "B": "INCORRETA. Ransomware criptografa dados e cobra resgate financeiro.",
      "C": "INCORRETA. Honeypot é um sistema armadilha legítimo criado por defensores para atrair e estudar invasores.",
      "D": "CORRETA. Keylogger é o malware espião focado em capturar teclas digitadas no teclado.",
      "E": "INCORRETA. Worm é malware autorreplicante de rede."
    }
  },
  {
    "id": "inf-q55",
    "subjectId": "informatica",
    "topic": "Segurança da Informação - Engenharia Social (Vishing e Smishing)",
    "difficulty": "Médio",
    "statement": "(Prova DETRAN-SP / Instituto Avalia 2026) O DETRAN-SP emitiu um alerta contra golpes em que estelionatários enviam mensagens de texto SMS falsas para motoristas ('Seu veículo possui débito pendente. Clique no link para regularizar') e realizam ligações telefônicas fingindo ser atendentes oficiais para extorquir dados. Essas duas variações de engenharia social por SMS e voz são denominadas, respectivamente:",
    "lawReference": "Modalidades de Engenharia Social",
    "bancaTag": "Instituto Avalia / DETRAN-SP 2026",
    "options": [
      { "letter": "A", "text": "SQL Injection e Cross-Site Scripting." },
      { "letter": "B", "text": "Spoofing e Defacing." },
      { "letter": "C", "text": "Rootkit e Botnet." },
      { "letter": "D", "text": "Pharming e Buffer Overflow." },
      { "letter": "E", "text": "Smishing e Vishing." }
    ],
    "correctLetter": "E",
    "generalExplanation": "Smishing é o phishing praticado por meio de mensagens de texto SMS. Vishing (Voice Phishing) é a engenharia social aplicada por chamadas de voz telefônicas fraudulentas.",
    "explanations": {
      "A": "INCORRETA. Ataques a servidores web e bancos de dados relacionais.",
      "B": "INCORRETA. Spoofing é falsificação de identidade de pacotes/e-mail; Defacing é pichação de páginas web.",
      "C": "INCORRETA. Rootkit oculta invasões; Botnet é rede de dispositivos zumbis escravizados.",
      "D": "INCORRETA. Pharming envenena o serviço DNS para redirecionar o usuário a sites falsos; Buffer overflow é falha de estouro de memória.",
      "E": "CORRETA. Smishing (SMS phishing) e Vishing (Voice phishing) são os termos técnicos exatos para fraudes por SMS e telefone."
    }
  },
  {
    "id": "inf-q56",
    "subjectId": "informatica",
    "topic": "Segurança da Informação - Botnets e Ataques DDoS",
    "difficulty": "Difícil",
    "statement": "(Prova DETRAN-SP / Cebraspe) Quando criminosos cibernéticos infectam milhares de computadores e dispositivos IoT desprotegidos na internet com um malware, transformando-os em 'zumbis' controlados remotamente para disparar requisições em massa e derrubar os servidores do DETRAN por sobrecarga, essa rede de computadores zumbis e a modalidade de ataque executada são chamadas de:",
    "lawReference": "Segurança Cibernética - Redes Zumbis e Negação de Serviço",
    "bancaTag": "Cebraspe / DETRAN",
    "options": [
      { "letter": "A", "text": "Botnet e Ataque de Negação de Serviço Distribuída (DDoS)." },
      { "letter": "B", "text": "Intranet e Ataque de Força Bruta Simétrica." },
      { "letter": "C", "text": "Rede Mesh e Engenharia Reversa de BIOS." },
      { "letter": "D", "text": "Extranet e Varredura de Portas TCP passiva." },
      { "letter": "E", "text": "Blockchain e Ataque de Replay Criptográfico." }
    ],
    "correctLetter": "A",
    "generalExplanation": "Uma Botnet (rede de robôs/zumbis) é controlada por um invasor (botmaster) para executar tarefas maliciosas coordenadas, sendo a principal delas o ataque de Negação de Serviço Distribuída (DDoS - Distributed Denial of Service), que esgota a capacidade do servidor alvo.",
    "explanations": {
      "A": "CORRETA. A rede de computadores comprometidos é a Botnet e o ataque de sobrecarga distribuída é o DDoS.",
      "B": "INCORRETA. Intranet é a rede corporativa interna legítima; ataque de força bruta visa adivinhar senhas por tentativas sucessivas.",
      "C": "INCORRETA. Termos incompatíveis com a definição do enunciado.",
      "D": "INCORRETA. Extranet é rede colaborativa com parceiros; varredura de portas apenas identifica serviços ativos.",
      "E": "INCORRETA. Blockchain é livro-razão distribuído imutável; ataque de repetição consiste em capturar e retransmitir pacotes legítimos."
    }
  },

  # ----------------------------------------------------
  # Theme 9: Segurança da Informação - Defesas, Criptografia, Backup e MFA (q57 - q63)
  # ----------------------------------------------------
  {
    "id": "inf-q57",
    "subjectId": "informatica",
    "topic": "Segurança da Informação - Autenticação Multifator (MFA)",
    "difficulty": "Fácil",
    "statement": "(Prova DETRAN-SP / Instituto Avalia 2026) A adoção de Autenticação Multifator (MFA / 2FA) nos sistemas de trânsito é indispensável para evitar acessos indevidos com senhas vazadas. O princípio técnico que define o MFA baseia-se na exigência de apresentação de pelo menos dois fatores de categorias distintas, consagrados na segurança da informação como:",
    "lawReference": "Controle de Acesso e Autenticação",
    "bancaTag": "Instituto Avalia / DETRAN-SP 2026",
    "options": [
      { "letter": "A", "text": "Duas senhas de texto cadastradas no mesmo sistema com tamanhos diferentes." },
      { "letter": "B", "text": "Algo que você sabe (senha/PIN), algo que você tem (token/smartphone) e algo que você é (biometria)." },
      { "letter": "C", "text": "O pagamento de duas taxas de homologação em guias DARE separadas." },
      { "letter": "D", "text": "O login realizado simultaneamente por dois servidores diferentes no mesmo teclado." },
      { "letter": "E", "text": "A reinicialização do computador duas vezes antes de iniciar o expediente." }
    ],
    "correctLetter": "B",
    "generalExplanation": "A autenticação multifator combina fatores de categorias diferentes: 1) Conhecimento (algo que você sabe, ex: senha); 2) Posse (algo que você tem, ex: smartphone com app autenticador); 3) Inerência (algo que você é, ex: biometria/impressão digital/face).",
    "explanations": {
      "A": "INCORRETA. Duas senhas pertencem à mesma categoria ('algo que você sabe'), não configurando múltiplos fatores autênticos.",
      "B": "CORRETA. Os pilares do MFA são: o que você sabe, o que você tem e o que você é.",
      "C": "INCORRETA. Taxas financeiras não constituem fator de autenticação digital.",
      "D": "INCORRETA. Não há exigência de duas pessoas físicas digitando juntas no mesmo teclado.",
      "E": "INCORRETA. Reiniciar o computador não tem relação com segurança de credenciais."
    }
  },
  {
    "id": "inf-q58",
    "subjectId": "informatica",
    "topic": "Segurança da Informação - Finalidade do Firewall",
    "difficulty": "Médio",
    "statement": "(Prova DETRAN-SP / Vunesp) A principal função e benefício de um mecanismo de 'Firewall' (seja implementado em hardware ou em software no sistema operacional) em uma infraestrutura de rede consiste em:",
    "lawReference": "Mecanismos de Defesa Perimetral - Firewall",
    "bancaTag": "Vunesp / DETRAN 2019",
    "options": [
      { "letter": "A", "text": "Escanear arquivos armazenados no disco rígido para desinfetar vírus e cavalos de troia já instalados." },
      { "letter": "B", "text": "Multiplicar a largura de banda da conexão contratada junto à operadora de telecomunicações." },
      { "letter": "C", "text": "Monitorar e controlar o tráfego de rede de entrada e saída, bloqueando ou permitindo conexões com base em um conjunto de regras de segurança preestabelecidas." },
      { "letter": "D", "text": "Realizar cópias de segurança (backup) automáticas de todos os bancos de dados em nuvem pública." },
      { "letter": "E", "text": "Reparar trilhas e setores defeituosos na superfície física de discos magnéticos." }
    ],
    "correctLetter": "C",
    "generalExplanation": "O Firewall atua como um filtro perimetral que inspeciona pacotes de rede e controla quais portas, protocolos e endereços IP têm autorização para estabelecer comunicação entre redes ou entre a internet e o computador.",
    "explanations": {
      "A": "INCORRETA. Escanear e desinfetar arquivos no disco rígido é atribuição primária de softwares Antivírus/Antimalware.",
      "B": "INCORRETA. O Firewall não amplia a velocidade nem a capacidade da banda de internet.",
      "C": "CORRETA. O Firewall filtra o tráfego de entrada e saída com base em portas, protocolos e regras de segurança configuradas.",
      "D": "INCORRETA. Rotinas de backup são de responsabilidade de softwares específicos de armazenamento/cópia de segurança.",
      "E": "INCORRETA. O reparo de setores em disco rígido (bad blocks) é atribuição de ferramentas de diagnóstico de disco físico."
    }
  },
  {
    "id": "inf-q59",
    "subjectId": "informatica",
    "topic": "Segurança da Informação - Criptografia Simétrica vs Assimétrica",
    "difficulty": "Difícil",
    "statement": "(Prova DETRAN-SP / FCC) No estudo dos princípios de criptografia em segurança da informação, a diferença fundamental entre a Criptografia Simétrica e a Criptografia Assimétrica reside no fato de que:",
    "lawReference": "Criptografia - Conceitos de Chaves e Cifras",
    "bancaTag": "FCC / DETRAN",
    "options": [
      { "letter": "A", "text": "A criptografia simétrica não utiliza chaves, dependendo exclusivamente de senhas de 4 dígitos." },
      { "letter": "B", "text": "A criptografia assimétrica só pode ser utilizada em computadores quânticos governamentais." },
      { "letter": "C", "text": "A criptografia simétrica utiliza uma chave para codificar e nenhuma chave para decodificar." },
      { "letter": "D", "text": "A criptografia simétrica utiliza a mesma chave secreta tanto para cifrar quanto para decifrar, enquanto a assimétrica utiliza um par de chaves correlacionadas (chave pública e chave privada)." },
      { "letter": "E", "text": "Na criptografia assimétrica, a chave privada deve ser enviada publicamente a todos os destinatários do e-mail." }
    ],
    "correctLetter": "D",
    "generalExplanation": "Criptografia Simétrica (ex: AES) usa a mesma chave secreta para cifrar e decifrar. Criptografia Assimétrica (ex: RSA, Curvas Elípticas) utiliza um par de chaves: a Chave Pública (que qualquer um pode conhecer) e a Chave Privada (que apenas o titular conhece em segredo).",
    "explanations": {
      "A": "INCORRETA. A criptografia simétrica utiliza algoritmos matemáticos complexos e chaves de 128, 192 ou 256 bits.",
      "B": "INCORRETA. A criptografia assimétrica é utilizada diariamente em qualquer navegador web (HTTPS, SSL/TLS, SSH) e em certificados digitais comuns.",
      "C": "INCORRETA. Decifrar dados cifrados de modo simétrico exige obrigatoriamente a mesma chave secreta.",
      "D": "CORRETA. Simétrica = chave única compartilhada para cifrar e decifrar; Assimétrica = par de chaves distintas (pública e privada).",
      "E": "INCORRETA. A chave privada NUNCA deve ser compartilhada com ninguém; apenas a chave pública pode ser distribuída abertamente."
    }
  },
  {
    "id": "inf-q60",
    "subjectId": "informatica",
    "topic": "Segurança da Informação - Assinatura Digital e Certificados (ICP-Brasil)",
    "difficulty": "Difícil",
    "statement": "(Prova DETRAN-SP / Cebraspe) Na Infraestrutura de Chaves Públicas Brasileira (ICP-Brasil), a Assinatura Digital aplicada em um auto de infração eletrônico garante ao documento três propriedades fundamentais de segurança jurídica:",
    "lawReference": "Legislação e Segurança - Assinatura Digital e ICP-Brasil",
    "bancaTag": "Cebraspe / DETRAN",
    "options": [
      { "letter": "A", "text": "Velocidade, Compactação de dados e Impressão em cores." },
      { "letter": "B", "text": "Anonimato absoluto, Descentralização blockchain e Irrevogabilidade fiscal." },
      { "letter": "C", "text": "Gratuidade perpétua, Isenção tributária e Desnecessidade de senha." },
      { "letter": "D", "text": "Substituição de firma em cartório exclusivamente por reconhecimento facial em vídeo." },
      { "letter": "E", "text": "Autenticidade (identificação do autor), Integridade (certeza de não alteração) e Não Repúdio / Irretratabilidade (impossibilidade de negar a autoria)." }
    ],
    "correctLetter": "E",
    "generalExplanation": "A Assinatura Digital com certificado ICP-Brasil garante: Autenticidade (comprova quem assinou), Integridade (o documento não foi adulterado, pois qualquer alteração invalida o hash) e Não Repúdio (o signatário não pode negar juridicamente a autoria).",
    "explanations": {
      "A": "INCORRETA. Velocidade e impressão não são propriedades jurídicas garantidas por criptografia de assinatura.",
      "B": "INCORRETA. A assinatura digital não visa anonimato, mas sim identificação indubitável do autor perante o Estado.",
      "C": "INCORRETA. Propriedades sem relação com segurança da informação.",
      "D": "INCORRETA. A validade da assinatura digital ICP-Brasil advém de certificados digitais e criptografia assimétrica, não de reconhecimento facial em vídeo isolado.",
      "E": "CORRETA. Autenticidade, Integridade e Não Repúdio são os três pilares canônicos da Assinatura Digital no padrão ICP-Brasil."
    }
  },
  {
    "id": "inf-q61",
    "subjectId": "informatica",
    "topic": "Segurança da Informação - Política de Backup (Estratégia 3-2-1)",
    "difficulty": "Médio",
    "statement": "(Prova DETRAN-SP / Instituto Avalia 2026) A regra ou estratégia '3-2-1' é uma das melhores práticas internacionais mais recomendadas para políticas de cópia de segurança (backup) em órgãos públicos. De acordo com essa regra, a organização deve manter:",
    "lawReference": "Políticas de Continuidade de Negócios e Backup",
    "bancaTag": "Instituto Avalia / DETRAN-SP 2026",
    "options": [
      { "letter": "A", "text": "Pelo menos 3 cópias dos dados (a original e 2 backups), em 2 mídias de tipos diferentes, sendo pelo menos 1 cópia armazenada fora do local físico (off-site ou nuvem)." },
      { "letter": "B", "text": "Backups executados 3 vezes por dia, em 2 dias da semana, por 1 único funcionário autorizado." },
      { "letter": "C", "text": "3 computadores conectados a 2 roteadores com 1 única senha mestra." },
      { "letter": "D", "text": "Cópias arquivadas por 3 meses, com 2 senhas de acesso e 1 pendrive de reserva." },
      { "letter": "E", "text": "3 pastas de trabalho, 2 arquivos de texto e 1 banco de dados no mesmo disco rígido local." }
    ],
    "correctLetter": "A",
    "generalExplanation": "A regra 3-2-1 estabelece: 3 cópias dos dados (1 original + 2 backups); armazenadas em 2 tipos diferentes de suporte/mídia (ex: HD e fita/servidor NAS); e 1 dessas cópias guardada em local físico externo (off-site ou nuvem) para resistir a incêndios, enchentes ou furtos.",
    "explanations": {
      "A": "CORRETA. 3 cópias dos dados, em 2 mídias diferentes, com 1 cópia fora da empresa (off-site/nuvem).",
      "B": "INCORRETA. A regra não se refere a horários do dia nem número de operadores.",
      "C": "INCORRETA. Não se refere a topologia de computadores ou senhas mestras.",
      "D": "INCORRETA. Não se refere a quantidade de meses nem pendrives.",
      "E": "INCORRETA. Manter cópias no mesmo disco rígido anula a segurança contra falhas de hardware ou ransomware."
    }
  },
  {
    "id": "inf-q62",
    "subjectId": "informatica",
    "topic": "Segurança da Informação - Backup Incremental vs Diferencial",
    "difficulty": "Difícil",
    "statement": "(Prova DETRAN-SP / Vunesp) O DETRAN-SP realiza um Backup Completo (Full) de sua base de dados todos os domingos à noite. Durante os dias úteis, o técnico optou por executar 'Backups Incrementais' de segunda a sexta. A característica técnica do Backup Incremental é:",
    "lawReference": "Tipos e Rotinas de Backup",
    "bancaTag": "Vunesp / DETRAN 2019",
    "options": [
      { "letter": "A", "text": "Copiar todos os arquivos da base de dados novamente todas as noites, ocupando o mesmo espaço do domingo." },
      { "letter": "B", "text": "Copiar apenas os arquivos criados ou modificados desde o ÚLTIMO backup (seja ele completo ou incremental), desmarcando o atributo de arquivo." },
      { "letter": "C", "text": "Copiar todos os arquivos criados ou modificados acumulados desde o ÚLTIMO BACKUP COMPLETO do domingo." },
      { "letter": "D", "text": "Apagar os dados antigos do servidor principal logo após a conclusão da cópia na fita." },
      { "letter": "E", "text": "Gravar apenas arquivos de extensão de texto, desconsiderando bancos de dados relacionais." }
    ],
    "correctLetter": "B",
    "generalExplanation": "Backup Incremental copia somente os arquivos alterados/criados desde o último backup realizado (seja Full ou Incremental), sendo muito rápido. Já o Backup Diferencial copia tudo o que mudou desde o último Backup Completo (Full).",
    "explanations": {
      "A": "INCORRETA. Esse é o conceito de Backup Completo (Full).",
      "B": "CORRETA. O backup incremental copia o que mudou desde o último backup realizado (qualquer tipo) e limpa o atributo de arquivo arquivado.",
      "C": "INCORRETA. Essa é a definição exata de Backup Diferencial.",
      "D": "INCORRETA. Backup copia e preserva dados, não deleta os dados da fonte original.",
      "E": "INCORRETA. O backup atua em todos os arquivos designados, sem discriminação de formato de banco de dados."
    }
  },
  {
    "id": "inf-q63",
    "subjectId": "informatica",
    "topic": "Windows 11 - Proteção com Microsoft Defender SmartScreen",
    "difficulty": "Médio",
    "statement": "(Prova DETRAN-SP / FCC) No sistema operacional Windows 11, o recurso integrado 'Microsoft Defender SmartScreen' atua para proteger o usuário principalmente contra:",
    "lawReference": "Windows 11 - Segurança e Proteção Web",
    "bancaTag": "FCC / DETRAN",
    "options": [
      { "letter": "A", "text": "Acesso não autorizado de vírus através da porta serial do monitor de vídeo." },
      { "letter": "B", "text": "Perda de dados decorrente de quedas repentinas de energia elétrica residencial." },
      { "letter": "C", "text": "Acesso a sites conhecidos de phishing e downloads de aplicativos suspeitos ou potencialmente maliciosos baixados da internet." },
      { "letter": "D", "text": "A digitação rápida que cometa erros de pontuação e ortografia em documentos oficiais." },
      { "letter": "E", "text": "A impressão duplicada de guias de recolhimento de IPVA na fila de impressão." }
    ],
    "correctLetter": "C",
    "generalExplanation": "O Microsoft Defender SmartScreen verifica sites e downloads em listas de reputação na nuvem em tempo real, bloqueando acessos a páginas de phishing conhecidas e exibindo alertas de aviso ao tentar abrir programas desconhecidos baixados da web.",
    "explanations": {
      "A": "INCORRETA. Afirmação sem base técnica sobre portas seriais de monitores.",
      "B": "INCORRETA. Proteção contra queda de energia exige No-break (UPS), não software de segurança.",
      "C": "CORRETA. O SmartScreen verifica reputação de páginas da internet e arquivos executáveis baixados, bloqueando sites fraudulentos e malwares.",
      "D": "INCORRETA. Verificação ortográfica é função de corretores de processadores de texto.",
      "E": "INCORRETA. O gerenciamento de filas de impressão é atribuição do Spooler do Windows."
    }
  },

  # ----------------------------------------------------
  # Theme 10: LGPD & Inteligência Artificial Generativa no Serviço Público (q64 - q70)
  # ----------------------------------------------------
  {
    "id": "inf-q64",
    "subjectId": "informatica",
    "topic": "LGPD (Lei 13.709/18) - Classificação de Dados Pessoais Sensíveis",
    "difficulty": "Médio",
    "statement": "(Prova DETRAN-SP / Instituto Avalia 2026) De acordo com o Art. 5º, inciso II da Lei Geral de Proteção de Dados Pessoais (LGPD - Lei Federal nº 13.709/2018), recebe a classificação de 'Dado Pessoal Sensível', exigindo rigorosas medidas de tratamento e segurança por parte do DETRAN-SP, a informação referente a:",
    "lawReference": "Art. 5º, II da Lei nº 13.709/2018 (LGPD)",
    "bancaTag": "Instituto Avalia / DETRAN-SP 2026",
    "options": [
      { "letter": "A", "text": "Nome completo, número do CPF e data de nascimento do condutor." },
      { "letter": "B", "text": "Número da placa, modelo e ano de fabricação de um veículo automotor." },
      { "letter": "C", "text": "Valor do IPVA quitado em exercício anterior em agência bancária credenciada." },
      { "letter": "D", "text": "Dado biométrico (como impressão digital ou reconhecimento facial do condutor), dado referente à saúde ou dado sobre convicção religiosa ou filiação sindical." },
      { "letter": "E", "text": "Endereço comercial da concessionária de veículos autorizada." }
    ],
    "correctLetter": "D",
    "generalExplanation": "O Art. 5º, II da LGPD elenca como dados sensíveis: origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso/filosófico/político, dado referente à saúde ou à vida sexual, dado genético ou biométrico.",
    "explanations": {
      "A": "INCORRETA. Nome, CPF e data de nascimento são dados pessoais comuns (Art. 5º, I).",
      "B": "INCORRETA. Placa e modelo do veículo são dados de registro veicular comum.",
      "C": "INCORRETA. Dados de tributos e taxas constituem dados administrativos/financeiros comuns.",
      "D": "CORRETA. A biometria facial/digital e os dados de saúde dos exames de aptidão física/mental para a CNH enquadram-se expressamente como dados sensíveis pela LGPD.",
      "E": "INCORRETA. Dados de pessoas jurídicas (concessionárias) não são sequer abrangidos como dados pessoais pela LGPD, que tutela a pessoa natural (física)."
    }
  },
  {
    "id": "inf-q65",
    "subjectId": "informatica",
    "topic": "LGPD (Lei 13.709/18) - Papéis dos Agentes de Tratamento e Encarregado (DPO)",
    "difficulty": "Médio",
    "statement": "(Prova DETRAN-SP / Vunesp) Na governança da Lei Geral de Proteção de Dados (LGPD), a pessoa física ou jurídica indicada pelo órgão público para atuar como canal de comunicação entre o órgão (controlador), os cidadãos titulares dos dados pessoais e a Autoridade Nacional de Proteção de Dados (ANPD) é denominada:",
    "lawReference": "Art. 5º, VIII e Art. 41 da Lei nº 13.709/2018 (LGPD)",
    "bancaTag": "Vunesp / DETRAN 2019",
    "options": [
      { "letter": "A", "text": "Controlador Externo" },
      { "letter": "B", "text": "Operador de Banco de Dados" },
      { "letter": "C", "text": "Procurador do Estado de Plantão" },
      { "letter": "D", "text": "Auditor Geral de Trânsito" },
      { "letter": "E", "text": "Encarregado pelo Tratamento de Dados Pessoais (Data Protection Officer - DPO)" }
    ],
    "correctLetter": "E",
    "generalExplanation": "O Encarregado (DPO - Data Protection Officer), previsto no Art. 5º, VIII e Art. 41 da LGPD, é a figura indicada pela entidade para fazer a ponte entre o controlador, os titulares dos dados e a ANPD.",
    "explanations": {
      "A": "INCORRETA. Controlador é a pessoa a quem competem as decisões sobre o tratamento de dados.",
      "B": "INCORRETA. Operador é quem realiza o tratamento em nome do controlador.",
      "C": "INCORRETA. Procurador do Estado exerce a representação judicial e consultoria jurídica do Estado.",
      "D": "INCORRETA. Cargo administrativo sem equivalência ao papel de DPO da LGPD.",
      "E": "CORRETA. O Encarregado (DPO) atua formalmente como o canal de comunicação entre controlador, titulares e a ANPD."
    }
  },
  {
    "id": "inf-q66",
    "subjectId": "informatica",
    "topic": "LGPD (Lei 13.709/18) - Princípios da Finalidade e da Necessidade",
    "difficulty": "Difícil",
    "statement": "(Prova DETRAN-SP / Cebraspe) Ao reformular o formulário de renovação de CNH em seu portal, o DETRAN-SP retirou perguntas desnecessárias que solicitavam a renda mensal familiar e a religião do condutor, mantendo apenas as informações estritamente indispensáveis para a emissão do documento de trânsito. Essa atitude atende perfeitamente ao princípio basilar da LGPD (Art. 6º, III) conhecido como Princípio da:",
    "lawReference": "Art. 6º, III da Lei nº 13.709/2018 (LGPD)",
    "bancaTag": "Cebraspe / DETRAN",
    "options": [
      { "letter": "A", "text": "Necessidade (ou Minimização de Dados)" },
      { "letter": "B", "text": "Publicidade Irrestrita" },
      { "letter": "C", "text": "Livre Concorrência Econômica" },
      { "letter": "D", "text": "Consentimento Irrevogável" },
      { "letter": "E", "text": "Não Repúdio Eletrônico" }
    ],
    "correctLetter": "A",
    "generalExplanation": "O Princípio da Necessidade (minimização de dados), expresso no Art. 6º, III da LGPD, estabelece que o tratamento deve limitar-se ao mínimo necessário para a realização de suas finalidades, coletando apenas dados pertinentes e proporcionais.",
    "explanations": {
      "A": "CORRETA. Princípio da Necessidade (minimização): coletar somente os dados indispensáveis para o serviço público pretendido.",
      "B": "INCORRETA. Publicidade irrestrita violaria a privacidade dos cidadãos tutelada pela lei.",
      "C": "INCORRETA. Princípio de direito econômico, não de proteção de dados pessoais.",
      "D": "INCORRETA. O consentimento na LGPD é revogável a qualquer momento pelo titular.",
      "E": "INCORRETA. Não repúdio é conceito de assinatura digital e criptografia."
    }
  },
  {
    "id": "inf-q67",
    "subjectId": "informatica",
    "topic": "LGPD (Lei 13.709/18) - Tratamento de Dados no Setor Público",
    "difficulty": "Médio",
    "statement": "(Prova DETRAN-SP / Instituto Avalia 2026) De acordo com o Art. 23 da LGPD, o tratamento de dados pessoais realizado por pessoas jurídicas de direito público (como o DETRAN-SP) para a execução de suas competências legais e cumprimento de atribuições de fiscalização viária:",
    "lawReference": "Art. 7º, III e Art. 23 da Lei nº 13.709/2018 (LGPD)",
    "bancaTag": "Instituto Avalia / DETRAN-SP 2026",
    "options": [
      { "letter": "A", "text": "Exige obrigatoriamente a assinatura de termo de consentimento prévio e pago para cada multa registrada." },
      { "letter": "B", "text": "Pode ser realizado com base na hipótese legal de cumprimento de obrigação legal ou execução de políticas públicas, dispensando o consentimento do titular para essas finalidades estritas." },
      { "letter": "C", "text": "É totalmente vedado pela legislação federal sem autorização expressa do Supremo Tribunal Federal." },
      { "letter": "D", "text": "Permite que os dados dos condutores sejam comercializados livremente com seguradoras privadas para gerar receita orçamentária." },
      { "letter": "E", "text": "Só pode ser efetuado se os servidores utilizarem computadores desconectados de qualquer rede." }
    ],
    "correctLetter": "B",
    "generalExplanation": "Pelo Art. 7º, II e III e Art. 23 da LGPD, os órgãos públicos podem tratar dados pessoais para o cumprimento de obrigação legal e execução de políticas públicas independentemente de consentimento do titular.",
    "explanations": {
      "A": "INCORRETA. O cumprimento de atribuições legais de fiscalização de trânsito não depende de consentimento individual nem de pagamento.",
      "B": "CORRETA. A administração pública trata dados com base no cumprimento de obrigação legal/regulatória e execução de políticas públicas sem necessidade de consentimento.",
      "C": "INCORRETA. O tratamento pelo poder público é expressamente permitido e regulado pela LGPD.",
      "D": "INCORRETA. O Art. 26 veda expressamente a transferência e comercialização de bases de dados pessoais pelo poder público para entidades privadas com fins econômicos sem expressa autorização legal.",
      "E": "INCORRETA. Não há vedação de uso de computadores em rede."
    }
  },
  {
    "id": "inf-q68",
    "subjectId": "informatica",
    "topic": "Inteligência Artificial Generativa - Fenômeno da 'Alucinação' (Hallucination)",
    "difficulty": "Médio",
    "statement": "(Prova DETRAN-SP / Instituto Avalia 2026) No uso de ferramentas de Inteligência Artificial Generativa baseadas em Grandes Modelos de Linguagem (LLMs, como ChatGPT, Gemini ou Claude) para auxílio na redação de despachos e pareceres administrativos, o termo técnico 'Alucinação' (Hallucination) descreve o fenômeno em que o modelo:",
    "lawReference": "Inteligência Artificial Generativa - Conceitos e Limitações",
    "bancaTag": "Instituto Avalia / DETRAN-SP 2026",
    "options": [
      { "letter": "A", "text": "Desliga o computador do usuário automaticamente após 15 minutos de inatividade." },
      { "letter": "B", "text": "Exclui permanentemente todos os arquivos do disco rígido por superaquecimento dos circuitos neurais." },
      { "letter": "C", "text": "Gera respostas com alta convicção gramatical e formal, mas que contêm dados falsos, leis inventadas, citações inexistentes ou resoluções fictícias." },
      { "letter": "D", "text": "Recusa-se a responder perguntas formuladas em língua portuguesa." },
      { "letter": "E", "text": "Adquire consciência própria e assume o controle operacional dos semáforos da cidade." }
    ],
    "correctLetter": "C",
    "generalExplanation": "Em modelos probabilísticos de linguagem (LLMs), a 'alucinação' é a geração de textos que parecem extremamente plausíveis e formais, mas que são factualmente incorretos, citando leis, jurisprudências ou dados estatísticos completamente inventados pelo modelo.",
    "explanations": {
      "A": "INCORRETA. Configurações de energia do sistema operacional controlam desligamento, não modelos de IA.",
      "B": "INCORRETA. A IA generativa não apaga fisicamente arquivos do computador dessa maneira.",
      "C": "CORRETA. Alucinação é a produção convincente de dados, fatos ou leis inexistentes devido à natureza probabilística de predição de tokens dos modelos.",
      "D": "INCORRETA. Os principais LLMs modernos são nativamente multilíngues e compreendem português perfeitamente.",
      "E": "INCORRETA. Ficção científica sem fundamento na tecnologia atual de aprendizado de máquina."
    }
  },
  {
    "id": "inf-q69",
    "subjectId": "informatica",
    "topic": "Inteligência Artificial Generativa - Engenharia de Prompts (Few-Shot Prompting)",
    "difficulty": "Difícil",
    "statement": "(Prova DETRAN-SP / FCC) Na interação com sistemas de Inteligência Artificial Generativa, a elaboração de instruções bem formuladas (Engenharia de Prompt) é decisiva para a qualidade das respostas. A técnica denominada 'Few-Shot Prompting' (Prompt com Poucos Exemplos) consiste em:",
    "lawReference": "Tecnologia e IA - Técnicas de Prompting",
    "bancaTag": "FCC / DETRAN",
    "options": [
      { "letter": "A", "text": "Fazer uma pergunta vaga e genérica de apenas uma palavra, deixando o modelo decidir o formato." },
      { "letter": "B", "text": "Reiniciar o modelo 5 vezes seguidas para limpar a memória RAM do servidor remoto." },
      { "letter": "C", "text": "Digitar comandos exclusivos em linguagem binária hexadecimal para obter mais rapidez." },
      { "letter": "D", "text": "Fornecer no próprio texto do prompt alguns exemplos claros de pares de 'entrada e saída desejada' para guiar o modelo quanto ao padrão e tom esperados." },
      { "letter": "E", "text": "Inserir o número de cartão de crédito no prompt para desbloquear a versão corporativa." }
    ],
    "correctLetter": "D",
    "generalExplanation": "Zero-Shot é perguntar sem fornecer exemplos. Few-Shot Prompting é fornecer alguns exemplos (shots) de pares de entrada e saída desejada dentro do prompt para calibrar o modelo no formato e estilo desejados.",
    "explanations": {
      "A": "INCORRETA. Fazer perguntas vagas sem contexto resulta em respostas genéricas de baixa qualidade (Zero-shot ruim).",
      "B": "INCORRETA. O usuário não tem controle sobre reiniciar servidores remotos dos provedores de IA.",
      "C": "INCORRETA. Prompts de LLMs utilizam linguagem natural humana, não código binário hexadecimal.",
      "D": "CORRETA. Few-Shot Prompting instrui a IA fornecendo 2 a 5 exemplos estruturados de entradas e respostas ideais para balizar a tarefa final.",
      "E": "INCORRETA. Prática insegura e sem relação com a técnica de prompting."
    }
  },
  {
    "id": "inf-q70",
    "subjectId": "informatica",
    "topic": "Inteligência Artificial Generativa - Diretrizes de Uso Seguro no Serviço Público",
    "difficulty": "Médio",
    "statement": "(Prova DETRAN-SP / Instituto Avalia 2026) Ao utilizar ferramentas públicas de Inteligência Artificial Generativa disponibilizadas na internet para apoio na elaboração de resumos e minutas de ofícios, o servidor público estadual deve observar a seguinte diretriz de segurança e ética profissional:",
    "lawReference": "Uso Ético e Responsável de IA no Setor Público",
    "bancaTag": "Instituto Avalia / DETRAN-SP 2026",
    "options": [
      { "letter": "A", "text": "Copiar e colar dados pessoais de cidadãos autuados (nomes, CPFs e endereços) nas ferramentas públicas de IA para enriquecer as bases de dados mundiais." },
      { "letter": "B", "text": "Publicar e despachar diretamente qualquer texto gerado pela IA sem necessidade de revisão humana prévia." },
      { "letter": "C", "text": "Utilizar a ferramenta de IA para decidir automaticamente recursos de multas sem participação do agente público de trânsito." },
      { "letter": "D", "text": "Inserir no prompt as senhas dos sistemas corporativos do DETRAN-SP para que a ferramenta consulte os bancos de dados em tempo real." },
      { "letter": "E", "text": "Abster-se de inserir dados pessoais, sigilosos ou protegidos por segredo de justiça na ferramenta pública, e realizar a revisão crítica e validação humana de todo o conteúdo gerado antes de sua utilização." }
    ],
    "correctLetter": "E",
    "generalExplanation": "As diretrizes governamentais de uso ético de IA proíbem estritamente a inserção de dados pessoais ou sigilosos em chats públicos de IA (onde os dados podem ser usados para retreinamento de modelos por empresas privadas) e exigem sempre supervisão e revisão humana integral (human-in-the-loop).",
    "explanations": {
      "A": "INCORRETA. Inserir dados pessoais de terceiros em ferramentas públicas viola a LGPD e o dever de sigilo funcional.",
      "B": "INCORRETA. A revisão humana é mandatória e insubstituível para evitar erros e responsabilização do servidor.",
      "C": "INCORRETA. A decisão de recursos administrativos é ato administrativo privativo de autoridade legalmente investida.",
      "D": "INCORRETA. Revelar senhas institucionais é falta grave funcional e quebra severa de segurança da informação.",
      "E": "CORRETA. O uso seguro de IA exige anonimização prévia (nunca inserir dados pessoais/sigilosos) e validação humana obrigatória de qualquer conteúdo gerado."
    }
  }
]

print(f"Total questions compiled: {len(questions)}")

# Verify all questions
letters = {'A': 0, 'B': 0, 'C': 0, 'D': 0, 'E': 0}
for q in questions:
    corr = q['correctLetter']
    letters[corr] += 1
    assert len(q['options']) == 5, f"{q['id']} does not have 5 options"
    opt_letters = [o['letter'] for o in q['options']]
    assert opt_letters == ['A', 'B', 'C', 'D', 'E'], f"{q['id']} options order issue"
    assert corr in q['explanations'], f"{q['id']} correct letter not in explanations"
    assert q['explanations'][corr].startswith("CORRETA"), f"{q['id']} explanation for {corr} doesn't start with CORRETA"
    for l in ['A', 'B', 'C', 'D', 'E']:
        if l != corr:
            assert q['explanations'][l].startswith("INCORRETA"), f"{q['id']} explanation for {l} doesn't start with INCORRETA"

print("All validations PASSED!")
print("Letter distribution:", letters)

# Format to TypeScript
def format_q(q):
    opts_str = ",\n      ".join([f"{{ letter: '{o['letter']}', text: {json.dumps(o['text'], ensure_ascii=False)} }}" for o in q['options']])
    exp_str = ",\n      ".join([f"{k}: {json.dumps(v, ensure_ascii=False)}" for k, v in q['explanations'].items()])
    
    return f"""  {{
    id: '{q['id']}',
    subjectId: 'informatica',
    topic: {json.dumps(q['topic'], ensure_ascii=False)},
    difficulty: '{q['difficulty']}',
    statement: {json.dumps(q['statement'], ensure_ascii=False)},
    lawReference: {json.dumps(q['lawReference'], ensure_ascii=False)},
    bancaTag: {json.dumps(q['bancaTag'], ensure_ascii=False)},
    options: [
      {opts_str}
    ],
    correctLetter: '{q['correctLetter']}',
    generalExplanation: {json.dumps(q['generalExplanation'], ensure_ascii=False)},
    explanations: {{
      {exp_str}
    }}
  }}"""

formatted_all = ",\n\n".join([format_q(q) for q in questions])

ts_content = f"""import {{ Question }} from '../../types';

export const informaticaQuestions: Question[] = [
{formatted_all}
];
"""

target_path = 'src/data/questions/informaticaQuestions.ts'
with open(target_path, 'w', encoding='utf-8') as f:
    f.write(ts_content)

print(f"Successfully generated {target_path} with {len(questions)} verified questions!")
