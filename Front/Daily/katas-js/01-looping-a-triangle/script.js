// # Looping a triangle

// Write a loop that makes seven calls to console.log to output the following triangle:

// ```js
// #
// ##
// ###
// ####
// #####
// ######
// #######
// ```

// It may be useful to know that you can find the length of a string by writing .length after it.

// ```js
// let abc = "abc";
// console.log(abc.length);
// // → 3
// ```



// for (let abc = 1; abc < 8; abc++) {
//     console.log("#".repeat(abc));
// };



// let ligne = "";

// for (let i = 1; i <= 7; i++) {
//     ligne += "#";
//     console.log(ligne);
// };

// let ligne = "";

// for (let i = 1; i <= 7; i++) {
    
//     ligne += "PHP";
//     console.log(ligne);
// }
 
function towerBuilder(nFloors) {
    const tower = [];
    for (let i = 0; i < nFloors; i++) {
    const stars = '*'.repeat(2 * i + 1);
    const spaces = ' '.repeat(nFloors - i - 1);
    tower.push(spaces + stars + spaces);
    }
    return tower;
}

console.log(towerBuilder(8))