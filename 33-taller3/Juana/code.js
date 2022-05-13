const URL = 'https://raw.githubusercontent.com/Juanaa16/FDP-2022_01/main/33-taller3/Juana/weather.js'

const DAYS = [];
const domElement = document.getElementById("element");
const wholeWeek = document.getElementById("wholeWeek");
let theData;


class Day {
    constructor(day, temp, sunny, city, uvIndex, precipitation, wholeWeek) {
        this.day = day;
        this.temp = temp;
        this.sunny = sunny;
        this.city = city;
        this.prec = precipitation;
        this.uvIndex = uvIndex;
        this.wholeWeek = wholeWeek;
    }
    draw(domElement) {
        const opt = document.createElement('div');
        if (this.sunny) {
            opt.className = "changes Sun";
        } else {
            opt.className = "changes Rain";
        }
        opt.innerHTML = `<p><b>${this.city} ${this.day}</b></p><br>Celcius: ${this.temp}</br><br>uv Index: ${this.uvIndex}</br><br>${this.sunny ? "Sunny" : "Rainy" }</br><br>precipitation:${this.prec}</br>`;
        domElement.appendChild(opt);
    }
    drawW(wholeWeek) {
        const opt = document.createElement('div');
        opt.className = "wholeWeek";
        opt.innerHTML = `This week will be mostly: ${this.wholeWeek}.`;
        wholeWeek.appendChild(opt);
    }

}

window.onload = function () {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            processData(data)
            theData = data;
        });

}

function processData(data) {
    data.ciudades.forEach(ciudad => {
        ciudad.daily.forEach(dayObj => {
            DAYS.push(new Day(dayObj.day, dayObj.celcius, dayObj.sunny, ciudad.city, dayObj.uvIndex, dayObj.precipitation, ciudad.weeklyOverall));
        });
    });
    drawElements();
}

function drawElements() {
    domElement.innerHTML = "";
    wholeWeek.innerHTML = "";
    const valueCity = document.getElementById("select").value;
    const results = DAYS.filter(day => day.city === valueCity);
    const valueDays = document.getElementById("daysSelector").value;
    for (let i = 0; i < results.length - 6; i++) {
        const element = results[i];
        element.drawW(wholeWeek);
    }
    if (valueDays === "week") {
        const resultsDays = results.filter(day => day.day === valueDays);
        for (let i = 0; i < results.length; i++) {
            const element = results[i];
            element.draw(domElement);
        }
    } else if (valueDays !== "week") {
        const resultsDays = results.filter(day => day.day === valueDays);
        const element = resultsDays[0];
        element.draw(domElement);
    }
}