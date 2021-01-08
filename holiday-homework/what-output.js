// =========================WHAT WILL BE OUTPUT======================
//
// 1) WHAT WILL BE THE OUTPUT AND WHY
// var x = 21;
// let foo = function() {
//     console.log(x);
//     var x = 20;
// };
//
// foo();
// foo(5);
// console.log(x);
//
// ====ANSWER=====
// undefined, undefined, 21
//
// ====YOUR ANSWERS=====
//
// 2) WHAT WILL BE THE OUTPUT AND WHY
// function f1(callback) {
//     let x = 7;
//     return callback(x);
// }
// function f2(param) {
//     let x = 'Jhon';
//     return param
// }
//
// let res = f1(f2);
// console.log(typeof res);
//
// ====ANSWER=====
// number

// ====YOUR ANSWERS=====
//
// 3) WHAT WILL BE THE OUTPUT AND WHY
// let a = 999;
// function foo() {
//     let b = a;
//     function myFunction (){
//         b = 66;
//     }
//     console.log(b);
//     console.log(a);
//     myFunction();
// }
// a = 555;
// foo();
//
// ====ANSWER=====
//555, 555

// ====YOUR ANSWERS=====
//
// 4) WHAT WILL BE THE OUTPUT AND WHY
// var x = 12;
// function f1(z) {
//     console.log(x);
//     var x = 7;
//     let y = 9;
//     f3(z);
//     function f2(x) {
//         console.log(x);
//         console.log(y);
//     }
//     function f3(z) {
//         console.log(z);
//         f2(y);
//     }
//     console.log(x + y)
// }
//
// f1();
//
//
// ====ANSWER=====
// undefined, undefined, 9, 9, 16

// ====YOUR ANSWERS=====
//
// 5) WHAT WILL BE THE OUTPUT AND WHY
// f1(2,1,3);
// var x = 12;
// function f1(a, b = 0, c) {
//     console.log(x);
//     c = 9;
//     f3(c);
//     function f3(a) {
//         console.log(a + c);
//         b = 7
//     }
//     console.log(b)
// }

// ====ANSWER=====
// undefined, 18, 7

// ====YOUR ANSWERS=====
//
// 6) WHAT WILL BE THE OUTPUT AND WHY
//
// f(5,1,2,3);
// let f = function (...rest) {
//     console.log(rest)
// };
//
// ====ANSWER=====
// Cannot access 'f' before initialization

// ====YOUR ANSWERS=====
//
// 7) WHAT WILL BE THE OUTPUT AND WHY
//
// let a = 5;
// let f = (a,b) => {
//     if(a > 6) {
//         b = a;
//     }else {
//         b += a
//     }
//
//     return a + b
// };
// a+=1;
// let res = f(a++, ++a);
// console.log(res);
//
// ====ANSWER=====
//20

// ====YOUR ANSWERS=====
//
// 8) WHAT WILL BE THE OUTPUT AND WHY
// let f = (arr) => {
//     console.log(a);
//     var a = 5;
//     arr.push(55);
//     return function () {
//         return Math.max(...arr)
//     }
// };
// f([5,7,8])();
//
//
// ====ANSWER=====
// undefined

// ====YOUR ANSWERS=====
//
// 9) WHAT WILL BE THE OUTPUT AND WHY
//
// f()([1,2,3]);
//
// function f(a) {
//     console.log(a);
//     return function (arr) {
//         arr.push(a);
//         return arr
//     }
//
// }
//
// ====ANSWER=====
// undefined

// ====YOUR ANSWERS=====
//
//
// 10) WHAT WILL BE THE OUTPUT AND WHY
//
// let a = 7;
//
// function f(b) {
//     let a = 9;
//     console.log(a);
//     let arr = [b];
//     return function () {
//         let arr = [b,b];
//         return arr.length;
//     }
// }
//
// let res = f(a++);
// let endResult = res();
// console.log(endResult);
//
//
// ====ANSWER=====
// 9, 2
// ====YOUR ANSWERS=====
//
//
// 11) WHAT WILL BE THE OUTPUT AND WHY
//
// let a = 7;
// function f1() {
//     let a = 8;
//     return a++
// }
// function f(callback) {
//     return callback()
// }
//
// let res = f(f1);
// console.log(res);
//
//
// ====ANSWER=====
// 8

// ====YOUR ANSWERS=====
//
//
// 12) WHAT WILL BE THE OUTPUT AND WHY
//
// function f(a) {
//     if(a) {
//         let a = 8;
//         return ++a
//     }else {
//         let a = -8;
//
//         return a++
//     }
// }
//
// console.log(f(5));
// console.log(f(0));
//
// ====ANSWER=====
// 9, -8

// ====YOUR ANSWERS=====
//
//
// 13) WHAT WILL BE THE OUTPUT AND WHY
//
//
// console.log(f(5));
//
// function f(b = 0) {
//     if (b.toString().length > 1) {
//         var str = 'with Var';
//     } else {
//         let str1 = ' with Let';
//     }
//
//     console.log(str);
//     console.log(str1);
// }

// console.log(f(55));
//
//
// ====ANSWER=====
// undefined, error str1 is not defined

// ====YOUR ANSWERS=====
//
//
// 14) WHAT WILL BE THE OUTPUT AND WHY
//
// function f(arr) {
//     if (arr.length) {
//         var a = arr.length++;
//         console.log(a);
//     }
//     console.log(a);
// }
//
// f([1, 2, 58]);
//
//
// ====ANSWER=====
// 3, 3

// ====YOUR ANSWERS=====
//
// 15) WHAT WILL BE THE OUTPUT AND WHY
//
// let a = 4;
// function f(arr) {
//     let a = 8;
//     if (arr.length) {
//         let a = arr.length++;
//         console.log(a);
//     }
//     console.log(a);
// }
//
// f([1, 2, 58]);
//
//
// ====ANSWER=====
// 3, 8

// ====YOUR ANSWERS=====
//
// 15) WHAT WILL BE THE OUTPUT AND WHY
//
//
// function f(count) {
//     if (count.toString()) {
//         count++;
//         if (count > 0) {
//             count++;
//             if (!count) {
//                 console.log('no-count')
//             } else {
//                 console.log(--count)
//             }
//         }
//     }
//
//     return count
// }
//
// f(0);
//
// ====ANSWER=====
// 1

// ====YOUR ANSWERS=====
//
// 16) WHAT WILL BE THE OUTPUT AND WHY
//
//
// function f(count) {
//     if (count.toString()) {
//         count++;
//         if (count > 0) {
//             count++;
//             if (!count) {
//                 console.log('no-count')
//             } else {
//                 console.log(--count)
//             }
//         }
//     }
//
//     return count
// }
//
// let res = f(0);
// let res1 = f(5);
// console.log(res, res1);
//
// ====ANSWER=====
// 1, 6,  1 6

// ====YOUR ANSWERS=====
//
// 17) WHAT WILL BE THE OUTPUT AND WHY
//
//
// function f(a = 0,b = 0) {
//     let res;
//     if (a && b) {
//        res = 'text1' || 'text2' && 'text3'
//     }else {
//        res =  55 && 0 || 'some Text'
//     }
//
//     return res
//
// }
//
// let res = f(5);
// let res1 = f(5,5);
// console.log(res, res1);
//
// ====ANSWER=====
// 'some Text', text1

// ====YOUR ANSWERS=====
//
//
// 18) WHAT WILL BE THE OUTPUT AND WHY
//
//
// function f(a = 0, b = 0, c) {
//     let res;
//
//     if (a && b && c) {
//         res = a || b || c
//     }
//
//     if (a || b && c) {
//         res = a && b || c
//     }
//
//     if (a || b || c) {
//         res = a && b && c
//     }
//
//     return res
//
// }
//
// let res = f(1);
// let res1 = f(1, 'some');
// let res2 = f(1, null, 3);
// console.log(res, res1, res2);
//
// ====ANSWER=====
// 0, undefined, null

// ====YOUR ANSWERS=====
//
// 19) WHAT WILL BE THE OUTPUT AND WHY
//
// let b = 5;
//
// function f(a, c) {
//     let b = 10;
//     let res = 0;
//     switch (!!a) {
//         case a > b: {
//             res = a || b || c;
//             break;
//         }
//         case a < b: {
//             res = a && b && c;
//             break;
//         }
//         case a === b: {
//             res = (a || b) && c;
//             break;
//         }
//     }
//
//     return res
// }
//
// let res = f(5, 20);
// let res1 = f(15, 15);
// let res2 = f(10, 30);
// console.log(res, res1, res2);
//
// ====ANSWER=====
// 20,15,30

// ====YOUR ANSWERS=====
//
// 20) WHAT WILL BE THE OUTPUT AND WHY
//
// let b = 5;
// function f() {
//     let b = 10;
//
//     if(!b) {
//         let b = true;
//         console.log(b);
//     }else {
//         console.log(b++);
//     }
//
//     function f2(arr) {
//         arr.push(b);
//         console.log(b);
//         if(arr.length > 2) {
//             var b = false;
//         }else {
//             let b = 'some';
//         }
//
//         console.log(arr[1]);
//     }
//
//     f2([b,b])
// }
//
// f();

// ====ANSWER=====
// 10, undefined, 11

// ====YOUR ANSWERS=====
//
//
