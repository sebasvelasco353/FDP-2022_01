var url = 'https://swapi.dev/api/people';
// TODO: get the html element

async function run(){
    let response = await fetch(url);
    let people = await response.json();
    for (let i = 0; i <people.results.length; i++){
        
        data.innerHTML = data.innerHTML + `<p>`+"Name: "+`${people.results [i].name}`+`</p>`;
        data.innerHTML = data.innerHTML + `<p>`+"Mass: "+`${people.results [i].mass}`+`</p>`;
        data.innerHTML = data.innerHTML + `<p>`+"Height: "+`${people.results [i].height}`+`</p>`;
        data.innerHTML = data.innerHTML + `<p>`+"Hair Color: "+`${people.results [i].hair_color}`+`</p>`;        
    }


    console.log(people.results);
    // TODO: use the results to display the author's information.
}
const data = document.getElementById ('caja_de_datos')
run();