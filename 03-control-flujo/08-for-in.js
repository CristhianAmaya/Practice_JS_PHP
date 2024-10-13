// Sirve para iterar las propiedades de un objeto

let user = {
    id: 1,
    name: 'Cristhian',
    age: 26,
};

for (let prop in user) {
    console.log(prop); // En este caso, se imprimiría por consola los nombres "id, name, age"
    console.log(prop, user[prop]); // esta parte imprimiría la propiedad de la variable y su valor (EJ: id 1)
}