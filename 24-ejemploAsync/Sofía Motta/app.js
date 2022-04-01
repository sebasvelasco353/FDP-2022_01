var url = 'https://swapi.dev/api/people';
// TODO: get the html element

const datos= document.getElementById("Inicio")

 async function run(){
    let response = await fetch(url);
    let people = await response.json();

    console.log(people.results);
    // TODO: use the results to display the author's informatio

    for (let i = 0; i < people.results.length ; i++) {
        console.log("Genero:", people.results[i].gender)
        console.log("Masa:", people.results[i].mass)
        console.log("Color de ojos:",people.results[i].eye_color)
        datos.innerHTML = datos.innerHTML + `<p>` + `${people.results[i].hair_color}` + `</p>`;
    }
}
run();