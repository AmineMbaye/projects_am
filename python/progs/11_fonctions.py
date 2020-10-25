"""
    Les fonctions : C'est un block de code ou suite d'instruction que l'on peut appeler avec un nom
    En python, on fait ainsi :
    def NomFonction():
        # instruction 1
        # instruction ... n

    Quand on déclare une fonction avec variable, alors au moment d'appeler la fonction, il faut lui fournir un argument
        Sinon on aura ce type d'erreur : 
            TypeError: Afficher_nom() missing 1 required positional argument: 'nom'
        Pour éviter cette erreur aussi, on peut au moment de déclarer l'argument dans la fonction, on l'initialise
            avec une valeur par défaut
"""
# afficher bonjour
def Bonjour():
    print("Bonjjor")

# Bonjour()

# Créer une fonction avec argument
# name = input("Votre nom : ")
def Afficher_nom(nom):
    return nom

# print("Bienvenue ", Afficher_nom(input("Votre nom : ")))

# prename = input("Votre prenom : ")
def afficher_prenom(prenom="Amine"):
    return prenom

# print("Au revoir, ", afficher_prenom())

# Retourner une liste ou tuple
def soustraction(*param):
    return param[0] + param[1] + param[2]

result = soustraction(4, 2 , 1)
# print(result)

# Retourner un dictionnaire
def etudiant(**param):
    return param["numero"]

result = etudiant(numero="646546")
print(result)
