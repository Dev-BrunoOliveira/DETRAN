import re

with open('src/data/questions/contranQuestions.ts', 'r', encoding='utf-8') as f:
    text = f.read()

blocks = text.split("id:")
print(f"Total blocks in contranQuestions.ts: {len(blocks)-1}")

warnings = []
for idx, b in enumerate(blocks[1:], 1):
    m_id = re.search(r'^\s*[\'\"]([^\'\"]+)[\'\"]', b)
    qid = m_id.group(1) if m_id else f"contran-q{idx}"
    
    m_topic = re.search(r'topic:\s*[\'\"]([^\'\"]+)[\'\"]', b)
    topic = m_topic.group(1) if m_topic else ""

    opts = re.findall(r'letter:\s*[\'\"]([A-E])[\'\"]\s*,\s*text:\s*[\'\"]([\s\S]*?)[\'\"]\s*\}', b)
    
    if "Opção A" in b or "preceito técnico" in b:
        warnings.append((qid, topic, "Placeholder options found"))
    if len(opts) != 5:
        warnings.append((qid, topic, f"Options count is {len(opts)}"))

print("Warnings in contranQuestions.ts:", len(warnings))
for w in warnings:
    print(w)
