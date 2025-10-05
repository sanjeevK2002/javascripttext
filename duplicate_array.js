const duplicate = (arr)=>{
const Onearray = arr.concat(arr);
return Onearray
}
const arr = [1,5,6,7,8];
const result = duplicate(arr);
console.log(result);
