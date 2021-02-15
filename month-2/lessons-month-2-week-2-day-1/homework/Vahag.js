// 1) LEVEL UP - 1
//    uneq angleren aybuben@ arrayov,(es chem grum duq greq) greq function vor kstana tar ev kveradarcno object
//    vortex vorpes key nshva klini tar@ isk vorpes value te vorerord tarn e aybubenum
//    orinak f('a') ---> {a: 1}

// ------ANSWER------
// checker@ chka

// let engLetters = ['a', 'b', 'c', 'd','e','f','g','h','i','j','k','l','m','n',
//     'o','p','q','r','s','t','u','v','w','x','y','z'];
// function engLettersNumbers(letter){
//     return {
//         [letter]: engLetters.indexOf(letter)+1
//     }
// }
// console.log(engLettersNumbers('z'));

// --------------------------LEVEL-0.75--------------------------


//    LEVEL UP - 2
// 2) greq function vorn stanum e object ev veradarcnum array vortex objecti amen key valuen krkin array e;
//    orinak f({a:1, b: 2, c: 3}) ------>>> [[a,1],[b,2],[c,3]]

// ------ANSWER------
// checker@ chka,
// method petq cher
// ete daje ogtagorcel eiq karaiq karch greiq aranc return aranc pakagcer

// function forArrReturn(obj){
//     return Object.entries(obj)
// }
// console.log(forArrReturn({a:1, b: 2, c: 3}))

//------------------LEVEL 1---------------

// level up - 3
// 2) greq function vorn kstana  arajin argumentov nshvac array@
//    ev  2 rd argument object, vortex klini mek key-value--> name, gender, kam age,
//    orinak {name: 'Rudo'} kam {gender: true} kam {age: 21} ev kveradarcni
//    array ayn usanoxneri objectnerov voronq hamapatasxanum en 2rd argumentov trvac parametrin
//    orinak {gender: false} stanalu depqum kveradarcni [{Nona-i}, {Elina-i}, {Ruzanna-i}] objectner@
//    ete vochmiban chi hamapatasxanum datark array

// const students = [
//     {
//         name: 'Rudo',
//         gender: true,
//         age: 20
//     },
//     {
//         name: 'Nona',
//         gender: false,
//         age: 21
//     },
//     {
//         name: 'Exish',
//         gender: true,
//         age: 22
//     },
//     {
//         name: 'Elina',
//         gender: false,
//         age: 23
//     },
//     {
//         name: 'Ruzanna',
//         gender: false,
//         age: 20
//     },
//     {
//         name: 'Mehrab',
//         gender: true,
//         age: 21
//     },
//     {
//         name: 'Xcho',
//         gender: true,
//         age: 22
//     },
//     {
//         name: 'Vahagn',
//         gender: true,
//         age: 23
//     }
// ];

//---------ANSWER--------
// checker@ chka
// xndri@ bardutyun@ meca
// studnets@ argumentov stacela bayc loopa frum eli studentsi vra drsi
// else-@ animatsa

// function allStudents(arr, obj){
//     let finalArr= [];
//     for(let i = 0; i < students.length; i++){
//         if (typeof students[i] === 'object' && students[i] !== null ){
//             for (let key in students[i]){
//                 students[i][key] === obj[key] ? finalArr.push(students[i]):finalArr
//             }
//         }
//     }
//     return finalArr
// }
//
// console.log(allStudents(students,{name: 'Vahagn'}));

// --------------------------LEVEL-1.5--------------------------
