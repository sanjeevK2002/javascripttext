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
