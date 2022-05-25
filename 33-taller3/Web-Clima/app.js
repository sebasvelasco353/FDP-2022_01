const url = 'https://raw.githubusercontent.com/sebasvelasco353/FDP-2022_01/main/33-taller3/weather.js'

const filterC = document.getElementById('filterC');
const filterD = document.getElementById('filterD');
const displayO = document.querySelector('#displayOverall');
const displayD = document.querySelector('#displayDays');

let jsonRes;
let data;

async function run(){
    const res = await fetch(url);
    jsonRes = await res.json();
    data = jsonRes.ciudades;
    Cali = data[0]["daily"];
    Bogota = data[1]["daily"];
    results = filterBy(filterC.value);
    resultsD = filterdayBy(filterD.value);
    draw();
    drawD();
}

function filterBy(criteria) {
    const filter = {
        'Cali': data.filter(p => p.city === "Cali"),
        'Bogota': data.filter(p => p.city === "Bogota"),
    }
    return filter[criteria];
}

filterC.addEventListener("change", (e) => {
    results = filterBy(filterC.value);
    //console.log(results);//
    draw();
})

function draw() {
    document.getElementById('city').innerHTML = "";
    results.forEach(element => {
        const opt = document.createElement('h');
        opt.innerHTML = `${element.city}`;
        document.getElementById('city').appendChild(opt);
    });

    document.getElementById('week').innerHTML = "";
    results.forEach(element => {
        const opt = document.createElement('p');
        opt.innerHTML = `Overall, the week will be <b>${element.weeklyOverall}`;
        document.getElementById('week').appendChild(opt);
    });
}

function filterdayBy(criteria) {
    const filterCal = {
        'all': Cali,
        'mon': Cali.filter(p => p.day === "monday"),
        'tue': Cali.filter(p => p.day === "tuesday"),
        'wed': Cali.filter(p => p.day === "wednesday"),
        'thu': Cali.filter(p => p.day === "thursday"),
        'fri': Cali.filter(p => p.day === "fiday"),
        'sat': Cali.filter(p => p.day === "saturday"),
        'sun': Cali.filter(p => p.day === "sunday"),
    }
    const filterBog = {
        'all': Bogota,
        'mon': Bogota.filter(p => p.day === "monday"),
        'tue': Bogota.filter(p => p.day === "tuesday"),
        'wed': Bogota.filter(p => p.day === "wednesday"),
        'thu': Bogota.filter(p => p.day === "thursday"),
        'fri': Bogota.filter(p => p.day === "fiday"),
        'sat': Bogota.filter(p => p.day === "saturday"),
        'sun': Bogota.filter(p => p.day === "sunday"),
    }
    if (filterC.value === 'Cali'){
        return filterCal[criteria];
    }else{
        return filterBog[criteria];
    }
}

filterD.addEventListener("change", (e) => {
    resultsD = filterdayBy(filterD.value);
    //console.log(results);//
    drawD();
})

function drawD() {
    displayD.innerHTML = "";
    resultsD.forEach(element => {
        const opt = document.createElement('div');
        opt.className = "displayDay";
        opt.innerHTML = `${element.day}, ${element.celcius}, ${element.uvIndex}, ${element.sunny}`;
        //el simbolo de porcentaje que le pusiste a precipitation da error//
        displayD.appendChild(opt);
    });
}

run();