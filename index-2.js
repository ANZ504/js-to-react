//Objetos como parametros com

const user = {
    name: 'ANZ',
    age: 20
}

const result = (user) => {
    return '<h1>Hola ' + user.name + '</h1>'
}

console.log(result(user));

document.body.innerHTML = result(user);