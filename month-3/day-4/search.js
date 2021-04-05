// ----------linear search------------
// hertov mana galis mer uzac tiv@
// length 18
// let arr = [1,3,5,6,10,15,16,18,20,24,25,29,30,32,33,34,37,40];
//
// let count1 = 0;
//

// function linearSearch(arr, num) {
//     for (let i = 0; i <arr.length; i++) {
//         count1++
//         if(arr[i] === num) {
//             return i
//         }
//     }
//     return -1
// }
// //
// console.log(linearSearch(arr, 40));
// console.log(`iterations ${count1}`);
//vataguyn depqum array.length chap iteracia
// O(n)



// ----------binary search------------
// kisuma array@ stuguma vor masuma etela kisum u tenc minchev gtni
// karanq lucenq rekursiv kam while-ov

// let count2 = 0;
// function binarySearch(arr, num) {
//     let foundNumIndex = -1;
//     let startIndex = 0;
//     let endIndex = arr.length;
//     let middleIndex = null;
//
//     while (startIndex <= endIndex && foundNumIndex < 0) {
//         count2++;
//         middleIndex = Math.floor((startIndex + endIndex) / 2);
//         if(num === arr[middleIndex]) {
//             foundNumIndex = middleIndex;
//         }else {
//             if(num > arr[middleIndex]) {
//                 startIndex = middleIndex + 1;
//             }else {
//                 endIndex = middleIndex - 1
//             }
//         }
//     }
//
//     return foundNumIndex
//
// }
//
// console.log(binarySearch(arr, 40));
// console.log(`iterations ${count2}`)


// function binarySearch(arr, num) {
//     let foundElemIndex = -1;
//     let startIndex = 0;
//     let endIndex = arr.length;
//     let middleIndex = null;
//     while(foundElemIndex < 0 && startIndex <= endIndex) {
//         count2++;
//         middleIndex = Math.floor((startIndex + endIndex) / 2);
//         if(num === arr[middleIndex]) {
//             foundElemIndex = middleIndex
//         }else {
//             if(num > arr[middleIndex]) {
//                 startIndex = middleIndex + 1
//             }else {
//                 endIndex = middleIndex - 1
//             }
//         }
//     }
//
//     return foundElemIndex
// }
// console.log(binarySearch(arr, 40));
// console.log(`iterations ${count2}`);

//vataguyn depqum 4
// O(log28)