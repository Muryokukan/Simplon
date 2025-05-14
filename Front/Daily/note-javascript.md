# Mes Cours de Coding

## Introduction au JavaScript

JavaScript est un langage de programmation essentiel pour le développement web. Il permet de rendre les sites interactifs et dynamiques. Voici les bases que j'ai apprises:

## Les structures de contrôle

### 1. La boucle `while`

```javascript
let compteur = 0;
while (compteur < 5) {
    console.log("Itération: " + compteur);
    compteur++;
}

Vérifie la condition avant d'exécuter le code
Peut ne jamais s'exécuter si la condition est fausse dès le départ
2. La boucle do while
let compteur = 0;
do {
    console.log("Itération: " + compteur);
    compteur++;
} while (compteur < 5);

Exécute le code au moins une fois avant de vérifier la condition
Utile quand on veut garantir au moins une exécution
3. La boucle for
for (let i = 0; i < 5; i++) {
    console.log("Itération: " + i);
}

Combine initialisation, condition et incrémentation en une ligne
Idéale quand on connaît le nombre d'itérations à l'avance
Très utilisée pour parcourir des tableaux
4. La structure switch
let jour = 3;
switch (jour) {
    case 1:
        console.log("Lundi");
        break;
    case 2:
        console.log("Mardi");
        break;
    case 3:
        console.log("Mercredi");
        break;
    default:
        console.log("Autre jour");
}

Alternative aux multiples if...else if...else
Utilise une comparaison stricte (===)
Nécessite généralement des break pour éviter le "fall-through"
Quand utiliser chaque structure?
Structure	Cas d'utilisation idéal
if/else	Pour des conditions simples ou complexes
switch	Quand on compare une même variable à plusieurs valeurs
for	Quand on connaît le nombre d'itérations ou pour parcourir des tableaux
while	Quand on ne sait pas combien d'itérations seront nécessaires
do while	Quand on veut au moins une itération garantie
Exemples pratiques
Parcourir un tableau avec for
const fruits = ["pomme", "banane", "orange", "fraise", "kiwi"];
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit ${i+1}: ${fruits[i]}`);
}

Valider une entrée utilisateur avec do while
let motDePasse;
do {
    motDePasse = prompt("Entrez un mot de passe de 8 caractères minimum:");
} while (motDePasse.length < 8);

Implémenter un menu avec switch
function traiterOption(option) {
    switch (option) {
        case 1:
            return "Vous avez choisi de voir votre profil";
        case 2:
            return "Vous avez choisi de modifier vos paramètres";
        case 3:
            return "Vous avez choisi de vous déconnecter";
        default:
            return "Option non reconnue";
    }
}

// À retenir
// Les boucles permettent de répéter des instructions
// Le choix entre for, while et do while dépend du contexte
// switch offre une alternative plus lisible aux multiples conditions
// Attention aux boucles infinies qui peuvent bloquer le programme

