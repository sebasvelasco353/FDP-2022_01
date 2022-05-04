const url = 'https://raw.githubusercontent.com/DilanStivenCano/FDP-2022_01/main/27-taller2/user.json';

//interacción menu
const body = document.querySelector("body"),
      modeToggle = body.querySelector(".enlace");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".menu-barras");


let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})

const filterSelect = document.getElementById('filter');
const displayp = document.querySelector('#display-patients');
const displaym = document.querySelector('#display-message');

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

//Filtro
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

//pacientes, mensajes, nombre, email
function draw() {
    displayp.innerHTML = "";
    if(results) {
        results.forEach(element => {
            const opt = document.createElement('tr');
            opt.className = "display_element";
            opt.innerHTML = `<td><b>${element.name} ${element.last_name}</b></td> <td>${element.age}</td> <td>${element.height}</td> <td>${element.smoker}</td> <td>${element.country}</td> <td>${element.bloodtype}</td> <td>${element.closed}</td> <td>${element.prev_surgery}</td>`;
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
            opt.innerHTML = `Bienvenido Dr. ${jsonRes.name}`;
            document.getElementById('Nombre').appendChild(opt);
        }
    
        {document.getElementById('tray').innerHTML = "";
            const opt = document.createElement('div');
            opt.innerHTML = `Mensajes sin leer (${mensajes.length})`;
            document.getElementById('tray').appendChild(opt);
        }
    
        {document.getElementById('counting-results').innerHTML = "";
            const opt = document.createElement('h');
            opt.innerHTML = `${results.length} resultados encontrados`;
            document.getElementById('counting-results').appendChild(opt);
        }
    }
}

//aviso error
function error(){
    swal("Lo sentimos, no se puede realizar esta acción","Esta sección no está disponible", "error");
};

//escribir el mensaje
let close = document.querySelector('.close');
let abrir = document.querySelector('.ButtonWrite');
let modal = document.querySelector('.content-message');
let modalC = document.querySelector('.email-content');

abrir.addEventListener("click", function(){
    modalC.style.visibility = "visible";
    modal.classList.toggle("close-message");
});

close.addEventListener("click", function(){
    modal.classList.toggle("close-message");
    setTimeout(function(){
        modalC.style.visibility = "hidden";
    }, 700)
});

//Boton de formulario
function send(){
    if (Email.value===''|| Asunto.value==='' || Mensaje.value===''){
        swal("", "Ingrese todos los campos","warning");
    }else{
        swal("", "Tu mensaje ha sido enviado con éxito", "success",);
    }}

run();