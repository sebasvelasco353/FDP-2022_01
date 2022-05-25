const URL = 'https://raw.githubusercontent.com/sebasvelasco353/FDP-2022_01/main/33-taller3/weather.js';
const DAYS = [];
const domElement = document.getElementById("element");
let theData;

class Day {
    constructor(day, temp, precipitation, uvIndex, sunny, city) {
        this.day = day;
        this.temp = temp;
        this.precipitation = precipitation;
        this.uv = uvIndex;
        this.sunny = sunny;
        this.city = city;
    }
    
    draw(elm) {
        const opt = document.createElement('div');
        if (this.sunny) {
            opt.className = "display_element sunny";
        } else {
            opt.className = "display_element rainy";
        }
        opt.innerHTML = `<p><b class="tittle">${this.city} ${this.day} ${this.sunny ? "Soleado" : "Lloviendo"}</b></p> <p class="text"> Temperatura: ${this.temp}ºC Precipitación: ${this.precipitation} Indice UV: ${this.uv}</p>`;
        elm.appendChild(opt);
    }
}
window.onload = function() {
    fetch(URL)
    .then(response => response.json())
    .then (data => {
        processData(data)
        theData =data;
    });
}

function processData(data) {
    data.ciudades.forEach(ciudad => {
        ciudad.daily.forEach(dayObj => {
            DAYS.push(new Day(dayObj.day, dayObj.celcius, dayObj.precipitation, dayObj.uvIndex, dayObj.sunny, ciudad.city));
        });
    });
    drawElements();
}

function drawElements() {
    domElement.innerHTML = "";
    const valueC= document.getElementById("select").value;
    const results = DAYS.filter(day => day.city === valueC);
    console.log(results);

    const valueD = document.getElementById("daysSelector").value;
    console.log(valueD);

    const D =results.filter(day => day.day ===valueD);
    for (let i =D.length-1; i >= 0; i--) {
        const element = D[i];
        element.draw(domElement);
    }
}

 