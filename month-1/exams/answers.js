//----------FUNCTION PALINDROME-------------
//========ANSWER====
// 1.
// function isPalindrome(string) {
//     const strLength = string.length;
//     for (let i=0; i < strLength /2; i++) {
//         if(string[i] !== string[strLength - 1 - i]) {
//             return false
//         }
//     }
//     return true
// }
// console.log(isPalindrome('madam'));

// 2.
// function isPalindrome(str) {
//     const reversedString =  str.split('').reverse().join('');
//
//     return str === reversedString;
// }
// console.log(isPalindrome('madam'));

// -------------FUNCTION PUSH----------------
// function push(arr, item) {
//     const length = arr.length;
//
//     arr[length] = item;
// }
//
// let arr = [1,2,3];
//
// push(arr, 10);
// push(arr, 59);
// push(arr, 20);
//
// console.log(arr);

// -------------FUNCTION POP----------------
// function pop(arr) {
//     arr.length = arr.length - 1;
// }
//
// let arr = [1,2,3];
//
// pop(arr);
// pop(arr);
//
// console.log(arr);
