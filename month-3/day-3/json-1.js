// -------------------JSON---------------
// JSON (JavaScript Object Notation)
// json@ arjeqneri ev objectneri nerkayacman format e (dzev)
// json@ iranic nerkayacnuma uxxaki string aysinqn arjenq nerkayacnuma stringi tesqov

// -----------JSON STRINGIFY----------

// let obj = {
//     x: 5,
//     y: 7,
// }
//
// let json = JSON.stringify(obj);
// console.log(json);

// aranc ays methodi menq chenq karox objectn tesnel stringi tesqov
// chen qkarox uxarkel backend kam stanal backandic object

// ---------------------------
// let obj = {
//     skills: [1,2,3],
//     id: 7,
//     otherObj: {
//         name: 'John'
//     }
// }
// //
// let json = JSON.stringify(obj);
// console.log(json);
// karanq ogtagotconq grete bolor typeri vra bayc himnakanum ogtagorcvum e objectneri hamar

// jsoni kanonner

// 1. chka '' senc kavichkeq partadir "" drvum en miayn krknaki
// 2. Json@ js-i het kap chuni
// 3. antesuma bolot methodnern u undefined arjeqern

// let obj = {
//     skills: [1,2,3],
//     id: 7,
//     otherObj: {
//         name: 'John'
//     },
//     method: function () {},
//     x: undefined
//
// }
// //
// let json = JSON.stringify(obj);
// console.log(json);

//----------------------
// let obj = {
//     method: function () {},
//     x: undefined
//
// }
//
// let json = JSON.stringify(obj);
// console.log(json);

//--------------------2rd 3rd argumentner---------
// let obj = {
//     skills: [1, 2, 3],
//     otherObj: {name: 'John'},
//     id: 7
//
// }
// //
// let json = JSON.stringify(obj, ['id', 'skills']);
// console.log(json);
// 2rd argumentn arrayov talis enq ayn keyern voronq petqa jsoni mej linen

//------------------------------
// let obj = {
//     skills: [1, 2, 3],
//     otherObj: {name: 'John'},
// }
// //
// let json = JSON.stringify(obj,null,2);
// console.log(json);
// 3rd argumentn talisa probelner zut harmar kardalu hamar

//-------------------JSON PARSE---------------------
// anuma hakarak gorcoxutyun@
// let obj = [5,7]
// //
// let json = JSON.stringify(obj);
// console.log(json);
// //
// //
// let parsedJson = JSON.parse(json);
// console.log(parsedJson);

// cankacac object vor stanum enq backic kam poxancvuma da katarvuma jsoni tesqov
