import re

with open('src/data/questions/informaticaQuestions.ts', 'r', encoding='utf-8') as f:
    text = f.read()

blocks = text.split('id:')[1:16]
for i, b in enumerate(blocks, 1):
    m_id = re.search(r"^\s*['\"]([^'\"]+)['\"]", b)
    qid = m_id.group(1) if m_id else f"q{i}"
    m_topic = re.search(r"topic:\s*['\"]([^'\"]+)['\"]", b)
    topic = m_topic.group(1) if m_topic else ""
    m_stmt = re.search(r"statement:\s*['\"]([\s\S]*?)['\"],\s*\n\s*(?:lawReference|options)", b)
    stmt = m_stmt.group(1) if m_stmt else ""
    opts = re.findall(r"letter:\s*['\"]([A-E])['\"]\s*,\s*text:\s*['\"]([\s\S]*?)['\"]\s*\}", b)
    corr = re.search(r"correctLetter:\s*['\"]([A-E])['\"]", b).group(1)
    
    print(f"=== {qid} ({topic}) ===")
    print(f"STMT: {stmt}")
    print(f"CORRECT: {corr}")
    for l, t in opts:
        print(f"  {l}: {t}")
    print()
