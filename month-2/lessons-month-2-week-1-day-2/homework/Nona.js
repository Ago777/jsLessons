// 1) greq function vorn stanum e 2 argument 1@ object 2rd@ inchvor string ev stugum
//    ete ayd stringov key ka objectum veradarcnum e dra valuen hakarak depqum false;
//    orinak stanum e {id: 5}, 'name' ---> kveadarcnum false

// function returnStringValue(obj , string){
//     return !!obj[string];
// }
// console.log(returnStringValue({age: 19 , name: null} , 'name'));

// kara lini datark ''

// 2) greq function vorn stanum e object ev stugum ete ka getUsername keyov function apa kanchum e ayd
//    function@ 5 vayrkyan heto

// function callGetUsername(obj){
//     if(obj['getUsername']){
//         return setTimeout(obj.getUsername('John'), 5000);
//     }
// }
// console.log(callGetUsername({name: 'Nona' , age: 19 , getUsername: (username) =>  {return username}}));

//Chem jogum xi chi ashxatum
// return, callback call, no console log

// 3) greq function vorn karox stanal cankacac type-i argument,
//    ev stugum ete stacvac argument@ object e ev parunakum e id keyov arjeq apa kveradarcni ayd arjeq@

// function checkObject(argument){
//     if(typeof argument === 'object' && argument['id']) return argument['id'];
// }
//
// console.log(checkObject({id: 5 , age: 20}));

// kara lini null