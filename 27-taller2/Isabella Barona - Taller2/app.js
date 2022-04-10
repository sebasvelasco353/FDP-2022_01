const url = './user.json';
const filterSelect = document.querySelector("#filter");
let jsonRes;
let data;

//const loading = document.getElementById('loading');
//const displayp = document.getElementById('display_pacientes')
//const displaym = document.getElementById('display_mensajes')
//let results = [];

//let user;

//async function
async function run(){
    
    const res = await fetch(url);
    jsonRes = await res.json();
    
    console.log(jsonRes);

    //loading.style.display = 'none';
    
    //display_datap();
    //display_datam();
}

function handleFiltro(e){
    console.log( e.target.value);
    data = jsonRes.cases
}

//display data (pacientes y mensajes)
function display_datap() {
    displayp.innerHTML = '';
    results.forEach(element => {
    var opt = document.createElement('p');
    opt.className = "displayp_element"
    opt.innerHTML = `<p>${element.name}</p>`;
    displayp.appendChild(opt);
    });
    }

function display_datam() {
    displaym.innerHTML = '';
    results.forEach(element => {
    var opt = document.createElement('p');
    opt.className = "displaym_element"
    opt.innerHTML = `<p>${element.sender}</p>`;
    displaym.appendChild(opt);
    });
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