class CompteBancaire {
    constructor(titulaire, soldeInitial = 0) {
        
    }
    
    deposer(montant) {
        
    }
    
    retirer(montant) {
        
    }
    
    afficherSolde() {
        
    }
}

// Test ton code :
const monCompte = new CompteBancaire("Alice", 100);
monCompte.deposer(50);
monCompte.retirer(30);
console.log(monCompte.afficherSolde()); // Doit afficher 120
