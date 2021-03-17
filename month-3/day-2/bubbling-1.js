// ------------bubbling---------
// put in index.html

// click@ ashxatuma daje ete click enq anum nersi diveri vra
// <div onclick='handler()'>
//     <div>first div</div>
//     <div>second div</div>
//     <div>third div</div>
// </div>

// function handler() {
//     console.log('clicked')
// }

// sa kochvuma bubbling
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

// function handler() {
//     console.log(1)
// }
// function handler2() {
//     console.log(2)
// }
// function handler3() {
//     console.log(3)
// }


// ----------event.target-----------
// event.target-i mijoxov karanq imananq vor divi vra e click exel
// event.currentTargeti-i mijocov vori handlern e ashxatel


// <div onclick='handler(event)' style="border:  2px solid black; padding: 40px;background: red">
//     DIV 1
//     <div onclick='handler2(event)' style="border:  2px solid black; padding: 40px;background: blue">
//        DIV 2
//         <div onclick='handler3(event)' style="border:  2px solid black; padding: 40px; background: green">
//          DIV 3
//         </div>
//     </div>
// </div>


// function handler(event) {
//     console.log(event.target)
// }
// function handler2(event) {
//     console.log(event.target)
// }
// function handler3(event) {
//     console.log(event.target)
// }
//-----------------------------
// function handler(event) {
//     console.log(event.currentTarget)
// }
// function handler2(event) {
//     console.log(event.currentTarget)
// }
// function handler3(event) {
//     console.log(event.currentTarget)
// }

//--------------------------------------------
// bubbling texi e unenum micnhev document @st hierarxiayi ev kanchum e bolor eventnern

// ------------------event.stopPropagation()-------------
// karanq kangancnenq bubbling@
// put in html

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
//     console.log(event.target)
// }
// function handler2(event) {
//     console.log(event.target);
//     event.stopPropagation();
// }
// function handler3(event) {
//     console.log(event.target)
// }
// -------------example----------------------
// uzum enq amen meki vra click aneluc ashxati tarber handler ev poxi guyn@
// put in index.html
// <div onclick='handler(event)' style="border:  2px solid black; padding: 40px;background: red">
//     DIV 1
//     <div onclick='handler2(event)' style="border:  2px solid black; padding: 40px;background: blue">
//        DIV 2
//         <div onclick='handler3(event)' style="border:  2px solid black; padding: 40px; background: green">
//          DIV 3
//         </div>
//     </div>
// </div>

// function handler(event) {
//     event.target.style.background = 'yellow';
//     event.stopPropagation();
// }
// function handler2(event) {
//     event.target.style.background = 'orange';
//     event.stopPropagation();
// }
// function handler3(event) {
//     event.target.style.background = 'grey';
//     event.stopPropagation();
// }

// karanq tanq id-ner check anenq if-ov kam switch case-ov ev anenq mer uzac gorcoxutyun@


