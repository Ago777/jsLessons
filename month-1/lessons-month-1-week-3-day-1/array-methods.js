//======================= METHODS=================
//--------------SPLICE (UNIVERSAL)----------

// let arr = [5, 'SOME', true];

// let returnedVal = arr.splice(1, 1, 'home'); // IS CHANGE ARRAY;
// console.log(arr);
// console.log(returnedVal); //RETURN REMOVED ELEMENTS ARRAY;

// let returnedValue = arr.splice(1);
// console.log(arr);
// console.log(returnedValue);

// let returnedValue = arr.splice(1, 2);
// console.log(arr);
// console.log(returnedValue);

// let returnedValue = arr.splice(1, 1, 'a', 'b', 'c');
// console.log(arr);
// console.log(returnedValue);

// let returnedValue = arr.splice(1, 0, 'a', 'b', 'c');
// console.log(arr);
// console.log(returnedValue);

// let returnedValue = arr.splice(-1, 0, 'a', 'b', 'c');
// console.log(arr);
// console.log(returnedValue);


//--------------SLICE----------
// let arr = [5, 'SOME', true, 'a', 154];

// let returnedVal = arr.slice(1, 4); // IS NOT CHANGE ARRAY;
// console.log(arr);
// console.log(returnedVal); //RETURN ARRAY WITH COPIED ELEMENT;


// let returnedVal = arr.slice(1);
// console.log(arr);
// console.log(returnedVal);

// let returnedVal = arr.slice(-3, -1);
// console.log(arr);
// console.log(returnedVal);

// let returnedVal = arr.slice();
// console.log(arr);
// console.log(returnedVal);

// USED FOR STRINGS ALSO

//--------------CONCAT----------
// let arr = [5, 'SOME', true, 'a', 154];


// let returnedVal = arr.concat(1, 5) // IS NOT CHANGE ARRAY;
// console.log(arr);
// console.log(returnedVal); //RETURN CONCATED ARRAY;

// CONCAT LIKE SPREAD
// let returnedVal = [...arr, ...[5,7]];
// console.log(arr);
// console.log(returnedVal);

//--------------REVERSE----------
// let arr = [5, 'SOME', true, 'a', 154];
//
//
// let returnedVal = arr.reverse() // CHANGE ARRAY;
// console.log(arr);
// console.log(returnedVal); //RETURN CHANGED ARRAY;

//--------------JOIN, SPLIT----------
// let arr = ['l', 'l', 'l', 'l', 'l'];


// let returnedVal = arr.join('a ') // IS NOT CHANGE ARRAY;
// console.log(arr);
// console.log(returnedVal); //RETURN CHANGED STRING;

// let str = 'lalalala';
// let returnedVal = str.split('')
// console.log(str);
// console.log(returnedVal);

// let str = 'John, Doe';
// let returnedVal = str.split(', ')
// console.log(str);
// console.log(returnedVal);

//--------------ARRAY.ISARRAY----------
// let arr = ['l', 'l', 'l', 'l', 'l'];
// let notArr = 7;
//
// console.log(Array.isArray(arr));
// console.log(Array.isArray(notArr));

//--------------FINDING METHODS-----
// let arr = [9, 'SOME', true];

/*let returnedVal = arr.indexOf('SOME')
console.log(returnedVal); // INDEX OD ELEMENT if no -1*/

// let returnedVal = arr.includes('SOME')
// console.log(returnedVal); // RETURN TRUE OR FALSE




//------------CONST WITH ARRAY----------
// const arr = [4,7,8,9,999,999,999];
// arr.push(515);
// console.log(arr);
// arr = [487,'asdasd'];
// console.log(x)


//--------------FOREACH---------------
// let arr = [9, 'SOME', true];
//arr.forEach();
// arr.forEach(
//     function (item, index, array) {
//         console.log(`${item} has index ${index} in [${array}]`)
//     }
// )

//--------------

// function showLog(item, index, array) {
//     console.log(`${item} has index ${index} in [${array}]`)
// }
//
// arr.forEach(showLog)
//--------------

// arr.forEach((item, index, array) => console.log(`${item} has index ${index} in [${array}]`));

//NO RETURN VALUE

//--------------FIND (FIRST VALUE)---------------
// let arr = [6, 10, 15, -5];
//
// let res = arr.find((item, index, array) => item > 7);
// console.log(res)

// let res = arr.find(function (item) {
//     return item > 7
// })
// console.log(res)
// RETURN FIRST FOUND VALUE OR UNDEFINED

//--------------FILTER (SAME AS FIND BUT FOR ALL ELEMENTS)---------------
// let arr = [6, 10, 15, -5];
//
// let res = arr.filter((item, index, array) => item > 7);
// console.log(res);
// console.log(arr)

// let res = arr.filter(function (item) {
//     return item > 7
// })
// console.log(res)
//RETURN ARRAY OF CHECKED ELEMENT

//--------------MAP---------------
// let arr = [6, 10, 15, -5];

// let res = arr.map((item, index, array) => item  * 10);
// console.log(res)

// let res = arr.map((item, index, array) => {
//     if(item > 7) {
//         return item * 10
//     }
//     return item
// });
// console.log(res)

//--------------SORT---------------
// let arr = [5, 7, 0, -8];
// let returnedValue = arr.sort((a, b) => a - b);
// console.log(arr);
// console.log(returnedValue); // CHANGE ARRAY AND RETURN CHANGED ARRAY