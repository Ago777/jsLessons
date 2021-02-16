// ===============================FUNCTION CONSTRUCTORS===================
// ------------------------------------------
// petq es stexcenq shat studentner
// let student1 = {
//     name: 'Nona',
//     gender: false,
// };
// let student2 = {
//     name: 'Rudo',
//     gender: true
// };
// ......

//---------------------------------------
// patkeracnenq senc mi functiona
// function Student(name, gender) {
//     let obj = {};
//     obj.name = name;
//     obj.gender = gender;
//
//     return obj;
// }
//
// let student1 = Student('Rudo', true);
// let student2 = Student('Nona', false);
// console.log(student1);
// console.log(student2);

//---------------------------------------------
// we can create objects with function constructors
// dranq sovorakan funckianer en
// anun@ mecatarov
// kanchvuma new-ov

// function Student(name, gender) {
//     this.name = name;
//     this.gender = gender;
// }
//
// let student1 = new Student('Rudo', true);
// let student2 = new Student('Nona', false);
// console.log(student1.name);
// console.log(student2.name);

//1. erb new-ov kanchum enq datark objecta stexcvum veragrvuma this-in
//   arjeqnern vergarvum en ev veradarcvuma object@

// -----------------------------return----------------
// // return with other object
// function Student(name, gender) {
//     this.name = name;
//     this.gender = gender;
//
//     return {
//         name:  name
//     }
// }
//
// let student1 = new Student('Rudo', true);
// console.log(student1);

// return with primitive
// function Student(name, gender) {
//     this.name = name;
//     this.gender = gender;
//
//     return 5
// }
//
// let student1 = new Student('Rudo', true);
// console.log(student1);

// -------------methods in constructor----------------

// function Student(name, gender) {
//     this.name = name;
//     this.gender = gender;
//
//     this.sayHi = function()  {
//         return `Hi ${this.name}`
//     }
// }
//
// let student1 = new Student('Rudo', true);
// let student2 = new Student('Nona', false);
// console.log(student1.sayHi());
// console.log(student2.sayHi());

// -------------example---------
// function Cart() {
//     this.products = [];
//     this.sumOfPrice = 0;
//
//     this.addProduct = (product) => {
//         this.products.push(product);
//         this.sumOfPrice += product.price;
//     };
//
//     this.getProductsCount = () => {
//       return this.products.length;
//     }
//
// }
//
// const cart = new Cart();
// console.log(cart);
// cart.addProduct({name: 'wine', price: 200});
// cart.addProduct({name: 'apple', price: 300});
// console.log(cart.products);
// console.log(cart.getProductsCount());
// console.log(cart.sumOfPrice);
//-----------------------------------------------
// we can change price and products
// same example with private property

// function Cart() {
//     let products = [];
//     let sumOfPrice = 0;
//
//     this.addProduct = (product) => {
//         products.push(product);
//         sumOfPrice += product.price;
//     };
//
//     this.getProducts = () => {
//         return products
//     };
//
//     this.getSumOfPrice = () => {
//         return sumOfPrice
//     };
//
//     this.getProductsCount = () => {
//         return products.length;
//     }
//
// }
//
// const cart = new Cart();
// console.log(cart);
// cart.addProduct({name: 'wine', price: 200});
// cart.addProduct({name: 'apple', price: 300});
// console.log(cart.getProductsCount());
// console.log(cart.getProducts());
// console.log(cart.getSumOfPrice());


// ----js constructors-----
// let arr = new Array();
// let obj = new Object();
// let num = new Number();
// let bool = new Boolean();
// let str = new String();

// constructor we dont know
// Date();
// new Date();
// let date = new Date();

// BACATREL CONSOLUM ASHXATACNEL@


