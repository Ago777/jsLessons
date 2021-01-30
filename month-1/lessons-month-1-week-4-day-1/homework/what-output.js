// 1) WHAT WILL BE THE OUTPUT AND WHY
// let a = 5;
// let b = '7';
// console.log(a + b);

// ========ANSWER=====
// '57'


// 2) WHAT WILL BE THE OUTPUT AND WHY
// console.log(a);
// var a = 7;

// ========ANSWER=====
// 'undefined'


// 3) WHAT WILL BE THE OUTPUT AND WHY
// console.log(a);
// let a = 5;

// ========ANSWER=====
//ERROR

// 4) WHAT WILL BE THE OUTPUT AND WHY
// let a = 5;
// let b = '5';
// console.log(typeof a/b)

// ========ANSWER=====
// NaN

// ===========YOUR ANSWERS==========
// hamarya bolorn sxalen patasxanel,

// 5) WHAT WILL BE THE OUTPUT AND WHY
// console.log(5 == '5');
// console.log(5 === '5');
// console.log('55' === '5' + 5);

// ========ANSWER=====
// true, false, true

// 6) WHAT WILL BE THE OUTPUT AND WHY
// let a = 5.5;
// console.log(Math.floor(a) === parseInt(a));
// console.log(Math.floor(a) === parseFloat(a));
// console.log(a != '5.5')

// ========ANSWER=====
//true, false, false

// 7) WHAT WILL BE THE OUTPUT AND WHY
// function foo() {
//     console.log(a);
// }
// var a = 555;
// foo()

// ========ANSWER=====
//555

// 8) WHAT WILL BE THE OUTPUT AND WHY
// function foo() {
//     console.log(a);
//     var a = 666;
// }
// var a = 555;
// foo()

// ========ANSWER=====
//undefined

// 9) WHAT WILL BE THE OUTPUT AND WHY
// (function () {
//     var a = 3;
//     b = 7;
// })();
// console.log(a);
// console.log(b);

// ========ANSWER=====
// error

// 10) WHAT WILL BE THE OUTPUT AND WHY
// var a = 999;
// function foo() {
//     var b = ++a;
//     return function () {
//         console.log(b);
//         return b++;
//     }
// }
// const result = foo()();
// console.log(++result);

// ========ANSWER=====
// 1000, error

// 11) WHAT WILL BE THE OUTPUT AND WHY
// for (let i = 0; i < 5; ++i) {
//     console.log(i++);
// }

// ========ANSWER=====
//0,2,4

// 12) WHAT WILL BE THE OUTPUT AND WHY
// let a = 2;
// while(a !== 5) {
//     if (a > 0) {
//         console.log(a++)
//     } else {
//         console.log(++a)
//     }
//     a += 0.5;
// }

// ========ANSWER=====
// 2,  3.5

// 13) WHAT WILL BE THE OUTPUT AND WHY

// let a = 3;
// do {
//     if (++a % 3 === 0 && a % 2 === 0) {
//         console.log(1);
//     } else if (a === 5 || a % 2 === 0) {
//         console.log(2);
//     }
// } while (a < 8);

// ========ANSWER=====
// 2,2  1,2

// 14) WHAT WILL BE THE OUTPUT AND WHY

// function f() {
//     switch (true) {
//         case a > b:
//             console.log(3);
//             b = a + 1;
//             break;
//         case a < b && b <= 2:
//             console.log(2);
//             break;
//             b = 4;
//         default: {
//             a = b;
//             console.log(a, b);
//             break;
//         }
//     }
// }
//
// f();
// var a = 1;
// var b = 2;
// f();

// ========ANSWER=====
// undefined, undefined, 2

// 15) WHAT WILL BE THE OUTPUT AND WHY

// function f() {
//     let arr = [1];
//     let b = 2;
//     return function () {
//         arr.push(b);
//         return arr;
//     }
// }
// console.log(f()());

// ========ANSWER=====
//[1,2]

// 16) WHAT WILL BE THE OUTPUT AND WHY

// function f(name, age) {
//     let message = name + ' says Hey!! He is ' + age + ' years old';
//     return function greet() {
//         console.log(message);
//     };
// }
// let henryGreeter = f('John', 26);
// henryGreeter();

// ========ANSWER=====
//John says Hey!! He is 26 years old

// 17 WHAT WILL BE THE OUTPUT AND WHY

// let arr = [1, 22, 24, 46];
// arr.length=0;
// arr.push('street')
// console.log(arr);

// ========ANSWER=====
//['street']

// 18) WHAT WILL BE THE OUTPUT AND WHY

// let x = 12;
// let z = "ba" + x / "sil " + "a";
// console.log(z);

// ========ANSWER=====
// 'baNaNa'

// 19) WHAT WILL BE THE OUTPUT AND WHY
//
// console.log('0 || 1' + (0 || 1));
// console.log('1 || 2' + (1 || 2));
// console.log('0 && 1' + (0 && 1));
// console.log('1 && 2' + (1 && 2));

// ========ANSWER=====
// '0 || 11'
// '1 || 21'
// '0 && 10'
// '1 && 22'

// 20) WHAT WILL BE THE OUTPUT AND WHY
// function f(cb) {
//     return cb();
// }
// function f1() {
//     console.log(5);
// }
// let res = f(f1);
// console.log(res());

// ========ANSWER=====

// 5, error

