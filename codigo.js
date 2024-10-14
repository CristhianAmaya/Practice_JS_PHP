// // Lista de ejercicios JavaScript

// function main() {
//     let opcion = prompt("Elije que ejercicio quieres ver");
//     switch (opcion) {
//         case 1:
//             caso1();
//             break;
//         case 2:
//             caso2();
//             break;
//         case 3:
//             caso3();
//             break;
    
//         default:
//             console.log("Opcion invalida");
//             break;
//     }
// }
// function caso1() {
//     let edad = prompt("¿Qué edad tienes?");

//     if (edad > 18) {
//         document.write("Eres mayor de edad, puedes ingresar");
//     }
//     else{
//         document.write("Eres menor de edad, no puedes ingresar");
//     }
// }

// function caso2() {
    
// }

// function caso3() {
    
// }

// class Animal{
//     constructor(especie, edad, color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.informacion = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
//     }
//     verInformacion(){
//         document.write(this.informacion);
//     }
// }
// class Perro extends Animal{
//     constructor(especie,edad,color,raza){
//         super(especie,edad,color);
//         this.raza = null;
//     }
//     static ladrar(){
//         alert("¡WAW!");
//     }
//     set modificarRaza(newName){
//         this.raza = newName;
//     }

//     get getRaza(){
//         return this.raza;
//     }
// }

// let perro = new Perro("perro", 5, "rojo","doberman");

// console.log(perro);
// perro.modificarRaza = "Alaka Malamut";
// console.log(perro.getRaza);
// //perro.verInformacion();

// Crear soluciones 3.0
class Celulares{
    constructor(color,peso,resolucionPantalla,resolucionCamara,Ram){
        this.color = color;
        this.peso = peso;
        this.resolucionPantalla = resolucionPantalla;
        this.resolucionCamara = resolucionCamara;
        this.Ram = Ram;
    }

    mostrarinfo(){
        return `
        Color: <b>${this.color}</b> </br>
        Peso: <b>${this.peso}</b> </br>
        Resolución de pantalla: <b>${this.resolucionPantalla}</b> </br>
        Resolución de cámara: <b>${this.resolucionCamara}</b> </br>
        Memoria Ram: <b>${this.Ram}</b> </br>
        <hr>
        `;
    }
}
let arrayCelulares = new Array(3);

let celular1 = new Celulares("Azul",1,"2500x1680","800x420",5);
let celular2 = new Celulares("Blanco",1.2,"2700x1680","750x420",4);
let celular3 = new Celulares("Negro",1.1,"2200x1680","900x420",6);

arrayCelulares[0] = celular1;
arrayCelulares[1] = celular2;
arrayCelulares[2] = celular3;

const mostrarCelulares = document.getElementById("mostrarCel");

let infoCelulares = "";

for (let i = 0; i < arrayCelulares.length; i++) {
    infoCelulares += arrayCelulares[i].mostrarinfo();
}

mostrarCelulares.innerHTML = infoCelulares;