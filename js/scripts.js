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

enlaces[0].classList.remove('navegacion__enlace');




//getElementById esta forma es antigua y ya no se usa

const heading2 = document.getElementById('heading');
console.log(heading2);