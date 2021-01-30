// =========== OBJECTS =================

// let arr = [];
//
// let arr2 = new Array();

// let obj = {};

// let obj1 = new Object();

// console.log(typeof obj);
//---------------------------------

// --------object is key, value collection--------

// let obj = {
//     age: 15,
//     name: 'John',
//     true: 'someText',
//     15: 7,
// }

// console.log(obj);

// ----keys are strings-----
// let obj = {
//     'age': 15,
//     'name': 'John'
// }

// -------Get, Add, Delete, Change property----------

// ------Get-----
// let car = {
//     color: 'black',
//     isDriven: true,
//     doors: 4
// }
//
// let carColor = car.color;
// let isCarDriven = car.isDriven;
// let doorsCount = car.doors;
//
// console.log(carColor, isCarDriven, doorsCount)

//------Get with []------
// let user = {
//     gender: 'woman',
//     age: 20,
//     weight: 100,
//     name: 'Ketrin',
// }

// let username = user['name'];
// let age = user['age'];
// console.log(username, age);

// -----we cant get value with no string-------

// let userWeight = user[name];
// let userGender = user[age];
// console.log(userWeight, userGender);

// ---------we can get it with variable-------
// let key = 'age';
//
// console.log(user['age']);
// console.log(user[key]);

// --------we can get key which not exist-----

// console.log(user.country)

//  ---------Delete property--------
// let movie = {
//   name: 'John Wick',
//   durationHour: 2,
//   isBest: true
// }
//
// console.log(delete movie.durationHour);
//
// console.log(movie);

// ---------Set Property---------
// let obj = {
//     id: 1
// };
//
// obj.name = 'John';
// obj.canKill = true;
//
// console.log(obj)

// ------ set with []-----
// obj['name'] = 'John';
// obj['canKill'] = true;
//
// console.log(obj)

// -------we can set key, and value with variable--------
// let key = 'name';
// let value = 'John';

// const obj = {
//     key: value
// }

// const obj = {
//     [key]: value
// }

// console.log(obj);

//----------------------
//
// let key = 'name';
// let value = 'John';
//
// const obj = {}
//
// obj[key] = value;
//
// console.log(obj);

// ---------Change Property---------

// let home = {
//     rooms: 4,
//     hasPool: false,
//     wallsColor: 'red'
// };
//
// home.wallsColor = 'green';
// // or
// home['hasPool'] = true;

// -----------functions in object-----------
// let user = {
//     id: 1,
//     name: 'John',
//     gender: 'man',
//     canWalk: true,
//     getAge: function () {
//         return 18
//     },
//     // getAge: () => {return 18},
// }

// console.log(user.getAge);
// console.log(user.getAge())

// let user = {
//     id: 1,
//     name: 'John',
//     gender: 'man',
//     canWalk: true,
//     getUsername: function () {
//         return user.name
//     }
// }
//
// console.log(user.getUsername);
// console.log(user.getUsername());


// ----------------arrays in objects-----------

// let user = {
//     name: 'John',
//     gender: 'man',
//     skills: ['kill','fight']
// }
//
// console.log(user.skills);
// console.log(user.skills[0]);

// ----------------object in objects-----------

// let user = {
//     name: 'John',
//     gender: 'man',
//     skills: {
//         canFight: true,
//         killedCounts: 100,
//     }
// }
//
// console.log(user.skills);
// console.log(user.skills.killedCounts);

//------------------------------
// let user = {
//     name: 'John',
//     gender: 'man',
// }

// console.log(user.skills);
// console.log(user.skills.killedCounts);
//------------------------------------------
// function setObject(name,age) {
//    let obj = {
//        name: name,
//        age: age
//    }
//
//    return obj
// }
//
// console.log(setObject('John', 40));

// function setObject(name,age) {
//     let obj = {
//         name,
//         age
//     }
//
//     return obj
// }
//
// console.log(setObject('John', 40));

//==============IF THERE IS TIME=================
// let student1 = {
//     id: 1,
//     name: 'Rudo',
// };
//
// let student2 = {
//     id: 1,
//     name: 'Nona',
//     skills: ['html', 'js']
// }
// 1.put student2 skills to student 1
// 2.push css to student2 skills (check reference)

// --------------------------------------------


// let user = {
//     id: 1,
//     canWalk: (age) => {
//         if(age > 2) {
//             return true
//         }else {
//             return false
//         }
//     }
// }

// 1. how can i short write function,

// function canWalk(age) {
//     if(age > 2) {
//         return true
//     }else {
//         return false
//     }
// }
//
// let user = {
//     id: 1,
//     // canWalk: canWalk,
//     // canWalk,
// }
//
// console.log(user.canWalk(15));

// 2. how call function (function maybe not exist);