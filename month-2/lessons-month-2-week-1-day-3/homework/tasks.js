// 1) greq function vorn stanum e object ev stugum datark e te voch ---> hampatasxan veradarcneluv true kam false

// function f(obj) {
//    // for (let key in obj) {
//    //     if(obj.hasOwnProperty(key)) {
//    //         return false
//    //     }
//    // }
//
//    // return
//
//     // or
//
//     // return Object.keys(obj).length > 0
// }
//
// console.log(f({}));

// 2) greq function vorn stanum e nerqevum nshvac  object@ ev hashvum bolor ashxatoxneri ashxatavardzeri gumar@

// let employeeSalaries = {
//     Jhon: '100$',
//     Nick: '200$',
//     Zidane: '1000$',
// }
//
// function f(obj) {
//   // const values = Object.values(obj);
//   // return values.reduce((acc, curr) => acc + curr)
//    or
//    let sum = 0;
//    for (let key in obj){
//         sum += parseInt(obj[key]);
//    }
//     return sum;
// }
//
// console.log(f(employeeSalaries));

// 3) greq nuyn 2 xndir@ bayc hashvi arnelov vor asxhatavardzern nshvac en stringov orinak Jhon: '100$' (chaseq chhaskaca)

// function f(obj) {
//   const values = Object.values(obj);
//   return values.reduce((acc, curr) => acc + parseInt(curr), 0)
// or
//    let sum = 0;
//    for (let key in obj){
//         sum += parseInt(obj[key]);
//    }
//     return sum;
// }
//
// console.log(f(employeeSalaries));

// 4) greq function vorn stanum e object ev veradarcnum mek ayl object vortex klinen naxord objecti number value-neri krknapatiknern
// orinak ete stacel enq {price: 100, name: 'John'} kveradarcni --> {price: 200, name: 'John'}

// function f(obj) {
//     const resObj = {};
//     for (let key in obj) {
//         if(obj.hasOwnProperty(key)) {
//             // if(typeof obj[key] === 'number') {
//             //     resObj[key] = obj[key] * 2
//             // }else {
//             //     resObj[key] = obj[key]
//             // }
//             // or
//             resObj[key] = typeof obj[key] === 'number' ? obj[key] * 2 : obj[key]
//         }
//     }
// //
//     return resObj
// //
// }
// //
// console.log(f({price: 100, name: 'John'}));

// 5) greq function vorn stanum e object ev veradarcnum mek ayl object vortex values keyov klinen stacvac objecti value-nern arrayov
//    isk keys keyov stacvac objecti keyer@ arrayov,
//    orinak stanum e {id: 5, name: 'John'} kveradarcni --> {values: [5,'John'], keys: ['id', 'name']} (shat heshta, ogtvel methodneric)


// function f(obj) {
//     // const resObj = {};
//     // resObj.values = Object.values(obj);
//     // resObj.keys = Object.keys(obj);
//     //
//     // return resObj
//
//     // return {
//     //     values: Object.values(obj),
//     //     keys: Object.keys(obj),
//     // }
// }
//
// console.log(f({id: 5, name: 'John'}));
