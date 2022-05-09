const url = "https://raw.githubusercontent.com/sebasvelasco353/FDP-2022_01/main/33-taller3/weather.js";

//cada día es un objeto
const Days = [];
const domElement = document.getElementById("element");
let DataAll; 

class Day {
    constructor(day, temp, precipitation, uvIndex, sunny, city) {
        this.day = day;
        this.temp = temp;
        this.precipitation = precipitation;
        this.uvIndex = uvIndex;
        this.sunny = sunny;
        this.city = city;
    }
    draw(elm) {
       const opt = document.createElement('div');
       if (this.sunny){
        opt.className = "display_weeklyoverall Sunny";
    } else {
        opt.className = "display_weeklyoverall Rainy";
    }
       opt.innerHTML =  `<h2><b>${this.city}, ${this.day}</b></h2>, <p>It seems that today will be ${this.sunny ? "Sunny" : "Rainy"}  ${this.temp}º, ${this.precipitation}%, ${this.uvIndex}`
       elm.appendChild(opt);
    }
}

window.onload = function() {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        processData(data)
        DataAll = data;
    });
}

function processData(data) {
    data.ciudades.forEach(ciudad => {
        ciudad.daily.forEach(dayObj => {
            Days.push(new Day(dayObj.day, dayObj.celcius, dayObj.precipitation, dayObj.uvIndex, dayObj.sunny, ciudad.city));
        }); 
    });   
    drawElements();
}

function drawElements() {
    domElement.innerHTML = "";
    const valueCity = document.getElementById("filterCitiesSelect").value;
    const results = Days.filter(day => {
        console.log(day.city === valueCity, day.city, valueCity);
        return day.city === valueCity
    });
    console.log(results);


    const valueDay = document.getElementById("filterDays").value;
    console.log(valueDay);

    const Daysresults = results.filter(day => day.day === valueDay);
    for (let i = results.length-1; i >= 0; i--) {
        const element = results[i];
        element.draw(domElement);       
    }
}

