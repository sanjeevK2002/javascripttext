// check a number is interger

const checkInteger =(num)=>{
   if(num % 1 === 0 )
    return `${num} is a integer`
else
    return `${num} is not interger`
}
const num = -5;
const res=  checkInteger(num);
console.log(res);
