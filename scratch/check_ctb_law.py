import re, json

with open('src/data/questions/ctbQuestions.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's check for any outdated CTB rules in ctbQuestions.ts
# E.g. 20 points only, old CNH validity 5 years for everyone, old child transport age, old fine values
outdated_terms = ['5 anos para condutores com menos de 50 anos', '20 pontos para qualquer infração', '7 anos de idade para cadeirinha']

found = []
for term in outdated_terms:
    if term in text:
        found.append(term)

print("Outdated terms search in CTB questions:", found if found else "None found!")
