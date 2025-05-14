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