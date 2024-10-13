// personaje de TV
let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

// Así se crean objetos en JS
let personaje = {
    nombre: "Tanjiro",
    anime: "Demon Slayer",
    edad: "16"
};
console.log(personaje);
console.log(personaje.nombre); //Así se accede a una propiedad del objeto
console.log(personaje['nombre']); // Otra forma de acceder a las propiedades

delete personaje.anime; //Delete elimina un componente del objeto