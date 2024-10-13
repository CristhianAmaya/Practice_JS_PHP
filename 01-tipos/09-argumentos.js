function suma(a, b){
    console.log(arguments); // "arguments" Lee todos los parametros que llegan a la función
    return a+2;
}

resultado = suma(5, 6);
console.log(resultado);