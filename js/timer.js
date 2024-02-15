const citas = document.querySelector('#citas');

let numero = 0;
let intervalo = '';

function timer(){
    numero++;
    citas.innerText = numero;
}
function iniciar(){
    intervalo = setInterval(timer);
}

function detener(){
    clearInterval( intervalo );
}
