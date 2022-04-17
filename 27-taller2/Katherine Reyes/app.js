const url = 'https://raw.githubusercontent.com/Kathereyes19/FDP-2022_01/main/27-taller2/user.json';

//ANIMACIONES
gsap.from('.sidebar', { duration: 1, x: '-100%', ease: 'power3.inOut', delay: 0.2})
gsap.from('.header', { duration: 1, y: '-100%', ease: 'power3.inOut', delay: 0.5})
gsap.from('.Inicio', { duration: 1, x: '-150%', ease: 'power2.inOut', delay: 0.5})

//CONST
const filterSelect = document.getElementById('filter');
const displaypacientes = document.querySelector('#display_pacientes');
const displaymensajes = document.querySelector('#display_mensajes');

//LET
let jsonRes;
let data;
let mensajes;

//aSYNC FUNCTION
async function run(){
    const res = await fetch(url);
    jsonRes = await res.json();
    data = jsonRes.cases;
    mensajes = jsonRes.messages;
    results = filterBy(filterSelect.value);
    draw();
}

//FILTRO
function filterBy(criteria) {
    const filters = {
    'all': data,
    'closed': data.filter(p => p.closed === true),
    'open': data.filter(p => p.closed === false),
    'age<50': data.filter(p => p.age < 50),
    'age>50': data.filter(p => p.age > 50),
    'prev_surgery': data.filter(p => p.prev_surgery === true),
    }
    return filters[criteria];
}

filterSelect.addEventListener("change", (e) => {
    results = filterBy(filterSelect.value);
    console.log(results);
    draw();
})

//DISPLAY DATA
function draw() {
    displaypacientes.innerHTML = "";
    results.forEach(element => {
        const opt = document.createElement('div');
        opt.className = "display_element";
        opt.innerHTML = `<p><b>${element.last_name}, ${element.name}</b></p> <p>Edad: ${element.age}<br>Altura: ${element.height}<br>Fumador: ${element.smoker}<br>País: ${element.country}<br>Tipo de sangre: ${element.bloodtype}<br>Caso cerrado: ${element.closed}<br>Cirugías anteriores: ${element.prev_surgery}</p>`;
        displaypacientes.appendChild(opt);
    });

    displaymensajes.innerHTML = "";
    mensajes.forEach(element => {
        const opt = document.createElement('div');
        opt.className = "display_element";
        opt.innerHTML = `<p><b>${element.sender}</b> <font size="2">(${element.timestamp})<br>Para: Mi, ${element.cc}</font></p><p>${element.message}`;
        displaymensajes.appendChild(opt);
    });

    {document.getElementById('nombre').innerHTML = "";
        const opt = document.createElement('div');
        opt.innerHTML = `Bienvenido ${jsonRes.name}`;
        document.getElementById('nombre').appendChild(opt);
    }
    
    {document.getElementById('Correo').innerHTML = "";
        const opt = document.createElement('div');
        opt.innerHTML = `Mensajes para ${jsonRes.email}`;
        document.getElementById('Correo').appendChild(opt);
    }

    {document.getElementById('bandeja').innerHTML = "";
        const opt = document.createElement('div');
        opt.innerHTML = `Bandeja de entrada (${mensajes.length})`;
        document.getElementById('bandeja').appendChild(opt);
    }

    {document.getElementById('NumeroResultados').innerHTML = "";
        const opt = document.createElement('h');
        opt.innerHTML = `${results.length} pacientes cumplen con esta condición`;
        document.getElementById('NumeroResultados').appendChild(opt);
    }
}

//DISPLAYS (INICIO,PACIENTES.MENSAJES,MANT.)
function display_inicio(){
    gsap.from('.Inicio', { duration: 1, x: '-100%', ease: 'power2.inOut'})
    document.getElementById('Inicio').style.display='block';
    document.getElementById('Pacientes').style.display='none';
    document.getElementById('Mensajes').style.display='none';
}

function display_pacientes(){
    gsap.from('.Pacientes', { duration: 1, x: '-100%', ease: 'power2.inOut'})
    document.getElementById('Inicio').style.display='none';
    document.getElementById('Pacientes').style.display='block';
    document.getElementById('Mensajes').style.display='none';
}

function display_mensajes(){
    gsap.from('.Mensajes', { duration: 1, x: '-100%', ease: 'power2.inOut'})
    document.getElementById('Inicio').style.display='none';
    document.getElementById('Pacientes').style.display='none';
    document.getElementById('Mensajes').style.display='block';
}

function mantenimiento_pagina(){
    swal("Lo sentimos, no se puede realizar esta acción", "Esta sección se encuentra en mantenimiento","error");
};

//REDACCIÓN MENSAJE
let cerrar = document.querySelector('.cerrar');
let abrir = document.querySelector('.ModalButton');
let modal = document.querySelector('.ModalMensaje');
let modalCerrar = document.querySelector('.Modal');

abrir.addEventListener("click", function(){
    modalCerrar.style.visibility = "visible";
    modal.classList.toggle("Modal-Cerrar");
});

cerrar.addEventListener("click", function(){
    modal.classList.toggle("Modal-Cerrar");
    setTimeout(function(){
        modalCerrar.style.visibility = "hidden";
    }, 700)
});

//Botones de espacio para enviar mensaje
function Enviado(){
    if (Email.value===''|| Asunto.value==='' || Mensaje.value===''){
        swal("Hubo un problema", "Por favor digite todos los campos","warning");
    }else{
        swal("Buen trabajo", "Tu mensaje ha sido enviado con éxito", "success",);
        Reinicio();
    }}

function Reinicio(){
    document.getElementById("Email").value="";
    document.getElementById("Asunto").value="";
    document.getElementById("Mensaje").value="";
}

//run
run();
