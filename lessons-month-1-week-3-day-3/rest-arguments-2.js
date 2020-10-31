// =========REST, ARGUMENTS===========

//----------------------rest-----------------
// function showArgs(...args) {
//     console.log(args);
//
// }
//
// showArgs(1,2,3,4,5);

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


//-------------arguments-------------------
// old versions
// function showArgs() {
//     console.log(arguments)
// }
// showArgs(1,2,3,4,5)

// ----why not use arguments----

// arrow functions doesnt have arguments
// let showArgs = () => console.log(arguments)
// showArgs(1,2,3,4,5)

// /arguments is not array, they are like array but object

// function showArgs() {
//     console.log(typeof arguments)
//     let x = arguments.filter((item) => item > 2)
//     console.log(x)
// }
//
// showArgs(1,2,3)
