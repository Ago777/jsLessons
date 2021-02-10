// 1) WHAT WILL BE THE OUTPUT AND WHY
// let person = {
//     name: 'John',
//     surname: 'Smith',
//     friends: ['empty', undefined]
// }
// let str = '';
// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         str += key
//     }
// }
// console.log(str);

// ===== ANSWERS====
// namesurnamefriends

// // 2) WHAT WILL BE THE OUTPUT AND WHY
// const person = {
//     knowladges: ['programming', 'driving'],
//     child: {
//         name: 'John',
//         surname: 'Smith'
//     }
// }
// console.log(typeof person.child[0])
// console.log(typeof person.knowladges)

// ===== ANSWERS====
// undefined object

// 3) WHAT WILL BE THE OUTPUT AND WHY
// let obj = {
//     id: 1,
//     name: 'John',
//     surname: 'Smith'
// }
//
// const value = Object.values(obj);
// value.push(obj.id);
// console.log(value);

// ===== ANSWERS====
// [1, 'john', 'smith', 1]

// 4) WHAT WILL BE THE OUTPUT AND WHY
// let obj = {
//     id: 1,
//     name: 'John',
//     surname: 'Smith'
// }
//
// const keys = Object.keys(obj);
// console.log(keys.length)

// ===== ANSWERS====
// 3

// 5) WHAT WILL BE THE OUTPUT AND WHY
// let obj1 = {
//     id: 1,
//     name: 'John',
//     surname: 'Smith'
// }
// let obj2 = {
//     id: 5,
//     isTest: false,
//     person: {
//         gender: 'man'
//     }
// }
//
// const obj = Object.assign({}, obj1, obj2);
// console.log(obj.id);
// const anotherObj = Object.assign(obj1, obj2);
// anotherObj.person.skills = ['fight'];
// console.log(obj2.person.skills)

// ===== ANSWERS====
// 5, ['flight']