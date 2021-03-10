//  LEVEL UP - 1
// 1) greq function constructor vorn kcarayi vorpes calculator
//    kancheluc kstana erku tiv, ev kunena gumarman hanman, bajanman ev bazmapatkman methodner
//    voronq kancheluc kveradarcni hamapatasxan gorcoxutyan arjeq@

// ------ANSWER------

// function Calc(num1, num2) {
// 	this.num1 = num1;
// 	this.num2 = num2;
// 	this.getSum = () => num1 + num2;
// 	this.getSubtract = () => num1 - num2;
// 	this.getDivide = () => num1 / num2;
// 	this.getMultiply = () => num1 * num2;
// }
//
// let res1 = new Calc(+prompt("Lets go.", 'for nums'), +prompt("Lets go.", 'for nums'));
// console.log(res1);
// console.log(res1.getSum());
// console.log(res1.getSubtract());
// console.log(res1.getDivide());
// console.log(res1.getMultiply());

//    LEVEL UP - 2
// 2) greq function constructor vorn kcarayi vorpes vayrkyanachap
//    kunena 3 method, start, stope ev reset ev kkatari hamapatasxan gorcoxutyunnern
//    kanchelov start method@ console-um ktpi 1,2,3 ev ayln (amen vayrkyan) ev ktpi aynqan minchev chenq kanchi stop method@
//    reset@ method@ kancheluv vayrkyannern kzroyana, ete vayrkyanachapn @ntacqi mej e reset chenq karox anel.
//    reset karox enq anel menak stop taluc heto


// ------ANSWER------

// start@ 1 toxov petq chi returna haskanum
// ete start tam mekic avel angam sxal kashxati
// stopresume-i pah@ chhaskaca xia sksum hashvel
// function Timer() {
// 	let i = 0;
// 	let onTimer = 0;
// 	this.start = () => onTimer = setInterval(() => console.log(++i), 1000);
// 	this.stopResume = () => {
// 		if(onTimer) {
// 			clearInterval(onTimer);
// 			onTimer = 0;
// 		} else {
// 			onTimer = setInterval(() => console.log(++i), 1000);
// 		}
// 	};
// 	this.reset = () => onTimer ? `You can't reset timer`: i = 0;
// }
//
// let firstCall = new Timer();
// console.log(firstCall);

// level up - 3		{{{{{{{{{{{{{{{{{{{{{It's a Bonus}}}}}}}}}}}}}}}}}}}}}
// 2) greq function vorn kstana nshvac array@ ev kveradarcni array vortex klini 2 object
//    hetevyal tesqov (tvyal xndri lucman hamar esorva dasn kap chuni)
// [
//     {
//         id: [], --> nshvac klinen bolor txerqi idnern (sortavorvac)
//         name: [], --> bolor txeqi anunnern (voronq 21-ic poqr en)
//         gender: true,
//         age: [] ---> bolor txeqi tariqnern (sortavorvac)
//     },
//     {
//         id: [], --> nshvac klinen bolor axjikneri idnern (sortavorvac)
//         name: [], --> bolor axjikneri anunnern (voronq 21-ic mec en)
//         gender: true,
//         age: [] ---> bolor axjikneri tariqnern (sortavorvac)
//     }
// ]
//

// const students = [
//     {
//         id: 8,
//         name: 'Rudo',
//         gender: true,
//         age: 20
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
//         age: 22
//     },
//     {
//         id: 6,
//         name: 'Elina',
//         gender: false,
//         age: 22
//     },
//     {
//         id: 4,
//         name: 'Ruzanna',
//         gender: false,
//         age: 20
//     },
//     {
//         id: 1,
//         name: 'Mehrab',
//         gender: true,
//         age: 21
//     },
//     {
//         id: 2,
//         name: 'Xcho',
//         gender: true,
//         age: 22
//     },
//     {
//         id: 5,
//         name: 'Vahag',
//         gender: true,
//         age: 23
//     }
// ];

//---------ANSWER--------

// function sortedObjects(arr) {
//     if (!Array.isArray(arr)) return 'Is not Array'
//     let sorteArray = [{}, {}];
//     arr.forEach(function (item) {
//         if (item.gender) {
//             !sorteArray[0].id ? sorteArray[0].id = [item.id] : sorteArray[0].id.push(item.id);
//             if (item.age < 21) !sorteArray[0].name ? sorteArray[0].name = [item.name] : sorteArray[0].name.push(item.name);
//             !sorteArray[0].age ? sorteArray[0].age = [item.age] : sorteArray[0].age.push(item.age);
//             sorteArray[0].gender = item.gender;
//         } else {
//             !sorteArray[1].id ? sorteArray[1].id = [item.id] : sorteArray[1].id.push(item.id);
//             if (item.age > 21) !sorteArray[1].name ? sorteArray[1].name = [item.name] : sorteArray[1].name.push(item.name);
//             !sorteArray[1].age ? sorteArray[1].age = [item.age] : sorteArray[1].age.push(item.age);
//             sorteArray[1].gender = item.gender;
//         }
//     });
//     sorteArray[0].id.sort((a, b) => a - b);
//     sorteArray[1].id.sort((a, b) => a - b);
//     sorteArray[0].age.sort((a, b) => a - b);
//     sorteArray[1].age.sort((a, b) => a - b);
//     return sorteArray
// }

// console.log(sortedObjects(students));

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

// //---------ANSWER---------
// maladec
// function ageLimit(arr) {
// 	if(!Array.isArray(arr)) return 'Is not Array';
// 	arr.sort((a, b) => a.age - b.age);
// 	let sum = arr.reduce((acc, item) => acc + item.age, 0);
// 	while(sum > 100) arr.pop();
// 	return arr
// }
//
// console.log(ageLimit(students));
// console.log(students);