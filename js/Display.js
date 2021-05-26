class Display{
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorAnterior = displayValorAnterior;
        this.displayValorActual = displayValorActual;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        //NUmero que se estan guardando
        this.valorActual = '';
        this.valorAnterior = '';
    }
    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        //Sin esto no borrar en al presionar el boton
        this.imprimirValores();
    }
    borrarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }
    //Colocar un numero en display
    agregarNumero(numero){
        //Esta condicional indica que si el numero es igual a . y en valor actual ya hay un punto no deje colocar mas
        if(numero === '.' && this.valorActual.includes('.'))return
        //se coloca toString para asegurarnos que vemos en el display numeros en string
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }
    //Impresion de valores
    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = this.valorAnterior;
    }
    calcular(){
        //Esto hace que pase de string que anteriormente lo usamos y que regrese a ser un numero
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);
        //
        if(isNaN(valorActual) || isNaN(valorAnterior)) return
        this.valorActual = this.calculador[this.tipoOperacion] (valorAnterior, this.valorActual);
    }
}