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
// -----ANSWERS-----
//Elina & Nona answer is switch(x === 5) {}
// Egish-Mehrab answers change statement case 5: case 7

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

// -----ANSWERS-----
// Elina write else in new line


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

// ---ANSWERS----
// Elina Answer is:
//  let name = 'Jhon';
//  let result = null;
//  someString[someString.length - 1];
// if([name.length>4]){
//     console.log(result=name);
// }
// else{
//    console.log(result="name is long");
// }

// Nona answer is
//  let name = 'Jouuhn';
//  let result = null;
//  if(name.length > 4 ){
//      result = name;
//  } else {
//      result = 'name is long';
//      console.log(result);
//  }

// Egish-Mehrab answer is:
// switch (name.length) {
// 	case 1:
// 	case 2:
// 	case 3:
// 	case 4:
// 		result = name;
// 		console.log(result);
// 		break;
// 	default:
// 		result = 'Name is long';
// 		console.log(result);
// }
//---------------------------------------------------------


// 4) haytarareq 3 popoxakan anun azganun tariq; ev greq script vorn tpum e 'done' ete bolor popoxakanner unen arjeq;

//4) ANSWER
// let name = 'Jhon';
// let surname = 'Doe';
// let age = 30;
// if(name && surname && age) {
//     console.log('done')
// }
// or
// if (name && surname && age) console.log('done')
//or

// name && surname && age && console.log('done');

//----ANSWERS----
// Elina answer is:
// let name="Elina"
// let surname="Nersesyan"
// let age=20
// if (name!== null){
//     console.log("done");
// }
// if(surname!== null){
//     console.log("done");
// }
// if(age!== null){
//     console.log("done");
// }
// 1); 2) null check

// Nona Answer is long

// Egish-Mehrab answer is:
// let tariq = '';

//-----------------------------------

// 5) result popoxakanin veragreq anun@ ete ayn ka hakarak depqum azganun@;
//       let username = 'John';
//       let surname = 'best';
//       let result;

// 5) ANSWER
//       let username = 'Jhon';
//       let surname = 'best';
//       let result;
// if(username) {
//     result = username
// }else if(suname) {
//     result = surname
// }
//or
// result = username ? username : surname;
//or
// result = username || surname;

// ---ANSWERS
// Elina Answer is

//   if(username!=="undefined"){
//        console.log(result=username);
//   }
//   else{
//       console.log(result=surname)
//   }

// Nona Ruzanna answers
// username ? result = username : result = surname

// Egish-Mehrab answers is:

// if (name) {
// 	result = name;
// 	console.log(result);
// } else if (surename) {
// 	result = surename;
// 	console.log(result);
// } else {
// 	result = 'Tvyalner@ bacakayum en';
// 	console.log(result);
// }

//or xi chi ashxatum

// switch (true) {
// 	case Boolean(username):
// 		result = username;
// 		console.log(result);
// 		break;
// 	case Boolean(surname):
// 		result = surname;
// 		console.log(result);
// 		break;
// 	default:
// 		result = 'Tvyalner@ bacakayum en';
// 		console.log(result);
// }
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
// userAge === 16 || userAge ===17 ? console.log('soon') : null;
// }else {
//     console.log(userAge.toString())
// }

// ---ANSWERS
// Elina Answer is

//  if(userName!=="undefined"){
//      console.log(userName+777);
//  }
//  else if(userName=="undefined") (userAge<18);{
//      if (userAge=16||17){
//       console.log("soon")
//      }
//    }
// else{
//      console.log(userAge.toString)
//  }

// Ruzanna answer is:
// let userName = 'Jhon';
// let userAge = 17;
// if (userName){
//     console.log(userName + 777);
// }else if ((userAge < 18) && userAge === 16 || userAge === 17){
//     console.log('soon');
// }else{
//     console.log(userAge.toString());
// }
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

// ---ANSWERS
// Elina Answer is
//     let numStr = '124String';
// if(numsStr!==0 && numStr!=="undefined") {
//     console.log(parseInt(numStr));
// }

// Nona answer is:
//    let numStr = '124String';
//     if (typeof numStr === 'string' && numStr === true){
//         if(parseInt(numStr) % 2 === 0){
//             console.log(parseInt(numStr));
//         }
//     }

//Ruzanna answer is:
// if (numStr && typeof numStr === 'String' && parseInt(numStr) % 2 === 0){
//    console.log(parseInt(numStr));
// }