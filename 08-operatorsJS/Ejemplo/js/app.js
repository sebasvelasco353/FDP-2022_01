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

// TODO: se debe hacer un software para guardar las ultimas 24 medidas de temperatura en una mision de la antartida que busca mostrar los cambios de temperatura durante un dia, muestras tomadas cada hora del dia registrando tambien la hora en la que fue tomada.

// TODO: debemos dar al usuario la posibilidad de convertir de C a F y de F a C porque esa informacion va a ser verificada por cientificos en todo el mundo.

// TODO: En la interfaz debemos mostrar los ultimos tres registros hasta el momento pero guardar los ultimos 24.

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

    for (let i = 0; i < 3; i++) {
        console.log(i, registroTemperaturas[i]);
        console.log(registroTemperaturas);
        const tempObj = registroTemperaturas[i];
        var tag = document.createElement("p");

        tag.innerHTML =`Temperatura: ${tempObj.temperatura} ${tempObj.escala} - fecha: ${tempObj.fecha}.`;

        LISTA_MEDIDAS_ELEMENT.appendChild(tag);
    }
}

