const url = 'https://raw.githubusercontent.com/sebasvelasco353/FDP-2022_01/main/33-taller3/weather.js';

//Filtro Ciudad ------------
const filterSelect = document.getElementById('filterCity');
const filter2Select = document.getElementById('filterDay');
const displayp = document.querySelector('#display_weath');
const displaym = document.querySelector('#display_day');

let apiData;
let data;

async function run(){
    const res = await fetch(url);
    apiData = await res.json();
    data = apiData.ciudades;
    Cali = data [0]["daily"];
    Bogota = data [1]["daily"];
    results = filterBy(filterSelect.value);
    results = filterdayBy (filter2Select.value)
    draw();
}

function filterBy(criteria) {
    const filters = {
    "Cali": data.filter (p=> p.city === "Cali" ),
    "Bogota": data.filter (p=> p.city === "Bogota" ),
    }
    return filters[criteria];
}

filterSelect.addEventListener("change", (e) => {
    results = filterBy(filterSelect.value);
    draw();
})

function draw() {
    document.getElementById("City").innerHTML = "";
    results.forEach(element => {
        const opt = document.createElement('h');
        opt.innerHTML = `${element.city}`;
        document.getElementById("City").appendChild(opt);
    });

}

run();

