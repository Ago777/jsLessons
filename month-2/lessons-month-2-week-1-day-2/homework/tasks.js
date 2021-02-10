// 1) greq function vorn stanum e 2 argument 1@ object 2rd@ inchvor string ev stugum
//    ete ayd stringov key ka objectum veradarcnum e dra valuen hakarak depqum false;
//    orinak stanum e {id: 5}, 'name' ---> kveadarcnum false
//
// const f = (obj, str) => typeof obj[str] !== "undefined" ? obj[str] : false;
//
// console.log(f({id: 1}, 'id'));

// 2) greq function vorn stanum e object ev stugum ete ka getUsername keyov function apa kanchum e ayd
//    function@ 5 vayrkyan heto
// function f(obj) {
//     if(typeof obj.getUsername === 'function') {
//         setTimeout(obj.getUsername, 5000)
//     }
// }
//
// f({getUsername: () => console.log(5)});

// 3) greq function vorn karox stanal cankacac type-i argument,
//    ev stugum ete stacvac argument@ object e ev parunakum e id keyov arjeq apa kveradarcni ayd arjeq@

// function f(arg) {
//     if(typeof arg === 'object' && arg !== null) {
//         return arg.id
//     }
//     if(typeof arg === 'object' && arg !== null && !Array.isArray(arg)) {
//         return arg.id
//     }
// }