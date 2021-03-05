// ====================delegation==================
// nra hamara vor unenalov shat diver amen meki hamar handler chkaxenq
//  orinak
// put in index.html
// <div id='content' style="display: flex; flex-direction: row; justify-content: center">
//     <div id='1' style='box-shadow: 0 4px 8px 0;width: 200px; margin-right: 30px; height: 350px'>
//         <img src="./month-3/assets/images.jpg" alt="Avatar" style="width:100%">
//             <div style='padding: 2px 16px;'>
//                 <h4><b>Student Rudo</b></h4>
//                 <p>Id: 1</p>
//             </div>
//     </div>
//     <div  id='2' style='box-shadow: 0 4px 8px 0;width: 200px; margin-right: 30px; height: 350px'>
//         <img src="./month-3/assets/images.jpg" alt="Avatar" style="width:100%">
//             <div style='padding: 2px 16px;'>
//                 <h4><b>Student Exish</b></h4>
//                 <p>Id: 2</p>
//             </div>
//     </div>
//     <div id='3' style='box-shadow: 0 4px 8px 0;width: 200px; margin-right: 30px; height: 350px'>
//         <img src="./month-3/assets/images.png" alt="Avatar" style="width:100%">
//             <div style='padding: 2px 16px;'>
//                 <h4><b>Student Elina</b></h4>
//                 <p>Id: 3</p>
//             </div>
//     </div>
//     <div  id='4' style='box-shadow: 0 4px 8px 0;width: 200px; margin-right: 30px; height: 350px'>
//         <img src="./month-3/assets/images.jpg" alt="Avatar" style="width:100%">
//             <div style='padding: 2px 16px;'>
//                 <h4><b>Student Mehrab</b></h4>
//                 <p>Id: 4</p>
//             </div>
//     </div>
//     <div  id='5' style='box-shadow: 0 4px 8px 0;width: 200px; margin-right: 30px; height: 350px'>
//         <img src="./month-3/assets/images.png" alt="Avatar" style="width:100%">
//             <div style='padding: 2px 16px;'>
//                 <h4><b>Student Nona</b></h4>
//                 <p>Id: 5</p>
//             </div>
//     </div>
//     <div  id='6' style='box-shadow: 0 4px 8px 0;width: 200px; margin-right: 30px; height: 350px'>
//         <img src="./month-3/assets/images.png" alt="Avatar" style="width:100%">
//             <div style='padding: 2px 16px;'>
//                 <h4><b>Student Ruzanna</b></h4>
//                 <p>Id: 6</p>
//             </div>
//     </div>
//     <div  id='7' style='box-shadow: 0 4px 8px 0;width: 200px; margin-right: 30px; height: 350px'>
//         <img src="./month-3/assets/images.jpg" alt="Avatar" style="width:100%">
//             <div style='padding: 2px 16px;'>
//                 <h4><b>Student Vahag</b></h4>
//                 <p>Id: 7</p>
//             </div>
//     </div>
//     <div  id='8' style='box-shadow: 0 4px 8px 0;width: 200px; margin-right: 30px; height: 350px'>
//         <img src="./month-3/assets/images.jpg" alt="Avatar" style="width:100%">
//             <div style='padding: 2px 16px;'>
//                 <h4><b>Student Xcho</b></h4>
//                 <p>Id: 8</p>
//             </div>
//     </div>
// </div>

// petq e amen meki vra click aneluc katari tarber gorcoxutyunner

// let content = document.getElementById('content');
// content.onclick = function (event) {
//     console.log(event.target)
// }

// orinak jnjenq
// let content = document.getElementById('content');
// content.onclick = function (event) {
//     if(!!event.target.parentNode.id) {
//         event.target.parentNode.style.display = 'none'
//     }
// }

// orinak stugent vor studentn e ev grenq anun@
// put in idex.html after content
// <div id='sub'></div>
// let content = document.getElementById('content');
// content.onclick = function (event) {
//     let parentNode = event.target.parentNode;
//     let studentId = parentNode.id;
//     if(studentId) {
//         if(parentNode.style.opacity === 0.3) {
//             return
//         }
//         parentNode.style.opacity = 0.5;
//         let sub = document.getElementById('sub');
//         sub.innerHTML = `<h1>You are clicked on Student ${studentId}</h1>`
//     }
// }


