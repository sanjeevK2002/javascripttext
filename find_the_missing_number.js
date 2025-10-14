// logic is to find the sum of n natural numbers and substract the sum of array from it

const findMissingNUmber = (arr) =>{
let n= arr.length +1; // + 1 because one number is missing
let sum = n*(n+1)/2 //  sum = 6*7/2 = 21

const arraysum  = arr.reduce((acc , curr)=> acc + curr,0);

let missimngnumber  = sum - arraysum;
return missimngnumber;

}

const result = findMissingNUmber([1,2,3,4,6]);
console.log(result);
