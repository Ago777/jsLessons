// 1) WHAT WILL BE THE OUTPUT AND WHY
// const obj = {
//     name: 'John',
//     surname: 'Wick',
// }
//
// let fullName = `${obj["name"]} ${obj[surname]}`;
//
// console.log(fullName);

// ===== ANSWERS====
// error

// 2) WHAT WILL BE THE OUTPUT AND WHY
// const obj = {
//     name: 'John',
//     surname: 'Wick',
// }
//
// obj['age'] = 30;
// obj.age += 10;
// delete obj.surname;
//
// console.log(obj);

// ===== ANSWERS====
// {name: 'John', age: 40}


//3) WHAT WILL BE THE OUTPUT AND WHY
// const obj1 = {
//     id: 1,
// }
//
// const obj2 = obj1;
//
// obj2.isTest = true;
//
// obj1.isTest = false;
//
// console.log(obj1.isTest);
// console.log(obj2.isTest);
// ===== ANSWERS====
// false false


//4) WHAT WILL BE THE OUTPUT AND WHY
// const obj = {
//     name: '',
//     checkIsTest: (isTest) => console.log(isTest),
//     isTest: false,
// }
//
// console.log(typeof obj.checkIsTest);
// obj.checkIsTest(obj.isTest);

// ===== ANSWERS====
// function false


//  5) WHAT WILL BE THE OUTPUT AND WHY

// function hasName(name) {
//    return !!name
// }
//
// const obj = {
//     name: 'John',
//     hasName,
// }
//
// console.log(obj.hasName(obj.name));

// ===== ANSWERS====
// true

// 6) WHAT WILL BE THE OUTPUT AND WHY
// const obj1 = {
//     id: 1,
//     skills: ['js', 'css']
// }
//
// const obj2 = {
//     id: 2,
//     skills: ['js', 'css', 'html']
// }
//
// obj1.skills.push(obj2['skills'][2]);
//
// for (let i = 0; i < obj1.skills.length; i++) {
//     console.log(obj1.skills[i])
// }
//
// console.log(obj2.length);

// ===== ANSWERS====
// js, css, html, undefined

// 7) WHAT WILL BE THE OUTPUT AND WHY
// const obj = {
//     id: 0,
//     skills: {
//         canEdit: true,
//         canInsert: false,
//     }
// }
//
// const skills = obj['skills'];
//
// if(skills.canUpdate) {
//     console.log(obj.skills.canEdit)
// }

// ===== ANSWERS====
// nothing

// 8) WHAT WILL BE THE OUTPUT AND WHY

// function f(key) {
//     const obj = {
//         name: 'John',
//         id: 5,
//     }
//
//     if(obj[key] && obj[key] > 1) {
//         return obj['name']
//     }else {
//         obj[key] = null
//     }
//
//     return obj
//
// }
//
// console.log(f('id'));
// console.log(f('surname'));

// ===== ANSWERS====
// john, name: "John", id: 5, surname: null}