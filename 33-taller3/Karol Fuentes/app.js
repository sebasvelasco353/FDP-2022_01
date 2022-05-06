const url = 'https://raw.githubusercontent.com/sebasvelasco353/FDP-2022_01/main/33-taller3/weather.js';

const filterSelectCity = document.getElementById('filterCities');
const filterSelectDay = document.getElementById('filterDays');
const displayData = document.getElementById('displayData');
const displayDays = document.getElementById('displayDays');

let data;
let resJson;

async function run(){
    const response = await fetch(url);
    resJson = await response.json();
    data = resJson.ciudades;
    Cali = data[0] ["daily"];
    Bogota = data[1] ["daily"];
    results = filterBy(filterSelectCity.value);
    resultsDays = filterDaysBy(filterSelectDay.value);
    draw();
    drawDays();
}

function filterBy(criteria) {
    const filters = {
        'cali': data.filter(p => p.city === "Cali"),
        'bogota': data.filter(p => p.city === "Bogota"),
    }
    return filters[criteria];
}

filterSelectCity.addEventListener("change", (e) => {
    results = filterBy(filterSelectCity.value);
    draw();
})

function draw() {
    document.getElementById('city').innerHTML = "";
    results.forEach(element => {
        const opt = document.createElement('h');
        opt.innerHTML = `${element.city}`;
        document.getElementById('city').appendChild(opt);
    });
    document.getElementById('weeklyoverall').innerHTML = "";
    results.forEach(element => {
        const opt = document.createElement('p');
        opt.innerHTML = `Tt seems that this week will be ${element.weeklyOverall}`;
        document.getElementById('weeklyoverall').appendChild(opt);
    });
}

function filterDaysBy(criteria){
    const filterSelectCali = {
        'All': Cali,
        'Monday': Cali.filter(p => p.day === "monday"),
        'Tuesday': Cali.filter(p => p.day === "tuesday"),
        'Wednesday': Cali.filter(p => p.day === "wednesday"),
        'Thursday': Cali.filter(p => p.day === "thursday"),
        'Friday': Cali.filter(p => p.day === "fiday"),
        'Saturday': Cali.filter(p => p.day === "saturday"),
        'Sunday': Cali.filter(p => p.day === "sunday"),
    }
    const filterSelectBogota = {
        'All': Bogota,
        'Monday': Bogota.filter(p => p.day === "monday"),
        'Tuesday': Bogota.filter(p => p.day === "tuesday"),
        'Wednesday': Bogota.filter(p => p.day === "wednesday"),
        'Thursday': Bogota.filter(p => p.day === "thursday"),
        'Friday': Bogota.filter(p => p.day === "fiday"),
        'Saturday': Bogota.filter(p => p.day === "saturday"),
        'Sunday': Bogota.filter(p => p.day === "sunday"),
    }
    if (filterSelectDay.value === "Cali"){
        return filterSelectCali[criteria];
    } else{
        return filterSelectBogota[criteria];
    }
}

 filterSelectDay.addEventListener("change", (e) => {
    resultsDays = filterDaysBy(filterSelectDay.value);
    drawDays();
 })

function drawDays() {
    displayDays.innerHTML = "";
    resultsDays.forEach(element => {
        const opt = document.createElement('div');
        opt.className = "displayDays";
        opt.innerHTML = `${element.day}, ${element.celcius}, ${element.sunny}, ${element.uvIndex}`;
        displayDays.appendChild(opt);

        //precipitation tiene un % en el url -> no funciona
    });
}

run();