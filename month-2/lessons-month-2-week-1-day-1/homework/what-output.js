// // 1) WHAT WILL BE THE OUTPUT AND WHY

// let x = 5;
// setTimeout(() => console.log(x), 1000);
// x += 1;

// ===== ANSWERS====
// 6


// 2) WHAT WILL BE THE OUTPUT AND WHY

// let x = 0;
// setTimeout(() => console.log(x), 0);
// x++;

// ===== ANSWERS====
// 1

// 3) WHAT WILL BE THE OUTPUT AND WHY

// function f(num) {
//     console.log(num);
//     clearInterval(timerId)
// }
//
// let x = 2;
//
// let timerId = setInterval(() => f(x), x * 1000);

// ===== ANSWERS====
// 2

// 4) WHAT WILL BE THE OUTPUT AND WHY
// function setTimer(canSet) {
//     console.log(1)
//     if(canSet) {
//         console.log(2)
//         setTimeout(() => setTimer(false), 1000)
//     }else {
//         console.log('this is recursion')
//     }
// }
//
// setTimer(true)

// ===== ANSWERS====
// 1,2,1,'this is recursion'

// 5) WHAT WILL BE THE OUTPUT AND WHY ---> karaq bacatrutyun@ chgreq bayc partadir petqa bacatreq stugeluc

// for (var i = 0; i < 5; i++) {
//     setTimeout(() => console.log(i), 2000)
// }

// 5 5 5 5 5



