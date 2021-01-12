// 1) WHAT WILL BE THE OUTPUT AND WHY
// let a = 5;
// let b = '7';
// console.log(a + b);


// 2) WHAT WILL BE THE OUTPUT AND WHY
// console.log(a);
// var a = 7;

// 3) WHAT WILL BE THE OUTPUT AND WHY
// console.log(a);
// let a = 5;

// 4) WHAT WILL BE THE OUTPUT AND WHY
// let a = 5;
// let b = '5';
// console.log(typeof a/b)

// 5) WHAT WILL BE THE OUTPUT AND WHY
// console.log(5 == '5');
// console.log(5 === '5');
// console.log('55' === '5' + 5);


// 6) WHAT WILL BE THE OUTPUT AND WHY
// let a = 5.5;
// console.log(Math.floor(a) === parseInt(a));
// console.log(Math.floor(a) === parseFloat(a));
// console.log(a != '5.5')


// 7) WHAT WILL BE THE OUTPUT AND WHY
// function foo() {
//     console.log(a);
// }
// var a = 555;
// foo()

// 8) WHAT WILL BE THE OUTPUT AND WHY
// function foo() {
//     console.log(a);
//     var a = 666;
// }
// var a = 555;
// foo()

// 9) WHAT WILL BE THE OUTPUT AND WHY
// (function () {
//     var a = 3;
//     b = 7;
// })();
// console.log(a);
// console.log(b);

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


// 11) WHAT WILL BE THE OUTPUT AND WHY
// for (let i = 0; i < 5; ++i) {
//     console.log(i++);
// }

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

// 13) WHAT WILL BE THE OUTPUT AND WHY

// let a = 3;
// do {
//     if (++a % 3 === 0 && a % 2 === 0) {
//         console.log(1);
//     } else if (a === 5 || a % 2 === 0) {
//         console.log(2);
//     }
// } while (a < 8);

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

// 16) WHAT WILL BE THE OUTPUT AND WHY

// function f(name, age) {
//     let message = name + ' says Hey!! He is ' + age + ' years old';
//     return function greet() {
//         console.log(message);
//     };
// }
// let henryGreeter = f('John', 26);
// henryGreeter();


// 17 WHAT WILL BE THE OUTPUT AND WHY

// let arr = [1, 22, 24, 46];
// arr.length=0;
// arr.push('street')
// console.log(arr);


// 18) WHAT WILL BE THE OUTPUT AND WHY

// let x = 12;
// let z = "ba" + x / "sil " + "a";
// console.log(z);

// 19) WHAT WILL BE THE OUTPUT AND WHY

// console.log('0 || 1' + (0 || 1));
// console.log('1 || 2' + (1 || 2));
// console.log('0 && 1' + (0 && 1));
// console.log('1 && 2' + (1 && 2));

// 20) WHAT WILL BE THE OUTPUT AND WHY
// function f(cb) {
//     return cb();
// }
// function f1() {
//     console.log(5);
// }
// let res = f(f1);
// console.log(res());

// 21) WHAT WILL BE THE OUTPUT AND WHY
// let f = function g() {
//     console.log('hi');
// };
// console.log(g());

// 22) WHAT WILL BE THE OUTPUT AND WHY
// (function(x) {
//     return (function(y) {
//         console.log(y + x);
//     })('hi')
// })('john');

// 23) WHAT WILL BE THE OUTPUT AND WHY
// const length = 4;
// const numbers = [];
// for (let i = 0; i < length; i++) {
//     numbers.push(i + 2);
// }
//
// console.log(numbers === [2, 3, 4, 5]);






