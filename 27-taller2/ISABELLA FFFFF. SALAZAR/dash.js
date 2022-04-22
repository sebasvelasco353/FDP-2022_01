const url = "https://raw.githubusercontent.com/salazar2356/FDP-2022_01/main/27-taller2/user.json"

const filterSelect = document.getElementById('filter');
const displayp = document.querySelector('#returnData');
const displaym = document.querySelector('#display_mensajes');

let jsonRes;
let data;
let mensajes;

// function async

async function run() {
    const res = await fetch(url);
    jsonRes = await res.json();
    data = jsonRes.cases;
    mensajes = jsonRes.messages;
    results = filterBy(filterSelect.value);
    draw();
}

//filter

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
        const opt = document.createElement('tr');
        opt.className = "display_element";
        opt.innerHTML = `<td><b>${element.name} ${element.last_name}</b></td> <td>${element.age}</td> <td>${element.height}</td> <td>${element.smoker}</td> <td>${element.country}</td> <td>${element.bloodtype}</td> <td>${element.closed}</td> <td>${element.prev_surgery}</td>`;
        displayp.appendChild(opt);
    }); {
        document.getElementById('results').innerHTML = "";
        const opt = document.createElement('h');
        opt.innerHTML = `${results.length} results`;
        document.getElementById('results').appendChild(opt);
    }
   
        displaym.innerHTML = "";
        mensajes.forEach(element => {
            const opt = document.createElement('div');
            opt.className = "display_element";
            opt.innerHTML = `<p><b>${element.sender}</b> <font size="3">(${element.timestamp})<br> Para: Mi,${element.cc}</font></p><p>${element.message}`;
            displaym.appendChild(opt);
             
        });

}








run();

