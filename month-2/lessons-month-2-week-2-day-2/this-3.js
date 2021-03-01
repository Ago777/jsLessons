// ================ this ===============

// let person = {
//     name: 'John',
//     sayHi: function () {
//         return `Hi ${person.name}`
//     }
// }

// console.log(person.sayHi());

// ---its not good---

// let anotherPerson = {...person};
// anotherPerson.name = 'Smith';
//
//
// console.log(anotherPerson.sayHi())
// --------------------------------------
// let anotherPerson = person;
// person = null;
//
// console.log(anotherPerson.sayHi())

// --------we can write this instead object name----------------
// this is object before dot
// this ogtagorcvuma functioni mej

// let person = {
//     name: 'John',
//     sayHi: function () {
//         return `Hi ${this.name}`
//     }
// }

// console.log(person.sayHi());

// let anotherPerson = person;
// person = null;

// console.log(anotherPerson.sayHi())

//---------------------------------------------------------------
// this-n ogtagorcvuma funkcianerum. u inch arjeq knduni kaxvac e te trvac funkcian vonc enq kanchum

// let student1 = {
//     name: 'Rudo',
//     sayHi: function () {
//         return `Hi ${student1.name}`
//     }
// }
//
// let student2 = {
//     name: 'Nona',
//     sayHi: function () {
//         return `Hi ${student2.name}`
//     }
// }

// -----------its not universal---------

// let student1 = {
//     name: 'Rudo',
// }
//
// let student2 = {
//     name: 'Nona',
// }

// function sayHi() {
//     return `Hi ${this.name}`
// }
//
// student1.sayHi = sayHi;
// student2.sayHi = sayHi;

// console.log(student1.sayHi())
// console.log(student2.sayHi())

//--------------------------------------
// this without context
//
// function f() {
//     console.log(this)
// }
//
// f();

//-------------------------
// let obj = {
//     id: 1,
//     sayHi: function () {
//         console.log(this);
//         console.log(this.id);
//     }
// }

// obj.sayHi();

// let f = obj.sayHi;
// f()

// ----------arrow functions no this---------
// let obj = {
//     id: 1,
//     sayHi: () => {
//         console.log(this);
//         console.log(this.id);
//     }
//
//
// }
//
// let x = obj.sayHi
// x()
//-------------------

// arrow function this take parent function this
// let obj = {
//     id: 1,
//     sayHi: function () {
//         let f = () => console.log(this);
//         f()
//     }
//
//
// }
//
// obj.sayHi()

// let obj = {
//     word: 'letter',
//     letters: ['a', 'b', 'c'],
//     // showLetters: function () {
//     //     this.letters.forEach(item => console.log(`${this.word} is ${item}`))
//     // },
//     showLetters: function () {
//         this.letters.forEach(function (item) { console.log(`${this.word} is ${item}`)})
//     }
// }
//
// obj.showLetters()

//---------example of lost context---------
// let obj = {
//     a: 1,
//     showLetters: function (b) {
//         return function f(c) {
//             console.log(c + b + this.a)
//         }
//     }
// }
//
// let f = obj.showLetters(2);
// f(3)

// we can use self variable