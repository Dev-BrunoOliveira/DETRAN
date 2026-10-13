import os
import re

def inspect_file(filepath):
    fname = os.path.basename(filepath)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split by `{ id:` or `id:`
    blocks = content.split("id:")
    print(f"\n==========================================")
    print(f"FILE: {fname} (Total questions: {len(blocks)-1})")
    print(f"==========================================")
    
    placeholder_qs = []
    
    for i, b in enumerate(blocks[1:], 1):
        m_id = re.search(r'^\s*[\'\"]([^\'\"]+)[\'\"]', b)
        qid = m_id.group(1) if m_id else f"Q#{i}"
        
        m_topic = re.search(r'topic:\s*[\'\"]([^\'\"]+)[\'\"]', b)
        topic = m_topic.group(1) if m_topic else "No Topic"
        
        # Check text in options
        if "Opção A" in b or "preceito técnico" in b or "as const" in b:
            placeholder_qs.append((qid, topic))
            
    print(f"Placeholder questions count in {fname}: {len(placeholder_qs)}")
    if placeholder_qs:
        for qid, topic in placeholder_qs:
            print(f"   - {qid}: {topic}")

inspect_file(r'src/data/questions/ctbQuestions.ts')
inspect_file(r'src/data/questions/contranQuestions.ts')
inspect_file(r'src/data/questions/direitoQuestions.ts')
inspect_file(r'src/data/questions/informaticaQuestions.ts')
inspect_file(r'src/data/questions/portuguesQuestions.ts')
inspect_file(r'src/data/questions/rlmQuestions.ts')
