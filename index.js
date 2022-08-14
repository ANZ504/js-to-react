//LLamando una función dentro de otra función
function hello() {

    return function() {
        return 21
    }

}

console.log(hello()());


//Pasando dos parametros, una buena practica es pasarle un valor al parametro para evitar el undefined
const add = (x = 0 ,y = 0) => {

    //Validación si un parametro viene undefined, no es buena practicca 
    if (y === undefined) {
        y = 0 
    }
    return x + y
}
console.log(add(10,20));


//Objetos
const user = {
    name: 'Alejandro',
    lastName: 'Gorraiz',
    age: 30,
    address: {
        country: 'Honduras',
        city: 'San Pedro Sula',
        street: 'main steet'
    },
    friends: ['Luis','Mercado','David'],
    active: true,
    //Mejor forma de usar funciones dentro de objetos o mejor dicho methods
    sendMail() {
        return 'Sending email...'
    }
    
}
console.log(user.address.country);
console.log(user.friends);
console.log(user.sendMail());

//Shorthand properties

const nombre = 'lap';
const precio = 3000;

const newProduct = {
    //Mejor forma de escribir
    nombre,
    precio
}
console.log(newProduct);

//Manipulación del DOM element
const title = document.createElement('div');
title.innerText = 'Hola Mundo desde js';

title.style.color = "#fff";

const btn = document.createElement('button');
btn.innerText = 'Click'

btn.style.marginTop = "20px";

btn.addEventListener('click', () => {

    title.innerText = 'Texto actualizado';
    alert('Se actualizo el texto');

})
document.body.append(title);
document.body.append(btn);


