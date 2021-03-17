 // DOM EVENTS
 // MOUSE EVENTS

 // dom events - @ da browseri koxmic texekacum e vor inchvor ban e katarvel saytum
 // orinak mouse click ev ayln

 // himnakan mouse eventner@

 // click, contextMenu, mouseover, mouseout

 // kan ayl eventner bayc himnakann sranq en

 //--------------EVENT HANDLERS-------------

 // hnaravorutyun unenq eventneri vra handlers kaxelu
 // hnaravorutyun unenq eventneri vra handlers kaxelu
 // aysinqn eventneri vra set anenq function vorn kkanchvi erb kkatarvi event@

 // put in index.html
 // <input value='click me' type='button' onClick="console.log('clicked')"/>
 //--------------------------------

 //put in html
 // <input value='click me' type='button' onClick="clickHandler()"/>
 //karanq grenq function vorn kkanchvi
 // function clickHandler() {
 //    setInterval(() => console.log(1), 1000)
 // }

// ------------------------------
//  karanq handlers nshanakenq voch attributin
// put in html
//  <input id='myInput' value='click me' type='button' />

 // let myInput = document.getElementById('myInput');
 // myInput.onclick = function () {
 //     console.log('clicked')
 // }
//------------------------------------
//  karanq tanq henc functioni anun@
//  function handler() {
//     console.log(1)
//  }
//  let myInput = document.getElementById('myInput');
//  myInput.onclick = handler;
// --------------------------------------
//  menak 1 handler karanq tanq tag-in
// 1-ic avel talu depqum kashxati voch attributin@
 // put in html
 // <input id='myInput' value='click me' type='button' onClick="console.log(1)"/>

 // let myInput = document.getElementById('myInput');
 // myInput.onclick = function () {
 //     console.log(2)
 // }

//  myus depqum el kvercni verchi handler@
//  let myInput = document.getElementById('myInput');
//  myInput.onclick = function () {
//      console.log(1)
//  }
 //  myInput.onclick = function () {
 //      console.log(2)
 //  }
// -----------------------------------
// jnjelu hamaer uxxaki grum enq
//  myInput.onclick = null;

// ---------------------------addEventListeners------------
//  urish tarberak event handler kaxelu
//  tarberutyunn greladzevna u amenakarevorn toxum 1-ic avel handler kaxel
 // put in html
 //  <input id='myInput' value='click me' type='button' />

 // let myInput = document.getElementById('myInput');

// myInput.addEventListener('eventName', handler);

 // myInput.addEventListener('click', () => console.log(1))

// ------------
//  myInput.addEventListener('click', () => console.log(1))
//  myInput.addEventListener('click', () => console.log(2))

// ------------
//  kam talis enq functioni anunn chisht@ eta

 // function handler() {
 //     console.log(1)
 // }
 //
 // myInput.addEventListener('click', handler)

 // ------------------removeEventListener---------------
 // put in html
 //  <input id='myInput' value='click me' type='button' />

 // function handler() {
 //     console.log(1)
 // }
 // let myInput = document.getElementById('myInput');
 //
 // myInput.addEventListener('click', handler);
 //
 // myInput.removeEventListener('click', handler);

// ---------------------------------------------------
//ete porcenq ashxatacnenq chi ashxati vortev jnjel enq
//erba petq gali orinak
//  let myInput = document.getElementById('myInput');
//  function handler() {
//      console.log(1);
//      myInput.removeEventListener('click', handler);
//  }
//
//  myInput.addEventListener('click', handler);

// -----------------------------------------------
//  himnakanum chen qogtagorcum arrow function kam henc nersum function declaration
//  ete hetagayum piti jnjenq
//   let myInput = document.getElementById('myInput');
//
//
//   myInput.addEventListener('click', () => console.log(1));
//
//   myInput.removeEventListener('click', () => console.log(1));
//  // kam
//  myInput.addEventListener('click', function () {console.log(1)});
//
//  myInput.removeEventListener('click', function () {console.log(1)});
//  tarber functionner en

// ---------------addEventListener on document-----------------
// himnakanum es functionn ogtagorcvuma documenti vra
//  document.addEventListener('click', () => console.log(1));

 // document.addEventListener('mousemove', () => console.log(1));

//  bayc heto partadir petqa jnjel
