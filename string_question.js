const str = "bhai batai kb aaigi";
const str2 = "sanjeev kumar paswan"
result = str.includes("batai")

console.log("batai is availabel :-" , result);

res2 = str.indexOf("ai");
console.log("index of ai :- ", res2);

const res3 = str.split("ai").length - 1;
console.log("split str :- ", res3);