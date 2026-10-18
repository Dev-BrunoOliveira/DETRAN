import glob
import os
import re

for f in glob.glob('src/data/questions/*.ts'):
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    fname = os.path.basename(f)
    blocks = c.split('id:')[1:]
    letters = {}
    for b in blocks:
        m = re.search(r"correctLetter:\s*['\"]([A-E])['\"]", b)
        if m:
            l = m.group(1)
            letters[l] = letters.get(l, 0) + 1
    print(f"{fname}: {len(blocks)} questions | Letters: {letters}")
