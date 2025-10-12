// + operator :- it is used for both addition and concatenation
// if any one of the operand is string then it will do concatenation
// if both are number then it will do addition
// unary + operator converts string to number;

// - operator : - it is used for subtraction
// it converts string to number and then does subtraction

console.log(1 + 1); //2
console.log('1' + 1); // '11
console.log('1' + '1'); //'11'
console.log(+'1' + 1); //2
console.log(+'1' + +'1');  //2
console.log(1 + +'1'); //2
console.log(+'1' + '1'); // '11'
console.log(1 + '1');  //'11'


console.log(+'1' + +'1' + 1); //3
// + operator is used for both addition and concatenation
// if any one of the operand is string then it will do concatenation
// if both are number then it will do addition
// unary + operator converts string to number;


console.log(+'1' + +'1' + '1'); //'21';
console.log(1 + +'2' + '2' + 1 + '1' + '2'); //'32112'
console.log(1 + 2 + '2' + 1 + '1' + '2'); //'32112'


console.log([] + []); //'' // empty string ; because both are object and object to primitive conversion results in empty string

console.log([] + {}); // '[object Object]' ; because both are object and object to primitive conversion results in empty string and '[object Object]'

console.log({} + []); //0 ; because {} is treated as block and +[] is treated as unary + operator which converts empty array to 0

console.log({} + {}); //NaN ; because {} is treated as block and +{} is treated as unary + operator which converts object to NaN

console.log([] + 1); //'1' ; because [] is object and object to primitive conversion results in empty string and '' + '1' = '1'

console.log(1 + []); //'1' ; because [] is object and object to primitive conversion results in empty string and '1' + '' = '1'

console.log({} + 1); //NaN ; because {} is treated as block and +1 is treated as unary + operator which results in 1 and {} + 1 = NaN

console.log(1 + {}); //'1[object Object]' ; because {} is object and object to primitive conversion results in '[object Object]' and '1' + '[object Object]' = '1[object Object]'

console.log('' + 1 + 0); //'10'
console.log('' - 1 + 0); //-1
console.log('' + 1 - 0); //1
console.log('' - 1 - 0); //-1
console.log('3' * '8'); //24
console.log('3' + '8'); //'38'
console.log('3' - '8'); //-5
console.log('3' * 8); //24
console.log('3' + 8); //'38'
console.log('3' - 8); //-5
console.log(3 * '8'); //24
console.log(3 + '8'); //'38'
console.log(3 - '8'); //-5
console.log('4' - - '4'); //8
console.log('4' + - '4'); //'4-4'
console.log('4' - + '4'); //0
console.log('4' +  +'4'); //'44'
console.log(4 +  +'4'); //8
console.log(4 + - '4'); //0
console.log(4 - - '4'); //8

console.log({} + {}); //NaN
console.log([] + []); //'' // empty string
console.log([] + {}); // '[object Object]'
console.log({} + []); //0











