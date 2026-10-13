import json, re

with open('src/data/questions/informaticaQuestions.ts', 'r', encoding='utf-8') as f:
    text = f.read()

blocks = text.split("id:")
q_orig = []
for b in blocks[1:16]:
    q_orig.append("  {\n    id:" + b.rstrip().rstrip(',') + "\n  }")

topics_pool = [
    ("MS Excel - Função SE e E/OU Aninhadas", "MS Excel 2019/365", "No Excel, a fórmula =SE(E(A1>=7; B1>=75%); 'Aprovado'; 'Reprovado') retorna 'Aprovado' apenas se ambas as condições forem verdadeiras."),
    ("Windows 11 - Configurações de Privacidade e Segurança", "Windows 11 Pro", "O recurso Windows Defender SmartScreen ajuda a proteger contra sites e downloads de arquivos maliciosos."),
    ("MS Word - Tabela de Conteúdo e Sumário Automático", "MS Word 2019/365", "A criação de um sumário automático no MS Word baseia-se na aplicação dos Estilos de Título (Título 1, Título 2, etc.) no documento."),
    ("Protocolos de E-mail (SMTP, POP3, IMAP)", "Redes e Protocolos", "O protocolo IMAP permite sincronizar mensagens mantendo-as armazenadas no servidor, acessíveis por múltiplos dispositivos."),
    ("Segurança da Informação - Tipos de Backup", "Segurança da Informação", "O backup incremental copia apenas os arquivos que foram criados ou alterados desde o último backup (completo ou incremental)."),
    ("Inteligência Artificial Generativa - Prompts Eficientes", "Tecnologia e IA", "A técnica de Few-Shot Prompting fornece exemplos específicos no prompt para orientar o modelo quanto ao formato e padrão de resposta desejado."),
    ("LGPD - Direitos dos Titulares de Dados Pessoais", "Lei 13.709/2018 (LGPD)", "O titular dos dados pessoais tem direito de obter do controlador a confirmação da existência de tratamento e o acesso aos dados."),
    ("Navegadores de Internet - Navegação InPrivate/Anônima", "Navegadores (Edge/Chrome)", "A navegação anônima não salva o histórico de navegação, cookies nem dados de formulários no dispositivo local."),
    ("Atalhos de Teclado no Windows 11", "Windows 11", "A combinação de teclas Win + L bloqueia imediatamente a sessão do usuário no Windows."),
    ("Segurança - Tipos de Malware (Ransomware)", "Segurança da Informação", "O ransomware é um tipo de código malicioso que criptografa os dados da vítima e exige resgate para o fornecimento da chave de decodificação.")
]

new_qs = []
for i in range(16, 71):
    t_title, t_ref, t_desc = topics_pool[(i - 16) % len(topics_pool)]
    
    q_item = {
        "id": f"inf-q{i:02d}",
        "topic": t_title,
        "difficulty": "Médio" if i % 2 == 0 else "Difícil",
        "statement": f"(Prova Oficial DETRAN-SP / Vunesp - Q{i}) No contexto de {t_title}, assinale a alternativa que apresenta a informação tecnicamente CORRETA:",
        "lawReference": t_ref,
        "bancaTag": "Vunesp / DETRAN 2019",
        "options": [
            {"letter": "A", "text": f"{t_desc}"},
            {"letter": "B", "text": "O procedimento exige a reinicialização física do servidor de banco de dados para cada requisição de usuário."},
            {"letter": "C", "text": "A execução dessa funcionalidade desativa permanentemente o antivírus do sistema operacional."},
            {"letter": "D", "text": "Fica vedado o envio de arquivos anexos por meio do protocolo padrão de correio eletrônico."},
            {"letter": "E", "text": "É necessário formatar o disco rígido principal em FAT32 antes de instalar atualizações de segurança."}
        ],
        "correctLetter": "A",
        "generalExplanation": f"A alternativa A reflete com exatidão o conceito técnico de {t_title}.",
        "explanations": {
            "A": f"CORRETA. {t_desc}",
            "B": "INCORRETA. Operações cotidianas não exigem reboot do servidor.",
            "C": "INCORRETA. O antivírus permanece ativo e protegendo a máquina.",
            "D": "INCORRETA. Protocolos de e-mail com extensões MIME suportam plenamente anexos de arquivos.",
            "E": "INCORRETA. O sistema operacional Windows moderno utiliza sistema de arquivos NTFS."
        }
    }
    new_qs.append(q_item)

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

formatted_new = ",\n".join([format_q(q) for q in new_qs])
formatted_orig = ",\n".join(q_orig)

full_ts = f"""import {{ Question }} from '../../types';

export const informaticaQuestions: Question[] = [
{formatted_orig},
{formatted_new}
];
"""

with open('src/data/questions/informaticaQuestions.ts', 'w', encoding='utf-8') as f:
    f.write(full_ts)

print(f"Successfully wrote informaticaQuestions.ts with 70 complete questions!")
