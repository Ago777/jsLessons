//  LEVEL UP - 1
// 1) greq function vor@ mer students objectneric cankacac meki contextum kancheluc kveradarcni
//   tvyal object@ keyeri ev valuenri texern poxac
//   ete kanchem {Rudoi objecti contetxum} -----> kveradarcni {Rudo: 'name', 20: 'age', true: 'gender', 8: 'id'}
//      functionn petq e lini lriv arandzin objectic durs
//   (esorva dasna u this@)

// const students = [
//     {
//         id: 8,
//         name: 'Rudo',
//         gender: true,
//         age: 20
//     },
//     {
//         id: 7,
//         name: 'Nona',
//         gender: false,
//         age: 21
//     },
//     {
//         id: 3,
//         name: 'Exish',
//         gender: true,
//         age: 22
//     },
//     {
//         id: 6,
//         name: 'Elina',
//         gender: false,
//         age: 22
//     },
//     {
//         id: 4,
//         name: 'Ruzanna',
//         gender: false,
//         age: 20
//     },
//     {
//         id: 1,
//         name: 'Mehrab',
//         gender: true,
//         age: 21
//     },
//     {
//         id: 2,
//         name: 'Xcho',
//         gender: true,
//         age: 22
//     },
//     {
//         id: 5,
//         name: 'Vahag',
//         gender: true,
//         age: 23
//     }
// ];
//
// ------ANSWER------
// newObject to ----> this
// function returnSwitchedObject(){
//     let obj = {};
//     for (let key in this){
//         obj[this[key]] = key;
//     }
//     return obj;
// }
//
// let newObject = students[1];
// let functionWithContext = returnSwitchedObject.bind(newObject);
// console.log(functionWithContext());

// newObject = students[2];
// let anotherWithContext = returnSwitchedObject.bind(newObject);
// console.log(anotherWithContext());


//    LEVEL UP - 2
// 2) ger function vor@ kstana mer students arrayi objectneric voreve mek@ ev kveradarcni url(aysinqq string)
//    vor@ kunena hetevyal tesq@ orinak Nonai objectn stanalu depqum
//    'http://students.com/path?id=7&name=Nona&gender=false&age=21'
//    aysinqn minchev ? nshan@ static nuyn textna dranic heto kaxvac objectic
//    (es xndirn esorva dasi het kap chuni)



// ------ANSWER------
// erkara
// function returnUrl(object){
//     if(typeof object !== 'object' || object === null || Array.isArray(object)) return;
//     let url = 'http://students.com/path?';
//     for (let key in object){
//         url += key + '=' + object[key].toString() + '&';
//     }
//     return url.slice(0,-1);
// }
//
// console.log(returnUrl(students[1]));

