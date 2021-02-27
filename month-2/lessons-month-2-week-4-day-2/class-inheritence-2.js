// -------------------class inheritence------------
// class User {
//     constructor() {
//         this.name = 'Unknown User';
//     }
//
//     like() {
//         console.log('like')
//     }
//
//     share() {
//         console.log('share')
//     }
//
//     post() {
//         console.log('post')
//     }
// }
//
// let user = new User();


// class User1 {
//     constructor(name, age) {
//         this.name = 'John';
//         this.age = '30';
//     }
// comment() {
//     console.log('comment')
// }
//
//     like() {
//         console.log(`${this.name} like it`)
//     }
// }

// minch es6 - @ constructornerov kanein hetevyal kerp

// User1.prototype = Object.create(User.prototype);
// user1-i mej kkancheinq
// User1.call(this)

// uxxaki avelacnum enq extends
// class User1 extends User {
//     constructor(name, age) {
//         this.name = 'John';
//         this.age = '30';
//     }
//
//     like() {
//         console.log(`${this.name} like it`)
//     }
//
//     comment() {
//         console.log('comment')
//     }
// }
//
// let user1 = new User1();
// console.log(user1);

// chi ashxati
// petq e kanchel super@ constructori mej;
// erb kanchum enq class@ sovorakan depqum construcotrn kanchvuma ev seta arvum this@ u veradarcvum obejct
// zharangman depqum da texi chi unenum vortev zharangox class@ spasuma vor da kani cnox construcotrn
// bayc cnox contructorn chi kanchvum qani vor menq haytararel enq arandzin constructor


// ----aranc constructor---

// class User1 extends User {
//     like() {
//         console.log(`${this.name} like it`)
//     }
//
//     comment() {
//         console.log('comment')
//     }
// }
//
// let user1 = new User1();
// console.log(user1);
//
// user1.like()

//---bayc mez petq e contructor

// super@ kanchuma cnoxi constructor@

// class User1 extends User {
//     constructor(name, age) {
//         super();              /*this.name = 'unknow user'*/
//         this.name = 'John';   /*name-@ poxvec*/
//         this.age = '30';
//     }
//
//     like() {
//         console.log(`${this.name} like it`)
//     }
//
//     comment() {
//         console.log('comment')
//     }
// }
//
// let user1 = new User1();
// console.log(user1);
//
// user1.like()

//   -----------super.method()------------

// class User1 extends User {
//     constructor(name, age) {
//         super();              /*this.name = 'unknow user'*/
//         this.name = 'John';   /*name-@ poxvec*/
//         this.age = '30';
//     }
//
//     like() {
//         console.log(`${this.name} like it`)
//     }
//
//     comment() {
//         super.post()
//         console.log('comment')
//     }
// }
//
// let user1 = new User1();
// console.log(user1);
//
// user1.comment()

// ----------@ndhanracnel orinakov-------
// class User1 extends User {
//     constructor(name, age) {
//         super();              /*this.name = 'unknow user'*/
//         this.name = 'John';   /*name-@ poxvec*/
//         this.age = '30';
//     }
//
//     like() {
//         console.log(`${this.name} like it`)
//     }
//
//     comment() {
//         super.post()
//         console.log('comment')
//     }
// }
//
// let user1 = new User1();
// console.log(user1);

// 1. ete child class-um use-um enq constyructor apa petq e kanchel super() parneti construcotrn henc skzbic
// 2. nor object stexceluc arrow functionenrn ev this ov u constructoric durs (age = 5) grvum en objectum
// 3. zharangeluc childe classum grvum e nayev 2rd keti nshvacnern
// 4. mnacacnb aysinqn functionenrn grvum en prototypeum