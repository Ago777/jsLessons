//1) CLOSURI MIJOCOV STACEQ GUMARMAN FUNCTION;
// aysinqin f(1)(2) ---> ksatananq 3

// ====ANSWER=====
// function sum(a) {
//     return function (b) {
//         return a + b
//     }
// }
//
// console.log(sum(5)(4))



// 2) CLOSURI MIJOCOV STEXCEQ FUNCTION VOR@  ERKROD KANCHI ZHAMANAK STACVAC TIV@ KLCNI ARRAY MEJ,
// ARAJIN KANCHI ZHAMANAK STACVAC TVI CHAPOV;

// ====ANSWER=====
// function toArr(a) {
//     return function (b) {
//         let arr = [];
//         for (let  i = 0; i < a; i++) {
//             arr.push(b)
//         }
//         return arr
//     }
// }
//
// let res = toArr(5);
// console.log(res(4))

