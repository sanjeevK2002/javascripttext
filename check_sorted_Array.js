const checkSortedArray = (arr)=>{
    for(let i of arr){
        if(arr[i] >arr[i+1]){
            return false
        }

    }
    return true;
}
const arr = [1,2,3,4,5]
console.log(checkSortedArray(arr));
