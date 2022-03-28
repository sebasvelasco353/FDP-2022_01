class Display {
    constructor(displayValorArriba, displayValorAbajo) {
        this.displayValorAbajo = displayValorAbajo;
        this.displayValorArriba = displayValorArriba;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorAbajo = '';
        this.valorArriba = '';
        this.signos = {
            sumar: '+',
            dividir: '÷',
            multiplicar: 'x',
            restar: '-', 
            porcentaje: '%',
        }
    }

     borrar() {
        this.valorAbajo = this.valorAbajo.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.valorAbajo = '';
        this.valorArriba = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorArriba = this.valorAbajo || this.valorArriba;
        this.valorAbajo = '';
        this.imprimirValores();
    }

    agregarNumero(numero) {
        if(numero === '.' && this.valorAbajo.includes('.')) return
        this.valorAbajo = this.valorAbajo.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorAbajo.textContent = this.valorAbajo;
        this.displayValorArriba.textContent = `${this.valorArriba} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular() {
        const valorArriba = parseFloat(this.valorArriba);
        const valorAbajo = parseFloat(this.valorAbajo);

        if( isNaN(valorAbajo)  || isNaN(valorArriba) ) return
        this.valorAbajo = this.calculador[this.tipoOperacion](valorArriba, valorAbajo);
    }
}