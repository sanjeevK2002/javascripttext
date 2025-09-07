const parentClass = (arr) => {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);

    const timer = () => {
        setInterval(() => {
            let time = new Date().toLocaleTimeString();
            console.log("Current time:", time);
        }, 1000);
    };

    return { sum, timer };
};

const arr = [1, 2, 3, 4, 5];
const result = parentClass(arr);

console.log("Sum:", result.sum); 
result.timer(); 
