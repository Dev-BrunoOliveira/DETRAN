import re

with open('src/data/questions/ctbQuestions.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Parse all questions from ctbQuestions.ts
blocks = content.split("id:")
print(f"Loaded {len(blocks)-1} questions from ctbQuestions.ts")

warnings = []
for idx, b in enumerate(blocks[1:], 1):
    m_id = re.search(r'^\s*[\'\"]([^\'\"]+)[\'\"]', b)
    qid = m_id.group(1) if m_id else f"ctb-q{idx}"
    
    m_topic = re.search(r'topic:\s*[\'\"]([^\'\"]+)[\'\"]', b)
    topic = m_topic.group(1) if m_topic else ""

    m_stmt = re.search(r'statement:\s*[\'\"]([\s\S]*?)[\'\"]', b)
    stmt = m_stmt.group(1) if m_stmt else ""
    
    m_corr = re.search(r'correctLetter:\s*[\'\"]([A-E])[\'\"]', b)
    corr = m_corr.group(1) if m_corr else ""
    
    opts = re.findall(r'\{\s*letter:\s*[\'\"]([A-E])[\'\"]\s*,\s*text:\s*[\'\"]([\s\S]*?)[\'\"]\s*\}', b)
    
    # Check options count
    if len(opts) != 5:
        warnings.append((qid, topic, f"Options count is {len(opts)} instead of 5"))
        
    # Check if correct option letter exists
    letters = [l for l, t in opts]
    if corr not in letters:
        warnings.append((qid, topic, f"correctLetter '{corr}' not found in option letters {letters}"))

print("Warnings found in ctbQuestions.ts:", len(warnings))
for w in warnings:
    print(w)
