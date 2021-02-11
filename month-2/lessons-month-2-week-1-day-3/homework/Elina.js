// 1) greq function vorn stanum e object ev stugum datark e te voch ---> hampatasxan veradarcneluv true kam false

// function getValues(obj){
//     let keys = Object.keys(obj);
//     if (keys.length===0){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(getValues({name:"Elina", surname:"Nersesyan"}));

// kareli er shat aveli karch

// 2) greq function vorn stanum e nerqevum nshvac  object@ ev hashvum bolor ashxatoxneri ashxatavardzeri gumar@

// let employeeSalaries = {
//     Jhon: 100,
//     Nick: 200,
//     Zidane: 1000,
// }
//
// function countSalaries(obj) {
//     let sum = obj.Jhon + obj.Nick + obj.Zidane;
//     return sum;
// }
//
// console.log(countSalaries({Jhon: 100, Nick: 200, Zidane: 1000}));

// chishta bayc voch universal

// 3) greq nuyn 2 xndir@ bayc hashvi arnelov vor asxhatavardzern nshvac en stringov orinak Jhon: '100$' (chaseq chhaskaca)


// function countSalaries(obj) {
//     var values = Object.values(obj);
//     var numbers = values.map(function (num) {
//         return +num;
//     });
//     return numbers.reduce((a, b) => a + b, 0)
// }
//
// console.log(countSalaries({Jhon: "100", Nick: "200", Zidane: "1000"}));

// ashxatavardzern petq e linein '100$';
// mapn avelord er

// 4) greq function vorn stanum e object ev veradarcnum mek ayl object vortex klinen naxord objecti number value-neri krknapatiknern
// orinak ete stacel enq {price: 100, name: 'John'} kveradarcni --> {price: 200, name: 'John'}


// function getObject(obj) {
//     let obj2 = {};
//     for (let key in obj) {
//         obj2[key] = obj[key]
//     }
//     for (let key in obj) {
//         if (typeof key === Number) {
//             let sum = key * 2;
//             console.log(sum)
//
//         } else {
//             console.log(key)
//         }
//         return obj2
//     }
// }
//
// console.log(getObject({age: 30, count: 40, name: "john"}));


// 5) greq function vorn stanum e object ev veradarcnum mek ayl object vortex values keyov klinen stacvac objecti value-nern arrayov
//    isk keys keyov stacvac objecti keyer@ arrayov,
//    orinak stanum e {id: 5, name: 'John'} kveradarcni --> {values: [5,'John'], keys: ['id', 'name']} (shat heshta, ogtvel methodneric)


// function getVal(obj) {
//     let obj2 = {};
//     let values = Object.values(obj)
//     let keys = Object.keys(obj);
//     obj2.value = values;
//     obj2.keys = keys;
//     return obj2
// }
//
// console.log(getVal({id: 5, name: 'John'}));

// shat lava bayc karelia karch