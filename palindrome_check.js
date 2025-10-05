const checkPalindrome = (str) =>{
// const reversedstr = str.split("").reverse().join("");
const reverse = str.reverse();
return reverse;
// return str === reversedstr;
}
const result = checkPalindrome("madam");
console.log("is palindrome :- ", result);