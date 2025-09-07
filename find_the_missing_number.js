const findMissingNUmber = (arr) =>{
let n= arr.length +1;
let sum = n*(n+1)/2

const arraysum  = arr.reduce((acc , curr)=> acc + curr,0);

let missimngnumber  = sum - arraysum;
return missimngnumber;

}

const result = findMissingNUmber([1,3,4,5,6]);
console.log(result);
