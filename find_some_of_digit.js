const findsomeofdigit = (nums) =>{
//using spread operator
     const str = nums.toString(); //converts number to a string.  Example: 1234 → "1234"
    let sum = 0;

    // for(let i of [...str]){
    //     sum += parseInt(i);
    // }
    // return sum;


    
    // let sum = 0;
    // for(let i =0;i< str.length; i++){
    //     sum += parseInt(str[i]);    // str[i] gives the character at index i in that string.
    // }
    // return sum;


    // using reduce method
    // const result = [...str].reduce((acc , curr) => {
    //     return acc + parseInt(curr);
    // },0);
    // return result;

    //using forEach method

 str.split("").forEach((digit) =>{
            sum += parseInt(digit);
            
    })        ;
    return sum;

}



const result  = findsomeofdigit(234);
console.log(result);