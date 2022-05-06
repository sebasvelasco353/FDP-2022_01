const URL_api = "https://raw.githubusercontent.com/Axelito02/FDP-2022_01/main/33-taller3/weather.js";

const search_cities = document.getElementById('bar_search');
const display_temperature = document.querySelector('#cards_temperature');
const display_precipation = document.querySelector('#cards_precipation');
const display_uvlevel = document.querySelector('#cards_levelUV');
const display_sunny = document.querySelector('#cards_sunny');

let api;
let city;
let days;

async function run(){
    const content_api = await fetch(URL_api);
    api = await content_api.json();
    api.ciudades.forEach(e => {

        if(e.city === search_cities.value){
            city=e
        }

    });

    if(api.ciudades[0].daily[1].sunny){
        display_temperature.className = "cards--sunny"
    }
    
    console.log(city.city);
}

if(city.daily[0].sunny){
    display_temperature.className = ""    
}
