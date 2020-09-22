// xndirner@ djvar en partadir chi bolor@ luceq, karaq google aneq cankacac ban; methodnern nayeq (js mdn-ov),
// anun@ vor googleq henc arajinn mdn-i ssilken kberi
// bolor patasxannern petq e linen universal aysinqn cankacac argument poxancelu depqum petq e chisht ashxati kam
// chashxatelu depqum console.log aneq inchvor text vor sxal argument eq stacel;
// error chpiti lini
// orinak  ete es asum em greq function vor kstana inchvor tiv kam array,
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

// function makeArrUnique(arr) {
//     if (!Array.isArray(arr)) return;
//     return arr.filter((item, i) => arr.indexOf(item) === i);
// }

// ======= YOUR ANSWERS =======

// 5) greq function vor kstana array vori elementneric gone mekn eli array e ev erku callback;
//       function@ petq e hashvi bolor tveri gumar@ naev ayn tveri voronq gtnvum en nested arrayi mej;
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