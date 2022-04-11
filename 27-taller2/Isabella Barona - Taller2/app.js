const url = './user.json';

const filterSelect = document.querySelector("#filter");
const displayp = document.querySelector('#display_pacientes');
const displaym = document.querySelector('#display_mensajes');
const docname = document.querySelector('#Nombre');
const docemail = document.querySelector('#DocEmail');

let jsonRes;
let data;
let mensajes;

const loading = document.getElementById('loading');

//async function
async function run(){
    
    const res = await fetch(url);
    jsonRes = await res.json();
    data = jsonRes.cases.filter(p => p.closed === true);
    mensajes = jsonRes.messages;

    loading.style.display = 'none';
    console.log(data);
    draw();
}

function handleFiltro(e){
    data = jsonRes.cases.filter(p => p.closed === (e.target.value === 'true'));
    draw ();
}

//display data (pacientes, mensajes, nombre, email y # de mensajes)

function draw() {
    displayp.innerHTML = "";
    data.forEach(element => {
        console.log(`Desde foreach: ${element.name}`);
        const opt = document.createElement('div');
        opt.className = "display_element";
        opt.innerHTML = `<p><b>${element.last_name}, ${element.name}</b></p> <p>Edad: ${element.age}<br>Altura: ${element.height}<br>Fumador: ${element.smoker}<br>País: ${element.country}<br>Tipo de sangre: ${element.bloodtype}<br>Caso cerrado: ${element.closed}<br>Cirugías anteriores: ${element.prev_surgery}</p>`;
        displayp.appendChild(opt);
    });

    displaym.innerHTML = "";
    mensajes.forEach(element => {
        console.log(`Desde foreach: ${element.sender}`);
        const opt = document.createElement('div');
        opt.className = "display_element";
        opt.innerHTML = `<p><b>${element.sender}</b> <font size="2">(${element.timestamp})<br>Para: Mi, ${element.cc}</font></p><p>${element.message}`;
        displaym.appendChild(opt);
    });

    {docname.innerHTML = "";
        const opt = document.createElement('div');
        opt.innerHTML = `Bienvenido ${jsonRes.name}`;
        docname.appendChild(opt);
    }
    
    {docemail.innerHTML = "";
        const opt = document.createElement('div');
        opt.innerHTML = `Mensajes para ${jsonRes.email}`;
        docemail.appendChild(opt);
    }
}
    
//display partes
function display_Inicio(){
    document.getElementById('Inicio').style.display='block';
    document.getElementById('Pacientes').style.display='none';
    document.getElementById('Mensajes').style.display='none';
}

function display_Pacientes(){
    document.getElementById('Inicio').style.display='none';
    document.getElementById('Pacientes').style.display='block';
    document.getElementById('Mensajes').style.display='none';
}

function display_Mensajes(){
    document.getElementById('Inicio').style.display='none';
    document.getElementById('Pacientes').style.display='none';
    document.getElementById('Mensajes').style.display='block';
}



//Display espacio para enviar mensaje
let cerrar = document.querySelectorAll('.Cerrar')[0];
let abrir = document.querySelectorAll('.ModalButton')[0];
let modal = document.querySelectorAll('.ModalMensaje')[0];
let modalC = document.querySelectorAll('.Modal')[0];

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
    }}

function Reinicio(){
    document.getElementById("Email").value="";
    document.getElementById("Asunto").value="";
    document.getElementById("Mensaje").value="";
}

run();