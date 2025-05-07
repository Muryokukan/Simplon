// Exercice 1 : Comprendre le principe de clé/valeur
// Créez un objet personne avec les propriétés suivantes :

// nom : "Jean"
// age : 30
// ville : "Paris"
// Affichez la valeur de la propriété nom de l'objet personne en utilisant la notation pointée (par exemple, personne.nom).

// Modifiez la valeur de la propriété age à 31.

// Ajoutez une nouvelle propriété pays avec la valeur "France" à l'objet personne.


// let personne = {
//     nom: "Jean",
//     age: 30,
//     ville: "Paris"
// };

// console.log(personne.nom);
// console.log(personne.age);
// console.log(personne.ville);

// console.log(personne);

// ---------------------------------------------------------------------------------------------------

// Exercice 2 : Comprendre la différence entre un objet et une variable
// Déclarez une variable prenom et attribuez-lui la valeur "Pierre".

// Créez un objet personne2 avec une propriété prenom ayant la valeur "Marie".

// Modifiez la valeur de la variable prenom à "Paul".

// Affichez les valeurs de prenom et de personne2.prenom.

// let prenom = "Pierre";
// let personne2 = {prenom: "Marie",};


// console.log(prenom);

// prenom = "Paul";

// console.log(prenom);
// console.log(personne2.prenom);

// ---------------------------------------------------------------------------------------------------

// Exercice 3 : Savoir itérer dans un objet
// Créez un objet voiture avec les propriétés suivantes :

// marque : "Toyota"
// modele : "Corolla"
// annee : 2015
// Utilisez une boucle for...in pour itérer sur les propriétés de voiture et affichez chaque clé et valeur.

// let voiture = {
//     marque: "toyota",
//     modele: "corolla",
//     annee: "2015"
// }

// console.log(voiture.modele);

// for (let propriete in voiture) {
//     console.log(`${propriete} : ${voiture[propriete]}`)
// };

// ---------------------------------------------------------------------------------------------------

// Exercice 4 : Savoir copier un objet (cloner)
// Créez un objet original avec quelques propriétés.

// Créez une copie de original ("en utilisant l'opérateur de décomposition ({...original}) nah") et stockez-la dans une variable copie.

// Modifiez une propriété dans copie.

// Affichez les deux objets pour vérifier que la modification n'affecte que copie.

// let personne = {
//     nom: "Jean",
//     age: 30,
//     ville: "Paris"
// };

// let copy = personne;

// console.log(copy);

// copy.age = 34;

// console.log(copy);

// ---------------------------------------------------------------------------------------------------

// console.log(this);

// Exercices

// Créez un objet chien avec une propriété nom et une méthode aboyer. Utilisez this pour faire référence au nom du chien dans la méthode aboyer.
// à compléter

// let chien = {
//     nom: "Rex",
//     aboyer: function() {
//         console.log(this.nom + " aboie !");
//     }
// };
// chien.aboyer(chien.aboyer); // "Rex aboie !"


// Créez un objet voiture avec une propriété marque et une méthode afficherMarque. Utilisez this pour faire référence à la marque de la voiture dans la méthode afficherMarque.
// // à compléter

// let voiture = {
//     marque: "Toyota",
//     afficherMarque: function() {
//         console.log("la marque de la voiture est: " + this.marque);
//     }
// };
// voiture.afficherMarque(); // "La marque de la voiture est Toyota"

// Créez deux objets personne1 et personne2 avec une propriété nom et une méthode direBonjour. Utilisez this pour faire référence au nom de la personne dans la méthode direBonjour.
// à compléter

// let personne1 = {
//     name: "Jean",
//     direBonjour: function() {
//         console.log("Bonjour je m'appelle : " + this.name)
//     }
// };

// let personne2 = {
//     name: "Pierre",
//     direBonjour: function() {
//         console.log("Bonjour, je m'appelle : " + this.name)
//     }
// };
// personne1.direBonjour(); // "Bonjour, je m'appelle Jean"
// personne2.direBonjour(); // "Bonjour, je m'appelle Pierre"

// ---------------------------------------------------------------------------------------------------


// Méthodes de tableaux

// Les tableaux en JavaScript disposent de nombreuses méthodes qui permettent de les manipuler. Voici quelques-unes des méthodes les plus couramment utilisées :

// push(): ajoute un élément à la fin du tableau.
// pop(): supprime le dernier élément du tableau.
// shift(): supprime le premier élément du tableau.
// unshift(): ajoute un élément au début du tableau.
// indexOf(): recherche l'index d'un élément dans le tableau.
// includes(): vérifie si un élément est présent dans le tableau.
// slice(): extrait une partie du tableau.
// splice(): supprime ou remplace des éléments dans le tableau.

// Exercices

// Créez un tableau nombres contenant les nombres de 1 à 5. Utilisez la méthode push() pour ajouter le nombre 6 à la fin du tableau.
// à compléter

// let nombres = [1, 2, 3, 4, 5];

// nombres.push(6);
// console.log(nombres); // [1, 2, 3, 4, 5, 6]



// Créez un tableau fruits contenant les fruits "Pomme", "Poire" et "Pêche". Utilisez la méthode indexOf() pour trouver l'index de "Poire" dans le tableau.
// à compléter
// let fruits = ["Pomme", "Poire", "Pêche"];

// console.log(fruits.indexOf("Pêche", "Poire")); // 1



// Créez un tableau couleurs contenant les couleurs "Rouge", "Vert" et "Bleu". Utilisez la méthode slice() pour extraire les couleurs "Vert" et "Bleu" du tableau.
// à compléter

// let couleurs = ["Rouge", "Vert", "Bleu"];
// // à compléter

// console.log(couleurs.shift()); // Rouge
// console.log(couleurs); // ["Vert", "Bleu"]

// ---------------------------------------------------------------------------------------------------

// Créer une calculatrice
// importance: 5
// Créez un objet calculator avec trois méthodes :

// read() demande deux valeurs et les enregistre en tant que propriétés d’objet avec les noms a et b respectivement.
// sum() renvoie la somme des valeurs sauvegardées.
// mul() multiplie les valeurs sauvegardées et renvoie le résultat.

// let calculator = {
//     read: function() {
//         this.a = parseFloat(prompt("Entrer une première valeur à calculer: "));
//         this.b = parseFloat(prompt("Entrer une seconde valeur à calculer: "));
//     },
//     sum: function() {
//         alert(this.a + " + " + this.b + " = " + (this.a + this.b));
//     },
//     // mul: function(){
//     //     alert("Multiplication = " + (this.a * this.b));
//     // }
//     mul: function(){
//         alert(this.a + " x " + this.b + " = "  + (this.a * this.b));
//     }
//   };


//   calculator.read();
//   calculator.sum();
//   calculator.mul();