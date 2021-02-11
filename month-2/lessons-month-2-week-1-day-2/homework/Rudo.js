// 1) greq function vorn stanum e 2 argument 1@ object 2rd@ inchvor string ev stugum
//    ete ayd stringov key ka objectum veradarcnum e dra valuen hakarak depqum false;
//    orinak stanum e {id: 5}, 'name' ---> kveadarcnum false

// function foo(obj, str) {
//     return obj[str] || false;
// }
// console.log(foo({'id': 5 } , 'id'));

// kara lini ''

// 2) greq function vorn stanum e object ev stugum ete ka getUsername keyov function apa kanchum e ayd
//    function@ 5 vayrkyan heto
// function foo(obj) {
//     if (typeof obj.getUsername === "function") {
//         return obj.getUsername();
//     } else {
//         console.log("no function")
//     }
// }
//
// setTimeout(() => console.log(foo({
//     getUsername: function () {
//         return "function"
//     }
// })), 5000)

// i skzbane kanchvuma 5 vayrkyan heto

// 3) greq function vorn karox stanal cankacac type-i argument,
//    ev stugum ete stacvac argument@ object e ev parunakum e id keyov arjeq apa kveradarcni ayd arjeq@

// function foo(obj) {
//     if (typeof obj === "object" && obj.id) {
//         return obj.id;
//     } else {
//         return false;
//     }
// }
//
// console.log(foo({id: 96}));

// if-check@