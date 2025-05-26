// function solution(str, size = 2) {
//   const result = [];
  
//   for (let i = 0; i < str.length; i += size) {
//     result.push(str.substring(i, i + size));
//   }
  
//   return result;
// }

// console.log(solution("abcdefg"))

// function solution(str, size = 2) {
//   const result = [];
//   for (let i = 0; i < str.length; i += size) {
//     let chunk = str.substring(i, Math.min(i + size, str.length));
//     if (chunk.length < size) {
//       chunk = chunk.padEnd(size, '_');
//     }
//     result.push(chunk);
//   }
//   return result;
// }


// var summation = function (num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(summation(99));

// function abbrevName(name){
//   // return name.slice.FirstChar().match(/[A-Z]/g).join(',');
//   return name.split(' ').map(word => word[0]).join('.');
// }

// console.log(abbrevName("Momo Radius"));

// var countSheep = function (num){
//   let a = [];
//   for (let i = 1; i <= num; i++) {
//     a.push(`${i} sheep...`);
//   }
//   return a.join('');
// }

// console.log(countSheep(5))


// function reverseWords(str){
//   return str.split(' ');
// }

// console.log(reverseWords("hello world"))

// function getGrade (s1, s2, s3) {
//   let average = (s1 + s2 + s3) / 3;
//   if (average >= 90) return 'A';
//   if (average >= 80) return 'B';
//   if (average >= 70) return 'C';
//   if (average >= 60) return 'D';
//   if (average >= 0) return 'F';
// }

// function arrayPlusArray(arr1, arr2) {
//   return arr1 + arr2;
// }


// function sumArrays(arr1, arr2) {
//   console.log(`arr1: ${arr1}`);
//   console.log(`arr2: ${arr2}`);

//   const concatenatedArray = [...arr1, ...arr2];
//   console.log(`Concatenated array: ${concatenatedArray}`);

//   const sum = concatenatedArray.reduce((a, b) => {
//     console.log(`a: ${a}, b: ${b}, a + b: ${a + b}`);
//     return a + b;
//   }, 0);

//   console.log(`Sum: ${sum}`);
//   return sum;
// }

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// sumArrays(arr1, arr2);

// function firstNonConsecutive (arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i]!== arr[i -1] + 1) {
//       return arr[i];
//     }
//   }
//   return null;
// }

// Instead of switch
// function getPlanetName(id){
//   return {
//     1: 'Mercury',
//     2: 'Venus',
//     3: 'Earth',
//     4: 'Mars',
//     5: 'Jupiter',
//     6: 'Saturn',
//     7: 'Uranus',
//     8: 'Neptune'
//   }[id]
// }

// function findAverage(array) {
//     return array.length === 0 ? 0 : array.reduce((a, b) => a + b, 0) / array.length;
//   }

// function findAverage(array) {
//     return array.reduce((a, b) => a + b, 0) / array.length || 0;
//   }
  

// function grow(x){
//     return x.reduce((a , b) => a * b, 1); // Si on met 0, ça multiplie par 0 done rend 0.
//   }

//   function squareDigits(num) {
//     // Convert the number to a string
//     const str = num.toString();
    
//     // Split the string into an array of digits
//     const digits = str.split('');
    
//     // Square each digit and join them back into a string
//     const squaredStr = digits.map(digit => parseInt(digit) ** 2).join('');
    
//     // Convert the final string back to a number
//     return Number(squaredStr);
//   }
  

// function squareDigits(num) {
//     const str = num.toString();
//     const digits = str.split('');
//     const squaredStr = digits.map(digit => parseInt(digit) ** 2).join('')
//     return Number(squaredStr);
// }

// console.log(squareDigits(1145));

// function filter_list(l) {
//     return l.filter(Number.isInteger)
//   };

// console.log(filter_list([1,2,'aasf','1','123',123]))

// var isSquare = function(n){
//     if (n >= 0 && Math.sqrt(n) % 1 === 0) {return true;}
//     else { return false;}
//   }


// function isIsogram(str){
//     let occurences = {}; 
//       for (char of str.toLowerCase()) {
//         if (occurences[char]) {
//           occurences[char]++;
//         } else {
//           occurences[char] = 1;
//         }
//       }
      
//       for (let char in occurences) {
//         if (occurences[char] > 1) return false;
//       }
      
//       return true;
//   }
// console.log(count("Abreuvoir"))
// console.log(count("Dermatoglyphics"))


// function XO(str) {
//     const lowerCaseStr = str.toLowerCase().split('');
//     let xCount = 0;
//     let oCount = 0;
  
//     lowerCaseStr.forEach(char => {
//       if (char === 'x') xCount++;
//       if (char === 'o') oCount++;
//     });
  
//     if (xCount == oCount) { return true} else { return false;}
//   }
  
//   console.log(XO("oxoxox"))
//   console.log(XO("oxoxsox"))
//   console.log(XO("oxoxffxxxox"))
//   console.log(XO("fff"))

// function findShort(s){
//     return Math.min(...s.split(' ').map(word => word.length));
//   }
  
//   In this code:
  
//   s.split(' ') splits the string into an array of words.
//   map(word => word.length) creates a new array containing the lengths of the words.
//   Math.min(...array) finds the minimum value in the array of lengths.
//   To return the shortest word itself (not its length), you can use the reduce() method:
  
// function findShort(s){
//    return s.split(' ').reduce((a, b) => a.length <= b.length ? a : b);
//  }


// function sumTwoSmallestNumbers(numbers) {
//     numbers = numbers.map(Number).sort((a, b) => a - b);
//     return numbers[0] + numbers[1];
// }

// console.log(sumTwoSmallestNumbers(["42", "77", "3"]))

// function maskify(cc) {
//     return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
//   }

// const binaryArrayToNumber = arr => {
//     switch (arr.join(',')) {
//       case '0,0,0,0': return 0;
//       case '0,0,0,1': return 1;
//       case '0,0,1,0': return 2;
//       case '0,0,1,1': return 3;
//       case '0,1,0,0': return 4;
//       case '0,1,0,1': return 5;
//       case '0,1,1,0': return 6;
//       case '0,1,1,1': return 7;
//       case '1,0,0,0': return 8;
//       case '1,0,0,1': return 9;
//       case '1,0,1,0': return 10;
//       case '1,0,1,1': return 11;
//       case '1,1,0,0': return 12;
//       case '1,1,0,1': return 13;
//       case '1,1,1,0': return 14;
//       case '1,1,1,1': return 15;
//       default: return NaN;
//     }
//   };

// const binaryArrayToNumber = arr => {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//       result = (result << 1) | arr[i];
//     }
//     return result;
//   };
  

// function sumTwoSmallestNumbers(numbers) {  
    
//   }