// // remove duplicate mnumbers from an array
// const arr = [4, 4, 5, 56, 8, 4, 4, 4, 5, 5, 63, 8];
// const removeDuplicateNumbers = (num) => {
//   const uniqueNumbers = [];
//   const seen = new Set();
//     for (let value of num) {
//         if (!seen.has(value)) {
//             seen.add(value);
//             uniqueNumbers.push(value);
//         }
//     }
//     return uniqueNumbers;
// }
// const result = removeDuplicateNumbers(arr);
// console.log(result);


const arr = [4, 4, 5, 56, 8, 4, 4, 4, 5, 5, 63, 8];
const uniqueNumbers =  [...new Set(arr)];
console.log(uniqueNumbers);
