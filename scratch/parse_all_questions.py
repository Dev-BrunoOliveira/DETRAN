import os
import glob
import re
import json

questions_dir = r'src/data/questions'
files = glob.glob(os.path.join(questions_dir, '*.ts'))

for fpath in sorted(files):
    fname = os.path.basename(fpath)
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split by `id:`
    parts = content.split("id:")
    issues = []
    
    for idx, part in enumerate(parts[1:], 1):
        # Extract ID
        m_id = re.search(r'^\s*[\'\"]([^\'\"]+)[\'\"]', part)
        qid = m_id.group(1) if m_id else f"Q#{idx}"

        # Extract Topic
        m_topic = re.search(r'topic:\s*[\'\"]([^\'\"]+)[\'\"]', part)
        topic = m_topic.group(1) if m_topic else "MISSING TOPIC"

        # Extract options
        opts_m = re.findall(r'\{\s*letter:\s*[\'\"]([A-E])[\'\"]\s*,\s*text:\s*[\'\"]([\s\S]*?)[\'\"]\s*\}', part)
        
        # Check for generic/placeholder option text
        for l, text in opts_m:
            if "Opção " in text or "preceito técnico" in text or "erro conceitual" in text or len(text.strip()) < 3:
                issues.append((qid, topic, f"Bad option {l}: {text[:50]}"))
        
        if len(opts_m) != 5:
            issues.append((qid, topic, f"Only found {len(opts_m)} options (expected 5)"))
            
        # Extract correctLetter
        m_corr = re.search(r'correctLetter:\s*[\'\"]([A-E])[\'\"]', part)
        if not m_corr:
            issues.append((qid, topic, "Missing correctLetter"))
        else:
            corr = m_corr.group(1)
            # Check if explanation for correct option confirms it's correct
            exp_m = re.search(r'explanations:\s*\{([\s\S]*?)\}', part)
            if exp_m:
                exp_text = exp_m.group(1)
                # check if corr letter explanation starts with CORRETA
                corr_exp = re.search(rf'{corr}:\s*[\'\"]([\s\S]*?)[\'\"]', exp_text)
                if corr_exp and "CORRETA" not in corr_exp.group(1).upper():
                    issues.append((qid, topic, f"correctLetter is {corr} but explanation is: {corr_exp.group(1)[:60]}"))

    print(f"File: {fname} | Total Qs: {len(parts)-1} | Issues found: {len(issues)}")
    if issues:
        for qid, topic, msg in issues[:10]:
            print(f"   - [{qid}] ({topic}): {msg}")
        if len(issues) > 10:
            print(f"   ... and {len(issues)-10} more issues.")
