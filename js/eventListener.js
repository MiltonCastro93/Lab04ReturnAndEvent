const citas = document.querySelector('#citas');

const boton = document.querySelector('#boton');

boton.addEventListener(
    'click',
    function(){
        citas.innerText = 'hiciste click!';
    }
);
boton.addEventListener(
    'mouseover',
    function(){
        citas.innerText = 'Mouse Sobre!';
    }
);
boton.addEventListener(
    'mouseout',
    function(){
        citas.innerText = 'Mouse Afuera!';
    }
);
