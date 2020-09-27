// ============== SELF-INVOKING FUNCTIONS OR IMMEDIATELY INVOKED FUNCTION EXPRESSIONS IIFE==============

// -----SELF INVOKING FUNCTIONS------
// 1. function called by his own <<() make local scope>>
// (function x(){
//     console.log('IIFE')
// })();
//
// (function x(){
//     console.log('IIFE')
// }());

// 2. we cant call function by name
// (function x(){
//     console.log('IIFE')
// })();
//
// x();

// 3. thats why no need for name
//
// (function () {
//     console.log('IIFE')
// })();

// 4. we cann give arguments

// (function (a,b) {
//     console.log(a+b)
// })(5,7)


//-----IMMEDIATELY INVOKED FUNCTION EXPRESSIONS IIFE---
// 5. for function expression

// let x = (function (a, b) {
//     return a + b
// })(1, 2);
//
// console.log(x);
//
// let y = function (a, b) {
//     return a + b
// }(0, 5);
//
// console.log(y)

// 6. for arrow function
// (() => console.log('done'))()

// let x = ((a, b) => a + b)(10, 2)

// 7. usually this feature not used;
// it used for libraries like jquery
// it uses for local scope instead global
// let x = 5;
// console.log(x);

// (function () {
//     let x =5;
//     console.log(x)
// })();

// 8. iife in function

// function doSomething(a, b) {
//     let diff = a - b;
//
//     let sum = (function (diff) {
//
//         return diff > 0 ? 'is positive' : 'is negative'
//
//     })(diff);
//
//     return sum
// }
//
// let x = doSomething(5,7);
// console.log(x)