// -------dom tree--------

// amboxj html-da object e
// <html>
// <head>
//     <title>title</title>
// </head>
// <body>
// text
// </body>
// </html>
// dom@ da hrml docimentna cari tesqov (dom tree)
// document object model

// bolor teger@ nerkayanum en objectneri tesqov

// {
//     html: {
//         head: {title: {}}
//         body: {}
//     }
// }
// // html@ da document.documentElement domi amenavervei object@
//
// let documentElement = {
//     head: {
//         title: {}
//     },
//     body: {}
// }

// orinak
// <body>
//     <div>
//         <span>text1</span>
//         <span>text</span>
//     </div>
//     <div>
//         <div>
//             <span></span>
//         </div>
//     </div>
// </body>

// {
//     div1: {
//         span1: {},
//         span2: {},
//     },
//     div2: {
//         div: {
//             span: {}
//         }
//     }
// }