const reverseString = (str)=>{
   let reversed = "";
   for(let i = str.length - 1; i >= 0; i--){
       reversed += str[i];
   }
   return reversed;
}
const str = "sanjeev kumar paswan";
console.log(reverseString(str));


// 2nd way
function reverseString2(str){
    return str.split("").reverse().join("");
}
console.log(reverseString2("Hello sanjeev "));

// 3rd way
function reverseString3(str){
   let reversed ="";
   for(let i = str.length - 1 ; i>=0 ; i--){
    reversed += str[i]

   }
   return reversed
}
console.log(reverseString3("I lave my country it is what it is"));

