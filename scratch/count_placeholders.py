import os
import glob
import re

questions_dir = r'src/data/questions'
ts_files = glob.glob(os.path.join(questions_dir, '*.ts'))

def analyze_full(filepath):
    fname = os.path.basename(filepath)
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()
    
    q_matches = re.findall(r'id:\s*[\'\"]([^\'\"]+)[\'\"]', text)
    placeholders = re.findall(r'Opção [A-E] apresentando', text) + re.findall(r'preceito técnico e normativo', text)
    
    print(f"{fname}: Total Questions = {len(q_matches)} | Placeholder occurrences = {len(placeholders)}")

for filepath in sorted(ts_files):
    analyze_full(filepath)
