// inchpes katarel zharangum@ constructorneri hama

// function User() {
//     this.name = 'aaaa';
// }
//
// User.prototype.like = function () {
//     console.log('like')
// }
//
// //
//
// User1.prototype = Object.create(User.prototype);
//
// const obj = new User1();
// console.log(obj)
// console.log(obj.like())
// zharangvuma prototypen
// call own properties

// function User() {
//     this.name = 'aaaa';
//     this.name = 'aaaa';
//     this.name = 'aaaa';
//     this.name = 'aaaa';
//     this.name = 'aaaa';
//     this.name = 'aaaa';
// }
//
// User.prototype.like = function () {
//     console.log('like')
// }
// //
// function User1() {
//     User.call(this)
// }
//
// User1.prototype = Object.create(User.prototype);
//
// console.log(new User())
// console.log(new User1())
// zharangvuma nayev sepakan propsnern
// User1.prototype = Object.create(User.prototype);
//
// const obj = new User1();
// console.log(obj)
// console.log(obj.like())


//----------------------------------------
// function User() {}
//
// User.prototype.like = function () {
//     console.log('like')
// }
//
// User.prototype.share = function () {
//     console.log('share')
// }
// //
// function User1() {}
//
// // log anenq 2 ankax constructorner
//  console.log(User.prototype);
//  console.log(User1.prototype);
//
// User1.prototype = Object.create(User.prototype);
// console.log(User.prototype);
// console.log(User1.prototype);
//
// User1.prototype.like = function () {
//     console.log('user1 like')
// };
//
// User1.prototype.comment = function () {
//     console.log('comment')
// };
//
// console.log(User.prototype);
// console.log(User1.prototype);



// sxema

// Obejct --------------prototype---------->>> Object.prototype (constructor, methods)

// {} ----------------__proto__ ----------->>> Object.prototype (constructor, methods)


// Array --------------prototype----------->>> Array.prototype (construcot, methods)

// [] ----------------__proto__ ----------->>> Array.prototype (constructor, methods) ----------__proto__------> Object.prototype