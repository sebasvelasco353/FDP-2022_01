var url = 'https://swapi.dev/api/people';
// TODO: get the html element
const datocharacter1 = document.getElementById("datocharacter1");
const datocharacter2 = document.getElementById("datocharacter2");
const datocharacter3 = document.getElementById("datocharacter3");


async function run(){
    let response = await fetch(url);
    let people = response.json();

    console.log(people.results);
    // TODO: use the results to display the author's information.
for (let i = 0; i < people.results.length; i++){
    console.log(people.results[i].name)
    datocharacter1 = datocharacter1.innerHTML + "<p>" + "${people.results[i].name}" + "<p>";
    datocharacter2 = datocharacter2.innerHTML + "<p>" + "${people.results[i].haircolor}" + "<p>";
    datocharacter3 = datocharacter3.innerHTML + "<p>" + "${people.results[i].height}" + "<p>";
}
}
run();