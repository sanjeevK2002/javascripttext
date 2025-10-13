const checkPalindrome = (str) =>{
const reverse = str.split("").reverse().join("");
if(str === reverse){
return reverse;}
else{
    return "not a palindrome"
}

}
const result = checkPalindrome("sanjeev");
console.log("is palindrome :- ", result);