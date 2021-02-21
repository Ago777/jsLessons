//  LEVEL UP - 1
// 1) greq function vorn stanum e array cankacac elementnerov nayev krknvox
//    ev veradarcnum e object vortex key valueov nshvac e te tvyal elmentic qani hat ka arrayum
//    orinak f(['a', 'b', 'c', 'b', 'a', 'a']) ---> {a: 3, b: 2, c: 1} petqa asxhati voch menak stringneri arrayov ayl cankacac


// ------ANSWER------
// function f(arr) {
//     // let resultObj = {};
//     // arr.forEach(item => {
//     //     if(!resultObj[item]) {
//     //         resultObj[item] = 1
//     //     }else {
//     //         resultObj[item]++
//     //     }
//     //
//     //     return resultObj
//     // })
//     // return resultObj

//     // return arr.reduce((acc, curr) => {
//     //     if(!acc[curr]) {
//     //         acc[curr] = 1
//     //     } else {
//     //         acc[curr]++
//     //     }
//     //
//     //     return !acc[curr] ? acc[curr] = 1 :  acc[curr]++
//     // }, {})
//
//
// }
//
// console.log(f(['a', 'b', 'c', 'b', 'a', 'a']));

//    LEVEL UP - 2
//   2) greq function vor@ stanum e objectneri array vortex nshvac en inchvor apranqner apranqneri qanak, goyutyun uni te voch
//    ev arjeq (arjeq@ verabervum e 1 apranqin), function@ piti veradarcni @ndhanur goyutyun unecox apranqneri gumar@
//   (nman funkcianer en ashxatum cankacac online arevtri kayqerum erb add enq anum apranqn karzina u nshumq qanak verjum cuyca talis inchqan piti vcharenq)
//    orinak f(
//       [
//         {name: 'tv', quantity: 2, price: 200, isExist: false},
//         {name: 'coca-cola', quantity: 5, price: 100, isExist: true},
//         {name: 'lays', quantity: 1, price: 100, isExist: true},
//       ]
//   ) ----> 600  -->vorovhetev goyutyun  5 hat coca-cola amen mekn 100 u 1 hat lays 100


// ------ANSWER------

// function f(arr) {
//     // let sum = 0;
//     // for (let obj of arr) {
//     //     if(obj.isExist) {
//     //         sum += obj.quantity * obj.price
//     //     }
//     // }
//     //
//     // return sum
//
//     // return arr.filter(obj => obj.isExist).reduce((acc, curr) => acc + curr.price * curr.quantity,0);
//
//     // return arr.reduce((acc, curr) => {
//     //     let oneItemPrice = curr.isExist ? curr.price * curr.quantity : 0;
//     //     return acc + oneItemPrice;
//     // }, 0);
//
// }
//
// console.log(f([
//     {name: 'tv', quantity: 2, price: 200, isExist: false},
//     {name: 'coca-cola', quantity: 5, price: 100, isExist: true},
//     {name: 'lays', quantity: 1, price: 100, isExist: true},
// ]));


// level up - 3
// 2) greq function vorn kstana nshvac array@ arajin argumentov
//    ev kstana 2 rd argument objecti keyeric mek@, ev kveradarcni object vortex
//    xmbavorvac klinen studentnern @st poxancvac keyi
//    orinak f(students, 'gender') ----->
// {
//     true: [{}, {}]--> bolor ayn studnetnner voronc gender@ true e
//     false: [{}, {}] ---> bolor ayn studentnner voronc gender@ false e
// }

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

// ---------ANSWER--------
// function f(students, groupByKey) {
//     let obj = {};
//     students.forEach(item => {
//         const groupByValue = item[groupByKey];
//         if(!obj[groupByValue]) {
//             obj[groupByValue] = [];
//         }
//         obj[groupByValue].push(item)
//     })
//
//     return obj
// }
//
// console.log(f(students, 'gender'));



