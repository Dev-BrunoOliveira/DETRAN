import os, glob, re

questions_dir = r'src/data/questions'
ts_files = sorted(glob.glob(os.path.join(questions_dir, '*.ts')))

for fpath in ts_files:
    fname = os.path.basename(fpath)
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    blocks = content.split("id:")
    placeholders = []
    
    for idx, b in enumerate(blocks[1:], 1):
        m_id = re.search(r'^\s*[\'\"]([^\'\"]+)[\'\"]', b)
        qid = m_id.group(1) if m_id else f"Q#{idx}"
        
        m_topic = re.search(r'topic:\s*[\'\"]([^\'\"]+)[\'\"]', b)
        topic = m_topic.group(1) if m_topic else "No Topic"
        
        if "Opção A" in b or "preceito técnico" in b or "as const" in b:
            placeholders.append((qid, topic))
            
    print(f"{fname}: {len(placeholders)} placeholders out of {len(blocks)-1} questions.")

