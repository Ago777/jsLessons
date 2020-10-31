// 1. greq function vor@ stanum e cankacac qanaki number type argumentner ev veradarcnum e bolor krknvox arjeqnern arrayov;
// orinak stanum e (5,7,9,0,4,5,7) ---> veradarcnum [5,7]
//==========ANSWER==============
// function getNotUniqueNums(...args) {
//     let arr = [];
//     args.forEach((item, i) => {
//         if(args.indexOf(item) !== i && !arr.includes(item)) {
//             arr.push(item)
//         }
//     });
//     return arr;
// }
//
// console.log(getNotUniqueNums(5,7,9,2,1,1,0,1,5))

// 2.greq function vor@ kstana string ayn kveraci arrayi vori elementnern stringi tarern en
//ev kveradarcni tvyal array@ aranc krknvox elementneri
// orinak stanum e 'anna' ---> veradarcnum ['a','n']
//==========ANSWER==============
// function getUniqueArr(str) {
//     const arrStr = str.split('');
//     return arrStr.filter((item,i) => arrStr.indexOf(item) === i)
// }
//
// console.log(getUniqueArr('anna'))

//3. greq function vor@ stanum e 2 number type argument ev 1 string hetevyal operatorneric mekn@ --> '+', '-', '*', '/'
// ev evradarcnum nshvac erku tveri tvyal operatori mijocov stacvac ardyunq@
// orinak stanum e (5, '+', 7) kveradarcni 12
//==========ANSWER==============
// function makeMath(a, op, b) {
//     switch (op) {
//         case '+':
//             return a + b;
//         case '-':
//             return a - b;
//         case '*':
//             return a * b;
//         case '/':
//             return a / b;
//     }
// }
//
// console.log(makeMath(5, '-', 4));

// 4. WHAT WILL BE THE OUTPUT

// (function () {
//     let a = b = 3;
// })();
// console.log(typeof a !== 'undefined');
// console.log(typeof b !== 'undefined');

//==========ANSWER==============
// false, true

// 5. WHAT WILL BE THE OUTPUT

// (function () {
//     var a = b = 3;
// })();
// console.log(typeof a !== 'undefined');
// console.log(typeof b !== 'undefined');

//==========ANSWER==============
// false, true

// // 6. WHAT WILL BE THE OUTPUT
// function f1(f2) {
//     return f2(5);
// }
// function f2(x) {
//     console.log(x);
// }
// let f3 = f1(f2);
// console.log(f3());
//==========ANSWER==============
// 5, error