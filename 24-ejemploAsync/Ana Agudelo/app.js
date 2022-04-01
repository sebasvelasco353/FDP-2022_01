var url = 'https://swapi.dev/api/people';

let people;

async function run(){
    let response = await fetch(url);
    people = await response.json();

    people.results.forEach(element => {
        console.log({
            nombre: element.name,
            altura: element.height,
            peso: element.mass,
            cabello: element.hair_color,
            piel: element.skin_color,
        });
    });
    
    display_data();
}

function display_data() {
    const display = document.getElementById("data");
    display.innerHTML = '';
    people.results.forEach(element => {
        var opt = document.createElement('p');
        opt.className = "data_element"
        opt.innerHTML = `<tr><td><b>${element.name}</b></td> <td>${element.gender}</td> <td>${element.birth_year}</td> <td>${element.mass}</td> <td>${element.height}</td> <td>${element.hair_color}</td> <td>${element.eye_color}</td> <td>${element.skin_color}</td></tr>`;
        display.appendChild(opt);
    });
}

run();