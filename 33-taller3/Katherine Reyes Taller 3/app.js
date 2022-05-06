const url = 'https://raw.githubusercontent.com/sebasvelasco353/FDP-2022_01/main/33-taller3/weather.js';

//ANIMACIONES
gsap.from('.nav-bar', { duration: 1, x: '-100%', ease: 'power3.inOut', delay: 0.2})

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

//CONST BODY AND FILTERS
const filterSelect = document.getElementById('filterCiudades');
const filterSelect2= document.getElementById('filterDias');
const displayInfo = document.querySelector('#displayInfoguia');
const displaydias = document.querySelector('#display_Dias');

//LET
let jsonRes;
let data;

//ASYNC FUNCTION
async function run(){
    const res = await fetch(url);
    jsonRes = await res.json();
    data = jsonRes.ciudades;
    Cali = data[0]["daily"];
    Cali = data[1]["daily"];
    results = filterBy(filterSelect.value);
    results = filterDiasBy(filterSelect2.value);
    draw();
}

//FILTRO 
function filterBy(criteria) {
    
    const filters = {
    'Cali': data.filter(p => p.city === "Cali"),
    'Bogota': data.filter(p => p.city === "Bogota"),
    }
    return filters[criteria];
}
    filterSelect.addEventListener("change",(e) => {
    results = filterBy(filterSelect.value);
    draw(); 
    })

//DISPLAY
function draw(){
    document.getElementById('City').innerHTML = "";
    results.forEach(element => {
        const opt = document.createElement('h');
        opt.innerHTML = '${element.Ciudad}';
        document.getElementById('Ciudad').appendChild(opt);
    });
}

function draw(){
    document.getElementById('Weekly').innerHTML = "";
    results.forEach(element => {
        const opt = document.createElement('h');
        opt.innerHTML = '${element.Weekly}';
        document.getElementById('Weekly').appendChild(opt);
    });
}

filterSelect.addEventListener("change", (e) => {
    results = filterBy(filterSelect.value);
    console.log(results);
    draw();
});

function mantenimiento_pagina(){
    swal("Lo sentimos, no se puede realizar esta acción", "Esta sección se encuentra en mantenimiento","error");
    }