// 1) WHAT WILL BE THE OUTPUT AND WHY
// function foo () {
//     return
//     {
//         bar: 'hello'
//     }
// }
//
// console.log(foo());
// ===== ANSWERS====
// undefined


// // 2) WHAT WILL BE THE OUTPUT AND WHY
// function foo () {
//     return {
//         name: 'John',
//         skills: ['Fight', (() => console.log(1))()]
//     }
// }
//
// console.log(foo.skills);
// console.log(foo().skills[1]);

// ===== ANSWERS====
// undefined, 1, undefined

// // 3) WHAT WILL BE THE OUTPUT AND WHY
// (function foo (name) {
//     return {
//         name,
//         skills: ['Fight', () => console.log(1)]
//     }
// })('John')
//
// console.log(foo.name);
// console.log(foo);

// ===== ANSWERS====
// error

// // 4) WHAT WILL BE THE OUTPUT AND WHY
// let obj = {};
// let x = {key: 5};
// obj[x] = x.key;
//
// console.log(obj);


// ===== ANSWERS====
// {'object Object' : 5}

// // 5) WHAT WILL BE THE OUTPUT AND WHY
// let obj = {};
// let x = {key: 5};
// let y = {key: 7};
// obj[x] = x.key;
// obj[y] = y.key;
//
// console.log(obj.x);
// console.log(obj[x]);

// ===== ANSWERS====
// undefined, 7