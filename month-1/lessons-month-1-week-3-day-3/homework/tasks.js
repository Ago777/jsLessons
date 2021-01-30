// 1. WHAT WILL BE THE OUTPUT
// var name = 'Jhon';
// (function () {
//     console.log(name)
// })();


// 2. WHAT WILL BE THE OUTPUT

// var surname = 'Doe';
// (function (name, surname) {
//     console.log(name, surname)
// })('Jhon', 'Wick');


// // 3. WHAT WILL BE THE OUTPUT
// (function(x) {
//     console.log(x)
//     return (function(y) {
//         console.log(x + y);
//     })(2)
// })(1);


// // 4. WHAT WILL BE THE OUTPUT

// const test = function f(){ return 5 };
// console.log(test());
// console.log(f());

//====================YOUR ANSWERS=====================
//----RUZANNA-----
// kanchum enq "test" functian, vory ir mej gtnvox functionn e  usti kartatpvi henc ayd function
// apa kanchum enq nersi function =>5
// f(...)
// 5


// // 5. WHAT WILL BE THE OUTPUT
// function test1(test2) {
//     let name = 'name1';
//     return test2();
// }
// function test2() {
//     let name = 'name2';
//     console.log(5);
//     return name
// }
// let result = test1(test2);
// console.log(result);

// 6. WHAT WILL BE THE OUTPUT
// function test() {
//     return function () {
//         return function () {
//             return null
//         }
//     }
// }
//
// console.log(typeof test());
// console.log(typeof test()());
// console.log(typeof test()()());

//====================YOUR ANSWERS=====================
// -----NONA-----
//chgitiiii


// 7. WHAT WILL BE THE OUTPUT
// function test() {
//     let arr = [];
//     let a = 2;
//     return function () {
//         arr.push(a);
//         return arr;
//     }
// }
// console.log(test());
// console.log(test()());
//====================YOUR ANSWERS=====================
// -----RUZANNA-----
// function (
// //     ....
// // )
// //  [1]



// 8. WHAT WILL BE THE OUTPUT
// let a = 1;
// function test() {
//     let b = a;
//     return function () {
//         return b++;
//     }
// }
// let result = test()();
// console.log(++result);

// 9. HOW WE MUST CALL FUNCTION FOR GETTING NAME OR SURNAME.
// function getName(isWithSurname) {
//     const name = 'Jhon';
//     const surname = 'Dow';
//     if(isWithSurname) {
//         return function () {
//             return name
//         }
//     }else {
//         return function () {
//             return `${name} ${surname}`
//         }
//     }
// }
//====================YOUR ANSWERS=====================
//-----RUZANNA----
//  NO ANSWER
// -----NONA----
// Senc?
// console.log(getName()())

// 10. HOW WE MUST CALL FUNCTION FOR GETTING NAME OR SURNAME.
// function getName(isWithSurname) {
//     let name = 'Jhon';
//     let surname = 'Dow';
//     if(isWithSurname) {
//         name = 'Jonathan';
//         return (function () {
//             return name
//         }())
//     }else {
//         let surname = 'Wick';
//         return (function () {
//             return `${name} ${surname}`
//         })()
//     }
// }
//====================YOUR ANSWERS=====================
//-----RUZANNA----
//  NO ANSWER
// ----NONA----
// erevi Senc
// console.log(getName()())



//======================HIN TASKER======================

//1) greq function vor@ kstana array ev khashvi ayd arrayum exac tveric amenamec@ (arrayum karan tver chlinen);

//==========ANSWERS==============
// -----NONA----
// function getMaxNumber(arr){
//     if (!Array.isArray(arr)) return;
//     let filteredArr = arr.filter ((item) => typeof item === 'number');
//     DATARK ARRAYI VALIDATION
//     console.log(Math.max(...filteredArr));
// }
