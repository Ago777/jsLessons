// 1. QANI PROPERTY UNI
// let person = {
//     name: undefined,
//     surname: 'Johnson'
// }
// person.age = 88;


// 2. WHAT OUTPUT
// let person = {
//     name: 'John',
//     surname: 'Smith',
//     friends: ['empty' undefined]
// }
// let str = '';
// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         str += key
//     }
// }
// console.log(str);


// 3. WHAT OUTPUT
// const person = {
//     knowladges: ['programming', 'driving'],
//     child: {
//         name: 'John',
//         surname: 'Smith'
//     }
// }
// console.log(typeof person.child.__proto__)
// console.log(typeof person.knowladges[0].__proto__)


// 4 WHAT OUTPUT
// var obj = {
//     foo: 'bar',
//     func: function () {
//         var self = this;
//         console.log(this.foo);
//         console.log(self.foo);
//         (() => {
//             console.log(this.foo);
//             console.log(self.foo);
//         })
//     }
// }
// obj.func();


// 5. WHAT OUTPUT
// function foo () {
//     return {
//         bar: 'hello'
// };
// }
// function foo1 () {
//     return
//     {
//         bar: 'hello'
//     }
// }
// foo ();
// foo1();




