var url = 'https://swapi.dev/api/people';
// TODO: get the html element

const dato1 = document.getElementById("dato1");
const dato2 = document.getElementById("dato2");
const dato3 = document.getElementById("dato3");

async function run(){
    let response = await fetch(url);
    let people = await response.json();

    console.log(people.results);
    // TODO: use the results to display the author's information.

    for(let i = 0; i < people.results.length; i++){
        console.log(people.results[i].name)
        dato1.innerHTML = dato1.innerHTML +  "<p>" + `${people.results[i].name}` + `</p>`;
        dato2.innerHTML = dato2.innerHTML +  "<p>" + `${people.results[i].height}` + `</p>`;
        dato3.innerHTML = dato3.innerHTML +  "<p>" + `${people.results[i].skin_color}` + `</p>`;
    }
}
run();