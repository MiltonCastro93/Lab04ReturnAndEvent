//Ubicar elementos dentro del DOM
const citas = document.querySelector('#citas');
/*
const botones = document.querySelectorAll('#contenedor nav a');
botones[0]...*/

const boton = document.querySelector('#boton');

//objeto.addEventListener( 'evento', accion );
boton.addEventListener(//por cada eventos se tiene que hacer diferentes addEventlistener
    'click',
    function(){//funcion anonima no tiene nombre
        citas.innerText = 'hiciste click!';
    }
);
boton.addEventListener(
    'mouseover',
    function(){//funcion anonima no tiene nombre
        citas.innerText = 'Mouse Sobre!';
    }
);
boton.addEventListener(
    'mouseout',
    function(){//funcion anonima no tiene nombre
        citas.innerText = 'Mouse Afuera!';
    }
);
