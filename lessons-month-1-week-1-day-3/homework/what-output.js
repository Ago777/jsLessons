// WHAT OUTPUT
// 1)
// let x = '';
// if(x) {
//     x = 6;
//     console.log(x)
// } else {
//     x += true;
//     console.log(x)
// }

//  ANSWER IS 'true';

// NONA ANSWER It will show "true"(WITHOUT QUOTES);
// ANAHIT ANSWER IS  empty string is 0 . 0 = 0+1


//----------------------------------------------------------------------

// WHAT OUTPUT
// 2)
// let y = 10 <= '11' || null && 'string' > 5;
// if (!y) {
//     console.log(true || false)
// } else {
//     console.log(!y)
// }

//  ANSWER IS false;



//----------------------------------------------------------------------






// WHAT OUTPUT
// 3)
// const x = (null || 'some text') && ('boolean' && 'null');
// const res = x === 'null' ? console.log('result 1') : console.log('result 2');

//  ANSWER IS 'result 1';

// NONA ANSWER IS:
// null returns false;
// 'some text' is a not empty string which returns true;
// true || true returns true;
// In the next scope we have two not empty strings, and both of them returns true;
// true && true returns true;
// Finally we have true && true which returns true;
// It means that our variable x is true;
//const res = x === 'null' ? console.log('result 1') : console.log('result 2');
// This is a shorthanded "if,else", which means that if the left part of the "?" is true, it returns 'result 1', else returns 'result 2';
// At the left part of the "?" we have a variable res, which value is x;
// Here x is equal to the value of 'null';
// As null is written inside quotes, it's string, and string returns true;
// As x was true, here we have true === true, which is true;
// Program will show 'result 1'

// RUZANNA ANSWER IS:
// FIRST STRING X = TRUE;
// res-i arjeqy havasar e x-in havasar e true kmtni if-i mej;
// res-i arjeqy havasar e x-in havasar e true kmtni if-i mej;

// ANAHIT ANSWER IS: NOT UNDERSTAND
//result 1   && outputs the false value "null"

//let x = ('boolean' || undefined) || ('' && null);
//console.log(x);





//----------------------------------------------------------------------






// WHAT OUTPUT
// 4)
// let num = 0;
// num++ ? console.log(num) : console.log('no-num');
// if (num) {
//     console.log(num && 5)
// }

//ANSWER IS 'no-num'; 5;

//RUZANNA ANSWER IS:
// num-i arjeqy false e kmtni else-i mej
//true

// ANAHIT ANSWER IS: NOT UNDERSTAND
//num++ is 0 while num is 1 . since both 1,5 are true , && returns the last value


//----------------------------------------------------------------------





// WHAT OUTPUT
// 6)
// let count = 0;
//
// if(count.toString()) {
//     count++;
//     if(count > 0) {
//         count++;
//         if(!count) {
//             console.log('no-count')
//         }else {
//             console.log(--count)
//         }
//     }
// }
//ANSWER IS 1

//RUZANNA ANSWER IS
//1

// ANAHIT --> NO ANSWER