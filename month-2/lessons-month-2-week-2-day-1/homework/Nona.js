// 1) LEVEL UP - 1
//    uneq angleren aybuben@ arrayov,(es chem grum duq greq) greq function vor kstana tar ev kveradarcno object
//    vortex vorpes key nshva klini tar@ isk vorpes value te vorerord tarn e aybubenum
//    orinak f('a') ---> {a: 1}

// ------ANSWER------
// let arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// function returnObject(letter){
//     if (!arr.includes(letter)) return 'There is no such letter in English.';
//     return {
//         [letter]: arr.indexOf(letter) + 1
//     }
// }
// console.log(returnObject('d'));
// --------------------------LEVEL-1--------------------------

//    LEVEL UP - 2
// 2) greq function vorn stanum e object ev veradarcnum array vortex objecti amen key valuen krkin array e;
//    orinak f({a:1, b: 2, c: 3}) ------>>> [[a,1],[b,2],[c,3]]


// ------ANSWER------
// check@ sxala
// erkara
// function returnArray(obj){
//     if(typeof obj !== 'object' && obj === null && Array.isArray(obj)) return 'This is not an object';
//     let returnedArr = [];
//     let arrWithValues = Object.values(obj);
//     let arrWithKeys = Object.keys(obj);
//     for (let i = 0 ; i < arrWithKeys.length ; i++){
//         returnedArr.push([arrWithKeys[i],arrWithValues[i]])
//     }
//     return returnedArr;
//
// }
// console.log(returnArray({a: 1 , b: 2 , c: 3}));
// --------------------------LEVEL-1--------------------------

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
// ];


//---------ANSWER--------
// check@ sxala 2nel
// xndri@ bardutyun@ meca

// function returnArray(arr,obj){
//     if(typeof obj !== 'object' && obj === null && Array.isArray(obj)) return 'This is not an object.';
//     if(arr !== students) return 'We need students array.';
//     let newArr = [];
//     for (let i = 0 ; i < arr.length; i++){
//         for (let key in obj){
//             if (obj[key] === arr[i][key]) newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
//
// console.log(returnArray(students,{gender: false}));

// --------------------------LEVEL-2--------------------------