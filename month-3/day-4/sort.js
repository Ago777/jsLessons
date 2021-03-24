// -------------bubble sort---------------
// amenahaytni amenadandax--> vercnuma hertakan element hamematum hajordi het u texapoxum texerov ete meca
// let arr = [4, 2, 9, -5, -1, 4, 6];
// // //
// let count1 = 0;
//
//
// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - i; j++) {
//             count1++;
//             if (arr[j] > arr[j + 1]) {
//                 let tmp = arr[j + 1];
//                 arr[j + 1] = arr[j];
//                 arr[j] = tmp
//             }
//         }
//     }
//
//     return arr
// }


//
// console.log(bubbleSort(arr));
// console.log(`iterations ${count1}`);
// O(n2)


// -------------selection sort---------------
// gtnuma amenapoqr elemnt@ u poxuma texerov skzbi elementi het
// let arr = [4, 2, 9, -5, -1, 4, 6];
//
// let count2 = 0;
// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let minNumberIndex = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             count2++;
//             if(arr[j] < arr[minNumberIndex]) {
//                 minNumberIndex = j
//             }
//         }
//         let tmp = arr[minNumberIndex];
//         arr[minNumberIndex] = arr[i];
//         arr[i] = tmp
//     }
//
//     return arr
// }
//
// console.log(selectionSort(arr));
// console.log(`iterations ${count2}`);

// O(n2)
