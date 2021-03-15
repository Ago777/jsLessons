// -------------------REST API----------------
// network in inspect


// mijoc kapnvelu serveri het (backendi het)
// fetch('sasdsadasdasdasd');


// request (call) aneluc partadir petqa uxarkel method@ ev url

// ---------GET----------
// ---------POST---------
// ---------DELETE---------
// ---------PUT---------

// fetch('sasdsadasdasdasd', {
//     method: 'POST',
//     body: JSON.stringify({x: 5})
// });

// karanq poxanceq urli-mej

// ete method chenq nshum default get-a

// -----------response status-------
//--------------request is async--------
// fetch('https://cat-fact.herokuapp.com/facts');
// fetch('https://pokeapi.co/api/v2/pokemon');
// fetch('https://pokeapi.co/api/v2/pokemon/ditto');
// fetch('https://api.github.com/users/john');
// fetch('https://api.github.com/users/john');
// fetch('https://api.github.com/users/octocat/followers');


// fetch return promise
// fetch('https://api.github.com/users/john')
//     .then((response) => console.log(response))
//     .catch(err => console.log(err))


// fetch('https://api.github.com/users/john')
//     .then(response => response.json())
//     .then((result => console.log(result)))
//     .catch(err => console.log(err))

//-------example -----
//put in html
// <div id='user'></div>

// fetch('https://api.github.com/users/john')
//     .then(response => response.json())
//     .then((result => showUser(result)))
//     .catch(err => console.log(err))
//
// function showUser(result) {
//     let userDiv = document.getElementById('user');
//     userDiv.innerText = result['name']
// }