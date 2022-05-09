const URL = 'https://raw.githubusercontent.com/sebasvelasco353/FDP-2022_01/main/33-taller3/weather.js';
const DAYS = [];
const domElement = document.getElementById("element");
let theData;

class Day {
    constructor(day, temp, precipitation, uvIndex, sunny, city) {
        this.day = day;
        this.temp = temp;
        this.precipitation = precipitation;
        this.uv = uvIndex;
        this.sunny = sunny;
        this.city = city;
    }
    
    draw(elm) {
        const opt = document.createElement('div');
        if (this.sunny) {
            opt.className = "display_element sunny";
        } else {
            opt.className = "display_element rainy";
        }
        opt.innerHTML = `<p><b class="tittle">${this.city} ${this.day} ${this.sunny ? "Soleado" : "Lloviendo"}</b></p> <p class="text"> Temperatura: ${this.temp}ºC Precipitación: ${this.precipitation} Indice UV: ${this.uv}</p>`;
        elm.appendChild(opt);
    }
}
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
        ciudad.daily.forEach(dayObj => {
            DAYS.push(new Day(dayObj.day, dayObj.celcius, dayObj.precipitation, dayObj.uvIndex, dayObj.sunny, ciudad.city));
        });
    });
    drawElements();
}

function drawElements() {
    domElement.innerHTML = "";
    const valueC= document.getElementById("select").value;
    const results = DAYS.filter(day => day.city === valueC);
    console.log(results);

    const valueD = document.getElementById("daysSelector").value;
    console.log(valueD);

    const D =results.filter(day => day.day ===valueD);
    for (let i =D.length-1; i >= 0; i--) {
        const element = D[i];
        element.draw(domElement);
    }
}
//ANIMACIONES
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
