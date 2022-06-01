//Api
var url = 'https://swapi.dev/api/people';

let people;

async function run(){
    let response = await fetch(url);
    people = await response.json();

    people.results.forEach(element => {
        console.log({
            name: element.name
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
        opt.innerHTML = `<p><b><font size="3">${element.name}</font></b></p>`;
        display.appendChild(opt);
    });
}

run();