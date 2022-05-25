const url = "https://raw.githubusercontent.com/sebasvelasco353/FDP-2022_01/main/33-taller3/weather.js";

const datosClima = document.getElementById("datosClima");
const overallWeek = document.getElementById("overallWeek");

let days = [];
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
            opt.className = "displayElementSunny";
        } else {
            opt.className = "displayElementRainy";
        }
        opt.innerHTML = `<p><b>${this.day}</b></p> <span class="temperature">${this.temp}°C</span> <p>Precipitation: ${this.prep}%</p> <p>Uv Index: ${this.uv}</p> <p>${this.sunny ? "Sunny" : "Rainy" }</p>`;
        elm.appendChild(opt);
    }
    drawOverall(overallWeek) {
        const opt = document.createElement('div');
        if (this.weeklyOverall === "Rainy") {
            opt.className = "displayOverallRainy";
        } else {
            opt.className = "displayOverallSunny";
        }
        opt.innerHTML = `This week will be <span>${this.weeklyOverall}</span> in this city`;
        overallWeek.appendChild(opt);
    }
}

function processData(data) {
    data.ciudades.forEach(ciudad => {
        ciudad.daily.forEach(dayObj => {
            days.push(new Day(dayObj.day, dayObj.celcius, dayObj.precipitation, dayObj.uvIndex, dayObj.sunny, ciudad.city, ciudad.weeklyOverall));
        });
    });
    drawElements();
}

function drawElements() {
    datosClima.innerHTML = "";
    overallWeek.innerHTML = "";
    const filtroC = document.getElementById("selectCiudad").value;
    const resultadosC = days.filter(day => day.city === filtroC);
    const filtroD = document.getElementById("selectDia").value;
    for (let i = 0; i < resultadosC.length - 6; i++) {
        const element = resultadosC[i];
        element.drawOverall(overallWeek);
    }
    if (filtroD === "all") {
        for (let i = 0; i < resultadosC.length; i++) {
            const element = resultadosC[i];
            element.draw(datosClima);
        }
    } else {
        const resultadosD = resultadosC.filter(day => day.day === filtroD);
        const element = resultadosD[0];
        element.draw(datosClima);
    }
}