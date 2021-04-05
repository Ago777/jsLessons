// -------------bubble sort---------------
// amenahaytni amenadandax--> vercnuma hertakan element hamematum hajordi het u texapoxum texerov ete meca
// [2, 4, -5, -1, 4, 6, 9]

// let arr = [4, 2, 9, -5, -1, 4, 6];
// let count = 0;
//
// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - i; j++) {
//             count++
//             if(arr[j] > arr[j+1]) {
//                 let tmp = arr[j+1];
//                 arr[j+1] = arr[j];
//                 arr[j] = tmp;
//             }
//         }
//     }
//
//     return arr
// }
//
// console.log(bubbleSort(arr));
// console.log(`iterations ${count}`)

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
// let count = 0;
// function selectionSort(arr) {
//     for (let i = 0; i< arr.length; i++) {
//         let minIndex = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             count++;
//             if(arr[j] < arr[minIndex]) {
//                 minIndex = j
//             }
//         }
//         let tmp = arr[minIndex];
//         arr[minIndex] = arr[i];
//         arr[i] = tmp
//     }
//
//     return arr
// }
//
// console.log(selectionSort(arr));
// console.log(`iterations ${count}`)
//

// let arr = [-5, -1, 9, 4, 2, 4, 6];
// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let minNumberIndex = 4;
//         for (let j = i + 1; j < arr.length; j++) {
//             if(arr[j] < arr[minNumberIndex]) {
//                 minNumberIndex = j
//             }
//         }
//         let tmp = arr[minNumberIndex];
//         arr[minNumberIndex] = arr[i];
//         arr[i] = tmp
//     }
//     return arr
// }
//
// console.log(selectionSort(arr));
// console.log(`iterations ${count2}`);

// O(n2)
