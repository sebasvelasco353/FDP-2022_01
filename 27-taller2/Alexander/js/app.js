const url = 'https://raw.githubusercontent.com/IBaronap/FDP-2022_01/main/27-taller2/user.json';

//animaciones
gsap.from('#filtro_select', { duration: 1, y: '-100%', ease: 'power3.inOut', delay: 0.5})
gsap.from('#header', { duration: 1, y: '-100%', ease: 'power3.inOut', delay: 0.5})

//const y let
const filterSelect = document.getElementById('filter_case');
const displayp = document.querySelector('#dates_pacientes');
const displaym = document.querySelector('#dates_mensaje');
const displayc = document.querySelector('#dates_cases');

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
    'todos': data,
    'cerrado': data.filter(p => p.closed === true),
    'abierto': data.filter(p => p.closed === false),
    'menor_50': data.filter(p => p.age < 50),
    'mayor_50': data.filter(p => p.age > 50),
    'ciru_prev': data.filter(p => p.prev_surgery === true),
    }
    return filters[criteria];
}

filterSelect.addEventListener("change", (e) => {
    results = filterBy(filterSelect.value);
    console.log(results);
    draw();
})

//display de todos los datos
function draw() {
    displayp.innerHTML = "";
    results.forEach(element => {
        const opt = document.createElement('div');
        opt.className = "display_element";
        opt.innerHTML = `<p><b>${element.last_name}, ${element.name}</b></p> <p>Edad: ${element.age}<br>Altura: ${element.height}<br>Fumador: ${element.smoker}<br>País: ${element.country}<br>Caso: ${element.closed}<br>Tipo de sangre: ${element.bloodtype}<br>Cirugías anteriores: ${element.prev_surgery}</p><br>`;
        displayp.appendChild(opt);
    });

    displaym.innerHTML = "";
    mensajes.forEach(element => {
        const opt = document.createElement('div');
        opt.className = "display_element";
        opt.innerHTML = `<p><b>${element.sender}</b> <font size="2">(${element.timestamp})<br>Para: Mi, ${element.cc}</font></p><p>${element.message}`;
        displaym.appendChild(opt);
    });
    
    {document.getElementById('Count_results').innerHTML = "";
    const opt = document.createElement('h');
    opt.innerHTML = `(${results.length}) resultados`;
    document.getElementById('Count_results').appendChild(opt);
}
}

//run
run();