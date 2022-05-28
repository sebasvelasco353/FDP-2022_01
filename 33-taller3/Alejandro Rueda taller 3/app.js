const URL_api = "https://raw.githubusercontent.com/Axelito02/FDP-2022_01/main/33-taller3/weather.js";

// search bar
const search_cities = document.getElementById('barsearch');

// containers to display the data
const display_temperature = document.querySelector('#conttemperature');
const display_precipation = document.querySelector('#contprecipitation');
const display_uvlevel = document.querySelector('#contultraviolet');
const display_sunny = document.querySelector('#contsunnies');
const display_city_title = document.querySelector('#cititilte');

let api;
let city;

async function run(){
    const res = await fetch(URL_api);
    api = await res.json();
    city = api.ciudades;
    results = search_cities.value;
    draw();
    console.log(city);
    console.log(api);
}

// funtion for get the object bogota
function draw(){
    city.forEach(city => {
        const opt = document.createElement('div');
        opt.className = "display_element";
        opt.innerHTML = `<p><b>${city.daily[0].celcius+" "+"degrees Celsius"}`;
        display_temperature.appendChild(opt);
    });

    city.forEach(city => {
        const opt = document.createElement('div');
        opt.className = "display_element";
        opt.innerHTML = `<p><b>${city.daily[0].precipitation+"%"}`;
        display_precipation.appendChild(opt);
    });

    city.forEach(city => {
        const opt = document.createElement('div');
        opt.className = "display_element";
        opt.innerHTML = `<p><b>${"uv index"+" "+city.daily[0].uvIndex}`;
        display_uvlevel.appendChild(opt);
    });

    city.forEach(city => {
        const opt = document.createElement('div');
        opt.className = "display_element";
        opt.innerHTML = `<p><b>${city.daily[0].sunny}`;
        display_sunny.appendChild(opt);
    });

    city.forEach(city => {
        const opt = document.createElement('div');
        opt.className = "display_element";
        opt.innerHTML = `<p><b>${city.city}`;
        display_city_title.appendChild(opt);
    });

}

function clear_all() {
    display_temperature.innerHTML = "";
    display_precipation.innerHTML = "";
    display_uvlevel.innerHTML = "";
    display_sunny.innerHTML = "";
    display_city_title.innerHTML = "";
}