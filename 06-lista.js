/* Colocar una lista en el documento HTML, colocar un boton que diga agregar elemento. Cada vez que le den clic al boton debe agregar un elemmento a la lista*/

const $btn = document.querySelector('#btn');
const $list = document.querySelector('#list');

$btn.addEventListener('click', () =>{
    const listItem = document.createElement('li');

    listItem.textContent = 'Elemento';
    $list.appendChild(listItem);
});

