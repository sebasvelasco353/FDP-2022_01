const loading = document.getElementById('loading');

let user;

async function run(){
    
    let response = await fetch("./user.json");
    user = await response.json();

    user.results.forEach(element => {
        console.log({
            name: element.name,
        }); });

    loading.style.display = 'none';
    display_Inicio();
}

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