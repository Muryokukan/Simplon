// class CompteBancaire {
//     constructor(titulaire, soldeInitial = 0) {
//         this.titulaire = titulaire;
//         this.solde = soldeInitial;
//     }
    
//     deposer(montant) {
//         if (montant > 0) {
//             this.solde += montant;
//         } else {
//             console.log("Le montant doit être supérieur à 0 !");
//         }
//     }
    
//     retirer(montant) {
//         if (montant > 0 && montant <= this.solde) {
//             this.solde -= montant
//             console.log(`${montant}e retiré !`)
//         }
//     }
    
//     afficherSolde() {
//         return `Solde de: ${this.titulaire}: ${this.solde}€`;
//     }
    
// }


// const monCompte = new CompteBancaire("Alice", 100);
// monCompte.deposer(50);
// monCompte.retirer(30);
// console.log(monCompte.afficherSolde());


// ------------------------------------------------

class Joueur {
    constructor(nom) {
        // À compléter
    }
    
    gagnerExperience(points) {
        // Ajouter les points
        // Vérifier si on peut monter de niveau
    }
    
    monterNiveau() {
        // Augmenter le niveau
        // Recalculer l'XP requise pour le prochain niveau
        // Afficher un message de félicitations
    }
    
    attaquer() {
        // Calculer et afficher les dégâts
    }
    
    afficherStatut() {
        // Afficher toutes les infos du joueur
    }
}

// Test :
const joueur = new Joueur("Hero");
joueur.gagnerExperience(120); // Doit monter niveau 2
joueur.attaquer(); // Doit faire 20 dégâts
