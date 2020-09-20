// -----------------IF THERE IS A TIME LOCAL GLOBAL VARIABLES FUNCTION SCOPE-----------------------

// function doSomething() {
//     let x = 5;
//     // console.log(x);
// }
//
// doSomething();
// console.log(x);


// let x = 5;
//
// function doSomething() {
//     console.log(x);
// }
//
// doSomething();
// console.log(x);

// let name = 'John';
// // let name = 'otherName'; /*error is defined*/
//
// function doSomething() {
//     let name = 'otherName';
//     console.log(name);
// }
//
// doSomething();
// console.log(name);

// let name = 'John';
//
// function doSomething() {
//     name = 'otherName';
//     console.log(name);
// }
//
// doSomething();
// console.log(name);


// let name = 'John';
//
// function f() {
//     let name = 'John 1';
//
//     function f1() {
//         let name = 'John 2';       /* is this local or global*/
//
//         function f2() {              /*and argument*/
//             let name = 'John 3';    /* if there is no name go up to next scope*/
//             console.log(name);
//         }
//     }
// }

// let name = 'John';
// function showName() {
//     console.log(name);
//     function showOtherName() {
//         let name = 'otherName';
//         console.log(name)
//     }
//     showOtherName()
// }
//
// showName();

// let name = 'John';
// function showName() {
//     console.log(name);
//     function showOtherName() {
//         let name = 'otherName';
//         console.log(name)
//     }
//     showOtherName()
// }
//
// name = 'Jonathan';
//
// showName();
