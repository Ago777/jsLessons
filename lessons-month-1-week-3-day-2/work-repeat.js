// 1) greq function vor@ kstana array ev kveradarcni stacvac arrayi tveri krknapatiknerov mek ayl array

// const makeDouble = (arr) => {
//     return arr.map(item => typeof item === 'number' ? item * 2 : item)
// }
//
// console.log(makeDouble([5,7,9, 'sasf']))

// ======================================================

// 2) greq function vor@ kstana array ev khashvi ayd arrayum exac tveric amenamec@ (arrayum karan tver chlinen);

//     function getMaxFromArr(arr) {
//         if(!Array.isArray(arr)) return;
//         let filteredArr = arr.filter(item => typeof item === 'number');
//         if(!filteredArr.length) return 'no numbers in array';
//
//         return Math.max(...filteredArr)
//     }
//     console.log(getMaxFromArr([5,7,9]))

//================================================

// 3) greq function vor kstana 2 array ev kveradarcni bolor ayn arjeqnern arrayi tesqov voroqn arka en 2 arraynerumel
// const getDuplicateValues = (arr1, arr2) => {
//     const result = [];
//     arr1.forEach(item => {
//         const isUnique = arr2.includes(item);
//         if(isUnique) result.push(item)
//         // if(isUnique && !result.includes(item)) result.push(item)
//     })
//
//     return result
// }
//
// const x = [5, 'Jhon', 15, 'Jhon'];
// const y = ['Jhon', 15, 'Wick', '5'];
//
// console.log(getDuplicateValues(x, y))

//=====================================================

// 4) greq function vor kstana array vori elementneric gone mekn eli array e ev erku callback;
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

// =========================WHAT WILL BE OUTPUT======================

// 1) WHAT WILL BE THE OUTPUT AND WHY
// var x = 21;
// let foo = function() {
//     console.log(x);
//     var x = 20;
// }
// foo();
// console.log(x)

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

// 4) WHAT WILL BE THE OUTPUT AND WHY
// let f = (x,y) => {
//     console.log(z, x, y);
//     y = 5;
// }
// var z = 4;
// f(3);
// f(1,2);

// 5) WHAT WILL BE THE OUTPUT AND WHY
// var x = 12;
// function test() {
//     console.log(x);
//     var x = 7;
//     const y = 9;
//     console.log(x + y)
// }
//
// test()

// 6) WHAT WILL BE THE OUTPUT AND WHY
// var x = 12;
// function f1(z) {
//     console.log(x);
//     var x = 7;
//     let y = 9;
//     f3(z)
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

