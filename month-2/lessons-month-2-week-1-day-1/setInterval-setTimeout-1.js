// =========== SETTIMEOUT, SETINTERVAL, WEB API METHODS=================

// ================= setTimeout ==================
// setTimeout('function', 'miliSeconds', 'arguments');
//
// setInterval('function', 'miliSeconds', 'arguments');
//
// no js functions, this web api methods
//
// function sayHi() {
//     console.log('hi')
// }
//
// setTimeout(sayHi, 3000);
// // not sayHi()
//-------------------------
// // or most common
//
// setTimeout(() => console.log('hi'), 5000);
// --------------------------------
// 1.without arrow function we can pass arguments on setTimeOut
// 2. with arrow functioon we can pass arguments  in function

// function sayHi(name) {
//     console.log(`Hi ${name}`)
// }
//
// setTimeout(sayHi, 5000, 'John');
//
// setTimeout(() => sayHi(name), 5000)
// -----------------------
// return value id

// let timerId = setTimeout(() => console.log('name'), 5000);
//
// clearTimeout(timerId);

// ==============setInterval===================
//
// function sayHi() {
//     console.log('hi')
// }
//
// setInterval(sayHi, 2000);
// -----------------------
// setInterval(() => console.log('hi'), 1000);
//-----------------------
// let timerId = setInterval(() => console.log('hi'), 1000);
//
// clearInterval(timerId)

// ============================================
// sync async function

// setTimeout and setInterval is async functions

// console.log(1);
//
// setTimeout(() => console.log(2), 2000);
//
// console.log(3);
//-------------------------
// console.log(1);
//
// setTimeout(() => console.log(2), 2000);
//
// let num = 3;

// function typeNum() {
//     console.log(num)
// }
// typeNum(num)
// ============================================

// miliseconds is not exactly
// function called if stack is empty

// console.log(1);
//
// setTimeout(() => console.log(2), 0);
//
// console.log(3);
// ----------------------
// console.log(1);
//
// setTimeout(() => console.log(2), 0);
//-------------------------
// setTimeout(() => console.log('this is timeout'), 2000);
//
// for (let i = 0; i< 1000; i++) {
//     console.log(i)
// }

//------examples-------

// let num = Math.round(Math.random() * 10);
//
// console.log(num);
//
// let timerId = setTimeout(() => console.log(num), 2000);
//
// if(num > 4) {
//     clearTimeout(timerId)
// }


// -------------------------

// let count = 0;
//
// let timerId = setInterval(() => {
//     count++;
//     console.log('some text')
// }, 2000)
//
//
// if(count === 4) {
//     clearInterval(timerId)
// }

//----------------------------


// let timerId = setInterval(() => {
//     console.log('some text')
// }, 2000)
//
//
// setTimeout(() => clearInterval(timerId), 8000);

//-----------------------
// setInterval(() => {
//     console.log('some text')
// }, 2000)
//
// for (let i = 0; i< 1000; i++) {
//     console.log(i)
// }


