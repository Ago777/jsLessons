//1) greq nuyn cod@ switch case-i mijocov
// let x = 5;
// if (x > 7) {
//     console.log('big')
// } else if (x >= 5) {
//     console.log('equal')
// } else {
//     console.log('i don't know')
// }
// 1) ANSWER
// let x = 5;
// switch (true) {
//     case x > 7: {
//         console.log('big');
//         break;
//     }
//     case x >= 5: {
//         console.log('equal');
//         break;
//     }
//     default:
//         console.log('i dont know')
// }
// RUZANNA ANSWER IS: switch(x);
// NONA ANSWER IS switch(x);
// ANAHIT ANSWER IS:
// let x = 5;
// switch (x)
// {
//     case x > 7:
//     console.log('big');
//     break;

//     case x = 5:
//     console.log('equal');
//     break;

//     default:
//     console.log('i dont know');
// }


//---------------------------------------------------------

//2) greq nuyn cod@ if else-i mijocov
// let y = 'some';
// switch (y) {
//     case 'some text':
//         console.log('some text');
//         break;
//     case 'some':
//         console.log('some');
//         break;
//     default:
//         console.log('no text')
// }

// 2) ANSWER
// let y = 'some';
// if (y === 'some text') {
//     console.log('some text')
// } else if (y === 'some') {
//     console.log('some');
// } else {
//     console.log('no text')
// }

//RUZANNA ANSWER IS:
// if (y = 'some text'){
//     console.log('some text') ;
// } else if (y = 'some'){
//     console.log('some');
// }else {
//     console.log('no text')
// }


//---------------------------------------------------------

// 3) result popoxakanin veragreq anun@ ete ayn erkar e 4 ic hakarak depqum veragreq 'name is long' ev tpeq result@
// let name = 'Jhon';
// let result = null;

//3) ANSWER
// if (name.length > 4) {
//     result = name;
// } else {
//     result = 'name is long'
// }
// console.log(result);
// OR
// result = name.length > 4 ? name : 'name is long';
// console.log(result)
// RUZANNA ANSWER CAN BE SHORT
// NONA ANSWER CAN BE SHORT


//---------------------------------------------------------


// 4) haytarareq 3 popoxakan anun azganun tariq; ev greq script vorn tpum e 'done' ete bolor popoxakanner unen arjeq;

//4) ANSWER
// let name = 'Jhon';
// let surname = 'Doe';
// let age = 30;
// name && surname && age && console.log('done');

// RUZANNA ANSWER IS:
// 1. exanak
// let done = 'Ruzanna'&&'Simonyan'&& 21;
//     console.log('done')
// //2.exanak
// if (name && surname && 21){
//     console.log('done')
// }
// RUDO ANSWER CAN BE SHORT
// NONA ANSWER CAN BE SHORT
// ANAHIT ANSWER CAN BE SHORT



//-----------------------------------


// 5) result popoxakanin veragreq anun@ ete ayn ka hakarak depqum azganun@;
//       let username = 'Jhon';
//       let surname = 'best';
//       let result;

// 5) ANSWER
//       let username = 'Jhon';
//       let surname = 'best';
//       let result;
// result = username || surname;
//RUZANNA ANSWER IS:
// if ( username){
//     result = username;
// }else {
//     result = surname;
// }

// NONA ANSWER CAN BE SHORT

//RUDO ANSWER IS:
//DONT DO THIS CHECK
// if (username != undefined) {
//   result = username;
// } else {
//   result = surname;
// }
// console.log(result);
// username != undefined ? (result = username) : (result = surname);
// console.log(result);

// wrong answer
//result = surname ? surname : username;

// only true anser
//result = surname || username;



//-----------------------------------------

// 6) greq script vor kstugi ete user@ uni anun apa ayd anvann avelacni 777 ev tpi ayn;
//    ete anun chuni ev tariq@ poqr e 18-ic tox stugi ete 16 kam 17 tarekan e apa tox tpi 'soon'
//    mnacac bolor depqerum tox tpi useri tariq@ bayc string typov;
//    let userName = 'Jhon';
//    let userAge = 17;

// 6) ANSWER
// let userName = 'Jhon';
// let userAge = 17;
// if (userName) {
//     userName += 777;
//     console.log(userName)
// }else if(userAge < 18) {
// userAge >= 16 || userAge <=17 ? console.log('soon') : null;
// }else {
//     console.log(userAge.toString())
// }
// RUZANNA ANSWER IS BEST
// RUDO ANSWER IS:
// let userName = "Jhon";
// let userAge = 17;
// if (userName) {
//   console.log(userName + 777);
// } else if (!userName && (userAge === 16 || userAge === 17)) {
//   console.log("soon");
// } else {
//   console.log(userAge.toString());
// }

// ANAHIT ANSWER IS SAME RUDO ANSWER:
//    if (userName)
//    {
//        console.log(userName + 777)
//    }
//    if (!userName && userAge < 18)
//     {
//        if (userAge >=16 || userAge <=17)
//        console.log('soon')
//     }
//     else{
//        console.log(userAge.toString());

//     }



//-----------------------------------------






// 7) greq script vor@ kstugi ete popoxakan@ string e ev datark che apa kvercni stringi meji tiv@
//    ev kstugi ete zuyg e ktpi;
//    let numStr = '124String';

// 7) ANSWER
// let numStr = '124String';
// if (typeof numStr === 'string' && numStr) {
//     let num = parseInt(numStr);
//     num % 2 === 0 ? console.log(num) : null;
// }


// RUZANNA ANSWER IS:
// let numStr = '124String';
// if (typeof numStr === 'String' && numStr != '') {
//     let n = parseInt(numStr);
//     if (n % 2 === 0) {
//         console.log(n)
//     }
// }
