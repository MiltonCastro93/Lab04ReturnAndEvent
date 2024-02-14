//Ubicamos elemento dentro del DOM
const citas = document.querySelector('#citas');

let numero = 0;
let intervalo = '';

//declaramos funciones de control
function timer(){
    numero++;
    citas.innerText = numero;//innerText solo texto, innerHTML es para renderizar algo normal del html  
}
//Invocamos la funcion para ejecutar
//timer();
//setInterval(timer, 1000);//500 es 1/2 segundo, 1000 es 1 segundo

function iniciar(){
    intervalo = setInterval(timer);//while
    //setTimeout(funciones, delay,parm1,parm2);//es como un relog con alarma
}

function detener(){
    clearInterval( intervalo );//llamo la variable que hice la ref de la linea 18
}