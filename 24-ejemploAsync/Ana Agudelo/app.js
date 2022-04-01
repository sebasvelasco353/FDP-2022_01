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
        var opt = document.createElement('tr');
        opt.className = "data_element"
        opt.innerHTML = `<td><b>${element.name}</b></td> <td>${element.height}</td> <td>${element.mass}</td> <td>${element.hair_color}</td> <td>${element.skin_color}</td>`;
        display.appendChild(opt);
    });
}

run();