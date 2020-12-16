// 1) WHAT OUTPUT AND WHY
// let str = 'my name is ana';
// let length = str.length - 1;
// for (let i = 0; i < str.length; i++) {
//    if(i === 2 || i === 7 || i === 10) {
//        console.log(str[i] + str[length]);
//        length--
//    }
// }

//----ANSWER IS-----
//a
//n
//a

//-----------YOUR ANSWERS-------------
// Elina no answer
// Ruzanna no answer

// ===============================================================================================================


// 2) WHAT IS OUTPUT
// let x = 10 > 5;
// while(x) {
//     console.log('dont test it in console');
//     x = !!x
// }

//---------ANSWER IS--------
// endless loop

//-----------YOUR ANSWERS-------------
// Ruzanna no answer

// ===============================================================================================================

// 3) greq nuyn cod@ while-i case-i mijocov
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

// 4) greq nuyn cod@ for-i mijocov mijocov
// let x = 5;
// while (x !== 10) {
//     console.log(x);
//     x++
// }

//-----ANSWER IS-----

// for(let x = 5; x < 10; x++) {
//     console.log(x)
// }

//-----------YOUR ANSWERS-------------
// Elina, Nona, Ruzanna answers is
// for(let x=5; X!==10; x++) {
//     console.log(x);
// }


// ===============================================================================================================


// 5) while cikli mijocov tpeq 10-100 mijakayqum bolor tver@

//----ANSWER IS-----
// let num = 10;
// while(num < 100) {
//     console.log(num)
//     num++
// }
// for(let i = 10; i <=100; i++) {
//          console.log(i)
// }

//-----------YOUR ANSWERS-------------


// ===============================================================================================================

// 6) for loop-i mijocov reversedName popoxakanin veragreq name popoxakan@ aynpes vor text@ lini ajic dzax grvac ev tpeq:
//orinak ete name = 'JHON' petq e stanaq 'NHOJ';

//-------ANSWER IS-------
// let name = 'SNOITALUTARGNOC';
// let reversedName = '';
//
// for(let i = name.length - 1; i >= 0; i--) {
//     reversedName += name[i];
// }
// console.log(reversedName)
//-----------YOUR ANSWERS-------------
// Elina answer is
// let reversedName="Elina";
// for(let i= reversedName.length-1; i>=0; i--) {
//     console.log(reversedName[i])
// }
//Ruzanna answer is
// let name = 'Abel';
// let reversedName = '';
// for (let i = name.length - 1;i >= 0; i-- ) {
//     console.log(reversedName += name[i];
// }

// ===============================================================================================================

// 7) for loop-i mijocov tpeq 1-1000 mijakayqum bolor minaish kam erknish tvern orinak 5, 19, 57

//---------ANSWER IS-------
//
// for(let i = 1; i < 1000; i++) {
//     if(i < 100)  console.log(i)
// }


//-----------YOUR ANSWERS-------------
// Elina answer is
// for (let i = 1; i <= 1000; i++) {
//     let num = i.toString();
//     if (num.length === 3) {
//         console.log(i);
//     }
// }

// Nona answer is
// for(let i = 1 ; i <= 1000 ; i++){
//     let number = i.toString();
//     if(number.length === 1 || number.length === 2){
//         console.log(i);
//     }
// }

// ===============================================================================================================


// 8) for loop-i mijocov tpeq 1-1000 mijakayqum(1-@ ev 1000-@ neraryal) bolor kent tveri gumar@ ---->>  patasxan@ petq e stanaq 250000

//--------ANSWER IS--------

// let res = 0;
// for (let i = 1; i <= 1000; i++) {
//     if(i % 2 !== 0) {
//         res += i;
//     }
// }
// console.log(res);

//-----------YOUR ANSWERS-------------
// Ruznanna answers is
// let sum = 0;
// for (let i = 0; i <= 1000; i++ ){
//       i % 2 = 1 && console.log(sum += i)
}

// ===============================================================================================================

// 9) while cikli mijocov tpeq 1-ic 10 mijakayqum gtnvox 3rd handipac zuyg tiv@;

//--------ANSWER IS--------
// let count = 0;
// let num = 1;
// while(num < 10000) {
//     if(num % 2 === 0) {
//         count++;
//         if(count === 3) {
//             console.log(num);
//             break;
//         }
//     }
//     num++;
// }

//-----------YOUR ANSWERS-------------
// Elina no answer

// Nona answer is
// let evenNums = '';
// for(let i = 1; i <= 10000 ; i++){
//     if(i % 2 === 0){
//         evenNums += i;
//     }
// }
// console.log(evenNums[2]);

// Ruzanna answer is
// let count = 0;
// for( let x = 1;x <10; x ++){
//     if(x % 2 ===0){
//         count += x ;
//         x === 3 && console.log( count)
//     }
//
// }