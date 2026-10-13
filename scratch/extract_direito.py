import json, re

# Base Q01-Q15 from original file, then new Q16-Q70

with open('src/data/questions/direitoQuestions.ts', 'r', encoding='utf-8') as f:
    orig_text = f.read()

# Let's extract Q01-Q15 blocks
blocks = orig_text.split("id:")
q_01_15 = []
for b in blocks[1:]:
    m_id = re.search(r'^\s*[\'\"]([^\'\"]+)[\'\"]', b)
    if m_id:
        qid = m_id.group(1)
        num = int(re.search(r'\d+', qid).group(0))
        if num <= 15:
            q_01_15.append("id:" + b.rstrip().rstrip(','))

print(f"Extracted {len(q_01_15)} valid original questions Q01-Q15.")
