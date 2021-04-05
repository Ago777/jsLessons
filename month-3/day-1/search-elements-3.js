// ---------get tags---------
// PUT IN HTML
// <div id="main">
//     <div>
//         <span>text</span>
//         <div>
//             <span class="text">other-text</span>
//         </div>
//     </div>
//     <div id='my-element'>
//         <span>text</span>
//         <span class="text">text1</span>
//         <div>
//             <span>text2</span>
//         </div>
//         <div class="text">
//             <span>text4</span>
//             <span class="other-text">text3</span>
//         </div>
//     </div>
// </div>
//-------------------------getElementById function-----------
// let elem = document.getElementById('my-element');
// console.log(elem);

// id-n petq elini unique, hakarak depqum kara sxal ashxati

//---------------------queryselectorall---------------------------

// let x = document.querySelectorAll('.text');
// console.log(x);
// veradarcnuma bolor et classn unecox elementneri collection@ vochte array

// for (let i = 0; i < x.length; i++) {
//     console.log(x[i])
// }
// not working
// x.push(5)

//---------------------queryselector---------------------------

// let x = document.querySelector('.text');
// console.log(x);

// veradarcnuma amenarajin handip[ac teg@]

//---------------------getElementsByClassName---------------------------

// let x = document.getElementsByClassName('text');
// console.log(x);

// veradarcnuma bolor text classov teger@

//---------------------getElementsByTagName---------------------------

// let x = document.getElementsByTagName('div');
// console.log(x);

// veradarcnuma volor diver@


//-----------------------------------
//getElementById - n karanq menak documenti vra kanchenq
// / vortev search@ anuma amboxj htmlov

// isk mnacac@...
//
// let elem = document.getElementById('my-element');
// console.log(elem);
// //
// let textElem = elem.getElementsByTagName('span');
// console.log(textElem);

// chenq karox ogtagorcel getElementById

// -------ABOUT ARRAY LIKE-----

// -----------------------innerhtml innertext----------
// setTimeout(() => {
//     let main = document.getElementById('main');
//     main.innerHTML = '<div>aasaaaaaaa</div>'
// }, 2000)

// console.log(main.innerHTML);
// console.log(main.innerText);
//
// body.innerText = 'some text';
// console.log(main);
//
// main.innerHTML = '<div><span>changed html</span></div>';
// console.log(main);

// ----------------------create element-----------
// stexcenq html js-i mijocov
// comment index.html

// let button  = document.createElement('button');
// // console.log(button);
//
// button.className = 'button';
//
// //
// button.style.width = '100px'
// // console.log(button);
// //
// button.innerText = 'Login'
// console.log(button);
//
// let main = document.getElementById('main');
// main.append(button);

// let x = document.getElementById('main');
// x.innerText = new Date();
//
// setInterval(() => x.innerText = new Date(), 1000)
