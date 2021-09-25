const $btn = document.querySelector('#btn');

$btn.addEventListener('click', () => {
    console.log('Me presionaste');
});

const $inpText = document.querySelector('#text');

/* keydown es cada que se presiona una tecla sin soltar */



/* $inpText.addEventListener('keydown', () => {
    console.log('Escribiste algo');
}); */

$inpText.addEventListener('keydown', (e) => {
    /* Ahora tengo mas informacion */
    console.log(e.target.value);
    /* Ahora obtenemos la info que el usuario escribió */
});