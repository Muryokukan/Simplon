// # Chessboard


// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
//  At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// Passing this string to console.log should show something like this:

// ```
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
// ```

// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works
//  for any size, outputting a grid of the given width and height.

let size = 3;
let a = "# # # # ";
let b = " # # # #";

for (let i = 0; i < size; i++) {
    if (i % 2 === 0) {
        console.log(a);
    } else {
        console.log(b);
    }
};


// let size = 8;
// let chessboard = "";

// for (let row = 0; row < size; row++) {
//     for (let column = 0; column < size; column++ ) {
//         if ((row + column) % 2 === 0) {
//             chessboard += "#";
//         } else {
//             chessboard += " ";
//         }
//     }
//     chessboard += "\n";
// };

// console.log(chessboard);