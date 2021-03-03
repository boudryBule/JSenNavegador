//seleccionar contenido del html 

//queryselector -> te devuelve ninguno o hasta un elemento que concuerde con el selector que estás escribiendo
/* es igual que en css
si vas a seleccionar una clase es .clase y para una id #id */

//vamos a seleccionar el título del contacto.html
//todos los selectores inician con document
// const heading = document.querySelector('.header__texto h2') //devuelve 0 o 1 elementos
const heading = document.querySelector('#heading'); //así sería a través del id
// console.log(heading);
heading.textContent = 'nuevo heading';

//también puedes añadir nuevas clases desde js 
//heading.classList.add('nueva-clase');

//querySelectorAll -> devuelve ninguno o todos los elementos que concuerden con el selector que se le mande

const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);
//para acceder a uno en concreto es igual que con los arrays
console.log(enlaces[1]);

//para cambiar el texto
enlaces[0].textContent = 'Nuevo texto para enlace';

//también podrías hacerlo todo en una linea
// document.querySelectorAll('.navegacion a')[0].textContent = 'Nuevo texto para enlace';

//también puedes cambiar el enlace propiamente dicho ( a dónde te manda)

// enlaces[0].href = 'https://google.com';

//también puedes añadirle una clase nueva

enlaces[0].classList.add('Nueva-clase');

//también eliminarlas

// enlaces[0].classList.remove('navegacion__enlace');




//getElementById esta forma es antigua y ya no se usa

const heading2 = document.getElementById('heading');
console.log(heading2);

//generar nuevo enlace

const nuevoEnlace = document.createElement('A') //hay que pasarle la etiqueda en mayusculas

//Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

//agregar el texto
nuevoEnlace.textContent = 'Un nuevo enlace';

//agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

//agregarlo al documento 
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);




console.log(nuevoEnlace);


//eventos

console.log(1);

//window es un nivel más alto que document, document es solo el htm window es también todas las funciones

window.addEventListener('load', function() { //vamos a ver cuando ocurre el evento de que cargue la página, la función que le añadimos se le conoce como callback

    //load espera a que el JS y los archivos  que depeden del HTML estén listos
    //saldría el 1 luego el 5 y luego el 2, ya que espera que esté cargado todo

    console.log(2);

})

//también se podría poner de la siguiente manera si la función es muy grande

window.addEventListener('load', imprimir);

function imprimir() {
    console.log(2);
}

//otra forma de registrar este load

window.onload = function() {
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function() { //solo espera al html, no espera ni css ni imagenes
    //de normal se usa este, porque de normal no vas a modificar las hojas de estilo
    console.log(4);
});



console.log(5);


//este evento salta cuando haces scroll
window.onscroll = function() {
    console.log('scrolling...');
}