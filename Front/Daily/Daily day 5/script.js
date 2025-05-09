// Exercice 1
// Affichez un "Hello World !"

// console.log("Hello World!")
// alert("Hello World!")

// Exercice 2
// Créez une variable Age Affichez le contenu de cette variable

// let age = 26;
// alert(`Tu as ${age} ans`);

// Exercice 3
// Demandez à l'utilisateur de saisir son âge Affichez le contenu de la valeur saisie

// let age = prompt("Saisi ton âge");
// alert('tu as ' + age + ' ans');

// Exercice 4
// Demandez à l'utilisateur de saisir le rayon d'un cercle Affichez le périmètre du cercle

// let rayon = prompt("Quel est le rayon du cercle ?");
// let perimetre = 2 * Math.PI * rayon;
// alert(`Le périmètre du cercle est : ${perimetre.toFixed(2)}`); // toFixed pour les décimales

// let rayon = prompt("Quel est le rayon du cercle?");
// alert("Le périmètre est : " + (2 * Math.PI * rayon));


// Exercice 5
// Soit 2 valeurs saisies par un utilisateur dans 2 variables Inversez ces variables

// let a = prompt('Première valur:');
// let b = prompt('Deuxième valeur:');

// inversion dans des array

// console.log(a);
// console.log(b); 

// [a, b] = [b, a]; // pour inversé à l'aide d'un array

// console.log(a);
// console.log(b);

// alert("La première valeur est maintenant : " + a);
// alert("La deuxième valeur est maintenant : " + b);

// ----------------------------------------------------------------------------------

// Exercice 1
// Demandez à l'utilisateur de saisir son âge A partir de la saisie, affichez si il est majeur ou mineur

// let a = prompt('Ton âge:');

// if (a >= 18) {
//     majeur = "Tu es majeur";
// } else {
//     majeur = "Tu es mineur";
// }

// alert(majeur)

// Exercice 2
// Demandez à l'utilisateur de saisir un nombre Indiquez si cette variable est paire ou impaire

// "n % 2 === 0" si il me reste 0 = true et si 1 = false

// let a = prompt('un nombre');

// if (a % 2 === 0) { 
//     alert(a +' est pair')
// }else {
//     alert(a + ' est impair')
// }
    
// ou bien 

// function classerNombre(n) {
//     if (n % 2 === 0) {
//       return "pair";
//     } else {
//       return "impair";
//     }
//   }
  
//   let nombre = parseInt(prompt("Saisi un nombre :")); // parseInt pour convertir les nombres et uniquement qu'eux
//   alert(nombre + " est " + classerNombre(nombre));
  

// Exercice 3
// Demandez la saisie d'une note. Affichez le résultat suivant :

// [0-9] : Insuffisant
// [10-13] : Passable
// [14-16] : Bien
// [17-20] : Excellent

// let score = prompt('Note sur 20 ?');

// if (score >= 17) {
//     mention = "Excellent";
// } else if (score >= 14) {
//     mention = "Bien";
// } else if (score >= 10) {
//     mention = "Passable";
// } else {
//     mention = "Insuffisant";
// }

// alert(mention)

// Exercice 4
// Saisissez une année Affichez si l'année est bissextile ou non Pour rappel, une année bissextile c'est :

// Une année multiple de 4 (annee % 4 === 0)
// Une année non multiple de 100 (annee % 100 !== 0)
// OU une année multiple de 400

// function estBissextile(annee) {
//     return (annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0;
//   }

//   let annee = parseInt(prompt("Saisissez une année :"));

// console.log(annee % 4 === 0 && annee % 100 !== 0)

//   if (estBissextile(annee)) {
//     alert(annee + " est une année bissextile");
//   } else {
//     alert(annee + " n'est pas une année bissextile");
//   };


// Exercice 1
// Affichez les nombres de 1 à 10 avec les différents types de boucles :

// While
// do..while
// for

let i = 0
// while (++i < 11) alert( i );
// while (i++ < 10) alert(i);

// do {
//   i++;
//   alert(i);
// } while (i < 10);

// for (i++; i <11; i++) {alert(i)}

// Exercice 2
// Demandez à l'utilisateur de saisir un nombre Affichez les nombres pairs de 0 à ce nombre

// let n = prompt("Donner un nombre");

// n = parseInt(n);

// if (n >= 0) {
//   for (let i = 0; i <= n; i += 2) {
//     alert(i);
//   }
// } else {
//   alert("Veuillez entrer un nombre entier pair ou 0.");
// }

// Exercice 3
// Demandez à l'utilisateur de saisir un nombre Affichez la table de multiplication de ce nombre

// let n = prompt("Donner un nombre");

// for (let i = 1; i <= 10; i++) {
// alert(`${n} x ${i} = ${n * i}`);
// };

// Exercice 4
// Reprendre l'exercice 2 et le mettre dans une fonction paramétrée

let n = prompt("Donner un nombre");

if (n >= 0) {
  for (let i = 0; i <= n; i += 2) {
    alert(i);
  }
} else {
  alert("Veuillez entrer un nombre entier pair ou 0.");
}
