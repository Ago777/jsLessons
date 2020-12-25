// =========================WHAT WILL BE OUTPUT======================

// 1) WHAT WILL BE THE OUTPUT AND WHY
// var x = 21;
// let foo = function() {
//     console.log(x);
//     var x = 20;
// };
// foo();
// foo(5);
// console.log(x);

//====ANSWER=====
//undefined, undefined, 21

//====YOUR ANSWERS=====

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

//====ANSWER=====
// 'number'

//====YOUR ANSWERS=====
// Elina no answer

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

//====ANSWER=====
// 555
// 555

//====YOUR ANSWERS=====

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

//====ANSWER=====
//undefined
//undefined
//9
//9
//16

//====YOUR ANSWERS=====
// Ruzanna answer is:
// var x = 12;
// function f1(z) {
//     console.log(x);     //undefined
//     var x = 7;
//     let y = 9;
//     f3(z)
//     function f2(x) {
//         console.log(x); //undefined
//         console.log(y); //9
//     }
//     function f3(z) {
//         console.log(z);  //9
//         f2(y);
//     }
//     console.log(x + y)  //16
// }
//
// f1();

// bolor patasxannern petq e linen universal aysinqn cankacac argument poxancelu depqum petq e chisht ashxati kam
// chashxatelu depqum console.log aneq inchvor text nshelov vor sxal argument eq stacel;
// error chpiti lini
// orinak  ete petq e greq function vor kstana inchvor tiv kam array,
// da chi nshanakum vor ete es sxalvem urish type poxancem petqa kod@ traqi ayl petqa inchvor textov zgushacni vor sxal argumentem poxancel;
// xndirnern bolor@ hnaravora grel for() dasakan loop-ov bayc petqa greq arrayi methodnerov

// 1) greq function vor@ kstana array ev khashvi ayd arrayum exac tveric amenamec@ (arrayum karan tver chlinen);
// orinak ete poxancenq [5,12,'some', true] piti veradarcni 12
// ogtagorceq filter method


//====ANSWER=====

// function getMaxNum(arr) {
//     // const newArrWithNumber = arr.filter(item => typeof item === 'number');
//     // return Math.max(...newArrWithNumber);
//     //
//     // let biggestNum = newArrWithNumber[0];
//     //
//     // for (let i = 1; i < newArrWithNumber.length; i++) {
//     //     if(newArrWithNumber[i] > biggestNum) {
//     //         biggestNum = newArrWithNumber[i]
//     //     }
//     // }
//     //
//     // return biggestNum
//
//
// }
//
// console.log(getMaxNum([5, 12, false, 'some']));

//====YOUR ANSWERS=====
// Elina answer is:
// let all=[1,2,3,4, true, "script", false];
// let max= all.filter(function(item){
// return Math.max(item);
// });
// console.log(max);


// 2) greq function vor@ kstana array ev kveradarcni ayd array@ meji bolor tver@ krknapatkac
// orinak ete stana [5, 'Doe', 0, 4, 'some'] ---> kveradarcni [10, 'Doe', 0, 8, 'some']
//  ogtagorceq map

//====ANSWER=====

// function getDoubleNums(arr) {
//     let result = arr.map(item => {
//         return typeof item === 'number' ? item * 2 : item
//     });
//     return result
// }
// //
// console.log(getDoubleNums([5, 7, 9, 'some']));

//====YOUR ANSWERS=====

// Elina answer is:

// let arr=[5,6,7,"string", true, false];
// let double= arr.map(function(item){
//    if(typeof item==="number"){
//        return 2*item;
//    }else{
//        return item;
//    }
//  });
// console.log(double);

//Ruzanna answer is:
// function showDoubleArr(arr) {
//     arr.forEach(item => {
//         if (!Array.isArray(arr)) return;
//         let filteredArr = arr.filter(item => typeof item === 'number');
//         let mappedArr = filteredArr.map(item => item * 2);
//     })
// }
//
// console.log(showDoubleArr([7, 'null', 0, 3, true]));

// 3) greq function vor kstana array ev ktpi ayd arrayi amen kent index unecox elementern
//    ogtagorceq foreach

//====ANSWER=====

// function f(arr) {
//     arr.forEach((item, i) => {
//         i % 2 !== 0 ? console.log(item) : null
//     })
// }
//
// f(['some', 55, 10, false, '123Js']);

//====YOUR ANSWERS=====
// Elina answer is:

// function getNum(arr){
//     let odd=arr.forEach(function(item){
//         if ( item % 2 !== 0){
//             return item
//         }
//     });
// }

// console.log(getNum([1,2,3,4,5,6,7,8,9]));

// // Ruzanna answer is:
//   function showOddArr(arr) {
//     arr.forEach(item => {
//         if (!Array.isArray(arr)) return ;
//       return  let  filteredArr = arr.filter(i=> i % 2 === 1);
//     })
// }
// console.log(showOddArr([1,7,null,true,'true',0,11,'some']));