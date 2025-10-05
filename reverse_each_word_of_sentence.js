const reverseWord = (str) =>{
   let strArray = str.split(" ");
   let reverseArray = strArray.map((word)=>(word.split("").reverse().join("")
));
let reverseString = reverseArray.join(" ")
   return reverseString;
}

const str = "Hello ji kaise ho aap"
const result = reverseWord(str);
console.log(result);
