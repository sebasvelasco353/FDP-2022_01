/*
**
**
**              ▄▄
**   ▄▄█▀▀▀█▄█▀███                                      ▄█▄▀▄██▄
** ▄██▀     ▀█  ██                                     ██     ██
** ██▀       ▀  ██  ▄█▀██▄  ▄██▀███ ▄▄█▀██     ▄██▀▀██▄▀██▄  ▄▄█
** ██           ██ ██   ██  ██   ▀▀▄█▀   ██   ██▀    ▀██▄█████▄
** ██▄          ██  ▄█████  ▀█████▄██▀▀▀▀▀▀   ██      ███   ▀███
** ▀██▄     ▄▀  ██ ██   ██  █▄   ████▄    ▄   ██▄    ▄███    ▀██
**   ▀▀█████▀ ▄████▄████▀██▄██████▀ ▀█████▀    ▀██████▀▀███████
**
**                  Iterables, Operators y condicionales
**
*/

// TODO: guardar maximo 24 elementos y empezar a sobreescribir el mas viejo despues.
// TODO: debemos dar al usuario la posibilidad de convertir de C a F y de F a C.
// TODO: En la interfaz debemos mostrar los ultimos tres registros hasta el momento.

let celcius = 0;
let registroTemperaturas = [];
let registroNodes = [];

const handleRegistroTemperaturas = () => {
    var temperatura = document.getElementById("temperatura").value;
    var escala = document.getElementById("escala").value;
    const registroObj = {
        temperatura,
        escala,
        fecha: new Date().toString()
    }
    registroTemperaturas.push(registroObj);
    renderUltimosDatos();
}
const renderUltimosDatos = () => {
    const LISTA_MEDIDAS_ELEMENT = document.getElementById("listaMedidas");
    LISTA_MEDIDAS_ELEMENT.innerHTML = '';

    if (registroTemperaturas.length > 2) {
        const registroTemperaturasInv = [...registroTemperaturas].reverse();
        for (let i = 0; i < 3 ; i++) {
            const tempObj = registroTemperaturasInv[i];
            var tag = document.createElement("p");

            tag.innerHTML =`Temperatura: ${tempObj.temperatura} ${tempObj.escala} - fecha: ${tempObj.fecha}.`;

            LISTA_MEDIDAS_ELEMENT.appendChild(ag);
        }
    } else {
        for (let i = 0; i < registroTemperaturas.length; i++) {
            const tempObj = registroTemperaturas[i];
            var tag = document.createElement("p");

            tag.innerHTML =`Temperatura: ${tempObj.temperatura} ${tempObj.escala} - fecha: ${tempObj.fecha}.`;

            console.log(tag);
            LISTA_MEDIDAS_ELEMENT.appendChild(tag);
        }
    }
}

