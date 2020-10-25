"""
    Les tuples : les listes non modifiables
    avantages : affectation multiple
    tup = (t1, t2)
"""
# une seule affectation
variable_1 = (1, "Passer la saluation", "Reponse de la salution")

# affectation multiple 1
variable_2 = 1, 2, 3, "Go Go"

# affectation multiple 2
variable_3, variable_4 = 45, 52

"""
    les valeurs dans une tuple ne sont pas modifiables
        variable_1[0] = 5
    TypeError: 'tuple' object does not support item assignment
"""

"""
    un tuple peut prendre une liste de valeurs
"""
variable_5 = ([1, 2, 3], ["Fall", "Sow", "Haidara"])
print(variable_5)