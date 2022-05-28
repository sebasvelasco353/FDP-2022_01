const Url = "https://raw.githubusercontent.com/sebasvelasco353/FDP-2022_01/main/33-taller3/weather.js";

gsap.from('.Screen', { duration: 2, x: '-100%', ease: 'power2.inOut'})

const DailyCards = document.getElementById("Daily");
const Overall = document.getElementById("Overall");

let Days = [];
let TheData;


window.onload = function () {
    fetch(Url)
        .then(response => response.json())
        .then(data => {
            ProcessInfo(data)
            TheData = data;
        });
}


function ProcessInfo(Data) {
    Data.ciudades.forEach(City => {
        City.daily.forEach(dayObj => {
            Days.push(new Daily(dayObj.day, dayObj.celcius, dayObj.precipitation, dayObj.uvIndex, dayObj.sunny, City.city, City.weeklyOverall));
        });
        console.log(Days);
    });
    DisplayData();
}

class Daily {
    constructor(day, celcius, precipitation, uvIndex, sunny, city, weeklyOverall) {
        this.day = day;
        this.celcius = celcius;
        this.precipitation = precipitation;
        this.uvIndex = uvIndex;
        this.sunny = sunny;
        this.city = city;
        this.weeklyOverall = weeklyOverall;
    }
    DisplayCards(e) {
        const Info = document.createElement('div');
            if (this.sunny) {
                Info.className = "Element_sunny";
            } else {
                Info.className = "Element_rainy";
            }
            if (this.sunny) {
                Info.innerHTML = `<p> <span class="HeaderText-Card">${this.day}, <br> ${this.city}</span> <br> <span class="Temp-Card">${this.celcius}°C </span> <br> <span class = "Status-Card">${this.sunny ? "Sunny" : "Rainy"}</span> <span class="Icon"><ion-icon name="sunny"></ion-icon></span> <br> Precipitation ${this.precipitation}% <br> ${this.uvIndex} Uv</p>`;
                e.appendChild(Info);
            } else {
                Info.innerHTML = `<p> <span class="HeaderText-Card">${this.day}, <br> ${this.city}</span> <br> <span class="Temp-Card">${this.celcius}°C </span> <br> <span class = "Status-Card">${this.sunny ? "Sunny" : "Rainy"}</span> <span class="Icon"><ion-icon name="rainy"></ion-icon></span> <br> Precipitation ${this.precipitation}% <br> ${this.uvIndex} Uv</p>`;
                e.appendChild(Info);
            }
        }
    DisplayOverall(overallWeek) {
        const Info = document.createElement('div');
        if (this.sunny) {
            Info.className = "Overall_sunny";
        } else {
            Info.className = "Overall_rainy";
        }
        Info.innerHTML = `Hey, look like it's gonna be <span>${this.weeklyOverall}</span> in <span>${this.city}</span> this week`;
        overallWeek.appendChild(Info);
    }
}

function DisplayData() {
    DailyCards.innerHTML = "";
    Overall.innerHTML = "";
    const FilterC = document.getElementById("FilterC").value;
    const ResultsC = Days.filter(e => e.city === FilterC);
    const FilterD = document.getElementById("FilterD").value;
    for (let i = 0; i < ResultsC.length - 6; i++) {
        const element = ResultsC[i];
        element.DisplayOverall(Overall);
    }
    if (FilterD === "all") {
        for (let i = 0; i < ResultsC.length; i++) {
            const element = ResultsC[i];
            element.DisplayCards(DailyCards);
        }
    } else {
        const ResultsD = ResultsC.filter(e => e.day === FilterD);
        const element = ResultsD[0];
        element.DisplayCards(DailyCards);
    }
}

function Err() {
    Swal.fire(
        'Ups!',
        'looks like this function is temporarily unavailable.',
        'warning'
      )
}