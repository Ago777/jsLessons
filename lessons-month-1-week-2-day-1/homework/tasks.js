//1) greq nuyn cod@ while-i case-i mijocov
// for(let i = 0; i < 10; i++) {
//     console.log(i)
// }

//------ANSWER IS-----
// let  i = 0;
// while(i < 10) {
//     console.log(i);
//     i++
// }




// ===============================================================================================================

//2) greq nuyn cod@ for-i mijocov mijocov
// let x = 5;
// while (x !== 10) {
//     console.log(x);
//     x++
// }

//-----ANSWER IS-----

// for(let x = 5; x < 10; x++) {
//     console.log(x)
// }

// ===============================================================================================================


//3) while cikli mijocov tpeq 10-100 mijakayqum bolor tver@ voronc tvanshanneri gumar@ mec e 12-ic

//----ANSWER IS-----
// let num = 10;
// while(num < 100) {
//     const strNum = num.toString();
//     if((+strNum[0] + +strNum[1]) > 12) {
//         console.log(num)
//     }
//     num++
// }
// RUZANNA NO ANSWER
// DIFFERENT WORKING DIFFICULT ANSWERS

// ===============================================================================================================

// 4) for loop-i mijocov reversedName popoxakanin veragreq name popoxakan@ aynpes vor text@ lini ajic dzax grvac ev tpeq:
//orinak ete name = 'JHON' petq e stanaq 'NHOJ';

//-------ANSWER IS-------
// let name = 'SNOITALUTARGNOC';
// let reversedName = '';
//
// for(let i = name.length - 1; i >= 0; i--) {
//     reversedName += name[i];
// }
// console.log(reversedName)


// ===============================================================================================================

// 5) WHAT OUTPUT AND WHY
// let str = 'my name is ana';
// let length = str.length - 1;
// for (let i = 0; i < str.length; i++) {
//    if(i === 2 || i === 7 || i === 10) {
//        console.log(str[i] + str[length]);
//        length--
//    }
// }

//GARIK ALAREL
//RUDO NO ANSWER
//XCHO ANSWER IS ANVERJ CIKL

//----ANSWER IS-----
//a
//n
//a


// ===============================================================================================================


// 6) WHAT IS OUTPUT
// let x = 10 > 5;
// while(x) {
//     console.log('dont test it in console');
//     x = !!x
// }

//---------ANSWER IS--------
// endless loop

//RUZANNA ANSWER 'dont test it in console' qani vor let popoxakani arjeqy true e, isk double jxtman depqum stanum enq nuyn arjeqy`true
//XCHO NO ANSWER

// ===============================================================================================================


// 7) for loop-i mijocov tpeq 1-1000 mijakayqum bolor minaish kam erknish tvern orinak 5, 19, 57

//---------ANSWER IS-------


// for(let i = 1; i < 1000; i++) {
//     i < 100 && console.log(i)
// }


//RUZANNA ANSWER IS BEST
// GARIK ANSWER IS:
// for(let i  = 0; i <= 1000; i++){
//    string = String(i);
//    if(string.leng >= 2)
//    console.log(i)
// }
//
//NONA ANSWER IS:
// for(let i = 1 ; i <= 1000 ; i++){
//     let str = String(i);
//     if(str.length === 1 || str.length === 2){
//         console.log(i);
//     }
// }

//XCHO ANSWER IS:
// for(let i = 1; i < 1000; i++) {
// if (i >= 1 && i < 100) {
//     console.log(i);
//   }
// }

// ===============================================================================================================


// 8) while cikli mijocov tpeq 1-ic 10 mijakayqum gtnvox 3rd handipac zuyg tiv@;

//--------ANSWER IS--------
// let count = 0;
// let num = 1;
// while(num < 10) {
//     if(num % 2 === 0) {
//         count++;
//         count === 3 && console.log(num)
//     }
//     num++;
// }

// GARIK ANSWER WITH FOR LOOP
// NONA ANSWER IS:
// let x = 1;
// let evenNumber = '';
// while (x < 10){
//     if(x%2 === 0){
//         evenNumber += x;
//     }
//     x++;
// }
// console.log(evenNumber[2]);

//RUZANNA ANSWER IS:
// let n='' ;
// while (i=2;  i<= 10) {
//     (n.length=3) && console.log(i);
//     i+=2;
// }


// ===============================================================================================================


// 9) for loop-i mijocov tpeq 1-1000 mijakayqum(1-@ ev 1000-@ neraryal) bolor kent tveri gumar@ ---->>  patasxan@ petq e stanaq 250000

//--------ANSWER IS--------

// let res = 0;
// for (let i = 1; i <= 1000; i++) {
//     if(i % 2 !== 0) {
//         res += i;
//     }
// }
// console.log(res);

// GARIK ANSWER IS GOOD:
// let sum = 0;
// for(let i = 1; i <=1000; i = i+2){
//     sum = sum+i
// }
// console.log(sum)

//RUZANNA ANSWER IS:
// let sum = 0;
// for (i = 1; i<=1000; i+=2); {
//     console.log(i === sum)
// }

//  do x++ no ++x; write short if statement give variable good names;


// ===============================================================================================================

