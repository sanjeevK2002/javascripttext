const findfactorial = (nums) =>{

    if(nums == 0 || nums == 1){
        return 1;
    }
    let sum =1;
for(let i=2 ;i<=nums ; i++){
   sum = sum*i;
}
return sum;
}

const result = findfactorial(4);
console.log(result);