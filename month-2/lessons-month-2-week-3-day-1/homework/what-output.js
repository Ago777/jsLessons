// // 1) WHAT WILL BE THE OUTPUT AND WHY
// let student = {
//     name: 'John',
//     getName: function () {
//         return this.name;
//     }
// };
//
// let getName = student.getName;
// console.log(getName.call(student));
// console.log(student.getName());


// ===== ANSWERS====

// // 2) WHAT WILL BE THE OUTPUT AND WHY
// function foo () {
//     console.log(this.a)
// }
//
// let obj = {
//     foo: foo,
//     a: 5
// };
//
// foo();
// foo.bind(obj);
// foo();
// obj.foo();

// ===== ANSWERS====

// // 3) WHAT WILL BE THE OUTPUT AND WHY
// let foo = () => {
//     console.log(this.a)
// }
//
// let obj = {
//     foo: foo,
//     a: 5
// };
// let otherFoo = foo.bind(obj);
// obj.foo();
// foo.call();
// otherFoo();

// ===== ANSWERS====

// 4) WHAT WILL BE THE OUTPUT AND WHY
// let obj = {
//     foo: function () {
//         let func = () => console.log(this.a);
//         func()
//     },
//     a: 5
// };
//
// let anotherFoo = obj.foo;
// anotherFoo();
// anotherFoo.call.obj;
// anotherFoo.call(obj);
// obj.foo()


// ===== ANSWERS====

// 5) WHAT WILL BE THE OUTPUT AND WHY
// let obj1 = {
//     foo: function () {
//        console.log(this.a)
//     },
//     a: 5
// };
//
// let obj2 = {
//     a: 10
// }
//
// obj1.foo();
// obj1.foo.call(obj2)
// obj1.foo.bind(obj2)
// obj1.foo();

// ===== ANSWERS====

