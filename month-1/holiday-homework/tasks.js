// ASHXATEQ XNDIRNERN ARRAYI HET KAPVAC GREQ ARRAYI METHODNEROV DASAKAN FOR LOOPI POXAREN;
// ashxateq functioni verjum stacvac arjeq@ vochte tpel ayl return areq;
//ashxateq bolor functionnerum dnel validacianer,, aysinqn ete es asum em stanum e vorpes argument array function mej stugeq
// check dreq vor array chlinelu depqum durs ga functionic u chsharunaki

//RUZANNA ALL TASKS CHECKED WITH --->>>Arr.isArray() wrong tasks 8,11,13,14;
//XCHO  wrong tasks ---->>> 1,2,6,7,8
//EGISH-MEHRAB ALL CHECKS != ----->>>> 6,9,10

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

// Nona answer is: typeof number != "number"
// Elina and Vahag naswer is:
// function checkNum(a) {
//     switch (Math.sign(a)) {
//         case 1:
//             console.log("it is plus");
//             break;
//         case -1:
//             console.log("it is minus");
//             break;
//         case 0:
//             console.log("it is 0");
//             break;
//     }
// }
// checkNum(-25);

// XCHO ANSWER IS:
// console.log(numbers(1,-1,0)) 3 arguments.

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
// Elina answer is:
//  function getNum (arr){
//    if (!Array.isArray(arr)) return "no array";
//      let check= arr.map(function(item){
//          if (arr.length >3){
//             return item+item;
//          } else (arr.length<3)   {
//              return item*item);
//          }else (arr.length=3){
//             return "This number has 3 digits";
//          }
//      }
//  }
//  getNum ([123])
// Vahag no answer:

//Xcho Answer is:

// function foo (num) {
//     let numString = num.toString();
//     if (numString.lenght === 3) {
//         return 3;
//     }
//     let arrayofDigits = numString.split(" ")
//     let results = arrayofDigits.reduce(function (accumulator, currerntValue, index , array) {
//         if (numString.lenght > 3){
//             return Number (accumulator) + Number (currerntValue);
//         }
//         if(numStringtring.lenght < 3 ) {
//             return Number (accumulator) * Number (currerntValue);
//         }
//     }0)
//     return  results;
// }
//
// console.log(
//     foo(555),
//     foo(23),
//     foo(123)
// );

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

// Vahag answer is:
// function toGrow(numbers) {
//     let compareNumbers = (a, b) => a - b;
//     console.log(numbers.sort(compareNumbers));
// }
// toGrow([5, 8, 7, 9, 6, 1, 2, 3, 20, 30, 45, 21, 125]);
// Ամենաօպտիմալ տարբերակն էս էր, բայց մի բան մենակ լավ չեմ հասկացել, a-b պահը function-ի return-ի մեջ։

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
// ALL ANSWERS IS TRUE
//Nona answer is:
// function getNumbers(arr){
//     if (!Array.isArray(arr)) return 'This is not array';
//     let newArr = [];
//     for(let i = 0 ; i < arr.length ; i++){
//         if (typeof arr[i] === 'number'){
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(getNumbers([12,5,'Nona']));

// Elina answer is:
// function getNumbers(arr){
// if (!Array.isArray(arr)) return "no array";
//     let arr1=[];
//     for(let i=0; i<arr.length; i++){
//         typeof arr[i]==="number"? arr1.push(arr[i]) : null;
//     }
//     return arr1;
// }
//
// console.log(getNumbers([true, false, "string", 1, 2, "hello", 5, 85]));

// Vahag answer is:
//     function toSeparate(firstOne) {
//         let secondOne = [];
//         for (let i = 0; i < firstOne.length; i++) {
//             typeof firstOne[i] === "number" ? secondOne.push(firstOne[i]) : null;
//         }
//         console.log(secondOne);
//     }
//
// toSeparate(["some text", "5", 8, 9, 565, "The end"]);
// If-ի կարճ գրելաձևի մեջ առանց else չի՞ լինում։

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

// ALL ANSWERS IS TRUE
//Nona and Vahag answers answer is:

// function getFirstElementOfString(arr){
//     if (!Array.isArray(arr)) return 'This is not array';
//     let stringArr = [];
//     let finalArr = [];
//     for (let i = 0 ; i < arr.length ; i++){
//         if( typeof arr[i] === 'string'){
//             stringArr.push(arr[i]);
//         }
//     }
//     for (let i = 0 ; i < stringArr.length ; i++){
//         finalArr.push(stringArr[i][0])
//     }
//     return finalArr;
// }
// console.log(getFirstElementOfString(['Nona', 13 , 15 , 'Karapetyan']));

//Elina answer is:
// function getNumbers(arr){
//   if (!Array.isArray(arr)) return "no array";
//     let arr1=[];
//     for(let i=0; i<arr.length; i++){
//         typeof arr[i]==="string"? arr1.push(arr[i][0]) : null;
//     }
//    console.log (arr1);
// }
// getNumbers([true, false, "string", 1, 2,"hello", 5, 85,"name", "surname"]);

// Xcho answer is:
//     let array = [5, 0, 'some', 'javascript'];
// function foo () {
//     let z = '' ;
//     for (let i = 0; i < array.length ; i++){
//         if (typeof array[i] === 'string'){
//             z += array[i][0];
//         }
//     }
//     let str = z.split('');
//     return str;
// }
//
// console.log(foo())

//Egish-Mehrab Answers:
//  let arrWithFirst = (arr) => {
//      if(Array.isArray(arr)) {
//          console.log('This is before: ', arr);
//          let arr2 = [];
//          let arrFirstSym = arr.filter(findStr);
//          function findStr(item) {
//              if(typeof item === 'string') {
//                  arr2.push(item[0]);
//                  return item;
//              }
//          }
//          console.log(arrFirstSym);
//          console.log(arr2);
//      }
//  }
//  let arr = [2, 0, 'Mandarin', undefined, 9, 'Silver'];
//  arrWithFirst(arr);

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
// Nona and Elina answer is:

// function getSumOfElements(arr){
//     if (!Array.isArray(arr)) return 'This is not array';
//     let onlyNums = [];
//     for (let i = 0 ; i < arr.length ; i++){
//         if (typeof arr[i] === 'number'){
//             onlyNums.push(arr[i]);
//         }
//     }
//     return onlyNums.reduce((sum, item) => sum + item);
// }
// console.log(getSumOfElements([12, 'n' , 5 ,4 , 'yes']));

// Vahag answer is:
// function toPlus(arr) {
//     let result = arr.reduce((sum, current) => sum + current);
//     console.log(result);
// }
//
// toPlus([5, 8, 9, 10, 15]);

//Xcho answer is:
// function add(...arr) {
//     let newArr = arr.filter(x => typeof  x === "number")
//     let result = newArr.reduce(function (accumulator , currentValue) {
//         return Number(accumulator) + Number (currentValue);
//     });
//     return result
// }
//
// console.log(add ("John" , "Tom" , 78 , 55 , "Frank" , 7 , 96 ));

// 8) greq function vor@ stanum e tveri array ev mek number argument ev veradarcnum nor array vori mej klinen miayn number argumentov stacvac tvic mec tver@
//       orinak stanum e [4,1,5], 3 petq e verdarcni kveradarcni [4,5]

//==========ANSWER==============

// function onlyHighNumbers(arr, num) {
//     if(Array.isArray(arr)) {
//         let res = arr.filter(item => item > num && typeof item === 'number');
//         return res
//     }
//
//     return `${arr} is not a Array`
// }
//
// console.log(onlyHighNumbers([1, 5, 7, 0, 15], 5));

//====================YOUR ANSWERS=====================
//Ruzanna answer is:

// function getNewArr (arr,a) {
//     if (Arr.isArray(arr)){
//         let result = [];
//         arr.forEach(item =>
//             if (item >a && typeof item ==='number') result.push(item)
//         )
//         return result;
//     }
// }
// console.log(getNewArr([7,22,20],11));


//Nona and Elina and Vahag asnwer is:
//  function getBiggerNums(arr , number){
//      if (!Array.isArray(arr)) return 'This is not array';
//      let newArr = [];
//      for (let i = 0 ; i < arr.length ; i++){
//          if (arr[i] > number) {
//              newArr.push(arr[i]);
//          }
//      }
//      return newArr;
//  }
//  console.log(getBiggerNums([12 , 5 , 16], 7));
//  console.log(getBiggerNums([12 , 5 , 16, '45', true], 0));

// Xcho answer is:
//
// function x(y , z ) {
//     let results = [];
//     let k = y.reduce(function (accumulator , currentValue) {
//         if (currentValue > z){
//             results.push(currentValue);
//         }
//     })
//     return results;
// }
//
// console.log(x([4 , 1 , 5 , 96 , 11 , ] , 3));


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
// Nona answer is:
// function calculate(num1 , num2 , option){
//     switch (option){
//         case 'sum':{
//             return num1+num2;
//             break;
//         }
//         case 'divide':{
//             return num1/num2;
//             break;
//         }
//         case 'minus':{
//             return num1 - num2;
//             break;
//         }
//         case 'multiply':{
//             return num1*num2;
//             break;
//         }
//         default:{
//             return "JS can't calculate the option you have entered.";
//         }
//     }
// }
// console.log(calculate(2 , 5 , 'sum'));

//EGISH-MEHRAB ANSWER:
// function doSomethingWithNum(num1, num2, action) {
// 	switch(true) {
// 		case action == 'sum':
// 			return num1 + num2;
// 		case action == 'divide':
// 			return num1 / num2;
// 		case action == 'minus':
// 			return num1 - num2;
// 		case action == 'multiply':
// 			return num1 * num2;
// 		default:
// 			return 'Chem haskanum inch es uzum anes???';
// 	}
// }
// console.log(doSomethingWithNum(74,33,'multiply'));


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
// Elina no asnwer
// Vahag answer is:
// function diffArguments(mixedArr) {
//     let onlyNumbers = mixedArr.filter(item => typeof item === "number");
//     if (onlyNumbers[0] + (onlyNumbers.length - 1) > 10) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
//
// diffArguments(['start', 5, 8, 7, 9, 10, 'some text', 58, 85, 'the end'])

//Egish-Mehrab Answer is:
// let bigOrSmall = function(arr) {
// 	if(Array.isArray(arr)) {
// 		console.log(arr);
// 		let onlyNums = arr.filter(item => typeof item === 'number');
// 		console.log(onlyNums);
// 		let sumOfFirstLast = onlyNums[0] + onlyNums[onlyNums.length - 1];
// 		console.log(sumOfFirstLast);
// 		switch(true) {
// 			case sumOfFirstLast > 10:
// 				return true;
// 			default:
// 				return false;
// 		}
// 	}
// }
// let arr = [4,'Joker',7,34,undefined,8];
// console.log(bigOrSmall(arr));

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
//RUZANNA answer is:
// function showOddElements (arr) {
//     if (Arr.isArray(arr)){
//         let result = [];
//         arr.forEach(item =>{
//             if ( item[i] %2 === 0) result.push(item)
//         })
//         return result;
//     }
// }
// console.log(showOddElements([3,11,true,7,null]));

// Nona answer is:
// function getOddIndexElement(arr){
//     if (!Array.isArray(arr)) return 'This is not array';
//     arr.forEach(item => {
//         if(arr.indexOf(item) % 2 !== 0){
//             console.log(item);
//         }
//     })
// }
// getOddIndexElement([12 , 45 ,65 , 100 , 'yes' , 'no']);

// Elina answer is:
// function getNum(arr) {
//     if (!Array.isArray(arr)) return "no array";
//     let odd = arr.forEach(function (item, index) {
//         if (item[index] % 2 !== 0) {
//             console.log(item);
//         }
//     });
// }
//
// console.log(getNum([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Vahag answer is:
// function oddOrEven(arr) {
//     let result = [];
//     arr.forEach((x, i) => {
//         if (i % 2 === 1) {
//             result.push(x);
//         }
//     });
//     console.log(result);
// }
//
// oddOrEven([5, 'some text', 8, 'JS', 'The End']);

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
// RUZANNA answer is:

// function getNewArr (arr,num) {
//     if (Arr.isArray(arr)){
//         let result = [];
//         arr.forEach(item =>
//             if (item === num) result.push(item)
//         )
//         return result;
//     }
//     return  'Nthing found'
// }
// console.log(getNewArr(['some',0,5,true],5))

// Nona and Elina answer is:

// function findSameMember(arr, value) {
//     if (!Array.isArray(arr)) return 'This is not array';
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === value) {
//             return value;
//         }
//     }
//     return 'No this member';
// }
// console.log(findSameMember([3,5,7,'some word'], 7));

// Vahag answer is

// Example 1
// function toFindArr(arr, text) {
//     arr.forEach((item) => {
//         if (item === text) {
//             console.log(text)
//         }
//     });
// };
// toFindArr(['who knows', 8, 5, 'Am i exist?'], 'Am i exist?');
//
// Example 2
// function toFindArr(arr, text) {
//     arr.find(item => item === text);
//     console.log(text)
// }
// toFindArr(['who knows', 8, 5, 'Am i exist?'], 'Am i exist?');

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
// RUZANNA ANSWER IS:
// function getSumNum (a,b){
//     return  function sum (){
//         return a + B
//     }
// }
//
//
// console.log(getSumNum(730,523));

// ALL ANSWERS IS TRUE
//Nona answer no check validation

// function returnSum(num1 , num2){
//     return function (){
//         return num1 + num2;
//     }
// }
// console.log(returnSum(2,8)());

// Elina answer:
// no second call
// function getNumbers(num1, num2){
//     return getSum () {
//         return num1+num2;
//     }
// }
// console.log (getNumbers(25, 80));

// Vahag answer:
// short write return

// function forNumbers(number1, number2) {
//
//     function plusNumbers() {
//         let result = number1 + number2;
//         console.log(result);
//
//     }
//
//     return plusNumbers;
//
// }
//
// forNumbers(88, 55)();

// 15) MIAT IMAST UNECOX INCHVOR OGTAKAR TEKUZ POQR GORC ANOX FUNCTION MTACEQ U INQURUYN GREQ
// Nona answer
//  function countDigitsOfNumber(number){
//      let str = number.toString();
//      let splitString = str.split("");
//      let reverseArray = splitString.reverse();
//      let reversedNum = Number(reverseArray.join(""));
//      console.log(`The number you have entered has ${str.length} digits.`);
//      console.log(`Digits of ${number} are:`);
//      for(let i = 0 ; i < str.length ; i++){
//          console.log(`${i+1}-th: ${reversedNum%10}`);
//          reversedNum = (reversedNum - reversedNum%10)/10;
//      }
//  }
//  countDigitsOfNumber(123);

// optimizing
// function countDigitsOfNumber(number){
//     let str = number.toString();
//     console.log(`The number you have entered has ${str.length} digits.`);
//     console.log(`Digits of ${number} are:`);
//     for(let i = 0; i < str.length ; i++){
//         console.log(`${i+1}-th: ${str[i]}`);
//     }
// }
// countDigitsOfNumber(123);

// ========================================================================================================================

// grel function vorn kstana array ev kveradarcni nor array vori mej chen lini duplicatner
// orinak input ---> [5, 'John', 15, '44', 5, 'Wick', true, 'John'] ---> output [5, 'John', 15, '44', 'Wick', true]
// includes

// 1.
// function getUniqueArr(arr) {
//     if(Array.isArray(arr)) {
//         let uniqueArr = [];
//         arr.forEach(item => {
//             !uniqueArr.includes(item) && uniqueArr.push(item)
//         });
//         return uniqueArr
//     }
//
//     return `${arr} is not array`
// }

// 2.
// function getUniqueArr(arr) {
//     if(Array.isArray(arr)) {
//        return arr.filter((item, index) => arr.indexOf(item) === index)
//     }
//
//     return `${arr} is not array`
// }

// console.log(getUniqueArr([5, 'John', 15, '44', 5, 'Wick', true, 'John']));


//===================================

// grel function vorn kstugi trvac stringn palindrome e te voch
// orinak 'Anna' is palindrome


// 1.
// function palindrome(str) {
//     let lowCaseStr = str.toLowerCase();
//     let reverseStr = lowCaseStr.split('').reverse().join('');
//
//     return reverseStr === lowCaseStr;
// }
//
// console.log(palindrome("Anna"));

// 2.
// function palindrome(str) {
//     str = str.toLowerCase();
//     let len = str.length;
//     for (let i = 0; i < len/2-1; i++) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }
//
// console.log(palindrome('madam'));

//===================================
// deep clone arrays function

// function deepClone(arr) {
//     if(!Array.isArray(arr)) return arr;
//
//     let clonedArr = [];
//     for(let i = 0; i < arr.length; i++) {
//         let value = arr[i];
//
//         // clonedArr[i] = Array.isArray(value) ?  deepClone(value) : value;
//         clonedArr[i] = deepClone(value);
//     }
//
//     return clonedArr;
// }
//
// let arr = [[1, 2], 'text', true, ['text', [12, 20, 0], 5]];
//
// let clonedArr = deepClone(arr);
// console.log(clonedArr);


// 3) greq function vor@ kstana array kam object vori mej karox en linel eli arrayner ev objectner
//    vori mej karox en eli linel ev ayln ev ayln, ansahmanapak
//    petq e veradarcneq nuyn ban@ inch stacel eq argumentov  bayc bolor refer@(nerdrvac objectneri arrayneri poxvac)
//    orinak stanum eq hetevyal array@
//    argument [{id: 1, obj: {skills: ['fight', 'kill']}},7, [1, ['Rudo', 'Nona']], 'string']
//    petq e veradarcneq nuyn parunaktyuuamb array
//    return [{id: 1, obj: {skills: ['fight', 'kill']}},7, [1, ['Rudo', 'Nona']], 'string']
//    vortex refer@ poxvac klinen
//    aysinqn ete porcem return arac arrayi 0 indexov objecti meji skills arrayi mej ban avelacnem poxancvac arrayi mej chpoxvi

//  ZHOX ES XNDIRN CHEQ KARA LUCEQ OV LUCEC UREMN GOOGLELA MINCHEV KURSI VERJ LINELUYA ES XNDIR@
//  ETE INCHVOR MEKN LUCEC NUYN XNDRI NMAN URISH XNDIR EM TALU TEXUM LUCI