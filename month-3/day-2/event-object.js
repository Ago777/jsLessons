// ======================== event object==================
// erb texi unenum event browsern stexuma object vori mej
// ka amboxj infon incha texi unecel vor tagi vra ev ayln
// u vorpes argument poxancuma mer handlerin

//put in html
// <div class='main'>
//     <div id='myDiv'>div</div>
//     <input id='myInput' value='click me' type='button'/>
//     <button id='myButton'>button</button>
// </div>

// let myInput = document.getElementById('myInput');
// let myButton= document.getElementById('myButton');
// let myDiv = document.getElementById('myDiv');

// myInput.onclick = function () {
//     console.log('input')
// }
// myButton.onclick = function () {
//     console.log('button')
// }
// myDiv.onclick = function () {
//     console.log('div')
// }

// -------------event------------
//karanq argumenti anunn inch uzenq dnenq bayc @ndunvaca event kam e
// myInput.onclick = function (event) {
//     console.log(event)
// }
// myButton.onclick = function (event) {
//     console.log(event)
// }
// myDiv.onclick = function (event) {
//     console.log(event)
// }

//---------------event.target--------------
// myInput.onclick = function (e) {
//     console.log(e.target)
// }
// myButton.onclick = function (e) {
//     console.log(e.target)
// }
// myDiv.onclick = function (e) {
//     console.log(e.target)
// }

// --------------------event.currentTarget--------
//put in html
// <div className='main'>
//     <div id='myDiv'><span>div</span></div>
//     <input id='myInput' value='click me' type='button'/>
//     <button id='myButton'><span>button</span></button>
// </div>

// myInput.onclick = function (e) {
//     console.log(e.currentTarget)
// }
// myButton.onclick = function (e) {
//     console.log(e.currentTarget)
// }
// myDiv.onclick = function (e) {
//     console.log(e.currentTarget)
// }

// currentTraget ayn tagna vori vra kaxvaca handler@ u asxhatela
// target@ ayn tagna vori vra exela click

// 3 method handler kaxelu

//1. vorpes attribute himankanum chenq anum (html-um)
//2. popoxakanin (reactum chenq anelu)
//3. addEventlistener