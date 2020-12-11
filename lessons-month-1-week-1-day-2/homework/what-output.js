// // 1) WHAT WILL BE THE OUTPUT AND WHY
//     let a = 5;
//     let b = String(a);
//     let c = Boolean(b);
//     let d = c.toString();
//     d += d;
//     console.log(d);

// ---ANSWER----
// 'truetrue'


// // 2) WHAT WILL BE THE OUTPUT AND WHY
//
//     let x;
//     let y = Boolean(x);
//     let z = Number(y);
//     let q = z++;
//     console.log(q);

// ---ANSWER----
// 0

//
// // 3) WHAT WILL BE THE OUTPUT AND WHY
//
//     let str = 'some string';
//     let str4 = str[4];
//     str4 += '';
//     let sum = 10 + str4;
//     console.log(sum);
//
// ---ANSWER----
// '10 '

// RUZANNA && ELINA ANSWER IS '10';

// // 4) WHAT WILL BE THE OUTPUT AND WHY
//
//     let num = 124.5;
//     let someStr = 'some';
//     let line = num + someStr;
//     let parsedLine = parseInt(line);
//     let something = ++parsedLine;
//     const result = something >= '';
//     console.log(result);
//
// ---ANSWER----
//true

// ELINA ANSWER IS:
// 125 is more or equal than UNDEFINED, so the answer is true

// // 5) WHAT WILL BE THE OUTPUT AND WHY
//
//     let bool = true;
//     let notBool = 'string';
//     let val = +bool + 1;
//     let newVal = val + notBool;
//     let len = newVal.length;
//     let newLen = len + +'5.12345';
//     const res = newLen.toFixed(1);
//     console.log(res);

// ---ANSWER----
// '12.1'

// // 6) WHAT WILL BE THE OUTPUT AND WHY
//
//     let lastString = 'string';
//     let whatOutput = lastString.indexOf('t');
//     let getSymbol = lastString[lastString.length - whatOutput];
//     let isEqual = getSymbol === 'g';
//     console.log(isEqual);
//
// ---ANSWER----
// true

// ELINA ANSWER IS:
//whatOutput is 1, (s-0, t-1,r-2...)
//lastString.length is 6

// // 7) WHAT WILL BE THE OUTPUT AND WHY
//
//     let age = 44;
//     let newAge = age++;
//     let stringAge = age.toString();
//     let newStringAge = +stringAge;
//     let isEqual2 = newAge === newStringAge;
//     console.log(isEqual2);
//
// ---ANSWER----
//false

// ELINA ANSWER IS:
//newAge is 44
//as newAge is postFixValue, in the first line it's not seen, but in stringAge it becomes "45"
//newStringAge becomes "45"
//newAge is 45, and newStringAge is "45", so they are not equal, the ANSWER is false
// RUZANNA ANSWER IS:
//     let age = 44;
//     let newAge = age++;             //44 (gumarvum e 1 bayc darnum e 45 hajord toxum)
//     let stringAge = age.toString(); //'45'
//     let newStringAge = +stringAge;  // 45
//     let isEqual2 = newAge === newStringAge; //45===45
//     console.log(isEqual2);                  //true

// // 8) WHAT WILL BE THE OUTPUT AND WHY
//
//     let randomNumber = Math.random();
//     let resultNum = Math.round(randomNumber);
//     console.log(resultNum);
//
// ---ANSWER----
// 0 or 1

// // 9) WHAT WILL BE THE OUTPUT AND WHY
//
//     let last = 'last question';
//     let n = false + true * 2 + last.length - 10;
//     let lastResultString = `${Math.floor(9.9) + ' ' + last[last.indexOf('i')] + last[last.indexOf('s')] + ' a ' + 'last ' + last[n] + last[++n] + last[++n] + last[++n] + last[++n] + last[++n] + last[++n] + last[++n]}`;
//
//     console.log(lastResultString.toUpperCase());
// //don't write code like this never

// ---ANSWER----
// '9 IS A LAST QUESTION'

//ELINA NO ANSWER

