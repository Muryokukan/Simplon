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

// class Joueur {
//     constructor(nom) {
//         this.nom = nom;
//         this.niveau = 1;
//         this.experience = 0;
//         this.experienceRequise = 100;
//     }
    
//     gagnerExperience(points) {
//         // Ajouter les points
//         this.experience += points
//         // Vérifier si on peut monter de niveau
//         while (this.experience >= this.experienceRequise) {
//         this.monterNiveau();
//     }
    
//     monterNiveau() {
//         // Augmenter le niveau
//         this.experience -= this.experienceRequise;
//         this.niveau++;
//         // Recalculer l'XP requise pour le prochain niveau
//         this.experienceRequise = 50 + (this.niveau * 50);
//         // Afficher un message de félicitations
//         console.log(`Félicitations ! ${this.nom} passe niveau ${this.niveau} !`);
//     }
    
//     attaquer() {
//         // Calculer et afficher les dégâts
//         const degats = this.niveau * 10;
//         console.log(`${this.nom} attaque et fait ${degats} déga^ts !`)
//     }
    
//     afficherStatut() {
//         // Afficher toutes les infos du joueur
//         return `${this.nom} - niveau ${this.niveau}`
//     }
// }

// // Test :
// const joueur = new Joueur("Hero");
// joueur.gagnerExperience(249); // Doit monter niveau 2
// joueur.attaquer(); // Doit faire 20 dégâts

// --------------------------------------------------

class Item {
    constructor(name, price, type) {
        // Properties:
        // - name (string)
        this.name = name
        // - price (number) 
        this.price = price; 
        // - type (string: "weapon", "potion", "armor")
        this.type = type;
    }
    
    use(player) {
        if (this.type === "weapon") {
            player.damageBonus += 10
            console.log(`${player.name} has equipped a sword ! Damage increase +10`)
        } else if (this.type === "potion") {
            player.health = Math.min(player.health + 30, 100); // Cap to 100 max
            console.log(`${player.name} healed for 30 hp ! (cannot bypass 100 threshold)`)
        } else if (this.type === "armor") {
            player.health += 20
            console.log(`${player.name} has equipped an armor ! Health + 20`)
        }
    }
}


class Shop {
    constructor() {
        // Property: items (array of Item objects)
        this.item = [];
    }
    
    addItem(item) {
        // Add item to shop inventory
        this.items.push(item); 
    }
    
    displayItems() {
        // Show all available items with prices
        this.items.forEach((items, index) => {
            console.log(`${index + 1}. ${items.name} - ${items.price} gold (${item.type})`);
        });
    }
    
    sell(itemName, player) {
        // Find item by name
        // Check if player has enough money
        // Remove money from player
        // Remove item from shop
        // Use item on player automatically
        
        // Display success/failure message
    }
}


const hero = new Player("Link");
const shop = new Shop();

shop.addItem(new Item("Sword", 50, "weapon"));
shop.addItem(new Item("Health Potion", 20, "potion"));

shop.displayItems();
shop.sell("Sword", hero);
hero.attack(); // Should show bonus damage!
