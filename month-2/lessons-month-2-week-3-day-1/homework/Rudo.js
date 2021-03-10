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

// ------ANSWER------
// sax tarberaknern chishta bayc erkar
// function getObject() {
    // let newObj = {};
    // let a = Object.entries(this);
    // a.forEach(element => {
    //     newObj[element[1]] = element[0];
    // });
    // let newObj = {};
    // let a = Object.entries(this).reduce((acc, cur) => {
    //     newObj[cur[1]] = cur[0];
    // }, newObj)
    // return newObj;
    //
    // let newObj = {};
    // let array = Object.values(this);
    // let array1 = Object.keys(this);
    //
    // array.forEach((element, index) => {
    //     newObj[element] = array1[index];
    // });
    // return newObj;
// }

// console.log(getObject.call(students[0]));

//    LEVEL UP - 2
// 2) ger function vor@ kstana mer students arrayi objectneric voreve mek@ ev kveradarcni url(aysinqq string)
//    vor@ kunena hetevyal tesq@ orinak Nonai objectn stanalu depqum
//    'http://students.com/path?id=7&name=Nona&gender=false&age=21'
//    aysinqn minchev ? nshan@ static nuyn textna dranic heto kaxvac objectic
//    (es xndirn esorva dasi het kap chuni);

// ------ANSWER------
// chisht
// function getUrl(student) {
//     return `http://students.com/path?id=${student.id}&name=${student.name}&gender=${student.gender}&age=${student.age}`
//
// }
// console.log(getUrl(students[0]));


