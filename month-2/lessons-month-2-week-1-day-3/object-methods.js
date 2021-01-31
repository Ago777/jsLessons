 // ------OBJECT METHODS   Object.assign(), hasOwnProperty(), Object.keys(), Object.values()------------

 //------------------Object.assign()----------------

 //clone object with loop
 // let obj = {
 //     name: 'John',
 //     surname: 'Wick',
 //     age: 30,
 // }
 //
 // let obj2 = {};
 //
 // for(let key in obj) {
 //     obj2[key] = obj[key]
 // }

 // clone object with assign

 // let obj = {
 //    id: 5,
 //     name: 'John'
 // }
 //
 // let newObj = Object.assign({}, obj);
 //
 // console.log(newObj);
 // console.log(newObj === obj);
 //--------------------------------------------
 // let obj1 = {
 //     id: 5,
 //     isTest: true,
 //     name: 'John'
 // }
 //
 // let obj2 = {
 //     id: 7,
 //     surname: 'Wick'
 // }
 //
 // let newObj = Object.assign(obj1, obj2);
 //
 // console.log(obj1);
 // console.log(obj1 === obj2);

 //------------------Object.values()----------------
 // let obj1 = {
 //     id: 5,
 //     isTest: true,
 //     name: 'John'
 // }

 // let values = Object.values(obj1)
 // console.log(values)

 //------------------Object.keys()----------------
 // let obj1 = {
 //     id: 5,
 //     isTest: true,
 //     name: 'John'
 // }

 // let keys = Object.keys(obj1);
 // console.log(keys)

 //------------------Object.hasOwnProperty()----------------
//  let obj1 = {
//      id: 5,
//      isTest: true,
//      name: 'John'
//  }
//
//  let hasProperty = obj1.hasOwnProperty('id');
// console.log(hasProperty)