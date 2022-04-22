const url = 'https://raw.githubusercontent.com/IBaronap/FDP-2022_01/main/27-taller2/user.json';

//animaciones
gsap.from('.Menu', { duration: 1, x: '-100%', ease: 'power3.inOut', delay: 0.2})
gsap.from('.Header', { duration: 1, y: '-100%', ease: 'power3.inOut', delay: 0.5})
gsap.from('.Inicio', { duration: 1, x: '-150%', ease: 'power2.inOut', delay: 0.5})

//const y let
const filterSelect = document.getElementById('filter');
const displayp = document.querySelector('#display_pacientes');
const displaym = document.querySelector('#display_mensajes');

let jsonRes;
let data;
let mensajes;

//async function
async function run(){
    const res = await fetch(url);
    jsonRes = await res.json();
    data = jsonRes.cases;
    mensajes = jsonRes.messages;
    results = filterBy(filterSelect.value);
    draw();
}

//Filtro pacientes
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

//display data (pacientes, mensajes, nombre, email y # de mensajes)
function draw() {
    displayp.innerHTML = "";
    results.forEach(element => {
        const opt = document.createElement('div');
        opt.className = "display_element";
        opt.innerHTML = `<p><b>${element.last_name}, ${element.name}</b></p> <p>Edad: ${element.age}<br>Altura: ${element.height}<br>Fumador: ${element.smoker}<br>País: ${element.country}<br>Tipo de sangre: ${element.bloodtype}<br>Caso cerrado: ${element.closed}<br>Cirugías anteriores: ${element.prev_surgery}</p>`;
        displayp.appendChild(opt);
    });

    displaym.innerHTML = "";
    mensajes.forEach(element => {
        const opt = document.createElement('div');
        opt.className = "display_element";
        opt.innerHTML = `<p><b>${element.sender}</b> <font size="2">(${element.timestamp})<br>Para: Mi, ${element.cc}</font></p><p>${element.message}`;
        displaym.appendChild(opt);
    });

    {document.getElementById('Nombre').innerHTML = "";
        const opt = document.createElement('div');
        opt.innerHTML = `Bienvenido ${jsonRes.name}`;
        document.getElementById('Nombre').appendChild(opt);
    }
    
    {document.getElementById('DocEmail').innerHTML = "";
        const opt = document.createElement('div');
        opt.innerHTML = `Mensajes para ${jsonRes.email}`;
        document.getElementById('DocEmail').appendChild(opt);
    }

    {document.getElementById('bandeja').innerHTML = "";
        const opt = document.createElement('div');
        opt.innerHTML = `Bandeja de entrada (${mensajes.length})`;
        document.getElementById('bandeja').appendChild(opt);
    }

    {document.getElementById('Number_results').innerHTML = "";
        const opt = document.createElement('h');
        opt.innerHTML = `${results.length} pacientes cumplen con esta condición`;
        document.getElementById('Number_results').appendChild(opt);
    }
}

//display partes
function display_Inicio(){
    gsap.from('.Inicio', { duration: 1, x: '-100%', ease: 'power2.inOut'})
    document.getElementById('Inicio').style.display='block';
    document.getElementById('Pacientes').style.display='none';
    document.getElementById('Mensajes').style.display='none';
}

function display_Pacientes(){
    gsap.from('.Pacientes', { duration: 1, x: '-100%', ease: 'power2.inOut'})
    document.getElementById('Inicio').style.display='none';
    document.getElementById('Pacientes').style.display='block';
    document.getElementById('Mensajes').style.display='none';
}

function display_Mensajes(){
    gsap.from('.Mensajes', { duration: 1, x: '-100%', ease: 'power2.inOut'})
    document.getElementById('Inicio').style.display='none';
    document.getElementById('Pacientes').style.display='none';
    document.getElementById('Mensajes').style.display='block';
}

function mantenimiento(){
    swal("Lo sentimos, no se puede realizar esta acción", "Esta sección se encuentra en mantenimiento","error");
};

//Display espacio para enviar mensaje
let cerrar = document.querySelector('.Cerrar');
let abrir = document.querySelector('.ModalButton');
let modal = document.querySelector('.ModalMensaje');
let modalC = document.querySelector('.Modal');

abrir.addEventListener("click", function(){
    modalC.style.visibility = "visible";
    modal.classList.toggle("Modal-Close");
});

cerrar.addEventListener("click", function(){
    modal.classList.toggle("Modal-Close");
    setTimeout(function(){
        modalC.style.visibility = "hidden";
    }, 700)
});

//Botones de espacio para enviar mensaje
function enviado(){
    if (Email.value===''|| Asunto.value==='' || Mensaje.value===''){
        swal("", "Por favor digite todos los campos","warning");
    }else{
        swal("", "Tu mensaje ha sido enviado con éxito", "success",);
        Reinicio();
    }}

function Reinicio(){
    document.getElementById("Email").value="";
    document.getElementById("Asunto").value="";
    document.getElementById("Mensaje").value="";
}

//run
run();