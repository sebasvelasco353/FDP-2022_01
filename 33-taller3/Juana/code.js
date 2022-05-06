const result = document.querySelector('.result');
const form = document.querySelector('.get-weather');
const nameCity = document.querySelector('#city');
const nameCountry = document.querySelector('#country');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (nameCity.value === '' || nameCountry.value === '') {
        showError('Ambos campos son obligatorios...');
        return;
    }

    callAPI(nameCity.value, nameCountry.value);

})

function callAPI(city, weather){
    const url = `https://raw.githubusercontent.com/sebasvelasco353/FDP-2022_01/main/33-taller3/weather.js`;

    fetch(url)
        .then(data => {
            return data.json();
        })
        .then(dataJSON => {
            if (dataJSON.cod === '404') {
                showError('Ciudad no encontrada...');
            } else {
                clearHTML();
                showWeather(dataJSON);
            }

        })

    }

    function showWeather(data){
        const {name, main:{temp, temp_min, temp_max}, weather:[arr]} = data;
    
        const degrees = kelvinToCentigrade(temp);
        const min = kelvinToCentigrade(temp_min);
        const max = kelvinToCentigrade(temp_max);
    
        const content = document.createElement('div');
        content.innerHTML = `
            <h5>Clima en ${name}</h5>
            <img src="https://openweathermap.org/img/wn/${arr.icon}@2x.png" alt="icon">
            <h2>${degrees}°C</h2>
            <p>Max: ${max}°C</p>
            <p>Min: ${min}°C</p>
        `;
    
        result.appendChild(content);

    }
