//  Find the first non-repeating character in a string

const findNonRepeatingChar = (str) => {
    const charCount = {};
    
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    
    return null; 
}

const result = findNonRepeatingChar("swiss");
console.log("first : - ",result); 


const findNonRepeatingChar2 = (str) =>{
   const charMap = {};
   for(let char of str){
    charMap[char] = (charMap[char] || 0) + 1;
   }

   for(let char of str){
       if(charMap[char]===1){
        return char;
       }
   }
}

const result2 = findNonRepeatingChar2("sanjeev");
console.log("Second :- ",result2);

