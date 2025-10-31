//  function sayHi(){
//     return (()=>0)()
//  }
//  console.log(typeof sayHi());  // output is "number" , because the inner arrow function is immediately invoked with () , so it returns 0 which is of type number.

// //-------------------------------------------------------------

//  function sayHello(){
//     return (()=>0)
//  }
//  console.log(typeof sayHello()); // output is "function" , because the inner arrow function is returned without invoking it , so its type is function

//  //----------------------------------------------------------
//  console.log( typeof 1)   // number
//  console.log(typeof typeof 1)  // string  "because number is string"

//  //---------------------------------------
 
// (()=>{
//    let x= (y=10)
// })();
// console.log(typeof x);  // undefined , because x is declared with let inside the IIFE so it is not accessible outside the IIFE
// console.log(global.y );  // 10

//===========================

// (()=>{
//    let x = y = 10 ; 
// })();
// console.log(typeof y); // number, because y is assigned without var, let, or const, making it a global variable.

//------------------------------------------------------------

// (()=>{
//    let x = y = 10 ; 
// })();

// (()=>{
//    let x = y = 20 ; 
// })();

// console.log(`value of y is ${y}`);  // 20   , global literal overwrite same variable

//==================================================

let x= 100;
(()=>{
   var x = 10;
})();

console.log(`valuse of x is ${x}`); // let x = 100; declares a global variable x with value 100.Inside the IIFE, var x = 10; declares a new variable that is function-scoped (not block-scoped). This local variable only exists inside that IIFE and does not affect the global x.

// After the IIFE finishes, the local x is destroyed.

// Therefore, when we log x outside, the global x = 100 is still intact, and the output is:100

//-----------------------------------
console.log(!true - true); // -1 = (0 - 1)

console.log(true + +"10"); // 11 = (1 + 10) bcz + convert the string into number





 