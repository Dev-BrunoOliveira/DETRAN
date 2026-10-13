import re, os, glob

files = ['direitoQuestions.ts', 'informaticaQuestions.ts', 'rlmQuestions.ts', 'portuguesQuestions.ts']

for fname in files:
    fpath = os.path.join('src/data/questions', fname)
    with open(fpath, 'r', encoding='utf-8') as f:
        text = f.read()

    blocks = text.split("id:")
    print(f"\n==================== {fname} ====================")
    for idx, b in enumerate(blocks[1:], 1):
        if "Opção A" in b or "preceito técnico" in b:
            m_id = re.search(r'^\s*[\'\"]([^\'\"]+)[\'\"]', b)
            qid = m_id.group(1) if m_id else f"Q#{idx}"
            m_topic = re.search(r'topic:\s*[\'\"]([^\'\"]+)[\'\"]', b)
            topic = m_topic.group(1) if m_topic else "No Topic"
            print(f"  {qid}: {topic}")
