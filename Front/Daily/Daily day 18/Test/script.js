class CompteBancaire {
    constructor(titulaire, soldeInitial = 0) {
        this.titulaire = titulaire;
        this.solde = soldeInitial;
    }
    
    deposer(montant) {
        if (montant > 0) {
            this.solde += montant;
        } else {
            console.log("Le montant doit être supérieur à 0 !");
        }
    }
    
    retirer(montant) {
        if (montant > 0 && montant <= this.solde) {
            this.solde -= montant
            console.log(`${montant}e retiré !`)
        }
    }
    
    afficherSolde() {
        return `Solde de: ${this.titulaire}: ${this.solde}€`;
    }
    
}


const monCompte = new CompteBancaire("Alice", 100);
monCompte.deposer(50);
monCompte.retirer(30);
console.log(monCompte.afficherSolde());
