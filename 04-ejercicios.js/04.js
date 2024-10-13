// Crea un algoritmo que imprima numeros impares
let numeros = new Array(10);

for (let i = 0; i < numeros.length; i++) {
    numeros[i] = Math.floor(Math.random() * (29 - 11 + 1)) + 11; // Numeros generados entre 11 a 29
}

function imparesLet(){
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 != 0) {
            console.log('Numero impar en la posición', i, ' = ', numeros[i]);
        }
    }
}

imparesLet();