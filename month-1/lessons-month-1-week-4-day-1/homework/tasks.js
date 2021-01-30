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

//===================YOUR ANSWERS============
//Vahag answer is:
// function toSum(number) {
//     let firstNumber ;
//     return function (number2) {
//         firstNumber = number + number2;
//         return firstNumber;
//     }
// }
//
// let result = toSum(2);
// console.log(result(8));


// 2) CLOSURI MIJOCOV STEXCEQ FUNCTION VOR@  ERKROD KANCHI ZHAMANAK STACVAC TIV@ KLCNI ARRAY MEJ,
// ARAJIN KANCHI ZHAMANAK STACVAC TVI CHAPOV;

// ====ANSWER=====
// function toArr(count) {
//     return function (num) {
//         let arr = [];
//         for (let  i = 0; i < count; i++) {
//             arr.push(num)
//         }
//         return arr
//     }
// }
//
// let res = toArr(5);
// console.log(res(4))

//===================YOUR ANSWERS============

//Rudo Answer is:
// function closure(num) {
//     return function(...array){
//         for (let i = 0 ; i < num ; i++){
//             array.push(array[0]);
//         }
//         return array
//     }
// }
// const result = closure(7)(6)
// console.log(result);

