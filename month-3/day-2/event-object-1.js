// ======================== event object==================
// erb texi unenum event browsern stexuma object vori mej
// ka amboxj infon incha texi unecel vor tagi vra ev ayln
// u vorpes argument poxancuma mer handlerin

//put in html
// <div class='main'>
//     <button id='button1'>button 1</button>
// </div>

// let button = document.getElementById('button');

// -------------event------------
//karanq argumenti anunn inch uzenq dnenq bayc @ndunvaca event kam e
// button.onclick = function (event) {
//     console.log(event)
// }

//---------------event.target--------------
// button.onclick = function (e) {
//     console.log(e.target)
// }

//----in html------
// <div id='myDiv' onClick="handler(event)">div</div>

// function handler(event) {
//     console.log(event)
// }

// ------addeventlistener-------
// myInput.addEventListener('click', function (event) {
//     console.log(event)
// })

//--------example---------
//mecacnenq buttoni width@ vori vra click klni
// vopresi 2 tarber functionner chstexcenq erkusi hamarel dnum enq nuyn@
// kogni event object@
//1. aranc event
//2. eventov
//put in html
// <div className='main'>
//     <button onClick="handler(event)">button1</button>
//     <button onClick="handler(event)">button2</button>
// </div>

// function handler(event) {
//     event.target.style.width = '100px';
// }

// -----------example 2----------
// 1. dexin tanq ayn divn vori vra click enq arel
//put in html
// <div>
//     <div id="div1" style="width: 100px; height: 100px; border: 1PX solid black; margin-bottom: 10px" onClick="handler(event)">DIV
//         1
//     </div>
//     <div id="div2" style="width: 100px; height: 100px; border: 1PX solid black; margin-bottom: 10px" onClick="handler(event)">DIV
//         2
//     </div>
//     <div id="div3" style="width: 100px; height: 100px; border: 1PX solid black; margin-bottom: 10px" onClick="handler(event)">DIV
//         3
//     </div>
// </div>
//
// function handler(event) {
//     event.target.style.backgroundColor = 'yellow'
// }

// 2. tarber guyner tanq kaxvac divic

// function handler(event) {
//     switch (event.target.id) {
//         case 'div1':
//             event.target.style.backgroundColor = 'red';
//             break;
//         case 'div2':
//             event.target.style.backgroundColor = 'blue';
//             break;
//         case 'div3':
//             event.target.style.backgroundColor = 'orange';
//             break;
//     }
// }

// ete event.target shat enq ogtagorcum veragrenq popoxakani;