// ASHXATEQ XNDIRNERN ARRAYI HET KAPVAC GREQ ARRAYI METHODNEROV DASAKAN FOR LOOPI POXAREN;
// ashxateq functioni verjum stacvac arjeq@ vochte tpel ayl return areq;
//ashxateq bolor functionnerum dnel validacianer,, aysinqn ete es asum em stanum e vorpes argument array function mej stugeq
// check dreq vor array chlinelu depqum durs ga functionic u chsharunaki


// 1) greq function vorn stanum number argument ev switch case-i mijocov stugum e ete tiv@ drakan e tox tpi hamapatasxan inchvor text;
//   ete bacasakan e nuyn@, ete 0 e tox tpi 0;
//
//==========ANSWER==============
// function checkNum(num) {
//     if(typeof num !== 'number' ) return `${num} is not a number`;
//
//     switch (true) {
//         case num > 0: {
//             console.log(`${num} is positive`);
//             break;
//         }
//         case num < 0: {
//             console.log(`${num} is negative`);
//             break;
//         }
//         default:  console.log(num);
//     }
// }
//
// checkNum(0);

// //====================YOUR ANSWERS=====================

// 2) greq function vorn stanum cankacac tiv ev stugum e ete tvanshannern 3-ic shat en hashvum e gumar@ ayd tvanshanneri ete qich en;
//     hashvum e artadryal@; ete henc eranish tiv e tox hamapatasxan textov asi vor eranish e;
//      orinak 12 stanalu depqum khashvi artadryal@ tvanshanneri aysinqn 2, 5555 stanalu depqum khashvi gumarn aysinqn 20; 123 stanalu depqum kveradarcni 3

//==========ANSWER==============
// function workWithDigits(num) {
//     if(typeof num !== 'number') return `${num} is not a number`;
//
//     let numStr = num.toString();
//     let len = numStr.length;
//     let result = 0;
//
//     if (len > 3) {
//         for (let i = 0; i< len; i++) {
//             result += +numStr[i]
//         }
//     } else if (len < 3) {
//         for (let i = 0; i< len; i++) {
//             result *= +numStr[i]
//         }
//     } else {
//         result = 3
//     }
//
//     return result
// }

// console.log(workWithDigits(125));

//====================YOUR ANSWERS=====================

// 4) greq function vor stanum e tverov array ev sortavourm e ayd array@ ka hamapatasxan method;
// orinak stanum e [5,0,7,1] veradarcnum [0,1,5,7]

//==========ANSWER==============
// function toSort(arr) {
//     if(Array.isArray(arr)) {
//         return arr.sort((a,b) => a - b)
//     }
//     return `${arr} is not ARRAY`
// }
//
// console.log(toSort([5, 0, 2, 14]));
// console.log(toSort([5, 0, 2, 9]));

//====================YOUR ANSWERS=====================

// 5) greq function vor stanum e array ev veradarcnum e mek ayl array vortex klinen naxord arrayi miayn tver@;
// orinak stanum e [5,0, 'some', null] veradarcnum [5,0]

//==========ANSWER==============
// function toFilter(arr) {
//     if(Array.isArray(arr)) {
//         let onlyNums = arr.filter(item => typeof item === 'number');
//         return onlyNums;
//     }
//
//     return `${arr} is not a Array`
// }
//
// console.log(toFilter(['str', 0, '2', true, 7]));

//====================YOUR ANSWERS=====================

// 6) greq function vor stanum e array ev veradarcnum e mek ayl array vortex klinen naxord arrayi stringneri arajin elementnern;
// // orinak stanum e [5,0, 'some', 'javascript'] veradarcnum ['s', 'j']
//
// //==========ANSWER==============
// function getFirstSymbols(arr) {
//     if (Array.isArray(arr)) {
//         let resultArr = [];
//         for (let i = 0; i < arr.length; i++) {
//             if (typeof arr[i] === 'string') resultArr.push(arr[i][0])
//         }
//
//         arr.forEach(item => {
//             if(typeof item ==='string') resultArr.push(item[0])
//         });
//
//         return resultArr
//     }
//
//     return `${arr} is not a Array`
// }

// function getFirstSymbols(arr) {
//     if (Array.isArray(arr)) {
//         let onlyStrings = arr.filter(item => typeof item === 'string');
//         if (!onlyStrings.length) return `No strings in ${arr}`;
//         let resArr = onlyStrings.map(item => item[0]);
//         return resArr
//     }
//
//     return `${arr} is not a Array`
// }
//
//
// console.log(getFirstSymbols([5, 0, 'some', 'javascript']));

// //====================YOUR ANSWERS=====================

// 7) greq function vor stanum e array ev veradarcnum e ayd arrayi tvanshanneri gumar@ (methodov ashxateq greq vochte for loopov)

//==========ANSWER==============

// function sumOfNumbers(arr) {
//
//     if (Array.isArray(arr)) {
//         // let res = arr.reduce((acc, curr) => {
//         //     if(typeof curr !== 'number') {
//         //         return acc +=0;
//         //     }else {
//         //         return acc + curr
//         //     }
//         // }, 0);
//
//         // let onlyNums = arr.filter(item => typeof item === 'number');
//         // let res = onlyNums.reduce((acc, curr) => acc + curr);
//
//         // let res = 0;
//         // arr.forEach(item => {
//         //     if(typeof item === 'number') {
//         //         res += item
//         //     }
//         // })
//
//         // return res;
//     }
//
//     return `${arr} is not a Array`
// }
//
// console.log(sumOfNumbers([4, 'str', 124, '22']));

//====================YOUR ANSWERS=====================


// 8) greq function vor@ stanum e tveri array ev mek number argument ev veradarcnum nor array vori mej klinen miayn number argumentov stacvac tvic mec tver@
//       orinak stanum e [4,1,5], 3 petq e verdarcni kveradarcni [4,5]

//==========ANSWER==============

// function onlyHighNumbers(arr, num) {
//     if(Array.isArray(arr)) {
//         let res = arr.filter(item => item > num);
//         return res
//     }
//
//     return `${arr} is not a Array`
// }
//
// console.log(onlyHighNumbers([1, 5, 7, 0, 15], 5));

//====================YOUR ANSWERS=====================

// 9) greq function vor@ kstana 3 argument arajin erkusn number, errord@ hetevyal stringneric mekn 'sum' 'divide' 'minus' 'multiply')
//    ev kaxvac errod argumentic kkatari ayd tveri het hamapatasxan gorcixutyun ev kveradarcni arjeq@;
//      orinak  stanum e (5,7, 'divide'); petq e veradarcni 5 bajanac 7 arjeq@

//==========ANSWER==============

// function doMath(a, b, action) {
//     switch (action) {
//         case 'divide': {
//             return a / b;
//         }
//         case 'sum': {
//             return a + b;
//         }
//         case 'minus': {
//             return a - b;
//         }
//         case 'multiple': {
//             return a * b;
//         }
//         default: {
//             return 'action is not valid'
//         }
//     }
// }
//
// console.log(doMath(10, 5, 'divide'));
// console.log(doMath(10, 5, 'sum'));
// console.log(doMath(10, 5, 'multiple'));
// console.log(doMath(10, 5, 'minus'));
// console.log(doMath(10, 5, 'asf'));

//====================YOUR ANSWERS=====================

// 10) greq function vor@ stanum e array argument filtrum e u stanum nuyn array@ bayc menak tverov
//    ev stugum ete ayd arrayi arajin u verjin tveri gumar@ mec e 10 ic apa kveradarcni true hakarak depqum false
// orinak stanum e [24,5,8,12]  arajin u verjin elementneri gumarn 13 e isk bolor elementneri gumarn 26 uremn kveradarcni false

//==========ANSWER==============

// function isValid(arr) {
//     if (Array.isArray(arr)) {
//         let onlyNumbers = arr.filter(item => typeof item === 'number');
//         if(!onlyNumbers.length) return `No numbers in ${arr}`;
//         let firstElem = onlyNumbers[0];
//         let lastElem = onlyNumbers[onlyNumbers.length - 1];
//
//         return firstElem + lastElem > 10;
//     }
// return `${arr} is not a Array`
// }
//
// console.log(isValid([1, 5, 8, 'str', '44']));
// console.log(isValid([1, 5, 12, 'str', '44']));


//====================YOUR ANSWERS=====================

// 11) greq function vor kstana array ev ktpi ayd arrayi amen KENT INDEX unecox elementern
//    ogtagorceq foreach: orinak kstana [5,7,'some', 'js']  ktpi 7, 'js'


//==========ANSWER==============

// function showOddIndexes(arr) {
//     if (Array.isArray(arr)) {
//         arr.forEach((item, i) => i % 2 !== 0 && console.log(item))
//     }
//
//     return `${arr} is not a Array`
//
// }
//
// showOddIndexes([12, '54', true, 'str', 55]);

//====================YOUR ANSWERS=====================


// 13) greq function vor kstana array ev mek cankacac arjeq ev kstugi ete ayd 2rd argumentov stacvac arjeqn ka arrayum
//   uremn kveradarcni ayd ayd arjeq@ hakarak depqum kveradarcni hamapatasxan text vor chka
//    orinak stanum e [5, 'js', 15, 'some'] ev 'js' kveradarcni 'js' isk ete js chliner kveradarcner orinak 'no this word'

//==========ANSWER==============

// function findItem(arr, value) {
//     // let isThereItem = arr.includes(value);
//     // return isThereItem ? value : `there is no ${value}`;
//
//     // let foundItem = arr.find(item => item === value);
//     // return foundItem ? foundItem : `there is no ${value}`;
// }
//
// console.log(findItem([12, 'str', 'name', 44], 44));
// console.log(findItem([12, 'str', 'name', 44], 'surname'));

//====================YOUR ANSWERS=====================

// 14) greq function vor@ stanum e 2 number ev VERADARCNUM e mek urish function vorn kancheluc heto hashvum e ayd tveri gumar@

//==========ANSWER==============

// function makeSum(a, b) {
//     return function () {
//         if (typeof a !== 'number' || typeof b !== 'number') return 'no 2 numbers in arguments'
//         return a + b
//     }
// }
//
// console.log(makeSum(5,7)());

//====================YOUR ANSWERS=====================

// 15) MIAT IMAST UNECOX INCHVOR OGTAKAR TEKUZ POQR GORC ANOX FUNCTION MTACEQ U INQURUYN GREQ
