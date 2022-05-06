//const input = document.querySelector('input');
//const button = document.querySelector('button');
//const Climacontainer = document.querySelector('.ClimaContainer');

//button.addEventListener('click', (e) => {
  //  e.preventDefault();
    //decirClima (input.value);
//})
//function traerClima(ciudades) {
  //  fetch ('https://raw.githubusercontent.com/sebasvelasco353/FDP-2022_01/main/33-taller3/weather.js')
    //.then((res) => res.json())
    //.then((data) => {
     //   decirClima (data);
    //});
 
//}
//function decirClima(clima) {
    

  //  const h3 = document.createElement("h2")
    //h3.textContent = clima.ciudades
    //}

    //Tercer intento 

    // const result = document.querySelector('.result')
    // const form = document.querySelector('.giveThe-weather')
    // const nameCity = document.querySelector('#city')
    // const days = document.querySelector('#days');
    
    // form.addEventListener('submit', (e) => {
    //     e.preventDefault();

    //     if (nameCity.value === '' ||  days.value === '') {
    //     showError('Campos obligatorios');
    //     return; 
    // }

    //     callAPI(nameCity.value, days.value);
    // })

    // function callAPI(city, days) {
    //     const url = 'https://raw.githubusercontent.com/sebasvelasco353/FDP-2022_01/main/33-taller3/weather.js';

    //     fetch(url)
    //     .then(data => {
    //         return data.json();
    //     })
    //     .then(dataJSON =>{
    //         console.log(dataJSON);
    //     })


        
    // }

    const result = document.querySelector('.result');
    const form = document.querySelector('.get-weather');
    const nameCity = document.querySelector('#city');
    const day = document.querySelector('#day');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    
        if (nameCity.value === '' || day.value === '') {
            showError('Ambos campos son obligatorios...');
            return;
        }
    
        callAPI(nameCity.value, day.value);
        //console.log(nameCity.value);
        //console.log(nameCountry.value);
    })
    
    function callAPI(city, day){
        const url = `https://raw.githubusercontent.com/sebasvelasco353/FDP-2022_01/main/33-taller3/weather.js`;
    
        fetch(url)
            .then(data => {
                return data.json();
            })
            .then(dataJSON => {
                console.log(dataJSON);
            })
    }
    //DISPLAY DE LOS DATOS NO FUNCIONALLLL AAAA
//     function draw() {
//     result.innerHTML = "";
//     result.forEach(element => {
//         const opt = document.createElement('div');
//         opt.className = "display_element";
//         opt.innerHTML = `<p><b>${element.city}</b> <font size="2">(${element.day}`;
//         result.appendChild(opt);
//     });
// }
