// /  LEVEL UP - 1
// 1) greq function constructor vorn kcarayi vorpes calculator
//    kancheluc kstana erku tiv, ev kunena gumarman hanman, bajanman ev bazmapatkman methodner
//    voronq kancheluc kveradarcni hamapatasxan gorcoxutyan arjeq@

// ------ANSWER------
// shat lava
// function Foo(a, b) {
//     this.a = a
//     this.b = b;
//     this.multiply = function() {
//        return this.a * this.b;
//      }
//     this.divide = function() {
//        return this.a / this.b;
//     }
//     this.sum = function() {
//        return  this.a + this.b;
//     }
//     this.sub = function() {
//        return this.a - this.b;
//     }
// }
// let obj =  new Foo(7 , 8)
// console.log(obj.sum());



//    LEVEL UP - 2
// 2) greq function constructor vorn kcarayi vorpes vayrkyanachap
//    kunena 3 method, start, stope ev reset ev kkatari hamapatasxan gorcoxutyunnern
//    kanchelov start method@ console-um ktpi 1,2,3 ev ayln (amen vayrkyan) ev ktpi aynqan minchev chenq kanchi stop method@
//    reset@ method@ kancheluv vayrkyannern kzroyana, ete vayrkyanachapn @ntacqi mej e reset chenq karox anel.
//    reset karox enq anel menak stop taluc heto


// ------ANSWER------
// ete start tam mekic avel angam sxal kashxati
//
// function Foo() {
//     this.time = 0;
//     this.interval = null;
//     this.start = () => {
//         this.interval = setInterval(() => {
//           this.time++;
//           console.log(this.time)
//           }, 1000)
//     };
//     this.stop = function() {
//        clearInterval(this.interval);
//        this.interval = null;
//     };
//     this.reset = function() {
//         if (this.interval)  return;
//         this.time = 0;
//     }
// }
// const obj = new Foo();



// level up - 3
// 2) greq function vor kstana mer KONKRET students array@, khashvi bolor studentneri gumarayin tariq@ ev
//    ete ayd tariq@ gerazanci 100@; uremn petq e jnjel amenamec tariq unecox studentnerin aynqan minchev
//    mnacac studentneri tariq@ poqr kam havasar lini 100ic
//    verjum kveradarcni mnacac studentneri array@ (tariqnern uxxaki tver en odic)))
//    aysinqn konkret mer depqum petq e veradarcni array vortex klinen miayn
//    20,21,22,23 tariq unecox objectner@, vorovhetev dranc gumar@ klini arden 86
//    ete 25.nel veradarcnenq kstacver 110. arrayi ev objectneri model@ gitenq hstak
//    chgidenq miayn tariqner te vor objectn qani tarekan e
//    sranic manramsn el chem kara bacatrem
//
//

// const students = [
//     {
//         id: 8,
//         name: 'Rudo',
//         gender: true,
//         age: 25
//     },
//     {
//         id: 7,
//         name: 'Nona',
//         gender: false,
//         age: 21
//     },
//     {
//         id: 3,
//         name: 'Exish',
//         gender: true,
//         age: 20
//     },
//     {
//         id: 6,
//         name: 'Elina',
//         gender: false,
//         age: 27
//     },
//     {
//         id: 4,
//         name: 'Ruzanna',
//         gender: false,
//         age: 23
//     },
//     {
//         id: 1,
//         name: 'Mehrab',
//         gender: true,
//         age: 22
//     },
//     {
//         id: 2,
//         name: 'Xcho',
//         gender: true,
//         age: 24
//     },
//     {
//         id: 5,
//         name: 'Vahag',
//         gender: true,
//         age: 26
//     }
// ];

// //---------ANSWER--------
// shat lavna
// function foo(array) {
//     let x = array.sort((a, b) => (a.age - b.age));
//     let y = x.reduce((acc,cur) => {
//         return acc + cur.age;
//     }, 0);
//     if (y > 100) {
//         x.pop();
//         foo(x);
//     }
//     return x;
// }
// console.log(foo(students));


