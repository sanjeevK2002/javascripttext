// const num = 12;
// const evencheck =(num)=>{
//     const storage =[];
//     for(let i=2;i< num.length;i++){
//         if(i%2==0){
//             storage.push(i)
//         }
        
//     }
//     return storage;
// }

// const result = evencheck(12);
// console.log(result);
const evencheck = (num) => {
    const storage = [];
    for (let i = 2; i <= num; i++) {
        if (i % 2 === 0) {
            
            storage.push(i);
        }
    }
    return storage;
};

const result = evencheck(12);
console.log(result);