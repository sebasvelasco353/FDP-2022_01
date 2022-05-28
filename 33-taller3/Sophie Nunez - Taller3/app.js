const url = "https://raw.githubusercontent.com/sebasvelasco353/FDP-2022_01/main/33-taller3/weather.js";

const elm = document.getElementById("element");
const displayO = document.getElementById('displayOverall');
const displayC = document.getElementById('displayCity');

let theDays = [];
let theData;

window.onload = function () {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            processData(data)
            theData = data;
        });
}

class Day {
    constructor(day, temp, prep, uv, sunny, city, weeklyOverall) {
        this.day = day;
        this.temp = temp;
        this.prep = prep;
        this.uv = uv;
        this.sunny = sunny;
        this.city = city;
        this.weeklyOverall = weeklyOverall;
    }
    draw(elm) {
        const opt = document.createElement('div');
        if (this.sunny) {
            opt.className = "displayElement sunny";
        } else {
            opt.className = "displayElement rainy";
        }
        opt.innerHTML = `<p><b>${this.day}</b></p> <span class="temperature">${this.temp}°C</span> <p>Precipitation: ${this.prep}%</p> <p>Uv Index: ${this.uv}</p> <p>Will be ${this.sunny ? "Sunny ☀" : "Rainy 🌧" }</p>`;
        elm.appendChild(opt);
    }
    drawO(displayO) {
        const opt = document.createElement('div');
        opt.className = "displayO";
        opt.innerHTML = `This week will be: ${this.weeklyOverall} 🌧`;
        displayO.appendChild(opt);
    }
    drawC(displayC) {
        const opt = document.createElement('h1');
        opt.className = "displayC";
        opt.innerHTML = `Weather for ${this.city}`;
        displayC.appendChild(opt);
    }
}

function processData(data) {
    data.ciudades.forEach(ciudad => {
        ciudad.daily.forEach(dayObj => {
            theDays.push(new Day(dayObj.day, dayObj.celcius, dayObj.precipitation, dayObj.uvIndex, dayObj.sunny, ciudad.city, ciudad.weeklyOverall));
        });
    });
    drawElements();
}

function drawElements() {
    elm.innerHTML = "";
    displayO.innerHTML = "";
    displayC.innerHTML = "";
    const valueC = document.getElementById("selectC").value;
    const results = theDays.filter(day => day.city === valueC)
    const valueD = document.getElementById("selectD").value;
    for (let i = 0; i < results.length - 6; i++) {
        const element = results[i];
        element.drawO(displayO);
    }
    for (let i = 0; i < results.length - 6; i++) {
        const element = results[i];
        element.drawC(displayC);
    }
    if (valueD !== "all") {
        const D = results.filter(day => day.day === valueD);
            const element = D[0];
            element.draw(elm);
    } else if (valueD === "all") {
        for (let i = 0; i < results.length; i++) {
            const element = results[i];
            element.draw(elm);
        }
    }
}