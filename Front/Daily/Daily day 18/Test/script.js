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
//             this.solde -= montant;
//             console.log(`${montant}e retiré !`);
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

// class Player {
//     constructor(name) {
//         this.name = name;
//         this.health = 100;
//         this.gold = 100;
//         this.damageBonus = 0;
//         this.inventory = [];
//     }
    
//     attack() {
//         const damage = 20 + this.damageBonus;
//         console.log(`${this.name} attacks for ${damage} damage!`);
//     }
// }

// class Item {
//     constructor(name, price, type) {
//         this.name = name;
//         this.price = price; 
//         this.type = type;
//     }
    
//     use(player) {
//         if (this.type === "weapon") {
//             player.damageBonus += 10;
//             console.log(`${player.name} has equipped a sword ! Damage increase +10`);
//         } else if (this.type === "potion") {
//             player.health = Math.min(player.health + 30, 100);
//             console.log(`${player.name} healed for 30 hp ! (cannot bypass 100 threshold)`);
//         } else if (this.type === "armor") {
//             player.health += 20;
//             console.log(`${player.name} has equipped an armor ! Health + 20`);
//         }
//     }
// }

// class Shop {
//     constructor() {
//         this.items = [];
//     }
    
//     addItem(item) {
//         this.items.push(item); 
//     }
    
//     displayItems() {
//         this.items.forEach((items, index) => {
//             console.log(`${index + 1}. ${items.name} - ${items.price} gold (${items.type})`);
//         });
//     }
    
//     sell(itemName, player) {
//         const foundItem = this.items.find(item => item.name === itemName);
//         if (!foundItem) { 
//             return "The item doesn't exist";
//         }
//         if (player.gold < foundItem.price) {
//             return "Not enough gold!";
//         } 
//         player.gold -= foundItem.price;
//         const index = this.items.indexOf(foundItem);
//         this.items.splice(index, 1);
//         foundItem.use(player);
//         return `You bought ${foundItem.name} for ${foundItem.price} gold!`;
//     }
// }

// const hero = new Player("Link");
// const shop = new Shop();

// shop.addItem(new Item("Sword", 50, "weapon"));
// shop.addItem(new Item("Health Potion", 20, "potion"));

// shop.displayItems();
// shop.sell("Sword", hero);
// hero.attack();


// const arr = [1, 2, 3];
// const result = arr.find(x => x === 999);
// console.log(result);

// ---------------------------------------------




// ==========================================
// 🚗 VEHICLE CLASS (base class)
// ==========================================
class Vehicle {
    constructor(brand, model, year, price) {
        // TODO: Initialize properties
        // - brand
        this.brand = brand;
        // - model  
        this.model = model;
        // - year
        this.year = year;
        // - price
        this.price = price;
        // - isRunning (default: false)
        this.isRunning = false;
    }
    
    start() {
        // TODO: Method to override in subclasses
        // Change isRunning to true
        this.isRunning = true;
        console.log(`${this.brand} ${this.model} is running !`)
    }
    
    stop() {
        // TODO: Stop the vehicle (isRunning = false)
        this.isRunning = false;
        // Display a message
        console.log(`${this.brand} ${this.model} stopped !`)
    }
    
    displayInfo() {
        // TODO: Display all vehicle information
        console.log(`${this.brand} ${this.model} ${this.year} - ${this.price} !`)
        console.log(`status : ${this.isRunning ? "Running" : "Stopped"}`)
    }
}

// ==========================================
// 🚙 CAR CLASS (inherits from Vehicle)
// ==========================================
class Car extends Vehicle {
    constructor(brand, model, year, price, doors, fuelType) {
        // TODO: Call parent constructor with super()
        super(brand, model , year, price);
        // TODO: Add specific properties:
        // - doors
        this.doors = doors;
        // - fuelType
        this.fuelType = fuelType;
    }
    
    start() {
        // TODO: Override the start() method
        console.log(`The car ${this.brand} ${this.model} starts with a roar...`)
        // Change isRunning to true
        this.isRunning = true;
    }
    
    honk() {
        // TODO: Display "📯 BEEP BEEP!"
        console.log(`The ${this.brand} ${this.model} did BEEP BEEP !`)
    }
}

// ==========================================
// 🏍️ MOTORCYCLE CLASS (inherits from Vehicle)  
// ==========================================
class Motorcycle extends Vehicle {
    constructor(brand, model, year, price, engineSize, bikeType) {
        // TODO: Call parent constructor
        super(brand, model, year, price);
        // TODO: Add properties:
        this.engineSize = engineSize;
        this.bikeType = bikeType;
    }
    
    start() {
        this.isRunning = true;
        console.log(`The motorcycle ${this.brand} ${this.model} starts roaring...`)
    }
    
    wheelie() {
        console.log(`${this.model} did a wheelie !`)
    }
}

// ==========================================
// 🏢 GARAGE CLASS
// ==========================================
class Garage {
    constructor(name, maxCapacity) {
        // TODO: Initialize:
        this.name = name;
        this.vehicles = [];
        this.maxCapacity = maxCapacity;
    }
    
    addVehicle(vehicle) {
        // TODO: Check if garage is not full
        if (this.vehicles.length >= this.maxCapacity) {
            console.log("Garage is full");
        } else {
            this.vehicles.push(vehicle);
        }
        // TODO: Add vehicle to array

        // TODO: Display success/failure message
        console.log(`${vehicle.brand} ${vehicle.model} is added to the garage !`)
    }
    
    removeVehicle(index) {
        // TODO: Check if index exists
        // TODO: Remove vehicle from array
        // TODO: Display message
    }
    
    displayVehicles() {
        // TODO: List all vehicles with their info
        // TODO: Show current capacity
    }
    
    startAllVehicles() {
        // TODO: Loop through all vehicles
        // TODO: Call start() method on each (polymorphism!)
    }
    
    calculateTotalValue() {
        // TODO: Sum all vehicle prices
        // TODO: Return total value
    }
}

// ==========================================
// 🧪 TEST CODE
// ==========================================

// Create vehicles
const car1 = new Car("Toyota", "Camry", 2020, 25000, 4, "gasoline");
const car2 = new Car("Tesla", "Model 3", 2023, 45000, 4, "electric");
const bike1 = new Motorcycle("Yamaha", "R1", 2022, 18000, 1000, "sport");
const bike2 = new Motorcycle("Harley", "Street Glide", 2021, 32000, 1745, "cruiser");

// Create garage
const garage = new Garage("Central Garage", 10);

// Add vehicles
garage.addVehicle(car1);
garage.addVehicle(car2);
garage.addVehicle(bike1);
garage.addVehicle(bike2);

// Test functionality
garage.displayVehicles();
garage.startAllVehicles(); // Polymorphism!
car1.honk();
bike1.wheelie();
console.log(`Total value: $${garage.calculateTotalValue()}`);
