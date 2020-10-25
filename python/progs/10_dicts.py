"""
    Les dictionnaires : ils sont formés de clés et valeurs
    
"""
# Création ou "déclaration" d'un dictionnaire
mon_dict = {}

# Ajout de valeur(s)
mon_dict["nom"] = "Mbaye"
mon_dict["prenom"] = "Amine"
mon_dict["profession"] = "Etudiant"

#Recupérer une valeur dans le dictionnaire
nom = mon_dict.get("nom")

# Supprimer une entrée
# del mon_dict['nom']
# print(mon_dict)

# Recupérer les valeurs
for valeur in mon_dict.values():
    # print(valeur)
    pass

# Recupérer les cles
for cle in mon_dict.keys():
    # print(cle)
    pass

# Recupérer toutes les clés et valeurs
for cle, valeur in mon_dict.items():
    # print(cle, " : ", valeur)
    pass

# On peut créer aussi le dict sous forma liste
ma_liste = {"nom":"Mbaye", "prenom": "Amine", "profession": "Etudiant"}
for cle, valeur in ma_liste.items():
    print(cle, " : ", valeur)