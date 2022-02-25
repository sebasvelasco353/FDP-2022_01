/* creo constantes para guardar elementos que necesito */
const display = document.querySelector('.calculator-display');
const keypadButtons = document.getElementsByClassName('keypad-button');

window.addEventListener('load', ()=> {
    /* convierto el html a Array */
    const keypadButtonsArray = Array.from(keypadButtons);

    /* Itereamos nuevo Array de botones */
    keypadButtonsArray.forEach( (button) => {
       
       /* Cada boton le agrego un listener*/
        button.addEventListener('click', () => {
            calculadora(button, display);

        })
    })
});

function calculadora(button, display) {
    switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break;

            case '=':
                calcular(display);
                break;

                default:
                    actualizar(display, button);
                    break;
    }
}

function calcular(display){
    display.innerHTML = eval(display.innerHTML)

}

function actualizar(diplay, button){
    if (display.innerHTML == 0){
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
}

function borrar(display){
    display.innerHTML = 0;
}
