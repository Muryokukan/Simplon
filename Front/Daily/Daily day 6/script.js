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