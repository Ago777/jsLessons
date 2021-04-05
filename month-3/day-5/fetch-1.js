// -------------------REST API----------------

// network in inspect

// mijoc kapnvelu serveri het (backendi het)
// fetch('hhtp/www.x.com/friends/poxos/share');

// request (call) aneluc partadir petqa uxarkel method@ ev url

//bacatrel
// ---------GET----------
// ---------POST---------
// ---------DELETE---------
// ---------PUT----------


//POST
// fetch('sasdsadasdasdasd', {
//     method: 'POST',
//     body: JSON.stringify({x: 5})
// });

// karanq poxanceq urli-mej

// ete method chenq nshum default get-a

// -----------response status-------
//--------------request is async--------
// fetch('https://jsonplaceholder.typicode.com/todos');
// fetch('https://jsonplaceholder.typicode.com/albums');
// fetch('https://jsonplaceholder.typicode.com/posts/5555555');
// fetch('https://jsonplaceholder.typicode.com/comments');
// fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
// fetch('https://api.github.com/users/ago777');
// fetch('https://api.github.com/users/octocat/followers');

// fetch return promise

// fetch('https://api.github.com/userdfsdsds/john')
//     .then((response) => console.log(response))
//     .catch(err => console.log(err))


// fetch('https://api.github.com/users/john')
//     .then(data => data.json())
//     .then((res => console.log(res)))
//     .catch(err => console.log(err))

//-------example -----
//put in html
// <div id='user'></div>

// fetch('https://api.github.com/users/john')
//     .then(response => response.json())
//     .then((result => showUser(result)))
// //
//
// function showUser(result) {
//     let userDiv = document.getElementById('user');
//     userDiv.innerText = result
// }

// https://jsonplaceholder.typicode.com/