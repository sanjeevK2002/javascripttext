const findSecondLargeNumber = (arr)=>{
    let first = -Infinity; // Infinity is a keyword in js that represents a very large number 

    let second = -Infinity;

    for(let num of arr){
        if(num > first){
            second = first;
            first = num;
        }else if(num > second && num !== first){
            second = num;
        }
    }
    return second;
}
const arr = [1,2,3,0,0,5,5]
const result = findSecondLargeNumber(arr);
console.log(result);
