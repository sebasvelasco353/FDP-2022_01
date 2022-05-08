const url = 'https://raw.githubusercontent.com/sebasvelasco353/FDP-2022_01/main/33-taller3/weather.js'

window.onload = function() {
    fetch(URL)
    .then(response => response.json())
    .then(data => console.log(data));
}

