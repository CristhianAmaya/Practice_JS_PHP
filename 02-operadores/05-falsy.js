// Short-circuit

/*
Falso
false
0
''
null
indefined
NAN
*/
// A los anteriores valores se les conoce como falsy

let nombre = '';
let username = nombre || 'Anonimo'; //Aquí le está agregando al username la palabra 'Anonimo' debido a la comparación que se hace con el simbolo "||"
console.log(username);

function fn1()
{
    console.log('soy funcion 1');
    return false;
}

function fn2()
{
    console.log('soy funcion 2');
    return true;
}

let x = fn1() && fn2(); //