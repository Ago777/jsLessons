// bolor patasxannern petq e linen universal aysinqn cankacac argument poxancelu depqum petq e chisht ashxati kam
// chashxatelu depqum console.log aneq inchvor text nshelov vor sxal argument eq stacel;
// error chpiti lini
// orinak  ete petq e greq function vor kstana inchvor tiv kam array,
// da chi nshanakum vor ete es sxalvem urish type poxancem petqa kod@ traqi ayl petqa inchvor textov zgushacni vor sxal argumentem poxancel;

// 1) greq function vor@ kstana array ev khashvi ayd arrayum exac tveric amenamec@ (arrayum karan tver chlinen);
// ======= ANSWER ==========
//     function getMaxFromArr(arr) {
//         if(!Array.isArray(arr)) return;
//         let filteredArr = arr.filter(item => typeof item === 'number');
//         if(!filteredArr.length) return 'no numbers in array';
//
//         return Math.max(...filteredArr)
//     }
//     console.log(getMaxFromArr([5,7,9]))


// 2) greq function vor@ kstana array ev mek primitive type;
//    ev kstugi te tvyal primitive type-ic qani hat ka arrayum u kveradarnci ayd qanak@

// ======= ANSWER ==========
//     function isIncludedValue(arr, value) {
//         if(!Array.isArray(arr)) return;
//         let result = arr.filter(item => item === value);
//
//         return result.length;
//     }
//
//     console.log(isIncludedValue([5,7,'some', 7], 7))

// 3) greq function vor@ kstana 2 array ev kstugi ardyoq irenc parunakutymab lriv nuynn en,
// ete ayo kveradarcni true hakarak depqum ayd erku arraynern kmiacni kdarcni mek array ev kveradarcni:
// orinak ---> [1,2,3] ev [1,2,3] kveradarcni true -->['a','b'] ev ['a', 'b', 'c'] --> kdarcni ['a', 'b', 'a', 'b', 'c']

// ======= ANSWER ==========

// function compare(arr1, arr2) {
//     if (!Array.isArray(arr1) || !Array.isArray(arr2)) return;
//     if (arr1.length !== arr2.length) return [...arr1, ...arr2];
//     let comparedArr = arr1.map((item,i) => item === arr2[i]);
//
//     return comparedArr.includes(false) ? [...arr1, ...arr2] : true;
// }
//
// console.log(compare([1, 9, 'string'], [1, 9, 'string']));

// 4) greq function vor@ kstana array, ayd arrayi mejic karandznacni bolor duplicate elementnern,
// (aysinqn nuyn arjeqnern orinak erku hat 5 ete lini) ev kveradarcni nor array aranc duplicate-i
// orinak---> ete poxnacem [5,7, 'some', 5, true, 'some', false, true] petq e functionn return ani [5,7, 'some', false, true]

// ======= ANSWER ==========
// function makeArrUnique(arr) {
//     if(!Array.isArray(arr)) return;
//
//     let result = [];
//     arr.forEach(item => {
//         if (!result.includes(item)) {
//             result.push(item)
//         }
//     });
//     return result;
// }
// OR
// function makeArrUnique(arr) {
//     if (!Array.isArray(arr)) return;
//     return arr.filter((item, i) => arr.indexOf(item) === i);
// }

// ======= YOUR ANSWERS =======

// 5) greq function vor kstana array vori elementneric gone mekn eli array e ev erku callback;
//       function@ petq e hashvi bolor tveri gumar@ naev ayn tveri voronq gtnvum en nested arrayi mej ev nested arrayneri qanak@;
//    arajin calbback petq e tpi patasxan@ ev nshi te qani array type- i element e exel himnakan arrayi mej;
//     erkrord callback petq e tpi 0 ete vochmi number EV vochmi array type-i element chi exel himanakn arrayum
//   orinak tvual arrayi depqum--> [5, [4, 'a'], true, ['c', 1, 'b']];
//  petq e ashxati arajin callback@ ev tpi 10(bolor tveri gumar@) heto 2(array elementeri qanak@)

// ======= ANSWER ==========
// function successCb(sum, count) {
//     console.log(sum);
//     console.log(count)
// }
//
// function errorCb() {
//     console.log(0);
// }
//
// function doSomething(arr, successCb, errorCb) {
//     if (!Array.isArray(arr)) return;
//     let sum = 0;
//     let count = 0;
//     arr.forEach(item => {
//         if (typeof item === 'number') {
//             sum += item
//         } else if (Array.isArray(item)) {
//             count++
//             item.forEach(nestedItem => {
//                 if (typeof nestedItem === 'number') {
//                     sum += nestedItem;
//                 }
//             })
//         }
//     });
//     if (!sum && !count) {
//         typeof errorCb === 'function' && errorCb()
//     } else {
//         typeof successCb === 'function' && successCb(sum, count)
//     }
// }
//
// console.log(doSomething([5, [4, 'a'], true, ['c', 1, 'b']], successCb, errorCb))

// ======= YOUR ANSWERS =======

//6) greq function vor@ stanum e array miayn number elementnerov ev veradarcnum
//nor array bolor ayn elementneri krknapatikov voronq zuyg en (poqric mec dasavorutyamb)
// oribnak--> stanum enq [5,2,4,1,9,6] ---> veradarcnum e [4,8,12] aysinqn 2,4,6 -i krknapatiknern poqric mec dasavorutyamb
// function getNewArray(arr) {
//     if (!Array.isArray(arr)) return 'argument ios not array';
//     const filteredArr = arr.filter(item => item % 2 === 0);
//     const mappedArr = filteredArr.map(item => item * 2);
//     return mappedArr.sort((a, b) => a - b)
// }

// ERRORNERI DEPQUM HSTAK ASEQ INCH ERROR KBERI U XI
// 7)WHAT WILL BE THE OUTPUT AND WHY
// var x = 12;
// function test() {
//     console.log(x);
//     var x = 7;
//     const y = 9;
//     console.log(y)
// }
//
// test()

// ======= ANSWER ==========
// undfined 9

// 8) WHAT WILL BE THE OUTPUT AND WHY
// let x = 12;
// function test(x) {
//     console.log(x);
//     let x = 7;
// }
//
// test(9)

// ======= ANSWER ==========
// already been declared


// 9) WHAT WILL BE THE OUTPUT AND WHY
// let x = 12;
// function test(x) {
//     x = 14;
//     console.log(x);
//     console.log(y);
//     const y = 9;
// }
//
// test(9)

// ======= ANSWER ==========
//Cannot access 'y' before initialization


// 10) WHAT WILL BE THE OUTPUT AND WHY
// let x = 2;
// function test(y) {
//     console.log(y);
//     y = 3;
//     console.log(x)
//     function test1 (a) {
//         let z = 4;
//         console.log(x);
//         function test2 (z) {
//             console.log(a);
//             console.log(z)
//             z = 5;
//         }
//         test2(6)
//     }
//     test1(7)
// }
//
// test(1)

// ======= ANSWER ==========
// 1,2,2,7,6


//11) WHAT WILL BE THE OUTPUT AND WHY
// let x = 1;
//
// f(2);
//
// function f(x) {
//     console.log(x)
// }
//
// x = 3;
//
// f();

// ======= ANSWER ==========
// 2,undefined

// 12) f(1);
// let f = function (a, y) {
//     console.log(a)
//     console.log(y)
//     y = 3;
// };

// ======= ANSWER ==========
//Cannot access 'f' before initialization


// 14) let f = (x,y) => {
//     console.log(z, x, y);
//     y = 5;
// }
// var z = 4;
// f(3);
// f(1,2);

// ======= ANSWER ==========
// 4 3 undefined
// 4 1 2
