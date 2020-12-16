// ----------------------FUNCTION EXPRESSIONS-------------------

// function makeSomething() {
//     console.log('log the text inside me')
// }
//
// makeSomething();

// let makeSomething = function () {
//     console.log('log the text inside me') /*no need for name*/
// };
//
// makeSomething();


// --------functions can be given to another variable;------

// let num = 5;
// let otherNum = num;

// let f = function () {
//     console.log('something')
// };
//
// let otherF = f;
// otherF();

// function doSomething() {
//     console.log('something')
// }
//
// let x = doSomething;
// x();

// ------typeof--------
// -----function is not js types-----


// function sum(a, b) {
//     return a + b
// }
//
// let x = sum();
// console.log(x);
// let y = sum;
// console.log(y);
// console.log(typeof y);


//========================================

// ----------FUNCTION CALLBACKS----------

// function successCb(num) {
//     console.log(num)
// }
//
// function errorCb() {
//     console.log('Error')
// }
//
// function getRandomNum() {
//     return Math.ceil(Math.random() * 10)
// }
//
// function saySomething(getRandomNum, successCb, errorCb) {
//     const num = getRandomNum();
//     if(num > 5) {
//         successCb(num);
//     } else {
//         errorCb()
//     }
//
//     // num > 5 ? successCb() : errorCb();
// }
//
// saySomething(getRandomNum, successCb, errorCb);
// no need for same name


