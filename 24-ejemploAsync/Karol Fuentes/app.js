var url = 'https://swapi.dev/api/people';
let people;

async function run(){
    let response = await fetch(url);
    people = await response.json();

    people.results.forEach(element => {

        console.log({
            name: element.name,
            hair_color: element.hair_color,
            eye_color: element.eye_color,
            skin_color: element.skin_color,
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
        opt.innerHTML =  `<br><p><b>${element.name}</b></p> <br> Hair color: ${element.hair_color} <br> Eye color: ${element.eye_color} <br> Skin color: ${element.skin_color}`
        display.appendChild(opt);
    });

}

run();

