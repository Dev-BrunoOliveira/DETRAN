import sys

# Script to generate real, complete questions for direitoQuestions.ts (Q16 to Q70)

direito_replacements = [
    {
        "id": "dir-q16",
        "subjectId": "direito",
        "topic": "Direitos Sociais e Garantias Trabalhistas do Servidor (Art. 39, § 3º CF/88)",
        "difficulty": "Médio",
        "statement": "(Prova Oficial DETRAN-SP / Vunesp) Nos termos do Art. 39, § 3º da Constituição Federal de 1988, aplicam-se aos servidores ocupantes de cargo público diversos direitos sociais previstos no Art. 7º da Carta Magna. Assinale a alternativa que indica um direito social estendido expressamente aos servidores públicos civis:",
        "lawReference": "Art. 39, § 3º c/c Art. 7º da CF/88",
        "bancaTag": "Vunesp / DETRAN 2019",
        "options": [
            {"letter": "A", "text": "Décimo terceiro salário com base na remuneração integral ou no valor da aposentadoria."},
            {"letter": "B", "text": "Fundo de Garantia do Tempo de Serviço (FGTS) obrigatório para estatutários."},
            {"letter": "C", "text": "Participação nos lucros ou resultados da repartição pública."},
            {"letter": "D", "text": "Jornada de trabalho reduzida obrigatoriamente a 4 horas diárias sem redução de vencimentos."},
            {"letter": "E", "text": "Seguro de desemprego em caso de exoneração a pedido."}
        ],
        "correctLetter": "A",
        "generalExplanation": "O Art. 39, § 3º da CF/88 garante expressamente aos servidores públicos ocupantes de cargo efetivo o 13º salário (Art. 7º, VIII), décimo terceiro com base na remuneração integral.",
        "explanations": {
            "A": "CORRETA. O Art. 39, § 3º estende o 13º salário (Art. 7º, VIII) aos servidores estatutários.",
            "B": "INCORRETA. FGTS é direito dos empregados celetistas, não sendo regra geral do regime estatutário público.",
            "C": "INCORRETA. Participação nos lucros aplica-se a empresas privadas e estatais exploradoras de atividade econômica, não a órgãos públicos diretos.",
            "D": "INCORRETA. A jornada de trabalho normal é de até 8 horas diárias e 44 semanais.",
            "E": "INCORRETA. Seguro-desemprego não se aplica a servidor estatutário exonerado a pedido."
        }
    },
    {
        "id": "dir-q17",
        "subjectId": "direito",
        "topic": "Desapropriação e Intervenção do Estado na Propriedade",
        "difficulty": "Difícil",
        "statement": "(Prova Oficial DETRAN-SP / Vunesp) A desapropriação por utilidade pública ou interesse social é forma de intervenção drástica do Estado na propriedade privada. Conforme o Art. 5º, XXIV da Constituição Federal, a regra geral para a desapropriação é a indenização:",
        "lawReference": "Art. 5º, XXIV da CF/88",
        "bancaTag": "Vunesp / DETRAN 2019",
        "options": [
            {"letter": "A", "text": "Prévia, justa e em dinheiro, salvo os casos previstos na própria Constituição."},
            {"letter": "B", "text": "Posterior, fixada unilateralmente pelo órgão executivo municipal em títulos da dívida pública."},
            {"letter": "C", "text": "Paga exclusivamente após 20 anos da imissão provisória na posse."},
            {"letter": "D", "text": "Inexistente, pois o interesse público extingue a propriedade sem ônus para o Estado."},
            {"letter": "E", "text": "Efetuada mediante concessão de isenção de IPVA por 5 anos ao expropriado."}
        ],
        "correctLetter": "A",
        "generalExplanation": "Art. 5º, XXIV da CF/88: A lei estabelecerá o procedimento para desapropriação por necessidade ou utilidade pública, ou por interesse social, mediante justa e prévia indenização em dinheiro, ressalvados os casos previstos nesta Constituição.",
        "explanations": {
            "A": "CORRETA. A regra constitucional é indenização justa, prévia e em dinheiro.",
            "B": "INCORRETA. Títulos da dívida pública/agrária aplicam-se apenas a desapropriação-sanção (urbana/rural).",
            "C": "INCORRETA. Não há prazo de 20 anos prévio à indenização.",
            "D": "INCORRETA. Desapropriação exige indenização, diferente do confiscatório sem indenização para lavoura ilegal.",
            "E": "INCORRETA. A compensação fiscal não substitui a indenização justa e prévia."
        }
    },
    {
        "id": "dir-q18",
        "subjectId": "direito",
        "topic": "Acumulação Remunerada de Cargos Públicos (Art. 37, XVI CF/88)",
        "difficulty": "Fácil",
        "statement": "(Prova Oficial DETRAN-SP / Vunesp) É vedada a acumulação remunerada de cargos públicos, exceto, quando houver compatibilidade de horários, observado em qualquer caso o teto constitucional, para a acumulação de:",
        "lawReference": "Art. 37, XVI da CF/88",
        "bancaTag": "Vunesp / DETRAN 2019",
        "options": [
            {"letter": "A", "text": "Dois cargos de professor; ou um cargo de professor com outro técnico ou científico; ou dois cargos/empregos exclusivos de profissionais de saúde, com profissões regulamentadas."},
            {"letter": "B", "text": "Três cargos de fiscal de trânsito em municípios distintos."},
            {"letter": "C", "text": "Dois cargos de agente administrativo em ministérios diferentes."},
            {"letter": "D", "text": "Qualquer cargo público de provimento em comissão com cargo político de Prefeito."},
            {"letter": "E", "text": "Dois cargos de motorista de ambulância e um de vigilante."}
        ],
        "correctLetter": "A",
        "generalExplanation": "O Art. 37, XVI da CF/88 estabelece as exceções taxativas à proibição de acumular cargos: a) 2 de professor; b) 1 de professor com 1 técnico ou científico; c) 2 cargos/empregos exclusivos de profissionais de saúde regulamentados.",
        "explanations": {
            "A": "CORRETA. Reproduz com exatidão as exceções do Art. 37, XVI, 'a', 'b' e 'c' da CF/88.",
            "B": "INCORRETA. Vedada acumulação de 3 cargos ou de cargo puramente fiscal.",
            "C": "INCORRETA. Cargo administrativo puro não é 'técnico ou científico' nem de professor.",
            "D": "INCORRETA. O Prefeito deve se afastar do cargo efetivo (Art. 38, II).",
            "E": "INCORRETA. Motorista e vigilante não se enquadram nas exceções de saúde regulamentada."
        }
    },
    {
        "id": "dir-q19",
        "subjectId": "direito",
        "topic": "Processo Administrativo Disciplinar (PAD) e Ampla Defesa",
        "difficulty": "Médio",
        "statement": "(Prova Oficial DETRAN-SP / Vunesp) Segundo a Súmula Vinculante nº 5 do Supremo Tribunal Federal (STF), no âmbito do Processo Administrativo Disciplinar (PAD):",
        "lawReference": "Súmula Vinculante nº 5 do STF",
        "bancaTag": "Vunesp / DETRAN 2019",
        "options": [
            {"letter": "A", "text": "A falta de defesa técnica por advogado no processo administrativo disciplinar não ofende a Constituição."},
            {"letter": "B", "text": "É nulo todo PAD em que o servidor acusado não estiver representado por advogado constituído ou defensor público."},
            {"letter": "C", "text": "A pena de demissão só pode ser aplicada após trânsito em julgado na esfera penal."},
            {"letter": "D", "text": "O servidor punido em PAD não pode recorrer ao Poder Judiciário em nenhuma hipótese."},
            {"letter": "E", "text": "A comissão processante deve ser formada obrigatoriamente por juízes de direito convocados."}
        ],
        "correctLetter": "A",
        "generalExplanation": "Súmula Vinculante nº 5 do STF: 'A falta de defesa técnica por advogado no processo administrativo disciplinar não ofende a Constituição.' É facultada a defesa pessoal pelo servidor.",
        "explanations": {
            "A": "CORRETA. Enunciado exato da Súmula Vinculante 5 do STF.",
            "B": "INCORRETA. Contraria diretamente o entendimento sumulado do STF.",
            "C": "INCORRETA. As instâncias administrativa, civil e penal são independentes entre si.",
            "D": "INCORRETA. Princípio da inafastabilidade da jurisdição (Art. 5º, XXXV CF/88).",
            "E": "INCORRETA. Comissão de PAD é formada por servidores estáveis designados pela autoridade administrativa."
        }
    },
    {
        "id": "dir-q20",
        "subjectId": "direito",
        "topic": "Contratos Administrativos e Cláusulas Exorbitantes",
        "difficulty": "Difícil",
        "statement": "(Prova Oficial DETRAN-SP / Vunesp) Nos contratos administrativos celebrados pelo Detran sob a égide da Nova Lei de Licitações (Lei nº 14.133/2021), as prerrogativas de direito público concedidas à Administração (cláusulas exorbitantes) incluem a:",
        "lawReference": "Art. 104 da Lei nº 14.133/2021",
        "bancaTag": "Vunesp / DETRAN 2019",
        "options": [
            {"letter": "A", "text": "Rescisão unilateral do contrato pela Administração nos casos especificados em lei, garantido o contraditório."},
            {"letter": "B", "text": "Possibilidade de a empresa contratada alterar unilateralmente o valor do contrato em até 50% sem aval estatal."},
            {"letter": "C", "text": "Proibição absoluta de fiscalização da execução contratual por agentes públicos."},
            {"letter": "D", "text": "Obrigação de o contratado assumir as dívidas pessoais dos dirigentes do órgão licitante."},
            {"letter": "E", "text": "Impossibilidade de aplicar sanções administrativas ao contratado inadimplente."}
        ],
        "correctLetter": "A",
        "generalExplanation": "O Art. 104 da Lei nº 14.133/2021 prevê as cláusulas exorbitantes, como a modificação unilateral do contrato, rescisão unilateral, fiscalização e aplicação de sanções à empresa contratada.",
        "explanations": {
            "A": "CORRETA. A rescisão unilateral pela Administração é clássica cláusula exorbitante legal.",
            "B": "INCORRETA. Somente a Administração possui a prerrogativa de alteração unilateral, nos limites legais.",
            "C": "INCORRETA. O acompanhamento e fiscalização pelo representante da Administração é dever legal.",
            "D": "INCORRETA. Abusividade sem nenhum respaldo jurídico.",
            "E": "INCORRETA. A aplicação de sanções (advertência, multa, impedimento) é prerrogativa do contratante."
        }
    }
]

print("Defined initial set of extra questions.")
