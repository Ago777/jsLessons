// ====================delegation==================
// nra hamara vor unenalov shat diver amen meki hamar handler chkaxenq
//orinak 1
// put in html
// <div onClick="handler()">
//     <button id="1">Button 1</button>
//     <button id="2">Button 2</button>
//     <button id="3">Button 3</button>
//     <button id="4">Button 4</button>
//     <button id="5">Button 5</button>
//     <button id="6">Button 6</button>
//     <button id="7">Button 7</button>
//     <button id="8">Button 8</button>
//     <button id="9">Button 9</button>
//     <button id="10">Button 10</button>
//     <button id="11">Button 11</button>
//     <button id="12">Button 12</button>
//     <button id="13">Button 13</button>
// </div>

// function handler() {
//     // console.log(event.target);
//     console.log(`click on ${event.target.id}`);
// }


//  orinak 2
// put in index.html
// <div id='content' style="display: flex; flex-direction: row; justify-content: center">
//     <div id='1' style='box-shadow: 0 4px 8px 0;width: 200px; margin-right: 30px; height: 350px; position: relative'>
//         <img src="./month-3/assets/images.jpg" alt="Avatar" style="width:100%">
//             <div style='padding: 2px 16px;'>
//                 <h4><b>Student Rudo</b></h4>
//                 <p>Id: 1</p>
//             </div>
//             <span style="position: absolute; right: 5px; top: 5px; cursor: pointer">X</span>
//     </div>
//     <div  id='2' style='box-shadow: 0 4px 8px 0;width: 200px; margin-right: 30px; height: 350px; position: relative'>
//         <img src="./month-3/assets/images.jpg" alt="Avatar" style="width:100%">
//             <div style='padding: 2px 16px;'>
//                 <h4><b>Student Exish</b></h4>
//                 <p>Id: 2</p>
//             </div>
//             <span style="position: absolute; right: 5px; top: 5px; cursor: pointer">X</span>
//     </div>
//     <div id='3' style='box-shadow: 0 4px 8px 0;width: 200px; margin-right: 30px; height: 350px; position: relative'>
//         <img src="./month-3/assets/images.png" alt="Avatar" style="width:100%">
//             <div style='padding: 2px 16px;'>
//                 <h4><b>Student Elina</b></h4>
//                 <p>Id: 3</p>
//             </div>
//             <span style="position: absolute; right: 5px; top: 5px; cursor: pointer">X</span>
//     </div>
//     <div  id='4' style='box-shadow: 0 4px 8px 0;width: 200px; margin-right: 30px; height: 350px; position: relative'>
//         <img src="./month-3/assets/images.jpg" alt="Avatar" style="width:100%">
//             <div style='padding: 2px 16px;'>
//                 <h4><b>Student Mehrab</b></h4>
//                 <p>Id: 4</p>
//             </div>
//             <span style="position: absolute; right: 5px; top: 5px; cursor: pointer">X</span>
//     </div>
//     <div  id='5' style='box-shadow: 0 4px 8px 0;width: 200px; margin-right: 30px; height: 350px; position: relative'>
//         <img src="./month-3/assets/images.png" alt="Avatar" style="width:100%">
//             <div style='padding: 2px 16px;'>
//                 <h4><b>Student Nona</b></h4>
//                 <p>Id: 5</p>
//             </div>
//             <span style="position: absolute; right: 5px; top: 5px; cursor: pointer">X</span>
//     </div>
//     <div  id='6' style='box-shadow: 0 4px 8px 0;width: 200px; margin-right: 30px; height: 350px; position: relative'>
//         <img src="./month-3/assets/images.png" alt="Avatar" style="width:100%">
//             <div style='padding: 2px 16px;'>
//                 <h4><b>Student Ruzanna</b></h4>
//                 <p>Id: 6</p>
//             </div>
//             <span style="position: absolute; right: 5px; top: 5px; cursor: pointer">X</span>
//     </div>
//     <div  id='7' style='box-shadow: 0 4px 8px 0;width: 200px; margin-right: 30px; height: 350px; position: relative'>
//         <img src="./month-3/assets/images.jpg" alt="Avatar" style="width:100%">
//             <div style='padding: 2px 16px;'>
//                 <h4><b>Student Vahag</b></h4>
//                 <p>Id: 7</p>
//             </div>
//             <span style="position: absolute; right: 5px; top: 5px; cursor: pointer">X</span>
//     </div>
//     <div  id='8' style='box-shadow: 0 4px 8px 0;width: 200px; margin-right: 30px; height: 350px; position: relative'>
//         <img src="./month-3/assets/images.jpg" alt="Avatar" style="width:100%">
//             <div style='padding: 2px 16px;'>
//                 <h4><b>Student Xcho</b></h4>
//                 <p>Id: 8</p>
//             </div>
//             <span style="position: absolute; right: 5px; top: 5px; cursor: pointer">X</span>
//     </div>
//     <div  id='9' style='box-shadow: 0 4px 8px 0;width: 200px; margin-right: 30px; height: 350px; position: relative'>
//         <img src="./month-3/assets/images.jpg" alt="Avatar" style="width:100%">
//             <div style='padding: 2px 16px;'>
//                 <h4><b>Student Unknown</b></h4>
//                 <p>Id: 9</p>
//             </div>
//             <span style="position: absolute; right: 5px; top: 5px; cursor: pointer">X</span>
//     </div>
//     <div  id='10' style='box-shadow: 0 4px 8px 0;width: 200px; margin-right: 30px; height: 350px; position: relative'>
//         <img src="./month-3/assets/images.jpg" alt="Avatar" style="width:100%">
//             <div style='padding: 2px 16px;'>
//                 <h4><b>Student Unknown</b></h4>
//                 <p>Id: 10</p>
//             </div>
//             <span style="position: absolute; right: 5px; top: 5px; cursor: pointer">X</span>
//     </div>
// </div>

// petq e amen meki x-i click aneluc jnji
//amen meki vra kaxelu poxaren kkaxneq bolori parenti vra

// let content = document.getElementById('content');
// content.onclick = function (event) {
//     console.log(event.target)
// }

// orinak jnjenq
// let content = document.getElementById('content');
// content.onclick = function (event) {
//     if(event.target.tagName === 'SPAN') {
//         event.target.parentNode.style.display = 'none'
//     }
// }

// orinak stugent vor studentn e ev grenq anun@
// put in idex.html after content
// <div id='sub'></div>
// let content = document.getElementById('content');
//
// content.onclick = function (event) {
//     let parentNode = event.target.parentNode;
//     let studentId = parentNode.id;
//     if(studentId && studentId !=='content') {
//         let sub = document.getElementById('sub');
//         if(parentNode.style.opacity === '0.3') {
//             sub.innerHTML = `<h1>Student ${studentId} already clicked</h1>`
//         }else {
//             parentNode.style.opacity = '0.3';
//             sub.innerHTML = `<h1>You are clicked on Student ${studentId}</h1>`;
//         }
//     }
// }


