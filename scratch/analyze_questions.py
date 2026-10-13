import os
import glob
import re

questions_dir = r'src/data/questions'
ts_files = glob.glob(os.path.join(questions_dir, '*.ts'))

def check_file(filepath):
    fname = os.path.basename(filepath)
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()
    
    # Split by object pattern `{ id:`
    blocks = text.split("id:")
    print(f"\n==========================================")
    print(f"FILE: {fname} (Total `{ 'id:' }` blocks: {len(blocks)-1})")
    print(f"==========================================")
    
    generic_count = 0
    missing_opts_count = 0
    invalid_correct = 0

    for i, b in enumerate(blocks[1:], 1):
        # get ID
        m_id = re.search(r'^\s*[\'\"]([^\'\"]+)[\'\"]', b)
        qid = m_id.group(1) if m_id else f"b{i}"
        
        # get topic
        m_topic = re.search(r'topic:\s*[\'\"]([^\'\"]+)[\'\"]', b)
        topic = m_topic.group(1) if m_topic else "No Topic"
        
        # get statement
        m_stmt = re.search(r'statement:\s*[\'\"]([\s\S]*?)[\'\"],\s*\n\s*lawReference', b)
        if not m_stmt:
            m_stmt = re.search(r'statement:\s*[\'\"]([\s\S]*?)[\'\"],\s*\n\s*options', b)
        stmt = m_stmt.group(1).replace('\n', ' ')[:60] if m_stmt else "No Statement"
        
        # check if generic option text is present
        if "Opção A" in b or "preceito técnico" in b or "erro conceitual" in b:
            generic_count += 1
            print(f"  [GENERIC OPTIONS] {qid} | Topic: {topic} | Stmt: {stmt}...")

        # check options count
        opts = re.findall(r'letter:\s*[\'\"]([A-E])[\'\"]\s*,\s*text:\s*[\'\"]([\s\S]*?)[\'\"]\s*\}', b)
        if len(opts) < 5:
            missing_opts_count += 1
            print(f"  [MISSING/BAD OPTS ({len(opts)}/5)] {qid} | Topic: {topic} | Stmt: {stmt}...")
            
    print(f"Summary for {fname}: Generic/Placeholder Options: {generic_count} | Missing/Bad Opts: {missing_opts_count}")

for filepath in ts_files:
    check_file(filepath)
