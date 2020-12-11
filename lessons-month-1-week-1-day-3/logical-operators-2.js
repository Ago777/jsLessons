// ---------------- LOGIC OPERATORS &&, ||, !  ------------
// ---- || how its working----

// -----RETURN TRUE IF ONE OF VALUES ARE TRUE-----
// ------RETURN FIRST TRUE VALUE--------

// console.log(true || false);
// console.log(false || true);
// console.log(false || false);
// console.log(true || true);

// --convert to bool
// console.log(1 || 0);
// console.log(0 || 1);
// console.log('string' || null);
// console.log(null || undefined);

// let result = null || 10 || false || 'string';
// console.log(result);

// let age = 20;
// let result = age > 25 || age > 20 || age > 17 || age > 10;
// let result = false || false || true || true;
// console.log(result);

// ------IN IF STATEMENT------
// let age = 20;
// if (age > 20 || age <= 20) {
//     console.log('its working')
// }

// let age = 20;
// const isYoung = true;
// if (age > 20 || age <= 19 || isYoung) {
//     console.log('its working')
// }

// show username else show surname else show no name;
// let username = null;
// let surname = null;
//
// if (username) {
//     console.log(username)
// } else if (surname) {
//     console.log(surname)
// } else {
//     console.log('no name')
// }

// --- OR---

// let result = username || surname || 'no name';
// console.log(result);


// ----------------- && ----------------
// -----RETURN TRUE IF All VALUES ARE TRUE-----
// ------RETURN FIRST FALSE VALUE OR RETURN LAST TRUE VALUE--------

// console.log(true && false);
// console.log(false && true);
// console.log(false && false);
// console.log(true && true);

// --convert to bool
// console.log(1 && 0);
// console.log(0 && 1);
// console.log('string' && null);
// console.log(null && undefined);

// let result = null && 10 && false && 'string';
// console.log(result);

// let age = 20;
// if (age > 18 && age <= 20) {
//     console.log('its working')
// }

// let age = 20;
// const isYoung = true;
// if (age > 10 && age <= 20 && isYoung) {
//     console.log('its working')
// }

// let username = 'Jhon';
// if(username) {
//     console.log(username)
// }

// -----OR----
// username && console.log(username);

// -----OR----
// let age = 20;
// age > 18 && console.log('yes');

//priority && > ||


// -----------|| and && TOGETHER------
// ------&& HAS A HIGH PRIORITY----

// let result = 7 || 5 && 'string' || undefined;
// let result = (7 || 5) && ('string' || undefined);
// console.log(result);

// ----- ! -----

// 1. make to bool
// 2. return opposite value

// let x = 5;
// let result = !x;
// console.log(result);

// let x = null;
// let result = !!x;
// console.log(result);

// let username = 'Jhon';
// if(username) {
//     console.log(username)
// }
// if(!!username) {
//     console.log(username)
// }


