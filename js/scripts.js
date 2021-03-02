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