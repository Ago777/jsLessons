// ----------------FUNCTIONS-----------
// link https://learn.javascript.ru/function-basics


// JS IS A FUNCTIONAL PROGRAMMING;
// FUNCTIONS ARE THE MAIN BLOCKS WHICH DO SOME ACTIONS
// WE CAN CALL SAME CODE ANYWHERE WE WANT
//AFTER FUNCTIONS NO NEED FOR  ;
// alert('some'); log('some');


// ------FUNCTION DECLARATION------

// we can write only console.log but we must repeat it many times

// function makeSomething() {
//     console.log('log the text inside me')
// }
//
// makeSomething();

//=====================================================================

//  call it 3 times
// function makeSomething() {
//     console.log('log the text inside me')
// }
//
// makeSomething();
// makeSomething();
// makeSomething();


//=====================================================================

// ------------ARGUMENTS-------------

// function showName(name, surname) {
//     console.log(`${name} ${surname}`)
// }
//
// showName('John', 'Wick');

// function showName(name, surname) {
// let name = 'otherName';   /*error*/
//     console.log(`${name} ${surname}`)
// }
//
// showName('John', 'Wick');

// no parameter is undefined

// function showName(name, surname) {
//     console.log(`${name} ${surname}`)
// }
//
// showName('John');

//============================================================================

// default argument value
// this is new feature in old versions you must check argument value

// function showName(name, surname = 'Wick') {
//     console.log(`${name} ${surname}`)
// }
//
// showName('John');


//=====================================================================

// --------------- return value --------------

// function sumOfTwoNumbers(a, b) {
//      a + b
// }
//
// let result = sumOfTwoNumbers(1, 2);
// console.log(result);
// console.log(sumOfTwoNumbers(1, 2))


// function sumOfTwoNumbers(a, b) {
//     return a + b
// }
//
// let result = sumOfTwoNumbers(1, 2);
// console.log(result);
// console.log(sumOfTwoNumbers(1, 2))

// after return function stopped

// function sumOfTwoNumbers(a, b) {
//     return a + b;
//     console.log('aaaa');
// }
//
// let result = sumOfTwoNumbers(1, 2);
// console.log(result);

//return without value or no return;

// function generateNumber() {
//     let num = Math.ceil(Math.random() * 10);
// }
//
// let result = generateNumber();
// console.log(result);

// function generateNumber() {
//     console.log('i do something');
//     return;
// }
//
// let result = generateNumber();
// console.log(result);

// many returns

// function generateNumber() {
//     let num = Math.ceil(Math.random() * 10);
//     if(num > 6) {
//         return 'Number Big Then 5'
//     } else {
//         return 'Number small Then 5'
//     }
//     // return num > 6 ? 'Number Big Then 5' : 'Number small Then 5';
// }
//
// let result = generateNumber();
// console.log(result);


// ===========================================

// dont do this interpreter is put  there ;

// function someFunction() {
//     return
//        5
// }
//
// console.log(someFunction());

// function someFunction() {
//     return (
//         5
//     )
// }
//
// console.log(someFunction());


// ===========================================================
// name function must be verb getSomething(), createSomething, checkSomething()
// functions must do only one thing

// function doSomething() {
//     for (let i = 1; i < 100; i++) {
//         if (i % 2 === 0) {
//             return i;                     /*return instead of break*/
//         }
//     }
//
// }
//
// let res = doSomething();
// console.log(res);

// function isEven(num) {
//     return num % 2 === 0 ? true : false;
//     // return num % 2 === 0;
// }
//
// function getEvenNumber() {
//     for (let i = 1; i < 100; i++) {
//         if (isEven(i)) {
//             return i
//         }
//         // return isEven(i) ? i : null;  /* wrong statement */
//     }
// }
//
// const res = getEvenNumber();
// console.log(res);

// function in functions

// function f() {
//     function f1() {
//         function f2() {
//             // ...
//         }
//     }
// }

