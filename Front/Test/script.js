// function solution(str){
//     return str.split('').reverse().join('')  
//   };

// console.log(solution('sam'));

// function createPhoneNumber(numbers) {

//     const firstPart = numbers.slice(0, 3).join('');
//     const secondPart = numbers.slice(3, 6).join('');
//     const thirdPart = numbers.slice(6, 10).join('');
    
//     return `(${firstPart}) ${secondPart}-${thirdPart}`;
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));




// function createPhoneNumber(numbers) {

//     const numString = numbers.join('');
//     console.log(numString);
    
//     const firstPart = numString.substring(0, 3);
//     const secondPart = numString.substring(3, 6);
//     const thirdPart = numString.substring(6, 10);
    
//     return `(${firstPart}) ${secondPart}-${thirdPart}`;
//   }
  
//   console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// function descendingOrder(n){
//     const sorted = n.sort();
//   }

//   console.log(descendingOrder("1453794"));


//   function descendingOrder(n) {
//     const digits = String(n).split('');
    
//     digits.sort((a, b) => b - a);
    
//     return parseInt(digits.join(''));
//   }
  
//   console.log(descendingOrder(1453794));  


// function friend(friends){
//   return friends.filter(name => name.length === 4);
// }


// console.log(friend(["Ryan", "Kieran", "Mark", "Audrey", "Momo"]));


// function numberToString(num) {
//     return num.toString()
//   };

//   console.log(numberToString(12345));

// Task:
// Given a list of integers, determine whether the sum of its elements 
// is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// function oddOrEven(array) {
   
// }


// function reverseWord(word) {
//     return word.split('') if word.length =+ 5.reverse().join('');
// }

// console.log(reverseWord("Hello les amis!"))

// function reverseWord(word) {
//     return word.split
//     if (word.length >= 5) {
//         return word.split('').reverse().join('');
//     } else {
//         return word;
//     }
// }

// console.log(reverseWord("Hello les amis!"));

// function removeChar(str){
//      str1 = str.split('');

//      console.log(str1);
//      str1.shift();
//      str1.pop();
//      return str1.join('');
       
//    };
   
//    console.log(removeChar("Hippopotamus"))


// function highAndLow(numbers){
  
//   const sorted = numbers.split(" ").sort((a, b) => b - a);
//   return sorted[0] + " " + sorted[sorted.length - 1];

//     return numbers.sort('').slice(1, -1)
//   };


// console.log(highAndLow("1 2 3 4 5"));
// console.log(highAndLow("1 2 -3 4 5"));
// console.log(highAndLow("1 9 3 4 -5"));

// function repeatStr (n, s) {
//   return s.repeat(n);
// }

// console.log(repeatStr("LLLLL", 9));

// function maps(x){
//   return x.map(y=>y*2);
// }

// console.log(maps([1, 2, 30])); 


// if (name.charAt(0).toLowerCase() === "r") {
//   return name + " plays banjo";
// } else {
//   return name + " does not play banjo";
// }

// console.log(areYouPlayingBanjo("Radan"));


// function fakeBin(x){
//   return x.split('').map(digit => digit <= '5' ? '0' : '1').join('');
// }

// function grow(x){
//   return x.split()
// }

// console.log(grow('45385593107843568'));

// const reverseSeq = n => {
//   let Sequence = [];
// for (let i = n; i >= 1; i--) {Sequence.push(i);
  
// }
//   return Sequence;
// };

// console.log(reverseSeq(99));


// function doubleChar(str) {
//   return str.split('').map(digit => digit.repeat(2)).join('');
// }

// console.log(doubleChar("Hello"))


// function updateLight(current) {
//   const colors = ["green", "yellow", "red"];
//   const currentIndex = colors.indexOf(current);
//   return colors[(currentIndex + 1) % colors.length];
// }

// console.log(updateLight("red"))

// function keepFirstElement(arr) {
//   if (arr.length === 0) return [];
//   const firstElement = arr[0];
//   return arr.filter((e) => e === firstElement);
// }

// console.log(keepFirstElement([1, 2, 3, 4, 5, 1]));

// if (arr.length === 0) return [];
//   const firstElement = arr[0];
//   return arr.filter((element) => element === firstElement);
// }

// var i = 0;

// for (;;) {
//   if (i > 3) break;
//   console.log(i);
//   i++;
// }



// function likes(names) {
//   if (names.length === 0) {
//     console.log("no one likes this");
//   } else if (names.length === 1) {
//     console.log(`${names[0]} likes this`);
//   } else if (names.length === 2) {
//     console.log(`${names[0]} and ${names[1]} like this`);
//   } else if (names.length === 3) {
//     console.log(`${names[0]}, ${names[1]} and ${names[2]} like this`);
//   } else {
//     console.log(`${names[0]}, ${names[1]} and ${names.length - 2} others like this');
//   }
// };


/**
 * Returns a string indicating the number of people who like an item.
 * 
 * @param {string[]} names - An array of names of people who like the item.
 * @returns {string} A string indicating the number of people who like the item.
 */

// function likes(names) {
//   if (names.length === 0) {
//     return "no one likes this";
//   } else if (names.length === 1) {
//     return `${names[0]} likes this`;
//   } else if (names.length === 2) {
//     return `${names[0]} and ${names[1]} like this`;
//   } else if (names.length === 3) {
//     return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//   } else {
//     return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//   }
// }

//
// console.log(likes([])); // "no one likes this"
// console.log(likes(["Peter"])); // "Peter likes this"
// console.log(likes(["Jacob", "Alex"])); // "Jacob and Alex like this"
// console.log(likes(["Max", "John", "Mark"])); // "Max, John and Mark like this"
// console.log(likes(["Alex", "Jacob", "Mark", "Max"])); // "Alex, Jacob and 2 others like this"
// console.log(likes(["Alex", "Jacob", "Mark", "Max", "Momo"])); // "Alex, Jacob and 3 others like this"


// function noSpace(x){
//   return x.replace(' ', '');
// }

// console.log(noSpace('Hello world'))


// function solution(str){
//     return str.split('').reverse().join('')  
//   };

// console.log(solution('sam'));

// function createPhoneNumber(numbers) {

//     const firstPart = numbers.slice(0, 3).join('');
//     const secondPart = numbers.slice(3, 6).join('');
//     const thirdPart = numbers.slice(6, 10).join('');


// function basicOp(operation, value1, value2){
//   switch (op) {
//     case '+':
//       return a + b;
//     case '-';
//       return a - b;
//     case '*';
//       return a * b
//     case '/';
//       return a / b;
// }
// };


// function toCamelCase(str){
//   return str.replace(/[-_](\w)/g, (match, group1) => group1.toUpperCase());
// }


// function swapFirstWithMax(arr) {
//     const maxIndex = arr.indexOf(Math.max(...arr));
//   [arr[0], arr[maxIndex]] = [arr[maxIndex], arr[0]];
//   return arr;
// }

// console.log(swapFirstWithMax([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))


// function findUniq(arr) {
//   return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
// }

// console.log(findUniq([1, 1, 2, 1, 1])); // Outputs: 2
// console.log(findUniq([0, 0, 0.55, 0, 0])); // Outputs: 0.55

// function towerBuilder(nFloors) {
//   const tower = [];
//   for (let i = 0; i < nFloors; i++) {
//   const stars = '*'.repeat(2 * i + 1);
//   const spaces = ' '.repeat(nFloors - i - 1);
//   tower.push(spaces + stars + spaces);
//   }
//   return tower;
// }

// console.log(towerBuilder(8))


// function count(string) {
//   let occurences = {}; 
//   for (char of string.toLowerCase()) {
//     if (occurences[char]) {
//       occurences[char]++;
//     } else {
//       occurences[char] = 1;
//     }

//   }
//   return occurences;
// }

// console.log(count("Abreuvoir"))

// function wave(str){
//   let result = [];
//   for (let i = 0; i < str.length; i++) {
//     if (/[a-z]/.test(str[i].toLowerCase())) {
//       result.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
//     }
//   }
//   return result;
// }

// function digitalRoot(n) {
  
//   if (n < 10) {
//     return n;
//   }
  
//   // Convert n to a string, then split it into individual digits
//   let digits = n.toString().split('');
  
//   // Calculate the sum of all digits
//   let sum = 0;
//   digits.forEach((digit) => {
//     sum += parseInt(digit);
//   });
  
//   // Recursively call digitalRoot on the sum
//   return digitalRoot(sum);
// }

// function digital_root(n) {
//   return (n - 1) % 9 + 1;
// }

// console.log(digital_root(493193)); // This should output 2


// function bmi(weight, height) {
//   let bmi = weight / height ** 2;
//   if (bmi <= 18.5) { return "Underweight"};
//   if (bmi <= 25.0) { return "Normal"};
//   if (bmi <= 30.0) { return  "Overweight"};
//   if (bmi > 30.0) { return "Obese"};
  
// }


// function isDivisible(n, x, y) {
//   return n % x === 0 && n % y === 0;
// }

// function rentalCarCost(d) {
//   let price = d * 40;
//   if (d >= 7) { return price - 50;}
//   else if (d >= 3) { return price - 20;}
//   else { return price;}
// }

// const areaOrPerimeter = function(l, w) {
//   if (l !== w) { 
//     return 2 * (l + w);
//   else { 
//     return l * l;
// };

// function testEven(n) {
//   if (n % 2 !== 0) {return false;}
// return n % 2 === 0;
// }


// function between(a, b) {
//   const result = [];
//   for (let i = a; i <= b; i++) {
//     result.push(i);
//   }
//   return result;
// }

// String.prototype.isUpperCase = function() {
//   for (let i = 0; i < this.length; i++) {
//     if (this[i] !== this[i].toUpperCase()) {
//       return false;
//     }
//   }
//   return true;
// }

// function howMuchILoveYou(nbPetals) {
//   const phrases = [
//         "I love you",
//         "a little",
//         "a lot",
//         "passionately",
//         "madly",
//         "not at all"
//     ];
//     const index = ((nbPetals - 1) % 6 + 6) % 6;
//     return phrases[index];
// }


// function greet(language) {
// 	return {
//     "english": "Welcome",
//     "czech": "Vitejte",
//     "danish": "Velkomst",
//     "dutch": "Welkom",
//     "estonian": "Tere tulemast",
//     "finnish": "Tervetuloa",
//     "flemish": "Welgekomen",
//     "french": "Bienvenue",
//     "german": "Willkommen",
//     "irish": "Failte",
//     "italian": "Benvenuto",
//     "latvian": "Gaidits",
//     "lithuanian": "Laukiamas",
//     "polish": "Witamy",
//     "spanish": "Bienvenido",
//     "swedish": "Valkommen",
//     "welsh": "Croeso"
//   }[language] || "Welcome";
// }

// function twoSort(s) {
//   s = s.sort();
//   const firstWord = s[0];
  
//   return firstWord.split('').join('***');
// }

// function boolToWord( bool ){
//     return bool ? "Yes" : "No";
//   }

// function evenOrOdd(number) {
//     return (number % 2 == 0) ? "Even" : "Odd";
  
//   }

// function positiveSum(arr) {
//     return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
//  }

// function positiveSum(arr) {
//     let sum = 0;
//    arr.forEach((number) => {
//      if (number > 0) {
//        sum += number;
//      }
//    })
//    return sum
//  }

// function squareSum(numbers){
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//       sum += numbers[i] ** 2;
      
//     }
//     return sum;
//   }