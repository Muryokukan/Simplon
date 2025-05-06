// 1. Le mécanisme sous-jacent d'une comparaison de deux éléments en JavaScript (types différents)
// Exercice 1: Prédire le résultat

// Écrivez ce que va afficher chaque console.log ci-dessous et expliquez pourquoi
console.log(5 == "5");
console.log(5 === "5");
console.log(0 == false);
console.log(0 === false);
console.log([] == 0);
console.log({} == "[object Object]");

// Exercice 2: Créer un tableau de paires de valeurs et vérifier leur égalité

const paire1 = [5, "5"];
const paire2 = [0, false];
const paire3 = [null, undefined];
const paire4 = ["", false];
const paire5 = [1, true];

// Test de la paire 1: nombre et chaîne
console.log("Paire 1: nombre et chaîne");
console.log(5 == "5");  // true car le "5" est converti en nombre
console.log(5 === "5"); // false car types différents

// Test de la paire 2: zéro et false
console.log("\nPaire 2: zéro et false");
console.log(0 == false);  // true car false équivaut à 0
console.log(0 === false); // false car types différents

// Test de la paire 3: null et undefined
console.log("\nPaire 3: null et undefined");
console.log(null == undefined);  // true car considérés équivalents
console.log(null === undefined); // false car types différents

// Test de la paire 4: chaîne vide et false
console.log("\nPaire 4: chaîne vide et false");
console.log("" == false);  // true car "" est converti en 0
console.log("" === false); // false car types différents

// Test de la paire 5: 1 et true
console.log("\nPaire 5: 1 et true");
console.log(1 == true);  // true car true équivaut à 1
console.log(1 === true); // false car types différents

// 2. La comparaison entre 2 chaînes de caractères
// Exercice 3: Comparer des chaînes alphabétiquement

// Écrivez une fonction qui prend deux chaînes en paramètre et retourne:
// - 0 si elles sont identiques
// - 1 si la première est "plus grande" alphabétiquement
// - -1 si la première est "plus petite" alphabétiquement
// Puis testez avec différents exemples (majuscules, minuscules, accents)

// Exercice 4: Trier un tableau de chaînes

// Créez un tableau de 5 chaînes de caractères
// Triez ce tableau par ordre alphabétique
// Triez ce même tableau en ignorant la casse (majuscules/minuscules)

// 3. La spécificité de null et undefined
// Exercice 5: Identifier null et undefined

// Pour chaque variable ci-dessous, déterminez si elle vaut null, undefined ou autre chose

let a;
let b = null;
let c = 0;
let d = "";
let e = false;
let f = {};
let g = [];
let h = function() {};

// Exercice 7: Convertir if/else en ternaire

// Convertissez les structures if/else suivantes en expressions ternaires
// 1.
let age = 6;
// let age = 19;

if (age >= 18) {
    statut = "adulte";
} else {
    statut = "mineur";
}

console.log(statut)
// 2.
let score = 79;

if (score >= 90) {
    mention = "Excellent";
} else if (score >= 75) {
    mention = "Bien";
} else if (score >= 50) {
    mention = "Passable";
} else {
    mention = "Insuffisant";
}

console.log(mention)

// ----------------------------------------------------------------------------------------------------------------

// Exercice 8: Créer des conditions imbriquées

// Utilisez des ternaires pour écrire une fonction qui:
// Prend un nombre en paramètre
// Retourne "positif pair" si le nombre est positif et pair
// Retourne "positif impair" si le nombre est positif et impair
// Retourne "négatif" si le nombre est négatif
// Retourne "zéro" si le nombre est 0

function classerNombre(nombre) {
    let o = nombre;
    return o == 0 
           ? "zéro"
             // Sinon 
              : (o > 0 
              ? (o % 2 === 0 ? "positif pair" : "positif impair") 
              : "négatif");
}

// Test
console.log(classerNombre(0));    // "zéro"
console.log(classerNombre(4));    // "positif pair"
console.log(classerNombre(7));    // "positif impair"
console.log(classerNombre(-3));   // "négatif"

// Si j'appelle classerNombre(0) :

// o vaut 0
// o == 0 est vrai
// On retourne "zéro"
// Si j'appelle classerNombre(6) :

// o vaut 6
// o == 0 est faux, on passe à la partie après le premier :
// o > 0 est vrai (6 est positif)
// On évalue o % 2 === 0
// 6 % 2 = 0, donc c'est vrai
// On retourne "positif pair"
// Si j'appelle classerNombre(3) :

// o vaut 3
// o == 0 est faux
// o > 0 est vrai
// o % 2 === 0 est faux (3 % 2 = 1)
// On retourne "positif impair"
// Si j'appelle classerNombre(-5) :

// o vaut -5
// o == 0 est faux
// o > 0 est faux aussi car -5 est négatif
// On retourne "négatif"

// ----------------------------------------------------------------------------------------------------------------

// 5. Opérateurs || (OR), && (AND), ! (NOT)
// Exercice 9: Utiliser les opérateurs logiques

// les expressions suivantes retournent true

// 1. true || false
// 2. false || true
// 3. true && true
// 4. !null
// 5. (false && false) || true

// Exercice 10: Court-circuit avec ||

// Utilisez l'opérateur || pour créer une fonction qui:
// - Prend un paramètre "nom"
// - Retourne le nom fourni ou "Anonyme" si le nom est vide ou non défini

function getNom(nom) {
    return nom || "Anonymous";
};

console.log(getNom('Delabatte')); // Retourne Delabatte
console.log(getNom('')); // Retourne anonymous


// Exercice 11: Court-circuit avec &&

// Utilisez l'opérateur && pour créer une fonction qui:
// - Prend un tableau en paramètre
// - Retourne le premier élément du tableau si le tableau n'est pas vide
// - Retourne "Tableau vide" si le tableau est vide

function getPremierElement(tableau) {
    return tableau.length && tableau[0] || "Tableau vide";
}

// Tests
console.log(getPremierElement([10, 20, 30]));  // 10
console.log(getPremierElement(["a", "b", "c"]));  // "a"
console.log(getPremierElement([]));


// ----------------------------------------------------------------------------------------------------------------

// let i = 0;
// while (++i < 5) alert( i ); // Pre-incrémentation

// let i = 0;
// while (i++ < 5) alert( i ); // Post-incrémentation

let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
  }

//   let i = 0;
// while (i < 3) {
//   alert( `number ${i}!` );
//   i++;
// }
