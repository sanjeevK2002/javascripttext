let data = "size";
const bird ={
    size : "small",
    name : "sanjeev",
    age : 25
};
let d= bird;
d.name = "Rajiv"
console.log(d);


console.log(bird[data]);
console.log(bird["name"]);
// console.log(bird[name]); // name is not defined
console.log(bird);



