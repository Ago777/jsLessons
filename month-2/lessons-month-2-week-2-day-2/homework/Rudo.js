//  LEVEL UP - 1
// 1) greq function vorn stanum e array cankacac elementnerov nayev krknvoxc
//    ev veradarcnum e object vortex key valueov nshvac e te tvyal elmentic qani hat ka arrayum
//    orinak f(['a', 'b', 'c', 'b', 'a', 'a']) ---> {a: 3, b: 2, c: 1} petqa asxhati voch menak stringneri arrayov ayl cankacac


// ------ANSWER------
// + 1- i texn ++
// // for loop
// if else karch

// let array = ['a', 'b', 'c', 'b', 'a', 'a'];
// function foo(arr) {
//     let obj = {};
//     for (let i = 0 ; i < arr.length ; i++) {
//            if (obj[arr[i]]) {
//                obj[arr[i]] = obj[arr[i]] + 1;
//            } else {
//             obj[arr[i]] = 1;
//            }
//     }
//     return obj;
// }
// console.log(foo(array));

// --------------------1----------------------


//    LEVEL UP - 2
//   2) greq function vor@ stanum e objectneri array vortex nshvac en inchvor apranqner apranqneri qanak, goyutyun uni te voch
//    ev arjeq (arjeq@ verabervum e 1 apranqin), function@ piti veradarcni @ndhanur goyutyun unecox apranqneri gumar@
//   (nman funkcianer en ashxatum cankacac online arevtri kayqerum erb add enq anum apranqn karzina u nshumq qanak verjum cuyca talis inchqan piti vcharenq)
//    orinak f(
//   [
//     {name: 'tv', quantity: 2, price: 200, isExist: false},
//     {name: 'coca-cola', quantity: 5, price: 100, isExist: true},
//     {name: 'lays', quantity: 1, price: 100, isExist: true},
//   ]
//   ) ----> 600  -->vorovhetev goyutyun  5 hat coca-cola amen mekn 100 u 1 hat lays 100


// ------ANSWER------
// animast 2 loop
// 2rd loop animast bolor checkeri stugum piti stuger isExist@

// let array = [
//     {name: 'tv', quantity: 2, price: 200, isExist: false},
//     {name: 'coca-cola', quantity: 5, price: 100, isExist: true},
//     {name: 'lays', quantity: 1, price: 100, isExist: true},
//   ];
//
// function foo(arr) {
//    let result = 0;
//       for (let i = 0 ; i < arr.length ; i++) {
//          for (let key in arr[i]) {
//             if (arr[i]['isExist'] === true)  result += arr[i].quantity * arr[i].price ;
//         }
//     }
//     return result;
// }
// console.log(foo(array));

// --------------------Level 1----------------------


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


// ------ANSWER------
// for loop
// function foo(student , key) {
//     const obj = {};
//     for (let i = 0 ; i < student.length; i++) {
//         const prop = student[i][key];
//         prop in obj ? obj[prop].push(student[i]) : obj[prop] = [student[i]];
//     }
//     return obj;
// }
// console.log(foo(students , 'gender'));

// --------------------2.75----------------------
