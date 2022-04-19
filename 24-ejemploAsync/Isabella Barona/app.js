var url = 'https://swapi.dev/api/people';
const loading = document.getElementById('loading');

let people;

async function run(){
    let response = await fetch(url);
    people = await response.json();

    people.results.forEach(element => {
        console.log({
            name: element.name,
            gender: element.gender,
            birth_year: element.birth_year,
            height: element.height,
            mass: element.mass,
            hair_color: element.hair_color,
            skin_color: element.skin_color,
            eye_color: element.eye_color,
        });
    });
    
    loading.style.display = 'none';
    display_data();
}

function display_data() {
    const display = document.getElementById("display");
    display.innerHTML = '';
    people.results.forEach(element => {
        var opt = document.createElement('p');
        opt.className = "display_element"
        opt.innerHTML = `<p><b><font size="4">${element.name}</font></b></p> <br>Gender: ${element.gender} <br>Birth year: ${element.birth_year} <br>Mass: ${element.mass} <br>Height: ${element.height} <br>Hair color: ${element.hair_color} <br>Eye color: ${element.eye_color} <br>Skin color: ${element.skin_color}`;
        display.appendChild(opt);
    });
}

run();