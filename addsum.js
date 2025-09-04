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
