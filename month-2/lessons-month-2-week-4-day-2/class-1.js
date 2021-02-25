// -------------------oop about----------------

// function constructoriun poxarinox classner es-6-ic
// aveli harmar aveli hesht u parz, takic ashxatuma nuyn prototyp@ grete nuyn function constyructornern

// function Student(name) {
//     this.name = name;
// }
//
// Student.prototype.sayHi = function () {};
//
// let student1 = new Student('Rudo');

// with class
// 1. kanchvuma constructorn vorum nkaragrvaca object@
// 2. bolor methodnern(voch arrow function grvuym en prototypeum)
// class Student {
//     // constructor(name) {
//     //     this.name = name;
//     // }
//
//     sayHi() {
//         console.log(`hi ${this}`)
//     }
//
// }
//
// let student1 = new Student('Rudo');
// console.log(student1);
// student1.sayHi();

// class nuyn functionn mi qani avel hnaravorutyunov

// console.log(typeof Student)


// arrow functions not in prototype

// class Student {
//     constructor(name) {
//         this.name = name;
//     };
//
//     sayGoodbye = () => {
//         console.log(`goodbye ${this.name}`)
//     };
//
//     sayHi() {
//         console.log(`hi ${this.name}`)
//     };
//
// }
//
// let student1 = new Student('Rudo');
// console.log(student1);
// student1.sayHi()
// student1.sayGoodbye()

// no constructor empty object

// class Student {
//     sayHi() {
//         console.log(`no constructor`)
//     };
//
// }
//
// let student1 = new Student();
// console.log(student1);

//-----------------------------tarberutyunner-------------
// class Student {
//     constructor(name) {
//         this.name = name;
//     }
//
//     sayHi() {
//         console.log(`hi ${this}`)
//     }
//
// }
//
// let student1 = new Student('Rudo');

// 1. chenq karox kanchel aranc new
// Student()
// 2. methodnern enumareble en (functioni depqum loopom erevum en nayev zharangav methodnern)
//    classum avtomat enumarble false en stanum
// for(let key in student1) {
//     console.log(key)
// }
// 3. classner ashxatum en use struict rezhimum aysinqn thisn undefined e
// ....

// class expression

// let Student = class {
//     constructor(name) {
//         this.name = name;
//     }
//
//     sayHi() {
//         console.log(`hi ${this}`)
//     }
//
// }
//
// let student1 = new Student('Rudo');


// karanq tanq anun bayc kereva menak classi nersum
// let Student = class SomeName {
//     constructor(name) {
//         this.name = name;
//     }
//
//     sayHi() {
//         console.log(`hi ${this}`)
//     }
//
// }
//
// let student1 = new Student('Rudo');


// -----nor hnaravorutyuun aranc constructor--------
// karanq propertynern set anenq aranc constructor
// bayc ete argument petqa poxancenq constructorn partadira

// class Student {
//     constructor(name) {
//         this.name = name;
//     }
//     sayHi() {
//         console.log(`hi ${this.name}`)
//     };
//
// }
//
// let student1 = new Student('Rudo');
// //
// console.log(student1);

// -------@ndhanur-------

// 1. construcotrum cankacac ban vor set anenq lineluya nayev objectum
// 2. constructoric durs bolor methiodnern grvum en prototypum baci arrow function methodnernic
// 3. nor hnaravorutyan depqum contsructoric durs grvac popoxakannern grvum en objectum vorpes keyer