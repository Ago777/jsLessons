// ---------------- for  ------------
//LOOPS ARE A WAY TO REPEAT THE SAME CODE MULTIPLE TIMES.

// execute numbers from 0 - 10;
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// or

// for(let i = 0; i <=10; i++) {
//      console.log(i)
// }

// WE CAN WRITE LIKE THIS BUT DONT DO THIS


// for(; ; ) {
//      console.log(i)
// }

//ONE CODE EXECUTE CALLED ITERATION

// ----if in loop----

// let num = 5;
// for (let i = 0; i < 10; i++) {
//      console.log(`iteration ${i}`);
//     if (i === num) {
//         console.log(i);
//     }
// }

// -----break-----

// let num = 5;
// for (let i = 0; i < 10; i++) {
//     console.log(`iteration ${i}`);
//     if (i === num) break;
// }

// ------continue---> next iteration------

// let num = 5;
// for (let i = 0; i < 10; i++) {
//     console.log(`iteration ${i}`);
//     if (i === num) continue;
//     console.log(i);
// }

// let str = 'someLongString';
// for(let i = 0; i < str.length;  i++) {
//     console.log(str[i] + ' is iteration ' + i)
// }

// let str = 'someLongString';
// for(let i = str.length - 1; i > 0;  i--) {
//     console.log(str[i] + ' is iteration ' + i)
// }



// ---TASK IF THERE IS A TIME IN THE END---

//---- TASK 1 zuyg numbers-----

// let num = 100;
// for(let i = 1; i <= num; i++) {
//     if(i%2 === 0) {
//         console.log(i)
//     }
//     //or
//     if(i%2 === 0) console.log(i)
//     //  or
//     i % 2 === 0 && console.log(i)
// }
//---with while
// let i = 0;
// while (i <= num) {
//         if(i%2 === 0) {
//         console.log(i)
//     }
//     i++
// }


//-----test time------
// let num = 100;
//
// let start = performance.now();
//
// for(let i = 1; i <= num; i++) {
//     i % 2 === 0 && console.log(i)
// }
//
// let end = performance.now();
// //
// console.log(`execution time is: ${end - start}`);


// ----TASK 2 sum of digits-----

// let num = 12548;
//
// let numStr = num.toString();
//
// let result = 0;
//
// for(let i = 0; i < numStr.length;  i++) {
//     result += +numStr[i];
// }
//
// console.log(result);

// TASK 3 is there 0
// let enteredNum = prompt('please enter number');
// its always string thats why we put +
//
// for (let i = 0; i < enteredNum.length; i++) {
//     if(+enteredNum[i] === 0) {
//         console.log(`yes there is ${enteredNum[i]}`);
//         break;
//     }
//     console.log(enteredNum[i])
// }
//---with while
// let i = 0;
// while(i < enteredNum.length) {
//     if(+enteredNum[i] === 0) {
//         console.log(`yes there is ${enteredNum[i]}`);
//         break;
//     }
//     i++
// }
// TASK 4 zeros count

// let zerosCount = 0;
//
// for (let i = 0; i < enteredNum.length; i++) {
//     if(+enteredNum[i] === 0) {
//         zerosCount++;
//     }
// }
//
// console.log(zerosCount);

// TASK 5 prime numbers

// let isPrime = true;
//
// for (let i = 2; i < +enteredNum; i++) {
//     if(enteredNum % i === 0) {
//         isPrime = false;
//         console.log(`${enteredNum} is not prime`);
//         break;
//     }
// }
//
// isPrime && console.log(`${enteredNum} is Prime`);

// we can divide 2 enteredNum / 2
