// -------------------oop about----------------

// function constructoriun poxarinox classner es-6-ic
// aveli harmar aveli hesht u parz, takic ashxatuma nuyn prototyp@ grete nuyn function constyructornern

// function Student(name) {
//     this.name = name;
// }
////
// Student.prototype.sayHi = function () {};
//
// let student1 = new Student('Rudo');


// with class
// 1. class@ kancheluc kanchvuma constructor function@ stexcvuma object this@ seta arvum et objecti vra
//    u veradarcvuma object@
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

// chka constructor nshanakuma srtacvac objectn datark e

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
//     name = 5;
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

// 1. classi - construcotrum cankacac ban vor set anenq lineluya nayev objectum
// 2. constructoric durs bolor methodnern grvum en prototypum baci arrow function methodnernic
// 3. nor hnaravorutyan depqum contsructoric durs grvac popoxakannern grvum en objectum vorpes keyer,
//    arrow functionn henc dra hamae grvum objectum vortev hamarvuma uxxaki popoxakanin veragracv function