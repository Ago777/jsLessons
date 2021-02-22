// // // 1) WHAT WILL BE THE OUTPUT AND WHY
// function Student(name, gender) {
//     this.name = name;
//     this.gender = gender;
//
//     this.sayHi = () => {
//         return `Hi ${this.name}`
//     };
//
//     return {
//         name,
//         gender
//     }
// }
// let student1 = new Student('Poxos', true);
// console.log(student1.sayHi());

// ===== ANSWERS====
// error

// // 2) WHAT WILL BE THE OUTPUT AND WHY
// function Student(name, gender) {
//     this.name = name;
//     this.gender = gender;
//
//     this.sayHi = () => {
//         return `Hi ${this.name}`
//     };
//
//     return this.name
// }
// let student1 = new Student('Poxos', true);
// console.log(student1.sayHi());


// ===== ANSWERS====
// hi poxos

// // 3) WHAT WILL BE THE OUTPUT AND WHY
// function Student(name, gender) {
//     this.name = name;
//     this.gender = gender;
//
//     this.sayHi = function() {
//         return `Hi ${this.name}`
//     };
// }
// let student1 = new Student('Poxos', true);
//
// let student2 = Object.assign({}, student1, {name: 'Petros'});
// student1.sayHi = () => `Goodbye ${student1.name}`;
// console.log(student1.sayHi());
// console.log(student2.sayHi());

// ===== ANSWERS====
// goodbye poxos
//hi petros

// 4) WHAT WILL BE THE OUTPUT AND WHY
// function Student(name, gender) {
//     this.name = name;
//     this.gender = gender;
//
//     this.sayHi = () => {
//         return `Hi ${this.name}`
//     };
// }
// let student1 = new Student('Poxos', true);
//
// let student2 = student1;
// student1.sayHi = () => `Goodbye ${student1.name}`;
// console.log(student2.sayHi());
// console.log(student1.sayHi());

// ===== ANSWERS====
// goodbye poxos
// goodbye poxos

// // 5) WHAT WILL BE THE OUTPUT AND WHY
// function Student(name, gender) {
//     this.name = name;
//     this.gender = gender;
//
//     this.sayHi = function() {
//         return `Hi ${this.name}`
//     };
// }
// let student1 = new Student('Poxos', true);
// let student2 = new Student('Petros', true);
// let student3 = new Student('Martiros', true);
//
// student1.nested = student2;
// student2.nested = student3;
// console.log(student1.nested.sayHi());
// console.log(student1.nested.nested.sayHi());

// ===== ANSWERS====
// hi petros
// hi martiros

