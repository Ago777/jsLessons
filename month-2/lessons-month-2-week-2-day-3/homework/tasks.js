//  LEVEL UP - 1
// 1) greq function constructor vorn kcarayi vorpes calculator
//    kancheluc kstana erku tiv, ev kunena gumarman hanman, bajanman ev bazmapatkman methodner
//    voronq kancheluc kveradarcni hamapatasxan gorcoxutyan arjeq@

// ------ANSWER------

// function Calculator(a,b) {
//     this.a = a;
//     this.b = b;
//
//     this.add = () => {
//         return this.a + this.b
//     };
//
//     this.diff = () => {
//         return this.a - this.b
//     };
//
//     this.multiply = () => {
//         return this.a * this.b
//     };
//
//     this.divide = () => {
//         return this.a / this.b
//     }
// }
//
// const calculator = new Calculator(5,5);
// console.log(calculator.add());
// console.log(calculator.diff());
// console.log(calculator.multiply());
// console.log(calculator.divide());

//    LEVEL UP - 2
// 2) greq function constructor vorn kcarayi vorpes vayrkyanachap
//    kunena 3 method, start, stope ev reset ev kkatari hamapatasxan gorcoxutyunnern
//    kanchelov start method@ console-um ktpi 1,2,3 ev ayln (amen vayrkyan) ev ktpi aynqan minchev chenq kanchi stop method@
//    reset@ method@ kancheluv vayrkyannern kzroyana, ete vayrkyanachapn @ntacqi mej e reset chenq karox anel.
//    reset karox enq anel menak stop taluc heto


// ------ANSWER------
// function Timer() {
//     this.intervalId = null;
//     this.count = 0;
//
//     this.start = () => {
//         if(this.intervalId) {
//             return 'timer has already started';
//         }else {
//             this.intervalId = setInterval(() => console.log(++this.count), 1000);
//             return 'timer start';
//         }
//     };
//
//     this.stop = () => {
//         if(!this.intervalId) {
//             return 'timer has already stopped'
//         }else {
//             clearInterval(this.intervalId);
//             this.intervalId = null;
//             return 'timer stopped'
//         }
//     };
//
//     this.reset = () => {
//         if (!this.intervalId) {
//             this.count = 0;
//             return this.count
//         }else {
//             return 'you must stop timer'
//         }
//     };
// }
//
// const timer = new Timer();


// level up - 3
// 2) greq function vor kstana mer students array@, khashvi bolor studentneri gumarayin tariq@ ev
//    ete ayd tariq@ gerazanci 100@; uremn petq e jnjel amenamec tariq unecox studentnerin aynqan minchev tariq@
//    poqr kam havasar lini 100-ic verjum kveradarcni mnacac studentneri array@ (tariqnern uxxaki tver en odic)))
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

// function f(arr) {
//     // let sumOfAge = arr.reduce((acc, curr) => acc + curr.age, 0);
//     // if(sumOfAge <= 100) return arr;
//     // let sortedArr = arr.sort((a,b) => a.age - b.age);
//     // sortedArr.pop();
//     // return f(sortedArr)
// }
//
// console.log(f(students));

