var url = 'https://swapi.dev/api/people';
// TODO: get the html element

const inyectardato1 = document.getElementById("character1");
const inyectardato2 = document.getElementById("character2");
const inyectardato3 = document.getElementById("character3");

async function run(){
    let response = await fetch(url);
    let people = response.json();

    console.log(people.results);
    // TODO: use the results to display the author's information.

    for (let i = 0; i < people.results.length; i++){
        console.log(people.results[i].name)
        inyectardato1.innerHTML = inyectardato1.innerHTML + "<p>" + "${people.results[i].name}" + "<p>";
        inyectardato2.innerHTML = inyectardato2.innerHTML + "<p>" + "${people.results[i].skincolor}" + "<p>";
        inyectardato2.innerHTML = inyectardato3.innerHTML + "<p>" + "${people.results[i].gender}" + "<p>";
    }
}

run();