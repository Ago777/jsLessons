// // 1) WHAT WILL BE THE OUTPUT AND WHY
// function foo () { console.log(this.a) }
// let obj = {
//     foo: foo,
//     a: 5
// };
// foo();
// obj.foo();


// ===== ANSWERS====

// // 2) WHAT WILL BE THE OUTPUT AND WHY
// //
// let foo = () => {
//     console.log(this.a)
// }
// let obj = {
//     foo: foo,
//     a: 5
// };
// foo();
// obj.foo();


// ===== ANSWERS====

// // 3) WHAT WILL BE THE OUTPUT AND WHY
// let obj = {
//     foo: 'bar',
//     func: function () {
//         var self = this;
//         console.log(this.foo);
//         console.log(self.foo);
//         (() => {
//             console.log(this.foo);
//             console.log(self.foo);
//         })()
//     }
// }
// obj.func();


// ===== ANSWERS====


// 4) WHAT WILL BE THE OUTPUT AND WHY
// let student = {
//     name: 'John',
//     methods: {
//         name: 'Wick',
//         getName: function () {
//             console.log(this.name)
//         }
//     }
// }
//
// let obj = student.methods.getName();

// ===== ANSWERS====

// // 5) WHAT WILL BE THE OUTPUT AND WHY
// let obj = {
//     id: 1,
//     getId: (id) => console.log(this.id++)
// }
//
// obj.getId = function (id) {console.log(this.id++)}
// obj.getId(5);
// obj.getId(5);
// ===== ANSWERS====

// // 6) WHAT WILL BE THE OUTPUT AND WHY
// let obj = {
//     id: 1,
//     getId: function () {
//         console.log(this.id)
//     }
// }
//
// let obj1 = Object.assign(obj, {id: 2});
// obj.getId()
// obj1.getId()


// ===== ANSWERS====
