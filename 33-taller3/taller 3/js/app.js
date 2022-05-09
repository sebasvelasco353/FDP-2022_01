const URL = 'https://raw.githubusercontent.com/sebasvelasco353/FDP-2022_01/main/33-taller3/weather.js';

const DAYS = [];
const domElement = document.getElementById("Display_Day");
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
        opt.innerHTML = `<h2>${this.day}</h2> <h3>It will be ${this.sunny ? "Sunny" : "Rainy"}</h3> 
        Temperature: ${this.temp}°C<br> Precipitation: ${this.precipitation}<br> Uv Index: ${this.uv}`;
        elm.appendChild (opt);
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
        ciudad.daily.forEach(dayObj =>{
            DAYS.push(new Card (dayObj.day, dayObj.celcius, dayObj.precipitation, dayObj.uvIndex, dayObj.sunny, 
                ciudad.city));
        });  
    });
    drawElements ();
}



function drawElements() {
    domElement.innerHTML = "";
    const valueC = document.getElementById("filterCity").value;
    const results = DAYS.filter(day => day.city === valueC);
    const valueD = document.getElementById("filter2").value;
    if (valueD !== "todos") {
        const D = results.filter(day => day.day === valueD);
        for (let i = D.length-1; i >= 0; i--) {
            const element = D[i];
            element.dibujar(domElement);
        }
    } else if (valueD === "todos") {
        for (let i = 0; i < results.length; i++) {
            const element = results[i];
            element.dibujar(domElement);
        }
    }
}


