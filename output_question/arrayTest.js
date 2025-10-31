let arr = [1,2,3];
arr[9] = 15;
console.log(arr) // [ 1, 2, 3, <6 empty items>, 15 ]
//------------------------------------

let arr1 = [1,2,3];
arr1[3] = arr1;
console.log(arr1);  // [ 1, 2, 3, [Circular] ]

//----------------------------

