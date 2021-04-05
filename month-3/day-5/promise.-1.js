// ===================promise==============

//petqa henc timeoutn ashxati verjana ashxatacneqn urish function
// setTimeout(() => console.log(1), 2000);
//

// // karanq senc anenq
//
// function f() {
//     console.log('another function')
// }
// //
// setTimeout(() => {
//     console.log(1)
//     f();
// }, 2000);

// patkeracnenq funkcianern shat en
// function f1() {
//
// }
//
// function f() {
//     console.log('another function');
//     f1();
// }
//
// setTimeout(() => {
//     console.log(1)
//     f();
// }, 2000);

// callback hell

// dra hamar stexcvel en promisnern

// let promise = new Promise();


// let promise = new Promise(function (resolve, reject) {
//     if (10 > 5) {
//         resolve();
//     } else {
//         reject('error');
//     }
// });
//
//  promise.then()


//---------------------------
// let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(), 0)
// });
// //
// promise.then(() => console.log('success'))


//     .then(() => console.log('done'))
//     .catch((err) => console.log(err));

// ---------------------------
// let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(), 2000)
// });
//
// promise
//     .then(() => setTimeout(() => console.log(1), 2000))
//     .then(() => setTimeout(() => console.log(2), 2000))
//     .then(() => console.log('done'))

// console.log(promise);

//----------------------------------
//nuyn verevinna

// function f1() {
//     console.log('done')
// }
//
// function f() {
//     setTimeout(() => console.log(2), 2000)
//     f1();
// }
//
// setTimeout(() => {
//     console.log(1)
//     f();
// }, 2000);

//-----------------
// tarberutyunner
// 1. callback hell
// 2. hastat ashxateluya 1 angam kam resolve kam reject