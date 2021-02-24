//  LEVEL UP - 1
// 1) greq function vor@ mer students objectneric cankacac meki contextum kancheluc kveradarcni
//   tvyal object@ keyeri ev valuenri texern poxac
//   ete kanchem {Rudoi objecti contetxum} -----> kveradarcni {Rudo: 'name', 20: 'age', true: 'gender', 8: 'id'}
//      functionn petq e lini lriv arandzin objectic durs
//   (esorva dasna u this@)


const students = [
    {
        id: 8,
        name: 'Rudo',
        gender: true,
        age: 20
    },
    {
        id: 7,
        name: 'Nona',
        gender: false,
        age: 21
    },
    {
        id: 3,
        name: 'Exish',
        gender: true,
        age: 22
    },
    {
        id: 6,
        name: 'Elina',
        gender: false,
        age: 22
    },
    {
        id: 4,
        name: 'Ruzanna',
        gender: false,
        age: 20
    },
    {
        id: 1,
        name: 'Mehrab',
        gender: true,
        age: 21
    },
    {
        id: 2,
        name: 'Xcho',
        gender: true,
        age: 22
    },
    {
        id: 5,
        name: 'Vahag',
        gender: true,
        age: 23
    }
];


// ------ANSWER------
// object@ poxancvela
// sxala ogtagorcvel
// foreachi syntaxi sxal
// function revertObj(student){
//     let newObj={};
//     Object.keys (students).forEach((x=>{newObj[students[x]]=x}));
//     return newObj
// }
//
//
// revertObj(students[0])

//    LEVEL UP - 2
// 2) ger function vor@ kstana mer students arrayi objectneric voreve mek@ ev kveradarcni url(aysinqq string)
//    vor@ kunena hetevyal tesq@ orinak Nonai objectn stanalu depqum
//    'http://students.com/path?id=7&name=Nona&gender=false&age=21'
//    aysinqn minchev ? nshan@ static nuyn textna dranic heto kaxvac objectic
//    (es xndirn esorva dasi het kap chuni)


// ------ANSWER------
// chishta bayc shat vat grac
// function createUrl(name){
//     let first="http://students.com/path?id=";
//     let second=`${name.id}`;
//     let third="name=";
//     let fourth=`${name.name}`;
//     let fifth="&gender=";
//     let sixth=`${name.gender}`;
//     let seventh="&age=";
//     let eight=`${name.age}`;
// return first+second+third+fourth+fifth+sixth+seventh+eight;
// }
// console.log(createUrl(students[3]));

