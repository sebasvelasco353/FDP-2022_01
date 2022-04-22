var url = 'https://swapi.dev/api/people';

let people;

async function run(){
    let response = await fetch(url);
    people = await response.json();

    people.results.forEach(element => {
        console.log({
            name: element.name,
            gender: element.gender,
            birth_year: element.birth_year,
        });
    });
    
    display_data();
}

function display_data() {
    const display = document.getElementById("display");
    display.innerHTML = '';
    people.results.forEach(element => {
        var opt = document.createElement('p');
        opt.className = "display_element"
        opt.innerHTML = `<p><b><font size="3">${element.name}</font></b></p> 
        <br>Gender: ${element.gender} 
        <br>Birth year: ${element.birth_year}`;
        display.appendChild(opt);
    });
}

run();