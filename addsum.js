// question : - 

const addsum = (arr , target)=>{
    const store = new Map();
    for(let i=0;i<arr.length;i++){
        const needingNumber = target - arr[i]
        if(store.has(needingNumber)){
            return [store.get(needingNumber), i ]
        }
        store.set(arr[i],i);

    }
    
}
const result = addsum([2,7,11,15],9);
console.log(result)


// const findsum = (array , target)=>{
//     const storage = new Map();
//     for(let i=0;i< array.length;i++){
//         const needingNumber = target - array[i];
//         if(storage.has(needingNumber)){
//             return [storage.get(needingNumber),i]
//         }
//         storage.set(array[i],i)
//     }

// }
// const array = [4,5,9,8,7,2,5,7]
// const result =  findsum(array ,9 )
// console.log(result)


const FindIndex = (arr , target)=>{
   const store = new Map();
   for( let i= 0 ; i< arr.length ; i++){
    const requiredNumber = target  - arr[i];
    if(store.has(requiredNumber)){
        // return [store.get(requiredNumber) , i]
         return [requiredNumber , arr[i]]
    }
    store.set(arr[i] , i)
   }
}

const arr= [1,5,89,7,5,1,2,3,4,5,6,7,8,9];
const target = 12;
const gotResilt = FindIndex(arr , target)
console.log(gotResilt);
