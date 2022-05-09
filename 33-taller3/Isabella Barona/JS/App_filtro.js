const URL = 'https://raw.githubusercontent.com/sebasvelasco353/FDP-2022_01/main/33-taller3/weather.js';

const DAYS = [];
const domElement = document.getElementById("Display_day");
let APIData;

class Card {
    constructor(day, temp, precipitation, uvIndex, sunny, city){
        this.day = day;
        this.temp = temp;
        this.precipitation = precipitation;
        this.sunny = sunny;
        this.city = city;
        this.uv = uvIndex;
    }
    dibujar (elm){
        const opt = document.createElement('div');
        if (this.sunny){
            opt.className = "display_element sunny";
        } else {
            opt.className = "display_element rainy";
        }
        opt.innerHTML = `<h2>${this.day}</h2> <h3>It will be ${this.sunny ? "Sunny" : "Rainy"}</h3> Temperature: ${this.temp}°C<br> Precipitation: ${this.precipitation}<br> Uv Index: ${this.uv}`;
        elm.appendChild (opt);
    }
    drawCiu (ciu){
        const opt = document.createElement('h');
        opt.innerHTML = `${this.city}`;
        ciu.appendChild (opt);
    }
    weekly (week){
        const opt = document.createElement('div');
        if (this.sunny){
            opt.className = "display_week sunny";
        } else {
            opt.className = "display_week rainy";
        }
        opt.innerHTML = `<p><b>${this.day}</b></p> ${this.sunny ? "Sunny" : "Rainy"} (${this.temp}°C)`;
        week.appendChild (opt);
    }
}

window.onload = function (){
    fetch (URL)
    .then(response => response.json())
    .then(data => {
        processData(data)
        APIData = data;
    });
}

function processData(data){
    data.ciudades.forEach(ciudad => {
        DAYS.push(new Card (ciudad.city))
        ciudad.daily.forEach(dayObj =>{
            DAYS.push(new Card (dayObj.day, dayObj.celcius, dayObj.precipitation, dayObj.uvIndex, dayObj.sunny, ciudad.city));
        });  
    });
    drawElements ();
}

function drawElements() {
    domElement.innerHTML = "";
    document.getElementById('City').innerHTML = "";
    document.getElementById('weekly_overall').innerHTML = "";

    const valueC = document.getElementById("FiltroCiudad").value;
    const results = DAYS.filter(day => day.city === valueC);

    for (let i = 1; i > 0; i--) {
        const element = results[i];
        element.drawCiu(document.getElementById('City'));
    }

    const valueD = document.getElementById("FiltroDia").value;
    const D = results.filter(day => day.day === valueD);

    for (let i = D.length-1; i >= 0; i--) {
        const element = D[i];
        element.dibujar(domElement);
    }

    for (let i = 0; i < results.length; i++) {
        const element = results[i];
        element.weekly(document.getElementById('weekly_overall'));
    }
}