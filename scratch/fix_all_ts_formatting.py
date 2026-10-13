import re, os, glob

files = ['direitoQuestions.ts', 'informaticaQuestions.ts', 'rlmQuestions.ts', 'portuguesQuestions.ts']

for fname in files:
    fpath = os.path.join('src/data/questions', fname)
    with open(fpath, 'r', encoding='utf-8') as f:
        text = f.read()

    # Replace `{ \n },` or `{\n  },` or `{\n  }` with empty string
    cleaned = re.sub(r'\{\s*\}\s*,?', '', text)
    cleaned = re.sub(r',\s*,', ',', cleaned)
    cleaned = re.sub(r'\[\s*,', '[', cleaned)
    cleaned = re.sub(r',\s*\]', ']', cleaned)

    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(cleaned)

    print(f"Cleaned empty object blocks from {fname}")
