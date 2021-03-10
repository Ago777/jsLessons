// IF THERE IS A TIME GIVE TASK

let engLetters = ['a', 'b', 'c', 'd','e','f','g','h','i','j','k','l','m','n',
    'o','p','q','r','s','t','u','v','w','x','y','z'];

// greq function vorn stanuma array baxkacac 2 taric;
// ev veradarcnum object vortex vorpes keyer nshvac klinen tarer@ isk vorpes valuener te vorerordn en
// ev kveradarcni 3rd key orinak between: vori valuenq klini ayn
// tareri qanak@ voronq gtnvum en poxancac erku tareri aranqum
// {
//     a: 1,
//     c: 3,
//     between: 1
// }

function f(arr) {
    let num1Index = engLetters.indexOf(arr[0]);
    let num2Index = engLetters.indexOf(arr[1]);
    return {
        [arr[0]]: num1Index,
        [arr[1]]: num2Index,
        between: num2Index - num1Index - 1
    }
}


console.log(f(['a', 'c']));

