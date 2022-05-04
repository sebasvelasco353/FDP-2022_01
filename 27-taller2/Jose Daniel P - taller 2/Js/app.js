const url = 'https://raw.githubusercontent.com/DParuma/FDP-2022_01/main/27-taller2/user.json';
const filterSelect = document.getElementById('filter');
const displayp = document.querySelector('#display_pacientes');

let jsonRes;
let data;

async function run(){
    const res = await fetch(url);
    jsonRes = await res.json();
    data = jsonRes.cases;
    mensajes = jsonRes.messages;
    results = filterBy(filterSelect.value);
    draw();
}

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

function draw() {
    displayp.innerHTML = "";
    results.forEach(element => {
        const opt = document.createElement('div');
        opt.className = "display_element";
        opt.innerHTML = `<p><b>${element.last_name}, ${element.name}</b></p> <p>Edad: ${element.age}<br>Altura: ${element.height}<br>Fumador: ${element.smoker}<br>País: ${element.country}<br>Tipo de sangre: ${element.bloodtype}<br>Caso cerrado: ${element.closed}<br>Cirugías anteriores: ${element.prev_surgery}</p>`;
        displayp.appendChild(opt);
    });

    {document.getElementById('Number_results').innerHTML = "";
        const opt = document.createElement('h');
        opt.innerHTML = `${results.length} Resultados encontrados`;
        document.getElementById('Number_results').appendChild(opt);
    }
}

run();