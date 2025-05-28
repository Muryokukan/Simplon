
class Circle {
    constructor(rayon) {
        this.rayon = rayon;
        this.nom = "Cercle";
    }
    calculerPerimetre() {
        return 2 * Math.PI * this.rayon;
    }
}

class Square {
    constructor(cote) {
        this.cote = cote;
        this.nom = "Carré";
    }
    calculerPerimetre() {
        return 4 * this.cote;
    }
}

const cercle = new Circle(5);
const carre = new Square(4);

console.log(`${cercle.nom}: ${cercle.calculerPerimetre().toFixed(2)}`);
console.log(`${carre.nom}: ${carre.calculerPerimetre()}`);

const formes = [cercle, carre];
formes.forEach(f => console.log(f.calculerPerimetre()));
