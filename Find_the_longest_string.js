// Find the longest string in a sentence


const longestString = (str) =>{
const stringArray = str.split(" "); // Split the string into an array of words
console.log(stringArray);

let longest = "";
for (let word of stringArray) {
    if (word.length > longest.length) {
        longest = word; // Update longest if the current word is longer
    }
}
return longest; // Return the longest word found
}

const result = longestString("Find the longest string in a sentence");
console.log(result);
