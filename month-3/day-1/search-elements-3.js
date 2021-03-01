// ---------get tags---------
// put in html
// <div>
//     <div id='my-element'>
//         <span>text</span>
//     </div>
//     <div>
//         <span>text</span>
//         <span>text</span>
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
// / vortev serach@ anuma amboxj htmlov

// isk mnacac@...
//
// let elem = document.getElementById('my-element');
// console.log(elem);
//
// let textElem = elem.querySelector('.text');
// console.log(textElem);

// chenq karox ogtagorcel getElementById


// -----------------------innerhtml   innertext----------

// let main = document.getElementById('main');
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
// console.log(button);
//
// button.className = 'button';
// console.log(button);
//
// button.style.width = '100px'
// console.log(button);
//
// button.innerHTML = 'Login'
// console.log(button);
//
// let main = document.getElementById('main');
// console.log(main);
// main.append(button);

