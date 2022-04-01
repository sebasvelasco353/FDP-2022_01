var url = 'https://swapi.dev/api/people';
// TODO: get the html element

async function run(){
    let response = await fetch(url);
    let people = await response.json();
    console.log(people.results);

    for (let i = 0; i < people.results.length ; i++) {
        console.log("Name:", people.results[i].name)
        console.log("Hair color:", people.results[i].hair_color)
        console.log("Eye color:",people.results[i].eye_color)
        name_starwars.innerHTML = name_starwars.innerHTML + `<p>` + `${people.results[i].name}` + `</p>`;
        hair_starwars.innerHTML = hair_starwars.innerHTML + `<p>` + `${people.results[i].hair_color}` + `</p>`;
        eye_starwars.innerHTML = eye_starwars.innerHTML + `<p>` + `${people.results[i].eye_color}` + `</p>`;
    }
    // TODO: use the results to display the author's information.
}
run();