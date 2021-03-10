// yuraqanchyur funckia uni prototype key vori valuen object e
// js-i nerdrvac functionneri prototyp-um pahvum en tvyal constructori methodnern ev amen inch

// Array()
// Object()
// Number()
// Boolean()
// String()
//
// console.log(Array.prototype)
// console.log(Boolean.prototype)
// console.log(String.prototype)
// console.log(Number.prototype)
// console.log(Object.prototype)

// vonca ashxatum js-@

// let obj = {};
// let obj = new Object();
//
// console.log(obj);
// dra hamarel karoxanum enq kanchel bolor methodnern chnayac dranq mer objectum chkan

// let arr = [5,7];
// console.log(Array.prototype)
// console.log(arr.toString())
// let obj = {};
// console.log(Object.prototype)
// console.log(obj.toString())

//                                      NULL

//                                 OBJECT(prototype)

//  ARRAY(prototype)      NUMBER(prototype)   FUNCTION(prototype)     STRING(prototype)         BOOLEAN(prototype)
//          []                    5                   F()                     'str'                   true

//---------------------------------------------------------
// cankacac function uni prototype vorn object e (nshvac e ir constructor@)
// bacarutyamb arrow functioni
// function UserMaker() {
//
// }
// console.log(UserMaker.prototype)

// functioni prototype@  objectum  new-i mijocov set e arvum vorpes objecti prototype
// let obj = new UserMaker();
// console.log(obj);

// let arr = new Array();
// console.log(arr)

// -------karanq menq avelacnenq prototypei mej inch zuenq---------
// UserMaker.prototype.x = 5;
// UserMaker.prototype.add = function f() {}
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
// ------------erb e ogtagorcvum------------------

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
// // let user = new UserMaker('someName', '20');
// let user = new UserMaker('someName', '20');
// let user1 = new UserMaker('someName', '20');
// let user2 = new UserMaker('someName', '20');
// let user3 = new UserMaker('someName', '20');
// //
// console.log(user);
// console.log(user1.canWrite());
// console.log(user2.canLike());
// console.log(user3);

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
// //
// let user = new UserMaker('someName', '20');
// let user1 = new UserMaker('someName', '20');
// let user2 = new UserMaker('someName', '20');
// let user3 = new UserMaker('someName', '20');
// //
// console.log(user);
// console.log(user1);
// console.log(user2);
// console.log(user3);
// user.canWrite();

// orinakner

// function Student(name, gender) {
//     this.name = name;
//     this.gender = gender;
// }
//
// // petq e tanq methodner bayc talis enq prototypin
// // karanq inchqan method uzenq avelacnenq
// Student.prototype.sayHi = function () {
//         console.log(`Hi my name is ${this.name}`)
// }
//
// let student1 = new Student('Rudo', true);
// console.log(student1);
// student1.sayHi();

// ------------poxel js-@------------
// Array.prototype.filter = () => console.log('we change toString Method');
//
// let obj = {};
// console.log(obj.toString());

//-------------------------------------
// karanq haskananq te vonca grac shat methodner
// let arr = [1, 2, 3];
// arr.forEach((item) => console.log(item))
//
// Array.prototype.forEach1 = function (callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i])
//     }
// }
//
// // arr.forEach1(item => console.log(item))
//
// let arr1 = [4,5,6];
// arr.forEach1(item => console.log(item));
// arr1.forEach1(item => console.log(item));

// karanq poxenq henc foreach@
// Array.prototype.forEach = function (callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i])
//     }
//     console.log('we change forEach')
// }
//
// let arr = [1,2,3];
// arr.forEach(item => console.log(item))
//
// -----dont do it-------
//  ---------------------------------------------------------

// let arr = [1, 22, 15, 7];
//
// let filteredArr = arr.filter(item => item < 10);
// console.log(filteredArr);

// Array.prototype.filter1 = function (callback) {
//     let returnedArr = [];
//     for (let i = 0; i < this.length; i++) {
//         if(callback(this[i])) {
//             returnedArr.push(this[i])
//         }
//     }
//     return returnedArr
// }
//
// let filteredArr = arr.filter1(item => item > 10);
// console.log(filteredArr);

