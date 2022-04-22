var url = 'https://raw.githubusercontent.com/Karolfc/FDP-2022_01/main/27-taller2/user.json';

const filterSelect = document.getElementById('filter');
const displaypatients = document.querySelector('#display_patients');
const displaymessages = document.querySelector('#display_messages');

let data

async function run(){
    let response = await fetch(url);
    let respJson = await response.json();
    console.log(respJson);
    //messages y cases -> ya imprimen en consola :D
    let messages = respJson.messages;
    console.log(messages);
    let cases = respJson.cases;
    console.log(cases);

}

/*
results = filterBy(filterSelect.value);
draw(); [esto hace parte de la async function que tenia]


async function run(){
    let response = await fetch(url);
    respJson = await response.json();

    respJson.response.forEach(element => {
        console.log ({
            name: element.name,
            last_name: element.last_name,
            age: element.age,
            height: element.height,
            smoker: element.smoker,
            country: element.country,
            bloodtype: element.bloodtype,
            closed: element.closed,
            prev_surgery: element.prev_surgery,
        });
    });

    display_data();
}
*/

//Filtrar pacientes según data necesaria


function filterBy(criteria) {
    const filter = {
    'all': data,
    'age>50': data.filter(p => p.age > 50),
    'age<50': data.filter(p => p.age < 50),
    'open': data.filter(p => p.closed === false),
    'closed': data.filter(p => p.closed === true),
    'prev_surgery': data.filter(p => p.prev_surgery === true),
    }
    return filter[criteria];
}


/*
function handleFilter(e) {
    const filterpatients = {
        'all' : data,
        'age>50' : respJson.cases.filter(p => p.age > 50),
        'age<50' : respJson.cases.filter(p => p.age < 50),
        'open' : respJson.cases.filter(p => p.open === (e.closed.value === 'true')),
        'closed' : respJson.cases.filter(p => p.open === (e.closed.value === 'false')),
        

    }

    draw();
    console.log(filterpatients);
}
/*
function handleFilter(e) {
    data = jsonRes.cases.filter(p => p.smoker === (e.target.value === 'true'));
    draw();
}
*/



//Cambiar según filtro :D

filterSelect.addEventListener("change", (e) => {
    results = filterBy(filterSelect.value);
    console.log(results);
    draw();
})


function draw() {
    displaypatients.innerHTML = "";
    results.forEach(element => {
        const opt = document.createElement('div');
        opt.className = "display_element";
        opt.innerHTML = `<p><b>${element.last_name}, ${element.name}</b></p> <p>Edad: ${element.age}<br>Altura: ${element.height}<br>Fumador: ${element.smoker}<br>País: ${element.country}<br>Tipo de sangre: ${element.bloodtype}<br>Caso cerrado: ${element.closed}<br>Cirugías anteriores: ${element.prev_surgery}</p>`;
        displayp.appendChild(opt);
    });
    
    {document.getElementById('Nombre').innerHTML = "";
    const opt = document.createElement('div');
    opt.innerHTML = `Hola, + ${respJson.name}`;
    document.getElementById('Nombre').appendChild(opt);
    }

    displaym.innerHTML = "";
    messages.forEach(element => {
        const opt = document.createElement('div');
        opt.className = "display_element";
        opt.innerHTML = `<p><b>${element.sender}</b> <font size="3">(${element.timestamp})<br>Para: Mi, ${element.cc}</font></p><p>${element.message}`;
        displaym.appendChild(opt);
    });


}

run();

