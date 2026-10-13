import re

with open('src/data/questions/ctbQuestions.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's parse all 100 questions from ctbQuestions.ts
blocks = text.split("id:")
print(f"Total blocks in ctbQuestions.ts: {len(blocks)-1}")

ctb_qs = []
for i, b in enumerate(blocks[1:], 1):
    m_id = re.search(r'^\s*[\'\"]([^\'\"]+)[\'\"]', b)
    qid = m_id.group(1) if m_id else f"ctb-q{i}"
    
    m_topic = re.search(r'topic:\s*[\'\"]([^\'\"]+)[\'\"]', b)
    topic = m_topic.group(1) if m_topic else ""
    
    m_ref = re.search(r'lawReference:\s*[\'\"]([^\'\"]+)[\'\"]', b)
    ref = m_ref.group(1) if m_ref else ""

    m_stmt = re.search(r'statement:\s*[\'\"]([\s\S]*?)[\'\"]', b)
    stmt = m_stmt.group(1) if m_stmt else ""
    
    m_corr = re.search(r'correctLetter:\s*[\'\"]([A-E])[\'\"]', b)
    corr = m_corr.group(1) if m_corr else ""
    
    opts = re.findall(r'letter:\s*[\'\"]([A-E])[\'\"]\s*,\s*text:\s*[\'\"]([\s\S]*?)[\'\"]', b)
    
    ctb_qs.append({
        'id': qid,
        'topic': topic,
        'ref': ref,
        'stmt': stmt[:80],
        'corr': corr,
        'num_opts': len(opts)
    })

print("Sample questions from CTB:")
for q in ctb_qs[:10]:
    print(q)
