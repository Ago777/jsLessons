// -------------------DEFINE PROPERTY-------------------------

// all keys has descriptors
// -->enumerable(show in loop) , writable(can change), configurable(can delete and change descriptors) default all true

//  let obj = {
//      name: 'John',
//      surname: 'Wick',
//      age: 30,
//  }
//
// const descriptors = Object.getOwnPropertyDescriptor(obj, 'name');
// console.log(descriptors);

//-------we can set descriptors--------
// let obj = {
//     name: 'John',
//     surname: 'Wick',
//     age: 30,
// }
//
// Object.defineProperty(obj, 'age', {
//     writable: false,
//     configurable: false
// });
// delete obj.age
// console.log(obj);

//---------we cant redefine property------
// Object.defineProperty(obj, 'age', {
//     writable: true,
//     configurable: true
// });


//-------------------------------------

// let obj = {
//     name: 'John',
//     surname: 'Wick',
//     age: 30,
// }
//
// Object.defineProperty(obj, 'surname', {
//     enumerable: false,
// });

// console.log(obj);
// console.log(obj.surname);

// for (let key in obj) {
//     console.log(obj[key])
// }

// ----------create in empty object---------
// let obj = {}
// Object.defineProperty(obj, 'name', {
//     value: 'John',
//     writable: false,
// });
//
// console.log(obj);