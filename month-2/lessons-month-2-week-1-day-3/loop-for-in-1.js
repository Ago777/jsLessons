// ===========  Object loop for in ================

// for in,
// for of
// for(let value of obj) {
//
// }

// let obj = {
//     id: 5,
//     name: 'user',
//     isTest: true
// }
//
// for (let key in obj) {
//     console.log(key);
//     console.log(obj[key])
// }
// ---empty object no iteration------
// for (let key in {}) {
//     console.log(key);
// }

// ----we can declare our variable instead key-----

//--------------iteration is not ordered if keys is numbers-------

// let obj = {
//     '3' : 'c',
//     '2' : 'd',
//     '1' : 'a',
//     '4' : 'b',
// }

// for (let key in obj) {
//     console.log(key);
// }

// -----for in loop can use for arrays like for of------

// ----examples----

// ----push to array---
// let obj = {
//     id: 5,
//     name: 'user',
//     isTest: true
// }
// //
// const arr = [];
// //
// for (let key in obj) {
//     arr.push(obj[key])
// }
//
// console.log(arr);
//----------------------------
//----copy object-----
// let obj = {
//     name: 'John',
//     surname: 'Wick',
//     age: 30,
// }
//
// let obj2 = {};
// for(let key in obj) {
//     obj2[key] = obj[key]
// }
//
// console.log(obj2);
// console.log(obj2 === obj);