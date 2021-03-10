// 1) greq function vorn stanum e object ev stugum datark e te voch ---> hampatasxan veradarcneluv true kam false

// function isObjectEmpty(obj){
// if(typeof obj !== 'object') return;
//     for (let key in obj){
//         return !!key;
//     }
//     return false;
// }
// console.log(isObjectEmpty({name: 'John' , surname: 'Smith'}));

// if-check@ bolor xndirnerum sxala
// kara lini name: ''

// 2) greq function vorn stanum e nerqevum nshvac  object@ ev hashvum bolor ashxatoxneri ashxatavardzeri gumar@

// let employeeSalaries = {
//     Jhon: 100,
//     Nick: 200,
//     Zidane: 1000,
// }
//
// function sumSalaries(obj){
// if(typeof obj !== 'object') return;
//     let sum = 0;
//     for (let key in obj){
//         sum += obj[key];
//     }
//     return sum;
// }
//
// console.log(sumSalaries(employeeSalaries));

// xndirn chishta ka urish karch tarberaK;

// 4) greq function vorn stanum e object ev veradarcnum mek ayl object vortex klinen naxord objecti number value-neri krknapatiknern
// orinak ete stacel enq {price: 100, name: 'John'} kveradarcni --> {price: 200, name: 'John'}

// function doubleNumbersOfObject(obj){
//     if(typeof obj !== 'object') return;
//     let newObj = Object.assign({} , obj);
//     for (let key in obj){
//         if (typeof obj[key] === 'number'){
//             obj[key] = obj[key]*2;
//         }
//     }
//     return obj;
// }

// console.log(doubleNumbersOfObject({price: 300 ,  name: 'John' , age: 15}));

// chishta assign@ karar chliner texn liner if
