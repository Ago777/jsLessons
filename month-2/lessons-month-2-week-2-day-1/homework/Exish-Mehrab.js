// 1.es dasic sksac talu em qich bayc djvar xndirner easyi - medium leveli
// 2.gnahatveluya dzer lucum@ amen dasic heto levels js bajnum grvi micnhev kursi verj.
// 3.gnahatveluya kodi maqrutyunn karchutyun@ u chisht linel@, googlac xndirnern 0 en)
// 4.lucumneerum hashvi areq vor ete urish inchvor arjeq poxancem chpiti traqi
// 5.functionic resultat@ misht return eq anum console.log areq menak functioni kanch@


// 1) LEVEL UP - 1
//    uneq angleren aybuben@ arrayov,(es chem grum duq greq) greq function vor kstana tar ev kveradarcno object
//    vortex vorpes key nshva klini tar@ isk vorpes value te vorerord tarn e aybubenum
//    orinak f('a') ---> {a: 1}

// ------ANSWER------

// function letterFromArrToObject(...rest) {
// 	let arr = ['alfabet','a','b','c','d','e','f','g','h','i','j','k','l',
// 				'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// 	let obj = {};
// 	rest.forEach(item => obj[item] = arr.indexOf(item.toLowerCase()));
// 	return obj
// }
// console.log(letterFromArrToObject('E','u','h','o','c'));

//    LEVEL UP - 2
// 2) greq function vorn stanum e object ev veradarcnum array vortex objecti amen key valuen krkin array e;
//    orinak f({a:1, b: 2, c: 3}) ------>>> [[a,1],[b,2],[c,3]]


// ------ANSWER------

// function fromObjectToArray(obj) {
// 	if(Array.isArray(obj) || typeof obj !== 'object' || obj === null) return 'Is not object'
// 		let arr = [];
// 	for(let key in obj) {
// 		arr.push(new Array(key, obj[key]));
// 	}
// 	return arr
// }
// let obj = {a:1,b:2,c:3,d:4};
// console.log(fromObjectToArray(obj));

// level up - 3
// 2) greq function vorn kstana  arajin argumentov nshvac array@
//    ev  2 rd argument object, vortex klini mek key-value--> name, gender, kam age,
//    orinak {name: 'Rudo'} kam {gender: true} kam {age: 21} ev kveradarcni
//    array ayn usanoxneri objectnerov voronq hamapatasxanum en 2rd argumentov trvac parametrin
//    orinak {gender: false} stanalu depqum kveradarcni [{Nona-i}, {Elina-i}, {Ruzanna-i}] objectner@
//    ete vochmiban ch    i hamapatasxanum datark array

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
//         age: 22  ..
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
//         name: 'Vahag',
//         gender: true,
//         age: 23
//     }
// ]

//---------ANSWER--------



// let a>b>c>d>e>f>g>h>i>j>k>l>m>n>o>p>q>r>s>t>u>v>w>x>y>z = 0;
// console.log(g = q);