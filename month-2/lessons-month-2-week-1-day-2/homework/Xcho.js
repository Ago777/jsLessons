// 1) greq function vorn stanum e 2 argument 1@ object 2rd@ inchvor string ev stugum
//    ete ayd stringov key ka objectum veradarcnum e dra valuen hakarak depqum false;
//    orinak stanum e {id: 5}, 'name' ---> kveadarcnum false
// //
// function foo (obj , str) {
//     if (obj[str]) {
//
//         console.log(obj[str])
//
//     } else {
//         console.log(false)
//     }
// }
//
//
// function foo(obj , str) {
//
//     obj[str] ? console.log(obj[str]): console.log(false)
// }
// foo( {bob: 7} , '66' )

// function foo(obj , str) {
//
//     return obj[str] || false
// }
//
// console.log(foo( {bob: 7} , 'bob' )

// nuyn xndirn mi qani tarberakov
// veradarcnel vochte tpel
// check@ sxal



// 2) greq function vorn stanum e object ev stugum ete ka getUsername keyov function apa kanchum e ayd
//    function@ 5 vayrkyan heto
// function foo(obj) {
//
// if (obj.getUsername){
//
//    return obj.getUsername();
//
//
// } else {
//     console.log(8)
// }
//
// }
// setTimeout(() => console.log(foo({getUsername : function() {return "Good" } }) ), 5000)

// foo kanchvuma 5 vayrkyan ehto
// check@ sxal

// 3) greq function vorn karox stanal cankacac type-i argument,
//    ev stugum ete stacvac argument@ object e ev parunakum e id keyov arjeq apa kveradarcni ayd arjeq@


// function foo(a) {
//     if ( typeof a === 'object') {
//
//     } else {
//         console.log(a['id'])
//
//
//     }
// }
// foo({id: 777});
//
// function objOrNot(someArg) {
// 	return typeof someArg === 'object' && someArg.id;
// }
// let obj = {
// 	id: 28,
// 	name: 'Alex',
// }
// console.log(objOrNot(obj));

// arajin@ >???
// null em poxancum
