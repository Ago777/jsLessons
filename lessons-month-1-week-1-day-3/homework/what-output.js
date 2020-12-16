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
// --ANSWERS---
// wrong answers or not understand this line:
// let y = 10 <= '11' || null && 'string' > 5;

//----------------------------------------------------------------------


// WHAT OUTPUT
// 3)
// const x = (null || 'some text') && ('boolean' && 'null');
// x === 'null' ? console.log('result 1') : console.log('result 2');
// let y = ('boolean' || undefined) || ('' && x);
// console.log(y);
//  ANSWER IS 'result 1', 'boolean';

//----------------------------------------------------------------------


// WHAT OUTPUT
// 4)
// let num = 0;
// num++ ? console.log(num) : console.log('no-num');
// if (num) {
//     console.log(num && 5)
// }

//ANSWER IS 'no-num'; 5;


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
