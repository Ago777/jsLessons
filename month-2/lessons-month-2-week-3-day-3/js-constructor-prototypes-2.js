// yuraqanchyur funckia uni prototype key vori valuen object e
// s-i nerdrvac functionneri prototyp-um pahvum en tvyal constructori methodnern ev amen inch

// Array()
// Object()
// Number()
// Boolean()
// String()

// console.log(Array.prototype)
// console.log(Boolean.prototype)
// console.log(String.prototype)
// console.log(Number.prototype)
// console.log(Object.prototype)

//                        NULL

//                        OBJECT(prototype)

//  ARRAY(prototype)      NUMBER(prototype)   FUNCTION(prototype)     STRING(prototype)         BOOLEAN(prototype)
//          []                    5                   F()                     'str'                   true

//---------------------------------------------------------
// cankacac function uni prototype vorn object e (nshvac e ir constructor@)
// bacarutyamb arrow functioni
// function UserMaker() {
//
// }
// console.log(UserMaker.prototype)

// prototype objectum@  new-i mijocov set e arvum vorpes objecti prototype
// let obj = new UserMaker();
// console.log(obj)

// someFunc.prototype.x = 5;
// someFunc.prototype.add = function f() {}
//
// let obj = new UserMaker();
// console.log(obj)
//-----------karanq dnenq amboxj@ object@ prototype-i hamar
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
//
//
// UserMaker.prototype = user;
//
// let obj = new UserMaker();
// console.log(obj)
//
// korcnum enq constructor key@
//
// ------------erba petq galis------------------

// function UserMaker(name, age) {
//     this.name = name;
//     this.age = age;
//
//     this.canWrite = () => {
//         console.log('write')
//     };
//
//     this.canLike = () => {
//         console.log('like')
//     };
//
//     this.canShare = () => {
//         console.log('share')
//     };
// }
//
// let user = new UserMaker('someName', '20');
//
// console.log(user);

// inchqan object create anenq bolor functionnern copy klinen objectnerum
//nerqevi depqum voch

// function UserMaker(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// UserMaker.prototype.canWrite = () => console.log('write')
// UserMaker.prototype.canLike = () => console.log('like')
// UserMaker.prototype.canShare = () => console.log('share')
//
// let user = new UserMaker('someName', '20');
//
// console.log(user);
// console.log(user.canWrite());

// vonca ashxatum js-@

// let obj = {};
// let obj = new Object();
//
// console.log(obj);
// dra hamarel karoxanum enq kanchel bolor methodnern chnayac dranq mer objectum chkan

// let arr = [5,7];
// let obj = {};
// console.log(Array.prototype)
// console.log(arr.toString())
// console.log(Object.prototype)
// console.log(obj.toString())

// ------------poxel js-@------------
// Object.prototype.toString = () => {console.log('we change toString')};
//
// let obj = {};
// console.log(obj.toString())