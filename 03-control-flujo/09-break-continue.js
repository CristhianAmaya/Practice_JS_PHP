let i = 0;

while (i < 6) {
    i++;
    if (i === 2) {
        continue; // El continue lo que hace es que ignora el codigo que viene despues. Esto significa que la I al ser igual a 2, no correría el console log
    }
    if (i === 4) {
        break; // El break funciona parecido a Continue, pero este rompe todo el código siguiente en el loop while. Significa que al ser i igual a 4, ya después de aquí, jamas volvera a imprimir el console log
    }
    console.log(i);
}