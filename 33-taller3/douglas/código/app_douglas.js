const url = 'https://raw.githubusercontent.com/sebasvelasco353/FDP-2022_01/main/33-taller3/weather.js';
const resultcontain = document.getElementById("container");
let DAYS = [];

window.onload = function () {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            proccesinfo(data)
        });
}
class Day {
    constructor(day, temp, precipitation, sunny, city,) {
        this.day = day;
        this.temp = temp;
        this.precipitation = precipitation
        this.sunny = sunny;
        this.city = city;
    }
    draw() {
        const imp = document.createElement('div');
        if (this.sunny === true) {
            imp.className = "display_day_sunny"
        } else{
            imp.className = "display_day_cloudy"
        }
        imp.innerHTML = `${this.day}, temperature:${this.temp}°, precipitation probability:${this.precipitation}%, ${this.sunny ? "sunny" : "cloudy"}`;
        resultcontain.appendChild(imp);
    }
}
function proccesinfo(data) {
    data.ciudades.forEach(ciudad => {
        ciudad.daily.forEach(dayobj => {
            DAYS.push(new Day(dayobj.day, dayobj.celcius, dayobj.precipitation, dayobj.sunny, ciudad.city));
        }); console.log(DAYS);
    });
    setinfo();
}

function setinfo() {
    resultcontain.innerHTML = "";
    const valueCity = document.getElementById("maincitys").value;
    const results = DAYS.filter(day => day.city === valueCity)
    const valueDay = document.getElementById("dias").value;
    let DIAS = results.filter(day => day.day === valueDay);
    if (valueDay === "all") {
        for (let i = 0; i < results.length; i++) {
            const element = results[i];
            element.draw(results);
        }
    } else {
        for (let i = 0; i < DIAS.length; i++) {
            const element = DIAS[i];
            element.draw(DIAS);
        }
    }
}