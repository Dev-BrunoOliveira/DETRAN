import re
import json

with open('src/data/questions/informaticaQuestions.ts', 'r', encoding='utf-8') as f:
    text = f.read()

blocks = text.split("id:")[1:]
print(f"Total questions: {len(blocks)}")

bogus_count = 0
letter_counts = {'A': 0, 'B': 0, 'C': 0, 'D': 0, 'E': 0}

for i, b in enumerate(blocks, 1):
    m_id = re.search(r"^\s*['\"]([^'\"]+)['\"]", b)
    qid = m_id.group(1) if m_id else f"q{i}"
    
    m_corr = re.search(r"correctLetter:\s*['\"]([A-E])['\"]", b)
    corr = m_corr.group(1) if m_corr else "?"
    if corr in letter_counts:
        letter_counts[corr] += 1
        
    m_topic = re.search(r"topic:\s*['\"]([^'\"]+)['\"]", b)
    topic = m_topic.group(1) if m_topic else "No Topic"
    
    m_stmt = re.search(r"statement:\s*['\"]([\s\S]*?)['\"],\s*\n\s*lawReference", b)
    if not m_stmt:
        m_stmt = re.search(r"statement:\s*['\"]([\s\S]*?)['\"],\s*\n\s*options", b)
    stmt = m_stmt.group(1).replace('\n', ' ')[:70] if m_stmt else "No Statement"
    
    opts = re.findall(r"letter:\s*['\"]([A-E])['\"]\s*,\s*text:\s*['\"]([\s\S]*?)['\"]\s*\}", b)
    
    has_bogus = any(
        "reinicialização física" in o[1] 
        or "poeira dos componentes" in o[1]
        or "3 testemunhas" in o[1]
        or "imprimir documentos sem usar tinta" in o[1]
        or "desativa permanentemente o antivírus" in o[1]
        or "formatar o disco rígido principal em FAT32" in o[1]
        for o in opts
    )
    
    if has_bogus or i <= 15:
        print(f"[{qid}] Corr: {corr} | Bogus: {has_bogus} | Topic: {topic}")
        for l, t in opts:
            print(f"    {l}: {t[:65]}")
        print()
    if has_bogus:
        bogus_count += 1

print("="*50)
print(f"Total with bogus/absurd distractors: {bogus_count}/{len(blocks)}")
print(f"Letter distribution: {letter_counts}")
