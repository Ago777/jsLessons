// ==================RECURSION=================

// function f() {
//     f()
// }
//
// f();
//
//======= ETE OGTAGORCUM ENQ REKURSIA PARTADIR PETQA OGTAGORCENQ PAYMAN VORI DEPQUM FUNCTIONN AYLEVS CHI KANCHVI=====
// function f(x) {
// //    if (x > 5) return;
//     console.log(x);
//     x += 1;
//     f(x)
// }
//
// f(0);

// SAME WITH LOOP

// function f(x) {
//    for (let i = 0; i <= x; i++) {
//        console.log(i)
//    }
// }
//
// f(5);

//---------------------------------------------------------

//========GREL FUNCTION VORN KVERADARCNI MINCHEV TRVAC TIVN EXAC BOLOR TVERI GUMARN========
// 3 TARBERAK
// 1)
// function sumTo(n) {
//     return n * (n + 1) / 2;
// }
//
// console.log(sumTo(3));

//2)
// function sumTo(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(sumTo(3));

// 3)
// function sumTo(n) {
//     if( n < 0) return 'only 0+ numbers';
//     if (n <= 1) return n;

//     return n + sumTo(n - 1);
// }
//
// console.log(sumTo(3));

// sumTo(3) ---->  return 3 + sumTo(3-1) ----> return 2 + sumTo(2-1) ---> 1

// context 3: sumTo(1) --> n = 1; return 1;
// context 2: sumTo(2) --> n = 2; return 2 + sum(2 - 1);
// context 1: sumTo(3) -->  n = 3; return 3 + sum(3 -1);

//KANCHERI QANAK@ KOCHVUM E REKURSIAI XORUTYUN;

// deep 3

//========CANKACAC REKURSIA KARELI E GREL LOOPI TESQOV... REKURSIAN GRETE MEJ AVELI ERKAR E ASHXATUM========;
//========MAXIMAL XUSAPEL REKURSIA GRELUC, BAYC SHAT XNDIRNER ANHNAR E ARANC DRA QANI VOR LOOPOV QARAKI ANGAM SHAT KOD PITI GRVI========;

//  SPEED 1 --> 2 --> 3;
// 1)
// function sumToWithMath(n) {
//     return n * (n + 1) / 2;
// }
// console.time('mathematics');
// sumToWithMath(1000);
// console.timeEnd('mathematics');
// //
// //
// // //2)
// function sumToWithLoop(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }
//
// console.time('loop');
// sumToWithLoop(1000);
// console.timeEnd('loop');
// //
// // // 3)
// function sumToWithRecursion(n) {
//     if (n === 1) return 1;
//     return n + sumToWithRecursion(n - 1);
// }
//
// console.time('recursion');
// sumToWithRecursion(1000);
// console.timeEnd('recursion');

//========BACATREL VIZUAL STACKI MIJOCOV=============

// function f1() {
//     return f2()
// }
//
// function f2() {
//     return f3()
// }
//
// function f3() {
//     return f4()
// }
//
// function f4() {
//     return 5
// }
//
// console.log(f1());

//========ADD OTHER CODES ===========

// ------------------------------------------------------------------------

// ========EXAMPLE==========

// HASHVEL TVI ASTICHAN

// Math.pow(5,2);
// console.log(5 ** 2);

// 1)
// function pow(x, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//         result = result * x;
//     }
//
//     return result;
// }

// console.log(pow(2, 3));

//2)

// function pow(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
//     // return n === 1 ? x : x * pow(x, n - 1)
// }
//
// console.log(pow(2, 4));

// context 4: pow(2,1) --> x = 2, n = 1; return 2;
// context 3: pow(2,2) --> x = 2, n = 2; return 2 * pow(2, 2 - 1);
// context 2: pow(2,3) --> x = 2, n = 3; return 2 * pow(2, 3 - 1);
// context 1: pow(2,4) -->  x = 2, n = 4; return 2 * pow(2, 4 - 1);



