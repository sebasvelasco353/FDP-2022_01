const URL = 'https://raw.githubusercontent.com/sebasvelasco353/FDP-2022_01/main/33-taller3/weather.js';

const DayCards = document.getElementById("Day");
const Overall = document.getElementById("Overall");

let DAYS = [];
let theData;

window.onload = function() {
    fetch(URL)
    .then(response => response.json())
    .then (data => {
        processData(data)
        theData =data;
    });
}

function processData(data) {
    data.ciudades.forEach(ciudad => {
        console.log(ciudad);
        ciudad.daily.forEach(dayObj => {
            DAYS.push(new Day(dayObj.day, dayObj.celcius, dayObj.precipitation, dayObj.uvIndex, dayObj.sunny, ciudad.city, ciudad.weeklyOverall));
        });
    });
    drawElements();
}

class Day {
    constructor(day, temp, precipitation, uvIndex, sunny, city, weeklyOverall) {
        this.day = day;
        this.temp = temp;
        this.precipitation = precipitation;
        this.uv = uvIndex;
        this.sunny = sunny;
        this.city = city;
        this.weekly = weeklyOverall;
        }
    
    drawCards(elm) {
        const opt = document.createElement('div');
        if (this.sunny) {
            opt.className = "elementSunny";
        } else {
            opt.className = "elementRainy";
        }
        opt.innerHTML = `<p> <span class="Tittle">${this.day}, <br> ${this.city}</span> <br> <span class="textTemp">${this.temp}°C </span> <br> <span class = "textStatus">${this.sunny ? "Soleado" : "Lluvioso"}</span> <br> Precipitation: ${this.precipitation}% <br> ${this.uv} Uv</p>`;        
        elm.appendChild(opt);
    }

d_overall(overall) {
    const opt = document.createElement('div');
    if (this.sunny) {
        opt.className = "overallsunny";
    } else {
        opt.className = "overallRainy";
    }
    opt.innerHTML = `El clima estara <span>${this.weekly}</span> en <span>${this.city}</span> esta semana`;
    overall.appendChild(opt);
}
}

function drawElements() {
    DayCards.innerHTML = "";
    Overall.innerHTML = "";
    const valueC= document.getElementById("select").value;
    const resultsC = DAYS.filter(day => day.city === valueC);
    const valueD = document.getElementById("daysSelector").value;

    for (let i = 0; i < resultsC.length - 6; i++) {
        const element = resultsC[i];
        element.d_overall(Overall);
    }
    if (valueD === "todos") {
        for (let i = 0; i < resultsC.length; i++) {
            const element = resultsC[i];
            element.drawCards(DayCards);
        }
    } else {
        const resultsD = resultsC.filter(day => day.day === valueD);
        const element = resultsD[0];
        element.drawCards(DayCards);
    }
}
//ANIMACIONES´
gsap.from('.nav-bar', { duration: 1, x: '-100%', ease: 'power3.inOut', delay: 0.2})
gsap.from('.Inicio', { duration: 2, delay: 0.1, x: '-100%', opacity: '0', ease: 'power3.inOut'})

//NAV
const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      })

        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      })
 

sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
})

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
})

// MANTENIMIENTO 
function mantenimiento_pagina(){
    swal("Lo sentimos, no se puede realizar esta acción", "Esta sección se encuentra en mantenimiento","error");
}
