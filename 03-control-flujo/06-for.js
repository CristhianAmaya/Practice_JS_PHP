let arraysLet = new Array(9); // Crea un array de 9 espacios

for (let i = 0; i < arraysLet.length; i++) {
    arraysLet[i] = Math.floor(Math.random() * 9); // Genera un número aleatorio entre 0 y 9
}

for (let i = 0; i < arraysLet.length; i++) {
    console.log('Número random [', i, '] = ', arraysLet[i]);
}
