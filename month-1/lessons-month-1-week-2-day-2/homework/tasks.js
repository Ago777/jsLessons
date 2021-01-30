// 1) --------------------WHAT WILL BE THE OUTPUT AND WHY----------------

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
// 5, 7
// ======= YOUR ANSWERS =======


// 2) --------------------WHAT WILL BE THE OUTPUT AND WHY---------------

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


// 3) ----------WHAT WILL BE THE OUTPUT AND WHY-----
//
// let age = 30;
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


// 4) greq function vor@ stanum e number argument ev drakan linelu depqum hashvum minchev ayd tiv@ exac tveri gumar@;
//    orinak ete functionn stana 3 apa petq e veradarcni 6 (1 + 2 + 3)

// =======ANSWER =======

// function showSum(num) {
//     let sum = 0;
//     for (let i = 1; i < num; i++) {
//         sum += i
//     }
//     return sum
// }
//
// console.log(showSum(5));

// ======= YOUR ANSWERS =======

// Elina answer is:
// function generateNumber() {
//         let num = Math.ceil(Math.random() * 10);
//         console.log(num);
//         if(num > 0) {
//             for(let i = 0; i <num; i++) {
//                      console.log(i)
//                 }
//             }  else {
//                 return "No answer"
//             }
//     }
//     console.log(num);
//     let x=num.toString();
//     let result = generateNumber();
//     console.log(result);


// 5) js@ uni function Math.max(num1, num2, num3) vor@ veradarcnum e trvac cankacac qanaki tveric amenamec@, greq ayd functionn inqnuruyn 3 tvi hamar
// (patkeracreq math.max goyutyun chuni)

// =======ANSWER =======

// function showMax(a, b, c) {
//     // let bigNum = a > b ? a : b;
//     // bigNum = bigNum > c ? bigNum : c;
//     // return bigNum
//
//     // return a > b ? a > c ? a : c : b > c ? b : c
// }
//
// console.log(showMax(-1, 5, 7));

// ======= YOUR ANSWERS =======
//Elina answer is:
// function maxNum(a,b,c){
//
//     if(a>b){
//         return a
//     } else if(a>c){
//         return a
//     } else if(b>a){
//         return b
//     } else if(b>c){
//         return b
//     } else if(c>a){
//         return c
//     } else if (c>b) {
//         return c
//     }
// }
// let result = maxNum(5, 6, 7);
// console.log(result);



// 6) greq function vor@ stanum e number argument ev khashvi te ayd numberi mej qani 0 ka;

// =======ANSWER =======
//
// function showZerosCount(num) {
//     // let stringNum = num.toString();
//     // let count = 0;
//     // let i = 0;
//     // while(i < stringNum.length) {
//     //     if(+stringNum[i] === 0) {
//     //         count++
//     //     }
//     //     i++
//     // }
//     //
//     // return count
//
//     // let count = 0;
//     // let i = 0;
//     // while(i < num) {
//     //     let lastDigit = num % 10;
//     //     if(lastDigit === 0) {
//     //         count ++
//     //     }
//     //     num = (num - lastDigit) / 10;
//     //     i++
//     //
//     // }
//     // return count
// }
//
// console.log(showZerosCount(1205));

// ======= YOUR ANSWERS =======
// let enteredNum = prompt('enter number');
//
// function count() {
//     let zerosCount = 0;
//     for (let i = 0; i < enteredNum.length; i++) {
//         if (+enteredNum[i] === 0) {
//             zerosCount++;
//         }
//     }
// }