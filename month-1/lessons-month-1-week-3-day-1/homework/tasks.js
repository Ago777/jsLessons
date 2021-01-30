// 1) greq function vor@ vorpes argument kstana array ev ktpi tvyal arrayum exac bolor tver@
// ======= ANSWER ==========
// function logNumbers(arr) {
//     // for(let i = 0; i< arr.length; i++) {
//     //     if(typeof arr[i] === 'number') {
//     //         console.log(arr[i])
//     //     }
//     // }
// }
//
// logNumbers([7,'someText', null, 87])
// ======= YOUR ANSWERS =======


// 2) greq function vor@ kstana 2 array argument ev ktpi aveli erkar arrayi meji bolor string elementner
// ======= ANSWER ==========

// function logStrings(arr1, arr2) {
//     // let arr = arr1.length > arr2.length ? arr1 : arr2;
//     // for(let i = 0; i< arr.length; i++) {
//     //     if(typeof arr[i] === 'string') {
//     //         console.log(arr[i])
//     //     }
//     // }
//     // arr.forEach(item => typeof item === 'string' ? console.log(item) : null)
// }
//
// logStrings([7,'someText', null, 87], [5,9])

// ======= YOUR ANSWERS =======
// Elina Answer is:

// function typeArray(array1, array2){
//  let oneArray=0;
//  if(array1.length>array2.length){
//     oneArray=array1;
//  }else(array2.length>array1.length){
//     oneArray=array2;
//  }
//  function getString(){
//     for (let i = 0 ; i < oneArray.length ; i++){
//     if(typeof oneArray[i] === "string"){
//     console.log(oneArray[i]);
//  }
// }
//
// typeArray([1,true,false],[1,2,3,4,"string", "something"])

// Nona answer is:

// function getNewArr(arr1 , arr2){
//     let stringedArr = arr1.length > arr2.length ? arr1 : arr2;
//     function getStrings(){
//         for (let i = 0 ; i < stringedArr.length ; i++){
//             if(typeof stringedArr[i] === 'string'){
//                 console.log(stringedArr[i]);
//             }
//         }
//     }
//     getStrings(stringedArr);
// }
// getNewArr([12 , 'string1' , 'string2'],['string3' , 12]);

// Vahag answer is

// function toCount(a, b) {
//     let num = 0;
//     if (a.length > b.length) {
//         num = a;
//     } else if (b.length > a.length) {
//         num = b;
//     }
//     for (let i = 0; i <= num.length; i++) {
//         if (typeof num[i] === "string") {
//             console.log(num[i]);
//         }
//     }
// }
// toCount([4, 5, 8, 5],[5, 4, 6, 8, "Hello", "How are you"]);

// 3) greq function vor@ kstana erku array voric mek@ datark e, ev myus arrayi meji elementern klcni datark arrayi mej u kveradarcni ayd array@
// ======= ANSWER ==========
// function cloneArray(arr, emptyArr) {
//     // for(let i = 0; i< arr.length; i++) {
//     //     emptyArr.push(arr[i])
//     // }
//     //
//     // return emptyArr
//     // arr.forEach(item =>  emptyArr.push(item))
//     // return emptyArr
// }
//
// console.log(cloneArray([7, 'someText', null, 87], []));

// ======= YOUR ANSWERS =======
// Elina answer is:  a, b variables, two function calls

// function getArr(a, b) {
//     for (let i = 0; i < a.length; i++) {
//         b.push(a[i]);
//     }
//     return b;
// }
//
// getArr([true, 1, "something"], [])
// console.log(getArr([true, 1, "something"], []));

// Vahag answer is:
//     function changeArrays(full, empty) {
//     if (full.length> empty.length) {
//         for (let i = 0; i <= full.length, i++) {
//             empty.push([i]);
//             return empty;
//         }
//     }
//   }
//
// }
// changeArrays([5, 8, 9, 7], []);

// 4) greq function vor@ stanum 2 argument mek@ array myus@ number type-i; ev stugum e ete arrayum ka 2rd argumentov stacvac tiv@
// apa veradarcnum e ayd tiv@  hakarak depqum veradarcnum e false

// ======= ANSWER ==========
// function showNum(arr, num) {
//     // for (let i = 0; i < arr.length; i++) {
//     //     if (arr[i] === num) {
//     //         return num
//     //     }
//     //
//     // }
//     // return false
//
//     // return arr.includes(num) ? num : false
// }
//
// console.log(showNum([7, 'someText', null, 87], 5));

// ======= YOUR ANSWERS =======

//Vahag answer is:
//  function changeArrays(arr, number) {
//     for (let i = 0; i <= arr.length, i++) {
//         if (arr[i] === number[i]) {
//             return number[i];
//         } else {
//             false;
//         }
//     }
// }
// changeArrays([5, 8, 9, 7], 8);


// 5) greq function vor kstana 4 argument bolor@ number ev kveradarcni array vori mej klinen ayd 4 numberneri krknapatiknern
// ======= ANSWER ==========
// function convertToArr(a, b, c, d) {
//     // return [a*2, b*2, c*2, d*2];
//     //
//     // let arr = [];
//     // arr.push(a * 2);
//     // arr.push(b * 2);
//     // arr.push(c * 2);
//     // arr.push(d * 2);
//     // return  arr
// }
//
// console.log(convertToArr(4, 8, 7, 9));


// ======= YOUR ANSWERS =======


// 6) greq function vor@ stanum e number argument ev drakan linelu depqum hashvum minchev ayd tiv@ exac tveri gumar@;
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


// 7) greq function vor@ stanum e number argument ev khashvi te ayd numberi mej qani 0 ka;
// =======ANSWER =======
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
// Elina Answer is:
// function getNum(x) {
//     let zerosCount = 0;
//     let string = x.toString();
//     for (let i = 0; i <= x; i++) {
//         if (x[i] === 0) {
//             zerosCount++;
//         }
//     }
//     return zerosCount
// }
//
// console.log(getNum(90008));

// Nona answer is:
// function countZeroes(number){
//     let count = 0;
//     let str = number.toString();
//     for(let i = 0; i <= number ; i++){
//         if (Number(str[i]) === 0){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countZeroes(20101));

// ERRORNERI DEPQUM HSTAK ASEQ INCH ERROR KBERI U XI

// 8)WHAT WILL BE THE OUTPUT AND WHY
// var x = 12;
// function test() {
//     console.log(x);
//     var x = 7;
//     const y = 9;
//     console.log(y)
// }
//
// test();

// ======= ANSWER ==========
// undfined 9

// =======YOUR ANSWERS=======

// Vahag answer: undefined և 9, քանի որ skznum x- հայտարարված չի, իսկ y-ը local տիրույթում են

// 9) WHAT WILL BE THE OUTPUT AND WHY
// let x = 12;
// function test(x) {
//     console.log(x);
//     let x = 7;
// }
//
// test(9)

// ======= ANSWER ==========
// already been declared


// 10) WHAT WILL BE THE OUTPUT AND WHY
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


// 11) WHAT WILL BE THE OUTPUT AND WHY
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


//12) WHAT WILL BE THE OUTPUT AND WHY
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

// =======YOUR ANSWERS=======
// Vahag Aswer:  չեմ հասկացել էս մեկը

// 13) f(1);
// let f = function (a, y) {
//     console.log(a)
//     console.log(y)
//     y = 3;
// };

// ======= ANSWER ==========
//Cannot access 'f' before initialization


//14) f();
// let x = 2;
// let f = x => {
//     console.log(x)
// }


// ======= ANSWER ==========
//Cannot access 'f' before initialization

// 15) let f = (x,y) => {
//     console.log(z, x, y);
//     y = 5;
// }
// var z = 4;
// f(3);
// f(1,2);

// ======= ANSWER ==========
// 4 3 undefined
// 4 1 2

// =======YOUR ANSWERS=======
// Vahag answer is: բայց պրոցեսսը մի քիչ լավ չեմ պատկերացնում