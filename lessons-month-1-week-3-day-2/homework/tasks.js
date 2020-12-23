// =========================WHAT WILL BE OUTPUT======================

// 1) WHAT WILL BE THE OUTPUT AND WHY
// var x = 21;
// let foo = function() {
//     console.log(x);
//     var x = 20;
// }
// foo();
// foo(5);
// console.log(x)

// 2) WHAT WILL BE THE OUTPUT AND WHY
// function f1(callback) {
//     let x = 7;
//     return callback(x);
// }
// function f2(param) {
//     let x = 'Jhon';
//     return param
// }
//
// let res = f1(f2);
// console.log(typeof res);


// 3) WHAT WILL BE THE OUTPUT AND WHY
// let a = 999;
// function foo() {
//     let b = a;
//     function myFunction (){
//         b = 66;
//     }
//     console.log(b);
//     console.log(a);
//     myFunction();
// }
// a = 555;
// foo();

// 4) WHAT WILL BE THE OUTPUT AND WHY
// var x = 12;
// function f1(z) {
//     console.log(x);
//     var x = 7;
//     let y = 9;
//     f3(z)
//     function f2(x) {
//         console.log(x);
//         console.log(y);
//     }
//     function f3(z) {
//         console.log(z);
//         f2(y);
//     }
//     console.log(x + y)
// }
//
// f1();



// bolor patasxannern petq e linen universal aysinqn cankacac argument poxancelu depqum petq e chisht ashxati kam
// chashxatelu depqum console.log aneq inchvor text nshelov vor sxal argument eq stacel;
// error chpiti lini
// orinak  ete petq e greq function vor kstana inchvor tiv kam array,
// da chi nshanakum vor ete es sxalvem urish type poxancem petqa kod@ traqi ayl petqa inchvor textov zgushacni vor sxal argumentem poxancel;
// xndirnern bolor@ hnaravora grel for() dasakan loop-ov bayc petqa greq arrayi methodnerov

// 1) greq function vor@ kstana array ev khashvi ayd arrayum exac tveric amenamec@ (arrayum karan tver chlinen);
// orinak ete poxancenq [5,12,'some', true] piti veradarcni 12
// ogtagorceq filter method
// ======= ANSWER ==========


// 2) greq function vor@ kstana array ev kveradarcni ayd array@ meji bolor tver@ krknapatkac
// orinak ete stana [5, 'Doe', 0, 4, 'some'] ---> kveradarcni [10, 'Doe', 0, 8, 'some']
//  ogtagorceq map

// 3) greq function vor kstana array ev ktpi ayd arrayi amen kent index unecox elementern
//    ogtagorceq foreach

