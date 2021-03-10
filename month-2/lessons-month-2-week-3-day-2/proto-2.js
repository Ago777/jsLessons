// entadrenq unenq userner an@ndhat grancvox
// user is abstract object
// let user = {
//     allPhotosIsPublic: true,
//     othersCanWriteMessage: true,
//     country: 'America',
//     canLike: true,
//     canPostVideos: true,
//     followers: ['facebookBot'],
//     showNumber: function () {
//         return `${this.name} number is ${this.number}`;
//     },
// }

// ete chlini zharanguma@
// let user1 = {
//     id: 1,
//     name: 'user1',
//     number: '215644435',
//     allPhotosIsPublic: true,
//     othersCanWriteMessage: true,
//     country: 'America',
//     canLike: true,
//     canPostVideos: true,
//     followers: ['facebookBot'],
//     showNumber: function () {
//         return `${this.name} number is ${this.number}`;
//     },
// }

// ....

// vorpeszi amen angam object chstexcenq kareox enq zharangel useric
// uzume enq stexcel useri bazai vra ayl userner vor el chkrknenq himnakan hatkutyunner@


// see proto in console
// let user1 = {}
// // console.log(user1);
// user1.__proto__ = user;
// console.log(user1);
// console.log(user1.allPhotosIsPublic)
//----------------------------------
// let user1 = {
//     id: 1,
//     name: 'user1',
//     number: '1111111',
// }
//
// user1.__proto__ = user;
//
// console.log(user1);
//
// console.log(user1.id)
// console.log(user1.name)
// console.log(user1.number)
// console.log(user1.allPhotosIsPublic)
// console.log(user1.othersCanWriteMessage)
// console.log(user1.showNumber())

// SA KOCHVUM E PROTOTYPE INHERITENCE


// entadrenq kan baner vor petq chi zharangi himnakan useric

// let user2 = {
//     id: 2,
//     name: 'user2',
//     number: '22222222',
//     // allPhotosIsPublic: false,
//     country: 'Armenia',
// }
// // //
// user2.__proto__ = user;
//
// console.log(user2);
// console.log(user2.id)
// console.log(user2.name)
// console.log(user2.number)
// console.log(user2.allPhotosIsPublic)
// console.log(user2.othersCanWriteMessage)
// console.log(user2.country)
// console.log(user2.showNumber())

// console.log(user2.toString())

//----------------------------------------------------
// menq karox enq tal mer uzac nkaragrutyun@ objectin
// arajin@ kashxati tvyal object keyer@
// ete chlinen nor kvercni prototypeic
// aysinqn ayn objectiv voric zharange el

// let user3 = {
//     id: 3,
//     name: 'user3',
//     number: '33333',
//     showNumber: function () {
//         console.log('number is hidden')
//     }
// }
//
// console.log(user3.showNumber())

//----------------------------------
// user2.__proto__ = 5
// antesvum e
// kam petq e lini object kam null
//-------------------------------------------------

// mi qani zharangum
// let person = {
//     canWalk: true,
//     canWrite: true
// }
// //
// let adultMan = {
//     age: 40,
// }
// //
// let baby = {
//     age: 3,
//     canWrite: false,
// }
// //
// baby.__proto__ = adultMan;
// adultMan.__proto__ = person;
// //
// console.log(baby)
// console.log(adultMan)

// check properties in console
// let obj = {};
// obj.toString()
// ---------for in loop------------
// let user1 = {
//     id: 1,
//     name: 'user1',
//     number: '1111111',
//     showNumber: function () {
//         console.log('number is hidden')
//     },
//     allPhotosIsPublic: false,
//     country: 'Armenia',
// }
//
// user1.__proto__ = user;
//
// Object.defineProperty(user1, 'number', {
//     enumerable: false,
// });
// console.log(user1);
//
// //
// for (let key in user1) {
//     console.log(`${key}-----${user1[key]}`)
// }

// hasOwnProperty

// for(let key in user1) {
//     if(user1.hasOwnProperty(key)) {
//         console.log(`${key}-----${user1[key]}`)
//     }
// }

// xi chi tpum himnakan Objecti arjeqnern ete zharanguma
//
// let obj = {
//     id: 1,
//     name: 'obj'
// };
//
// console.log(obj);
// for(let key in obj) {
//     if(obj.hasOwnProperty(key)) {
//         console.log(`${key}-----${obj[key]}`)
//     }
// }

// define property