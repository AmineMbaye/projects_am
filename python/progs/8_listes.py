"""
   Les listes
   liste = []
"""

# listes_des_etudiants = ["Amine", "Assane", "Thiané", "Abdoulaye", "Ababacar"]
# listes_des_etudiants.append('Aminata')
# print(listes_des_etudiants) # afficher les éléments de la liste
# del listes_des_etudiants[1] #supprimer un element à travers l'index
# listes_des_etudiants.remove('Assane') #supprimer un element à travers la valeur
# print(listes_des_etudiants) 
# print(listes_des_etudiants[2]) # afficher l'élément à l'indice 2
# print(len(listes_des_etudiants)) # afficher le nombre d'élément de la liste

# nombre = [25, 5, 8, 15, 20]
# nombre_del = len(nombre)
# print(nombre)
# print(nombre_del)
# nombre_lettre = [25, 5, 8, 15, 20, "a", "b", "c", "a", "r"]
# compter = nombre_lettre.count("a")
# print(compter)
# position_el = nombre_lettre.index("a")
# print(position_el)
# dernier_el = nombre_lettre[-1]
# dernier_el = nombre_lettre[0::2]
# print(dernier_el)

liste_des_professeurs = ["Fall", "Diop", "Mbaye", "Ba", "Keita", "Fall"]
if liste_des_professeurs.count("Fall"):
    print("Vous êtes chef de departement")
    
for professeur in liste_des_professeurs:
    print("Professeur ", professeur)