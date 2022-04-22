const url = 'https://raw.githubusercontent.com/sebasvelasco353/FDP-2022_01/main/27-taller2/user.json';



const displaym = document.querySelector('#display_mensajes');

let jsonRes;
let mensajes;

async function run(){
    const res = await fetch(url);
    jsonRes = await res.json();
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

}

run();

