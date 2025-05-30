console.log("hello world")


// 1. Define the Student interface
interface Student {
    name: string;
    age: number;
    grades: Array<number>;
}

function calculateAverage(grades: number[]): number {
    // TODO: Calculate and return the average
    return grades.length === 0 ? 0 : grades.reduce((a, b) => a + b, 0) / grades.length;
}

function hasPassed(student: Student): boolean {
    return calculateAverage(student.grades) >= 10;
}

const student1: Student = {
    name: "bob",
    age: 20,
    grades: [12, 7, 17, 4]
};

const student2: Student = {
    name: "alicia",
    age: 21,
    grades: [12, 2, 17, 4]
};

const student3: Student = {
    name: "bob",
    age: 19,
    grades: [12, 7, 12, 4]
};

console.log(`${student1.name} - Moyenne: ${calculateAverage(student1.grades)} - Réussi: ${hasPassed(student1)}`);
console.log(`${student2.name} - Moyenne: ${calculateAverage(student2.grades)} - Réussi: ${hasPassed(student2)}`);
console.log(`${student3.name} - Moyenne: ${calculateAverage(student3.grades)} - Réussi: ${hasPassed(student3)}`);

