// --------------------WHAT WILL BE THE OUTPUT AND WHY----------------

// let num = 5;
//
// function showNum() {
//     console.log(num)
// }
//
// showNum();
// num = 7;
// showNum();

// ======= ANSWER ==========
// 5
// 7

// ======= YOUR ANSWERS =======
// RUDO ANSWER IS:
// unenq num popoxakan
// sarqum enq function mej@  kanchum enq num popoxakan@
// funkciaic durs haytararum enq stanum 5.heto popoxum enq popoxakan@
// noric haytararum enq stanum 7


// --------------------WHAT WILL BE THE OUTPUT AND WHY---------------

// let a = 10;
// let b = 10;
//
// let showSum = (a, b) => {
//     return a + b
// };
//
// console.log(showSum(5, 7));

// =======ANSWER =======
// 12
// ======= YOUR ANSWERS =======


// -------------------WHAT WILL BE THE OUTPUT AND WHY-------------------

// let name = 'John';
// let surname = 'Wick';
//
// function showName() {
//     let surname = 'Doe';
//     console.log(name);
//
//     function showSurname() {
//         return surname;
//     }
//
//     console.log(showSurname())
// }
//
// surname = 'otherSurname';
// showName();
// name = 'Jonathan';

// =======ANSWER =======
// 'John'
// 'Doe'
// ======= YOUR ANSWERS =======
// RUDO ANSWER IS:
// skzbum ktpi jhon aynuhetev kpoxi nami arjeq@ jinathan ev verj
// RUZANNA AND NONA: IN FUNCTION SUNRAME DONT CHANGE VALUE IT DECLARE NEW VALUE


// ----------WHAT WILL BE THE OUTPUT AND WHY-----

// let surname = 'Wick';
// let age = 21;
// let getInfo = function (age, name = 'John', surname) {
//     console.log(surname);
//     function getOnlyName(name) {
//         if(!surname) {
//             console.log(name);
//         } else {
//             console.log(age)
//         }
//     }
//     getOnlyName('Jonathan');
// };
// age = 20;
// getInfo(age);

// =======ANSWER =======
// undefined
// 'Jonathan'
// ======= YOUR ANSWERS =======
//RUDO ANSWER IS: skzbum ktpi undifined qani vor surname argument@ KANCHVAC chi

// greq function vor@ stanum e number argument ev drakan linelu depqum hashvum minchev ayd tiv@ exac tveri gumar@;
//orinak ete functionn stana 3 apa petq e veradarcni 6 (1 + 2 + 3)

// =======ANSWER =======
// function getSumOfPrevNumbers(num) {
//     let sum = 0;
//     if (num > 0) {
//         for (let i = 1; i < num; i++) {
//             sum += i;
//         }
//         return sum
//     }
// }
// //
// console.log(getSumOfPrevNumbers(5));

// ======= YOUR ANSWERS =======
// RUDO ANSWER IS: LOOP CAN START FROM 1 && NO IF STATEMENT AND BAD NAMES FOR FUNCTIONS AND ARGUMENTS
// NONA ANSWER IS: LOOP FROM NUMBER TO 0:


// js@ uni function Math.max(num1, num2, num3) vor@ veradarcnum e trvac cankacac qanaki tveric amenamec@, greq ayd functionn inqnuruyn 3 tvi hamar

// =======ANSWER =======
// function calcMaxNumber(a, b, c) {
//     const maxOfTwoValue = a > b ? a : b;
//
//     return maxOfTwoValue > c ? maxOfTwoValue : c;
// }
// console.log(calcMaxNumber(7, -5, 0));

// ======= YOUR ANSWERS =======
// RUDO AND RUZANNA ANSWERS IS:
// function getMax(num1, num2, num3) {
//    return Math.max(num1, num2, num3);
//  }
// NONA ANSWER IS:
// function mathMax(num1, num2, num3) {
//     let max;
//     if (num1 > num2 && num1 > num3) {
//         max = num1;
//     } else if (num2 > num1 && num2 > num3) {
//         max = num2;
//     } else if (num3 > 1 && num3 > num2) {
//         max = num3;
//     }
//     return max;
// }
//
// console.log(mathMax(7, 7, 1));

//greq function vor@ stanum e 2 argument ev clone e anum 1@ 2rdi mej;

// =======ANSWER =======

// let clone = (firstValue, secondValue) => {
//     secondValue = firstValue;
//
//     return secondValue;
// }
//
// console.log(clone('John', ''))

// greq function vor@ stanum e number argument ev khashvi te ayd numberi mej qani 0 ka;
// =======ANSWER =======

// let getAllZeros = function (num) {
//     let zeroCounts = 0;
//     let strNum = num.toString();
//     for (let i = 0; i < strNum.length; i++) {
//         strNum[i] === '0' && zeroCounts++
//     }
//     return zeroCounts;
// }
//
// console.log(getAllZeros(500050))
// ======= YOUR ANSWERS =======