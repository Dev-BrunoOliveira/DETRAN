import re

def audit_ctb(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find each question block
    # We can search for { id: 'ctb-...' }
    q_blocks = re.findall(r'\{\s*id:\s*[\'\"]([^\'\"]+)[\'\"][\s\S]*?\n  \}', content)
    print(f"Found {len(q_blocks)} question matches in {filepath}")

audit_ctb(r'src/data/questions/ctbQuestions.ts')
audit_ctb(r'src/data/questions/contranQuestions.ts')
