const url = "https://raw.githubusercontent.com/sebasvelasco353/FDP-2022_01/main/33-taller3/weather.js";

const dataCity = document.getElementById("dataCity");
const overallWeek = document.getElementById("overallWeek");

let days = [];
let theData;

window.onload = function(){
    fetch(url)
        .then(response => response.json())
        .then(data => {
            processData(data)
            theData = data;
            console.log(data)
        });
}

class Day {
    constructor(day, temp, precipitation, uvIndex, sunny, city, weeklyOverall) {
        this.day = day;
        this.temp = temp;
        this.precipitation = precipitation;
        this.uvIndex = uvIndex;
        this.sunny = sunny;
        this.city = city;
        this.weeklyOverall = weeklyOverall;
    }
    draw(elm) {
        const opt = document.createElement('div');
        if (this.sunny) {
            opt.className = "dataCity sunny";
        } else {
            opt.className = "dataCity rainy";
        }
        opt.innerHTML = `<h3><b>${this.day}</b></h3> <b><p>${this.temp}°C</p></b> <p>Precipitation: ${this.precipitation}%</p> <p>Uv Index: ${this.uvIndex}</p> <p>${this.sunny ? "Sunny" : "Rainy" }</p>`;
        elm.appendChild(opt);
    }
    drawOverall(overallWeek) {
        const opt = document.createElement('div');
        if (this.sunny) {
            opt.className = "overallWeek sunny";
        } else {
            opt.className = "overallWeek sunny";
        }
        opt.innerHTML = `${this.city} - ${this.weeklyOverall}`;
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
    dataCity.innerHTML = "";
    overallWeek.innerHTML = "";
    const filterC = document.getElementById("FilterC").value;
    const dataC = days.filter(day => day.city === filterC);
    const filtroD = document.getElementById("FilterD").value;
    for (let i = 0; i < dataC.length - 6; i++) {
        const element = dataC[i];
        element.drawOverall(overallWeek);
    }
    if (filtroD === "all") {
        for (let i = 0; i < dataC.length; i++) {
            const element = dataC[i];
            element.draw(dataCity);
        }
    } else {
        const resultadosD = dataC.filter(day => day.day === filtroD);
        const element = resultadosD[0];
        element.draw(dataCity);
    }
}
