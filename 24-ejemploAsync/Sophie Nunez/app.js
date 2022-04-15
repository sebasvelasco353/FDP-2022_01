var url = 'https://swapi.dev/api/people';
let characters;
async function run(){
    let results = await fetch(url);
    characters = await results.json();
    characters.results.forEach(element => {
        console.log({
            name: element.name,
            height: element.height,
            hair: element.hair_color,
            weight: element.mass,
            skintone: element.skin_color,
           
    
        });
    });   
    display_data();
}
function display_data() {
    const display = document.getElementById("data");
    display.innerHTML = '';
    characters.results.forEach(element => {
        var opt = document.createElement('p');
        opt.className = "data_element"
        opt.innerHTML = `<tr><td><b>${element.name}</b></td> <td>${element.gender}</td> <td>${element.birth_year}</td> <td>${element.mass}</td> <td>${element.height}</td> <td>${element.hair_color}</td> <td>${element.eye_color}</td> <td>${element.skin_color}</td></tr>`;
        display.appendChild(opt);
    });
}
run();