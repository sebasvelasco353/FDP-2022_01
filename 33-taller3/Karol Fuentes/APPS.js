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
       opt.innerHTML =  `<h2><b>${this.city}, ${this.day}</b></h2><br><p>It seems that today will be ${this.sunny ? "Sunny" : "Rainy"}  <br><br><p>Feels like: <b>${this.temp}ºC</b><br><p>Precipitaton: <b>${this.precipitation}% </b><br><p>UV Index: <b>${this.uvIndex}</b><br><br>`
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

    if (valueDay === "thisWeek") {
        for (let i = 0; i < results.length; i++) {
            const element = results[i];
            element.draw(domElement); 
        }
    } else {
        const Daysresults = results.filter(day => day.day === valueDay);
        const element = Daysresults[0];
        element.draw(domElement);
    }

    /*const Daysresults = results.filter(day => day.day === valueDay);
    for (let i = Daysresults.length-1; i >= 0; i--) {
        const element = Daysresults[i];
        element.draw(domElement);       
    }*/
}

