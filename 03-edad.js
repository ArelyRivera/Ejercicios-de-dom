const Resp = document.querySelector('#Resp');
const muestra_edad = document.querySelector ('#Edad1');
/* referencia al elemento, recuperamos el elemento y mostramos elemento */

const valida_edad = () => {
    const Edad1 = parseInt(muestra_edad.value);

    if (Edad1 >= 18) {
        mensaje = "Eres mayor de edad"
    } else {
        mensaje = "Eres menor de edad"
    }

    Resp.textContent = mensaje;

}