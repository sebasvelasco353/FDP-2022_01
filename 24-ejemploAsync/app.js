var url = 'https://swapi.dev/api/people';
// TODO: get the html element

function run(){
    let response = await fetch(url);
    let people = response.json();

    console.log(people.results);
    // TODO: use the results to display the author's information.
}
run();