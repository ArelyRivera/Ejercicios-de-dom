/* /* document.write('Hola desde Javascripy'); */

/* const title = document.getElementsByTagName('h1'); //Devuelve un arreglo de los elementos
//que tengan la etiqueta getElementByTagName
title[0].innerHTML = 'Título cargado desde javascript';


const texto = document.getElementById('text');
texto.innerHTML = 'Este texto es escrito desde javascript';
texto.style.background = 'blue';
texto.style.color = 'white';

console.log(text); */ 


const texto = document.querySelector('#text');
texto.textContent = 'Estoy escribiendo desde Javascript';


//Obtiene un elemento por Id, solo me va a devolver un elemento.
document.geElementById

//Obtiene todos los elementos de una clase y devuelve un arreglo. Mas de un 
//arreglo
document.getElementsByClassName

//Obtiene todos los elementos por nombre y devuelve un arreglo
document.getElementsByName

const texto = document.createElement('div');
const body = document.querySelector ('body');

body.append(div);