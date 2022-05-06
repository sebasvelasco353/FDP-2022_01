const url = 'https://raw.githubusercontent.com/sebasvelasco353/FDP-2022_01/main/33-taller3/weather.js';

//const y let
const filterSelect = document.getElementById('FiltroCiudad');
const filter2Select = document.getElementById('FiltroDia');
const displayday = document.querySelector('#Display_day');

let jsRes;
let data;

//async function
async function run(){
    const res = await fetch(url);
    jsRes = await res.json();
    data = jsRes.ciudades;
    Cali = data[0]["daily"];
    Bogota = data[1]["daily"];
    results = filterBy(filterSelect.value);
    resultsday = filterdayBy(filter2Select.value);
    drawciudad();
    drawrain();
}

//filtro de ciudad
function filterBy(criteria) {
    const filters = {
    'Cali': data.filter(p => p.city === "Cali"),
    'Bogota': data.filter(p => p.city === "Bogota")
    }
    return filters[criteria];
} 

filterSelect.addEventListener("change", (e) => {
    results = filterBy(filterSelect.value);
    drawciudad();
}
)

function drawciudad() {
    document.getElementById('City').innerHTML = "";
    results.forEach(element => {
        const opt = document.createElement('h');
        opt.innerHTML = `${element.city}`;
        document.getElementById('City').appendChild(opt);
    });
    document.getElementById('Weekly').innerHTML = "";
    results.forEach(element => {
        const opt = document.createElement('p');
        opt.innerHTML = `It will be <b>${element.weeklyOverall}</b> this week`;
        document.getElementById('Weekly').appendChild(opt);
    });
}

//filtro de día
function filterdayBy(criteria) {
    const filtersCali = {
    'All': Cali,
    'Monday': Cali.filter(p => p.day === "monday"),
    'Tuesday': Cali.filter(p => p.day === "tuesday"),
    'Wednesday': Cali.filter(p => p.day === "wednesday"),
    'Thursday': Cali.filter(p => p.day === "thursday"),
    'Friday': Cali.filter(p => p.day === "fiday"),
    'Saturday': Cali.filter(p => p.day === "saturday"),
    'Sunday': Cali.filter(p => p.day === "sunday")
    }
    const filtersBog = {
    'All': Bogota,
    'Monday': Bogota.filter(p => p.day === "monday"),
    'Tuesday': Bogota.filter(p => p.day === "tuesday"),
    'Wednesday': Bogota.filter(p => p.day === "wednesday"),
    'Thursday': Bogota.filter(p => p.day === "thursday"),
    'Friday': Bogota.filter(p => p.day === "fiday"),
    'Saturday': Bogota.filter(p => p.day === "saturday"),
    'Sunday': Bogota.filter(p => p.day === "sunday")
    }
    if (filterSelect.value === "Cali"){
        return filtersCali[criteria];
    }else{
        return filtersBog[criteria];
    }
} 

filter2Select.addEventListener("change", (e) => {
    resultsday = filterdayBy(filter2Select.value);
    drawrain();
})

function drawrain() {
    displayday.innerHTML = "";
    resultsday.forEach(element => {
        const opt = document.createElement('div');
        opt.className = "Rainy";
        opt.innerHTML = `<h3>${element.day}</h3> Temperature: ${element.celcius}°<br> UV Index: ${element.uvIndex}<br> Sunny: ${element.sunny}`;
        //el elemento "precipitation%" sale como error por el signo de %, por esa razón no lo agregué
        displayday.appendChild(opt);
    });
}

run();