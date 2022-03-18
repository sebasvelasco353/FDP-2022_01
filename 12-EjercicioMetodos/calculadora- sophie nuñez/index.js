const displayValorArriba = document.getElementById('valorarriba');
const displayValorAbajo = document.getElementById('valorabajo');
const botonesNumeros = document.querySelectorAll('.number');
const botonesOperadores = document.querySelectorAll('.operator');

const display = new Display(displayValorArriba, displayValorAbajo);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});

const calculadora = new Calculadora();

console.log(calculadora.restar(3,3))