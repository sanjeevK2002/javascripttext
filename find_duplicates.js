// find duplicates
const array = [4,4,5,56,8,4,4,4,5,5,63,8]
const removeDuplicate = (num)=>{
const seen =  new Set();
const duplicates = new Set();

for(let value of num){
    if(seen.has(value)){
         duplicates.add(value);
    }
    else {
        seen.add(value)
    }
}
return [...duplicates];


}

const result = removeDuplicate(array)
console.log(result);