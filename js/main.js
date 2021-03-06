const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.number');
const botonesOperadores = document.querySelectorAll('.operador');
const display = new Display(displayValorAnterior, displayValorActual);
//Interaccion con los botones
botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});
botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
})