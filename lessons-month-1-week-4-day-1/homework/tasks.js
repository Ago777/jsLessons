//1) CLOSURI MIJOCOV STACEQ GUMARMAN FUNCTION;
// aysinqin f(1)(2) ---> ksatananq 3

// ====ANSWER=====
// function sum(a) {
//     return function (b) {
//         return a + b
//     }
// }
//
// console.log(sum(5)(4))



// 2) CLOSURI MIJOCOV STEXCEQ FUNCTION VOR@  ERKROD KANCHI ZHAMANAK STACVAC TIV@ KLCNI ARRAY MEJ,
// ARAJIN KANCHI ZHAMANAK STACVAC TVI CHAPOV;

// ====ANSWER=====
// function toArr(a) {
//     return function (b) {
//         let arr = [];
//         for (let  i = 0; i < a; i++) {
//             arr.push(b)
//         }
//         return arr
//     }
// }
//
// console.log(toArr(5)(4))


// 3) INCH TARBERUTYUN TVYAL ARTAHAYUTYUNNERI MEJ

// let arr = [];
// var arr = [];
// const arr = [];


// 4) HAYTARAREQ 3 TESAKI FUNCTION (DECALARTION, EXPRESSION, ARROW FUNCTION) EV NSHEQ TARBERUTYUNNERN

// 5) INCH KTPI XI?
// for (let i = 0; i < 5; i++) {
//     console.log(i++);
// }

//=====ANSWER=====
// 0,2,4



//6) INCH KTPI XI?
// let a = 2
// while(a !== 5) {
//     if (a > 0) {
//         a+=1;
//         console.log(a++)
//     } else {
//         console.log(++a)
//     }
//     a += 1;
// }

//=====ANSWER=====
// 3



// 7 INCH KTPI XI?
// var b = 3;
// let a =5;
// do {
//     if (++a % 3 === 0 && b % 2 === 0) {
//         console.log(1);
//     } else if (a === 5 || a % 2 === 0) {
//         console.log(2);
//     }
// } while (a < 8);

//=====ANSWER=====
// 2,2



//8) INCH KTPI U XI?
// function foo () {
//     switch(true) {
//         case a > 2:
//             console.log(3);
//             break;
//         case a <= 1:
//             console.log(2);
//             break;
//         case a <= 1:
//             console.log(4);
//             break;
//         default:
//             console.log(1);
//             break;
//     }
// }
// let a = 1;
// foo();

//=====ANSWER=====
// 2


//9 INCH KTPI U XI ?
// function sayWelcome (name) {
//     let message = 'hello ' + name;
//     return function() {
//         console.log(message);
//     };
// }
// sayWelcome("Henry")();

//=====ANSWER=====
//HELLO HENRY

// 10 INCHPES KANCHEL FUNCTION
// function logger() {
//     return function () {
//         return function () {
//             console.log("Message");
//         }
//     }
// }

//=====ANSWER=====
// logger()()()

// 5) greq function vor kstana array vori elementneric gone mekn eli array e ev erku callback;
//       function@ petq e hashvi bolor tveri gumar@ naev ayn tveri voronq gtnvum en nested arrayi mej ev nested arrayneri qanak@;
//    arajin calbback petq e tpi patasxan@ ev nshi te qani array type- i element e exel himnakan arrayi mej;
//     erkrord callback petq e tpi 0 ete vochmi number EV vochmi array type-i element chi exel himanakn arrayum
//   orinak tvual arrayi depqum--> [5, [4, 'a'], true, ['c', 1, 'b']];
//  petq e ashxati arajin callback@ ev tpi 10(bolor tveri gumar@) heto 2(array elementeri qanak@)

// function callBack1(sum,num){
//     console.log(sum,num)
// }
// function callBack2(){
//     console.log()
// }
// let arr=[3, [1, 'v'], true, 'true', 1, 22];
//
// function showResult(arr,callBack1,callBack2) {
//     if (!Array.isArray(arr)) return;
//     return arr.filter(item => typeof item === 'number'){
//         sum+= item;
//         if(typeof callBack1=== 'function') {
//             if (Array.isArray(item)) {
//                 console.log(num++)
//             }
//         } else if (typeof callBack2 === 'function') {
//             if (!arr && !number) {
//                 console.log(0)
//             }
//         }
//     }
// }
// console.log(showResult(arr,callBack1,callBack1))