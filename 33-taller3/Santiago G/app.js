const url = "https://raw.githubusercontent.com/sebasvelasco353/FDP-2022_01/main/33-taller3/weather.js";

const CityInfo = document.getElementById("Info");
const DayInfo = document.getElementById("InfoD");

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
    constructor(day, celcius, precipitation, uvIndex, sunny, city, weeklyOverall) {
        this.day = day;
        this.celcius = celcius;
        this.precipitation = precipitation;
        this.uvIndex = uvIndex;
        this.sunny = sunny;
        this.city = city;
        this.weeklyOverall = weeklyOverall;
    }
    draw_City(elm) {
      const opt = document.createElement('div');
      if (this.sunny) {
          opt.className = "data_city sunnyC";
      } else {
          opt.className = "data_city rainyC";
      }
      opt.innerHTML = `<h3>${this.city} - ${this.weeklyOverall}</h3>`;
      elm.appendChild(opt);
  }
    draw(elm) {
        const opt = document.createElement('div');
        if (this.sunny) {
            opt.className = "data_dayS sunny";
        } else {
            opt.className = "data_day rainy";
        }
        opt.innerHTML = `<h2><b>${this.day}</b></h2> <p>${this.celcius}°C</p> <p>${this.precipitation}%</p> <p> ${this.uvIndex}</p> <p>${this.sunny ? "Soleadito" : "Lluviosito" }</p>`;
        elm.appendChild(opt);
    }

    
}

function processData(data) {
    data.ciudades.forEach(ciudad => {
        ciudad.daily.forEach(dayObj => {
            days.push(new Day(dayObj.day, dayObj.celcius, dayObj.precipitation, dayObj.uvIndex, dayObj.sunny, ciudad.city, ciudad.weeklyOverall));
        });
    });
    draw();
}

function draw() {
  CityInfo.innerHTML = "";
  DayInfo.innerHTML = "";
    const filter = document.getElementById("filter").value;
    const dataC = days.filter(day => day.city === filter);
    const filtro2 = document.getElementById("filter2").value;
    for (let i = 0; i < dataC.length - 6; i++) {
        const element = dataC[i];
        element.draw_City(DayInfo);
    }
    if (filtro2 === "all") {
        for (let i = 0; i < dataC.length; i++) {
            const element = dataC[i];
            element.draw(CityInfo);
        }
    } else {
        const resultadosD = dataC.filter(day => day.day === filtro2);
        const element = resultadosD[0];
        element.draw(CityInfo);
    }
}

