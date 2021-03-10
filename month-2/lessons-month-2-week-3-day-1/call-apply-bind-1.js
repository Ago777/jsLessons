// ================== bind method ================
// set context

// let obj = {
//     id: 1
// }
//
// function f() {
//     console.log(this.id)
// }
//
// f()
// ------------------------------------
// we can write like this

// let obj = {
//     id: 1,
// }
//
// function f() {
//     console.log(this.id)
// }
//
// obj.f = f;
// obj.f()
// -------------------------------------------
// we can set context with bind
//
// let obj = {
//     id: 1,
// }
//
// function f() {
//     console.log(this.id)
// }
//
// let fWithContext = f.bind(obj);
//
// fWithContext();

// bind return new wrapper function of f of function with context
// bind not call function it only set context
//-------------------------------------------------------------
// let student1 = {
//     user: 'Rudo',
//
// }
//
// let student2 = {
//     user: 'Nona',
// }
//
// function sayHi() {
//     console.log(`hi ${this.user}`)
// }
//
// let sayHi1 = sayHi.bind(student1);
// let sayHi2 = sayHi.bind(student2);
//
// sayHi1();
// sayHi2();

// ========================== call method ================
// call the same as bind
// diff is call method call function

// let student1 = {
//     user: 'Rudo',
// }
//
// let student2 = {
//     user: 'Nona',
// }
//
// function sayHi() {
//     console.log(`hi ${this.user}`)
// }
//
// sayHi.call(student1);
// sayHi.call(student2);

//-----------------------------------

// function f() {
//     console.log('hi')
// }
//
// f();
//
// f.call(this)

//---------------------------

// we can pass argumetns

// let obj = {
//     id: 1
// }
//
// function f(name) {
//     console.log(`id of ${name} is ${this.id}`)
// }
//
// // f('Rudo');
// // obj.f('Rudo');
// f.call(obj, 'Rudo',52)

//============================= apply method ======================
// apply is same as call
// diff is arguments

// let obj = {
//     id: 1
// }
//
// function f(name, name1, name2) {
//     console.log(name, name1, name2)
//     console.log(this.id)
// }
//
// f.apply(obj, ['Rudo', 'Nona', 'Exish'])

// bind kogtagorcenq ete petq e set anenq context@ bayc functionn kanchelu enq hetagayum
// calln u apply@ ete petq e set anel context@ ev kanchel function@
// calln u apply tarbervum argumenteri poxancman dzevov
