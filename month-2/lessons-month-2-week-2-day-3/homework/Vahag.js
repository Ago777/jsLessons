//  LEVEL UP - 1
// 1) greq function constructor vorn kcarayi vorpes calculator
//    kancheluc kstana erku tiv, ev kunena gumarman hanman, bajanman ev bazmapatkman methodner
//    voronq kancheluc kveradarcni hamapatasxan gorcoxutyan arjeq@

// ------ANSWER------
// petqa linein methodner
// this@ vochte kara ayl chpiti lini

// function Calculate(a,b){
//     this.plus = a + b;
//     this.minus = a - b;
//     this.divide = a / b;
//     this.multiply = a * b;
//   // return this --> kara nayev chlini vorovhetev amen depqum return a anum this-@
//
// }
// let calculator = new Calculate(10,5)
// console.log(calculator)

//    LEVEL UP - 2
// 2) greq function constructor vorn kcarayi vorpes vayrkyanachap
//    kunena 3 method, start, stop ev reset ev kkatari hamapatasxan gorcoxutyunnern
//    kanchelov start method@ console-um ktpi 1,2,3 ev ayln (amen vayrkyan) ev ktpi aynqan minchev chenq kanchi stop method@
//    reset@ method@ kancheluv vayrkyannern kzroyana, ete vayrkyanachapn @ntacqi mej e reset chenq karox anel.
//    reset karox enq anel menak stop taluc heto


// ------ANSWER------
// sxala
// function EveryOneSecond() {
//     let count = 1;
//     this.start = setInterval(() => console.log(count++), 1000);
//     this.stop = clearInterval(() => this.start)
//     this.reset = clearInterval(() => this.start)
//
// }
// let timer = new EveryOneSecond()


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

//---------ANSWER--------
// sxal
// function allStudentsAge(arr) {
//     let finalAges = 0;
//     let finalArr = [];
//     let onlyAges = []
//     arr.forEach(item => {
//         onlyAges.push(item.age);
//         onlyAges.forEach(element => {
//             if (item.age < element) {
//                 while (finalAges < 100) {
//                     finalAges += item.age
//                 }
//             }
//         })
//     });
// }
//
// console.log(allStudentsAge(students));

// sxal
// return arr.reduce((acc, curr) => {
//     let totalAge = 0;
//     let otherAge = [];
//     totalAge += curr.age;
//     if (totalAge <= 100){
//         return acc.push(curr)
//     } else {
//         otherAge.push(curr)
//
//     }
// },[])