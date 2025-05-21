function pairOuImpair() {
    let nombre = prompt("Veuillez saisir un nombre: ");
    
    if (isNaN(nombre)) {
        alert("Erreur : Vous devez saisir un nombre.");
        return;
    }

    nombre = parseInt(nombre);

    if (nombre % 2 === 0) {
        alert(`Le nombre ${nombre} est pair.`);
    } else {
        alert(`Le nombre ${nombre} est impair.`);
    }
}

pairOuImpair();


// ------------------------------

function saluerUtilisateur() {
    let prenom = prompt("Veuillez entrer votre prénom: ");

    alert(`Bonjour, ${prenom} ! Heureux de faire votre connaissance.`);
}

saluerUtilisateur();


// -------------------------------

let arrayList = [4, 12, 7, 19, 3, 8];

Array.prototype.sum = function() {
    return this.reduce((a, b) => a + b, 0);
};

console.log(arrayList.sum());
