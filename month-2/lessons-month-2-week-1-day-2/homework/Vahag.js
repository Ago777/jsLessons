// 1) greq function vorn stanum e 2 argument 1@ object 2rd@ inchvor string ev stugum
//    ete ayd stringov key ka objectum veradarcnum e dra valuen hakarak depqum false;
//    orinak stanum e {id: 5}, 'name' ---> kveadarcnum false

// function checkTheKey(obj, str) {
//     let keys = Object.keys(obj);
//     for (let i = 0; i < keys.length; i++) {
//         str === keys[i]? console.log(true) : false
//     }
// }
//
// let result = checkTheKey({name: 'vahagn', age: 31}, 'name')
// console.log(result);

// hetaqrqir lucum, bayc petq chi
// return@ sxala

// 2) greq function vorn stanum e object ev stugum ete ka getUsername keyov function apa kanchum e ayd
//    function@ 5 vayrkyan heto
// function onlyObj(obj) {
//     let keys = Object.keys(obj);
//     for (let i = 0; i < keys.length; i++) {
//         keys[i] === obj.getUsername ? setTimeout(obj.getUsername, 5000) : console.log('no, there is not ')
//     }
// }
//
// let result = onlyObj({
//     name: 'vahagn', age: 31, getUsername: function () {
//         console.log('Catch me i 5 seconds')
//     }
// })
// console.log(result);

//object@ grel irar tak
// petq cher eli array,
// check@ sxala functioni

// function onlyObj(obj) {
//     let keys = Object.keys(obj);
//     for (let i = 0; i < keys.length; i++) {
//         keys[i] === keys.getUsername ? setTimeout(keys.getUsername, 5000)
//     }
//
// }
//
// let result = onlyObj({name: 'vahagn', age: 31, getUsername: function(){ console.log('Catch me in 5 seconds')},);
//
// console.log(result);

// nuyn xndirn aveli shat sxalov
