// 1) LEVEL UP - 1
//    uneq angleren aybuben@ arrayov,(es chem grum duq greq) greq function vor kstana tar ev kveradarcno object
//    vortex vorpes key nshva klini tar@ isk vorpes value te vorerord tarn e aybubenum
//    orinak f('a') ---> {a: 1}

// ------ANSWER------
// erkara
// checker@ chka
// popoxakani vat anun

// let alphavit = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
//     'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
//     's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//
// function foo(key) {
//     let obj = {};
//     for (let i = 0; i < alphavit.length; i++) {
//         if (key === alphavit[i]) {
//             obj[key] = i + 1;
//             return obj;
//         }
//     }
// }
//
// console.log(foo('j'));

//------------------LEVEL 0.25---------------

//    LEVEL UP - 2
// 2) greq function vorn stanum e object ev veradarcnum array vortex objecti amen key valuen krkin array e;
//    orinak f({a:1, b: 2, c: 3}) ------>>> [[a,1],[b,2],[c,3]] //entries


// ------ANSWER------
// checker@ chka,
// method petq cher
// ete daje ogtagorcel eiq karaiq karch greiq aranc return aranc pakagcer

// let obj = {
//         name: 'Rudo',
//         age: 24,
//         gender: true
// }
// function foo(object) {
//     return Object.entries(object);
// }
// console.log(foo(obj));

//------------------LEVEL 1---------------


// level up - 3
// 2) greq function vorn kstana  arajin argumentov nshvac array@
//    ev  2 rd argument object, vortex klini mek key-value--> name, gender, kam age,
//    orinak {name: 'Rudo'} kam {gender: true} kam {age: 21} ev kveradarcni
//    array ayn usanoxneri objectnerov voronq hamapatasxanum en 2rd argumentov trvac parametrin
//    orinak {gender: false} stanalu depqum kveradarcni [{Nona-i}, {Elina-i}, {Ruzanna-i}] objectner@
//    ete vochmiban chi hamapatasxanum datark array

// const students = [
//     {
//         name: 'Rudo',
//         gender: true,
//         age: 20
//     },
//     {
//         name: 'Nona',
//         gender: false,
//         age: 21
//     },
//     {
//         name: 'Exish',
//         gender: true,
//         age: 22
//     },
//     {
//         name: 'Elina',
//         gender: false,
//         age: 23
//     },
//     {
//         name: 'Ruzanna',
//         gender: false,
//         age: 20
//     },
//     {
//         name: 'Mehrab',
//         gender: true,
//         age: 21
//     },
//     {
//         name: 'Xcho',
//         gender: true,
//         age: 22
//     },
//     {
//         name: 'Vahag',
//         gender: true,
//         age: 23
//     }
// ]

//---------ANSWER--------
// check@ chka
// xndri@ bardutyun@ meca
// else-@ animaast koda

// function foo(arr, object) {
//     let x = [];
//     for (let i = 0; i < arr.length ; i++) {
//             for (let key in object) {
//                 object[key] === arr[i][key] ? x.push(arr[i]) : x;
//               }
//             }
//             return x;
//         }
// console.log(foo(students, {gender: false}));

// --------------------------LEVEL-1.5--------------------------