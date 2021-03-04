// 1. WHAT OUTPUT
// function foo () { console.log(this.a) }
// let obj = {
//     foo: foo,
//     a: 5
// };
// foo();
// obj.foo();


// 2. WHAT OUTPUT
// for (var i = 0; i < 5; ++i) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000 );
// }

// 3. WHAT OUTPUT
// for (let i = 0; i < 5; ++i) {
//     setTimeout(function() {
//         console.log(i);
//     }, i * 1000 );
// }

// 4 WHAT OUTPUT
// console.log(false == '0');
// console.log(false === '0');


// 5. WHAT OUTPUT
// let foo = () => {
//     console.log(this.a)
// }
// let obj = {
//     foo: foo,
//     a: 5
// };
// foo();
// obj.foo();





