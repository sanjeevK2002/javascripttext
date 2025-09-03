//  Find the first non-repeating character in a string

const findNonRepeatingChar = (str) => {
    const charCount = {};
    
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
        console.log(`Character: ${char}, Count: ${charCount[char]}`);
        
    }
    
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    
    return null; 
}

const result = findNonRepeatingChar("swiss");
console.log(result); 