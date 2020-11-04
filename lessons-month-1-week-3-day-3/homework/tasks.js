// 1. WHAT WILL BE THE OUTPUT
// var name = 'Jhon';
// (function () {
//     console.log(name)
// })();

//==========ANSWER==============

// 2. WHAT WILL BE THE OUTPUT

// var surname = 'Doe';
// (function (name, surname) {
//     console.log(name, surname)
// })('Jhon', 'Wick');

//==========ANSWER==============

// // 3. WHAT WILL BE THE OUTPUT
// (function(x) {
//     console.log(x)
//     return (function(y) {
//         console.log(x + y);
//     })(2)
// })(1);

//==========ANSWER==============


// // 4. WHAT WILL BE THE OUTPUT

// const test = function f(){ return 5 };
// console.log(test());
// console.log(f());


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

