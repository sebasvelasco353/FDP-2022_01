const url = 'https://raw.githubusercontent.com/DParuma/FDP-2022_01/main/27-taller2/user.json';
const filterSelect = document.getElementById('filter');
const displaym = document.querySelector('#display_mensajes');

let jsonRes;
let mensajes;

async function run(){
    const res = await fetch(url);
    jsonRes = await res.json();
    data = jsonRes.cases;
    mensajes = jsonRes.messages;
    draw();
}
function draw() {
    displaym.innerHTML = "";
    mensajes.forEach(element => {
        const opt = document.createElement('div');
        opt.className = "display_element";
        opt.innerHTML = `<p><b>${element.sender}</b> <font size="2">(${element.timestamp})<br>Para: Mi, ${element.cc}</font></p><p>${element.message}`;
        displaym.appendChild(opt);
    });

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

}
run();