// ------------bubbling---------

// vori vra texia unenum click dranic sksac ashxatum en iranic verev gtnvox bolor handlernern

//----------------------------------------
//put in index.html

// <div onclick='handler(event)' style="border:  2px solid black; padding: 40px;background: red">
//     DIV 1
//     <div onclick='handler2(event)' style="border:  2px solid black; padding: 40px;background: blue">
//        DIV 2
//         <div onclick='handler3(event)' style="border:  2px solid black; padding: 40px; background: green">
//          DIV 3
//         </div>
//     </div>
// </div>
//
// function handler() {
//     console.log('worked handler 1 in RED div')
// }
// function handler2() {
//     console.log('worked handler 1 in BLUE div')
// }
// function handler3() {
//     console.log('worked handler 1 in GREEN div')
// }


// ----------event.target-----------
// event.target-i mijoxov karanq imananq vor divi vra e click exel
// event.currentTargeti-i mijocov vori handlern e ashxatel
// tvyal depqum vori vra el lini click handlern hastat ashxateluya
// put in html---> aranc myus erku handlerneri

// <div onclick='handler(event)' style="border:  2px solid black; padding: 40px;background: red">
//     DIV 1
//     <div style="border:  2px solid black; padding: 40px;background: blue">
//        DIV 2
//         <div style="border:  2px solid black; padding: 40px; background: green">
//          DIV 3
//         </div>
//     </div>
// </div>
// function handler(event) {
//     console.log(event.target);
//     console.log(event.currentTarget);
// }

//--------------------------------------------
// bubbling texi e unenum micnhev document @st hierarxiayi ev kanchum e bolor eventnern

// ------------------event.stopPropagation()-------------
// karanq kangancnenq bubbling@
// put in html
//
// <div onclick='handler(event)' style="border:  2px solid black; padding: 40px;background: red">
//     DIV 1
//     <div onclick='handler2(event)' style="border:  2px solid black; padding: 40px;background: blue">
//        DIV 2
//         <div onclick='handler3(event)' style="border:  2px solid black; padding: 40px; background: green">
//          DIV 3
//         </div>
//     </div>
// </div>

//
// function handler(event) {
//     console.log('red div')
//     event.stopPropagation();
// }
// function handler2(event) {
//     console.log('blue div')
//     // event.stopPropagation();
// }
// function handler3(event) {
//     console.log('green div')
//     event.stopPropagation();
// }

// kariq chka bolori vra kaxel handler ete karelia kaxel menak parenbti vra ---> delegation



