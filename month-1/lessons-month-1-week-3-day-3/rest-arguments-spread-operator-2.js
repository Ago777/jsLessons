// =========REST, ARGUMENTS===========

//----------------------rest-----------------
//TAKE ALL ARGUMENTS AND PUSHES TO ARRAY
// function showArgs(...args) {
//     console.log(args);
// }
//
// showArgs(1,'name',3,'surname',5);

// function showArgs(a, b,...args) {
//     console.log(args);
// }
//
// showArgs(1, 2, 3, 4, 5);

//rest must be  last parameter

// function showArgs(a, ...args, b) {
//     console.log(args);
// }
//
// showArgs(1, 2, 3, 4, 5);

// rest is used in Math.max(1,2,3,4,5);


//-------------...SPREAD OPERATOR-------------------
// let arr = [5,7,9];
// console.log(arr);
// console.log(...arr);
// console.log(Math.max(...arr))

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// console.log(arr1, arr2);
// console.log(...arr1, ...arr2);
// console.log(...arr1, 200, ...arr2, 100);
// console.log(Math.max(...arr1, ...arr2))

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
//
// let newArr = [...arr1, ...arr2];
// console.log(newArr)

