var url = 'https://swapi.dev/api/people';
const inyectar1= document.getElementById("c1");
const inyectar2= document.getElementById("c2");
const inyectar3= document.getElementById("c3");
// TODO: get the html element

async function run(){
    let response = await fetch(url);
    let people = await response.json();

    console.log(people.results);

    for (let i = 0; i <people.results.length ; i++) {
        console.log(people.results[i].name)
        inyectar1.innerHTML = inyectar1.innerHTML + `<p>` + `${people.results[i].name}` + `</p>`;
        inyectar2.innerHTML = inyectar2.innerHTML + `<p>` + `${people.results[i].hair_color}` + `</p>`;
        inyectar3.innerHTML = inyectar3.innerHTML + `<p>` + `${people.results[i].skin_color}` + `</p>`;
    }
    // TODO: use the results to display the author's information.
}
run();